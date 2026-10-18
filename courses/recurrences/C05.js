/* Recurrences course, level 5: master theorem details */
COURSE_LEVEL("recurrences", {
  id: "C05", order: 5, icon: "🔬", title: "משפט האב: פרטים ומלכודות",
  goal: "להפעיל את משפט האב כשהנוסחה לא נקייה: קבועים, איברים קטנים ב-$f$, שורשים בסיס חלוקה, $a=1$, ושאלות של \"הערך הנמוך ביותר של $a$\".",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>בשאלות אמיתיות הנוסחה לא תמיד נראית כמו בתרגיל. הכללים הבאים מנקים אותה.</p>
<ul>
<li><b>קבועים לא משפיעים:</b> $f(n)=1024$ הוא $\Theta(1)$. $f(n)=5n^2$ הוא $\Theta(n^2)$.</li>
<li><b>האיבר הדומיננטי של $f$ קובע:</b> $n+\sqrt n$ הוא $\Theta(n)$, ו-$n^2+\sqrt n$ הוא $\Theta(n^2)$.</li>
<li><b>בסיס חילוק שאינו שלם:</b> עבור $b=\sqrt2$ מתקיים $\log_{\sqrt2}2=2$, כי $(\sqrt2)^2=2$. במקום ללמוד נוסחה אפשר לשאול איזו חזקה של $b$ נותנת $a$.</li>
<li><b>$a=1$:</b> הרף הוא $n^{0}=1$. אם $f$ קבועה זה מקרה 2 עם $\Theta(\log n)$. אם $f(n)=n$ זה מקרה 3.</li>
</ul>
<h3>"הערך הנמוך ביותר של $a$"</h3>
<p>בנוסחה $T(n)=aT(n/b)+n^k$ הערך הקריטי הוא $a=b^k$, כי אז $\log_b a=k$ והרף שווה ל-$f$:</p>
<table>
<tr><td>$a<b^k$</td><td>מקרה 3, $\Theta(n^k)$</td></tr>
<tr><td>$a=b^k$</td><td>מקרה 2, $\Theta(n^k\log n)$</td></tr>
<tr><td>$a>b^k$</td><td>מקרה 1, $\Theta(n^{\log_b a})$</td></tr>
</table>
<p>הסיבוכיות גדולה מ-$n^k$ בדיוק מהערך $a=b^k$ ומעלה.</p>
<div class="lesson-ex"><b>דוגמה.</b> $T(n)=a\,T(n/2)+n^2$. הערך הקריטי הוא $a=2^2=4$. עבור $a=3$ יוצא $\Theta(n^2)$ (לא גדול מ-$n^2$). עבור $a=4$ יוצא $\Theta(n^2\log n)$, וזה כבר גדול מ-$n^2$.</div>
<div class="lesson-rule">🔑 בשאלה שמבקשת הערך הנמוך ביותר מתוך רשימה: מחשבים את הערך הקריטי $b^k$ ובוחרים את הקטן ברשימה שהוא לפחות $b^k$.</div>
<div class="lesson-trap">⚠️ "סיבוכיות גדולה מ-$n^2$" כוללת גם $n^2\log n$, ולא רק חזקות גדולות יותר של $n$.</div>
` },
  questions: [
    { id: "C05-Q1",
      question: String.raw`פתרו: $T(n)=T(n/4)+1024$.`,
      options: [
        { id: "a", value: String.raw`$\Theta(1)$` },
        { id: "b", value: String.raw`$\Theta(n)$` },
        { id: "c", value: String.raw`$\Theta(\sqrt{n})$` },
        { id: "d", value: String.raw`$\Theta(\log n)$` },
      ],
      correctId: "d",
      explanation: String.raw`$a=1$, $b=4$, $\log_4 1=0$, הרף הוא $n^0=1$. $f(n)=1024=\Theta(1)$ שווה לרף, ולכן מקרה 2: $\Theta(1\cdot\log n)=\Theta(\log n)$. $\Theta(1)$ שוכח את גורם ה-$\log$ של מקרה 2. הקבוע $1024$ לא משנה את הסדר.`,
      recap: "$f$ קבועה ו-$a=1$: מקרה 2, $\\Theta(\\log n)$" },
    { id: "C05-Q2",
      question: String.raw`פתרו: $T(n)=2T(n/4)+\sqrt{n}$.`,
      options: [
        { id: "a", value: String.raw`$\Theta(\sqrt{n})$` },
        { id: "b", value: String.raw`$\Theta(n)$` },
        { id: "c", value: String.raw`$\Theta(n\log n)$` },
        { id: "d", value: String.raw`$\Theta(\sqrt{n}\log n)$` },
      ],
      correctId: "d",
      explanation: String.raw`$\log_4 2=\tfrac12$, הרף הוא $n^{1/2}=\sqrt n$ ו-$f(n)=\sqrt n$ שווה לו. מקרה 2: $\Theta(\sqrt n\log n)$. $\Theta(\sqrt n)$ שוכח את ה-$\log$. $n$ ו-$n\log n$ מניחים הרף $n$.`,
      recap: "חזקות שבר: $\\log_4 2=\\tfrac12$, והרף הוא $\\sqrt n$" },
    { id: "C05-Q3",
      question: String.raw`פתרו: $T(n)=2T\left(\frac{n}{\sqrt{2}}\right)+n+\sqrt{n}$.`,
      options: [
        { id: "a", value: String.raw`$\Theta(n)$` },
        { id: "b", value: String.raw`$\Theta(n\log n)$` },
        { id: "c", value: String.raw`$\Theta(\sqrt{n}\log n)$` },
        { id: "d", value: String.raw`$\Theta(n^2)$` },
      ],
      correctId: "d",
      explanation: String.raw`$b=\sqrt2$ ולכן $\log_{\sqrt2}2=2$ (כי $(\sqrt2)^2=2$), והרף הוא $n^2$. האיבר הדומיננטי של $f$ הוא $n$, ו-$n=O(n^{2-1})$, ולכן מקרה 1: $\Theta(n^2)$. הטעות הנפוצה היא להשתמש ב-$b=2$ ולקבל רף $n$.`,
      recap: "$\\log_{\\sqrt2}2=2$; רק האיבר הדומיננטי של $f$ חשוב" },
    { id: "C05-Q4",
      step: { type: "numeric",
        prompt: String.raw`בנוסחה $T(n)=3T(n/9)+n$: מהו $\log_b a$, כלומר החזקה של הרף $n^{\log_b a}$?`,
        answer: 0.5, tol: 0.0001,
        explain: String.raw`$\log_9 3=\tfrac12$ כי $9^{1/2}=3$. הרף הוא $n^{1/2}=\sqrt n$, ולא $n$. אז $f(n)=n$ היא שגדולה מהרף, ולא להפך.` },
      recap: "$\\log_9 3=\\tfrac12$, הרף הוא $\\sqrt n$" },
    { id: "C05-Q5",
      step: { type: "findbug",
        prompt: String.raw`בפתרון הבא של $T(n)=3T(n/9)+n$ במשפט האב יש שורה אחת שגויה מתמטית. איזו?`,
        lines: [
          String.raw`$a=3$, $b=9$, ולכן $\log_9 3=2$ והרף הוא $n^2$.`,
          String.raw`$f(n)=n=n^{1/2+1/2}$ גדולה בחזקה מ-$n^{1/2}$.`,
          String.raw`סדירות: $3\cdot f(n/9)=\tfrac n3\le\tfrac13 f(n)$, עם $c=\tfrac13<1$.`,
          String.raw`זה מקרה 3, ולכן $T(n)=\Theta(n)$.`,
        ],
        bugIndex: 0,
        explain: String.raw`$\log_9 3=\tfrac12$ ולא $2$, כי $9^{1/2}=3$. מי שקיבל רף $n^2$ היה מסיק מקרה 1 ופתרון $\Theta(n^2)$, שגוי. השורות 2-4 נכונות: $f=n$ גדולה בחזקה מ-$n^{1/2}$, הסדירות מתקיימת, והפתרון $\Theta(n)$.` },
      recap: "מחשבים את הרף מחדש בכל שאלה: $\\log_9 3=\\tfrac12$" },
    { id: "C05-Q6",
      question: String.raw`בנוסחה $T(n)=aT(n/3)+n^2$, מהו הערך הנמוך ביותר מבין הבאים של $a$ שעבורו הסיבוכיות גדולה מ-$n^2$?`,
      options: [
        { id: "a", value: "3" },
        { id: "b", value: "6" },
        { id: "c", value: "12" },
        { id: "d", value: "9" },
      ],
      correctId: "d",
      explanation: String.raw`הערך הקריטי הוא $a=3^2=9$. עבור $a=3$ ו-$a=6$ מתקיים $\log_3 a<2$ ויוצא $\Theta(n^2)$, לא גדול מ-$n^2$. עבור $a=9$ יוצא $\Theta(n^2\log n)$, גדול מ-$n^2$. $a=12$ גם גדול מ-$n^2$, אבל לא הנמוך ביותר.`,
      recap: "הערך הקריטי הוא $a=b^k$, ושם כבר מופיע גורם $\\log n$" },
  ],
});
