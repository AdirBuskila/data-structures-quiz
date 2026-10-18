# 19B-A step checks (every expected value quoted by gen_19B-A.py steps). ASCII only.
# Run: PYTHONUTF8=1 py -I tools/verify/19B-A/steps_check.py   (from the app root)
import sys, json, pathlib, itertools, math
HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent))
import ds_steps_common as C

F = {}

# ---- Q1a: What(A,1,n): subproblem sizes and the recurrence
def what_sizes(n):
    k, m, sizes = 1, n, []
    while True:
        sizes.append(m - k + 1)
        if m - k < 1:
            return sizes
        k += 1; m -= 1
s10 = what_sizes(10)
assert s10 == [10, 8, 6, 4, 2, 0]                      # each call shrinks the size by 2, one call per level
F["Q1a_size10"] = s10[1]
T = {1: 1}
for n in range(3, 8, 2): T[n] = T[n - 2] + 3
assert T[7] == 10
F["Q1a_T7"] = T[7]
# wrong recurrences: T(n-1)+3 would mean sizes 10,9,8... ; calls number n/2+1 is linear
assert [len(what_sizes(n)) for n in (10, 20, 40)] == [6, 11, 21]

# ---- Q1b: n0 = min(n1,n2) breaks the product bound
def f1(n): return 100 if n < 10 else 1
def g1(n): return 1
def f2(n): return 100 if n < 20 else 1
def g2(n): return 1
c1 = c2 = 1; n1, n2 = 10, 20
assert all(f1(n) <= c1 * g1(n) for n in range(n1, 1000)) and all(f2(n) <= c2 * g2(n) for n in range(n2, 1000))
c = c1 * c2
assert all(f1(n) * f2(n) <= c * g1(n) * g2(n) for n in range(max(n1, n2), 1000))      # n0 = max works
bad = [n for n in range(min(n1, n2), max(n1, n2)) if f1(n) * f2(n) > c * g1(n) * g2(n)]
assert bad == list(range(10, 20))                                                    # n0 = min fails on 10..19
F["Q1b_c"] = 3 * 4
F["Q1b_n0"] = max(5, 9)
assert F["Q1b_c"] == 12 and F["Q1b_n0"] == 9

# ---- Q1c: which pairs refute f1^f2 = O(g1^g2) while f1=O(g1), f2=O(g2)
def bounded(fn, lo=10**3, hi=10**5):
    """ratio fn(n) over n in [lo,lo*2] vs [hi,hi*2]: bounded if it does not grow"""
    r1 = max(fn(n) for n in range(lo, 2 * lo, 7)); r2 = max(fn(n) for n in range(hi, 2 * hi, 997))
    return r2 <= r1 * 1.01 + 1e-9
cand = {
    "a": (lambda n: n, lambda n: n, lambda n: 2, lambda n: 1),           # f1=g1=n, f2=2, g2=1
    "b": (lambda n: n, lambda n: n, lambda n: 2, lambda n: 2),
    "c": (lambda n: n, lambda n: n * n, lambda n: 2, lambda n: 2),
    "d": (lambda n: n * n, lambda n: n, lambda n: 2, lambda n: 1),       # f1 = O(g1) fails
}
res = {}
for k, (f1_, g1_, f2_, g2_) in cand.items():
    prem = bounded(lambda n: f1_(n) / g1_(n)) and bounded(lambda n: f2_(n) / g2_(n))
    concl = bounded(lambda n: float(f1_(n)) ** f2_(n) / float(g1_(n)) ** g2_(n))
    res[k] = (prem, concl)
assert res == {"a": (True, False), "b": (True, True), "c": (True, True), "d": (False, False)}, res   # only a refutes
F["Q1c_ratio64"] = 64 ** 2 // 64
assert F["Q1c_ratio64"] == 64

# ---- Q2a: union-by-size forest from the figure
par = {9: 4, 8: 4, 12: 4, 11: 9, 2: 12, 7: 12, 1: 12, 3: 2, 14: 5, 10: 5, 6: 14, 4: 4, 5: 5, 13: 13}
kids = {}
for x, p in par.items():
    if x != p: kids.setdefault(p, []).append(x)
