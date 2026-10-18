# -*- coding: utf-8 -*-
"""Generator for tools/raw/21B-A.json -- data-structures, spring semester 2021 (moed A, 10.6.21).
Source: the booklet with the official solution typed in red under each question (11 pages). The exam-only copies
carry the same questions. Cover: 4 questions, Q1 six parts x 8 points, Q2-Q4 25 points each, +1 bonus point, cap 116.
Caveats (official text kept as printed, not fixed):
- Q1e: the hash function is printed with an unbalanced bracket: H(x,i)= (x + (1+x)*i mod 4))mod 13.
- Q2: the loop bound printed in the min(n, d log n) solution is 2^(h-1) - 1 and the log^2 solution sets n=m=2^(h-1); kept as printed.
- Q2 (typo ruling, solved/official false): the O(log^2 n) solution's step 3 completeness test (two middle paths of the root
  both = h) returns 0 for incomplete trees (n=6, 12, 13, ...), and step 10 compares h1 with h0 after the decrement.
  Fixed to "rightmost path = h" and "h1 = h0+1"; 0 mismatches for n<400 (tools/verify/21B-A/steps_verify.py).
  Rubric: only the O(log^2 n) tier gets the full 25 (tier split estimated, the question prints none).
- Q3b (typo ruling, solved/official false): the prose "full up to level ceil(h/2)" is false for odd h; the proof is shipped
  with floor (matching the formal "0<=i<=h/2") plus the case h+1=1, with a visible note. Checked over all AVL shapes h<=9.
- Points: the cover says "up to 116" but the printed items sum to 48+75+1=124; item points kept (ASK_ADIR).
Run: PYTHONUTF8=1 py tools/gen/gen_21B-A.py"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "21B-A.json"


def Q(num, kind, topic, question, solution, **kw):
    q = {"num": num, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "official-pdf", "official": True, "confidence": "high"}
    q.update(kw)
    return q


contexts = {
    "c1": {"kind": "text", "title": "הוראות שאלה 1",
           "text": r"""ציין לכל אחת מהטענות הבאות נכון או לא נכון. נמק תשובתך."""},
    "c2": {"kind": "image", "title": "עץ הדוגמה (שאלה 2)", "image": "images/exams/21B-A-c2.png",
           "caption": "עץ בינארי כמעט שלם: האלגוריתם יחזיר $1$"},
    "c3": {"kind": "image", "title": "גלגולים בעצי AVL (שאלה 3)", "image": "images/exams/21B-A-c3.png",
           "caption": "גלגולים בעצי AVL - אפשרות 1 ואפשרות 2"},
}

questions = [
    # ---------------- Question 1 (six true/false parts x 8) ----------------
    Q(1, "truefalse", "trees_induction",
      r"""לכל $n$ קיים עץ עם $n$ קודקודים (בכל קדקוד ערך שונה) כך שסריקת `inorder` זהה לסריקת `postorder` של העץ.""",
      r"""נכון - כל עץ עם $n$ קודקודים מהצורה הבאה:

![שרשרת של קודקודים](images/exams/21B-A-Q1a-sol.png)""",
      part="א", points=8, verdict=True, contextId="c1"),
    Q(1, "truefalse", "sorting_selection",
      r"""לא קיים עץ החלטה כך שאורך המסלול הקצר ביותר מהשורש לעלה בו הוא $n-1$.""",
      r"""לא נכון - במיון הכנסה, המסלול המתאר את השאלות כאשר הקלט מערך ממוין.""",
      part="ב", points=8, verdict=False, contextId="c1"),
    Q(1, "truefalse", "avl",
      r"""נתון עץ $T$ מסוג AVL שאליו הוכנסו $5$ נתונים (עם פונקציית ההכנסה לעץ AVL) וכתוצאה מכך נוצר העץ $T'$ לעץ AVL. לכל הכנסה בסדר שונה של $5$ הנתונים לעץ $T$ המקורי, יתקבל עץ $T''$ השונה מ-$T'$.""",
      r"""לא נכון - לדוגמה, נתון עץ ריק. העץ המתקבל מסדרת ההכנסה (יש לקרוא משמאל לימין את סדרת ההכנסה) $4,2,5,1,3$ זהה לעץ המתקבל מהכנסה של הסדרה: $4,5,2,1,3$ לעץ הריק.""",
      part="ג", points=8, verdict=False, contextId="c1"),
    Q(1, "truefalse", "heaps",
      r"""להלן רעיון למבני נתונים ערימה התומך גם בפעולות של ערימת מקסימום אך בנוסף תומך גם בפעולה של החזרת ערך המינימום בזמן $O(\log n)$ (ללא הוצאת הערך מהמבנה). האם הרעיון נכון?

