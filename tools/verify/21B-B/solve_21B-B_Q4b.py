"""21B-B Q4b: a decision tree with n leaves (full tree, 2n-1 nodes) has height >= log2(n); log2(2n-1) = Theta(log n). ASCII only."""
import math
for n in (2, 10, 1000, 10 ** 6, 10 ** 12):
    r = math.log2(2 * n - 1) / math.log2(n)
    print("n=%d log2(2n-1)/log2(n) = %.4f" % (n, r)); assert 1 <= r <= 2
# min height of a binary tree with n leaves is ceil(log2 n)
for n in range(1, 200):
    assert math.ceil(math.log2(n)) == min(h for h in range(0, 20) if 2 ** h >= n)
print("OK")