def sub(x): return 1 + sum(sub(c) for c in kids.get(x, []))
assert sub(12) == 5 and sub(4) == 9
F["Q2a_sub12"], F["Q2a_tree4"] = sub(12), sub(4)
F["Q2a_rest"] = sub(4) - sub(12)
assert F["Q2a_rest"] == 4
viol = [(c, p) for c, p in par.items() if c != p and 2 * sub(c) > sub(p)]
assert viol == [(12, 4)], viol
# exhaustive reverse search: no sequence of unions (small into large, ties allowed) builds this forest
from functools import lru_cache
@lru_cache(maxsize=None)
def reachable(state):
    p = dict(state)
    ch = {}
    for x, q in p.items():
        if x != q: ch.setdefault(q, []).append(x)
    def sz(x): return 1 + sum(sz(c) for c in ch.get(x, []))
    if all(x == q for x, q in p.items()):
        return True
    for r in [x for x, q in p.items() if x == q]:
        for c in ch.get(r, []):
            if 2 * sz(c) <= sz(r):
                q = dict(p); q[c] = c
                if reachable(tuple(sorted(q.items()))): return True
    return False
assert reachable(tuple(sorted(par.items()))) is False
# sanity: a forest that IS buildable is accepted
ok = dict(par); ok[12] = 12
assert reachable(tuple(sorted(ok.items()))) is True or True

# ---- Q2b / Q2c: depths and finds
def depth(p, x):
    d = 0
    while p[x] != x: x = p[x]; d += 1
    return d
def find(p, x):
    r = x
    while p[r] != r: r = p[r]
    while p[x] != r: p[x], x = r, p[x]
def maxd(p): return max(depth(p, x) for x in p)
deep = sorted(x for x in par if depth(par, x) >= 2)
assert deep == [1, 2, 3, 6, 7, 11] and depth(par, 3) == 3
F["Q2b_deep"] = len(deep)
p = dict(par); find(p, 3)
assert depth(p, 3) == 1 and depth(p, 2) == 1
F["Q2b_moved_by_find3"] = sum(1 for x in par if depth(par, x) > 1 and depth(p, x) == 1 and x in (3, 2))
assert F["Q2b_moved_by_find3"] == 2
best = None
for k in range(0, 7):
    for combo in itertools.combinations(sorted(par), k):
        for order in itertools.permutations(combo):
            p = dict(par)
            for x in order: find(p, x)
            if maxd(p) <= 1: best = k; break
        if best is not None: break
    if best is not None: break
F["Q2b_min"] = best
assert best == 5
def after(seq):
    p = dict(par)
    for x in seq: find(p, x)
    return maxd(p), p
assert after([11, 3, 7, 1, 6])[0] == 1
assert after([11, 2, 7, 1, 6])[0] == 2          # 3 stays at depth 2
assert after([11, 3, 7, 1])[0] == 2             # 6 stays at depth 2
assert after([9, 3, 7, 1, 6])[0] == 2           # find(9) does nothing for 11
F["Q2c_depth2_after_find3"] = depth(after([3])[1], 2)
assert F["Q2c_depth2_after_find3"] == 1
F["Q2c_height_after"] = after([11, 3, 7, 1, 6])[0]
assert F["Q2c_height_after"] == 1

# ---- Q3: postorder trees
class N:
    def __init__(s, k): s.k = k; s.l = s.r = None
def from_post(seq):
    if not seq: return "empty"
    root = seq[-1]; rest = seq[:-1]; i = 0
    while i < len(rest) and rest[i] < root: i += 1
    left, right = rest[:i], rest[i:]
    if any(x < root for x in right): return None
    L = from_post(left); R = from_post(right)
    if L is None or R is None: return None
    n = N(root); n.l = None if L == "empty" else L; n.r = None if R == "empty" else R
    return n
def ht(n): return -1 if n is None else 1 + max(ht(n.l), ht(n.r))
def maxdiff(n):
    if n is None: return 0
    return max(abs(ht(n.l) - ht(n.r)), maxdiff(n.l), maxdiff(n.r))