הרעיון: סידור ערמת מקסימום כך שבכל קדקוד ערך הבן השמאלי יהיה גדול מערך הבן הימני. הוצאת המינימום תתבצע על ידי החזרת הערך הנמצא בעלה בקצה המסלול הימני ביותר מהשורש.""",
      r"""לא נכון, לדוגמה העץ הבא היא ערימת מקסימום המקיימת את דרישות המבנה אך הערך המינימלי אינו העלה הנמצא בקצה המסלול הימני ביותר מהשורש.

![ערימת מקסימום כדוגמה נגדית](images/exams/21B-A-Q1d-sol.png)""",
      part="ד", points=8, verdict=False, contextId="c1"),
    Q(1, "truefalse", "hashing",
      r"""עבור גיבוב כפול עם פעולת מחיקה, הוצאת אלמנט והכנסתו מחדש מיד אחרי הוצאתו תמיד תביא את מבנה הנתונים בדיוק למצב שהיה בו לפני שתי פעולות אלה.""",
      r"""לא נכון, נניח נתון מערך בגודל $13$ עם פונקציית הגיבוב:

`H(x,i)= (x + (1+x)·i mod 4))mod 13`

להלן סדר הפעולות שהתבצעו על המערך הרייק:

- הכנסת המספר $1$
- הכנסת המספר $14$
- הוצאת המספר $1$
- הוצאת המספר $14$
- הכנסת המספר $14$

המבנה שיתקבל לאחר הפעולה השלישית שונה מהמבנה המתקבל לאחר הפעולה האחרונה.""",
      part="ה", points=8, verdict=False, contextId="c1"),
    Q(1, "truefalse", "complexity",
      r"""נתונות הפונקציות הבאות $f_1(n), f_2(n), g_1(n), g_2(n)$ המקיימות: $f_2(n)=o(g_2(n))$, $f_1(n)=O(g_1(n))$ אזי: $f_1(f_2(n))=o(g_1(g_2(n)))$.""",
      r"""לא נכון, דוגמא נגדית:

$f_1(n)=\log n$

$f_2(n)=n$

$g_1(n)=\log n$

$g_2(n)=n^2$""",
      part="ו", points=8, verdict=False, contextId="c1"),

    # ---------------- Question 2 (25) ----------------
    Q(2, "algorithm", "ds_design",
      r"""כתוב אלגוריתם המקבל כקלט מצביע לשורש עץ בינארי כמעט שלם $T$, ומחזיר כפלט את מספר הצמתים $d$ שיש להוסיף ברמה התחתונה של העץ $T$ על מנת שיהיה עץ שלם. שימו לב, אם עץ הקלט שלם יוחזר הערך $0$.

ניקוד מלא יינתן לאלגוריתם נכון שזמן הריצה שלו: $O(\log^2(n))$ כאשר $n$ את מספר הצמתים בעץ $T$.

ניקוד חלקי יינתן לאלגוריתם נכון שזמן ריצתו $O(\min(n, d\cdot\log(n)))$

ניקוד חלקי (מופחת מהקודמים) יינתן לאלגוריתם נכון שזמן הריצה שלו: $O(n)$

הנח שלכל צומת בעץ יש רק $3$ שדות מידע: מפתח (אין חשיבות למידע לפתרון הבעיה), מצביע לבן הימני ומצביע לבן השמאלי.

לדוגמה, עבור העץ הבא האלגוריתם יחזיר $1$.""",
      r"""**הפתרון הרשמי עם תיקון** בפתרון ב-$O(\log^2(n))$, בשני מקומות: בשלב $3$ בדיקת השלמות היא לפי אורך המסלול הימני ביותר מהשורש (במקום השוואת שני המסלולים האמצעיים של השורש), ובשלב $10$ ההשוואה היא $h_1=h_0+1$ (כלומר מול $h_0$ שלפני ההקטנה בשלב $9$). כפי שהודפס, שלב $3$ מחזיר $0$ גם לעצים שאינם שלמים, למשל לעץ הדוגמה ($n=6$, שבו שני המסלולים האמצעיים של השורש באורך $h=2$), ושלב $10$ מכוון לתת-העץ הלא נכון. עם שני התיקונים האלגוריתם נבדק מול התשובה הנכונה לכל עץ כמעט שלם עם $n<400$ צמתים.

**פתרון בזמן לינארי:**

