# 19B-B checks: Q1b recurrence mass, Q2 union-by-rank bound, Q6 hashing table (F(i)=i*i), insertion orders, deletion/search count. ASCII only.
import itertools, math
# Q1b: T(n)=2T(2n/5)+T(n/5)+n ; children sizes sum to n -> n per level, depth log_{5/2} n -> Theta(n log n)
print("Q1b children mass:", 2*(2/5) + 1/5)
def T(n, memo={}):
    if n < 5: return 1
    if n not in memo: memo[n] = 2*T(2*n//5) + T(n//5) + n
    return memo[n]
for n in (10**3, 10**4, 10**5, 10**6):
    print("Q1b T(n)/(n log n) n=%d: %.3f" % (n, T(n)/(n*math.log(n))))
# Q2: a tree of height 4 has at least 2^4 nodes with union by size/rank
print("Q2 min nodes for height 4:", 2**4, "> 14 elements")
# Q6
F = lambda i: i*i
final = {0: 14, 1: 8, 2: 1, 4: 21, 5: 15}
def run(order):
    tab = {}
    for x in order:
        i = 0
        while (x + F(i)) % 7 in tab:
            i += 1
            if i > 20: return None
        tab[(x + F(i)) % 7] = x
    return tab
good = [o for o in itertools.permutations([14, 8, 1, 21, 15]) if run(o) == final]
print("Q6 orders giving the table:", len(good), good[:3])
print("Q6 order 14,8,1,21,15 ->", run((14, 8, 1, 21, 15)))
# Q6c: after deleting 15, search 22 (22 mod 7 = 1)
probes = [(22 + F(i)) % 7 for i in range(6)]
print("Q6c probe cells:", probes)
tab = dict(final); del tab[5]
# with a deletion marker on cell 5: stop at first never-used cell
used = set(final)  # cells ever occupied
n = 0
for i in range(8):
    c = (22 + F(i)) % 7; n += 1
    if c not in used: break
print("Q6c cells examined with deletion marker:", n)
n = 0
for i in range(8):
    c = (22 + F(i)) % 7; n += 1
    if c not in tab: break
print("Q6c cells examined if cell simply emptied:", n)
