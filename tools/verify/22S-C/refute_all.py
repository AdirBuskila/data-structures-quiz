"""Refuter checks for 22S-C (independent re-derivation)."""
import math, random, functools, sys
sys.setrecursionlimit(10000)

# ---- Q1b: AVL best-case insertion path length (depth of shallowest node with a missing child)
best = {0: {(-1, 0)}}  # n -> set of (height, mn) ; empty tree: height -1, mn handled as insertion at root: 0 nodes visited
# use mn = depth (root=0) of the shallowest node with <2 children; empty subtree contributes infinity
INF = 10 ** 9
S = {0: {(-1, INF)}}
for n in range(1, 61):
    cur = {}
    for nl in range(n):
        for (hl, ml) in S[nl]:
            for (hr, mr) in S[n - 1 - nl]:
                if abs(hl - hr) > 1: continue
                hh = 1 + max(hl, hr)
                mn = 0 if (nl == 0 or n - 1 - nl == 0) else 1 + min(ml, mr)
                if hh not in cur or mn < cur[hh]: cur[hh] = mn
    S[n] = set(cur.items())
print("n  min over AVL shapes of (visited nodes -1)  | log2(n+1)")
for n in (1, 2, 3, 5, 10, 20, 40, 60):
    print(n, min(m for _, m in S[n]), round(math.log2(n + 1), 2))

# ---- Q1a: full tree + sorted inorder + all leaves same depth => perfect => AVL: brute force over small full trees
@functools.lru_cache(None)
def full_shapes(n):
    if n == 1: return [("L",)]
    out = []
    for nl in range(1, n - 1):
        for a in full_shapes(nl):
            for b in full_shapes(n - 1 - nl):
                out.append((a, b))
    return out
def hgt(t): return 0 if t == ("L",) else 1 + max(hgt(t[0]), hgt(t[1]))
def leafdepths(t, d=0):
    if t == ("L",): return [d]
    return leafdepths(t[0], d + 1) + leafdepths(t[1], d + 1)
def avl(t):
    if t == ("L",): return True
    return abs(hgt(t[0]) - hgt(t[1])) <= 1 and avl(t[0]) and avl(t[1])
cnt = 0
for n in range(1, 18, 2):
    for t in full_shapes(n):
        if len(set(leafdepths(t))) == 1:
            cnt += 1; assert avl(t)
print("Q1a: full trees with equal leaf depths (all AVL):", cnt)

