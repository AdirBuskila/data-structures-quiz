class N:
    def __init__(s, k): s.k = k; s.l = s.r = None; s.h = 0
def h(n): return n.h if n else -1
def upd(n): n.h = 1 + max(h(n.l), h(n.r))
rot = 0
def rr(y):
    global rot; rot += 1
    x = y.l; y.l = x.r; x.r = y; upd(y); upd(x); return x
def rl(x):
    global rot; rot += 1
    y = x.r; x.r = y.l; y.l = x; upd(x); upd(y); return y
def ins(n, k):
    if not n: return N(k)
    if k < n.k: n.l = ins(n.l, k)
    else: n.r = ins(n.r, k)
    upd(n); b = h(n.l) - h(n.r)
    if b > 1:
        if h(n.l.l) < h(n.l.r): n.l = rl(n.l)
        return rr(n)
    if b < -1:
        if h(n.r.r) < h(n.r.l): n.r = rr(n.r)
        return rl(n)
    return n
def depth(n, k, d=0):
    while n.k != k: n = n.l if k < n.k else n.r; d += 1
    return d
def avl(seq):
    global rot; rot = 0; r = None
    for k in seq: r = ins(r, k)
    return r, rot
def isleaf(n, k):
    while n.k != k: n = n.l if k < n.k else n.r
    return n.l is None and n.r is None

for name, seq in [("24B-A Q29", [8,4,7,3,6,2,5,41]), ("24B-A Q30", [7,8,4,2,5,41,3,6]), ("24B-B Q18", [5,8,4,9,7,3,6,42])]:
    r, rt = avl(seq)
    print(name, "root", r.k, "rot", rt, "depths", {k: depth(r, k) for k in seq}, "min leaf?", isleaf(r, min(seq)), "42/41 leaf?", isleaf(r, seq[-1]))

def dh(m, mod, c, keys):
    t = [None] * m; pos = {}
    for x in keys:
        for i in range(m):
            j = (x % m + i * ((x % c) + 1)) % m
            if t[j] is None: t[j] = x; pos[x] = j; break
    return pos
print("24B-A Q33", dh(11, 11, 9, [1,6,18,16,5,22]))
print("24B-A Q36", dh(11, 11, 9, [7,1,6,16,14,8,21,12]))
print("24B-B Q23", dh(11, 11, 7, [11,5,6,22,7,13]))

def lin(seq):
    t = [None] * 10
    for x in seq:
        j = x % 10
        while t[j] is not None: j = (j + 1) % 10
        t[j] = x
    return t
target = [None, 61, 52, 93, 73, 85, 44, 11, None, None, None]
target = [None, 61, 52, 93, 73, 85, 44, 11, None, None]
for nm, s in [("a", [52,93,61,85,73,11,44]), ("b", [52,93,61,85,11,44,73]), ("c", [93,52,61,11,85,44,73]), ("d", [93,61,85,52,73,44,11])]:
    print("24B-B Q26", nm, lin(s) == target)

def cuckoo(keys, limit=200):
    h1 = lambda x: x % 11; h2 = lambda x: (x // 11) % 11
    T = [[None] * 11, [None] * 11]
    for x in keys:
        cur, t = x, 0
        for _ in range(limit):
            idx = h1(cur) if t == 0 else h2(cur)
            cur, T[t][idx] = T[t][idx], cur
            if cur is None: break
            t ^= 1
        else:
            print("cycle on", x)
    return sorted(v for v in T[0] if v is not None), sorted(v for v in T[1] if v is not None)
print("24B-A Q38 T1,T2", cuckoo([3,105,67,100,75,53]))
print("24S-A Q32 T1,T2", cuckoo([24,39,88,28,13,17,20]))
# 24B-B Q3 preorder checks
def build(pre):
    root = None
    for k in pre: root = ins_plain(root, k)
    return root
def ins_plain(n, k):
    if not n: return N(k)
    if k < n.k: n.l = ins_plain(n.l, k)
    else: n.r = ins_plain(n.r, k)
    return n
def ht(n): return -1 if not n else 1 + max(ht(n.l), ht(n.r))
def is_avl(n): return n is None or (abs(ht(n.l) - ht(n.r)) <= 1 and is_avl(n.l) and is_avl(n.r))
def pre(n): return [] if not n else [n.k] + pre(n.l) + pre(n.r)
for nm, s in [("a", [11,6,4,7,8,13,12,14,15]), ("b", [11,6,4,8,7,13,12,15,14]), ("c", [11,6,4,7,8,13,12,15,14]), ("d", [11,6,4,7,8,15,14,12,13])]:
    print("24B-B Q3", nm, "AVL?", is_avl(build(s)))
for nm, s in [("24S-A Q2", [10,5,2,8,6,100,50,45,47,105]), ("24S-A Q25", [10,6,5,2,8,50,47,45,100,105])]:
    print(nm, "AVL?", is_avl(build(s)))
# min nodes AVL height 5
f = [1, 2]
for _ in range(4): f.append(f[-1] + f[-2] + 1)
print("AVL min nodes h0..5", f)
# 24B-B Q31 loop count
import math
for n in (2**10, 2**16, 2**20):
    c = 0
    for i in range(int(math.isqrt(n)), n // 2 + 1):
        j = 1
        while j <= n // 4: c += 1; j *= 2
    print("Q31 n", n, "count", c, "n*log n", n * math.log2(n), "ratio", c / (n * math.log2(n)))
# 24S-A Q52 double hashing probe coverage
import itertools
def covers(m, stepf, xs):
    return all(len({(x % m + i * stepf(x)) % m for i in range(m)}) == m for x in xs)
print("Q52 a", covers(13, lambda x: x % 9 + 1, range(200)), "b", covers(14, lambda x: x % 9 + 1, range(200)), "c", covers(13, lambda x: x % 7, range(200)))
# recurrences
import sympy as sp
x = sp.symbols('x', positive=True)
print("Q6/50 critical p (1/4)^p+(1/2)^p=1:", sp.nsolve(sp.Rational(1,4)**x + sp.Rational(1,2)**x - 1, x, 1), "(1/3)^p+(1/2)^p=1:", sp.nsolve(sp.Rational(1,3)**x + sp.Rational(1,2)**x - 1, x, 1))
print("Q41 log_{sqrt3} 3 =", sp.log(3) / sp.log(sp.sqrt(3)), " Q10 n^2 vs n^0, reg", sp.Rational(1, 9))
