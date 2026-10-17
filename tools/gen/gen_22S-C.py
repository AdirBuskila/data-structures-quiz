# -*- coding: utf-8 -*-
"""Generator for tools/raw/22S-C.json -- data-structures, summer semester 2022 (moed C).
The exam booklet has NO official key and no solution: every item is held ("no-key") for the solver.
Run: PYTHONUTF8=1 py tools/gen/gen_22S-C.py"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "22S-C.json"


def H(num, kind, topic, question, points, part=None, **kw):
    q = {"num": num, "kind": kind, "topic": topic, "question": question, "points": points,
         "hold": "no-key"}
    if part:
        q["part"] = part
    q.update(kw)
    return q


contexts = {
    "c1": {"kind": "text", "title": "הוראות שאלה 1",
           "text": r"""ציינו לכל אחת מהטענות הבאות נכון או לא נכון. נמקו תשובתכם."""},
    "c3a": {"kind": "text", "title": "רשימות מקושרות ממוינות (שאלה 3 סעיף א)",
            "text": r"""תארו אלגוריתם יעיל המקבל שתי רשימות מקושרות חד-כיווניות ממוינות $L_1, L_2$ ומוחק ערכים שמופיעים בשתיהן.
ניתן להניח שאין חזרות בתוך כל אחת מהרשימות, שתיהן באורך $N$.
הסבירו את נכונות האלגוריתם שכתבתם ונתחו את סיבוכיותו.

לדוגמה:

קלט:

`L1 = a->b->c->d->f->g`
`L2 = b->e->g->h->i->j`

פלט:

`L1 = a-> c->d->f`
`L2 = e->h->i->j`"""},
    "c3b": {"kind": "code", "title": "הפונקציה WHAT (שאלה 3 סעיף ב)",
            "code": """WHAT(A[i..j])
    if i<j then
        For k=i to j  print(A[i])
        WHAT(A[i..((i+j)/4)]
        WHAT(A[((i+j)/4+1)..j]"""},
}

questions = [
    H(1, "truefalse", "trees_induction",
      r"""יהי $T$ עץ מלא בגודל $n$. אם סריקת in-order על העץ תדפיס סדרה ממויינת בסדר עולה וגם כל העלים בעץ באותו מרחק מהשורש אז העץ הוא AVL.""",
      8, part="א", contextId="c1"),
    H(1, "truefalse", "avl",
      r"""הכנסת איבר חדש לעץ AVL בגודל $n$ היא בסיבוכיות $\Theta(1)$ במקרה הטוב.""",
      8, part="ב", contextId="c1"),
    H(1, "truefalse", "sorting_selection",
      r"""נתונים $\sqrt{n}$ מערכים, כל מערך הוא בגודל $\sqrt{n}$. רוצים לבנות מכל המערכים מערך אחד ממוין בגודל $n$ ע"י שימוש באלגוריתם מבוסס השוואות. ניתן למצוא פתרון לבעיה בסיבוכיות $\Theta(\sqrt{n}\log n)$ במקרה הגרוע.""",
      8, part="ג", contextId="c1"),
    H(1, "truefalse", "heaps",
      r"""בכל ערימת מינימום במימוש ע"י מערך ניתן למצוא את האיבר המקסימלי בסיבוכיות $O(\log n)$ במקרה הגרוע.""",
      8, part="ד", contextId="c1"),
    H(1, "truefalse", "complexity",
      r"""אם $f(n) = \Omega(h(n))$ וגם $f(n) = O(g(n))$ אז $g(n) = \Theta(h(n))$.""",
      8, part="ה", contextId="c1"),

    H(2, "computation", "avl",
      r"""תנו דוגמא לעץ AVL בגובה $4$ כך שהוצאת אחד מהמפתחות תגרום לשני גלגולים בעץ בעת הוצאתו.
יש לצייר את העץ ולהדגים את הוצאת המפתח הגורם לשני גלגולים אלו.""",
      13, part="א"),
    H(2, "proof", "trees_induction",
      r"""הוכח באינדוקציה על מבנה העץ: מספר העלים בעץ בינארי שלם הוא $2^h$ כאשר $h$ הוא גובה העץ.""",
      12, part="ב"),

    H(3, "algorithm", "linear_ds",
      r"""תארו אלגוריתם יעיל המקבל שתי רשימות מקושרות חד-כיווניות ממוינות $L_1, L_2$ ומוחק ערכים שמופיעים בשתיהן.
ניתן להניח שאין חזרות בתוך כל אחת מהרשימות, שתיהן באורך $N$.
הסבירו את נכונות האלגוריתם שכתבתם ונתחו את סיבוכיותו.

לדוגמה:

קלט:

`L1 = a->b->c->d->f->g`
`L2 = b->e->g->h->i->j`

פלט:

`L1 = a-> c->d->f`
`L2 = e->h->i->j`""",
      13, part="א"),
    H(3, "computation", "recurrences",
      r"""להלן פסודו קוד של הפונקציה `WHAT`, רשמו את פונקציית זמן הריצה של הפונקציה `WHAT` עבור הקריאה `WHAT(A[1..n])`, ז"א הקלט לפונקציה הוא מערך בגודל $n$ של מספרים טבעיים. נמקו תשובתכם וציירו את עץ הרקורסיה של הפונקציה שקיבלתם (3 רמות ראשונות).

```
WHAT(A[i..j])
    if i<j then
        For k=i to j  print(A[i])
        WHAT(A[i..((i+j)/4)]
        WHAT(A[((i+j)/4+1)..j]
```""",
      12, part="ב"),

    H(4, "algorithm", "heaps",
      r"""נתונה ערימת **מקסימום** בגודל $n$ ומספר כלשהו $x$.
כתבו אלגוריתם שמחזיר את האיברים בערימה **שגדולים מ-$x$**.
דרוש זמן ריצה $O(m)$ כאשר $m$ הוא מספר האיברים שמוחזרים.
הסבירו את נכונות האלגוריתם שכתבתם ונתחו את סיבוכיותו.""",
      13, part="א"),
    H(4, "computation", "hashing",
      r"""נתונה פונקציית הגיבוב הבאה:

$h(x, i) = ((x \bmod 5) + i \cdot (1 + x \bmod 4)) \bmod 5$

הראה דוגמא להכנסת $3$ איברים למערך בגודל $5$ בשיטת הגיבוב הכפול שתגרום ל-$3$ התנגשויות. נמק תשובתך.""",
      12, part="ב"),
]
# context c1/c3a/c3b are kept only where used
used = {q.get("contextId") for q in questions}
contexts = {k: v for k, v in contexts.items() if k in used}

exam = {
    "examCode": "22S-C",
    "examLabel": 'מבני נתונים, סמסטר קיץ תשפ"ב, מועד ג',
    "year": 2022,
    "examDate": "2022",
    "sourceFile": "ds-2022-summer-C-exam",
    "contexts": contexts,
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