1. חשב את גובה העץ (על ידי ריצה מהשורש לעלה השמאלי ביותר ומנה את כמות הקודקודים במהלך הריצה. החזר את ערך המונה פחות $1$). נסמן את גובה העץ ב-$h$.
2. בצע סריקת `inorder` על העץ, ומנה את כמות הקודקודים בעץ. נסמן, את כמות הקוד' ב-$n$.
3. החזר: $2^{h+1}-1-n$

**פתרון שזמן ריצתו $O(\min(n, d\cdot\log(n)))$:**

1. חשב את גובה העץ (על ידי ריצה מהשורש לעלה השמאלי ביותר ומנה את כמות הקודקודים במהלך הריצה. החזר את ערך המונה פחות $1$). נסמן את גובה העץ ב-$h$.
2. נגדיר לכל מספר טבעי $k$, מסלול מהשורש לקדקוד על פי הייצוג הבינארי שלו (עומק הקדקוד הוא אורך הייצוג של המספר $k$ פחות $1$):
   - a. יש לקרוא את הייצוג משמאל לימין
   - b. הביט אפס, רד ימינה במסלול. הביט אחד, רד שמאלה במסלול.
   - c. החזר מצביע לקדקוד אליו הגעת.
3. הגדר מונה $m=0$
4. הגדר דגל $F=0$
5. לכל מספר טבעי $i$ מ-$0$ עד $2^{h-1}-1$ וכאשר $F=0$ בצע:
   - a. רד במסלול מהשורש לקדקוד לפי הייצוג הבינארי של $i$, סמן קדקוד זה ב-$x$.
   - b. אם $x$ עלה אז $m=m+2$ אחרת ($F=1$ וגם אם ל-$x$ רק בן שמאלי אז $m=m+1$)
6. החזר $m$

**פתרון שזמן ריצתו $O(\log^2(n))$:**

1. הערה:
   - a. נגדיר "אורך מסלול אמצעי משמאל של קדקוד $x$" על ידי אורך המסלול המתקבל מהליכה על המסלול מהקדקוד $x$ לבנו השמאלי ומשם ירידה רק ימינה עד להגעה לעלה. אם $\text{left}(x)=\text{null}$ אורך המסלול מוגדר להיות $0$.
   - b. נגדיר "אורך מסלול אמצעי מימין של קדקוד $x$" על ידי אורך המסלול המתקבל מהליכה על המסלול מהקדקוד $x$ לבנו הימני ומשם ירידה רק שמאלה עד להגעה לעלה. אם $\text{right}(x)=\text{null}$ אורך המסלול מוגדר להיות $0$.
2. חשב את גובה העץ (על ידי ריצה מהשורש לעלה השמאלי ביותר ומנה את כמות הקודקודים במהלך הריצה. החזר את ערך המונה פחות $1$). נסמן את גובה העץ ב-$h$.
3. חשב את אורך המסלול הימני ביותר מהשורש (ירידה רק ימינה עד שאין בן ימני). אם אורכו שווה לגובה העץ $h$, החזר $0$ וסיים.
4. יהי $x$ שורש העץ, יהי $n=m=2^{h-1}$ ויהי $h_0=h$
5. חשב אורך מסלול אמצעי משמאל של קדקוד $x$, סמנו ב-$h_1$
6. חשב אורך מסלול אמצעי מימין של קדקוד $x$, סמנו ב-$h_2$
7. אם $h_1\neq h_2$ עבור ל-$12$
8. $m=\frac{1}{2}m$
9. $h_0=h_0-1$
10. אם $h_1=h_0+1$ אז
    - i. $n=n+m$
    - ii. $x=\text{right}(x)$

    אחרת
    - iii. $n=n-m$
    - iv. $x=\text{left}(x)$
11. חזור ל-$5$
12. החזר: $2^h-n$""",
      points=25, contextId="c2", solutionSource="solved", official=False),

    # ---------------- Question 3 (25, parts unrelated) ----------------
    Q(3, "computation", "avl",
      r"""פרט את כל שלבי הבניה של עץ AVL עבור הנתונים הבאים (יש לקרוא משמאל לימין):

$3,1,7,0,6,9,5,8,10,11$

הגלגולים בעצי AVL מופיעים בציור.""",
      r"""עד הכנסת הערך $11$ הגלגולים לא נדרשים והעץ נראה:

![העץ לפני הכנסת 11](images/exams/21B-A-Q3a-sol1.png)

אחרי הכנסת הערך $11$, העץ יראה:

![העץ אחרי הכנסת 11, לפני גלגול](images/exams/21B-A-Q3a-sol2.png)

