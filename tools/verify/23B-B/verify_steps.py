"""Machine checks for the step values of 23B-B. ASCII only. Run: PYTHONUTF8=1 py tools/verify/23B-B/verify_steps.py"""
import random, math, itertools

ok = True


def check(name, cond):
    global ok
    print(("PASS " if cond else "FAIL ") + name)
    ok = ok and bool(cond)


# ---- Q1: range of order statistics in linear time
random.seed(11)
good = True
for lg in range(4, 11):
    n = 2 ** lg
    m = n // lg
    A = random.sample(range(10 * n), n)
    lo_pos, hi_pos = n // 2 + 1, n // 2 + m          # 1-indexed ranks
    s = sorted(A)
    S_, B_ = s[lo_pos - 1], s[hi_pos - 1]            # what the two SELECT calls return
    arr = sorted(x for x in A if S_ <= x <= B_)
    good &= arr == s[lo_pos - 1:hi_pos] and len(arr) == m
check("Q1 two selects + copy + sort of n/log n items = ranks n/2+1 .. n/2+n/log n", good)
check("Q1 n = 65536: n/log2 n = 4096 items copied", 65536 // 16 == 4096 and 65536 / math.log2(65536) == 4096)
check("Q1 sorting n/log n items costs at most n comparisons-scale", all((n_ / math.log2(n_)) * math.log2(n_ / math.log2(n_)) <= n_ for n_ in [2 ** k for k in range(4, 40)]))
check("Q1 sorting all n items costs more than n", all(n_ * math.log2(n_) > n_ for n_ in [2 ** k for k in range(2, 40)]))


# ---- Q2b: AVL with rotation log
class N:
    def __init__(s, k):
        s.k, s.l, s.r, s.h = k, None, None, 0


def H(n_):
    return -1 if n_ is None else n_.h


def up(n_):
    n_.h = 1 + max(H(n_.l), H(n_.r))


def rot_r(y):
    x = y.l
    y.l = x.r
    x.r = y
    up(y)
    up(x)
    return x


def rot_l(x):
    y = x.r
    x.r = y.l
    y.l = x
    up(x)
    up(y)
    return y


def fix(n_, log):
    up(n_)
    b = H(n_.l) - H(n_.r)
    if b > 1:
        if H(n_.l.l) < H(n_.l.r):
            n_.l = rot_l(n_.l)
            log.append("LR")
        else:
            log.append("LL")
        return rot_r(n_)
    if b < -1:
        if H(n_.r.r) < H(n_.r.l):
            n_.r = rot_r(n_.r)
            log.append("RL")
        else:
            log.append("RR")
        return rot_l(n_)
    return n_


def insert(n_, k, log):
    if n_ is None:
        return N(k)
    if k < n_.k:
        n_.l = insert(n_.l, k, log)
    else:
        n_.r = insert(n_.r, k, log)
    return fix(n_, log)


def run(seq):
    root = None
    marks = []
    log = []
    for k in seq:
        before = len(log)
        root = insert(root, k, log)
        marks.append(len(log) - before)
    return root, log, marks


root, log, marks = run([5, 1, 6, 3, 2, 4])
check("Q2b sequence 5,1,6,3,2,4 gives exactly rotations RL then LR", log == ["RL", "LR"])
check("Q2b third insertion causes no rotation", marks[2] == 0)
check("Q2b final root is 3", root.k == 3)
_, l2, _ = run([5, 1, 6, 3, 2])
check("Q2b inserting 2 (after 5,1,6,3) gives RL", l2 == ["RL"])
_, l3, _ = run([5, 1, 6, 3, 4])
check("Q2b control: inserting 4 instead of 2 does not give RL", l3 != ["RL"])


def feasible(n_):
    for perm in itertools.permutations(range(1, n_ + 1)):
        r, lg, mk = run(list(perm))
        if lg == ["RL", "LR"] and mk[2] == 0:
            return perm
    return None


check("Q2b no permutation of 3,4,5 keys satisfies all constraints", all(feasible(m) is None for m in (3, 4, 5)))
check("Q2b a permutation of 6 keys does", feasible(6) is not None)

# ---- Q3: hash table m=7, H(k,i) = (k + i*k^2) mod 7
def Hh(k, i):
    return (k + i * k * k) % 7


T = [None] * 7
probes = {}
for k in [9, 2, 5, 4, 3, 8, 1]:
    for i in range(7):
        if T[Hh(k, i)] is None:
            T[Hh(k, i)] = k
            probes[k] = i + 1
            break
check("Q3a final table [1,8,9,3,4,5,2]", T == [1, 8, 9, 3, 4, 5, 2])
check("Q3a H(2,1) = 6", Hh(2, 1) == 6)
check("Q3a key 1 takes 7 probes and lands in cell 0", probes[1] == 7 and T[0] == 1)
check("Q3a key 8 lands in cell 1", T[1] == 8)
check("Q3b multiples of 7 probe a single cell", all(len({Hh(k, i) for i in range(50)}) == 1 for k in (0, 7, 14, 35, 70)))
check("Q3b every other key probes all 7 cells", all(len({Hh(k, i) for i in range(7)}) == 7 for k in range(1, 100) if k % 7))


# ---- Q4: lazy increments in a search tree
class T_:
    def __init__(s, k):
        s.k, s.l, s.r, s.inc = k, None, None, 0


def update(x):
    if x.inc > 0:
        if x.l:
            x.l.inc += x.inc
        if x.r:
            x.r.inc += x.inc
        x.k += x.inc
        x.inc = 0


def tins(root, k):
    if root is None:
        return T_(k)
    x = root
    while True:
        update(x)
        if k < x.k:
            if x.l is None:
                x.l = T_(k)
                return root
            x = x.l
        else:
            if x.r is None:
                x.r = T_(k)
                return root
            x = x.r


def increase(root, k, v, variant="ok"):
    x = root
    while x:
        update(x)
        cond = (k <= x.k) if variant != "lt" else (k < x.k)
        if cond:
            x.k += v
            if variant == "ok" or variant == "lt":
                if x.r:
                    x.r.inc += v
            elif variant == "left":
                if x.l:
                    x.l.inc += v
            elif variant == "self":
                x.inc += v
            elif variant == "rkey":
                if x.r:
                    x.r.k += v
            x = x.l
        else:
            x = x.r


def keys(root):
    out = []

    def go(x):
        if x:
            update(x)
            go(x.l)
            out.append(x.k)
            go(x.r)

    go(root)
    return out


random.seed(21)
res = {v: True for v in ["ok", "lt", "left", "self", "rkey"]}
for _ in range(400):
    base = random.sample(range(1, 60), random.randint(3, 15))
    k = random.choice(base + [random.randint(1, 60)])
    v = random.randint(1, 9)
    want = sorted(x + v if x >= k else x for x in base)
    for variant in res:
        root = None
        for b in base:
            root = tins(root, b)
        increase(root, k, v, variant)
        res[variant] &= keys(root) == want
check("Q4 official INCREASE matches the naive update on random trees", res["ok"])
check("Q4 k < x.key variant (misses the node equal to k) is wrong", not res["lt"])
check("Q4 pushing v to the LEFT child is wrong", not res["left"])
check("Q4 x.inc += v (instead of right.inc) is wrong", not res["self"])
check("Q4 updating only the right child key (not its subtree) is wrong", not res["rkey"])
# mixed workload: increases interleaved with inserts keep working
good = True
for _ in range(200):
    naive = []
    root = None
    for _ in range(random.randint(5, 30)):
        if random.random() < 0.6:
            k = random.randint(1, 80)
            if k in naive:
                continue
            naive.append(k)
            root = tins(root, k)
        else:
            k = random.randint(1, 80)
            v = random.randint(1, 9)
            naive = [x + v if x >= k else x for x in naive]
            increase(root, k, v)
    good &= keys(root) == sorted(naive)
check("Q4 mixed inserts and increases stay correct", good)


# ---- Q5: union-find trace
def uf(ops, tie_first_under_second=True):
    par = {}
    size = {}

    def find(x):
        r = x
        while par[r] != r:
            r = par[r]
        while par[x] != r:
            par[x], x = r, par[x]
        return r

    def union(a, b):
        ra, rb = find(a), find(b)
        if ra == rb:
            return
        if size[ra] < size[rb] or (size[ra] == size[rb] and tie_first_under_second):
            par[ra] = rb
            size[rb] += size[ra]
        else:
            par[rb] = ra
            size[ra] += size[rb]

    log = {}
    for op in ops:
        if op[0] == "m":
            par[op[1]] = op[1]
            size[op[1]] = 1
        elif op[0] == "u":
            union(op[1], op[2])
        elif op[0] == "snap":
            log[op[1]] = dict(par)
        else:
            find(op[1])
    return par, size, log, find


def depth(par, x):
    d = 0
    while par[x] != x:
        x = par[x]
        d += 1
    return d


ops = [("m", i) for i in range(1, 9)] + [("u", 1, 2), ("u", 3, 4), ("u", 4, 5), ("u", 6, 7), ("u", 6, 8), ("u", 3, 6), ("snap", "before"),
                                         ("f", 3), ("f", 6), ("f", 5)]
par, size, log, find = uf(ops)
check("Q5 after union(1,2) root of {1,2} is 2", uf([("m", 1), ("m", 2), ("u", 1, 2)])[0][1] == 2)
check("Q5 root of the big tree is 7 with children 6,8,4,3,5 after the finds",
      par[7] == 7 and sorted(k for k in par if par[k] == 7 and k != 7) == [3, 4, 5, 6, 8] and par[1] == 2 and par[2] == 2)
check("Q5 before the finds node 3 has depth 2", depth(log["before"], 3) == 2)
check("Q5 after the finds node 3 has depth 1", depth(par, 3) == 1)
check("Q5 the root 7 ends with 5 children", len([k for k in par if par[k] == 7 and k != 7]) == 5)

print("ALL OK" if ok else "SOME FAILED")
raise SystemExit(0 if ok else 1)
