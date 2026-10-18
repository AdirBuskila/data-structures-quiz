import random, itertools, sys
sys.setrecursionlimit(10000)
random.seed(7)
# ---- Q1b: stack algorithm vs definition ----
def gen(d):
    r=random.random()
    if d==0 or r<0.25: return random.choice('abc')
    if r<0.55: return '('+gen(d-1)+')'          # redundant parens possible
    return '('+gen(d-1)+random.choice('+*')+gen(d-1)+')'
def algo(s):
    st=[]
    for ch in s:
        if ch!=')': st.append(ch)
        else:
            c=0
            while st[-1]!='(': st.pop(); c+=1
            st.pop()
            if c==0: return True
    return False
def truth(s):
    # a matching pair (i,j) whose content is exactly another matching pair (s[i+1]=='(' and match==j-1)
    match={}; st=[]
    for i,ch in enumerate(s):
        if ch=='(': st.append(i)
        elif ch==')': k=st.pop(); match[k]=i
    return any(s[i+1]=='(' and match[i+1]==j-1 for i,j in match.items() if i+1<len(s) and s[i+1]=='(')
bad=0;n=0
for _ in range(20000):
    s=gen(5)
    # strip redundant wrapping 'a' atom parens count as "(a)" - fine for the definition
    n+=1
    if algo(s)!=truth(s):
        bad+=1
        if bad<4: print('MISMATCH',s,algo(s),truth(s))
print('Q1b random tests',n,'mismatches',bad)
for s in ['((a+b)*((c+d)))','((a+b)*c)']: print(s,algo(s),truth(s))

# ---- Q4b two-pointer partition ----
A=[7,8,99,31,2,4,2,56,233,47]
i,j=0,len(A)-1; sw=0
while i<j:
    while i<j and A[i]%2==0: i+=1
    while i<j and A[j]%2==1: j-=1
    if i<j: A[i],A[j]=A[j],A[i]; sw+=1;
print('Q4b result',A,'swaps',sw)
# random verification of partition
ok=True
for _ in range(3000):
    B=[random.randint(0,50) for _ in range(random.randint(0,12))]
    C=B[:]; i,j=0,len(C)-1
    while i<j:
        while i<j and C[i]%2==0: i+=1
        while i<j and C[j]%2==1: j-=1
        if i<j: C[i],C[j]=C[j],C[i]
    k=sum(1 for x in C if x%2==0)
    ok&= all(x%2==0 for x in C[:k]) and all(x%2==1 for x in C[k:]) and sorted(C)==sorted(B)
print('Q4b partition correct on random',ok)

# ---- Q5a heap ----
H=[8,5,7,4,1,6,3,2]
def down(a,i):
    n=len(a); s=0
    while True:
        l=2*i+1;r=l+1;m=i
        if l<n and a[l]>a[m]: m=l
        if r<n and a[r]>a[m]: m=r
        if m==i: return s
        a[i],a[m]=a[m],a[i]; i=m; s+=1
def up(a,i):
    s=0
    while i>0 and a[(i-1)//2]<a[i]:
        p=(i-1)//2; a[p],a[i]=a[i],a[p]; i=p; s+=1
    return s
a=H[:]; a[0]=a[-1]; a.pop(); s1=down(a,0); print('after delmax',a,'swaps',s1)
a.append(8); s2=up(a,len(a)-1); print('after reinsert',a,'swaps',s2)

# ---- Q5b symmetric pairs ----
def official(S):
    T={a:b for a,b in S}
    out=[]
    for a,b in S:
        if b in T and T[b]==a: out.append((a,b))
    return out
S=[(11,20),(30,40),(5,10),(21,11),(40,30),(10,5)]
print('Q5b official alg output',official(S),'(example expects [30,40],[5,10])')
print('self pair (7,7):',official([(7,7),(1,2)]))
# ---- Q3b AVL fix (-2 with right child +1 -> double etc.) brute force ----
def H_(t): return -1 if t is None else t[3]
def mk(l,r): return (l,r,0,1+max(H_(l),H_(r)))
from functools import lru_cache
@lru_cache(None)
def shapes(h):
    if h<-1: return []
    if h==-1: return [None]
    out=[]
    for hl in (h-1,h-2):
        for hr in (h-1,h-2):
            if max(hl,hr)==h-1 and abs(hl-hr)<=1:
                for L in shapes(hl):
                    for R in shapes(hr): out.append(mk(L,R))
    return out
def rl(t): # left rotation at t = (l, r)
    l,r=t[0],t[1]; return mk(mk(l,r[0]),r[1])
def rr(t):
    l,r=t[0],t[1]; return mk(l[0],mk(l[1],r))
def isavl(t):
    return t is None or (abs(H_(t[0])-H_(t[1]))<=1 and isavl(t[0]) and isavl(t[1]))
def bf(t): return H_(t[0])-H_(t[1])
res={}
for hl in range(-1,3):
    hr=hl+2
    for L in shapes(hl):
        for R in shapes(hr):
            t=mk(L,R); assert bf(t)==-2
            c=bf(R)
            single=rl(t); dbl=rl(mk(L,rr(R))) if R[0] is not None else t
            res.setdefault(c,[0,0,0])
            res[c][0]+=1; res[c][1]+=isavl(single); res[c][2]+=isavl(dbl)
print('Q3b right child bf -> (cases, single-left ok, double ok):',res)
