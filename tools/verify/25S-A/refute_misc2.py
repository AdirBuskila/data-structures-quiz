import random
def bad(a): return sum(1 for i in range(1,len(a)) if a[(i-1)//2]>a[i])
a=[3,21,7,22,25,15,10]; print(bad(a))
b=a[:]; b[1],b[2]=b[2],b[1]; print(b,bad(b))
# their step: only root's children swapped -> 2 violations. full BFS:
c=a[:]
for i in range(len(c)):
    l,r=2*i+1,2*i+2
    if r<len(c) and c[l]>c[r]: c[l],c[r]=c[r],c[l]
print(c,bad(c))
# 5a: depth of official tree
par={10:1,9:1,2:1,3:1,5:1,4:3,6:5,7:5,8:7}
d=lambda x:0 if x==1 else 1+d(par[x]); print(len(par)+1,max(map(d,par)))
# 5b: cuckoo delete+reinsert counterexample search
def ins(T1,T2,h1,h2,x,mx=20):
    t=1
    for _ in range(mx):
        if t==1:
            p=h1(x); x,T1[p]=T1[p],x
        else:
            p=h2(x); x,T2[p]=T2[p],x
        if x is None: return True
        t=3-t
    return False
m=5;h1=lambda x:x%m;h2=lambda x:(x//m)%m
for seq in [[0,5,1],[0,5],[5,0]]:
    pass
random.seed(1);found=None
for _ in range(2000):
    seq=random.sample(range(30),5);T1=[None]*m;T2=[None]*m
    if not all(ins(T1,T2,h1,h2,x) for x in seq): continue
    y=random.choice(seq);S1,S2=T1[:],T2[:]
    for T in(S1,S2):
        for i in range(m):
            if T[i]==y:T[i]=None
    ins(S1,S2,h1,h2,y)
    if (S1,S2)!=(T1,T2): found=(seq,y,T1,T2,S1,S2);break
print(found)
