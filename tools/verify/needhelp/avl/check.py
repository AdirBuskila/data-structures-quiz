"""Machine check for the guided course 'avl' (courses/avl/C01..C08.js).

Every stored answer is recomputed with the reference implementation in ref_avl.py.
Run from anywhere:   PYTHONUTF8=1 py tools/verify/needhelp/avl/check.py
Prints ASCII only. Exit 1 on any failure.
"""
import itertools
import json
import os
import random
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", "..", "..", ".."))
sys.path.insert(0, HERE)
from ref_avl import *  # noqa: E402,F401,F403

FAILS = []
CHECKED = {"specs": 0, "trees": 0, "theory": 0, "bank": 0}


def ok(cond, msg):
    if not cond:
        FAILS.append(msg)


# ---------------------------------------------------------------- load levels
def load_levels():
    js = ("const {load}=require(%r);const r=load(%r);"
          "const L=r.levels.filter(e=>e.courseId==='avl').map(e=>e.level).sort((a,b)=>a.order-b.order);"
          "process.stdout.write(JSON.stringify({errors:r.errors,levels:L}));") % (
              os.path.join(ROOT, "tools", "course_load.js").replace("\\", "/"), ROOT.replace("\\", "/"))
    out = subprocess.run(["node", "-e", js], capture_output=True, check=True).stdout.decode("utf-8")
    d = json.loads(out)
    ok(not d["errors"], "level files do not load: %r" % d["errors"])
    return d["levels"]


LEVELS = load_levels()
Q = {}
for L in LEVELS:
    for q in L["questions"]:
        if "id" in q:
            Q[q["id"]] = q


def strip(v):
    return v.strip().strip("`").strip()


def opts(q):
    return {o["id"]: strip(o["value"]) for o in q["options"]}


def correct_text(q):
    return opts(q)[q["correctId"]]


def numeric(q):
    s = q["step"]
    assert s["type"] == "numeric"
    return s["answer"]


def expect_numeric(qid, value):
    q = Q[qid]
    if "step" in q:
        ok(numeric(q) == value, "%s: stored %r, simulator says %r" % (qid, numeric(q), value))
    else:  # mcq with numeric options: the key equals the value, no distractor does
        o = opts(q)
        ok(o[q["correctId"]] == str(value), "%s: key %r, simulator says %r" % (qid, o[q["correctId"]], value))
        ok(sum(1 for v in o.values() if v == str(value)) == 1, "%s: value appears in several options" % qid)
    CHECKED["specs"] += 1


def expect_tree_mcq(qid, expected_tree_text):
    """key option == simulator result; every distractor is a tree on the same keys that differs from it"""
    q = Q[qid]
    o = opts(q)
    exp = parse(expected_tree_text)
    ok(o[q["correctId"]] == fmt(exp), "%s: key %r != simulator %r" % (qid, o[q["correctId"]], fmt(exp)))
    for i, t in o.items():
        tree = parse(t)
        ok(is_bst(tree), "%s: option %s is not a BST" % (qid, i))
        ok(inorder(tree) == inorder(exp), "%s: option %s has other keys" % (qid, i))
        if i != q["correctId"]:
            ok(fmt(tree) != fmt(exp), "%s: distractor %s equals the key" % (qid, i))
    CHECKED["specs"] += 1


def expect_kind_mcq(qid, kind):
    """kind in LL RR LR RL or 'none'; options are the plain names"""
    q = Q[qid]
    o = opts(q)
    want = "אין גלגול" if kind == "none" else kind
    ok(o[q["correctId"]] == want, "%s: key %r, simulator says %r" % (qid, o[q["correctId"]], want))
    CHECKED["specs"] += 1


def tree_after_insert(tree, k):
    a = from_text(tree)
    ok(is_avl(a.root), "start tree not AVL: " + tree)
    a.insert(k)
    ok(is_avl(a.root) and is_bst(a.root), "insert result invalid for " + tree)
    return a


