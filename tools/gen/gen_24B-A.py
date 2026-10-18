# -*- coding: utf-8 -*-
"""Generator for tools/raw/24B-A.json -- data-structures, semester B 2024 (moed A, 16.7.24).
Six shuffled forms of 12 MCQ (7.5 pts each) + one open design question (Q13, 25 pts, same on every form).
Stems are de-duplicated across forms: a stem that repeats with the same correct answer (also when only the option
order or the distractors differ) is kept once, from the first form that has it. Variants with different numbers
(other hash function, other sequence, other recurrence...) are different questions and all kept.
Keys = the highlighted option on the form pages (read from the PDF fill rectangles and checked by eye), checked by
simulation in tools/verify/24B-A/verify.py (which imports the parameter tables below).
No official solution exists for Q13 (the answer box is blank in every form): solved by the solver (solutionSource solved,
official false), checked by tools/verify/24B-A/solve_24B-A_Q13.py.
Run: PYTHONUTF8=1 py tools/gen/gen_24B-A.py"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "24B-A.json"
IDS = "abcdef"
questions = []
_num = [0]


def mcq(topic, question, options, key, explanation=None):
    _num[0] += 1
    q = {"num": _num[0], "kind": "mcq", "topic": topic, "points": 7.5, "question": question,
         "options": [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(options)],
         "correctId": IDS[key], "solutionSource": "official-pdf", "official": True, "confidence": "high"}
    if explanation:
        q["explanation"] = explanation
    questions.append(q)


T = "מי מהטענות הבאות נכונה:"

# ---------------------------------------------------------------- AVL: existence of a tree with a leaf at a given depth
# (exists?, height, leaf depth, "בו"/"לו") ; NEG = the stem asks for the statement that is NOT correct
AVLCL = [
    (False, [(0, 20, 12, "בו"), (1, 34, 15, "לו"), (0, 13, 8, "לו"), (1, 57, 29, "לו")], 3),
    (False, [(1, 32, 15, "לו"), (1, 42, 21, "לו"), (0, 15, 8, "לו"), (0, 76, 39, "בו")], 1),
    (True, [(1, 33, 15, "לו"), (0, 80, 39, "לו"), (1, 71, 38, "לו"), (1, 9, 6, "בו")], 0),
    (False, [(1, 34, 16, "לו"), (0, 51, 25, "לו"), (1, 33, 15, "לו"), (0, 13, 8, "בו")], 1),
    (False, [(1, 12, 4, "לו"), (0, 99, 53, "לו"), (1, 79, 40, "לו"), (0, 21, 12, "בו")], 2),
    (False, [(0, 16, 10, "לו"), (0, 103, 60, "לו"), (1, 81, 40, "לו"), (1, 82, 41, "בו")], 3),
]
for neg, opts, key in AVLCL:
    mcq("avl", "מי מהטענות הבאות **אינה** נכונה:" if neg else T,
        [("" if e else "לא ") + f"קיים עץ AVL שגובהו ${h}$ שקיים {w} עלה בעומק ${d}$" for e, h, d, w in opts], key)

# ---------------------------------------------------------------- traversals
TRAV_BIN = "בהנתן עץ בינארי (לא בהכרח עץ חיפוש) ורשימות המייצגות סריקות שונות, מהו המשפט הנכון?"
TRAV_BST = "בהנתן עץ חיפוש בינארי ורשימות המייצגות סריקות שונות, מהו המשפט הנכון?"
mcq("trees_induction", TRAV_BIN, [
    "בסריקת inorder הרשימה תהיה ממוינת מהקטן לגדול",
    "בסריקת postorder השורש יופיע תמיד באמצע הסריקה",
    "סריקת preorder ו-postorder שונות בהכרח",
    "בסריקת preorder השורש יופיע ראשון"], 3)
mcq("trees_induction", TRAV_BIN, [
    "בסריקת postorder השורש יופיע אחרון",
    "בסריקת inorder השורש יופיע תמיד באמצע הסריקה",
    "סריקת preorder ו-postorder שונות בהכרח",
    "בסריקת preorder הרשימה תהיה ממוינת מהגדול לקטן"], 0)
mcq("trees_induction", TRAV_BST, [
    r"עלות הסריקה $\theta(n \log n)$ כאשר $n$ מייצג את כמות הקודקודים בעץ.",
    r"עלות הסריקה $\Omega(n)$ כאשר $n$ מייצג את כמות הקודקודים בעץ.",
    "הרשימה שתתקבל אינה בהכרח ממוינת",
    "לא ניתן לשחזר את העץ בהינתן תוצאת סריקת ה-preorder בלבד"], 1)
mcq("trees_induction", TRAV_BIN, [
    "בסריקת preorder הרשימה תהיה ממוינת מהקטן לגדול",
    "בסריקת preorder השורש יופיע תמיד באמצע הסריקה",
    "יתכן וסריקת preorder ו-postorder יצאו זהות",
    "בסריקת inorder השורש יסרק אחרי סריקת חצי מאברי העץ"], 2)
mcq("trees_induction", TRAV_BST, [
    "בסריקת preorder הרשימה תהיה ממוינת מהקטן לגדול",
    "בהינתן סריקת ה-inorder ניתן לשחזר את העץ",
    "בסריקת postorder הרשימה תהיה ממוינת מהגדול לקטן",
    "ניתן לשחזר את העץ בהינתן תוצאת סריקת ה-preorder בלבד"], 3)
mcq("trees_induction", TRAV_BST, [
    r"עלות הסריקה $\Omega(n \log n)$",
    "בהינתן סריקת ה-preorder ניתן לשחזר את העץ",
    "בסריקת postorder האיבר הגדול ביותר יופיע באמצע הסריקה",
    "לא ניתן לשחזר את העץ בהינתן תוצאת סריקת ה-postorder בלבד"], 1)

# ---------------------------------------------------------------- decision tree of a search algorithm
DT = (r"""נתון עץ החלטות $T$, המתאר את השאלות הנשאלות באלגוריתם חיפוש המקבל מפתח $k$ (ז"א, איבר שערכו $k$) ומערך $A$ עם $n$ איברים ומחזיר את האינדקס $i$ (אם קיים) כך ש: $A[i]=k$, אחרת מחזיר $n+1$.

""" + T)
mcq("sorting_selection", DT, [
    r"גובה העץ הוא בהכרח $\Omega(n \log n)$",
    "כמות העלים בעץ היא $n+1$",
    r"כמות הקודקודים בעץ היא $\theta(n!)$",
    "לא יתכן שקיים בעץ $T$ מסלול משורש העץ לעלה באורך $1$"], 1)
mcq("sorting_selection", DT, [
    r"גובה העץ הוא בהכרח $\Omega(n)$",
    "כמות העלים בעץ היא $n!$",
    "כמות הקודקודים בעץ היא $O(n)$",
    r"לא יתכן שקיים בעץ $T$ מסלול משורש העץ לעלה באורך $\frac{n}{2}$"], 2)
mcq("sorting_selection", DT, [
    "עץ ההחלטות $T$ הוא בהכרח עץ בינארי מלא",
    "כמות העלים בעץ היא $n!$",
    r"כמות הקודקודים בעץ היא $\Omega(n^2)$",
    "עץ ההחלטות $T$ הוא עם $2n$ קודקודים"], 0)
mcq("sorting_selection", DT, [
    "עץ ההחלטות $T$ הוא בהכרח עץ מאוזן",
    "כמות העלים בעץ היא $n! + 1$",
    r"כמות הקודקודים בעץ היא $\Omega(n \log \sqrt{n})$",
    "יתכן שהמסלול הקצר ביותר הוא באורך $1$"], 3)

# ---------------------------------------------------------------- T(n) = T(an) + T((1-a)n) + n
REC_STEM = ('תנו חסם אסימפטוטי הדוק ("תטא") לנוסחת הנסיגה הבאה (עבור $n$ מספיק קטן מתקיים $T(n)=O(1)$):\n\n')
RECS = [("T(n/4) + T(3n/4)", (1, 4)), ("T(n/5) + T(4n/5)", (1, 5)), ("T(3n/5) + T(2n/5)", (3, 5))]
mcq("recurrences", REC_STEM + "$T(n) = T(n/4) + T(3n/4) + n$",
    [r"$\Theta(n^2)$", r"$\Theta(n)$", r"$\Theta(n(\log n)^2)$", r"$\Theta(n \log n)$"], 3)
mcq("recurrences", REC_STEM + "$T(n) = T(n/5) + T(4n/5) + n$",
    [r"$\Theta(n \log n)$", r"$\Theta(n (\log \sqrt{n})^2)$", r"$\Theta(n)$", r"$\Theta(n^2 \log n)$"], 0)
mcq("recurrences", REC_STEM + "$T(n) = T(3n/5) + T(2n/5) + n$",
    [r"$\Theta(n \log n)$", r"$\Theta(\sqrt{n} (\log n)^2)$", r"$\Theta(n)$", r"$\Theta(n^2 \log \sqrt{n})$"], 0)

# ---------------------------------------------------------------- T(n) = a T(n/b) + n^p : lowest a with a larger complexity
# (b, p, options, key, note)
APAR = [
    (2, 2, [2, 3, 4, 6.5], 2, None),
    (2, 3, [9, 8, 9.3, 7.5], 1, None),
    (2, 1, [8, 4, 2, 6.5], 2, None),
    (4, 1, [2, 3.5, 4, 6], 2, None),
    (3, 2, [1, 2, 4, 9], 3, None),
    (5, 2, [25, 2.5, 50, 5], 0, None),
]
# the printed text of the b=2,p=3 and b=4,p=1 forms still carries the old parenthetical about n^2
OLD_PAREN = r"""

(כלומר, מהו הערך הנמוך ביותר עבור המשתנה $a$ עבורו נקבל $T(n) > \theta(n^2)$)"""
ANOTE = {0: "log_2 a = 2 -> for a=4 case 2 will be correct and we'll get Theta(n^2 logn)",
         1: "for a=8 case 2 will be correct and we'll get Theta(n^3 logn)",
         2: "log_2 a: for a=2 case 2 will be correct and we'll get Theta(n logn)",
         3: "log_4 a: for a=4 in case 2 we'll get T(n)=Theta(nlogn)",
         4: "log_3 a: for a=9 and case 2 we'll get T(n)=n^2 logn",
         5: "log_5 a: for a=25 we'll get case 2 and T(n)=Theta(n^2 logn)"}
for i, (b, p, opts, key, _) in enumerate(APAR):
    pw = {1: "n", 2: "n^2", 3: "n^3"}[p]
    stem = (f"בהנתן נוסחת הנסיגה הבאה: $T(n)=aT(n/{b})+{pw}$.\n"
            f"מהו הערך הנמוך ביותר מבין הערכים הבאים עבור המשתנה $a$ עבורו נקבל סיבוכיות גדולה מ-${pw}$?")
    if i in (1, 3):
        stem += OLD_PAREN
    mcq("recurrences", stem, [f"${o}$" for o in opts], key,
        "הערת הפתרון הרשמי: " + ANOTE[i] + (
            ". (בטופס זה נשארה בסוגריים הנוסחה הישנה $T(n) > \\theta(n^2)$; המפתח הרשמי מתאים לנוסח השאלה הראשי.)"
            if i in (1, 3) else ""))

# ---------------------------------------------------------------- AVL insertion sequences
AVLINS = [
    ([4, 7, 41, 3, 8, 6, 2, 5], [("leaf", 41), ("minnotleaf",), ("rot", 1), ("root", 6)], 2),
    ([4, 7, 3, 8, 6, 2, 5, 41], [("leaf", 41), ("minnotleaf",), ("rot", 1), ("root", 6)], 0),
    ([4, 7, 3, 8, 6, 2, 5, 41], [("notleaf", 41), ("minnotleaf",), ("root", 6), ("norot",)], 3),
    ([8, 4, 7, 3, 6, 2, 5, 41], [("depth", 41, 2), ("mindepth", 3), ("rot", 2), ("root", 6)], 2),
    ([7, 8, 4, 2, 5, 41, 3, 6], [("depth", 8, 2), ("minnotleaf",), ("rot", 1), ("root", 8)], 1),
]


def avl_opt(o):
    k = o[0]
    if k == "leaf": return f"המפתח ${o[1]}$ נמצא באחד מעלי העץ"
    if k == "notleaf": return f"המפתח ${o[1]}$ אינו אחד מעלי העץ"
    if k == "minnotleaf": return "האיבר המינימלי אינו עלה"
    if k == "rot": return f"כמות הגלגולים שהתבצעו בתהליך ההכנסה היא ${o[1]}$ בלבד"
    if k == "norot": return "לא התבצעו גלגולים בתהליך ההכנסה"
    if k == "root": return f"המפתח ${o[1]}$ נמצא בשורש העץ"
    if k == "depth": return f"המפתח ${o[1]}$ נמצא בעומק ${o[2]}$"
    if k == "mindepth": return f"האיבר המינימלי נמצא בעומק ${o[1]}$"


for seq, opts, key in AVLINS:
    mcq("avl", ("יהי $T$ עץ ריק. מכניסים את האיברים הבאים לעץ $T$ בהתאם לפעולות ההכנסה לעץ AVL "
                "(יש לקרוא את הנתונים משמאל לימין):\n\n$" + ",".join(map(str, seq)) + "$\n\n" + T),
        [avl_opt(o) for o in opts], key)

# ---------------------------------------------------------------- double hashing, table of size 11
HASH_SEQ1 = [1, 6, 18, 16, 5, 22]
HASH_SEQ2 = [7, 1, 6, 16, 14, 8, 21, 12]
# (sequence, modulus c in (x mod c) + 1, NEG?, options (x, index), key)
HASH = [
    (HASH_SEQ1, 7, False, [(5, 0), (22, 0), (16, 8), (18, 8)], 0),
    (HASH_SEQ1, 5, False, [(5, 0), (22, 0), (16, 8), (18, 8)], 1),
    (HASH_SEQ1, 9, True, [(5, 0), (22, 10), (16, 8), (18, 7)], 2),
    (HASH_SEQ1, 3, False, [(22, 2), (16, 8), (5, 8), (18, 2)], 2),
    (HASH_SEQ2, 7, False, [(8, 2), (16, 8), (21, 1), (12, 2)], 3),
    (HASH_SEQ2, 9, False, [(8, 2), (16, 8), (12, 9), (21, 0)], 2),
]
for seq, c, neg, opts, key in HASH:
    mcq("hashing", ("נתונה סדרת המספרים הבאה (משמאל לימין):\n\n$" + ",".join(map(str, seq)) +
                    f"$\n\nהשתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל $11$:\n\n"
                    f"$h(x,i) = \\left(x \\bmod 11 + i((x \\bmod {c}) + 1)\\right) \\bmod 11$\n\n" +
                    ("מי מהטענות הבאות **אינה** נכונה:" if neg else T)),
        [f"המפתח ${x}$ ייכנס לתא באינדקס ${j}$ במערך." for x, j in opts], key)

# ---------------------------------------------------------------- cuckoo hashing, two tables of size 11
CK1 = [3, 105, 67, 100, 75, 53]
CK2 = [3, 67, 75, 105, 53, 100]
CK3 = [100, 75, 6, 53, 105, 67]
# (insertion order, which table asked (1/2), options (lists), key)
CUCKOO = [
    (CK1, 2, [[75, 100], [67, 100], [53, 105, 100], [105, 53, 75]], 0),
    (CK1, 1, [[3, 100, 105, 67], [75, 100], [3, 53, 67, 105], [67, 53, 105, 100]], 2),
    (CK2, 2, [[75, 100, 105, 3], [53, 67], [3, 100, 105], [105, 100]], 1),
    (CK2, 1, [[75, 100, 105, 3], [53, 67], [3, 100, 105], [105, 100]], 0),
    (CK3, 1, [[75, 100, 105], [67, 100, 105], [105, 100], [67, 105, 53]], 3),
    (CK3, 2, [[75, 100, 105], [67, 100, 105], [6, 75, 100], [67, 105, 53]], 2),
]
for seq, t, opts, key in CUCKOO:
    mcq("hashing", ("נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:\n\n"
                    r"$h_1(x) = x \bmod 11$" "\n\n" r"$h_2(x) = \left\lfloor \frac{x}{11} \right\rfloor \bmod 11$" "\n\n"
                    "לטבלה הוכנסו הערכים הבאים: משמאל לימין:\n\n$" + ",".join(map(str, seq)) +
                    f"$\n\nאילו מהערכים יהיו בטבלה {'הראשונה T1' if t == 1 else 'השנייה T2'}?"),
        ["$" + ",".join(map(str, o)) + "$" for o in opts], key)

# ---------------------------------------------------------------- heap with successor field
mcq("heaps", ("נתונה ערימת מינימום $A$ עם $n$ מספרים שונים זה מזה.\n"
              "רוצים להוסיף לכל איבר ב-$A$ שדה נוסף, שיכיל את האינדקס של האיבר העוקב לו (האיבר המינימלי שגדול ממנו מבין אברי הערימה). "
              "באיבר המקסימלי שדה זה יכיל NULL.\n\n" + T),
    [r"ניתן לבצע את הנ\"ל בזמן $\theta(\sqrt{n})$".replace('\\"', '"'),
     r"ניתן לבצע את הנ\"ל בזמן $\theta(n \log \sqrt{n})$".replace('\\"', '"'),
     r"ניתן לבצע את הנ\"ל בזמן $\theta(\sqrt{n} \log n)$".replace('\\"', '"'),
     r"ניתן לבצע את הנ\"ל בזמן $\theta(n)$".replace('\\"', '"')], 1)

# ---------------------------------------------------------------- sortsub
SS = ("תהי sortsub פונקציה המקבלת מערך לא ממוין של $n$ מספרים ממשים, ומחזירה קבוצה ממוינת של $\\sqrt{n}$ הערכים הנמוכים ביותר במערך.\n\n"
      "מי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:")
NOSAY = "לא ניתן לומר דבר על הסיבוכיות של sortsub"
mcq("sorting_selection", SS, [r"סיבוכיות זמן הריצה הוא $\Omega(n \log(\log n))$", r"סיבוכיות זמן הריצה הוא $O(n)$",
                              r"סיבוכיות זמן הריצה הוא $O(\sqrt{n})$", NOSAY], 1)
mcq("sorting_selection", SS, [r"סיבוכיות זמן הריצה הוא $\Omega(n \log n)$", NOSAY,
                              r"סיבוכיות זמן הריצה הוא $O(n \log(\log n))$", r"סיבוכיות זמן הריצה הוא $O(\sqrt{n})$"], 2)
mcq("sorting_selection", SS, [NOSAY, r"סיבוכיות זמן הריצה הוא $\Omega(n \log(\log n))$",
                              r"סיבוכיות זמן הריצה הוא $\theta(n \sqrt{n})$", r"סיבוכיות זמן הריצה הוא $O(n + \log(\sqrt{n}))$"], 3)
mcq("sorting_selection", SS, [r"סיבוכיות זמן הריצה הוא $\Omega(n + \log(\sqrt{n}))$", NOSAY,
                              r"סיבוכיות זמן הריצה הוא $\theta(n \log \log n)$", r"סיבוכיות זמן הריצה הוא $\Omega(n \log n)$"], 0)
mcq("sorting_selection", SS, [r"סיבוכיות זמן הריצה הוא $\Omega(n + \sqrt{n})$", NOSAY,
                              r"סיבוכיות זמן הריצה הוא $\Omega(n \log \log n)$", r"סיבוכיות זמן הריצה הוא $\Omega(n \log n)$"], 0)

# ---------------------------------------------------------------- relations between T1, T2, f, g
REL = [
    ([r"אם $T_1(n)=O(f(n))$ וגם $T_2(n)=O(f(n))$ אז $T_1(n)=O(T_2(n))$",
      r"אם $T_1(n)=\theta(f(n))$ וגם $T_2(n)=\theta(f(n))$ אז $T_2(n)=O(T_1(n)+f(n))$",
      r"אם $T_1(n)=O(f(n))$ וגם $T_2(n)=O(g(f(n)))$ אז $T_2(n)=O(g(T_1(n)))$",
      r"אם $T_1(n)=\theta(\sqrt{f(n)})$ וגם $T_2(n)=O(f(n))$ אז $T_2(n)=O(T_1(n))$"], 1,
     "Option A: No, for example T1=n^2, T2=n, f=n^2. Option C: No, T1=n, T2=n^2, f=n, g=n"),
    ([r"אם $T_1(n)=O(g(n))$ וגם $T_2(n)=O(g(n))$ אז $T_1(n)=O(T_2(n))$",
      r"אם $T_1(n)=\theta(g(n))$ וגם $T_2(n)=O(g(n))$ אז $T_2(n)=O(T_1(n))$",
      r"אם $T_1(n)=O(g(n))$ וגם $T_2(n)=O(g(f(n)))$ אז $T_2(n)=O(g(T_1(n)))$",
      r"אם $T_1(n)=\theta(g(n))$ וגם $T_2(n)=\theta(g(n))$ אז $T_2(n)=O(T_1(g(n)))$"], 1, None),
    ([r"אם $T_1(n)=O(f(n))$ וגם $T_2(n)=O(f(n))$ אז $T_1(n)=O(T_2(n))$",
      r"אם $T_1(n)=O(f(n))$ וגם $T_2(n)=O(g(f(n)))$ אז $T_2(n)=O(g(T_1(n)))$",
      r"אם $T_1(n)=\theta(f(n))$ וגם $T_2(n)=O(f(n))$ אז $T_2(n)=O(23 \cdot T_1(n))$",
      r"אם $T_1(n)=\theta(f(n))$ וגם $T_2(n)=\theta(f(n))$ אז $T_2(n)=O(T_1(f(n)))$"], 2, None),
    ([r"אם $T_1(n)=O(g(n))$ וגם $T_2(n)=O(g(n))$ אז $T_1(n)=O(T_2(n))$",
      r"אם $T_1(n)=O(g(n))$ וגם $T_2(n)=O(g(f(n)))$ אז $T_2(n)=O(g(T_1(n)))$",
      r"אם $T_1(n)=\theta(g(n))$ וגם $T_2(n)=O(g(n))$ אז $T_2(n)=O\left(\frac{T_1(n)}{2}\right)$",
      r"אם $T_1(n)=\theta(g(n))$ וגם $T_2(n)=\theta(g(n))$ אז $T_2(n)=O(T_1(g(n)))$"], 2, None),
]
for opts, key, ex in REL:
    mcq("complexity", "מי מהטענות הבאות נכונה?", opts, key, ex)

# ---------------------------------------------------------------- tree sizes
mcq("trees_induction", "מה כמות הקודקודים המינימלית בעץ מלא בגובה $h$ ?",
    ["$2h$", "$2^h$", "$2h+1$", "$2(h+1)$"], 2)
mcq("trees_induction", "מה כמות הקודקודים המינימלית בעץ בינארי בגובה $h$ ?",
    ["$2^h$", "$2+h$", "$1+h$", "$2h$"], 2)
mcq("trees_induction", "מה כמות הקודקודים המינימלית בעץ שלם בגובה $h$ ?",
    ["$2^h$", "$2(h+1)$", "$2^{h+1}-1$", "$2(h-1)$"], 2)
mcq("trees_induction", "מה כמות העלים המקסימלית בעץ מלא בגובה $h$ ?",
    ["$2^h$", "$2h+1$", "$2(h+1)$", "$2h$"], 0)

# ---------------------------------------------------------------- Q13 on the forms = num 100 here (open, no official solution anywhere in the PDF: solved by the solver)
questions.append({
    "num": 100, "kind": "algorithm", "topic": "ds_design", "points": 25,
    "question": r"""עליכם לממש מבנה נתונים התומך בפעולות הבאות על מספרים בסיבוכיות הזמן הנדרשת.

תארו תחילה מה כולל מבנה הנתונים שלכם, ואח"כ הסבירו כיצד תתבצע כל אחת מהפעולות (שימו לב, $n$ מציין את מספר הנתונים במבנה).

- `Search(k)` – חיפוש איבר בעל מפתח $k$. סיבוכיות הזמן הנדרשת: $O(\log n)$.
- `Insert(k)` – הכנסת המפתח $k$ למבנה, אם אינו קיים כבר במבנה (במקרה ש-$k$ נמצא במבנה, הפעולה לא תשנה את המבנה). סיבוכיות הזמן הנדרשת: $O(\log n)$.
- `Delete(x)` – מחיקת האיבר עליו מצביע $x$ מהמבנה. סיבוכיות הזמן הנדרשת: $O(\log n)$.
- `Add(d)` – הוספת הערך $d$ לכל המפתחות הנמצאים במבנה. סיבוכיות הזמן הנדרשת: $O(1)$.""",
    "solution": r"""**המבנה:** עץ AVL ומשתנה גלובלי $D$ (בהתחלה $D = 0$). בכל צומת שמור מפתח "מוקטן" $k' = k - D$, כאשר $D$ הוא ערך $D$ הנוכחי ברגע השמירה. **המפתח האמיתי** של צומת הוא תמיד $k' + D$ עם $D$ העכשווי.

הוספת קבוע לכל המפתחות לא משנה את הסדר ביניהם, ולכן העץ ממשיך להיות עץ חיפוש תקין לפי המפתחות האמיתיים.

- `Add(d)`: מבצעים $D = D + d$. כל המפתחות האמיתיים גדלים ב-$d$ בלי לגעת בעץ. $O(1)$.
- `Search(k)`: מחפשים בעץ את המפתח השמור $k - D$ (חיפוש רגיל בעץ AVL). $O(\log n)$.
- `Insert(k)`: מחפשים את $k - D$; אם הוא קיים לא עושים דבר, אחרת מכניסים לעץ AVL צומת עם המפתח השמור $k - D$ (כולל גלגולים). $O(\log n)$.
- `Delete(x)`: מוחקים מעץ ה-AVL את הצומת ש-$x$ מצביע עליו, מחיקה רגילה (כולל החלפה בעוקב וגלגולים בדרך לשורש). $D$ לא משתנה. $O(\log n)$.

כל הפעולות עומדות בדרישות כי גובה עץ AVL הוא $O(\log n)$.""",
    "solutionSource": "solved", "official": False, "confidence": "high"})

# ---- rubric / pitfalls / steps (ai-draft). Expected values are asserted in tools/verify/24B-A/steps_check.py ----
def _opts(*vals):
    return [{"id": "abcdefgh"[i], "type": "text", "value": v} for i, v in enumerate(vals)]


def _rub(*items):
    return [{"text": t, "points": p} for t, p in items]


def _add(num, **kw):
    for q in questions:
        if q["num"] == num and q.get("part") is None:
            q.update(kw)
            return
    raise KeyError(num)


_add(100,
     rubric=_rub((r"""מבנה: עץ AVL ומשתנה גלובלי $D$, כשבצמתים נשמר המפתח $k-D$""", 6),
                 (r"""`Add(d)`: $D=D+d$ בלי לגעת בעץ, $O(1)$""", 5),
                 (r"""`Search(k)`: חיפוש $k-D$ בעץ, $O(\log n)$""", 4),
                 (r"""`Insert(k)`: חיפוש $k-D$ והכנסה מוקטנת רק אם אינו קיים, $O(\log n)$""", 5),
                 (r"""`Delete(x)`: מחיקה רגילה מעץ AVL, $D$ לא משתנה, $O(\log n)$""", 5)),
     rubricSource="ai-verified",
     pitfalls=[r"""לעדכן את כל הצמתים ב-`Add`: זה $O(n)$ ולא $O(1)$.""",
               r"""לשמור בצומת את $k+D$ במקום $k-D$, ואז החיפוש מפספס מפתחות שהוכנסו.""",
               r"""לשנות את $D$ בעת `Delete`: המחיקה פועלת על צומת קיים ואין סיבה לגעת ב-$D$."""],
     steps=[
         {"type": "choice", "prompt": r"""איזה מבנה עומד בכל ארבע הדרישות (כולל `Add` ב-$O(1)$)?""",
          "options": _opts(r"""עץ AVL עם משתנה גלובלי $D$ שמוסיפים לו ב-`Add`""",
                           r"""עץ AVL שבו `Add` עובר על כל הצמתים ומעדכן אותם""",
                           r"""ערימת מינימום עם משתנה גלובלי $D$""",
                           r"""מערך ממוין עם משתנה גלובלי $D$"""),
          "correctId": "a",
          "explain": r"""בחלופה השנייה `Add` עולה $n$ עדכונים ($O(n)$ במקום $O(1)$). בערימה אין סדר חיפוש, ולכן `Search` עובר על $O(n)$ איברים. במערך ממוין `Insert` מזיז עד $n$ איברים."""},
         {"type": "numeric", "prompt": r"""מתחילים עם $D=0$ ועץ ריק. מבצעים `Insert(10)`, `Add(4)`, `Add(3)` ואז `Insert(20)`. איזה מפתח נשמר בעץ עבור $20$?""",
          "answer": 13, "tol": 0,
          "explain": r"""$D=7$, ולכן נשמר $20-7=13$. נבדק בסימולציה של עץ AVL עם היסט."""},
         {"type": "numeric", "prompt": r"""באותו מצב ($D=7$, בעץ שמורים $10$ ו-$13$): איזה מפתח שמור מחפשים בעץ כדי לבצע `Search(17)`?""",
          "answer": 10, "tol": 0,
          "explain": r"""$17-7=10$: המפתח $10$ הוכנס כשהיה $D=0$, והמפתח האמיתי שלו עכשיו $17$. הסימולציה מאשרת ש-`Search(17)` ו-`Search(20)` מצליחים ו-`Search(27)` לא."""},
         {"type": "order", "prompt": r"""סדרו את שלבי `Insert(k)`.""",
          "lines": [r"""מחשבים את המפתח המוקטן $k' = k - D$""",
                    r"""מחפשים את $k'$ בעץ ה-AVL; אם הוא קיים, מסיימים בלי לשנות את המבנה""",
                    r"""אחרת, מכניסים לעץ ה-AVL צומת עם המפתח $k'$ (כולל גלגולים)"""],
          "explain": r"""כל שלב תלוי בקודם: חיפוש דורש את $k'$, וההכנסה מותנית בכישלון החיפוש."""},
         {"type": "findbug", "prompt": r"""בגרסה הבאה של `Insert(k)` שורה אחת שונתה והיא שגויה. מצאו אותה.""",
          "lines": [r"""מחשבים את המפתח המוקטן $k' = k + D$""",
                    r"""מחפשים את $k'$ בעץ ה-AVL; אם הוא קיים, מסיימים בלי לשנות את המבנה""",
                    r"""אחרת, מכניסים לעץ ה-AVL צומת עם המפתח $k'$ (כולל גלגולים)"""],
          "bugIndex": 0,
          "explain": r"""המפתח האמיתי הוא $k'+D$, ולכן $k'=k-D$. עם $D=3$ ו-`Insert(10)` נשמר $13$ וחיפוש $10$ מחפש את $7$ ולא מוצא (נבדק)."""},
     ],
     stepsSource="ai-verified")


exam = {
    "examCode": "24B-A",
    "examLabel": 'מבני נתונים, סמסטר ב תשפ"ד, מועד א (16.7.24)',
    "year": 2024,
    "examDate": "16.7.2024",
    "sourceFile": "ds-2024-B-A-forms",
    "solutionFile": "ds-2024-B-A-forms-keys",
    "questions": questions,
}

if __name__ == "__main__":
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"wrote {OUT.name}: {len(questions)} items ({len(questions) - 1} mcq + 1 open)")
