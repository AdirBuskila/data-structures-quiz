"""SAMP-1 solver checks: Q3b heapsort decision tree for 3 elements (CLRS HEAPSORT, max-heap), Q2c probe cells. ASCII only."""
import itertools

def heapsort_trace(vals):
    """vals: dict name->value. Returns list of (x, y, x>y) comparisons and the final order of names."""
    A = [None, 'a', 'b', 'c']; comps = []
    def gt(x, y):
        r = vals[x] > vals[y]; comps.append((x, y, r)); return r
    def heapify(i, size):
        l, r = 2 * i, 2 * i + 1; largest = i
        if l <= size and gt(A[l], A[largest]): largest = l
        if r <= size and gt(A[r], A[largest]): largest = r
        if largest != i:
            A[i], A[largest] = A[largest], A[i]; heapify(largest, size)
    for i in (1,):                      # BUILD-MAX-HEAP: i = floor(3/2) .. 1
        heapify(i, 3)
    size = 3
    for i in (3, 2):
        A[1], A[i] = A[i], A[1]; size -= 1; heapify(1, size)
    return comps, A[1:]

tree = {}
for perm in itertools.permutations((1, 2, 3)):
    vals = dict(zip('abc', perm))
    comps, order = heapsort_trace(vals)
    assert [vals[x] for x in order] == [1, 2, 3]
    key = tuple(comps)
    print("a,b,c =", perm, " comparisons:", ["%s>%s:%s" % (x, y, 'Y' if r else 'N') for x, y, r in comps], " sorted:", "<" .join(order))
    assert len(comps) == 3

# Q2c: probe offsets of h2 for i = 0..9 and the constant-hash counterexample
offs = [(i * i + 5 * i) % 13 for i in range(12)]
print("Q2c offsets i=0..11:", offs, " distinct in i=0..6:", sorted(set(offs[:7])))
T = [None] * 13; probes_for_key = []
for k in range(7):                      # hash(k) = 0 for every key
    i = 0
    while T[offs[i] % 13] is not None: i += 1
    T[offs[i]] = k; probes_for_key.append(i + 1)
print("Q2c constant hash: probes per key", probes_for_key)
assert probes_for_key[6] > 7
print("OK")
