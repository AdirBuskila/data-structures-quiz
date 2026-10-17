"""Checks for 25S-A: hashing traces, BST/AVL max-distance brute force, recurrence, order-keeping heap counterexample."""
import sys
from functools import lru_cache

# --- Q2b1/Q2b2 double hashing, table size 11
def h(x, i): return ((x % 11) + i * (1 + x % 7)) % 11
T = [None] * 11
def ins(x):
    for i in range(11):
        j = h(x, i)
        if T[j] is None:
            T[j] = x; return j, i
for x in [11, 5, 6, 22, 7, 13]:
    ins(x)
exp = {0: 11, 2: 22, 5: 5, 6: 6, 7: 7, 9: 13}
assert {k: v for k, v in enumerate(T) if v is not None} == exp, T
# which new numbers collide exactly 3 times? show 31
def probes(x):
    c = 0
    for i in range(11):
        if T[h(x, i)] is None: return c, h(x, i)
        c += 1
assert probes(31) == (3, 10), probes(31)
print("hashing ok")

# --- Q1b/Q1c: max/second-max distance over all BSTs / AVL trees of n nodes (shapes)
def shapes(n):
    if n == 0: yield None; return
    for l in range(n):
        for L in shapes(l):
            for R in shapes(n - 1 - l):
                yield (L, R)
def height(t): return 0 if t is None else 1 + max(height(t[0]), height(t[1])) if False else (-1 if t is None else 1 + max(height(t[0]), height(t[1])))
def is_avl(t):
    if t is None: return True
    return abs(height(t[0]) - height(t[1])) <= 1 and is_avl(t[0]) and is_avl(t[1])
def number(t):
    """in-order labels; returns dict label->path (tuple of L/R)"""
    out = {}; c = [0]
    def go(t, p):
        if t is None: return
        go(t[0], p + "L"); out[c[0]] = p; c[0] += 1; go(t[1], p + "R")
    go(t, ""); return out
def dist(a, b):
    k = 0
    while k < min(len(a), len(b)) and a[k] == b[k]: k += 1
    return len(a) - k + len(b) - k
for n in range(2, 11):
    mb = ma = 0
    for t in shapes(n):
        P = number(t); d = dist(P[n - 1], P[n - 2])
        mb = max(mb, d)
        if is_avl(t): ma = max(ma, d)
    assert mb == n - 1, (n, mb)
    assert ma == 1, (n, ma)
print("bst max n-1, avl max 1 ok (n=2..10)")

