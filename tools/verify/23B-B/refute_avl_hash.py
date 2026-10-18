"""Refuter, 23B-B: independent brute force for Q2a (AVL size gap), Q2b (min n for RL then LR) and Q3 (hashing).
Own AVL implementation; does not reuse the author's harness."""
import itertools, sys


class N:
    __slots__ = ("k", "l", "r", "h")

    def __init__(s, k):
        s.k, s.l, s.r, s.h = k, None, None, 1


def H(n): return n.h if n else 0


def upd(n): n.h = 1 + max(H(n.l), H(n.r))


def bal(n): return H(n.l) - H(n.r)


def rotR(y):
    x = y.l; y.l = x.r; x.r = y; upd(y); upd(x); return x


def rotL(x):
    y = x.r; x.r = y.l; y.l = x; upd(x); upd(y); return y


def ins(n, k, log):
    if n is None: return N(k)
    if k < n.k: n.l = ins(n.l, k, log)
    else: n.r = ins(n.r, k, log)
    upd(n)
    b = bal(n)
    if b > 1:
        if bal(n.l) >= 0:
            log.append("LL"); return rotR(n)
        log.append("LR"); n.l = rotL(n.l); return rotR(n)
    if b < -1:
        if bal(n.r) <= 0:
            log.append("RR"); return rotL(n)
        log.append("RL"); n.r = rotR(n.r); return rotL(n)
    return n


def run(seq):
    root = None; logs = []; third_rot = None
    for idx, k in enumerate(seq):
        lg = []
        root = ins(root, k, lg)
        logs.extend(lg)
        if idx == 2: third_rot = bool(lg)
    return logs, third_rot


# Q2b: minimal n such that rotations == [RL, LR] exactly and third insert does not rotate
for n in range(3, 11):
    sols = []
    for p in itertools.permutations(range(1, n + 1)):
        logs, t3 = run(p)
        if logs == ["RL", "LR"] and not t3:
            sols.append(p)
    print("n", n, "solutions", len(sols), sols[:6])
    if sols: break

# Q2a: AVL with root subtree size gap, minimal-size AVL of height h vs full tree
def minsz(h): return 0 if h <= 0 else (1 if h == 1 else 1 + minsz(h - 1) + minsz(h - 2))
for h in range(2, 14):
    L = 2 ** (h - 1) - 1  # perfect tree of height h-1 (heights counted in nodes)
    R = minsz(h - 2)
    print("height", h, "L", L, "R", R, "diff", L - R)

# Q3a
keys = [9, 2, 5, 4, 3, 8, 1]
T = [None] * 7
for k in keys:
    probes = []
    for i in range(7):
        pos = (k + i * k * k) % 7
        probes.append(pos)
        if T[pos] is None:
            T[pos] = k; break
    print("insert", k, "probes", probes)
print("table", T)
# Q3b: keys whose probe sequence never changes
for k in range(1, 30):
    seq = [(k + i * k * k) % 7 for i in range(7)]
    if len(set(seq)) < 7:
        print("bad key", k, seq)
