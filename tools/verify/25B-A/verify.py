import sys, math, itertools, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL, N, up
# Q1a MASHU on a circular array of size 10 (head=index of front, tail=index of next free slot)
def run_mashu(items, head0=5, size=10):
    q = list(items)
    # build circular layout: first element at head0 (1-based)
    def layout(q, head):
        arr = [None]*size; 
        for i, x in enumerate(q): arr[(head-1+i) % size] = x
        return arr, head, (head-1+len(q)) % size + 1
    a0 = layout(q, head0)
    def mashu(q):
        if q:
            x = q.pop(0); mashu(q); q.append(x)
    q2 = list(q); mashu(q2)
    # MASHU pops from the front to depth then enqueues back: result is reversed order, head advanced by n
    head2 = (head0 - 1 + len(q)) % size + 1
    a1 = layout(q2, head2)
    return a0, a1
a0, a1 = run_mashu([6, 12, 4, 53, 8, 17])
assert a0[0] == [None]*4 + [6, 12, 4, 53, 8, 17] and a0[1] == 5 and a0[2] == 1, a0
assert a1[0][:6] == [17, 8, 53, 4, 12, 6] and a1[1] == 1 and a1[2] == 7, a1
print("Q1a ok")
# Q1b T(n)=T(n-1)+O(1): count of ops linear
cnt = 0
def m(n):
    global cnt
    cnt += 1
    if n: m(n-1)
for n in range(1, 30):
    cnt = 0; m(n); assert cnt == n+1
