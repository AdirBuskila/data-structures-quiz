# -*- coding: utf-8 -*-
"""Generator for tools/raw/21B-B.json -- data-structures, spring semester 2021 (moed B).
Source: a 4-page file that holds the exam statement with the official solution typed in red under each question.
No separate exam-only file exists. Points per question/part are not printed in the file.
Caveats (official text kept as printed, not fixed):
- Q4b: the printed solution ends with "log(2n-1)=Theta(n)" (should read Theta(log n)); the conclusion is the intended one.
- Q3b: the solution has the typos "עת" (for "עץ") and "בך" (for "סך"); kept.
Run: PYTHONUTF8=1 py tools/gen/gen_21B-B.py"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "21B-B.json"


def Q(num, kind, topic, question, solution, **kw):
    q = {"num": num, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "official-pdf", "official": True, "confidence": "high"}
    q.update(kw)
    return q


contexts = {
    "c1": {"kind": "text", "title": "הוראות שאלה 1",
           "text": r"""ציין לכל אחת מהטענות הבאות נכון או לא נכון. נמק תשובתך."""},
    "c2": {"kind": "code", "title": "הפונקציה MM (שאלה 2)",
           "code": """MM(A,i,j)
    if j=i+1 then
        if A[i]>A[j] then return (A[j],A[i])
        else return (A[i],A[j])
    else
        k=floor((i+j)/2)
        (m1,M1)=MM(i,k)
        (m2,M2)=MM(k+1,j)
        Return (min(m1,m2), max(M1,M2))"""},
    "c3": {"kind": "image", "title": "גלגולים בעצי AVL ועצי פיבונאצ'י (שאלה 3)", "image": "images/exams/21B-B-c2.png",
           "caption": "גלגולים בעצי AVL (אפשרות 1 ואפשרות 2) והגדרת עצי פיבונאצ'י"},
}

questions = [
    # ---------------- Question 1 (six true/false parts) ----------------
    Q(1, "truefalse", "avl",
      r"""ניתן לשפר את אלגוריתמים פעולת ההכנסה לעצי AVL הרץ בזמן $O(\log\log n)$.""",
      r"""לא נכון.