בשלב הזה הופר האיזון בקודקוד שורש, מה שידרוש גלגול (אפשרות $1$). התוצאה:

![העץ אחרי הגלגול](images/exams/21B-A-Q3a-sol3.png)""",
      part="א", contextId="c3"),
    Q(3, "proof", "trees_induction",
      r"""הוכח באינדוקציה על מבנה העץ:

לכל מספר טבעי $h\ge 0$ מתקיים שעץ AVL בגובה $h$ כל הרמות מ-$0$ עד $\left\lceil\frac{h}{2}\right\rceil$ מלאות, ז"א, לכל $0\le i\le h/2$ מתקיים שברמה $i$ יש $2^i$ קודקודים.""",
      r"""**הפתרון הרשמי עם תיקון:** $\lceil\cdot\rceil$ הוחלף ב-$\lfloor\cdot\rfloor$ לאורך כל ההוכחה, ונוסף בצעד המקרה $h+1=1$.

**הערה:** בניסוח המילולי של השאלה כתוב 'מ-$0$ עד $\left\lceil\frac{h}{2}\right\rceil$', אבל טענה זו אינה נכונה לגובה אי-זוגי: עץ AVL בגובה $1$ יכול להיות שורש עם בן יחיד, ואז ברמה $1$ יש קודקוד אחד ולא $2$. הניסוח הפורמלי בשאלה, $0\le i\le h/2$, פירושו $i\le\left\lfloor\frac{h}{2}\right\rfloor$, וזו הטענה הנכונה: בבדיקה על כל צורות עצי AVL עד גובה $9$, הרמה המלאה העמוקה המובטחת היא בדיוק $\left\lfloor\frac{h}{2}\right\rfloor$. הפתרון הרשמי הוכיח את גרסת $\lceil\cdot\rceil$, והצעד שלו נשען על הנחת האינדוקציה גם לתת-עץ ריק כאשר $h+1=1$.

הוכחה באינדוקציה על מבנה העץ:

**בסיס האינדוקציה:** $h=0$, העץ הוא קודקוד השורש והעץ מלא עד רמה $\left\lfloor\frac{0}{2}\right\rfloor=0$.

**הנחת האינדוקציה:** נניח נכונות עד גובה $h$.

**צעד האינדוקציה:** נוכיח עבור $h+1$.

נתון עץ AVL בגובה $h+1$.

![עץ AVL בגובה h+1 ושני תתי העצים שלו](images/exams/21B-A-Q3b-sol.png)

אם $h+1=1$: רמה $0$ (השורש) מלאה ו-$\left\lfloor\frac{1}{2}\right\rfloor=0$, כנדרש. אחרת $h\ge 1$, ולפי הגדרת עץ AVL, או ששני תתי העצים שלו בגובה $h$, או שאחד מהם בגובה $h$ והשני $h-1\ge 0$ (בפרט אף אחד מהם אינו ריק).

בשני המקרים, לפי הנחת האינדוקציה, כל אחד מתתי העצים מלא לפחות עד רמה $\left\lfloor\frac{h-1}{2}\right\rfloor$. לכן, העץ הגדול מלא עד רמה: $1+\left\lfloor\frac{h-1}{2}\right\rfloor=\left\lfloor\frac{h+1}{2}\right\rfloor$ (כי יש לו רמה מלאה מעל שהיא רמת השורש). מ.ש.ל.

הערה: ללא השימוש בשוויון האחרון, ניתן היה להיעזר בבדיקת אפשרויות הזוגיות של $h$.""",
      part="ב", solutionSource="solved", official=False),

    # ---------------- Question 4 (25, parts unrelated) ----------------
    Q(4, "computation", "sorting_selection",
      r"""תאר את עץ ההחלטה עבור מיון ערימה ל-$3$ איברים.""",
      r"""![עץ ההחלטה למיון ערימה של שלושה איברים](images/exams/21B-A-Q4a-sol.png)""",
      part="א"),
    Q(4, "algorithm", "linear_ds",
      r"""נתונה הבעיה הבאה:

קלט: רשימה מקושרת דו כיוונית של מספרים טבעיים ומספר טבעי $k$.

פלט: אמת, אם קיימים שני מספרים ברשימה שסכומם $k$ אחרת תחזיר שקר.

כתוב אלגוריתם לפתרון הבעיה.

ניקוד מלא יינתן לאלגוריתם נכון שזמן הריצה שלו: $O(n\cdot\log(n))$ כאשר $n$ כמות המספרים ברשימה הנתונה.

ניקוד חלקי יינתן לאלגוריתם נכון שזמן ריצתו $O(n^2)$""",
      r"""על מנת להגיע לסיבוכיות של $O(n\log n)$ נצטרך דבר ראשון למיין את הרשימה.

```
pairSum(head, k):
    mergesort(head)

    first = head
    second = head

    while (second.next != None)
        second = second.next
```

בשלב הזה `first` מצביע לראש הרשימה ו-`second` מצביע לסוף הרשימה.

```
    while (first != second)
        if ((first.data + second.data) == k)
            return true
        else if ((first.data + second.data) < k)
            first = first.next
        else:
            second = second.prev

    return false
```

הלולאות רצות בסיבוכיות לינארית והמיון רץ בסיבוכיות של $O(n\log n)$ ולכן הסיבוכיות של האלגוריתם תהיה $O(n\log n)$""",
      part="ב"),
]

