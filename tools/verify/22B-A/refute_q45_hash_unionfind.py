import itertools
# Q4b hashing
def h(x,i): return ((x%5)+i*(1+x%3))%5
def collisions(seq):
    tab=[None]*5; tot=0
    for x in seq:
        for i in range(5):
            p=h(x,i)
            if tab[p] is None: tab[p]=x; break
            tot+=1
    return tot
best=0; ex=[]
for seq in itertools.permutations(range(0,60),3) if False else itertools.product(range(0,30),repeat=3):
    if len(set(seq))<3: continue
    c=collisions(seq)
    if c>best: best=c; ex=[seq]
    elif c==best and len(ex)<5: ex.append(seq)
print('max collisions for 3 inserts',best,ex[:5])
print('15,30,45 ->',collisions([15,30,45]), [h(30,0),h(30,1),h(45,0),h(45,1),h(45,2)])
# probe sequences are permutations?
print('all probe seqs permutations:',all(sorted(h(x,i) for i in range(5))==list(range(5)) for x in range(60)))

# Q5 union-find
def maxh(n, rule):
    # explore all forests of union operations; state = tuple of trees (frozenset canonical by shape)
    # tree shape: (size, height). Only size/height matter for union by size; for naive link we can choose any root as child.
    from functools import lru_cache
    seen=set(); start=tuple(sorted([(1,0)]*n))
    stack=[start]; best=0
    while stack:
        s=stack.pop()
        if s in seen: continue
        seen.add(s)
        best=max(best,max(t[1] for t in s))
        for i in range(len(s)):
            for j in range(len(s)):
                if i==j: continue
                a=s[i]; b=s[j]  # attach b under a
                if rule=='size' and (b[0]>a[0]): continue
                if rule=='rank' and (b[1]>a[1]): continue
                new=(a[0]+b[0], max(a[1], b[1]+1))
                r=[s[k] for k in range(len(s)) if k not in (i,j)]+[new]
                stack.append(tuple(sorted(r)))
    return best
# for naive, height of attaching root under root: new height = max(a.h, b.h+1) (a is new root)
for rule in ('naive','size','rank'):
    print(rule,'max height with 7 elements:',maxh(7,rule), ' with 8:',maxh(8,rule))
# can height 3 be reached with exactly one set of 7 elems?
def reach(n,rule,target):
    seen=set(); stack=[tuple(sorted([(1,0)]*n))]
    while stack:
        s=stack.pop()
        if s in seen: continue
        seen.add(s)
        if len(s)==1 and s[0][1]==target: return True
        for i in range(len(s)):
            for j in range(len(s)):
                if i==j: continue
                a=s[i]; b=s[j]
                if rule=='size' and b[0]>a[0]: continue
                if rule=='rank' and b[1]>a[1]: continue
                new=(a[0]+b[0],max(a[1],b[1]+1))
                r=[s[k] for k in range(len(s)) if k not in (i,j)]+[new]
                stack.append(tuple(sorted(r)))
    return False
for rule in ('naive','size','rank'):
    print(rule,'single 7-set height 3 reachable:',reach(7,rule,3))
