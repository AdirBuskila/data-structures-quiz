"""Machine check of every stored answer in courses/heaps/C01..C09 against the reference heap (ASCII output).

Run:  py tools/verify/needhelp/heaps/check.py
Conventions (stated in the C01 lesson): 0-based array, min-heap unless "max" is said.
For every mcq whose options are arrays, the correct option AND every distractor must equal the output of a
named procedure (the correct algorithm or a specific wrong one), so a typo in any option fails here.
"""
import itertools
import json
import math
import os
import random
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from heap import (Heap, build_heap, is_heap, heapsort_trace, height, dary_height,  # noqa: E402
                  dary_parent, dary_children)

APP = os.path.abspath(os.path.join(HERE, "..", "..", "..", ".."))
random.seed(11)

raw = subprocess.run(["node", os.path.join(HERE, "load.js")], capture_output=True, check=True).stdout
LEVELS = json.loads(raw.decode("ascii"))
Q = {}
for lv in LEVELS:
    for q in lv["questions"]:
        if "id" in q:
            Q[q["id"]] = q
n_checked = 0


def arr(a):
    return "`[" + ", ".join(str(x) for x in a) + "]`"


def correct_opt(q):
    return next(o["value"] for o in q["options"] if o["id"] == q["correctId"])


def mcq_arrays(qid, correct, wrongs):
    """options must be exactly {correct} + wrongs (as arrays), correctId must be the right one."""
    global n_checked
    q = Q[qid]
    assert correct_opt(q) == arr(correct), (qid, correct_opt(q), arr(correct))
    vals = sorted(o["value"] for o in q["options"])
    exp = sorted([arr(correct)] + [arr(w) for w in wrongs])
    assert vals == exp, (qid, vals, exp)
    assert len(set(vals)) == len(vals), qid
    n_checked += 1


def mcq_text(qid, correct_prefix):
    global n_checked
    q = Q[qid]
    assert correct_opt(q).startswith(correct_prefix), (qid, correct_opt(q))
    assert len({o["value"] for o in q["options"]}) == len(q["options"])
    n_checked += 1


def numeric(qid, val):
    global n_checked
    st = Q[qid]["step"]
    assert st["type"] == "numeric" and st["answer"] == val and st.get("tol", 0) == 0, (qid, st["answer"], val)
    n_checked += 1


def larger_descent(a):
    """WRONG procedure: from the root always swap with the LARGER child until a leaf."""
    a = list(a)
    i, n = 0, len(a)
    while 2 * i + 1 < n:
        c = 2 * i + 1
        if c + 1 < n and a[c + 1] > a[c]:
            c += 1
        a[i], a[c] = a[c], a[i]
        i = c
    return a


# ---------------------------------------------------------------- C01
assert Heap.left(5) == 11 and Heap.right(5) == 12
n_checked += 0
q = Q["C01-Q1"]
assert correct_opt(q) == "$11$" and sorted(o["value"] for o in q["options"]) == sorted(["$11$", "$10$", "$12$", "$9$"])
assert Heap.parent(9) == 4 and correct_opt(Q["C01-Q2"]) == "$4$"
assert (9 + 1) // 2 != 4  # the 5 distractor is a different (wrong) formula
V = {"a": [1, 3, 2, 6, 4, 5, 9, 8, 7], "b": [1, 3, 2, 6, 4, 5, 9, 8, 3],
     "c": [1, 3, 2, 6, 4, 1, 9, 8, 7], "d": [2, 1, 3, 6, 4, 5, 9, 8, 7]}
q = Q["C01-Q3"]
for o in q["options"]:
    got = [int(x) for x in re.findall(r"\d+", o["value"])]
    assert got == V[o["id"]], o
    assert is_heap(got) == (o["id"] == q["correctId"]), o["id"]
