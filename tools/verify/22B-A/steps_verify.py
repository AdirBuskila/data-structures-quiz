"""22B-A step checks (Q1a, Q1b, Q2 corrected, Q3, Q4a, Q4b, Q5). Run: py tools/verify/22B-A/steps_verify.py. ASCII only."""
import sys, pathlib, itertools, random, math
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL, N, up, H

# ---------- Q1a: AVL with 11 nodes ----------
def amin(h): return 1 if h == 0 else 2 if h == 1 else amin(h - 1) + amin(h - 2) + 1
assert [amin(h) for h in range(5)] == [1, 2, 4, 7, 12]
assert amin(4) == 12                       # step: min nodes of AVL height 4
assert 2 ** 3 - 1 == 7                     # step: max nodes at height 2
heights = [h for h in range(0, 8) if amin(h) <= 11 <= 2 ** (h + 1) - 1]
assert heights == [3], heights             # step: the height is forced
def build(spec):
    if spec is None: return None
    n = N(spec[0]); n.l = build(spec[1]); n.r = build(spec[2]); up(n); return n
L = lambda k: (k, None, None)
T1 = (6, (3, (2, L(1), None), (4, None, L(5))), (9, (8, L(7), None), (10, None, L(11))))
T2 = (6, (4, (2, L(1), L(3)), L(5)), (8, L(7), (10, L(9), L(11))))
for s in (T1, T2): assert build(s).h == 3
print("Q1a ok")

# ---------- Q1b: leaves > internal nodes when every internal node has >= 2 children ----------
def trees(n, minc):
    """all ordered trees with n nodes, every internal node having >= minc children; returns list of child-count shapes"""
    from functools import lru_cache
    @lru_cache(None)
    def forests(total, k):   # ordered forests of k trees with total nodes
        if k == 0: return [()] if total == 0 else []
        out = []
        for a in range(1, total - (k - 1) + 1):
            for t in T(a):
                for rest in forests(total - a, k - 1):
                    out.append((t,) + rest)
        return out
    @lru_cache(None)
    def T(n):
        res = []
        if n == 1: res.append(())
        for k in range(max(1, minc), n):
            for f in forests(n - 1, k): res.append(f)
        return res
    return T(n)
def count(t):
    if t == (): return (1, 0)
    lv = sum(count(c)[0] for c in t); inn = 1 + sum(count(c)[1] for c in t)
    return lv, inn
for n in range(1, 12):
    for t in trees(n, 2):
        lv, inn = count(t); assert lv > inn or n == 1 and lv == 1 and inn == 0
        assert lv > inn
for n in range(3, 8):                      # with only >= 1 child the claim is false (a path)
    assert any(count(t)[0] <= count(t)[1] for t in trees(n, 1))
# explicit coin simulation: every node passes exactly one coin to its parent; internal node keeps (children - 1)
def keeps(t): return len(t) - 1
assert keeps((((), ()),) * 1 + ((), ())) == 2          # a node with 3 children keeps 2 coins
for n in range(2, 10):
    for t in trees(n, 2):
        stack = [t]
        while stack:
            x = stack.pop()
            if x != ():
                assert keeps(x) >= 1; stack += list(x)
print("Q1b ok")

# ---------- Q2: corrected algorithm vs ground truth ----------
def truth(A):
    n = len(A); cnt = {}
    for a in A: cnt[a] = cnt.get(a, 0) + 1
    return any(c1 * 2 > n and any(v != u and c2 * 3 > n for v, c2 in cnt.items()) for u, c1 in cnt.items())
def alg(A, final, idx):
    n = len(A); S = sorted(A)
    X, Y, Z = S[idx(n, 2)], S[idx(n, 3, 1)], S[idx(n, 3, 2)]
    C = A.count(X)
    if C <= n / 2: return False
    C1, C2 = A.count(Y), A.count(Z)
    return final(n, X, Y, Z, C1, C2)