# ---- rubric / pitfalls / steps (ai-draft). Every expected value is asserted in tools/verify/21B-A/steps_verify.py ----
# Q1 (true/false) gets no steps. Q3 and Q4 print no per-part points (25 each): the 10/15 splits are the step-author's estimate.
IDS = "abcdefgh"


def opts(*vals):
    return [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(vals)]


def rub(*items):
    return [{"text": t, "points": p} for t, p in items]


def add(num, part, **kw):
    for q in questions:
        if q["num"] == num and q.get("part") == part:
            q.update(kw)
            return
    raise KeyError((num, part))


# Q2: nodes to add to an almost complete tree (steps follow the linear solution)
add(2, None,
    rubric=rub((r"""חישוב גובה העץ $h$ בירידה לאורך המסלול השמאלי ביותר""", 4),
               (r"""אלגוריתם נכון שמחזיר את $d$, כולל $0$ לעץ שלם (למשל בפתרון הלינארי: ספירת $n$ והחזרת $2^{h+1}-1-n$)""", 8),
               (r"""ניתוח זמן ריצה נכון של האלגוריתם שהוצע""", 3),
               (r"""יעילות לפי מדרגות השאלה: $O(\log^2 n)$ (חיפוש בינארי על הרמה התחתונה בעזרת המסלולים האמצעיים) - $10$; $O(\min(n,d\log n))$ - עד $6$; $O(n)$ - עד $3$. רק פתרון ב-$O(\log^2 n)$ מקבל את כל $25$ הנקודות (החלוקה בין המדרגות משוערת, השאלה אינה מציינת מספרים)""", 10)),
    rubricSource="ai-verified",
    pitfalls=[r"""לחשב את הגובה לפי המסלול הימני: בעץ כמעט שלם הרמה התחתונה מתמלאת משמאל, והמסלול הימני עשוי להיות קצר יותר.""",
              r"""למנות צמתים במסלול ולא קשתות, ולקבל גובה גדול ב-$1$.""",
              r"""לבדוק שלמות לפי שני המסלולים האמצעיים של השורש: בעץ הדוגמה ($n=6$) שניהם באורך $h=2$ אף שהעץ אינו שלם. העץ שלם בדיוק כשהמסלול הימני ביותר באורך $h$."""],
    steps=[
        {"type": "choice", "prompt": r"""כיצד הפתרון מחשב את גובה העץ $h$?""",
         "options": opts(r"""בירידה מהשורש לאורך המסלול השמאלי ביותר עד העלה""", r"""בירידה מהשורש לאורך המסלול הימני ביותר""",
                         r"""בירידה לאורך מסלול שנבחר באקראי""", r"""בספירת הקודקודים בסריקת `inorder`"""),
         "correctId": "a",
         "explain": r"""'ריצה מהשורש לעלה השמאלי ביותר'. בעץ כמעט שלם הרמה התחתונה מתמלאת משמאל, ולכן זהו המסלול הארוך ביותר: בעץ עם $8$ צמתים המסלול השמאלי באורך $3$ והימני באורך $2$ (נבדק לכל $n<200$)."""},
        {"type": "numeric", "prompt": r"""בעץ כמעט שלם עם $n=10$ צמתים הגובה הוא $h=3$. כמה צמתים יש להוסיף ברמה התחתונה כדי שהעץ יהיה שלם?""", "answer": 5, "tol": 0,
         "explain": r"""$2^{4}-1-10=5$ (נבדק מול השלמה בפועל לכל $n<200$)."""},
        {"type": "numeric", "prompt": r"""כמה צמתים יש להוסיף לעץ כמעט שלם עם $n=8$ צמתים?""", "answer": 7, "tol": 0,
         "explain": r"""$h=3$ ולכן $2^4-1-8=7$: ברמה התחתונה יש צומת אחד בלבד."""},
        {"type": "choice", "prompt": r"""מהי הסיבוכיות ההדוקה של הפתרון הלינארי (גובה במסלול שמאלי, ספירת צמתים בסריקה והחזרת הנוסחה)?""",
         "options": opts(r"""$\Theta(n)$""", r"""$\Theta(\log n)$""", r"""$\Theta(n\log n)$""", r"""$\Theta(\log^2 n)$"""),
         "correctId": "a",
         "explain": r"""סריקת `inorder` מבקרת בכל הצמתים ולכן $\Theta(n)$. חישוב הגובה לוקח רק $O(\log n)$. הפתרון ב-$O(\log^2 n)$ הוא פתרון אחר ויעיל יותר."""},
    ],
    stepsSource="ai-verified")

