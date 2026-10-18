"""25A-A step checks (student-solution sitting): every expected value / distractor used in gen_25A-A.py steps.
ASCII only. Run: PYTHONUTF8=1 py tools/verify/25A-A/steps_verify.py"""
import math, random, itertools, sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL, H

# ---------- Q2a (post-refute ruling): master theorem with real a. Victor Theta(n), Sergio Theta(n^log_2.5 3) ----------
from functools import lru_cache
@lru_cache(maxsize=None)
def T_v(n): return 1.0 if n < 3 else 2.5 * T_v(n / 3) + n          # real-valued recurrence
@lru_cache(maxsize=None)
def T_s(n): return 1.0 if n < 2.5 else 3 * T_s(n / 2.5) + n
ev, es = math.log(2.5, 3), math.log(3, 2.5)
assert abs(ev - 0.834) < 0.001 and abs(es - 1.199) < 0.001 and ev < 1 < es
assert abs(2.5 / 3 - 5 / 6) < 1e-12 and 5 / 6 < 1                    # regularity for Victor (case 3)
rv = [T_v(10.0 ** k) / 10.0 ** k for k in (12, 18, 24)]
assert all(5.5 < r < 6.01 for r in rv) and abs(rv[-1] - rv[-2]) < 0.01, rv        # Theta(n), constant 6
assert T_v(1e24) / (1e24) ** ev > 1e3                                # not n^0.834 (option b)
assert T_v(1e24) / (1e24 * math.log(1e24)) < 0.2                     # not n log n (option c)
rs = [T_s(10.0 ** k) / (10.0 ** k) ** es for k in (12, 18, 24)]
assert max(rs) / min(rs) < 1.3, rs                                   # Theta(n^1.199) (oscillates, bounded)
assert T_s(1e24) / 1e24 > 1e3                                        # not Theta(n) (option b)
assert T_s(1e24) / 1e24 ** 1.199 > 1 and T_s(1e24) / (1e24 * math.log(1e24)) > 1e3   # not n log n
assert T_v(1e24) / T_s(1e24) < 1e-3                                  # Victor's is asymptotically faster
print("Q2a ok", [round(r, 3) for r in rv], [round(r, 3) for r in rs])