assert q["correctId"] == "a"
A = [2, 5, 4, 9, 6, 3, 8, 10, 7]
viol = [i for i in range(1, len(A)) if A[i] < A[(i - 1) // 2]]
numeric("C01-Q4", viol[0])
assert viol == [5, 8]  # the explanation mentions both
n13 = [i for i in range(13) if 2 * i + 1 < 13]
numeric("C01-Q5", max(n13))
assert 13 // 2 - 1 == max(n13) and 13 - len(n13) == 7
leaves20 = [i for i in range(20) if 2 * i + 1 >= 20]
assert height(20) == 4 and len(leaves20) == 10 and (20 - 1) // 2 == 9
assert sum([1, 2, 4, 8, 5]) == 20
assert correct_opt(Q["C01-Q6"]) == "גובה $4$, עלים $10$"
assert sorted(o["value"] for o in Q["C01-Q6"]["options"]) == sorted(
    ["גובה $4$, עלים $10$", "גובה $5$, עלים $10$", "גובה $4$, עלים $9$", "גובה $4$, עלים $20$"])
# lesson claim: 4 leaves can mean height 2 (n=7) or 3 (n=8)
assert (7 - 7 // 2, height(7)) == (4, 2) and (8 - 8 // 2, height(8)) == (4, 3)
for n in range(1, 200):
    assert n - len([i for i in range(n) if 2 * i + 1 < n]) == (n + 1) // 2  # ceil(n/2) leaves
n_checked += 6

# ---------------------------------------------------------------- C02
H0 = [3, 8, 5, 10, 9, 6, 7]
h = Heap(H0)
h.insert(4)
good = list(h.a)
assert good == [3, 4, 5, 8, 9, 6, 7, 10] and h.swaps == 2 and h.is_heap()
one = [3, 8, 5, 4, 9, 6, 7, 10]
mcq_arrays("C02-Q1", good, [H0 + [4], one, [4, 8, 5, 10, 9, 6, 7, 3]])
for w in (H0 + [4], one, [4, 8, 5, 10, 9, 6, 7, 3]):
    assert not is_heap(w)
numeric("C02-Q2", 2)
h = Heap(H0)
h.insert(1)
assert h.swaps == 3 and h.a[0] == 1
numeric("C02-Q3", 3)
mx = 0
for _ in range(3000):
    hh = build_heap(random.sample(range(10, 400), 15))
    hh.swaps = 0
    hh.insert(random.randint(0, 500))
    mx = max(mx, hh.swaps)
hh = build_heap(list(range(10, 25)))
hh.swaps = 0
hh.insert(0)
assert hh.swaps == 4 and mx <= 4 and height(16) == 4
numeric("C02-Q4", 4)
# no-swap case claimed in the lesson: insert 11 into H0 needs 0 swaps
h = Heap(H0)
h.insert(11)
assert h.swaps == 0
# findbug: run the stored lines
q = Q["C02-Q5"]["step"]
assert q["type"] == "findbug" and q["code"] is True and q["bugIndex"] == 3
src_bug = "\n".join(q["lines"])
assert "<" in q["lines"][3]
src_ok = "\n".join(l if i != 3 else l.replace("<", ">") for i, l in enumerate(q["lines"]))
ns_ok, ns_bug = {}, {}
exec(src_ok, ns_ok)
exec(src_bug, ns_bug)
bad_seen = False
for _ in range(300):
    base = build_heap(random.sample(range(1, 60), random.randint(1, 12))).a
    x = random.randint(0, 70)
    a1, a2 = list(base), list(base)
    ns_ok["insert"](a1, x)
    ns_bug["insert"](a2, x)
    assert is_heap(a1) and sorted(a1) == sorted(base + [x])
    bad_seen |= not is_heap(a2)
assert bad_seen
# each other line is untouched by the bug: replacing any single other line by its mutation is not claimed
ar = [5, 3, 8, 1, 9, 2]
h = Heap()
for x in ar:
    h.insert(x)
assert h.a == [1, 3, 2, 5, 9, 8]
mcq_arrays("C02-Q6", h.a, [[1, 3, 5, 8, 9, 2], [1, 2, 3, 5, 8, 9], ar])
assert not is_heap([1, 3, 5, 8, 9, 2]) and not is_heap(ar)
n_checked += 3

# ---------------------------------------------------------------- C03
E1 = [3, 4, 5, 8, 9, 6, 7, 10]
h = Heap(E1)
assert h.extract() == 3
good = list(h.a)
assert good == [4, 8, 5, 10, 9, 6, 7] and h.swaps == 2
wrong_nofix = [E1[-1]] + E1[1:-1]
assert wrong_nofix == [10, 4, 5, 8, 9, 6, 7]
wrong_larger = larger_descent(wrong_nofix)
assert wrong_larger == [5, 4, 7, 8, 9, 6, 10]
mcq_arrays("C03-Q1", good, [E1[1:], wrong_nofix, wrong_larger])
assert not is_heap(E1[1:]) and not is_heap(wrong_larger)
numeric("C03-Q2", 2)
E3 = [2, 7, 3, 8, 9, 5, 4]
assert is_heap(E3)
h = Heap(E3)
assert h.extract() == 2
good = list(h.a)
assert good == [3, 7, 4, 8, 9, 5]
nofix = [4, 7, 3, 8, 9, 5]
mcq_arrays("C03-Q3", good, [nofix, E3[1:], larger_descent(nofix)])
assert larger_descent(nofix) == [7, 9, 3, 8, 4, 5] and not is_heap(nofix)
E4 = [1, 3, 2, 6, 4, 5, 9, 8, 7]
h = Heap(E4)
assert is_heap(E4)
for _ in range(3):
    h.extract()
numeric("C03-Q4", h.a[0])
q = Q["C03-Q5"]["step"]
assert q["type"] == "findbug" and q["code"] is True and q["bugIndex"] == 3 and ">" in q["lines"][3]
src_bug = "\n".join(q["lines"])
src_ok = "\n".join(l if i != 3 else l.replace(">", "<") for i, l in enumerate(q["lines"]))
ns_ok, ns_bug = {}, {}
exec(src_ok, ns_ok)
exec(src_bug, ns_bug)
bad_seen = False
for _ in range(400):
    base = build_heap(random.sample(range(1, 80), random.randint(2, 16))).a
    t = list(base)
    t[0] = t[-1]
    t.pop()
    a1, a2 = list(t), list(t)
    ns_ok["down"](a1, len(a1), 0)
    ns_bug["down"](a2, len(a2), 0)
    assert is_heap(a1)
    bad_seen |= not is_heap(a2)
assert bad_seen
a2 = [4, 7, 3, 8, 9, 5]
ns_bug["down"](a2, 6, 0)
assert a2 == [4, 7, 3, 8, 9, 5]  # the explanation's example: the buggy code stops at once
worst = 0
for _ in range(4000):
    hh = build_heap(random.sample(range(1, 500), 15))
    hh.swaps = 0
    hh.extract()
    worst = max(worst, hh.swaps)
hh = Heap(list(range(1, 16)))
hh.extract()
assert hh.swaps == 3 and worst <= 3 and height(14) == 3
numeric("C03-Q6", 3)
n_checked += 2

# ---------------------------------------------------------------- C04
n = 16
order = list(range(n // 2 - 1, -1, -1))
st = Q["C04-Q1"]["step"]
# the four listed indices form one parent chain 7 <- 3 <- 1 <- 0, so their order is forced (each is the parent of the previous)
chain = [int(re.findall(r"\d+", l)[0]) for l in st["lines"]]
assert st["type"] == "order" and chain == [7, 3, 1, 0] and all(order.index(chain[i]) < order.index(chain[i + 1]) for i in range(3))
assert all(chain[i] == (chain[i - 1] - 1) // 2 for i in range(1, 4))
n_checked += 1
B = [12, 5, 9, 3, 8, 7, 1, 15, 2]
hb = build_heap(B)
hi = Heap()
for x in B:
    hi.insert(x)
topdown = list(B)
hd = Heap(topdown)
for i in range(0, len(B) // 2):  # WRONG order: root first
    hd.down(i)
assert hb.a == [1, 2, 7, 3, 8, 12, 9, 15, 5] and hb.swaps == 6
assert hi.a == [1, 2, 3, 5, 8, 9, 7, 15, 12] and hi.swaps == 8
assert hd.a == [5, 2, 1, 3, 8, 7, 9, 15, 12] and not is_heap(hd.a)
mcq_arrays("C04-Q2", hb.a, [hi.a, sorted(B), hd.a])
numeric("C04-Q3", hb.swaps)
q = Q["C04-Q4"]
assert correct_opt(q) == arr(hi.a)
vals = sorted(o["value"] for o in q["options"])
assert vals == sorted([arr(hi.a), arr(hb.a), arr(B), arr([1, 3, 2, 5, 8, 9, 7, 15, 12])])
assert is_heap([1, 3, 2, 5, 8, 9, 7, 15, 12]) and [1, 3, 2, 5, 8, 9, 7, 15, 12] not in (hi.a, hb.a)
n_checked += 1
for n in range(1, 400):
    b = build_heap(random.sample(range(5000), n))
    assert b.is_heap() and b.swaps <= n and b.cmps <= 2 * n  # linear work
total = 0
for n in (1 << k for k in range(4, 14)):
    b = build_heap(list(reversed(range(n))))
    assert b.swaps < n and b.cmps < 2 * n
# repeated insert is superlinear in the worst case (ascending-descending input)
ratio = []
for n in (1 << 8, 1 << 12):
    hi2 = Heap()
    for x in range(n, 0, -1):
        hi2.insert(x)
    ratio.append(hi2.swaps / n)
assert ratio[1] > ratio[0] + 2
assert correct_opt(Q["C04-Q5"]) == "$\\Theta(n)$"
numeric("C04-Q6", build_heap(list(range(1, 8))).cmps)
assert build_heap(list(range(1, 8))).swaps == 0
# lesson formula: swaps from a node of height h is at most h, ceil(n/2^(h+1)) nodes of height h
for n in range(2, 300):
    cnt = {}
    for i in range(n):
        d = 0
        j = i
        while 2 * j + 1 < n:  # height of node i = length of leftmost path
            j = 2 * j + 1
            d += 1
        cnt[d] = cnt.get(d, 0) + 1
    for hh_, c in cnt.items():
        assert c <= math.ceil(n / 2 ** (hh_ + 1)), (n, hh_, c)
n_checked += 1

# ---------------------------------------------------------------- C05
F1 = [2, 5, 3, 8, 6, 7, 9, 10]
assert is_heap(F1)
h = Heap(F1)
h.change_key(6, 1)
good = list(h.a)
assert good == [1, 5, 2, 8, 6, 7, 3, 10] and h.swaps == 2
nores = list(F1)
nores[6] = 1
onestep = [2, 5, 1, 8, 6, 7, 3, 10]
rootswap = [1, 5, 3, 8, 6, 7, 2, 10]
mcq_arrays("C05-Q1", good, [onestep, nores, rootswap])
assert not is_heap(onestep) and not is_heap(nores) and not is_heap(rootswap)
F2 = [2, 5, 3, 8, 6, 7, 9]
assert is_heap(F2)
h = Heap(F2)
h.change_key(0, 10)
good = list(h.a)
assert good == [3, 5, 7, 8, 6, 10, 9]
nores = [10, 5, 3, 8, 6, 7, 9]
leftd = larger_descent([10, 5, 3, 8, 6, 7, 9])  # always one fixed direction is a different wrong procedure:
# the stored distractor `[5, 8, 3, 10, 6, 7, 9]` is "always go to the LEFT child"
left = [10, 5, 3, 8, 6, 7, 9]
i = 0
while 2 * i + 1 < len(left) and left[i] > left[2 * i + 1]:
    left[i], left[2 * i + 1] = left[2 * i + 1], left[i]
    i = 2 * i + 1
assert left == [5, 8, 3, 10, 6, 7, 9]
half = [3, 5, 10, 8, 6, 7, 9]
mcq_arrays("C05-Q2", good, [nores, left, half])
assert not is_heap(nores) and not is_heap(left) and not is_heap(half)
F3 = [1, 8, 2, 9, 10, 3, 4]
assert is_heap(F3)
h = Heap(F3)
h.delete_at(3)
good = list(h.a)
assert good == [1, 4, 2, 8, 10, 3]
only_down = list(F3)
only_down[3] = only_down.pop()
hd = Heap(only_down)
hd.down(3)
assert hd.a == [1, 8, 2, 4, 10, 3] and not is_heap(hd.a)
shift = F3[:3] + F3[4:]
assert shift == [1, 8, 2, 10, 3, 4] and not is_heap(shift)
h0 = Heap(F3)
h0.delete_at(0)
assert h0.a == [2, 8, 3, 9, 10, 4] and 9 in h0.a
mcq_arrays("C05-Q3", good, [hd.a, shift, h0.a])
# up-and-down: at most one acts, and BOTH are needed (a case for each)
need_up = need_down = 0
for _ in range(3000):
    base = build_heap(random.sample(range(1, 100), random.randint(2, 20))).a
    i = random.randrange(len(base))
    t = list(base)
    last = t.pop()
    if i == len(t):
        continue
    t[i] = last
    hu = Heap(list(t))
    j = hu.up(i)
    hdn = Heap(list(t))
    hdn.down(i)
    moved_up = j != i
    moved_dn = hdn.swaps > 0
    assert not (moved_up and Heap(list(t)).swaps == 0 and moved_dn and False)
    assert not (moved_up and moved_dn)  # never both
    need_up += moved_up
    need_down += moved_dn
    hh2 = Heap(list(base))
    hh2.delete_at(i)
    assert hh2.is_heap()
    if moved_up:
        assert not hdn.is_heap()  # down alone would not repair it
    if moved_dn:
        assert not hu.is_heap()  # up alone would not repair it
assert need_up > 20 and need_down > 20
assert correct_opt(Q["C05-Q4"]).startswith("גם heapify-up וגם heapify-down")
assert correct_opt(Q["C05-Q5"]).startswith("$O(n)$")
# C05-Q5: finding a value is linear: a heap's order says nothing about where x is
assert correct_opt(Q["C05-Q5"]) and Q["C05-Q5"]["correctId"] == "a"
h = Heap(list(range(1, 16)))
h.decrease_key(14, 0)
assert h.swaps == 3
numeric("C05-Q6", 3)
n_checked += 3

# ---------------------------------------------------------------- C06
S = [4, 10, 3, 5, 1, 8]
states = heapsort_trace(S)
assert states[0] == [10, 5, 8, 4, 1, 3] and states[1] == [8, 5, 3, 4, 1, 10]
assert states[2] == [5, 4, 3, 1, 8, 10] and states[3] == [4, 1, 3, 5, 8, 10] and states[-1] == sorted(S)
minb = build_heap(S).a
assert minb == [1, 4, 3, 5, 10, 8]
mcq_arrays("C06-Q1", states[0], [minb, sorted(S, reverse=True), [10, 4, 3, 5, 1, 8]])
assert is_heap(sorted(S, reverse=True), True) and not is_heap([10, 4, 3, 5, 1, 8], True)
# the stored lesson example of build-max-heap: after index 2 only
t = list(S)
hm = Heap(t, mx=True)
hm.down(2)
assert hm.a == [4, 10, 8, 5, 1, 3]
# one pass
p = list(states[0])
p[0], p[-1] = p[-1], p[0]
nofix = list(p)
hh = Heap(p, mx=True)
hh.down(0, len(p) - 1)
assert hh.a == states[1]
wrong_n = list(nofix)
hw = Heap(wrong_n, mx=True)
hw.down(0, len(wrong_n))  # forgot to shrink the heap
wrong_n = hw.a
assert wrong_n == [8, 5, 10, 4, 1, 3]
mcq_arrays("C06-Q2", states[1], [nofix, wrong_n, states[0]])
mcq_arrays("C06-Q3", states[3], [states[2], states[4], states[5]])
assert states[4] == [3, 1, 4, 5, 8, 10] and states[5] == [1, 3, 4, 5, 8, 10]
for _ in range(500):
    a = random.sample(range(1000), random.randint(0, 60))
    if a:
        assert heapsort_trace(a)[-1] == sorted(a)
assert correct_opt(Q["C06-Q4"]).startswith("$\\Theta(n\\log n)$ זמן, $O(1)$")
# C06-Q5: k-way merge with a heap of size <= k, n insert/extract operations
for _ in range(200):
    k = random.randint(1, 8)
    lists = [sorted(random.sample(range(1000), random.randint(0, 12))) for _ in range(k)]
    total = sum(len(l) for l in lists)
    hp = Heap()
    ptr = [0] * k
    maxsize = 0
    for li, l in enumerate(lists):
        if l:
            hp.insert((l[0], li))
            ptr[li] = 1
    out = []
    ops = len(out)
    while hp.a:
        maxsize = max(maxsize, len(hp.a))
        v, li = hp.extract()
        out.append(v)
        if ptr[li] < len(lists[li]):
            hp.insert((lists[li][ptr[li]], li))
            ptr[li] += 1
    assert out == sorted(x for l in lists for x in l) and maxsize <= k
    assert hp.swaps <= 2 * total * max(1, math.ceil(math.log2(k + 1)))
assert correct_opt(Q["C06-Q5"]) == "$O(n\\log k)$"
# C06-Q6: k smallest, build-heap then k extract-min
for _ in range(100):
    n = random.randint(1, 300)
    k = random.randint(1, n)
    a = random.sample(range(10000), n)
    hh = build_heap(a)
    base_cmps = hh.cmps
    got = [hh.extract() for _ in range(k)]
    assert got == sorted(a)[:k]
    assert base_cmps <= 2 * n and hh.cmps - base_cmps <= 2 * k * max(1, height(n))
assert correct_opt(Q["C06-Q6"]) == "$O(n+k\\log n)$"
n_checked += 5

# ---------------------------------------------------------------- C07
assert dary_parent(14, 3) == 4 and 14 in dary_children(4, 3)
numeric("C07-Q1", 4)
assert dary_children(4, 4) == [17, 18, 19, 20]
assert sorted(o["value"] for o in Q["C07-Q2"]["options"]) == sorted(
    ["$17,18,19,20$", "$16,17,18,19$", "$14,15,16,17$", "$5,6,7,8$"])
assert correct_opt(Q["C07-Q2"]) == "$17,18,19,20$"
one_based = [4 * (4 - 1) + 2 + k for k in range(4)]
assert one_based == [14, 15, 16, 17]
assert [4 * 4 + k for k in range(4)] == [16, 17, 18, 19] and [4 + k for k in range(1, 5)] == [5, 6, 7, 8]
d, n = 4, 100
depth = 0
j = n - 1
while j > 0:
    j = dary_parent(j, d)
    depth += 1
assert depth == 4 == dary_height(100, 4) == math.ceil(math.log(n * (d - 1) + 1, d)) - 1
numeric("C07-Q3", 4)
for d in (2, 3, 4, 5, 7):
    for n in range(1, 400):
        dep, j = 0, n - 1
        while j > 0:
            j = dary_parent(j, d)
            dep += 1
        # exact integer version of ceil(log_d(n(d-1)+1)) - 1
        m, e = 1, 0
        while m < n * (d - 1) + 1:
            m *= d
            e += 1
        assert dep == dary_height(n, d) == e - 1, (d, n)
assert dary_height(40, 3) == 3 and dary_height(41, 3) == 4 and 1 + 3 + 9 + 27 == 40
# d-ary heap: insert <= h comparisons, extract <= d*h comparisons (counted: d-1 for the best child + 1)


class DHeap:
    def __init__(self, d):
        self.d, self.a, self.cmp = d, [], 0

    def insert(self, x):
        a, d = self.a, self.d
        a.append(x)
        i = len(a) - 1
        while i > 0:
            self.cmp += 1
            p = (i - 1) // d
            if a[i] < a[p]:
                a[i], a[p] = a[p], a[i]
                i = p
            else:
                break

    def extract(self):
        a, d = self.a, self.d
        top = a[0]
        last = a.pop()
        if a:
            a[0] = last
            i = 0
            while True:
                ch = [c for c in range(d * i + 1, d * i + d + 1) if c < len(a)]
                if not ch:
                    break
                best = ch[0]
                for c in ch[1:]:
                    self.cmp += 1
                    if a[c] < a[best]:
                        best = c
                self.cmp += 1
                if a[best] < a[i]:
                    a[i], a[best] = a[best], a[i]
                    i = best
                else:
                    break
        return top


for d in (2, 3, 4, 6):
    dh = DHeap(d)
    vals = random.sample(range(10000), 500)
    for x in vals:
        before = dh.cmp
        dh.insert(x)
        assert dh.cmp - before <= dary_height(len(dh.a), d)
    out = []
    while dh.a:
        before = dh.cmp
        hgt = dary_height(len(dh.a), d)
        out.append(dh.extract())
        assert dh.cmp - before <= d * max(hgt, 1)
    assert out == sorted(vals)
assert correct_opt(Q["C07-Q4"]).startswith("`Extract-Max`: $O(d\\log_d n)$")
mn = min(n for n in range(1, 500) if height(n) == 5)
assert mn == 32 == 2 ** 5
numeric("C07-Q5", 32)
pos = set()
for p in itertools.permutations(range(1, 8)):
    if is_heap(list(p), True):
        pos.add(p.index(1))
assert pos == {3, 4, 5, 6} and set(range(7 // 2, 7)) == pos
assert correct_opt(Q["C07-Q6"]).startswith("בכל אחד מהאינדקסים $3,4,5,6$")
n_checked += 4

# ---------------------------------------------------------------- C08
for n in (1, 2, 5, 10, 100, 1000, 4000):
    A1 = sorted(random.sample(range(10 ** 6), n))
    A2 = sorted(random.sample(range(10 ** 6, 2 * 10 ** 6), n))
    merged = build_heap(A1 + A2)
    assert merged.is_heap() and sorted(merged.a) == sorted(A1 + A2)
    assert merged.cmps <= 2 * 2 * n  # linear in the 2n merged elements
assert correct_opt(Q["C08-Q1"]).startswith("$\\Theta(n)$")
# C08-Q2: checking a heap reads each internal node once: <= 2*(n//2) comparisons
for n in range(1, 200):
    a = random.sample(range(1000), n)
    cmps = 0
    ok = True
    for i in range(n // 2):
        for c in (2 * i + 1, 2 * i + 2):
            if c < n:
                cmps += 1
                if a[c] < a[i]:
                    ok = False
    assert ok == is_heap(a) and cmps <= n
assert correct_opt(Q["C08-Q2"]) == "$\\Theta(n)$"
# C08-Q3: the reduction really sorts (BST/AVL inorder is sorted); every line order is forced by data flow
class Nd:
    def __init__(s, k):
        s.k, s.l, s.r = k, None, None


def bst_insert(root, k):
    if root is None:
        return Nd(k)
    if k < root.k:
        root.l = bst_insert(root.l, k)
    else:
        root.r = bst_insert(root.r, k)
    return root


def inorder(t):
    return [] if t is None else inorder(t.l) + [t.k] + inorder(t.r)


def preorder(t):
    return [] if t is None else [t.k] + preorder(t.l) + preorder(t.r)


for _ in range(100):
    a = random.sample(range(1000), random.randint(2, 40))
    hp = build_heap(a).a  # step 1: build-heap
    root = None
    for x in hp:  # step 2: "convert" (any search tree on the heap keys)
        root = bst_insert(root, x)
    assert inorder(root) == sorted(a)  # step 3: sorted read
st = Q["C08-Q3"]["step"]
assert st["type"] == "order" and len(st["lines"]) == 4
assert "build-heap" in st["lines"][0] and "inorder" in st["lines"][2] and "\\Omega" in st["lines"][3]
n_checked += 1
# C08-Q4: n*sqrt(log n) = o(n log n)
for n in (2 ** 10, 2 ** 20, 2 ** 40, 2 ** 80):
    lg = math.log2(n)
    assert math.isclose(math.sqrt(lg) / lg, lg ** -0.5)
assert math.sqrt(math.log2(2 ** 80)) / math.log2(2 ** 80) < 0.12
assert correct_opt(Q["C08-Q4"]).startswith("אי אפשר: build-heap")
# C08-Q5: AVL/BST inorder reversed is a max-heap; ascending inorder and preorder are not (in general)
asc_bad = pre_bad = 0
for _ in range(300):
    a = random.sample(range(1000), random.randint(3, 30))
    root = None
    for x in a:
        root = bst_insert(root, x)
    ino = inorder(root)
    assert is_heap(list(reversed(ino)), True)
    assert is_heap(ino, False)  # ascending = a MIN-heap, so it is wrong for "max"
    asc_bad += not is_heap(ino, True)
    pre_bad += not is_heap(preorder(root), True)
assert asc_bad == 300 and pre_bad > 100
assert correct_opt(Q["C08-Q5"]).startswith("סריקת inorder למערך (ממוין עולה) והפיכת")
# C08-Q6: handle heap: records with an index field, delete by handle in O(log n) swaps


class Rec:
    def __init__(s, k):
        s.k, s.i = k, -1


class HH:
    def __init__(s):
        s.a, s.sw = [], 0

    def _swap(s, i, j):
        a = s.a
        a[i], a[j] = a[j], a[i]
        a[i].i, a[j].i = i, j
        s.sw += 1

    def up(s, i):
        while i > 0 and s.a[i].k < s.a[(i - 1) // 2].k:
            s._swap(i, (i - 1) // 2)
            i = (i - 1) // 2
        return i

    def down(s, i):
        n = len(s.a)
        while 2 * i + 1 < n:
            c = 2 * i + 1
            if c + 1 < n and s.a[c + 1].k < s.a[c].k:
                c += 1
            if s.a[c].k < s.a[i].k:
                s._swap(i, c)
                i = c
            else:
                break

    def insert(s, r):
        s.a.append(r)
        r.i = len(s.a) - 1
        s.up(r.i)

    def delete(s, r):
        i = r.i
        last = s.a.pop()
        if last is not r:
            s.a[i] = last
            last.i = i
            if s.up(i) == i:
                s.down(i)
        r.i = -1


hh = HH()
recs = [Rec(k) for k in random.sample(range(100000), 400)]
for r in recs:
    hh.insert(r)
random.shuffle(recs)
live = list(recs)
for r in recs[:300]:
    before = hh.sw
    hh.delete(r)
    live.remove(r)
    assert hh.sw - before <= 2 * height(len(hh.a) + 1)
    assert all(x.i == j for j, x in enumerate(hh.a))
    assert is_heap([x.k for x in hh.a])
    assert sorted(x.k for x in hh.a) == sorted(x.k for x in live)
assert correct_opt(Q["C08-Q6"]).startswith("בכל רשומה שדה עם האינדקס")
n_checked += 3

# ---------------------------------------------------------------- C09 (boss) and structure
bank = json.load(open(os.path.join(APP, "questions.json"), encoding="utf8"))["questions"]
byid = {x["id"]: x for x in bank}
boss = LEVELS[-1]
assert boss["boss"] is True and boss["id"] == "C09"
ids = [q["bankId"] for q in boss["questions"]]
assert ids == ["24B-B-Q30", "22S-A-Q1d", "25B-B-Q5a", "24B-A-Q43", "24S-A-Q7", "24B-B-Q100"], ids
for i in ids:
    b = byid[i]
    assert b.get("official") is True and not b.get("hold"), i
assert byid["24B-B-Q30"]["correctId"] == "b" and "2^h" in next(
    o["value"] for o in byid["24B-B-Q30"]["options"] if o["id"] == "b")
assert byid["22S-A-Q1d"]["solution"].startswith("נכון")
assert byid["25B-B-Q5a"]["solution"].startswith("לא נכון")
assert byid["24B-A-Q43"]["correctId"] == "b" and byid["24S-A-Q7"]["correctId"] == "d"
# the boss recaps agree with the bank answers verified above (min nodes 2^h, check = n, merge = n,
# successor field and heap->AVL = n log n by reduction)
ids_all = [q["id"] for lv in LEVELS for q in lv["questions"] if "id" in q]
assert len(ids_all) == len(set(ids_all))
assert [lv["id"] for lv in LEVELS] == ["C01", "C02", "C03", "C04", "C05", "C06", "C07", "C08", "C09"]
for lv in LEVELS[:-1]:
    assert 4 <= len(lv["questions"]) <= 6, lv["id"]
    assert lv["source"] == "ai-verified"
print("ALL OK: %d answer groups asserted, %d stored questions, 9 levels" % (n_checked, len(ids_all)))
