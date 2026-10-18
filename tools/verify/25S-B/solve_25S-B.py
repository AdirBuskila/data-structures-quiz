"""25S-B solver checks (no official key). ASCII only."""
import itertools, math, random, sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL

def dist(i, j):  # 1-based heap indices
    d = 0
    while i != j:
        if i > j: i //= 2
        else: j //= 2
        d += 1
    return d
def is_heap(a): return all(a[(i - 1) // 2] <= a[i] for i in range(1, len(a)))
def heaps(n):
    for p in itertools.permutations(range(1, n + 1)):
        if is_heap(p): yield p

# Q1a: distance(max, 2nd max) == 1 possible iff n even (distinct values)
for n in range(2, 10):
    poss = any(dist(p.index(n) + 1, p.index(n - 1) + 1) == 1 for p in heaps(n))
    assert poss == (n % 2 == 0), n
print("Q1a: distance 1 possible exactly for even n (n=2..9)")
ex = [1, 3, 2, 4]; assert is_heap(ex) and dist(4, 2) == 1
# construction for even n: sorted, swap A[n/2] and A[n-1]
for n in range(2, 300, 2):
    a = list(range(1, n + 1))
    if n >= 4: a[n // 2 - 1], a[n - 2] = a[n - 2], a[n // 2 - 1]
    assert is_heap(a) and dist(a.index(n) + 1, a.index(n - 1) + 1) == 1, n
print("Q1a: construction works for even n < 300")

# Q1b: worst distance(max, 2nd max)
def leafpair_max(n):
    leaves = [i for i in range(1, n + 1) if 2 * i > n]
    return max(dist(a, b) for a, b in itertools.combinations(leaves, 2)) if len(leaves) > 1 else None
def formula_b(n):
    h = int(math.floor(math.log2(n)))
    return 2 * h if n >= 3 * 2 ** (h - 1) else 2 * h - 1
for n in range(2, 10):
    worst = max(dist(p.index(n) + 1, p.index(n - 1) + 1) for p in heaps(n))
    assert worst == formula_b(n), (n, worst, formula_b(n))
for n in range(3, 600):
    assert leafpair_max(n) == formula_b(n), n
    # any two leaves can hold the two largest values: fill the rest ascending in index order
    leaves = [i for i in range(1, n + 1) if 2 * i > n]
print("Q1b: worst distance = 2*floor(log n) or 2*floor(log n)-1, matches brute force n<10 and leaf pairs n<600")

# Q1c: best distance(max, median), median = element of rank ceil(n/2) (and upper median too)
def best_med(n, rank):
    return min(dist(p.index(n) + 1, p.index(rank) + 1) for p in heaps(n))
for n in range(3, 10):
    lo = best_med(n, (n + 1) // 2); hi = best_med(n, n // 2 + 1)
    print("  n=%d best dist lower-median=%d upper-median=%d" % (n, lo, hi))
# construction for larger n: put median at parent of last node, max at last node
def construct(n):
    med = (n + 1) // 2
    p = n // 2
    a = [None] * (n + 1)
    a[n] = n; a[p] = med
    rest_small = [v for v in range(1, med)]          # values < med
    rest_big = [v for v in range(med + 1, n)]         # values in (med, n)
    if n - 1 != p and 2 * p + 1 <= n and 2 * p != n:
        pass
    sib = n - 1 if n % 2 == 1 else None               # other child of p
    if sib is not None: a[sib] = rest_big.pop()        # a big value
    free = [i for i in range(1, n + 1) if a[i] is None]
    # ancestors of p must be < med; give smallest values to lowest indices
    vals = sorted(rest_small + rest_big)
    for i, v in zip(free, vals): a[i] = v
    return a[1:]
for n in range(4, 2000):
    a = construct(n)
    assert sorted(a) == list(range(1, n + 1)) and is_heap(a), n
    assert dist(a.index(n) + 1, a.index((n + 1) // 2) + 1) == 1, n
print("Q1c: distance 1 achievable for every n in 4..1999")

# Q2a: AVL inserts
def show(n):
    if n is None: return "."
    if n.l is None and n.r is None: return str(n.k)
    return "%s(%s,%s)" % (n.k, show(n.l), show(n.r))
t = AVL()
for k in (10, 5, 20, 15, 40): t.ins(k)
t.rot = t.dbl = 0
print("Q2a start:", show(t.root))
for k in (80, 30, 70, 90, 75, 2, 100):
    r0, d0 = t.rot, t.dbl
    t.ins(k)
    print("  insert %3d: %s   rotations=%d (double=%d)" % (k, show(t.root), t.rot - r0, t.dbl - d0))

# Q2b/c cuckoo: insertion always starts in T1; a cell once filled is never emptied (insert only)
h1 = lambda x: x % 11
h2 = lambda x: (x // 11) % 11
def cuckoo(seq):
    T = [[None] * 11, [None] * 11]
    for x in seq:
        side = 0
        for _ in range(50):
            pos = h1(x) if side == 0 else h2(x)
            T[side][pos], x = x, T[side][pos]
            if x is None: break
            side ^= 1
        else:
            raise RuntimeError("cycle")
    return T
def table(left, right):
    T = [[None] * 11, [None] * 11]
    for i, v in left.items(): T[0][i] = v
    for i, v in right.items(): T[1][i] = v
    return T
tab1 = table({1: 67, 6: 105, 9: 53}, {0: 6, 6: 75, 9: 100})
tab2 = table({1: 100, 6: 105, 7: 18}, {0: 6, 3: 40, 4: 53, 6: 67})
for T in (tab1, tab2):
    for i, v in enumerate(T[0]): assert v is None or h1(v) == i
    for i, v in enumerate(T[1]): assert v is None or h2(v) == i
seq1 = [6, 75, 100, 105, 53, 67]
assert cuckoo(seq1) == tab1
print("Q2b table 1 reached by", seq1)
keys2 = [100, 105, 18, 6, 40, 53, 67]
found = any(cuckoo(p) == tab2 for p in itertools.permutations(keys2) if True)
assert not found
print("Q2c table 2: none of the 5040 insertion orders gives it (53 in T2 needs T1[9] filled)")

# Q4a: sort the special list in O(n) by repeatedly extracting the most frequent (= smallest) value
def sort_special(L):
    L = L[:]; out = []; ops = 0
    while L:
        m = min(L); ops += len(L)
        out += [v for v in L if v == m]; L = [v for v in L if v != m]; ops += len(L) + len(out)
    return out, ops
for k in range(1, 12):
    vals = random.sample(range(10 ** 6), k); vals.sort(reverse=True)
    L = [v for i, v in enumerate(vals) for _ in range(2 ** i)]
    random.shuffle(L); n = len(L); assert n == 2 ** k - 1
    out, _ = sort_special(L); assert out == sorted(L)
    # each pass scans the remaining part only: sum of remaining sizes < 2n
    rem = n; tot = 0
    while rem: tot += rem; rem //= 2
    assert tot < 2 * n
print("Q4a: passes scan n + n/2 + ... < 2n elements")

# Q5a: BST search path validity
def valid_path(path, target):
    lo, hi = -math.inf, math.inf
    for v in path[:-1]:
        if not (lo < v < hi): return False
        if target < v: hi = v
        else: lo = v
    return lo < path[-1] < hi and path[-1] == target
assert not valid_path([925, 202, 911, 240, 912, 245, 363], 363)
print("Q5a: path invalid (912 > 911 after going left at 911)")
# Q5b: min nodes of AVL height h (edges)
N = {0: 1, 1: 2}
for h in range(2, 6): N[h] = N[h - 1] + N[h - 2] + 1
print("Q5b: min AVL nodes by height:", N); assert N[4] == 12
# Q5c
def T(n): return 1 if n < 9 else 3 * T(n // 9) + n
for k in (6, 9, 12):
    n = 9 ** k; print("Q5c T/n at 9^%d: %.4f" % (k, T(n) / n))
print("OK")
