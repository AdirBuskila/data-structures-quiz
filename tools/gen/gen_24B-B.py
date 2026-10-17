# -*- coding: utf-8 -*-
"""Generator for tools/raw/24B-B.json -- data-structures, semester B 2024 (moed B, 8.8.24).
Four shuffled forms of 12 MCQ (7.5 pts each) + one open design question (Q13, 25 pts, same on every form).
NOTE: only form 1's cover reads "8.8.24 / מועד ב"; the covers of forms 2-4 still read "16.7.24 / מועד א" (stale
header) but their questions are moed-B questions (different from every 24B-A question).
Stems are de-duplicated across forms: a stem that repeats with the same correct answer (also when only the option
order or the distractors differ) is kept once, from the first form that has it. Variants with other numbers or
other sequences are different questions and all kept. Keys = the highlighted option on the form pages, read by eye
and checked by simulation in tools/verify/24B-B/verify.py (which imports the parameter tables below).
Q13: official typed solution exists on form 1 only (the other forms have a blank answer box).
Run: PYTHONUTF8=1 py tools/gen/gen_24B-B.py"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "24B-B.json"
IDS = "abcdef"
questions = []
_num = [0]


def mcq(topic, question, options, key, explanation=None, accepted=None):
    _num[0] += 1
    q = {"num": _num[0], "kind": "mcq", "topic": topic, "points": 7.5, "question": question,
         "options": [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(options)],
         "correctId": IDS[key], "solutionSource": "official-pdf", "official": True, "confidence": "high"}
    if accepted:
        q["acceptedIds"] = [IDS[i] for i in accepted]
    if explanation:
        q["explanation"] = explanation
    questions.append(q)


T = "מי מהטענות הבאות נכונה:"

# ---------------------------------------------------------------- can / cannot be the preorder of an AVL tree
# (NEG?, options (lists of numbers), key)
PRE = [
    (False, [[10, 3, 5, 6, 7, 13, 11, 12, 14], [10, 5, 6, 3, 7, 13, 11, 12, 14],
             [10, 5, 3, 6, 7, 14, 13, 11, 12], [10, 5, 3, 6, 7, 12, 11, 13, 14]], 3),
    (True, [[10, 5, 3, 6, 7, 12, 11, 13, 14], [10, 5, 3, 7, 6, 12, 11, 14, 13],
            [10, 5, 3, 6, 7, 14, 13, 11, 12], [10, 5, 3, 6, 7, 12, 11, 14, 13]], 2),
    (True, [[11, 6, 4, 7, 8, 13, 12, 14, 15], [11, 6, 4, 8, 7, 13, 12, 15, 14],
            [11, 6, 4, 7, 8, 13, 12, 15, 14], [11, 6, 4, 7, 8, 15, 14, 12, 13]], 3),
    (False, [[11, 6, 4, 7, 13, 8, 12, 14, 15], [11, 6, 4, 8, 7, 13, 12, 14, 15],
             [13, 6, 4, 7, 8, 11, 14, 12, 15], [15, 12, 7, 6, 48, 11, 13, 14]], 1),
]
for neg, opts, key in PRE:
    mcq("avl", ("מי מהסדרות הבאות **אינה** יכולה להיות פלט בסריקת preorder של עץ AVL" if neg
                else "מי מהסדרות הבאות יכולה להיות פלט בסריקת preorder של עץ AVL"),
        ["$" + ",".join(map(str, o)) + "$" for o in opts], key)

# ---------------------------------------------------------------- decision tree of a sorting algorithm
DT = "יהי $T$ עץ החלטה המתאר את השאילתות באלגוריתם מיון ל-$n$ מספרים שונים. " + T
DTQ = [
    (["לא יתכן שקיים עלה שעומקו $n^2$", "כמות הקודקודים בעץ הוא $n!$",
      "יתכן שקיים מסלול בעץ שאורכו $n-1$", "יתכן שלפחות חצי מהמסלולים בעץ אורכם $n-1$"], [2]),
    (["יתכן שקיים עלה שעומקו $n^2$", "כמות הקודקודים בעץ הוא $n!-1$",
      "יתכן שקיים מסלול באורך $1$", "יתכן שלפחות חצי מהמסלולים בעץ אורכם $n-1$"], [0]),
    (["יתכן שקיים מסלול שאורכו $n$", "יתכן שלפחות חצי מהמסלולים בעץ אורכם $n-1$",
      "יתכן שקיים מסלול באורך $1$", "כמות העלים בעץ קטנה מכמות הקודקודים הפנימיים"], [0]),
    (["יתכן שלפחות חצי מהמסלולים בעץ אורכם $n-1$", "כמות העלים בעץ שווה לכמות הקודקודים הפנימיים",
      "לא יתכן שקיים מסלול באורך $1$", r"יתכן שגובה העץ הוא $\Omega(n^3)$"], [2, 3]),
]
for opts, keys in DTQ:
    if len(keys) == 1:
        mcq("sorting_selection", DT, opts, keys[0])
    else:  # the form has two highlighted options: both are accepted, the first is the primary key
        mcq("sorting_selection", DT, opts, keys[0], accepted=keys,
            explanation="בטופס זה מסומנות כנכונות שתי תשובות (ג' ו-ד'); שתיהן מתקבלות.")

# ---------------------------------------------------------------- master theorem applicability
MASTER_OPTS = ["ניתן לפתור בעזרת משפט האב – לפי המקרה הראשון", "ניתן לפתור בעזרת משפט האב – לפי המקרה השני",
               "ניתן לפתור בעזרת משפט האב – לפי המקרה השלישי", "לא ניתן לפתור בעזרת שיטת האב"]
# (a, b-text, f-text, key, annotation)  -- T(n) = a T(n/b) + f
MASTER = [
    ("6T\\left(\\frac{n}{2}\\right) + n^2", 0, "a=6, b=2, log_2 6 = 2.something, case 1: n^2 = O(n^(2.x-eps))"),
    ("T\\left(\\frac{n}{3}\\right) + n^2", 2, "a=1, b=3, log_3 1 = 0, case 3: n^2 = Omega(n^(0+eps)); a*f(n/b) <= c*f(n): 1*f(n/3) <= c*f(n), n^2/9 <= c*n^2, 1/9 <= c"),
    ("T\\left(\\frac{n}{4}\\right) + 1024", 1, "a=1, b=4, log_4 1 = 0, case 2: f(n)=1024=Theta(1), T(n)=logn"),
    ("3T\\left(\\frac{3n}{2}\\right) + \\frac{3n}{2}", 3, "a=3, b=2/3 < 1 not possible"),
]
for rec, key, ex in MASTER:
    mcq("recurrences", f"נתונה הנוסחה הרקורסיבית הבאה: $T(n) = {rec}$\n\n" + T, MASTER_OPTS, key,
        "הערת הפתרון הרשמי: " + ex)

# ---------------------------------------------------------------- T(n) = a T(n/b) + n^p, a with complexity between n^p and n^(p+1)
# (b, p, options, key)
APAR = [
    (2, 2, [2, 3, 4, 8], 2),
    (2, 3, [29.1, 6.5, 9.3, 7.5], 2),
    (2, 1, [8, 4, 2, 1], 2),
    (4, 2, [64, 128, 16, 2], 2),
]
ANOTE = ["log_2 a: a=4, log_2 4 = 2, case 2, f(n)=n^2=Theta(n^2), T(n)=n^2 logn",
         "a=9.3, b=2, log_2 9.3 = 3.something, case 1: f(n)=n^3 = O(n^(3.x-eps)), T(n)=Theta(n^3.x)",
         "a=2, b=2, log_2 2 = 1, case 2: f(n)=n=Theta(n), T(n)=Theta(nlogn)",
         "a=16, b=4, log_4 16 = 2, f(n)=n^2=Theta(n^2), case 2, T(n)=n^2 logn"]
for (b, p, opts, key), ex in zip(APAR, ANOTE):
    pw = "n" if p == 1 else f"n^{p}"
    pw1 = f"n^{p + 1}"
    mcq("recurrences", (f"בהנתן נוסחת הנסיגה הבאה: $T(n)=aT(n/{b})+{pw}$.\n"
                        f"מי מבין הערכים הבאים של המשתנה $a$ עבורו נקבל סיבוכיות גדולה מ-${pw}$ אך קטנה מ-${pw1}$?"),
        [f"${o}$" for o in opts], key, "הערת הפתרון הרשמי: " + ex)

# ---------------------------------------------------------------- AVL insertion sequences
AVLINS = [
    ([5, 8, 42, 4, 9, 7, 3, 6], [("leaf", 42), ("minnotleaf",), ("rot", 1), ("root", 7)], 2),
    ([5, 8, 4, 9, 7, 3, 6, 42], [("leaf", 42), ("minnotleaf",), ("rot", 1), ("root", 7)], 0),
    ([5, 8, 4, 9, 7, 3, 6, 42], [("notleaf", 42), ("minnotleaf",), ("root", 7), ("norot",)], 3),
    ([9, 5, 8, 4, 7, 3, 6, 42], [("depth", 42, 2), ("mindepth", 3), ("rot", 2), ("root", 7)], 2),
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

# ---------------------------------------------------------------- double hashing, table of size 11, h2 = (x mod 7) + 1
HSEQ = [11, 5, 6, 22, 7, 13]
HASH = [
    (HSEQ, [(13, 2), (5, 0), (7, 0), (22, 2)], 3),
    (HSEQ, [(7, 9), (5, 0), (13, 9), (22, 0)], 2),
    (HSEQ, [(7, 5), (5, 5), (13, 0), (22, 0)], 1),
]
for seq, opts, key in HASH:
    mcq("hashing", ("נתונה סדרת המספרים הבאה (משמאל לימין):\n\n$" + ",".join(map(str, seq)) +
                    "$\n\nהשתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל $11$:\n\n"
                    r"$h(x,i) = \left(x \bmod 11 + i((x \bmod 7) + 1)\right) \bmod 11$" "\n\n" + T),
        [f"המפתח ${x}$ ייכנס לתא באינדקס ${j}$ במערך." for x, j in opts], key,
        "הערת הפתרון הרשמי: 22 mod 11=0 occupied, 1+22mod7=1+1=2, 0+2=2 vacant; 13 mod 11=2 occupied, 1+13mod7=1+6=7, 2+7=9 vacant")

# ---------------------------------------------------------------- linear probing, h(x) = x mod 10: which insertion order?
LIN_A = {1: 61, 2: 52, 3: 93, 4: 11, 5: 85, 6: 44, 7: 73}
LIN_B = {1: 61, 2: 52, 3: 93, 4: 73, 5: 85, 6: 44, 7: 11}
# (final table, NEG?, options (sequences), key)
LIN = [
    (LIN_A, True, [[52, 93, 61, 85, 73, 11, 44], [52, 93, 61, 85, 11, 44, 73],
                   [93, 52, 61, 11, 85, 44, 73], [93, 61, 85, 52, 11, 44, 73]], 0),
    (LIN_A, False, [[52, 93, 11, 85, 65, 44, 73], [61, 93, 52, 85, 73, 44, 11],
                    [93, 52, 61, 85, 11, 73, 44], [93, 61, 85, 52, 11, 44, 73]], 3),
    (LIN_B, False, [[52, 93, 61, 85, 73, 11, 44], [52, 93, 61, 85, 11, 44, 73],
                    [93, 52, 61, 11, 85, 44, 73], [93, 61, 85, 52, 73, 44, 11]], 3),
    (LIN_B, True, [[93, 61, 85, 52, 73, 44, 11], [52, 93, 73, 85, 44, 61, 11],
                   [52, 73, 61, 93, 85, 44, 11], [93, 85, 61, 52, 73, 44, 11]], 2),
]
LIN_NOTES = ["73 - index 4 was free",
             "Option A: index 1 was free when 11 entered. Option B: index 4 was free when 73 entered. Option C: index 6 was free when 73 entered",
             "Option A: index 6 was free when 11 entered. Option B: index 4 was free when 11 entered. Option C: index 4 was free when 11 entered",
             "index 3 was free when 73 entered"]
for (tab, neg, opts, key), ex in zip(LIN, LIN_NOTES):
    mcq("hashing", ("נתונה טבלת גיבוב בשיטת הגיבוב הלינארי, המשתמשת בפונקציית הגיבוב הבאה: $h(x) = x \\bmod 10$\n\n"
                    "הטבלה הנתונה (אינדקס: ערך): " + ", ".join(f"$A[{i}]$: ${tab[i]}$" for i in sorted(tab)) +
                    ". שאר התאים ($A[0]$, $A[8]$, $A[9]$) ריקים.\n\n"
                    + ("אילו מהסדרות הבאות **אינה** יכולה להיות סדרת הכנסה לטבלה (יש לקרוא את הסדרות משמאל לימין):" if neg
                       else "אילו מהסדרות הבאות יכולה להיות סדרת הכנסה לטבלה (יש לקרוא את הסדרות משמאל לימין):")),
        ["$" + ",".join(map(str, o)) + "$" for o in opts], key, "הערת הפתרון הרשמי: " + ex)

# ---------------------------------------------------------------- the "mi bari" structure (Init / Delete / DeleteMin on 1..n)
MB = ("להלן הגדרת הפעולות במבנה הנתונים \"מי בראש\" הממומש על המספרים הטבעים מ-1 עד $n$:\n\n"
      "- `Init(n)`: מאתחלת את המבנה עם כל המספרים מ-1 עד $n$. פעולת האיתחול מתבצעת פעם אחת בלבד.\n"
      "- `Delete(x)`: מוחק את הערך $x$ מהמבנה. אם $x$ כבר אינו במבנה, הפעולה לא עושה כלום.\n"
      "- `DeleteMin()`: מוחק ומחזיר את הערך המינימלי כרגע במבנה.\n\n"
      "מי מתוך המבנים הבאים יאפשר לממש את המבנה \"מי בראש\" בזמן ריצה הטוב ביותר לכל פעולה:")
mcq("linear_ds", MB, ["ערימה מינימום", "טבלת גיבוב עם ערימת מינימום", "עץ AVL", "רשימה מקושרת דו כיוונית ומערך"], 3,
    "הערת הפתרון הרשמי: רשימה מקושרת דו כיוונית ומערך שמצביע לצמתי הרשימה (לדוגמה n=3: המערך מצביע לצמתים 1, 2, 3 ברשימה L).")

# ---------------------------------------------------------------- order-statistics dictionary
OS = ("רוצים לממש מילון התומך בפעולות הבאות: חיפוש המפתח $k$ במבנה, הכנסת מפתח $k$ למבנה, הוצאת המפתח $k$ מהמבנה, "
      "החזרת האיבר ה-$i$ בגודלו במבנה בזמן $O(\\log n)$, כאשר $n$ כמות הנתונים במבנה.\n\n"
      "לדוגמה: עבור קבוצת המפתחות הבאה: $10,2,8,3,7,5,12$ ועבור $i=3$ הפעולה של החזרת האיבר ה-$i$ בגודלו תחזיר $5$. "
      "(כלומר, האיבר השלישי בגודלו בקבוצת המפתחות הנתונה הוא $5$, כי שני המפתחות $2,3$ קטנים ממנו ושאר המפתחות $7,8,10,12$ גדולים ממנו)\n\n" + T)
mcq("ds_design", OS, ["לא ניתן לממש מבנה שיעמוד בדרישות אלו",
                      "עץ AVL שבכל קודקוד נוסף שדה של כמות הקודקודים בתת העץ המושרש של קודקוד זה",
                      "עץ AVL שבכל קודקוד נוסף שדה של גובה תת העץ המושרש של קודקוד זה",
                      "עץ AVL שבכל קודקוד נוסף שדה של עומק הקודקוד"], 1)

# ---------------------------------------------------------------- minimal number of nodes of a heap of height h
mcq("heaps", "בייצוג ערימה בעזרת עץ בינארי (ולא במערך), מה כמות הקודקודים המינימלית בערימה בגובה $h$ ?",
    ["$2^h + 1$", "$2^h$", "$2^h - 1$", "$2(2^h + 1)$"], 1,
    "הערת הפתרון הרשמי: Total = 2^h - 1 + 1 = 2^h")

# ---------------------------------------------------------------- STAM: sqrt(n) .. n/2 outer loop, doubling inner loop up to n/4
mcq("complexity", ("נתון קטע הפסודוקוד הבא, בחר את סיבוכיות זמן הריצה שלו:\n\n"
                   "```\nSTAM(A[1..n])\n    for (i = sqrt(n); i <= n/2; i++)\n        for (j = 1; j <= n/4; j = j*2)\n            A[i]++\n```"),
    [r"$\theta(n)$", r"$\theta(\log n)$", r"$\theta(\sqrt{n} \log n)$", r"$\theta(n \log \sqrt{n})$"], 3,
    "הערת הפתרון הרשמי: n/2 - sqrt2 = Theta(n); logn; Theta(nlogn)")

# ---------------------------------------------------------------- sortsub on an array with only log n distinct values
SS = ("תהי sortsub פונקציה המקבלת מערך לא ממוין של $n$ מספרים ממשים שרק $\\log n$ מספרים מהם שונים זה מזה, ומחזירה את המערך ממוין.\n\n"
      "מי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:")
NOSAY = "לא ניתן לומר דבר על הסיבוכיות של sortsub"
mcq("sorting_selection", SS, [r"סיבוכיות זמן הריצה הוא $\theta(n \log(\log n))$", r"סיבוכיות זמן הריצה הוא $\Omega(n \log^2 n)$",
                              r"סיבוכיות זמן הריצה הוא $\Omega(n \log n)$", NOSAY], 0,
    "הערת הפתרון הרשמי: We will use an AVL tree with a counter for each node = how many of each key are in the tree. "
    "The AVL size is logn, then h=loglogn. We'll insert all n numbers to the AVL tree O(nloglogn), we'll print all in inorder O(n)")
mcq("sorting_selection", SS, [NOSAY, r"סיבוכיות זמן הריצה הוא $\Omega(n\sqrt{n})$", r"סיבוכיות זמן הריצה הוא $\Omega(n \log n)$",
                              r"סיבוכיות זמן הריצה הוא $O(n \log(\log n))$"], 3)
mcq("sorting_selection", SS, [NOSAY, r"סיבוכיות זמן הריצה הוא $O(n)$", r"סיבוכיות זמן הריצה הוא $O(n\sqrt{n})$",
                              r"סיבוכיות זמן הריצה הוא $\theta(n \log n)$"], 2,
    "הערת הפתרון הרשמי: possible in O(nloglogn)")

# ---------------------------------------------------------------- Q13 (open): num 100 here
Q13 = {
    "num": 100, "kind": "algorithm", "topic": "ds_design", "points": 25,
    "question": r"""עליכם לממש מבנה נתונים התומך בפעולות הבאות על מספרים בסיבוכיות הזמן הנדרשת.

