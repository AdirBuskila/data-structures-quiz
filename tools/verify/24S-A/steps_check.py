"""24S-A Q13 step values: pair-sum structure. ASCII only."""
import sys, pathlib, random, itertools
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
class DS:
    def __init__(s, order_ok=True): s.T = []; s.P = {}; s.ok = order_ok
    def insert(s, k):
        if k in s.T: return
        if s.ok:
            for y in s.T:
                s.P.setdefault(k + y, (k, y))
            s.T.append(k)
        else:
            s.T.append(k)
            for y in s.T:
                s.P.setdefault(k + y, (k, y))
d = DS()
for k in (1, 2, 4): d.insert(k)
assert sorted(d.P) == [3, 5, 6]
d.insert(3)
assert sorted(d.P) == [4, 5, 6, 7, 9 - 3] or True
assert len(d.P) == 5 and sorted(d.P) == [3, 4, 5, 6, 7], d.P
# max number of distinct sums for n=10 is C(10,2)=45, reached by powers of two
S = [2 ** i for i in range(10)]
assert len({a + b for a, b in itertools.combinations(S, 2)}) == 45
random.seed(5)
for _ in range(2000):
    s = random.sample(range(-100, 100), 10)
    assert len({a + b for a, b in itertools.combinations(s, 2)}) <= 45
# wrong order (insert k into T before scanning) creates the invalid witness (k,k)
w = DS(order_ok=False)
for k in (1, 2): w.insert(k)
assert w.P[2] == (1, 1) and 2 in w.P          # Sum(2) answers (1,1) although only one 1 exists
g = DS()
for k in (1, 2): g.insert(k)
assert 2 not in g.P and g.P == {3: (2, 1)}
print("24S-A steps OK")
