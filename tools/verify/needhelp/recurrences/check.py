# -*- coding: utf-8 -*-
"""Machine check of the guided course `recurrences` (courses/recurrences/C01..C08.js).

  PYTHONUTF8=1 py tools/verify/needhelp/recurrences/check.py

What it does (every stored answer is asserted, any failure exits non-zero with the question id):
  * loads the level files through tools/course_load.js and the bank (questions.json) for the boss ids;
  * sympy: closed forms (rsolve), log_b a, geometric sums, q values, regularity, limits, tree level sums;
  * numeric evaluation of each recurrence at huge n (2^100 vs 2^200 in mpmath; n-1 type at 200 vs 6400):
    the ratio T(n)/g(n) must be stable (change < 12%) for exactly the option the course marks correct and move
    (change > 25%) for every other candidate, so every Theta-claim and every distractor is tested;
  * C01: the code snippets of the questions are executed (line events counted) and their growth class must
    match the correct recurrence option and none of the distractors;
  * boss: the 6 bank questions are re-solved the same way.
"""
import json, math, pathlib, re, subprocess, sys
import sympy as sp
from mpmath import mp, mpf

mp.dps = 50
sys.setrecursionlimit(200000)
ROOT = pathlib.Path(__file__).resolve().parents[4]

# ------------------------------------------------------------------ data
loaded = json.loads(subprocess.run(["node", str(ROOT / "tools" / "course_load.js")], cwd=ROOT, capture_output=True,
                                   encoding="utf-8", check=True).stdout)
assert not [e for e in loaded["errors"] if "recurrences" in e], loaded["errors"]
LEVELS = {e["level"]["id"]: e["level"] for e in loaded["levels"] if e["courseId"] == "recurrences"}
assert sorted(LEVELS) == ["C01", "C02", "C03", "C04", "C05", "C06", "C07", "C08"], sorted(LEVELS)
QS = {}
for L in LEVELS.values():
    for q in L["questions"]:
        if "bankId" not in q:
            assert q["id"] not in QS, q["id"]
            QS[q["id"]] = q
BANK = {x["id"]: x for x in json.load(open(ROOT / "questions.json", encoding="utf-8"))["questions"]}
FAILS = []
DONE = set()


def ok(cond, qid, msg):
    if not cond:
        FAILS.append(f"{qid}: {msg}")
        print("FAIL", qid, msg)


def mc_text(q):
    return {o["id"]: o["value"] for o in q["options"]}


def has_tex(q, tex):
    clean = lambda s: re.sub(r"\s+", "", s)
    ok(clean(tex) in clean(q["question"] if "question" in q else q["step"]["prompt"]), q["id"], f"stem lacks {tex}")


# ------------------------------------------------------------------ recurrence engine
def M(e):
    return mpf(str(sp.N(sp.sympify(e), 55)))


class Div:
    """T(n) = sum coef*T(n*shrink) + f(n), T(x)=1 for x<=1."""
    sizes = (mpf(2) ** 100, mpf(2) ** 200)

    def __init__(self, terms, f):
        self.terms, self.f, self.memo = [(c, M(s)) for c, s in terms], f, {}
        self.diverges = any(s >= 1 for _, s in self.terms)
        if len(self.terms) == 1 and not self.diverges:
            # one shrink factor: evaluate at exact powers of b = 1/s so the leaf level has no rounding oscillation
            b = 1 / self.terms[0][1]
            k1 = int(mp.ceil(100 / mp.log(b, 2)))
            self.sizes = (b ** k1, b ** (2 * k1))

    def T(self, x):
        if x <= 1 + mpf(10) ** -30:
            return mpf(1)
        key = mp.nstr(x, 30)
        v = self.memo.get(key)
        if v is None:
            v = self.f(x) + sum(c * self.T(x * s) for c, s in self.terms)
            self.memo[key] = v
        return v

    def fn(self):
        return None if self.diverges else self.T


class Sub:
    """T(n) = coef*T(n-1) + f(n) on integers, T(1)=1."""
    sizes = (400, 25600)

    def __init__(self, coef, f):
        self.coef, self.f, self.vals = coef, f, [None, mpf(1)]
        self.diverges = False

    def T(self, n):
        n = int(n)
        while len(self.vals) <= n:
            m = len(self.vals)
            c = self.coef(m) if callable(self.coef) else self.coef
            self.vals.append(c * self.vals[-1] + self.f(mpf(m)))
        return self.vals[n]

    def fn(self):
        return self.T


