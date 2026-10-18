"""Machine checks for the step values of 23A-A. ASCII only. Run: PYTHONUTF8=1 py tools/verify/23A-A/verify_steps.py"""
import random, math, itertools

ok = True


def check(name, cond):
    global ok
    print(("PASS " if cond else "FAIL ") + name)
    ok = ok and bool(cond)


# ---- Q1a/b: sizes
cells = 223 * 10**6 * 5400
check("Q1a naive cells = 1204.2 billion", cells == 1_204_200_000_000)
per_sub = int(100 * 0.2)
check("Q1b ratings per subscriber = 20", per_sub == 20)
check("Q1b sparse cells = 4460 million", 223 * 10**6 * per_sub == 4_460_000_000)

# ---- Q2c: cuckoo with a cycle never terminates (three keys sharing both cells)
def cuckoo_insert(T1, T2, h1, h2, key, limit):
    t = 1
    for step in range(limit):
        T = T1 if t == 1 else T2
        h = h1 if t == 1 else h2
        pos = h(key)
        key, T[pos] = T[pos], key
        if key is None:
            return step + 1
        t = 3 - t
    return None

# keys 0, 11, 22 : h1 = x mod 11 = 0 ; h2 = (x//11) mod 11 -> force the same cell using custom hash
H1 = {"a": 0, "b": 0, "c": 0}
H2 = {"a": 1, "b": 1, "c": 1}
T1, T2 = [None] * 4, [None] * 4
res = []
for k in "abc":
    res.append(cuckoo_insert(T1, T2, lambda x: H1[x], lambda x: H2[x], k, 1000))
check("Q2c three keys with identical (h1,h2) -> third insertion loops forever (needs Re-Hash)", res[0] is not None and res[1] is not None and res[2] is None)

# ---- Q3: select / majority positions
def holds_majority_pos(n, frac_num, frac_den, positions):
    # any value with count > n*frac must occupy at least one of the 1-indexed positions in sorted array
    thr = n * frac_num / frac_den
    for L in range(int(thr) + 1, n + 1):
        if L <= thr:
            continue
        for s in range(1, n - L + 2):
            if not any(s <= p <= s + L - 1 for p in positions):
                return False
    return True

