# -*- coding: utf-8 -*-
"""Generator for tools/raw/24S-A.json -- data-structures, summer 2024 (moed A, 14.10.24).
Three shuffled forms (A/B/C), 12 MCQ (7.5 pts each) + one open question (Q13, 25 pts) per form.
Keys = the option highlighted on that form's page, matched by option text (never by position).
Machine checks of those keys: tools/verify/24S-A/verify.py.
Dedupe: a stem that is identical across forms (same option set, only the order differs) is ONE bank item.
Numbering: num = printed number on the form where the stem first appears, offset by form:
  form A -> 1..12 as printed; form B -> 20 + printed number; form C -> 40 + printed number. Q13 is printed 13.
Q13 has no printed solution on any form: solved by the solver (solutionSource solved, official false), checked by
tools/verify/24S-A/solve_24S-A_Q13.py. Insert is O(n log n) as printed (that budget is what the pair-sum tree needs).
Merged duplicates: A1=B4=C4 (linked list), A3=B6=C6 (select), A5=B2=C8 (print_smaller_k),
  A7=B7=C9 (heap to AVL), A12=C3 (two algorithms, same wording; B swaps first/second).
Run: PYTHONUTF8=1 py tools/gen/gen_24S-A.py"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "24S-A.json"
IDS = "abcdef"
NL = 'הנ"ל'


def M(num, topic, question, options, key, **kw):
    """MCQ: options = texts in the printed order; key = the highlighted option's text (matched by content)."""
    assert options.count(key) == 1, (num, key)
    q = {"num": num, "kind": "mcq", "topic": topic, "question": question,
         "options": [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(options)],
         "correctId": IDS[options.index(key)],
         "solutionSource": "official-pdf", "official": True, "confidence": "high", "points": 7.5}
    q.update(kw)
    return q


contexts = {
    "c1": {"kind": "image", "title": "רשימה דו ראשית (שאלה 1)",
           "image": "images/exams/24S-A-c1.png",
           "caption": "שתי רשימות מקושרות המתחברות לרשימה אחת."},
}

# ---- shared stems / option sets ------------------------------------------------------------------
LL_OPTS = ["האלגוריתם נכון ומדוייק", "האלגוריתם שגוי לחלוטין",
           "ישנם מקרים ספציפיים בהם האלגוריתם יעבוד",
           "סיבוכיות האלגוריתם תלויה ביחס בין אורכי החלקים של ראשי הרשימה"]
LL_Q = r"""נגדיר מבנה של רשימה דו ראשית כמבנה המורכב משתי רשימות המתחברות לרשימה אחת: (ראו דוגמא באיור)

להלן תאור סכמטי של אלגוריתם שמדפיס את כל האיברים ברשימה דו ראשית:

- אתחל שני מצביעים לתחילת הרשימות.
- כל עוד המצביעים לא מצביעים על אותו איבר, בצע את הפעולות הבאות:
- ◦ הדפס את האיבר שהמצביע הראשון מצביע עליו וקדם אותו קדימה.
- ◦ הדפס את האיבר שהמצביע השני מצביע עליו וקדם אותו קדימה.
- עבור רק על המצביע הראשון, כל עוד הוא לא `Null` קדם אותו קדימה והדפס את האיבר המוצבע.

להלן מספר קביעות לגבי האלגוריתם, מי מהן הנכונה ביותר?"""

PRE_OPTS = ["ייתכן שהעץ הוא עץ חיפוש, אך לא ייתכן שהוא עץ AVL", "ייתכן שהעץ הוא עץ AVL",
            "לא ייתכן שהעץ הוא עץ חיפוש", "לא ניתן לדעת על פי סריקת preorder בלבד האם העץ הוא עץ חיפוש"]


def pre_q(seq):
    return "נתונה סריקת preorder של עץ בינארי (משמאל לימין):\n" + seq + "\n\nמהו המשפט הנכון?"


