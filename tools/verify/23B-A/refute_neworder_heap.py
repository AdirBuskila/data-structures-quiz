"""Refuter, 23B-A: Q2a/Q2b neworder reconstruction, Q3 ternary heap index maps, Q5 union-find depth bound."""
import itertools, random

class B:
    def __init__(s, k): s.k, s.l, s.r = k, None, None

def bst_insert(root, k):
    if root is None: return B(k)
    if k < root.k: root.l = bst_insert(root.l, k)
    else: root.r = bst_insert(root.r, k)
    return root

def neworder(x, out):
    if x is None: return
    out.append(x.k); neworder(x.l, out); out.append(x.k); neworder(x.r, out); out.append(x.k)

root = None
for k in (5, 3, 6, 4): root = bst_insert(root, k)
out = []; neworder(root, out); print("Q2a:", out)

# Q2b: rebuild tree from the printed sequence
seq = [5,6,22,35,85,85,85,35,33,33,33,35,22,19,19,19,22,6,6,5,3,4,4,4,3,1,2,2,2,1,1,3,5]
pos = 0
def parse():
    """node with value v: v, [left], v, [right], v ; leaf -> v v v. Returns (tree, nextpos) or None for empty subtree."""
    global pos
    v = seq[pos]; pos += 1
    left = right = None
    # after first v, either a subtree (a different value, not equal to v) or v
    if seq[pos] != v:
        left = parse()
    assert seq[pos] == v; pos += 1
    if pos < len(seq) and seq[pos] != v:
        right = parse()
    assert seq[pos] == v; pos += 1
    return (v, left, right)
t = parse()
print("Q2b parse consumed", pos, "of", len(seq))
def show(t, ind=0):
    if t is None: return
    print(" " * ind + str(t[0]) + (" (leaf)" if t[1] is None and t[2] is None else ""))
    show(t[1], ind + 2); show(t[2], ind + 2)
show(t)
# Caveat: a node with only a RIGHT child prints v,v,[right],v which parse() reads as left-less / right child: also check ambiguity
# (a node whose left subtree is empty and right present: v, v, ...  -> first branch skipped; handled by seq[pos]==v then right).

# Q3 ternary heap 1-based: children of i: 3i-1, 3i, 3i+1 ; parent (i+1)//3
for i in range(1, 40):
    ch = [3 * i - 1, 3 * i, 3 * i + 1]
    assert all((c + 1) // 3 == i for c in ch)
par_ok = all(((c + 1) // 3) >= 1 for c in range(2, 100))
print("Q3a 1-based map ok", par_ok, "; 0-based children 3i+1..3i+3 parent (i-1)//3:",
      all(((3 * i + d) - 1) // 3 == i for i in range(50) for d in (1, 2, 3)))

# Q5 union by size + path compression: n >= 2^h always (random ops)
def find(par, x):
    r = x
    while par[r] != r: r = par[r]
    while par[x] != r: par[x], x = r, par[x]
    return r
worst = 0
for trial in range(3000):
    n = random.randint(2, 64)
    par = list(range(n)); sz = [1] * n
    for _ in range(random.randint(1, 3 * n)):
        if random.random() < .7:
            a, b = find(par, random.randrange(n)), find(par, random.randrange(n))
            if a != b:
                if sz[a] < sz[b]: a, b = b, a
                par[b] = a; sz[a] += sz[b]
        else:
            find(par, random.randrange(n))
        # check every tree: n_tree >= 2^height
        depth = {}
        def d(x):
            c = 0
            while par[x] != x: x = par[x]; c += 1
            return c, x
        hs = {}; cnt = {}
        for v in range(n):
            dv, r = d(v); hs[r] = max(hs.get(r, 0), dv); cnt[r] = cnt.get(r, 0) + 1
        for r in hs:
            assert cnt[r] >= 2 ** hs[r], (cnt[r], hs[r])
print("Q5: n >= 2^h held in all random runs")
