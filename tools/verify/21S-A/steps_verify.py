"""21S-A step checks (all Q1-Q5 algorithm/computation items). Run: py tools/verify/21S-A/steps_verify.py. ASCII only."""
import sys, pathlib, itertools, random, math
random.seed(7)

# ---------- Q1a: delete common values from two sorted lists ----------
def merge_delete(a, b, cond):
    i = j = 0; ra, rb = [], []
    steps = 0
    while i < len(a) and j < len(b) and steps < 10000:
        steps += 1
        if a[i] == b[j]: i += 1; j += 1
        elif cond(a[i], b[j]):
            ra.append(a[i]); i += 1
        else:
            rb.append(b[j]); j += 1
    ra += a[i:]; rb += b[j:]
    return ra, rb, steps
good = lambda x, y: x < y
variants = {">": lambda x, y: x > y, "==": lambda x, y: x == y, "!=": lambda x, y: x != y}
L1, L2 = list("abcdfg"), list("begh") + ["i", "j"]
L1, L2 = list("abcdfg"), ["b", "e", "g", "h", "i", "j"]
assert merge_delete(L1, L2, good)[:2] == (list("acdf"), ["e", "h", "i", "j"])
assert len(set(L1) & set(L2)) == 2
bad = {k: False for k in variants}
for _ in range(500):
    a = sorted(random.sample(range(30), random.randint(0, 10))); b = sorted(random.sample(range(30), random.randint(0, 10)))
    ra, rb, st = merge_delete(a, b, good)
    assert ra == [x for x in a if x not in b] and rb == [x for x in b if x not in a] and st <= len(a) + len(b)
    for k, c in variants.items():
        r = merge_delete(a, b, c)
        if r[:2] != (ra, rb): bad[k] = True
assert all(bad.values()), bad
print("Q1a ok")

# ---------- Q1b: double parentheses with a stack ----------
def gen_expr(depth=0):
    r = random.random()
    if depth > 3 or r < 0.3: return random.choice("abcd")
    if r < 0.6: return gen_expr(depth + 1) + random.choice("+*-") + gen_expr(depth + 1)
    inner = gen_expr(depth + 1)
    s = "(" + inner + ")"
    if random.random() < 0.25: s = "(" + s + ")"
    return s
def alg_dup(s):
    st = []
    for ch in s:
        if ch != ")": st.append(ch); continue
        cnt = 0
        while st[-1] != "(": st.pop(); cnt += 1
        st.pop()
        if cnt == 0: return True, None
    return False, None
def brute_dup(s):
    match = {}; st = []
    for i, ch in enumerate(s):
        if ch == "(": st.append(i)
        elif ch == ")": match[st.pop()] = i
    return any(s[i + 1] == "(" and match.get(i + 1) == j - 1 for i, j in match.items())
n_true = 0
for _ in range(4000):
    e = gen_expr()
    if random.random() < 0.5: e = "(" + e + ")"
    a = alg_dup(e)[0]; b = brute_dup(e); assert a == b, e; n_true += a
assert n_true > 100
def closing_index_of_zero(s):
    st = []; k = 0
    for ch in s:
        if ch != ")": st.append(ch); continue
        k += 1; cnt = 0
        while st[-1] != "(": st.pop(); cnt += 1
        st.pop()
        if cnt == 0: return k
    return None
assert closing_index_of_zero("((a+b)*((c+d)))") == 3
assert alg_dup("((a+b)*c)")[0] is False and alg_dup("((a+b)*((c+d)))")[0] is True
print("Q1b ok")

# ---------- Q2a: remove_tree ----------
class Nd:
    def __init__(s): s.l = None; s.r = None; s.dead = False
def rand_tree(n):
    if n == 0: return None
    x = Nd(); k = random.randint(0, n - 1); x.l = rand_tree(k); x.r = rand_tree(n - 1 - k); return x
def count_nodes(t): return 0 if t is None else 1 + count_nodes(t.l) + count_nodes(t.r)
def remove_post(node, order):
    if node.l is not None: remove_post(node.l, order)
    if node.r is not None: remove_post(node.r, order)
    order.append(node)
def remove_bug(node, order):                 # the right call is made on node.left
    if node.l is not None: remove_bug(node.l, order)
    if node.r is not None: remove_bug(node.l, order) if False else None
    order.append(node)
def remove_bug2(node, order):                # "if node.right != null then remove_tree(node.left)"
    if node.l is not None: remove_bug2(node.l, order)
    if node.r is not None:
        if node.l is not None: remove_bug2(node.l, order)
    order.append(node)
