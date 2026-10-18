"""22S-A step-author checks: every expected value used in tools/gen/gen_22S-A.py steps. ASCII output."""
import itertools, math, random, sys, pathlib, functools
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL, N, up, H

# ---------- Q2a: AVL with 12 nodes, every deletion lowers the height ----------
@functools.lru_cache(None)
def shapes(n):
    """all AVL shapes with n nodes, as (left, right) tuples / None, with height"""
    if n == 0: return [(None, -1)]
    out = []
    for nl in range(n):
        for (sl, hl) in shapes(nl):
            for (sr, hr) in shapes(n - 1 - nl):
                if abs(hl - hr) <= 1: out.append(((sl, sr), 1 + max(hl, hr)))
    return out
def build(shape, ctr):
    if shape is None: return None
    n = N(0); n.l = build(shape[0], ctr); n.k = ctr[0]; ctr[0] += 1; n.r = build(shape[1], ctr); up(n); return n
def keys(n): return [] if n is None else keys(n.l) + [n.k] + keys(n.r)
by_h = {}
for shp, h in shapes(12):
    t = AVL(); t.root = build(shp, [1]); assert H(t.root) == h
    ok = True
    for k in range(1, 13):
        u = AVL(); u.root = build(shp, [1]); u.dele(k)
        if H(u.root) != h - 1: ok = False; break
    by_h.setdefault(h, [0, 0]); by_h[h][0] += 1; by_h[h][1] += ok
print("Q2a AVL shapes with 12 nodes by height: [count, count satisfying 'every deletion lowers height']", by_h)
assert by_h[4][1] >= 1 and all(v[1] == 0 for h, v in by_h.items() if h != 4)
assert set(by_h) == {3, 4}                      # 12 nodes: height 3 or 4 only
def nmin(h): return 1 if h == 0 else 2 if h == 1 else nmin(h - 1) + nmin(h - 2) + 1
print("min nodes of AVL height 0..5:", [nmin(h) for h in range(6)]); assert nmin(4) == 12 and nmin(5) == 20 and nmin(3) == 7
# brute-force the minimum: smallest n having an AVL shape of height h
for h in range(5):
    m = min(n for n in range(1, 25) if any(hh == h for _, hh in shapes(n))); assert m == nmin(h), (h, m)
# a 4-node-per-level bound: max nodes of height 2 is 7
assert max(n for n in range(1, 12) if any(hh == 2 for _, hh in shapes(n))) == 7

# ---------- Q2b: perfect tree leaves = (n+1)/2 ----------
def perfect(h): return 1 if h == 0 else 1 + 2 * perfect(h - 1) * 0 + 2 * perfect(h - 1) - 0
def pn(h): return 2 ** (h + 1) - 1
def count(h):
    if h == 0: return 1, 1
    n1, l1 = count(h - 1); return 2 * n1 + 1, 2 * l1
for h in range(0, 8):
    n, l = count(h); assert n == pn(h) and l == (n + 1) // 2 == 2 ** h
print("Q2b h=3:", count(3), "h=4:", count(4))
assert count(3) == (15, 8) and count(4) == (31, 16)
# the buggy line: x1 = (n1+1)/2 = 2^(k+1) is false
for k in range(0, 8):
    n1 = 2 ** (k + 1) - 1; assert (n1 + 1) // 2 == 2 ** k != 2 ** (k + 1)
    # product 2^k * 2^k vs sum
for k in range(0, 6): assert 2 ** k + 2 ** k == 2 ** (k + 1)

# ---------- Q3a: rank by swap-to-first + partition ----------
A = [10, 8, 25, 12, 5, 4, 15, 32, 14, 45, 11]
x = 12
def partition_rank(a, x):
    a = a[:]; i = a.index(x); a[0], a[i] = a[i], a[0]
    pivot = a[0]; s = 0
    for j in range(1, len(a)):
        if a[j] < pivot: s += 1; a[s], a[j] = a[j], a[s]
    a[0], a[s] = a[s], a[0]
    return s + 1, sum(1 for v in A if v < x)
r, smaller = partition_rank(A, x)
assert r == 6 and smaller == 5 and sorted(A).index(x) + 1 == 6
for _ in range(500):
    a = random.sample(range(1000), random.randint(1, 40)); xx = random.choice(a)
    assert partition_rank(a, xx)[0] == sorted(a).index(xx) + 1
print("Q3a rank of 12:", r, "smaller:", smaller)

# ---------- Q3b: k nearest via select on differences ----------
k = 5
d = sorted(abs(v - x) for v in A if v != x)
thr = d[k - 1]
near = [v for v in A if v != x and abs(v - x) <= thr]
print("Q3b sorted differences (without x):", d, "k-th:", thr, "within:", sorted(near))
assert thr == 4 and len(near) == 5 and sorted(near) == [8, 10, 11, 14, 15]
# with ties at the threshold "<= threshold" may return more than k elements
tie = [0, 3, 3, 3, 7]; xt = 0
dd = sorted(abs(v - xt) for v in tie if v != xt)[1]; assert sum(1 for v in tie if v != xt and abs(v - xt) <= dd) == 3 > 2

