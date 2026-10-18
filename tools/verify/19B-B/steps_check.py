# 19B-B step checks (every expected value quoted by gen_19B-B.py steps). ASCII only.
# Run: PYTHONUTF8=1 py -I tools/verify/19B-B/steps_check.py   (from the app root)
import sys, json, pathlib, itertools, math, random, heapq
HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent))
import ds_steps_common as C

F = {}

# ---- Q1a: alternating functions are incomparable under O()
def bounded(fn, lo=1000, hi=100000):
    r1 = max(fn(n) for n in range(lo, 2 * lo, 3)); r2 = max(fn(n) for n in range(hi, 2 * hi, 31))
    return r2 <= r1 * 1.01 + 1e-9
pairs = {
    "a": (lambda n: n if n % 2 == 0 else 1, lambda n: 1 if n % 2 == 0 else n),
    "b": (lambda n: n, lambda n: n * n),
    "c": (lambda n: n, lambda n: n),
    "d": (lambda n: n, lambda n: 1),
}
res = {}
for k, (f, g) in pairs.items():
    res[k] = (bounded(lambda n: f(n) / g(n)), bounded(lambda n: g(n) / f(n)))   # f=O(g), g=O(f)
assert res["a"] == (False, False)
assert all(res[k][0] or res[k][1] for k in "bcd"), res
f_, g_ = pairs["a"]
F["Q1a_ratio"] = f_(1000) // g_(1000)
assert F["Q1a_ratio"] == 1000
assert g_(1001) // f_(1001) == 1001

# ---- Q2a: minimal size of a union-by-size tree of height h
reach = {(1, 0)}
for _ in range(5):
    new = set(reach)
    for (s1, h1), (s2, h2) in itertools.product(reach, reach):
        if s1 <= s2 and s1 + s2 <= 40:
            new.add((s1 + s2, max(h2, h1 + 1)))
    reach = new
def minsize(h): return min(s for s, hh in reach if hh == h)
assert [minsize(h) for h in range(5)] == [1, 2, 4, 8, 16]
F["Q2a_h2"], F["Q2a_h3"], F["Q2a_h4"] = minsize(2), minsize(3), minsize(4)
assert max(h for s, h in reach if s <= 14) == 3                 # with 14 elements the height is at most 3
F["Q2a_total"] = minsize(0) + minsize(1) + minsize(4)
assert F["Q2a_total"] == 19 and F["Q2a_total"] > 14

# ---- Q3a: AVL height vs chain BST
Nmin = [1, 2]
while len(Nmin) < 40: Nmin.append(Nmin[-1] + Nmin[-2] + 1)
pairs_nh = {(1, 0)}
pairs_nh.add((0, -1))
for _ in range(9):                           # shapes by (n, h): children heights differ by at most 1
    new = set(pairs_nh)
    for (n1, h1), (n2, h2) in itertools.product(pairs_nh, pairs_nh):
        if abs(h1 - h2) <= 1 and n1 + n2 + 1 <= 150:
            new.add((n1 + n2 + 1, 1 + max(h1, h2)))
    pairs_nh = new
def maxh(n): return max(h for nn, h in pairs_nh if nn == n)
assert maxh(10) == 3 and maxh(100) == 8
assert max(h for n, h in pairs_nh if n <= 143 and n == 88) >= 8      # N(8)=88
F["Q3a_chain"] = 9 + 1
F["Q3a_h10"], F["Q3a_h100"] = maxh(10), maxh(100)
# bound for all n in a long range via the Fibonacci-like minimum sizes
def maxh_formula(n):
    h = 0
    while Nmin[h + 1] <= n: h += 1
    return h
assert all(maxh_formula(n) == maxh(n) for n in range(1, 150))
assert all(maxh_formula(n) < 2 * math.log2(n) for n in range(2, 300_000)), "AVL height vs 2 log n"
# complete tree: AVL with 2^(h+1)-1 keys has height h, and h >= 2 log2(h+1) from h = 6 on
assert all(h >= 2 * math.log2(h + 1) for h in range(6, 60))
# an AVL tree with h keys has height far below h (not a height-h BST) for h >= 4
assert all(maxh_formula(h) < h for h in range(4, 100))

