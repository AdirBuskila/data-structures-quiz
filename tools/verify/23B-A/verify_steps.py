"""Machine checks for the step values of 23B-A. ASCII only. Run: PYTHONUTF8=1 py tools/verify/23B-A/verify_steps.py"""
import random, math

ok = True


def check(name, cond):
    global ok
    print(("PASS " if cond else "FAIL ") + name)
    ok = ok and bool(cond)


# ---- Q1a / Q1b: counting array
n, p = 5, 4
S = [7, 9, 7, 8, 7]
C = [0] * p
for x in S:
    C[x - (n + 1)] += 1
check("Q1a counter array for [7,9,7,8,7] = [0,3,1,1]", C == [0, 3, 1, 1])
check("Q1a index of value 9 = 3", 9 - (n + 1) == 3)
check("Q1a max counter = 3 at value 7", max(C) == 3 and C.index(3) + n + 1 == 7)

n, p = 8, 6
S = [10, 10, 13, 13, 11, 12, 9, 14]
C = [0] * p
for x in S:
    C[x - (n + 1)] += 1
z = 23
cands = [i + n + 1 for i in range(p) if C[i] > 1]
check("Q1b values with counter > 1 are 10 and 13", cands == [10, 13])
check("Q1b complement of 10 for z=23 is 13 with counter 2", C[z - 10 - (n + 1)] == 2)
random.seed(1)
good = True
for _ in range(400):
    n = random.randint(1, 25)
    p = random.randint(1, 10)
    S = [random.randint(n + 1, n + p) for _ in range(n)]
    z = random.randint(2 * (n + 1), 2 * (n + p))
    C = [0] * p
    for x in S:
        C[x - (n + 1)] += 1
    found = False
    for x in S:  # scan the SEQUENCE, not the counters (the O(n) variant)
        y = z - x
        if n + 1 <= y <= n + p and C[x - (n + 1)] > 1 and C[y - (n + 1)] > 1:
            found = True
            break
    brute = any(S.count(a) > 1 and S.count(z - a) > 1 for a in set(S))
    good &= found == brute
check("Q1c scan-the-sequence variant matches brute force", good)
check("Q1c sorting n/log n items costs <= n", all((n_ / math.log2(n_)) * math.log2(n_ / math.log2(n_)) <= n_ for n_ in [2 ** k for k in range(4, 40)]))
check("Q1c sorting all n items does exceed n", all(n_ * math.log2(n_) > n_ for n_ in [2 ** k for k in range(2, 40)]))


# ---- Q2: neworder
class Node:
    def __init__(s, k):
        s.k, s.l, s.r = k, None, None


def ins(t, k):
    if t is None:
        return Node(k)
    if k < t.k:
        t.l = ins(t.l, k)
    else:
        t.r = ins(t.r, k)
    return t


def neworder(x, out, rev=False):
    if x is None:
        return
    out.append(x.k)
    neworder(x.r if rev else x.l, out, rev)
    out.append(x.k)
    neworder(x.l if rev else x.r, out, rev)
    out.append(x.k)


t = None
for k in [5, 3, 6, 4]:
    t = ins(t, k)
out = []
neworder(t, out)
check("Q2a printed sequence", out == [5, 3, 3, 4, 4, 4, 3, 5, 6, 6, 6, 5])
check("Q2a every node printed 3 times", all(out.count(k) == 3 for k in [5, 3, 6, 4]) and len(out) == 12)
out_r = []
neworder(t, out_r, rev=True)
check("Q2a right-first variant differs", out_r != out)


def preorder(x, o):
    if x:
        o.append(x.k)
        preorder(x.l, o)
        preorder(x.r, o)


pre_ = []
preorder(t, pre_)
check("Q2a preorder (one print per node) differs", pre_ != out)
twice = []


def two(x):
    if x is None:
        return
    twice.append(x.k)
    two(x.l)
    twice.append(x.k)
    two(x.r)


two(t)
check("Q2a version printing twice per node differs", twice != out)
check("Q2a node 4 is the right child of 3 (depth 2)", t.l.r.k == 4)
check("Q2a fifth print is 4", out[4] == 4)
check("Q2a distractor sequences are exactly the three wrong traversals shown in the step",
      out_r == [5, 6, 6, 6, 5, 3, 4, 4, 4, 3, 3, 5] and pre_ == [5, 3, 4, 6] and twice == [5, 3, 3, 4, 4, 5, 6, 6])
seq = [5, 6, 22, 35, 85, 85, 85, 35, 33, 33, 33, 35, 22, 19, 19, 19, 22, 6, 6, 5, 3, 4, 4, 4, 3, 1, 2, 2, 2, 1, 1, 3, 5]


def parse(i):
    k = seq[i]
    i += 1
    left = None
    if seq[i] != k:
        left, i = parse(i)
    assert seq[i] == k
    i += 1
    right = None
    if seq[i] != k:
        right, i = parse(i)
    assert seq[i] == k
    i += 1
    return (k, left, right), i


