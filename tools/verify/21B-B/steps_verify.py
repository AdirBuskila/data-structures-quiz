"""21B-B step checks (Q2a, Q2b, Q3a, Q3b, Q4a, Q4b corrected). Run: py tools/verify/21B-B/steps_verify.py. ASCII only."""
import sys, pathlib, itertools, math
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL, N, up, H, rotations

# ---------- Q2: MM ----------
calls = 0
def MM(A, i, j):
    global calls
    calls += 1
    if j == i + 1:
        return (A[j], A[i]) if A[i] > A[j] else (A[i], A[j])
    k = (i + j) // 2
    m1, M1 = MM(A, i, k); m2, M2 = MM(A, k + 1, j)
    return (min(m1, m2), max(M1, M2))
A = [None, 3, 2, 1, 9]
assert MM(A, 1, 4) == (1, 9)
assert MM(A, 1, 2) == (2, 3) and MM(A, 3, 4) == (1, 9)
import random
random.seed(3)
for n in (2, 4, 8, 16, 32):       # the base case j=i+1 needs sizes that halve evenly
    B = [None] + [random.randint(0, 99) for _ in range(n)]
    r = MM(B, 1, n); assert r == (min(B[1:]), max(B[1:]))
for n in (4, 8, 16, 32):
    calls = 0; MM([None] + list(range(n)), 1, n)
    assert calls == n - 1, (n, calls)             # n-1 calls: linear, so T(n)=2T(n/2)+O(1)
assert calls == 31
# note: exact comparisons T(2)=1, T(n)=2T(n/2)+2 = 3n/2-2; sizes that are not powers of two never terminate
def mm_cmp(i, j, depth=0):
    if depth > 40: raise RecursionError
    if j == i + 1: return 1
    k = (i + j) // 2
    return mm_cmp(i, k, depth + 1) + mm_cmp(k + 1, j, depth + 1) + 2
ok_sizes = []
for n in range(2, 70):
    try:
        c = mm_cmp(1, n); ok_sizes.append(n); assert c == 3 * n // 2 - 2
    except RecursionError:
        pass
assert ok_sizes == [2, 4, 8, 16, 32, 64], ok_sizes
print("Q2 ok")

# ---------- Q3a: Fibonacci tree F10, delete the minimum ----------
cnt = [0]
def F(i):
    cnt[0] += 1
    n = N(cnt[0])
    if i == 0: pass
    elif i == 1: n.l = F(0)
    else: n.l = F(i - 2); n.r = F(i - 1)
    return n
def inorder_relabel(n, c):
    if n is None: return
    inorder_relabel(n.l, c); c[0] += 1; n.k = c[0]; inorder_relabel(n.r, c)
def fib(i):
    cnt[0] = 0; r = F(i); inorder_relabel(r, [0])
    def fix(n):
        if n is None: return
        fix(n.l); fix(n.r); up(n)
    fix(r); return r
def bal(n): return H(n.l) - H(n.r)
def isavl(n):
    return n is None or (abs(bal(n)) <= 1 and isavl(n.l) and isavl(n.r))
r = fib(10); assert isavl(r) and r.h == 10
# leftmost path length and balance factors on it
x = r; depth = 0; bfs = []
while x.l is not None:
    bfs.append(bal(x)); x = x.l; depth += 1
assert depth == 5, depth                             # leftmost path from F10 to the leftmost leaf
assert all(b == -1 for b in bfs), bfs                # every node on the path has balance factor -1
t = AVL(); t.root = fib(10)
t.dele(1)                                            # key 1 is the minimum
assert rotations(t) == 5, rotations(t)               # a double rotation counts once
print("Q3a ok")

# ---------- Q3b: full binary tree has an odd number of nodes ----------
def full_sizes(n, memo={}):
    if n in memo: return memo[n]
    if n == 1: return True
    res = False
    for a in range(1, n - 1):
        b = n - 1 - a
        if full_sizes(a) and full_sizes(b): res = True
    memo[n] = res; return res
sizes = [n for n in range(1, 60) if full_sizes(n)]
assert sizes == list(range(1, 60, 2)), sizes         # exactly the odd sizes occur
assert full_sizes(5) and full_sizes(1) and full_sizes(3)   # a full tree of 5 nodes has subtrees of sizes 1 and 3 (different heights)
assert not full_sizes(2) and not full_sizes(4)             # a general binary tree can have an even size, a full one cannot
for a, b in itertools.product(range(1, 40, 2), repeat=2):
    assert (a + b + 1) % 2 == 1 and (a + b) % 2 == 0   # odd+odd+1 is odd; odd+odd alone is even
print("Q3b ok")

# ---------- Q4a: merge two heaps with build-heap ----------
def sift_down(a, i, n):
    sw = 0
    while True:
        l, r, m = 2 * i + 1, 2 * i + 2, i
        if l < n and a[l] > a[m]: m = l
        if r < n and a[r] > a[m]: m = r
        if m == i: return sw
        a[i], a[m] = a[m], a[i]; i = m; sw += 1
def build_heap(a):
    sw = 0
    for i in range(len(a) // 2 - 1, -1, -1): sw += sift_down(a, i, len(a))
    return sw
def is_max_heap(a): return all(a[(i - 1) // 2] >= a[i] for i in range(1, len(a)))
Aa, Bb = [9, 5, 8], [7, 6, 4]
assert is_max_heap(Aa) and is_max_heap(Bb)
C = Aa + Bb; sw = build_heap(C)
assert sw == 1 and C == [9, 7, 8, 5, 6, 4] and is_max_heap(C)
def insert_all(a):
    h = []; sw = 0
    for v in a:
        h.append(v); i = len(h) - 1
        while i > 0 and h[(i - 1) // 2] < h[i]:
            h[(i - 1) // 2], h[i] = h[i], h[(i - 1) // 2]; i = (i - 1) // 2; sw += 1
    return sw
for k in (10, 14):
    n = 2 ** k; a = list(range(n))
    assert build_heap(list(a)) <= n and insert_all(a) > 3 * n   # ascending input: insertions cost ~ n log n swaps
print("Q4a ok")

# ---------- Q4b: lower bound for search ----------
import sympy as sp
from functools import lru_cache
@lru_cache(None)
def shapes_nodes(L):                                  # node counts of full binary trees with L leaves
    if L == 1: return frozenset([1])
    s = set()
    for a in range(1, L):
        for x in shapes_nodes(a):
            for y in shapes_nodes(L - a): s.add(1 + x + y)
    return frozenset(s)
for L in range(1, 12): assert shapes_nodes(L) == frozenset([2 * L - 1])
@lru_cache(None)
def minh(L):
    return 0 if L == 1 else 1 + min(max(minh(a), minh(L - a)) for a in range(1, L))
for L in range(1, 40): assert minh(L) == math.ceil(math.log2(L))
assert 2 * 16 - 1 == 31 and minh(16) == 4
n = sp.symbols("n", positive=True)
assert sp.limit(sp.log(2 * n - 1) / sp.log(n), n, sp.oo) == 1     # Theta(log n)
assert sp.limit(sp.log(2 * n - 1) / n, n, sp.oo) == 0              # not Theta(n)
print("Q4b ok")
print("ALL 21B-B step checks ok")
