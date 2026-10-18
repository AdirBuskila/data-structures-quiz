"""25S-B step checks: every expected value / distractor used in gen_25S-B.py steps. ASCII only.
Run: PYTHONUTF8=1 py tools/verify/25S-B/steps_verify.py"""
import math, random, itertools, sys, pathlib, bisect
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL, N, H

# ---------- heap helpers ----------
def parent(i): return (i - 1) // 2
def depth(i): return (i + 1).bit_length() - 1
def dist(a, b):
    d = 0
    while a != b:
        if a > b: a = parent(a)
        else: b = parent(b)
        d += 1
    return d
def is_heap(v): return all(v[parent(i)] < v[i] for i in range(1, len(v)))

# ---------- Q1a: distance 1 between max and second max ----------
v = [1, 3, 2, 4]
assert is_heap(v) and dist(v.index(4), v.index(3)) == 1
possible = {}
for n in range(2, 10):
    ok = False
    for p in itertools.permutations(range(1, n + 1)):
        if is_heap(p) and dist(p.index(n), p.index(n - 1)) == 1:
            ok = True; break
    possible[n] = ok
assert possible == {2: True, 3: False, 4: True, 5: False, 6: True, 7: False, 8: True, 9: False}, possible
# construction for even n (swap cells n/2 and n-1, 1-based)
for n in range(4, 60, 2):
    a = list(range(1, n + 1)); a[n // 2 - 1], a[n - 2] = a[n - 2], a[n // 2 - 1]
    assert is_heap(a) and dist(a.index(n), a.index(n - 1)) == 1, n
# the second largest has exactly one child iff distance 1 (children counts)
def nchild(i, n): return sum(1 for c in (2 * i + 1, 2 * i + 2) if c < n)
for n in range(2, 12):
    for p in itertools.permutations(range(1, min(n, 8) + 1)) if n <= 8 else []:
        if is_heap(p) and dist(p.index(n), p.index(n - 1)) == 1:
            assert nchild(p.index(n - 1), n) == 1
print("Q1a ok", possible)

# ---------- Q1b: worst-case distance between max and second max ----------
def worst(n):
    best = 0
    for u in range(n):
        if 2 * u + 1 < n: continue  # max must be a leaf
        for w in range(n):
            if w == u: continue
            kids = [c for c in (2 * w + 1, 2 * w + 2) if c < n]
            if kids not in ([], [u]): continue
            # constructive check: max at u, second at w, rest increasing by index
            vals = [None] * n; vals[u] = n; vals[w] = n - 1
            rest = iter(range(1, n - 1))
            for i in range(n):
                if vals[i] is None: vals[i] = next(rest)
            if is_heap(vals):
                best = max(best, dist(u, w))
    return best
for n in range(2, 10):
    b = 0
    for p in itertools.permutations(range(1, n + 1)):
        if is_heap(p): b = max(b, dist(p.index(n), p.index(n - 1)))
    assert b == worst(n), (n, b, worst(n))      # construction == exhaustive
def formula(n):
    h = n.bit_length() - 1
    return 2 * h if n >= 3 * 2 ** (h - 1) else 2 * h - 1
for n in range(3, 70):
    assert worst(n) == formula(n), (n, worst(n), formula(n))
assert worst(11) == 5 and (11).bit_length() - 1 == 3
# depth of the deepest leaf in the right subtree for n = 11 is 2
dr = max(depth(i) for i in range(11) if (i + 1) >> (depth(i)) == 3) if False else None
rs = [depth(i) for i in range(11) if i >= 1 and ((i + 1) >> (depth(i) - 1)) == 3]
assert max(rs) == 2, rs
print("Q1b ok", worst(11))

# ---------- Q1c: best case distance max / median = 1 ----------
for n in (3, 5, 7, 9):
    best = min(dist(p.index(n), p.index((n + 1) // 2)) for p in itertools.permutations(range(1, n + 1)) if is_heap(p))
    assert best == (2 if n == 3 else 1), (n, best)
for n in range(5, 61, 2):
    k = (n - 1) // 2; m = k + 1; pidx = k - 1  # 0-based index of node floor(n/2)
    vals = [None] * n; vals[pidx] = m; vals[n - 1] = n
    rest = iter([x for x in range(1, n + 1) if x not in (m, n)])
    for i in range(n):
        if vals[i] is None: vals[i] = next(rest)
    assert is_heap(vals) and dist(vals.index(n), vals.index(m)) == 1, n
print("Q1c ok")

# ---------- Q2a: AVL inserts ----------
def show(n):
    if n is None: return "."
    if n.l is None and n.r is None: return str(n.k)
    return "%d(%s,%s)" % (n.k, show(n.l), show(n.r))
def height(n): return H(n)
t = AVL()
for k in (10, 20, 5, 15, 40): t.ins(k)
assert show(t.root) == "10(5,20(15,40))" and t.rot == 0
t.ins(80)
assert show(t.root) == "20(10(5,15),40(.,80))" and t.rot == 1
for k in (30, 70, 90): t.ins(k)
assert t.rot == 1
t.ins(75)
assert show(t.root) == "20(10(5,15),70(40(30,.),80(75,90)))" and t.rot == 3 and t.dbl == 1   # one double rotation (2 single)
assert t.root.r.k == 70
t.ins(2); t.ins(100)
assert show(t.root) == "20(10(5(2,.),15),70(40(30,.),80(75,90(.,100))))"
assert H(t.root) == 3 + 1 and H(t.root) == 4
assert t.rot - t.dbl == 2          # a double rotation counts once
# the rotation for insert 80: only a left rotation at 10 gives a valid AVL
def mk():
    a = AVL()
    for k in (10, 20, 5, 15, 40): a.ins(k)
    return a
def valid(n):
    return n is None or (abs(H(n.l) - H(n.r)) <= 1 and valid(n.l) and valid(n.r))
def raw_insert(n, k):
    if n is None: return N(k)
    if k < n.k: n.l = raw_insert(n.l, k)
    else: n.r = raw_insert(n.r, k)
    from avl import up; up(n); return n
a = mk(); a.root = raw_insert(a.root, 80)
assert not valid(a.root) and H(a.root.r) == 2 and H(a.root.l) == 0
import copy
def rot_left(x):
    from avl import up
    y = x.r; x.r = y.l; y.l = x; up(x); up(y); return y
def rot_right(x):
    from avl import up
    y = x.l; x.l = y.r; y.r = x; up(x); up(y); return y
b = copy.deepcopy(a); b.root = rot_left(b.root); assert valid(b.root)                  # single left at 10
c = copy.deepcopy(a); c.root = rot_right(c.root); assert not valid(c.root)             # single right at 10
d = copy.deepcopy(a); d.root.r = rot_right(d.root.r); d.root = rot_left(d.root); assert not valid(d.root)   # double RL
# no rotation at all: the tree after raw insert of 80 is already shown invalid above
# insert 75: double RL at 40 is the valid fix, single left at 40 is not
a2 = AVL()
for k in (10, 20, 5, 15, 40, 80, 30, 70, 90): a2.ins(k)
a2.root.r = raw_insert(a2.root.r, 75)         # raw, unbalanced
n40 = a2.root.r
assert not valid(n40) and n40.k == 40 and H(n40.l) == 0 and H(n40.r) == 2 and H(n40.r.l) == 1
f = copy.deepcopy(n40); f = rot_left(f); assert not valid(f)                            # single left: no
g = copy.deepcopy(n40); g.r = rot_right(g.r); g = rot_left(g); assert valid(g) and g.k == 70
print("Q2a ok", show(t.root))

# ---------- Q2b / Q2c: cuckoo ----------
def h1(x): return x % 11
def h2(x): return (x // 11) % 11
def insert(T1, T2, x, limit=100):
    cur, side = x, 1
    for _ in range(limit):
        T = T1 if side == 1 else T2
        h = h1 if side == 1 else h2
        pos = h(cur)
        if T[pos] is None:
            T[pos] = cur; return True
        T[pos], cur = cur, T[pos]
        side = 3 - side
    return False
def build(seq):
    T1, T2 = [None] * 11, [None] * 11
    for x in seq: assert insert(T1, T2, x)
    return T1, T2
want1 = [None] * 11; want1[1] = 67; want1[6] = 105; want1[9] = 53
want2 = [None] * 11; want2[0] = 6; want2[6] = 75; want2[9] = 100
assert h1(67) == 1 and h1(105) == 6 and h1(53) == 9 and h2(6) == 0 and h2(75) == 6 and h2(100) == 9
assert h1(6) == 6 and h1(75) == 9 and h1(100) == 1
assert build([6, 75, 100, 105, 53, 67]) == (want1, want2)
for bad in ([105, 53, 67, 6, 75, 100], [105, 6, 53, 75, 67, 100], [67, 53, 105, 100, 75, 6]):
    assert build(bad) != (want1, want2), bad
# a cell filled in T1 (or T2) never becomes empty under insertions only
random.seed(5)
for _ in range(500):
    T1, T2 = [None] * 11, [None] * 11
    for x in random.sample(range(0, 121), random.randint(1, 8)):
        f1 = [i for i in range(11) if T1[i] is not None]; f2 = [i for i in range(11) if T2[i] is not None]
        if not insert(T1, T2, x): break
        assert all(T1[i] is not None for i in f1) and all(T2[i] is not None for i in f2)
assert h1(53) == 9 and h2(53) == 4
print("Q2bc ok")

# ---------- Q3: order-statistic AVL: Rank ----------
class T:
    def __init__(s, k): s.k = k; s.l = s.r = None; s.size = 1
def size(n): return 0 if n is None else n.size
def ins(n, k):
    if n is None: return T(k)
    if k < n.k: n.l = ins(n.l, k)
    else: n.r = ins(n.r, k)
    n.size = 1 + size(n.l) + size(n.r); return n
def rank(root, k, add):
    r, v = 0, root
    while v is not None:
        if k < v.k: v = v.l
        else:
            r += add(v); v = v.r
    return r
adds = {"good": lambda v: size(v.l) + 1, "noself": lambda v: size(v.l),
        "right": lambda v: size(v.r) + 1, "one": lambda v: 1, "size": lambda v: v.size}
root = None
for k in (20, 10, 30, 5, 15, 25, 40): root = ins(root, k)
assert rank(root, 27, adds["good"]) == 5 and rank(root, 5, adds["good"]) == 1 and rank(root, 4, adds["good"]) == 0
random.seed(6); fails = {k: False for k in adds if k != "good"}
for _ in range(500):
    ks = random.sample(range(100), random.randint(1, 15)); root = None
    for k in ks: root = ins(root, k)
    for q in range(-1, 101, 3):
        want = sum(1 for x in ks if x <= q)
        assert rank(root, q, adds["good"]) == want
        for name in fails:
            if rank(root, q, adds[name]) != want: fails[name] = True
assert all(fails.values()), fails
# size field: after inserting 7 keys the root size is 7
root = None
for k in (20, 10, 30, 5, 15, 25, 40): root = ins(root, k)
assert root.size == 7 and root.l.size == 3
print("Q3 ok")

# ---------- Q4a: special list sorting ----------
def special_sort(vals, pick=min):
    L = list(vals); out = []; work = 0
    while L:
        m = pick(L); work += 2 * len(L)
        moved = [x for x in L if x == m]; L = [x for x in L if x != m]
        out += moved
    return out, work
for k in range(1, 12):
    n = 2 ** k - 1
    vs = []
    for j in range(k): vs += [j * 7 + 3] * 2 ** (k - 1 - j)   # smallest value appears (n+1)/2 times
    assert len(vs) == n
    random.shuffle(vs)
    res, work = special_sort(vs)
    assert res == sorted(vs) and work < 4 * n
    resd, _ = special_sort(vs, max)
    if k >= 2: assert resd != sorted(vs)
assert (2 ** 6 - 1) == 63 and math.log2(63 + 1) == 6
sizes = []; r = 15
while r > 0: sizes.append(r); r = (r - 1) // 2
assert sizes == [15, 7, 3, 1] and sum(sizes) == 26 < 2 * 15
print("Q4a ok")

# ---------- Q4b: comparison sorting lower bound ----------
assert math.ceil(math.log2(math.factorial(8))) == 16
# n inserts then n deleteMin with a heap yields ascending order
import heapq
xs = random.sample(range(1000), 50); hq = []
for x in xs: heapq.heappush(hq, x)
out = [heapq.heappop(hq) for _ in xs]
assert out == sorted(xs) and out != sorted(xs, reverse=True)
print("Q4b ok")

# ---------- extra checks used by distractors / numerics ----------
h_ = copy.deepcopy(n40); h_ = rot_right(h_); assert not valid(h_)                       # single right at 40: no
i_ = copy.deepcopy(n40); i_.r = rot_right(i_.r); assert not valid(i_)                   # right rotation at 80 only: no
def evictions(seq):
    T1, T2 = [None] * 11, [None] * 11; ev = 0
    for x in seq:
        cur, side = x, 1
        while True:
            Tt = T1 if side == 1 else T2; hh = h1 if side == 1 else h2; pos = hh(cur)
            if Tt[pos] is None: Tt[pos] = cur; break
            Tt[pos], cur = cur, Tt[pos]; side = 3 - side; ev += 1
    return ev
assert evictions([6, 75, 100, 105, 53, 67]) == 3
assert h2(6) == 0
print("extra ok")
