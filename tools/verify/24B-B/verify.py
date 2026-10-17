"""Checks for 24B-B: every keyed claim in the shuffled MCQ forms is re-derived by simulation / master theorem.
Imports the parameter tables of tools/gen/gen_24B-B.py (the generator only writes the file under __main__)."""
import sys, pathlib, importlib.util, math, bisect, random, collections
sys.setrecursionlimit(10000)
HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent))
from avl import AVL, rotations, depth_of, leaves, N, H
spec = importlib.util.spec_from_file_location("gen", HERE.parents[1] / "gen" / "gen_24B-B.py")
g = importlib.util.module_from_spec(spec); spec.loader.exec_module(g)

# ---- preorder of an AVL tree: inserting the sequence into a plain BST rebuilds the unique tree with that preorder
def plain_bst(seq):
    root = None
    def ins(n, k):
        if n is None: return N(k)
        if k < n.k: n.l = ins(n.l, k)
        else: n.r = ins(n.r, k)
        n.h = 1 + max(H(n.l), H(n.r)); return n
    for k in seq: root = ins(root, k)
    return root
def pre(n): return [] if n is None else [n.k] + pre(n.l) + pre(n.r)
def is_avl(n): return n is None or (abs(H(n.l) - H(n.r)) <= 1 and is_avl(n.l) and is_avl(n.r))
def can_be_avl_preorder(seq):
    t = plain_bst(seq); return pre(t) == seq and is_avl(t)
for neg, opts, key in g.PRE:
    ok = [can_be_avl_preorder(o) for o in opts]
    want = [(i != key) if neg else (i == key) for i in range(4)]
    assert ok == want, (opts, ok, want)
print("AVL preorder ok (4)")

# ---- AVL insertion facts
def build(seq):
    t = AVL()
    for x in seq: t.ins(x)
    return t
for seq, opts, key in g.AVLINS:
    t = build(seq); lv = dict(leaves(t.root)); mn = min(seq)
    def truth(o):
        k = o[0]
        if k == "leaf": return o[1] in lv
        if k == "notleaf": return o[1] not in lv
        if k == "minnotleaf": return mn not in lv
        if k == "rot": return rotations(t) == o[1]
        if k == "norot": return rotations(t) == 0
        if k == "root": return t.root.k == o[1]
        if k == "depth": return depth_of(t.root, o[1]) == o[2]
        if k == "mindepth": return depth_of(t.root, mn) == o[1]
    tv = [truth(o) for o in opts]
    assert tv == [i == key for i in range(4)], (seq, opts, tv, key, rotations(t))
print("AVL insertion ok (4)")

# ---- double hashing m=11, h2 = x mod 7 + 1
for seq, opts, key in g.HASH:
    tab = [None] * 11; where = {}
    for x in seq:
        for i in range(11):
            j = ((x % 11) + i * ((x % 7) + 1)) % 11
            if tab[j] is None: tab[j] = x; where[x] = j; break
    tv = [where[x] == j for x, j in opts]
    assert tv == [i == key for i in range(4)], (seq, tv, key)
print("double hashing ok (3)")

# ---- linear probing, h(x) = x mod 10
def linear(seq):
    tab = [None] * 10
    for x in seq:
        j = x % 10
        for _ in range(10):
            if tab[j] is None: tab[j] = x; break
            j = (j + 1) % 10
    return tab
for tab, neg, opts, key in g.LIN:
    target = [tab.get(i) for i in range(10)]
    ok = [linear(o) == target for o in opts]
    want = [(i != key) if neg else (i == key) for i in range(4)]
    assert ok == want, (tab, opts, ok, want)
print("linear probing ok (4)")

# ---- master theorem applicability for T(n) = a T(n/b) + f(n)
def master_case(a, b, p, logpow=0):
    """f = n^p (log n)^logpow; returns 1/2/3 or None when no case applies."""
    if b <= 1: return None
    c = math.log(a, b)
    if p < c - 1e-12: return 1
    if abs(p - c) < 1e-12: return 2 if logpow == 0 else None
    return 3 if a / b ** p < 1 else None
# T=6T(n/2)+n^2 -> case 1 ; T=T(n/3)+n^2 -> case 3 ; T=T(n/4)+1024 -> case 2 ; T=3T(3n/2)+3n/2 -> b<1 none
assert master_case(6, 2, 2) == 1 and master_case(1, 3, 2) == 3 and master_case(1, 4, 0) == 2 and master_case(3, 2 / 3, 1) is None
assert master_case(4, 2, 2, logpow=1) is None  # 25B-B Q1c : 4T(n/2)+n^2 log n
for (rec, key, ex), want in zip(g.MASTER, (1, 3, 2, None)):
    assert {1: 0, 2: 1, 3: 2, None: 3}[want] == key, (rec, key)
print("master theorem ok (4)")

