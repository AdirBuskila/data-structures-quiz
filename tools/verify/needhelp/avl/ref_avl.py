"""Reference AVL implementation for the 'avl' guided course. ASCII only.

Conventions (the ones the course itself uses, see 22B-B-Q1b in the bank):
  * height of an empty tree is -1, of a leaf 0;  B(v) = h(left) - h(right)
  * insertion: ordinary BST insert, then walk up; the LOWEST unbalanced node z is fixed
  * deletion of a node with two children: replace by its IN-ORDER SUCCESSOR (min of right subtree);
    pred=True switches to the predecessor (only used to show that the convention matters)
  * deletion: walk up to the root and fix EVERY unbalanced node on the way
  * when B(y) == 0 for the heavy child y (deletion only) a single rotation is used
Tree text notation:  key  |  key(L,R)  with '.' for an empty subtree,  e.g.  20(10,30(.,40))
"""
import re


class Node:
    __slots__ = ("k", "l", "r", "h")

    def __init__(self, k, l=None, r=None):
        self.k, self.l, self.r, self.h = k, l, r, 0
        upd(self)


def H(n):
    return -1 if n is None else n.h


def upd(n):
    n.h = 1 + max(H(n.l), H(n.r))


def bal(n):
    return 0 if n is None else H(n.l) - H(n.r)


def rot_right(z):  # z.l = y comes up
    y = z.l
    z.l, y.r = y.r, z
    upd(z); upd(y)
    return y


def rot_left(z):  # z.r = y comes up
    y = z.r
    z.r, y.l = y.l, z
    upd(z); upd(y)
    return y


class AVL:
    def __init__(self, root=None, pred=False):
        self.root = root
        self.log = []          # list of (kind, key_of_z) kind in LL RR LR RL
        self.pred = pred

    # ---- rebalance one node ----
    def fix(self, n):
        upd(n)
        b = bal(n)
        if b > 1:
            if bal(n.l) < 0:
                self.log.append(("LR", n.k))
                n.l = rot_left(n.l)
                return rot_right(n)
            self.log.append(("LL", n.k))
            return rot_right(n)
        if b < -1:
            if bal(n.r) > 0:
                self.log.append(("RL", n.k))
                n.r = rot_right(n.r)
                return rot_left(n)
            self.log.append(("RR", n.k))
            return rot_left(n)
        return n

    def insert(self, k):
        self.root = self._ins(self.root, k)

    def _ins(self, n, k):
        if n is None:
            return Node(k)
        if k < n.k:
            n.l = self._ins(n.l, k)
        elif k > n.k:
            n.r = self._ins(n.r, k)
        else:
            raise ValueError("duplicate key %r" % k)
        return self.fix(n)

    def delete(self, k):
        self.root = self._del(self.root, k)

    def _del(self, n, k):
        if n is None:
            raise KeyError(k)
        if k < n.k:
            n.l = self._del(n.l, k)
        elif k > n.k:
            n.r = self._del(n.r, k)
        else:
            if n.l is None:
                return n.r
            if n.r is None:
                return n.l
            if self.pred:
                m = n.l
                while m.r:
                    m = m.r
                n.k = m.k
                n.l = self._del(n.l, m.k)
            else:
                m = n.r
                while m.l:
                    m = m.l
                n.k = m.k
                n.r = self._del(n.r, m.k)
        return self.fix(n)

    # ---- queries ----
    def rotations(self):
        """number of rotation OPERATIONS performed (a double rotation counts as 1 'fix')"""
        return len(self.log)

    def kinds(self):
        return [t for t, _ in self.log]


# ---------- text notation ----------
def fmt(n):
    if n is None:
        return "."
    if n.l is None and n.r is None:
        return str(n.k)
    return "%s(%s,%s)" % (n.k, fmt(n.l), fmt(n.r))


def parse(s):
    s = s.replace(" ", "")
    pos = [0]

    def rd():
        if s[pos[0]] == ".":
            pos[0] += 1
            return None
        m = re.compile(r"-?\d+").match(s, pos[0])
        k = int(m.group())
        pos[0] = m.end()
        n = Node(k)
        if pos[0] < len(s) and s[pos[0]] == "(":
            pos[0] += 1
            n.l = rd()
            assert s[pos[0]] == ","
            pos[0] += 1
            n.r = rd()
            assert s[pos[0]] == ")"
            pos[0] += 1
            upd(n)
        return n

    t = rd()
    assert pos[0] == len(s), "trailing text in %r" % s
    return t


