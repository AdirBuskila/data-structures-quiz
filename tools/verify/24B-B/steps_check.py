"""24B-B Q100 step values: heap Delete(x) needs both heapify directions; AVL DeleteMin min-pointer update. ASCII only."""
import sys, pathlib, random, heapq
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL
def up(a, i):
    sw = 0
    while i > 0 and a[(i-1)//2] > a[i]:
        a[(i-1)//2], a[i] = a[i], a[(i-1)//2]; i = (i-1)//2; sw += 1
    return sw
def down(a, i):
    n = len(a)
    while True:
        m = i
        for c in (2*i+1, 2*i+2):
            if c < n and a[c] < a[m]: m = c
        if m == i: return
        a[m], a[i] = a[i], a[m]; i = m
def is_heap(a): return all(a[(i-1)//2] <= a[i] for i in range(1, len(a)))
def delete(a, i, mode):
    a = list(a); a[i] = a[-1]; a.pop()
    if i < len(a):
        if mode in ("both", "up"): up(a, i)
        if mode in ("both", "down"): down(a, i)
    return a
H = [1, 10, 2, 11, 12, 3, 4]
assert is_heap(H)
r = delete(H, 3, "both"); assert is_heap(r) and r == [1, 4, 2, 10, 12, 3] and r[1] == 4
# only-down fails (here: 4 stays under 10)
assert not is_heap(delete(H, 3, "down"))
# only-up fails on some input
H2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0 + 15]
random.seed(2); found = False
for _ in range(2000):
    a = list(range(20)); random.shuffle(a); heapq.heapify(a)
    for i in range(len(a)):
        if not is_heap(delete(a, i, "up")): found = True
        assert is_heap(delete(a, i, "both"))
assert found
# up and down: at most one changes anything
for _ in range(500):
    a = list(range(25)); random.shuffle(a); heapq.heapify(a)
    for i in range(len(a)):
        b = list(a); b[i] = b[-1]; b.pop()
        if i < len(b):
            c = list(b); s = up(c, i); d = list(c); down(d, i)
            e = list(b); down(e, i); f = list(e); s2 = up(f, i)
            assert not (c != b and e != b)
# AVL DeleteMin: new minimum = leftmost node; root is not always the minimum
t = AVL()
for k in [5, 3, 8, 2, 4, 7, 9]: t.ins(k)
assert t.root.k == 5
t.dele(2)
n = t.root
while n.l: n = n.l
assert n.k == 3 and t.root.k != n.k
# min after DeleteMin is not the old pointer: the old node is gone
print("24B-B steps OK")
