"""Refuter checks for 22B-B (independent)."""
import itertools, random, math, heapq

def h(t): return -1 if t is None else 1 + max(h(t[1]), h(t[2]))
def bal(t): return h(t[1]) - h(t[2])
rots = []
def rr(t):
    k, (lk, ll, lr), r = t; return (lk, ll, (k, lr, r))
def rl(t):
    k, l, (rk, a, b) = t; return (rk, (k, l, a), b)
def fix(t):
    if t is None: return None
    b = bal(t)
    if b > 1:
        if bal(t[1]) < 0: rots.append(("LR", t[0])); t = (t[0], rl(t[1]), t[2])
        else: rots.append(("LL", t[0]))
        return rr(t)
    if b < -1:
        if bal(t[2]) > 0: rots.append(("RL", t[0])); t = (t[0], t[1], rr(t[2]))
        else: rots.append(("RR", t[0]))
        return rl(t)
    return t
def pmin(t):
    if t[1] is None: return t[0], t[2]
    m, nl = pmin(t[1]); return m, fix((t[0], nl, t[2]))
def dele(t, x):
    if t is None: return None
    if x < t[0]: return fix((t[0], dele(t[1], x), t[2]))
    if x > t[0]: return fix((t[0], t[1], dele(t[2], x)))
    if t[1] is None: return t[2]
    if t[2] is None: return t[1]
    m, nr = pmin(t[2]); return fix((m, t[1], nr))
def keys(t): return [] if t is None else keys(t[1]) + [t[0]] + keys(t[2])
def show(t):
    if t is None: return "."
    if t[1] is None and t[2] is None: return str(t[0])
    return f"{t[0]}({show(t[1])},{show(t[2])})"
def isavl(t): return t is None or (abs(bal(t)) <= 1 and isavl(t[1]) and isavl(t[2]))
def L(k): return (k, None, None)
T = (34, (12, (5, L(3), None), (22, (20, L(15), None), L(28))), (51, L(42), (64, None, L(87))))
print("Q1 tree avl", isavl(T), "height", h(T), "bal root", bal(T), "keys", keys(T))
ok = []
for k in keys(T):
    rots.clear(); R = dele(T, k); assert isavl(R)
    print(f"  del {k}: rotations {rots}", end="")
    print()
    if not rots: ok.append(k)
print("Q1a: deletions with no rotation:", ok)
rots.clear(); R = dele(T, 34); print("Q1b rotations:", rots, "result", show(R), "h", h(R))
# intermediate trees
t1 = (42, T[1], (51, None, (64, None, L(87))))
print("Q1b after replacing: bal(51)", bal(t1[2]), "bal 64", bal(t1[2][2]))
t2 = (42, T[1], (64, L(51), L(87)))
print("bal(root)", bal(t2), "bal(12)", bal(t2[1]))

