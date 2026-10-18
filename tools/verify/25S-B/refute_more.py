"""25S-B refuter extras: 1c construction, cuckoo options, Q3 rank, Q4a list sort. ASCII only."""
import random

def dist(i, j):
    d = 0
    while i != j:
        if i > j: i //= 2
        else: j //= 2
        d += 1
    return d

# 1c construction for odd n>=5
for n in range(5, 202, 2):
    M = (n + 1) // 2
    p = (n - 1) // 2
    a = [None] * (n + 1)
    a[p] = M; a[n] = n; a[n - 1] = n - 1 if n - 1 != M else n
    used = {M, n, a[n - 1]}
    rest = [v for v in range(1, n + 1) if v not in used]
    pos = [i for i in range(1, n + 1) if a[i] is None]
    for i, v in zip(pos, rest): a[i] = v
    assert all(a[i // 2] < a[i] for i in range(2, n + 1)), n
    assert sorted(a[1:]) == list(range(1, n + 1))
    assert dist(a.index(n), a.index(M)) == 1, n
print("1c construction ok for odd n 5..201")

# cuckoo options
h1 = lambda x: x % 11
h2 = lambda x: (x // 11) % 11
def sim(seq):
    L, R = {}, {}
    for x in seq:
        cur, side = x, 0
        for _ in range(50):
            T, f = (L, h1) if side == 0 else (R, h2)
            old = T.get(f(cur)); T[f(cur)] = cur
            if old is None: break
            cur, side = old, side ^ 1
    return L, R
T1L = {1: 67, 6: 105, 9: 53}; T1R = {0: 6, 6: 75, 9: 100}
for nm, s in (("a", [6, 75, 100, 105, 53, 67]), ("b", [105, 53, 67, 6, 75, 100]), ("c", [105, 6, 53, 75, 67, 100]), ("d", [67, 53, 105, 100, 75, 6])):
    L, R = sim(s)
    print(nm, L == T1L and R == T1R)

# Q3 examples
keys = [20, 10, 30, 5, 15, 25, 40]
print("rank27", sum(1 for k in keys if k <= 27))

# Q4a: simulate algorithm on python list (min rounds)
for k in range(2, 10):
    n = 2 ** k - 1
    vals = random.sample(range(1, 1000), k)
    vals.sort(reverse=True)
    lst = []
    for i, v in enumerate(vals): lst += [v] * (2 ** i)
    random.shuffle(lst)
    steps = 0; out = []; rest = lst[:]
    while rest:
        steps += len(rest) * 2
        m = min(rest)
        out += [x for x in rest if x == m]
        rest = [x for x in rest if x != m]
    assert out == sorted(lst), k
    print("k", k, "n", n, "work", steps, "<", 4 * n, steps < 4 * n)
import math
print("ceil log2 8!", math.ceil(math.log2(math.factorial(8))))
