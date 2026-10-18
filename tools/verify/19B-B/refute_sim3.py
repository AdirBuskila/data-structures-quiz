import sys, itertools, random
sys.stdout.reconfigure(encoding='utf8')

# ---- 19B-B Q3c: official loop, run literally (1-indexed, j<m, inverted comparison) ----
def official(T1, T2):
    A1 = [None] + sorted(T1)   # 1-indexed
    A2 = [None] + sorted(T2)
    n, m = len(T1), len(T2)
    i = j = 1
    ok = True
    steps = 0
    while j < m and ok:
        steps += 1
        if i > n: return "IndexError"
        if A1[i] == A2[j]:
            i += 1; j += 1
        elif A2[j] > A1[i]:
            ok = False
        else:
            j += 1
    return ok
def correct(T1, T2):
    return set(T2) <= set(T1)
def fixed(T1, T2):
    A1 = sorted(T1); A2 = sorted(T2)
    i = j = 0
    while j < len(A2) and i < len(A1):
        if A1[i] == A2[j]: i += 1; j += 1
        elif A1[i] < A2[j]: i += 1
        else: return False
    return j == len(A2)
bad = 0; tot = 0; examples = []
random.seed(1)
for _ in range(3000):
    n = random.randint(1, 6); m = random.randint(1, n)
    T1 = random.sample(range(1, 10), n); T2 = random.sample(range(1, 10), m)
    tot += 1
    try:
        o = official(T1, T2)
    except Exception as e:
        o = "Exception"
    c = correct(T1, T2)
    assert fixed(T1, T2) == c
    if o != c:
        bad += 1
        if len(examples) < 6: examples.append((sorted(T1), sorted(T2), o, c))
print("official loop wrong on", bad, "of", tot)
for e in examples: print(e)
print("official({1,2,3},{2}) =", official([1,2,3],[2]), " correct =", correct([1,2,3],[2]))
print("official({1,2,3},{1,2,3}) =", official([1,2,3],[1,2,3]))
print("official({1,2,3},{5}) (m=1, j<m never runs) =", official([1,2,3],[5]), " correct =", correct([1,2,3],[5]))

# ---- 19B-A 4a / SAMP 3a: official find_miss run literally ----
def find_miss_official(A, B, zero_based=True):
    n = len(A)
    def rec(i, j, k, l):
        if A[0] != B[0]: return B[0]
        if i > j:
            idx = n + 1
            return B[idx] if idx < len(B) else "OUT_OF_RANGE(B[n+1])"
        mid = (i + j) // 2
        if A[mid] != B[mid] and A[mid-1] == B[mid-1]: return B[mid]
        if A[mid] == B[mid]: return rec(mid+1, j, mid+1, l)
        return rec(i, mid-1, k, mid-1)
    return rec(0, n-1, 0, n)
def missing(A, B):
    for i in range(len(A)):
        if A[i] != B[i]: return B[i]
    return B[len(A)]
res = {}
random.seed(2)
for _ in range(4000):
    n = random.randint(1, 8)
    A = sorted(random.sample(range(1, 30), n))
    x = random.choice([v for v in range(0, 31) if v not in A])
    B = sorted(A + [x])
    try:
        got = find_miss_official(A, B)
    except Exception as e:
        got = "EXC " + type(e).__name__
    exp = missing(A, B)
    key = "ok" if got == exp else str(got)[:25]
    res[key] = res.get(key, 0) + 1
print("find_miss official results:", res)
# example: missing element at end
A = [2, 4, 6]; B = [2, 4, 6, 9]
print("end case ->", find_miss_official(A, B))

# ---- insertion sort decision tree min leaf depth ----
def ins_depths(n):
    depths = {}
    for p in itertools.permutations(range(n)):
        a = list(p); c = 0
        for i in range(1, n):
            j = i
            while j > 0:
                c += 1
                if a[j-1] > a[j]:
                    a[j-1], a[j] = a[j], a[j-1]; j -= 1
                else: break
        depths[p] = c
    return min(depths.values()), max(depths.values())
for n in range(2, 8): print("insertion sort n", n, "min,max leaf depth", ins_depths(n), "n-1 =", n-1)

# ---- Q6 hash F options ----
def table_for(F, order):
    t = [None]*7
    for x in order:
        for i in range(7):
            j = (x + F(i)) % 7
            if t[j] is None: t[j] = x; break
        else: return None
    return t
target = [14, 8, 1, None, 21, 15, None]
for name, F in [("i^2", lambda i: i*i), ("i", lambda i: i), ("2i", lambda i: 2*i), ("3i", lambda i: 3*i)]:
    orders = [o for o in itertools.permutations([14, 8, 1, 21, 15]) if table_for(F, o) == target]
    print("F =", name, "orders producing table:", len(orders), orders[:2])
# other candidate orders under i^2 in the 19B-B step options
F = lambda i: i*i
for o in [(14,8,1,21,15),(1,8,14,21,15),(21,14,8,1,15),(15,8,14,1,21)]:
    print(o, table_for(F, o) == target)
# search 22 after deleting 15 under i^2 when 15 left as tombstone
# cells probed for 22: i=0..: 1,2,5,3
print([(22 + i*i) % 7 for i in range(6)])

# ---- build heap comparison counts for even/odd n, sorted array (SAMP Q1a) ----
def cmp_count_floyd(n):
    c = 0
    for i in range(n//2 - 1, -1, -1):
        l = 2*i + 1; r = l + 1
        if r < n: c += 1   # compare children
        c += 1             # compare parent with (smaller) child
    return c
print("floyd sorted-array comparisons:", [(n, cmp_count_floyd(n)) for n in range(2, 12)])