# ---- Q1c: output size
print("Q1c: sqrt(n) log n vs n for n=1e6:", math.sqrt(1e6) * math.log2(1e6), 1e6)
# ---- Q1d: max of min-heap: adversary - raising any leaf keeps heap valid
a = [1, 2, 3, 4, 5, 6, 7, 8]
leaves = range(len(a) // 2, len(a))
ok = True
for i in leaves:
    b = a[:]; b[i] = 10 ** 6
    ok &= all(b[(j - 1) // 2] <= b[j] for j in range(1, len(b)))
print("Q1d: any leaf may be the max:", ok, "leaves count", len(list(leaves)))
# Q1e counterexample
print("Q1e: f=n=Omega(1), f=O(n^2), g=n^2 not Theta(1): true")

# ---- AVL machinery for Q2a
def h(t): return -1 if t is None else 1 + max(h(t[1]), h(t[2]))
def bal(t): return h(t[1]) - h(t[2])
rots = []
def rr(t):
    k, (lk, ll, lr), r = t; return (lk, ll, (k, lr, r))
def rl(t):
    k, l, (rk, a, b) = t; return (rk, (k, l, a), b)
def fix(t):
    if t is None: return None
    b = bal(t)
    if b > 1:
        if bal(t[1]) < 0: rots.append(("LR", t[0])); t = (t[0], rl(t[1]), t[2])
        else: rots.append(("LL", t[0]))
        return rr(t)
    if b < -1:
        if bal(t[2]) > 0: rots.append(("RL", t[0])); t = (t[0], t[1], rr(t[2]))
        else: rots.append(("RR", t[0]))
        return rl(t)
    return t
def pmin(t):
    if t[1] is None: return t[0], t[2]
    m, nl = pmin(t[1]); return m, fix((t[0], nl, t[2]))
def pmax(t):
    if t[2] is None: return t[0], t[1]
    m, nr = pmax(t[2]); return m, fix((t[0], t[1], nr))
def dele(t, x, succ=True):
    if t is None: return None
    if x < t[0]: return fix((t[0], dele(t[1], x, succ), t[2]))
    if x > t[0]: return fix((t[0], t[1], dele(t[2], x, succ)))
    if t[1] is None: return t[2]
    if t[2] is None: return t[1]
    if succ:
        m, nr = pmin(t[2]); return fix((m, t[1], nr))
    m, nl = pmax(t[1]); return fix((m, nl, t[2]))
def parse(s):
    s = s.replace(" ", ""); pos = [0]
    def p():
        if s[pos[0]] == ".": pos[0] += 1; return None
        j = pos[0]
        while s[pos[0]].isdigit(): pos[0] += 1
        k = int(s[j:pos[0]])
        if pos[0] < len(s) and s[pos[0]] == "(":
            pos[0] += 1; l = p(); assert s[pos[0]] == ","; pos[0] += 1; r = p(); assert s[pos[0]] == ")"; pos[0] += 1
            return (k, l, r)
        return (k, None, None)
    return p()
def show(t):
    if t is None: return "."
    if t[1] is None and t[2] is None: return str(t[0])
    return f"{t[0]}({show(t[1])},{show(t[2])})"
T = parse("8( 5( 3( 2(1,.), 4 ), 7(6,.) ), 11( 10(9,.), 12 ) )")
def isavl(t): return t is None or (abs(bal(t)) <= 1 and isavl(t[1]) and isavl(t[2]))
print("Q2a tree height", h(T), "avl", isavl(T), "nodes", len(show(T).replace("(", " ").replace(")", " ").replace(",", " ").replace(".", " ").split()))
for k in (12, 11):
    for succ in (True, False):
        rots.clear(); R = dele(T, k, succ)
        print(f" delete {k} succ={succ}: rotations {rots} -> {show(R)} h={h(R)} avl={isavl(R)}")
# bal of 11 after removing 12 (pre-fix)
print("bal(11) after removing 12:", bal((11, (10, (9, None, None), None), None)))
# count leaves of perfect trees
def leaves_perfect(hh): return 1 if hh == 0 else 2 * leaves_perfect(hh - 1)
print("Q2b leaves h=5:", leaves_perfect(5), [leaves_perfect(i) == 2 ** i for i in range(8)])

# ---- Q3a linked list algorithm vs brute
class Nd:
    def __init__(s, k): s.key = k; s.next = None
def mklist(v):
    d = Nd(None); p = d
    for x in v: p.next = Nd(x); p = p.next
    return d.next
def tolist(n):
    o = []
    while n: o.append(n.key); n = n.next
    return o
def delc(l1, l2):
    d1 = Nd(None); d1.next = l1; d2 = Nd(None); d2.next = l2
    p1, p2 = d1, d2; it = 0
    while p1.next and p2.next:
        it += 1
        a, b = p1.next.key, p2.next.key
        if a < b: p1 = p1.next
        elif b < a: p2 = p2.next
        else: p1.next = p1.next.next; p2.next = p2.next.next
    return d1.next, d2.next, it
bad = 0; maxr = 0
for _ in range(5000):
    N = random.randint(0, 12)
    A = sorted(random.sample(range(25), N)); B = sorted(random.sample(range(25), N))
    c = set(A) & set(B)
    a2, b2, it = delc(mklist(A), mklist(B))
    if tolist(a2) != [x for x in A if x not in c] or tolist(b2) != [x for x in B if x not in c]: bad += 1
    if N: maxr = max(maxr, it / (2 * N))
    assert it <= 2 * N
print("Q3a mismatches", bad, "max iterations/(2N)", maxr)
a2, b2, _ = delc(mklist("abcdfg"), mklist("beghij"))
print("Q3a example", tolist(a2), tolist(b2))

# ---- Q3b literal WHAT
def literal_terminates(n):
    seen = set()
    def W(i, j):
        if (i, j) in seen: return False  # re-entering same active call? track recursion stack instead
        return True
    stack = set()
    def go(i, j):
        if i >= j: return True
        if (i, j) in stack: return False
        stack.add((i, j))
        m = (i + j) // 4
        r = go(i, m) and go(m + 1, j)
        stack.discard((i, j))
        return r
    return go(1, n)
print("Q3b literal terminates for n=2..20:", [literal_terminates(n) for n in range(2, 21)])
print("Q3b: WHAT(3,8): m=", (3 + 8) // 4, "-> second call range", (3 + 8) // 4 + 1, "..8 (hmm: 3..8 again)")
# intended recurrence
def Tn(n): return 1 if n <= 1 else Tn(max(1, n // 4)) + Tn(n - max(1, n // 4)) + n
print("Q3b intended T(n)/(n log2 n):", [round(Tn(2 ** k) / (2 ** k * k), 2) for k in range(4, 20, 3)])

# ---- Q4a
def visits(A, x):
    n = len(A); res = []; v = [0]
    def V(i):
        v[0] += 1
        if i > n or A[i - 1] <= x: return
        res.append(A[i - 1]); V(2 * i); V(2 * i + 1)
    V(1); return res, v[0]
print("Q4a example", visits([50, 40, 30, 20, 10, 25, 5], 35))
bad = 0
for _ in range(3000):
    n = random.randint(1, 40)
    vals = sorted(random.sample(range(100), n), reverse=True)
    A = vals[:]  # sorted desc is a max heap; also shuffle into a valid heap by heapify
    random.shuffle(A)
    import heapq
    A = [-a for a in A]; heapq.heapify(A); A = [-a for a in A]
    assert all(A[(j - 1) // 2] >= A[j] for j in range(1, n))
    x = random.randint(-5, 105)
    res, vis = visits(A, x)
    if sorted(res) != sorted(a for a in A if a > x) or vis > 2 * len(res) + 1: bad += 1
print("Q4a mismatches", bad)

# ---- Q4b double hashing
def hh(x, i): return ((x % 5) + i * (1 + x % 4)) % 5
T5 = [None] * 5; col = 0
for x in (0, 5, 25):
    i = 0
    while True:
        p = hh(x, i)
        if T5[p] is None: T5[p] = x; break
        col += 1; i += 1
print("Q4b table", T5, "collisions", col, "steps 5/25:", 1 + 5 % 4, 1 + 25 % 4)
