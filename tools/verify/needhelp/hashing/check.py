# -*- coding: utf-8 -*-
"""Machine check of the guided course "hashing": every stored answer (own mcq, numeric / order / findbug steps,
and the bank questions used in the boss) is recomputed with sim.py and compared with what the level files store.
Also re-verifies each numeric/structural claim made in the lessons.

Run from the app root:   PYTHONUTF8=1 py tools/verify/needhelp/hashing/check.py
"""
import itertools, json, pathlib, re, subprocess, sys
from math import gcd

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[3]
sys.path.insert(0, str(HERE))
from sim import *  # noqa: E402,F403

out = subprocess.run(["node", "tools/course_load.js"], cwd=ROOT, capture_output=True, text=True, encoding="utf-8").stdout
loaded = json.loads(out)
assert not [e for e in loaded["errors"] if e.startswith("courses/hashing/")], loaded["errors"]
Q = {}
LEVEL = {}
for lv in loaded["levels"]:
    if lv["courseId"] != "hashing":
        continue
    L = lv["level"]
    LEVEL[L["id"]] = L
    for q in L["questions"]:
        if "id" in q:
            Q[q["id"]] = q
BANK = {x["id"]: x for x in json.load(open(ROOT / "questions.json", encoding="utf-8"))["questions"]}
assert len(LEVEL) == 8, sorted(LEVEL)
checked = set()


def num(qid, expected, mentions=()):
    q = Q[qid]
    s = q["step"]
    assert s["type"] == "numeric", qid
    assert s["answer"] == expected and s.get("tol", 0) == 0, (qid, s["answer"], expected)
    for m in mentions:
        assert m in s["prompt"], (qid, m)
    checked.add(qid)


def mcq(qid, truths, mentions=()):
    """truths: list of (substring of option value, bool computed by the simulator). Every option must be matched
    by exactly one substring, exactly one is true, and it must be the stored correctId."""
    q = Q[qid]
    assert "options" in q, qid
    assert len(truths) == len(q["options"]), qid
    true_ids = []
    for sub, t in truths:
        hits = [o for o in q["options"] if sub in o["value"]]
        assert len(hits) == 1, (qid, sub, len(hits))
        if t:
            true_ids.append(hits[0]["id"])
    assert len(true_ids) == 1, (qid, true_ids)
    assert q["correctId"] == true_ids[0], (qid, q["correctId"], true_ids)
    for m in mentions:
        assert m in q["question"], (qid, m)
    checked.add(qid)


# ================================================================== lesson claims
# --- C04: quadratic reach
primes = [p for p in range(3, 60) if all(p % d for d in range(2, p))]
for p in primes:
    for c1 in range(p):
        for c2 in range(1, p):
            pr = quadratic(lambda k: 0, p, c1, c2)
            assert len(reach(pr, 0, p)) == (p + 1) // 2 == len(reach_long(pr, 0, p)), (p, c1, c2)
sq = lambda m: quadratic(lambda k: k % m, m)
assert probe_list(quadratic(lambda k: 0, 7), 0, 7) == [0, 1, 4, 2, 2, 4, 1]
assert sorted(reach(sq(7), 3, 7)) == [0, 3, 4, 5]
assert [len(reach(sq(m), 0, m)) for m in (7, 11, 13)] == [4, 6, 7]
assert sorted(reach(quadratic(lambda k: 0, 10), 0, 10)) == [0, 1, 4, 5, 6, 9]
assert len(reach(quadratic(lambda k: 0, 16), 0, 16)) == 4
q513 = quadratic(lambda k: 0, 13, 5, 1)
assert probe_list(q513, 0, 7) == [0, 6, 1, 11, 10, 11, 1]
assert [(i * i + 5 * i) % 13 for i in range(13)] == [0, 6, 1, 11, 10, 11, 1, 6, 0, 9, 7, 7, 9]
assert len({q513(0, i) for i in range(7)}) == 5 and sorted(reach(q513, 0, 13)) == [0, 1, 6, 7, 9, 10, 11]
# --- C05: gcd formula for double hashing
for m in range(2, 31):
    for s in range(1, m + 1):
        pr = double(lambda k: 0, lambda k: s, m)
        assert len(reach(pr, 0, m)) == m // gcd(s, m) == len(reach_long(pr, 0, m)), (m, s)
