# -*- coding: utf-8 -*-
"""Generator for tools/raw/25B-C.json -- data-structures, spring 2025 (special moed C, 14.9.25).
The exam booklet has NO official key and no solution: every item is held ("no-key") for the solver.
Run: PYTHONUTF8=1 py tools/gen/gen_25B-C.py"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "25B-C.json"


def H(num, kind, topic, question, points, part=None, **kw):
    q = {"num": num, "kind": kind, "topic": topic, "question": question, "points": points,
         "hold": "no-key"}
    if part:
        q["part"] = part
    q.update(kw)
    return q


contexts = {
    "c1": {"kind": "code", "title": "הפונקציה MYSTERY (שאלה 1 סעיפים א, ב)",
           "code": """MYSTERY( S ):
    if not is-empty( S )
        ind = t
        x = pop( S )
        MYSTERY( S )
        if (ind mod 2)
            push( S, 2*x )"""},
    "c5": {"kind": "text", "title": "הוראות שאלה 5 (בונוס)",
           "text": r"""בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), ללא נימוק."""},
}

questions = [
    H(1, "computation", "linear_ds",
      r"""לפניכם פסאודו-קוד של הפונקציה MYSTERY המקבלת כפרמטר מחסנית $S$. המשתנה $t$ מייצג את אינדקס ה-top המחסנית.

הכניסו את האיברים הבאים למחסנית ריקה עם $t=0$, המומשת על ידי מערך בגודל $10$. הכניסו את האיברים משמאל לימין: $10, 9, 8, 7, 6, 5, 4$ וציינו מהו אינדקס top המחסנית (המכונה $t$) לאחר ההכנסה.

כעת, הפעילו על המחסנית שהתקבלה לעיל, את הפונקציה `MYSTERY( S )`. ציירו את המחסנית המתקבלת, בתוך התבנית הבאה, וציינו מהו אינדקס top המחסנית (המכונה $t$) לאחר ההכנסה.""",
      10, part="א", contextId="c1"),
    H(1, "computation", "recurrences",
      r"""כתבו נוסחת נסיגה עבור זמן הריצה של הפונקציה `MYSTERY`.""",
      5, part="ב", contextId="c1"),
    H(1, "proof", "recurrences",
      r"""סעיף זה עומד בפני עצמו, ואינו קשור לפונקציה `MYSTERY` שבראש השאלה או לשני הסעיפים הקודמים.

לפניכם נוסחת נסיגה. האם היא ניתנת לפתרון בעזרת שיטת האב (משפט המסטר)? אם כן, פתרו אותה (הראו דרך). אם לא, הסבירו מדוע לא.

$T(n) = 3T\left(\frac{n}{2}\right) + n$.""",
      10, part="ג"),

    H(2, "proof", "bst",
      r"""להלן הגדרת בעית החצי חצי בעצי חיפוש:
קלט: שני עצי חיפוש בינאריים, $T_1, T_2$, כל אחד בגודל $n$ כאשר $n$ מספר זוגי.
פלט: עץ AVL חדש המכיל את $n/2$ הערכים הקטנים מהעץ $T_1$ ואת $n/2$ הערכים הגדולים מהעץ $T_2$.

**הוכיחו** את הטענה הבאה: סיבוכיות זמן הריצה של האלגוריתם הטוב ביותר לפתרון בעיית חצי חצי בעצי חיפוש הוא לינארי.""",
      15, part="א"),
    H(2, "proof", "avl",
      r"""להלן הגדרת בעית החצי חצי בעצי AVL:
קלט: שני עצי AVL, $T_1, T_2$, כל אחד בגודל $n$ כאשר $n$ מספר זוגי.
פלט: עץ AVL חדש המכיל את $n/2$ הערכים הקטנים מהעץ $T_1$ ואת $n/2$ הערכים הגדולים מהעץ $T_2$.

**הפריכו** את הטענה הבאה: סיבוכיות זמן הריצה של האלגוריתם הטוב ביותר לפתרון בעיית חצי חצי בעצי AVL הוא לוגריתמי.""",
      10, part="ב"),

    H(3, "algorithm", "ds_design",
      r"""נדרש מבנה נתונים שיתמוך בפעולות הבאות, בזמנים המבוקשים:

1. `insert(id)` הכנסת איבר בעל מפתח `id` למבנה. זמן ריצה $O(\log n)$.
2. `search(id)` חיפוש איבר בעל מפתח `id` במבנה. אם קיים החזר מצביע לאיבר הזה, אחרת החזר `null`. זמן ריצה $O(\log n)$.
3. `delete(id)` מחיקת איבר בעל מפתח `id` מהמבנה. זמן ריצה $O(\log n)$.
4. `get_first()` החזרת המפתח של האיבר הראשון שנכנס למבנה מבין האיברים הקיימים בו ברגע זה. זמן ריצה $O(1)$.
5. `get_last()` החזרת המפתח של האיבר האחרון שנכנס למבנה מבין האיברים הקיימים בו ברגע זה. זמן ריצה $O(1)$.

תארו מבנה נתונים למימוש הפעולות המתוארת לעיל. הסבירו מדוע כל פעולה עומדת בדרישות זמן הריצה המבוקש.""",
      25),

    H(4, "algorithm", "ds_design",
      r"""נתון מערך $A[1 \dots n]$ של מספרים שונים זה מזה, ונתון מספר $x$. נרצה למצוא שני מספרים במערך שמכפלתם בדיוק $x$. אם יש כאלה, נחזיר את האינדקסים שלהם. אם אין, נחזיר $0$.

כתבו פסודו קוד לפתרון הבעיה בזמן $O(n \log n)$.""",
      15, part="א"),
    H(4, "proof", "ds_design",
      r"""הסבירו מדוע הפסודו קוד שהצגתם עומד בדרישות הזמן של $O(n \log n)$.""",
      10, part="ב"),

    H(5, "truefalse", "heaps",
      r"""**שאלת בונוס (15 נקודות).**

לכל ערימת מינימום קיים ערך שאם נכניס אותו לערימה לא יתבצעו החלפות כלל. נכון / לא נכון""",
      5, part="א", contextId="c5"),
    H(5, "truefalse", "bst",
      r"""בכל עץ חיפוש בינארי, המסלול הארוך ביותר מהשורש לעלה הוא $O(\log n)$. נכון / לא נכון""",
      5, part="ב", contextId="c5"),
    H(5, "truefalse", "complexity",
      r"""זמן הריצה של אלגוריתם כלשהו נתון כך:
$T(n) = n \cdot \log_2(\sqrt{n}) + \frac{1}{2}\log_{10}(n)$

אזי: $T(n) = \omega(n \log n)$. נכון / לא נכון""",
      5, part="ג", contextId="c5"),
]

exam = {
    "examCode": "25B-C",
    "examLabel": 'מבני נתונים, סמסטר ב תשפ"ה, מועד מיוחד (14.9.25)',
    "year": 2025,
    "examDate": "14.9.2025",
    "sourceFile": "ds-2025-spring-C-exam",
    "contexts": contexts,
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
