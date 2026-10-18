# -*- coding: utf-8 -*-
"""Generator for tools/raw/SAMP-1.json -- data-structures, 2021 sample exam with the lecturer solution.
The official solution is typed in red inside the exam text. Rubric and steps are left to the step-author phase.
Checked by tools/verify/SAMP-1/verify.py: Q1b counterexample, Q1e BST shape, Q1f exponent counterexample, Q2a indexes,
Q2b/Q2c probe sequences (Q2c: the official verdict is contradicted by the script, so Q2c is held).
Q3b has only a video pointer as its official solution, so it is held (no-key).
Run: PYTHONUTF8=1 py tools/gen/gen_SAMP-1.py"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "SAMP-1.json"


def Q(num, kind, topic, question, solution, **kw):
    q = {"num": num, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "official-pdf", "official": True, "confidence": "high"}
    q.update(kw)
    return q


contexts = {
    "c1": {"kind": "text", "title": "הוראות שאלה 1",
           "text": r"""ציינו לכל אחת מהטענות הבאות נכון או לא נכון. נמקו תשובתכם."""},
    "c2": {"kind": "text", "title": "טבלאות הגיבוב (שאלה 2)",
           "text": r"""נתונות שתי טבלאות גיבוב בגודל $m=13$, המסומנות על ידי $T_1, T_2$. נשתמש בשתי שיטות גיבוב: הגיבוב הלינארי ($h_1$) והגיבוב הריבועי ($h_2$). להלן פונקציות הגיבוב:

$$h_1(k,i) = (\text{hash}(k)+i) \bmod 13$$

$$h_2(k,i) = (\text{hash}(k)+i^2+5\cdot i) \bmod 13$$

כאשר $\text{hash}(k)$ היא פונקציית גיבוב כלשהי. לטבלה $T_1$ נגבב בעזרת הפונקציה $h_1$ ולטבלה $T_2$ נגבב בעזרת הפונקציה $h_2$."""},
    "c3": {"kind": "text", "title": "חברת מצליח (שאלה 4)",
           "text": r"""חברת "מצליח" הקימה חנות אינטרנטית עם $n$ מוצרים. לכל מוצר ברקוד שהינו מספר טבעי. החברה רוצה מבנה נתונים שיתמוך בפעולות הבאות:

`Initialization()`: אתחול מבנה הנתונים (עלות הפעולה $O(1)$).

`Find(k)`: מקבלת ברקוד $k$ ומחזירה האם המוצר קיים במלאי ובאיזו כמות. (עלות הפעולה $O(\log n)$)

`Purchase(k,i)`: מקבלת ברקוד $k$ ורמת קדימות $1$ או $2$ (כאשר רמת קדימות $1$ היא הגבוהה ביותר). שולחת בקשה לרכישת $50$ פריטים של המוצר $k$ עם עדיפות $i$. (עלות הפעולה $O(1)$).

`Buy(k)`: מקבלת ברקוד $k$. אם המוצר אינו במלאי, מוציאה הודעה ללקוח, "המוצר אינו במלאי", אחרת, מבצעת:

- הפחתת $1$ בכמות המוצר
- אם כמות המוצר $=3$ שליחת בקשה לרכישת עוד $50$ יחידות מהמוצר עם מקדם עדיפות לרכישה. מקדם העדיפות לרכישה נקבע לפי הכלל הבא: אם מתחילת החודש נמכרו לפחות $50$ מוצרים רמת קדימות $1$, אחרת רמת קדימות $2$. (עלות הפעולה $O(\log n)$).

`Supply()`: מבצעת רכישת אספקה של $50$ יחידות ממוצר על ידי המחסן. הרכישה תתבצע מרשימת המוצרים הנדרשים לאספקה לפי הכלל הבא: לפי סדר קדימות (ככל שמקדם העדיפות נמוך יותר עדיפות גבוהה יותר), ומוצרים בעלי אותו סדר קדימות לפי סדר בקשת האספקה. מעדכנת במלאי שנוספו $50$ יחידות למוצר. (עלות הפעולה $O(\log n)$)."""},
}

questions = [
    # ---------------- Question 1 (six claims, no points printed) ----------------
    Q(1, "truefalse", "heaps",
      r"""נתון מערך ממוין מהקטן לגדול עם $n$ איברים שונים. כמות ההשוואות להפיכת המערך לערימת מינימום היא $n-1$.""",
      r"""לא נכון. הטענה נכונה רק כאשר $n$ מספר אי זוגי.