# ---- Q3b: min/max-augmented AVL
class Nd:
    def __init__(s, k): s.k = k; s.l = s.r = None; s.h = 0; s.mn = s.mx = k
def H(n): return -1 if n is None else n.h
def up(n):
    n.h = 1 + max(H(n.l), H(n.r))
    n.mn = n.l.mn if n.l else n.k
    n.mx = n.r.mx if n.r else n.k
class Aug:
    def __init__(s): s.root = None; s.path = set()
    def rr(s, y): x = y.l; y.l = x.r; x.r = y; up(y); up(x); return x
    def rl(s, x): y = x.r; x.r = y.l; y.l = x; up(x); up(y); return y
    def fix(s, n):
        up(n); b = H(n.l) - H(n.r)
        if b > 1:
            if H(n.l.l) < H(n.l.r): n.l = s.rl(n.l)
            return s.rr(n)
        if b < -1:
            if H(n.r.r) < H(n.r.l): n.r = s.rr(n.r)
            return s.rl(n)
        return n
    def ins(s, n, k):
        if n is None: m = Nd(k); s.path.add(id(m)); return m
        s.path.add(id(n))
        if k < n.k: n.l = s.ins(n.l, k)
        else: n.r = s.ins(n.r, k)
        return s.fix(n)
    def dele(s, n, k):
        if n is None: return None
        s.path.add(id(n))
        if k < n.k: n.l = s.dele(n.l, k)
        elif k > n.k: n.r = s.dele(n.r, k)
        else:
            if n.l is None: return n.r
            if n.r is None: return n.l
            m = n.r
            while m.l: s.path.add(id(m)); m = m.l
            n.k = m.k; n.r = s.dele(n.r, m.k)
        return s.fix(n)
def nodes(n):
    return [] if n is None else [n] + nodes(n.l) + nodes(n.r)
def keys(n): return [] if n is None else keys(n.l) + [n.k] + keys(n.r)
def check_fields(n):
    for x in nodes(n):
        ks = keys(x)
        assert x.mn == min(ks) and x.mx == max(ks)
rnd = random.Random(3)
t = Aug()
inner_changed = False       # some non-root, non-leaf path node changed
for step in range(1500):
    snap = {id(x): (x.mn, x.mx) for x in nodes(t.root)}
    t.path = set()
    ks = keys(t.root)
    was_delete = bool(ks) and rnd.random() < 0.3
    if was_delete:
        t.root = t.dele(t.root, rnd.choice(ks))
    else:
        k = rnd.randint(0, 5000)
        if k in ks: continue
        t.root = t.ins(t.root, k)
    check_fields(t.root)
    changed = {id(x) for x in nodes(t.root) if id(x) not in snap or snap[id(x)] != (x.mn, x.mx)}
    if not was_delete:       # after a deletion a rotation may also touch the sibling subtree, so only insertion is claimed
        assert changed <= t.path, "a node off the search path changed"
        if len(changed) >= 3 and (changed - {id(t.root)}): inner_changed = True
assert inner_changed
# distractors for "what to store": equal height / size / sum, different max-min
def maxmin(ks): return max(ks) - min(ks)
assert (maxmin([1, 2, 3]), maxmin([1, 2, 30])) == (2, 29)            # same shape: same size and height
assert sum([1, 5, 9]) == sum([3, 5, 7]) and maxmin([1, 5, 9]) != maxmin([3, 5, 7])   # same sum
F["Q3b_maxmin"] = 41 - 5
assert F["Q3b_maxmin"] == 36

# ---- Q3c: inorder is sorted; one pass over two sorted arrays decides the subset question
def sub_pass(A1, A2):
    i = j = 0
    while j < len(A2):
        while i < len(A1) and A1[i] < A2[j]: i += 1
        if i == len(A1) or A1[i] != A2[j]: return False
        i += 1; j += 1
    return True
for _ in range(2000):
    S1 = rnd.sample(range(30), rnd.randint(1, 15)); S2 = rnd.sample(range(30), rnd.randint(0, min(len(S1), 8)))
    assert sub_pass(sorted(S1), sorted(S2)) == set(S2).issubset(S1)
