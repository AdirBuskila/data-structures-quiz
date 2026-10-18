# SAMP-1 post-refute fix checks (arbiter/fixer, 2026-10-18). ASCII only.
# Run: PYTHONUTF8=1 py -I tools/verify/SAMP-1/fix_checks.py   (from the app root)
import itertools, math, random


# ---- Q1a: comparisons of Floyd BuildHeap (CLRS MIN-HEAPIFY) on a sorted array
def build_min_heap_comparisons(A):
    A = list(A); n = len(A); cnt = 0
    def heapify(i):
        nonlocal cnt
        l, r = 2 * i + 1, 2 * i + 2
        s = i
        if l < n:
            cnt += 1
            if A[l] < A[s]: s = l
        if r < n:
            cnt += 1
            if A[r] < A[s]: s = r
        if s != i:
            A[i], A[s] = A[s], A[i]; heapify(s)
    for i in range(n // 2 - 1, -1, -1):
        heapify(i)
    return cnt, A

for n in range(2, 200):
    c, H = build_min_heap_comparisons(range(n))
    assert c == n - 1, (n, c)
    assert H == list(range(n))                       # already a heap: no swaps
    internal = n // 2
    official_model = 2 * internal                    # the official count: 2 per internal node
    assert official_model == (n if n % 2 == 0 else n - 1)
    # the one-child node exists exactly when n is even
    assert (2 * (internal - 1) + 2 >= n) == (n % 2 == 0)   # last internal node has no right child
    assert c == (2 * (internal - 1) + 1 if n % 2 == 0 else 2 * internal)
    # any algorithm must compare every non-root node with something: >= n-1 comparisons (connectivity)
print("Q1a: BuildHeap on a sorted array uses n-1 comparisons for every n=2..199; official model gives n for even n")

# ---- Q1d: lower bound by merging (interleaving) and the non-interleaved O(log n) case
for n in (10, 100, 1000, 10000):
    lb = math.log2(math.comb(n, n // 2))
    assert lb > n / 2                                # Omega(n) comparisons to fix the interleaving
print("Q1d: log2 C(n,n/2) > n/2 for n=10..10^4 (merge lower bound); non-interleaved key ranges allow split/join")


# ---- Q3a: find_miss as printed (0-based, returns B[n+1]) vs the fix (B[n])
def find_miss(A, B, i, j, last):
    n = len(A)
    if A[0] != B[0]: return B[0]
    if i > j: return B[n + 1] if last == "official" else B[n]
    m = (i + j) // 2
    if A[m] != B[m] and A[m - 1] == B[m - 1]: return B[m]
    if A[m] == B[m]: return find_miss(A, B, m + 1, j, last)
    return find_miss(A, B, i, m - 1, last)

random.seed(1)
bad_off = bad_fix = end_cases = 0
for _ in range(4000):
    n = random.randint(1, 30)
    vals = random.sample(range(1, 100), n + 1); vals.sort()
    x = random.choice(vals)
    B = vals; A = [v for v in vals if v != x]
    try:
        ok = find_miss(A, B, 0, n - 1, "official") == x
    except IndexError:
        ok = False
    bad_off += not ok
    if x == B[-1]: end_cases += 1
    if not ok: assert x == B[-1]                     # only the missing-at-end case fails
    assert find_miss(A, B, 0, n - 1, "fixed") == x
    bad_fix += 0
assert bad_off == end_cases > 0 and bad_fix == 0
assert find_miss([1, 2, 3], [1, 2, 3, 4], 0, 2, "fixed") == 4
print("Q3a: printed find_miss fails on", bad_off, "of 4000 (all missing-at-end); with B[n]: 0 failures; A=[1,2,3],B=[1,2,3,4] -> B[3]=4")


# ---- Q4a: month counter of Buy; reset to 0 (printed) vs 1 (fix)
def month_counter(sales_months, reset):
    last, cnt = None, 0
    for mth in sales_months:
        if mth == last: cnt += 1
        else: cnt, last = reset, mth
    return cnt
seq = [1] * 7 + [2] * 50
assert month_counter(seq, 0) == 49 and month_counter(seq, 1) == 50
assert (month_counter(seq, 0) > 49, month_counter(seq, 1) > 49) == (False, True)
print("Q4a: 50 sales in a new month -> counter 49 with reset 0 (priority 2, wrong), 50 with reset 1 (priority 1)")
print("SAMP-1 fix checks OK")
