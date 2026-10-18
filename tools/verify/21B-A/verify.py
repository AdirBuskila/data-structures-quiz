"""21B-A checks: Q3a AVL insert trace (3,1,7,0,6,9,5,8,10,11) and Q1e double-hash delete/reinsert counterexample. ASCII only."""
import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL
def shape(n): return None if n is None else (n.k, shape(n.l), shape(n.r))
t = AVL()
for k in [3,1,7,0,6,9,5,8,10]: t.ins(k)
print("before 11:", shape(t.root), "h", t.root.h, "rot", t.rot)
r0 = t.rot
t.ins(11)
print("after 11:", shape(t.root), "rotations", t.rot - r0)
# Q1e: H(x,i) = (x + ((1+x)*i mod 4)) mod 13  -- reading of the printed formula
def H(x, i): return (x + ((1 + x) * i) % 4) % 13
tab = [None] * 13; DEL = "D"
def ins(x):
    for i in range(13):
        j = H(x, i)
        if tab[j] is None or tab[j] == DEL: tab[j] = x; return
def rem(x):
    for i in range(13):
        j = H(x, i)
        if tab[j] is None: return
        if tab[j] == x: tab[j] = DEL; return
ins(1); ins(14); rem(1); s3 = list(tab); rem(14); ins(14)
print("after op3:", {i: v for i, v in enumerate(s3) if v is not None})
print("after op5:", {i: v for i, v in enumerate(tab) if v is not None}, "differs:", s3 != tab)