def LG(a, b):
    return sp.simplify(sp.log(a) / sp.log(b))


P_GRID = [mpf(0), mpf("0.5"), mpf(1), mpf("1.5"), mpf(2), mpf("2.5"), mpf(3), mpf(4),
          M(LG(3, 2)), M(LG(6, 2)), M(LG(7, 2))]
K_GRID = [0, 1, 2]


def g_of(p, k):
    return lambda n: (mpf(n) ** p) * (mp.log(mpf(n), 2) ** k)


def change(fn, sizes, p, k):
    g = g_of(p, k)
    r1, r2 = fn(sizes[0]) / g(sizes[0]), fn(sizes[1]) / g(sizes[1])
    return abs(r2 / r1 - 1)


def stable_set(rec):
    fn = rec.fn()
    if fn is None:
        return set()
    return {(float(p), k) for p in P_GRID for k in K_GRID if change(fn, rec.sizes, p, k) < 0.12}


def assert_clean(rec, p, k, qid):
    """Theta(n^p log^k n) is stable and every other grid candidate moves a lot (no borderline)."""
    fn = rec.fn()
    ok(fn is not None, qid, "recurrence diverges")
    if fn is None:
        return
    ok(change(fn, rec.sizes, p, k) < 0.12, qid, f"claimed class not stable: change {change(fn, rec.sizes, p, k)}")
    for pp in P_GRID:
        for kk in K_GRID:
            if abs(pp - p) < 1e-9 and kk == k:
                continue
            c = change(fn, rec.sizes, pp, kk)
            ok(c > 0.25, qid, f"another class (p={pp},k={kk}) is borderline stable: {c}")


# ---- parsers
def exp_eval(s):
    s = s.strip().replace(" ", "")
    m = re.fullmatch(r"\\log_\{?(\d+)\}?(\d+)", s)
    if m:
        return M(sp.log(int(m.group(2)), int(m.group(1))))
    m = re.fullmatch(r"\\frac\{(\d+)\}\{(\d+)\}", s)
    if m:
        return mpf(int(m.group(1))) / int(m.group(2))
    return mpf(s)


TOK = re.compile(r"\\sqrt\{n\}|\(\\logn\)\^(\d)|\\log\^\{?(\d)\}?n|\\logn|n\^\{([^}]*)\}|n\^(\d)|n|1")


def parse_theta(s):
    if s.strip() == r"$\Theta(2^n)$":
        return mpf(99), 0  # exponential: never stable against a polynomial candidate
    m = re.fullmatch(r"\$\\[Tt]heta\((.*)\)\$", s.strip())
    if not m:
        return None
    inner = m.group(1).replace(" ", "")
    p, k, pos = mpf(0), 0, 0
    while pos < len(inner):
        t = TOK.match(inner, pos)
        if not t or t.end() == pos:
            return None
        txt = t.group(0)
        if txt == r"\sqrt{n}":
            p += mpf("0.5")
        elif txt == r"\logn":
            k += 1
        elif txt.startswith("(\\log"):
            k += int(t.group(1))
        elif txt.startswith("\\log^"):
            k += int(t.group(2))
        elif txt.startswith("n^{"):
            p += exp_eval(t.group(3))
        elif txt.startswith("n^"):
            p += int(t.group(4))
        elif txt == "n":
            p += 1
        pos = t.end()
    return p, k


def theta_mcq(qid, rec, tex):
    """The correct option is the only parseable Theta option whose class is stable; the others all move."""
    q = QS[qid]
    has_tex(q, tex)
    opts = mc_text(q)
    fn = rec.fn()
    stable = []
    for oid, val in opts.items():
        pk = parse_theta(val)
        ok(pk is not None, qid, f"option {oid} does not parse: {val}")
        if pk is None:
            continue
        c = change(fn, rec.sizes, pk[0], pk[1])
        if c < 0.12:
            stable.append(oid)
        else:
            ok(c > 0.25, qid, f"option {oid} borderline ({c})")
    ok(stable == [q["correctId"]], qid, f"stable options {stable} vs correctId {q['correctId']}")
    DONE.add(qid)


def theta_numeric_check(qid):
    DONE.add(qid)


# convenience builders
half = lambda f: Div([(1, "1/2")], f)
n_ = lambda n: n
one = lambda n: mpf(1)
log2 = lambda n: mp.log(n, 2)