לפי האלגוריתם לכל קדקוד פנימי מתבצעות $2$ השוואות ולכן, עבור $n$ זוגי כמות הקודקודים הפנימיים היא $n/2$ ולכן מספר ההשוואות הוא $n$. בעוד שכאשר $n$ אי זוגי מספר הקודקודים הפנימיים הוא $(n-1)/2$ ולכן מספר ההשוואות הוא $n-1$.""",
      part="א", verdict=False, contextId="c1", confidence="med"),
    Q(1, "truefalse", "avl",
      r"""יהי $T$ עץ AVL המכיל שני מפתחות לפחות. בוצעו שתי פעולות ברצף, הכנסת מפתח $x$ והוצאת המפתח $x$. אם המפתח $x$ הוא מפתח שקטן מכל המפתחות בעץ הנתון $T$ אז אחרי הוצאת המפתח $x$ העץ שיתקבל הוא העץ $T$.""",
      r"""לא נכון.

דוגמה נגדית: העץ $T$ שבו השורש $10$, בנו השמאלי $8$, בנו הימני $11$, ולצומת $8$ בן שמאלי $7$.

ונבחר $x=6$.""",
      part="ב", verdict=False, contextId="c1"),
    Q(1, "truefalse", "hashing",
      r"""לטבלת גיבוב בגודל $2n$ הוכנסו $n$ מפתחות. פונקציית הגיבוב מיפתה את כל המפתחות ל-$3$ תאים שונים בטבלה. במצב זה שיטת גיבוב שהכי כדאי להשתמש בטיפול בהתנגשות היא גיבוב סגור בעזרת רשימה מקושרת.""",
      r"""לא נכון, נקבל $3$ רשימות מקושרות באורך $n/3$ ולכן בחיפוש למשל העלות יכולה להיות לינארית בגודל המודל בעוד שגיבוב כפול יכול לתת פיזור טוב יותר.""",
      part="ג", verdict=False, contextId="c1"),
    Q(1, "truefalse", "avl",
      r"""נתונים שני עצי AVL בגודל $n$. הנח ש-$n$ מספר זוגי. סיבוכיות זמן הריצה של האלגוריתם הטוב ביותר שמחליף את $n/2$ המפתחות הקטנים של עץ אחד עם $n/2$ המפתחות הקטנים של העץ השני היא לינארית.""",
      r"""נכון.

מצד אחד ניתן לפתור לינארית על ידי סריקת `inorder` של שני העצים. לקיחת $n/2$ המפתחות הגדולים בעץ האחד ומיזוג עם $n/2$ המפתחות הקטנים מהעץ השני ואז בניית העץ ממערך ממוין (איבר אמצעי שורש ומשם ברקורסיה על תת עץ ימני ושמאלי בהתאמה).

מצד שני הורדת $n/2$ בוודאי לוקחת זמן לינארי.""",
      part="ד", verdict=True, contextId="c1"),
    Q(1, "truefalse", "bst",
      r"""יהי עץ חיפוש בינארי $T$ שהוכנסו אליו המפתחות הבאים (יש לקרוא משמאל לימין):

$50, 4, 48, 6, 87, 29, 81, 56, 11$

