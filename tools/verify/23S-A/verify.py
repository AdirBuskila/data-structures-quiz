"""Checks for 23S-A (data-structures). ASCII only. Run: PYTHONUTF8=1 py tools/verify/23S-A/verify.py"""
import sys, pathlib, itertools, math
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
import avl as A

ok = True


def check(name, cond):
    global ok
    print(("PASS " if cond else "FAIL ") + name)
    ok = ok and bool(cond)


# ---- Q2a: Fibonacci tree F_h (h even) has a leaf at depth h/2
def fib_tree(h):
    if h == 0:
        return ("L",)
    if h == 1:
        return ("N", ("L",))
    return ("N", fib_tree(h - 2), fib_tree(h - 1))


def leaf_depths_of(t, d=0):
    if len(t) == 1:
        return [d]
    return [x for c in t[1:] for x in leaf_depths_of(c, d + 1)]


def height(t):
    return 0 if len(t) == 1 else 1 + max(height(c) for c in t[1:])


for h in (2, 4, 6, 8, 10):
    t = fib_tree(h)
    check("Q2a F_%d height %d has leaf at depth %d" % (h, height(t), h // 2),
          height(t) == h and (h // 2) in leaf_depths_of(t))

# ---- Q2b: preorder 10,5,3,15 of an AVL tree; reinserting in that order needs a rotation
t = A.AVL()
for k in (10, 5, 15, 3):
    t.ins(k)
check("Q2b T1=10(5(3),15) is AVL without rotation", t.rot == 0)


def pre(n):
    return [] if n is None else [n.k] + pre(n.l) + pre(n.r)


check("Q2b preorder of T1 is 10,5,3,15", pre(t.root) == [10, 5, 3, 15])
t2 = A.AVL()
for k in (10, 5, 3, 15):
    t2.ins(k)
check("Q2b inserting 10,5,3,15 needs a rotation", t2.rot >= 1)


# ---- Q2c: trees whose internal nodes all have exactly 3 children have an odd number of leaves
def leaf_counts(maxn):
    res = {0: {1}}
    for i in range(1, maxn + 1):
        s = set()
        for a in range(i):
            for b in range(i - a):
                c = i - 1 - a - b
                for x in res[a]:
                    for y in res[b]:
                        for z in res[c]:
                            s.add(x + y + z)
        res[i] = s
    return res


r = leaf_counts(8)
check("Q2c leaf counts always odd (internal nodes 0..8)", all(x % 2 == 1 for s in r.values() for x in s))

# ---- Q3a: min-heap on 1..12; positions (1-based array) 1,3,6,12 are the grey nodes
given = {2: 2, 4: 3, 5: 7, 7: 6, 8: 10, 9: 9, 10: 12, 11: 11}
free = [1, 3, 6, 12]
sols = []
for perm in itertools.permutations([1, 4, 5, 8]):
    a = dict(given)
    a.update(dict(zip(free, perm)))
    if all(a[i // 2] < a[i] for i in range(2, 13)):
        sols.append(perm)
check("Q3a unique completion %s" % (sols,), sols == [(1, 4, 5, 8)])

# ---- Q3b: counting array finds the missing numbers
arr = [0, 2, 0, 3, 7, 0, 6, 10, 9, 12, 11, 0]
cnt = [0] * 13
for x in arr:
    if x:
        cnt[x] += 1
miss = [v for v in range(1, 13) if cnt[v] == 0]
check("Q3b counting array finds missing 1,4,5,8", miss == [1, 4, 5, 8])

# ---- Q3c: tree 1(2(?),?) with {3,4} missing: both fillings are heaps
sols = set()
for p in itertools.permutations([3, 4]):
    a = {1: 1, 2: 2, 3: p[1], 4: p[0]}
    if a[1] < a[2] < a[4] and a[1] < a[3]:
        sols.add(p)
check("Q3c two completions", len(sols) == 2)

# ---- Q4a: cuckoo tables
h1 = lambda x: x % 11
h2 = lambda x: (x // 11) % 11


def place(order):
    T1, T2 = {}, {}
    for x in order:
        cur, tbl = x, 1
        for _ in range(40):
            if tbl == 1:
                p = h1(cur)
                old = T1.get(p)
                T1[p] = cur
            else:
                p = h2(cur)
                old = T2.get(p)
                T2[p] = cur
            if old is None:
                break
            cur, tbl = old, 3 - tbl
        else:
            return None
    return T1, T2


tab1 = ({0: 22, 1: 34, 4: 26, 6: 50, 8: 30}, {1: 15, 2: 23, 3: 40})
tab2 = ({3: 14, 5: 16, 6: 28, 8: 30, 10: 43}, {1: 17, 2: 25, 4: 54})
for T1, T2 in (tab1, tab2):
    check("slots respect hash functions",
          all(h1(v) == p for p, v in T1.items()) and all(h2(v) == p for p, v in T2.items()))
bad1 = [v for p, v in tab1[1].items() if h1(v) not in tab1[0]]
check("table 1 impossible: T2 key %s has an empty h1 slot" % bad1, bad1 == [40])
keys1 = list(tab1[0].values()) + list(tab1[1].values())
found = False
for perm in itertools.permutations(keys1):
    r = place(perm)
    if r and r[0] == tab1[0] and r[1] == tab1[1]:
        found = True
        break
check("table 1: no insertion order (8! orders) produces it", not found)
r = place([17, 28, 25, 14, 54, 43, 16, 30])
check("table 2: order 17,28,25,14,54,43,16,30 gives table 2", r == (tab2[0], tab2[1]))


# ---- Q4b: T(n)=3T(n/3)+n+1 is Theta(n log n)
def T(n):
    return 1 if n <= 1 else 3 * T(n // 3) + n + 1


rs = [T(3 ** k) / (3 ** k * k) for k in range(5, 14)]
check("Q4b T(3^k)/(n log3 n) -> 1: %s" % ["%.3f" % x for x in rs], abs(rs[-1] - 1) < 0.12 and rs[-1] < rs[0])


# ---- Q5: union-find with path compression, smaller joins larger (ties free)
def find(par, x, compress=True):
    r = x
    while par[r] != r:
        r = par[r]
    if compress:
        while par[x] != r:
            par[x], x = r, par[x]
    return r


def size_of(par, r):
    return sum(1 for i in range(len(par)) if find(list(par), i, False) == r)


def run(par, ops):
    par = list(par)
    for op in ops:
        if op[0] == "union":
            _, x, y, tie = op
            rx, ry = find(par, x), find(par, y)
            if rx == ry:
                continue
            sx, sy = size_of(par, rx), size_of(par, ry)
            if sx < sy:
                par[rx] = ry
            elif sy < sx:
                par[ry] = rx
            elif tie == "first":
                par[ry] = rx
            else:
                par[rx] = ry
        else:
            find(par, op[1])
    return tuple(par)


def tree(edges, n):
    p = list(range(n + 1))
    for c, pa in edges:
        p[c] = pa
    return tuple(p)


def U(x, y, tie="first"):
    return ("union", x, y, tie)


base8 = tuple(range(9))
sb = run(base8, [U(1, 2), U(1, 3), U(4, 6), U(4, 5), U(7, 8), U(7, 4), U(1, 4)])
check("Q5b official sequence gives the tree",
      sb == tree([(2, 1), (3, 1), (1, 4), (6, 4), (5, 4), (7, 4), (8, 7)], 8))
sc = run(base8, [U(1, 2), U(3, 4), U(1, 3), U(5, 7, "second"), U(6, 7), U(8, 7), U(1, 7, "second")])
check("Q5c official sequence gives the tree",
      sc == tree([(2, 1), (3, 1), (4, 3), (1, 7), (5, 7), (6, 7), (8, 7)], 8))

target = tree([(2, 1), (3, 1), (4, 3), (5, 3), (6, 1), (7, 6), (8, 6), (9, 8)], 9)
N5 = 9


def roots_sizes(par):
    cnt = {}
    for i in range(1, N5 + 1):
        r = i
        while par[r] != r:
            r = par[r]
        cnt[r] = cnt.get(r, 0) + 1
    return cnt


def compress(par, x):
    par = list(par)
    find(par, x)
    return tuple(par)


def succ(par):
    out = set()
    for x in range(1, N5 + 1):
        out.add(compress(par, x))
    cnt = roots_sizes(par)
    rs = list(cnt)
    for rx in rs:
        for ry in rs:
            if rx == ry:
                continue
            if cnt[rx] <= cnt[ry]:
                p = list(par)
                p[rx] = ry
                out.add(tuple(p))
    return out


start = tuple(range(N5 + 1))
seen = {start}
frontier = [start]
while frontier:
    nxt = []
    for s in frontier:
        for t in succ(s):
            if t not in seen:
                seen.add(t)
                nxt.append(t)
    frontier = nxt
    print("frontier", len(frontier), "seen", len(seen), flush=True)
check("Q5a target tree not reachable among %d reachable forests" % len(seen), target not in seen)
print("ALL OK" if ok else "SOME FAILED")
sys.exit(0 if ok else 1)
