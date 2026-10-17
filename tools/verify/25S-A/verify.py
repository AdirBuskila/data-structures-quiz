"""Checks for 25S-A: hashing traces, BST/AVL max-distance brute force, recurrence, order-keeping heap counterexample."""
import sys
from functools import lru_cache

# --- Q2b1/Q2b2 double hashing, table size 11
def h(x, i): return ((x % 11) + i * (1 + x % 7)) % 11
T = [None] * 11
def ins(x):
    for i in range(11):
        j = h(x, i)
        if T[j] is None:
            T[j] = x; return j, i
for x in [11, 5, 6, 22, 7, 13]:
    ins(x)
exp = {0: 11, 2: 22, 5: 5, 6: 6, 7: 7, 9: 13}
assert {k: v for k, v in enumerate(T) if v is not None} == exp, T
# which new numbers collide exactly 3 times? show 31
def probes(x):
    c = 0
    for i in range(11):
        if T[h(x, i)] is None: return c, h(x, i)
        c += 1
assert probes(31) == (3, 10), probes(31)
print("hashing ok")

# --- Q1b/Q1c: max/second-max distance over all BSTs / AVL trees of n nodes (shapes)
def shapes(n):
    if n == 0: yield None; return
    for l in range(n):
        for L in shapes(l):
            for R in shapes(n - 1 - l):
                yield (L, R)
def height(t): return 0 if t is None else 1 + max(height(t[0]), height(t[1])) if False else (-1 if t is None else 1 + max(height(t[0]), height(t[1])))
def is_avl(t):
    if t is None: return True
    return abs(height(t[0]) - height(t[1])) <= 1 and is_avl(t[0]) and is_avl(t[1])
def number(t):
    """in-order labels; returns dict label->path (tuple of L/R)"""
    out = {}; c = [0]
    def go(t, p):
        if t is None: return
        go(t[0], p + "L"); out[c[0]] = p; c[0] += 1; go(t[1], p + "R")
    go(t, ""); return out
def dist(a, b):
    k = 0
    while k < min(len(a), len(b)) and a[k] == b[k]: k += 1
    return len(a) - k + len(b) - k
for n in range(2, 11):
    mb = ma = 0
    for t in shapes(n):
        P = number(t); d = dist(P[n - 1], P[n - 2])
        mb = max(mb, d)
        if is_avl(t): ma = max(ma, d)
    assert mb == n - 1, (n, mb)
    assert ma == 1, (n, ma)
print("bst max n-1, avl max 1 ok (n=2..10)")

# --- Q2a counterexample: buildheap(min) then swap children rule
heap = [3, 21, 7, 22, 25, 15, 10]
for i in range(1, len(heap)):
    assert heap[(i - 1) // 2] <= heap[i]
assert heap[1] > heap[2]  # left > right -> swap
heap[1], heap[2] = heap[2], heap[1]
bad = any(heap[(i - 1) // 2] > heap[i] for i in range(1, len(heap)))
assert bad
print("Q2a counterexample ok:", heap)

# --- Q5c T(n)=T(n/3)+T(n/2)+n : T(n)/n converges (<= 6)
@lru_cache(None)
def T_(n): return 1 if n < 2 else T_(n // 3) + T_(n // 2) + n
r = [T_(10 ** k) / 10 ** k for k in range(2, 9)]
assert all(x < 6.01 for x in r) and abs(r[-1] - r[-2]) < 0.1, r
print("recurrence ratio", [round(x, 3) for x in r])
