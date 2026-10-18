"""22B-B step-author checks (solver-made items): every expected value used in tools/gen/gen_22B-B.py steps. ASCII output."""
import itertools, math, random, sys, pathlib, heapq
sys.setrecursionlimit(5000)

# ---------- AVL with a rotation log (keys of the tree in Q1) ----------
class N:
    def __init__(s, k, l=None, r=None): s.k = k; s.l = l; s.r = r
def h(n): return -1 if n is None else 1 + max(h(n.l), h(n.r))
def bf(n): return h(n.l) - h(n.r)
log = []
def rotR(y): x = y.l; y.l = x.r; x.r = y; return x
def rotL(x): y = x.r; x.r = y.l; y.l = x; return y
def fix(n):
    b = bf(n)
    if b > 1:
        kind = "LR" if bf(n.l) < 0 else "LL"
        if kind == "LR": n.l = rotL(n.l)
        r = rotR(n); log.append((kind, n.k, b, r.k)); return r
    if b < -1:
        kind = "RL" if bf(n.r) > 0 else "RR"
        if kind == "RL": n.r = rotR(n.r)
        r = rotL(n); log.append((kind, n.k, b, r.k)); return r
    return n
def dele(n, k):
    if n.k == k:
        if not n.l: return n.r
        if not n.r: return n.l
        s = n.r
        while s.l: s = s.l
        n.k = s.k; n.r = dele(n.r, s.k); return fix(n)
    if k < n.k: n.l = dele(n.l, k)
    else: n.r = dele(n.r, k)
    return fix(n)
def build(spec):
    if spec is None: return None
    if not isinstance(spec, tuple): spec = (spec, None, None)
    return N(spec[0], build(spec[1]), build(spec[2]))
def show(n):
    if n is None: return "."
    if n.l is None and n.r is None: return str(n.k)
    return "%s(%s,%s)" % (n.k, show(n.l), show(n.r))
def keys(n): return [] if n is None else keys(n.l) + [n.k] + keys(n.r)
def isavl(n): return n is None or (abs(bf(n)) <= 1 and isavl(n.l) and isavl(n.r))
SPEC = (34, (12, (5, 3, None), (22, (20, 15, None), 28)), (51, 42, (64, None, 87)))
t = build(SPEC); assert isavl(t) and keys(t) == sorted(keys(t))

# ---------- Q1a ----------
assert h(t) == 4 and bf(t) == 1 and h(t.l) == 3 and h(t.r) == 2
norot = []
for k in keys(t):
    log.clear(); u = dele(build(SPEC), k); assert isavl(u)
    if not log: norot.append(k)
print("Q1a deletions without rotation:", norot); assert norot == [12, 15, 20]
# distractor sets each contain a key whose deletion needs a rotation
need = {k for k in keys(t) if k not in norot}
for bad in ({3, 5, 15}, {15, 20, 28}, {22, 28, 42}): assert bad & need
# delete 3: node 12 gets balance factor -2 (left side 5 becomes a leaf)
v = build(SPEC); v.l.l.l = None
assert bf(v.l) == -2 and h(v.l.l) == 0 and h(v.l.r) == 2

# ---------- Q1b ----------
log.clear(); u = dele(build(SPEC), 34)
print("Q1b log:", log, show(u))
assert log == [("RR", 51, -2, 64), ("LR", 42, 2, 22)]
assert show(u) == "22(12(5(3,.),20(15,.)),42(28,64(51,87)))"
# before the second rotation: bf(root)=2 and bf(12)=-1
w = build((42, (12, (5, 3, None), (22, (20, 15, None), 28)), (64, 51, 87)))
assert bf(w) == 2 and bf(w.l) == -1
# successor of 34
assert min(k for k in keys(t) if k > 34) == 42