# Q2a: heap positions of 62 in a 63-element min-heap: brute force on small analogue + constructive on 63
def heap_ok(a): return all(a[(i - 1) // 2] <= a[i] for i in range(1, len(a)))
n = 63
cells = set()
for leaf in range(31, 63):  # 0-based leaves = 1-based 32..63
    a = list(range(1, 62))  # sorted -> valid heap
    # place 62 at 'leaf', 63 at another leaf: build array sorted but swap positions
    arr = list(range(1, 64))
    # need 62 at `leaf`: take sorted array, swap value 62 (index 61) with value at leaf
    arr[61], arr[leaf] = arr[leaf], arr[61]
    if heap_ok(arr): cells.add(leaf + 1)
print("Q2a: constructive sorted-swap heaps with 62 in leaf cells:", len(cells), "(need check all 32 via other method)")
# exhaustive analogue n=15 (1..15), element 14, all heaps by DFS count positions
def heaps_positions(N, val):
    pos = set()
    # generate all heaps via recursive placement of values in increasing order (each value goes to a cell whose parent is filled)
    def rec(v, filled):
        if v > N:
            return
        for c in range(N):
            if c in filled: continue
            if c == 0 or ((c - 1) // 2) in filled:
                if v == val: pos.add(c + 1)
                rec(v + 1, filled | {c})
    rec(1, frozenset())
    return pos
print("Q2a analogue N=7 value 6:", sorted(heaps_positions(7, 6)))
# direct for 63: 62 can be at leaf c iff all nodes on... verify via the placement process: values placed in increasing order; 62 placed at step 62: filled set of 61 cells + remaining 2 cells; 62 can go to any available cell (parent filled)
# After 61 placements, available cells = cells whose parent filled. Last two cells must both be leaves (parents placed). Any leaf can be 62.
avail_possible = set()
for last2 in itertools.combinations(range(31, 63), 2):  # two leaves left unfilled
    filled = set(range(63)) - set(last2)
    # heap-valid placement order exists since sorted order by depth works; 62 at either leaf
    avail_possible.update(c + 1 for c in last2)
print("Q2a: cells where 62 can be:", min(avail_possible), "-", max(avail_possible), len(avail_possible))
# internal cell impossibility: internal node has 2 children, only 63 > 62
print("Q2a: internal cell would need two larger values; only 1 exists")

# Q2b algorithm
def inc_large(A, build=True):
    n = len(A); k = n // 2
    sA = sorted(A)
    if k == 0: return A[:]
    sA = sorted(A); v = sA[n - k]
    A = A[:]; g = 0
    for i in range(n):
        if A[i] > v: A[i] += 1; g += 1
    for i in range(n):
        if A[i] == v and g < k: A[i] += 1; g += 1
    if build: heapq.heapify(A)
    return A
bad = badnb = 0; total = 0
for _ in range(4000):
    n = random.randint(1, 20)
    A = [random.randint(1, 6) for _ in range(n)]; heapq.heapify(A)
    k = n // 2; sA = sorted(A); exp = sorted(sA[:n - k] + [x + 1 for x in sA[n - k:]])
    R = inc_large(A)
    if sorted(R) != exp or not heap_ok(R): bad += 1
    R2 = inc_large(A, False)
    total += 1; badnb += (not heap_ok(R2))
print("Q2b mismatches with BUILD-HEAP:", bad, "; invalid without BUILD-HEAP:", badnb, "/", total)
A = [1, 2, 2, 3, 5, 2]; print("step heap valid", heap_ok(A), sorted(A)[3], "v=2; >v count", sum(a > 2 for a in A))
print("step explain array valid?", heap_ok([1, 2, 3, 3, 5, 2]))

# Q3a build
def build(S, lo, hi):
    if lo > hi: return None
    mid = (lo + hi) // 2
    return (S[mid - 1], build(S, lo, mid - 1), build(S, mid + 1, hi))
b = build([3, 8, 15, 21, 30], 1, 5)
print("Q3a tree:", show(b), "height", h(b), "(stored explanation claims 15(8(3),21(,30)): not what mid=floor gives)")
bad = 0
for _ in range(300):
    S = sorted(random.sample(range(1000), random.randint(0, 40)))
    t = build(S, 1, len(S)); bad += keys(t) != S
print("Q3a inorder mismatches", bad)
print("Q3b: ceil(log2(5!)) =", math.ceil(math.log2(math.factorial(5))))
# min comparisons for 5 elems is 7: known; verify lower bound
# Q4a counterexample check numerically
f = lambda n: n if n % 2 == 0 else 1
g = lambda n: 1 if n % 2 == 0 else n
print("Q4a f(100)/g(100)", f(100) / g(100), "g(101)/f(101)", g(101) / f(101))

# Q4b hashing
def hk(k, i): return ((k % 7) + i * (1 + k % 5)) % 7
Tb = [None] * 7
for x in (8, 1, 15, 4, 16):
    i = 0; pr = []
    while True:
        p = hk(x, i); pr.append(p)
        if Tb[p] is None: Tb[p] = x; break
        i += 1
    print(" ", x, pr)
print(Tb)

# Q5 union-find brute force
def sim(rule, tie_first=True):
    pass
class DS:
    def __init__(s, n, rule):
        s.p = list(range(n)); s.sz = [1] * n; s.rk = [0] * n; s.rule = rule
    def find(s, x, compress=True):
        r = x
        while s.p[r] != r: r = s.p[r]
        if compress:
            while s.p[x] != r: s.p[x], x = r, s.p[x]
        return r
    def union(s, a, b):
        ra, rb = s.find(a), s.find(b)
        if ra == rb: return
        if s.rule == "size":
            if s.sz[ra] >= s.sz[rb]: s.p[rb] = ra; s.sz[ra] += s.sz[rb]
            else: s.p[ra] = rb; s.sz[rb] += s.sz[ra]
        elif s.rule == "rank":
            if s.rk[ra] >= s.rk[rb]:
                s.p[rb] = ra
                if s.rk[ra] == s.rk[rb]: s.rk[ra] += 1
            else: s.p[ra] = rb
        else:  # naive: second under first
            s.p[rb] = ra
    def height(s):
        mx = 0
        for x in range(len(s.p)):
            d = 0; y = x
            while s.p[y] != y: y = s.p[y]; d += 1
            mx = max(mx, d)
        return mx
def depths(ds):
    out = []
    for x in range(len(ds.p)):
        d = 0; y = x
        while ds.p[y] != y: y = ds.p[y]; d += 1
        out.append(d)
    return out
for rule in ("size", "rank", "naive"):
    found = {}  # height3 states -> find outcomes
    cnt = 0
    for _ in range(20000):
        ds = DS(8, rule)
        for _ in range(7 if rule != "naive" else random.randint(7, 7)):
            while True:
                a, b = random.randrange(8), random.randrange(8)
                if ds.find(a, False) != ds.find(b, False): break
            ds.union(a, b)
        if ds.height() == 3:
            cnt += 1
            res = set()
            for x in range(8):
                import copy
                d2 = copy.deepcopy(ds); d2.find(x); res.add(d2.height())
            found[tuple(sorted(depths(ds)))] = found.get(tuple(sorted(depths(ds))), set()) | res
    print("Q5", rule, "height-3 trials", cnt, "depth profiles -> find-height outcomes:", found)
# official sequence
ds = DS(8, "size")
for a, b in [(0, 1), (2, 3), (4, 5), (6, 7), (0, 2), (4, 6), (0, 4)]: ds.union(a, b)
print("Q5 sequence height", ds.height(), "depths", depths(ds))
ds.find(7); print("after find(8): height", ds.height(), depths(ds))
