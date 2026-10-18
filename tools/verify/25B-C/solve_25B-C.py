"""25B-C solver checks (no official key). ASCII only."""
import math, random, itertools, sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL

# Q1a: array stack 1..10, t=0 empty, push: t+=1; A[t]=x
A = [None] * 11; t = 0
def push(x):
    global t; t += 1; A[t] = x
def pop():
    global t; x = A[t]; t -= 1; return x
calls = 0
def mystery():
    global calls; calls += 1
    if t != 0:
        ind = t; x = pop(); mystery()
        if ind % 2: push(2 * x)
for x in (10, 9, 8, 7, 6, 5, 4): push(x)
assert t == 7 and A[1:8] == [10, 9, 8, 7, 6, 5, 4]
mystery()
print("Q1a after MYSTERY: t =", t, "stack =", A[1:t + 1], "calls =", calls)
assert t == 4 and A[1:5] == [20, 16, 12, 8] and calls == 8   # n+1 calls -> T(n)=T(n-1)+c

# Q1c: T(n)=3T(n/2)+n -> Theta(n^log2 3)
def T(n): return 1 if n <= 1 else 3 * T(n // 2) + n
for k in (10, 14, 18):
    n = 2 ** k; print("Q1c ratio T/n^1.585 at 2^%d: %.4f" % (k, T(n) / n ** math.log2(3)))

# Q2: output has n nodes -> Omega(n); merge+build balanced O(n). Check build-from-sorted gives AVL.
def build(a, lo, hi):
    if lo > hi: return None
    m = (lo + hi) // 2
    return (a[m], build(a, lo, m - 1), build(a, m + 1, hi))
def h(n): return -1 if n is None else 1 + max(h(n[1]), h(n[2]))
def ok(n): return n is None or (abs(h(n[1]) - h(n[2])) <= 1 and ok(n[1]) and ok(n[2]))
for n in range(1, 200): assert ok(build(list(range(n)), 0, n - 1))
print("Q2a: middle-split build is AVL for n<200")

# Q3: AVL + doubly linked list, simulate random ops against a reference list
class DS:
    def __init__(s): s.t = AVL(); s.node = {}; s.head = s.tail = None
    def insert(s, k):
        s.t.ins(k); nd = [k, s.tail, None]; s.node[k] = nd
        if s.tail: s.tail[2] = nd
        else: s.head = nd
        s.tail = nd
    def delete(s, k):
        s.t.dele(k); nd = s.node.pop(k)
        if nd[1]: nd[1][2] = nd[2]
        else: s.head = nd[2]
        if nd[2]: nd[2][1] = nd[1]
        else: s.tail = nd[1]
    def first(s): return s.head[0] if s.head else None
    def last(s): return s.tail[0] if s.tail else None
random.seed(1)
for trial in range(200):
    d = DS(); ref = []
    for _ in range(60):
        if ref and random.random() < 0.4:
            k = random.choice(ref); ref.remove(k); d.delete(k)
        else:
            k = random.randint(0, 10 ** 6)
            if k in ref: continue
            ref.append(k); d.insert(k)
        assert d.first() == (ref[0] if ref else None) and d.last() == (ref[-1] if ref else None)
print("Q3: AVL + linked list matches reference")

# Q4: product pair via sort + binary search
import bisect
def find_pair(A, x):
    B = sorted((v, i) for i, v in enumerate(A, 1)); vals = [v for v, _ in B]
    n = len(A)
    for v, i in B:
        if v == 0:
            if x == 0 and n >= 2:
                return (i, B[0][1] if B[0][1] != i else B[1][1])
            continue
        if x % v: continue
        w = x // v
        if w == v: continue
        j = bisect.bisect_left(vals, w)
        if j < n and vals[j] == w: return (i, B[j][1])
    return 0
for trial in range(3000):
    n = random.randint(1, 8)
    A = random.sample(range(-12, 13), n); x = random.randint(-60, 60)
    r = find_pair(A, x)
    brute = any(A[i] * A[j] == x for i in range(n) for j in range(n) if i != j)
    assert (r != 0) == brute, (A, x, r)
    if r: assert r[0] != r[1] and A[r[0] - 1] * A[r[1] - 1] == x
print("Q4: sort+binary search agrees with brute force")

# Q5a: inserting a value >= every key never swaps (min heap)
for trial in range(500):
    a = sorted(random.sample(range(100), random.randint(0, 20)))
    random.shuffle(a); import heapq; heapq.heapify(a)
    v = max(a, default=0) + 1; a.append(v); i = len(a) - 1
    assert i == 0 or a[(i - 1) // 2] <= v
print("Q5a: a value above the max never swaps")
# Q5b: chain BST has height n-1
# Q5c: T(n)=n log2 sqrt n + 0.5 log10 n -> ratio to n log n tends to 1/2
for k in (10, 20, 40):
    n = 2.0 ** k; print("Q5c T/(n log2 n) at 2^%d: %.4f" % (k, (n * math.log2(math.sqrt(n)) + 0.5 * math.log10(n)) / (n * math.log2(n))))
print("OK")