SEL_Q = r"""משתמשים באלגוריתם select כדי למצוא האם קיימים שני איברים במערך נתון בגודל $n$, כך שהאיבר הראשון מופיע לפחות $\frac{n}{a}$ פעמים והאיבר השני מופיע לפחות $\frac{n}{b}$ פעמים במערך, כאשר $a < b$.

לדוגמה:
עבור $a=4$, $b=5$ אנחנו מחפשים האם קיימים 2 איברים במערך הנתון, כך שאחד מהם מופיע לפחות $\frac{n}{4}$ פעמים, כלומר לפחות 25% מערכי המערך שווים לו. והאיבר השני מופיע לפחות $\frac{n}{5}$ פעמים במערך, כלומר לפחות 20% מערכי המערך שווים לו.

כמה פעמים נצטרך לקרוא ל-select במקרה הגרוע באלגוריתם ה**יעיל** ביותר, כך שנוכל לאתר האם קיימים שני איברים כאלה?"""
SEL_OPTS = [r"$a - 1$", r"$b - 1$", r"$(a - 1)*(b - 1)$", r"$a + b + 1$"]


def avl_q(d):
    return (f"נתון עץ חיפוש בינרי שיש בו עלה בעומק ${d}$. מהו המספר ה**מינימלי** של **צמתים** בעץ הנתון כך שיהיה עץ AVL?\n"
            "(כלומר, שיהיה עץ בינרי מאוזן)")


PSK_Q = r"""תהי `print_smaller_k` פונקציה המקבלת מערך בן $n$ איברים, ומדפיסה את $k$ האיברים הקטנים ביותר במערך הנתון לפי הסדר מקטן לגדול.
מי מהאמירות הבאות נכונה למימוש ה**יעיל ביותר** של `print_smaller_k`:"""
PSK_OPTS = [r"סיבוכיות זמן הריצה היא $\theta(k\log n + n)$", r"סיבוכיות זמן הריצה היא $\theta(k\log k + n)$",
            r"סיבוכיות זמן הריצה היא $\theta(n\log n)$", r"סיבוכיות זמן הריצה היא $\theta(k\log k)$"]

REC_Q = 'תנו חסם אסימפטוטי הדוק ("תטא") לנוסחת הנסיגה הבאה (עבור $n$ מספיק קטן מתקיים $T(n)=O(1)$):'
SOL_Q = "מהו הפתרון לנוסחת הנסיגה הבאה:"

HEAP_Q = r"""נתונה ערימת מינימום $A$ עם $n$ מספרים שונים זה מזה.
רוצים להפוך את הערימה לעץ AVL.

מי מהטענות הבאות נכונה:"""
HEAP_OPTS = [f"ניתן לבצע את {NL} בזמן $\\theta(n)$", f"ניתן לבצע את {NL} בזמן $\\theta(\\sqrt{{n}})$",
             f"ניתן לבצע את {NL} בזמן $\\theta(n\\log\\log n)$", f"ניתן לבצע את {NL} בזמן $\\theta(n\\log n)$"]

UNION_Q = """משתמשים במבנה נתונים לייצוג קבוצות זרות בייצוג ע"י עצים הפוכים, כך שבפעולת האיחוד מחברים את הקבוצה הקטנה לגדולה.
נתון העץ הבא:

נתונות אפשרויות שונות לסדרת פעולות `Union` שיצרו את העץ הנתון.

- יש לקרוא את סדרת הפעולות הבאות משמאל לימין.
- הניחו שלפני כל סדרה התבצעו הפעולות הבאות:

`Makeset(1), Makeset(2), Makeset(3), Makeset(4), Makeset(5), Makeset(6)`

מי מבין הסדרות הבאות יכלה ליצור את העץ הנתון?"""
NONE_OPT = "לא קיימת סדרת פעולות Union שיכולה ליצור את העץ הנתון"


def seq(*pairs):
    return ", ".join(f"`Union({a},{b})`" for a, b in pairs)


HASH_Q = r"""עבור פונקציות הגיבוב הבאות, מי מהן יכולה לשמש פונקציית גיבוב טובה עבור גיבוב כפול?

(כלומר, אנחנו מחפשים פונקציית גיבוב בשיטת הגיבוב הכפול, כך שטבלת הגיבוב תעבוד באופן שלמדנו בכיתה, ולא ייווצרו בעיות עבור מפתחות מסויימים)."""
RND = " כאשר $random(x)$ מקבלת את המספר $x$ ומחזירה מספר בין $0$ ל-$x$."