assert all(len(reach(double(lambda k: k % 11, lambda k: s, 11), 0, 11)) == 11 for s in range(1, 11))
# --- C06: iff characterisation of insertion orders (all permutations, small random-ish tables)
def constraints_ok(m, h, table, order):
    pos = {k: i for i, k in enumerate(order)}
    for j, x in table.items():
        c = h(x)
        while c != j:
            if c not in table:
                return False
            if pos[table[c]] > pos[x]:
                return False
            c = (c + 1) % m
    return True
import random
rnd = random.Random(7)
for _ in range(300):
    m = rnd.choice([5, 7, 10])
    h = lambda k, m=m: k % m
    keys = rnd.sample(range(0, 60), rnd.randint(2, 5))
    base = list(keys)
    o, _ = build(m, linear(h, m), base)
    table = o.show()
    for order in itertools.permutations(keys):
        assert could_be_insertion_order(m, h, table, order) == constraints_ok(m, h, table, order)

# ================================================================== C01
h10 = lambda k: k % 10
h7 = lambda k: k % 7
num("C01-Q1", h7(23), ["23"]); assert h7(23) == 2
cnt = sum(1 for k in (12, 19, 25, 33, 40, 47) if h7(k) == 5)
assert [h7(k) for k in (12, 19, 25, 33, 40, 47)] == [5, 5, 4, 5, 5, 5]
num("C01-Q2", cnt, ["12, 19, 25, 33, 40, 47"])
num("C01-Q3", 15 / 10, ["15", "10"])
ch = Chain(5, lambda k: k % 5)
for k in (3, 8, 13, 18):
    ch.insert(k)
assert ch.t[3] == [18, 13, 8, 3]
num("C01-Q4", ch.search_cost(3), ["3, 8, 13, 18"])
# lesson example (3,8,13): list 13->8->3, searching 3 costs 3
ch3 = Chain(5, lambda k: k % 5)
for k in (3, 8, 13):
    ch3.insert(k)
assert ch3.t[3] == [13, 8, 3] and ch3.search_cost(3) == 3
# Q5: deterministic - a random hash moves the key; simulate
import random as _r
rr = _r.Random(1)
hr = lambda k, m=11: ((7 + k) * rr.randint(0, 10 ** 6)) % m
tr = Chain(11, hr)
miss = 0
for k in range(200):
    c1_ = hr(k)
    c2_ = hr(k)
    miss += c1_ != c2_
assert miss > 100  # same key, different cells on repeated calls: lookups would fail
mcq("C01-Q5", [("אותו מפתח עלול לקבל תא אחר", True), ("גדולה מ-$m$", False), ("לא מפזרת", False), ("גורם העומס", False)])
# Q6: 3 occupied cells hold n keys; alpha=1/2 but a list has ~n/3
n = 30
ch6 = Chain(2 * n, lambda k: k % 3)
for k in range(n):
    ch6.insert(k)
assert max(len(l) for l in ch6.t) == n // 3 and n / (2 * n) == 0.5
assert ch6.search_cost(0) >= n // 3 - 1  # last-inserted-first, key 0 sits at the tail: ~n/3
mcq("C01-Q6", [("זמן לינארי", True), ("$O(1)$ בוודאות", False), ("$O(\\log n)$", False), ("אי אפשר לחפש", False)])

# ================================================================== C02
def lin(m, h=None):
    h = h or (lambda k: k % m)
    return linear(h, m)

o, r = build(11, lin(11), [5, 16, 27]); num("C02-Q1", r[2][0], ["5, 16, 27"]); assert r[2][0] == 7
o, r = build(10, lin(10), [19, 29, 39]); num("C02-Q2", r[2][0], ["19, 29, 39"]); assert r[2][0] == 1
o, r = build(10, lin(10), [13, 24, 35, 43]); num("C02-Q3", r[3][1], ["43"]); assert o.show() == {3: 13, 4: 24, 5: 35, 6: 43}
# Q4: order step = the recipe; check by executing the recipe as stated and comparing with sim
def recipe_insert(T, m, hk, k):
    steps = []
    steps.append("home")                       # 1 compute h(k)
    i = 0
    steps.append("test-home")                  # 2 check home, place if free
    while T[(hk(k) + i) % m] is not None:
        i += 1                                 # 3 advance i, look at (h+i) mod m
        steps.append("advance")
    T[(hk(k) + i) % m] = k                     # 4 repeat until free, place
    steps.append("place")
    return steps
