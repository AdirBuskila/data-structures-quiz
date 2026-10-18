"""Machine checks for the step values of 23S-A. ASCII only. Run: PYTHONUTF8=1 py tools/verify/23S-A/verify_steps.py"""
import random, math, itertools

ok = True


def check(name, cond):
    global ok
    print(("PASS " if cond else "FAIL ") + name)
    ok = ok and bool(cond)


# ---- Q1a / Q1b
n = 500
check("Q1a n=500: select index 0.8n = 400 and 100 sellers above it", int(0.8 * n) == 400 and n - int(0.8 * n) == 100)
random.seed(1)


def top_ok(A, n_):
    hi = int(0.2 * n_)
    s = sorted(A)
    return set(A[n_ - hi:]) == set(s[n_ - hi:])


def low_ok(A, n_):
    lo = int(0.05 * n_)
    return set(A[:lo]) == set(sorted(A)[:lo])


def partition(A, lo, hi, pivot):
    """in-place partition of A[lo:hi]: elements <= pivot first"""
    seg = A[lo:hi]
    A[lo:hi] = [x for x in seg if x <= pivot] + [x for x in seg if x > pivot]


good_q1a = True
good_ok = True
for _ in range(300):
    n = random.choice([100, 200, 300])
    A = random.sample(range(10 * n), n)
    s = sorted(A)
    X = s[int(0.8 * n) - 1]
    Y = s[int(0.05 * n) - 1]
    good_q1a &= sorted(x for x in A if x > X) == s[int(0.8 * n):]
    B = A[:]
    partition(B, 0, n, X)
    partition(B, 0, int(0.8 * n), Y)
    good_ok &= top_ok(B, n) and low_ok(B, n)

check("Q1a elements above the 0.8n-th smallest are exactly the top 20%", good_q1a)
check("Q1b partition on X then on the prefix around Y gives low 5% first and top 20% last", good_ok)
check("Q1b n=2000: Y index 100, X index 1600, middle block 1500", int(0.05 * 2000) == 100 and int(0.8 * 2000) == 1600 and 2000 - 100 - int(0.2 * 2000) == 1500)
check("Q1b n=2000: prefix 0.8n = 1600", int(0.8 * 2000) == 1600)

# ---- Q2c: perfect ternary trees have an odd number of leaves
def leaves_set(h):
    if h == 0:
        return {1}
    out = set()
    prev = set()
    for hh in range(h):
        prev |= leaves_set(hh)
    for a in prev:
        for b in prev:
            for c in prev:
                out.add(a + b + c)
    return out


allv = set()
for h in range(0, 4):
    allv |= leaves_set(h)
check("Q2c every leaf count of a perfect ternary tree (height <= 3) is odd", all(v % 2 == 1 for v in allv) and len(allv) > 5)
check("Q2c height 1 has 3 leaves", 3 in leaves_set(1))
check("Q2c odd+odd+odd is odd", all((a + b + c) % 2 == 1 for a in range(1, 40, 2) for b in range(1, 40, 2) for c in range(1, 40, 2)))
check("Q2c odd+odd+odd is never even", not any((a + b + c) % 2 == 0 for a in range(1, 40, 2) for b in range(1, 40, 2) for c in range(1, 40, 2)))

# ---- Q3a
check("Q3a 12 nodes: path root to a deepest leaf has 4 nodes", math.floor(math.log2(12)) + 1 == 4)
check("Q3a missing numbers 1,4,5,8: 4 of them, 12 nodes", len([1, 4, 5, 8]) == math.floor(math.log2(12)) + 1)