# ------------------------------------------------------------------ parse a recurrence option "T(n)=..."
def rec_from_tex(s):
    m = re.fullmatch(r"\$T\(n\)=(.+)\$", s.strip())
    assert m, s
    body = m.group(1).replace(" ", "")
    f = one
    terms, sub_coef, is_sub = [], 1, False
    for part in body.split("+"):
        mo = re.fullmatch(r"O\((.*)\)", part)
        if mo:
            f = {"1": one, "n": n_, "n^2": lambda n: n * n}[mo.group(1)]
            continue
        mt = re.fullmatch(r"(\d*|n)T\((.*)\)", part)
        assert mt, part
        coef, arg = mt.group(1), mt.group(2)
        if arg == "n-1":
            is_sub = True
            sub_coef = (lambda m_: m_) if coef == "n" else int(coef or 1)
        else:
            c = int(coef or 1)
            if arg == "n":
                shrink = "1"
            else:
                mm = re.fullmatch(r"(\d*)n/(\d+)", arg)
                assert mm, arg
                shrink = f"{mm.group(1) or 1}/{mm.group(2)}"
            terms.append((c, shrink))
    return Sub(sub_coef, f) if is_sub else Div(terms, f)


# ------------------------------------------------------------------ C01: code -> recurrence
def run_snippet(q, entry, call, sizes):
    code = re.search(r"```\n(.*?)\n```", q["question"], re.S).group(1)
    ns = {}
    exec(compile(code, "<snippet>", "exec"), ns)
    counts = []
    for n in sizes:
        cnt = [0]

        def tr(frame, event, arg):
            if frame.f_code.co_filename != "<snippet>":
                return None
            if event == "line":
                cnt[0] += 1
            return tr

        sys.settrace(tr)
        try:
            call(ns, n)
        finally:
            sys.settrace(None)
        counts.append(cnt[0])
    return counts


def code_class(counts, sizes):
    fn = lambda n: mpf(counts[0] if n == sizes[0] else counts[1])
    return {(float(p), k) for p in P_GRID for k in K_GRID if change(fn, sizes, p, k) < 0.12}


# distractors whose recurrence is structurally wrong (one call instead of two, halves instead of 1/4+3/4) but happens to
# grow like the correct one; they are wrong because the code makes two calls / unequal sizes, which the question shows
# (refuter 2026-10-18: a student could defensibly pick such a distractor, since T(n-1)+O(1) and 2T(n/2)+O(n) are also
# true statements about the cost function; both were replaced by options of a different growth class, so the list is empty)
SAME_CLASS_OK = set()