# ---------- Q2a: min-heap of 1..63, where can 62 be? ----------
def is_heap(a): return all(a[(i - 1) // 2] <= a[i] for i in range(1, len(a)))
cells = []
for pos in range(1, 64):
    ok = False
    for p63 in range(32, 64):
        if p63 == pos: continue
        a = [None] * 64; a[pos] = 62; a[p63] = 63
        rest = iter(range(1, 62))
        for i in range(1, 64):
            if a[i] is None: a[i] = next(rest)
        if is_heap(a[1:]): ok = True; break
    if ok: cells.append(pos)
assert cells == list(range(32, 64))
# exhaustive on 7 elements: where can 6 be? exactly the leaves 4..7
pos6 = {p.index(6) + 1 for p in itertools.permutations(range(1, 8)) if is_heap(list(p))}
print("Q2a (n=7, value 6) positions:", sorted(pos6)); assert pos6 == {4, 5, 6, 7}
assert 63 - 62 == 1 and len([k for k in range(1, 64) if k > 62]) == 1
assert sum(1 for i in range(1, 64) if 2 * i + 1 <= 63) == 31      # internal nodes of the complete 63-node tree
assert all(2 * i + 1 <= 63 for i in range(1, 32)) and 2 * 32 > 63  # every internal node has 2 children

# ---------- Q2b: Increase-Large ----------
def increase_large(a, first_dup_policy=True, rebuild=True):
    n = len(a); k = n // 2
    if k == 0: return a[:]
    v = sorted(a)[n - k]                      # the k-th largest value (SELECT)
    b = a[:]; g = 0
    for i in range(n):
        if b[i] > v: b[i] += 1; g += 1
    for i in (range(n) if first_dup_policy else reversed(range(n))):
        if a[i] == v and g < k: b[i] += 1; g += 1
    if rebuild: heapq.heapify(b)
    return b
ex = [1, 2, 2, 3, 5, 2]; assert is_heap(ex)
sv = sorted(ex); k = len(ex) // 2
assert sv == [1, 2, 2, 2, 3, 5] and sv[len(ex) - k] == 2
assert sum(1 for x in ex if x > 2) == 2 and k - 2 == 1
for _ in range(3000):
    a = [random.randint(0, 6) for _ in range(random.randint(1, 25))]; heapq.heapify(a)
    n = len(a); b = increase_large(a)
    s = sorted(a); want = sorted(s[:n - n // 2] + [x + 1 for x in s[n - n // 2:]])
    assert is_heap(b) and sorted(b) == want
# without BUILD-HEAP, ties can break the heap (and distinct keys cannot)
broken = sum(1 for _ in range(3000) if not is_heap(increase_large(heapq.nsmallest(0, []) or (lambda x: (heapq.heapify(x), x)[1])([random.randint(0, 4) for _ in range(random.randint(2, 20))]), True, False)))
print("Q2b: heaps with ties broken without BUILD-HEAP:", broken, "of 3000"); assert broken > 0
for _ in range(2000):
    a = random.sample(range(1000), random.randint(1, 25)); heapq.heapify(a)
    assert is_heap(increase_large(a, True, False))
# concrete tie example: incrementing the parent but not its equal child
ex2 = [1, 2, 2, 3, 5, 2]; bad = [1, 2, 3, 3, 5, 2]; assert not is_heap(bad)

# ---------- Q3a ----------
S = [3, 8, 15, 21, 30]
def bst(lo, hi, s, mutate=None):
    if lo > hi: return None
    mid = (lo + hi) // 2
    return (s[mid], bst(lo, mid - 1, s), bst(mid + 1, hi, s))
tr = bst(0, 4, S); assert tr[0] == 15
def ht(t_): return -1 if t_ is None else 1 + max(ht(t_[1]), ht(t_[2]))
assert ht(tr) == 2
def ino(t_): return [] if t_ is None else ino(t_[1]) + [t_[0]] + ino(t_[2])
for _ in range(300):
    s = sorted(random.sample(range(1000), random.randint(0, 40))); assert ino(bst(0, len(s) - 1, s)) == s
def build_variant(lo, hi, s, right_lo_off, left_hi, depth=0):
    if depth > 200: raise RecursionError
    if lo > hi: return None
    mid = (lo + hi) // 2
    return (s[mid], build_variant(lo, left_hi(mid, hi), s, right_lo_off, left_hi, depth + 1) if True else None,
            build_variant(mid + right_lo_off, hi, s, right_lo_off, left_hi, depth + 1))
def run_variant(left_hi):
    res = []
    for n in (1, 2, 3, 7, 10):
        s = list(range(n))
        try:
            t_ = build_variant(0, n - 1, s, 1, left_hi); res.append(ino(t_) == s)
        except RecursionError: res.append("hang")
        except IndexError: res.append("crash")
    return res
print("Q3a variants (n=1,2,3,7,10):")
good = run_variant(lambda mid, hi: mid - 1); print("  mid-1:", good); assert all(x is True for x in good)
v_mid = run_variant(lambda mid, hi: mid); print("  mid  :", v_mid); assert "hang" in v_mid
v_p1 = run_variant(lambda mid, hi: mid + 1); print("  mid+1:", v_p1); assert not all(x is True for x in v_p1)
v_hi = run_variant(lambda mid, hi: hi); print("  hi   :", v_hi); assert "hang" in v_hi or not all(x is True for x in v_hi)

# ---------- Q3b ----------
def lg_fact_ceil(n): return math.ceil(math.log2(math.factorial(n)))
assert math.factorial(5) == 120 and lg_fact_ceil(5) == 7
# every comparison sort of 5 elements needs 7 comparisons in the worst case: 2^6=64 < 120 <= 128
assert 2 ** 6 < 120 <= 2 ** 7
class T:
    def __init__(s, k): s.k = k; s.l = None; s.r = None
def ins(r, k):
    if r is None: return T(k)
    if k < r.k: r.l = ins(r.l, k)
    else: r.r = ins(r.r, k)
    return r
def inorder(r): return [] if r is None else inorder(r.l) + [r.k] + inorder(r.r)
def preorder(r): return [] if r is None else [r.k] + preorder(r.l) + preorder(r.r)
pre_unsorted = 0
for _ in range(200):
    ks = random.sample(range(100), random.randint(3, 15)); r = None
    for k_ in ks: r = ins(r, k_)
    assert inorder(r) == sorted(ks)
    if preorder(r) != sorted(ks): pre_unsorted += 1
print("Q3b: preorder of a BST is unsorted in", pre_unsorted, "of 200"); assert pre_unsorted > 0

# ---------- Q4a ----------
f = lambda n: n if n % 2 == 0 else 1
g = lambda n: 1 if n % 2 == 0 else n
assert f(100) / g(100) == 100 and g(101) / f(101) == 101 and f(1000) / g(1000) == 1000
assert [f(n) / g(n) for n in (10, 100, 1000, 10 ** 4)] == [10, 100, 1000, 10 ** 4]

# ---------- Q4b ----------
def fill(step, keys=(8, 1, 15, 4, 16), m=7, first=lambda k: k % 7):
    T_ = [None] * m; info = {}
    for k in keys:
        i = 0
        while True:
            p = (first(k) + i * step(k)) % m
            if T_[p] is None: T_[p] = k; info[k] = (i + 1, p); break
            i += 1
            if i > 3 * m: return None, info
    return T_, info
good, info = fill(lambda k: 1 + k % 5)
print("Q4b:", good, info)
assert good == [None, 8, 15, 1, 4, None, 16] and info[1] == (2, 3) and info[15] == (2, 2) and info[16] == (3, 6)
assert 1 + 1 % 5 == 2 and 1 + 15 % 5 == 1 and 1 + 16 % 5 == 2
d1, _ = fill(lambda k: 1)                         # linear probing
d2, _ = fill(lambda k: 1 + k % 7)                 # wrong modulus in the step
d3, _ = fill(lambda k: k % 5 + 2)                 # off-by-one step
print("  distractors:", d1, d2, d3)
tabs = [tuple(x) if x else None for x in (good, d1, d2, d3)]
assert None not in tabs and len(set(tabs)) == 4

# ---------- Q5 ----------
par = list(range(9)); size = [1] * 9
def find(x):
    r = x
    while par[r] != r: r = par[r]
    while par[x] != r: par[x], x = r, par[x]
    return r
def union(a, b):
    ra, rb = find(a), find(b)
    if ra == rb: return
    if size[ra] < size[rb]: ra, rb = rb, ra
    par[rb] = ra; size[ra] += size[rb]
def depth(x):
    d = 0
    while par[x] != x: x = par[x]; d += 1
    return d
for a, b in ((1, 2), (3, 4), (5, 6), (7, 8), (1, 3), (5, 7), (1, 5)): union(a, b)
ds = [depth(x) for x in range(1, 9)]; print("Q5 depths:", ds)
assert max(ds) == 3 and ds.count(3) == 1 and depth(8) == 3
find(8)
ds2 = [depth(x) for x in range(1, 9)]; print("  after find(8):", ds2)
assert max(ds2) == 2 and ds2.count(2) == 2
assert math.log2(8) == 3
print("OK")