def remove_pre(node, order):                 # deletes the node first, losing its pointers
    l, r = node.l, node.r; node.l = node.r = None; order.append(node)
    if node.l is not None: remove_pre(node.l, order)
    if node.r is not None: remove_pre(node.r, order)
lost = 0
for n in range(1, 20):
    for _ in range(20):
        t = rand_tree(n); o = []; remove_post(t, o)
        assert len(o) == n and len({id(x) for x in o}) == n and o[-1] is t       # root deleted last
        # postorder: each node after its children
        pos = {id(x): i for i, x in enumerate(o)}
        def chk(x):
            if x is None: return
            for c in (x.l, x.r):
                if c is not None: assert pos[id(c)] < pos[id(x)]; chk(c)
        chk(t)
def perfect(h):
    if h < 0: return None
    x = Nd(); x.l = perfect(h - 1); x.r = perfect(h - 1); return x
t = perfect(2); o = []; remove_post(t, o); assert len(o) == 7 and o[-1] is t
assert o.index(t) + 1 == 7
# the findbug variant misses nodes
miss = False
for n in range(2, 12):
    for _ in range(30):
        t = rand_tree(n); o = []
        try: remove_bug2(t, o)
        except RecursionError: pass
        if len({id(x) for x in o}) != n: miss = True
assert miss
# delete-first loses the subtrees
t = perfect(2); o = []; remove_pre(t, o); assert len(o) == 1
print("Q2a ok")

# ---------- Q2b: induction step algebra ----------
import sympy as sp
h = sp.symbols("h", integer=True)
assert sp.simplify(2 * (2 ** (h + 1) - 1) + 1 - (2 ** (h + 2) - 1)) == 0
assert sp.simplify(2 * (2 ** (h + 1) - 1) - (2 ** (h + 2) - 1)) != 0           # the findbug line (root forgotten)
def nodes(hh): return 1 if hh == 0 else 2 * nodes(hh - 1) + 1
assert [nodes(k) for k in range(4)] == [1, 3, 7, 15] and all(nodes(k) == 2 ** (k + 1) - 1 for k in range(12))
print("Q2b ok")

# ---------- Q3a: find the node with the wrong balance factor ----------
class A_:
    def __init__(s, k): s.k = k; s.l = None; s.r = None; s.bf = 0
def ht(n): return -1 if n is None else 1 + max(ht(n.l), ht(n.r))
def ins(n, k):
    if n is None: return A_(k)
    if k < n.k: n.l = ins(n.l, k)
    else: n.r = ins(n.r, k)
    b = ht(n.l) - ht(n.r)
    if b > 1:
        if ht(n.l.l) < ht(n.l.r): n.l = rl(n.l)
        return rr(n)
    if b < -1:
        if ht(n.r.r) < ht(n.r.l): n.r = rr(n.r)
        return rl(n)
    return n
def rr(y): x = y.l; y.l = x.r; x.r = y; return x
def rl(x): y = x.r; x.r = y.l; y.l = x; return y
def allnodes(n): return [] if n is None else allnodes(n.l) + [n] + allnodes(n.r)
def find_wrong(n):
    """postorder; returns (height, wrong node or None); the leaf's null children have height -1"""
    if n is None: return -1, None
    hl, w1 = find_wrong(n.l); hr, w2 = find_wrong(n.r)
    w = w1 or w2
    if w is None and hl - hr != n.bf: w = n
    return 1 + max(hl, hr), w
for _ in range(300):
    root = None
    for k in random.sample(range(100), random.randint(1, 40)): root = ins(root, k)
    ns = allnodes(root)
    for x in ns: x.bf = ht(x.l) - ht(x.r)
    v = random.choice(ns); old = v.bf; v.bf = random.choice([b for b in (-2, -1, 0, 1, 2) if b != old])
    assert find_wrong(root)[1] is v
assert 1 + max(1, -1) == 2                    # a node with children of heights 1 and -1 has height 2
print("Q3a ok")

# ---------- Q3b: fix an unbalanced node ----------
def shp(hh):
    """random AVL shape of height hh as (l, r) tuples; None = empty"""
    if hh < 0: return None
    if hh == 0: return (None, None)
    a = hh - 1; b = random.choice([hh - 1, hh - 2])
    l, r = shp(a), shp(b)
    return (l, r) if random.random() < 0.5 else (r, l)
def H_(t): return -1 if t is None else 1 + max(H_(t[0]), H_(t[1]))
def avl_ok(t): return t is None or (abs(H_(t[0]) - H_(t[1])) <= 1 and avl_ok(t[0]) and avl_ok(t[1]))
def rot_left(t):
    if t is None or t[1] is None: return None
    (L, R) = t; return ((L, R[0]), R[1])
