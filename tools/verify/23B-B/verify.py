"""Checks for 23B-B (data-structures). ASCII only. Run: PYTHONUTF8=1 py tools/verify/23B-B/verify.py"""
import sys, pathlib, itertools, random, math
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
import avl as A

ok = True


def check(name, cond):
    global ok
    print(("PASS " if cond else "FAIL ") + name)
    ok = ok and bool(cond)


# ---- Q1: the selected positions n/2+1 .. n/2+n/log n; merge-sort of n/log n items is O(n)
for n in (2 ** 10, 2 ** 14, 2 ** 18):
    m = n // int(math.log2(n))
    cost = m * math.log2(m)
    check("Q1 n=%d: (n/log n)*log(n/log n)=%.0f <= n" % (n, cost), cost <= n)
random.seed(1)
arr = random.sample(range(1000), 64)
n = len(arr)
m = n // int(math.log2(n))
srt = sorted(arr)
S = srt[n // 2]          # element of rank n/2+1 (1-based)
B = srt[n // 2 + m - 1]  # element of rank n/2+m
out = sorted(x for x in arr if S <= x <= B)
check("Q1 filter+sort gives ranks n/2+1..n/2+n/log n", out == srt[n // 2: n // 2 + m])

# ---- Q2a: perfect trees of height h and h+1 are AVL; size difference grows linearly
for h in (3, 6, 9):
    L = 2 ** (h + 2) - 1
    R = 2 ** (h + 1) - 1
    check("Q2a h=%d |L-R|=%d, n=%d" % (h, L - R, L + R + 1), (L - R) / (L + R + 1) > 0.15)

# ---- Q2b: 5,1,6,3,2,4 gives RL then LR and nothing else; n=6; n=5 impossible by brute force
class Log(A.AVL):
    def __init__(s):
        A.AVL.__init__(s)
        s.events = []

    def _fix(s, n):
        up_before = s.rot
        r = A.AVL._fix(s, n)
        return r


def rotations_log(seq):
    """return list of (insert index, kind) with kind in LL,RR,LR,RL"""
    ev = []
    root = None

    def H(n):
        return -1 if n is None else n.h

    def up(n):
        n.h = 1 + max(H(n.l), H(n.r))

    def rr(y):
        x = y.l; y.l = x.r; x.r = y; up(y); up(x); return x

    def rl(x):
        y = x.r; x.r = y.l; y.l = x; up(x); up(y); return y

    def fix(n, idx):
        up(n)
        b = H(n.l) - H(n.r)
        if b > 1:
            if H(n.l.l) < H(n.l.r):
                n.l = rl(n.l); ev.append((idx, "LR")); return rr(n)
            ev.append((idx, "LL")); return rr(n)
        if b < -1:
            if H(n.r.r) < H(n.r.l):
                n.r = rr(n.r); ev.append((idx, "RL")); return rl(n)
            ev.append((idx, "RR")); return rl(n)
        return n

    def ins(n, k, idx):
        if n is None:
            return A.N(k)
        if k < n.k:
            n.l = ins(n.l, k, idx)
        else:
            n.r = ins(n.r, k, idx)
        return fix(n, idx)

    for i, k in enumerate(seq, 1):
        root = ins(root, k, i)
    return ev


ev = rotations_log([5, 1, 6, 3, 2, 4])
check("Q2b 5,1,6,3,2,4 -> %s" % (ev,), ev == [(5, "RL"), (6, "LR")])


def good(seq):
    ev = rotations_log(seq)
    return [k for _, k in ev] == ["RL", "LR"] and all(i > 3 for i, _ in ev)


ok5 = any(good(p) for n in (4, 5) for p in itertools.permutations(range(1, n + 1)))
check("Q2b no permutation of size 4 or 5 works", not ok5)

# ---- Q3a: H(k,i) = (k + i*k^2) mod 7
T = [None] * 7
for k in (9, 2, 5, 4, 3, 8, 1):
    for i in range(7):
        p = (k + i * k * k) % 7
        if T[p] is None:
            T[p] = k
            break
    else:
        T = None
        break
check("Q3a table %s" % (T,), T == [1, 8, 9, 3, 4, 5, 2])
# ---- Q3b: multiples of 7 always probe slot 0
check("Q3b multiples of 7 probe only slot 0",
      all((k + i * k * k) % 7 == 0 for k in (0, 7, 14, 21) for i in range(20)))
T = [None] * 7
placed = 0
for k in (7, 14):
    for i in range(7):
        p = (k + i * k * k) % 7
        if T[p] is None:
            T[p] = k; placed += 1
            break
check("Q3b second multiple of 7 cannot be inserted", placed == 1)


# ---- Q4: lazy INCREASE on a plain BST versus a naive multiset
class Node:
    def __init__(s, k):
        s.key = k; s.inc = 0; s.l = None; s.r = None


def update(x):
    if x.inc > 0:
        if x.l: x.l.inc += x.inc
        if x.r: x.r.inc += x.inc
        x.key += x.inc
        x.inc = 0


class S4:
    def __init__(s):
        s.root = None

    def insert(s, k):
        y = Node(k)
        x = s.root
        if x is None:
            s.root = y
            return
        while x is not None:
            update(x)
            z = x
            x = x.l if k < x.key else x.r
        if k < z.key: z.l = y
        else: z.r = y

    def search(s, k):
        x = s.root
        while x is not None and x.key != k:
            update(x)
            x = x.l if k < x.key else x.r
        if x is not None:
            update(x)
        return x

    def increase(s, k, v):
        x = s.root
        while x is not None:
            update(x)
            if k <= x.key:
                x.key += v
                if x.r: x.r.inc += v
                x = x.l
            else:
                x = x.r

    def keys(s):
        out = []

        def walk(n):
            if n is None: return
            update(n)
            walk(n.l); out.append(n.key); walk(n.r)
        walk(s.root)
        return out


random.seed(5)
good4 = True
for trial in range(300):
    st, ref = S4(), []
    for _ in range(25):
        op = random.choice("iiis")
        if op == "i":
            k = random.randint(0, 200)
            if k in ref: continue
            # only insert keys that keep BST order consistent after increases: keys are real values
            st.insert(k); ref.append(k)
        else:
            if ref and random.random() < 0.3:
                pass
        if random.random() < 0.4:
            k = random.randint(0, 200); v = random.randint(1, 5)
            st.increase(k, v)
            ref = [x + v if x >= k else x for x in ref]
        if sorted(st.keys()) != sorted(ref):
            good4 = False
check("Q4 lazy-INCREASE multiset equals naive multiset (random runs)", good4)
d = S4()
for k in (1, 2, 5, 8, 10, 15, 20):
    d.insert(k)
d.increase(10, 5)
check("Q4 example INCREASE(S,10,5)", sorted(d.keys()) == [1, 2, 5, 8, 15, 20, 25])


# ---- Q5: union-find (first joins second on ties), path compression
def find(par, x):
    r = x
    while par[r] != r: r = par[r]
    while par[x] != r:
        par[x], x = r, par[x]
    return r


par = list(range(9))
sz = {i: 1 for i in range(9)}


def union(a, b):
    ra, rb = find(par, a), find(par, b)
    if ra == rb: return
    if sz[ra] < sz[rb] or sz[ra] == sz[rb]:
        par[ra] = rb; sz[rb] += sz[ra]
    else:
        par[rb] = ra; sz[ra] += sz[rb]


for a, b in ((1, 2), (3, 4), (4, 5), (6, 7), (6, 8), (3, 6)):
    union(a, b)
check("Q5 after unions: %s" % par[1:], par[1:] == [2, 2, 4, 7, 4, 7, 7, 7])
for x in (3, 6, 5):
    find(par, x)
check("Q5 after finds: %s" % par[1:], par[1:] == [2, 2, 7, 7, 7, 7, 7, 7])
print("ALL OK" if ok else "SOME FAILED")
sys.exit(0 if ok else 1)