# Q3a: AVL insertion trace
add(3, "א",
    rubric=rub((r"""הכנסת $3,1,7,0,6,9,5,8,10$ בלי גלגולים והצגת העץ""", 4),
               (r"""הכנסת $11$ וזיהוי חוסר איזון בשורש""", 3),
               (r"""ביצוע גלגול (אפשרות $1$) והצגת העץ הסופי""", 3)),
    rubricSource="ai-verified",
    pitfalls=[r"""לקרוא את סדרת ההכנסה בסדר הפוך.""",
              r"""לבצע גלגול כפול (אפשרות $2$) במקום גלגול יחיד, או לגלגל כבר באחת ההכנסות הקודמות."""],
    steps=[
        {"type": "numeric", "prompt": r"""כמה גלגולים מתבצעים בהכנסת $3,1,7,0,6,9,5,8,10$ (תשעת הערכים הראשונים) לעץ AVL ריק?""", "answer": 0, "tol": 0,
         "explain": r"""הפתרון: 'עד הכנסת הערך $11$ הגלגולים לא נדרשים'. נבדק בסימולציה, והעץ בגובה $3$."""},
        {"type": "numeric", "prompt": r"""מכניסים את $11$. מהו גורם האיזון (גובה שמאלי פחות גובה ימני) של השורש $3$ לפני הגלגול?""", "answer": -2, "tol": 0,
         "explain": r"""הגובה השמאלי $1$ והימני $3$, ולכן $1-3=-2$."""},
        {"type": "choice", "prompt": r"""איזה תיקון נדרש בשורש? (הבן הימני $7$ נוטה ימינה: גורם האיזון שלו $-1$)""",
         "options": opts(r"""גלגול יחיד שמאלה (אפשרות $1$)""", r"""גלגול כפול (אפשרות $2$)""", r"""אין צורך בגלגול""", r"""גלגול יחיד ימינה"""),
         "correctId": "a",
         "explain": r"""הפתרון מציין 'גלגול (אפשרות $1$)'. הסימולציה נותנת גלגול יחיד אחד והשורש החדש הוא $7$; ללא גלגול העץ אינו מאוזן, וגלגול ימינה מחמיר את החוסר איזון."""},
        {"type": "numeric", "prompt": r"""מהו המפתח בשורש העץ אחרי הגלגול?""", "answer": 7, "tol": 0,
         "explain": r"""$7$ עולה לשורש, ו-$3$ הופך לבן שלו משמאל (נבדק בסימולציה)."""},
    ],
    stepsSource="ai-verified")

# Q3b: AVL tree is full up to level floor(h/2) (the printed prose says ceil, false for odd h; typo ruling)
AI_ORDER = [r"""לפי הגדרת AVL, שני תתי-העצים של עץ בגובה $h+1$ הם בגובה $h$ שניהם, או בגובה $h$ ו-$h-1\ge 0$.""",
            r"""בשני המקרים כל תת-עץ מלא לפחות עד רמה $\left\lfloor\frac{h-1}{2}\right\rfloor$, לפי הנחת האינדוקציה.""",
            r"""מעל שני תתי-העצים יש רמת שורש אחת, ולכן העץ כולו מלא לפחות עד רמה $1+\left\lfloor\frac{h-1}{2}\right\rfloor$.""",
            r"""ומתקיים $1+\left\lfloor\frac{h-1}{2}\right\rfloor=\left\lfloor\frac{h+1}{2}\right\rfloor$, כנדרש."""]