def hf(m1, step, m2):
    return f"$h(x,i) = \\left(x \\bmod {m1} + i\\left({step}\\right)\\right) \\bmod {m2}$"


def hfr(m, step):
    return f"$h(x,i) = \\left(random(x) \\bmod {m} + i\\left({step}\\right)\\right) \\bmod {m}$" + RND


S5P1 = r"(x \bmod 5)+1"
S7P1 = r"(x \bmod 7)+1"
S9P1 = r"(x \bmod 9)+1"

TWO_Q = r"""נתונים שני אלגוריתמים לפתרון אותה הבעיה, אחד מבצע את הפעולה בזמן $\theta\left(\frac{1}{100}n^2\right)$ והשני בזמן $\theta(5n\log n)$

מה ניתן לומר על האלגוריתמים?"""
TWO_Q_SWAP = r"""נתונים שני אלגוריתמים לפתרון אותה הבעיה, אחד מבצע את הפעולה בזמן $\theta(5n\log n)$ והשני בזמן $\theta\left(\frac{1}{100}n^2\right)$

מה ניתן לומר על האלגוריתמים?"""
TWO_OPTS = ["הסיבוכיות של האלגוריתם הראשון עדיפה בכל גודל קלט", "הסיבוכיות של האלגוריתם השני עדיפה בכל גודל קלט",
            "הסיבוכיות של האלגוריתם השני עדיפה, אך בקלטים קטנים עדיף האלגוריתם הראשון",
            "הסיבוכיות של האלגוריתם הראשון עדיפה אך בקלטים קטנים עדיף האלגוריתם השני"]

CUCKOO_HEAD = r"""נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:

$h_1(x) = x \bmod 11$
$h_2(x) = \left\lfloor \frac{x}{11} \right\rfloor \bmod 11$

לטבלה הוכנסו הערכים הבאים: משמאל לימין
"""


def cuckoo_q(vals, which):
    return CUCKOO_HEAD + "$\\{" + ",".join(map(str, vals)) + "\\}$\n\n" + f"אילו מהערכים יהיו בטבלה ה{which}?"


def rec(head, tail, opts, key):
    return head + "\n\n" + tail, opts, key


SOL13 = r"""**המבנה:** שני עצי AVL.
1. $T$: עץ AVL של המספרים שבמבנה.
2. $P$: עץ AVL של **סכומי הזוגות**: לכל ערך $s$ שהוא סכום של שני מספרים שונים במבנה, צומת אחד עם המפתח $s$ ועם זוג "עד" $(a, b)$ כך ש-$a + b = s$.

ב-$P$ יש לכל היותר $\binom{n}{2} < n^2$ צמתים, ולכן גובהו $O(\log n^2) = O(2\log n) = O(\log n)$.

- `Search(k)`: חיפוש רגיל של $k$ ב-$T$. $O(\log n)$.
- `Insert(k)`: מחפשים את $k$ ב-$T$; אם קיים, לא עושים דבר. אחרת, סורקים את $T$ (סריקת inorder, $O(n)$), ולכל מספר $y$ בו מחפשים את $k + y$ ב-$P$; אם אינו קיים, מכניסים ל-$P$ את המפתח $k + y$ עם העד $(k, y)$. לבסוף מכניסים את $k$ ל-$T$. יש $n$ חיפושים והכנסות ל-$P$, כל אחד $O(\log n)$, ולכן סה"כ $O(n \log n)$.
- `Sum(x)`: מחפשים את $x$ ב-$P$. אם נמצא, מחזירים את זוג העד שלו; אחרת מחזירים שלא קיים זוג. $O(\log n)$.

**נכונות:** שמורה: לכל שני מספרים שונים $a, b$ במבנה, הסכום $a + b$ נמצא ב-$P$ עם עד תקין. הזוג מתווסף בדיוק כשהשני מביניהם מוכנס (אז הראשון כבר ב-$T$ ונסרק). אין מחיקות, ולכן עד שנשמר נשאר תקין. מכאן ש-`Sum(x)` מוצא את $x$ ב-$P$ אם ורק אם יש זוג שסכומו $x$.

(המגבלה $O(n \log n)$ על `Insert` היא שמאפשרת לעדכן מראש את כל הסכומים החדשים, וכך `Sum` הוא חיפוש יחיד.)"""


