# ASK_ADIR - data-structures

Open questions for Adir. One entry per item; the orchestrator moves it to Resolved when answered.

## Open

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
- Status: hold

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
- Status: hold (Q13); flagged

### 25A-A - student paper: partly unreadable handwriting
- Path: sitting 25A-A (graded student paper, scan)
- Page: p.5-23 (answer boxes)
- Question: answers are transcribed as text only (no crops), labelled student solution. Some lines could not be read and were left out (4.2 to 4.5, 5.1 to 5.3 are paraphrases with confidence low). 1.5: the student's algorithm checks only the value at rank 0.2n, which is not sufficient (counter-example in tools/verify/25A-A/verify.py), although the chosen answer (n) is right.
- Needed: solver and refuter pass; do not ship the low-confidence items as correct without it.
- Status: flagged

### 23A-A Q1-Q5 - handwritten official solution read by eye
- Path: sitting 23A-A, solution booklet
- Page: p.2-13 (answer boxes)
- Question: the lecturer solution is handwritten on a tablet; a few words were hard to read (Q1c matrix-multiplication wording, Q2a/Q2c wording, Q3 "check the second film", Q5a first line). Q4b, Q4c, Q2d and Q5a only say "see above". Transcribed in typed form, confidence med/low.
- Needed: a quick eye check of the flagged items (Q1c, Q3, Q5a) against the handwriting.
- Status: flagged

### 23B-A Q3 and Q1 - solution file differs from the exam booklet
- Path: sitting 23B-A, solution file vs exam booklet
- Page: Q3 intro (solution file p.7 vs exam p.7), Q1 header
- Question: the solution file says the ternary heap children are larger than the parent (min-heap wording) while the exam booklet and the example figure define a max-heap (children smaller); Q1 header says 2 parts in the solution file and 3 parts in the booklet. The exam booklet text was used.
- Needed: none unless you want the solution-file wording kept.
- Status: flagged

## Resolved
