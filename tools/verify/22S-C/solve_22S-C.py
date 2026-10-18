"""22S-C solver checks (no official key). ASCII only."""
import itertools, math, random, sys, pathlib, heapq, copy
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL, N, up, H, rotations

def show(n):
    if n is None: return "."
    if n.l is None and n.r is None: return str(n.k)
    return "%s(%s,%s)" % (n.k, show(n.l), show(n.r))
def isavl(n): return n is None or (abs(H(n.l) - H(n.r)) <= 1 and isavl(n.l) and isavl(n.r))

# Q1b: minimum depth of a null (insert position) in an AVL tree of height h is >= ceil(h/2)
from avl import leaf_depths
A = leaf_depths(12)
for h in range(1, 13): assert min(A[h]) >= math.ceil(h / 2)
print("Q1b: min leaf depth in AVL of height h >= ceil(h/2) (h<=12)")

# Q2a: Fibonacci tree of height 4 (left heavier), delete the shallowest leaf on the right -> 2 rebalances
def fib(h, nxt):
    if h < 0: return None
    if h == 0:
        n = N(nxt[0]); nxt[0] += 1; return n
    l = fib(h - 1, nxt); n = N(nxt[0]); nxt[0] += 1; r = fib(h - 2, nxt)
    n.l, n.r = l, r; up(n); return n
t = AVL(); t.root = fib(4, [1]); assert t.root.h == 4 and isavl(t.root)
print("Q2a tree:", show(t.root))
def keys(n): return [] if n is None else keys(n.l) + [n.k] + keys(n.r)
best = None
for k in keys(t.root):
    u = AVL(); u.root = copy.deepcopy(t.root); u.dele(k)
    assert isavl(u.root)
    if u.rot - u.dbl >= 2 and (best is None):
        best = k
    if u.rot - u.dbl >= 2:
        print("  delete %d -> %s  rebalances=%d (single+double rotations, double counted once), basic rotations=%d" % (k, show(u.root), u.rot - u.dbl, u.rot))

# Q2b: perfect tree of height h has 2^h leaves
def perfect(h): return None if h < 0 else (perfect(h - 1), perfect(h - 1))
def nleaves(t): return 1 if t == (None, None) else nleaves(t[0]) + nleaves(t[1])
for h in range(0, 12): assert nleaves(perfect(h)) == 2 ** h
print("Q2b: leaves = 2^h for h<12")

# Q3a: delete common values from two sorted singly linked lists, O(N)
class L:
    def __init__(s, k, nx=None): s.k = k; s.nx = nx
def mk(a):
    h = None
    for x in reversed(a): h = L(x, h)
    return h
def tolist(h):
    out = []
    while h: out.append(h.k); h = h.nx
    return out
def del_common(h1, h2):
    d1 = L(None, h1); d2 = L(None, h2)   # dummy heads
    p1, p2 = d1, d2; steps = 0
    while p1.nx and p2.nx:
        steps += 1
        a, b = p1.nx.k, p2.nx.k
        if a < b: p1 = p1.nx
        elif b < a: p2 = p2.nx
        else: p1.nx = p1.nx.nx; p2.nx = p2.nx.nx
    return d1.nx, d2.nx, steps
r = del_common(mk(list("abcdfg")), mk(list("beghij")))
assert tolist(r[0]) == list("acdf") and tolist(r[1]) == list("ehij")
for _ in range(2000):
    N_ = random.randint(0, 12)
    a = sorted(random.sample(range(30), N_)); b = sorted(random.sample(range(30), N_))
    x, y, steps = del_common(mk(a), mk(b))
    assert tolist(x) == [v for v in a if v not in b] and tolist(y) == [v for v in b if v not in a]
    assert steps <= 2 * N_
print("Q3a: merge-style deletion correct, <= 2N steps")

# Q3b (HELD): the printed WHAT, read literally, does not terminate: check the recursion on A[1..n]
def what_calls(i, j, limit=10 ** 5):
    stack = [(i, j)]; calls = 0
    while stack:
        i, j = stack.pop(); calls += 1
        if calls > limit: return None
        if i < j:
            m = (i + j) // 4
            stack.append((i, m)); stack.append((m + 1, j))
    return calls
for n in (8, 20, 100):
    print("  literal WHAT(A[1..%d]) calls:" % n, what_calls(1, n))
# intended split at a quarter of the subarray: T(n) = T(n/4) + T(3n/4) + n -> Theta(n log n)
from functools import lru_cache
@lru_cache(None)
def T(n): return n if n <= 3 else n + T(n // 4) + T(n - n // 4)
for k in (10, 14, 18):
    n = 2 ** k; print("  T(n)/(n log2 n) at 2^%d: %.4f" % (k, T(n) / (n * math.log2(n))))

# Q4a: elements > x in a max-heap, O(m)
def greater(a, x):
    out = []; visited = 0; st = [0] if a else []
    while st:
        i = st.pop(); visited += 1
        if a[i] > x:
            out.append(a[i])
            for c in (2 * i + 1, 2 * i + 2):
                if c < len(a): st.append(c)
    return out, visited
for _ in range(3000):
    a = [-v for v in random.sample(range(100), random.randint(0, 40))]; heapq.heapify(a); a = [-v for v in a]
    x = random.randint(-5, 105)
    out, vis = greater(a, x); m = len(out)
    assert sorted(out) == sorted(v for v in a if v > x) and vis <= 2 * m + 1
print("Q4a: DFS returns exactly the elements > x, visits <= 2m+1 nodes")

# Q4b: double hashing h(x,i) = ((x mod 5) + i*(1 + x mod 4)) mod 5
def h(x, i): return ((x % 5) + i * (1 + x % 4)) % 5
def insert_all(seq):
    T = [None] * 5; col = 0
    for x in seq:
        i = 0
        while T[h(x, i)] is not None: col += 1; i += 1
        T[h(x, i)] = x
    return T, col
T_, col = insert_all([0, 5, 25])
print("Q4b: insert 0,5,25 ->", T_, "collisions:", col); assert col == 3
print("OK")