תארו תחילה מה כולל מבנה הנתונים שלכם, ואח"כ הסבירו כיצד תתבצע כל אחת מהפעולות (שימו לב, $n$ מציין את מספר הנתונים במבנה).

- `Insert(k)` – הכנסת המפתח $k$ למבנה. סיבוכיות הזמן הנדרשת: $O(\log n)$.
- `ExtractMin()` – החזרת המפתח המינימלי במבנה. סיבוכיות הזמן הנדרשת: $O(1)$.
- `DeleteMin()` – מחיקת המפתח המינימלי במבנה. סיבוכיות הזמן הנדרשת: $O(\log n)$.
- `Delete(x)` – מחיקת המפתח ש-$x$ מצביע עליו במבנה. סיבוכיות הזמן הנדרשת: $O(\log n)$.""",
    "solution": r"""**אפשרות ראשונה:** נשתמש במבנה נתונים ערימת מינימום.

מימוש הפעולות:

- `Insert(k)` – הכנסת המפתח $k$ לערימה – פעולה שהערימה תומכת בה ב-$O(\log n)$.
- `ExtractMin()` – החזרת המפתח המינימלי במבנה פעולה שהערימה תומכת בה ב-$O(1)$.
- `DeleteMin()` – מחיקת המפתח המינימלי מהערימה – פעולה שהערימה תומכת בה ב-$O(\log n)$.
- `Delete(x)` – זו פעולה שלא מוגדרת בערימה ולכן נסביר איך לבצע אותה: נחליף את המפתח שנמצא בתא ש-$x$ מצביע עליו עם המפתח באיבר האחרון בערימה שמייצג את הערימה. נקטין את גודל הערימה ב-$1$, ונקרא גם ל-`heapifyup` וגם ל-`heapifydown` לביצוע תיקון הערכים, אבל לכל היותר אחד מהם באמת יתבצע. סה"כ עלות הפעולות $O(\log n)$.

