"""25A-A step checks (student-solution sitting): every expected value / distractor used in gen_25A-A.py steps.
ASCII only. Run: PYTHONUTF8=1 py tools/verify/25A-A/steps_verify.py"""
import math, random, itertools, sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL, H

# ---------- Q2a: a recursion must make an integer number of calls ----------
def T_sergio(n):                       # 3 calls on size n/2.5 (floor): implementable
    return 1 if n < 3 else 3 * T_sergio(int(n / 2.5)) + n
assert T_sergio(10 ** 6) > 0
assert 2.5 != int(2.5) and 3 == int(3)   # 2.5 calls cannot be made; 3 can
print("Q2a ok")

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
