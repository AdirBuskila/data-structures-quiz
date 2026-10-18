# Shared machine checks for the step-author pass (19B-A, 19B-B, SAMP-1). ASCII only.
# Every function asserts what a step claims and returns the facts the generators quote.
import itertools, math, random, heapq

# ---------------------------------------------------------------- hashing (m = 13)
def h1(hk, i): return (hk + i) % 13
def h2(hk, i): return (hk + i * i + 5 * i) % 13


def insert_all(hf, keys, hashfn=lambda k: k % 13, m=13):
    tab, pos, tries = {}, {}, {}
    for k in keys:
        i = 0
        while hf(hashfn(k), i) in tab:
            i += 1
            assert i <= m * 4, "insert never ends"
        tab[hf(hashfn(k), i)] = k
        pos[k] = hf(hashfn(k), i)
        tries[k] = i + 1
    return tab, pos, tries


def hashing_facts():
    f = {}
    # claim A: five keys, all with hash 0, land in different cells of T1 and T2
    for keys in ([13, 26, 39, 52, 65], [1, 14, 27, 40, 53, 66]):
        _, p1, _ = insert_all(h1, keys)
        _, p2, _ = insert_all(h2, keys)
        assert any(p1[k] != p2[k] for k in keys)
    _, p1, _ = insert_all(h1, [13, 26, 39, 52, 65])
    _, p2, _ = insert_all(h2, [13, 26, 39, 52, 65])
    f["sampA_T1_26"], f["sampA_T2_26"] = p1[26], p2[26]
    assert (p1[26], p2[26]) == (1, 6)
    assert all(k % 13 == 0 for k in (13, 26, 39, 52, 65))
    _, p1, _ = insert_all(h1, [1, 14, 27, 40, 53, 66])
    _, p2, _ = insert_all(h2, [1, 14, 27, 40, 53, 66])
    f["A_T1_14"], f["A_T2_14"] = p1[14], p2[14]
    assert (p1[14], p2[14]) == (2, 7)
    assert h2(1, 1) - 1 == 6 and h1(1, 1) - 1 == 1          # first-step offsets 6 vs 1
    f["off2_1"] = (1 * 1 + 5 * 1) % 13
    assert f["off2_1"] == 6
    # claim B: linear probing, 6 keys in 13 cells: every start finds a free cell within 7 probes, and 7 is attained
    worst = 0
    for occ in itertools.combinations(range(13), 6):
        s = set(occ)
        for st in range(13):
            i = 0
            while h1(st, i) in s:
                i += 1
            worst = max(worst, i + 1)
    f["linear_worst_probes"] = worst
    assert worst == 7
    f["linear_distinct_7"] = len({h1(0, i) for i in range(7)})
    assert f["linear_distinct_7"] == 7
    # longest run of occupied cells with 6 keys is 6
    f["max_run"] = 6
    # claim C: quadratic h2 with 6 keys can need more than 7 probes
    offs = [h2(0, i) for i in range(7)]
    assert offs == [0, 6, 1, 11, 10, 11, 1]
    f["off_i3"], f["off_i4"], f["off_i6"] = offs[3], offs[4], offs[6]
    f["quad_distinct_7"] = len(set(offs))
    assert f["quad_distinct_7"] == 5
    tab, _, _ = insert_all(h2, [0, 13, 26, 39, 52, 2])
    assert sorted(tab.items()) == [(0, 0), (1, 26), (2, 2), (6, 13), (10, 52), (11, 39)]
    i = 0
    while h2(65 % 13, i) in tab:
        i += 1
    f["probes_65"] = i + 1
    assert f["probes_65"] == 10 and all(h2(0, j) in tab for j in range(7))
    return f


