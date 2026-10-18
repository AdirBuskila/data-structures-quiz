# 19B-A post-refute fix checks (arbiter/fixer, 2026-10-18). ASCII only.
# Run: PYTHONUTF8=1 py -I tools/verify/19B-A/fix_checks.py   (from the app root)
import itertools, random


# ---- Q4b: the official decision tree, with the printed leaves and with the corrected leaves
# node = (test, no_subtree, yes_subtree); leaf = output order (increasing)
def tree(left_no, left_yes):
    return ("a<b,c",
            ("b<c",
             ("a<b", left_no, left_yes),
             ("c<a", "bac", "bca")),
            ("c<b", "abc", "acb"))
TESTS = {"a<b,c": lambda v: v["a"] < v["b"] and v["a"] < v["c"],
         "b<c": lambda v: v["b"] < v["c"], "a<b": lambda v: v["a"] < v["b"],
         "c<a": lambda v: v["c"] < v["a"], "c<b": lambda v: v["c"] < v["b"]}

def run(t, v, path=()):
    if isinstance(t, str): return t, path
    test, no, yes = t
    r = TESTS[test](v)
    return run(yes if r else no, v, path + ((test, r),))

def leaves(t):
    return [t] if isinstance(t, str) else leaves(t[1]) + leaves(t[2])

def check(t):
    wrong = []
    for perm in itertools.permutations((1, 2, 3)):
        v = dict(zip("abc", perm))
        out, _ = run(t, v)
        if "".join(sorted("abc", key=lambda x: v[x])) != out: wrong.append(perm)
    return wrong

official, fixed = tree("abc", "acb"), tree("cba", "cab")
assert len(check(official)) == 2 and check(fixed) == []
assert len(set(leaves(official))) == 4 and len(set(leaves(fixed))) == 6 and len(leaves(fixed)) == 6
assert leaves(fixed) == ["cba", "cab", "bac", "bca", "abc", "acb"]
# new choice step: root "no", b<c "no", a<b "yes" -> only c<a<b reaches it
reach = [p for p in itertools.permutations((1, 2, 3))
         if run(fixed, dict(zip("abc", p)))[1] == (("a<b,c", False), ("b<c", False), ("a<b", True))]
assert len(reach) == 1 and run(fixed, dict(zip("abc", reach[0])))[0] == "cab"
# distractors of that step: acb (the printed label), cba, abc all differ from the reached order
assert all(o != "cab" for o in ("acb", "cba", "abc"))
# node counts on paths (steps 2, 3): longest path 3 test nodes, root "yes" path 2 test nodes
depths = [len(run(fixed, dict(zip("abc", p)))[1]) for p in itertools.permutations((1, 2, 3))]
assert max(depths) == 3 and min(depths) == 2
print("Q4b: printed leaves sort 4/6 inputs (2 wrong, 4 distinct leaves); corrected leaves cba,cab,bac,bca,abc,acb sort all 6")


# ---- Q4a: find_miss as printed (0-based, B[n+1]) vs the fix (B[n])
def find_miss(A, B, i, j, last):
    n = len(A)
    if A[0] != B[0]: return B[0]
    if i > j: return B[n + 1] if last == "official" else B[n]
    m = (i + j) // 2
    if A[m] != B[m] and A[m - 1] == B[m - 1]: return B[m]
    if A[m] == B[m]: return find_miss(A, B, m + 1, j, last)
    return find_miss(A, B, i, m - 1, last)

random.seed(2)
bad = ends = 0
for _ in range(4000):
    n = random.randint(1, 30)
    B = sorted(random.sample(range(1, 100), n + 1)); x = random.choice(B)
    A = [v for v in B if v != x]
    try: ok = find_miss(A, B, 0, n - 1, "official") == x
    except IndexError: ok = False
    bad += not ok; ends += x == B[-1]
    if not ok: assert x == B[-1]
    assert find_miss(A, B, 0, n - 1, "fixed") == x
assert bad == ends > 0
assert find_miss([1, 2, 3], [1, 2, 3, 4], 0, 2, "fixed") == 4
print("Q4a: printed find_miss fails on", bad, "of 4000 (all missing-at-end); fixed: 0 failures")


# ---- Q5a: month counter reset 0 (printed) vs 1 (fix)
def month_counter(months, reset):
    last, cnt = None, 0
    for mth in months:
        if mth == last: cnt += 1
        else: cnt, last = reset, mth
    return cnt
seq = [1] * 7 + [2] * 50
assert month_counter(seq, 0) == 49 and month_counter(seq, 1) == 50
print("Q5a: 50 sales in a new month -> 49 with reset 0, 50 with reset 1")
print("19B-A fix checks OK")
