"""25S-A step checks for Q1a (the only open item that had no steps). ASCII only.
Run: PYTHONUTF8=1 py tools/verify/25S-A/steps_verify.py"""
import itertools
class Nd:
    def __init__(s, k, p=None): s.k = k; s.l = s.r = None; s.p = p
def ins(root, k):
    if root is None: return Nd(k)
    cur = root
    while True:
        if k < cur.k:
            if cur.l is None: cur.l = Nd(k, cur); break
            cur = cur.l
        else:
            if cur.r is None: cur.r = Nd(k, cur); break
            cur = cur.r
    return root
def find(root, k):
    while root.k != k: root = root.l if k < root.k else root.r
    return root
def depth(n):
    d = 0
    while n.p: n = n.p; d += 1
    return d
def dist(a, b):
    x, y, d = a, b, 0
    anc = set()
    while x: anc.add(id(x)); x = x.p
    while id(y) not in anc: y = y.p; d += 1
    lca = y
    x = a
    while x is not lca: x = x.p; d += 1
    return d
# the official example: 6 root, 4 its left child, 5 right child of 4
root = None
for k in (6, 4, 5): root = ins(root, k)
assert dist(find(root, 6), find(root, 5)) == 2
assert find(root, 4).p.k == 6 and find(root, 5).p.k == 4
# brute force over every insertion order of n keys (n <= 7): rule for the second largest and for distance > 1
for n in range(2, 8):
    for perm in itertools.permutations(range(1, n + 1)):
        r = None
        for k in perm: r = ins(r, k)
        mx = find(r, n); sec = find(r, n - 1)
        if mx.l is None: assert sec is mx.p                      # no left subtree: second largest is the parent
        else:
            m = mx.l
            while m.r: m = m.r
            assert sec is m                                      # rightmost node of the left subtree
        far = dist(mx, sec) > 1
        cond = mx.l is not None and mx.l.r is not None
        assert far == cond, (perm,)
        # "max has a left child" alone is NOT enough
        if mx.l is not None and mx.l.r is None: assert not far
print("25S-A Q1a steps ok")
