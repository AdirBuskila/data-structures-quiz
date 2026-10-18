"""25B-C refuter: independent simulation. ASCII only."""
import itertools, math, random, bisect

# ---- Q1a: MYSTERY on array stack (1-based cells, t = index of top) ----
class St:
    def __init__(s): s.a = [None] * 11; s.t = 0
    def push(s, v): s.t += 1; s.a[s.t] = v
    def pop(s): v = s.a[s.t]; s.a[s.t] = None; s.t -= 1; return v
    def empty(s): return s.t == 0
def mystery(S, calls):
    calls[0] += 1
    if not S.empty():
        ind = S.t
        x = S.pop()
        mystery(S, calls)
        if ind % 2: S.push(2 * x)
S = St()
for v in (10, 9, 8, 7, 6, 5, 4): S.push(v)
print("after pushes t=", S.t, S.a[1:8])
calls = [0]; mystery(S, calls)
print("after MYSTERY t=", S.t, S.a[1:S.t + 1], "calls", calls[0])
for n in range(0, 10):
    S = St()
    for v in range(n): S.push(v)
    c = [0]; mystery(S, c); assert c[0] == n + 1

# ---- Q1c numerics ----
print("log2 3 =", math.log2(3))
def T(n, memo={}):
    if n == 1: return 1
    if n not in memo: memo[n] = 3 * T(n // 2) + n
    return memo[n]
for e in (10, 20, 40):
    n = 2 ** e; print("T/n^1.585 at 2^%d" % e, T(n) / n ** math.log2(3))

# ---- Q2a: build balanced BST from sorted array, heights ----
def build(a):
    if not a: return -1, 0
    m = len(a) // 2
    hl, _ = build(a[:m]); hr, _ = build(a[m + 1:])
    assert abs(hl - hr) <= 1
    return 1 + max(hl, hr), 1
print("n=10 height", build(list(range(10)))[0])
for n in range(1, 300):
    assert build(list(range(n)))[0] == n.bit_length() - 1

# ---- Q3 ----
order = [5, 3, 8, 1]; order.remove(5); print("first", order[0], "last", order[-1])

# ---- Q4a: implement algorithm, brute force vs naive ----
def solve(A, x):
    B = sorted((v, i + 1) for i, v in enumerate(A))
    vals = [b[0] for b in B]
    for v, i in B:
        if v == 0:
            if x == 0 and len(A) >= 2:
                for w, j in B:
                    if j != i: return (i, j)
            continue
        q = x / v
        if q == v: continue
        k = bisect.bisect_left(vals, q)
        if k < len(vals) and vals[k] == q: return (i, B[k][1])
    return 0
def naive(A, x):
    return any(A[i] * A[j] == x for i in range(len(A)) for j in range(i + 1, len(A)))
bad = 0
for _ in range(60000):
    n = random.randint(1, 7)
    A = random.sample(range(-6, 7), n)
    x = random.randint(-12, 12) if random.random() < .7 else random.choice([0, 4, 9, 16, -4])
    r = solve(A, x)
    if r == 0:
        ok = not naive(A, x)
    else:
        i, j = r; ok = i != j and A[i - 1] * A[j - 1] == x
    if not ok: bad += 1; print("BAD", A, x, r)
    if bad > 5: break
print("Q4a bad:", bad)
# option b "x/v > v" as the skip condition
def solve_b(A, x):
    B = sorted((v, i + 1) for i, v in enumerate(A)); vals = [b[0] for b in B]
    for v, i in B:
        if v == 0: continue
        q = x / v
        if q > v: continue
        k = bisect.bisect_left(vals, q)
        if k < len(vals) and vals[k] == q: return (i, B[k][1])
    return 0
print("option b on [2,5],x=4:", solve_b([2, 5], 4), " on [2,5],x=10:", solve_b([2, 5], 10))
A = [3, 8, 2, 6, 5]; B = sorted(A); print("sorted", B, "iteration found at", [k + 1 for k, v in enumerate(B) if (30 / v) in B and 30 / v != v][0])
print("binary search probes for n=1024:", int(math.log2(1024)) + 1)
# worst-case probe count measured
def probes(n, key):
    lo, hi, c = 0, n - 1, 0
    while lo <= hi:
        c += 1; m = (lo + hi) // 2
        if key == m: return c
        if key < m: hi = m - 1
        else: lo = m + 1
    return c
print("max probes 1024:", max(probes(1024, k) for k in range(-1, 1025)))

# ---- Q5 ----
# 5a: min-heap insertion of a value >= max never swaps; exhaustive check small heaps
def insert_swaps(h, v):
    h = h + [v]; i = len(h) - 1; s = 0
    while i > 0 and h[(i - 1) // 2] > h[i]:
        h[(i - 1) // 2], h[i] = h[i], h[(i - 1) // 2]; i = (i - 1) // 2; s += 1
    return s
ok = True
for n in range(0, 8):
    for p in itertools.permutations(range(n)):
        if all(p[(i - 1) // 2] <= p[i] for i in range(1, n)):
            if insert_swaps(list(p), 100) != 0: ok = False
print("5a: inserting max+ never swaps:", ok)
for e in (10, 100, 900):
    n = 2.0 ** e
    print("5c ratio e=%d" % e, (n * math.log2(math.sqrt(n)) + 0.5 * math.log10(n)) / (n * math.log2(n)))
