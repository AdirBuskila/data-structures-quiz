"""Machine checks for the official highlighted keys of 24S-A (ASCII output only).
Run: PYTHONUTF8=1 py tools/verify/24S-A/verify.py"""
import math, sys
from functools import lru_cache
sys.setrecursionlimit(10000)
ok = True
def check(name, cond):
    global ok
    print(("OK   " if cond else "FAIL ") + name)
    ok = ok and cond

# ---- preorder sequences: BST? AVL?
def build_bst(seq):
    """Rebuild from preorder; return root as (key,l,r) or None if seq is not a valid BST preorder."""
    idx = 0
    def rec(lo, hi):
        nonlocal idx
        if idx >= len(seq) or not (lo < seq[idx] < hi):
            return None
        k = seq[idx]; idx += 1
        l = rec(lo, k); r = rec(k, hi)
        return (k, l, r)
    root = rec(-math.inf, math.inf)
    return root if idx == len(seq) else "bad"
def height(t): return -1 if t is None else 1 + max(height(t[1]), height(t[2]))
def is_avl(t):
    if t is None: return True
    return abs(height(t[1]) - height(t[2])) <= 1 and is_avl(t[1]) and is_avl(t[2])
for name, seq, key in (
    ("A", [10,5,2,8,6,100,50,45,47,105], "bst-not-avl"),
    ("B", [10,6,5,2,8,50,47,45,100,105], "avl"),
    ("C", [50,47,6,5,8,10,100,45,105], "not-bst")):
    t = build_bst(seq)
    got = "not-bst" if t == "bad" else ("avl" if is_avl(t) else "bst-not-avl")
    check(f"preorder form {name}: {got} == key {key}", got == key)

# ---- min nodes of an AVL tree with a leaf at depth d
N = [1, 2]
while len(N) < 8: N.append(N[-1] + N[-2] + 1)
for d, key in ((4, 12), (5, 20), (6, 33)):
    check(f"AVL min nodes, leaf at depth {d}: {N[d]} == {key}", N[d] == key)

# ---- recurrences (numeric: ratio drift between N=1e12 and N=1e24 for each candidate)
def make(rec):
    @lru_cache(maxsize=None)
    def T(x):
        x = float(f"{x:.12g}")
        if x < 2: return 1.0
        return rec(T, x)
    return T
L = math.log2
CAND = {
 "n": lambda n: n, "n log n": lambda n: n*L(n), "n^2": lambda n: n*n,
 "n^2 log n": lambda n: n*n*L(n), "sqrt(n) log n": lambda n: n**.5*L(n),
 "n log log n": lambda n: n*L(L(n)),
}
def best(rec, p1=1e12, p2=1e24):
    T = make(rec); res = []
    for nm, g in CAND.items():
        r1 = T(p1)/g(p1); r2 = T(p2)/g(p2)
        res.append((abs(r2/r1 - 1), nm))
    res.sort(); return res[0][1], res[0][0], res[1][0]
s2 = math.sqrt(2); s3 = math.sqrt(3)
RECS = [
 ("A6  T(n/4)+T(n/2)+n", lambda T, x: T(x/4)+T(x/2)+x, "n"),
 ("B3  T(n/6)+T(n/3)+n", lambda T, x: T(x/6)+T(x/3)+x, "n"),
 ("C10 T(n/3)+T(n/2)+n", lambda T, x: T(x/3)+T(x/2)+x, "n"),
 ("A10 2T(n/sqrt2)+n+sqrt n", lambda T, x: 2*T(x/s2)+x+x**.5, "n^2"),
 ("B8  2T(n/sqrt2)+sqrt n", lambda T, x: 2*T(x/s2)+x**.5, "n^2"),
 ("C1  3T(n/sqrt3)+n^2+sqrt n", lambda T, x: 3*T(x/s3)+x*x+x**.5, "n^2 log n"),
]
for nm, rec, key in RECS:
    # 2^40 and 2^80 sit at the same phase of the sqrt(2)-base (log-periodic) oscillation
    cand, drift, second = best(rec, 2.0**40, 2.0**80) if 'sqrt2' in nm else best(rec)
    check(f"recurrence {nm}: best fit {cand} (drift {drift:.3f}, next {second:.3f}) == key {key}",
          cand == key and drift < 0.05 and second > 0.1)

# ---- union by size (tie: first argument's root stays root); keys of the three union questions
def run(ops):
    p = {i: i for i in range(1, 7)}; sz = {i: 1 for i in range(1, 7)}
    def f(x):
        while p[x] != x: x = p[x]
        return x
    for a, b in ops:
        ra, rb = f(a), f(b)
        if ra == rb: continue
        if sz[ra] >= sz[rb]: p[rb] = ra; sz[ra] += sz[rb]
        else: p[ra] = rb; sz[rb] += sz[ra]
    return dict(p)