# ---------- Q2b: T(n)=3T(n/2)+n^2 ----------
assert abs(math.log2(3) - 1.585) < 0.001 and math.log2(3) < 2
def T(n): return 1 if n <= 1 else 3 * T(n // 2) + n * n
for k in (10, 20, 30, 40):
    r = T(2 ** k) / 4 ** k
    assert 3.8 < r < 4.01, r                                  # Theta(n^2), constant 4
    assert T(2 ** k) / ((2 ** k) ** math.log2(3)) > 1.0       # n^log2 3 is too small to be Theta
assert T(2 ** 40) / ((2 ** 40) ** math.log2(3)) > 100         # grows without bound: not case 1/2
assert T(2 ** 40) / (4 ** 40 * 40) < 0.2                      # and not n^2 log n (case 2)
print("Q2b ok")

# ---------- Q3a: lexicographic key ----------
pk = ["Bx5", "Aa3", "Cz4", "Aa7", "Ba1"]
good = sorted(pk)
assert good == ["Aa3", "Aa7", "Ba1", "Bx5", "Cz4"]
d1 = sorted(pk, key=lambda s: s[2])                              # by the digit only
d2 = sorted(pk, key=lambda s: s[0])                              # by the first letter only (stable)
d3 = good[::-1]
assert d1 == ["Ba1", "Aa3", "Cz4", "Bx5", "Aa7"] and d2 == ["Aa3", "Aa7", "Bx5", "Ba1", "Cz4"]
assert len({tuple(good), tuple(d1), tuple(d2), tuple(d3)}) == 4
print("Q3a ok", good, d1, d2, d3)

# ---------- Q3b: counting sort by first letter ----------
cnt = {}
for s in pk: cnt[s[0]] = cnt.get(s[0], 0) + 1
assert cnt == {"B": 2, "A": 2, "C": 1} and sum(v for c, v in cnt.items() if c <= "B") == 4
def counting_by(arr, keyf, domain):
    c = {d: 0 for d in domain}
    for x in arr: c[keyf(x)] += 1
    run = 0; start = {}
    for d in domain: start[d] = run; run += c[d]
    out = [None] * len(arr)
    for x in arr:
        out[start[keyf(x)]] = x; start[keyf(x)] += 1
    return out
UP = [chr(c) for c in range(65, 91)]; LO = [chr(c) for c in range(97, 123)]; DG = [str(i) for i in range(1, 10)]
assert len(UP) == 26
assert counting_by(pk, lambda s: s[0], UP) == ["Aa3", "Aa7", "Bx5", "Ba1", "Cz4"]
print("Q3b ok")

# ---------- Q3c: radix sort, three stable passes, least significant first ----------
def radix(arr, order, stable=True):
    out = list(arr)
    for col, dom in order:
        if stable: out = counting_by(out, lambda s: s[col], dom)
        else: out = counting_by(out[::-1], lambda s: s[col], dom)     # equal keys reversed: unstable
    return out
random.seed(7)
def rnd(): return random.choice(UP) + random.choice(LO) + random.choice(DG)
cols = {0: UP, 1: LO, 2: DG}
LSD = [(2, DG), (1, LO), (0, UP)]
first = radix(pk, [(2, DG)])
assert first[0] == "Ba1" and first == ["Ba1", "Aa3", "Cz4", "Bx5", "Aa7"]
ok_orders = []
for perm in itertools.permutations(range(3)):
    order = [(c, cols[c]) for c in perm]
    good_all = True
    for _ in range(300):
        arr = [rnd() for _ in range(12)]
        if radix(arr, order) != sorted(arr): good_all = False; break
    if good_all: ok_orders.append(perm)
assert ok_orders == [(2, 1, 0)], ok_orders
bad = False
for _ in range(300):
    arr = [rnd() for _ in range(12)]
    if radix(arr, LSD, stable=False) != sorted(arr): bad = True; break
    assert radix(arr, LSD) == sorted(arr)
assert bad
print("Q3c ok")

# ---------- Q4a: AVL ----------
random.seed(8)
def bal_ok(n):
    return n is None or (abs(H(n.l) - H(n.r)) <= 1 and bal_ok(n.l) and bal_ok(n.r))
for _ in range(100):
    t = AVL(); ks = random.sample(range(10 ** 6), 400)
    for k in ks: t.ins(k)
    for k in random.sample(ks, 150): t.dele(k)
    assert bal_ok(t.root) and H(t.root) <= 1.45 * math.log2(252 + 2)
# distractors: unsorted array search, sorted array insert, plain BST worst case, all Theta(n)
n = 1000
assert n == len(list(range(n)))                  # linear scan visits n cells
plain_depth = 0; root = None
class Nd:
    def __init__(s, k): s.k = k; s.l = s.r = None
def ins(r, k):
    if r is None: return Nd(k)
    if k < r.k: r.l = ins(r.l, k)
    else: r.r = ins(r.r, k)
    return r
def hh(r): return 0 if r is None else 1 + max(hh(r.l), hh(r.r))
root = None
for k in range(1, 200): root = ins(root, k)
assert hh(root) == 199
print("Q4a ok")

# ---------- Q4b-d: cuckoo ----------
def run_insert(T1, T2, x, h1, h2, limit=50):
    cur, side, seen = x, 1, set()
    while True:
        T = T1 if side == 1 else T2; h = h1 if side == 1 else h2; pos = h(cur)
        state = (cur, side)
        if state in seen: return False            # cycle: rehash needed
        seen.add(state)
        if T[pos] is None: T[pos] = cur; return True
        T[pos], cur = cur, T[pos]; side = 3 - side
def search(T1, T2, x, h1, h2, first_only=False):
    probes = 1
    if T1[h1(x)] == x: return True, probes
    if first_only: return False, probes
    probes += 1
    return T2[h2(x)] == x, probes
random.seed(9)
h1 = lambda x: x % 13; h2 = lambda x: (x // 13) % 13
wrong_first_only = False; maxp = 0
for _ in range(300):
    T1, T2 = [None] * 13, [None] * 13; present = []
    for x in random.sample(range(169), 10):
        if run_insert(T1, T2, x, h1, h2): present.append(x)
        else: break
    for x in range(169):
        found, p = search(T1, T2, x, h1, h2); maxp = max(maxp, p)
        assert found == (x in present)
        f2, _p = search(T1, T2, x, h1, h2, first_only=True)
        if f2 != found: wrong_first_only = True
assert maxp == 2 and wrong_first_only
# a cycle exists: three keys with identical (h1, h2) in a table pair
g1 = lambda x: x % 2; g2 = lambda x: 0
A, B = [None] * 2, [None] * 2
assert run_insert(A, B, 0, g1, g2) and run_insert(A, B, 2, g1, g2)
assert not run_insert(A, B, 4, g1, g2)
print("Q4bcd ok")

# ---------- Q4e: doubling growth ----------
cap, count, moved = 1, 0, 0
for _ in range(1000):
    if count == cap:
        moved += count; cap *= 2
    count += 1
assert moved == 1023 and moved < 2 * 1000
print("Q4e ok", moved)

# ---------- Q1e (post-refute): four selects at ranks ceil(k n/5), k=1..4, then count ----------
from collections import Counter
def truth(A): return any(c > 0.2 * len(A) for c in Counter(A).values())
def single(A):
    s = sorted(A); X = s[max(0, math.ceil(0.2 * len(A)) - 1)]; return A.count(X) > 0.2 * len(A)
def four(A):
    n = len(A); s = sorted(A)
    return any(A.count(s[math.ceil(k * n / 5) - 1]) > 0.2 * n for k in (1, 2, 3, 4))
ex = [1, 2, 3, 3, 3, 4, 5, 6, 7, 8]
assert truth(ex) and not single(ex) and sorted(ex)[1] == 2 and ex.count(3) == 3
n_ex = 0
for n in range(1, 9):                                # exhaustive over all arrays with values 1..4, n <= 8
    for A in itertools.product(range(1, 5), repeat=n):
        assert four(list(A)) == truth(list(A)); n_ex += 1
random.seed(11)
for _ in range(50000):
    n = random.randint(1, 60); A = [random.randint(1, random.randint(1, 8)) for _ in range(n)]
    assert four(A) == truth(A)
print("Q1e ok", n_ex)

# ---------- Q2b regularity, Q3a inorder output ----------
assert abs(3 * 0.25 - 0.75) < 1e-12 and 0.75 < 1
t = AVL()
for s in pk: t.ins(s)
def trav(n, kind):
    if n is None: return []
    l, r = trav(n.l, kind), trav(n.r, kind)
    return {"in": l + [n.k] + r, "pre": [n.k] + l + r, "post": l + r + [n.k]}[kind]
def bfs(root):
    out, q = [], [root]
    while q:
        x = q.pop(0)
        if x: out.append(x.k); q += [x.l, x.r]
    return out
assert trav(t.root, "in") == sorted(pk)
for other in (trav(t.root, "pre"), trav(t.root, "post"), bfs(t.root)):
    assert other != sorted(pk), other
print("Q3a inorder ok", trav(t.root, "pre"), trav(t.root, "post"), bfs(t.root))

# ---------- Q5: orthogonal (cross-linked) lists, simulated ----------
class Cell:
    def __init__(s, row, col, value): s.row, s.col, s.value = row, col, value; s.nextInRow = s.nextInCol = None
class Sparse:
    def __init__(s, n, m): s.R = [None] * (n + 1); s.C = [None] * (m + 1); s.cells = 0
    def put(s, i, j, v):
        c = Cell(i, j, v); s.cells += 1
        p, q = None, s.R[i]                                   # row list sorted by col
        while q is not None and q.col < j: p, q = q, q.nextInRow
        c.nextInRow = q
        if p is None: s.R[i] = c
        else: p.nextInRow = c
        p, q = None, s.C[j]                                   # column list sorted by row
        while q is not None and q.row < i: p, q = q, q.nextInCol
        c.nextInCol = q
        if p is None: s.C[j] = c
        else: p.nextInCol = c
    def walk(s, start, ptr):
        out = []
        while start is not None: out.append((start.row, start.col, start.value)); start = getattr(start, ptr)
        return out
    def get(s, i, j):
        q = s.R[i]
        while q is not None and q.col < j: q = q.nextInRow
        return q.value if q is not None and q.col == j else None
# example of 5c
S5 = Sparse(4, 4)
EX = {(1, 2): 3, (1, 4): 5, (3, 2): 4, (4, 4): 1}
for (i, j), v in [((4, 4), 1), ((3, 2), 4), ((1, 4), 5), ((1, 2), 3)]: S5.put(i, j, v)   # any insertion order
assert S5.walk(S5.R[1], "nextInRow") == [(1, 2, 3), (1, 4, 5)]
assert S5.walk(S5.R[3], "nextInRow") == [(3, 2, 4)] and S5.walk(S5.R[4], "nextInRow") == [(4, 4, 1)]
assert S5.walk(S5.C[2], "nextInCol") == [(1, 2, 3), (3, 2, 4)]
assert S5.walk(S5.C[4], "nextInCol") == [(1, 4, 5), (4, 4, 1)]
assert len(S5.walk(S5.C[2], "nextInCol")) == 2                                    # 5c step 1
assert S5.R[1].nextInRow.nextInCol.value == 1                                     # 5c step 2: [1,4|5].nextInCol
empty = [f"R{i}" for i in range(1, 5) if S5.R[i] is None] + [f"C{j}" for j in range(1, 5) if S5.C[j] is None]
assert empty == ["R2", "C1", "C3"]                                                # 5c step 3
assert (1, 2) in EX and all(S5.get(i, j) == EX.get((i, j)) for i in range(1, 5) for j in range(1, 5))
# 5a step 3: product j=4 -- only C[4] + nextInCol gives its ratings
want = [(1, 4, 5), (4, 4, 1)]
assert S5.walk(S5.C[4], "nextInCol") == want
assert S5.walk(S5.R[4], "nextInRow") != want
assert S5.walk(S5.R[1], "nextInCol") != want and S5.walk(S5.R[1], "nextInCol") == [(1, 2, 3), (3, 2, 4)]
assert S5.walk(S5.C[4], "nextInRow") != want
# 5b step 1: row list positions do not give the product number
assert [c for (_, c, _) in S5.walk(S5.R[1], "nextInRow")] == [2, 4]
# 5a steps 1-2: n=1000, m=500, k=3000 random distinct ratings
random.seed(12)
BIG = Sparse(1000, 500)
pairs = random.sample([(i, j) for i in range(1, 1001) for j in range(1, 501)], 3000)
ref = {}
for (i, j) in pairs:
    v = random.randint(1, 5); BIG.put(i, j, v); ref[(i, j)] = v
assert BIG.cells == 3000 and (len(BIG.R) - 1) + (len(BIG.C) - 1) + BIG.cells == 4500 and 1000 * 500 == 500000
assert sum(len(BIG.walk(BIG.R[i], "nextInRow")) for i in range(1, 1001)) == 3000
assert sum(len(BIG.walk(BIG.C[j], "nextInCol")) for j in range(1, 501)) == 3000
for j in random.sample(range(1, 501), 50):
    col = BIG.walk(BIG.C[j], "nextInCol")
    assert col == sorted((i, jj, v) for (i, jj), v in ref.items() if jj == j)
for (i, j) in random.sample(pairs, 200): assert BIG.get(i, j) == ref[(i, j)]
print("Q5 ok")