T = [None] * 10
for k in (13, 24, 35):
    recipe_insert(T, 10, h10, k)
st = recipe_insert(T, 10, h10, 43)
assert st[0] == "home" and st[1] == "test-home" and st[-1] == "place" and st.count("advance") == 3
assert Open(10, lin(10)).insert(13) == (3, 0)
assert [i for i, v in enumerate(T) if v is not None] == [3, 4, 5, 6]
lines = Q["C02-Q4"]["step"]["lines"]
assert len(lines) == 4 and "מחשבים את תא הבית" in lines[0] and "פנוי" in lines[1] and "מגדילים" in lines[2] and "עד שמגיעים" in lines[3]
checked.add("C02-Q4")
# Q5: findbug - run the correct and the buggy loop; the buggy one crashes on wraparound, the correct one matches sim
def ins_buggy(T, m, hk, k):
    i = 0
    while T[(hk(k) + i)] is not None:   # missing % m
        i += 1
    T[(hk(k) + i) % m] = k
def ins_ok(T, m, hk, k):
    i = 0
    while T[(hk(k) + i) % m] is not None:
        i += 1
    T[(hk(k) + i) % m] = k
Ta = [None] * 10; Tb = [None] * 10
for k in (19, 29):
    ins_ok(Ta, 10, h10, k)
for k in (19,):
    ins_buggy(Tb, 10, h10, k)
try:
    ins_buggy(Tb, 10, h10, 29)
    raise SystemExit("buggy loop should have crashed")
except IndexError:
    pass
oo, _ = build(10, lin(10), [19, 29]); assert {i: v for i, v in enumerate(Ta) if v is not None} == oo.show()
s5 = Q["C02-Q5"]["step"]
assert s5["type"] == "findbug" and s5["bugIndex"] == 1 and "% m" not in s5["lines"][1] and "% m" in s5["lines"][3]
checked.add("C02-Q5")
# Q6: keys 18,27,9,36 in m=9
o, r = build(9, lin(9), [18, 27, 9, 36]); assert o.show() == {0: 18, 1: 27, 2: 9, 3: 36}
mcq("C02-Q6", [("$0,1,2,3$ בהתאמה", True), ("בלי אף התנגשות", False), ("לא נכנס", False), ("$0,2,4,6$", False)])
assert [h for h in map(lambda k: k % 9, (18, 27, 9, 36))] == [0, 0, 0, 0]

# ================================================================== C03
o, _ = build(10, lin(10), [15, 25, 35, 6]); assert o.show() == {5: 15, 6: 25, 7: 35, 8: 6}
num("C03-Q1", o.search(35)[1], ["35"]); assert o.search(35) == (True, 3)
num("C03-Q2", o.search(45)[1], ["45"]); assert o.search(45) == (False, 5)
o2, _ = build(10, lin(10), [15, 25, 35, 6]); o2.delete(25, mark=False)
assert o2.search(35) == (False, 2)                        # wrongly "not found" though 35 is in the table
assert 35 in o2.show().values()
mcq("C03-Q3",
    [("לא נמצא\", אף ש-$35$", True), ("אחרי שלושה תאים, כרגיל", False), ("לולאה אינסופית", False), ("\"נמצא\" אחרי שני תאים", False)])
o3, _ = build(10, lin(10), [15, 25, 35, 6]); o3.delete(25)
assert o3.t[6] == DELETED and o3.search(35) == (True, 3)
num("C03-Q4", o3.search(35)[1], ["35"])
cell, coll = o3.insert(45); assert cell == 6
num("C03-Q5", cell, ["45"])
assert abs(o3.load() - 0.4) < 1e-9
o4, _ = build(10, lin(10), [15, 25, 35, 6]); o4.delete(25)
assert abs(o4.load() - 0.3) < 1e-9 and o4.used() == 4          # alpha counts live keys; the marker still occupies a probe
num("C03-Q6", 3 / 10, ["ארבעה"]); assert 3 / 10 == 0.3
# lesson: after marker, 45 would still examine 5 cells
assert o4.search(45) == (False, 5)

