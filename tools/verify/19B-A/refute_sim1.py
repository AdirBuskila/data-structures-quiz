import sys, itertools, heapq, math, random
sys.stdout.reconfigure(encoding='utf8')

# ---------- union-by-size buildability ----------
# tree = list of child subtrees (each a tree); size
def size(t): return 1 + sum(size(c) for c in t)
def buildable(t):
    # root starts alone; attach children subtrees in increasing size order
    cur = 1
    for c in sorted(t, key=size):
        if not buildable(c): return False
        if cur < size(c): return False   # small into large: root tree must be >= child
        cur += size(c)
    return True
leaf = []
def N(*ch): return list(ch)
# 19B-A forest
t3_2 = N(N())          # 2 with child 3
t12 = N(t3_2, N(), N())  # 12: children 2(3),7,1
t9 = N(N())            # 9 with child 11
t4 = N(t9, N(), t12)
t14 = N(N())           # 14 with child 6
t5 = N(t14, N())
print("19B-A tree4 size", size(t4), "buildable", buildable(t4))
print("19B-A tree5 size", size(t5), "buildable", buildable(t5))
# height table: min nodes for height h under union-by-size
def minnodes(h):
    return 2**h
print("min nodes for height 4:", minnodes(4), "available for it in 14 with trees of height 0 and 1:", 14-1-2)

# exhaustive check: can heights {0,1,4} total 14 arise? Max height with n nodes under union by size = floor(log2 n)
def maxh(n): return int(math.floor(math.log2(n)))
print("max height reachable with 11 nodes:", maxh(11), "with 14:", maxh(14))
# brute: DP over reachable (multiset of heights/sizes) forests - compute set of (size,height) for single trees
reach = {(1,0)}
changed = True
while changed:
    changed = False
    for (s1,h1) in list(reach):
        for (s2,h2) in list(reach):
            if s1+s2 > 14: continue
            # small into large (tie: either direction)
            opts = []
            if s1 >= s2: opts.append((s1+s2, max(h1, h2+1)))
            if s2 >= s1: opts.append((s1+s2, max(h2, h1+1)))
            for o in opts:
                if o not in reach: reach.add(o); changed = True
print("reachable (size,height) single trees <=14 with height 4:", sorted(x for x in reach if x[1]==4))
print("heights reachable for size 11:", sorted(h for s,h in reach if s==11))

# ---------- 19B-A forest: min finds ----------
parent = {9:4,8:4,12:4,11:9,2:12,7:12,1:12,3:2,14:5,10:5,6:14}
def depth(x):
    d=0
    while x in parent: x=parent[x]; d+=1
    return d
print("depths", {x:depth(x) for x in range(1,15)})
def find(x):
    path=[]
    while x in parent: path.append(x); x=parent[x]
    for p in path: parent[p]=x
best=None
nodes=list(range(1,15))
for k in range(0,8):
    ok=False
    for seq in itertools.combinations(nodes,k):   # order irrelevant mostly; try all orders for small k
        for perm in itertools.permutations(seq):
            save=dict(parent)
            for x in perm: find(x)
            h=max(depth(x) for x in nodes)
            parent.clear(); parent.update(save)
            if h<=1: ok=True; ex=perm; break
        if ok: break
    if ok:
        print("min k =",k,"example",ex); break

# ---------- hashing offsets ----------
off = [(i*i+5*i)%13 for i in range(13)]
print("T2 offsets i=0..12", off)
print("distinct within first 7 probes", sorted(set(off[:7])))
# adversarial: new key hash 0, occupied cells = offsets in first 7 probes (<=6 keys needed?)
occ = set(off[:7]); print("cells to occupy", sorted(occ), len(occ))
# T1 linear: any 6 keys, new key: first empty within 7 probes always
ok=True
for h0 in range(13):
    for occ6 in itertools.combinations(range(13),6):
        o=set(occ6)
        if not any(((h0+i)%13) not in o for i in range(7)): ok=False
print("T1 any 6 occupied -> free within 7 probes:", ok)
# T2 : exists 6-set with all first-7 probes blocked for some h0?
bad=False
for occ6 in itertools.combinations(range(13),6):
    o=set(occ6)
    for h0 in range(13):
        if all(((h0+off[i])%13) in o for i in range(7)): bad=True
print("T2 exists blocking 6-set:", bad)
# but realisability by inserting 6 keys: keys with hash = each occupied cell (no collisions)
# Q: does the exact worry 'exists possibility' hold? e.g. insert hash 0,6,1,11,10 and one more

# 19B-B Q6
F=lambda i:i*i
def ins(tab,x):
    for i in range(7):
        j=(x+F(i))%7
        if tab[j] is None: tab[j]=x; return i
    return None
for order in itertools.permutations([14,8,1,21,15]):
    tab=[None]*7
    for x in order: ins(tab,x)
    if tab==[14,8,1,None,21,15,None]: print("F=i^2 works for order",order); break
tab=[14,8,1,None,21,15,None]
# delete 15 -> tombstone; search 22
tab2=list(tab); tab2[5]='DEL'
cnt=0
for i in range(7):
    j=(22+F(i))%7; cnt+=1
    if tab2[j] is None: break
    if tab2[j]==22: break
print("search 22 with tombstone probes:", cnt)
tab3=list(tab); tab3[5]=None; cnt=0
for i in range(7):
    j=(22+F(i))%7; cnt+=1
    if tab3[j] is None or tab3[j]==22: break
print("search 22 with plain empty probes:", cnt)
# linear F(i)=i alternative
Fl=lambda i:i
for order in itertools.permutations([14,8,1,21,15]):
    t=[None]*7
    for x in order:
        for i in range(7):
            j=(x+Fl(i))%7
            if t[j] is None: t[j]=x;break
    if t==[14,8,1,None,21,15,None]: print("F=i works");break
else: print("F=i does NOT produce the table in any order")

# ---------- recurrence ----------
from functools import lru_cache
import sys as _s
_s.setrecursionlimit(100000)
@lru_cache(None)
def T(n):
    if n<=1: return 1
    return 2*T(2*n//5)+T(n//5)+n
for n in [10**3,10**4,10**5,10**6,10**7,10**8]:
    print(n, T(n)/n, T(n)/(n*math.log2(n)), T(n)/n**0.75)

# ---------- AVL height vs 2log(h+1) on path-shaped BST ----------
# min AVL height for n nodes = floor(log2 n); max = from Fibonacci recursion
def maxavl(n):
    # max height of AVL with n nodes: minimal nodes N(h)=N(h-1)+N(h-2)+1, N(0)=1,N(1)=2
    N=[1,2]
    h=0
    while True:
        if h>=len(N): N.append(N[-1]+N[-2]+1)
        if N[h]>n: return h-1
        h+=1
for h in range(0,2000):
    n=h+1
    worst=maxavl(n)
    lim=2*math.log2(h+1)
    if not worst<lim:
        print("fails at h=",h,"worst AVL height",worst,"2log",lim)
print("Q3a path check done")
