# 19B-B post-refute fix checks (arbiter/fixer, 2026-10-18). ASCII only.
# Run: PYTHONUTF8=1 py -I tools/verify/19B-B/fix_checks.py   (from the app root)
import heapq, itertools, random


# ---- Q3c: is every key of T2 in T1? official loop (as printed) vs the corrected loop
def official(A1, A2):                    # 1-indexed, as printed
    n, m = len(A1), len(A2); i = j = 1; flag = True
    while j < m and flag:
        if A1[i - 1] == A2[j - 1]: i += 1; j += 1
        elif A2[j - 1] > A1[i - 1]: flag = False
        else: j += 1
    return flag

def fixed(A1, A2, variant="ok"):         # 1-indexed, corrected
    n, m = len(A1), len(A2); i = j = 1; flag = True
    while i <= n and j <= m and flag:
        if A1[i - 1] == A2[j - 1]: i += 1; j += 1
        elif A2[j - 1] < A1[i - 1]: flag = False
        else:                            # A1[i] < A2[j]
            if variant == "ok": i += 1
            elif variant == "j": j += 1
            elif variant == "no": flag = False
            elif variant == "both": i += 1; j += 1
    return flag and j > m

random.seed(3)
bad = 0; fails = {"j": 0, "no": 0, "both": 0}
for _ in range(3000):
    n = random.randint(1, 8); m = random.randint(1, n)
    A1 = sorted(random.sample(range(1, 15), n)); A2 = sorted(random.sample(range(1, 15), m))
    truth = set(A2) <= set(A1)
    try: bad += official(A1, A2) != truth
    except IndexError: bad += 1
    assert fixed(A1, A2) == truth
    for v in fails: fails[v] += fixed(A1, A2, v) != truth
assert bad > 0 and all(c > 0 for c in fails.values())
assert official([1, 2, 3], [5]) is True and fixed([1, 2, 3], [5]) is False
assert official([2, 5], [8]) is True and fixed([2, 5], [8]) is False
assert official([2, 6, 7, 9], [6, 9]) is False and fixed([2, 6, 7, 9], [6, 9]) is True
# step: T1={2,6,7,9}, T2={6,9}: the first comparison is A1[1]=2 < A2[1]=6 -> advance i
assert fixed([2, 5], [8], "j") is True                 # advancing j: wrong "yes"
assert fixed([2, 6, 7, 9], [6, 9], "no") is False      # answering "no": wrong
assert fixed([2], [5], "both") is True                 # advancing both: skips 5, wrong "yes"
print("Q3c: printed loop wrong on", bad, "of 3000; corrected loop always right; distractor failures", fails)


# ---- Q4a: change A[2^r] in a min-heap of n=2^m keys: swaps <= max(r, m-r), and the bound is reached
def fix_swaps(H, idx, val):             # H 1-indexed list with H[0] unused
    H = H[:]; H[idx] = val; n = len(H) - 1; s = 0; i = idx
    while i > 1 and H[i] < H[i // 2]:
        H[i], H[i // 2] = H[i // 2], H[i]; i //= 2; s += 1
    while True:
        l, r = 2 * i, 2 * i + 1; b = i
        if l <= n and H[l] < H[b]: b = l
        if r <= n and H[r] < H[b]: b = r
        if b == i: break
        H[i], H[b] = H[b], H[i]; i = b; s += 1
    return s

random.seed(4)
for m in range(1, 6):
    n = 2 ** m
    for r in range(0, m + 1):
        best = 0
        for _ in range(300):
            keys = sorted(random.sample(range(10, 10 * n + 10), n))
            H = [None] + keys                       # sorted array is a min-heap; also try a shuffled valid heap
            if random.random() < 0.5:
                h = keys[:]; random.shuffle(h); heapq.heapify(h); H = [None] + h
            for val in (-1, 10 ** 6, H[2 ** r]):
                s = fix_swaps(H, 2 ** r, val)
                assert s <= max(r, m - r)
                best = max(best, s)
            assert fix_swaps(H, 2 ** r, H[2 ** r]) == 0   # unchanged key: 0 swaps
        assert best == max(r, m - r), (m, r, best)
print("Q4a: swaps <= max(r,m-r) for m=1..5, reached in the worst case, 0 for an unchanged key")


# ---- Q4b: insertion sort decision tree: minimum leaf depth n-1 (sorted input), maximum n(n-1)/2
def ins_comparisons(p):
    a = list(p); c = 0
    for k in range(1, len(a)):
        x = a[k]; i = k - 1
        while i >= 0:
            c += 1
            if a[i] > x: a[i + 1] = a[i]; i -= 1
            else: break
        a[i + 1] = x
    return c
for n in range(2, 8):
    cs = {p: ins_comparisons(p) for p in itertools.permutations(range(n))}
    assert min(cs.values()) == n - 1 and cs[tuple(range(n))] == n - 1
    assert max(cs.values()) == n * (n - 1) // 2 and cs[tuple(range(n - 1, -1, -1))] == n * (n - 1) // 2
print("Q4b: insertion sort min leaf depth n-1 (sorted input), max n(n-1)/2 (reversed input) for n=2..7")


# ---- Q5b: helper heap size in Min(m) never exceeds m+1
def min_m(A, m):                        # A 0-indexed min-heap array
    B = [(A[0], 0)]; out = []; peak = 1
    for _ in range(m):
        v, i = heapq.heappop(B); out.append(v)
        for c in (2 * i + 1, 2 * i + 2):
            if c < len(A): heapq.heappush(B, (A[c], c))
        peak = max(peak, len(B))
    return out, peak, len(B)
random.seed(5)
for _ in range(400):
    N = random.randint(20, 300); A = random.sample(range(10000), N); heapq.heapify(A)
    m = random.randint(1, 15)
    out, peak, size = min_m(A, m)
    assert out == sorted(A)[:m] and peak <= m + 1
A = [1, 3, 2, 6, 4, 5, 9, 8, 7, 10, 11, 12, 13, 14, 15]
out, peak, size = min_m(A, 3)
assert out == [1, 2, 3] and size == 4 and 3 * 3 >= 3 + 1
print("Q5b: helper heap never exceeds m+1 (3m is a looser bound); example prints 1,2,3 and B has 4 keys")
print("19B-B fix checks OK")