def rot_right(t):
    if t is None or t[0] is None: return None
    (L, R) = t; return (L[0], (L[1], R))
def rl_double(t):
    if t is None or t[1] is None: return None
    r = rot_right(t[1]); return None if r is None else rot_left((t[0], r))
def lr_double(t):
    if t is None or t[0] is None: return None
    l = rot_left(t[0]); return None if l is None else rot_right((l, t[1]))
def ok(r): return r is not None and avl_ok(r)
dbl_fail = 0
for hh in range(0, 5):
    for _ in range(60):
        # case 1: balance -2, right child +1 (left-heavy)
        Lt = shp(hh); z = (shp(hh + 1), shp(hh)); t = (Lt, z)
        assert H_(t[0]) - H_(t[1]) == -2 and H_(z[0]) - H_(z[1]) == 1 and avl_ok(z) and avl_ok(Lt)
        assert ok(rl_double(t)) and H_(rl_double(t)) == hh + 2
        assert not ok(rot_left(t)) and not ok(rot_right(t)) and not ok(lr_double(t))
        # case 3: balance -2, right child 0
        z0 = (shp(hh + 1), shp(hh + 1)); t0 = (Lt, z0)
        assert H_(t0[0]) - H_(t0[1]) == -2 and H_(z0[0]) - H_(z0[1]) == 0
        assert ok(rot_left(t0))
        assert not ok(rot_right(t0)) and not ok(lr_double(t0))
        if not ok(rl_double(t0)): dbl_fail += 1
assert dbl_fail > 0
print("Q3b ok; double rotation fails on balanced child in", dbl_fail, "cases")

# ---------- Q4a: sorted list with loglogN elements moved to the front ----------
assert math.log2(math.log2(65536)) == 4.0
def alg_A(a, k):
    """insertion: the first k elements are inserted into the sorted rest; returns (sorted list, comparisons)"""
    rest = a[k:]; cmp = 0
    for x in a[:k]:
        i = 0
        while i < len(rest):
            cmp += 1
            if rest[i] < x: i += 1
            else: break
        rest.insert(i, x)
    return rest, cmp
def alg_B(a, k):
    """sort the first k (insertion sort), then merge with the sorted rest; returns (sorted list, steps)"""
    pre = a[:k]; steps = 0
    for i in range(1, k):
        j = i
        while j > 0 and pre[j - 1] > pre[j]: pre[j - 1], pre[j] = pre[j], pre[j - 1]; j -= 1; steps += 1
    rest = a[k:]; out = []; i = j = 0
    while i < len(pre) and j < len(rest):
        steps += 1
        if pre[i] <= rest[j]: out.append(pre[i]); i += 1
        else: out.append(rest[j]); j += 1
    out += pre[i:] + rest[j:]
    return out, steps + len(a)
for e in (16, 18, 20):
    N_ = 2 ** e; k = int(math.log2(math.log2(N_)))
    sorted_part = list(range(1000, 1000 + N_ - k))
    small = [N_ + 1000 + random.randint(0, 5) for _ in range(k)]          # all larger: worst case for A
    arr = small + sorted_part
    ra, ca = alg_A(arr, k); rb, sb = alg_B(arr, k)
    assert ra == sorted(arr) == rb
    assert ca >= (N_ - k) * k * 0.99 and ca / N_ >= k * 0.99       # A: about k*N comparisons = N loglogN
    assert sb <= 3 * N_                                             # B: linear
print("Q4a ok")

# ---------- Q4b: even/odd partition ----------
def part(a, condL):
    a = list(a); i, j = 0, len(a) - 1; sw = 0; guard = 0
    while i < j:
        guard += 1
        if guard > 1000: return None, -1          # hang
        while i < j and condL(a, i, j): i += 1
        while i < j and a[j] % 2 == 1: j -= 1
        if i < j: a[i], a[j] = a[j], a[i]; sw += 1       # a swap of a position with itself is not counted
    return a, sw
even_ok = lambda a, i, j: a[i] % 2 == 0
variants = {"odd": lambda a, i, j: a[i] % 2 == 1, "< A[j]": lambda a, i, j: a[i] < a[j], "== A[j]": lambda a, i, j: a[i] == a[j]}
def evens_first(a):
    seen_odd = False
    for x in a:
        if x % 2: seen_odd = True
        elif seen_odd: return False
    return True
