"""Refuter, 23A-A Q3: for which select positions does a run of length > n/3 (resp. > n/2) in a sorted array
necessarily contain a probe position?  Brute force over all n and run placements."""
import math

def guaranteed(n, probes, thresh_strict):
    """probes: 0-based indices; every run of length L = floor(n*thresh)+1 (i.e. > n*thresh) must contain a probe."""
    L = (n * thresh_strict[0]) // thresh_strict[1] + 1  # smallest integer strictly > n*a/b
    for s in range(0, n - L + 1):
        if not any(s <= p <= s + L - 1 for p in probes):
            return False
    return True

conv = {
    "1-based k=floor(n/3),floor(2n/3)  (0-based idx k-1)": lambda n: [n // 3 - 1, 2 * n // 3 - 1],
    "1-based k=ceil(n/3),ceil(2n/3)    (0-based idx k-1)": lambda n: [-(-n // 3) - 1, -(-2 * n // 3) - 1],
    "0-based idx floor(n/3),floor(2n/3)": lambda n: [n // 3, 2 * n // 3],
    "0-based idx ceil(n/3),ceil(2n/3)": lambda n: [-(-n // 3), -(-2 * n // 3)],
}
for name, f in conv.items():
    bad = []
    for n in range(3, 400):
        pr = [p for p in f(n) if 0 <= p < n]
        if not guaranteed(n, pr, (1, 3)): bad.append(n)
    print(name, "fails for n =", bad[:12], "... total", len(bad))

# majority: a run > n/2 must contain the median positions
for name, f in {"1-based floor(n/2)": lambda n: [n // 2 - 1], "1-based ceil(n/2)": lambda n: [-(-n // 2) - 1],
                "0-based floor(n/2)": lambda n: [n // 2]}.items():
    bad = [n for n in range(2, 400) if not guaranteed(n, [p for p in f(n) if 0 <= p < n], (1, 2))]
    print(name, "majority fails for n =", bad[:10])

# the concrete n of the exam
n = 223_000_000
print("n mod 3 =", n % 3, "n/3 =", n / 3, "2n/3 =", 2 * n / 3, " n mod 2 =", n % 2)
for name, f in conv.items():
    print(name, f(n))
# Direct check for n=223e6 via interval argument: a run of length L=floor(n/3)+1 avoiding probes p<q must fit in a gap
def fits_gap(n, probes):
    L = n // 3 + 1
    pts = sorted(probes)
    gaps = [pts[0]] + [pts[i + 1] - pts[i] - 1 for i in range(len(pts) - 1)] + [n - 1 - pts[-1]]
    return max(gaps) >= L
for name, f in conv.items():
    print(name, "a >n/3 run can hide (n=223e6):", fits_gap(n, f(n)))
