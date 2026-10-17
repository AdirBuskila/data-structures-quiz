"""Checks for 23A-A (data-structures). ASCII only."""
import random
random.seed(3)
ok = True
def check(n, c):
    global ok
    print(("PASS " if c else "FAIL ") + n); ok = ok and bool(c)
print_space = 223_000_000 * 5400, 223_000_000 * 20
check("Q1 space naive %d vs sparse %d (ratio %d)" % (print_space + (print_space[0] // print_space[1],)), print_space[0] == 5400 * print_space[1] // 20)
# Q3: majority via select(n/2); >1/3 element is at rank n/3 or 2n/3 of sorted order
good = True
for _ in range(2000):
    n = random.randint(1, 40)
    A = [random.randint(1, 5) for _ in range(n)]
    s = sorted(A)
    med = s[n // 2]
    maj = med if A.count(med) > n / 2 else None
    ref = next((v for v in set(A) if A.count(v) > n / 2), None)
    good &= maj == ref
    cands = {s[(n - 1) // 3], s[(2 * n - 1) // 3], s[n // 3], s[(2 * n) // 3]}
    for v in set(A):
        if A.count(v) > n / 3:
            good &= v in cands
check("Q3 median / n/3 / 2n/3 candidates cover every >1/2 and >1/3 element", good)
# Q4: hash-table filter keeps the first category occurrence only
good = True
for _ in range(500):
    cats = [random.sample(range(10), random.randint(0, 6)) for _ in range(random.randint(1, 4))]
    seen = set(); out = []
    for c in cats:
        keep = []
        for m in c:
            if m not in seen:
                seen.add(m); keep.append(m)
        out.append(keep)
    flat = [m for c in out for m in c]
    good &= len(flat) == len(set(flat)) and set(flat) == {m for c in cats for m in c}
check("Q4 hash filter leaves each movie in exactly one list", good)
print("ALL OK" if ok else "SOME FAILED")