questions = [
    # ================= form A (printed numbers 1-12) =================
    M(1, "linear_ds", LL_Q, LL_OPTS, LL_OPTS[2], contextId="c1"),
    M(2, "bst", pre_q("10,5,2,8,6,100,50,45,47,105"), PRE_OPTS, PRE_OPTS[0]),
    M(3, "sorting_selection", SEL_Q, SEL_OPTS, SEL_OPTS[1]),
    M(4, "avl", avl_q(4), ["10", "12", "14", "20"], "12"),
    M(5, "sorting_selection", PSK_Q, PSK_OPTS, PSK_OPTS[1]),
    M(6, "recurrences", REC_Q + "\n\n$T(n) = T\\left(\\frac{n}{4}\\right) + T\\left(\\frac{n}{2}\\right) + n$",
      [r"$\Theta(n^2)$", r"$\Theta(n)$", r"$\Theta(n(\log n)^2)$", r"$\Theta(n\log n)$"], r"$\Theta(n)$"),
    M(7, "heaps", HEAP_Q, HEAP_OPTS, HEAP_OPTS[3]),
    M(8, "union_find", UNION_Q,
      [seq((1, 3), (5, 3), (4, 3), (2, 1), (6, 5)), seq((1, 2), (3, 4), (5, 6), (4, 2), (6, 2)),
       seq((1, 2), (3, 4), (5, 6), (6, 2), (4, 2)), NONE_OPT],
      seq((1, 2), (3, 4), (5, 6), (4, 2), (6, 2)), image="images/exams/24S-A-Q8.png"),
    M(9, "hashing", HASH_Q,
      [hf(14, S5P1, 14), hf(13, r"x \bmod 5", 13), hf(13, S7P1, 13), hfr(13, S7P1)],
      hf(13, S7P1, 13)),
    M(10, "recurrences", SOL_Q + "\n\n$T(n) = 2T\\left(\\frac{n}{\\sqrt{2}}\\right) + n + \\sqrt{n}$",
      [r"$\theta(\sqrt{n}\log n)$", r"$\theta(n^2)$", r"$\theta(n\log n)$", r"$\theta(n)$"], r"$\theta(n^2)$"),
    M(11, "hashing", cuckoo_q([13, 17, 20, 24, 39, 88, 28], "שניה $T_2$"),
      ["13,17,24,39", "17,24,39", "13,20,28", "13,17,20,28"], "17,24,39"),
    M(12, "complexity", TWO_Q, TWO_OPTS, TWO_OPTS[2]),

    # ================= form B (new stems only; num = 20 + printed number) =================
    M(21, "avl", avl_q(5), ["12", "18", "20", "22"], "20"),
    M(23, "recurrences", REC_Q + "\n\n$T(n) = T\\left(\\frac{n}{6}\\right) + T\\left(\\frac{n}{3}\\right) + n$",
      [r"$\Theta(n^2\log n)$", r"$\Theta(n\log n)$", r"$\Theta(n^2)$", r"$\Theta(n)$"], r"$\Theta(n)$"),
    M(25, "bst", pre_q("10,6,5,2,8,50,47,45,100,105"), PRE_OPTS, PRE_OPTS[1]),
    M(28, "recurrences", SOL_Q + "\n\n$T(n) = 2T\\left(\\frac{n}{\\sqrt{2}}\\right) + \\sqrt{n}$",
      [r"$\theta(\sqrt{n}\log n)$", r"$\theta(n)$", r"$\theta(n\log n)$", r"$\theta(n^2)$"], r"$\theta(n^2)$"),
    M(29, "union_find", UNION_Q,
      [seq((1, 3), (5, 1), (4, 3), (2, 1), (6, 5)), seq((1, 2), (3, 4), (5, 6), (3, 6), (2, 4)),
       seq((1, 2), (3, 4), (5, 6), (2, 4), (2, 6)), NONE_OPT],
      seq((1, 2), (3, 4), (5, 6), (2, 4), (2, 6)), image="images/exams/24S-A-Q9b.png"),
    M(30, "hashing", HASH_Q,
      [hf(14, S5P1, 12), hf(11, S5P1, 11), hf(11, r"x \bmod 7", 11), hfr(11, S7P1)],
      hf(11, S5P1, 11)),
    M(31, "complexity", TWO_Q_SWAP, TWO_OPTS, TWO_OPTS[3]),
    M(32, "hashing", cuckoo_q([24, 39, 88, 28, 13, 17, 20], "ראשונה $T_1$"),
      ["13,17,24,39", "17,24,39", "13,20,28", "88,24,17,20"], "88,24,17,20"),

    # ================= form C (new stems only; num = 40 + printed number) =================
    M(41, "recurrences", SOL_Q + "\n\n$T(n) = 3T\\left(\\frac{n}{\\sqrt{3}}\\right) + n^2 + \\sqrt{n}$",
      [r"$\theta(n^2\log n)$", r"$\theta(n^2)$", r"$\theta(n\log n)$", r"$\theta(n)$"], r"$\theta(n^2\log n)$"),
    M(42, "hashing", cuckoo_q([13, 17, 20, 24, 39, 88, 28], "ראשונה $T_1$"),
      ["13,20,28,88", "17,24,39", "13,20,28", "13,17,20,28"], "13,20,28,88"),
    M(45, "bst", pre_q("50,47,6,5,8,10,100,45,105"), PRE_OPTS, PRE_OPTS[2]),
    M(47, "avl", avl_q(6), ["20", "28", "31", "33"], "33"),
    M(50, "recurrences", REC_Q + "\n\n$T(n) = T\\left(\\frac{n}{3}\\right) + T\\left(\\frac{n}{2}\\right) + n$",
      [r"$\Theta(n\log\log n)$", r"$\Theta(n\log n)$", r"$\Theta(n)$", r"$\Theta(n^2)$"], r"$\Theta(n)$"),
    M(51, "union_find", UNION_Q,
      [seq((1, 2), (3, 4), (5, 6), (6, 4), (4, 2)), seq((1, 2), (3, 4), (5, 6), (4, 2), (6, 4)),
       seq((5, 3), (5, 6), (3, 4), (1, 2), (5, 1)), NONE_OPT],
      seq((1, 2), (3, 4), (5, 6), (6, 4), (4, 2)), image="images/exams/24S-A-Q11c.png"),
    M(52, "hashing", HASH_Q,
      [hf(13, S9P1, 13), hf(14, S9P1, 14), hf(13, r"x \bmod 7", 13), hfr(13, S7P1)],
      hf(13, S9P1, 13)),

    # ================= open question 13 (identical on all forms; the booklet prints no solution) =================
    {"num": 13, "kind": "algorithm", "topic": "ds_design", "points": 25,
     "solutionSource": "solved", "official": False, "confidence": "high",
     "solution": SOL13,
     "question": r"""עליכם לממש מבנה נתונים התומך בפעולות הבאות על מספרים בסיבוכיות הזמן הנדרשת.
תארו תחילה מה כולל מבנה הנתונים שלכם, ואח"כ הסבירו כיצד תתבצע כל אחת מהפעולות (שימו לב, $n$ מציין את מספר הנתונים במבנה).

- `Search(k)`: חיפוש איבר בעל מפתח $k$. סיבוכיות הזמן הנדרשת: $O(\log n)$.
- `Insert(k)`: הכנסת המפתח $k$ למבנה, אם אינו קיים כבר במבנה (במקרה ש-$k$ נמצא במבנה, הפעולה לא תשנה את המבנה). סיבוכיות הזמן הנדרשת: $O(n\log n)$.
- `Sum(x)`: החזרת שני מספרים שנמצאים במבנה וסכומם שווה ל-$x$. אם לא קיים כזה זוג, החזירו הודעה שלא קיים. אם קיימים יותר מזוג מספרים אחד כזה, החזירו רק אחד מהם. סיבוכיות הזמן הנדרשת: $O(\log n)$."""},
]

