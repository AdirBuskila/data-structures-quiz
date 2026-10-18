import sys, itertools
sys.setrecursionlimit(10000)
# ---- Q3a Fibonacci AVL, delete min, count rotations ----
class N:
    __slots__=('l','r','h')
    def __init__(s,l=None,r=None): s.l=l; s.r=r; s.h=0; up(s)
def H(n): return -1 if n is None else n.h
def up(n): n.h=1+max(H(n.l),H(n.r))
def fib(i,child_side):
    if i==0: return N()
    if i==1:
        c=N()
        return N(c,None) if child_side=='L' else N(None,c)
    return N(fib(i-2,child_side),fib(i-1,child_side))   # left F_{i-2}, right F_{i-1}
def size(n): return 0 if n is None else 1+size(n.l)+size(n.r)
def isavl(n):
    if n is None: return True
    return abs(H(n.l)-H(n.r))<=1 and isavl(n.l) and isavl(n.r)
rots=[]  # list of ('single'|'double') events
def rotR(y):
    x=y.l; y.l=x.r; x.r=y; up(y); up(x); return x
def rotL(x):
    y=x.r; x.r=y.l; y.l=x; up(x); up(y); return y
def fix(n):
    up(n); b=H(n.l)-H(n.r)
    if b>1:
        if H(n.l.l)<H(n.l.r):
            n.l=rotL(n.l); r=rotR(n); rots.append('double'); return r
        rots.append('single'); return rotR(n)
    if b<-1:
        if H(n.r.r)<H(n.r.l):
            n.r=rotR(n.r); r=rotL(n); rots.append('double'); return r
        rots.append('single'); return rotL(n)
    return n
def delmin(n):
    if n.l is None: return n.r
    n.l=delmin(n.l); return fix(n)
for side in 'LR':
    for i in (2,3,4,10):
        t=fib(i,side); assert isavl(t)
        rots.clear()
        h0=H(t)
        t=delmin(t)
        print('F%d child %s: size %d h %d -> rotations(events) %d %s  new h %d avl %s'%(i,side,size(fib(i,side)),h0,len(rots),rots,H(t),isavl(t)))
# leftmost path length of F10
n=fib(10,'L'); d=0
while n.l: n=n.l; d+=1
print('leftmost path edges F10:',d)

# ---- Q2: MM comparisons ----
cnt=0
def MM(A,i,j):
    global cnt
    if j==i+1:
        cnt+=1
        return (A[j],A[i]) if A[i]>A[j] else (A[i],A[j])
    k=(i+j)//2
    m1,M1=MM(A,i,k); m2,M2=MM(A,k+1,j)
    cnt+=2
    return (min(m1,m2),max(M1,M2))
print('MM(A,1,4) (1-indexed array):',MM([None,3,2,1,9],1,4))
for n in (2,4,8,16,32):
    cnt=0; MM([None]+list(range(n,0,-1)),1,n); print('n',n,'comparisons',cnt,'3n/2-2 =',3*n//2-2)
# non power of two
for n in (3,5,6,7):
    cnt=0
    try:
        MM([None]+list(range(n,0,-1)),1,n); print('n',n,'ok',cnt)
    except RecursionError:
        print('n',n,'infinite recursion')
# ---- Q1e double hashing: gcd(9,20) ----
from math import gcd
print('gcd(9,20)',gcd(9,20),'probe perm:',sorted((5+i*9)%20 for i in range(20))==list(range(20)))
# ---- Q1b heap deletemax worst/ Omega(log n): there exists heap with sift-down all the way
def delmax_steps(a):
    a=a[:]; n=len(a); a[0]=a[n-1]; a.pop(); n-=1; i=0; steps=0
    while True:
        l=2*i+1; r=l+1; m=i
        if l<n and a[l]>a[m]: m=l
        if r<n and a[r]>a[m]: m=r
        if m==i: break
        a[i],a[m]=a[m],a[i]; i=m; steps+=1
    return steps
import math
for n in (7,15,31,1023):
    print('desc sorted n',n,'swaps',delmax_steps(list(range(n,0,-1))),'floor(log2(n))',int(math.log2(n)))
# ---- Q1f min-heap increase A[0] ----
A=[1,5,6]; A[0]=3; print('A=[3,5,6] still min-heap:',all(A[(i-1)//2]<=A[i] for i in range(1,3)))
