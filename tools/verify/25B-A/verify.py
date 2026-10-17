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
