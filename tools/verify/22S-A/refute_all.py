"""Refuter checks for 22S-A (independent code, own AVL implementation)."""
import functools
from fractions import Fraction

# ---------- generic AVL on tuple trees (key, left, right) ----------
def h(t): return -1 if t is None else 1 + max(h(t[1]), h(t[2]))
def mk(k, l, r): return (k, l, r)
def bal(t): return h(t[1]) - h(t[2])

def rot_r(t):
    k, (lk, ll, lr), r = t
    return (lk, ll, (k, lr, r))
def rot_l(t):
    k, l, (rk, rl, rr) = t
    return (rk, (k, l, rl), rr)
def fix(t):
    if t is None: return None
    b = bal(t)
    if b > 1:
        if bal(t[1]) < 0: t = (t[0], rot_l(t[1]), t[2])
        return rot_r(t)
    if b < -1:
        if bal(t[2]) > 0: t = (t[0], t[1], rot_r(t[2]))
        return rot_l(t)
    return t
def ins(t, x):
    if t is None: return (x, None, None)
    if x < t[0]: return fix((t[0], ins(t[1], x), t[2]))
    return fix((t[0], t[1], ins(t[2], x)))
def pop_min(t):
    if t[1] is None: return t[0], t[2]
    m, nl = pop_min(t[1]); return m, fix((t[0], nl, t[2]))
def pop_max(t):
    if t[2] is None: return t[0], t[1]
    m, nr = pop_max(t[2]); return m, fix((t[0], t[1], nr))
def dele(t, x, succ=True):
    if t is None: return None
    if x < t[0]: return fix((t[0], dele(t[1], x, succ), t[2]))
    if x > t[0]: return fix((t[0], t[1], dele(t[2], x, succ)))
    if t[1] is None: return t[2]
    if t[2] is None: return t[1]
    if succ:
        m, nr = pop_min(t[2]); return fix((m, t[1], nr))
    m, nl = pop_max(t[1]); return fix((m, nl, t[2]))
def keys(t): return [] if t is None else keys(t[1]) + [t[0]] + keys(t[2])
def isavl(t):
    return t is None or (abs(bal(t)) <= 1 and isavl(t[1]) and isavl(t[2]))
def isbst(t):
    k = keys(t); return k == sorted(k) and len(set(k)) == len(k)

@functools.lru_cache(None)
def shapes(n):
    if n == 0: return [None]
    out = []
    for nl in range(n):
        for a in shapes(nl):
            for b in shapes(n - 1 - nl):
                if abs(h(a) - h(b)) <= 1: out.append((0, a, b))
    return out
def label(t, c):
    if t is None: return None
    l = label(t[1], c); k = c[0] * 10; c[0] += 1; r = label(t[2], c)
    return (k, l, r)

def del_all_lower(t, succ):
    H = h(t)
    return all(h(dele(t, k, succ)) == H - 1 for k in keys(t))
def two_ins_raise(t):
    H = h(t); ks = keys(t)
    def gaps(ks):
        ks = sorted(ks)
        return [ks[0] - 5] + [Fraction(a + b, 2) for a, b in zip(ks, ks[1:])] + [ks[-1] + 5]
    for g in gaps(ks):
        t1 = ins(t, g)
        for g2 in gaps(keys(t1)):
            if h(ins(t1, g2)) == H + 1: return True
        if h(t1) == H + 1:  # first insertion alone raised it
            pass
    return False
def single_raise(t):
    H = h(t); ks = sorted(keys(t))
    gs = [ks[0] - 5] + [Fraction(a + b, 2) for a, b in zip(ks, ks[1:])] + [ks[-1] + 5]
    return any(h(ins(t, g)) == H + 1 for g in gs)

print("== Q2a: 12-node AVL shapes")
res = {}
for s in shapes(12):
    t = label(s, [1]); assert isavl(t) and isbst(t) and len(keys(t)) == 12
    H = h(t)
    c_s = del_all_lower(t, True); c_p = del_all_lower(t, False)
    b = not two_ins_raise(t)
    r = res.setdefault(H, [0, 0, 0, 0, 0, 0])
    r[0] += 1; r[1] += c_s; r[2] += c_p; r[3] += b; r[4] += (c_s and b); r[5] += (c_s and c_p and b)
