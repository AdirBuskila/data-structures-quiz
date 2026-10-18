import itertools
# runs-based exhaustive test: sorted array = runs of sizes (r1..rk), values distinct per run
def comps(n,k):
    if k==1:
        yield (n,); return
    for a in range(1,n-k+2):
        for rest in comps(n-a,k-1): yield (a,)+rest
def arr(runs):
    S=[]
    for v,r in enumerate(runs): S+= [v]*r
    return S
def truth(S,thr):
    n=len(S); from collections import Counter
    c=Counter(S)
    return any(2*c[x]>n and any(y!=x and thr(c[y],n) for y in c) for x in c)
def alg(S,thr,f,base):
    n=len(S)
    at=lambda i: S[(i-1 if base==1 else i)]
    X=S[n//2]
    if 2*S.count(X)<=n: return False
    for W in {at(f(1,n)),at(f(2,n))}:
        if W!=X and thr(S.count(W),n): return True
    return False
cfg={'floor0':(lambda j,n:(j*n)//3,0),'ceil1':(lambda j,n:-(-j*n//3),1),'floor1':(lambda j,n:(j*n)//3,1)}
thrs={'>n/3':lambda c,n:3*c>n,'>0.33n':lambda c,n:100*c>33*n}
for tn,thr in thrs.items():
    for cn,(f,b) in cfg.items():
        bad=0;ex=None
        for n in range(1,41):
            for k in range(1,6):
                if k>n: continue
                for runs in comps(n,k):
                    S=arr(runs)
                    if truth(S,thr)!=alg(S,thr,f,b):
                        bad+=1; ex=ex or (runs,truth(S,thr))
        print(tn,cn,'mismatches',bad,ex)
