# ASK_ADIR - data-structures

Open questions for Adir. One entry per item; the orchestrator moves it to Resolved when answered.

## Open

### Short list: what needs Adir (details in the entries below)
1. **22S-C Q3b** (held, not in bank): printed WHAT code never terminates as written. Give the intended reading, or leave it held.
2. **25S-A Q1a**: is the official figure (4 joined to both 6 and 5) really a BST, or the path 6-4-5? Shipped as transcribed.
3. **25A-A Q2a**: Victor vs Sergio, a = 2.5 recursive calls. The course convention decides whether the solution flips.
4. **24S-A Q13**: the Insert bound as printed is O(n log n); is it a typo for O(log n)? Also form B Q5 sequence (100.105).
5. **24B-B forms 2-4**: are they moed B (covers say moed A)? Form 4 Q9 accepts both highlighted options; confirm.
6. **Points that are inferred or inconsistent**: 21B-B (no points printed, Q1 true/false worth 0, sitting totals 45), 21B-A (cover says 116, items sum 123 here), 22B-B (per-part split of whole-question totals), 25S-A Q5 (bonus 15 split 5 + 5 + 5 by QA).
7. **25A-A** (graded student paper) and **23A-A** (handwritten official solution): read by eye, some lines low confidence; see entries.
8. **Typo rulings** (labelled "הפתרון הרשמי עם תיקון", official false): 19B-A Q4a, 19B-A Q5a, 19B-B Q3c, 21B-A Q2, 21B-A Q3b, 21B-B Q4b, 22B-A Q2. Say if any ruling should be reversed.


<!-- Entry format:
### <exam code> Q<number> - <short title>
- Path: <absolute file path>
- Page: <page number>
- Question: <what is unclear or missing>
- Needed: <what Adir must provide or decide>
- Status: hold
-->

### 25S-A Q1a - figure of the official example may not be a valid BST
- Path: sitting 25S-A, official solution booklet
- Page: p.2 (Q1 part a answer box)
- Question: the official figure joins node 4 to both 6 and 5 (max 6, second 5, "distance 2"). Read literally, 5 and 6 as two children of 4 is not a binary search tree; it may be a drawing of the path 6-4-5 (root 6, left child 4, right child 5 of 4), which is valid.
- Needed: confirm the intended tree. Shipped as transcribed (confidence med), not held.
- Status: flagged

### 24B-A Q13 - open design question has no official solution
- Path: sitting 24B-A, all six forms (answer box "פתרון שאלה 13" is blank on every form)
- Page: p.6-7 of form 1 (and the equivalent Q13 page of each form)
- Question: the 25-pt open question (Search/Insert/Delete in O(log n), Add(d) in O(1)) has no key anywhere in the PDF.
- Needed: route to the solver (no-key).
- Solver (2026-10-18): solved (AVL with a global offset D), solutionSource solved, official false; checked by tools/verify/24B-A/solve_24B-A_Q13.py.
- Status: resolved

### 24B-B forms 2-4 - stale cover and a double-highlighted key
- Path: sitting 24B-B, forms 2-4 (cover pages)
- Page: covers of forms 2-4 read "16.7.24 / מועד א", only form 1 reads "8.8.24 / מועד ב"; form 4 Q9 (p.40) has two highlighted options (C and D)
- Question: the questions on forms 2-4 are moed-B questions (none occurs in 24B-A), so they were kept in 24B-B. Form 4 Q9 is shipped with both highlighted options accepted (both are true statements).
- Needed: confirm the forms belong to moed B, and that both options of that question should count.
- Status: flagged

### 24S-A Q13 and form B Q5 - no key, a doubtful bound, a typo
- Path: sitting 24S-A, the three forms
- Page: Q13 pages (p.7, p.20, p.33); form B Q5 (p.16)
- Question: Q13 (Search / Insert / Sum) has no printed solution on any form (answer box blank). Its table prints Insert as O(n log n) while Search and Sum are O(log n), which may be a typo for O(log n); transcribed as printed. Form B Q5 prints the preorder as "...,45,100.105" (period instead of comma); transcribed as 100,105.
- Needed: route Q13 to the solver (no-key); confirm the Insert bound and the form B sequence.
- Solver (2026-10-18): Q13 solved with Insert O(n log n) as printed (a second AVL of pair sums; that budget is what makes Sum O(log n) possible), solutionSource solved, official false; tools/verify/24S-A/solve_24S-A_Q13.py. If the bound was meant to be O(log n), the solution must change.
- Status: flagged (Q13 solved)

