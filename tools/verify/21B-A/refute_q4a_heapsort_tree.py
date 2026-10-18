import itertools
def heapsort_trace(a):
    # a: list of labels 1..3 meaning a_i with rank values given by perm; returns (comparison list as (i,j,result 'ai<aj'), sorted labels)
    vals=dict(enumerate(a,1))  # label -> value
    arr=[1,2,3]; tr=[]
    def lt(x,y):
        r=vals[x]<vals[y]; tr.append(('a%d<a%d'%(x,y),r)); return r
    def heapify(n,i):
        while True:
            l=2*i+1; r=2*i+2; lg=i
            if l<n and lt(arr[lg],arr[l]): lg=l
            if r<n and lt(arr[lg],arr[r]): lg=r
            if lg==i: return
            arr[i],arr[lg]=arr[lg],arr[i]; i=lg
    n=3
    for i in range(n//2-1,-1,-1): heapify(n,i)
    for end in range(n-1,0,-1):
        arr[0],arr[end]=arr[end],arr[0]; heapify(end,0)
    return tr,['a%d'%x for x in arr]
paths={}
for p in itertools.permutations([1,2,3]):
    tr,out=heapsort_trace(p)
    paths[p]=(tr,out)
    print(p,tr,out)
