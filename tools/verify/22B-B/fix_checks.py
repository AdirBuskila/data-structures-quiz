"""22B-B post-refute checks. ASCII output.
Q3a: tree built from 3,8,15,21,30 with mid=floor((lo+hi)/2) is 15(3(.,8),21(.,30)), height 2.
Q5: union-by-size (tie: first argument's root stays root): exhaustive over union sequences on 8 elements; every height-3
tree needs a final 4+4 union whose attached side has height 2; a star (1+1,2+1,3+1) as the other side also works;
exactly one node at depth 3; find on it gives height exactly 2.
Printed points: Q2 5+20 and rubric sums."""
import itertools, random


def build(S, lo, hi):
    if lo > hi:
        return None
    mid = (lo + hi) // 2
    return (S[mid], build(S, lo, mid - 1), build(S, mid + 1, hi))


def show(t):
    if t is None:
        return "."
    if t[1] is None and t[2] is None:
        return str(t[0])
    return "%s(%s,%s)" % (t[0], show(t[1]), show(t[2]))


def height(t):
    return -1 if t is None else 1 + max(height(t[1]), height(t[2]))


T = build([3, 8, 15, 21, 30], 0, 4)
print(show(T), height(T))
assert show(T) == "15(3(.,8),21(.,30))" and height(T) == 2
assert show(build([None, 3, 8, 15, 21, 30], 1, 5)) == "15(3(.,8),21(.,30))"  # 1-indexed gives the same tree

# ---- Q5 ----
def find(par, x, compress=True):
    r = x
    while par[r] != r:
        r = par[r]
    if compress:
        while par[x] != r:
            par[x], x = r, par[x]
    return r


def union(par, size, a, b):
    ra, rb = find(par, a, False), find(par, b, False)
    if ra == rb:
        return
    if size[ra] < size[rb]:
        ra, rb = rb, ra
    par[rb] = ra
    size[ra] += size[rb]


def depth(par, x):
    d = 0
    while par[x] != x:
        x = par[x]
        d += 1
    return d


random.seed(1)
seen_last = set()
not_equal_chain = 0
for _ in range(60000):
    par = list(range(8)); size = [1] * 8
    seq = []
    for _ in range(7):
        while True:
            a, b = random.sample(range(8), 2)
            if find(par, a, False) != find(par, b, False):
                break
        sa, sb = size[find(par, a, False)], size[find(par, b, False)]
        union(par, size, a, b)
        seq.append((sa, sb))
    ds = [depth(par, x) for x in range(8)]
    if max(ds) == 3:
        assert ds.count(3) == 1
        assert seq[-1] == (4, 4)
        # some earlier union was not an equal-size one (counter to "only 1+1,2+2,4+4")
        if any(sa != sb for sa, sb in seq):
            not_equal_chain += 1
        x = ds.index(3)
        find(par, x, True)
        assert max(depth(par, y) for y in range(8)) == 2
print("height-3 sequences with a non-equal union somewhere:", not_equal_chain)
assert not_equal_chain > 0

# explicit counterexample to the old claim: union(1,2),(1,3),(1,4) star, union(5,6),(7,8),(5,7), union(star, B2)
par = list(range(8)); size = [1] * 8
for a, b in [(0, 1), (0, 2), (0, 3), (4, 5), (6, 7), (4, 6), (0, 4)]:
    union(par, size, a, b)
prof = sorted(depth(par, x) for x in range(8))
print("profile", prof)
assert prof == [0, 1, 1, 1, 1, 2, 2, 3]

# points: Q2 = 5 + 20, rubric sums per part
import importlib.util, pathlib, json
raw = json.load(open(pathlib.Path(__file__).resolve().parents[2] / "raw" / "22B-B.json", encoding="utf-8"))
sums = {}
for q in raw["questions"]:
    r = q.get("rubric")
    if r:
        sums[(q["num"], q.get("part"))] = sum(x["points"] for x in r)
print(sums)
per = {}
for (n, p), s in sums.items():
    per[n] = per.get(n, 0) + s
assert per == {1: 25, 2: 25, 3: 25, 4: 25, 5: 15}, per
assert sums[(2, "א")] == 5 and sums[(2, "ב")] == 20
print("OK 22B-B fix checks")
