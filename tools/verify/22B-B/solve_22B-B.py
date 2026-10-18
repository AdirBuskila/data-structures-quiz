"""22B-B solver checks (no official key). ASCII only."""
import itertools, math, random, sys, pathlib, copy, heapq
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL, N, up, H

def build(spec):
    if spec is None: return None
    if not isinstance(spec, tuple): spec = (spec, None, None)
    n = N(spec[0]); n.l = build(spec[1]); n.r = build(spec[2]); up(n); return n
def show(n):
    if n is None: return "."
    if n.l is None and n.r is None: return str(n.k)
    return "%s(%s,%s)" % (n.k, show(n.l), show(n.r))
def keys(n): return [] if n is None else keys(n.l) + [n.k] + keys(n.r)
def isavl(n): return n is None or (abs(H(n.l) - H(n.r)) <= 1 and isavl(n.l) and isavl(n.r))
SPEC = (34, (12, (5, 3, None), (22, (20, 15, None), 28)), (51, 42, (64, None, 87)))
t0 = build(SPEC); assert isavl(t0) and keys(t0) == sorted(keys(t0))
# Q1a: deletion (successor replacement, as in avl.py) without any rotation
norot = []
for k in keys(t0):
    u = AVL(); u.root = build(SPEC); u.dele(k)
    assert isavl(u.root)
    if u.rot == 0: norot.append(k)
print("Q1a no-rotation deletions:", norot)
# Q1b: delete root 34 step by step
u = AVL(); u.root = build(SPEC); u.dele(34)
print("Q1b after deleting 34:", show(u.root), "basic rotations:", u.rot, "double:", u.dbl)