# ---- rubric / pitfalls / steps (ai-draft). Expected values are asserted in tools/verify/24S-A/steps_check.py ----
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


_add(13,
     rubric=_rub((r"""שני עצי AVL: $T$ למספרים ו-$P$ לסכומי הזוגות, עם זוג עד לכל סכום""", 6),
                 (r"""גובה $P$ הוא $O(\log n)$ כי יש בו פחות מ-$n^2$ צמתים""", 3),
                 (r"""`Search(k)`: חיפוש רגיל ב-$T$, $O(\log n)$""", 2),
                 (r"""`Insert(k)`: סריקת $T$ והכנסת $k+y$ ל-$P$ כשאינו קיים, ואז הכנסת $k$ ל-$T$, $O(n\log n)$""", 7),
                 (r"""`Sum(x)`: חיפוש $x$ ב-$P$ והחזרת העד, $O(\log n)$""", 4),
                 (r"""נימוק נכונות: כל זוג נוסף בדיוק כשהשני נכנס, ואין מחיקות""", 3)),
     rubricSource="ai-draft",
     pitfalls=[r"""לחשב את הסכומים בכל קריאה ל-`Sum`: זה $O(n)$ או יותר ולא $O(\log n)$.""",
               r"""להכניס את $k$ ל-$T$ לפני הסריקה, ואז הסכום $2k$ נרשם עם הזוג $(k,k)$ שאינו זוג של מספרים שונים.""",
               r"""להכניס ל-$P$ סכום שכבר קיים: צריך לחפש קודם ולא ליצור כפילות."""],
     steps=[
         {"type": "numeric", "prompt": r"""לכל היותר כמה סכומים שונים של זוגות מספרים שונים יכולים להיות ב-$P$ כשיש במבנה $n=10$ מספרים?""",
          "answer": 45, "tol": 0,
          "explain": r"""$\binom{10}{2}=45$, והחסם מושג למשל עבור חזקות של $2$ (נבדק, ובקלטים אקראיים לא עוברים אותו). לכן $|P|<n^2$ וגובהו $O(\log n^2)=O(\log n)$."""},
         {"type": "numeric", "prompt": r"""במבנה יש $T=\{1,2,4\}$ ולכן $P=\{3,5,6\}$. מבצעים `Insert(3)`. כמה סכומים שונים יש ב-$P$ אחרי ההכנסה?""",
          "answer": 5, "tol": 0,
          "explain": r"""הסכומים החדשים: $3+1=4$, $3+2=5$, $3+4=7$. הסכום $5$ כבר קיים ולכן לא נכנס שוב, ו-$P=\{3,4,5,6,7\}$ (נבדק בסימולציה)."""},
         {"type": "text", "prompt": r"""מהי סיבוכיות `Insert(k)` לפי הפתרון? (כתבו בצורה `O(...)`)""",
          "accept": ["O(n log n)"], "normalize": "complexity",
          "explain": r"""עוברים על $n$ מספרים, ולכל אחד חיפוש והכנסה ב-$P$ בעלות $O(\log n)$: סה"כ $O(n\log n)$."""},
         {"type": "order", "prompt": r"""סדרו את שלבי `Insert(k)`.""",
          "lines": [r"""מחפשים את $k$ ב-$T$; אם הוא קיים, מסיימים""",
                    r"""עוברים על כל $y$ ב-$T$: אם $k+y$ אינו ב-$P$, מכניסים אותו עם העד $(k,y)$""",
                    r"""מכניסים את $k$ ל-$T$"""],
          "explain": r"""אם $k$ נכנס ל-$T$ לפני הסריקה, הסריקה פוגשת גם את $y=k$ ורושמת את $2k$ עם העד $(k,k)$. בסימולציה: אחרי `Insert(1)` ו-`Insert(2)` נרשם $2$ עם העד $(1,1)$, אף שיש רק $1$ אחד. לכן הסדר כפוי."""},
     ],
     stepsSource="ai-draft")


exam = {
    "examCode": "24S-A",
    "examLabel": 'מבני נתונים, סמסטר קיץ תשפ"ד, מועד א (14.10.24)',
    "year": 2024,
    "examDate": "14.10.2024",
    "sourceFile": "ds-2024-summer-A-forms-and-key",
    "solutionFile": "ds-2024-summer-A-forms-and-key",
    "contexts": contexts,
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
