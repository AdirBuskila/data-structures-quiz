"""25A-A refuter: mcq 1a, 1c, 1d, Q2, Q3 simulations. ASCII only."""
import math, random, itertools

# ---- 1a: preorder -> BST, check AVL ----
def insert_bst(root, k):
    if root is None: return [k, None, None]
    if k < root[0]: root[1] = insert_bst(root[1], k)
    else: root[2] = insert_bst(root[2], k)
    return root
def height(n): return -1 if n is None else 1 + max(height(n[1]), height(n[2]))
def is_avl(n):
    if n is None: return True
    return abs(height(n[1]) - height(n[2])) <= 1 and is_avl(n[1]) and is_avl(n[2])
def preorder(n): return [] if n is None else [n[0]] + preorder(n[1]) + preorder(n[2])
rest = [16, 10, 8, 5, 12, 20, 25, 35, 32, 31, 42]
for X in (15, 19, 30, 36):
    seq = [X] + rest
    root = None
    for k in seq: root = insert_bst(root, k)   # inserting in preorder reproduces the unique BST with that preorder
    if preorder(root) != seq: print("1a X=%d not a valid BST preorder" % X); continue
    print("1a X=%d AVL? %s height %d" % (X, is_avl(root), height(root)))

# ---- 1c: union by rank, two tie conventions ----
def run(ops, tie):
    par = {i: i for i in range(1, 7)}; rank = {i: 0 for i in range(1, 7)}
    def find(x):
        while par[x] != x: x = par[x]
        return x
    for a, b in ops:
        ra, rb = find(a), find(b)
        if ra == rb: continue
        if rank[ra] < rank[rb]: par[ra] = rb
        elif rank[ra] > rank[rb]: par[rb] = ra
        else:
            if tie == "second_under_first": par[rb] = ra; rank[ra] += 1
            else: par[ra] = rb; rank[rb] += 1
    return par
target = {1: 3, 2: 1, 3: 3, 4: 3, 5: 3, 6: 5}
opts = {"a": [(1, 3), (5, 3), (4, 3), (2, 1), (6, 5)],
        "b": [(1, 2), (3, 4), (5, 6), (4, 6), (4, 2)],
        "c": [(1, 2), (3, 4), (5, 6), (6, 2), (4, 2)]}
for tie in ("second_under_first", "first_under_second"):
    print("1c tie", tie, {k: run(v, tie) == target for k, v in opts.items()})
# sanity: official 24S-A Q8 key b (same picture) under each tie convention
off = [(1, 2), (3, 4), (5, 6), (4, 2), (6, 2)]
print("24S-A official key b matches picture:", {t: run(off, t) == target for t in ("second_under_first", "first_under_second")})

# ---- 1d: linear probing sequences ----
final = {1: 61, 2: 52, 3: 93, 4: 11, 5: 85, 6: 44, 7: 73}
def lp(seq):
    A = [None] * 10
    for x in seq:
        i = x % 10
        for _ in range(10):
            if A[i] is None: A[i] = x; break
            i = (i + 1) % 10
        else: return None
    return A
for nm, s in (("a", [52, 93, 11, 85, 65, 44, 73]), ("b", [61, 93, 52, 85, 73, 44, 11]), ("c", [93, 52, 61, 85, 11, 73, 44]), ("d", [93, 61, 85, 52, 11, 44, 73])):
    A = lp(s)
    print("1d", nm, {i: v for i, v in enumerate(A) if v is not None} == final, A)

# ---- Q2 ----
print("Victor log_3 2.5 =", math.log(2.5, 3), " Sergio log_2.5 3 =", math.log(3, 2.5))
def Tn(a, b, f, n, memo):
    if n < 1: return 1
    key = round(n, 9)
    if key in memo: return memo[key]
    memo[key] = a * Tn(a, b, f, n / b, memo) + f(n); return memo[key]
for n in (1e3, 1e6, 1e12):
    print("n", n, "V/n", Tn(2.5, 3, lambda x: x, n, {}) / n, " S/n^1.199", Tn(3, 2.5, lambda x: x, n, {}) / n ** math.log(3, 2.5), " S/n", Tn(3, 2.5, lambda x: x, n, {}) / n)
print("2b log2 3 =", math.log2(3), "regularity 3*(1/2)^2 =", 3 / 4)

# ---- Q3: radix sort check ----
import string
def key_ok(ids):
    def csort(arr, f, K):
        cnt = [0] * (K + 1)
        for s in arr: cnt[f(s) + 1] += 1
        for i in range(K): cnt[i + 1] += cnt[i]
        out = [None] * len(arr)
        for s in arr: out[cnt[f(s)]] = s; cnt[f(s)] += 1
        return out
    a = csort(ids, lambda s: int(s[2]) - 1, 9)
    a = csort(a, lambda s: ord(s[1]) - 97, 26)
    a = csort(a, lambda s: ord(s[0]) - 65, 26)
    return a == sorted(ids)
ids = [random.choice(string.ascii_uppercase) + random.choice(string.ascii_lowercase) + str(random.randint(1, 9)) for _ in range(5000)]
print("3c LSD counting sorts correct:", key_ok(ids))
print("3 example sorted:", sorted(["Bx5", "Aa3", "Cz4", "Aa7", "Ba1"]))