# Q1c T(n)=T(n/4)+T(n/2)+n^2 -> Theta(n^2): ratio T(n)/n^2 bounded by 16/11
from functools import lru_cache
@lru_cache(None)
def T(n):
    if n <= 1: return 1.0
    return T(n//4) + T(n//2) + n*n
for k in range(4, 24):
    n = 2**k; r = T(n)/n**2
    assert 1 <= r <= 16/11 + 1e-6, (n, r)
print("Q1c ok, ratio", T(2**23)/4**23)
# Q2a d-ary heap indexing
for d in range(2, 8):
    for i in range(0, 200):
        for k in range(1, d+1):
            c = d*i + k
            assert (c-1)//d == i
print("Q2a ok")
# Q2b d-ary heap insert/extract, height log_d n, cost O(d log_d n)
import random
class DHeap:
    def __init__(s, d): s.d = d; s.a = []
    def insert(s, x):
        s.a.append(x); i = len(s.a)-1
        while i > 0 and s.a[(i-1)//s.d] < s.a[i]:
            s.a[(i-1)//s.d], s.a[i] = s.a[i], s.a[(i-1)//s.d]; i = (i-1)//s.d
    def extract(s):
        Q = s.a; mx = Q[0]; Q[0] = Q[-1]; Q.pop()
        def down(i):
            m = i
            for k in range(1, s.d+1):
                if s.d*i+k < len(Q) and Q[s.d*i+k] > Q[m]: m = s.d*i+k
            if m != i: Q[i], Q[m] = Q[m], Q[i]; down(m)
        if Q: down(0)
        return mx
for d in (2, 3, 4, 5):
    h = DHeap(d); xs = [random.randrange(1000) for _ in range(300)]
    for x in xs: h.insert(x)
    out = [h.extract() for _ in xs]
    assert out == sorted(xs, reverse=True)
print("Q2b ok")
# Q3a/b Fibonacci tree counts F(0)=1, F(1)=2, F(n)=F(n-2)+F(n-1)+1
F = [1, 2]
for n in range(2, 40): F.append(F[n-2] + F[n-1] + 1)
assert F[2] == 4 and F[3] == 7 and F[4] == 12  # F4 figure: 1 + 4 + 7 nodes
for h in range(0, 40): assert F[h] >= 2**(h/2), h
for h in range(1, 39): assert F[h+1] >= 2*2**((h-1)/2) + 1 >= 2**((h+1)/2)
print("Q3 ok", F[:8])
# Q4a double hashing m=10
def h(k, i): return ((k % 10) + i*(1 + k % 7)) % 10
T10 = [None]*10
for k in (5, 15, 25):
    for i in range(10):
        j = h(k, i)
        if T10[j] is None: T10[j] = k; break
assert T10 == [25, None, None, None, None, 5, None, 15, None, None], T10
# Q4b key 95 cannot be inserted: probes only 5 and 0
probes = {h(95, i) for i in range(10)}
assert probes == {5, 0} and all(T10[p] is not None for p in probes)
# Q4c with prime m and 1<=h2<m the probe sequence covers the table
for m in (7, 11, 13):
    for h2 in range(1, m):
        assert len({(3 + i*h2) % m for i in range(m)}) == m
assert len({(5 + i*5) % 10 for i in range(10)}) == 2
print("Q4 ok")
# Q5a almost complete tree with 4 leaves: n=7 (h=2) and n=8 (h=3)
def leaves_ac(n): return n - n//2
def height_ac(n): return int(math.log2(n))
assert leaves_ac(7) == 4 and leaves_ac(8) == 4 and height_ac(7) == 2 and height_ac(8) == 3
# Q5c Fibonacci AVL tree even height >=4, delete leftmost leaf -> more than one rotation
def fib(i, base=[0]):
    if i == 0: return N(0)
    n = N(0); 
    if i == 1: n.l = N(0); up(n); return n
    n.l = fib(i-2); n.r = fib(i-1); up(n); return n
def label(n, c):
    if n is None: return
    label(n.l, c); n.k = c[0]; c[0] += 1; label(n.r, c)
res = {}
for i in (2, 3, 4, 5, 6, 7, 8):
    t = AVL(); t.root = fib(i); label(t.root, [0])
    t.dele(0); res[i] = t.rot
print("Q5c rotations on deleting leftmost leaf of F_i:", res)
assert res[4] > 1 and res[6] > 1
print("all ok")

# =====================  STEP CHECKS (step-author phase)  =====================
import sympy
# --- Q1a real circular queue (1-based cells, tail = next free cell) ---
class CQ:
    def __init__(s, size=10, head=5):
        s.a = [None]*(size+1); s.size = size; s.head = head; s.tail = head; s.n = 0
    def enq(s, x): s.a[s.tail] = x; s.tail = s.tail % s.size + 1; s.n += 1
    def deq(s):
        x = s.a[s.head]; s.a[s.head] = None; s.head = s.head % s.size + 1; s.n -= 1; return x
    def empty(s): return s.n == 0
def mashu_cq(q):
    if not q.empty():
        x = q.deq(); mashu_cq(q); q.enq(x)
cq = CQ()
for x in (6, 12, 4, 53, 8, 17): cq.enq(x)
assert (cq.head, cq.tail) == (5, 1)                         # tail after insertion = 1
mashu_cq(cq)
assert (cq.head, cq.tail) == (1, 7)                         # head 1, tail 7 after MASHU
assert cq.a[1:7] == [17, 8, 53, 4, 12, 6] and cq.a[6] == 6  # cell 6 holds 6
# --- Q1b: count real calls of MASHU ---
def calls_mashu(n):
    c = [0]
    def m(q):
        c[0] += 1
        if q: x = q.pop(0); m(q); q.append(x)
    m(list(range(n))); return c[0]
for n in range(1, 25):
    assert calls_mashu(n) == n + 1                          # one recursive call on n-1 elements: linear
    assert calls_mashu(n) < 2**n if n > 2 else True        # 2T(n-1) would be exponential
assert calls_mashu(500) == 501 and calls_mashu(500) > 10 * math.log2(500)   # not logarithmic
# --- Q1c level sums and series ---
r = sympy.Rational(1, 4)**2 + sympy.Rational(1, 2)**2
assert r == sympy.Rational(5, 16)
assert sympy.Rational(1) / (1 - r) == sympy.Rational(16, 11) and abs(16/11 - 1.4545) < 0.001
n_ = 2**30
assert T(n_) / n_**2 < 16/11 and T(n_) / (n_**2 * math.log2(n_)) < 0.1 and T(n_) / (n_*math.log2(n_)) > 1000
# --- Q2a indexing: distractor parent formulas fail ---
d = 3
assert all((i-1)//d == p for p in range(30) for i in [d*p+k for k in range(1, d+1)])
assert any(i//d != (i-1)//d for i in range(1, 40))                       # floor(i/d) wrong
assert any((i+1)//d != (i-1)//d for i in range(1, 40))                   # floor((i+1)/d) wrong
assert any((i-1)//(d+1) != (i-1)//d for i in range(1, 40))
assert (5*3 + 1, (23-1)//5, 5*3 + 5) == (16, 4, 20)    # d=5,i=3: first child 16, last child 20; d=5,i=23: parent 4
# --- Q2b fillblank variants + comparison counts ---
def build_with(cond, d, xs):
    Q = []
    for x in xs:
        Q.append(x); i = len(Q) - 1
        while i > 0 and cond(Q, i, d):
            p = (i-1)//d; Q[p], Q[i] = Q[i], Q[p]; i = p
    return Q
def extract_all(Q, d):
    Q = list(Q); out = []
    while Q:
        mx = Q[0]; Q[0] = Q[-1]; Q.pop(); out.append(mx)
        i = 0
        while Q:
            m = i
            for k in range(1, d+1):
                if d*i+k < len(Q) and Q[d*i+k] > Q[m]: m = d*i+k
            if m == i: break
            Q[i], Q[m] = Q[m], Q[i]; i = m
    return out
CONDS = {
    "ok": lambda Q, i, d: Q[(i-1)//d] < Q[i],
    "gt": lambda Q, i, d: Q[(i-1)//d] > Q[i],
    "i_over_d": lambda Q, i, d: Q[i//d] < Q[i],
    "prev": lambda Q, i, d: Q[(i-1)//d] < Q[i-1],
}
random.seed(7)
fails = {k: 0 for k in CONDS}
for _ in range(400):
    d = random.choice((2, 3, 4)); xs = random.sample(range(1000), random.randrange(3, 40))
    for k, c in CONDS.items():
        if extract_all(build_with(c, d, xs), d) != sorted(xs, reverse=True): fails[k] += 1
assert fails["ok"] == 0 and all(fails[k] > 0 for k in CONDS if k != "ok"), fails
def height(n, d):
    i, h = n-1, 0
    while i > 0: i = (i-1)//d; h += 1
    return h
def extract_cmp_max(d, n):
    Q = build_with(CONDS["ok"], d, random.sample(range(10**6), n))
    best = 0
    for _ in range(n // 2):
        Q[0] = Q[-1]; Q.pop(); i = 0; c = 0
        while True:
            m = i
            for k in range(1, d+1):
                if d*i+k < len(Q):
                    c += 1
                    if Q[d*i+k] > Q[m]: m = d*i+k
            if m == i: break
            Q[i], Q[m] = Q[m], Q[i]; i = m
        best = max(best, c)
    return best, height(n, d)
for d, n in ((8, 8**4), (2, 2**10), (16, 16**3)):
    best, h = extract_cmp_max(d, n)
    assert d * (h - 1) <= best <= d * h, (d, n, best, h)    # extract: Theta(d log_d n), not log_d n
Q = []; worst = 0
for x in range(2000):                                       # ascending inserts = worst case for sift-up
    Q.append(x); i = len(Q)-1; s = 0
    while i > 0 and Q[(i-1)//8] < Q[i]:
        p = (i-1)//8; Q[p], Q[i] = Q[i], Q[p]; i = p; s += 1
    worst = max(worst, s)
assert worst == height(2000, 8) == 4                       # insert: one comparison per level, Theta(log_d n)
Q = list(range(100, 0, -1))
assert sum(1 for k in range(1, 8) if k < len(Q)) == 7      # a node with all d=7 children costs 7 comparisons
# --- Q3 Fibonacci trees ---
@lru_cache(None)
def fibn(i): return 1 if i == 0 else 2 if i == 1 else fibn(i-2) + fibn(i-1) + 1
def nodes(t): return 1 + sum(nodes(c) for c in t)
def fibtree(i):
    if i == 0: return []
    if i == 1: return [[]]
    return [fibtree(i-2), fibtree(i-1)]
assert [nodes(fibtree(i)) for i in range(8)] == [1, 2, 4, 7, 12, 20, 33, 54] == [fibn(i) for i in range(8)]
assert fibn(0) + fibn(1) != 4 and fibn(0) * fibn(1) != 4 and 2*fibn(1) + 1 != 4   # distractor recurrences give 3, 2, 5 not 4
for h in range(0, 60): assert fibn(h) >= 2**(h/2)
for h in range(1, 60):
    assert fibn(h-1) + fibn(h) + 1 >= 2**((h-1)/2) + 2**(h/2) + 1 >= 2*2**((h-1)/2) + 1 >= 2**((h+1)/2)
assert fibn(2) + fibn(3) + 1 > 2**(2/2) + 2**(3/2) + 1     # findbug: "<=" in the first inequality is false
# --- Q4 double hashing ---
H2 = lambda k: 1 + k % 7
assert (H2(15), H2(25), (5 + H2(15)) % 10, (5 + H2(25)) % 10, H2(95)) == (2, 5, 7, 0, 5)
assert {(5 + i*H2(95)) % 10 for i in range(10)} == {5, 0}
assert math.gcd(H2(95), 10) == 5
phi = sum(1 for hh in range(1, 10) if len({(3 + i*hh) % 10 for i in range(10)}) == 10)
assert phi == 4 == sympy.totient(10)
assert len({(3 + i*0) % 10 for i in range(10)}) == 1
cover = lambda m, hh: len({(1 + i*hh) % m for i in range(m)}) == m
assert not cover(10, 5) and cover(10, 3) and not cover(9, 3) and cover(9, 2)
assert all(cover(m, hh) == (math.gcd(hh, m) == 1) for m in range(2, 40) for hh in range(1, m))
# --- Q5a almost complete: leaves, heights ---
assert (7 - 7//2, 8 - 8//2, int(math.log2(7)), int(math.log2(8))) == (4, 4, 2, 3)
# --- Q5b: chain of c internal nodes ending in a node with two leaves ---
def chain2(c):
    t = ("I", ("L",), ("L",))
    for _ in range(c): t = ("I", t, None)
    return t
def cnt(t):
    if t is None: return 0
    if t[0] == "L": return 1
    return 1 + cnt(t[1]) + cnt(t[2])
def leaf_depths(t, d=0):
    if t is None: return []
    if t[0] == "L": return [d]
    return leaf_depths(t[1], d+1) + leaf_depths(t[2], d+1)
t = chain2(5)
assert cnt(t) == 8 and len(set(leaf_depths(t))) == 1 and leaf_depths(t)[0] == 6 and 6 > math.log2(8)
assert [math.floor(math.log2(n)) for n in (15, 7)] == [3, 2]   # complete trees: height 3, 2 <= log2 n
# --- Q5c rotations ---
print("Q5c rotations on deleting leftmost leaf:", res)
assert res[4] > 1 and res[6] > 1
print("STEPS OK")
