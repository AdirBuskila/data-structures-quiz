import sys
sys.stdout.reconfigure(encoding='utf8')
# SAMP-1 Q1ה: BST insertion
class N:
    def __init__(s,k): s.k=k; s.l=s.r=None
root=None
def ins(n,k):
    if n is None: return N(k)
    if k<n.k: n.l=ins(n.l,k)
    else: n.r=ins(n.r,k)
    return n
for k in [50,4,48,6,87,29,81,56,11]: root=ins(root,k)
def find(n,k):
    while n.k!=k: n=n.l if k<n.k else n.r
    return n
n29=find(root,29)
print("29 left",n29.l and n29.l.k,"right",n29.r and n29.r.k)
n48=find(root,48); print("48 left",n48.l and n48.l.k,"right",n48.r and n48.r.k)
n6=find(root,6); print("6 right",n6.r and n6.r.k)

# 19B-A Q3 postorder analysis
def bst_from_post(seq,lo=float('-inf'),hi=float('inf')):
    # returns tree or None if not a BST postorder; consumes from the end
    pos=[len(seq)-1]
    def go(lo,hi):
        if pos[0]<0 or not (lo<seq[pos[0]]<hi): return None
        k=seq[pos[0]]; pos[0]-=1
        r=go(k,hi); l=go(lo,k)
        return (k,l,r)
    t=go(lo,hi)
    return t if pos[0]==-1 and t is not None else None
def height(t): return -1 if t is None else 1+max(height(t[1]),height(t[2]))
def isavl(t):
    if t is None: return True
    return abs(height(t[1])-height(t[2]))<=1 and isavl(t[1]) and isavl(t[2])
for name,s in [("a",[201,154,309,100,402,56,505]),("b",[56,309,154,100,505,402,201]),("c",[56,154,100,309,505,452,201])]:
    t=bst_from_post(s)
    print(name, "BST" if t else "not BST", t, "AVL" if t and isavl(t) else "")
