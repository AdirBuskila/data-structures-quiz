"""Refuter 23B-A Q4: deleting a count-1 node from the frequency max-heap by swap-with-last + heapifyDown only."""
A = [None, 5, 3, 4, 1, 2, 4]  # 1-based max-heap
assert all(A[i] <= A[i // 2] for i in range(2, 7))
pos = 4                      # node with count 1
A[pos] = A.pop()             # swap with last
n = len(A) - 1
# heapifyDown from pos
i = pos
while True:
    c = [j for j in (2 * i, 2 * i + 1) if j <= n and A[j] > A[i]]
    if not c: break
    j = max(c, key=lambda j: A[j]); A[i], A[j] = A[j], A[i]; i = j
print(A[1:], "valid max-heap:", all(A[i] <= A[i // 2] for i in range(2, n + 1)))