# ================================================================== C04
p7 = quadratic(lambda k: k % 7, 7)
num("C04-Q1", p7(10, 2), ["10"]); assert p7(10, 2) == 0
num("C04-Q2", len(reach(quadratic(lambda k: 0, 11), 0, 11)), ["11"]); assert sorted(reach(quadratic(lambda k: 0, 11), 0, 11)) == [0, 1, 3, 4, 5, 9]
assert [(i * i) % 11 for i in range(11)] == [0, 1, 4, 9, 5, 3, 3, 5, 9, 4, 1]
num("C04-Q3", len(reach(q513, 0, 13)), ["13"])
oq = Open(7, p7)
for c, v in {0: 100, 3: 103, 4: 104, 5: 105}.items():
    oq.t[c] = v
assert oq.insert(10)[0] is None and sorted(reach(p7, 10, 7)) == [0, 3, 4, 5]
assert [i for i, v in enumerate(oq.t) if v is None] == [1, 2, 6]
assert probe_list(p7, 10, 7) == [3, 4, 0, 5, 5, 0, 4]
mcq("C04-Q4", [("לא ייכנס לעולם", True), ("לתא $6$", False), ("לתא $1$", False), ("לתא $2$ אחרי שבעה", False)])
o, r = build(11, quadratic(lambda k: k % 11, 11), [0, 11, 22, 33]); assert o.show() == {0: 0, 1: 11, 4: 22, 9: 33}
num("C04-Q5", r[3][0], ["0, 11, 22, 33"])
# Q6: for a prime m, some key fails with a free cell present (m=7, m=13 examples, all c1)
for p, c1, c2 in [(7, 0, 1), (7, 3, 2), (13, 5, 1), (11, 1, 1)]:
    pr = quadratic(lambda k, p=p: k % p, p, c1, c2)
    oo = Open(p, pr)
    R = reach(pr, 0, p)
    for c in R:
        oo.t[c] = 1000 + c
    assert oo.insert(p * 5)[0] is None and any(v is None for v in oo.t)   # key with home 0 fails, free cells exist
    assert len(R) < p
mcq("C04-Q6", [("ייתכן שמפתח חדש לא ייכנס", True), ("תמיד, כי $i^2$ מקבל את כל הערכים", False),
               ("תמיד תוך $m$ ניסיונות", False), ("תמורה של כל תאי הטבלה", False)])
assert sorted({(i * i) % 7 for i in range(7)}) == [0, 1, 2, 4]   # "squares mod 7 are only 0,1,2,4"

# ================================================================== C05
h11 = lambda k: k % 11
h2a = lambda k: 1 + k % 5
o, r = build(11, double(h11, h2a, 11), [3, 14, 25, 36])
assert o.show() == {3: 3, 4: 25, 5: 36, 8: 14} and [h2a(k) for k in (14, 25, 36)] == [5, 1, 2]
num("C05-Q1", r[3][0], ["3, 14, 25, 36"])
num("C05-Q2", len(reach(double(lambda k: k % 10, lambda k: 5, 10), 4, 10)), ["5"])
assert sorted(reach(double(lambda k: k % 10, lambda k: 5, 10), 4, 10)) == [4, 9]
num("C05-Q3", len(reach(double(lambda k: 0, lambda k: 6, 15), 0, 15)), ["15"])
assert probe_list(double(lambda k: 0, lambda k: 6, 15), 0, 6) == [0, 6, 12, 3, 9, 0]
def valid_h2(m, h1, h2, keys=range(2000)):
    """Valid <=> deterministic (assumed true for non-random) and every key's probe sequence covers all m cells."""
    return all(len(reach(double(h1, h2, m), k, m)) == m for k in keys)
mq16 = lambda k: k % 16
mcq("C05-Q4", [("2\\cdot(k \\bmod 7)+1", valid_h2(16, mq16, lambda k: 2 * (k % 7) + 1)),
               ("1+(k \\bmod 5)", valid_h2(16, mq16, lambda k: 1 + k % 5)),
               ("h_2(k)=k \\bmod 7$", valid_h2(16, mq16, lambda k: k % 7)),
               ("\\text{random}(k)", False)])           # random: not a function of k, rejected by definition
