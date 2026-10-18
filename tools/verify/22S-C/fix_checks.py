"""22S-C post-refute check, Q2a side remark: deleting 11 from 8(5(3(2(1,.),4),7(6,.)),11(10(9,.),12)).
Successor replacement -> 2 rotations; predecessor replacement -> 1 rotation. ASCII output."""
import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL, N, up, rotations


def build(spec):
    if spec is None:
        return None
    k, l, r = spec
    n = N(k)
    n.l = build(l)
    n.r = build(r)
    up(n)
    return n


L = lambda k: (k, None, None)
TREE = (8, (5, (3, (2, L(1), None), L(4)), (7, L(6), None)), (11, (10, L(9), None), L(12)))


class AVLPred(AVL):
    def _del(self, n, k):
        if n is None:
            return None
        if k < n.k:
            n.l = self._del(n.l, k)
        elif k > n.k:
            n.r = self._del(n.r, k)
        else:
            if n.l is None:
                return n.r
            if n.r is None:
                return n.l
            m = n.l
            while m.r:
                m = m.r
            n.k = m.k
            n.l = self._del(n.l, m.k)
        return self._fix(n)


def run(cls, key):
    t = cls()
    t.root = build(TREE)
    t.dele(key)
    return rotations(t) + t.dbl  # total rotation operations; no doubles expected here


for key in (12, 11):
    for cls in (AVL, AVLPred):
        t = cls()
        t.root = build(TREE)
        t.dele(key)
        print("delete %d %s: rotations=%d doubles=%d" % (key, cls.__name__, t.rot, t.dbl))
        if key == 11 and cls is AVL:
            assert t.rot == 2
        if key == 11 and cls is AVLPred:
            assert t.rot == 1
        if key == 12 and cls is AVL:
            assert t.rot == 2
print("OK 22S-C fix checks")
