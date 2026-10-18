"""Checks for the 23A-A post-refute fixes (Q1c, Q2d, Q3, Q4b, points). ASCII only.
Run: PYTHONUTF8=1 py tools/verify/23A-A/verify_fix.py"""
import json, pathlib, random

ok = True


def check(name, cond):
    global ok
    print(("PASS " if cond else "FAIL ") + name)
    ok = ok and bool(cond)


def ceil_div(a, b):
    return -(-a // b)


# ---------------- Q1c: sparse product by merging a row list with a column list ----------------
def merge_dot(row, col):
    """row: sorted [(k, a_ik)], col: sorted [(k, b_kj)]. Returns (value, matched)."""
    i = j = 0
    s = 0
    hit = False
    while i < len(row) and j < len(col):
        if row[i][0] == col[j][0]:
            s += row[i][1] * col[j][1]
            hit = True
            i += 1
            j += 1
        elif row[i][0] < col[j][0]:
            i += 1
        else:
            j += 1
    return s, hit


def by_position(row, col):  # distractor: multiply the t-th cell of the row with the t-th cell of the column
    return sum(a[1] * b[1] for a, b in zip(row, col))


def all_pairs(row, col):  # distractor: every cell with every cell
    return sum(a[1] * b[1] for a in row for b in col)


random.seed(11)
good = True
pos_bad = pairs_bad = False
for _ in range(500):
    p, q, r = random.randint(1, 6), random.randint(1, 6), random.randint(1, 6)
    A = [[random.choice([0, 0, 0, random.randint(1, 9)]) for _ in range(q)] for _ in range(p)]
    B = [[random.choice([0, 0, 0, random.randint(1, 9)]) for _ in range(r)] for _ in range(q)]
    dense = [[sum(A[i][k] * B[k][j] for k in range(q)) for j in range(r)] for i in range(p)]
    rows = [[(k, A[i][k]) for k in range(q) if A[i][k]] for i in range(p)]
    cols = [[(k, B[k][j]) for k in range(q) if B[k][j]] for j in range(r)]
    for i in range(p):
        for j in range(r):
            v, hit = merge_dot(rows[i], cols[j])
            good &= v == dense[i][j]
            good &= hit == (dense[i][j] != 0)  # positive entries: a match <=> nonzero result
            pos_bad |= by_position(rows[i], cols[j]) != dense[i][j]
            pairs_bad |= all_pairs(rows[i], cols[j]) != dense[i][j]
check("Q1c merge on the shared index k equals the dense product (500 random pairs of matrices)", good)
check("Q1c distractor 'same position in the lists' gives a wrong product", pos_bad)
check("Q1c distractor 'every cell with every cell' gives a wrong product", pairs_bad)
row = [(1, 2), (3, 5), (4, 1)]
col = [(0, 7), (3, 2), (4, 3)]
check("Q1c step example: C_ij = 5*2 + 1*3 = 13", merge_dot(row, col) == (13, True))


# ---------------- Q2d: cuckoo search touches at most 2 cells; rehash reinserts all n keys ----------------
class Cuckoo:
    def __init__(self, m):
        self.m = m
        self.seed = random.randint(1, 10**9)
        self.T = [[None] * m, [None] * m]
        self.n = 0
        self.rehash_moves = 0

    def h(self, t, x):
        return hash((self.seed, t, x)) % self.m

    def search(self, x):
        probes = 0
        for t in (0, 1):
            probes += 1
            if self.T[t][self.h(t, x)] == x:
                return True, probes
        return False, probes

    def insert(self, x):
        cur, t = x, 0
        for _ in range(4 * self.m):
            p = self.h(t, cur)
            cur, self.T[t][p] = self.T[t][p], cur
            if cur is None:
                self.n += 1
                return
            t = 1 - t
        keys = [k for tab in self.T for k in tab if k is not None] + [cur]
        self.rehash(2 * self.m, keys)

    def rehash(self, m, keys):
        self.m = m
        self.seed = random.randint(1, 10**9)
        self.T = [[None] * m, [None] * m]
        self.n = 0
        for k in keys:
            self.rehash_moves += 1
            self.insert(k)


random.seed(4)
C = Cuckoo(4)
for x in range(2000):
    C.insert(x)
maxp = max(C.search(x)[1] for x in range(3000))
check("Q2d cuckoo search never probes more than 2 cells (2000 keys, 1000 misses)", maxp <= 2 and all(C.search(x)[0] for x in range(2000)))
check("Q2d rehash work is linear on the whole: total reinsertions %d <= 4n" % C.rehash_moves, C.rehash_moves <= 4 * 2000)


# ---------------- Q3: select positions with ceil, threshold > n/3 ----------------
def covers(n, thr_num, thr_den, positions):
    for L in range(1, n + 1):
        if L * thr_den <= thr_num * n:
            continue
        for s in range(1, n - L + 2):
            if not any(s <= p <= s + L - 1 for p in positions):
                return False
    return True


check("Q3 ceil(n/2) covers every >n/2 block, n=1..120", all(covers(n, 1, 2, [ceil_div(n, 2)]) for n in range(1, 121)))
check("Q3 ceil(n/3), ceil(2n/3) cover every >n/3 block, n=1..120",
      all(covers(n, 1, 3, [ceil_div(n, 3), ceil_div(2 * n, 3)]) for n in range(1, 121)))
check("Q3 floor(n/3), floor(2n/3) (1-based) fail for some n", any(not covers(n, 1, 3, [max(1, n // 3), max(1, 2 * n // 3)]) for n in range(3, 60)))
s = [1, 2, 3, 3]
check("Q3 floor counterexample [1,2,3,3]: positions 1,2 miss 3; ceil positions 2,3 hit it",
      3 not in (s[0], s[1]) and 3 in (s[ceil_div(4, 3) - 1], s[ceil_div(8, 3) - 1]))
check("Q3 distractor ceil(n/4), ceil(3n/4) misses a >n/3 block for some n",
      any(not covers(n, 1, 3, [ceil_div(n, 4), ceil_div(3 * n, 4)]) for n in range(3, 60)))
check("Q3 distractor only ceil(n/3) misses for some n", any(not covers(n, 1, 3, [ceil_div(n, 3)]) for n in range(3, 60)))
check("Q3 distractor only ceil(2n/3) misses for some n", any(not covers(n, 1, 3, [ceil_div(2 * n, 3)]) for n in range(3, 60)))
check("Q3 distractors position 1 / n / ceil(n/4) miss a majority for some n",
      all(any(not covers(n, 1, 2, [f(n)]) for n in range(2, 40)) for f in (lambda n: 1, lambda n: n, lambda n: ceil_div(n, 4))))
check("Q3 n=223e6: n mod 3 = 1, so floor and ceil positions differ", 223 * 10**6 % 3 == 1)
# '>= 33%' accepts a movie with 33.2% of the votes, which is not more than a third
n = 1000
check("Q3 a movie with 332 of 1000 votes passes '>= 33%' but is not > n/3", 332 >= 0.33 * n and not 332 * 3 > n)


def algo(arr):
    n = len(arr)
    s = sorted(arr)
    c = s[ceil_div(n, 2) - 1]
    maj = c if arr.count(c) * 2 > n else None
    third = None
    for c in (s[ceil_div(n, 3) - 1], s[ceil_div(2 * n, 3) - 1]):
        if c != maj and arr.count(c) * 3 > n:
            third = c
    return maj, third


random.seed(9)
good = True
for _ in range(3000):
    n = random.randint(1, 40)
    arr = [random.randint(1, 4) for _ in range(n)]
    maj = next((v for v in set(arr) if arr.count(v) * 2 > n), None)
    others = {v for v in set(arr) if v != maj and arr.count(v) * 3 > n}
    m, t = algo(arr)
    good &= m == maj and ((t in others) if others else t is None)
check("Q3 corrected algorithm finds the majority movie and a further >n/3 movie (3000 random arrays)", good)


# ---------------- Q4b: invariant of the hash-set filter ----------------
def run(lists, invariant_log=None):
    seen = set()
    out = [list(L) for L in lists]
    deleted = 0
    processed = []
    for li, L in enumerate(out):
        keep = []
        for x in L:
            processed.append(x)
            if x in seen:
                deleted += 1
            else:
                seen.add(x)
                keep.append(x)
            if invariant_log is not None:
                kept_so_far = [y for M in out[:li] for y in M] + keep
                invariant_log.append(seen == set(processed) and sorted(kept_so_far) == sorted(set(processed)))
        out[li] = keep
    return out, deleted


random.seed(2)
good = True
log = []
all_table_bad = False
for _ in range(400):
    lists = [random.sample(range(10), random.randint(0, 6)) for _ in range(random.randint(1, 5))]
    out, _ = run(lists, log)
    allm = {x for L in lists for x in L}
    all_table_bad |= len(allm) > 0 and len(lists[0]) < len(allm)  # table != all movies at start of the scan
check("Q4b invariant holds after every node: table = movies seen, each kept exactly once", all(log))
check("Q4b distractor 'table holds all movies of all lists' is false during the scan", all_table_bad)
out, d = run([[4, 1], [1, 6, 4], [6, 2, 7]])
check("Q4b step example: lists become [4,1],[6],[2,7] with 3 deletions", out == [[4, 1], [6], [2, 7]] and d == 3)

# ---------------- points: parts sum to the printed totals ----------------
raw = json.loads((pathlib.Path(__file__).resolve().parents[2] / "raw" / "23A-A.json").read_text(encoding="utf-8"))
tot = {}
for qq in raw["questions"]:
    rs = sum(r["points"] for r in qq.get("rubric", []))
    check("Q%d%s points %s == rubric sum %d" % (qq["num"], qq.get("part") and "" or "", qq.get("points"), rs), qq.get("points") == rs)
    tot[qq["num"]] = tot.get(qq["num"], 0) + rs
check("question totals 10+10+5 / 25 / 25 / 25 / 15: %s" % tot, tot == {1: 25, 2: 25, 3: 25, 4: 25, 5: 15})

print("ALL OK" if ok else "SOME FAILED")
