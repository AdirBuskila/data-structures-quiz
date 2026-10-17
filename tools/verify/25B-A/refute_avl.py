import sys
class N:
    def __init__(s,l=None,r=None): s.l=l;s.r=r;s.h=0;upd(s)
def H(n): return -1 if n is None else n.h
def upd(n): n.h=1+max(H(n.l),H(n.r))
rot=[0]
def rotR(y):
    x=y.l; y.l=x.r; x.r=y; upd(y); upd(x); return x
def rotL(x):
    y=x.r; x.r=y.l; y.l=x; upd(x); upd(y); return y
def bal(n): return H(n.l)-H(n.r)
def rebalance(n):
    upd(n); b=bal(n)
    if b>1:
        if bal(n.l)<0: n.l=rotL(n.l)
        rot[0]+=1; return rotR(n)
    if b<-1:
        if bal(n.r)>0: n.r=rotR(n.r)
        rot[0]+=1; return rotL(n)
    return n
def delmin(n):
    if n.l is None: return n.r
    n.l=delmin(n.l); return rebalance(n)
def fib(i,f1side,order):
    if i==0: return N()
    if i==1: return N(N(),None) if f1side=='L' else N(None,N())
    a,b=fib(i-2,f1side,order),fib(i-1,f1side,order)
    return N(a,b) if order=='small-left' else N(b,a)
def isavl(n):
    if n is None: return True
    return abs(bal(n))<=1 and isavl(n.l) and isavl(n.r)
def size(n): return 0 if n is None else 1+size(n.l)+size(n.r)
for order in ('small-left','big-left'):
  for side in 'LR':
    res=[]
    for i in range(2,9):
        t=fib(i,side,order); assert isavl(t)
        rot[0]=0; t=delmin(t); assert isavl(t)
        res.append((i,size(t)+1,rot[0]))
    print(order,side,res)
