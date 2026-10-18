"""25B-C step checks: every expected value / distractor used in gen_25B-C.py steps. ASCII only.
Run: PYTHONUTF8=1 py tools/verify/25B-C/steps_verify.py"""
import math, random, itertools, bisect
from fractions import Fraction

# ---------- Q1a: stack trace ----------
def run(mod_rule="odd_index"):
    A = [None] * 11; t = 0
    for x in (10, 9, 8, 7, 6, 5, 4):
        t += 1; A[t] = x
    t_after_push = t
    def myst():
        nonlocal t
        if t != 0:
            ind = t; x = A[t]; t -= 1
            myst()
            cond = {"odd_index": ind % 2 == 1, "even_index": ind % 2 == 0,
                    "odd_value": x % 2 == 1, "always": True}[mod_rule]
            if cond:
                t += 1; A[t] = 2 * x
    myst()
    return t_after_push, t, A[1:t + 1]
tp, tf, st = run()
assert tp == 7 and tf == 4 and st == [20, 16, 12, 8]
assert st[1] == 16 and st[3] == 8
for bad in ("even_index", "odd_value", "always"):
    assert run(bad)[2] != st, bad
print("Q1a ok", tp, tf, st)

# ---------- Q1b: n+1 calls, T(n)=T(n-1)+c ----------
for n in range(0, 40):
    calls = 0
    def f(k):
        global calls
        calls += 1
        if k: f(k - 1)
    f(n)
    assert calls == n + 1
print("Q1b ok (n+1 calls)")