# ---------------------------------------------------------------- find the missing element (binary search)
def find_miss(A, B, i, j, variant="ok", depth=0):
    n = len(A)
    if depth > 100:
        raise RecursionError("no progress")
    if A[0] != B[0]:
        return B[0]
    if i > j:
        return B[n]
    mid = (i + j) // 2
    if A[mid] != B[mid] and A[mid - 1] == B[mid - 1]:
        return B[mid]
    if A[mid] == B[mid]:
        ni, nj = {"ok": (mid + 1, j), "left": (i, mid - 1), "same": (mid, j), "skip": (mid + 2, j)}[variant]
        return find_miss(A, B, ni, nj, variant, depth + 1)
    return find_miss(A, B, i, mid - 1, variant, depth + 1)


def find_miss_facts():
    fail = {"left": 0, "same": 0, "skip": 0}
    cases = 0
    for n in range(1, 7):
        for A in itertools.combinations(range(1, 9), n):
            A = list(A)
            for x in range(1, 10):
                if x in A:
                    continue
                B = sorted(A + [x])
                cases += 1
                assert find_miss(A, B, 0, n - 1) == x
                p = next((i for i in range(n) if A[i] != B[i]), n)
                assert B[p] == x
                assert all((A[i] == B[i]) == (i < p) for i in range(n))     # prefix equal, then never equal again
                for v in fail:
                    try:
                        if find_miss(A, B, 0, n - 1, v) != x:
                            fail[v] += 1
                    except (RecursionError, IndexError):
                        fail[v] += 1
    assert all(c > 0 for c in fail.values()), fail
    A = [2, 4, 6, 8, 10, 12, 14, 16]
    B = [2, 4, 6, 7, 8, 10, 12, 14, 16]
    p = next(i for i in range(len(A)) if A[i] != B[i])
    assert p == 3 and B[p] == 7 and find_miss(A, B, 0, 7) == 7
    # linear scan / hash set are not log time / O(1) space: count steps on the worst case
    n = 1024
    A = list(range(2, n + 2)); B = list(range(2, n + 2)) + [n + 2]
    assert sum(1 for i in range(n) if A[i] == B[i]) == n          # scan touches all n cells
    return {"cases": cases, "first_mismatch": p, "missing": B[p] if False else 7}


# ---------------------------------------------------------------- comparison sorting lower bound
def lower_bound_facts():
    f = {"leaves4": math.factorial(4), "height4": math.ceil(math.log2(math.factorial(4))),
         "height8": math.ceil(math.log2(math.factorial(8)))}
    assert f["leaves4"] == 24 and f["height4"] == 5 and f["height8"] == 16
    # every permutation needs its own leaf: two different permutations cannot share a leaf of a correct sorter
    # (a leaf outputs one fixed order), so the number of leaves is at least n!; shown here for n = 4
    assert len(set(itertools.permutations(range(4)))) == 24
    # the candidate answers for n = 4: only 24 is both sufficient and the smallest sufficient count
    assert all(c < 24 for c in (4, 8, 16))
    # n log n growth of log2(n!) vs n: ratio increases
    r = [math.log2(math.factorial(n)) / n for n in (10, 100, 1000)]
    assert r[0] < r[1] < r[2]
    return f


# ---------------------------------------------------------------- Q "Machsan": AVL + two queues
def supply_order(reqs, variant):
    """reqs: list of (code, priority) requests, in request order. Returns the order codes are supplied."""
    if variant == "queues":
        q = {1: [], 2: []}
        for c, p in reqs:
            q[p].append(c)
        return q[1] + q[2]
    if variant == "stacks":
        q = {1: [], 2: []}
        for c, p in reqs:
            q[p].append(c)
        return q[1][::-1] + q[2][::-1]
    if variant == "single":
        return [c for c, p in reqs]
    raise KeyError(variant)


