# Verification harness for 22S-A: Q2a tree (AVL, 12 nodes, requirements b/c under both readings), Q1b median counterexample,
# Q2b leaf count, Q3b example, Q4a, Q4b cuckoo example. ASCII output.
import itertools, math
class N:
    def __init__(s,k,l=None,r=None): s.k=k; s.l=l; s.r=r
def h(n): return -1 if n is None else 1+max(h(n.l),h(n.r))
def bf(n): return h(n.l)-h(n.r)
def rotR(y): x=y.l; y.l=x.r; x.r=y; return x
def rotL(x): y=x.r; x.r=y.l; y.l=x; return y
def fix(n):
    b=bf(n)
    if b>1:
        if bf(n.l)<0: n.l=rotL(n.l)
        return rotR(n)
    if b<-1:
        if bf(n.r)>0: n.r=rotR(n.r)
        return rotL(n)
    return n
def ins(n,k):
    if n is None: return N(k)
    if k<n.k: n.l=ins(n.l,k)
    else: n.r=ins(n.r,k)
    return fix(n)
def dele(n,k):
    if n is None: return None
    if n.k==k:
        if not n.l: return n.r
        if not n.r: return n.l
        s=n.r
        while s.l: s=s.l
        n.k=s.k; n.r=dele(n.r,s.k); return fix(n)
    if k<n.k: n.l=dele(n.l,k)
    else: n.r=dele(n.r,k)
    return fix(n)
def isavl(n):
    return n is None or (abs(bf(n))<=1 and isavl(n.l) and isavl(n.r))
def isbst(n,lo=-1e9,hi=1e9):
    return n is None or (lo<n.k<hi and isbst(n.l,lo,n.k) and isbst(n.r,n.k,hi))
def cnt(n): return 0 if n is None else 1+cnt(n.l)+cnt(n.r)
def mk(): # official Q2a tree
    return N(10,N(5,N(3,N(2,N(1)),N(4)),N(6,None,N(7))),N(15,N(11),N(17,None,N(18))))
def keys(n): return [] if n is None else keys(n.l)+[n.k]+keys(n.r)
t=mk(); print('Q2a: nodes',cnt(t),'bst',isbst(t),'avl',isavl(t),'height',h(t))
H0=h(t)
dec=[k for k in keys(t) if h(dele(mk(),k))==H0-1]
print('deletions that reduce height:',dec,'| deletions that do not:',[k for k in keys(t) if k not in dec])
# insertion of any 2 new keys (reading: no pair raises height by 1)
cands=[x/2 for x in range(0,42)]
cands=[c for c in cands if c not in keys(t)]
raise_pairs=[]
for a in cands:
    for b in cands:
        if a==b: continue
        t2=ins(ins(mk(),a),b)
        if h(t2)==H0+1: raise_pairs.append((a,b))
print('pairs (ordered) raising height by 1:',len(raise_pairs),raise_pairs[:3])
raise_single=[a for a in cands if h(ins(mk(),a))==H0+1]
print('single insertions raising height:',raise_single)
# Q1b
t=N(10,N(5,N(3,N(2),N(4)),N(6)),N(15,N(11),N(17)))
ks=sorted(keys(t)); print('Q1b nodes',cnt(t),'avl',isavl(t),'median',ks[len(ks)//2],'root',t.k,'left',t.l.k,'right',t.r.k)
# Q2b
for hh in range(5): print('perfect h',hh,'nodes',2**(hh+1)-1,'leaves',2**hh,'(n+1)/2',(2**(hh+1))//2)
# Q3a example: x=12 rank
A=[10,8,25,12,5,4,15,32,14,45,11]; print('Q3a rank of 12 (1-based among sorted):',sorted(A).index(12)+1,'partition pos expected 6')
# Q3b example: k=5 closest to 12
print('Q3b 5 closest to 12:',sorted(sorted(A),key=lambda v:abs(v-12))[:5] if False else sorted([v for v in A if v!=12],key=lambda v:abs(v-12))[:5])
# Q4a recurrence 4T(n/4)+n
def T4(n): return 1 if n<=1 else 4*T4(n//4)+n
for n in [4**6,4**8]: print('Q4a ratio',T4(n)/(n*math.log(n,4)))
# Q4b cuckoo: official order 11,12,32,6,7 with h1=x mod 5, h2=floor(x/5) mod 5, table size 5
def cuckoo(seq,limit=50):
    T1=[None]*5; T2=[None]*5; coll=0
    for x in seq:
        cur=x; side=1
        for step in range(limit):
            if side==1:
                p=cur%5
                old=T1[p]; T1[p]=cur
            else:
                p=(cur//5)%5
                old=T2[p]; T2[p]=cur
            if old is None: break
            coll+=1; cur=old; side=3-side
        else:
            return None,coll,'cycle at %d'%x
    return (T1,T2),coll,'ok'
print('Q4b cuckoo 11,12,32,6,7:',cuckoo([11,12,32,6,7]))
for pre in range(1,6):
    print(' collisions after first',pre,'inserts:',cuckoo([11,12,32,6,7][:pre])[1])
