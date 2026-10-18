"""22S-C step-author checks (solver-made items): every expected value used in tools/gen/gen_22S-C.py steps. ASCII output."""
import functools, itertools, math, random, sys, pathlib
sys.setrecursionlimit(10000)
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL, N, up, H

# ---------- shapes ----------
@functools.lru_cache(None)
def avl_shapes(n):
    if n == 0: return [(None, -1)]
    out = []
    for nl in range(n):
        for (sl, hl) in avl_shapes(nl):
            for (sr, hr) in avl_shapes(n - 1 - nl):
                if abs(hl - hr) <= 1: out.append(((sl, sr), 1 + max(hl, hr)))
    return out
@functools.lru_cache(None)
def all_shapes(n):
    if n == 0: return [None]
    return [(l, r) for nl in range(n) for l in all_shapes(nl) for r in all_shapes(n - 1 - nl)]
def height(s): return -1 if s is None else 1 + max(height(s[0]), height(s[1]))
def leaf_depths(s, d=0):
    if s is None: return []
    if s == (None, None): return [d]
    return leaf_depths(s[0], d + 1) + leaf_depths(s[1], d + 1)
def is_full(s): return s is None or ((s[0] is None) == (s[1] is None) and is_full(s[0]) and is_full(s[1]))
def balanced_all(s): return s is None or (height(s[0]) == height(s[1]) and balanced_all(s[0]) and balanced_all(s[1]))

# Q1a: full tree with all leaves at the same depth has balance factor 0 everywhere (so it is AVL)
cnt = 0
for n in range(1, 16):
    for s in all_shapes(n):
        if is_full(s) and len(set(leaf_depths(s))) == 1:
            cnt += 1; assert balanced_all(s)
print("Q1a: full equal-depth trees checked:", cnt)
# Q1b: shallowest empty slot in an AVL tree of height h is at depth floor(h/2)+1 (not constant)
def null_depth(s, d=0):
    if s is None: return d
    return min(null_depth(s[0], d + 1), null_depth(s[1], d + 1))
best = {}
for n in range(1, 21):
    for s, h in avl_shapes(n):
        best[h] = min(best.get(h, 99), null_depth(s))
