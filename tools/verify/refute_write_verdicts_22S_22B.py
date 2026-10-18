"""Writes tools/raw/_verify_<CODE>.json for 22S-A, 22S-B, 22S-C, 22B-B (refuter verdicts)."""
import json, pathlib
RAW = pathlib.Path(__file__).resolve().parents[1] / "raw"
A = "agree"

def tf(ans, note):
    return {"answer": ans, "confident": True, "transcriptionIssues": "", "note": note}
def ag(note, agrees=True, issues=""):
    return {"agrees": agrees, "confident": True, "transcriptionIssues": issues, "note": note}

out = {}

# ------------------------------------------------------------------ 22S-A
out["22S-A"] = {
 "examCode": "22S-A", "refuter": "data-structures refuter (22S-A/B/C, 22B-B batch)",
 "answers": {
  "1a": tf(False, "Sort via buildheap->AVL->inorder would be Theta(n) vs Omega(n log n). Page 2 matches."),
  "1b": tf(False, "9-key AVL on page 2, median 6 is a depth-2 leaf. Re-checked tree is AVL (own sim)."),
  "1c": tf(False, "Hash must be deterministic; randomint(k) breaks search."),
  "1d": tf(True, "Check parents of first n/2 cells: Theta(n). Page 3 pseudocode correct."),
  "1e": tf(False, "Final answer 'not true' is right (heapsort is unstable, so radix breaks). The printed official page (p.4) literally says 'counting sort is NOT stable' - that sentence is false (counting sort is stable, heapsort is the unstable one). Ruling: intermediate slip, not a final-answer error. Stored solution copies the slip verbatim while the stored rubric correctly says heapsort is unstable, so solution text and rubric contradict each other."),
  "2a": ag("Page 5 tree transcribed and image 22S-A-Q2a-sol.png match: 10(5(3(2(1,.),4),6(.,7)),15(11,17(.,18))). 12 nodes, AVL, height 4. Own AVL sim with real delete+rebalance: every deletion drops height 3 (both successor/predecessor conventions); no two insertions raise height. Of 184 AVL shapes with 12 nodes, 56 have height 3 (none qualify) and 128 have height 4 (all qualify)."),
  "2b": ag("Proof is correct. Step 'order' differs from the official page order (see items)."),
  "3a": ag("Swap x to front + partition, Theta(n). Example: 5 smaller, rank 6."),
  "3b": ag("Select on |a_i-x|; 5th smallest difference excluding x is 4; five items {8,10,11,14,15}. Note the official run on all n elements would count x itself (diff 0) so the 5th diff would be 3; solution never says to exclude x."),
  "4a": ag("Dina: T=4T(n/4)+n -> n log_4 n. Level counts and closed form verified. Official 'coefficient must be an integer' justification is weak but it is the printed one."),
  "4b": ag("Cuckoo sim: 11,12,32,6 give 0,1,0,3 evictions; inserting 7 evicts 10 times then returns to a seen state (cycle) -> rehash. Matches page 10 (7 collisions shown)."),
 },
 "items": {
  "1a": {"solution": A, "rubric": "agree (2+4+2=8)", "pitfalls": A, "steps": {}, "firstDivergence": None},
  "1b": {"solution": A, "rubric": "agree (2+3+3=8)",
         "pitfalls": "disagree: 'choose a small tree (3 to 5 nodes) where the median is always the root or a child' is false for 4 and 5 nodes. Own enumeration of AVL shapes: n=3 always root/child, but n=4 has 2 of 4 shapes and n=5 has 2 of 6 shapes where the median is deeper (e.g. 4(2(1,3),5) has median 3 at depth 2). Say 'up to 3 nodes'.",
         "steps": {}, "firstDivergence": "pitfalls[0]"},
  "1c": {"solution": A, "rubric": "agree (2+4+2=8)", "pitfalls": A, "steps": {}, "firstDivergence": None},
  "1d": {"solution": A, "rubric": "agree (2+3+3=8)", "pitfalls": A, "steps": {}, "firstDivergence": None},
  "1e": {"solution": "disagree (intermediate slip): 'counting sort is not stable' is false; the stored text copies the official slip. The verdict 'false' is right.",
         "rubric": "agree (2+3+3=8; rubric says heapsort is unstable, which is the correct reason)",
         "pitfalls": A, "steps": {},
         "firstDivergence": "solution sentence 2: counting sort claimed unstable (official p.4 says the same); stored key false is correct"},
  "2a": {"solution": A, "rubric": "agree (3+3+3+3=12)", "pitfalls": "agree: height-3 12-node AVL always has a deletion that keeps height (all 56 checked)",
         "steps": {"1": "agree: numeric 12 (min AVL height 4: 1,2,4,7,12,20)",
                   "2": "agree: choice 'a' height 4 (56 height-3 shapes fail, 128 height-4 shapes pass; rank of heights 3/4 only)"},
         "firstDivergence": None},
  "2b": {"solution": A, "rubric": "agree (2+2+2+4+3=13)", "pitfalls": A,
         "steps": {"1": "agree: induction on height (official says 'על גובה העץ')",
                   "2": "agree: numeric 16",
                   "3": "disagree (minor): official order is subtree sizes, IH, then n=2^(k+2)-1 and (n+1)/2, and only last 'x1+x2=2^(k+1)'. Stored order puts the leaf-sum line before the n-formula line. Both are logically valid, but 'order = the solution's real order' is not met. Fix: swap lines 3 and 4 or accept both.",
                   "4": "agree: findbug index 1 is the only wrong line"},
         "firstDivergence": "step 3 order"},
  "3a": {"solution": A, "rubric": "agree (2+2+3+1+2=10)", "pitfalls": A,
         "steps": {"1": "agree: choice a (partition)", "2": "agree: 5", "3": "agree: 6", "4": "agree: O(n)"}, "firstDivergence": None},
  "3b": {"solution": "agree (note: does not state to exclude x itself)", "rubric": "agree (5+4+3+3=15)", "pitfalls": A,
         "steps": {"1": "agree: choice a", "2": "agree: 4 (sorted diffs excl x: 1,2,2,3,4,7,8,13,20,33)", "3": "agree: 5", "4": "agree: O(n)"}, "firstDivergence": None},
  "4a": {"solution": A, "rubric": "agree (3+3+3+3=12)", "pitfalls": A,
         "steps": {"1": "agree: dina", "2": "agree: 64", "3": "agree: 5", "4": "agree: O(n log n)"}, "firstDivergence": None},
  "4b": {"solution": A, "rubric": "agree (3+4+4+2=13: note rubric lists 3+4+4+2+... check: 3,4,4,2 = 13)", "pitfalls": A,
         "steps": {"1": "agree: 2", "2": "agree: 3 evictions on 6", "3": "agree: 1 (T2 cell of 32)",
                   "4": "agree: cycle, rehash (10 evictions then repeated state)"}, "firstDivergence": None},
 },
 "mcqSpotCheck": {k: {"answer": str(v), "verdict": "agree"} for k, v in
                  {"1a": False, "1b": False, "1c": False, "1d": True, "1e": False}.items()},
}
# 22S-A rubric 4b actually has 5 rows: 3+4+4+2 -> fix text
out["22S-A"]["items"]["4b"]["rubric"] = "agree (3+4+4+2=13)"

