# SAMP-1 step checks (every expected value quoted by gen_SAMP-1.py steps). ASCII only.
# Run: PYTHONUTF8=1 py -I tools/verify/SAMP-1/steps_check.py   (from the app root)
import sys, json, pathlib, itertools, math
HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent))
import ds_steps_common as C

F = {}
HF = C.hashing_facts()

# ---- Q2a: keys 13..65 all have hash 0; cells of 26 in T1 and T2
assert all(k % 13 == 0 for k in (13, 26, 39, 52, 65)) and 26 % 13 == 0
F["Q2a_hash"] = 26 % 13
F["Q2a_T1"], F["Q2a_T2"] = HF["sampA_T1_26"], HF["sampA_T2_26"]
# ---- Q2b: linear probing
F["Q2b_distinct"], F["Q2b_run"], F["Q2b_worst"] = HF["linear_distinct_7"], HF["max_run"], HF["linear_worst_probes"]
# ---- Q2c: quadratic counterexample (the corrected verdict is "false")
F["Q2c_off3"], F["Q2c_distinct"], F["Q2c_probes"] = HF["off_i3"], HF["quad_distinct_7"], HF["probes_65"]
assert F["Q2c_probes"] > 7                      # 7 attempts are not enough: the claim is false

# ---- Q3a / Q3c / Q4
FM = C.find_miss_facts()
F["Q3a_idx"], F["Q3a_missing"] = FM["first_mismatch"], 7
# fix (B[n+1] -> B[n]): missing-at-end case, A=[1,2,3], B=[1,2,3,4]: the answer sits at B[n], n=3
assert C.find_miss([1, 2, 3], [1, 2, 3, 4], 0, 2) == 4
F["Q3a_end_idx"] = [1, 2, 3, 4].index(4)
assert F["Q3a_end_idx"] == 3
# Buy fix: a new month resets the counter to 1, so 50 sales in that month count 50
def _month_counter(months, reset):
    last, cnt = None, 0
    for mth in months:
        if mth == last: cnt += 1
        else: cnt, last = reset, mth
    return cnt
F["Q4a_month50"] = _month_counter([1] * 3 + [2] * 50, 1)
assert F["Q4a_month50"] == 50 and _month_counter([1] * 3 + [2] * 50, 0) == 49
LB = C.lower_bound_facts()
F["Q3c_h8"] = LB["height8"]
assert [round(math.log2(math.factorial(n)) / n, 2) for n in (10, 100, 1000)] == [2.18, 5.25, 8.53]
SF = C.supply_facts()
F["Q4a_pr49"], F["Q4a_pr50"], F["Q4b_third"] = SF["pr49"], SF["pr50"], SF["third_supply"]

# ---- Q3b: heap sort (CLRS max-heap) on three distinct values; log the comparisons as letters
def heapsort_log(perm):
    """perm: values of (a,b,c). returns (comparison list, output letters in increasing order)"""
    names = "abc"
    A = [(perm[i], names[i]) for i in range(3)]
    log = []
    def gt(i, j):
        log.append((A[i][1], A[j][1])); return A[i][0] > A[j][0]
    def heapify(i, size):
        l, r = 2 * i + 1, 2 * i + 2
        m = i
        if l < size and gt(l, m): m = l
        if r < size and gt(r, m): m = r
        if m != i:
            A[i], A[m] = A[m], A[i]; heapify(m, size)
    heapify(0, 3)                       # build-max-heap (only the root has children)
    A[0], A[2] = A[2], A[0]             # extract the maximum
    heapify(0, 2)
    A[0], A[1] = A[1], A[0]
    return log, tuple(x[1] for x in A)
logs, outs = {}, {}
for perm in itertools.permutations((1, 2, 3)):
    log, out = heapsort_log(perm)
    assert [dict(zip("abc", perm))[x] for x in out] == sorted(perm)           # a correct sort
    logs[perm], outs[perm] = log, out
assert all(len(l) == 3 for l in logs.values())
F["Q3b_comparisons"] = 3
F["Q3b_leaves"] = len(set(outs.values()))              # one reachable leaf per permutation
assert F["Q3b_leaves"] == 6
# on the branch b>a, c>b (so a<b<c) the third comparison repeats (b,a); no other comparison occurs there
branch = [p for p in logs if p[1] > p[0] and p[2] > p[1]]
assert branch == [(1, 2, 3)] and logs[(1, 2, 3)] == [("b", "a"), ("c", "b"), ("b", "a")]
assert logs[(1, 2, 3)][2] == ("b", "a") and ("c", "a") not in logs[(1, 2, 3)] and ("a", "c") not in logs[(1, 2, 3)]
# a branch on which the third comparison is NOT a repeat: b>a, c<b
assert logs[(2, 3, 1)][2] == ("a", "c")

EXPECT = {
    "SAMP-1-Q2a": [F["Q2a_hash"], F["Q2a_T1"], F["Q2a_T2"]],
    "SAMP-1-Q2b": [F["Q2b_distinct"], F["Q2b_run"], F["Q2b_worst"]],
    "SAMP-1-Q2c": [F["Q2c_off3"], F["Q2c_distinct"], F["Q2c_probes"]],
    "SAMP-1-Q3a": [F["Q3a_idx"], F["Q3a_missing"], F["Q3a_end_idx"]],
    "SAMP-1-Q3b": [F["Q3b_comparisons"], F["Q3b_leaves"]],
    "SAMP-1-Q3c": [F["Q3c_h8"]],
    "SAMP-1-Q4a": [F["Q4a_pr49"], F["Q4a_pr50"], F["Q4a_month50"]],
    "SAMP-1-Q4b": [F["Q4b_third"]],
}
raw = pathlib.Path(__file__).resolve().parents[2] / "raw" / "SAMP-1.json"
if raw.exists():
    data = json.loads(raw.read_text(encoding="utf-8"))
    ids = {}
    for q in data["questions"]:
        ids[f'SAMP-1-Q{q["num"]}{"abcdefghij"["אבגדהוזחטי".index(q["part"])] if q.get("part") else ""}'] = q
    for qid, want in EXPECT.items():
        got = [s["answer"] for s in ids[qid].get("steps", []) if s["type"] == "numeric"]
        assert got == want, (qid, got, want)
    print("generated numeric steps match:", len(EXPECT), "items")
print("SAMP-1 step checks OK")