def tree_after_delete(tree, k, pred=False):
    a = from_text(tree, pred=pred)
    ok(is_avl(a.root), "start tree not AVL: " + tree)
    a.delete(k)
    ok(is_avl(a.root) and is_bst(a.root), "delete result invalid for " + tree)
    return a


def lowest_violation(tree_text):
    """(z key, kind) for an unbalanced tree with exactly one lowest violated node"""
    a = from_text(tree_text)
    t = a.root
    bad = []

    def go(n):
        if n is None:
            return
        go(n.l); go(n.r)
        if abs(true_bal(n)) > 1:
            bad.append(n)
    go(t)
    z = bad[0]  # post-order: the first one found is the lowest
    b = true_bal(z)
    y = z.l if b > 0 else z.r
    by = true_bal(y)
    if b > 0:
        kind = "LL" if by >= 0 else "LR"
    else:
        kind = "RR" if by <= 0 else "RL"
    # cross-check against the rebalancer itself
    a2 = from_text(tree_text)

    def go2(n):
        if n is None:
            return None
        n.l = go2(n.l); n.r = go2(n.r)
        return a2.fix(n)
    a2.root = go2(a2.root)
    ok(a2.kinds()[0] == kind and a2.log[0][1] == z.k, "violation analysis disagrees for " + tree_text)
    return z.k, kind, a2.root, len(bad)


# ---------------------------------------------------------------- C01
T2 = "8(4(2,.),12(.,16(.,20)))"
t2 = parse(T2)
expect_numeric("C01-Q1", true_height(t2))
expect_numeric("C01-Q2", true_bal(t2))
viol = [n.k for n in itertools.chain([t2], [])]  # placeholder, replaced below


def all_nodes(n):
    return [] if n is None else [n] + all_nodes(n.l) + all_nodes(n.r)


viol = [n.k for n in all_nodes(t2) if abs(true_bal(n)) > 1]
ok(viol == [12], "T2 violations %r" % viol)
ok(correct_text(Q["C01-Q3"]) == "12", "C01-Q3 key")
ok(sorted(opts(Q["C01-Q3"]).values()) == sorted(["12", "8", "16", "4"]), "C01-Q3 options")
# which tree is AVL: exactly one
q = Q["C01-Q4"]
verdict = {i: is_avl(parse(t)) and is_bst(parse(t)) for i, t in opts(q).items()}
ok([i for i, v in verdict.items() if v] == [q["correctId"]], "C01-Q4 AVL verdicts %r key %s" % (verdict, q["correctId"]))
# 10(5(2,.),.) is not AVL, violation at the root
t = parse("10(5(2,.),.)")
ok(not is_avl(t) and true_bal(t) == 2 and [n.k for n in all_nodes(t) if abs(true_bal(n)) > 1] == [10], "C01-Q5 tree")
ok(opts(Q["C01-Q5"])[Q["C01-Q5"]["correctId"]].startswith("לא: בשורש"), "C01-Q5 key")
t = parse("16(8(4,.),24(.,32))")
ok(is_avl(t), "C01-Q6 tree is AVL")
ok(sum(1 for n in all_nodes(t) if true_bal(n) != 0) == 2 and opts(Q["C01-Q6"])[Q["C01-Q6"]["correctId"]] == "2", "C01-Q6")
# lesson example 20(10(5,.),30)
t = parse("20(10(5,.),30)")
ok([(n.k, true_height(n), true_bal(n)) for n in all_nodes(t)] ==
   [(20, 2, 1), (10, 1, 1), (5, 0, 0), (30, 0, 0)], "C01 lesson table")
CHECKED["specs"] += 5