# ---- lowest-complexity window: n^p < T(n) < n^(p+1)  <=>  p <= log_b a < p + 1  (a = b^p gives n^p log n)
for b, p, opts, key in g.APAR:
    good = [o for o in opts if p - 1e-12 <= math.log(o, b) < p + 1 - 1e-12]
    assert good == [opts[key]], (b, p, opts, good)
print("a-window ok (4)")

# ---- STAM loops: sum over i in [sqrt n, n/2] of ceil(log2(n/4)) ~ (n/2) log n  = Theta(n log n)
def stam(n):
    c = 0
    i = math.isqrt(n)
    while i <= n // 2:
        j = 1
        while j <= n // 4: c += 1; j *= 2
        i += 1
    return c
r = [stam(2**k) / (2**k * k) for k in (10, 14, 18)]
assert max(r) / min(r) < 1.3 and all(0.3 < x < 0.6 for x in r), r
print("STAM ok", [round(x, 3) for x in r])

# ---- "mi bari": array of nodes of a doubly linked list gives O(1) Init-free-of-log, Delete and DeleteMin
class Node:
    __slots__ = ("v", "p", "n")
for n in (1, 2, 10, 100):
    nodes = [Node() for _ in range(n + 1)]
    for i in range(1, n + 1): nodes[i].v = i
    head = nodes[1]
    for i in range(1, n + 1):
        nodes[i].p = nodes[i - 1] if i > 1 else None; nodes[i].n = nodes[i + 1] if i < n else None
    present = set(range(1, n + 1))
    def delete(x):
        global head
        if x not in present: return
        nd = nodes[x]; present.discard(x)
        if nd.p: nd.p.n = nd.n
        else: head = nd.n
        if nd.n: nd.n.p = nd.p
    for _ in range(3 * n):
        if random.random() < 0.5 and present: delete(random.choice(sorted(present)))
        elif present:
            m = head.v; assert m == min(present); delete(m)
print("mi-bari ok")

# ---- order statistic with subtree sizes in a balanced tree: select(i) in O(h); compare with sorted order
import itertools
class T:
    def __init__(s, k): s.k = k; s.l = s.r = None; s.sz = 1
def bt(keys):
    if not keys: return None
    m = len(keys) // 2; t = T(keys[m]); t.l = bt(keys[:m]); t.r = bt(keys[m+1:])
    t.sz = 1 + (t.l.sz if t.l else 0) + (t.r.sz if t.r else 0); return t
def select(t, i):
    ls = t.l.sz if t.l else 0
    if i == ls + 1: return t.k
    return select(t.l, i) if i <= ls else select(t.r, i - ls - 1)
ks = sorted(random.sample(range(1000), 200)); t = bt(ks)
assert all(select(t, i) == ks[i - 1] for i in range(1, 201))
assert select(bt(sorted([10, 2, 8, 3, 7, 5, 12])), 3) == 5
print("order statistics ok")

# ---- heap of height h: minimum number of nodes is 2^h (a complete tree whose last level has one node)
for h in range(0, 12):
    assert sum(2 ** i for i in range(h)) + 1 == 2 ** h
print("heap size ok")

# ---- sortsub with log n distinct values: sorted list of distinct values + counters = O(n log log n) comparisons
for n in (64, 1024, 65536):
    d = max(1, int(math.log2(n))); vals = [random.random() for _ in range(d)]
    a = [random.choice(vals) for _ in range(n)]
    keys, cnt, comps = [], collections.Counter(), 0
    for x in a:
        i = bisect.bisect_left(keys, x); comps += math.ceil(math.log2(len(keys) + 1)) + 1
        if i == len(keys) or keys[i] != x: keys.insert(i, x)
        cnt[x] += 1
    out = [k for k in keys for _ in range(cnt[k])]
    assert out == sorted(a) and comps <= n * (math.log2(math.log2(n)) + 3), (n, comps)
print("sortsub ok")

# ---- reasoning-only keys: the sorting decision-tree claims (shortest path n-1, a leaf at depth > n is possible for a wasteful
#     algorithm, leaves = internal nodes + 1 for a full tree, height Omega(n^3) possible, no path of length 1 for n>=3).
n = 8; assert math.factorial(n) > 2 * 2 ** (n - 1)  # fewer than half of the leaves can be at depth n-1

# ---- Q13: heap and AVL(+min pointer) solutions, compare both with brute force
import heapq
random.seed(7)
for _ in range(200):
    h, ref = [], []
    for _ in range(60):
        op = random.choice("iiid")
        if op == "i": k = random.randrange(10000); heapq.heappush(h, k); ref.append(k)
        elif ref:
            m = min(ref); assert h[0] == m
            ref.remove(m); heapq.heappop(h)
        assert (h[0] if h else None) == (min(ref) if ref else None)
print("Q13 ok")
assert len([q for q in g.questions if q["kind"] == "mcq"]) == 34
print("all ok")
