"""24B-A Q13 solver check: AVL with stored key = real key - D, Add(d) is D += d. ASCII only."""
import random, sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL
def find(t, k):
    n = t.root
    while n:
        if k == n.k: return n
        n = n.l if k < n.k else n.r
    return None
class DS:
    def __init__(s): s.t = AVL(); s.D = 0
    def search(s, k): return find(s.t, k - s.D) is not None
    def insert(s, k):
        if not s.search(k): s.t.ins(k - s.D)
    def delete(s, k): s.t.dele(k - s.D)      # Delete(x): x points at the node; deleting by its stored key is the same node
    def add(s, d): s.D += d
random.seed(3)
for trial in range(300):
    d = DS(); ref = set()
    for _ in range(60):
        r = random.random()
        if r < 0.4: k = random.randint(-50, 50); d.insert(k); ref.add(k)
        elif r < 0.6 and ref: k = random.choice(sorted(ref)); d.delete(k); ref.discard(k)
        elif r < 0.8: dd = random.randint(-5, 5); d.add(dd); ref = {v + dd for v in ref}
        k = random.randint(-60, 60); assert d.search(k) == (k in ref)
print("24B-A Q13: offset-AVL agrees with reference set; OK")