### 25A-A - student paper: partly unreadable handwriting
- Path: sitting 25A-A (graded student paper, scan)
- Page: p.5-23 (answer boxes)
- Question: answers are transcribed as text only (no crops), labelled student solution. Some lines could not be read and were left out (4.2 to 4.5, 5.1 to 5.3 are paraphrases with confidence low). 1.5: the student's algorithm checks only the value at rank 0.2n, which is not sufficient (counter-example in tools/verify/25A-A/verify.py), although the chosen answer (n) is right.
- Needed: solver and refuter pass; do not ship the low-confidence items as correct without it.
- Fixer (2026-10-18): after the refuter, 1.5 (four selects at ranks n/5..4n/5), 2.1 and 5.1-5.3 (orthogonal lists) were replaced by solved solutions with a visible "פתרון הסטודנט תוקן" note; 2.2 (regularity), 3.1 (inorder output) and 1.3 (tie rule stated as an assumption) were completed. All checked in tools/verify/25A-A/steps_verify.py.
- Status: flagged

### 25A-A Q2a - Victor vs Sergio: is a = 2.5 recursive calls allowed?
- Path: sitting 25A-A (graded student paper), question 2 part 1
- Page: Q2 answer box
- Question: the student answered "Victor is wrong, 2.5 recursive calls are impossible; Sergio is right". By the master theorem (a >= 1 real, b > 1), Victor's T(n)=2.5T(n/3)+n is Theta(n) (case 3) and Sergio's T(n)=3T(n/2.5)+n is Theta(n^1.2) (case 1), so Victor is right. Shipped as solved: Victor right, with a "הערה" that the answer may differ if the course requires an integer number of recursive calls (the exam puts 2.5 once as a and once as b, which suggests that trap may be intended).
- Needed: the course convention / the grade the student got on 2.1. If the course's answer is the integer-calls argument, the solution and steps must flip.
- Status: flagged

### 23A-A Q1-Q5 - handwritten official solution read by eye
- Path: sitting 23A-A, solution booklet
- Page: p.2-13 (answer boxes)
- Question: the lecturer solution is handwritten on a tablet; a few words were hard to read (Q1c matrix-multiplication wording, Q2a/Q2c wording, Q3 "check the second film", Q5a first line). Q4b, Q4c, Q2d and Q5a only say "see above". Transcribed in typed form, confidence med/low.
- Needed: a quick eye check of the flagged items (Q1c, Q3, Q5a) against the handwriting.
- Status: flagged

### 23A-A post-refute fixes - completed solutions, Q3 correction, inferred point split
- Path: sitting 23A-A, solution booklet; checks in tools/verify/23A-A/verify_fix.py
- Page: Q1c, Q2d, Q3, Q4b answer boxes; Q2/Q4/Q5 headers
- Question: Q1c, Q2d, Q4b official text is a one-line pointer ("see above"); each now carries the official line first, then a complete solved version (solutionSource solved, official false). Q3: labelled "הפתרון הרשמי עם תיקון": threshold "at least 33%" changed to "more than n/3", both candidates checked; select positions written as ceil(n/2), ceil(n/3), ceil(2n/3) with the rounding stated as an assumption (the booklet gives none; floor fails, e.g. [1,2,3,3]). The booklet prints only question totals for Q2 (25), Q4 (25), Q5 (15 bonus); the per-part split Q2 7/6/8/4, Q4 15/5/5, Q5 3/8/4 is inferred.
- Needed: confirm the point split if the grading sheet has one.
- Status: flagged