# ------------------------------------------------------------------ 22S-B
out["22S-B"] = {
 "examCode": "22S-B", "refuter": "data-structures refuter (22S-A/B/C, 22B-B batch)",
 "answers": {
  "1a": tf(False, "Postorder of valid max-heap 100,50,30,12,10,15 = 12,10,50,15,30,100."),
  "1b": tf(False, "T1=5(2(1),6) is AVL, preorder 5,2,1,6; inserting 5,2,1 needs an LL rotation (own sim)."),
  "1c": tf(True, "Insert larger than parent: one comparison."),
  "1d": tf(False, "f=1/n: f/f^2=n not -> 0."),
  "1e": tf(False, "min then n-1 O(1) successors would sort in O(n)."),
  "2a": ag("Figure image 22S-B-Q2a-fig.png matches page 6: 8(3(.,6),22(13(10,17),25)). Own AVL sim: insert 15 -> one LR at 22 -> 8(3(.,6),17(13(10,15),22(.,25))); delete 3 -> bal(8)=-2 -> one RL at 8 -> 13(8(6,10),22(17,25)). Matches the official page 6/7."),
  "2b": ag("Perfect-tree induction correct."),
  "3a": ag("Both solutions valid: sorted array + merge Theta(n+k log k) (merge <= n+k-1 comparisons, 500 random runs), AVL Theta(n+k log n)."),
  "3b": ag("Official find + identical. 3000 random BST pairs vs brute force: 0 mismatches. Solution (and page) give no complexity analysis although the question asks for it (find O(h) + identical O(|B|))."),
  "4a": ag("T(n)=3T(n/3)+n+1 -> Theta(n log n). Caveat: the printed pseudocode, read literally with (i+j)/3 on subarrays with i>1, never terminates (own sim); the official page also uses the idealised recurrence. Not a key error."),
  "4b": ag("Probes: 7:[7] 1:[1] 6:[6] 16:[6,8] 14:[4] 8:[8,9] 21:[1,4,7,0] 12:[2]; table 21,1,12,_,14,_,6,7,16,8 matches page 11."),
 },
 "items": {
  "1a": {"solution": A, "rubric": "agree (2+3+3=8)", "pitfalls": A, "steps": {}, "firstDivergence": None},
  "1b": {"solution": A, "rubric": "agree (2+3+3=8)", "pitfalls": A, "steps": {}, "firstDivergence": None},
  "1c": {"solution": A, "rubric": "agree (2+4+2=8)", "pitfalls": A, "steps": {}, "firstDivergence": None},
  "1d": {"solution": A, "rubric": "agree (2+3+3=8)", "pitfalls": A, "steps": {}, "firstDivergence": None},
  "1e": {"solution": A, "rubric": "agree (2+4+2=8)", "pitfalls": A, "steps": {}, "firstDivergence": None},
  "2a": {"solution": A, "rubric": "agree (2+4+2+4=12)", "pitfalls": A,
         "steps": {"1": "agree: LR (bal22=2, bal13=-1)", "2": "agree: 17", "3": "agree: -2", "4": "agree: RL (bal22=+1)", "5": "agree: 13"},
         "firstDivergence": None},
  "2b": {"solution": A, "rubric": "agree (3+2+3+3+2=13)", "pitfalls": A,
         "steps": {"1": "agree: 15", "2": "agree: order (decompose, IH, sum)", "3": "agree: findbug index 1"}, "firstDivergence": None},
  "3a": {"solution": A, "rubric": "agree (3+4+3+5=15)", "pitfalls": A,
         "steps": {"1": "agree: O(k log k)", "2": "agree: O(n+k log k)", "3": "agree: O(n+k log n)", "4": "agree: choice a (assumes k<=n)"}, "firstDivergence": None},
  "3b": {"solution": "agree (no complexity analysis, which the question requires)", "rubric": "agree (3+4+1+2=10; no row for complexity)", "pitfalls": A,
         "steps": {"1": "agree: choice a (distinct values)", "2": "agree: order (empty checks, find, identical)", "3": "agree: fillblank TRUE, blankIndex 3 correct and unique"},
         "firstDivergence": None},
  "4a": {"solution": "agree (see caveat on literal pseudocode)", "rubric": "agree (4+3+3+3=13)", "pitfalls": A,
         "steps": {"1": "agree: choice a", "2": "agree: 9", "3": "agree: 6 (729=3^6)",
                   "4": "agree: O(n log n). Minor: explain says T/(n log3 n) stays in 0.9..1.6; with T(1)=1 it is 1.72 at n=9, 1.49 at n=27 then falls to 1.2 (not wrong asymptotically)"},
         "firstDivergence": None},
  "4b": {"solution": A, "rubric": "agree (3+2+2+3+2=12)", "pitfalls": A,
         "steps": {"1": "agree: 8", "2": "agree: 9", "3": "agree: 4 probes", "4": "agree: choice a unique"}, "firstDivergence": None},
 },
 "mcqSpotCheck": {k: {"answer": str(v), "verdict": "agree"} for k, v in
                  {"1a": False, "1b": False, "1c": True, "1d": False, "1e": False}.items()},
}

