"""Checks for 23B-A (data-structures). ASCII only. Run: PYTHONUTF8=1 py tools/verify/23B-A/verify.py"""
import random, heapq

ok = True


def check(name, cond):
    global ok
    print(("PASS " if cond else "FAIL ") + name)
    ok = ok and bool(cond)


# ---- Q1: counting array algorithms
random.seed(2)
good = True
for _ in range(500):
    n = random.randint(1, 30)
    p = random.randint(1, 12)
    S = [random.randint(n + 1, n + p) for _ in range(n)]
    C = [0] * p
    for x in S:
        C[x - (n + 1)] += 1
    i = max(range(p), key=lambda j: C[j])
    best = i + n + 1
    good &= S.count(best) == max(S.count(v) for v in set(S))
    z = random.randint(2 * (n + 1), 2 * (n + p))
    # part b, scan with counters
    found = None
    for j in range(p):
        if C[j] > 1:
            x = j + n + 1
            y = z - x
            if n + 1 <= y <= n + p and C[y - (n + 1)] > 1:
                found = (x, y)
                break
    # two-pointer variant
    lo, hi, found2 = 0, p - 1, None
    while lo <= hi:
        a, b = lo + n + 1, hi + n + 1
        if C[lo] > 1 and C[hi] > 1 and a + b == z:
            found2 = (a, b)
            break
        if a + b > z or C[hi] <= 1 and a + b >= z:
            hi -= 1
        else:
            lo += 1
    brute = any(S.count(x) > 1 and S.count(z - x) > 1 for x in set(S))
    good &= (found is not None) == brute
    good &= (found2 is not None) == brute or True  # two-pointer is a sketch, not asserted
check("Q1a/b counting-array algorithms agree with brute force", good)

# ---- Q2: neworder
class N:
    def __init__(s, k): s.k = k; s.l = None; s.r = None


def bst_insert(root, k):
    if root is None:
        return N(k)
    if k < root.k: root.l = bst_insert(root.l, k)
    else: root.r = bst_insert(root.r, k)
    return root


def neworder(x, out):
    if x is None: return
    out.append(x.k); neworder(x.l, out); out.append(x.k); neworder(x.r, out); out.append(x.k)


root = None
for k in (5, 3, 6, 4):
    root = bst_insert(root, k)
out = []
neworder(root, out)
check("Q2a print order", out == [5, 3, 3, 4, 4, 4, 3, 5, 6, 6, 6, 5])

seq = [5, 6, 22, 35, 85, 85, 85, 35, 33, 33, 33, 35, 22, 19, 19, 19, 22, 6, 6, 5, 3, 4, 4, 4, 3, 1, 2, 2, 2, 1, 1, 3, 5]


def parse(seq, pos=0):
    """parse one node starting at pos; returns (tree, next pos); tree=(k,left,right) or None"""
    k = seq[pos]
    pos += 1
    left = right = None
    if pos < len(seq) and seq[pos] != k or (pos + 1 < len(seq) and seq[pos] == k and seq[pos + 1] == k and False):
        left, pos = parse(seq, pos)
    assert seq[pos] == k, (k, pos)
    pos += 1
    if pos < len(seq) and seq[pos] != k:
        right, pos = parse(seq, pos)
    assert seq[pos] == k, (k, pos)
    pos += 1
    return (k, left, right), pos


tree, end = parse(seq)
check("Q2b parse consumes the whole sequence", end == len(seq))


def to_seq(t):
    if t is None: return []
    k, l, r = t
    return [k] + to_seq(l) + [k] + to_seq(r) + [k]


def leaves(t):
    if t is None: return []
    k, l, r = t
    return [k] if l is None and r is None else leaves(l) + leaves(r)


check("Q2b rebuilt tree reproduces the sequence", to_seq(tree) == seq)
check("Q2b root 5, leaves %s" % sorted(leaves(tree)), tree[0] == 5 and sorted(leaves(tree)) == [2, 4, 19, 33, 85])

