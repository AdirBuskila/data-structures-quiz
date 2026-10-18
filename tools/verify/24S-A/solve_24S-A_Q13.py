"""24S-A Q13 solver check: AVL of keys + AVL of pair sums (each sum with one witness pair). ASCII only."""
import random, sys, pathlib, math
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL
def find(t, k):
    n = t.root
    while n:
        if k == n.k: return n
        n = n.l if k < n.k else n.r
    return None
def inorder(n): return [] if n is None else inorder(n.l) + [n.k] + inorder(n.r)
class DS:
    def __init__(s): s.keys = AVL(); s.sums = AVL(); s.wit = {}
    def search(s, k): return find(s.keys, k) is not None
    def insert(s, k):
        if s.search(k): return
        for y in inorder(s.keys.root):          # n elements, each sum insert O(log n^2) = O(log n)
            if find(s.sums, k + y) is None:
                s.sums.ins(k + y); s.wit[k + y] = (k, y)
        s.keys.ins(k)
    def sum(s, x):
        return s.wit[x] if find(s.sums, x) is not None else None
random.seed(7)
for trial in range(300):
    d = DS(); ref = set()
    for _ in range(25):
        k = random.randint(-40, 40); d.insert(k); ref.add(k)
        x = random.randint(-80, 80)
        r = d.sum(x)
        brute = any(a + b == x for a in ref for b in ref if a != b)
        assert (r is not None) == brute
        if r: assert r[0] != r[1] and r[0] in ref and r[1] in ref and r[0] + r[1] == x
    # sums tree height is O(log n): at most n^2 nodes
    n = len(ref); assert d.sums.root is None or d.sums.root.h <= 1.45 * math.log2(n * n + 2) + 2
print("24S-A Q13: pair-sum structure agrees with brute force; OK")