# ------------------------------------------------------------------ 22S-C
out["22S-C"] = {
 "examCode": "22S-C", "refuter": "data-structures refuter (22S-A/B/C, 22B-B batch)",
 "answers": {
  "1a": tf(True, "Own enumeration of full binary trees up to 17 nodes: every one with equal leaf depths is perfect and AVL (4 shapes). Sorted inorder = BST."),
  "1b": tf(False, "Own DP over all AVL shapes n<=60: the shallowest node with a missing child has depth growing with n (0,0,1,1,1,2,2,3 at n=1,2,3,5,10,20,40,60), so best case is Omega(log n)."),
  "1c": tf(False, "Output has n cells: Omega(n); sqrt(n) log n = o(n)."),
  "1d": tf(False, "Max of a min-heap is one of ~n/2 leaves; raising any single leaf keeps a valid heap (checked), so Omega(n)."),
  "1e": tf(False, "h=1, f=n, g=n^2 is a counterexample."),
  "2a": ag("Tree 8(5(3(2(1,.),4),7(6,.)),11(10(9,.),12)) is AVL height 4, 12 nodes. Own sim: delete 12 -> LL at 11 then LL at 8 -> 5(3(2(1,.),4),8(7(6,.),10(9,11))), two rotations. Note: the solution's side claim 'deleting 11 also gives two rotations' holds with successor replacement (LL at 12, LL at 8) but with predecessor replacement only one rotation, so it is convention dependent."),
  "2b": ag("Perfect-tree leaves = 2^h induction correct (also checked h 0..7)."),
  "3a": ag("Pointer-with-dummy merge scan: 5000 random pairs vs brute force, 0 mismatches; iterations <= 2N (max ratio 0.95). Example output a,c,d,f / e,h,i,j reproduced."),
  "3b": ag("HOLD agreed: read literally, WHAT(A[i..j]) with i>1 repeats the same range (WHAT(3,8) calls WHAT(3,8)); own sim: non-terminating for every n in 2..20. Intended T(n)=T(n/4)+T(3n/4)+n gives Theta(n log n) (T/(n log2 n) stable near 1.3).", agrees=True),
  "4a": ag("DFS visiting only nodes > x: at most 2m+1 visits, 3000 random heaps, 0 mismatches. Example heap 50,40,30,20,10,25,5 with x=35 visits 5 nodes (1,2,3,4,5)."),
  "4b": ag("h(0,*)=0; 5: 0 then (0+2)%5=2; 25: 0, 2, then 4. 3 collisions, table 0:0, 2:5, 4:25."),
 },
 "items": {
  "1a": {"solution": A, "rubric": "agree (2+2+2+2=8)", "pitfalls": A, "steps": {}, "firstDivergence": None},
  "1b": {"solution": A, "rubric": "agree (2+3+3=8)", "pitfalls": A, "steps": {}, "firstDivergence": None},
  "1c": {"solution": A, "rubric": "agree (2+4+2=8)", "pitfalls": A, "steps": {}, "firstDivergence": None},
  "1d": {"solution": A, "rubric": "agree (2+3+3=8)", "pitfalls": A, "steps": {}, "firstDivergence": None},
  "1e": {"solution": A, "rubric": "agree (2+4+2=8)", "pitfalls": A, "steps": {}, "firstDivergence": None},
  "2a": {"solution": "agree (side remark about deleting 11 is convention dependent)", "rubric": "agree (4+3+3+3=13)", "pitfalls": A,
         "steps": {"1": "agree: 12", "2": "agree: bal(11)=2", "3": "agree: LL (choice a)", "4": "agree: bal(8)=2", "5": "agree: 2 rotations"}, "firstDivergence": None},
  "2b": {"solution": A, "rubric": "agree (2+2+2+3+3=12)", "pitfalls": A,
         "steps": {"1": "agree: 32", "2": "agree: order", "3": "agree: findbug index 2"}, "firstDivergence": None},
  "3a": {"solution": A, "rubric": "agree (4+3+3+3=13)", "pitfalls": A,
         "steps": {"1": "agree: choice a", "2": "agree: fillblank 'p1.next' blankIndex 2, unique", "3": "agree: order", "4": "agree: O(N)"}, "firstDivergence": None},
  "3b": {"solution": "hold (agree with hold reason)", "rubric": "n/a", "pitfalls": "n/a", "steps": {}, "firstDivergence": "literal code non-terminating"},
  "4a": {"solution": A, "rubric": "agree (3+4+3+3=13)", "pitfalls": A,
         "steps": {"1": "agree: choice a", "2": "agree: 5 visits", "3": "agree: fillblank 'A[i] <= x' blankIndex 1 unique", "4": "agree: O(m)"}, "firstDivergence": None},
  "4b": {"solution": A, "rubric": "agree (1+3+4+2+2=12)", "pitfalls": A,
         "steps": {"1": "agree: 2", "2": "agree: 2", "3": "agree: 4", "4": "agree: 3"}, "firstDivergence": None},
 },
 "mcqSpotCheck": {k: {"answer": str(v), "verdict": "agree"} for k, v in
                  {"1a": True, "1b": False, "1c": False, "1d": False, "1e": False}.items()},
}