# Q2a: min-heap of 1..63 in A[1..63]: cells where 62 can be
def is_heap(a): return all(a[(i - 1) // 2] <= a[i] for i in range(1, len(a)))
cells = []
for pos in range(1, 64):
    # try: put 62 at pos, 63 at some leaf != pos, rest ascending in index order
    ok = False
    for p63 in range(32, 64):
        if p63 == pos: continue
        a = [None] * 64; a[pos] = 62; a[p63] = 63
        rest = iter(range(1, 62))
        for i in range(1, 64):
            if a[i] is None: a[i] = next(rest)
        if is_heap(a[1:]): ok = True; break
    if ok: cells.append(pos)
print("Q2a cells for 62:", cells[0], "..", cells[-1], "count", len(cells)); assert cells == list(range(32, 64))
# (the ascending fill is the best case for internal positions; 62 internal needs two children > 62: impossible)

# Q2b: Increase-Large: select threshold, +1 to the n/2 largest, build-heap; check result valid
def increase_large(a):
    n = len(a); k = n // 2
    if k == 0: return a[:]
    idx = sorted(range(n), key=lambda i: a[i])[n - k:]   # stands for SELECT, O(n)
    b = a[:]
    for i in idx: b[i] += 1
    heapq.heapify(b)                                       # BUILD-HEAP, O(n)
    return b, sorted(a)[:n - k] + [v + 1 for v in sorted(a)[n - k:]]
for _ in range(3000):
    a = [random.randint(0, 8) for _ in range(random.randint(1, 30))]; heapq.heapify(a)
    r = increase_large(a)
    if isinstance(r, tuple):
        b, want = r; assert is_heap(b) and sorted(b) == want
# distinct values: incrementing the n/2 largest never breaks the heap (no fix needed)
for _ in range(3000):
    a = random.sample(range(1000), random.randint(1, 30)); heapq.heapify(a)
    n = len(a); top = set(sorted(a)[n - n // 2:])
    b = [v + 1 if v in top else v for v in a]; assert is_heap(b)
print("Q2b: select + increment + build-heap valid; with distinct keys increment alone keeps the heap")

# Q3a: sort + build balanced BST from sorted array; inorder gives sorted
def bst_from_sorted(a):
    if not a: return None
    m = len(a) // 2
    return (a[m], bst_from_sorted(a[:m]), bst_from_sorted(a[m + 1:]))
def inorder(t): return [] if t is None else inorder(t[1]) + [t[0]] + inorder(t[2])
for _ in range(500):
    s = random.sample(range(1000), random.randint(0, 40)); assert inorder(bst_from_sorted(sorted(s))) == sorted(s)
print("Q3a: build from sorted array is a BST with the same keys")
# Q3b: log2(n!) = Theta(n log n)
for n in (10, 100, 1000): print("  log2(n!)/(n log2 n) at n=%d: %.3f" % (n, math.lgamma(n + 1) / math.log(2) / (n * math.log2(n))))

# Q4a: f = n on even, 1 on odd; g = 1 on even, n on odd
f = lambda n: n if n % 2 == 0 else 1
g = lambda n: 1 if n % 2 == 0 else n
print("Q4a f/g on evens:", [f(n) / g(n) for n in (10, 100, 1000)], "g/f on odds:", [g(n) / f(n) for n in (11, 101, 1001)])

# Q4b: double hashing
def h(k, i): return ((k % 7) + i * (1 + k % 5)) % 7
T = [None] * 7
for k in (8, 1, 15, 4, 16):
    i = 0; probes = []
    while T[h(k, i)] is not None: probes.append(h(k, i)); i += 1
    T[h(k, i)] = k; print("  insert %d: occupied probes %s -> cell %d (i=%d)" % (k, probes, h(k, i), i))
print("Q4b table:", T); assert T == [None, 8, 15, 1, 4, None, 16]

# Q5: union by size + path compression, 8 elements, height 3, find on the deepest node -> height 2
par = list(range(9)); size = [1] * 9
def find(x):
    r = x
    while par[r] != r: r = par[r]
    while par[x] != r: par[x], x = r, par[x]
    return r
def union(a, b):
    ra, rb = find(a), find(b)
    if ra == rb: return
    if size[ra] < size[rb]: ra, rb = rb, ra   # tie: the first argument's root stays root
    par[rb] = ra; size[ra] += size[rb]
def depth(x):
    d = 0
    while par[x] != x: x = par[x]; d += 1
    return d
for a, b in ((1, 2), (3, 4), (5, 6), (7, 8), (1, 3), (5, 7), (1, 5)): union(a, b)
print("Q5 parents:", par[1:], "depths:", [depth(x) for x in range(1, 9)])
assert max(depth(x) for x in range(1, 9)) == 3
deep = [x for x in range(1, 9) if depth(x) == 3]; assert deep == [8]
find(8)
print("  after find(8): parents", par[1:], "height", max(depth(x) for x in range(1, 9)))
assert max(depth(x) for x in range(1, 9)) == 2
# every union-by-size tree on 8 nodes of height 3 has exactly one node at depth 3 (binomial B3):
# exhaustive over all union sequences on 8 singletons (no finds)
import functools
def all_forests():
    seen = set(); out = []
    start = tuple(range(9))
    stack = [start]
    while stack:
        p = stack.pop()
        if p in seen: continue
        seen.add(p)
        roots = [x for x in range(1, 9) if p[x] == x]
        sz = {r: sum(1 for x in range(1, 9) if root(p, x) == r) for r in roots}
        if len(roots) == 1: out.append(p); continue
        for a in roots:
            for b in roots:
                if a != b and sz[a] >= sz[b]:
                    q = list(p); q[b] = a; stack.append(tuple(q))
    return out
def root(p, x):
    while p[x] != x: x = p[x]
    return x
def dep(p, x):
    d = 0
    while p[x] != x: x = p[x]; d += 1
    return d
cnt = 0
for p in all_forests():
    ds = [dep(p, x) for x in range(1, 9)]
    if max(ds) == 3: cnt += 1; assert ds.count(3) == 1
print("  height-3 single trees from unions only:", cnt, "- each has exactly one node at depth 3")
print("OK")
