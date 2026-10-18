"""22B-A Q2: the official select-based algorithm (C/C1/C2 slips corrected) vs brute force. ASCII only.
Positions: X = A[ceil(n/2)], Y = A[ceil(n/3)], Z = A[ceil(2n/3)] of the sorted array (1-based)."""
import random, math
def brute(A):
    n = len(A); c = {v: A.count(v) for v in set(A)}
    return any(c[a] > n / 2 and c[b] > n / 3 for a in c for b in c if a != b)
def official(A, check_distinct):
    n = len(A); S = sorted(A)
    X = S[math.ceil(n / 2) - 1]; Y = S[math.ceil(n / 3) - 1]; Z = S[math.ceil(2 * n / 3) - 1]
    C = A.count(X)
    if C <= n / 2: return False
    C1 = A.count(Y); C2 = A.count(Z)
    if check_distinct:
        if (C1 <= n / 3 or Y == X) and (C2 <= n / 3 or Z == X): return False
    else:
        if C1 <= n / 3 and C2 <= n / 3: return False
    return True
random.seed(5)
wrong_plain = None
for _ in range(20000):
    n = random.randint(1, 15); A = [random.randint(1, 3) for _ in range(n)]
    b = brute(A)
    assert official(A, True) == b, A
    if official(A, False) != b and wrong_plain is None: wrong_plain = A
print("with the Y!=X / Z!=X check: agrees with brute force on 20000 arrays")
print("as printed (C1/C2 fixed only): wrong on", sorted(wrong_plain))
A = [1] * 7 + [2] * 3; print("example", A, "printed ->", official(A, False), "brute ->", brute(A))