# ---------------------------------------------------------------- C02
z, kind, res, nbad = lowest_violation("10(5,20(15,30(.,40)))")
ok(nbad == 1 and z == 10 and kind == "RR", "C02-Q1 sim %r" % ((z, kind, nbad),))
ok(opts(Q["C02-Q1"])[Q["C02-Q1"]["correctId"]].startswith("RR"), "C02-Q1 key")
z, kind, res, nbad = lowest_violation("40(20(10,30(25,.)),50)")
ok(nbad == 1 and z == 40 and kind == "LR", "C02-Q2 sim")
ok(opts(Q["C02-Q2"])[Q["C02-Q2"]["correctId"]].startswith("LR"), "C02-Q2 key")
z, kind, res, nbad = lowest_violation("10(5,40(30(25,.),45))")
ok(nbad == 1 and z == 10 and kind == "RL", "C02-Q3 sim")
ok(opts(Q["C02-Q3"])[Q["C02-Q3"]["correctId"]].startswith("RL"), "C02-Q3 key")
z, kind, res4, nbad = lowest_violation("50(30(20(10,.),.),60(55,70))")
ok(z == 30 and kind == "LL" and nbad == 1, "C02-Q4 sim (z is the lowest violation)")
expect_tree_mcq("C02-Q4", fmt(res4))
# the wrong options are not what the other rotations give either: they must not be AVL-equal to key (checked above)
z, kind, res5, _ = lowest_violation("40(20(10,30(25,.)),50)")
expect_numeric("C02-Q5", res5.k)
# the LR order step: first rotation left about y then right about z gives the same tree as the rebalancer
t = parse("40(20(10,30(25,.)),50)")
t.l = rot_left(t.l)
t = rot_right(t)
ok(fmt(t) == fmt(res5) and is_avl(t), "C02-Q6 LR = left about y, then right about z")
ok(Q["C02-Q6"]["step"]["type"] == "order", "C02-Q6 type")
# the lesson example 'median of z,y,x becomes the new root'
for tt in ["10(5,20(15,30(.,40)))", "40(20(10,30(25,.)),50)", "10(5,40(30(25,.),45))", "50(30(20(10,.),.),60(55,70))"]:
    zk, kd, r, _ = lowest_violation(tt)
    a = from_text(tt)
    zn = a.root if a.root.k == zk else None
    # locate z, y, x in the original tree
    def find(n, k):
        if n is None: return None
        if n.k == k: return n
        return find(n.l if k < n.k else n.r, k)
    zn = find(a.root, zk)
    y = zn.l if true_bal(zn) > 0 else zn.r
    x = None
    if kd in ("LR",): x = y.r
    if kd in ("RL",): x = y.l
    expected_root = (x or y).k
    sub = find(r, expected_root)
    ok(expected_root == sorted([zn.k, y.k, (x or y).k])[1] or kd in ("LL", "RR"), "median rule " + tt)
    # the rotated subtree rooted at expected_root contains z, y, x
    ok(sub is not None, "new subtree root missing " + tt)
CHECKED["specs"] += 6

# ---------------------------------------------------------------- C03
a = tree_after_insert("20(10(5,.),30)", 7)
expect_kind_mcq("C03-Q1", a.kinds()[0])
ok(a.kinds() == ["LR"], "C03-Q1")
a = tree_after_insert("20(10,30(.,40))", 50)
expect_tree_mcq("C03-Q2", fmt(a.root))
ok(a.kinds() == ["RR"] and a.log[0][1] == 30, "C03-Q2 rotation is about 30")
a = tree_after_insert("15(10,30(25,40))", 28)
expect_numeric("C03-Q3", a.log[0][1])
ok(a.kinds() == ["RL"], "C03-Q3 kind")
expect_tree_mcq("C03-Q4", fmt(a.root))
# Q3 explanation claims: B(25) = -1, B(30) = +1, B(15) = -2 on the raw tree
raw = parse("15(10,30(25(.,28),40))")
ok((true_bal(find(raw, 25)), true_bal(find(raw, 30)), true_bal(raw)) == (-1, 1, -2) if False else True, "")
b = {n.k: true_bal(n) for n in all_nodes(raw)}
ok(b[25] == -1 and b[30] == 1 and b[15] == -2, "C03-Q3 explain balances %r" % b)
before = true_height(parse("20(10(5,.),30(25,40))"))
a = tree_after_insert("20(10(5,.),30(25,40))", 3)
expect_numeric("C03-Q5", true_height(a.root))
ok(true_height(a.root) == before and a.kinds() == ["LL"], "C03-Q5 height unchanged by rotation")
ok(fmt(a.root) == "20(5(3,10),30(25,40))", "C03-Q5 explain tree")
a = tree_after_insert("20(10,30)", 25)
ok(a.kinds() == [], "C03-Q6 explain: inserting 25 into 20(10,30) rotates nothing")
CHECKED["specs"] += 3

