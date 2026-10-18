"""Checks for the 23B-A post-refute fixes (Q3a pitfall, Q4 DELETE, Q5 path compression). ASCII only.
Run: PYTHONUTF8=1 py tools/verify/23B-A/verify_fix.py"""
import random

ok = True


def check(name, cond):
    global ok
    print(("PASS " if cond else "FAIL ") + name)
    ok = ok and bool(cond)


# ---------------- Q3a: ternary heap parent formulas ----------------
def kids0(i):
    return [3 * i + 1, 3 * i + 2, 3 * i + 3]


def kids1(i):
    return [3 * i - 1, 3 * i, 3 * i + 1]


check("Q3a 0-based parent floor((i-1)/3)", all(i in kids0((i - 1) // 3) for i in range(1, 400)))
check("Q3a 1-based parent floor((i+1)/3)", all(i in kids1((i + 1) // 3) for i in range(2, 400)))
check("Q3a floor(i/3) wrong for 1-based (i=2 -> 0)", 2 // 3 == 0 and any(i not in kids1(i // 3) for i in range(2, 400)))
check("Q3a floor(i/3) wrong for 0-based (i=3 -> 1)", any(i not in kids0(i // 3) for i in range(1, 400)))


# ---------------- Q4: delete an arbitrary node of a binary max-heap ----------------
def is_heap(h):  # 0-based
    return all(h[(i - 1) // 2] >= h[i] for i in range(1, len(h)))


def up(h, i):
    while i > 0 and h[i] > h[(i - 1) // 2]:
        p = (i - 1) // 2
        h[i], h[p] = h[p], h[i]
        i = p


def down(h, i):
    n = len(h)
    while True:
        b = i
        for c in (2 * i + 1, 2 * i + 2):
            if c < n and h[c] > h[b]:
                b = c
        if b == i:
            return
        h[i], h[b] = h[b], h[i]
        i = b


def delete_at(h, i, mode):
    h = list(h)
    last = h.pop()
    if i < len(h):
        h[i] = last
        if mode in ("down", "both"):
            if mode == "both" and i > 0 and h[i] > h[(i - 1) // 2]:
                up(h, i)
            else:
                down(h, i)
        elif mode == "up":
            up(h, i)
    return h


cx = [5, 3, 4, 1, 2, 4]  # 1-based index 4 = 0-based 3 (value 1, parent value 3)
r = delete_at(cx, 3, "down")
check("Q4 counterexample [5,3,4,1,2,4]: delete index 4 (1-based) with heapifyDown only -> %s not a heap" % r, not is_heap(r))
check("Q4 same delete with up-or-down fix gives a heap", is_heap(delete_at(cx, 3, "both")))
random.seed(1)
good = True
down_bad = up_bad = none_bad = False
for _ in range(5000):
    n = random.randint(1, 20)
    h = [random.randint(1, 9) for _ in range(n)]
    for i in range(n // 2 - 1, -1, -1):
        down(h, i)
    i = random.randrange(n)
    res = delete_at(h, i, "both")
    good &= is_heap(res) and sorted(res) == sorted(h[:i] + h[i + 1:])
    down_bad |= not is_heap(delete_at(h, i, "down"))
    up_bad |= not is_heap(delete_at(h, i, "up"))
    none_bad |= not is_heap(delete_at(h, i, "none"))
check("Q4 delete with heapifyUp-or-heapifyDown always leaves a heap (5000 random)", good)
check("Q4 distractor heapifyDown only fails on some heap", down_bad)
check("Q4 distractor heapifyUp only fails on some heap", up_bad)
check("Q4 distractor no fix fails on some heap", none_bad)


# ---------------- Q5: n >= 2^h under union by size with path compression ----------------
def sim(n, ops, seed):
    rnd = random.Random(seed)
    par = list(range(n))
    size = [1] * n

    def find(x):
        r = x
        while par[r] != r:
            r = par[r]
        while par[x] != r:
            par[x], x = r, par[x]
        return r

    def heights():
        hs = {}
        for v in range(n):
            d, x = 0, v
            while par[x] != x:
                x = par[x]
                d += 1
            hs[x] = max(hs.get(x, 0), d)
        return hs

    lowered = False
    for _ in range(ops):
        before = heights()
        if rnd.random() < 0.5:
            a, b = find(rnd.randrange(n)), find(rnd.randrange(n))
            if a != b:
                if size[a] > size[b]:
                    a, b = b, a
                par[a] = b
                size[b] += size[a]
        else:
            x = rnd.randrange(n)
            find(x)
            after = heights()
            r = find(x)
            if after[r] < before[r]:
                lowered = True
        hs = heights()
        for root, h in hs.items():
            if size[root] < 2 ** h:
                return False, lowered
    return True, lowered


res = [sim(40, 300, s) for s in range(150)]
check("Q5 n >= 2^h for every tree after every operation (150 random runs with finds)", all(r[0] for r in res))
check("Q5 path compression does lower a tree height in some run (so the official 'only union changes height' is false)", any(r[1] for r in res))
check("Q5 max height for 1000 nodes is 9", 2 ** 9 <= 1000 < 2 ** 10)

print("ALL OK" if ok else "SOME FAILED")