### 23B-A Q5 - path compression gap in the official proof (note added)
- Path: sitting 23B-A, official solution file, Q5
- Page: Q5 answer (case 2)
- Question: the official proof says "the only operation that affects tree height is union"; with path compression find also lowers heights. The conclusion n >= 2^h still holds (find keeps n and never raises h; random simulation in tools/verify/23B-A/verify_fix.py). Kept with a visible "הערה" giving the missing argument. Q4 DELETE (heapifyDown only) was shipped with the "הפתרון הרשמי עם תיקון" label (counterexample [5,3,4,1,2,4]).
- Needed: none
- Status: flagged

### 23S-A Q3c, Q4b, Q5b, Q5c - notes added after the refuter
- Path: sitting 23S-A, official solution file
- Page: Q3c, Q4b, Q5 answers
- Question: Q3c official example keeps the root, so it does not delete one node from every level; the example still works with the root blanked (root forced to 1), so it was kept with a "הערה" and a 7-node example. Q4b: the printed WHAT code never terminates (WHAT(4..6) calls itself); "הערה" states the intended thirds reading. Q5b/Q5c: the question gives no tie rule; Q5b assumes "second argument's root under the first", Q5c mixes both directions (per-operation tie choice; with union(7,5), union(7,1) it fits the fixed second-under-first rule; unreachable under a label-based rule). Checks in tools/verify/23S-A/verify_fix.py.
- Needed: none unless the course states a tie rule.
- Status: flagged

### 23B-A Q3 and Q1 - solution file differs from the exam booklet
- Path: sitting 23B-A, solution file vs exam booklet
- Page: Q3 intro (solution file p.7 vs exam p.7), Q1 header
- Question: the solution file says the ternary heap children are larger than the parent (min-heap wording) while the exam booklet and the example figure define a max-heap (children smaller); Q1 header says 2 parts in the solution file and 3 parts in the booklet. The exam booklet text was used.
- Needed: none unless you want the solution-file wording kept.
- Status: flagged

### 22B-B and 22S-C - no answer source (all items held "no-key")
- Path: sitting 22B-B, the "+ solution" PDF and its second copy; sitting 22S-C, the exam PDF
- Page: 22B-B p.2-9 (every answer box empty); 22S-C p.2-10
- Question: the format triage lists an official solution for 22B-B, but both 22B-B files are the bare exam booklet with blank answer boxes. 22S-C was already known to have no key. All 9 items of 22B-B and all 11 of 22S-C are held.
- Needed: route both sittings to the solver (no-key), or supply a key for 22B-B if one exists elsewhere.
- Solver (2026-10-18): all 9 items of 22B-B and 10 of 11 items of 22S-C solved (solutionSource solved, official false), checked by tools/verify/22B-B/solve_22B-B.py and tools/verify/22S-C/solve_22S-C.py.
- Status: resolved except 22S-C Q3b (see its entry)

### 22S-B Q3b - official answer has no complexity analysis
- Path: sitting 22S-B, solution box
- Page: p.9
- Question: the question asks to analyse the running time, but the official answer gives only the code and a prose outline (no stated complexity). Transcribed as is, confidence med.
- Needed: none unless you want a complexity line added by the solver.
- Status: flagged

### 25B-B Q4b - intermediate slip in official explanation (fixed silently)
- Path: sitting 25B-B, official solution booklet
- Page: Q4 part b answer box
- Question: the official text says inorder gives ascending order as right subtree, node, left subtree; correct order is left, node, right. Corrected in transcription, no student-facing label. (Q4a final-answer mismatch, key(Node) < a returned keys >= a against the printed 'greater than a', is shipped labelled as corrected, solved, official false.)
- Needed: none
- Status: flagged

### SAMP-1 Q2c - official key contradicted by a script (held)
- Path: sitting SAMP-1, solution booklet
- Page: p.4 (Q2 part c)
- Question: official says "true" (a new key can always be inserted into T2 within 7 attempts with 6 keys). The quadratic probes i=0..6 of h2 give offsets 0,6,1,11,10,11,1, only 5 distinct cells, so 6 keys can block all 7 attempts. Sitting 19B-A Q6 part 3 (same statement) has the official key "false" with an example table. Held, not fixed.
- Needed: decide whether to ship with the verdict "false" (as in 19B-A) or leave held.
- Solver (2026-10-18): arbiter ruling: the official "true" is wrong. The 7 probes hit only 5 cells; counterexample hash(k)=k mod 13, keys 0,13,26,39,52,2, then 65 needs 10 probes; matches the official "false" of 19B-A Q6 part 3. Shipped as "false" with the "הפתרון הרשמי עם תיקון" label, solutionSource solved, official false (tools/verify/SAMP-1/solve_SAMP-1.py).
- Status: resolved (flagged)

