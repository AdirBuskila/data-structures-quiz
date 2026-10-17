# Verification harness for 22S-B (hash trace Q4b, AVL Q2a, preorder counterexample Q1b). ASCII output.
class N:
    def __init__(s,k,l=None,r=None): s.k=k; s.l=l; s.r=r
def h(n): return -1 if n is None else 1+max(h(n.l),h(n.r))
def bf(n): return h(n.l)-h(n.r)
log=[]
def rotR(y): x=y.l; y.l=x.r; x.r=y; return x
def rotL(x): y=x.r; x.r=y.l; y.l=x; return y
def fix(n):
    b=bf(n)
    if b>1:
        if bf(n.l)<0: log.append('LR at %d'%n.k); n.l=rotL(n.l)
        else: log.append('LL at %d'%n.k)
        return rotR(n)
    if b<-1:
        if bf(n.r)>0: log.append('RL at %d'%n.k); n.r=rotR(n.r)
        else: log.append('RR at %d'%n.k)
        return rotL(n)
    return n
def ins(n,k):
    if n is None: return N(k)
    if k<n.k: n.l=ins(n.l,k)
    else: n.r=ins(n.r,k)
    return fix(n)
def dele(n,k):
    if n.k==k:
        if not n.l: return n.r
        if not n.r: return n.l
        s=n.r
        while s.l: s=s.l
        n.k=s.k; n.r=dele(n.r,s.k); return fix(n)
    if k<n.k: n.l=dele(n.l,k)
    else: n.r=dele(n.r,k)
    return fix(n)
def pre(n): return [] if n is None else [n.k]+pre(n.l)+pre(n.r)
def ser(n): return None if n is None else (n.k,ser(n.l),ser(n.r))
def base():
    return N(8,N(3,None,N(6)),N(22,N(13,N(10),N(17)),N(25)))
t=ins(base(),15); print('after insert 15:',log,ser(t),'root',t.k)
log.clear(); t=dele(base(),3); print('after delete 3:',log,ser(t))
# Q1b: T1 AVL with preorder 5,2,1,6 inserted into empty T2
log.clear(); t2=None
for k in [5,2,1,6]: t2=ins(t2,k)
print('Q1b T2 insert 5,2,1,6 rotations:',log)
# Q1a: max-heap postorder
heap=[100,50,30,12,10,15]
def post(i):
    if i>=len(heap): return []
    return post(2*i+1)+post(2*i+2)+[heap[i]]
print('Q1a postorder',post(0))
# Q4b hashing
T=[None]*10
for x in [7,1,6,16,14,8,21,12]:
    i=0
    while True:
        p=(x%10+i*(x//7))%10
        if T[p] is None: T[p]=x; break
        i+=1
    print('insert',x,'probes',i+1,'slot',p)
print(T)
# Q4a recurrence check numerically
import math
def Tn(n): return 1 if n<=1 else 3*Tn(n//3)+n+1
for n in [3**8,3**10]: print(n,Tn(n)/(n*math.log(n,3)))