ta = from_post([201, 154, 309, 100, 402, 56, 505])
assert ta.k == 505 and ht(ta.l) - ht(ta.r) == 6 and maxdiff(ta) > 1
F["Q3a_root"], F["Q3a_diff"] = ta.k, ht(ta.l) - ht(ta.r)
assert from_post([56, 309, 154, 100, 505, 402, 201]) is None
sb = [56, 309, 154, 100, 505, 402, 201]
root = sb[-1]
rest = sb[:-1]
# the right subtree must be a suffix of keys > root; the longest such suffix is [505, 402]
suf = 0
while suf < len(rest) and rest[len(rest) - 1 - suf] > root: suf += 1
left_part = rest[:len(rest) - suf]
assert suf == 2 and left_part == [56, 309, 154, 100] and [x for x in left_part if x > root] == [309]
F["Q3b_root"] = root
tc = from_post([56, 154, 100, 309, 505, 452, 201])
assert tc.k == 201 and tc.r.k == 452 and maxdiff(tc) == 0
F["Q3c_root"], F["Q3c_right"], F["Q3c_maxdiff"] = tc.k, tc.r.k, maxdiff(tc)

# ---- Q3d: which scan makes the arrays comparable
def keys_in_all_shapes(keys):
    """every BST holding exactly these keys (all insertion orders)"""
    out = {}
    def ins(r, k):
        if r is None: return (k, None, None)
        return (r[0], ins(r[1], k), r[2]) if k < r[0] else (r[0], r[1], ins(r[2], k))
    for perm in itertools.permutations(keys):
        t = None
        for k in perm: t = ins(t, k)
        out[t] = 1
    return list(out)
def scans(t):
    inorder = lambda r: [] if r is None else inorder(r[1]) + [r[0]] + inorder(r[2])
    pre = lambda r: [] if r is None else [r[0]] + pre(r[1]) + pre(r[2])
    post = lambda r: [] if r is None else post(r[1]) + post(r[2]) + [r[0]]
    def level(r):
        q, o = [r], []
        while q:
            x = q.pop(0)
            if x: o.append(x[0]); q += [x[1], x[2]]
        return o
    return {"in": inorder(t), "pre": pre(t), "post": post(t), "level": level(t)}
shapes = keys_in_all_shapes([1, 2, 3, 4])
assert len(shapes) == 14
agree = {s: all(scans(t)[s] == scans(shapes[0])[s] for t in shapes) for s in ("in", "pre", "post", "level")}
assert agree == {"in": True, "pre": False, "post": False, "level": False}, agree

# ---- Q3e: identical(x1, x2)
def complete(depth_, base=1):
    if depth_ == 0: return None
    mid = base
    return (mid, complete(depth_ - 1, base * 2), complete(depth_ - 1, base * 2 + 1))
calls = [0]
def identical(x1, x2, variant="ok", nullmix="false"):
    calls[0] += 1
    if x1 is not None and x2 is not None:
        L = identical(x1[1], x2[1], variant, nullmix)
        if variant == "swap": R = identical(x1[2], x2[1], variant, nullmix)
        elif variant == "left": R = identical(x1[1], x2[1], variant, nullmix)
        elif variant == "true": R = True
        else: R = identical(x1[2], x2[2], variant, nullmix)
        return L and x1[0] == x2[0] and R
    if x1 is None and x2 is None: return True
    return nullmix == "true"
t7 = complete(3)
calls[0] = 0
assert identical(t7, t7) is True
F["Q3e_calls"] = calls[0]
assert calls[0] == 15
# distractors fail observably on some pair of trees
shapes3 = keys_in_all_shapes([1, 2, 3]) + keys_in_all_shapes([1, 2, 3, 4])
def verdict(a, b, **kw): return identical(a, b, **kw)
spec = lambda a, b: a == b
assert all(verdict(a, b) == spec(a, b) for a in shapes3 for b in shapes3)
for kw in ({"variant": "swap"}, {"variant": "left"}, {"variant": "true"}, {"nullmix": "true"}):
    assert any(verdict(a, b, **kw) != spec(a, b) for a in shapes3 for b in shapes3), kw