נניח בשלילה כי ניתן ואז קל להראות שניתן למיין מיון מבוסס השוואות בפחות מסדר $n\log n$ פעולות. (בהינתן רשימת מספרים, הכנס לעץ AVL עם הפעולה החדשה. סרוק בסריקת `INORDER` וקיבלנו מיון מבוסס השוואות בזמן חסום של $n\log\log n$.""",
      part="א", verdict=False, contextId="c1"),
    Q(1, "truefalse", "heaps",
      r"""קיימת ערימת מקסימום בת $n$ איברים שבה פעולת `Delete_Max` דורשת $\Omega(\log n)$ פעולות. שימו לב, הטיעון הוא על $n$ כלשהו.""",
      r"""נכון.

למשל ערימת מקסימום של האיברים מ-$1$ עד $n$ ממויינים בסדר הפוך""",
      part="ב", verdict=True, contextId="c1"),
    Q(1, "truefalse", "complexity",
      r"""$2^n=\Theta\left(2^{\frac{n}{3}}\right)$""",
      r"""לא נכון.

לפי ההגדרה גבול המנה של שני הפונקציות צריך להיות קבוע חיובי אך זה אינו המצב""",
      part="ג", verdict=False, contextId="c1"),
    Q(1, "truefalse", "linear_ds",
      r"""ברשימה מקושרת חד-כיוונית בת $n$ צמתים. יעילות מחיקה של צומת כלשהו במקרה הממוצע הוא $\Theta(\log n)$.""",
      r"""לא נכון.

במסגרת ההרצאה ראינו כי העלות במקרה זה הוא סדר גודל לינארי""",
      part="ד", verdict=False, contextId="c1"),
    Q(1, "truefalse", "hashing",
      r"""נתונה טבלת `hash` בגודל $m=20$ אשר פועלת בשיטת הגיבוב הכפול. עבור מפתח כלשהו $k$, אם $h_2(k)=9$ אזי מובטח שסדרת הבדיקות אחר תא פנוי עבור $k$ תהווה תמורה של $\{1,\ldots,20\}$.""",
      r"""נכון.

כפי שהראנו בהרצאה, כיוון של-$20$ ולמספר $9$ אין מחלק משותף אז התכונה מובטחת.""",
      part="ה", verdict=True, contextId="c1"),
    Q(1, "truefalse", "heaps",
      r"""אם $A$ מערך שהוא ערימת מינימום אז הגדלת האיבר $A[0]$ בהכרח תגרום ל-$A$ לא להיות ערימה.""",
      r"""לא נכון.

למשל, עבור ערימת מינימום המיוצגת במערך $A$ עם $n$ נתונים, הגדלת האיבר $A[0]$ כך שערכו יהיה קטן מ-$A[1]$ ו-$A[2]$ תשאיר את המערך ערימת מינימום""",
      part="ו", verdict=False, contextId="c1"),

    # ---------------- Question 2 ----------------
    Q(2, "computation", "recurrences",
      r"""נתון מערך $A$ עם $n>1$ מספרים ונתונה הפונקציה `MM` המקבלת כקלט את תת המערך $A$ מאינדקס $i$ עד אינדקס $j$. הנח כי $i<j$.

המערך הנתון עבור סעיף א:

$A[1]=3,\ A[2]=2,\ A[3]=1,\ A[4]=9$

כתוב מה מחזירה הפונקציה `MM(A,1,4)` עבור המערך $A$ המצורף, נמק בקצרה.""",
      r"""תחזיר את הערך $1$ ו-$9$. ניתן לנמק על ידי טבלת מעקב.""",
      part="א", contextId="c2"),
    Q(2, "computation", "recurrences",
      r"""נגדיר את $T(n)$ להיות מספר ההשוואות בהרצת `MM` על מערך בגודל $n$. הגדר את הפונקציה $T$ באופן רקורסיבי.""",
      r"""$T(2)=O(1)$

$\forall n>2:\ T(n)=2\cdot T(n/2)+O(1)$""",
      part="ב", contextId="c2"),

    # ---------------- Question 3 (parts unrelated) ----------------
    Q(3, "computation", "avl",
      r"""מה מספר הגלגולים שיתרחשו בהוצאת המינימום מעץ AVL שהוא גם עץ פיבונאצ'י $F_{10}$? נמק תשובתך.""",
      r"""אורך המסלול השמאלי ביותר הוא $5$, מאופן המבנה לאורך כל העלייה במסלול מהעלה לשורש יתבצע גלגול (כי גורם האיזון בכל המסלול השמאלי הוא $-1$) ולכן סה"כ $5$ גלגולים""",
      part="א", contextId="c3"),
    Q(3, "proof", "trees_induction",
      r"""הוכח **באינדוקציה על מבנה העץ** שלעץ בינארי מלא תמיד מספר הקודקודים אי-זוגי.""",
      r"""בסיס האינדוקציה: עבור עץ בגובה $0$, יש רק קודקוד בודד ולכן הטענה מתקיימת.

צעד האינדוקציה: נניח נכונות לכל עץ שגובהו קטן מ-$h$ ונוכיח עבור עת בגובה $h$.

יהי $T$ עץ מלא בגובה $h>0$. כיוון ש-$T$ עץ מלא אזי לעץ שני תתי עצים לא ריקים שגובהם קטן מ-$h$.

לפי הנחת האינדוקציה, בכל תת עץ מספר הקודקודים הוא אי זוגי. ולכן בך הקודקודים בעץ הוא סכום הקודקודים בכל תת עץ + $1$ עבור השורש, ז"א, אי זוגי + אי זוגי + $1$ = אי זוגי.""",
      part="ב"),

    # ---------------- Question 4 (parts unrelated) ----------------
    Q(4, "algorithm", "heaps",
      r"""יהי $A$ ו-$B$ ערימות בגודל $n$ הצג את האלגוריתם הטוב ביותר ליצירת ערימה בגודל $2n$ המכילה את ערכי $A$ ו-$B$.""",
      r"""- הגדר מערך $C$ בגודל $2n$
- העתק את ערכי המערך $A$ למערך $C$ ולאחריהם את ערכי המערך $B$.
- הפעל על מערך $C$ את האלגוריתם להפיכת מערך לערימה (הצגנו את האלג' במסגרת ההרצאה).""",
      part="א"),
    Q(4, "proof", "sorting_selection",
      r"""הוכח שהחסם התחתון לאלגוריתם חיפוש איבר (המבוסס השוואות) מתוך $n$ נתונים הטוב ביותר הוא בסיבוכיות $\Omega(\log n)$ במקרה הגרוע.

רמז: העזר בעץ החלטות המתאר אלגוריתם חיפוש, בדומה להוכחה שהצגנו שחסם תחתון לאלגוריתם מיון מבוסס השוואות הטוב ביותר על $n$ נתונים הוא $\Omega(n\cdot\log n)$.""",
      r"""בבעיית החיפוש, הקלט הוא מערך והפלט הוא האינדקס בו נמצא המערך.

עץ החלטה המתאר את הבעיה יכיל $n$ עלים שהם האינדקסים השונים האפשריים שהאלגוריתמים יחזיר במציאת האיבר.

מסלול בעץ מתאר את מספר השאלות שהאלגוריתם ביצע למציאת האיבר ולכן לקבלת אלגוריתם שזמן ריצתו אופטימלי במקרה הגרוע נרצה עץ נמוך ככל הניתן, ז"א, עץ שלם או כמעט שלם.

גובה העץ שלם או כמעט שלם הוא $\log$ כמות האיברים. מדובר בעץ מלא, לפי משפט שלמדנו כמות האיברים (כיוון שיש $n$ עלים): $2n-1$ ולכן גובה העץ $\log(2n-1)=\Theta(n)$""",
      part="ב"),
]

exam = {
    "examCode": "21B-B",
    "examLabel": 'מבני נתונים, סמסטר ב תשפ"א, מועד ב',
    "year": 2021,
    "examDate": "2021",
    "sourceFile": "ds-2021-spring-B-exam-and-solution",
    "solutionFile": "ds-2021-spring-B-exam-and-solution",
    "contexts": contexts,
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
