"""25S-A independent refuter script (blind). ASCII only."""
import itertools, math, random

# ---- Q1: BST / AVL shapes, distance(max, 2nd max) ----
def ins(t, k):
    if t is None: return [k, None, None]
    (t.__setitem__(1, ins(t[1], k)) if k < t[0] else t.__setitem__(2, ins(t[2], k))); return t
def h(t): return -1 if t is None else 1 + max(h(t[1]), h(t[2]))
def avl(t): return t is None or (abs(h(t[1]) - h(t[2])) <= 1 and avl(t[1]) and avl(t[2]))
def path_to(t, k):
    p = []
    while t[0] != k:
        p.append(t[0]); t = t[1] if k < t[0] else t[2]
    return p + [k]
def dist(t, a, b):
    pa, pb = path_to(t, a), path_to(t, b)
    i = 0
    while i < min(len(pa), len(pb)) and pa[i] == pb[i]: i += 1
    return len(pa) + len(pb) - 2 * i
mx_bst = {}; mx_avl = {}; avl_vals = {}
for n in range(2, 9):
    best = 0; bavl = set()
    for p in itertools.permutations(range(n)):
        t = None
        for k in p: t = ins(t, k)
        d = dist(t, n - 1, n - 2); best = max(best, d)
        if avl(t): bavl.add(d)
    mx_bst[n] = best; avl_vals[n] = sorted(bavl)
print("1b worst BST dist by n:", mx_bst)
print("1c AVL dist values by n:", avl_vals)
t = None
for k in (6, 4, 5): t = ins(t, k)
print("1a shape 6,4,5 -> dist(6,5) =", dist(t, 6, 5))
t = None
for k in (8, 4, 15, 2, 7, 5, 13, 18, 14): t = ins(t, k)
print("c1 image tree: dist(4,13)=", dist(t, 4, 13), "dist(18,15)=", dist(t, 18, 15), "avl:", avl(t))

# ---- 2a: Dana ----
def heapify_min(a):
    for i in range(len(a) // 2 - 1, -1, -1):
        j = i
        while True:
            l, r, m = 2 * j + 1, 2 * j + 2, j
            if l < len(a) and a[l] < a[m]: m = l
            if r < len(a) and a[r] < a[m]: m = r
            if m == j: break
            a[j], a[m] = a[m], a[j]; j = m
def dana(a):
    heapify_min(a)
    for i in range(len(a)):
        l, r = 2 * i + 1, 2 * i + 2
        if r < len(a) and a[l] > a[r]: a[l], a[r] = a[r], a[l]
    return a
def is_minheap(a): return all(a[(i - 1) // 2] <= a[i] for i in range(1, len(a)))
def order_keeping(a):
    return all(not (2 * i + 2 < len(a)) or a[2 * i + 1] < a[2 * i + 2] for i in range(len(a)))
bad = 0
for _ in range(20000):
    n = random.randint(3, 10); a = random.sample(range(1, 50), n)
    r = dana(a[:])
    if not (is_minheap(r) and order_keeping(r)): bad += 1
print("2a: random inputs where Dana fails:", bad, "/ 20000")
# stored counterexample: already-valid heap
ce = [3, 21, 7, 22, 25, 15, 10]
print("ce is heap:", is_minheap(ce), " after Dana:", dana(ce[:]), "heap?", is_minheap(dana(ce[:])))
r = dana(ce[:]); print("violations:", [(r[(i - 1) // 2], r[i]) for i in range(1, len(r)) if r[(i - 1) // 2] > r[i]])
# smallest counterexample
print("tiny ce [1,5,2,3,4]:", dana([1, 5, 2, 3, 4]), "heap?", is_minheap(dana([1, 5, 2, 3, 4])))
ex = [1, 5, 2, 6, 7, 3, 4]; print("is heap:", is_minheap(ex), "->", dana(ex[:]), is_minheap(dana(ex[:])))

# ---- 2b/2c: double hashing ----
h1 = lambda x: x % 11
h2 = lambda x: 1 + (x % 7)
T = [None] * 11
for x in (11, 5, 6, 22, 7, 13):
    probes = []
    for i in range(11):
        s = (h1(x) + i * h2(x)) % 11; probes.append(s)
        if T[s] is None: T[s] = x; break
    print("insert", x, "probes", probes)
print("table:", {i: v for i, v in enumerate(T) if v is not None})
sols = []
for x in range(1, 200):
    if x in T: continue
    c = 0
    for i in range(11):
        s = (h1(x) + i * h2(x)) % 11
        if T[s] is None: break
        c += 1
    if c == 3: sols.append(x)
print("2c numbers with exactly 3 collisions (<200):", sols[:25], " 31 in?", 31 in sols)
x = 31
print("31 probes:", [(h1(x) + i * h2(x)) % 11 for i in range(4)])

# ---- 4a: lower bound info-theoretic ----
for n in (30, 300, 3000):
    lb = math.lgamma(n + 1) / math.log(2) - (n / 3) * math.log2(6)
    print("4a log2(n!/6^(n/3)) n=%d: %.0f vs n log2 n = %.0f ratio %.3f" % (n, lb, n * math.log2(n), lb / (n * math.log2(n))))
# ---- 4b: bounded steps -> range <= 3(n-1)
A = [10]
for _ in range(50): A.append(max(1, A[-1] + random.randint(-3, 3)))
print("4b range", max(A) - min(A), "<=", 3 * (len(A) - 1))

# ---- 5a: union by rank + path compression: can 16 elements have tree height 3? ----
def explore():
    # exhaustive-ish: random op sequences, track height
    found = set()
    for _ in range(40000):
        par = list(range(16)); rk = [0] * 16
        def find(x, comp=True):
            r = x
            while par[r] != r: r = par[r]
            if comp:
                while par[x] != r: par[x], x = r, par[x]
            return r
        def union(a, b):
            ra, rb = find(a), find(b)
            if ra == rb: return
            if rk[ra] < rk[rb]: par[ra] = rb
            elif rk[ra] > rk[rb]: par[rb] = ra
            else: par[rb] = ra; rk[ra] += 1
        for _ in range(random.randint(15, 40)):
            if random.random() < .75: union(random.randrange(16), random.randrange(16))
            else: find(random.randrange(16))
        roots = {find(i, False) for i in range(16)}
        if len(roots) == 1:
            def depth(x):
                d = 0
                while par[x] != x: x = par[x]; d += 1
                return d
            found.add(max(depth(i) for i in range(16)))
    return found
print("5a heights seen for single 16-element set (rank + compression):", sorted(explore()))
# 5c
def Tn(n, memo={}):
    if n < 2: return 1
    if n not in memo: memo[n] = Tn(n // 3) + Tn(n // 2) + n
    return memo[n]
for e in (10, 20, 40): print("5c T/n at 2^%d: %.3f" % (e, Tn(2 ** e) / 2 ** e))