def is_bst(n, lo=None, hi=None):
    if n is None:
        return True
    if (lo is not None and n.k <= lo) or (hi is not None and n.k >= hi):
        return False
    return is_bst(n.l, lo, n.k) and is_bst(n.r, n.k, hi)


def true_height(n):
    return -1 if n is None else 1 + max(true_height(n.l), true_height(n.r))


def is_avl(n):
    """independent recomputation (does not trust stored .h)"""
    if n is None:
        return True
    return abs(true_height(n.l) - true_height(n.r)) <= 1 and is_avl(n.l) and is_avl(n.r)


def inorder(n):
    return [] if n is None else inorder(n.l) + [n.k] + inorder(n.r)


def preorder(n):
    return [] if n is None else [n.k] + preorder(n.l) + preorder(n.r)


def true_bal(n):
    return true_height(n.l) - true_height(n.r)


def depth(n, k, d=0):
    if n is None:
        return None
    if n.k == k:
        return d
    return depth(n.l if k < n.k else n.r, k, d + 1)


def leaves(n):
    if n is None:
        return []
    if n.l is None and n.r is None:
        return [n.k]
    return leaves(n.l) + leaves(n.r)


def size(n):
    return 0 if n is None else 1 + size(n.l) + size(n.r)


def build(seq, pred=False):
    t = AVL(pred=pred)
    for k in seq:
        t.insert(k)
    return t


def from_text(s, pred=False):
    return AVL(parse(s), pred=pred)


# ---------- min nodes / leaf depth ----------
def N(h):
    if h < 0:
        return 0
    a, b = 0, 1  # N(-1)=0, N(0)=1
    for _ in range(h):
        a, b = b, a + b + 1
    return b


def min_nodes_bruteforce(h):
    """smallest AVL tree of height h by exhaustive recursion over shapes (sizes only)"""
    from functools import lru_cache

    @lru_cache(None)
    def m(h):
        if h == -1:
            return 0
        if h == 0:
            return 1
        return 1 + min(m(h - 1) + m(h - 1), m(h - 1) + m(h - 2), m(h - 2) + m(h - 1))
    return m(h)


def leaf_depths(maxh):
    """A[h] = set of depths d such that SOME AVL tree of height h has a leaf at depth d"""
    A = {-1: set(), 0: {0}}
    for h in range(1, maxh + 1):
        s = set()
        for hl, hr in ((h - 1, h - 1), (h - 1, h - 2), (h - 2, h - 1)):
            for c in (hl, hr):
                s |= {1 + x for x in A[c]}
        A[h] = s
    return A


def fib_tree(h, lo=1, left_tall=True):
    """minimal AVL tree of height h (Fibonacci tree); the taller subtree is on the left (or right).
    keys are lo, lo+1, ... in order; returns (root, next_key)"""
    if h == -1:
        return None, lo
    if h == 0:
        return Node(lo), lo + 1
    if left_tall:
        l, k = fib_tree(h - 1, lo, left_tall)
        r, nk = fib_tree(h - 2, k + 1, left_tall)
    else:
        l, k = fib_tree(h - 2, lo, left_tall)
        r, nk = fib_tree(h - 1, k + 1, left_tall)
    return Node(k, l, r), nk


if __name__ == "__main__":
    # self-test
    t = build([4, 7, 41, 3, 8, 6, 2, 5])
    assert fmt(t.root) == "7(4(3(2,.),6(5,.)),41(8,.))", fmt(t.root)
    assert t.kinds() == ["RR"]
    t = build([30, 20, 10, 25, 40, 50, 45])
    assert fmt(t.root) == "30(20(10,25),45(40,50))" and t.kinds() == ["LL", "RR", "RL"]
    assert [N(h) for h in range(8)] == [1, 2, 4, 7, 12, 20, 33, 54]
    assert all(N(h) == min_nodes_bruteforce(h) for h in range(20))
    print("ref_avl self-test ok")
