import sys, itertools
from functools import lru_cache
sys.setrecursionlimit(10000)
# ---------- AVL (heights counted in nodes? we print edges+1 like the official figure: leaf = 1) ----------
class N:
    def __init__(s,k): s.k=k; s.l=None; s.r=None; s.h=1
def h(n): return 0 if n is None else n.h
def up(n): n.h=1+max(h(n.l),h(n.r))
log=[]
def rotR(y): x=y.l; y.l=x.r; x.r=y; up(y); up(x); return x
def rotL(x): y=x.r; x.r=y.l; y.l=x; up(x); up(y); return y
def fix(n,key):
    up(n); b=h(n.l)-h(n.r)
    if b>1:
        if h(n.l.l)>=h(n.l.r):
            log.append(('insert',key,'single right at',n.k)); return rotR(n)
        log.append(('insert',key,'double left-right at',n.k)); n.l=rotL(n.l); return rotR(n)
    if b<-1:
        if h(n.r.r)>=h(n.r.l):
            log.append(('insert',key,'single left at',n.k)); return rotL(n)
        log.append(('insert',key,'double right-left at',n.k)); n.r=rotR(n.r); return rotL(n)
    return n
def ins(n,k,key):
    if n is None: return N(k)
    if k<n.k: n.l=ins(n.l,k,key)
    else: n.r=ins(n.r,k,key)
    return fix(n,key)
def show(n):
    if n is None: return '.'
    if n.l is None and n.r is None: return '%d'%n.k
    return '%d[h%d](%s,%s)'%(n.k,n.h,show(n.l),show(n.r))
root=None
for k in [3,1,7,0,6,9,5,8,10,11]:
    n0=len(log); root=ins(root,k,k)
    print('after',k,':',show(root),'| rotations:',log[n0:])
# ---------- Q3b: full levels in AVL of height h (edges) ----------
@lru_cache(None)
def levelvecs(hh):
    # set of tuples: nodes count per level for AVL trees of height hh (edges); hh=-1 empty
    if hh==-1: return frozenset([()])
    out=set()
    for hl in (hh-1,hh-2):
        for hr in (hh-1,hh-2):
            if max(hl,hr)!=hh-1 or abs(hl-hr)>1 or min(hl,hr)<-1: continue
            for L in levelvecs(hl):
                for R in levelvecs(hr):
                    m=min(max(len(L),len(R)),6)
                    v=[1]+[ (L[i] if i<len(L) else 0)+(R[i] if i<len(R) else 0) for i in range(m)]
                    out.add(tuple(v[:7]))
    return frozenset(out)
print('--- Q3b: max L such that every AVL tree of height h has levels 0..L full ---')
for hh in range(0,10):
    best=None
    for v in levelvecs(hh):
        L=-1
        while L+1<len(v) and v[L+1]==2**(L+1): L+=1
        best=L if best is None else min(best,L)
    print('h=%2d  guaranteed full up to level %d | floor(h/2)=%d ceil(h/2)=%d | printed claim ceil: %s ; "i<=h/2": %s'%(
        hh,best,hh//2,-(-hh//2), 'TRUE' if best>=-(-hh//2) else 'FALSE', 'TRUE' if best>=hh//2 else 'FALSE'))
# ---------- Q1c: AVL insertion orders same tree ----------
def build(order):
    r=None
    for k in order: r=ins(r,k,k)
    return show(r)
a=build([4,2,5,1,3]); b=build([4,5,2,1,3]); print('Q1c',a,b,a==b)
# ---------- Q1e: double hashing with deletion ----------
def probe(x,i,m=13): return (x+((1+x)*i)%4)%m
class HT:
    def __init__(s,m=13): s.m=m; s.t=[None]*m   # None empty, 'D' deleted
    def ins(s,x):
        for i in range(s.m):
            p=probe(x,i)
            if s.t[p] is None or s.t[p]=='D': s.t[p]=x; return
    def dele(s,x):
        for i in range(s.m):
            p=probe(x,i)
            if s.t[p] is None: return
            if s.t[p]==x: s.t[p]='D'; return
t=HT(); ops=[('i',1),('i',14),('d',1),('d',14),('i',14)]
states=[]
for op,x in ops:
    (t.ins if op=='i' else t.dele)(x); states.append(list(t.t))
for s_ in states: print('  ',s_)
print('state after op3 == state after op5 ?',states[2]==states[4])
print('probe(1):',[probe(1,i) for i in range(6)],'probe(14):',[probe(14,i) for i in range(6)])
