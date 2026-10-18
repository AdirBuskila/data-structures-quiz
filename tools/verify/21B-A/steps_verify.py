"""21B-A step checks (Q2, Q3a, Q3b, Q4a, Q4b). Run: py tools/verify/21B-A/steps_verify.py. ASCII only."""
import sys, pathlib, itertools, random, math
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL, N, up, H
random.seed(11)

# ---------- Q2: nodes to add to an almost complete tree ----------
def height_of(n): return n.bit_length() - 1          # almost complete tree with n nodes: floor(log2 n)
def leftmost_depth(n):
    d = 0; i = 0
    while 2 * i + 1 < n: i = 2 * i + 1; d += 1
    return d
def rightmost_depth(n):
    d = 0; i = 0
    while 2 * i + 2 < n: i = 2 * i + 2; d += 1
    return d
def d_needed(n):
    h = leftmost_depth(n); return 2 ** (h + 1) - 1 - n
for n in range(1, 200):
    assert leftmost_depth(n) == height_of(n)
    # brute force: add nodes in level order until the tree is complete
    m = n
    while (m + 1) & m: m += 1                         # m+1 power of two
    assert d_needed(n) == m - n
assert any(rightmost_depth(n) < height_of(n) for n in range(1, 40))         # the right spine can be shorter (e.g. n=8)
assert rightmost_depth(8) == 2 and height_of(8) == 3
assert d_needed(10) == 5 and d_needed(12) == 3 and d_needed(8) == 7 and d_needed(7) == 0
print("Q2 ok")

# ---------- Q3a: AVL insertion trace ----------
def shape(n): return None if n is None else (n.k, shape(n.l), shape(n.r))
t = AVL()
for k in [3, 1, 7, 0, 6, 9, 5, 8, 10]: t.ins(k)
assert t.rot == 0 and t.root.h == 3
# insert 11 without rebalancing: root balance factor
def plain_insert(n, k):
    if n is None: return N(k)
    if k < n.k: n.l = plain_insert(n.l, k)
    else: n.r = plain_insert(n.r, k)
    up(n); return n
u = None
for k in [3, 1, 7, 0, 6, 9, 5, 8, 10, 11]: u = plain_insert(u, k)
assert H(u.l) - H(u.r) == -2 and H(u.r.l) - H(u.r.r) == -1      # right-right case: a single rotation
t.ins(11)
assert t.rot == 1 and t.dbl == 0 and t.root.k == 7 and t.root.h == 3
print("Q3a ok")

# ---------- Q3b: arithmetic of the induction step ----------
ceil = lambda a, b: -(-a // b)
for h in range(1, 200):
    assert 1 + ceil(h - 1, 2) == ceil(h + 1, 2)
assert any(1 + ceil(h - 1, 2) != ceil(h, 2) for h in range(1, 20))     # the findbug line is wrong
assert 1 + ceil(5, 2) == 4 == ceil(7, 2)
# AVL shapes: levels i <= floor(h/2) are full (the printed statement reads "ceil(h/2)" and "i <= h/2" together)
from functools import lru_cache
@lru_cache(None)
def shapes(h):
    if h < 0: return frozenset([None])
    out = set()
    for a, b in ((h - 1, h - 1), (h - 1, h - 2), (h - 2, h - 1)):
        for l in shapes(a):
            for r in shapes(b): out.add((l, r))
    return frozenset(out)
def level_counts(t, d=0, acc=None):
    acc = acc if acc is not None else {}
    if t is None: return acc
    acc[d] = acc.get(d, 0) + 1; level_counts(t[0], d + 1, acc); level_counts(t[1], d + 1, acc); return acc
for h in range(0, 5):
    for s in shapes(h):
        lc = level_counts(s)
        assert all(lc.get(i, 0) == 2 ** i for i in range(0, h // 2 + 1)), (h, s)
print("Q3b ok")

# ---------- Q4a: decision tree of heapsort on 3 elements (from the official figure) ----------
# node: (i, j, true_branch, false_branch) means "a_i < a_j"; leaf: tuple of indices (the sorted order)
leaf = lambda *x: ("leaf",) + x
T = (1, 2,
     (2, 3, (1, 2, leaf(1, 2, 3), None), (3, 1, leaf(3, 1, 2), leaf(1, 3, 2))),
     (1, 3, (1, 2, None, leaf(2, 1, 3)), (3, 2, leaf(3, 2, 1), leaf(2, 3, 1))))
def run(t, a, depth=0):
    if t[0] == "leaf": return t[1:], depth
    i, j, tb, fb = t
    nxt = tb if a[i - 1] < a[j - 1] else fb
    assert nxt is not None
    return run(nxt, a, depth + 1)
leaves = set(); maxd = 0
for p in itertools.permutations([10, 20, 30]):
    order, d = run(T, p); maxd = max(maxd, d)
    assert [p[i - 1] for i in order] == sorted(p)
    leaves.add(order)
assert len(leaves) == 6 and maxd == 3 and math.ceil(math.log2(6)) == 3
def count_leaves(t):
    if t is None: return 0
    return 1 if t[0] == "leaf" else count_leaves(t[2]) + count_leaves(t[3])
assert count_leaves(T) == 6
print("Q4a ok")

# ---------- Q4b: pairSum ----------
def pair_sum(vals, k, cond, trace=None):
    a = sorted(vals); i, j = 0, len(a) - 1; it = 0
    while i != j and it < 10 * len(a) + 10:
        it += 1
        s = a[i] + a[j]
        if s == k: return True, it
        elif cond(s, k): i += 1
        else: j -= 1
        if i > j: break
    return False, it
good = lambda s, k: s < k
variants = {">": lambda s, k: s > k, "!=": lambda s, k: s != k, "==": lambda s, k: s == k}
def brute(vals, k): return any(vals[x] + vals[y] == k for x in range(len(vals)) for y in range(x + 1, len(vals)))
bad = {v: False for v in variants}
for _ in range(1500):
    vals = [random.randint(1, 20) for _ in range(random.randint(1, 8))]; k = random.randint(2, 40)
    assert pair_sum(vals, k, good)[0] == brute(vals, k)
    for name, c in variants.items():
        if pair_sum(vals, k, c)[0] != brute(vals, k): bad[name] = True
assert all(bad.values()), bad
r, it = pair_sum([8, 3, 5, 1, 9, 2], 13, good); assert r is True and it == 5
print("Q4b ok")
print("ALL 21B-A step checks ok")
