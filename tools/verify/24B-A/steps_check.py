"""24B-A Q100 step values: offset-AVL (stored key = real key - D). ASCII only."""
import sys, pathlib, random
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL
def find(t, k):
    n = t.root
    while n:
        if k == n.k: return n
        n = n.l if k < n.k else n.r
    return None
class DS:
    def __init__(s, sign=-1): s.t = AVL(); s.D = 0; s.sign = sign; s.last_stored = None
    def search(s, k): return find(s.t, k - s.D) is not None
    def insert(s, k):
        if not s.search(k):
            s.last_stored = k + s.sign * s.D
            s.t.ins(s.last_stored)
    def add(s, d): s.D += d
# step 2: Insert(10) at D=0, Add(4), Add(3), Insert(20): stored key = 13 ; Search(17) looks for 10
d = DS(); d.insert(10); d.add(4); d.add(3); d.insert(20)
assert d.D == 7 and d.last_stored == 13
assert d.search(17) and find(d.t, 17 - d.D).k == 10      # real key 17 = stored 10 + 7
assert d.search(20) and d.search(27) is False
# findbug: stored key k + D is wrong. D=3, Insert(10) -> stored 13 (bug); Search(10) looks for 7 -> not found
b = DS(sign=+1); b.add(3); b.insert(10)
assert b.last_stored == 13 and b.search(10) is False
g = DS(); g.add(3); g.insert(10)
assert g.last_stored == 7 and g.search(10) is True
# distractor structures: heap Search is O(n) (no order), sorted array Insert shifts n items, per-node Add visits n nodes
def count_visits(n): return n          # Add on every node = n updates
assert count_visits(1000) == 1000
# whole-DS randomized agreement
random.seed(1)
for _ in range(200):
    d = DS(); ref = set()
    for _ in range(40):
        r = random.random()
        if r < .5: k = random.randint(-30, 30); d.insert(k); ref.add(k)
        elif r < .8: x = random.randint(-4, 4); d.add(x); ref = {v + x for v in ref}
        k = random.randint(-40, 40); assert d.search(k) == (k in ref)
print("24B-A steps OK")
