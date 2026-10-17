import random, math, itertools, sys
sys.setrecursionlimit(5000)
# Q1a array stack
S=[None]*11; top=0
def push(x):
    global top; top+=1; S[top]=x
def pop():
    global top; x=S[top]; S[top]=None; top-=1; return x
def TOP(): return S[top]
def empty(): return top==0
for x in [7,10,2,8,45,13]: push(x)
print('top after',top)
calls=[0]
def MYSTERY():
    calls[0]+=1
    if not empty():
        x=pop(); MYSTERY()
        if empty(): push(x)
        else:
            x=TOP(); push(x)
MYSTERY(); print('after',S[1:],'top',top,'calls',calls[0])
# Q1c: numerical T(n)=4T(n/2)+n^2 log n
def T(n,memo={1:1}):
    if n not in memo: memo[n]=4*T(n//2)+n*n*math.log2(n)
    return memo[n]
print('ratios /n^2 log n',[T(2**k)/(4**k*k) for k in (10,20,40)],' /(n^2 log^2 n)',[T(2**k)/(4**k*k*k) for k in (10,20,40,80)])
print('f/n^2 = log n ; log n/n^eps ->',[math.log2(2**k)/(2**k)**0.1 for k in (10,100,1000)])
# Q2a: leaves = n distinct outputs for k-th selection
for n in range(1,6):
    for k in range(1,n+1):
        outs={p.index(sorted(p)[k-1]) for p in itertools.permutations(range(n))}
        assert len(outs)==n
    pos={p.index(sorted(p)[k-1]) for p in itertools.permutations(range(n)) for k in [n]}
print('Q2a leaves=n ok; min height of 8-leaf tree', math.ceil(math.log2(8)))
# Q2b: any position can be among 5 smallest
n=7; ok=True
for pos in range(n):
    found=False
    for p in itertools.permutations(range(n)):
        pass
    # changing value at pos changes 5-smallest set
    base=list(range(n)); 
    a=base[:]; a[pos]=-1 ; b=base[:]; b[pos]=100
    sa=sorted(a)[:5]; sb=sorted(b)[:5]
    ok&= sa!=sb
print('Q2b every position matters',ok)
print('min position count n=6:',len({p.index(min(p)) for p in itertools.permutations(range(6))}))
# Q3: heap with index map; removal variants
class H:
    def __init__(s,fix): s.a=[]; s.fix=fix
def up(a,i):
    while i>0 and a[(i-1)//2]>a[i]: a[(i-1)//2],a[i]=a[i],a[(i-1)//2]; i=(i-1)//2
def down(a,i):
    n=len(a)
    while True:
        m=i
        for c in (2*i+1,2*i+2):
            if c<n and a[c]<a[m]: m=c
        if m==i: break
        a[i],a[m]=a[m],a[i]; i=m
def valid(a): return all(a[(i-1)//2]<=a[i] for i in range(1,len(a)))
def build(a):
    a=a[:]
    for i in range(len(a)//2-1,-1,-1): down(a,i)
    return a
res={'both':0,'down':0,'up':0,'shift':0}; tot=0
for p in itertools.permutations(range(7)):
    a=build(list(p)); 
    for i in range(7):
        tot+=1
        for mode in res:
            b=a[:]
            if mode=='shift': del b[i]
            else:
                b[i]=b[-1]; b.pop()
                if i<len(b):
                    if mode in('both','up'): up(b,i)
                    if mode in('both','down'): down(b,i)
            if not valid(b): res[mode]+=1
print('Q3 invalid removals out of',tot,res)
# max-heap alternative: min lives in a leaf
# Q3 init cost claim: build-heap linear
# Q4 pruned in-order
class Nd:
    def __init__(s,k,l=None,r=None): s.k=k;s.l=l;s.r=r
def build_bst(keys):
    if not keys: return None
    m=len(keys)//2; return Nd(keys[m],build_bst(keys[:m]),build_bst(keys[m+1:]))
cnt=[0]
def f(n,a,variant='ok'):
    if n is None: return []
    cnt[0]+=1
    if n.k<a:
        return {'ok':lambda:f(n.r,a,variant),'left':lambda:f(n.l,a,variant),'self':lambda:[n.k],'empty':lambda:[]}[ 'ok' if variant in('ok','rev') else variant]()
    L=f(n.l,a,variant); R=f(n.r,a,variant)
    return (R+[n.k]+L) if variant=='rev' else (L+[n.k]+R)
t=build_bst([2,4,6,8,10,12,14]); print('root',t.k,t.l.k,t.r.k)
for v in ('ok','left','self','empty','rev'):
    cnt[0]=0; print(v,f(t,5,v),cnt[0])
# equality case
print('a=8 (in tree):',f(t,8))
for k in (10,):
    n=2**k-1; t=build_bst(list(range(n)))
    cnt[0]=0; f(t,10**9); big=cnt[0]
    cnt[0]=0; f(t,-1); small=cnt[0]
    print('1023 nodes: a>all',big,' a<all',small)
# Q5
print('5a merge ints 2n',2*8,'internal',16//2)
# 5b even trees
# opt a with 5 levels below root: levels 1..5 two nodes each
n=1+2*5; print('5b n',n)
def height_diff(levels): return (levels-1)-0
print('root subtree heights diff',height_diff(5))
# 5c
print('c',3+10/math.log2(10))
print('ratio',[(3*math.log2(n)*n+10*n*math.log10(n))/n**1.2 for n in (1e3,1e9,1e30,1e100,1e300)])