### SAMP-1 Q3b - no solution (held)
- Path: sitting SAMP-1, solution booklet
- Page: p.4 (Q3 part b)
- Question: decision tree of heap sort for 3 elements; the official solution is only a video link, no tree drawn. 19B-A Q4b has a drawn tree for the same question.
- Needed: route to the solver, or reuse the 19B-A Q4b figure.
- Solver (2026-10-18): solved: decision tree of CLRS heapsort (max-heap) on [a,b,c], 3 comparisons per path, 6 reachable leaves and 2 impossible branches (repeated a-b comparison); traced for all 6 orders in tools/verify/SAMP-1/solve_SAMP-1.py.
- Status: resolved

### SAMP-1 Q1a - comparison count depends on the model (flagged)
- Path: sitting SAMP-1, solution booklet
- Page: p.1 (Q1 part a)
- Question: official counts 2 comparisons per internal node (n for even n). A careful build-heap does one comparison for a node with a single child, giving n-1 for every n. Transcribed as official, confidence med.
- Needed: none unless you want a note.
- Arbiter (2026-10-18): re-read the printed statement (p.1): "the number of comparisons to turn the array into a min-heap is n-1", no counting convention given. The official's own model (2 comparisons per internal node = one per child) gives 1 for the single-child node when n is even, so n-1 for every n (simulated n=2..199, tools/verify/SAMP-1/fix_checks.py). Not a convention question: the key is wrong. Shipped under the typo ruling: verdict true, "הפתרון הרשמי עם תיקון", solved, official false.
- Status: resolved (flagged)

### 19B-B Q1a - no solution (held)
- Path: sitting 19B-B, solution booklet
- Page: p.1 (Q1 part a)
- Question: prove or disprove "for any f, g: f=O(g) or g=O(f)"; the official answer is only "see the first presentation".
- Needed: route to the solver.
- Solver (2026-10-18): solved: false, counterexample f=n on even / 1 on odd and g the other way round.
- Status: resolved

### 19B-A Q4b - official decision tree has 5 leaves
- Path: sitting 19B-A, solution booklet
- Page: p.7 (Q4 part 2)
- Question: the official figure for 3 elements shows 5 leaves, while 3 elements have 6 orders. Shipped as the official figure, confidence med.
- Needed: none unless you want it redrawn.
- Arbiter (2026-10-18): the figure has 6 leaves but only 4 distinct orders: the two leftmost leaves (under a<b, in the root-no / b<c-no branch) read <a,b,c>/<a,c,b> and must be <c,b,a> (no) / <c,a,b> (yes). Shipped under the typo ruling (official figure kept, corrected leaves stated in text, solved, official false) plus a visible note that the root "a<b,c" is a compound double comparison (tools/verify/19B-A/fix_checks.py).
- Status: resolved (flagged)

### 19B-A Q4a / SAMP-1 Q3a - find_miss returns B[n+1] (typo ruling)
- Path: sittings 19B-A (Q4 part 1) and SAMP-1 (Q3 part a), solution booklets
- Question: the code is 0-based (tests A[0]) but returns B[n+1] when the range empties; it fails whenever the missing element is the last of B. Shipped with B[n] under the "הפתרון הרשמי עם תיקון" label, solved, official false (fix_checks.py of both sittings: 0 failures in 4000 random inputs).
- Needed: none
- Status: flagged

### 19B-A Q5a / SAMP-1 Q4a - Buy resets the month counter to 0 (typo ruling)
- Path: sittings 19B-A (Q5 part 1) and SAMP-1 (Q4 part a), solution booklets
- Question: on a new month Buy sets amount_month_buy to 0 without counting the current sale, so 50 sales count as 49. Shipped with reset to 1 under the "הפתרון הרשמי עם תיקון" label, solved, official false.
- Needed: none
- Status: flagged

