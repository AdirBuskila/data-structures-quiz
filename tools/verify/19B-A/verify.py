# 19B-A checks: Q1.1 recurrence, Q3.1 postorder sequences (BST / AVL), Q2.2 minimal number of finds, Q6 hashing examples. ASCII only.
import itertools
# Q1.1: What(A,k,m): calls with m-k shrinking by 2; count comparisons
def what_cost(n):
    k, m, c = 1, n, 0
    while True:
        c += 1                    # m-k<1 test
        if m - k < 1: return c
        c += 1                    # A[k] != A[m]
        k += 1; m -= 1
print("Q1.1 test counts (n=3,5,7,9):", [what_cost(n) for n in (3, 5, 7, 9)], "-> +2 per 2 elements (official uses +3)")
# Q3.1
class N:
    def __init__(s, k): s.k = k; s.l = s.r = None
def from_post(seq, lo=-1e9, hi=1e9):
    """Rebuild a BST from a postorder list; None when it is not a BST postorder."""
    if not seq: return "empty"
    root = seq[-1]; rest = seq[:-1]
    i = 0
    while i < len(rest) and rest[i] < root: i += 1
    left, right = rest[:i], rest[i:]
    if any(x < root for x in right): return None
    L = from_post(left); R = from_post(right)
    if L is None or R is None: return None
    n = N(root); n.l = None if L == "empty" else L; n.r = None if R == "empty" else R
    return n
def h(n): return -1 if n is None else 1 + max(h(n.l), h(n.r))
def avl(n): return n is None or (abs(h(n.l) - h(n.r)) <= 1 and avl(n.l) and avl(n.r))
for name, s in (("a", [201, 154, 309, 100, 402, 56, 505]), ("b", [56, 309, 154, 100, 505, 402, 201]), ("c", [56, 154, 100, 309, 505, 452, 201])):
    t = from_post(s)
    print("Q3.1" + name, "not a BST" if t is None else ("BST, AVL=%s" % avl(t)))
# Q2.2: forest, minimal number of finds so that all heights <= 1
par = {9: 4, 8: 4, 12: 4, 11: 9, 2: 12, 7: 12, 1: 12, 3: 2, 14: 5, 10: 5, 6: 14, 4: 4, 5: 5, 13: 13}
def depth(p, x):
    d = 0
    while p[x] != x: x = p[x]; d += 1
    return d
def find(p, x):
    r = x
    while p[r] != r: r = p[r]
    while p[x] != r: p[x], x = r, p[x]
def maxd(p): return max(depth(p, x) for x in p)
best = None
for k in range(0, 7):
    for combo in itertools.combinations(sorted(par), k):
        for order in itertools.permutations(combo):
            p = dict(par)
            for x in order: find(p, x)
            if maxd(p) <= 1: best = (k, order); break
        if best: break
    if best: break
print("Q2.2 minimal finds:", best)
p = dict(par)
for x in (11, 3, 7, 1, 6): find(p, x)
print("Q2.2 official sequence 11,3,7,1,6 -> max depth", maxd(p))
# Q2.1: sizes 12-subtree=5 nodes vs rest of 4-tree = 4 nodes
print("Q2.1 subtree(12) size", 5, "vs rest of tree(4) size", 4)
# Q6
h2 = lambda k, i: (k % 13 + i*i + 5*i) % 13
h1 = lambda k, i: (k % 13 + i) % 13
keys = [1, 14, 27, 40, 53, 66]
for nm, hf in (("T1", h1), ("T2", h2)):
    tab = {}; pos = {}
    for k in keys:
        i = 0
        while hf(k, i) in tab: i += 1
        tab[hf(k, i)] = k; pos[k] = hf(k, i)
    print("Q6.1", nm, pos)
tab = {}
for k in (0, 13, 26, 2, 39, 52):
    i = 0
    while h2(k, i) in tab: i += 1
    tab[h2(k, i)] = k
print("Q6.3 table:", sorted(tab.items()))
print("Q6.3 probes of 65:", [h2(65, i) for i in range(7)], "all occupied:", all(h2(65, i) in tab for i in range(7)))
