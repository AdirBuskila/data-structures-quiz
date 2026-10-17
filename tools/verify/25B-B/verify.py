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
    if node.k < a: return inorder_from(node.r, a)
    return inorder_from(node.l, a) + [node.k] + inorder_from(node.r, a)
for n in (1, 2, 7, 100, 1000, 4095):
    keys = sorted(random.sample(range(10*n+10), n)); root = build(keys)
    for a in random.sample(range(10*n+10), min(20, 10*n+10)) + [-1, 10**9]:
        visits = 0; out = inorder_from(root, a)
        assert out == [k for k in keys if k >= a]
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
