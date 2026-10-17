def ins(T,x,log=True):
    h1=x%11;h2=1+x%7;c=0;steps=[]
    for i in range(11):
        p=(h1+i*h2)%11
        steps.append(p)
        if T[p] is None:
            T[p]=x;return c,steps
        c+=1
    return None,steps
T=[None]*11
for x in [11,5,6,22,7,13]:
    print(x,ins(T,x))
print(T)
for x in range(1,200):
    T2=list(T);c,s=ins(T2,x)
    if c==3: print("3coll",x,s)
