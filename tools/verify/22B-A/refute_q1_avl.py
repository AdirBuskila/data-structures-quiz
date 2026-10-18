import itertools, sys
from functools import lru_cache
sys.setrecursionlimit(10000)

def H(t): return -1 if t is None else t[3]
def mk(k,l,r): return (k,l,r,1+max(H(l),H(r)))
def bal(t):
    k,l,r,_=t
    b=H(l)-H(r)
    if b>1:
        if H(l[1])<H(l[2]):
            lk,ll,lr,_=l; m=lr
            l=mk(m[0],mk(lk,ll,m[1]),m[2]) if False else None
            # left-right double
            lr_k,lr_l,lr_r,_=lr
            return mk(lr_k, mk(lk,ll,lr_l), mk(k,lr_r,r))
        lk,ll,lr,_=l
        return mk(lk,ll,mk(k,lr,r))
    if b<-1:
        if H(r[2])<H(r[1]):
            rk,rl,rr,_=r
            rl_k,rl_l,rl_r,_=rl
            return mk(rl_k, mk(k,l,rl_l), mk(rk,rl_r,rr))
        rk,rl,rr,_=r
        return mk(rk,mk(k,l,rl),rr)
    return mk(k,l,r)
def ins(t,x):
    if t is None: return mk(x,None,None)
    k,l,r,_=t
    if x<k: return bal(mk(k,ins(l,x),r))
    return bal(mk(k,l,ins(r,x)))
def popmin(t):
    k,l,r,_=t
    if l is None: return k,r
    m,nl=popmin(l); return m,bal(mk(k,nl,r))
def popmax(t):
    k,l,r,_=t
    if r is None: return k,l
    m,nr=popmax(r); return m,bal(mk(k,l,nr))
def dele(t,x,mode):
    if t is None: return None
    k,l,r,_=t
    if x<k: return bal(mk(k,dele(l,x,mode),r))
    if x>k: return bal(mk(k,l,dele(r,x,mode)))
    if l is None: return r
    if r is None: return l
    if mode=='succ':
        m,nr=popmin(r); return bal(mk(m,l,nr))
    m,nl=popmax(l); return bal(mk(m,nl,r))

@lru_cache(None)
def shapes(n,h):
    # AVL shapes with n nodes and height h (None = empty h=-1)
    if n==0: return [None] if h==-1 else []
    out=[]
    for ln in range(n):
        rn=n-1-ln
        for hl in (h-1,h-2):
            for hr in (h-1,h-2):
                if max(hl,hr)!=h-1 or abs(hl-hr)>1: continue
                for L in shapes(ln,hl):
                    for R in shapes(rn,hr):
                        out.append((L,R))
    return out
def fill(s,it):
    if s is None: return None
    L=fill(s[0],it); k=next(it); R=fill(s[1],it)
    return mk(k,L,R)
def build(n):
    res=[]
    for h in range(-1,n):
        for s in shapes(n,h):
            res.append(fill(s,iter(range(1,n+1))))
    return res
def condb(t,n):
    h=H(t)
    return all(H(ins(t,g+0.5))==h for g in range(0,n+1))
def condc(t,keys,mode):
    h=H(t)
    for a in keys:
        for b in keys:
            if a==b: continue
            t2=dele(dele(t,a,mode),b,mode)
            if H(t2)==h-1: return False
    return True
def show(t):
    if t is None: return '.'
    return '%d(%s,%s)'%(t[0],show(t[1]),show(t[2]))
def mkt(s,k=None): pass
if __name__=='__main__':
    n=11
    ts=build(n)
    print('AVL trees with 11 nodes:',len(ts))
    for mode in ('succ','pred'):
        good=[t for t in ts if condb(t,n) and condc(t,range(1,n+1),mode)]
        print(mode,'valid',len(good))
        for g in good: print('  ',show(g),'h=',H(g))
    # official trees
    A=mk(6,mk(3,mk(2,mk(1,None,None),None),mk(4,None,mk(5,None,None))),mk(9,mk(8,mk(7,None,None),None),mk(10,None,mk(11,None,None))))
    B=mk(6,mk(4,mk(2,mk(1,None,None),mk(3,None,None)),mk(5,None,None)),mk(8,mk(7,None,None),mk(10,mk(9,None,None),mk(11,None,None))))
    for nm,t in (('left',A),('right',B)):
        for mode in ('succ','pred'):
            print(nm,mode,'h',H(t),'b',condb(t,n),'c',condc(t,range(1,n+1),mode))