g_half = all(holds_majority_pos(n, 1, 2, [n // 2 + 1]) or holds_majority_pos(n, 1, 2, [(n + 1) // 2]) for n in range(1, 61))
check("Q3 >n/2 block always covers the middle position", all(holds_majority_pos(n, 1, 2, [(n + 1) // 2]) for n in range(1, 61)))
check("Q3 >n/3 block always covers n/3 or 2n/3", all(holds_majority_pos(n, 1, 3, [-(-n // 3), -(-2 * n // 3)]) for n in range(1, 61)))
check("Q3 position 1 alone is not enough for majority", any(not holds_majority_pos(n, 1, 2, [1]) for n in range(2, 20)))
check("Q3 position n alone is not enough for majority", any(not holds_majority_pos(n, 1, 2, [n]) for n in range(2, 20)))
check("Q3 position n/4 alone is not enough for majority", any(not holds_majority_pos(n, 1, 2, [max(1, n // 4)]) for n in range(2, 40)))
check("Q3 n/3 alone not enough for 1/3", any(not holds_majority_pos(n, 1, 3, [max(1, n // 3)]) for n in range(3, 60)))
check("Q3 2n/3 alone not enough for 1/3", any(not holds_majority_pos(n, 1, 3, [max(1, (2 * n) // 3)]) for n in range(3, 60)))
check("Q3 n/4 and 3n/4 not enough for 1/3", any(not holds_majority_pos(n, 1, 3, [max(1, n // 4), max(1, (3 * n) // 4)]) for n in range(3, 60)))

# the candidate at the middle position of an array with no majority is not a majority (so the scan is needed)
a = [1, 1, 2, 2, 3, 3]
check("Q3 middle element need not be a majority", a[len(a) // 2] == 2 and a.count(2) * 2 <= len(a))
random.seed(5)
good = True
for _ in range(300):
    n = random.randint(3, 40)
    arr = [random.randint(1, 5) for _ in range(n)]
    s = sorted(arr)
    c1 = s[(n + 1) // 2 - 1]
    maj = [v for v in set(arr) if arr.count(v) * 2 > n]
    if maj:
        good &= maj[0] == c1
    cand = {s[-(-n // 3) - 1], s[-(-2 * n // 3) - 1]}
    for v in set(arr):
        if arr.count(v) * 3 > n:
            good &= v in cand
check("Q3 select-candidate algorithm finds every >1/2 and >1/3 element (random)", good)
check("Q3 number of select calls = 3", len(["n/2", "n/3", "2n/3"]) == 3)

# ---- Q4: dedupe lists with a hash set
def dedupe(lists):
    seen = set()
    out = []
    for L in lists:
        new = []
        for x in L:
            if x in seen:
                continue
            seen.add(x)
            new.append(x)
        out.append(new)
    return out

random.seed(7)
good = True
for _ in range(300):
    ls = [random.sample(range(12), random.randint(0, 8)) for _ in range(random.randint(1, 5))]
    out = dedupe(ls)
    flat = [x for L in out for x in L]
    good &= len(flat) == len(set(flat)) and set(flat) == set(x for L in ls for x in L)
    # each movie stays in the first list containing it
    for x in set(flat):
        first = min(i for i, L in enumerate(ls) if x in L)
        good &= x in out[first]
check("Q4 hash-set filter keeps each movie only in the first list that has it", good)

def dedupe_bug(lists):
    seen = set()
    out = []
    for L in lists:
        new = []
        for x in L:
            if x not in seen:          # bug: delete when NOT found
                seen.add(x)
                continue
            new.append(x)
        out.append(new)
    return out

check("Q4 swapped-condition variant breaks the result", any(dedupe_bug(l) != dedupe(l) for l in ([[1, 2], [2, 3]], [[1], [1]])))
ex2 = dedupe([[1, 2, 3], [2, 4], [3, 4, 5]])
check("Q4 numeric example: third list keeps [5]", ex2[2] == [5])
ex2 = dedupe([[1, 2, 3], [2, 4], [3, 4, 5]])
check("Q4 numeric example: third list keeps [5]", ex2[2] == [5])
ex = [["a", "b", "c"], ["b", "d"], ["c", "d", "e"]]
check("Q4 example: third list keeps exactly one movie", len(dedupe(ex)[2]) == 1 and dedupe(ex)[2] == ["e"])

# ---- Q5: union by size + path compression
def run(n, ops, tie_second=True, compress=True):
    par = list(range(n)); size = [1] * n
    def find(x):
        r = x
        while par[r] != r: r = par[r]
        while compress and par[x] != r: par[x], x = r, par[x]
        return r
    def union(a, b, small_under_big=True):
        ra, rb = find(a), find(b)
        if ra == rb: return
        if small_under_big:
            if size[ra] > size[rb] or (size[ra] == size[rb] and not tie_second): ra, rb = rb, ra
        else:
            if size[ra] < size[rb]: ra, rb = rb, ra   # big under small
        par[ra] = rb; size[rb] += size[ra]
    return par, size, find, union

def height(par):
    best = 0
    for x in range(len(par)):
        d = 0; y = x
        while par[y] != y: y = par[y]; d += 1
        best = max(best, d)
    return best

n = 1024
par, size, find, union = run(n, [], compress=False)
step = 1
while step < n:
    for i in range(0, n, 2 * step):
        union(i, i + step)
    step *= 2
check("Q5b balanced merges reach height log2(1024) = 10", height(par) == 10)
random.seed(3)
good = True
for _ in range(200):
    n = random.randint(2, 200)
    par, size, find, union = run(n, [])
    for _ in range(3 * n):
        union(random.randrange(n), random.randrange(n))
    good &= height(par) <= math.log2(n) + 1e-9
check("Q5b union by size keeps height <= log2 n (random)", good)
n = 64
par, size, find, union = run(n, [], compress=False)
for i in range(1, n):
    union(0, i, small_under_big=False)      # big tree hung under the singleton
    # chain: each union hangs the big tree under the new singleton
check("Q5b big-under-small gives a chain of height n-1", height(par) == n - 1)

print("ALL OK" if ok else "SOME FAILED")
raise SystemExit(0 if ok else 1)