# ------------------------------------------------------------------ 22B-B
out["22B-B"] = {
 "examCode": "22B-B", "refuter": "data-structures refuter (22S-A/B/C, 22B-B batch)",
 "answers": {
  "1a": ag("Own AVL sim with successor replacement over all 12 keys: only 12, 15, 20 need no rotation. Tree on page 2 transcribed identically (34(12(5(3),22(20(15),28)),51(42,64(.,87))))."),
  "1b": ag("Delete 34: successor 42, RR at 51, then LR at 42 -> 22(12(5(3,.),20(15,.)),42(28,64(51,87))), height 3. Matches."),
  "2a": ag("Perfect 63-node heap: internal cell needs two larger values, only 63 exists; every leaf cell 32..63 achievable. Points: page prints '(5 נקודות)' here."),
  "2b": ag("Select + increment + (needed) BUILD-HEAP: 4000 random heaps with duplicates, 0 mismatches vs top-k increment; without BUILD-HEAP 855/4000 invalid. Theta(n)."),
  "3a": ag("Sort + balanced build; 300 random arrays, inorder = input. Note: step 2 explanation says the tree from 3,8,15,21,30 is 15(8(3),21(,30)) but with mid=floor((lo+hi)/2) the tree is 15(3(.,8),21(.,30)); numeric answers 15 and height 2 still right."),
  "3b": ag("Standard comparison lower bound reduction. ceil(log2 5!)=7."),
  "4a": ag("Alternating f,g counterexample correct."),
  "4b": ag("Probes 8:[1] 1:[1,3] 15:[1,2] 4:[4] 16:[2,4,6]; table _,8,15,1,4,_,16."),
  "5": ag("Yes. Union-by-size sequence reaches depths [0,1,1,2,1,2,2,3] (height 3); find(8) -> height 2. Exhaustive random union orders under size and rank rules: every height-3 8-set has exactly one node at depth 3, and find on it always yields height exactly 2. But the solution's sentence 'height 3 arises only when every union merges two equal-size sets (1+1,2+2,4+4)' is false: union(1,2),(1,3),(1,4) builds a size-4 star, then union(star,B2) gives height 3 (profile 0,1,1,1,1,2,2,3). Conclusion holds, justification is wrong."),
 },
 "items": {
  "1a": {"solution": A, "rubric": "agree (6+2+2=10, invented weights, see printedPoints)",
         "pitfalls": A,
         "steps": {"1": "agree: height 4", "2": "agree: bal(34)=+1", "3": "agree: bal(12)=-2 after deleting 3", "4": "agree: choice a (12,15,20)"}, "firstDivergence": None},
  "1b": {"solution": A, "rubric": "agree (3+3+4+2+3=15, invented weights)", "pitfalls": A,
         "steps": {"1": "agree: 42", "2": "agree: RR at 51", "3": "agree: bal=2", "4": "agree: LR", "5": "agree: 22"}, "firstDivergence": None},
  "2a": {"solution": A, "rubric": "agree (2+3=5, matches printed 5)", "pitfalls": A,
         "steps": {"1": "agree: 2", "2": "agree: 1", "3": "agree: choice a"}, "firstDivergence": None},
  "2b": {"solution": A, "rubric": "agree (5+4+3+3+2+3=20 = 25-5 implied)", "pitfalls": A,
         "steps": {"1": "agree: SELECT", "2": "agree: v=2", "3": "agree: 1 copy", "4": "agree: choice a (note explain array shows only the parent raise)", "5": "agree: O(n)"}, "firstDivergence": None},
  "3a": {"solution": A, "rubric": "agree (3+4+1+2=10, invented)", "pitfalls": A,
         "steps": {"1": "agree: O(n log n)", "2": "agree: 15",
                   "3": "agree numerically (height 2) but explanation describes the wrong tree (see answers 3a)",
                   "4": "agree: fillblank mid - 1, blankIndex 5"},
         "firstDivergence": "step 3 explain text only"},
  "3b": {"solution": A, "rubric": "agree (4+4+3+4=15, invented)", "pitfalls": A,
         "steps": {"1": "agree: 7", "2": "agree: order", "3": "agree: findbug index 2 (preorder)"}, "firstDivergence": None},
  "4a": {"solution": A, "rubric": "agree (1+5+3+3=12, invented)", "pitfalls": A,
         "steps": {"1": "agree: choice a", "2": "agree: 100", "3": "agree: 101"}, "firstDivergence": None},
  "4b": {"solution": A, "rubric": "agree (1+3+3+3+3=13, invented)", "pitfalls": A,
         "steps": {"1": "agree: 3", "2": "agree: 2", "3": "agree: 3 probes", "4": "agree: choice a unique"}, "firstDivergence": None},
  "5": {"solution": "disagree (justification sentence only; answer yes is right)",
        "rubric": "agree (2+5+3+3+2=15, matches printed 15 for the bonus)", "pitfalls": A,
        "steps": {"1": "agree: yes", "2": "agree: 3", "3": "agree: 1 node at depth 3",
                  "4": "agree: 2. Step-1 explain/solution claim 'only equal-size unions' is false though."},
        "firstDivergence": "solution paragraph 'למה בהכרח 2', claim 'only 1+1,2+2,4+4'"},
 },
 "printedPoints": {
  "page_reading": "Page 1: 4 questions of 25 points plus a bonus of 15; total up to 115. Page 2: 'שאלה 1 (25 נקודות) – לשאלה 2 סעיפים' with no split. Page 4: 'שאלה 2 (25 נקודות)' and sub-item 2a is printed '(5 נקודות)', 2b has no points (implies 20). Page 6: 'שאלה 3 (25 נקודות)' no split. Page 7: 'שאלה 4 (25 נקודות) – לשאלה 2 סעיפים (אין קשר בין הסעיפים)' no split. Page 9: 'שאלה 5 (15 נקודות) – שאלת הבונוס'.",
  "verdict": "Only these are really printed: Q1=25, Q2=25 with 2a=5 (so 2b=20), Q3=25, Q4=25, bonus=15. The splits 10+15 (Q1), 10+15 (Q3), 12+13 (Q4) are the step-author's inventions; 5+20 for Q2 is consistent with the print; bonus 15 matches."
 },
 "mcqSpotCheck": {},
}

for code, d in out.items():
    (RAW / f"_verify_{code}.json").write_text(json.dumps(d, ensure_ascii=False, indent=1), encoding="utf-8")
    print("wrote", code)