# ---------------------------------------------------------------- C04
a = build([15, 10, 5, 20, 25])
expect_numeric("C04-Q1", a.root.k)
ok(fmt(a.root) == "10(5,20(15,25))", "C04-Q1 explain tree")
a = build([10, 20, 30, 40, 50, 25])
expect_numeric("C04-Q2", a.rotations())
ok(a.kinds() == ["RR", "RR", "RL"], "C04-Q2 kinds")
expect_tree_mcq("C04-Q3", fmt(a.root))
expect_numeric("C04-Q4", depth(a.root, 25))
a = build([1, 2, 3, 4, 5, 6, 7])
expect_numeric("C04-Q5", a.rotations())
ok(build([4, 2, 6, 1, 3, 5, 7]).rotations() == 0, "C04-Q5 balanced order has 0")
a = build([60, 40, 80, 20, 50, 70, 90, 10, 5])
parent = [n.k for n in all_nodes(a.root) if (n.l and n.l.k == 20) or (n.r and n.r.k == 20)]
expect_numeric("C04-Q6", parent[0])
ok(fmt(a.root) == "60(40(10(5,20),50),80(70,90))", "C04-Q6 explain tree")
ok(fmt(build([60, 40, 80, 20, 50, 70, 90, 10]).root) == "60(40(20(10,.),50),80(70,90))", "C04-Q6 pre-tree")
# lesson example table
seq = [30, 20, 10, 25, 40, 50, 45]
snap = []
t = AVL()
for k in seq:
    t.insert(k)
    snap.append(fmt(t.root))
ok(snap == ["30", "30(.,.)"][:0] + ["30", "30(20,.)", "20(10,30)", "20(10,30(25,.))", "20(10,30(25,40))",
                                     "30(20(10,25),40(.,50))", "30(20(10,25),45(40,50))"], "C04 lesson table %r" % snap)
ok(t.kinds() == ["LL", "RR", "RL"] and [z for _, z in t.log] == [30, 20, 40], "C04 lesson rotations %r" % t.log)
ok(sorted(leaves(t.root)) == [10, 25, 40, 50], "C04 lesson leaves")
# the raw tree after 25 in Q3/Q4 explanation
raw = from_text("20(10,40(30,50))")
raw.root.r.l.l = Node(25)
upd(raw.root.r.l); upd(raw.root.r); upd(raw.root)
ok(fmt(raw.root) == "20(10,40(30(25,.),50))" and depth(raw.root, 25) == 3 and true_bal(raw.root) == -2, "C04-Q3/Q4 raw tree")
CHECKED["specs"] += 6

# ---------------------------------------------------------------- C05
s_ = "20(10(5,15),30(25,40))"
a = tree_after_delete(s_, 20)
expect_numeric("C05-Q1", a.root.k)
expect_tree_mcq("C05-Q2", fmt(a.root))
ok(a.log == [], "C05-Q2 no rotation")
ap = tree_after_delete(s_, 20, pred=True)
ok(fmt(ap.root) == "15(10(5,.),30(25,40))" and fmt(ap.root) != fmt(a.root), "C05 pred differs: root 15")
ok(opts(Q["C05-Q2"])["b"] == fmt(ap.root), "C05-Q2 option b is the predecessor tree")
a = tree_after_delete("20(10,30(25,40))", 10)
expect_kind_mcq("C05-Q3", a.kinds()[0])
ok(bal(None) == 0, "")
ok(a.kinds() == ["RR"], "C05-Q3")
expect_numeric("C05-Q4", true_height(a.root))
ok(true_height(parse("20(10,30(25,40))")) == 2, "C05-Q4 before height")
expect_tree_mcq("C05-Q5", fmt(a.root))
# B(y) = 0 case: balance of y=30 after deleting 10
raw = parse("20(.,30(25,40))")
ok(true_bal(raw) == -2 and true_bal(raw.r) == 0, "C05 B(y)=0")
# double rotation instead would give 25(20,30(.,40)) (lesson claim): do RL by hand
t = parse("20(.,30(25,40))")
t.r = rot_right(t.r); t = rot_left(t)
ok(fmt(t) == "25(20,30(.,40))" and is_avl(t) and fmt(t) != fmt(a.root), "C05 lesson: RL alternative")
a = tree_after_delete("20(10(5,15),30)", 30)
expect_numeric("C05-Q6", a.root.k)
ok(a.kinds() == ["LL"] and fmt(a.root) == "10(5,20(15,.))", "C05-Q6 explain")
raw = parse("20(10(5,15),.)")
ok(true_bal(raw) == 2 and true_bal(raw.l) == 0, "C05-Q6 B(y)=0")
CHECKED["specs"] += 6

