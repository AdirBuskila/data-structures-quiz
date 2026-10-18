"""Refuter checks for 22S-B."""
import sys
sys.setrecursionlimit(100000)

def h(t): return -1 if t is None else 1 + max(h(t[1]), h(t[2]))
def bal(t): return h(t[1]) - h(t[2])
rot_count = []
def rot_r(t):
    k, (lk, ll, lr), r = t
    return (lk, ll, (k, lr, r))
def rot_l(t):
    k, l, (rk, rl, rr) = t
    return (rk, (k, l, rl), rr)
def fix(t):
    if t is None: return None
    b = bal(t)
    if b > 1:
        if bal(t[1]) < 0:
            rot_count.append(("LR", t[0])); t = (t[0], rot_l(t[1]), t[2])
        else: rot_count.append(("LL", t[0]))
        return rot_r(t)
    if b < -1:
        if bal(t[2]) > 0:
            rot_count.append(("RL", t[0])); t = (t[0], t[1], rot_r(t[2]))
        else: rot_count.append(("RR", t[0]))
        return rot_l(t)
    return t
def ins(t, x):
    if t is None: return (x, None, None)
    if x < t[0]: return fix((t[0], ins(t[1], x), t[2]))
    return fix((t[0], t[1], ins(t[2], x)))
def pop_min(t):
    if t[1] is None: return t[0], t[2]
    m, nl = pop_min(t[1]); return m, fix((t[0], nl, t[2]))
def dele(t, x):
    if t is None: return None
    if x < t[0]: return fix((t[0], dele(t[1], x), t[2]))
    if x > t[0]: return fix((t[0], t[1], dele(t[2], x)))
    if t[1] is None: return t[2]
    if t[2] is None: return t[1]
    m, nr = pop_min(t[2]); return fix((m, t[1], nr))
def pre(t): return [] if t is None else [t[0]] + pre(t[1]) + pre(t[2])
def show(t):
    return None if t is None else (t[0], show(t[1]), show(t[2]))

# original tree of Q2a (from page image): 8(3(,6),22(13(10,17),25))
T = (8, (3, None, (6, None, None)), (22, (13, (10, None, None), (17, None, None)), (25, None, None)))
assert abs(bal(T)) <= 1
rot_count.clear(); A1 = ins(T, 15); print("insert 15:", rot_count, show(A1))
rot_count.clear(); A2 = dele(T, 3); print("delete 3:", rot_count, show(A2), "root bal pre-fix", bal((8, None, T[2])))
print("22 bal after inserting 15 (pre-fix):", bal((22, (13, (10, None, None), (17, (15, None, None), None)), (25, None, None))),
      " 13 bal:", bal((13, (10, None, None), (17, (15, None, None), None))))
print("in Q2a step 4: bal of 22 in orig:", bal(T[2]))

# Q1b: preorder of T1=5(2(1),6) inserted into AVL
T1 = (5, (2, (1, None, None), None), (6, None, None)); assert abs(bal(T1)) <= 1 and abs(bal(T1[1])) <= 1
rot_count.clear(); t = None
for x in pre(T1): t = ins(t, x)
print("Q1b preorder", pre(T1), "rotations", rot_count)
# search for any AVL where preorder insertion needs rotation: confirm claim 'not necessarily no rotation'
# Q1a postorder of max-heap
heap = [100, 50, 30, 12, 10, 15]
def post(i):
    if i >= len(heap): return []
    return post(2 * i + 1) + post(2 * i + 2) + [heap[i]]
print("heap valid", all(heap[(i - 1) // 2] >= heap[i] for i in range(1, 6)), "postorder", post(0))
# Q1c: min heap insert best case: element bigger than parent
print("Q1c heap 2,10,5,12 insert 15 -> placed at idx4: parent 10 <15 no swap (best case 1 comparison)")
# Q1d
print("Q1d f=1/n: f/f^2 =", [n for n in (1, 10, 100)], "-> n, not -> 0 => f != o(f^2)")

# Q3a merge check
import random, math
def merge_cmp(a, b):
    i = j = c = 0; out = []
    while i < len(a) and j < len(b):
        c += 1
        if a[i] <= b[j]: out.append(a[i]); i += 1
        else: out.append(b[j]); j += 1
    out += a[i:] + b[j:]; return out, c
for _ in range(500):
    a = sorted(random.sample(range(1000), random.randint(1, 50))); b = sorted(random.sample(range(1000), random.randint(1, 50)))
    o, c = merge_cmp(a, b); assert o == sorted(a + b) and c <= len(a) + len(b) - 1
print("Q3a merge ok")

# Q3b: is_sub_tree vs brute
def ident(x, y):
    if x is None and y is None: return True
    if x is None or y is None: return False
    return x[0] == y[0] and ident(x[1], y[1]) and ident(x[2], y[2])
def find(k, t):
    while t is not None:
        if k == t[0]: return t
        t = t[1] if k < t[0] else t[2]
    return None
def is_sub(A, B):
    if B is None: return True
    if A is None: return False
    x = find(B[0], A)
    if x is None: return False
    return ident(x, B)
def bst_ins(t, k):
    if t is None: return (k, None, None)
    return (t[0], bst_ins(t[1], k), t[2]) if k < t[0] else (t[0], t[1], bst_ins(t[2], k))
def subtrees(t):
    if t is None: return []
    return [t] + subtrees(t[1]) + subtrees(t[2])
bad = 0
for _ in range(3000):
    ks = random.sample(range(30), random.randint(0, 12)); A = None
    for k in ks: A = bst_ins(A, k)
    ks2 = random.sample(range(30), random.randint(0, 6)); B = None
    for k in ks2: B = bst_ins(B, k)
    # also pick actual subtrees often
    if A and random.random() < .5: B = random.choice(subtrees(A))
    brute = B is None or any(ident(s, B) for s in subtrees(A))
    if is_sub(A, B) != brute: bad += 1
print("Q3b mismatches vs brute:", bad)
print("fill-blank with FALSE would break identical(None,None):",
      "identical on equal trees returns False -> yes")

# Q4a recurrence: intended T(n)=3T(n/3)+n+1
def Tn(n): return 1 if n <= 1 else 3 * Tn(n // 3) + n + 1
print([round(Tn(3 ** k) / (3 ** k * k), 2) for k in range(2, 10)], "levels for 729:", round(math.log(729, 3)))
# literal pseudocode with integer division: does it terminate?
calls = [0]
def WHAT(i, j, depth=0):
    calls[0] += 1
    if calls[0] > 200000: raise RuntimeError("blowup")
    if i < j:
        m = (i + j) // 3
        WHAT(i, m, depth + 1)
        WHAT(m + 1, 2 * (i + j) // 3, depth + 1)
        WHAT(2 * (i + j) // 3 + 1, j, depth + 1)
try:
    WHAT(1, 27); print("literal WHAT(1,27) calls", calls[0])
except RecursionError:
    print("literal WHAT: RecursionError (infinite recursion)")
except RuntimeError as e:
    print("literal WHAT: call blow-up >200000")

# Q4b hashing
def hh(x, i): return (x % 10 + i * (x // 7)) % 10
T10 = [None] * 10
for x in [7, 1, 6, 16, 14, 8, 21, 12]:
    i = 0; probes = []
    while True:
        p = hh(x, i); probes.append(p)
        if T10[p] is None: T10[p] = x; break
        i += 1
    print(" ", x, "probes", probes)
print(T10)
# alternative options
print("sum rubric 22S-B Q4b 3+2+2+3+2 =", 3 + 2 + 2 + 3 + 2)
