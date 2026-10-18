"""Refuter, 23S-A: Q2a (leaf at depth h/2 in AVL of even height h), Q2b (preorder reinsertion rotates?),
Q3 (heap restore: path unique, one-per-level ambiguous). Own code."""
import itertools

# ---------- AVL helpers ----------
class N:
    def __init__(s, k): s.k, s.l, s.r, s.h = k, None, None, 1
def H(n): return n.h if n else 0
def upd(n): n.h = 1 + max(H(n.l), H(n.r))
def bal(n): return H(n.l) - H(n.r)
def rotR(y): x = y.l; y.l = x.r; x.r = y; upd(y); upd(x); return x
def rotL(x): y = x.r; x.r = y.l; y.l = x; upd(x); upd(y); return y
def ins(n, k, log):
    if n is None: return N(k)
    if k < n.k: n.l = ins(n.l, k, log)
    else: n.r = ins(n.r, k, log)
    upd(n); b = bal(n)
    if b > 1:
        log.append("LL" if bal(n.l) >= 0 else "LR")
        if bal(n.l) < 0: n.l = rotL(n.l)
        return rotR(n)
    if b < -1:
        log.append("RR" if bal(n.r) <= 0 else "RL")
        if bal(n.r) > 0: n.r = rotR(n.r)
        return rotL(n)
    return n
def preorder(n, out):
    if n: out.append(n.k); preorder(n.l, out); preorder(n.r, out)
def build(seq):
    r = None; log = []
    for k in seq: r = ins(r, k, log)
    return r, log

# Q2b: over ALL AVL trees obtained by insertion permutations of size n, test the preorder claim
bad = {}
for n in range(1, 9):
    seen = set()
    for p in itertools.permutations(range(1, n + 1)):
        t, lg = build(p)
        pre = []; preorder(t, pre)
        tup = tuple(pre)
        if tup in seen: continue
        seen.add(tup)
        t2, lg2 = build(pre)
        if lg2 and n not in bad: bad[n] = (pre, lg2)
print("Q2b counterexample (smallest n, preorder of an AVL tree whose reinsertion rotates):", bad.get(min(bad)) if bad else None)
print("sizes with counterexample:", sorted(bad))

# Q2a: exhaustive: for even h, minimum leaf depth over AVL trees of height h (heights in edges; single node h=0)
# build all AVL shapes as (height, set of leaf depths) recursively
from functools import lru_cache
@lru_cache(None)
def shapes(h):
    """set of frozenset(leaf depths) of AVL shapes with height h (edges), empty tree h=-1"""
    if h == -1: return frozenset([frozenset()])
    if h == 0: return frozenset([frozenset([0])])
    res = set()
    for hl, hr in ((h - 1, h - 1), (h - 1, h - 2), (h - 2, h - 1)):
        for a in shapes(hl):
            for b in shapes(hr):
                res.add(frozenset({d + 1 for d in a} | {d + 1 for d in b}))
    return frozenset(res)
for h in range(0, 13, 2):
    mind = min(min(s) for s in shapes(h))
    print("h", h, "min leaf depth over AVL shapes:", mind, "h/2 =", h // 2, "leaf at depth h/2 exists:", any((h // 2) in s for s in shapes(h)))
for h in range(1, 12, 2):
    print("h", h, "min leaf depth", min(min(s) for s in shapes(h)))

# ---------- Q3 heap restore ----------
# heap shape: 12 nodes. positions 1..12, parent i//2
n = 12
present = {2: 2, 4: 3, 5: 7, 8: 10, 9: 9, 10: 12, 11: 11, 7: 6}
blank = [i for i in range(1, n + 1) if i not in present]
missing = sorted(set(range(1, n + 1)) - set(present.values()))
print("blank positions", blank, "missing values", missing)
sols = []
for perm in itertools.permutations(missing):
    A = dict(present); A.update(dict(zip(blank, perm)))
    if all(A[i] > A[i // 2] for i in range(2, n + 1)): sols.append([A[i] for i in range(1, n + 1)])
print("valid restorations:", sols)

# one-per-level ambiguity example (7 nodes): root, L blurred, one level-2 node blurred
def restorations(n, present, blank, missing):
    out = []
    for perm in itertools.permutations(missing):
        A = dict(present); A.update(dict(zip(blank, perm)))
        if all(A[i] > A[i // 2] for i in range(2, n + 1)): out.append([A[i] for i in range(1, n + 1)])
    return out
# positions: 1 root, 2=L, 3=R, 4,5 children of L, 6,7 children of R
present = {3: 2, 4: 5, 5: 6, 7: 7}   # blanks: root(1), L(2), node 6 ; missing {1,3,4}
blank = [1, 2, 6]
missing = sorted(set(range(1, 8)) - set(present.values()))
print("ambiguity example: missing", missing)
# each level lost exactly one (levels: {1},{2,3},{4..7}) -> blanks 1, 2, 6 : one per level
res = restorations(7, present, blank, missing)
print("restorations:", res)
