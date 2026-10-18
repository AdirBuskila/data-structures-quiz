"""25A-A 1e refuter: is 'select the 0.2n-th element and count it' correct? ASCII only."""
import random, math
from collections import Counter

def stored(A):
    n = len(A); s = sorted(A)
    X = s[max(0, math.ceil(0.2 * n) - 1)]          # element at rank 0.2n
    return A.count(X) > 0.2 * n
def truth(A):
    n = len(A); return any(c > 0.2 * n for c in Counter(A).values())
def four_selects(A):
    n = len(A); s = sorted(A)
    cands = {s[max(0, math.ceil(k * n / 5) - 1)] for k in (1, 2, 3, 4)}
    return any(A.count(x) > 0.2 * n for x in cands)
bad_stored = bad_four = 0; ex = None
random.seed(1)
for _ in range(100000):
    n = random.randint(1, 12)
    A = [random.randint(1, 5) for _ in range(n)]
    t = truth(A)
    if stored(A) != t:
        bad_stored += 1
        if ex is None: ex = (A, t)
    if four_selects(A) != t: bad_four += 1
print("stored single-select wrong on", bad_stored, "of 100000; example", ex)
print("four selects wrong on", bad_four)
A = [1, 2, 3, 3, 3, 4, 5, 6, 7, 8]
print("A", A, "truth", truth(A), "stored", stored(A))
