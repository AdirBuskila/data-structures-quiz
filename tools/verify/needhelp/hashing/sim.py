# -*- coding: utf-8 -*-
"""Hash-table simulator for the guided course "hashing": chaining, open addressing (linear / quadratic /
double hashing, deletion markers), load factor, cuckoo hashing, reachable cells of a probe sequence."""
from math import gcd

DELETED = "DEL"


# ---------------------------------------------------------------- probe sequences
def linear(h, m):
    return lambda k, i: (h(k) + i) % m


def quadratic(h, m, c1=0, c2=1):
    return lambda k, i: (h(k) + c1 * i + c2 * i * i) % m


def double(h1, h2, m):
    return lambda k, i: (h1(k) + i * h2(k)) % m


def reach(probe, k, m):
    """Set of cells the probe sequence of key k can ever visit (i = 0..m-1 is enough: every sequence
    here is a polynomial in i mod m, hence periodic with period m)."""
    return {probe(k, i) for i in range(m)}


def reach_long(probe, k, m):
    """Same, but over 4*m probes - used to assert that the period argument above is right."""
    return {probe(k, i) for i in range(4 * m)}


def probe_list(probe, k, n):
    return [probe(k, i) for i in range(n)]


# ---------------------------------------------------------------- open addressing
class Open:
    def __init__(self, m, probe, tombstones=True):
        self.m, self.probe, self.t, self.tomb = m, probe, [None] * m, tombstones

    def insert(self, k):
        """Returns (cell, collisions) or (None, tries) when the key cannot enter (m probes all blocked).
        A deleted cell counts as free for insertion."""
        for i in range(self.m):
            c = self.probe(k, i)
            if self.t[c] is None or self.t[c] == DELETED:
                self.t[c] = k
                return c, i
        return None, self.m

    def search(self, k):
        """Returns (found, cells_examined). Stops at an empty cell; passes over deleted cells."""
        n = 0
        for i in range(self.m):
            c = self.probe(k, i)
            n += 1
            if self.t[c] is None:
                return False, n
            if self.t[c] == k:
                return True, n
        return False, n

    def delete(self, k, mark=True):
        for i in range(self.m):
            c = self.probe(k, i)
            if self.t[c] is None:
                return False
            if self.t[c] == k:
                self.t[c] = DELETED if mark else None
                return True
        return False

    def load(self):
        return sum(1 for x in self.t if x not in (None, DELETED)) / self.m

    def used(self):
        return sum(1 for x in self.t if x is not None)  # occupied or marked

    def show(self):
        return {i: v for i, v in enumerate(self.t) if v is not None}


def build(m, probe, keys):
    o = Open(m, probe)
    res = [o.insert(k) for k in keys]
    return o, res


# ---------------------------------------------------------------- chaining
class Chain:
    def __init__(self, m, h):
        self.m, self.h, self.t = m, h, [[] for _ in range(m)]

    def insert(self, k):  # new key goes to the head of its list
        self.t[self.h(k)].insert(0, k)

    def search_cost(self, k):
        """Elements examined by an (un)successful search."""
        lst = self.t[self.h(k)]
        return (lst.index(k) + 1) if k in lst else len(lst)


# ---------------------------------------------------------------- cuckoo
def cuckoo_insert(T1, T2, h1, h2, x, limit=100):
    """Insert x into T1[h1(x)]; an evicted key goes to the other table at that table's own hash.
    Returns (ok, kicks, trace). ok False means a cycle (limit exceeded) and the tables are restored."""
    snap = (list(T1), list(T2))
    trace = []
    cur, side = x, 1
    for step in range(limit):
        if side == 1:
            c = h1(cur)
            old, T1[c] = T1[c], cur
        else:
            c = h2(cur)
            old, T2[c] = T2[c], cur
        trace.append((cur, side, c, old))
        if old is None:
            return True, step, trace
        cur, side = old, 3 - side
    T1[:], T2[:] = snap[0], snap[1]
    return False, limit, trace


def cuckoo_build(m, h1, h2, keys, limit=100):
    T1, T2 = [None] * m, [None] * m
    traces = []
    for x in keys:
        ok, kicks, tr = cuckoo_insert(T1, T2, h1, h2, x, limit)
        traces.append((x, ok, kicks, tr))
        if not ok:
            break
    return T1, T2, traces


# ---------------------------------------------------------------- insertion-order feasibility (linear)
def linear_table_from(m, h, order):
    o, _ = build(m, linear(h, m), order)
    return o.show()


def could_be_insertion_order(m, h, table, order):
    """table: dict cell->key. True iff inserting `order` into an empty linear-probing table gives exactly `table`."""
    if sorted(order) != sorted(table.values()):
        return False
    return linear_table_from(m, h, order) == table