print("height -> [count, c(succ), c(pred), b, b&c(succ), b&c(both)]", res)

official = (10,
            (5, (3, (2, (1, None, None), None), (4, None, None)), (6, None, (7, None, None))),
            (15, (11, None, None), (17, None, (18, None, None))))
assert isavl(official) and isbst(official) and len(keys(official)) == 12
print("official tree height", h(official), "c succ/pred", del_all_lower(official, True), del_all_lower(official, False),
      "b (no two inserts raise)", not two_ins_raise(official), "single insert raises?", single_raise(official))
for k in keys(official):
    print(" del", k, "->", h(dele(official, k)), end=";")
print()

print("== Q2a pitfall: height-3 12-node, is there leaf deletion without drop (expected yes)")
r3 = [s for s in shapes(12) if h(s) == 3]
print(len(r3), "height-3 shapes; all have some deletion w/o drop:", all(not del_all_lower(label(s, [1]), True) for s in r3))

print("== min nodes of AVL height 0..5")
nm = [1, 2]
for _ in range(4): nm.append(nm[-1] + nm[-2] + 1)
print(nm)

print("== Q1b median counterexample + pitfall 3..5 nodes")
def median_ok(t):
    ks = sorted(keys(t)); m = ks[(len(ks) - 1) // 2]; m2 = ks[len(ks) // 2]
    near = {t[0]}
    if t[1]: near.add(t[1][0])
    if t[2]: near.add(t[2][0])
    return m in near and m2 in near
for n in range(1, 10):
    bad = [s for s in shapes(n) if not median_ok(label(s, [1]))]
    print(n, "nodes: shapes where median is not root/child:", len(bad), "of", len(shapes(n)))
t = (10, (5, (3, (2, None, None), (4, None, None)), (6, None, None)), (15, (11, None, None), (17, None, None)))
print("Q1b tree avl", isavl(t), keys(t), "median", sorted(keys(t))[4], "root/children", t[0], t[1][0], t[2][0])

print("== Q2b perfect trees")
for hh in range(0, 8):
    n = 2 ** (hh + 1) - 1; assert (n + 1) // 2 == 2 ** hh
print("h=4 leaves", (31 + 1) // 2)
print("x1 for k=3:", (2 ** 4 - 1 + 1) // 2, "= 2^3")

print("== Q3 select example")
A = [10, 8, 25, 12, 5, 4, 15, 32, 14, 45, 11]; x = 12
print("smaller than x:", sum(a < x for a in A), "rank", sum(a < x for a in A) + 1)
d = sorted(abs(a - x) for i, a in enumerate(A) if i != A.index(x))
print("diffs excl x", d, "5th", d[4], "count<=4", sum(v <= 4 for v in d))
print("with x included:", sorted(abs(a - x) for a in A)[4], "(5th incl x itself)")
print("nearest5", sorted([a for a in A if a != x], key=lambda a: abs(a - x))[:5])

print("== Q4a")
print("level 3 nodes", 4 ** 3, "log4 1024", 1024 and __import__("math").log(1024, 4))
def T(n): return 1 if n == 1 else 4 * T(n // 4) + n
print([T(4 ** k) == 4 ** k * (k + 1) for k in range(8)])

print("== Q4b cuckoo")
def h1(x): return x % 5
def h2(x): return (x // 5) % 5
def cuckoo(seq, verbose=True, maxk=40):
    T1 = [None] * 5; T2 = [None] * 5
    for x in seq:
        coll = 0; cur = x; which = 1; seen = set(); path = []
        while True:
            tab, hf = (T1, h1) if which == 1 else (T2, h2)
            pos = hf(cur)
            state = (tuple(T1), tuple(T2), cur, which)
            if state in seen:
                path.append("CYCLE"); break
            seen.add(state)
            old = tab[pos]; tab[pos] = cur
            if old is None: break
            coll += 1; path.append((cur, which, pos, old))
            cur = old; which = 3 - which
            if coll > maxk: break
        if verbose: print(" insert", x, "evictions", coll, path[-1] if path and path[-1] == "CYCLE" else "", "T1", T1, "T2", T2)
    return T1, T2
cuckoo([11, 12, 32, 6, 7])