def c01():
    specs = {
        "C01-Q1": (lambda ns, n: ns["f"](n), (2 ** 10, 2 ** 22), Div),
        "C01-Q2": (lambda ns, n: ns["g"](list(range(n)), 0, n), (2 ** 9, 2 ** 15), Div),
        "C01-Q3": (lambda ns, n: ns["h"](n), (200, 1600), Sub),
        "C01-Q4": (lambda ns, n: ns["p"](n), (2 ** 9, 2 ** 15), Div),
    }
    for qid, (call, sizes, kind) in specs.items():
        q = QS[qid]
        counts = run_snippet(q, None, call, sizes)
        cc = code_class(counts, sizes)
        ok(len(cc) == 1, qid, f"code class not unique: {cc} {counts}")
        good = None
        for oid, val in mc_text(q).items():
            r = rec_from_tex(val)
            cls = stable_set(r)
            if oid == q["correctId"]:
                good = cls
                ok(cls == cc, qid, f"correct option class {cls} != code class {cc}")
            elif (qid, oid) in SAME_CLASS_OK:
                ok(cls == cc, qid, "allow-listed distractor should share the class")  # wrong structure, same growth
            else:
                ok(not (cls & cc), qid, f"distractor {oid} has the code's class {cls & cc}")
        DONE.add(qid)
    # exact structure of the calls: number of recursive calls per level for the three-way and 2-way snippets
    # Q2: two calls on halves; Q4: calls on n//4 and 3n//4
    q5 = QS["C01-Q5"]
    three = Div([(3, "1/3")], n_)
    for oid, val in mc_text(q5).items():
        cls = stable_set(rec_from_tex(val))
        if oid == q5["correctId"]:
            ok(cls == {(1.0, 1)}, "C01-Q5", f"correct option should be n log n, got {cls}")
        else:
            ok(not (cls & {(1.0, 1)}), "C01-Q5", f"distractor {oid} is n log n")
    ok(stable_set(three) == {(1.0, 1)}, "C01-Q5", "3T(n/3)+n is n log n")
    DONE.add("C01-Q5")
    # Q6: T(8)=32 via sympy rsolve on S(m)=T(2^m)
    m_ = sp.symbols("m", integer=True)
    S = sp.Function("S")
    sol = sp.rsolve(S(m_) - 2 * S(m_ - 1) - 2 ** m_, S(m_), {S(0): 1})
    ok(sol.subs(m_, 3) == QS["C01-Q6"]["step"]["answer"] == 32, "C01-Q6", "T(8)")
    t = {1: 1}
    for n in (2, 4, 8):
        t[n] = 2 * t[n // 2] + n
    ok(t[8] == 32, "C01-Q6", "direct T(8)")
    DONE.add("C01-Q6")


# ------------------------------------------------------------------ C02
def c02():
    theta_mcq("C02-Q1", Sub(1, lambda n: mpf(5)), "T(n)=T(n-1)+5")
    theta_mcq("C02-Q2", Sub(1, n_), "T(n)=T(n-1)+n")
    theta_mcq("C02-Q3", half(one), "T(n)=T(n/2)+1")
    n = sp.symbols("n", integer=True, positive=True)
    T = sp.Function("T")
    sol = sp.rsolve(T(n) - T(n - 1) - n, T(n), {T(1): 1})
    ok(sp.simplify(sol - n * (n + 1) / 2) == 0, "C02-Q4", f"rsolve {sol}")
    ok(sol.subs(n, 100) == QS["C02-Q4"]["step"]["answer"] == 5050, "C02-Q4", "T(100)")
    DONE.add("C02-Q4")
    # Q5: T(n)=T(n/2)+n is Theta(n); the series sum n/2^i < 2n
    r = half(n_)
    assert_clean(r, 1, 0, "C02-Q5")
    i = sp.symbols("i", integer=True, nonnegative=True)
    ok(sp.summation(sp.Rational(1, 2) ** i, (i, 0, sp.oo)) == 2, "C02-Q5", "geometric sum")
    st = QS["C02-Q5"]["step"]
    ok(st["type"] == "text" and st["normalize"] == "complexity" and "Θ(n)" in st["accept"], "C02-Q5", "accept list")
    DONE.add("C02-Q5")
    # Q6: T(n)=2T(n-1)+1, T(1)=1  ->  2^n - 1 ; no polynomial option is stable
    q = QS["C02-Q6"]
    sol = sp.rsolve(T(n) - 2 * T(n - 1) - 1, T(n), {T(1): 1})
    ok(sp.simplify(sol - (2 ** n - 1)) == 0, "C02-Q6", f"rsolve {sol}")
    rec = Sub(2, one)
    ok(not stable_set(rec), "C02-Q6", "exponential should match no polynomial/log class")
    ok(abs(rec.T(61) / rec.T(60) - 2) < 1e-6, "C02-Q6", "T(n+1)/T(n) -> 2")
    vals = mc_text(q)
    ok(vals[q["correctId"]] == r"$\Theta(2^n)$", "C02-Q6", "correct option is 2^n")
    ok(sum(1 for v in vals.values() if v == r"$\Theta(2^n)$") == 1, "C02-Q6", "exactly one exponential option")
    for oid, v in vals.items():
        pk = parse_theta(v)
        if pk:
            ok(change(rec.T, rec.sizes, pk[0], pk[1]) > 0.25, "C02-Q6", f"option {oid} matches 2^n growth")
    has_tex(q, r"T(n)=2T(n-1)+1")
    DONE.add("C02-Q6")


# ------------------------------------------------------------------ C03
def tree_level_sum(a, b, f, n, i):
    """brute force: expand the tree level by level and add up f over every node of level i"""
    level = [n]
    for _ in range(i):
        level = [x / b for x in level for _ in range(a)]
    return sum(f(x) for x in level)


def c03():
    # Q1: 3T(n/2)+n, n=16, level 2
    x = sp.Integer(16)
    brute = tree_level_sum(3, sp.Integer(2), lambda v: v, x, 2)
    ok(brute == 3 ** 2 * (x / 4) == QS["C03-Q1"]["step"]["answer"] == 36, "C03-Q1", f"{brute}")
    DONE.add("C03-Q1")
    theta_mcq("C03-Q2", Div([(2, "1/2")], n_), "T(n)=2T(n/2)+n")
    theta_mcq("C03-Q3", Div([(4, "1/2")], n_), "T(n)=4T(n/2)+n")
    theta_mcq("C03-Q4", Div([(2, "1/2")], lambda n: n * n), "T(n)=2T(n/2)+n^2")
    # Q5: leaves of 4T(n/2)+n at n=64
    leaves = 4 ** int(LG(64, 2))
    ok(leaves == 64 ** LG(4, 2) == QS["C03-Q5"]["step"]["answer"] == 4096, "C03-Q5", "leaves")
    DONE.add("C03-Q5")
    theta_mcq("C03-Q6", Div([(2, "1/2")], one), "T(n)=2T(n/2)+1")
    # level sums stated in the explanations
    n, i = sp.symbols("n i", positive=True)
    ok(sp.simplify(4 ** i * (n / 2 ** i) - n * 2 ** i) == 0, "C03-Q3", "level sum n*2^i")
    ok(sp.simplify(2 ** i * (n / 2 ** i) ** 2 - n ** 2 / 2 ** i) == 0, "C03-Q4", "level sum n^2/2^i")
    ok(sp.summation(2 ** sp.Symbol("j", integer=True, nonnegative=True), (sp.Symbol("j", integer=True, nonnegative=True), 0, 9)) == 2 ** 10 - 1,
       "C03-Q6", "1+2+...+n/2 = n-1")


# ------------------------------------------------------------------ master theorem helper
def master_case(a, b, k, logpow=0):
    """T=aT(n/b)+n^k log^logpow n  ->  (case or None, crit exponent)"""
    crit = LG(a, b)
    if logpow == 0:
        if k < crit:
            return 1, crit
        if k == crit:
            return 2, crit
        reg = sp.Rational(a) / sp.Rational(b) ** k if b != sp.sqrt(2) else sp.N(sp.Rational(a) / (b ** k))
        return (3 if reg < 1 else None), crit
    return None, crit  # f = n^crit * log^logpow: between the cases


def c04():
    q = QS["C04-Q1"]
    ok(LG(8, 2) == 3 == q["step"]["answer"], "C04-Q1", "log_2 8")
    DONE.add("C04-Q1")
    theta_mcq("C04-Q2", Div([(9, "1/3")], n_), "T(n)=9T(n/3)+n")
    ok(master_case(9, 3, 1)[0] == 1 and master_case(9, 3, 1)[1] == 2, "C04-Q2", "case 1")
    theta_mcq("C04-Q3", Div([(2, "1/2")], n_), "T(n)=2T(n/2)+n")
    ok(master_case(2, 2, 1)[0] == 2, "C04-Q3", "case 2")
    theta_mcq("C04-Q4", Div([(1, "1/2")], n_), "T(n)=T(n/2)+n")
    ok(master_case(1, 2, 1) == (3, 0), "C04-Q4", "case 3 (log_2 1 = 0)")
    ok(sp.Rational(1) * sp.Rational(1, 2) <= sp.Rational(1, 2), "C04-Q4", "regularity c=1/2")
    theta_mcq("C04-Q5", Div([(4, "1/2")], lambda n: n ** 3), "T(n)=4T(n/2)+n^3")
    ok(master_case(4, 2, 3)[0] == 3 and 4 * sp.Rational(1, 2) ** 3 == sp.Rational(1, 2), "C04-Q5", "case 3 + c=1/2")
    theta_mcq("C04-Q6", Div([(7, "1/2")], lambda n: n * n), "T(n)=7T(n/2)+n^2")
    ok(master_case(7, 2, 2)[0] == 1 and 2 < sp.N(LG(7, 2)) < 3, "C04-Q6", "case 1, 2.807")


# ------------------------------------------------------------------ C05
def c05():
    theta_mcq("C05-Q1", Div([(1, "1/4")], lambda n: mpf(1024)), "T(n)=T(n/4)+1024")
    ok(master_case(1, 4, 0)[0] == 2, "C05-Q1", "case 2 with a=1")
    theta_mcq("C05-Q2", Div([(2, "1/4")], lambda n: mp.sqrt(n)), "T(n)=2T(n/4)+\\sqrt{n}")
    ok(LG(2, 4) == sp.Rational(1, 2), "C05-Q2", "log_4 2")
    theta_mcq("C05-Q3", Div([(2, "1/sqrt(2)")], lambda n: n + mp.sqrt(n)),
              "T\\left(\\frac{n}{\\sqrt{2}}\\right)+n+\\sqrt{n}".replace("T\\left", "2T\\left"))
    ok(sp.simplify(sp.log(2, sp.sqrt(2))) == 2, "C05-Q3", "log_sqrt2 2 = 2")
    ok(sp.simplify(sp.sqrt(2) ** 2) == 2, "C05-Q3", "(sqrt 2)^2")
    q = QS["C05-Q4"]["step"]
    ok(LG(3, 9) == sp.Rational(1, 2) and abs(q["answer"] - 0.5) < 1e-12, "C05-Q4", "log_9 3")
    DONE.add("C05-Q4")
    # Q5 findbug: exactly line 0 is false, the rest are true
    st = QS["C05-Q5"]["step"]
    ok(st["bugIndex"] == 0, "C05-Q5", "bugIndex")
    ok(r"\log_9 3=2$" in st["lines"][0] and LG(3, 9) != 2, "C05-Q5", "line 0 is false")
    ok(sp.Rational(1, 2) + sp.Rational(1, 2) == 1, "C05-Q5", "line 1: n = n^(1/2+1/2)")
    ok(3 * sp.Rational(1, 9) == sp.Rational(1, 3), "C05-Q5", "line 2: 3*(n/9) = n/3 = c*n with c=1/3 < 1")
    assert_clean(Div([(3, "1/9")], n_), 1, 0, "C05-Q5")
    ok(master_case(3, 9, 1)[0] == 3, "C05-Q5", "case 3")
    ok(len(st["lines"]) == 4 and st["lines"][3].endswith(r"$T(n)=\Theta(n)$."), "C05-Q5", "line 3 claims Theta(n)")
    DONE.add("C05-Q5")
    # Q6: lowest a with growth > n^2 for aT(n/3)+n^2
    q = QS["C05-Q6"]
    grows = {}
    for oid, v in mc_text(q).items():
        a = int(v)
        r = Div([(a, "1/3")], lambda n: n * n)
        grows[a] = change(r.T, r.sizes, 2, 0) > 0.25
        crit = LG(a, 3)
        if a < 9:
            ok(crit < 2 and not grows[a], "C05-Q6", f"a={a} should be Theta(n^2)")
        else:
            ok(crit >= 2 and grows[a], "C05-Q6", f"a={a} should beat n^2")
    low = min(a for a, g in grows.items() if g)
    ok(str(low) == mc_text(q)[q["correctId"]] == "9", "C05-Q6", f"lowest growing a is {low}")
    DONE.add("C05-Q6")


# ------------------------------------------------------------------ C06
def c06():
    # Q1: 4T(n/2)+n^2 log n : no master case
    n = sp.symbols("n", positive=True)
    eps = sp.symbols("eps", positive=True)
    f = n ** 2 * sp.log(n)
    ok(master_case(4, 2, 2, 1)[0] is None, "C06-Q1", "between the cases")
    ok(sp.limit(f / n ** 2, n, sp.oo) == sp.oo, "C06-Q1", "f/n^2 -> oo (not case 2)")
    ok(sp.limit(f / n ** (2 + eps), n, sp.oo) == 0, "C06-Q1", "f/n^(2+eps) -> 0 (not case 3)")
    ok(sp.limit(f / n ** (2 - eps), n, sp.oo) == sp.oo, "C06-Q1", "f/n^(2-eps) -> oo (not case 1)")
    q = QS["C06-Q1"]
    ok(q["correctId"] == "d" and "אי אפשר" in mc_text(q)["d"], "C06-Q1", "answer is 'cannot'")
    has_tex(q, "T(n)=4T(n/2)+n^2\\log n")
    DONE.add("C06-Q1")
    # Q2: Theta(n^2 log^2 n)
    rec = Div([(4, "1/2")], lambda x: x * x * log2(x))
    theta_mcq("C06-Q2", rec, "T(n)=4T(n/2)+n^2\\log n")
    L, i = sp.symbols("L i", integer=True, positive=True)
    ok(sp.simplify(sp.summation(L - i, (i, 0, L)) - L * (L + 1) / 2) == 0, "C06-Q2", "sum of (L-i)")
    # Q3: level 3 sum / n^2 with n = 2^10
    nn = sp.Integer(2) ** 10
    lvl = tree_level_sum(4, sp.Integer(2), lambda v: v ** 2 * sp.log(v, 2), nn, 3)
    ok(sp.simplify(lvl / nn ** 2) == 7 == QS["C06-Q3"]["step"]["answer"], "C06-Q3", f"{lvl / nn ** 2}")
    DONE.add("C06-Q3")
    # Q4: only 3T(n/2)+n fits the form
    q = QS["C06-Q4"]
    forms = {"a": "sub", "b": "two sizes", "c": "non-constant a", "d": "ok"}
    ok(forms[q["correctId"]] == "ok" and mc_text(q)["d"] == r"$T(n)=3T(n/2)+n$", "C06-Q4", "correct form")
    rec = Div([(3, "1/2")], n_)
    assert_clean(rec, float(LG(3, 2)), 0, "C06-Q4")
    ok(master_case(3, 2, 1)[0] == 1, "C06-Q4", "case 1")
    DONE.add("C06-Q4")
    # Q5: T(n)=T(n-1)+n is quadratic, not a division recurrence
    q = QS["C06-Q5"]
    has_tex(q, "T(n)=T(n-1)+n")
    assert_clean(Sub(1, n_), 2, 0, "C06-Q5")
    ok(q["correctId"] == "b" and "חיסור" in mc_text(q)["b"], "C06-Q5", "reason is subtraction")
    DONE.add("C06-Q5")
    # Q6: T(3n/2)+n : the argument grows, so the recursion never reaches a base case
    q = QS["C06-Q6"]
    x = sp.Integer(10)
    seq = [x * sp.Rational(3, 2) ** j for j in range(6)]
    ok(all(seq[j] < seq[j + 1] for j in range(5)), "C06-Q6", "sizes grow")
    ok(sp.Rational(2, 3) < 1, "C06-Q6", "b = 2/3 < 1")
    ok(q["correctId"] == "c" and "b<1" in mc_text(q)["c"], "C06-Q6", "answer text")
    DONE.add("C06-Q6")


# ------------------------------------------------------------------ C07
def c07():
    q = QS["C07-Q1"]["step"]
    qv = sp.Rational(1, 4) ** 2 + sp.Rational(1, 2) ** 2
    ok(qv == sp.Rational(5, 16) and abs(float(qv) - q["answer"]) <= q["tol"], "C07-Q1", "q")
    DONE.add("C07-Q1")
    theta_mcq("C07-Q2", Div([(1, "1/4"), (1, "3/4")], n_), "T(n)=T(n/4)+T(3n/4)+n")
    ok(sp.Rational(1, 4) + sp.Rational(3, 4) == 1, "C07-Q2", "q=1")
    theta_mcq("C07-Q3", Div([(1, "1/3"), (1, "1/2")], n_), "T(n)=T(n/3)+T(n/2)+n")
    ok(sp.Rational(1, 3) + sp.Rational(1, 2) == sp.Rational(5, 6) < 1, "C07-Q3", "q=5/6")
    theta_mcq("C07-Q4", Div([(1, "1/2"), (1, "1/3"), (1, "1/6")], n_), "T(n)=T(n/2)+T(n/3)+T(n/6)+n")
    ok(sp.Rational(1, 2) + sp.Rational(1, 3) + sp.Rational(1, 6) == 1, "C07-Q4", "q=1")
    ok(sp.Rational(1, 2) + sp.Rational(1, 3) == sp.Rational(5, 6), "C07-Q4", "two-term q (the trap)")
    theta_mcq("C07-Q5", Div([(1, "1/3"), (1, "2/3")], lambda n: n * n), "T(n)=T(n/3)+T(2n/3)+n^2")
    ok(sp.Rational(1, 3) ** 2 + sp.Rational(2, 3) ** 2 == sp.Rational(5, 9) < 1, "C07-Q5", "q=5/9")
    # Q6: sum 1/(1-q) = 16/11 and the numeric ratio T(n)/n^2
    st = QS["C07-Q6"]["step"]
    i = sp.symbols("i", integer=True, nonnegative=True)
    s = sp.summation(sp.Rational(5, 16) ** i, (i, 0, sp.oo))
    ok(s == sp.Rational(16, 11) and abs(float(s) - st["answer"]) <= st["tol"], "C07-Q6", f"{s}")
    rec = Div([(1, "1/4"), (1, "1/2")], lambda n: n * n)
    ratio = rec.T(mpf(2) ** 100) / mpf(2) ** 200
    ok(abs(float(ratio) - st["answer"]) <= st["tol"], "C07-Q6", f"numeric ratio {ratio}")
    DONE.add("C07-Q6")


# ------------------------------------------------------------------ C08: the bank questions of the boss
def c08():
    ids = [q["bankId"] for q in LEVELS["C08"]["questions"]]
    ok(ids == ["24B-A-Q17", "24B-A-Q20", "24B-B-Q9", "24S-A-Q41", "25B-A-Q1c", "25B-B-Q1c"], "C08", f"ids {ids}")
    for bid in ids:
        b = BANK.get(bid)
        ok(b is not None and b.get("official") and not b.get("hold") and b.get("solutionSource") == "official-pdf"
           and b.get("topic") == "recurrences", bid, "must be an official, unheld bank question of the topic")

    def bank_theta(bid, rec):
        b = BANK[bid]
        stable = []
        for o in b["options"]:
            pk = parse_theta(o["value"])
            ok(pk is not None, bid, f"unparsed option {o['value']}")
            c = change(rec.fn(), rec.sizes, pk[0], pk[1])
            if c < 0.12:
                stable.append(o["id"])
            else:
                ok(c > 0.25, bid, f"borderline {c}")
        ok(stable == [b["correctId"]], bid, f"stable {stable} vs key {b['correctId']}")
    bank_theta("24B-A-Q17", Div([(1, "1/4"), (1, "3/4")], n_))
    bank_theta("24S-A-Q41", Div([(3, "1/sqrt(3)")], lambda n: n * n + mp.sqrt(n)))
    # 24B-A-Q20: aT(n/2)+n^2, options 2,3,4,6.5: lowest a beating n^2 is 4
    b = BANK["24B-A-Q20"]
    grow = {}
    for o in b["options"]:
        a = float(o["value"].strip("$"))
        grow[o["id"]] = a
    beats = {}
    for oid, a in grow.items():
        # T(n)=aT(n/2)+n^2 with real a: use the same engine
        r = Div([(mpf(a), "1/2")], lambda n: n * n)
        beats[oid] = change(r.T, r.sizes, 2, 0) > 0.25
    low = min(grow[o] for o in beats if beats[o])
    ok(low == 4.0 and grow[b["correctId"]] == 4.0, "24B-A-Q20", f"lowest a = {low}")
    # 24B-B-Q9: 6T(n/2)+n^2 is case 1 (answer a)
    ok(master_case(6, 2, 2)[0] == 1 and BANK["24B-B-Q9"]["correctId"] == "a", "24B-B-Q9", "case 1")
    assert_clean(Div([(6, "1/2")], lambda n: n * n), float(LG(6, 2)), 0, "24B-B-Q9")
    # 25B-A-Q1c : q=5/16, 16/11, Theta(n^2)
    st = BANK["25B-A-Q1c"]["steps"]
    ok(abs(st[0]["answer"] - 5 / 16) <= st[0]["tol"] and abs(st[1]["answer"] - 16 / 11) <= st[1]["tol"], "25B-A-Q1c", "step numbers")
    ok(parse_theta(next(o["value"] for o in st[2]["options"] if o["id"] == st[2]["correctId"])) == (2, 0), "25B-A-Q1c", "final")
    assert_clean(Div([(1, "1/4"), (1, "1/2")], lambda n: n * n), 2, 0, "25B-A-Q1c")
    # 25B-B-Q1c : no master case, true bound n^2 log^2 n
    st = BANK["25B-B-Q1c"]["steps"]
    ok(st[0]["answer"] == 2 and LG(4, 2) == 2, "25B-B-Q1c", "log_b a")
    ok(master_case(4, 2, 2, 1)[0] is None and st[2]["correctId"] == "a", "25B-B-Q1c", "no master case")
    assert_clean(Div([(4, "1/2")], lambda x: x * x * log2(x)), 2, 2, "25B-B-Q1c")


def main():
    c01(); c02(); c03(); c04(); c05(); c06(); c07(); c08()
    missing = sorted(set(QS) - DONE)
    ok(not missing, "coverage", f"questions with no check: {missing}")
    # every stored mcq answer id is an existing option
    for qid, q in QS.items():
        if "options" in q:
            ok(q["correctId"] in mc_text(q), qid, "correctId not among the options")
    if FAILS:
        print(f"\n{len(FAILS)} FAILURES")
        sys.exit(1)
    print(f"OK: {len(QS)} own questions + {len(LEVELS['C08']['questions'])} bank questions checked")


main()