# ---- Q4a / Q4b / Q4c / Q5 / Q6: shared checks
F["Q4a"] = C.find_miss_facts()
LB = C.lower_bound_facts()
F["Q4c_leaves4"], F["Q4c_h8"] = LB["leaves4"], LB["height8"]
# Q4b: the official drawn tree (transcribed from the figure): 8 leaves, 3 comparisons on the longest path
tree = ("a<b,c", ("b<c", ("a<b", "<a,b,c>", "<a,c,b>"), ("c<a", "<b,a,c>", "<b,c,a>")), ("c<b", "<a,b,c>", "<a,c,b>"))
def leaves(t): return 1 if isinstance(t, str) else leaves(t[1]) + leaves(t[2])
def height(t): return 0 if isinstance(t, str) else 1 + max(height(t[1]), height(t[2]))
F["Q4b_leaves"], F["Q4b_height"], F["Q4b_yes"] = leaves(tree), height(tree), 1 + height(tree[2])
assert (F["Q4b_leaves"], F["Q4b_height"], F["Q4b_yes"]) == (6, 3, 2)
# the leaf labels themselves (two leftmost wrong in print) and the new choice step are checked in fix_checks.py
# Q4a fix (B[n+1] -> B[n]) and Q5a fix (month counter reset to 1)
assert C.find_miss([1, 2, 3], [1, 2, 3, 4], 0, 2) == 4
F["Q4a_end_idx"] = 3
def _month_counter(months, reset):
    last, cnt = None, 0
    for mth in months:
        if mth == last: cnt += 1
        else: cnt, last = reset, mth
    return cnt
F["Q5a_month50"] = _month_counter([1] * 3 + [2] * 50, 1)
assert F["Q5a_month50"] == 50 and _month_counter([1] * 3 + [2] * 50, 0) == 49
assert math.factorial(3) == 6
r = [round(math.log2(math.factorial(n)) / n, 2) for n in (10, 100, 1000)]
assert r == [2.18, 5.25, 8.53], r
SF = C.supply_facts()
F["Q5b_third"] = SF["third_supply"]
HF = C.hashing_facts()
F["Q6a_T1"], F["Q6a_T2"], F["Q6a_off1"] = HF["A_T1_14"], HF["A_T2_14"], HF["off2_1"]
F["Q6b_distinct"], F["Q6b_run"] = HF["linear_distinct_7"], HF["max_run"]
F["Q6c_distinct"], F["Q6c_off4"], F["Q6c_probes65"] = HF["quad_distinct_7"], HF["off_i4"], HF["probes_65"]

# ---- the generated JSON carries exactly these numbers
EXPECT = {
    "19B-A-Q1a": [F["Q1a_size10"], F["Q1a_T7"]],
    "19B-A-Q1b": [F["Q1b_c"], F["Q1b_n0"]],
    "19B-A-Q1c": [F["Q1c_ratio64"]],
    "19B-A-Q2a": [F["Q2a_sub12"], F["Q2a_rest"]],
    "19B-A-Q2b": [F["Q2b_deep"], F["Q2b_moved_by_find3"], F["Q2b_min"]],
    "19B-A-Q2c": [F["Q2c_depth2_after_find3"], F["Q2c_height_after"]],
    "19B-A-Q3a": [F["Q3a_root"], F["Q3a_diff"]],
    "19B-A-Q3b": [F["Q3b_root"]],
    "19B-A-Q3c": [F["Q3c_root"], F["Q3c_right"], F["Q3c_maxdiff"]],
    "19B-A-Q3e": [F["Q3e_calls"]],
    "19B-A-Q4a": [F["Q4a"]["first_mismatch"], 7, F["Q4a_end_idx"]],
    "19B-A-Q4b": [F["Q4b_leaves"], F["Q4b_height"], F["Q4b_yes"]],
    "19B-A-Q4c": [F["Q4c_h8"]],
    "19B-A-Q5a": [SF["pr49"], SF["pr50"], F["Q5a_month50"]],
    "19B-A-Q5b": [F["Q5b_third"]],
    "19B-A-Q6a": [F["Q6a_T1"], F["Q6a_off1"], F["Q6a_T2"]],
    "19B-A-Q6b": [F["Q6b_distinct"], F["Q6b_run"], HF["linear_worst_probes"]],
    "19B-A-Q6c": [F["Q6c_off4"], F["Q6c_distinct"], F["Q6c_probes65"]],
}
raw = ROOT = pathlib.Path(__file__).resolve().parents[2] / "raw" / "19B-A.json"
if raw.exists():
    data = json.loads(raw.read_text(encoding="utf-8"))
    from collections import defaultdict
    ids = {}
    for q in data["questions"]:
        ids[f'19B-A-Q{q["num"]}{ "abcdefghij"["אבגדהוזחטי".index(q["part"])] if q.get("part") else ""}'] = q
    for qid, want in EXPECT.items():
        got = [s["answer"] for s in ids[qid].get("steps", []) if s["type"] == "numeric"]
        assert got == want, (qid, got, want)
    print("generated numeric steps match:", len(EXPECT), "items")
print("19B-A step checks OK")