fixed = lambda n, X, Y, Z, C1, C2: not ((C1 <= n / 3 or Y == X) and (C2 <= n / 3 or Z == X))
orig = lambda n, X, Y, Z, C1, C2: not (C1 <= n / 3 and C2 <= n / 3)
only_y = lambda n, X, Y, Z, C1, C2: C1 > n / 3
idx0 = lambda n, d, k=1: (n * k) // d          # 0-based A[n/d]
idx1 = lambda n, d, k=1: max(0, (n * k) // d - 1)   # 1-based A[n/d]
fails = {}
for name, f in (("fixed", fixed), ("orig", orig), ("only_y", only_y)):
    for iname, ix in (("0", idx0), ("1", idx1)):
        bad = 0
        for n in range(1, 11):
            for A in itertools.product(range(1, 4), repeat=n):
                if alg(list(A), f, ix) != truth(list(A)): bad += 1
        fails[(name, iname)] = bad
print(fails)
assert fails[("fixed", "0")] == 0   # 0-based A[n/2], A[n/3], A[2n/3]
assert fails[("orig", "0")] > 0 and fails[("orig", "1")] > 0
assert fails[("only_y", "0")] > 0
both_x = lambda n, X, Y, Z, C1, C2: not (Y == X and Z == X)      # distractor d: false only if Y = X and Z = X
assert any(alg(list(A), both_x, idx0) != truth(list(A)) for n in range(1, 11) for A in itertools.product(range(1, 4), repeat=n))
A = [1] * 7 + [2] * 3
S = sorted(A); assert S[3] == 1 and A.count(1) == 7 and 7 > 10 / 3
assert S[10 // 3] == 1                               # Y equals X
assert alg(A, fixed, idx0) is False and truth(A) is False and alg(A, orig, idx0) is True
print("Q2 ok")

# ---------- Q3: merging m sorted arrays ----------
import heapq
def pairwise_rounds(m):
    r = 0
    while m > 1: m = (m + 1) // 2; r += 1
    return r
assert pairwise_rounds(16) == 4 and pairwise_rounds(8) == 3
def heap_merge(arrs):
    h = [(a[0], i, 0) for i, a in enumerate(arrs) if a]; heapq.heapify(h)
    out = []; extracts = 0; maxsize = len(h)
    while h:
        v, i, j = heapq.heappop(h); extracts += 1; out.append(v)
        if j + 1 < len(arrs[i]): heapq.heappush(h, (arrs[i][j + 1], i, j + 1))
        maxsize = max(maxsize, len(h))
    return out, extracts, maxsize
random.seed(1)
for m in (1, 3, 8, 16):
    arrs = [sorted(random.sample(range(1000), random.randint(1, 9))) for _ in range(m)]
    arrs = [sorted(set(a)) for a in arrs]
    # make values distinct across arrays
    flat = random.sample(range(10000), sum(len(a) for a in arrs)); k = 0; arrs2 = []
    for a in arrs:
        arrs2.append(sorted(flat[k:k + len(a)])); k += len(a)
    out, ex, ms = heap_merge(arrs2)
    assert out == sorted(flat) and ex == len(flat) and ms <= m
out, ex, ms = heap_merge([[1, 4], [2, 5, 8], [3, 6, 7, 9]]); assert ex == 9 and ms == 3
print("Q3 ok")

# ---------- Q4a: f=x, g=x^2, h=log ----------
import sympy as sp
x = sp.symbols("x", positive=True)
assert sp.limit(x / x ** 2, x, sp.oo) == 0                        # f = o(g)
assert sp.limit(sp.log(x) / sp.log(x ** 2), x, sp.oo) == sp.Rational(1, 2)   # h(f)/h(g) -> 1/2, not 0
for name, h, ok in (("x", x, False), ("x^2", x ** 2, False), ("log", sp.log(x), True), ("2^x", 2 ** x, False)):
    lim = sp.limit(h.subs(x, x) / h.subs(x, x ** 2), x, sp.oo)
    is_o = (lim == 0)
    assert (not is_o) == ok, (name, lim)
print("Q4a ok")

# ---------- Q4b: double hashing, 3 keys, max collisions ----------
def h(k, i): return ((k % 5) + i * (1 + k % 3)) % 5
def insert(tab, k):
    col = 0
    for i in range(5):
        j = h(k, i)
        if tab[j] is None: tab[j] = k; return col
        col += 1
    return None
tab = [None] * 5
c = [insert(tab, k) for k in (15, 30, 45)]
assert c == [0, 1, 2] and sum(c) == 3 and tab[:3] == [15, 30, 45]
assert 1 + 30 % 3 == 1
best = 0
for ks in itertools.permutations(range(0, 60), 3):
    t = [None] * 5; cs = [insert(t, k) for k in ks]
    if None not in cs: best = max(best, sum(cs))
assert best == 3
print("Q4b ok")

# ---------- Q5: union by size, 7 elements ----------
def max_height(n):
    from functools import lru_cache
    seen = set(); best = 0
    start = tuple(sorted([(1, 0)] * n))
    stack = [start]
    while stack:
        st = stack.pop()
        if st in seen: continue
        seen.add(st)
        if len(st) == 1: best = max(best, st[0][1]); continue
        for a, b in itertools.combinations(range(len(st)), 2):
            (s1, h1), (s2, h2) = st[a], st[b]
            rest = [st[i] for i in range(len(st)) if i not in (a, b)]
            opts = []
            if s1 >= s2: opts.append((s1 + s2, max(h1, h2 + 1)))
            if s2 >= s1: opts.append((s1 + s2, max(h2, h1 + 1)))
            for o in opts: stack.append(tuple(sorted(rest + [o])))
    return best
assert max_height(7) == 2 and max_height(8) == 3 and max_height(4) == 2 and max_height(2) == 1
assert math.floor(math.log2(7)) == 2
# note: naive union (link either root under the other) reaches height 6 for 7 elements: chain root under a new singleton
par = {0: None}
for k in range(1, 7):
    par[k] = None; par[k - 1] = k                         # union(find(old root), k): old root linked under the new singleton
def depth(x): return 0 if par[x] is None else 1 + depth(par[x])
assert max(depth(x) for x in par) == 6 >= 3
print("Q5 ok")

# ---------- arbiter additions: Q2 rank convention, Q4b sufficiency ----------
def _gt(A):
    n = len(A); c = {v: A.count(v) for v in set(A)}
    return any(c[x] > n / 2 and c[y] > n / 3 for x in c for y in c if x != y)
def _alg(A, conv):
    n = len(A); s = sorted(A)
    pick = {"0floor": lambda f: s[(f * n) // 6], "1ceil": lambda f: s[-(-(f * n) // 6) - 1],
            "1floor": lambda f: s[max((f * n) // 6 - 1, 0)]}[conv]
    X, Y, Z = pick(3), pick(2), pick(4)
    if A.count(X) <= n / 2: return False
    return not ((A.count(Y) <= n / 3 or Y == X) and (A.count(Z) <= n / 3 or Z == X))
bad = {c: 0 for c in ("0floor", "1ceil", "1floor")}
for n in range(1, 10):
    for A in itertools.combinations_with_replacement(range(4), n):
        for c in bad:
            if _alg(list(A), c) != _gt(list(A)): bad[c] += 1
assert bad["0floor"] == 0 and bad["1ceil"] == 0 and bad["1floor"] > 0, bad
assert _alg([0, 0, 0, 1, 1], "1floor") is False and _gt([0, 0, 0, 1, 1]) is True
A10 = sorted([1] * 7 + [2] * 3); assert A10[10 // 3] == A10[-(-10 // 3) - 1] == 1
def _coll(keys):
    tab = set(); c = 0
    for k in keys:
        i = 0
        while h(k, i) in tab: i += 1; c += 1
        tab.add(h(k, i))
    return c
assert _coll([15, 30, 45]) == 3 and _coll([0, 5, 13]) == 3
assert len({(k % 5, k % 3) for k in (0, 5, 13)}) > 1                    # remainders differ: the condition is not necessary
assert [h(5, 1), h(13, 0), h(13, 1), h(13, 2)] == [3, 3, 0, 2]
print("Q2 convention / Q4b sufficiency ok")
print("ALL 22B-A step checks ok")
