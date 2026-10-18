"""Reference binary heap for the guided course `heaps` (ASCII only).

Course conventions (as in the bank solutions): 0-based array, Left(i)=2i+1, Right(i)=2i+2,
Parent(i)=(i-1)//2. Default is a MIN-heap; `mx=True` gives a max-heap (heapsort, some exams).
Counters: `swaps` counts exchanges, `cmps` counts key comparisons with the convention
"heapify-down: 2 comparisons per level that has two children (child vs child, then node vs
smaller child), 1 when it has one child; heapify-up: 1 comparison per level".
"""
import math


class Heap:
    def __init__(self, a=None, mx=False, build=False):
        self.mx = mx
        self.a = list(a or [])
        self.swaps = 0
        self.cmps = 0
        if build:
            self.build()

    # --- order predicate: before(x, y) is True when x must sit above y
    def before(self, x, y):
        return x > y if self.mx else x < y

    @staticmethod
    def parent(i):
        return (i - 1) // 2

    @staticmethod
    def left(i):
        return 2 * i + 1

    @staticmethod
    def right(i):
        return 2 * i + 2

    def _swap(self, i, j):
        self.a[i], self.a[j] = self.a[j], self.a[i]
        self.swaps += 1

    def up(self, i):
        a = self.a
        while i > 0:
            p = (i - 1) // 2
            self.cmps += 1
            if self.before(a[i], a[p]):
                self._swap(i, p)
                i = p
            else:
                break
        return i

    def down(self, i, n=None):
        a = self.a
        n = len(a) if n is None else n
        while 2 * i + 1 < n:
            c = 2 * i + 1
            if c + 1 < n:
                self.cmps += 1
                if self.before(a[c + 1], a[c]):
                    c += 1
            self.cmps += 1
            if self.before(a[c], a[i]):
                self._swap(i, c)
                i = c
            else:
                break
        return i

    def build(self):
        n = len(self.a)
        for i in range(n // 2 - 1, -1, -1):
            self.down(i, n)

    def insert(self, x):
        self.a.append(x)
        return self.up(len(self.a) - 1)

    def peek(self):
        return self.a[0]

    def extract(self):
        a = self.a
        top = a[0]
        last = a.pop()
        if a:
            a[0] = last
            self.down(0)
        return top

    def decrease_key(self, i, v):
        """min-heap: set A[i]=v with v<=A[i] and repair (up). For a max-heap use increase."""
        self.a[i] = v
        return self.up(i)

    def change_key(self, i, v):
        old = self.a[i]
        self.a[i] = v
        if self.before(v, old):
            return self.up(i)
        return self.down(i)

    def delete_at(self, i):
        a = self.a
        last = a.pop()
        if i == len(a):
            return
        a[i] = last
        j = self.up(i)
        if j == i:
            self.down(i)

    def is_heap(self):
        a = self.a
        for i in range(1, len(a)):
            if self.before(a[i], a[(i - 1) // 2]):
                return False
        return True


def is_heap(a, mx=False):
    return Heap(a, mx).is_heap()


def build_heap(a, mx=False):
    h = Heap(a, mx, build=True)
    return h


def heapsort_trace(a):
    """In-place ascending heapsort with a max-heap. Returns (states after build, after each pass)."""
    h = Heap(a, mx=True, build=True)
    arr = h.a
    states = [list(arr)]
    for end in range(len(arr) - 1, 0, -1):
        arr[0], arr[end] = arr[end], arr[0]
        h.down(0, end)
        states.append(list(arr))
    return states


def height(n):
    return int(math.floor(math.log2(n)))


def dary_height(n, d):
    """height of the almost-complete d-ary tree with n nodes (root has height-level 0)."""
    h, cap, lvl = 0, 1, 1
    while cap < n:
        lvl *= d
        cap += lvl
        h += 1
    return h


def dary_parent(i, d):
    return (i - 1) // d


def dary_children(i, d, n=None):
    ch = [d * i + k for k in range(1, d + 1)]
    return [c for c in ch if n is None or c < n]


if __name__ == "__main__":
    import itertools
    import random

    random.seed(7)
    # self tests of the reference
    for trial in range(2000):
        n = random.randint(1, 40)
        arr = random.sample(range(1, 200), n)
        for mx in (False, True):
            h = build_heap(arr, mx)
            assert h.is_heap()
            h2 = Heap(mx=mx)
            for x in arr:
                h2.insert(x)
                assert h2.is_heap()
            out = []
            while h.a:
                out.append(h.extract())
                assert h.is_heap()
            assert out == sorted(arr, reverse=mx)
            if n > 1:
                h3 = build_heap(arr, mx)
                i = random.randrange(n)
                gone = h3.a[i]
                h3.delete_at(i)
                assert h3.is_heap() and sorted(h3.a) == sorted(set(arr) - {gone})
                h4 = build_heap(arr, mx)
                i = random.randrange(n)
                h4.change_key(i, random.randint(1, 300))
                assert h4.is_heap()
        st = heapsort_trace(arr)
        assert st[-1] == sorted(arr)
    # number of heap-ordered permutations (sanity)
    cnt = sum(1 for p in itertools.permutations(range(1, 8)) if is_heap(list(p)))
    assert cnt == 80, cnt  # classic count for n=7 min-heaps
    # build-heap is linear: sorted-ascending n=2^k-1 costs 2*(n//2) comparisons, zero swaps
    for k in range(2, 9):
        n = 2 ** k - 1
        h = build_heap(list(range(n)))
        assert h.swaps == 0 and h.cmps == n - 1
    # swaps of build-heap never exceed n
    for n in range(1, 300):
        h = build_heap(random.sample(range(1000), n))
        assert h.swaps <= n
    print("heap.py self tests ok")