### 19B-B Q3c - official merge loop fails as printed (typo ruling)
- Path: sitting 19B-B, solution booklet, Q3 part c
- Question: inverted comparison (fail when A2[j] < A1[i], not >), the last branch advanced j instead of i, and "j<m" skipped the last key of T2 (1250 of 3000 random inputs wrong). Shipped corrected (i<=n and j<=m, return yes iff flag and j>m) under the "הפתרון הרשמי עם תיקון" label, solved, official false, with a note that O(m log n) is also possible (tools/verify/19B-B/fix_checks.py).
- Needed: none
- Status: flagged

### 19B-B Q4b / Q5b - official explanation and bound (fixed silently)
- Path: sitting 19B-B, solution booklet, Q4 part b and Q5 part b
- Question: Q4b: the key (true) is right, but the official reason ("a minimum element is compared with everything to its left") describes the maximum depth; replaced by the sorted-input argument (n-1 comparisons, and fewer cannot fix the order). Q5b: "at most 3k elements in the helper heap" replaced by the tight m+1 (each round removes 1, adds at most 2), and the k/K/m letters unified to m, "extract max" to "extract min". Intermediate slips, no student-facing label. Also visible notes added on Q2b (answerable only vacuously, since 2a shows no such forest exists) and Q4a (max{r,m-r} holds only as the worst case).
- Needed: none
- Status: flagged

### SAMP-1 Q1d - lower-bound sentence (note added)
- Path: sitting SAMP-1, solution booklet, Q1 part d
- Question: the official "removing n/2 keys certainly takes linear time" is weak (cutting a subtree is not linear, and non-interleaved ranges allow O(log n) split/join). Kept, with a visible note: the Omega(n) comes from merging interleaved keys, log2 C(n,n/2) comparisons.
- Needed: none
- Status: flagged

### 22S-C Q3b - printed WHAT code never terminates (held)
- Path: sitting 22S-C, exam booklet
- Page: p.8 (Q3 part b)
- Question: WHAT(A[i..j]) recurses on A[i..(i+j)/4] and A[(i+j)/4+1..j]. Read literally, for i>1 the split (i+j)/4 can be below i, so the second call repeats a range (WHAT(A[3..8]) calls WHAT(A[3..8]) again) and WHAT(A[1..n]) never ends for any n>=8 (tools/verify/22S-C/solve_22S-C.py). The intended split is probably a quarter of the subarray, giving T(n)=T(n/4)+T(3n/4)+n = Theta(n log n).
- Needed: confirm the intended reading; then it can ship as solved with that note.
- Status: hold

### 22B-A Q2 - official algorithm: slips fixed silently, plus a final-answer fix (labelled)
- Path: sitting 22B-A, official solution file
- Page: Q2 answer (linear and O(n log n) versions)
- Question: intermediate slips fixed silently: the first test used C1 for the count of X (C), C2 counted Y instead of Z, "למשתמש" for "למשתנה". Also, the last test had no Y != X / Z != X condition, so for A=[1x7, 2x3] it returns true with no second fruit above 33% (tools/verify/22B-A/solve_22B-A_Q2.py). That condition was added with the "הפתרון הרשמי עם תיקון" label (solved, official false). The hash version keeps its text with a visible note (thresholds should be > n/2 and > n/3).
- Needed: none unless you disagree with the added condition.
- Status: flagged

### 21B-B Q4b - final line Theta(n) corrected to Theta(log n) (labelled)
- Path: sitting 21B-B, solution file
- Page: Q4 part b
- Question: the official text ends "log(2n-1)=Theta(n)". Shipped with the "הפתרון הרשמי עם תיקון" label as Theta(log n), solved, official false.
- Needed: none
- Status: flagged

### 22S-A Q1e - official page says "counting sort is not stable" (fixed silently)
- Path: sitting 22S-A, solution booklet
- Page: p.4 (Q1 part e)
- Question: the page says counting sort is not stable; it is stable (heapsort is the unstable one). The verdict "not true" is unchanged and right (radix sort needs a stable column sort). The stored solution now says heapsort is not stable (and counting sort is). An intermediate slip, no student-facing label.
- Needed: none
- Status: flagged