tree, end = parse(0)
check("Q2b sequence parses as one tree consuming all 33 entries", end == len(seq))


def leaves(t_):
    k, l, r = t_
    if l is None and r is None:
        return [k]
    return (leaves(l) if l else []) + (leaves(r) if r else [])


def count(t_):
    return 0 if t_ is None else 1 + count(t_[1]) + count(t_[2])


check("Q2b root is 5", tree[0] == 5)
check("Q2b leaves are 2,4,19,33,85", sorted(leaves(tree)) == [2, 4, 19, 33, 85])
check("Q2b 11 nodes, 5 leaves", count(tree) == 11 and len(seq) == 33)


def tolist(t_, o):
    if t_ is None:
        return
    k, l, r = t_
    o.append(k)
    tolist(l, o)
    o.append(k)
    tolist(r, o)
    o.append(k)


back = []
tolist(tree, back)
check("Q2b rebuilt tree reproduces the sequence", back == seq)

# ---- Q3a: ternary array
good = True
for i in range(1, 400):
    par = (i - 1) // 3
    good &= i in (3 * par + 1, 3 * par + 2, 3 * par + 3)
check("Q3a parent floor((i-1)/3) and children 3i+1..3i+3 are consistent", good)
check("Q3a parent of index 10 is 3", (10 - 1) // 3 == 3)
check("Q3a first child of 4 is 13, last is 15", 3 * 4 + 1 == 13 and 3 * 4 + 3 == 15)
check("Q3a floor(i/3) is not the parent", any(i // 3 != (i - 1) // 3 for i in range(1, 30)))
check("Q3a floor((i+1)/3) is not the parent", any((i + 1) // 3 != (i - 1) // 3 for i in range(1, 30)))


# ---- Q3b: increase on ternary max heap
def up_variant(A, k, cond, parent):
    sw = 0
    while k > 0 and cond(A, k, parent(k)):
        A[k], A[parent(k)] = A[parent(k)], A[k]
        k = parent(k)
        sw += 1
    return sw


def is_heap(A):
    return all(A[(i - 1) // 3] >= A[i] for i in range(1, len(A)))


A = [50, 40, 30, 20, 10, 25, 5, 8, 9, 7]
check("Q3b sample is a ternary max-heap", is_heap(A))
A[5] += 30
sw = up_variant(A, 5, lambda A, k, q: A[k] > A[q], lambda k: (k - 1) // 3)
check("Q3b increase(A,5,30): 2 swaps, root 55, still a heap", sw == 2 and A[0] == 55 and is_heap(A))
random.seed(4)
variants = {
    "right": (lambda A, k, q: A[k] > A[q], lambda k: (k - 1) // 3),
    "lt": (lambda A, k, q: A[k] < A[q], lambda k: (k - 1) // 3),
    "k/3": (lambda A, k, q: A[k] > A[q], lambda k: k // 3),
    "(k+1)/3": (lambda A, k, q: A[k] > A[q], lambda k: (k + 1) // 3),
}
bad = {name: False for name in variants}
for _ in range(500):
    n = random.randint(4, 30)
    base = random.sample(range(1, 1000), n)
    for j in range(1, n):  # build a ternary max-heap from random values by sifting up
        up_variant(base, j, lambda A, k, q: A[k] > A[q], lambda k: (k - 1) // 3)
    assert is_heap(base)
    i = random.randrange(n)
    for name, (c, pr) in variants.items():
        A = base[:]
        A[i] += random.randint(1, 300)
        try:
            up_variant(A, i, c, pr)
            if not is_heap(A):
                bad[name] = True
        except IndexError:
            bad[name] = True
check("Q3b only the official condition always yields a heap",
      (not bad["right"]) and bad["lt"] and bad["k/3"] and bad["(k+1)/3"])


# ---- Q3c: AVL -> max heap
def build_bal(keys):
    keys = sorted(keys)

    def build(lo, hi):
        if lo > hi:
            return None
        m = (lo + hi) // 2
        return (keys[m], build(lo, m - 1), build(m + 1, hi))

    return build(0, len(keys) - 1)


def inorder(t_, o):
    if t_:
        inorder(t_[1], o)
        o.append(t_[0])
        inorder(t_[2], o)


def pre(t_, o):
    if t_:
        o.append(t_[0])
        pre(t_[1], o)
        pre(t_[2], o)


def bfs(t_):
    o = []
    q = [t_]
    while q:
        x = q.pop(0)
        if x:
            o.append(x[0])
            q += [x[1], x[2]]
    return o


def is_bheap(A):
    return all(A[(i - 1) // 2] >= A[i] for i in range(1, len(A)))


random.seed(6)
okrev = True
bad_in = bad_pre = bad_bfs = False
for _ in range(200):
    keys = random.sample(range(100), random.randint(2, 20))
    t_ = build_bal(keys)
    o = []
    inorder(t_, o)
    okrev &= is_bheap(o[::-1])
    bad_in |= not is_bheap(o)
    o2 = []
    pre(t_, o2)
    bad_pre |= not is_bheap(o2)
    bad_bfs |= not is_bheap(bfs(t_))
check("Q3c reversed inorder is always a max-heap", okrev)
check("Q3c plain inorder / preorder / level order are not heaps in general", bad_in and bad_pre and bad_bfs)


# ---- Q4: tree (by key) + max-heap (by frequency) with pointers
class Heap:
    def __init__(s):
        s.a = []

    def up(s, i):
        while i > 0 and s.a[(i - 1) // 2][1] < s.a[i][1]:
            s.a[i], s.a[(i - 1) // 2] = s.a[(i - 1) // 2], s.a[i]
            i = (i - 1) // 2

    def down(s, i):
        while True:
            m = i
            for c in (2 * i + 1, 2 * i + 2):
                if c < len(s.a) and s.a[c][1] > s.a[m][1]:
                    m = c
            if m == i:
                return
            s.a[i], s.a[m] = s.a[m], s.a[i]
            i = m


def valid(h):
    return all(h.a[(i - 1) // 2][1] >= h.a[i][1] for i in range(1, len(h.a)))


random.seed(8)
bad_inc_down = bad_dec_up = False
bad_inc_none = bad_dec_none = False
good_fix = True
new_key_ok = True
for _ in range(800):
    h = Heap()
    cnt = {}
    for _ in range(random.randint(2, 15)):
        k = random.randint(0, 6)
        if k in cnt:
            cnt[k] += 1
            i = next(j for j, (kk, _) in enumerate(h.a) if kk == k)
            h.a[i] = (k, cnt[k])
            h.up(i)
        else:
            cnt[k] = 1
            h.a.append((k, 1))
            new_key_ok &= valid(h)  # frequency 1 appended at the end never violates
            h.up(len(h.a) - 1)
    k = random.choice(list(cnt))
    i = next(j for j, (kk, _) in enumerate(h.a) if kk == k)
    g = Heap()
    g.a = list(h.a)
    g.a[i] = (k, g.a[i][1] + 1)
    snap = list(g.a)
    if not valid(g):
        bad_inc_none = True
    g.down(i)
    if not valid(g):
        bad_inc_down = True
    g2 = Heap()
    g2.a = snap[:]
    g2.up(i)
    good_fix &= valid(g2)
    if h.a[i][1] > 1:
        g3 = Heap()
        g3.a = list(h.a)
        g3.a[i] = (k, g3.a[i][1] - 1)
        s3 = g3.a[:]
        if not valid(g3):
            bad_dec_none = True
        g3.up(i)
        if not valid(g3):
            bad_dec_up = True
        g4 = Heap()
        g4.a = s3[:]
        g4.down(i)
        good_fix &= valid(g4)
check("Q4 after an increment heapifyUp restores the heap", good_fix)
check("Q4 after an increment heapifyDown alone can leave a broken heap", bad_inc_down)
check("Q4 after a decrement heapifyUp alone can leave a broken heap", bad_dec_up)
check("Q4 skipping the fix after an increment / a decrement can leave a broken heap", bad_inc_none and bad_dec_none)
check("Q4 a new key with frequency 1 appended at the end never violates", new_key_ok)


# ---- Q5: union by size bound
def run(n, seed):
    rnd = random.Random(seed)
    par = list(range(n))
    size = [1] * n

    def find(x):
        while par[x] != x:
            x = par[x]
        return x

    for _ in range(3 * n):
        a, b = find(rnd.randrange(n)), find(rnd.randrange(n))
        if a == b:
            continue
        if size[a] > size[b]:
            a, b = b, a
        assert size[b] >= size[a]  # the tree that is hung is never the bigger one
        par[a] = b
        size[b] += size[a]
    return par, size


def depth_max(par, r):
    best = 0
    for x in range(len(par)):
        d = 0
        y = x
        while par[y] != y:
            y = par[y]
            d += 1
        if y == r:
            best = max(best, d)
    return best


good = True
for seed in range(60):
    nn = random.Random(seed).randint(2, 80)
    par, size = run(nn, seed)
    for r in range(nn):
        if par[r] == r:
            good &= size[r] >= 2 ** depth_max(par, r)
check("Q5 union by size: n >= 2^h for every tree", good)
check("Q5 the hung tree is never bigger than the one it hangs under (n2 >= n1)", True)
check("Q5 floor(log2 1000) = 9", math.floor(math.log2(1000)) == 9 and 2 ** 9 <= 1000 < 2 ** 10)

print("ALL OK" if ok else "SOME FAILED")
raise SystemExit(0 if ok else 1)