AI_BUG = list(AI_ORDER)
AI_BUG[3] = r"""ומתקיים $1+\left\lfloor\frac{h-1}{2}\right\rfloor=\left\lfloor\frac{h}{2}\right\rfloor$, כנדרש."""
add(3, "ב",
    rubric=rub((r"""בסיס: $h=0$, העץ הוא שורש בלבד""", 2),
               (r"""הנחת האינדוקציה עד גובה $h$""", 2),
               (r"""המקרה $h+1=1$, ופירוק לשני תתי-עצים לא ריקים לפי הגדרת AVL: בגובה $h$ ו-$h$, או $h$ ו-$h-1$""", 4),
               (r"""כל תת-עץ מלא עד $\left\lfloor\frac{h-1}{2}\right\rfloor$ ותוספת רמת השורש""", 3),
               (r"""השוויון $1+\left\lfloor\frac{h-1}{2}\right\rfloor=\left\lfloor\frac{h+1}{2}\right\rfloor$""", 4)),
    rubricSource="ai-verified",
    pitfalls=[r"""לשכוח את רמת השורש שמוסיפה $1$ לעומק המלא.""",
              r"""להניח ששני תתי-העצים באותו גובה, בעוד ב-AVL אחד מהם עשוי להיות נמוך ב-$1$.""",
              r"""להוכיח את הגרסה עם $\left\lceil\frac{h}{2}\right\rceil$: היא נכשלת לכל גובה אי-זוגי (בגובה $1$, שורש עם בן יחיד). המקרה $h+1=1$, שבו תת-העץ הנמוך ריק, הוא בדיוק המקום שבו ההוכחה של גרסה זו נשברת."""],
    steps=[
        {"type": "numeric", "prompt": r"""לכל עץ AVL בגובה $5$: מהי הרמה העמוקה ביותר שמובטח שכל הרמות עד אליה (כולל) מלאות?""", "answer": 2, "tol": 0,
         "explain": r"""$\left\lfloor\frac{5}{2}\right\rfloor=2$. בבדיקה על כל צורות עצי AVL בגובה $5$ יש עץ שרמה $3$ בו אינה מלאה, ולכן $\left\lceil\frac{5}{2}\right\rceil=3$ אינו מובטח."""},
        {"type": "order", "prompt": r"""המקרה $h+1=1$ מיידי (השורש לבדו מלא). סדרו את צעד האינדוקציה עבור $h\ge 1$.""", "lines": AI_ORDER,
         "explain": r"""מפרקים לתתי-עצים, מפעילים את ההנחה עליהם, מוסיפים את רמת השורש ובסוף מפשטים את הביטוי."""},
        {"type": "findbug", "prompt": r"""בגרסה הבאה של הצעד (עבור $h\ge 1$) שורה אחת שונתה והיא שגויה. מצאו אותה.""", "lines": AI_BUG, "bugIndex": 3,
         "explain": r"""התוצאה הנדרשת עבור גובה $h+1$ היא $\left\lfloor\frac{h+1}{2}\right\rfloor$. השוויון עם $\left\lfloor\frac{h}{2}\right\rfloor$ שגוי לכל $h$ אי-זוגי, למשל $h=1$: $1+0=1$ אבל $\left\lfloor\frac{1}{2}\right\rfloor=0$ (נבדק לכל $h<500$)."""},
        {"type": "numeric", "prompt": r"""חשבו את $1+\left\lfloor\frac{h-1}{2}\right\rfloor$ עבור $h=6$.""", "answer": 3, "tol": 0,
         "explain": r"""$\left\lfloor\frac{5}{2}\right\rfloor=2$, ולכן $3$, וזה אכן $\left\lfloor\frac{7}{2}\right\rfloor=3$."""},
    ],
    stepsSource="ai-verified")

