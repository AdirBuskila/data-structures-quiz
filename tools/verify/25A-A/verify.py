"""Machine checks for the student-solution items of 25A-A (ASCII output only).
Run: PYTHONUTF8=1 py tools/verify/25A-A/verify.py"""
import math, random, sys
from functools import lru_cache
ok = True
def check(name, cond):
    global ok
    print(("OK   " if cond else "FAIL ") + name)
    ok = ok and cond

# ---- 1.1 preorder of an AVL tree with the first value missing
def build(seq):
    idx = 0
    def rec(lo, hi):
        nonlocal idx
        if idx >= len(seq) or not (lo < seq[idx] < hi): return None
        k = seq[idx]; idx += 1
        l = rec(lo, k); r = rec(k, hi); return (k, l, r)
    t = rec(-math.inf, math.inf); return t if idx == len(seq) else "bad"
def h(t): return 0 if t is None else 1 + max(h(t[1]), h(t[2]))
def avl(t): return t is None or (abs(h(t[1]) - h(t[2])) <= 1 and avl(t[1]) and avl(t[2]))
rest = [16, 10, 8, 5, 12, 20, 25, 35, 32, 31, 42]
good = [X for X in (15, 19, 30, 36) if build([X] + rest) != "bad" and avl(build([X] + rest))]
check(f"1.1 offered X that give an AVL tree: {good} == [30]", good == [30])

# ---- 1.2 inorder reversed = descending array = max-heap (so the build is linear: no sifting needed)
def inorder(t, out):
    if t is not None: inorder(t[1], out); out.append(t[0]); inorder(t[2], out)