הבן הימני של הצומת בעל המפתח $29$ הוא $48$.""",
      r"""לא נכון, $29$ מוכנס לעץ אחרי $48$ ולכן $48$ לא יכול להיות בן שלו.""",
      part="ה", verdict=False, contextId="c1"),
    Q(1, "truefalse", "complexity",
      r"""נתונות הפונקציות הבאות $f_1(n), f_2(n), g_1(n), g_2(n)$ המקיימות: $f_1(n)=O(g_1(n))$, $f_2(n)=O(g_2(n))$ אזי: $f_1(n)^{f_2(n)}=O\left(g_1(n)^{g_2(n)}\right)$.""",
      r"""לא נכון. נבחר $f_1(n)=2,\ g_1(n)=2,\ f_2(n)=2n,\ g_2(n)=n$.""",
      part="ו", verdict=False, contextId="c1"),

    # ---------------- Question 2 (three prove-or-disprove parts) ----------------
    Q(2, "proof", "hashing",
      r"""הוכח או הפרך: קיימת פונקציית גיבוב $\text{hash}(k)$ כך שבהכנסת $5$ מפתחות **באותו סדר** לשתי הטבלאות יתכן וקיים מפתח $k$ שיגובב בטבלה $T_1$ ובטבלה $T_2$ **באינדקסים שונים**.""",
      r"""נכון.

נבחר $\text{hash}(k)=k \bmod 13$ ונבחר את המספרים: $13, 26, 39, 52, 65$.

המספר $26$ יגובב לתא $1$ בטבלה $T_1$ בעוד שבטבלה $T_2$ יגובב לתא $6$ (בתשובת המבחן יש לפרט את החישובים).""",
      part="א", contextId="c2"),
    Q(2, "proof", "hashing",
      r"""הוכח או הפרך: לכל פונקציית גיבוב $\text{hash}(k)$ כאשר בטבלה $T_1$ יש בדיוק $6$ מפתחות אז קיימת אפשרות להכנסת מפתח חדש לטבלה $T_1$ תוך $7$ ניסיונות לכל היותר.""",
      r"""נכון.

