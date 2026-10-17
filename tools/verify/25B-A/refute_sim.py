import itertools, random, math, sys
sys.setrecursionlimit(10000)
# ---- Q1a circular queue
N=10; q=[None]*(N+1); head=5; tail=5
def enq(x):
    global tail; q[tail]=x; tail=tail%N+1
def deq():
    global head; x=q[head]; q[head]=None; head=head%N+1; return x
for x in [6,12,4,53,8,17]: enq(x)
print('Q1a after ins head,tail',head,tail,q[1:])
def mashu():
    if head!=tail or q[head] is not None:
        # nonempty: count
        pass
size=6
def MASHU(n):
    if n>0:
        x=deq(); MASHU(n-1); enq(x)
MASHU(6); print('after MASHU',head,tail,q[1:])
# ---- recurrences
from fractions import Fraction
def T(n,memo={}):
    if n<1: return 1
    if n not in memo: memo[n]=T(n//4)+T(n//2)+n*n
    return memo[n]
print('1c ratios',[round(T(2**k)/4**k,4) for k in (5,10,20,30)], 'max',16/11)
# ---- Fibonacci sizes
Fs=[1,2]
for i in range(2,8): Fs.append(Fs[-1]+Fs[-2]+1)
print('F sizes',Fs)
print('3c ok', all(Fs[h]>=2**(h/2) for h in range(60) if h<len(Fs)))
def fs(h):
    a,b=1,2
    if h==0:return 1
    for _ in range(h-1): a,b=b,a+b+1
    return b
print(all(fs(h)>=2**(h/2) for h in range(200)))
# ---- d-heap parent/children formulas (0-indexed) exhaustive, distractors
def check(pf,ds=range(2,9),n=200):
    for d in ds:
        for i in range(1,n):
            if pf(i,d)!=(i-1)//d: return False
    return True
for name,f in [('a',lambda i,d:(i-1)//d),('b',lambda i,d:i//d),('c',lambda i,d:(i+1)//d),('d',lambda i,d:(i-1)//(d+1))]:
    print('2a',name,check(f))
print('child5,3',5*3+1,5*3+5,'parent23',22//5)
# ---- d-heap simulation incl. fillblank distractors
def heap_ins(vals,d,cond):
    Q=[]
    for x in vals:
        Q.append(x); i=len(Q)-1
        while i>0 and cond(Q,i,d):
            p=(i-1)//d; Q[p],Q[i]=Q[i],Q[p]; i=p
    return Q
def valid(Q,d): return all(Q[(i-1)//d]>=Q[i] for i in range(1,len(Q)))
conds={'a':lambda Q,i,d:Q[(i-1)//d]<Q[i],'b':lambda Q,i,d:Q[(i-1)//d]>Q[i],'c':lambda Q,i,d:Q[i//d]<Q[i],'d':lambda Q,i,d:Q[(i-1)//d]<Q[i-1]}
random.seed(1)
for k,c in conds.items():
    bad=0
    for t in range(500):
        d=random.randint(2,6); vals=random.sample(range(100),random.randint(2,30))
        try:
            Q=heap_ins(vals,d,c)
            if not valid(Q,d): bad+=1
        except Exception as e: bad+=1
    print('fillblank heapify_up',k,'invalid heaps',bad)
# Extract-max comparisons
def extract_cmp(n,d):
    Q=list(range(n,0,-1)); Q=heap_ins(list(range(1,n+1)),d,conds['a'])
    # extract-max, count comparisons in heapify_down
    Q[0]=Q[-1]; Q.pop(); i=0; cmp=0
    while True:
        m=i
        for k in range(1,d+1):
            c=d*i+k
            if c<len(Q):
                cmp+=1
                if Q[c]>Q[m]: m=c
        if m==i: break
        Q[i],Q[m]=Q[m],Q[i]; i=m
    return cmp
for d in (2,8,16): print('extract cmps d',d,extract_cmp(5000,d), 'h',math.log(5000,d))
# ---- hashing
m=10
h1=lambda k:k%10; h2=lambda k:1+k%7
tab={}
for k in (5,15,25):
    for i in range(m):
        s=(h1(k)+i*h2(k))%m
        if s not in tab: tab[s]=k;break
print('4a',dict(sorted(tab.items())))
print('95 probes',{(h1(95)+i*h2(95))%m for i in range(m)}, h2(95), 'free cells exist', 10-len(tab))
for h in range(0,10): print('step',h,len({(5+i*h)%10 for i in range(10)}),end='; ')
print()
print('coprime steps',[h for h in range(1,10) if math.gcd(h,10)==1])
# condition necessary & sufficient exhaustive
ok=True
for mm in range(2,40):
    for h in range(0,mm+1):
        cov=len({(i*h)%mm for i in range(mm)})==mm
        if cov!=(math.gcd(h,mm)==1): ok=False
print('gcd iff cover',ok)
for mm in (9,10):
    for nm,pred in [('h<m',lambda h,mm:h<mm),('m even',lambda h,mm:mm%2==0),('h odd',lambda h,mm:h%2==1)]:
        bad=[h for h in range(1,mm) if pred(h,mm) and len({(i*h)%mm for i in range(mm)})<mm]
        print('distractor',nm,'m',mm,'counterexamples',bad[:4])
# ---- 5a nearly complete: leaves vs height
for n in range(1,40):
    leaves=n-n//2; h=int(math.floor(math.log2(n)))
    if n in (7,8): print('5a',n,leaves,h)
byleaf={}
for n in range(1,300):
    byleaf.setdefault(n-n//2,set()).add(int(math.log2(n)))
print('5a leaves w/ >1 heights',[ (l,h) for l,h in byleaf.items() if len(h)>1][:6])
# ---- 5b chain
def depths_chain(chain, two_leaves=True):
    return chain
print('5b opt a: n=6+2=8 leaves depth 6; log2 8 =',math.log2(8))
print('5b step2: 5+1+2=',5+1+2)