# ---------- Q4a: recurrence tree T(n)=4T(n/4)+n ----------
def levels(n):
    out = []; nodes = 1; size = n
    while True:
        out.append((nodes, size, nodes * size))
        if size == 1: break
        nodes *= 4; size //= 4
    return out
lv = levels(4 ** 5)
print("Q4a levels (nodes,size,sum):", lv)
assert lv[3][0] == 64 and all(s == 4 ** 5 for _, _, s in lv) and len(lv) == 6
def T(n): return 1 if n <= 1 else 4 * T(n // 4) + n
for kk in range(1, 12): assert T(4 ** kk) == 4 ** kk * (kk + 1)
assert math.log(1024, 4) == 5.0
# Danny's coefficient 3.5 is not an integer count of calls
assert 3.5 != int(3.5)

# ---------- Q4b: cuckoo example ----------
h1 = lambda x: x % 5
h2 = lambda x: (x // 5) % 5
seq = [11, 12, 32, 6, 7]
T1 = [None] * 5; T2 = [None] * 5
def insert(x, limit=40):
    cur, tab, steps = x, 1, 0
    seen = set(); collisions = 0
    while True:
        T = T1 if tab == 1 else T2; pos = h1(cur) if tab == 1 else h2(cur)
        if T[pos] is None: T[pos] = cur; return collisions, False
        key = (tab, cur, tuple(T1), tuple(T2))
        if key in seen: return collisions, True      # cycle
        seen.add(key)
        T[pos], cur = cur, T[pos]; collisions += 1; tab = 2 if tab == 1 else 1
res = []
for v in seq[:4]:
    res.append(insert(v)); print("  after", v, "T1", T1, "T2", T2, res[-1])
print("  h2(12), h2(11), h2(32), h2(6):", h2(12), h2(11), h2(32), h2(6))
assert (h2(12), h2(11), h2(32), h2(6), h2(7)) == (2, 2, 1, 1, 1)
assert T2[1] == 32 and T2[2] == 11 and T1[2] == 12 and T1[1] == 6
c7 = insert(7); print("  insert 7 ->", c7)
assert c7[1] is True and c7[0] >= 4
# ---------- Q3b distractors: select on raw values / on signed differences does not give the k nearest ----------
def knearest(a, x, k):
    return sorted(sorted((v for v in a if v != x), key=lambda v: abs(v - x))[:k])
bad_vals = bad_signed = 0
for _ in range(300):
    a = random.sample(range(200), 15); xx = random.choice(a); kk = 4
    want = knearest(a, xx, kk)
    if want != sorted(sorted(a)[:kk]): bad_vals += 1
    sg = sorted(v for v in a if v != xx)[:0]
    sd = sorted((v for v in a if v != xx), key=lambda v: v - xx)[:kk]
    if want != sorted(sd): bad_signed += 1
# ---------- Q1e: heap sort is not stable (radix sort needs a stable column sort) ----------
import heapq
def heapsort_pairs(items):          # sort (key, tag) by key only with an array max-heap, standard in-place heapsort
    a = items[:]; n = len(a)
    def sift(i, n):
        while True:
            l, r, m = 2 * i + 1, 2 * i + 2, i
            if l < n and a[l][0] > a[m][0]: m = l
            if r < n and a[r][0] > a[m][0]: m = r
            if m == i: return
            a[i], a[m] = a[m], a[i]; i = m
    for i in range(n // 2 - 1, -1, -1): sift(i, n)
    for end in range(n - 1, 0, -1): a[0], a[end] = a[end], a[0]; sift(0, end)
    return a
unstable = False
for _ in range(200):
    items = [(random.randint(0, 3), j) for j in range(8)]
    if heapsort_pairs(items) != sorted(items, key=lambda p: p[0]): unstable = True; break
assert unstable
# radix sort (LSD, 2 digits) with a heap-sort column pass gives a wrong result on some input
def radix(nums, colsort):
    for d in (0, 1):
        pairs = colsort([((v // 10 ** d) % 10, v) for v in nums]); nums = [v for _, v in pairs]
    return nums
fail = any(radix(x, heapsort_pairs) != sorted(x) for x in ([random.randint(10, 99) for _ in range(10)] for _ in range(300)))
assert fail
print("Q1e: heapsort unstable and breaks radix sort on random inputs")
print("Q3b distractors fail in", bad_vals, "and", bad_signed, "of 300 random inputs")
assert bad_vals > 0 and bad_signed > 0
print("OK")