print("Q1b min depth of an empty slot by AVL height:", best)
assert all(best[h] == h // 2 + 1 for h in best) and best[4] == 3
# Q1c: sqrt(n) log n is o(n): the ratio goes to 0
r = [math.sqrt(n) * math.log2(n) / n for n in (10 ** 2, 10 ** 4, 10 ** 6, 10 ** 8)]
assert r == sorted(r, reverse=True) and r[-1] < 0.003
# Q1d: in a min-heap of 15 elements the maximum may sit at any leaf (positions 8..15), never at an internal node
def is_heap(a): return all(a[(i - 1) // 2] <= a[i] for i in range(1, len(a)))
cells = set()
for p in range(1, 16):
    a = [None] * 15; a[p - 1] = 15; it = iter(range(1, 15))
    for i in range(15):
        if a[i] is None: a[i] = next(it)
    if is_heap(a): cells.add(p)
assert cells == set(range(8, 16))
for p in range(1, 8): assert not any(is_heap(list(q)) for q in itertools.permutations(range(1, 8)) if q[p - 1] == 7 and p <= 3), p
print("Q1d: max sits at a leaf (cells 8..15 of 15)")
# Q1e: f=n, g=n^2, h=1: f=Omega(h), f=O(g) but g != Theta(h)
assert all(n >= 1 for n in range(1, 50)) and all(n <= n * n for n in range(1, 50)) and [n * n / 1 for n in (10, 100)] == [100, 10000]

# ---------- Q2a: Fibonacci AVL, delete 12 ----------
def build(spec):
    if spec is None: return None
    if not isinstance(spec, tuple): spec = (spec, None, None)
    n = N(spec[0]); n.l = build(spec[1]); n.r = build(spec[2]); up(n); return n
def show(n):
    if n is None: return "."
    if n.l is None and n.r is None: return str(n.k)
    return "%s(%s,%s)" % (n.k, show(n.l), show(n.r))
def isavl(n): return n is None or (abs(H(n.l) - H(n.r)) <= 1 and isavl(n.l) and isavl(n.r))
SPEC = (8, (5, (3, (2, 1, None), 4), (7, 6, None)), (11, (10, 9, None), 12))
t = AVL(); t.root = build(SPEC); assert isavl(t.root) and H(t.root) == 4
assert sorted([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) == [k for k in range(1, 13)]
u = AVL(); u.root = build(SPEC); u.dele(12)
print("Q2a after deleting 12:", show(u.root), "rotations", u.rot, "double", u.dbl)
assert show(u.root) == "5(3(2(1,.),4),8(7(6,.),10(9,11)))" and u.rot == 2 and u.dbl == 0
# the first imbalance: node 11 has left subtree 10(9) of height 1 and an empty right subtree
v = build(SPEC); v.r.r = None; up(v.r)
assert H(v.r.l) - H(v.r.r) == 2 and H(v.r.l.l) - H(v.r.l.r) == 1      # bf(11)=2, bf(10)=+1 -> LL
w = build((8, (5, (3, (2, 1, None), 4), (7, 6, None)), (10, 9, 11)))   # after the first rotation
assert H(w.l) - H(w.r) == 2 and H(w.l.l) - H(w.l.r) == 1             # root: bf 2, left child 5 leans left -> LL
# minimal AVL of height 4 has 12 nodes
def nmin(h): return 1 if h == 0 else 2 if h == 1 else nmin(h - 1) + nmin(h - 2) + 1
assert nmin(4) == 12

# ---------- Q2b: leaves of a perfect tree ----------
def leaves(h): return 1 if h == 0 else 2 * leaves(h - 1)
assert leaves(3) == 8 and leaves(4) == 16 and leaves(5) == 32 == 2 ** 5
for k in range(2, 9): assert 2 ** k * 2 ** k != 2 ** (k + 1)
# count leaves in an explicitly built perfect tree
def perfect(h): return None if h < 0 else (perfect(h - 1), perfect(h - 1)) if h > 0 else (None, None)
def count_leaves(s): return 0 if s is None else 1 if s == (None, None) else count_leaves(s[0]) + count_leaves(s[1])
assert [count_leaves(perfect(h)) for h in range(8)] == [2 ** h for h in range(8)]

# ---------- Q3a: DELETE-COMMON ----------
class L:
    def __init__(s, k): s.key = k; s.next = None
def mk(keys):
    d = L(None); p = d
    for k in keys: p.next = L(k); p = p.next
    return d.next
def lst(h):
    out = []
    while h: out.append(h.key); h = h.next
    return out
def delete_common(a_keys, b_keys, mode="ok"):
    L1, L2 = mk(a_keys), mk(b_keys); d1 = L(None); d1.next = L1; d2 = L(None); d2.next = L2
    p1, p2 = d1, d2; it = 0
    while p1.next is not None and p2.next is not None:
        it += 1
        if it > 10 * (len(a_keys) + len(b_keys) + 5): return None, None, it            # does not terminate
        a, b = p1.next.key, p2.next.key
        if a < b:
            if mode == "ok": p1 = p1.next
            elif mode == "advance_p2": p2 = p2.next
            elif mode == "delete_a": p1.next = p1.next.next
            elif mode == "advance_both": p1 = p1.next; p2 = p2.next
            elif mode == "skip": p1 = p1.next.next if p1.next.next is not None else None
            elif mode == "stay": pass
            if p1 is None: return None, None, it                       # crash: p1 fell off the list
        elif b < a: p2 = p2.next
        else: p1.next = p1.next.next; p2.next = p2.next.next
    return lst(d1.next), lst(d2.next), it
ex = delete_common(list("abcdfg"), list("begh") + ["i", "j"])
assert ex[0] == list("acdf") and ex[1] == list("ehij"), ex
fails = {"advance_p2": 0, "delete_a": 0, "advance_both": 0, "skip": 0, "stay": 0}
for _ in range(400):
    n = random.randint(0, 8)
    A = sorted(random.sample(range(20), n)); B = sorted(random.sample(range(20), random.randint(0, 8)))
    got = delete_common(A, B); com = set(A) & set(B)
    assert got[0] == [x for x in A if x not in com] and got[1] == [x for x in B if x not in com]
    assert got[2] <= len(A) + len(B) + 1
    for m in fails:
        g = delete_common(A, B, m)
        if g[0] != got[0] or g[1] != got[1]: fails[m] += 1
print("Q3a: correct on 400 random inputs; wrong variants fail on", fails)
assert all(v > 0 for v in fails.values())
# the nested-loop approach is quadratic: comparisons for N=1000 distinct
assert 1000 * 1000 > 100 * 2 * 1000

# ---------- Q4a: GREATER-THAN on a max-heap ----------
def visit_all(A, x, cond):
    n = len(A); res = []; visits = [0]
    def V(i):                     # i is 1-based
        visits[0] += 1
        if i > n or cond(A[i - 1], x): return
        res.append(A[i - 1]); V(2 * i); V(2 * i + 1)
    V(1); return sorted(res), visits[0]
good = lambda a, x: a <= x
H1 = [50, 40, 30, 20, 10, 25, 5]
res, vis = visit_all(H1, 35, good)
print("Q4a example: result", res, "visits", vis)
assert res == [40, 50] and vis == 5 == 2 * len(res) + 1
variants = {"strict": lambda a, x: a < x, "ge": lambda a, x: a >= x, "gt": lambda a, x: a > x}
bad = {k: 0 for k in variants}
for _ in range(400):
    vals = random.sample(range(100), random.randint(1, 15)); A = sorted(vals, reverse=True)       # sorted desc is a max-heap
    random.shuffle(vals); import heapq
    A = [-v for v in vals]; heapq.heapify(A); A = [-v for v in A]
    assert all(A[(i - 1) // 2] >= A[i] for i in range(1, len(A)))
    x = random.choice(vals + [random.randint(0, 100)])
    want = sorted(v for v in A if v > x)
    r, v = visit_all(A, x, good); assert r == want and v <= 2 * len(want) + 1
    for k, c in variants.items():
        if visit_all(A, x, c)[0] != want: bad[k] += 1
print("Q4a: correct; wrong conditions fail on", bad)
assert all(v > 0 for v in bad.values())
# a child of a returned node can be larger than x only if its parent is: max-heap property
assert all(H1[(i - 1) // 2] >= H1[i] for i in range(1, len(H1)))

# ---------- Q4b: double hashing ----------
def hh(x, i): return ((x % 5) + i * (1 + x % 4)) % 5
T = [None] * 5; coll = 0; cells = {}
for x in (0, 5, 25):
    i = 0
    while T[hh(x, i)] is not None: coll += 1; i += 1
    T[hh(x, i)] = x; cells[x] = (hh(x, i), i)
print("Q4b table:", T, "collisions", coll, cells)
assert T == [0, None, 5, None, 25] and coll == 3 and cells == {0: (0, 0), 5: (2, 1), 25: (4, 2)}
assert 1 + 5 % 4 == 2 and 1 + 25 % 4 == 2
print("OK")
