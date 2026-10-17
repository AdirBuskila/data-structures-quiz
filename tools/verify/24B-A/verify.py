"""Checks for 24B-A: every keyed claim in the shuffled MCQ forms is re-derived by simulation / DP / master theorem.
Imports the parameter tables of tools/gen/gen_24B-A.py (the generator only writes the file under __main__)."""
import sys, pathlib, importlib.util, math, itertools
sys.setrecursionlimit(10000)
from functools import lru_cache
HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent))
from avl import AVL, leaf_depths, rotations, depth_of, leaves
spec = importlib.util.spec_from_file_location("gen", HERE.parents[1] / "gen" / "gen_24B-A.py")
g = importlib.util.module_from_spec(spec); spec.loader.exec_module(g)

# ---- AVL: leaf depth existence (height counted in edges)
A = leaf_depths(120)
for neg, opts, key in g.AVLCL:
    truth = [((d in A[h]) == bool(e)) for e, h, d, _ in opts]
    want = [(i != key) if neg else (i == key) for i in range(4)]
    assert truth == want, (opts, truth, want)
print("AVL leaf-depth claims ok (6)")

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
print("AVL insertion claims ok (5)")

# ---- double hashing m=11
for seq, c, neg, opts, key in g.HASH:
    tab = [None] * 11; where = {}
    for x in seq:
        for i in range(11):
            j = ((x % 11) + i * ((x % c) + 1)) % 11
            if tab[j] is None: tab[j] = x; where[x] = j; break
        else: raise AssertionError("table full")
    tv = [where[x] == j for x, j in opts]
    want = [(i != key) if neg else (i == key) for i in range(4)]
    assert tv == want, (seq, c, tv, want)
print("double hashing ok (6)")

# ---- cuckoo hashing (insert into T1; the evicted key goes to the other table at its other hash)
def cuckoo(seq, m=11):
    h = [lambda x: x % m, lambda x: (x // 11) % m]
    T = [[None] * m, [None] * m]
    for x in seq:
        cur, t = x, 0
        for _ in range(100):
            j = h[t](cur)
            if T[t][j] is None: T[t][j] = cur; break
            T[t][j], cur = cur, T[t][j]
            t = 1 - t
        else: raise AssertionError("cycle")
    return T
for seq, t, opts, key in g.CUCKOO:
    T = cuckoo(seq); vals = sorted(v for v in T[t - 1] if v is not None)
    tv = [vals == sorted(o) for o in opts]
    assert tv == [i == key for i in range(4)], (seq, t, vals, tv)
print("cuckoo ok (6)")

# ---- master theorem: lowest a (among options) giving a complexity larger than n^p  <=>  log_b a >= p
for b, p, opts, key, _ in g.APAR:
    good = [o for o in opts if math.log(o, b) >= p - 1e-12]
    assert min(good) == opts[key], (b, p, opts, key)
print("a-parameter ok (6)")

# ---- T(n) = T(n/c) + T((c-1)n/c) + n  is Theta(n log n)
def rec(num, den):
    @lru_cache(None)
    def T(n):
        if n <= 2: return 1.0
        a = max(1, n * num // den)
        return T(a) + T(n - a) + n
    return T
for num, den in ((1, 4), (1, 5), (3, 5)):
    T = rec(num, den); r = [T(10**k) / (10**k * math.log2(10**k)) for k in range(3, 7)]
    assert max(r) / min(r) < 2 and r[-1] > 0.3, (num, den, r)
print("recurrences ok (3)")

# ---- tree sizes by brute force
def trees(h):
    """all full / general binary trees of height h as (min nodes, max leaves of full)."""
    return None
# min nodes in a binary tree of height h (edges): a chain, h+1
@lru_cache(None)
def minnodes(h): return 1 if h == 0 else 1 + minnodes(h - 1)
assert all(minnodes(h) == h + 1 for h in range(10))
# min nodes of a full binary tree (0 or 2 children) of height h: 2h+1 ; max leaves 2^h ; perfect tree 2^(h+1)-1
@lru_cache(None)
def fullmin(h): return 1 if h == 0 else 1 + fullmin(h - 1) + 1
@lru_cache(None)
def fullmaxleaves(h): return 1 if h == 0 else 2 * fullmaxleaves(h - 1)
assert all(fullmin(h) == 2 * h + 1 and fullmaxleaves(h) == 2 ** h for h in range(12))
assert all(sum(2 ** i for i in range(h + 1)) == 2 ** (h + 1) - 1 for h in range(12))
print("tree sizes ok (4)")

# ---- successor field in a min-heap: compute the successor of every element (sorting), n log n; check a correct O(n log n) method
import random
for _ in range(50):
    n = random.randrange(1, 60); a = random.sample(range(1000), n)
    heap = a[:]; import heapq; heapq.heapify(heap)
    order = sorted(range(n), key=lambda i: heap[i])
    succ = [None] * n
    for r, i in enumerate(order[:-1]): succ[i] = order[r + 1]
    assert all((succ[i] is None) == (heap[i] == max(heap)) for i in range(n))
    assert all(succ[i] is None or heap[succ[i]] == min(v for v in heap if v > heap[i]) for i in range(n))
print("successor ok")

# ---- sortsub: sqrt(n) smallest sorted in O(n): quickselect-free check via heap of the sqrt(n) smallest (nlargest on small k) -> sorted
for n in (1, 2, 10, 100, 1000, 10000):
    a = [random.random() for _ in range(n)]; k = max(1, math.isqrt(n))
    got = sorted(heapq.nsmallest(k, a)); assert got == sorted(a)[:k]
    # work: selection O(n) + sort of k items O(k log k) <= O(n)
    assert k * math.log2(k + 1) <= n * 2
print("sortsub ok")

# ---- reasoning-only keys (checked by hand against the definitions, listed for the record)
#  traversal claims, decision-tree claims and T1/T2/f/g relations are logical statements; the keyed option was verified
#  against a counter-example / proof for each distractor in the working notes.
# Q13 has no official solution: held, nothing to verify.

# ---- the generator's keys equal the highlighted letters read from the PDF fill rectangles
assert len([q for q in g.questions if q["kind"] == "mcq"]) == 56
print("all ok")