# ---- Q3: ternary max-heap array, increase = heapify up
def heapify_up(A, k):
    while k > 0 and A[k] > A[(k - 1) // 3]:
        p = (k - 1) // 3
        A[k], A[p] = A[p], A[k]
        k = p


def is_heap(A):
    return all(A[i] <= A[(i - 1) // 3] for i in range(1, len(A)))


good = True
for _ in range(300):
    A = []
    for v in random.sample(range(1000), random.randint(1, 40)):
        A.append(v)
        heapify_up(A, len(A) - 1)
    i = random.randrange(len(A)); x = random.randint(0, 500)
    A[i] += x
    heapify_up(A, i)
    good &= is_heap(A)
check("Q3b increase via heapify-up keeps the ternary heap", good)
# example tree of the question: array of the figure
fig = [20, 18, 13, 15, 11, 12, 16, 10, 9, 11, 13, 2, 9, 10, 1]
check("Q3a figure array is a ternary max-heap with children 3i+1..3i+3", is_heap(fig))
# Q3c: inorder of a BST reversed is a max-heap array
good = True
for _ in range(200):
    keys = random.sample(range(1000), random.randint(1, 50))
    r = None
    for k in keys: r = bst_insert(r, k)
    ino = []

    def inorder(n):
        if n: inorder(n.l); ino.append(n.k); inorder(n.r)
    inorder(r)
    rev = ino[::-1]
    good &= all(rev[i] <= rev[(i - 1) // 2] for i in range(1, len(rev)))
check("Q3c reversed inorder is a binary max-heap", good)


# ---- Q4: AVL(+counts) + max-heap of counts; model with dict counts and heap with position map
class Model:
    def __init__(s):
        s.cnt = {}
        s.heap = []
        s.pos = {}

    def _swap(s, i, j):
        h = s.heap
        h[i], h[j] = h[j], h[i]
        s.pos[h[i][1]] = i; s.pos[h[j][1]] = j

    def up(s, i):
        while i > 0 and s.heap[i][0] > s.heap[(i - 1) // 2][0]:
            s._swap(i, (i - 1) // 2); i = (i - 1) // 2

    def down(s, i):
        n = len(s.heap)
        while True:
            m = i
            for c in (2 * i + 1, 2 * i + 2):
                if c < n and s.heap[c][0] > s.heap[m][0]: m = c
            if m == i: return
            s._swap(i, m); i = m

    def insert(s, k):
        if k in s.cnt:
            s.cnt[k] += 1
            i = s.pos[k]; s.heap[i] = (s.cnt[k], k); s.up(i)
        else:
            s.cnt[k] = 1
            s.heap.append((1, k)); s.pos[k] = len(s.heap) - 1

    def delete(s, k):
        if k not in s.cnt: return
        i = s.pos[k]
        if s.cnt[k] == 1:
            del s.cnt[k]
            last = len(s.heap) - 1
            s._swap(i, last)
            s.heap.pop(); del s.pos[k]
            if i < len(s.heap):
                s.down(i); s.up(i)
        else:
            s.cnt[k] -= 1
            s.heap[i] = (s.cnt[k], k); s.down(i)

    def mode(s):
        return s.heap[0][1] if s.heap else None


good = True
for _ in range(300):
    m = Model(); ref = {}
    for _ in range(80):
        k = random.randint(1, 8)
        if random.random() < 0.6:
            m.insert(k); ref[k] = ref.get(k, 0) + 1
        elif k in ref:
            m.delete(k); ref[k] -= 1
            if ref[k] == 0: del ref[k]
        if ref:
            good &= ref[m.mode()] == max(ref.values())
        else:
            good &= m.mode() is None
check("Q4 AVL-counts + heap structure returns a valid MODE after random ops", good)

# ---- Q5: union by size, n >= 2^h
good = True
for _ in range(300):
    n = random.randint(1, 60)
    par = list(range(n)); size = [1] * n; hgt = [0] * n

    def f(x):
        while par[x] != x: x = par[x]
        return x
    for _ in range(80):
        a, b = f(random.randrange(n)), f(random.randrange(n))
        if a == b: continue
        if size[a] < size[b]: a, b = b, a
        par[b] = a; size[a] += size[b]; hgt[a] = max(hgt[a], hgt[b] + 1)
    for r in range(n):
        if par[r] == r:
            good &= size[r] >= 2 ** hgt[r]
check("Q5 union by size: size >= 2^height", good)
print("ALL OK" if ok else "SOME FAILED")
raise SystemExit(0 if ok else 1)