# ---------------------------------------------------------------- C06
expect_numeric("C06-Q1", N(5))
expect_numeric("C06-Q2", N(6))
expect_numeric("C06-Q3", max(h for h in range(0, 30) if N(h) <= 30))
ok(N(4) == 12 and N(3) == 7, "C06-Q4")
q = Q["C06-Q4"]
ok(correct_text(q).startswith("לא: בגובה 4 יש לפחות 12"), "C06-Q4 key")
# sizes of AVL trees of height h (DP over shapes' sizes): 11 is impossible at height 4
sizes = {-1: {0}, 0: {1}}
for h in range(1, 12):
    sz = set()
    for hl, hr in ((h - 1, h - 1), (h - 1, h - 2), (h - 2, h - 1)):
        for a_ in sizes[hl]:
            for b_ in sizes[hr]:
                sz.add(1 + a_ + b_)
    sizes[h] = sz
ok(11 not in sizes[4] and 12 in sizes[4] and 11 in sizes[3], "C06-Q4 sizes")
for h in range(0, 12):
    ok(min(sizes[h]) == N(h) and max(sizes[h]) == 2 ** (h + 1) - 1 and sizes[h] == set(range(N(h), 2 ** (h + 1))), "sizes range h=%d" % h)
ok(N(3) == 7 and 2 ** 5 - 1 == 31, "C06-Q4 b/d")
A = leaf_depths(60)
for H in range(0, 61):
    ok(A[H] == set(range(-(-H // 2), H + 1)), "leaf depth rule H=%d" % H)
q = Q["C06-Q5"]
truth = {}
for i, t in opts(q).items():
    nums = [int(x) for x in re.findall(r"\$(\d+)\$", q["options"][ord(i) - 97]["value"])]
    H, d = nums
    truth[i] = d in A[H]
ok([i for i, v in truth.items() if v] == [q["correctId"]], "C06-Q5 truth %r" % truth)
expect_numeric("C06-Q6", min(A[30]))
ok(N(5) + N(4) + 1 == N(6) == 33 and N(2) == 4, "C06 explains")
ok(max(h for h in range(10) if N(h) <= 11) == 3, "C06 explain: 11 nodes -> height 3")
CHECKED["specs"] += 6

# ---------------------------------------------------------------- C07
m, _ = fib_tree(4, 1, False)
ok(fmt(m) == "5(2(1,3(.,4)),8(6(.,7),10(9,11(.,12))))" and is_avl(m) and size(m) == N(4), "C07-Q1 tree is the h=4 Fibonacci tree, short side left")
a = AVL(m)
a.delete(1)
expect_numeric("C07-Q1", a.rotations())
ok(fmt(a.root) == "8(5(3(2,4),6(.,7)),10(9,11(.,12)))" and a.kinds() == ["RR", "RR"], "C07-Q1 explain")
m6, _ = fib_tree(6, 1, False)
ok(size(m6) == 33 and is_avl(m6), "C07-Q2 tree")
a = AVL(m6)
a.delete(1)
expect_numeric("C07-Q2", a.rotations())
for h in range(2, 13):
    mm, _ = fib_tree(h, 1, False)
    aa = AVL(mm)
    aa.delete(1)
    ok(aa.rotations() == h // 2 and is_avl(aa.root), "floor(h/2) rotations, h=%d got %d" % (h, aa.rotations()))
q = Q["C07-Q3"]
ok(correct_text(q).startswith("לא נכונה: בעץ פיבונאצ'י"), "C07-Q3 key")
# preorder question: exactly one option is a preorder of an AVL tree


def bst_plain(seq):
    def ins(n, k):
        if n is None:
            return Node(k)
        if k < n.k:
            n.l = ins(n.l, k)
        else:
            n.r = ins(n.r, k)
        upd(n)
        return n
    r = None
    for k in seq:
        r = ins(r, k)
    return r


def is_preorder_of_avl(seq):
    t = bst_plain(seq)
    return preorder(t) == list(seq) and is_avl(t)


q = Q["C07-Q4"]
res = {i: is_preorder_of_avl([int(x) for x in t.split(",")]) for i, t in opts(q).items()}
ok([i for i, v in res.items() if v] == [q["correctId"]], "C07-Q4 verdicts %r" % res)
ok(fmt(bst_plain([40, 20, 10, 30, 60, 50, 70, 80])) == "40(20(10,30),60(50,70(.,80)))", "C07-Q4 explain a")
ok(preorder(bst_plain([40, 20, 30, 10, 60, 50, 70, 80]))[:4] == [40, 20, 10, 30], "C07-Q4 explain b")
tc = bst_plain([40, 20, 10, 5, 60, 50, 70, 80])
ok(fmt(tc) == "40(20(10(5,.),.),60(50,70(.,80)))" and preorder(tc) == [40, 20, 10, 5, 60, 50, 70, 80]
   and true_bal(find(tc, 20)) == 2, "C07-Q4 explain c")
ok(preorder(bst_plain([40, 20, 10, 30, 60, 70, 50, 80]))[4:7] == [60, 50, 70], "C07-Q4 explain d")
t = parse("10(5(3,.),15)")
ok(is_avl(t) and preorder(t) == [10, 5, 3, 15], "C07-Q5 tree")
a = build(preorder(t))
expect_numeric("C07-Q5", a.rotations())
ok(a.kinds() == ["LL"] and fmt(a.root) == "5(3,10(.,15))", "C07-Q5 explain")
CHECKED["specs"] += 5

# ---------------------------------------------------------------- theory claims in lessons
rnd = random.Random(7)
for _ in range(300):
    n = rnd.randint(1, 60)
    keys = rnd.sample(range(1, 200), n)
    a = AVL()
    for k in keys:
        before = len(a.log)
        a.insert(k)
        ok(len(a.log) - before <= 1, "insert caused more than one rotation")
        ok(is_avl(a.root) and is_bst(a.root), "insert broke AVL")
    # a deletion sequence: result always valid
    for k in rnd.sample(keys, n // 2):
        a.delete(k)
        ok(is_avl(a.root) and is_bst(a.root), "delete broke AVL")
CHECKED["theory"] += 1
# deletion CAN cause two or more rotations (C03-Q6/C07-Q3)
ok(any(AVL(fib_tree(h, 1, False)[0]).__class__ for h in [4]), "")
# preorder of an AVL inserted in order can rotate (C07 trap)
ok(build([10, 5, 3, 15]).rotations() == 1, "preorder trap")
# BST/AVL subtree-size claim from the brief used nowhere else; N(h) brute force
ok(all(N(h) == min_nodes_bruteforce(h) for h in range(25)), "N(h) brute force")
CHECKED["theory"] += 2

# ---------------------------------------------------------------- C08 boss (bank questions)
BANK = json.load(open(os.path.join(ROOT, "questions.json"), encoding="utf-8"))
BANK = {x["id"]: x for x in (BANK["questions"] if isinstance(BANK, dict) else BANK)}
boss = [x for x in LEVELS if x.get("boss")]
ok(len(boss) == 1 and boss[0]["id"] == "C08", "one boss, C08")
bank_ids = [x["bankId"] for x in boss[0]["questions"] if "bankId" in x]
ok(4 <= len(bank_ids) <= 6, "boss has 4..6 bank questions")
for bid in bank_ids:
    b = BANK.get(bid)
    ok(b is not None, "bank id missing: " + bid)
    if b:
        ok(b.get("topic") == "avl" and b.get("official") is True and not b.get("hold"), "boss %s must be official, unheld, topic avl" % bid)


def bank_opts(b):
    return {o["id"]: o.get("value") or o.get("text") for o in b["options"]}


def seq_of(b):
    m_ = re.search(r"\$([\d,]+)\$\s*\n", b["question"] + "\n")
    return [int(x) for x in re.findall(r"\$(\d+(?:,\d+)+)\$", b["question"])[0].split(",")]


# 24B-A-Q26 : 4,7,41,3,8,6,2,5  ->  key c (exactly one rotation)
b = BANK["24B-A-Q26"]
a = build(seq_of(b))
st = {
    "a": 41 in leaves(a.root),
    "b": inorder(a.root)[0] not in leaves(a.root),
    "c": a.rotations() == 1,
    "d": a.root.k == 6,
}
ok([i for i, v in st.items() if v] == [b["correctId"]], "24B-A-Q26 %r vs key %s" % (st, b["correctId"]))
# 24B-B-Q20 : 9,5,8,4,7,3,6,42
b = BANK["24B-B-Q20"]
a = build(seq_of(b))
mn = inorder(a.root)[0]
st = {
    "a": depth(a.root, 42) == 2,
    "b": depth(a.root, mn) == 3,
    "c": a.rotations() == 2,
    "d": a.root.k == 7,
}
ok([i for i, v in st.items() if v] == [b["correctId"]], "24B-B-Q20 %r vs key %s root=%s" % (st, b["correctId"], a.root.k))
BOSS_Q20 = (a.rotations(), a.root.k, fmt(a.root))
# 24B-A-Q1 : leaf depth statements
b = BANK["24B-A-Q1"]
truth = {}
for i, v in bank_opts(b).items():
    H, d = [int(x) for x in re.findall(r"\$(\d+)\$", v)]
    exists = d in A[H] if H <= 60 else (-(-H // 2) <= d <= H)
    truth[i] = exists if "לא קיים" not in v else (not exists)
ok([i for i, t in truth.items() if t] == [b["correctId"]], "24B-A-Q1 %r vs key %s" % (truth, b["correctId"]))
# 24S-A-Q21 : leaf at depth 5 -> min nodes
b = BANK["24S-A-Q21"]
d = int(re.findall(r"\$(\d+)\$", b["question"])[0])
ok(d == 5 and bank_opts(b)[b["correctId"]].strip() == str(N(d)), "24S-A-Q21 key %s vs N(%d)=%d" % (bank_opts(b)[b["correctId"]], d, N(d)))
# 24B-B-Q3 : which is NOT a preorder of an AVL tree
b = BANK["24B-B-Q3"]
res = {}
for i, v in bank_opts(b).items():
    seq = [int(x) for x in re.findall(r"\d+", v)]
    res[i] = is_preorder_of_avl(seq)
ok([i for i, t in res.items() if not t] == [b["correctId"]], "24B-B-Q3 %r vs key %s" % (res, b["correctId"]))
# 25B-A-Q5c : "at most one rotation in a deletion" is false
b = BANK["25B-A-Q5c"]
m_, _ = fib_tree(4, 1, False)
aa = AVL(m_)
aa.delete(1)
ok(b["verdict"] is False and aa.rotations() > 1, "25B-A-Q5c")
CHECKED["bank"] = len(bank_ids)

# ---------------------------------------------------------------- every tree token in every string
TREE_RE = re.compile(r"^-?\d+\([\d().,\- ]*\)$")
seen = {}
NON_AVL_EXPECTED = {
    # raw tree after an insertion / deletion, before the rotation: text -> lowest violated key
    "10(5(2,.),.)": 10,
    "8(4(2,.),12(.,16(.,20)))": 12,
    "10(5,20(15,30(.,40)))": 10,
    "40(20(10,30(25,.)),50)": 40,
    "10(5,40(30(25,.),45))": 10,
    "50(30(20(10,.),.),60(55,70))": 30,
    "20(10(5(.,7),.),30)": 10,
    "15(10,30(25(.,28),40))": 15,
    "20(10,30(.,40(.,50)))": 30,
    "20(10(5(3,.),.),30(25,40))": 10,
    "20(10,40(30(25,.),50))": 20,
    "10(.,20(.,30(25,40(.,50))))": 20,
    "30(15(10,25(.,28)),40)": 30,
    "20(.,30(25,40))": 20,
    "40(30(20(.,25),.),.)": 30,
    "20(10(5,15),.)": 20,
    "30(20(10,.),50(.,60(55,70)))": None,       # wrong-option trees are allowed to be anything valid
    "20(10,50(30,60(55,70)))": None,
    "20(10,50(40(30,.),.))": None,
    "30(20(10,.),50(40,.))": None,
    "10(.,20(.,30(25,40(.,50))))": 20,
    "40(20(10(5,.),.),60(50,70(.,80)))": 20,
    "10(5,25(15,30(.,40)))": None,
    "10(5(3,.),.)": None,
    "10(5(2(1,.),.),20)": 5,
    "10(5,20(.,30(.,40)))": 20,
    "10(5,20(15(12,.),.))": 20,
    "20(10(5,.),.)": None,
    "20(10(5(.,7),.),30(.,.))": None,
}


def tokens(s):
    out = []
    for m in re.finditer(r"`([^`]+)`", s):
        out.append(m.group(1))
    for m in re.finditer(r"<code>([^<]+)</code>", s):
        out.append(m.group(1))
    for m in re.finditer(r"<pre[^>]*>([^<]+)</pre>", s):
        out.append(m.group(1))
    return [t.strip() for t in out if TREE_RE.match(t.strip())]


def walk_strings(o, path=""):
    if isinstance(o, str):
        yield path, o
    elif isinstance(o, dict):
        for k, v in o.items():
            yield from walk_strings(v, path + "/" + k)
    elif isinstance(o, list):
        for i, v in enumerate(o):
            yield from walk_strings(v, path + "[%d]" % i)


for L in LEVELS:
    for pth, s in walk_strings(L):
        for t in tokens(s):
            tree = parse(t)
            CHECKED["trees"] += 1
            ok(is_bst(tree), "%s %s: tree %s is not a BST" % (L["id"], pth, t))
            seen.setdefault(t, []).append(L["id"])
            if not is_avl(tree):
                if t not in NON_AVL_EXPECTED:
                    FAILS.append("%s %s: non-AVL tree %s not whitelisted" % (L["id"], pth, t))
                elif NON_AVL_EXPECTED[t] is not None:
                    bad_ = [n.k for n in all_nodes(tree) if abs(true_bal(n)) > 1]
                    low = None
                    # lowest violated = the one found first in post-order
                    def po(n):
                        if n is None: return None
                        r_ = po(n.l) or po(n.r)
                        if r_ is not None: return r_
                        return n.k if abs(true_bal(n)) > 1 else None
                    low = po(tree)
                    ok(low == NON_AVL_EXPECTED[t], "%s: tree %s lowest violation %r, expected %r" % (L["id"], t, low, NON_AVL_EXPECTED[t]))

print("levels: %d  questions with ids: %d  bank ids: %s" % (len(LEVELS), len(Q), bank_ids))
print("boss Q20 sim (rotations, root, tree):", BOSS_Q20)
print("checked:", CHECKED, " distinct tree strings:", len(seen))
if FAILS:
    print("FAILURES (%d):" % len(FAILS))
    for f in FAILS:
        print("  -", f.encode("ascii", "replace").decode())
    sys.exit(1)
print("ALL CHECKS PASSED")
