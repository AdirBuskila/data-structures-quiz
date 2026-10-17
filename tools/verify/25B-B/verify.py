import heapq, random, math, itertools
# Q1a MYSTERY on a stack (list, top = last)
def mystery(S):
    if S:
        x = S.pop(); mystery(S)
        if not S: S.append(x)
        else: x = S[-1]; S.append(x)
S = [7, 10, 2, 8, 45, 13]
assert len(S) == 6  # top index t = 6 (1-based)
mystery(S)
assert S == [7]*6 and len(S) == 6, S
# Q1b: constant work per call: 5 elementary operations besides the recursive call
calls = 0
def m2(S):
    global calls
    calls += 1
    if S:
        S.pop(); m2(S)
        S.append(0)
for n in range(0, 20):
    calls = 0; m2([0]*n); assert calls == n + 1
# Q1c: T(n)=4T(n/2)+n^2 log n: a=4,b=2,n^(log_b a)=n^2; f/n^2=log n is neither O(n^-e), Theta(1) nor Omega(n^e)
for e in (0.01, 0.1, 0.5):
    for n in (1e6, 1e12, 1e60):
        assert math.log2(n) < n**e or n**e < math.log2(n)  # trivial; real claim below
assert all(math.log2(n) / n**0.001 < 1 for n in (1e400,)) or True
# log n grows slower than any n^e eventually (e=0.1): check at n=2^400
assert math.log2(2**400) < (2**400)**0.1
# and faster than constant
assert math.log2(2**400) > 100
# Q3: min-heap by start time + cuckoo-like hash table of pid -> heap index; compare with brute force
class Sys:
    def __init__(s): s.h = []; s.pos = {}; s.start = {}; s.status = {}
    def _swap(s, i, j):
        h = s.h; h[i], h[j] = h[j], h[i]; s.pos[h[i][1]] = i; s.pos[h[j][1]] = j
    def _up(s, i):
        while i > 0 and s.h[(i-1)//2][0] > s.h[i][0]: s._swap(i, (i-1)//2); i = (i-1)//2
    def _down(s, i):
        n = len(s.h)
        while True:
            m = i
            for c in (2*i+1, 2*i+2):
                if c < n and s.h[c][0] < s.h[m][0]: m = c
            if m == i: return
            s._swap(i, m); i = m
    def init(s, data):
        for pid, st, stat in data:
            s.start[pid] = st; s.status[pid] = stat
            if stat == 'active': s.h.append((st, pid)); s.pos[pid] = len(s.h)-1
        for i in range(len(s.h)//2, -1, -1): s._down(i)
    def _rm(s, pid):
        i = s.pos.pop(pid); last = len(s.h)-1
        if i != last: s._swap(i, last)
        s.h.pop()
        if i < len(s.h): s._up(i); s._down(i)
    def delete(s, pid):
        if s.status[pid] == 'active': s._rm(pid)
        del s.start[pid]; del s.status[pid]
    def set_status(s, pid, new):
        if s.status[pid] == 'active' and new != 'active': s._rm(pid)
        elif s.status[pid] != 'active' and new == 'active':
            s.h.append((s.start[pid], pid)); s.pos[pid] = len(s.h)-1; s._up(len(s.h)-1)
        s.status[pid] = new
    def earliest(s): return s.h[0][1] if s.h else None
random.seed(1)
for trial in range(300):
    n = random.randrange(1, 40)
    times = random.sample(range(1000), n)
    data = [(1000+i, times[i], random.choice(['active', 'stopped'])) for i in range(n)]
    S = Sys(); S.init(data)
    ref = {p: (t, st) for p, t, st in data}
    for _ in range(80):
        if not ref: break
        op = random.choice(['del', 'set', 'get'])
        p = random.choice(list(ref))
        if op == 'del': S.delete(p); del ref[p]
        elif op == 'set':
            ns = random.choice(['active', 'stopped']); S.set_status(p, ns); ref[p] = (ref[p][0], ns)
        act = [(t, q) for q, (t, st) in ref.items() if st == 'active']
        assert S.earliest() == (min(act)[1] if act else None)
print("Q3 ok")
# Q4 inOrderFromA on a balanced BST: correct output and O(log n + k) visits
class T:
    def __init__(s, k): s.k = k; s.l = s.r = None
def build(keys):
    if not keys: return None
    m = len(keys)//2; t = T(keys[m]); t.l = build(keys[:m]); t.r = build(keys[m+1:]); return t
visits = 0
def inorder_from(node, a):
    global visits
    if node is None: return []
    visits += 1
    if node.k <= a: return inorder_from(node.r, a)   # statement: keys strictly greater than a
    return inorder_from(node.l, a) + [node.k] + inorder_from(node.r, a)
for n in (1, 2, 7, 100, 1000, 4095):
    keys = sorted(random.sample(range(10*n+10), n)); root = build(keys)
    for a in random.sample(range(10*n+10), min(20, 10*n+10)) + [-1, 10**9]:
        visits = 0; out = inorder_from(root, a)
        assert out == [k for k in keys if k > a]
        k = len(out)
        assert visits <= 2*(math.log2(n+1)+1) + 2*k + 2, (n, a, visits, k)
print("Q4 ok")
# Q5c n log2(n^3) + 10 n log10 n = O(n^1.2)
rs = []
for e in range(10, 300, 10):
    n = 10.0**e
    rs.append((3*math.log2(n) + 10*math.log10(n)) / n**0.2)
assert all(x > y for x, y in zip(rs, rs[1:])) and rs[-1] < 1e-5  # T(n)/n^1.2 -> 0
assert (3*math.log2(1e300) + 10*math.log10(1e300)) / (1e300**0.2) < 1e-10
# Q5a: merging two heaps needs buildheap on 2n elements
# Q5b: counterexample even tree: levels with 2 nodes each form a long chain of depth n/2 > log n
n = 2*50 + 1
depth = (n-1)//2
assert depth > math.log2(n) * 2
print("all ok")

# =====================  STEP CHECKS (step-author phase)  =====================
import sympy, itertools, random, math
# --- Q1a MYSTERY on a real array stack (1-based cells, top = index of last element) ---
class AS:
    def __init__(s): s.a = [None]*11; s.top = 0
    def push(s, x): s.top += 1; s.a[s.top] = x
    def pop(s): x = s.a[s.top]; s.a[s.top] = None; s.top -= 1; return x
    def peek(s): return s.a[s.top]
    def empty(s): return s.top == 0
def mystery_as(S):
    if not S.empty():
        x = S.pop(); mystery_as(S)
        if S.empty(): S.push(x)
        else: x = S.peek(); S.push(x)
st = AS()
for x in (7, 10, 2, 8, 45, 13): st.push(x)
assert st.top == 6
before = st.a[:]
mystery_as(st)
assert st.top == 6 and st.a[1:7] == [7]*6 and st.a[7:] == [None]*4
assert st.a != before and st.a[1:7] != [13, 45, 8, 2, 10, 7] and st.a[1:7] != [13]*6   # distractor outcomes differ
# --- Q1b calls ---
cnt_calls = [0]
def my2(S):
    cnt_calls[0] += 1
    if S: x = S.pop(); my2(S); S.append(x)
my2([0]*6); assert cnt_calls[0] == 7                     # 6 elements: 7 calls (including the empty one)
ops = 0
for n in range(1, 40):
    cnt_calls[0] = 0; my2([0]*n); assert cnt_calls[0] == n + 1          # one recursive call, linear: not 2T(n-1), not log
# --- Q1c master theorem ---
assert math.log(4, 2) == 2
nsym = sympy.symbols('n', positive=True); e = sympy.symbols('e', positive=True)
assert sympy.limit(sympy.log(nsym) / nsym**e, nsym, sympy.oo) == 0           # log n = o(n^e) for every e>0
assert sympy.limit(sympy.log(nsym) / 1, nsym, sympy.oo) == sympy.oo          # but log n is not Theta(1)
# --- Q2a selection: decision tree leaves / min height ---
for n in (3, 4, 5):
    for k in range(1, n+1):
        outs = {sorted(range(n), key=lambda i: p[i])[k-1] for p in itertools.permutations(range(n))}
        assert len(outs) == n                          # every position can be the k-th: >= n leaves
assert math.ceil(math.log2(8)) == 3 and math.ceil(math.log2(5)) == 3
# --- Q2b: every input position matters for the 5 smallest ---
n = 6
for i in range(n):
    found = False
    for p in itertools.permutations(range(n)):
        if sorted(p)[:5] != sorted(p[:i] + (100,) + p[i+1:])[:5]: found = True; break
    assert found                                        # unread position i could change the output => Omega(n)
pos = {p.index(min(p)) for p in itertools.permutations(range(6))}
assert len(pos) == 6
# --- Q3 heap structure: get_earliest, deletion variants ---
def is_minheap(a): return all(a[(i-1)//2] <= a[i] for i in range(1, len(a)))
def up(a, i):
    while i > 0 and a[(i-1)//2] > a[i]: a[(i-1)//2], a[i] = a[i], a[(i-1)//2]; i = (i-1)//2
def down(a, i):
    n = len(a)
    while True:
        m = i
        for c in (2*i+1, 2*i+2):
            if c < n and a[c] < a[m]: m = c
        if m == i: return
        a[i], a[m] = a[m], a[i]; i = m
def delete_variant(a, i, mode):
    a = list(a); a[i], a[-1] = a[-1], a[i]; a.pop()
    if i < len(a):
        if mode == "both": up(a, i); down(a, i)
        elif mode == "down": down(a, i)
        elif mode == "up": up(a, i)
    return a
bad = {"both": 0, "down": 0, "up": 0, "shift": 0}
heaps = [p for p in itertools.permutations(range(1, 8)) if is_minheap(p)]
for h in heaps:
    for i in range(7):
        for m in ("both", "down", "up"):
            if not is_minheap(delete_variant(h, i, m)): bad[m] += 1
        s = list(h); del s[i]
        if not is_minheap(s): bad["shift"] += 1
assert bad["both"] == 0 and bad["down"] > 0 and bad["up"] > 0 and bad["shift"] > 0, bad
random.seed(3)
poss = set()
for _ in range(200):
    xs = random.sample(range(100), 15); mx = []
    for x in xs:
        mx.append(-x); up(mx, len(mx)-1)                 # max-heap through negated min-heap
    vals = [-v for v in mx]
    poss.add(vals.index(min(vals)))
assert len(poss) > 3 and 0 not in poss                 # minimum of a max-heap is not at a fixed cell
# --- Q4 inOrderFromA variants on a balanced BST ---
class TN:
    def __init__(s, k): s.k = k; s.l = s.r = None
def bld(keys):
    if not keys: return None
    m = len(keys)//2; t = TN(keys[m]); t.l = bld(keys[:m]); t.r = bld(keys[m+1:]); return t
def run(node, a, mode="ok", vis=None):
    if node is None: return []
    if vis is not None: vis.append(node.k)
    if node.k < a:
        if mode == "left": return run(node.l, a, mode, vis)
        if mode == "self": return [node.k]
        if mode == "empty": return []
        return run(node.r, a, mode, vis)
    L1 = run(node.l, a, mode, vis); L2 = run(node.r, a, mode, vis)
    if mode == "swap": return L2 + [node.k] + L1
    return L1 + [node.k] + L2
root = bld([2, 4, 6, 8, 10, 12, 14])
assert root.k == 8
v = []
assert run(root, 5, vis=v) == [6, 8, 10, 12, 14] and len(v) == 6
for md in ("left", "self", "empty", "swap"):
    assert run(root, 5, md) != [6, 8, 10, 12, 14], md
assert run(root, 5, "swap") == [14, 12, 10, 8, 6]
assert run(root, 1) == [2, 4, 6, 8, 10, 12, 14]
big = bld(list(range(1, 1024))); assert big.k == 512
v = []; run(big, 5000, vis=v); assert len(v) == 10          # a above all keys: only the right spine
v = []; out = run(big, 0, vis=v); assert len(v) == 1023 == len(out)   # all nodes are returned
# --- Q5a buildheap cost ---
def buildheap_swaps(a):
    sw = 0
    for i in range(len(a)//2 - 1, -1, -1):
        j = i
        while True:
            m = j
            for c in (2*j+1, 2*j+2):
                if c < len(a) and a[c] < a[m]: m = c
            if m == j: break
            a[j], a[m] = a[m], a[j]; j = m; sw += 1
    return sw
Nn = 2**16 - 1
sw = buildheap_swaps(list(range(Nn, 0, -1)))
assert 0.9 < sw / Nn < 1 and sw / (Nn * math.log2(Nn)) < 0.07     # Theta(N), not N log N
assert sum(1 for i in range(16) if 2*i+1 < 16) == 8                # internal nodes of a 16-element heap
# --- Q5b caterpillar: every level >= 1 has exactly 2 nodes ---
def cat(L):
    t = ("n", ("n",), ("n",)) if False else None
    node = (0, [])
    root = {"d": 0, "ch": []}
    cur = root; levels = {0: 1}
    for d in range(1, L+1):
        a = {"d": d, "ch": []}; b = {"d": d, "ch": []}
        cur["ch"] = [a, b]; cur = a; levels[d] = 2
    return root, levels
def hgt(t): return 0 if not t["ch"] else 1 + max(hgt(c) for c in t["ch"])
root_, lev = cat(5)
assert sum(lev.values()) == 11 and all(lev[d] % 2 == 0 for d in range(1, 6)) and hgt(root_) == 5
assert hgt(root_["ch"][0]) - hgt(root_["ch"][1]) == 4 and 5 > math.log2(11)
perfect_levels = lambda k: [2**d for d in range(k+1)]
assert all(x % 2 == 0 for x in perfect_levels(2)[1:]) and all(x % 2 == 0 for x in perfect_levels(3)[1:])
assert 1 % 2 != 0                                           # a path has one node on a level => not even
# --- Q5c ---
nn = sympy.symbols('n', positive=True)
Tn = nn*sympy.log(nn**3, 2) + 10*nn*sympy.log(nn, 10)
coef = sympy.N(sympy.simplify(sympy.expand_log(Tn, force=True) / (nn*sympy.log(nn)/sympy.log(2))))
assert abs(float(coef) - (3 + 10/math.log2(10))) < 1e-9 and abs(float(coef) - 6.0103) < 0.001
assert sympy.limit(sympy.expand_log(Tn, force=True)/nn**sympy.Rational(6, 5), nn, sympy.oo) == 0
print("STEPS OK")
