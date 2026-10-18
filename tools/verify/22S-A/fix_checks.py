"""22S-A post-refute checks. ASCII output.
Q1b: in AVL trees of n nodes, is the median (inorder rank ceil(n/2)) always the root or a child of the root?
Claim: yes for n<=3, no for some shapes at n=4 and n=5."""
import functools


@functools.lru_cache(None)
def shapes(n):
    if n == 0:
        return [(None, -1)]
    out = []
    for nl in range(n):
        for (sl, hl) in shapes(nl):
            for (sr, hr) in shapes(n - 1 - nl):
                if abs(hl - hr) <= 1:
                    out.append(((sl, sr), 1 + max(hl, hr)))
    return out


def size(t):
    return 0 if t is None else 1 + size(t[0]) + size(t[1])


def rank_depth(t, rank, d=0, base=0):
    """depth of the node with inorder rank `rank` (1-based)."""
    sl = size(t[0])
    r = base + sl + 1
    if rank == r:
        return d
    if rank < r:
        return rank_depth(t[0], rank, d + 1, base)
    return rank_depth(t[1], rank, d + 1, r)


for n in range(1, 8):
    deep = 0
    tot = 0
    for t, h in shapes(n):
        tot += 1
        if rank_depth(t, (n + 1) // 2) > 1:
            deep += 1
    print("n=%d shapes=%d median_deeper_than_child=%d" % (n, tot, deep))
    if n <= 3:
        assert deep == 0
    if n in (4, 5):
        assert 0 < deep < tot

# Q2b: leaves of a perfect tree of height k+1: n = 2^(k+2)-1, (n+1)/2 = 2^(k+1) = 2*2^k
for k in range(0, 10):
    n = 2 ** (k + 2) - 1
    assert (n + 1) // 2 == 2 ** (k + 1) == 2 * 2 ** k
print("OK 22S-A fix checks")