def tree(par): return {k: v for k, v in par.items() if k != v}
TARGETS = {
 "A": {2:1, 1:3, 4:3, 5:3, 6:5},
 "B": {4:3, 3:1, 2:1, 5:1, 6:5},
 "C": {4:3, 3:5, 6:5, 1:5, 2:1},
}
OPTS = {
 "A": {"a": [(1,3),(5,3),(4,3),(2,1),(6,5)], "b": [(1,2),(3,4),(5,6),(4,2),(6,2)],
       "c": [(1,2),(3,4),(5,6),(6,2),(4,2)]},
 "B": {"a": [(1,3),(5,1),(4,3),(2,1),(6,5)], "b": [(1,2),(3,4),(5,6),(3,6),(2,4)],
       "c": [(1,2),(3,4),(5,6),(2,4),(2,6)]},
 "C": {"a": [(1,2),(3,4),(5,6),(6,4),(4,2)], "b": [(1,2),(3,4),(5,6),(4,2),(6,4)],
       "c": [(5,3),(5,6),(3,4),(1,2),(5,1)]},
}
KEYS = {"A": "b", "B": "c", "C": "a"}
for f in "ABC":
    works = [o for o, ops in OPTS[f].items() if tree(run(ops)) == TARGETS[f]]
    check(f"union form {f}: options that build the tree {works} == key [{KEYS[f]}] (so 'none' is wrong)",
          works == [KEYS[f]])

# ---- double hashing: probe sequence must be a permutation of the table for every key
def perm_ok(m, fn, rng=range(0, 2000)):
    for x in rng:
        seen = {fn(x, i) % m for i in range(m)}
        if len(seen) != m: return False
    return True
DH = {
 "A": {"a": (12, lambda x,i: (x%14 + i*((x%5)+1)) % 12) if False else (14, lambda x,i: (x%14 + i*((x%5)+1)) % 14),
       "b": (13, lambda x,i: (x%13 + i*(x%5)) % 13),
       "c": (13, lambda x,i: (x%13 + i*((x%7)+1)) % 13)},
 "B": {"a": (12, lambda x,i: (x%14 + i*((x%5)+1)) % 12),
       "b": (11, lambda x,i: (x%11 + i*((x%5)+1)) % 11),
       "c": (11, lambda x,i: (x%11 + i*(x%7)) % 11)},
 "C": {"a": (13, lambda x,i: (x%13 + i*((x%9)+1)) % 13),
       "b": (14, lambda x,i: (x%14 + i*((x%9)+1)) % 14),
       "c": (13, lambda x,i: (x%13 + i*(x%7)) % 13)},
}
DKEY = {"A": "c", "B": "b", "C": "a"}
for f in "ABC":
    good = [o for o, (m, fn) in DH[f].items() if perm_ok(m, fn)]
    check(f"double hashing form {f}: probe-permutation options {good} == key [{DKEY[f]}] (random() option excluded: not a function)",
          good == [DKEY[f]])

# ---- cuckoo hashing: standard (T1 first, evict occupant to the other table)
h1 = lambda x: x % 11
h2 = lambda x: (x // 11) % 11
def cuckoo(seq):
    T = [[None]*11, [None]*11]
    for x in seq:
        t, cur = 0, x
        for _ in range(100):
            pos = h1(cur) if t == 0 else h2(cur)
            cur, T[t][pos] = T[t][pos], cur
            if cur is None: break
            t ^= 1
        else:
            raise SystemExit("cycle")
    return T
for form, seq, which, key in (
    ("A", [13,17,20,24,39,88,28], 1, {17,24,39}),
    ("B", [24,39,88,28,13,17,20], 0, {88,24,17,20}),
    ("C", [13,17,20,24,39,88,28], 0, {13,20,28,88})):
    T = cuckoo(seq)
    got = {v for v in T[which] if v is not None}
    check(f"cuckoo form {form}: T{which+1} = {sorted(got)} == key {sorted(key)}", got == key)

# ---- two algorithms n^2/100 vs 5 n log n: crossover
cross = next(n for n in range(2, 10**6) if n*n/100 > 5*n*math.log2(n))
check(f"n^2/100 < 5 n log2 n for n < {cross}, then larger (asymptotic order flips): consistent with keys", 100 < cross < 10**4)

print("ALL OK" if ok else "SOME FAILED")
sys.exit(0 if ok else 1)