mq11 = lambda k: k % 11
mcq("C05-Q5", [("1+(k \\bmod 9)", valid_h2(11, mq11, lambda k: 1 + k % 9)),
               ("h_2(k)=k \\bmod 9$", valid_h2(11, mq11, lambda k: k % 9)),
               ("h_2(k)=k \\bmod 11$", valid_h2(11, mq11, lambda k: k % 11)),
               ("\\text{random}(k) \\bmod 11", False)])
oo = Open(10, double(lambda k: k % 10, lambda k: 5, 10))
oo.t[4], oo.t[9] = 44, 99
assert oo.insert(14)[0] is None and sum(v is None for v in oo.t) == 8
num("C05-Q6", sum(v is None for v in oo.t), ["4", "9", "5"])
# the lesson's step-0 claim
assert len(reach(double(lambda k: 3, lambda k: 0, 11), 0, 11)) == 1

# ================================================================== C06
tabA = {3: 13, 4: 24, 5: 33, 6: 45}
def before_count(m, h, table, key):
    cell = [j for j, v in table.items() if v == key][0]
    c, cnt = h(key), 0
    while c != cell:
        assert c in table
        cnt += 1
        c = (c + 1) % m
    return cnt
num("C06-Q1", before_count(10, h10, tabA, 33), ["33"])
validA = [o for o in itertools.permutations(tabA.values()) if could_be_insertion_order(10, h10, tabA, o)]
assert sorted(validA) == [(13, 24, 33, 45), (24, 13, 33, 45)]
f = lambda seq: could_be_insertion_order(10, h10, tabA, seq)
mcq("C06-Q2", [("$13, 24, 33, 45$", f((13, 24, 33, 45))), ("$33, 13, 24, 45$", f((33, 13, 24, 45))),
               ("$45, 13, 24, 33$", f((45, 13, 24, 33))), ("$13, 33, 24, 45$", f((13, 33, 24, 45)))])
assert Open(10, lin(10)).insert(0) and True
for seq, cell in (((13, 33, 24, 45), 4), ((33, 13, 24, 45), 3)):
    oo, rr = build(10, lin(10), list(seq)); assert [c for k, c in zip(seq, (rr[i][0] for i in range(4))) if k == 33][0] == cell
oo, rr = build(10, lin(10), [45, 13, 24, 33]); assert oo.show()[5] == 45     # 45 first lands in its own home 5
tabB = {0: 20, 1: 11, 2: 31, 3: 12}
g = lambda seq: could_be_insertion_order(10, h10, tabB, seq)
mcq("C06-Q3", [("$11, 12, 31, 20$", not g((11, 12, 31, 20))), ("$20, 11, 31, 12$", not g((20, 11, 31, 12))),
               ("$11, 20, 31, 12$", not g((11, 20, 31, 12))), ("$11, 31, 12, 20$", not g((11, 31, 12, 20)))])
oo, rr = build(10, lin(10), [11, 12, 31, 20]); assert oo.show()[2] == 12      # 12 before 31 lands on its home 2
cntB = sum(1 for o in itertools.permutations(tabB.values()) if could_be_insertion_order(10, h10, tabB, o))
assert len(list(itertools.permutations(tabB.values()))) == 24
num("C06-Q4", cntB, ["24"]); assert cntB == 4
tabC = {3: 13, 5: 23}
assert not any(could_be_insertion_order(10, h10, tabC, o) for o in itertools.permutations(tabC.values()))
assert linear_table_from(10, h10, (13, 23)) == {3: 13, 4: 23} and linear_table_from(10, h10, (23, 13)) == {3: 23, 4: 13}
mcq("C06-Q5", [("לא. $23$ בבית $3$", True), ("כן, $13, 23$", False), ("כן, $23, 13$", False), ("כן, אבל רק אם נמחק", False)])
tabD = {9: 19, 0: 29, 1: 39}
num("C06-Q6", before_count(10, h10, tabD, 39), ["39"])
assert [o for o in itertools.permutations(tabD.values()) if could_be_insertion_order(10, h10, tabD, o)] == [(19, 29, 39)]