ex = [7, 8, 99, 31, 2, 4, 2, 56, 233, 47]
r, sw = part(ex, even_ok); assert sw == 3 and evens_first(r) and sorted(r) == sorted(ex)
print("example result", r, "swaps", sw)
EXAMPLE_SWAPS = sw
badv = {k: False for k in variants}
for _ in range(500):
    a = [random.randint(0, 20) for _ in range(random.randint(1, 10))]
    r, _s = part(a, even_ok); assert evens_first(r) and sorted(r) == sorted(a)
    for k, c in variants.items():
        r2, _ = part(a, c)
        if r2 is None or not evens_first(r2) or sorted(r2) != sorted(a): badv[k] = True
assert all(badv.values()), badv
print("Q4b ok")

# ---------- Q5a: max heap extract + reinsert ----------
def sift_down(a, i, n):
    sw = 0
    while True:
        l, r, m = 2 * i + 1, 2 * i + 2, i
        if l < n and a[l] > a[m]: m = l
        if r < n and a[r] > a[m]: m = r
        if m == i: return sw
        a[i], a[m] = a[m], a[i]; i = m; sw += 1
def sift_up(a, i):
    sw = 0
    while i > 0 and a[(i - 1) // 2] < a[i]:
        a[(i - 1) // 2], a[i] = a[i], a[(i - 1) // 2]; i = (i - 1) // 2; sw += 1
    return sw
H0 = [8, 5, 7, 4, 1, 6, 3, 2]
a = list(H0); mx = a[0]; a[0] = a[-1]; a.pop()
assert a == [2, 5, 7, 4, 1, 6, 3]
swd = sift_down(a, 0, len(a)); assert a == [7, 5, 6, 4, 1, 2, 3] and swd == 2 and a[0] == 7
a.append(mx); swu = sift_up(a, len(a) - 1)
assert a == [8, 7, 6, 5, 1, 2, 3, 4] and swu == 3, a
print("Q5a ok", "second-largest-root", 7, "sift_down swaps", swd, "sift_up swaps", swu, "index1", a[1])

# ---------- Q5b: symmetric pairs with a hash table ----------
def sym_alg(S, keyfn):
    d = {p[0]: p[1] for p in S}
    out = []
    for (x, y) in S:
        k = keyfn(x, y)
        if k in d and d[k] == (x if keyfn is not None and k == y else y) and False: pass
    return out
def sym_good(S):
    d = {p[0]: p[1] for p in S}
    return [(x, y) for (x, y) in S if y in d and d[y] == x]
def sym_brute(S): return [(x, y) for (x, y) in S if any(c == y and dd == x for (c, dd) in S)]
def sym_wrong(S):                         # looks up the first element instead of the second
    d = {p[0]: p[1] for p in S}
    return [(x, y) for (x, y) in S if x in d and d[x] == x]
S = [(11, 20), (30, 40), (5, 10), (21, 11), (40, 30), (10, 5)]
assert sym_good(S) == sym_brute(S) == [(30, 40), (5, 10), (40, 30), (10, 5)]
assert sym_wrong(S) != sym_brute(S)
missing = sum(1 for (x, y) in S if y not in {p[0] for p in S})
assert missing == 1 and {p[0]: p[1] for p in S}[11] == 20
for _ in range(300):
    firsts = random.sample(range(15), random.randint(0, 10)); T = [(f, random.randint(0, 14)) for f in firsts]
    assert sym_good(T) == sym_brute(T)
# the official rule emits both members of each couple and (a,a) with itself; the fixed rule emits only when a<b
def sym_truth(S):     # one entry per couple of two different pairs
    return {(min(a, b), max(a, b)) for i, (a, b) in enumerate(S) for j, (c, d) in enumerate(S) if i != j and a == d and c == b}
def sym_rule(S, r):
    d = {p[0]: p[1] for p in S}
    return [(x, y) for (x, y) in S if r(x, y) and y in d and d[y] == x]
rules = {"a<b": lambda a, b: a < b, "a<=b": lambda a, b: a <= b, "a!=b": lambda a, b: a != b, "always": lambda a, b: True}
fails = {k: False for k in rules}
for _ in range(3000):
    firsts = random.sample(range(1, 9), random.randint(1, 8)); T = [(f, random.randint(1, 8)) for f in firsts]
    want = sym_truth(T)
    for k, r in rules.items():
        got = sym_rule(T, r)
        if len(got) != len(set(got)) or set(got) != want: fails[k] = True
assert fails == {"a<b": False, "a<=b": True, "a!=b": True, "always": True}, fails
S7 = S + [(7, 7)]
assert sym_rule(S7, rules["a<b"]) == [(30, 40), (5, 10)] and len(sym_rule(S7, rules["always"])) == 5 and (7, 7) in sym_good(S7)
print("Q5b ok")
print("ALL 21S-A step checks ok")