**אפשרות שנייה:** נשתמש במבנה נתונים עץ AVL עם מצביע `min_ptr` לאיבר המינימלי בעץ / משתנה MIN המשמר את ערך המינימום.

מימוש הפעולות:

- `Insert(k)` – הכנסת המפתח $k$ לעץ ה-AVL. זו פעולה שנתמכת ע"י העץ ב-$O(\log n)$. נבדוק האם $k$ קטן מהערך שעליו מצביע `min_ptr`, ואם כן אז נעדכן את מצביע `min_ptr` / משתנה MIN על ידי הצבעה על הקודקוד השמאלי ביותר בעץ. את הבדיקה והעדכון ניתן לעשות ב-$O(1)$.
- `ExtractMin()` – החזרת המפתח עליו מצביע `min_ptr` / המשתנה MIN ב-$O(1)$.
- `DeleteMin()` – מחיקת המפתח עליו מצביע `min_ptr` / מחיקת הקודקוד השמאלי ביותר בעץ AVL. פעולה שניתן לבצע בעץ AVL ב-$O(\log n)$. יש לעדכן את המצביע `min_ptr` להצביע על האיבר המינימלי החדש בעץ, זאת נעשית ע"י ירידה מהשורש עד לעלה הכי שמאלי (הוא מכיל את הערך המינימלי), ונעדכן את `min_ptr` להצביע עליו / באופן דומה נעדכן את המשתנה MIN. עדכון זה גם כן נעשה בזמן $O(\log n)$.
- `Delete(x)` – מחיקת המפתח עליו מצביע $x$ – פעולה שניתן לבצע בעץ AVL ב-$O(\log n)$. אם $x$ = `min_ptr`, יש לעדכן את המצביע `min_ptr` להצביע על האיבר המינימלי החדש בעץ, זאת נעשית ע"י ירידה מהשורש עד לעלה הכי שמאלי (הוא מכיל את הערך המינימלי), ונעדכן את `min_ptr` להצביע עליו / באופן דומה נעדכן את המשתנה MIN. עדכון זה גם כן נעשה בזמן $O(\log n)$.

**הערה:** היו שהשתמשו בעץ AVL וערימה עם פוינטרים הדדיים ביניהם. זה כמובן מיותר, אבל קיבלנו את הפתרון כל עוד היתה התייחסות נכונה לעדכון הפוינטרים ההדדיים בפעולות ההכנסה והמחיקה.""",
    "solutionSource": "official-pdf", "official": True, "confidence": "high",
}
questions.append(Q13)

exam = {
    "examCode": "24B-B",
    "examLabel": 'מבני נתונים, סמסטר ב תשפ"ד, מועד ב (8.8.24)',
    "year": 2024,
    "examDate": "8.8.2024",
    "sourceFile": "ds-2024-B-B-forms",
    "solutionFile": "ds-2024-B-B-forms-keys",
    "questions": questions,
}

if __name__ == "__main__":
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"wrote {OUT.name}: {len(questions)} items ({len(questions) - 1} mcq + Q13)")