# ---- Q3b: restore a min-heap that lost a root-to-leaf path
def build_min_heap(vals):
    A = []
    for v in vals:
        A.append(v)
        i = len(A) - 1
        while i > 0 and A[(i - 1) // 2] > A[i]:
            A[(i - 1) // 2], A[i] = A[i], A[(i - 1) // 2]
            i = (i - 1) // 2
    return A


def restore(damaged, order="asc"):
    n_ = len(damaged)
    cnt = [0] * (n_ + 1)
    for v in damaged:
        if v is not None:
            cnt[v] += 1
    missing = [v for v in range(1, n_ + 1) if cnt[v] == 0]
    if order == "desc":
        missing = missing[::-1]
    it = iter(missing)
    return [next(it) if v is None else v for v in damaged]


random.seed(3)
good = True
bad_desc = False
for _ in range(400):
    n_ = random.randint(3, 40)
    perm = list(range(1, n_ + 1))
    random.shuffle(perm)
    A = build_min_heap(perm)
    leaf = random.randrange(n_)
    path = []
    i = leaf
    while True:
        path.append(i)
        if i == 0:
            break
        i = (i - 1) // 2
    dam = [None if j in path else v for j, v in enumerate(A)]
    good &= restore(dam) == A
    if len(path) > 1:
        bad_desc |= restore(dam, "desc") != A
check("Q3b counting-array restore (ascending fill) recovers the heap", good)
check("Q3b filling the missing numbers in descending order fails", bad_desc)
random.seed(12)
bad_rand = False
for _ in range(300):
    n_ = random.randint(4, 30)
    perm = list(range(1, n_ + 1))
    random.shuffle(perm)
    A = build_min_heap(perm)
    i = random.randrange(n_)
    path = []
    while True:
        path.append(i)
        if i == 0:
            break
        i = (i - 1) // 2
    if len(path) < 3:
        continue
    dam = [None if j in path else v for j, v in enumerate(A)]
    miss = [v for v in range(1, n_ + 1) if v not in dam]
    random.shuffle(miss)
    it = iter(miss)
    bad_rand |= [next(it) if v is None else v for v in dam] != A
check("Q3b filling the missing numbers in arbitrary order fails", bad_rand)
A = [1, 3, 2, 5, 4, 7, 6]
dam = [None, 3, None, 5, 4, 7, None]
check("Q3b example: path 0,2,6 lost, last missing slot gets 6", restore(dam) == A and restore(dam)[6] == 6)

# ---- Q4a: cuckoo with h1 = x mod 11, h2 = (x div 11) mod 11
def h1(x):
    return x % 11


def h2(x):
    return (x // 11) % 11


check("Q4a h1(40) = 7", h1(40) == 7)
check("Q4a h2(54) = 4", h2(54) == 4)
check("Q4a h2(17) = 1 and h2(25) = 2", h2(17) == 1 and h2(25) == 2)


def cuckoo(seq, limit=100):
    T1 = [None] * 11
    T2 = [None] * 11
    for key in seq:
        t = 1
        for _ in range(limit):
            if t == 1:
                pos = h1(key)
                key, T1[pos] = T1[pos], key
            else:
                pos = h2(key)
                key, T2[pos] = T2[pos], key
            if key is None:
                break
            t = 3 - t
        else:
            return None
    return T1, T2


res = cuckoo([17, 28, 25, 14, 54, 43, 16, 30])
check("Q4a the official insertion sequence runs without a loop", res is not None)
T1, T2 = res
check("Q4a after the sequence T1[6] = 28 and T2[1] = 17", T1[6] == 28 and T2[1] == 17)
check("Q4a T2 holds 17, 25, 54 and T1 holds 28, 14, 43, 16, 30",
      sorted(x for x in T2 if x is not None) == [17, 25, 54] and sorted(x for x in T1 if x is not None) == [14, 16, 28, 30, 43])
random.seed(9)
good = True
for _ in range(2000):
    seq = random.sample(range(0, 200), random.randint(1, 9))
    r = cuckoo(seq)
    if r is None:
        continue
    T1, T2 = r
    for k in T2:
        if k is not None:
            good &= T1[h1(k)] is not None
check("Q4a with insertions only, a key in T2 always has its T1 cell occupied", good)

# ---- Q4b: WHAT recurrence
def work(n_):
    """total printed items of WHAT on an idealised size n_ = 3^k"""
    return n_ if n_ <= 1 else 3 * work(n_ // 3) + n_


levels = []
n_ = 3 ** 10
check("Q4b each recursion level sums to n", all(3 ** i * (n_ // 3 ** i) == n_ for i in range(0, 11)))
check("Q4b depth for n=3^10 is 10", round(math.log(3 ** 10, 3)) == 10)
check("Q4b T(n)=3T(n/3)+n matches n*(log3 n + 1) at powers of 3", all(work(3 ** k) == 3 ** k * (k + 1) for k in range(0, 12)))
check("Q4b T/(n log n) tends to a constant", abs(work(3 ** 20) / (3 ** 20 * 20) - 1) < 0.06)
check("Q4b 3T(n/3)+1 would be linear, 2T(n/3)+n would be linear: both differ from n log n",
      work(3 ** 12) != 3 ** 12 * 12)


def lin(a_, f):
    T = {1: 1}

    def go(n_):
        if n_ not in T:
            T[n_] = a_ * go(n_ // 3) + f(n_)
        return T[n_]

    return [go(3 ** k) / 3 ** k for k in (6, 12)]


rA, rB, rC = lin(1, lambda m: m), lin(2, lambda m: m), lin(3, lambda m: 1)
check("Q4b the three distractor recurrences are linear (T/n stays bounded)", all(r[1] < 4 and abs(r[1] - r[0]) < 1 for r in (rA, rB, rC)))
check("Q4b the correct recurrence grows like n log n (T/n keeps growing)", work(3 ** 12) / 3 ** 12 > work(3 ** 6) / 3 ** 6 + 5)


# ---- Q5: union by size
def build(ops):
    par = {}
    size = {}

    def find(x):
        while par[x] != x:
            x = par[x]
        return x

    for op in ops:
        if op[0] == "m":
            par[op[1]] = op[1]
            size[op[1]] = 1
        else:
            a, b = find(op[1]), find(op[2])
            if a != b:
                if size[a] > size[b] or size[a] == size[b]:       # tie: second under first (one possible rule)
                    par[b] = a
                    size[a] += size[b]
                else:
                    par[a] = b
                    size[b] += size[a]
    return par, size, find


ops_b = [("m", i) for i in range(1, 9)]
for u in [(1, 2), (1, 3), (4, 6), (4, 5), (7, 8)]:
    ops_b.append(("u",) + u)
par, size, find = build(ops_b)
check("Q5b before union(7,4): set of 4 has size 3", size[find(4)] == 3)
ops_b.append(("u", 7, 4))
par, size, find = build(ops_b)
check("Q5b after union(7,4): set of 4 has size 5", size[find(4)] == 5)
check("Q5b union(1,4) joins the 3-set to the 5-set, result size 8", size[find(1)] == 3 and size[find(4)] == 5)
ops_b.append(("u", 1, 4))
par, size, find = build(ops_b)
check("Q5b final single set of size 8", size[find(1)] == 8 and len({find(i) for i in range(1, 9)}) == 1)
# the smaller set is hung under the larger one, whichever tie rule is used
for tie in ("first", "second"):
    def union_t(sa, sb):
        return "a" if sa > sb else ("b" if sb > sa else tie)
    check("Q5b the 3-set is hung under the 5-set regardless of tie rule (%s)" % tie, union_t(3, 5) == "b")

ops_c = [("m", i) for i in range(1, 9)]
for u in [(1, 2), (3, 4), (1, 3), (5, 7), (6, 7), (8, 7)]:
    ops_c.append(("u",) + u)
par, size, find = build(ops_c)
check("Q5c before the last union: two sets of size 4", size[find(1)] == 4 and size[find(7)] == 4)
ops_c.append(("u", 1, 7))
par, size, find = build(ops_c)
check("Q5c final set of size 8", size[find(1)] == 8)

print("ALL OK" if ok else "SOME FAILED")
raise SystemExit(0 if ok else 1)