class B:
    def __init__(s, k): s.k = k; s.l = s.r = None
def bins(r, k):
    if r is None: return B(k)
    if k < r.k: r.l = bins(r.l, k)
    else: r.r = bins(r.r, k)
    return r
def inorder(r): return [] if r is None else inorder(r.l) + [r.k] + inorder(r.r)
insertion_order_differs = False
for _ in range(200):
    ks = rnd.sample(range(100), 8); r = None
    for k in ks: r = bins(r, k)
    assert inorder(r) == sorted(ks)
    if inorder(r) != ks: insertion_order_differs = True
assert insertion_order_differs

# ---- Q5a: AVL + two heaps with mutual pointers
class IHeap:
    """binary heap of [key, barcode] with a position map (the 'mutual pointers')"""
    def __init__(s, sign): s.a = []; s.pos = {}; s.sg = sign
    def lt(s, i, j): return s.sg * s.a[i][0] < s.sg * s.a[j][0]
    def swap(s, i, j):
        s.a[i], s.a[j] = s.a[j], s.a[i]; s.pos[s.a[i][1]] = i; s.pos[s.a[j][1]] = j
    def up(s, i):
        while i and s.lt(i, (i - 1) // 2): s.swap(i, (i - 1) // 2); i = (i - 1) // 2
    def down(s, i):
        n = len(s.a)
        while True:
            m = i
            for c in (2 * i + 1, 2 * i + 2):
                if c < n and s.lt(c, m): m = c
            if m == i: return
            s.swap(i, m); i = m
    def push(s, key, code): s.a.append([key, code]); s.pos[code] = len(s.a) - 1; s.up(len(s.a) - 1)
    def change(s, code, key):
        i = s.pos[code]; s.a[i][0] = key; s.up(i); s.down(s.pos[code])
    def remove(s, code):
        i = s.pos.pop(code); last = s.a.pop()
        if i < len(s.a): s.a[i] = last; s.pos[last[1]] = i; s.up(i); s.down(s.pos[last[1]])
    def top_m(s, m):
        B = [(s.sg * s.a[0][0], 0)] if s.a else []; out = []
        while B and len(out) < m:
            v, i = heapq.heappop(B); out.append(s.a[i][1])
            for c in (2 * i + 1, 2 * i + 2):
                if c < len(s.a): heapq.heappush(B, (s.sg * s.a[c][0], c))
        return out
def run_structure(skip_heap_delete=False):
    rnd = random.Random(9)
    sales = {}; mn = IHeap(1); mx = IHeap(-1); stale = False
    for _ in range(3000):
        op = rnd.choice("IIBBBDMX")
        if op == "I":
            c = rnd.randint(0, 60)
            if c not in sales: sales[c] = 0; mn.push(0, c); mx.push(0, c)
        elif op == "B" and sales:
            c = rnd.choice(list(sales)); sales[c] += 1; mn.change(c, sales[c]); mx.change(c, sales[c])
        elif op == "D" and sales:
            c = rnd.choice(list(sales)); del sales[c]
            if not skip_heap_delete: mn.remove(c); mx.remove(c)
        elif op in "MX":
            m = rnd.randint(1, 5)
            got = (mx if op == "X" else mn).top_m(m)
            if any(g not in sales for g in got): return True       # a deleted product is reported
            vals = sorted(sales.values(), reverse=(op == "X"))[:m]
            assert [sales[g] for g in got] == vals
    return stale
assert run_structure() is False
assert run_structure(skip_heap_delete=True) is True       # a deleted product would still be returned
# finding a barcode inside a heap array scans all n cells; rebuilding is linear too
n = 1000; arr = list(range(n)); assert next(i for i, v in enumerate(arr) if v == n - 1) + 1 == n

# ---- Q5b: Min(m) with an auxiliary heap
AH = C.aux_heap_facts()
F["Q5b_third"], F["Q5b_size"] = AH["third"], AH["size_after_3"]

# ---- Q6: the hash table A = [14, 8, 1, _, 21, 15, _], h(x,i) = (x + F(i)) mod 7
TARGET = {0: 14, 1: 8, 2: 1, 4: 21, 5: 15}
def build(order, Fn):
    tab = {}
    for x in order:
        for i in range(7):
            c = (x + Fn(i)) % 7
            if c not in tab: tab[c] = x; break
        else: return None
    return tab
cands = {"a": lambda i: i * i, "b": lambda i: i, "c": lambda i: 2 * i, "d": lambda i: 3 * i}
works = {k: any(build(o, fn) == TARGET for o in itertools.permutations([14, 8, 1, 21, 15])) for k, fn in cands.items()}
assert works == {"a": True, "b": False, "c": False, "d": False}, works
F["Q6a_cell21"] = (21 + 2 * 2) % 7
assert F["Q6a_cell21"] == 4 and build([14, 8, 1, 21, 15], cands["a"]) == TARGET
orders = {"a": [14, 8, 1, 21, 15], "b": [1, 8, 14, 21, 15], "c": [21, 14, 8, 1, 15], "d": [15, 8, 14, 1, 21]}
ok = {k: build(o, cands["a"]) == TARGET for k, o in orders.items()}
assert ok == {"a": True, "b": False, "c": False, "d": False}, ok
def attempts(x, occ, Fn=cands["a"]):
    for i in range(7):
        if (x + Fn(i)) % 7 not in occ: return i + 1
F["Q6b_att21"] = attempts(21, {0, 1, 2})
F["Q6b_att15"] = attempts(15, {0, 1, 2, 4})
assert (F["Q6b_att21"], F["Q6b_att15"]) == (3, 3)
assert (21 + 4) % 7 == 4 and (15 + 4) % 7 == 5                # the cells they finally take
# Q6c: delete 15, search 22
tab = dict(TARGET); tab[5] = "DEL"
def search(x, tab, marker=True):
    seen = []
    for i in range(7):
        c = (x + i * i) % 7; seen.append(c)
        if c not in tab: return False, seen
        if tab[c] == x: return True, seen
        if tab[c] == "DEL" and not marker: return False, seen
    return False, seen
found, seen = search(22, tab)
assert (found, seen) == (False, [1, 2, 5, 3])
F["Q6c_home"], F["Q6c_cell_i2"], F["Q6c_cells"] = 22 % 7, seen[2], len(seen)
assert (F["Q6c_home"], F["Q6c_cell_i2"], F["Q6c_cells"]) == (1, 5, 4)
assert len(search(22, tab, marker=False)[1]) == 3
# why a marker is needed: 29 (home 1) inserted after 15 lives past 15's cell; stopping there would miss it
t2 = dict(TARGET); t2[3] = 29
t2[5] = "DEL"
assert search(29, t2)[0] is True and search(29, t2, marker=False)[0] is False

EXPECT = {
    "19B-B-Q1a": [F["Q1a_ratio"]],
    "19B-B-Q2a": [F["Q2a_h2"], F["Q2a_h3"], F["Q2a_h4"], F["Q2a_total"]],
    "19B-B-Q3a": [F["Q3a_chain"], F["Q3a_h10"], F["Q3a_h100"]],
    "19B-B-Q3b": [F["Q3b_maxmin"]],
    "19B-B-Q5b": [F["Q5b_third"], F["Q5b_size"]],
    "19B-B-Q6a": [F["Q6a_cell21"]],
    "19B-B-Q6b": [F["Q6b_att21"], F["Q6b_att15"]],
    "19B-B-Q6c": [F["Q6c_home"], F["Q6c_cell_i2"], F["Q6c_cells"]],
}
raw = pathlib.Path(__file__).resolve().parents[2] / "raw" / "19B-B.json"
if raw.exists():
    data = json.loads(raw.read_text(encoding="utf-8"))
    ids = {}
    for q in data["questions"]:
        ids[f'19B-B-Q{q["num"]}{"abcdefghij"["אבגדהוזחטי".index(q["part"])] if q.get("part") else ""}'] = q
    for qid, want in EXPECT.items():
        got = [s["answer"] for s in ids[qid].get("steps", []) if s["type"] == "numeric"]
        assert got == want, (qid, got, want)
    print("generated numeric steps match:", len(EXPECT), "items")
print("19B-B step checks OK")
