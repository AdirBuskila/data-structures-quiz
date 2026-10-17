import functools,sys
sys.setrecursionlimit(10000)
@functools.lru_cache(None)
def T(n):
    return 1 if n<=1 else T(n//3)+T(n//2)+n
for n in [10**3,10**5,10**7,10**9]: print(n,T(n)/n)
# heap counterexample
a=[1,5,2,6,7,3,4]
def isheap(a): return all(a[(i-1)//2]<=a[i] for i in range(1,len(a)))
print(isheap(a))
b=a[:]
for i in range(len(b)):
    l,r=2*i+1,2*i+2
    if r<len(b) and b[l]>b[r]: b[l],b[r]=b[r],b[l]
print(b,isheap(b))
# max dist BST top two, brute force over shapes
import itertools
def bsts(keys):
    if not keys: yield None;return
    for i,k in enumerate(keys):
        for L in bsts(keys[:i]):
            for R in bsts(keys[i+1:]): yield (k,L,R)
def path(t,k,p=()):
    if t is None: return None
    if t[0]==k: return p+(k,)
    return path(t[1] if k<t[0] else t[2],k,p+(t[0],))
def height(t): return 0 if t is None else 1+max(height(t[1]),height(t[2]))
def avl(t):
    if t is None: return True
    return abs(height(t[1])-height(t[2]))<=1 and avl(t[1]) and avl(t[2])
def dist(t,a,b):
    pa,pb=path(t,a),path(t,b)
    c=0
    while c<min(len(pa),len(pb)) and pa[c]==pb[c]: c+=1
    return len(pa)-c+len(pb)-c
for n in range(2,10):
    ms=[];ma=[]
    for t in bsts(list(range(n))):
        d=dist(t,n-1,n-2); ms.append(d)
        if avl(t): ma.append(d)
    print(n,max(ms),max(ma))
