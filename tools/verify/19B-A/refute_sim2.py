import sys, itertools, heapq, random, math
sys.stdout.reconfigure(encoding='utf8')

# ---------------- AVL ----------------
class Nd:
    __slots__=('k','l','r','h')
    def __init__(s,k): s.k=k;s.l=None;s.r=None;s.h=0
def H(n): return -1 if n is None else n.h
def upd(n): n.h=1+max(H(n.l),H(n.r))
def rotR(y):
    x=y.l; y.l=x.r; x.r=y; upd(y); upd(x); return x
def rotL(x):
    y=x.r; x.r=y.l; y.l=x; upd(x); upd(y); return y
def bal(n):
    upd(n)
    b=H(n.l)-H(n.r)
    if b>1:
        if H(n.l.l)<H(n.l.r): n.l=rotL(n.l)
        return rotR(n)
    if b<-1:
        if H(n.r.r)<H(n.r.l): n.r=rotR(n.r)
        return rotL(n)
    return n
def ins(n,k):
    if n is None: return Nd(k)
    if k<n.k: n.l=ins(n.l,k)
    else: n.r=ins(n.r,k)
    return bal(n)
def minnode(n):
    while n.l: n=n.l
    return n
def dele(n,k):
    if n is None: return None
    if k<n.k: n.l=dele(n.l,k)
    elif k>n.k: n.r=dele(n.r,k)
    else:
        if n.l is None: return n.r
        if n.r is None: return n.l
        m=minnode(n.r); n.k=m.k; n.r=dele(n.r,m.k)
    return bal(n)
def shape(n): return None if n is None else (n.k,shape(n.l),shape(n.r))
def build(keys):
    r=None
    for k in keys: r=ins(r,k)
    return r
# enumerate AVL trees from insertion sequences of up to 7 keys
found=None
seen=set()
for n in range(2,8):
    for perm in itertools.permutations(range(1,n+1)):
        t=build(perm)
        sh=shape(t)
        if sh in seen: continue
        seen.add(sh)
        # shift keys by +1 so x=0 is smaller than all
        t0=build(perm)
        before=shape(t0)
        t1=ins(t0,0)
        t2=dele(t1,0)
        if shape(t2)!=before:
            found=(perm,before,shape(t2)); break
    if found: break
print("AVL insert-min then delete-min changes tree:", found is not None)
if found:
    print(found)

# ---------------- BuildHeap comparisons on sorted array ----------------
def buildheap_cmp(a):
    a=list(a); n=len(a); c=0
    def down(i):
        nonlocal c
        while True:
            l=2*i+1; r=l+1; m=i
            s=i
            if l<n:
                # find smaller child
                ch=l
                if r<n:
                    c+=1
                    if a[r]<a[l]: ch=r
                c+=1
                if a[ch]<a[i]:
                    a[i],a[ch]=a[ch],a[i]; i=ch; continue
            break
    for i in range(n//2-1,-1,-1): down(i)
    return c
print("buildheap cmps sorted:", [(n,buildheap_cmp(range(n))) for n in range(2,14)])

# ---------------- heapsort decision tree for 3 elems (max-heap, ascending) ----------------
# Build comparison-tree by running heapsort symbolically with an oracle that branches.
def heapsort_tree(n):
    leaves=[]
    def run(known, path):
        # known: set of (x,y) meaning x<y ; elements indices 0..n-1 ; array holds labels
        pass
    # branch exploration: generic via re-running with decision script
    results=[]
    def explore(script):
        arr=list(range(n)); trace=[]
        idx=[0]
        def less(x,y):
            # answer from script, else need new branch
            if idx[0]<len(script):
                v=script[idx[0]]; idx[0]+=1; trace.append(((x,y),v)); return v
            raise NeedMore((x,y))
        class NeedMore(Exception):
            def __init__(s,q): s.q=q
        def sift(a,i,m):
            while True:
                l=2*i+1;r=l+1;big=i
                if l<m and less(a[big],a[l]): big=l
                if r<m and less(a[big],a[r]): big=r
                if big==i: break
                a[i],a[big]=a[big],a[i]; i=big
        a=list(range(n))
        try:
            for i in range(n//2-1,-1,-1): sift(a,i,n)
            for m in range(n-1,0,-1):
                a[0],a[m]=a[m],a[0]; sift(a,0,m)
        except NeedMore as e:
            return ('more',e.q)
        return ('leaf',tuple(a))
    out=[]
    def rec(script):
        r=explore(script)
        if r[0]=='leaf': out.append((len(script),r[1],tuple(script)))
        else:
            rec(script+[True]); rec(script+[False])
    rec([])
    return out
for n in (3,):
    res=heapsort_tree(n)
    print("naive tree leaves",len(res),"depths",sorted(d for d,_,_ in res))
    # remove infeasible leaves: only those consistent with some permutation
    cons=[]
    for d,a,sc in res:
        # check feasibility by brute force over permutations: perm p gives values; replay
        feas=[]
        for p in itertools.permutations(range(n)):
            # rank assignment p[label]=value
            a2=list(range(n)); idx=0; ok=True
            # replay heapsort with real compare and check path equals script
            tr=[]
            arr=list(range(n))
            def less(x,y):
                v=p[x]<p[y]; tr.append(v); return v
            def sift(arr,i,m):
                while True:
                    l=2*i+1;r=l+1;big=i
                    if l<m and less(arr[big],arr[l]): big=l
                    if r<m and less(arr[big],arr[r]): big=r
                    if big==i: break
                    arr[i],arr[big]=arr[big],arr[i]; i=big
            for i in range(n//2-1,-1,-1): sift(arr,i,n)
            for m in range(n-1,0,-1):
                arr[0],arr[m]=arr[m],arr[0]; sift(arr,0,m)
            if tuple(tr)==sc: feas.append(p)
        cons.append((d,a,sc,feas))
    feasible=[c for c in cons if c[3]]
    print("feasible leaves:",len(feasible))
    for d,a,sc,f in feasible: print(" depth",d,"output positions order (labels)",a,"perms",f)
    print("worst depth", max(d for d,*_ in feasible))

# ---------------- helper heap size ----------------
def helper_max(N,k):
    # min-heap array of 1..N distinct keys random
    keys=list(range(N)); random.shuffle(keys)
    h=[]
    for x in keys: heapq.heappush(h,x)
    # h is a valid heap array
    B=[(h[0],0)]; mx=1
    for _ in range(k):
        v,i=heapq.heappop(B)
        for c in (2*i+1,2*i+2):
            if c<N: heapq.heappush(B,(h[c],c))
        mx=max(mx,len(B))
    return mx
worst=0
for N in (50,200,1000):
    for k in (1,2,3,5,10,20,40):
        if k<=N:
            m=max(helper_max(N,k) for _ in range(5))
            print("N",N,"k",k,"max helper size",m,"k+1=",k+1,"3k=",3*k)