מדובר בהכנסה לינארית וכיוון שבטבלה יש $6$ מפתחות, הרצף הגדול ביותר שיתכן בטבלה הוא $6$ (למשל, כאשר כל המפתחות גובבו בפעם הראשונה, ז"א $i=0$, לאותו תא במערך), מה שיגרום לכך שב-$7$ ניסיונות הכנסה, למפתח השביעי אם יגובב לאותו תא.""",
      part="ב", contextId="c2"),
    {"num": 2, "part": "ג", "kind": "proof", "topic": "hashing", "contextId": "c2",
     "question": r"""הוכח או הפרך: לכל פונקציית גיבוב $\text{hash}(k)$ כאשר בטבלה $T_2$ יש בדיוק $6$ מפתחות אזי קיימת אפשרות להכנסת מפתח חדש לטבלה $T_2$ תוך $7$ ניסיונות לכל היותר.""",
     "hold": "official key contradicted by script: the 7 quadratic probes i=0..6 cover only 5 distinct cells (offsets 0,6,1,11,10,11,1), so 6 keys can block them; official says true"},

    # ---------------- Question 3 ----------------
    Q(3, "algorithm", "ds_design",
      r"""נתונים שני מערכים: מערך $A$ בגודל $n$ ומערך $B$ בגודל $n+1$. נתון כי המערך $A$ מכיל את כל האיברים שהמערך $B$ מכיל, פרט לאחד (ז"א, במערך $B$ קיים איבר שאינו במערך $A$). כמו כן, נתון כי המערכים ממוינים וכל המספרים במערך $A$ שונים.

כתוב פונקציה המוצאת את האיבר החסר ב-$A$ בסיבוכיות זמן של $\Theta(\log(n))$ וסיבוכיות מקום של $O(1)$.""",
      r"""שימו לב, פתרון זה מתבסס על חיפוש בינארי.

```
find_miss(A,i,j,B,k,l)
If A[0]<>B[0] return B[0]
If i>j return B[n+1]
Middle = (i+j)/2
If (A[middle]<> B[middle] and A[middle-1]== B[middle-1]) return B[middle]
If (A[middle]== B[middle]) find_miss(A[middle+1..j],B[middle+1..l])
Else find_miss(A,i,middle-1,B,k,middle-1)
```""",
      part="א", confidence="med"),
    {"num": 3, "part": "ב", "kind": "computation", "topic": "sorting_selection",
     "question": r"""צייר את עץ ההחלטה של מיון ערימה עבור שלושה איברים.""",
     "hold": "no-key: the official solution is only a pointer to a video (sorting video, solution shortly after minute 6), no drawn tree"},
    Q(3, "proof", "sorting_selection",
      r"""זרובבל טוען שכיוון שקיים אלגוריתם לינארי היכול להפוך מערך לערימה, בעץ ההחלטה של מיון ערימה ל-$n$ מפתחות נקבל שגובה העץ הוא $O(n)$.

האם טענת זרובבל נכונה? הוכח תשובתך.""",
      r"""לא נכונה.

בעץ ההחלטה יש $n!$ עלים ולכן גובהו לפחות בסדר גודל של $\log(n!)\sim n\log(n)$.

שימו לב, בניית הערימה בפני עצמה לא נותנת מערך ממוין. ההוצאות הן אלה שגורמות לזמן ריצה בסדר גודל של $n\cdot\log n$.""",
      part="ג"),

    # ---------------- Question 4 ----------------
    Q(4, "algorithm", "ds_design",
      r"""הצע מבנה נתונים שיתמוך בתכונות ובחמש הפעולות הדרושות. יש לציין בכל מבנה שבחרת מהו המידע המוחזק בכל יחידת מידע שלו (מהם השדות ב-`struct`). ניתן להסתמך על פונקציות של מבנים שלמדנו ורק לציין מהם השינויים הדרושים בהם. אין צורך לפרט מעבר לכך.""",
      r"""מבנה הנתונים: עץ AVL ושני תורים.

איתחול עץ AVL ושני תורים (ראו פרוט שדות במבנים בהמשך).

`Find(k)`: חיפוש בעץ AVL בדומה לנלמד בהרצאה והחזרת שדה `amount`.

`Purchase(k,i)`: הכנסת הערך $k$ לתור $i$.

`Buy(k)`: מבצעת `find(k)`. אם הפונקציה החזירה $0$ מוציאה נודעה ללקוח "המוצר אינו במלאי". אחרת בודקת אם החודש הנוכחי תואם את החודש הנמצא `last_month_buy`: אם כן מגדילה ב-$1$ את המשתנה `amount_month_buy`, אחרת מציבה בו $0$ ומעדכנת את `last_month_buy` לשם החודש הנוכחי. מקטינה ב-$1$ את המשתנה `amount`. אם `amount`$=3$ וגם `amount_month_buy`$>49$ אז `Purchase(k,1)` אחרת `Purchase(k,2)`.

`Supply()`: אם תור $1$ לא ריק הוצא מהתור ובצע חיפוש הברקוד בעץ, הגדל את המשתנה `amount` ב-$50$. אחרת אם תור $2$ לא ריק הוצא מהתור ובצע חיפוש הברקוד בעץ, הגדל את המשתנה `amount` ב-$50$.

מבנה הנתונים: עץ AVL ושני תורים של מספר שלם (מייצג את קוד המוצר), כאשר שדות ה-`struct` בעץ הם:

```c
typedef struct tree_Node
{
    int code;
    int amount;
    int last_month_buy;
    int amount_month_buy;
    struct tree_Node* parent;
    struct tree_Node* left;
    struct tree_Node* right;
}List_Node;
```

והשדה לפיו מתבצע החיפוש הוא `code` המאחסן את ברקוד המוצר.""",
      part="א", points=13, contextId="c3", confidence="med"),
    Q(4, "algorithm", "ds_design",
      r"""כתוב אלגוריתם למימוש `Supply()`. ניתן להשתמש בפונקציות שנלמדו בהרצאות מבלי לממש אותן.""",
      r"""```
Supply()
If not(is-empty(Q1)) then
    k=dequeue(Q1)
    x=find(k,T)
    amount(x)=amount(x)+50
else if not(is-empty(Q2)) then
    k=dequeue(Q2)
    x=find(k,T)
    amount(x)=amount(x)+50
```""",
      part="ב", points=10, contextId="c3"),
]

exam = {
    "examCode": "SAMP-1",
    "examLabel": "מבני נתונים, מבחן לדוגמא (2021)",
    "year": 2021,
    "examDate": "2021",
    "sourceFile": "ds-2021-sample-exam",
    "solutionFile": "ds-2021-sample-exam-solution",
    "contexts": contexts,
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
