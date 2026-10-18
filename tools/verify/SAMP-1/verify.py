# SAMP-1 checks: Q1b AVL counterexample, Q1e BST shape, Q1f exponent counterexample, Q2 probe sequences (m=13). ASCII only.
import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from avl import AVL
def shape(n): return None if n is None else (n.k, shape(n.l), shape(n.r))
# Q1b
t = AVL()
for k in (10, 8, 11, 7): t.ins(k)
print("Q1b original", shape(t.root))
t.ins(6); t.dele(6)
print("Q1b after ins 6 / del 6", shape(t.root))
# Q1e plain BST
class B:
    def __init__(s, k): s.k = k; s.l = s.r = None
def bins(r, k):
    if r is None: return B(k)
    if k < r.k: r.l = bins(r.l, k)
    else: r.r = bins(r.r, k)
    return r
r = None
for k in (50, 4, 48, 6, 87, 29, 81, 56, 11): r = bins(r, k)
n = r
for k in (4, 48, 6): n = n.l if k == 4 else (n.r if k == 48 else n.l)
# find 29
def find(r, k):
    while r.k != k: r = r.l if k < r.k else r.r
    return r
x = find(r, 29)
print("Q1e right child of 29:", x.r.k if x.r else None, "left child:", x.l.k if x.l else None)
# Q1f: f1^f2 = 2^(2n) vs g1^g2 = 2^n
print("Q1f ratio 2^(2n)/2^n for n=10,20,40:", [2**(2*n) // 2**n for n in (10, 20, 40)])
# Q2a
h1 = lambda hk, i: (hk + i) % 13
h2 = lambda hk, i: (hk + i*i + 5*i) % 13
keys = [13, 26, 39, 52, 65]
for name, h in (("T1", h1), ("T2", h2)):
    tab = {}; pos = {}
    for k in keys:
        i = 0
        while h(k % 13, i) in tab: i += 1
        tab[h(k % 13, i)] = k; pos[k] = h(k % 13, i)
    print("Q2a", name, pos)
# Q2b: linear, 7 probes always hit 7 distinct cells
print("Q2b linear distinct cells in 7 probes:", len({h1(0, i) for i in range(7)}))
# Q2c: quadratic
offs = [h2(0, i) for i in range(7)]
print("Q2c quadratic offsets i=0..6:", offs, "distinct:", len(set(offs)))
# a blocking configuration: 6 keys, new key (hash 0) finds all 7 probes occupied
occupied = set(offs)
print("Q2c blocking cells (", len(occupied), "cells <= 6 keys ): new key cannot be inserted in 7 attempts")
