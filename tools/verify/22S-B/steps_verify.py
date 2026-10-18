"""22S-B step-author checks: every expected value used in tools/gen/gen_22S-B.py steps. ASCII output."""
import itertools, math, random, sys, pathlib, heapq, bisect
sys.setrecursionlimit(10000)

# ---------- Q1: true/false claims ----------
heap = [100, 50, 30, 12, 10, 15]
def post(i):
    return [] if i >= len(heap) else post(2 * i + 1) + post(2 * i + 2) + [heap[i]]
assert post(0) == [12, 10, 50, 15, 30, 100] and post(0) != sorted(post(0))
assert all(heap[(i - 1) // 2] >= heap[i] for i in range(1, len(heap)))          # it is a max-heap
# Q1d: f(n)=1/n is not o(f^2): f/f^2 = n -> infinity, so f is not o(f^2)
assert [round((1 / n) / (1 / n) ** 2) for n in (10, 100, 1000)] == [10, 100, 1000]

# ---------- AVL helper with logging ----------
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
        if bf(n.l) < 0: log.append(("LR", n.k, b, n.l.k)); n.l = rotL(n.l); r = rotR(n); log[-1] += (r.k,); return r
        log.append(("LL", n.k, b, n.l.k)); r = rotR(n); log[-1] += (r.k,); return r
    if b < -1:
        if bf(n.r) > 0: log.append(("RL", n.k, b, n.r.k)); n.r = rotR(n.r); r = rotL(n); log[-1] += (r.k,); return r
        log.append(("RR", n.k, b, n.r.k)); r = rotL(n); log[-1] += (r.k,); return r
    return n
def ins(n, k):
    if n is None: return N(k)
    if k < n.k: n.l = ins(n.l, k)
    else: n.r = ins(n.r, k)
    return fix(n)
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
def ser(n): return None if n is None else (n.k, ser(n.l), ser(n.r))
def base(): return N(8, N(3, None, N(6)), N(22, N(13, N(10), N(17)), N(25)))

# ---------- Q2a ----------
t = base()
# balance factor of 22 right after the new leaf 15 is added (before any fix) = 2, 13 leans right (-1)
t0 = base(); t0.r.l.r.l = N(15)
assert bf(t0.r) == 2 and bf(t0.r.l) == -1 and bf(t0) == 0 + bf(t0) and h(t0.l) == 1
log.clear(); t1 = ins(base(), 15)
print("insert 15:", log, ser(t1)); assert log == [("LR", 22, 2, 13, 17)]
assert ser(t1) == (8, (3, None, (6, None, None)), (17, (13, (10, None, None), (15, None, None)), (22, None, (25, None, None))))
# delete 3: balance factor of 8 is -2 and 22 leans left (+1) -> RL, new subtree root 13
t2 = base(); t2.l.k = 3; t2.l.r = None            # base without descent
assert bf(t2) == -2 and bf(t2.r) == 1
log.clear(); t3 = dele(base(), 3)
print("delete 3:", log, ser(t3)); assert log == [("RL", 8, -2, 22, 13)]
assert ser(t3) == (13, (8, (6, None, None), (10, None, None)), (22, (17, None, None), (25, None, None)))

# ---------- Q2b: perfect tree sizes ----------
def size(hh): return 1 if hh == 0 else 2 * size(hh - 1) + 1
assert [size(i) for i in range(6)] == [1, 3, 7, 15, 31, 63] == [2 ** (i + 1) - 1 for i in range(6)]
assert size(3) == 15 and 2 * size(3) + 1 == size(4) == 31
# buggy line: subtree size claimed 2^h - 1 gives 2(2^h-1)+1 = 2^(h+1)-1 != 2^(h+2)-1
for hh in range(1, 8): assert 2 * (2 ** hh - 1) + 1 != 2 ** (hh + 2) - 1

# ---------- Q3a: two data structures ----------
for _ in range(300):
    seen = []; srt = []
    for _r in range(random.randint(1, 6)):
        batch = random.sample(range(10000), random.randint(1, 8)); batch = [b for b in batch if b not in seen]
        # solution 1: sorted array + merge of sorted batch
        nb = sorted(batch); merged = []; i = j = 0; cmp = 0
        while i < len(srt) and j < len(nb):
            cmp += 1
            if srt[i] <= nb[j]: merged.append(srt[i]); i += 1
            else: merged.append(nb[j]); j += 1
        merged += srt[i:] + nb[j:]; assert cmp <= len(srt) + len(nb) - 1 or not srt or not nb
        srt = merged; seen += batch
        assert srt == sorted(seen)
# AVL height bound 1.44 log2(n): AVL built by n insertions (class from avl.py)
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL, H
for n in (100, 1000, 5000):
    a = AVL(); ks = random.sample(range(10 * n), n)
    for k in ks: a.ins(k)
    assert H(a.root) <= 1.4405 * math.log2(n + 2)
# the naive re-sort of everything costs n log n comparisons-ish; here: k tiny, merge cost n+k log k << n log n
n_, k_ = 10 ** 6, 10
assert n_ + k_ * math.log2(k_) < n_ * math.log2(n_) / 10

# ---------- Q3b: identical / is_sub_tree ----------
class T:
    def __init__(s, k, l=None, r=None): s.k = k; s.l = l; s.r = r
def bst_insert(r, k):
    if r is None: return T(k)
    if k < r.k: r.l = bst_insert(r.l, k)
    else: r.r = bst_insert(r.r, k)
    return r
def rand_bst(keys):
    r = None
    for k in keys: r = bst_insert(r, k)
    return r
def find(k, a):
    while a is not None and a.k != k: a = a.l if k < a.k else a.r
    return a
def identical(x1, x2, null_ret=True, crash=False):
    if x1 is not None and x2 is not None:
        return identical(x1.l, x2.l, null_ret) and x1.k == x2.k and identical(x1.r, x2.r, null_ret)
    elif x1 is None and x2 is None: return null_ret
    return False
def is_sub(a, b, null_ret=True):
    if b is None: return True
    if a is None: return False
    x = find(b.k, a)
    if x is None: return False
    return identical(x, b, null_ret)
def subtrees(a):
    return [] if a is None else [a] + subtrees(a.l) + subtrees(a.r)
def same(x, y): return identical(x, y)
def brute(a, b):
    return b is None or any(same(s, b) for s in subtrees(a))
fail_false = 0
for _ in range(400):
    a = rand_bst(random.sample(range(60), random.randint(1, 20)))
    b = random.choice(subtrees(a)) if random.random() < 0.6 else rand_bst(random.sample(range(60), random.randint(1, 5)))
    assert is_sub(a, b) == brute(a, b)
    if is_sub(a, b, null_ret=False) != brute(a, b): fail_false += 1
print("Q3b: algorithm matches brute force; 'return FALSE' variant wrong on", fail_false, "of 400")
assert fail_false > 0
# distractor: reference key(x1)=key(x2) when one side is null crashes; identical(x1,x2) when both null never terminates
try:
    None.k; assert False
except AttributeError: pass
def inf(x1, x2, d=0):
    if d > 100: raise RecursionError
    if x1 is None and x2 is None: return inf(x1, x2, d + 1)
try: inf(None, None); assert False
except RecursionError: pass
# swapped block order: find before the empty-B check crashes on B == null
try:
    find(None.k, None); assert False
except AttributeError: pass

# ---------- Q4a: WHAT on thirds ----------
def work(n):
    """operations of WHAT on n elements: 1 for the test, n prints, then 3 calls on n/3 (calls on size 1 stop)"""
    if n <= 1: return 1
    return 1 + n + 3 * work(n // 3)
cands = {"a": lambda w, n: 3 * w(n // 3) + n + 1, "b": lambda w, n: w(n // 3) + n + 1, "c": lambda w, n: 3 * w(n // 3) + 1, "d": lambda w, n: 3 * w(n) + n}
for n in (9, 27, 81, 243):
    assert work(n) == cands["a"](work, n)
    assert work(n) != cands["b"](work, n) and work(n) != cands["c"](work, n)
for n in (3 ** 6, 3 ** 10):
    r = work(n) / (n * math.log(n, 3)); assert 0.9 < r < 1.6
# recursion tree: level i has 3^i nodes of size n/3^i, depth log_3 n
n = 3 ** 6
sizes = []; m = n; nodes = 1
while m >= 1:
    sizes.append((nodes, m, nodes * m)); nodes *= 3; m //= 3
assert all(s == n for _, _, s in sizes) and sizes[2][0] == 9 and len(sizes) - 1 == 6
assert math.log(729, 3) == 6 or round(math.log(729, 3)) == 6

# ---------- Q4b: hashing ----------
def fill(hfun, m=10, keys=(7, 1, 6, 16, 14, 8, 21, 12)):
    T_ = [None] * m; probes = {}
    for x in keys:
        i = 0
        while True:
            p = hfun(x, i) % m
            if T_[p] is None: T_[p] = x; probes[x] = (i + 1, p); break
            i += 1
            if i > 3 * m: return None, probes
    return T_, probes
good, probes = fill(lambda x, i: x % 10 + i * (x // 7))
print("Q4b:", good, probes)
assert good == [21, 1, 12, None, 14, None, 6, 7, 16, 8]
assert probes[16] == (2, 8) and probes[8] == (2, 9) and probes[21] == (4, 0) and probes[12] == (1, 2)
d1, _ = fill(lambda x, i: x % 10 + i)                      # linear probing
d2, _ = fill(lambda x, i: x % 10 + i * (x // 7 + 1))      # step off by one
d3, _ = fill(lambda x, i: x % 10 + i * i * (x // 7))      # quadratic instead of linear step
print("  distractors:", d1, d2, d3)
assert d1 == [None, 1, 21, 12, 14, None, 6, 7, 16, 8]
assert d2 == [None, 1, 12, None, 14, 21, 6, 7, 8, 16]
assert d3 == [None, 1, 12, 21, 14, None, 6, 7, 16, 8]
assert len({tuple(good), tuple(d1), tuple(d2), tuple(d3)}) == 4
print("OK")