### 22S-C Q2a - side remark about deleting 11 depends on the replacement convention (note added)
- Path: sitting 22S-C, solution booklet
- Page: Q2 part a
- Question: the official "deleting 11 also gives two rotations" holds with in-order successor replacement (LL at 12, LL at 8) but gives one rotation with predecessor replacement (tools/verify/22S-C/fix_checks.py). The solution now carries a visible "הערה" stating the convention. The main answer (deleting 12, two rotations) does not depend on it.
- Needed: none
- Status: flagged

### 22B-B points - page prints whole-question totals only (inferred split)
- Path: sitting 22B-B, exam booklet
- Page: p.1-9
- Question: printed are Q1, Q3, Q4 = 25 each with no per-part split, Q2 = 25 with 2a = 5 (so 2b = 20 by inference) and the bonus Q5 = 15. The schema has no whole-question points, so the rubric weights of Q1, Q3 and Q4 are spread evenly (12.5 + 12.5 per question); they are not printed values. Q2 uses 5 + 20 and Q5 uses 15.
- Needed: none unless you want a different split.
- Status: flagged

### 21B-A Q2 - the O(log^2 n) solution is wrong as printed (labelled fix)
- Path: sitting 21B-A, solution booklet
- Page: p.6 (O(log^2(n)) solution)
- Question: step 3 ("both middle paths of the root have length h -> return 0") returns 0 for incomplete trees, including the exam's own example (n=6, answer 1); step 10 compares h1 with h0 after step 9 has decremented it. Shipped with the "הפתרון הרשמי עם תיקון" label (solved, official false): step 3 tests the rightmost path length = h, step 10 tests h1 = h0+1. Fixed version matches the true answer for every n<400; either printed error alone gives 136-383 mismatches (tools/verify/21B-A/steps_verify.py). Rubric now gives the full 25 only to the O(log^2 n) tier (tier split 10/6/3 estimated, none printed).
- Needed: none unless you disagree with the fix.
- Status: flagged

### 21B-A Q3b - "full up to level ceil(h/2)" is false for odd h (labelled fix + note)
- Path: sitting 21B-A, solution booklet
- Page: p.9 (Q3 part b)
- Question: an AVL tree of height 1 can be a root with one child, so ceil fails for every odd h; over all AVL shapes up to h=9 the guaranteed prefix is exactly levels 0..floor(h/2), which is the question's own formal clause "0<=i<=h/2". Shipped with floor throughout plus the case h+1=1 (the official step uses the hypothesis on an empty subtree there), "הפתרון הרשמי עם תיקון" label and a visible note. The order/findbug steps were rewritten to the floor version. Also fixed silently: "לכם" for "לכן".
- Needed: none unless you disagree.
- Status: flagged

### 21B-A points - cover says "up to 116" but the items sum to 124
- Path: sitting 21B-A, cover page
- Page: p.1
- Question: Q1 = 6 x 8 = 48, Q2-Q4 = 25 each, +1 bonus: 124, but the cover says "ניתן לצבור עד 116 נקודות". The printed item points are kept (Q1 parts 8 each, Q2 25, Q3/Q4 split 10/15 estimated).
- Needed: which number is the typo, if it matters.
- Status: flagged

### 21B-B points - the file prints no points (estimated rubric)
- Path: sitting 21B-B, exam + solution file
- Page: p.1-4
- Question: no question or part points are printed anywhere. The rubric totals (2a 5, 2b 5, 3a 5, 3b 10, 4a 10, 4b 10) are the step-author's estimate and are kept.
- Needed: the real weights, if you have them.
- Status: flagged

### 22B-A Q4b - "we need equal remainders mod 5 and mod 3" changed to "it suffices" (fixed silently)
- Path: sitting 22B-A, official solution file
- Page: Q4 part b
- Question: the condition is sufficient, not necessary: 0, 5, 13 (different remainders) also give 3 collisions (tools/verify/22B-A/steps_verify.py). The word "נצטרך" became "מספיק לבחור"; the example 15, 30, 45 and the answer 3 are unchanged. A pitfall shows the 0, 5, 13 example.
- Needed: none
- Status: flagged

## Resolved