# ================================================================== C07
c1_ = lambda x: x % 5
c2_ = lambda x: (x // 5) % 5
T1, T2, tr = cuckoo_build(5, c1_, c2_, [3, 8, 13])
assert T1 == [None, None, None, 13, None] and T2 == [3, 8, None, None, None]
num("C07-Q1", T2.index(8), ["3, 8, 13"])
T1x, T2x = list(T1), list(T2)
ok, kicks, trace = cuckoo_insert(T1x, T2x, c1_, c2_, 18)
evicted = sum(1 for (_, _, _, old) in trace if old is not None)
assert ok and evicted == 1 and T1x[3] == 18 and T2x[2] == 13
num("C07-Q2", evicted, ["18"])
Ta_, Tb_ = [None] * 5, [None] * 5
Ta_[3] = 3
ok, kicks, trace = cuckoo_insert(Ta_, Tb_, c1_, c2_, 8)
assert ok and trace == [(8, 1, 3, 3), (3, 2, 0, None)]
s3 = Q["C07-Q3"]["step"]
assert s3["type"] == "order" and len(s3["lines"]) == 3
assert "$8$ מונח" in s3["lines"][0] and "מגרש את $3$" in s3["lines"][0] and "עובר" in s3["lines"][1] and "T_2[0]" in s3["lines"][1] and "ריק" in s3["lines"][2]
checked.add("C07-Q3")
T1, T2, tr = cuckoo_build(5, c1_, c2_, [12, 7, 22, 17])
assert T1 == [None, None, 17, None, None] and T2 == [None, 7, 12, None, 22]
inT2 = sorted(v for v in T2 if v is not None)
mcq("C07-Q4", [("$7, 12, 22$", inT2 == [7, 12, 22]), ("$12, 17$", inT2 == [12, 17]), ("$7, 17, 22$", inT2 == [7, 17, 22]), ("$7, 12, 17, 22$", inT2 == [7, 12, 17, 22])])
T1, T2, tr = cuckoo_build(5, c1_, c2_, [11, 12, 32, 6])
assert T1 == [None, 6, 12, None, None] and T2 == [None, 32, 11, None, None] and all(t[1] for t in tr)
ok, kicks, trace7 = cuckoo_insert(T1, T2, c1_, c2_, 7, limit=200)
assert not ok and [t[3] for t in trace7[:5]] == [12, 11, 6, 32, 7]      # 12, 11, 6, 32 and 7 itself get evicted in turn
states = [(t[0], t[1], t[2]) for t in trace7]
assert len(set(states)) < len(states)                                  # a state repeats: a real cycle
mcq("C07-Q5", [("מעגל של גירושים", not ok), ("ואיש לא מגורש", False), ("ללא גירוש כי $T_1[2]$ תפוס", False), ("מגורש פעם אחת ואז ההכנסה מסתיימת", False)])
# lookups touch at most two cells: every key, in every reachable cuckoo state, lives only in T1[h1] or T2[h2]
T1, T2, tr = cuckoo_build(5, c1_, c2_, [12, 7, 22, 17])
for x in (12, 7, 22, 17):
    assert T1[c1_(x)] == x or T2[c2_(x)] == x
num("C07-Q6", 2, [])

# ================================================================== C08 (boss) - bank answers checked against the sim
bank_ids = [q["bankId"] for q in LEVEL["C08"]["questions"]]
assert bank_ids == ["24B-A-Q35", "24S-A-Q9", "21B-B-Q1e", "24B-B-Q25", "19B-A-Q6c", "24B-A-Q42"], bank_ids
for b in bank_ids:
    x = BANK[b]
    assert x["topic"] == "hashing" and x.get("official") is True and x.get("solutionSource") == "official-pdf" and not x.get("hold"), b
assert "SAMP-1-Q2c" not in bank_ids

def bank_opt(qid, oid):
    return [o for o in BANK[qid]["options"] if o["id"] == oid][0]["value"]

# 24B-A-Q35: 7,1,6,16,14,8,21,12 into m=11, h(x,i)=(x mod 11 + i((x mod 7)+1)) mod 11
o, r = build(11, double(lambda x: x % 11, lambda x: x % 7 + 1, 11), [7, 1, 6, 16, 14, 8, 21, 12])
cellof = {k: r[i][0] for i, k in enumerate([7, 1, 6, 16, 14, 8, 21, 12])}
truth = {}
for oid in "abcd":
    m_ = re.search(r"המפתח \$(\d+)\$ ייכנס לתא באינדקס \$(\d+)\$", bank_opt("24B-A-Q35", oid))
    truth[oid] = cellof[int(m_.group(1))] == int(m_.group(2))
assert [oid for oid, t in truth.items() if t] == ["d"] == [BANK["24B-A-Q35"]["correctId"]], truth
# 24S-A-Q9
rules = {
    "a": lambda: valid_h2(14, lambda x: x % 14, lambda x: (x % 5) + 1),
    "b": lambda: valid_h2(13, lambda x: x % 13, lambda x: x % 5),
    "c": lambda: valid_h2(13, lambda x: x % 13, lambda x: (x % 7) + 1),
    "d": lambda: False,   # random(x)
}
texts = {oid: bank_opt("24S-A-Q9", oid) for oid in "abcd"}
ns = {k: v.replace(" ", "").replace("\\bmod", "%") for k, v in texts.items()}
assert "x%14" in ns["a"] and "(x%5)+1" in ns["a"] and ")%14" in ns["a"]
assert "x%13" in ns["b"] and "i\\left(x%5\\right)" in ns["b"] and ")%13" in ns["b"]
assert "x%13" in ns["c"] and "(x%7)+1" in ns["c"] and ")%13" in ns["c"] and "random" in ns["d"]
assert [oid for oid in "abcd" if rules[oid]()] == ["c"] == [BANK["24S-A-Q9"]["correctId"]]
# 21B-B-Q1e: m=20, h2(k)=9 -> probes are a permutation of the 20 cells
assert all(sorted(probe_list(double(lambda k: k % 20, lambda k: 9, 20), k, 20)) == list(range(20)) for k in range(100))
assert BANK["21B-B-Q1e"]["verdict"] is True and BANK["21B-B-Q1e"]["solution"].startswith("נכון")
# 24B-B-Q25
tabQ = {1: 61, 2: 52, 3: 93, 4: 11, 5: 85, 6: 44, 7: 73}
seqs = {}
for oid in "abcd":
    seqs[oid] = [int(v) for v in re.findall(r"\d+", bank_opt("24B-B-Q25", oid).replace("$", " "))]
    assert len(seqs[oid]) == 7
good = [oid for oid in "abcd" if could_be_insertion_order(10, h10, tabQ, seqs[oid])]
assert good == ["d"] == [BANK["24B-B-Q25"]["correctId"]], good
# 19B-A-Q6c: m=13, quadratic h(k)+i^2+5i; the official table with 6 keys blocks key 65 (home 0) for 7 probes -> statement false
qq = quadratic(lambda k: k % 13, 13, 5, 1)
tab = Open(13, qq)
for k in (0, 13, 26, 39, 52, 2):
    assert tab.insert(k)[0] is not None
assert tab.show() == {0: 0, 1: 26, 2: 2, 6: 13, 10: 52, 11: 39}
assert all(tab.t[qq(65, i)] is not None for i in range(7))              # 7 probes all blocked
assert tab.insert(65)[1] == 9 and tab.show().get(9) == 65               # the free cell 9 is only reached at i=9
assert BANK["19B-A-Q6c"]["solution"].startswith("לא נכון")
# 24B-A-Q42
h1b = lambda x: x % 11; h2b = lambda x: (x // 11) % 11
T1, T2, tr = cuckoo_build(11, h1b, h2b, [100, 75, 6, 53, 105, 67])
t2 = sorted(v for v in T2 if v is not None)
assert t2 == [6, 75, 100]
assert sorted(int(v) for v in re.findall(r"\d+", bank_opt("24B-A-Q42", BANK["24B-A-Q42"]["correctId"]))) == t2
assert BANK["24B-A-Q42"]["question"].count("T2") >= 1 or "השנייה" in BANK["24B-A-Q42"]["question"]
checked.update(bank_ids)

# ---------------------------------------------------------------- coverage: every own question was checked
own = {q for q in Q}
missing = own - checked
assert not missing, sorted(missing)
print("OK: %d own questions + %d bank questions + lesson claims verified" % (len(own), len(bank_ids)))