# ---------- Q1c: T(n)=3T(n/2)+n ----------
assert abs(math.log2(3) - 1.585) < 0.001
def T(n): return 1 if n <= 1 else 3 * T(n // 2) + n
rs = [T(2 ** k) / (2 ** k) ** math.log2(3) for k in range(5, 60, 5)]
assert all(1 <= r <= 3.01 for r in rs), rs                      # Theta(n^log2 3)
assert T(2 ** 50) / (2 ** 50) ** 2 < 1e-3                       # not n^2
assert T(2 ** 50) / (2 ** 50 * 50) > 1e3                        # not n log n
assert T(2 ** 50) / ((2 ** 50) ** math.log2(3) * 50) < 0.1      # not n^1.585 log n
# case: f(n)=n is polynomially smaller than n^log_b a  -> case 1; eps = 0.5 works
assert 1 <= math.log2(3) - 0.5
print("Q1c ok", rs[-1])

# ---------- Q2a: merge two sorted halves, build AVL from sorted array ----------
class Nd:
    def __init__(s, k): s.k = k; s.l = s.r = None
def build(a, lo, hi):
    if lo > hi: return None
    m = (lo + hi) // 2; n = Nd(a[m]); n.l = build(a, lo, m - 1); n.r = build(a, m + 1, hi); return n
def hgt(n): return -1 if n is None else 1 + max(hgt(n.l), hgt(n.r))
def is_avl(n):
    if n is None: return True
    return abs(hgt(n.l) - hgt(n.r)) <= 1 and is_avl(n.l) and is_avl(n.r)
for n in range(1, 300):
    a = list(range(n)); r = build(a, 0, n - 1)
    assert is_avl(r) and hgt(r) == int(math.log2(n))
assert hgt(build(list(range(10)), 0, 9)) == 3
# inorder gives sorted, preorder does not (random BSTs)
def bst_insert(r, k):
    if r is None: return Nd(k)
    if k < r.k: r.l = bst_insert(r.l, k)
    else: r.r = bst_insert(r.r, k)
    return r
def inorder(n): return [] if n is None else inorder(n.l) + [n.k] + inorder(n.r)
def preorder(n): return [] if n is None else [n.k] + preorder(n.l) + preorder(n.r)
random.seed(1); pre_unsorted = False
for _ in range(200):
    ks = random.sample(range(100), 12); r = None
    for k in ks: r = bst_insert(r, k)
    assert inorder(r) == sorted(ks)
    if preorder(r) != sorted(ks): pre_unsorted = True
assert pre_unsorted
# the output must hold the n/2 smallest of T1 and n/2 largest of T2 (keeping the wrong halves changes it)
t1 = random.sample(range(100), 10); t2 = random.sample(range(100, 200), 10)
good = sorted(sorted(t1)[:5] + sorted(t2)[5:]); bad = sorted(sorted(t1)[:5] + sorted(t2)[:5])
assert good != bad
print("Q2a ok")

# ---------- Q3: AVL (by id) + doubly linked list; model check ----------
import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
class Model:                       # reference implementation of the structure
    def __init__(s): s.order = []   # insertion order of live keys
    def insert(s, k): s.order.append(k)
    def delete(s, k): s.order.remove(k)
    def first(s): return s.order[0]
    def last(s): return s.order[-1]
class DLL:                         # the DLL + dict (stands for the AVL pointer lookup) from the solution
    def __init__(s): s.nodes = {}; s.head = s.tail = None
    def insert(s, k):
        n = {"k": k, "p": s.tail, "n": None}
        if s.tail: s.tail["n"] = n
        else: s.head = n
        s.tail = n; s.nodes[k] = n
    def delete(s, k):
        n = s.nodes.pop(k); p, q = n["p"], n["n"]
        if p: p["n"] = q
        else: s.head = q
        if q: q["p"] = p
        else: s.tail = p
    def first(s): return s.head["k"]
    def last(s): return s.tail["k"]
random.seed(2)
for _ in range(300):
    m, d = Model(), DLL()
    for _ in range(60):
        if m.order and random.random() < 0.4:
            k = random.choice(m.order); m.delete(k); d.delete(k)
        else:
            k = random.randint(0, 10 ** 6)
            if k in d.nodes: continue
            m.insert(k); d.insert(k)
        if m.order: assert m.first() == d.first() and m.last() == d.last()
m, d = Model(), DLL()
for k in (5, 3, 8, 1): m.insert(k); d.insert(k)
m.delete(5); d.delete(5)
assert m.first() == d.first() == 3 and m.last() == d.last() == 1
m.insert(7); d.insert(7); m.delete(3); d.delete(3)
assert m.first() == d.first() == 8 and m.last() == d.last() == 7
# singly linked list delete needs the predecessor: cost grows linearly (counted steps)
def sll_delete_steps(n, k):
    steps = 0
    for i in range(n):
        steps += 1
        if i == k: break
    return steps
assert sll_delete_steps(1000, 999) == 1000
# heap by insertion time: delete of an arbitrary id is not O(log n) without handles; sorted array insert shifts
arr = list(range(1000)); steps = len(arr) - bisect.bisect_left(arr, 0)
assert steps == 1000
print("Q3 ok")

# ---------- Q4: product pair ----------
def pair(A, x, skip_expr="eq"):
    B = sorted((v, i + 1) for i, v in enumerate(A))
    vals = [b[0] for b in B]
    iters = 0
    for k, (v, i) in enumerate(B):
        iters += 1
        if v == 0:
            if x == 0 and len(A) >= 2:
                return (i, [b[1] for b in B if b[1] != i][0]), iters
            continue
        q = Fraction(x, v)
        skip = {"eq": q == v, "gt": q > v, "zero": q == 0, "v==x": v == x}[skip_expr]
        if skip: continue
        j = bisect.bisect_left(vals, q)
        if j < len(vals) and vals[j] == q:
            return (i, B[j][1]), iters
    return 0, iters
def brute(A, x):
    return any(A[i] * A[j] == x for i in range(len(A)) for j in range(len(A)) if i != j)
random.seed(3)
bad_seen = {"gt": False, "zero": False, "v==x": False}
for _ in range(4000):
    n = random.randint(1, 7); A = random.sample(range(-5, 13), n); x = random.randint(-12, 36)
    r, _ = pair(A, x)
    if r == 0: assert not brute(A, x), (A, x)
    else: assert A[r[0] - 1] * A[r[1] - 1] == x and r[0] != r[1], (A, x, r)
    for s in bad_seen:
        rr, _ = pair(A, x, s)
        wrong = (rr == 0 and brute(A, x)) or (rr != 0 and (rr[0] == rr[1] or A[rr[0] - 1] * A[rr[1] - 1] != x))
        if wrong: bad_seen[s] = True
assert all(bad_seen.values()), bad_seen
r, it = pair([3, 8, 2, 6, 5], 30)
assert r != 0 and {r[0], r[1]} == {4, 5} and it == 3
assert Fraction(30, 5) == 6
# binary search probes on n=1024 sorted array: worst case 11 probes (floor(log2 n)+1)
def probes(a, key):
    lo, hi, c = 0, len(a) - 1, 0
    while lo <= hi:
        c += 1; m = (lo + hi) // 2
        if a[m] == key: return c
        if a[m] < key: lo = m + 1
        else: hi = m - 1
    return c
a = list(range(1024))
assert max(max(probes(a, k) for k in range(1024)), probes(a, -1), probes(a, 5000)) == 11
print("Q4 ok")