okh = True
for _ in range(200):
    n = random.randint(1, 60); vals = random.sample(range(1000), n)
    # AVL-shaped tree not needed: any BST in-order is sorted; here just check the array property
    arr = sorted(vals, reverse=True)
    okh &= all(arr[(i - 1) // 2] >= arr[i] for i in range(1, n))
check("1.2 a descending array satisfies the max-heap property", okh)

# ---- 1.3 union by rank (tie: first argument's root stays root)
def run(ops):
    p = {i: i for i in range(1, 7)}; r = {i: 0 for i in range(1, 7)}
    def f(x):
        while p[x] != x: x = p[x]
        return x
    for a, b in ops:
        ra, rb = f(a), f(b)
        if ra == rb: continue
        if r[ra] >= r[rb]:
            p[rb] = ra
            if r[ra] == r[rb]: r[ra] += 1
        else: p[ra] = rb
    return {k: v for k, v in p.items() if k != v}
TARGET = {2: 1, 1: 3, 4: 3, 5: 3, 6: 5}
OPTS = {"a": [(1,3),(5,3),(4,3),(2,1),(6,5)], "b": [(1,2),(3,4),(5,6),(4,6),(4,2)],
        "c": [(1,2),(3,4),(5,6),(6,2),(4,2)]}
works = [o for o, ops in OPTS.items() if run(ops) == TARGET]
check(f"1.3 options that build the tree: {works} == ['b'] ('none' is wrong)", works == ["b"])

# ---- 1.4 linear probing, h(x) = x mod 10
TABLE = {1: 61, 2: 52, 3: 93, 4: 11, 5: 85, 6: 44, 7: 73}
def lin(seq):
    T = {}
    for x in seq:
        i = x % 10
        while i in T: i = (i + 1) % 10
        T[i] = x
    return T
OPTS4 = {"a": [52,93,11,85,65,44,73], "b": [61,93,52,85,73,44,11],
         "c": [93,52,61,85,11,73,44], "d": [93,61,85,52,11,44,73]}
works = [o for o, s in OPTS4.items() if lin(s) == TABLE]
check(f"1.4 options that give the table: {works} == ['d']", works == ["d"])

# ---- 1.5 fruit with more than 20%: Theta(n) is right, but the single candidate 'value at rank 0.2n' is not enough
def single_candidate(a):
    s = sorted(a); x = s[int(0.2 * len(a)) - 1]
    return a.count(x) > 0.2 * len(a)
def truth(a): return any(a.count(v) > 0.2 * len(a) for v in set(a))
def four_candidates(a):
    s = sorted(a); n = len(a)
    return any(a.count(s[k * n // 5 - 1]) > 0.2 * n for k in range(1, 6))
ex = [1, 2, 3, 4, 5, 6, 7, 9, 9, 9]
check("1.5 counter-example: single candidate at rank 0.2n misses a value with 30%", truth(ex) and not single_candidate(ex))
random.seed(1)
bad = sum(1 for _ in range(3000) if (lambda a: four_candidates(a) != truth(a))([random.randint(1, 6) for _ in range(random.randint(5, 40))]))
check("1.5 the usual fix (ranks 0.2n .. n) agrees with brute force", bad == 0)

# ---- 2.1 recurrences of the two students
@lru_cache(maxsize=None)
def T1(x): return 1.0 if x < 2 else 2.5 * T1(float(f"{x/3:.12g}")) + x
@lru_cache(maxsize=None)
def T2(x): return 1.0 if x < 2 else 3 * T2(float(f"{x/2.5:.12g}")) + x
a1 = T1(1e18) / T1(1e9); a2 = T2(1e18) / T2(1e9)
check(f"2.1 Viktor's recurrence would be Theta(n): growth {a1:.3g} ~ 1e9; Sergio's n^1.2: {a2:.3g} ~ {1e9**(math.log(3)/math.log(2.5)):.3g}",
      0.8e9 < a1 < 1.3e9 and 0.5 * 1e9 ** (math.log(3)/math.log(2.5)) < a2 < 2 * 1e9 ** (math.log(3)/math.log(2.5)))
check("2.1 a = 2.5 is not an integer number of recursive calls", 2.5 != int(2.5))

# ---- 2.2 T(n) = 3T(n/2) + n^2 -> Theta(n^2), case 3 (regularity: 3(n/2)^2 = 3/4 n^2 <= c n^2, c = 3/4)
@lru_cache(maxsize=None)
def T3(n): return 1 if n <= 1 else 3 * T3(n // 2) + n * n
r1 = T3(2**10) / 4**10; r2 = T3(2**20) / 4**20
check(f"2.2 T(n)/n^2 converges ({r1:.3f}, {r2:.3f}) to the constant 4; log2(3) = {math.log2(3):.3f} < 2", abs(r2 - 4) < abs(r1 - 4) and abs(r2 - 4) < 0.05 and math.log2(3) < 2)

# ---- 3.x packages: counting sort on the first letter (stable), LSD radix sort on 3 positions
def counting_sort(a, key, k):
    cnt = [0] * (k + 1)
    for x in a: cnt[key(x) + 1] += 1
    for i in range(k): cnt[i + 1] += cnt[i]
    out = [None] * len(a)
    for x in a:
        out[cnt[key(x)]] = x; cnt[key(x)] += 1
    return out
LET = lambda c: ord(c) - ord('A')
def radix(a):
    a = counting_sort(a, lambda s: int(s[2]) - 1, 9)
    a = counting_sort(a, lambda s: ord(s[1]) - ord('a'), 26)
    return counting_sort(a, lambda s: LET(s[0]), 26)
random.seed(2)
rnd = lambda: random.choice("ABCDEFGHIJKLMNOPQRSTUVWXYZ") + random.choice("abcdefghijklmnopqrstuvwxyz") + str(random.randint(1, 9))
okr = okc = True
for _ in range(300):
    a = [rnd() for _ in range(random.randint(0, 80))]
    okr &= radix(a) == sorted(a)
    first = counting_sort(a, lambda s: LET(s[0]), 26)
    okc &= [s[0] for s in first] == sorted(s[0] for s in a)
check("3.3 three stable counting sorts (3rd, 2nd, 1st position) sort by (letter, letter, digit)", okr)
check("3.2 one counting sort on the first letter orders by category", okc)
sample = ["Bx5", "Aa3", "Cz4", "Aa7", "Ba1"]
check(f"3.3 sample sorted: {radix(sample)}", radix(sample) == ["Aa3", "Aa7", "Ba1", "Bx5", "Cz4"])

# ---- 4.1 AVL height for 10 million customers (min nodes per height N(h) = N(h-1)+N(h-2)+1)
N = [1, 2]
while N[-1] < 10**7: N.append(N[-1] + N[-2] + 1)
maxh = max(i for i, v in enumerate(N) if v <= 10**7)
check(f"4.1 max AVL height for n = 10^7 is {maxh} <= 1.4405*log2(n) = {1.4405*math.log2(1e7):.1f}", maxh <= 1.4405 * math.log2(1e7))

print("ALL OK" if ok else "SOME FAILED")
sys.exit(0 if ok else 1)