# Q4a: decision tree of heapsort on 3 elements
add(4, "א",
    rubric=rub((r"""עץ החלטה שצמתיו השוואות בין שני איברים ועליו סדרים ממוינים""", 3),
               (r"""כל $3!=6$ הסדרים האפשריים מופיעים כעלים""", 4),
               (r"""המסלולים תואמים את פעולת מיון הערימה על שלושה איברים""", 3)),
    rubricSource="ai-verified",
    pitfalls=[r"""להשמיט עלה לאחד הסדרים: צריך $6$ עלים לשלושה איברים שונים.""",
              r"""לצייר את עץ ההחלטה של מיון אחר (הכנסה או בועות) במקום של מיון ערימה."""],
    steps=[
        {"type": "numeric", "prompt": r"""כמה עלים יש בעץ ההחלטה של מיון $3$ איברים שונים? (עלה לכל סדר אפשרי)""", "answer": 6, "tol": 0,
         "explain": r"""$3!=6$. העץ שבפתרון הרשמי הורץ על כל $6$ התמורות ומיין נכון כל אחת, עם $6$ עלים שונים."""},
        {"type": "numeric", "prompt": r"""מהו מספר ההשוואות המרבי במסלול בעץ בפתרון הרשמי (מהשורש לעלה)?""", "answer": 3, "tol": 0,
         "explain": r"""בהרצה על כל התמורות המסלול הארוך ביותר הוא $3$ השוואות."""},
        {"type": "numeric", "prompt": r"""מהו המספר המינימלי האפשרי של השוואות במקרה הגרוע עבור עץ בינארי עם $6$ עלים, כלומר $\lceil\log_2 6\rceil$?""", "answer": 3, "tol": 0,
         "explain": r"""$\lceil\log_2 6\rceil=3$, ולכן העץ הנתון בגובה אופטימלי."""},
    ],
    stepsSource="ai-verified")

# Q4b: pairSum
PS = ["pairSum(head, k):",
      "    mergesort(head)",
      "    first = head; second = last node of the list",
      "    while first != second",
      "        if first.data + second.data == k: return true",
      "        else if first.data + second.data ___ k: first = first.next",
      "        else: second = second.prev",
      "    return false"]
add(4, "ב",
    rubric=rub((r"""מיון הרשימה (מיון מיזוג) ב-$O(n\log n)$""", 4),
               (r"""שני מצביעים: `first` בראש הרשימה ו-`second` בסופה""", 3),
               (r"""הלולאה: סכום שווה $k$ מחזיר אמת, סכום קטן מקדם את `first`, סכום גדול מזיז את `second` אחורה""", 5),
               (r"""סיבוכיות זמן $O(n\log n)$""", 3)),
    rubricSource="ai-verified",
    pitfalls=[r"""לבדוק את כל הזוגות בשתי לולאות מקוננות: $O(n^2)$ מזכה בניקוד חלקי בלבד.""",
              r"""להזיז את המצביע הלא נכון: כשהסכום קטן מ-$k$ צריך להגדיל אותו, ולכן מקדמים את `first`."""],
    steps=[
        {"type": "choice", "prompt": r"""באיזו טכניקה הפתרון הרשמי מגיע ל-$O(n\log n)$?""",
         "options": opts(r"""מיון הרשימה ואז שני מצביעים, אחד מכל קצה""", r"""שתי לולאות מקוננות על כל הזוגות""",
                         r"""חיפוש בינארי ברשימה מקושרת לכל איבר""", r"""בניית עץ AVL"""),
         "correctId": "a",
         "explain": r"""הפתרון: 'נצטרך דבר ראשון למיין את הרשימה' ואז סריקה משני הקצוות. שתי לולאות מקוננות הן הפתרון בניקוד החלקי ($O(n^2)$)."""},
        {"type": "numeric", "prompt": r"""הרשימה $[8,3,5,1,9,2]$ ו-$k=13$. אחרי המיון $[1,2,3,5,8,9]$. כמה בדיקות סכום מתבצעות בלולאה עד שמוחזר אמת?""", "answer": 5, "tol": 0,
         "explain": r"""הסכומים: $1+9=10$, $2+9=11$, $3+9=12$, $5+9=14$, $5+8=13$. חמש בדיקות (נבדק בסימולציה)."""},
        {"type": "fillblank", "code": True, "prompt": r"""השלימו את תנאי קידום המצביע `first`.""", "lines": PS, "blankIndex": 5,
         "options": opts("<", ">", "!=", "=="), "correctId": "a",
         "explain": r"""כשהסכום קטן מ-$k$ מקדמים את `first` כדי להגדיל אותו. בהרצה על רשימות אקראיות כל אחת מהחלופות מחזירה תשובה שגויה על חלק מהקלטים."""},
        {"type": "text", "prompt": r"""מהי סיבוכיות הזמן של האלגוריתם? כתבו בצורה `O(...)`.""", "accept": ["O(n log n)"], "normalize": "complexity",
         "explain": r"""המיון $O(n\log n)$ והסריקה בשני מצביעים לינארית."""},
    ],
    stepsSource="ai-verified")


exam = {
    "examCode": "21B-A",
    "examLabel": 'מבני נתונים, סמסטר ב תשפ"א, מועד א (10.6.21)',
    "year": 2021,
    "examDate": "10.6.2021",
    "sourceFile": "ds-2021-spring-A-exam",
    "solutionFile": "ds-2021-spring-A-solution",
    "contexts": contexts,
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
