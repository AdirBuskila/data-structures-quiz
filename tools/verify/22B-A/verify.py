"""22B-A Q1a: check both official trees are 11-node AVL; insertion never raises height; no two successive deletions lower it. ASCII only."""
import sys, pathlib, itertools, copy
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL, N, up, H

def build(spec):
    # spec: (key, left, right)
    if spec is None: return None
    n = N(spec[0]); n.l = build(spec[1]); n.r = build(spec[2]); up(n); return n
L = lambda k: (k, None, None)
T1 = (6, (3, (2, L(1), None), (4, None, L(5))), (9, (8, L(7), None), (10, None, L(11))))
T2 = (6, (4, (2, L(1), L(3)), L(5)), (8, L(7), (10, L(9), L(11))))

def isavl(n):
    if n is None: return True
    return abs(H(n.l) - H(n.r)) <= 1 and isavl(n.l) and isavl(n.r)
def keys(n): return [] if n is None else keys(n.l) + [n.k] + keys(n.r)

for name, spec in (("T1", T1), ("T2", T2)):
    t = AVL(); t.root = build(spec)
    ks = keys(t.root); assert ks == sorted(ks) and len(ks) == 11 and isavl(t.root), name
    h0 = t.root.h
    ins_ok = True
    for x in [i + 0.5 for i in range(0, 12)]:
        u = AVL(); u.root = build(spec); u.ins(x)
        if u.root.h > h0: ins_ok = False
    del_ok = True
    for a, b in itertools.permutations(ks, 2):
        u = AVL(); u.root = build(spec); u.dele(a); u.dele(b)
        if u.root is not None and u.root.h < h0: del_ok = False
    print(name, "avl11 ok; height", h0, "no insert raises:", ins_ok, "no two deletes lower:", del_ok)
