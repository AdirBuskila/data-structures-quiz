"""Tiny AVL (insert/delete) that counts rotations, plus the AVL leaf-depth DP. ASCII only."""
class N:
    def __init__(s, k): s.k = k; s.l = None; s.r = None; s.h = 0
def H(n): return -1 if n is None else n.h
def up(n): n.h = 1 + max(H(n.l), H(n.r))
class AVL:
    def __init__(s): s.root = None; s.rot = 0
    def _rr(s, y):
        x = y.l; y.l = x.r; x.r = y; up(y); up(x); s.rot += 1; return x
    def _rl(s, x):
        y = x.r; x.r = y.l; y.l = x; up(x); up(y); s.rot += 1; return y
    def _fix(s, n):
        up(n); b = H(n.l) - H(n.r)
        if b > 1:
            if H(n.l.l) < H(n.l.r): n.l = s._rl(n.l)
            return s._rr(n)
        if b < -1:
            if H(n.r.r) < H(n.r.l): n.r = s._rr(n.r)
            return s._rl(n)
        return n
    def ins(s, k): s.root = s._ins(s.root, k)
    def _ins(s, n, k):
        if n is None: return N(k)
        if k < n.k: n.l = s._ins(n.l, k)
        else: n.r = s._ins(n.r, k)
        return s._fix(n)
    def dele(s, k): s.root = s._del(s.root, k)
    def _del(s, n, k):
        if n is None: return None
        if k < n.k: n.l = s._del(n.l, k)
        elif k > n.k: n.r = s._del(n.r, k)
        else:
            if n.l is None: return n.r
            if n.r is None: return n.l
            m = n.r
            while m.l: m = m.l
            n.k = m.k; n.r = s._del(n.r, m.k)
        return s._fix(n)
def depth_of(n, k, d=0):
    if n is None: return None
    if k == n.k: return d
    return depth_of(n.l if k < n.k else n.r, k, d + 1)
def leaves(n, d=0):
    if n is None: return []
    if n.l is None and n.r is None: return [(n.k, d)]
    return leaves(n.l, d + 1) + leaves(n.r, d + 1)
def leaf_depths(maxh):
    """A[h] = set of depths of some leaf in some AVL tree of height h (edges)."""
    A = {-1: set(), 0: {0}}
    for h in range(1, maxh + 1):
        s = set()
        for hl, hr in ((h-1, h-1), (h-1, h-2), (h-2, h-1)):
            for c in (hl, hr):
                s |= {1 + x for x in A[c]}
        A[h] = s
    return A