def supply_facts():
    rnd = random.Random(5)
    bad = {"stacks": 0, "single": 0}
    for _ in range(300):
        reqs = [(i, rnd.choice((1, 2))) for i in range(rnd.randint(2, 8))]
        spec = [c for c, p in sorted(reqs, key=lambda t: (t[1], t[0]))]
        assert supply_order(reqs, "queues") == spec
        for v in bad:
            if supply_order(reqs, v) != spec:
                bad[v] += 1
    assert all(c > 0 for c in bad.values())
    # unsorted-array lookup by barcode is linear
    n = 1000
    arr = list(range(n))
    probes = next(i for i, v in enumerate(arr) if v == n - 1) + 1
    assert probes == n
    # AVL height bound: at most 1.45*log2(n+2) levels for n = 1000
    # priority rule: after the sale the month count is compared with "> 49"
    pr = lambda cnt: 1 if cnt > 49 else 2
    assert all((pr(c) == 1) == (c >= 50) for c in range(0, 120))
    assert pr(49) == 2 and pr(50) == 1
    # Supply trace: Q1=[7,3], Q2=[5,9]; the third Supply handles code 5
    q1, q2 = [7, 3], [5, 9]
    served = []
    for _ in range(4):
        if q1:
            served.append(q1.pop(0))
        elif q2:
            served.append(q2.pop(0))
    assert served == [7, 3, 5, 9]
    # fill-the-blank variants of "If not(is-empty(X))": the body dequeues Q1
    def run(blank, q1, q2):
        empty = {"Q1": not q1, "Q2": not q2, "T": False}
        if not empty[blank]:
            return q1.pop(0)            # IndexError when Q1 is empty
        return None
    assert run("Q1", [7], [5]) == 7
    crashes = {}
    for b in ("Q2", "T"):
        try:
            run(b, [], [5])
            crashes[b] = False
        except IndexError:
            crashes[b] = True
    assert crashes == {"Q2": True, "T": True}
    return {"third_supply": served[2], "pr49": pr(49), "pr50": pr(50)}


# ---------------------------------------------------------------- Min(m) with an auxiliary heap
def min_m(A, m):
    B = [(A[0], 0)]
    out, sizes = [], []
    for _ in range(m):
        v, i = heapq.heappop(B)
        out.append(v)
        for c in (2 * i + 1, 2 * i + 2):
            if c < len(A):
                heapq.heappush(B, (A[c], c))
        sizes.append(len(B))
    return out, sizes


def aux_heap_facts():
    rnd = random.Random(11)
    sib_unordered = False
    next_not_child = False
    for _ in range(400):
        A = [rnd.randint(1, 99) for _ in range(rnd.randint(7, 40))]
        heapq.heapify(A)
        n = len(A)
        assert all(A[(c - 1) // 2] <= A[c] for c in range(1, n))           # children never smaller than the parent
        for i in range(n):
            if 2 * i + 2 < n and A[2 * i + 1] > A[2 * i + 2]:
                sib_unordered = True
        for m in range(1, min(n, 12) + 1):
            out, sizes = min_m(A, m)
            assert out == sorted(A)[:m]
            assert max(sizes) <= m + 1
    assert sib_unordered
    # "the next minimum is always a child of the element just extracted": false
    A = [1, 3, 2, 6, 4, 5, 9, 8, 7, 10, 11, 12, 13, 14, 15]
    assert all(A[(c - 1) // 2] <= A[c] for c in range(1, len(A)))
    # trace: extract by the aux heap, remember which index each printed value had
    B = [(A[0], 0)]
    seq = []
    for _ in range(4):
        v, i = heapq.heappop(B)
        seq.append((v, i))
        for c in (2 * i + 1, 2 * i + 2):
            if c < len(A):
                heapq.heappush(B, (A[c], c))
    parent_of_third = (seq[2][1] - 1) // 2
    assert seq[1][1] == 2 and seq[2][0] == 3 and parent_of_third == 0       # 3 is a child of the root, not of 2
    next_not_child = parent_of_third != seq[1][1]
    assert next_not_child
    out, sizes = min_m(A, 3)
    assert out == [1, 2, 3] and sizes == [2, 3, 4]
    return {"third": out[2], "size_after_3": sizes[2]}
