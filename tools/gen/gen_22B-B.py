# -*- coding: utf-8 -*-
"""Generator for tools/raw/22B-B.json -- data-structures, spring semester 2022 (moed B, 6.7.22).
The PDF named "+ solution" (and the second copy) hold the exam booklet with EMPTY answer boxes: no official key and no
solution exist for this sitting in either source tree. Every item is held ("no-key") for the solver.
Run: PYTHONUTF8=1 py tools/gen/gen_22B-B.py"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "22B-B.json"


def H(num, kind, topic, question, points=None, part=None, **kw):
    q = {"num": num, "kind": kind, "topic": topic, "question": question, "hold": "no-key"}
    if points is not None:
        q["points"] = points
    if part:
        q["part"] = part
    q.update(kw)
    return q


contexts = {
    "c1": {"kind": "image", "title": "עץ ה-AVL של שאלה 1", "image": "images/exams/22B-B-c1.png",
           "caption": "עץ AVL נתון",
           },
}

questions = [
    H(1, "computation", "avl",
      r"""נתון עץ AVL שבציור.

הניחו שמחיקת איבר מקדקוד עם $2$ בנים נעשית ע"י החלפתו בעוקבו.

ברצוננו למחוק את אחד הקודקודים בעץ מבלי שמחיקתו תגרום לצורך ברוטציה (גלגול). על איזה קדקוד מדובר? השיבו את כל האפשרויות. רמז: יש יותר מקדקוד אחד. ציינו את שם הקדקוד לפי הערך הנמצא בו.

הערה: הכוונה כל אחד מהקדקודים האלה, אם נמחק אותו בלבד לא יהיה צורך בגלגול.""",
      part="א", contextId="c1"),
    H(1, "computation", "avl",
      r"""איך נראה העץ אחרי מחיקת הערך בשורשו? חובה לפרט את הדרך, כולל ציור עצי הביניים.

בסוף המבחן ניתן למצוא את דיאגרמות הגלגולים LL ו-LR.""",
      part="ב", contextId="c1"),

    H(2, "computation", "heaps",
      r"""[5 נקודות] נתונה ערימת **מינימום** שמכילה כמפתחות את כל המספרים הטבעיים בטווח $1$-$63$, כל מפתח מופיע פעם אחת. הערימה ממומשת כמערך $A$ עם אינדקסים $1$-$63$.

באילו תאים ב-$A$ יכול להופיע הערך $62$?""",
      5, part="א"),
    H(2, "algorithm", "heaps",
      r"""כתבו אלגוריתם בשם `Increase-Large(A)` המקבלת כקלט ערימת **מינימום** בעלת $n$ איברים כלשהם, ותפקידו להגדיל ב-$1$ את ערכם של $n/2$ האיברים **הגדולים** מתוך $n$ האיברים שבערימה ולדאוג שבסיום התהליך הערימה תהיה ערימת מינימום תקינה.

מהו זמן הריצה במקרה הגרוע של הפונק' שכתבתם? נמקו.""",
      part="ב"),

    H(3, "algorithm", "bst",
      r"""נתונה קבוצה של $n$ מספרים.

כתבו אלגוריתם בזמן $O(n \log n)$ לבניית עץ חיפוש בינארי שבקדקודיו שמורים הערכים שבתוך הקבוצה.""",
      part="א"),
    H(3, "proof", "sorting_selection",
      r"""נתונה קבוצה של $n$ מספרים.

הראו שאי אפשר לבנות את עץ החיפוש הבינארי בסעיף הקודם בזמן $o(n \log n)$. שים לב שכאן כתוב $o$ קטנה.""",
      part="ב"),

    H(4, "proof", "complexity",
      r"""הוכיחו או הפריכו:

לכל $f(n), g(n)$ פונקציות, מתקיים שאם $f(n) \neq O(g(n))$ אז $g(n) = O(f(n))$.""",
      part="א"),
    H(4, "computation", "hashing",
      r"""נתונה פונקציית הערבול הבאה:

$h(k,i) = ((k \bmod 7) + i \cdot (1 + k \bmod 5)) \bmod 7$

הראו את כל שלבי הבנייה של הטבלה כאשר הערכים הבאים הגיעו למבנה ריק (יש לקרוא משמאל לימין):

$8, 1, 15, 4, 16$""",
      part="ב"),

    H(5, "proof", "union_find",
      r"""**שאלת בונוס (15 נקודות).**

משתמשים במבנה נתונים לייצוג קבוצות זרות בייצוג ע"י עצים הפוכים עם קיצור מסלולים. האם ייתכן שסדרה של פעולות `makeset`, `union`, `find`, יכולה לייצור קבוצה בה $8$ איברים וגובה העץ המייצג את הקבוצה הוא $3$ כך שלאחר פעולת `find` גובה העץ בהכרח יהיה $2$.
אם כן, הראה את סדרת הפקודות שתגרום למצב זה, אחרת, הוכח מדוע לא קיימת סדרת פקודות המקיימת את דרישת השאלה.""",
      15),
]

exam = {
    "examCode": "22B-B",
    "examLabel": 'מבני נתונים, סמסטר ב תשפ"ב, מועד ב (6.7.22)',
    "year": 2022,
    "examDate": "6.7.2022",
    "sourceFile": "ds-2022-spring-B-exam",
    "contexts": contexts,
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
