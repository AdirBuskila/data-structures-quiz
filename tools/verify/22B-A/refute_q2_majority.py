import itertools
from collections import Counter

def truth(A):
    n=len(A); c=Counter(A)
    for x in c:
        if 2*c[x]>n:
            for y in c:
                if y!=x and 3*c[y]>n: return True
    return False

def official(A, i1, i2, i3, base):
    # as printed: X=A[n/2], Y=A[n/3], Z=A[2n/3]; C1=cnt X; false if C1<=n/2; C1,C2 for Y,Z; false if C1<=n/3 and C2<=n/3 (printed text uses C1 reused) -> as printed with C1=cnt(X) reused? treat as printed: C1=cnt(Y), C2=cnt(Z)
    n=len(A); S=sorted(A)
    def at(i):
        j=i-1 if base==1 else i
        return S[min(max(j,0),n-1)]
    X=at(i1(n)); Y=at(i2(n)); Z=at(i3(n))
    cx=S.count(X)
    if 2*cx<=n: return False
    c1=S.count(Y); c2=S.count(Z)
    return not (3*c1<=n and 3*c2<=n)

def fixed(A, i2, i3, base):
    n=len(A); S=sorted(A)
    def at(i):
        j=i-1 if base==1 else i
        return S[min(max(j,0),n-1)]
    X=S[n//2]
    cx=S.count(X)
    if 2*cx<=n: return False
    for W in {at(i2(n)),at(i3(n))}:
        if W!=X and 3*S.count(W)>n: return True
    return False

fl=lambda n: n//3
fl2=lambda n: (2*n)//3
ce=lambda n: -(-n//3)
ce2=lambda n: -(-2*n//3)
mid=lambda n:n//2
bad_off={}; bad_fix={}
for n in range(1,10):
    for A in itertools.product(range(4),repeat=n):
        t=truth(A)
        for nm,(a,b) in {'floor':(fl,fl2),'ceil':(ce,ce2)}.items():
            for base in (0,1):
                o=official(A,mid,a,b,base)
                if o!=t: bad_off.setdefault((nm,base),[]).append((A,t,o))
                f=fixed(A,a,b,base)
                if f!=t: bad_fix.setdefault((nm,base),[]).append((A,t,f))
for k,v in bad_off.items(): print('official-as-printed',k,len(v),'e.g.',v[0])
for k in [(a,b) for a in ('floor','ceil') for b in (0,1)]:
    v=bad_fix.get(k,[])
    print('fixed',k,len(v), v[:1])
