import math, sys
# near-complete binary tree with n nodes, heap indexing 1..n
class T:
    def __init__(s,n): s.n=n
    def left(s,i): return 2*i if 2*i<=s.n else None
    def right(s,i): return 2*i+1 if 2*i+1<=s.n else None
def truth(n):
    h=int(math.log2(n))
    return 2**(h+1)-1-n
def height_left(t):
    c=0;i=1
    while i is not None: c+=1; i=t.left(i)
    return c-1
def linear(n):
    t=T(n); h=height_left(t)
    return 2**(h+1)-1-n   # n by inorder count
# --- second solution O(min(n, d log n)) with sensible reading: i from 0..2^(h-1)-1, bit0 -> right, bit1 -> left, padded to h-1 bits
def second(n):
    t=T(n); h=height_left(t)
    m=0; F=0
    if h==0: return 0
    for i in range(2**(h-1)):
        if F: break
        x=1
        for b in range(h-2,-1,-1):
            bit=(i>>b)&1
            x = t.right(x) if bit==0 else t.left(x)
        if t.left(x) is None and t.right(x) is None: m+=2
        else:
            F=1
            if t.right(x) is None: m+=1
    return m
# --- third solution O(log^2 n) as printed
def midleft(t,x):
    c=t.left(x)
    if c is None: return 0
    L=1
    while True:
        r=t.right(c)
        if r is None:
            # descend only right until leaf: c has no right child -> c is "leaf" for this path (even if it has a left child)
            return L
        c=r; L+=1
def midright(t,x):
    c=t.right(x)
    if c is None: return 0
    L=1
    while True:
        l=t.left(c)
        if l is None: return L
        c=l; L+=1
def third(n):
    t=T(n); h=height_left(t)
    if midleft(t,1)==midright(t,1)==h: return 0
    x=1; nn=2**(h-1) if h>=1 else 0; m=nn; h0=h
    steps=0
    while True:
        steps+=1
        if steps>200: return None
        h1=midleft(t,x); h2=midright(t,x)
        if h1!=h2: return 2**h-nn
        m=m/2; h0-=1
        if h1==h0 + 1 - 0 and False: pass
        if h1==h0:   # as printed (h0 already decremented)
            nn+=m; x=t.right(x)
        else:
            nn-=m; x=t.left(x)
        if x is None: return ('null',nn)
bad2=[];bad3=[];bad3b=[]
for n in range(1,400):
    tr=truth(n)
    assert linear(n)==tr
    if second(n)!=tr: bad2.append(n)
    r=third(n)
    if r!=tr: bad3.append((n,tr,r))
print('second solution (sensible reading) mismatches:',bad2[:10],len(bad2))
print('third solution as printed mismatches:',len(bad3),bad3[:15])

# ---- variants of the third solution
def third_v(n, cmp_before_decrement, step3):
    t=T(n); h=height_left(t)
    if h==0: return 0
    if step3=='printed':
        if midleft(t,1)==midright(t,1)==h: return 0
    else:  # correct completeness check: rightmost path reaches last level
        i=1;c=0
        while t.right(i) is not None: i=t.right(i); c+=1
        if c==h: return 0
    x=1; nn=2**(h-1); m=nn; h0=h
    for _ in range(100):
        h1=midleft(t,x); h2=midright(t,x)
        if h1!=h2: return 2**h-nn
        if cmp_before_decrement:
            go_right = (h1==h0)
        m=m/2; h0-=1
        if not cmp_before_decrement:
            go_right = (h1==h0)
        if go_right: nn+=m; x=t.right(x)
        else: nn-=m; x=t.left(x)
        if x is None: return ('null',nn)
    return 'loop'
for cb in (False,True):
    for s3 in ('printed','correct'):
        bad=[(n,truth(n),third_v(n,cb,s3)) for n in range(1,400) if third_v(n,cb,s3)!=truth(n)]
        print('compare_before_decrement=%s step3=%s -> mismatches %d  first %s'%(cb,s3,len(bad),bad[:6]))
