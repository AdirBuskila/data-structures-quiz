import random, itertools, sys
from math import comb

random.seed(7)

# ---------- 24B-A: offset BST ----------
class Node:
    __slots__ = ("k", "l", "r", "p")
    def __init__(s, k): s.k = k; s.l = s.r = s.p = None

class OffsetBST:
    # plain BST is enough to check semantics of the offset trick (balancing is orthogonal)
    def __init__(s): s.root = None; s.D = 0
    def find(s, k):
        k2 = k - s.D; n = s.root
        while n:
            if k2 == n.k: return n
            n = n.l if k2 < n.k else n.r
        return None
    def insert(s, k):
        k2 = k - s.D
        if s.find(k): return
        n = Node(k2)
        if not s.root: s.root = n; return
        c = s.root
        while True:
            if k2 < c.k:
                if c.l is None: c.l = n; n.p = c; return
                c = c.l
            else:
                if c.r is None: c.r = n; n.p = c; return
                c = c.r
    def add(s, d): s.D += d
    def keys(s):
        out = []
        def rec(n):
            if n: rec(n.l); out.append(n.k + s.D); rec(n.r)
        rec(s.root); return out

def test_24BA():
    for _ in range(300):
        t = OffsetBST(); ref = set()
        for _ in range(60):
            op = random.choice("IIASS")
            if op == "I":
                k = random.randint(-20, 40); t.insert(k); ref.add(k)
            elif op == "A":
                d = random.randint(-5, 9); t.add(d); ref = {x + d for x in ref}
            else:
                k = random.randint(-20, 60)
                assert (t.find(k) is not None) == (k in ref)
        assert t.keys() == sorted(ref)
    # steps
    t = OffsetBST(); t.insert(10); t.add(4); t.add(3); t.insert(20)
    stored = sorted(n for n in [t.root.k] + [t.root.r.k if t.root.r else None] if n is not None)
    print("24B-A step2 stored keys:", stored, "D=", t.D)
    print("24B-A step3 search(17) looks for", 17 - t.D, "found", t.find(17) is not None,
          "S20", t.find(20) is not None, "S27", t.find(27) is not None)
    # findbug: stored k+D version
    D = 3; stored = 10 + D; print("24B-A bug: stored", stored, "search looks for", 10 - D, "-> miss:", 10 - D != stored)
    print("24B-A OK")

# ---------- 24B-B: heap delete(x) ----------
def up(a, i):
    ch = False
    while i > 0 and a[(i - 1) // 2] > a[i]:
        p = (i - 1) // 2; a[p], a[i] = a[i], a[p]; i = p; ch = True
    return ch
def down(a, i):
    ch = False; n = len(a)
    while True:
        m = i
        for c in (2 * i + 1, 2 * i + 2):
            if c < n and a[c] < a[m]: m = c
        if m == i: return ch
        a[m], a[i] = a[i], a[m]; i = m; ch = True
def is_heap(a): return all(a[(i - 1) // 2] <= a[i] for i in range(1, len(a)))
def hdel(a, i, mode):
    last = a.pop()
    if i == len(a): return (False, False)
    a[i] = last
    u = d = False
    if mode in ("both", "up"): u = up(a, i)
    if mode in ("both", "down") and not u: d = down(a, i)
    return (u, d)

def test_24BB():
    both_changed = 0; down_fail = 0; up_fail = 0
    for _ in range(20000):
        n = random.randint(1, 15)
        a = sorted(random.sample(range(100), n)); random.shuffle(a)
        h = []
        for x in a: h.append(x); up(h, len(h) - 1)
        i = random.randrange(n)
        # both-always-run: check both would change
        b = h[:]; last = b.pop()
        if i < len(b):
            b[i] = last; c1 = b[:]; c2 = b[:]
            u = up(c1, i); d = down(c2, i)
            if u and d: both_changed += 1
        for mode in ("both", "down", "up"):
            h2 = h[:]; hdel(h2, i, mode)
            if mode == "both": assert is_heap(h2) and sorted(h2) == sorted(h[:i] + h[i+1:])
            if mode == "down" and not is_heap(h2): down_fail += 1
            if mode == "up" and not is_heap(h2): up_fail += 1
    print("24B-B both-change cases:", both_changed, " down-only fails:", down_fail, " up-only fails:", up_fail)
    assert both_changed == 0 and down_fail > 0 and up_fail > 0
    h = [1, 10, 2, 11, 12, 3, 4]; hdel(h, 3, "both"); print("24B-B step2 heap:", h, "pos1 =", h[1], "heap?", is_heap(h))
    h = [1, 10, 2, 11, 12, 3, 4]; hdel(h, 3, "down"); print("24B-B down-only:", h, is_heap(h))
    # AVL example: perfectly balanced 7 keys, delete min
    keys = [2, 3, 4, 5, 7, 8, 9]; print("24B-B balanced-root:", keys[3], "min after delete 2:", 3)
    print("24B-B OK")

# ---------- 24S-A: pair-sum structure ----------
class SumDS:
    def __init__(s, order="right"): s.T = set(); s.P = {}; s.order = order
    def insert(s, k):
        if k in s.T: return
        if s.order == "wrong": s.T.add(k)
        for y in sorted(s.T):
            if k + y not in s.P: s.P[k + y] = (k, y)
        if s.order != "wrong": s.T.add(k)
    def sum(s, x): return s.P.get(x)

def test_24SA():
    for _ in range(500):
        d = SumDS(); ref = set()
        for _ in range(25):
            k = random.randint(-15, 40); d.insert(k); ref.add(k)
            assert len(d.P) <= comb(len(ref), 2)
            for x in range(-30, 90):
                got = d.sum(x)
                exists = any(a != b and a + b == x for a, b in itertools.combinations(ref, 2))
                assert (got is not None) == exists, (x, sorted(ref))
                if got:
                    a, b = got; assert a != b and a in ref and b in ref and a + b == x
    # max distinct sums with 10 powers of 2
    s = sorted({a + b for a, b in itertools.combinations([2 ** i for i in range(10)], 2)})
    print("24S-A max sums n=10:", len(s), comb(10, 2))
    big = 0
    for _ in range(2000):
        r = random.sample(range(1000), 10)
        big = max(big, len({a + b for a, b in itertools.combinations(r, 2)}))
    print("24S-A random max", big)
    d = SumDS()
    for k in (1, 2, 4): d.insert(k)
    print("24S-A P before", sorted(d.P)); d.insert(3); print("24S-A P after Insert(3)", sorted(d.P), len(d.P))
    w = SumDS("wrong"); w.insert(1); print("24S-A wrong order after Insert(1):", w.P)
    w.insert(2); print("24S-A wrong order after Insert(2):", w.P)
    # wrong order produces invalid witness -> Sum(2) returns (1,1)
    print("24S-A OK")

test_24BA(); test_24BB(); test_24SA()
