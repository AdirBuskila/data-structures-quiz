"""Refuter, 23S-A: independent checks for Q4a (cuckoo), Q4b (WHAT recursion), Q5 (union-find reachability),
Q3 (heap restore). Own code; does not reuse the author's harness."""
import itertools, sys
sys.setrecursionlimit(10000)

# ---------------- Q4a cuckoo ----------------
def h1(x): return x % 11
def h2(x): return (x // 11) % 11

def cuckoo_insert(T1, T2, x, limit=60):
    cur, which = x, 1
    for _ in range(limit):
        if which == 1:
            p = h1(cur)
            old = T1[p]; T1[p] = cur
            if old is None: return True
            cur, which = old, 2
        else:
            p = h2(cur)
            old = T2[p]; T2[p] = cur
            if old is None: return True
            cur, which = old, 1
    return False

def target_ok(target1, target2):
    keys = [v for v in target1 + target2 if v is not None]
    # sanity: each key placed where a hash function says
    for p, v in enumerate(target1):
        if v is not None and h1(v) != p: print("  key", v, "in T1 at", p, "but h1 =", h1(v))
    for p, v in enumerate(target2):
        if v is not None and h2(v) != p: print("  key", v, "in T2 at", p, "but h2 =", h2(v))
    found = []
    for perm in itertools.permutations(keys):
        T1 = [None] * 11; T2 = [None] * 11
        ok = True
        for x in perm:
            if not cuckoo_insert(T1, T2, x): ok = False; break
        if ok and T1 == target1 and T2 == target2:
            found.append(perm)
            if len(found) >= 3: break
    return found

t1a = [22, 34, None, None, 26, None, 50, None, 30, None, None]
t2a = [None, 15, 23, 40, None, None, None, None, None, None, None]
t1b = [None, None, None, 14, None, 16, 28, None, 30, None, 43]
t2b = [None, 17, 25, None, 54, None, None, None, None, None, None]
for name, a, b in (("table1", t1a, t2a), ("table2", t1b, t2b)):
    print(name, "h1/h2 of keys:", {v: (h1(v), h2(v)) for v in a + b if v is not None})
    print(name, "feasible orders:", target_ok(a, b))

# ---------------- Q4b WHAT ----------------
def what_count(i, j, depth=0, cache=None, maxd=60):
    """Literal pseudo-code with integer division. Returns number of calls, or None if recursion exceeds maxd."""
    if depth > maxd: return None
    if not (i < j): return 1
    m1 = (i + j) // 3
    m2 = 2 * (i + j) // 3
    tot = 1
    for (a, b) in ((i, m1), (m1 + 1, m2), (m2 + 1, j)):
        c = what_count(a, b, depth + 1, maxd=maxd)
        if c is None: return None
        tot += c
    return tot

for n in (3, 9, 27, 81, 100):
    print("literal WHAT(1..%d): calls" % n, what_count(1, n))

# the intended reading: three equal thirds of the *length*
def what_intended(n):
    return 1 if n <= 1 else 3 * what_intended(n // 3) + n
for n in (1, 3, 9, 27, 81):
    import math
    print("intended T(%d)" % n, what_intended(n), "n*log3(n)+n =", n * math.log(n, 3) + n if n > 1 else 1)

# ---------------- Q5 union-find reachability ----------------
def find(par, x, compress=True):
    r = x
    while par[r] != r: r = par[r]
    if compress:
        while par[x] != r:
            par[x], x = r, par[x]
    return r

def reachable(n, ties):
    """BFS over all states reachable from singletons by union(x,y)/find(x). ties: 'any' or 'first_to_second' or 'second_to_first'"""
    start = tuple(range(n))
    seen = {start}
    stack = [start]
    while stack:
        st = stack.pop()
        for x in range(n):
            par = list(st); find(par, x)
            t = tuple(par)
            if t not in seen: seen.add(t); stack.append(t)
        for x in range(n):
            for y in range(x + 1, n):
                par = list(st)
                rx = find(par, x); ry = find(par, y)
                if rx == ry:
                    t = tuple(par)
                    if t not in seen: seen.add(t); stack.append(t)
                    continue
                size = [0] * n
                for v in range(n): size[find(par, v, compress=False)] += 1
                # note: compression done above for x,y only; sizes by root count is unaffected
                outs = []
                if size[rx] < size[ry]: outs.append((rx, ry))
                elif size[rx] > size[ry]: outs.append((ry, rx))
                else:
                    if ties == 'any': outs += [(rx, ry), (ry, rx)]
                    elif ties == 'first_to_second': outs.append((rx, ry))
                    else: outs.append((ry, rx))
                for child, root in outs:
                    p2 = list(par); p2[child] = root
                    t = tuple(p2)
                    if t not in seen: seen.add(t); stack.append(t)
    return seen

def tree(edges, n):
    # edges: child->parent using 1-based labels; others root
    par = list(range(n))
    for c, p in edges.items(): par[c - 1] = p - 1
    return tuple(par)

T5a = tree({2: 1, 3: 1, 6: 1, 5: 3, 4: 3, 7: 6, 8: 6, 9: 8}, 9)
T5b = tree({1: 4, 6: 4, 5: 4, 7: 4, 2: 1, 3: 1, 8: 7}, 8)
T5c = tree({1: 7, 5: 7, 6: 7, 8: 7, 2: 1, 3: 1, 4: 3}, 8)
for tie in ('any', 'first_to_second', 'second_to_first'):
    S8 = reachable(8, tie)
    print("tie", tie, "n=8 states", len(S8), "5b", T5b in S8, "5c", T5c in S8)
    if tie == 'any':
        S9 = reachable(9, tie)
        print("tie", tie, "n=9 states", len(S9), "5a", T5a in S9)
