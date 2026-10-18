"""Checks for the 23S-A post-refute notes (Q3c example, Q4b termination, Q5b/Q5c tie rules). ASCII only.
Run: PYTHONUTF8=1 py tools/verify/23S-A/verify_fix.py"""
import itertools, math

ok = True


def check(name, cond):
    global ok
    print(("PASS " if cond else "FAIL ") + name)
    ok = ok and bool(cond)


# ---------------- Q3c: restoring a min-heap (permutation of 1..n) ----------------
def is_min_heap(h):
    return all(h[(i - 1) // 2] < h[i] for i in range(1, len(h)))


def fillings(h):
    n = len(h)
    missing = sorted(set(range(1, n + 1)) - {v for v in h if v is not None})
    holes = [i for i, v in enumerate(h) if v is None]
    out = []
    for perm in itertools.permutations(missing):
        g = list(h)
        for i, v in zip(holes, perm):
            g[i] = v
        if is_min_heap(g):
            out.append(g)
    return out


def levels_hit(h):
    lv = lambda i: int(math.log2(i + 1))
    holes = [lv(i) for i, v in enumerate(h) if v is None]
    depth = lv(len(h) - 1)
    return sorted(holes) == list(range(depth + 1))


official = [1, 2, None, None]       # root 1 kept, right child and left-left blank
check("Q3c official example has 2 valid fillings", len(fillings(official)) == 2)
check("Q3c official example does NOT blank one node on every level (root kept)", not levels_hit(official))
fixed = [None, 2, None, None]       # same tree, root blanked too
check("Q3c official example with the root blanked: one hole per level", levels_hit(fixed))
f = fillings(fixed)
check("Q3c ... still 2 valid fillings %s (root forced to 1)" % f, len(f) == 2 and all(g[0] == 1 for g in f))
seven = [None, None, 2, 5, 6, None, 7]
f7 = fillings(seven)
check("Q3c refuter 7-node example: one hole per level, fillings %s" % f7,
      levels_hit(seven) and sorted(f7) == sorted([[1, 3, 2, 5, 6, 4, 7], [1, 4, 2, 5, 6, 3, 7]]))


# ---------------- Q4b: literal WHAT never terminates; intended recurrence ----------------
def what(i, j, depth=0):
    if depth > 200:
        return None
    if not i < j:
        return 1
    a, b = (i + j) // 3, 2 * (i + j) // 3
    tot = 1
    for (x, y) in ((i, a), (a + 1, b), (b + 1, j)):
        c = what(x, y, depth + 1)
        if c is None:
            return None
        tot += c
    return tot


check("Q4b literal WHAT(1..3) terminates", what(1, 3) is not None)
check("Q4b literal WHAT(1..9) does not terminate", what(1, 9) is None)
check("Q4b literal WHAT(4..6) calls WHAT(4..6) again", ((4 + 6) // 3 + 1, 2 * (4 + 6) // 3) == (4, 6))
check("Q4b literal WHAT(1..n) does not terminate for n = 9..60", all(what(1, n) is None for n in range(9, 61)))


def T(n):
    return 1 if n <= 1 else 3 * T(n // 3) + n


check("Q4b intended T(n)=3T(n/3)+n gives n(log3 n + 1) for n=3^k", all(T(3 ** k) == 3 ** k * (k + 1) for k in range(0, 12)))


# ---------------- Q5b / Q5c: tie rules ----------------
def run(n, ops, tie):
    """ops: ('u', a, b) or ('f', a). Union by size; tie in {'second_under_first','first_under_second',
    'small_label_root','big_label_root'}. Returns parent dict (1-based)."""
    par = {v: v for v in range(1, n + 1)}
    size = {v: 1 for v in range(1, n + 1)}

    def find(x):
        r = x
        while par[r] != r:
            r = par[r]
        while par[x] != r:
            par[x], x = r, par[x]
        return r

    for op in ops:
        if op[0] == 'f':
            find(op[1])
            continue
        ra, rb = find(op[1]), find(op[2])
        if ra == rb:
            continue
        if size[ra] != size[rb]:
            child, root = (ra, rb) if size[ra] < size[rb] else (rb, ra)
        elif tie == 'second_under_first':
            child, root = rb, ra
        elif tie == 'first_under_second':
            child, root = ra, rb
        elif tie == 'small_label_root':
            child, root = max(ra, rb), min(ra, rb)
        else:
            child, root = min(ra, rb), max(ra, rb)
        par[child] = root
        size[root] += size[child]
    return par


def tree(edges, n):
    return {v: edges.get(v, v) for v in range(1, n + 1)}


T5b = tree({1: 4, 6: 4, 5: 4, 7: 4, 2: 1, 3: 1, 8: 7}, 8)
T5c = tree({1: 7, 5: 7, 6: 7, 8: 7, 2: 1, 3: 1, 4: 3}, 8)
seq5b = [('u', 1, 2), ('u', 1, 3), ('u', 4, 6), ('u', 4, 5), ('u', 7, 8), ('u', 7, 4), ('u', 1, 4)]
seq5c = [('u', 1, 2), ('u', 3, 4), ('u', 1, 3), ('u', 5, 7), ('u', 6, 7), ('u', 8, 7), ('u', 1, 7)]
check("Q5b official sequence gives the tree under 'second under first'", run(8, seq5b, 'second_under_first') == T5b)
check("Q5b official sequence fails under 'first under second'", run(8, seq5b, 'first_under_second') != T5b)
for rule in ('second_under_first', 'first_under_second'):
    check("Q5c official sequence fails under fixed '%s'" % rule, run(8, seq5c, rule) != T5c)
# per-operation tie choice: the ties in seq5c are resolved second-under-first in ops 1-3 and first-under-second in ops 4,7
swapped = [('u', 1, 2), ('u', 3, 4), ('u', 1, 3), ('u', 7, 5), ('u', 6, 7), ('u', 8, 7), ('u', 7, 1)]
check("Q5c with union(7,5), union(7,1) the tree is reached under fixed 'second under first'", run(8, swapped, 'second_under_first') == T5c)

def bfs(n, rule):
    """All states reachable by union(a,b) (any a,b) and find(a) under a label-based tie rule."""
    start = tuple(range(1, n + 1))
    seen = {start}
    stack = [start]
    while stack:
        st = stack.pop()
        for a in range(1, n + 1):
            for b in range(a, n + 1):
                ops = [('f', a)] if a == b else [('u', a, b)]
                par = {v: st[v - 1] for v in range(1, n + 1)}
                # replay one op on the stored state
                size = {}
                for v in par:
                    r = v
                    while par[r] != r:
                        r = par[r]
                    size[r] = size.get(r, 0) + 1

                def find(x):
                    r = x
                    while par[r] != r:
                        r = par[r]
                    while par[x] != r:
                        par[x], x = r, par[x]
                    return r
                if ops[0][0] == 'f':
                    find(a)
                else:
                    ra, rb = find(a), find(b)
                    if ra != rb:
                        if size[ra] != size[rb]:
                            child, root = (ra, rb) if size[ra] < size[rb] else (rb, ra)
                        elif rule == 'small_label_root':
                            child, root = max(ra, rb), min(ra, rb)
                        else:
                            child, root = min(ra, rb), max(ra, rb)
                        par[child] = root
                t = tuple(par[v] for v in range(1, n + 1))
                if t not in seen:
                    seen.add(t)
                    stack.append(t)
    return seen


for rule in ('small_label_root', 'big_label_root'):
    S = bfs(8, rule)
    t5c = tuple(T5c[v] for v in range(1, 9))
    check("Q5c unreachable under the label rule '%s' (BFS, %d states)" % (rule, len(S)), t5c not in S)
    if rule == 'small_label_root':
        check("Q5b reachable under '%s'" % rule, tuple(T5b[v] for v in range(1, 9)) in S)

print("ALL OK" if ok else "SOME FAILED")
