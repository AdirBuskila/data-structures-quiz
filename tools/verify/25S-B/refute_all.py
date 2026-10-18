"""Independent refuter checks for 25S-B. ASCII only."""
import itertools, math

# ---------------- heap distance (Q1) ----------------
def dist(i, j):  # 1-based
    d = 0
    while i != j:
        if i > j: i //= 2
        else: j //= 2
        d += 1
    return d

def heap_ok(a):  # a is 0-based list, min heap
    return all(a[(i - 1) // 2] < a[i] for i in range(1, len(a)))

print("Q1a: can max/2nd-max be at distance 1, by n (brute force over all heaps)")
for n in range(2, 10):
    ok = False
    for p in itertools.permutations(range(n)):
        if heap_ok(p):
            if dist(p.index(n - 1) + 1, p.index(n - 2) + 1) == 1:
                ok = True; break
    print(" n", n, ok)

print("Q1b: worst distance max<->2nd max, structural (pairs) + brute for small n")
def worst_struct(n):
    best = 0
    for d in range(1, n + 1):
        if 2 * d <= n: continue  # d must be a leaf
        for c in range(1, n + 1):
            if c == d: continue
            kids = [k for k in (2 * c, 2 * c + 1) if k <= n]
            if kids and kids != [d]: continue
            best = max(best, dist(c, d))
    return best
def worst_brute(n):
    best = 0
    for p in itertools.permutations(range(n)):
        if heap_ok(p):
            best = max(best, dist(p.index(n - 1) + 1, p.index(n - 2) + 1))
    return best
for n in range(2, 10):
    assert worst_struct(n) == worst_brute(n), n
for n in list(range(2, 40)) + [63, 64, 95, 96, 100, 127, 128, 191, 192, 255, 256]:
    h = n.bit_length() - 1
    print(" n", n, "worst", worst_struct(n), "2*floor(log2 n)=", 2 * h)

print("Q1c: best distance max<->median, odd n brute force")
for n in range(1, 10, 2):
    best = 99
    for p in itertools.permutations(range(n)):
        if heap_ok(p):
            best = min(best, dist(p.index(n - 1) + 1, p.index((n - 1) // 2) + 1))
    print(" n", n, best)
# n = 11 via randomized search with heap-constrained generation
import random
def rand_heap(n):
    # random linear extension: assign increasing labels by random order of available nodes
    avail = [1]; lab = [0] * (n + 1); k = 0
    while avail:
        x = avail.pop(random.randrange(len(avail)))
        lab[x] = k; k += 1
        for c in (2 * x, 2 * x + 1):
            if c <= n: avail.append(c)
    return lab
for n in (11, 13, 15, 21):
    best = 99
    for _ in range(200000):
        lab = rand_heap(n)
        pos = {lab[i]: i for i in range(1, n + 1)}
        best = min(best, dist(pos[n - 1], pos[(n - 1) // 2]))
    print(" n", n, "best found", best)

# ---------------- AVL (Q2a) ----------------
class Nd:
    def __init__(s, k): s.k = k; s.l = None; s.r = None; s.h = 0
def h(n): return -1 if n is None else n.h
def upd(n): n.h = 1 + max(h(n.l), h(n.r))
def rr(y):
    x = y.l; y.l = x.r; x.r = y; upd(y); upd(x); return x
def rl(x):
    y = x.r; x.r = y.l; y.l = x; upd(x); upd(y); return y
LOG = []
def ins(n, k):
    if n is None: return Nd(k)
    if k < n.k: n.l = ins(n.l, k)
    else: n.r = ins(n.r, k)
    upd(n)
    b = h(n.l) - h(n.r)
    if b > 1:
        if h(n.l.l) >= h(n.l.r):
            LOG.append("LL at %d" % n.k); return rr(n)
        LOG.append("LR at %d" % n.k); n.l = rl(n.l); return rr(n)
    if b < -1:
        if h(n.r.r) >= h(n.r.l):
            LOG.append("RR at %d" % n.k); return rl(n)
        LOG.append("RL at %d" % n.k); n.r = rr(n.r); return rl(n)
    return n
def show(n):
    if n is None: return "."
    if n.l is None and n.r is None: return str(n.k)
    return "%d(%s,%s)" % (n.k, show(n.l), show(n.r))
root = None
for k in (10, 5, 20, 15, 40):
    root = ins(root, k)
print("start", show(root)); LOG.clear()
for k in (80, 30, 70, 90, 75, 2, 100):
    root = ins(root, k)
    print("after", k, show(root), LOG); LOG.clear()

# ---------------- cuckoo (Q2b/c) ----------------
h1 = lambda x: x % 11
h2 = lambda x: (x // 11) % 11
def reachable(L, R):
    """BFS over all insertion orders of the set of keys, insertion-only cuckoo (insert into T1 first, kick to the other table)."""
    keys = [v for v in list(L.values()) + list(R.values())]
    target = (tuple(sorted(L.items())), tuple(sorted(R.items())))
    start = ((), ())
    seen = {start}; stack = [(start, frozenset())]
    def do_insert(Lt, Rt, x):
        Lt = dict(Lt); Rt = dict(Rt); cur = x; side = 0
        for _ in range(40):
            if side == 0:
                p = h1(cur); old = Lt.get(p); Lt[p] = cur
            else:
                p = h2(cur); old = Rt.get(p); Rt[p] = cur
            if old is None: return Lt, Rt
            cur = old; side ^= 1
        return None
    found = False
    while stack:
        (Lt, Rt), used = stack.pop()
        if len(used) == len(keys):
            if (tuple(sorted(Lt)), tuple(sorted(Rt))) is not None and tuple(sorted(dict(Lt).items())) == target[0] and tuple(sorted(dict(Rt).items())) == target[1]:
                return True
            continue
        for x in keys:
            if x in used: continue
            res = do_insert(Lt, Rt, x)
            if res is None: continue
            st = (tuple(sorted(res[0].items())), tuple(sorted(res[1].items())))
            key = (st, used | {x})
            if key in seen: continue
            seen.add(key); stack.append((st, used | {x}))
    return False
def conv(st): return st
# adapt: states stored as tuples of items
def run(L, R):
    keys = list(L.values()) + list(R.values())
    target = (tuple(sorted(L.items())), tuple(sorted(R.items())))
    def ins2(Lt, Rt, x):
        Lt = dict(Lt); Rt = dict(Rt); cur = x; side = 0
        for _ in range(60):
            if side == 0:
                p = h1(cur); old = Lt.get(p); Lt[p] = cur
            else:
                p = h2(cur); old = Rt.get(p); Rt[p] = cur
            if old is None: return tuple(sorted(Lt.items())), tuple(sorted(Rt.items()))
            cur = old; side ^= 1
        return None
    seen = set(); st0 = ((), (), frozenset()); stack = [st0]
    while stack:
        a, b, used = stack.pop()
        if len(used) == len(keys):
            if (a, b) == target: return True
            continue
        for x in keys:
            if x in used: continue
            r = ins2(a, b, x)
            if r is None: continue
            s = (r[0], r[1], used | {x})
            if s in seen: continue
            seen.add(s); stack.append(s)
    return False
T1L = {1: 67, 6: 105, 9: 53}; T1R = {0: 6, 6: 75, 9: 100}
T2L = {1: 100, 6: 105, 7: 18}; T2R = {0: 6, 3: 40, 4: 53, 6: 67}
for nm, L, R in (("t1", T1L, T1R), ("t2", T2L, T2R)):
    for p, v in L.items(): assert h1(v) == p, (nm, "L", p, v)
    for p, v in R.items(): assert h2(v) == p, (nm, "R", p, v)
    print(nm, "reachable:", run(L, R))
print("h1(53)=", h1(53), "h2(53)=", h2(53), "left slot 9 in t2:", T2L.get(9))

# ---------------- T/F ----------------
seq = [925, 202, 911, 240, 912, 245, 363]
lo, hi, okk = 0, 1001, True
for x in seq:
    if not (lo < x < hi): okk = False; print("violates at", x, lo, hi); break
    if 363 < x: hi = x
    else: lo = x
print("5a possible:", okk)
# AVL min nodes by height (edges)
N = {-1: 0, 0: 1}
for hh in range(1, 7): N[hh] = N[hh - 1] + N[hh - 2] + 1
print("min AVL nodes by height(edges):", N, " max:", {hh: 2 ** (hh + 1) - 1 for hh in range(7)})
print("5c: log_9 3 =", math.log(3, 9), "-> Theta(n)")