# --- Q2a counterexample: buildheap(min) then swap children rule
heap = [3, 21, 7, 22, 25, 15, 10]
for i in range(1, len(heap)):
    assert heap[(i - 1) // 2] <= heap[i]
assert heap[1] > heap[2]  # left > right -> swap
heap[1], heap[2] = heap[2], heap[1]
bad = any(heap[(i - 1) // 2] > heap[i] for i in range(1, len(heap)))
assert bad
print("Q2a counterexample ok:", heap)

# --- Q5c T(n)=T(n/3)+T(n/2)+n : T(n)/n converges (<= 6)
@lru_cache(None)
def T_(n): return 1 if n < 2 else T_(n // 3) + T_(n // 2) + n
r = [T_(10 ** k) / 10 ** k for k in range(2, 9)]
assert all(x < 6.01 for x in r) and abs(r[-1] - r[-2]) < 0.1, r
print("recurrence ratio", [round(x, 3) for x in r])

# ======================= step-author checks (values used by steps in gen_25S-A.py) =======================
import random, math
from fractions import Fraction
random.seed(7)

# --- Q1b: the worst-case BST shape: n at root, 1 as left child, chain 2..n-1 going right
def worst_bst(n):
    par = {n: None}
    if n >= 2: par[1] = n
    for k in range(2, n): par[k] = k - 1
    return par
def depth_path(par, a):
    p = []
    while a is not None: p.append(a); a = par[a]
    return p
def tdist(par, a, b):
    pa, pb = depth_path(par, a), depth_path(par, b)
    common = set(pa) & set(pb)
    return min(pa.index(c) + pb.index(c) for c in common)
def is_bst(par, n):
    kids = {k: [] for k in par}
    for k, p in par.items():
        if p is not None: kids[p].append(k)
    def rng(k, lo, hi):
        if not (lo < k < hi): return False
        l = [c for c in kids[k] if c < k]; r = [c for c in kids[k] if c > k]
        if len(l) > 1 or len(r) > 1: return False
        return all(rng(c, lo, k) for c in l) and all(rng(c, k, hi) for c in r)
    root = [k for k, p in par.items() if p is None][0]
    return rng(root, 0, n + 1)
for n in range(3, 12):
    par = worst_bst(n)
    assert is_bst(par, n) and tdist(par, n, n - 1) == n - 1
STEP_Q1B_N7 = tdist(worst_bst(7), 7, 6); assert STEP_Q1B_N7 == 6
print("Q1b worst shape n=7 distance", STEP_Q1B_N7)

# --- Q1c: AVL: max distance over all shapes n=2..11, and the set of relations
rel = set(); mx = 0
for n in range(2, 12):
    for t in shapes(n):
        if not is_avl(t): continue
        P = number(t); a, b = P[n - 1], P[n - 2]
        d = dist(a, b); mx = max(mx, d)
        assert d == 1
        rel.add("max_is_parent" if b.startswith(a) else "max_is_child")
assert mx == 1 and rel == {"max_is_parent", "max_is_child"}, rel
print("Q1c AVL max distance 1, relations", sorted(rel))

# --- Q2a: buildheap leaves the example unchanged; after child swap, violation count
def buildheap(a):
    a = a[:]; n = len(a)
    for i in range(n // 2 - 1, -1, -1):
        while True:
            l, r, m = 2 * i + 1, 2 * i + 2, i
            if l < n and a[l] < a[m]: m = l
            if r < n and a[r] < a[m]: m = r
            if m == i: break
            a[i], a[m] = a[m], a[i]; i = m
    return a
ex = [3, 21, 7, 22, 25, 15, 10]
assert buildheap(ex) == ex
sw = ex[:]; sw[1], sw[2] = sw[2], sw[1]
viol = [(sw[(i - 1) // 2], sw[i]) for i in range(1, 7) if sw[(i - 1) // 2] > sw[i]]
assert viol == [(21, 15), (21, 10)], viol
STEP_Q2A_VIOL = len(viol); assert STEP_Q2A_VIOL == 2
assert sw == [3, 7, 21, 22, 25, 15, 10]
print("Q2a violations after swap:", viol)

# --- Q2b / Q2c step values
assert 1 + 22 % 7 == 2 and (22 % 11 + 1 * 2) % 11 == 2
assert 1 + 13 % 7 == 7 and (13 % 11 + 7) % 11 == 9
assert 1 + 31 % 7 == 4
assert [h(31, i) for i in range(4)] == [9, 2, 6, 10]
empty_cells = [i for i in range(11) if T[i] is None]
assert empty_cells == [1, 3, 4, 8, 10]
print("Q2b/Q2c step values ok", [h(31, i) for i in range(4)])

# --- Q3a: undo/redo structure from the solution vs reference model
class Cell:
    def __init__(s, v): s.val = v; s.und = []; s.red = []
class Sys:
    def __init__(s, init): s.A = [Cell(v) for v in init]
    def set(s, i, x):
        c = s.A[i]; c.und.append(c.val); c.val = x; c.red.clear()
    def undo(s, i):
        c = s.A[i]
        if not c.und: return
        c.red.append(c.val); c.val = c.und.pop()
    def redo(s, i):
        c = s.A[i]
        if not c.red: return
        c.und.append(c.val); c.val = c.red.pop()
class Ref:
    def __init__(s, init): s.h = [[v] for v in init]; s.p = [0] * len(init)
    def set(s, i, x): s.h[i] = s.h[i][:s.p[i] + 1] + [x]; s.p[i] += 1
    def undo(s, i):
        if s.p[i] > 0: s.p[i] -= 1
    def redo(s, i):
        if s.p[i] < len(s.h[i]) - 1: s.p[i] += 1
    def val(s, i): return s.h[i][s.p[i]]
for _ in range(300):
    n = random.randint(1, 4); init = [random.randint(0, 9) for _ in range(n)]
    S, R = Sys(init), Ref(init)
    for _ in range(60):
        op = random.choice("sur"); i = random.randrange(n)
        if op == "s": x = random.randint(0, 99); S.set(i, x); R.set(i, x)
        elif op == "u": S.undo(i); R.undo(i)
        else: S.redo(i); R.redo(i)
        assert [c.val for c in S.A] == [R.val(k) for k in range(n)]
S = Sys([5]); S.set(0, 7); S.set(0, 9); S.undo(0); S.undo(0); S.redo(0)
STEP_Q3A_TRACE = S.A[0].val; assert STEP_Q3A_TRACE == 7
S = Sys([5]); S.set(0, 7); S.undo(0); S.set(0, 8); S.redo(0)
STEP_Q3A_SETAFTER = S.A[0].val; assert STEP_Q3A_SETAFTER == 8
print("Q3a structure ok; traces", STEP_Q3A_TRACE, STEP_Q3A_SETAFTER)

# --- Q3b: max-heap with mutual pointers; max() == true max; sift cost <= log2(n)
class MH:
    def __init__(s, vals):
        s.v = vals[:]; s.h = list(range(len(vals))); s.pos = [0] * len(vals); s.sw = 0
        for i in range(len(s.h) // 2 - 1, -1, -1): s.down(i)
        for p, k in enumerate(s.h): s.pos[k] = p
    def swp(s, a, b):
        s.h[a], s.h[b] = s.h[b], s.h[a]; s.pos[s.h[a]] = a; s.pos[s.h[b]] = b; s.sw += 1
    def down(s, i):
        n = len(s.h)
        while True:
            l, r, m = 2 * i + 1, 2 * i + 2, i
            if l < n and s.v[s.h[l]] > s.v[s.h[m]]: m = l
            if r < n and s.v[s.h[r]] > s.v[s.h[m]]: m = r
            if m == i: return
            s.h[i], s.h[m] = s.h[m], s.h[i]; s.pos[s.h[i]] = i; s.pos[s.h[m]] = m; s.sw += 1; i = m
    def up(s, i):
        while i > 0 and s.v[s.h[(i - 1) // 2]] < s.v[s.h[i]]:
            s.swp(i, (i - 1) // 2); i = (i - 1) // 2
    def update(s, k, x):
        s.sw = 0; s.v[k] = x; s.up(s.pos[k]); s.down(s.pos[k])
        return s.sw
    def max(s): return s.v[s.h[0]]
for _ in range(200):
    n = random.randint(1, 40); vals = [random.randint(0, 50) for _ in range(n)]
    M = MH(vals); assert M.max() == max(vals)
    for _ in range(80):
        k = random.randrange(n); c = M.update(k, random.randint(0, 50))
        assert c <= max(1, math.floor(math.log2(n))), (c, n)
        assert M.max() == max(M.v)
        assert all(M.v[M.h[(i - 1) // 2]] >= M.v[M.h[i]] for i in range(1, n))
print("Q3b max-heap with pointers ok")

# --- Q4a: reduction: distinct array -> tripled -> sort -> dedupe == sorted original
for _ in range(300):
    n = random.randint(1, 30); a = random.sample(range(1000), n)
    t = [x for x in a for _ in range(3)]
    assert max(t.count(x) for x in set(t)) <= 3 and len(t) == 3 * n
    assert list(dict.fromkeys(sorted(t))) == sorted(a)
    t4 = [x for x in a for _ in range(4)]
    assert max(t4.count(x) for x in set(t4)) == 4
STEP_Q4A_LEN = len([x for x in range(7) for _ in range(3)]); assert STEP_Q4A_LEN == 21
print("Q4a reduction ok")

# --- Q4b: adjacent |diff|<=3 -> range <= 3(n-1) <= 3n; counting sort is linear and correct
best = 0
def rec(arr, n):
    global best
    if len(arr) == n:
        best = max(best, max(arr) - min(arr)); return
    for d in range(-3, 4): rec(arr + [arr[-1] + d], n)
rec([0], 6)
assert best == 15, best
STEP_Q4B_SPREAD = best
for _ in range(300):
    n = random.randint(1, 60); a = [random.randint(0, 100)]
    for _ in range(n - 1): a.append(a[-1] + random.randint(-3, 3))
    lo, hi = min(a), max(a); assert hi - lo <= 3 * n
    cnt = [0] * (hi - lo + 1)
    for x in a: cnt[x - lo] += 1
    assert [v + lo for v, c in enumerate(cnt) for _ in range(c)] == sorted(a)
print("Q4b spread n=6:", STEP_Q4B_SPREAD)

# --- Q5a: the drawn inverted tree (10 elements) has height 3; 6 more leaves under the root give 16, height 3
par = {1: None, 10: 1, 9: 1, 2: 1, 3: 1, 5: 1, 4: 3, 6: 5, 7: 5, 8: 7}
def ht(par): return max(len(depth_path(par, k)) - 1 for k in par)
assert len(par) == 10 and ht(par) == 3
for k in range(11, 17): par[k] = 1
assert len(par) == 16 and ht(par) == 3
print("Q5a drawn tree: 10 elements, height 3; 16 elements, height 3")

# --- Q5c: 1/3 + 1/2 = 5/6 < 1 => level sums shrink geometrically, T(n)=Theta(n)
assert Fraction(1, 3) + Fraction(1, 2) == Fraction(5, 6) < 1
assert sum(float(Fraction(5, 6) ** L) for L in range(200)) < 6.0001
print("Q5c 5/6 =", round(5 / 6, 4), "sum of level ratios 6")
