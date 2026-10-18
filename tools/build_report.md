# Build report - מבני נתונים (open engine)

- Raw exam files: **24**
- **Final questions: 372**
- Shared context blocks: **61**
- Math spans rendered (distinct): **2365**
- Guided steps: **665** {'numeric': 331, 'choice': 193, 'fillblank': 18, 'text': 70, 'order': 32, 'findbug': 21}
- includeDrafts: **False**
- **ai-draft parts stripped: 0** 
- **On hold (not in bank): 1**

  - 22S-C-Q3b: misprinted code: read literally, WHAT(A[i..j]) splits at (i+j)/4, which for i>1 can fall below i, so the second call repeats the same range and the recursion never ends (already for n=8: WHAT(A[3..8]) calls WHAT(A[3..8]) again; checked in tools/verify/22S-C/solve_22S-C.py). Intended reading is probably the quarter of the subarray, T(n)=T(n/4)+T(3n/4)+n = Theta(n log n); not picked by the solver

## By kind

- computation: 57
- proof: 51
- algorithm: 87
- code: 0
- mcq: 123
- truefalse: 54

## By topic

| topic | label | n |
|---|---|---|
| `complexity` | סיבוכיות וחסמים אסימפטוטיים | 21 |
| `recurrences` | נוסחאות נסיגה ומשפט האב | 40 |
| `linear_ds` | מערך, מחסנית, תור ורשימה מקושרת | 10 |
| `trees_induction` | עצים בינאריים, סריקות והוכחות באינדוקציה | 28 |
| `bst` | עצי חיפוש בינאריים | 18 |
| `avl` | עצי AVL | 53 |
| `hashing` | טבלאות גיבוב | 62 |
| `heaps` | ערימות ותור עדיפויות | 37 |
| `sorting_selection` | מיונים, חסם תחתון ובחירה | 47 |
| `union_find` | קבוצות זרות | 20 |
| `ds_design` | תכנון אלגוריתם ומבנה נתונים | 36 |

## By exam

- SAMP-1: 14
- 19B-A: 19
- 19B-B: 15
- 21B-A: 11
- 21B-B: 12
- 21S-A: 10
- 22B-A: 7
- 22B-B: 9
- 22S-A: 11
- 22S-B: 11
- 22S-C: 10
- 23A-A: 14
- 23B-A: 10
- 23B-B: 7
- 23S-A: 13
- 24B-A: 57
- 24B-B: 35
- 24S-A: 28
- 25A-A: 18
- 25B-A: 14
- 25B-B: 11
- 25B-C: 11
- 25S-A: 13
- 25S-B: 12

## Warnings

- 19B-B-Q2b: no steps yet
- 19B-B-Q4a: no steps yet
- 19B-B-Q4b: no steps yet
- 19B-B-Q4c: no steps yet
- 21B-A-Q1a: no rubric yet
- 21B-A-Q1a: no steps yet
- 21B-A-Q1b: no rubric yet
- 21B-A-Q1b: no steps yet
- 21B-A-Q1c: no rubric yet
- 21B-A-Q1c: no steps yet
- 21B-A-Q1d: no rubric yet
- 21B-A-Q1d: no steps yet
- 21B-A-Q1e: no rubric yet
- 21B-A-Q1e: no steps yet
- 21B-A-Q1f: no rubric yet
- 21B-A-Q1f: no steps yet
- 21B-B-Q1a: no rubric yet
- 21B-B-Q1a: no steps yet
- 21B-B-Q1b: no rubric yet
- 21B-B-Q1b: no steps yet
- 21B-B-Q1c: no rubric yet
- 21B-B-Q1c: no steps yet
- 21B-B-Q1d: no rubric yet
- 21B-B-Q1d: no steps yet
- 21B-B-Q1e: no rubric yet
- 21B-B-Q1e: no steps yet
- 21B-B-Q1f: no rubric yet
- 21B-B-Q1f: no steps yet
- 22S-A-Q1a: no steps yet
- 22S-A-Q1b: no steps yet
- 22S-A-Q1c: no steps yet
- 22S-A-Q1d: no steps yet
- 22S-A-Q1e: no steps yet
- 22S-B-Q1a: no steps yet
- 22S-B-Q1b: no steps yet
- 22S-B-Q1c: no steps yet
- 22S-B-Q1d: no steps yet
- 22S-B-Q1e: no steps yet
- 22S-C-Q1a: no steps yet
- 22S-C-Q1b: no steps yet
- 22S-C-Q1c: no steps yet
- 22S-C-Q1d: no steps yet
- 22S-C-Q1e: no steps yet
- 23A-A-Q5a: no steps yet
- 23A-A-Q5a: confidence low
- 23B-B-Q2a: no rubric yet
- 23B-B-Q2a: no steps yet
- 23S-A-Q2a: no rubric yet
- 23S-A-Q2a: no steps yet
- 23S-A-Q2b: no rubric yet
- 23S-A-Q2b: no steps yet
- 23S-A-Q3c: no steps yet
- 23S-A-Q5a: no steps yet
- 25A-A-Q4b: confidence low
- 25A-A-Q4c: confidence low
- 25A-A-Q4d: confidence low
- 25A-A-Q4e: confidence low
- 25B-C-Q5a: no rubric yet
- 25B-C-Q5a: no steps yet
- 25B-C-Q5b: no rubric yet
- 25B-C-Q5b: no steps yet
- 25B-C-Q5c: no rubric yet
- 25B-C-Q5c: no steps yet
- 25S-A-Q5a: no rubric yet
- 25S-A-Q5b: no rubric yet
- 25S-A-Q5b: no steps yet
- 25S-A-Q5c: no rubric yet
- 25S-B-Q5a: no rubric yet
- 25S-B-Q5a: no steps yet
- 25S-B-Q5b: no rubric yet
- 25S-B-Q5b: no steps yet
- 25S-B-Q5c: no rubric yet
- 25S-B-Q5c: no steps yet
- SAMP-1-Q1a: no steps yet
- SAMP-1-Q1b: no steps yet
- SAMP-1-Q1c: no steps yet
- SAMP-1-Q1d: no steps yet
- SAMP-1-Q1e: no steps yet
- SAMP-1-Q1f: no steps yet
