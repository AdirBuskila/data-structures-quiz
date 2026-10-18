/* Recurrences course, level 7: unbalanced recursion trees */
COURSE_LEVEL("recurrences", {
  id: "C07", order: 7, icon: "⚖️", title: "עצים לא מאוזנים",
  goal: "לפתור $T(n)=T(c_1n)+T(c_2n)+n^p$ בעזרת היחס $q=c_1^p+c_2^p$ בין רמה לרמה.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>כשהתת-בעיות בגדלים שונים, למשל $T(n/4)+T(n/2)$, משפט האב לא חל, אבל עץ הרקורסיה עדיין עובד.</p>
<h3>סכום הרמה</h3>
<p>עבור $T(n)=T(c_1n)+T(c_2n)+n^p$ הסכום בשורש הוא $n^p$. ברמה הבאה הסכום הוא $(c_1n)^p+(c_2n)^p=n^p\,(c_1^p+c_2^p)$. נסמן $q=c_1^p+c_2^p$, ובכל רמה הסכום מוכפל ב-$q$:</p>
<table>
<tr><td>$q<1$</td><td>הסכומים יורדים בסדרה הנדסית, השורש שולט: $\Theta(n^p)$</td></tr>
<tr><td>$q=1$</td><td>כל הרמות שוות, יש $\Theta(\log n)$ רמות: $\Theta(n^p\log n)$</td></tr>
<tr><td>$q>1$</td><td>הסכומים עולים, העלים שולטים, ויוצא חזקה גדולה מ-$p$</td></tr>
</table>
<div class="lesson-ex"><b>דוגמה.</b> $T(n)=T(n/4)+T(n/2)+n^2$. כאן $p=2$ ו-$q=(1/4)^2+(1/2)^2=\tfrac1{16}+\tfrac4{16}=\tfrac5{16}<1$. סכום כל הרמות הוא $n^2\sum_i(5/16)^i=\tfrac{16}{11}n^2$, ולכן $\Theta(n^2)$.</div>
<h3>הענפים אינם באותו עומק</h3>
<p>הענף של $n/2$ עמוק יותר מהענף של $n/4$. מחשבים את הסכום כאילו כל הענפים באורך הארוך ביותר: זה חסם עליון. חסם תחתון פשוט מקבלים מהשורש לבדו, שמניב $n^p$. כש-$q<1$ שני החסמים נפגשים ב-$\Theta(n^p)$.</p>
<div class="lesson-rule">🔑 מחשבים $q=\sum c_i^p$ על כל התת-בעיות, כולל כשיש שלוש. $q<1$: $\Theta(n^p)$. $q=1$: $\Theta(n^p\log n)$.</div>
<div class="lesson-trap">⚠️ מעלים בחזקה $p$ את <b>היחס</b> $c_i$ (למשל $\tfrac14$), ולא את המכנה. כשהחזקה היא $p=1$ הבדיקה היא פשוט $c_1+c_2$: הסכום 1 פירושו שכל הקלט מתחלק בין הקריאות.</div>
` },
  questions: [
    { id: "C07-Q1",
      step: { type: "numeric",
        prompt: String.raw`בנוסחה $T(n)=T(n/4)+T(n/2)+n^2$: כמה הוא $q$, היחס בין סכום רמה לסכום הרמה שלפניה?`,
        answer: 0.3125, tol: 0.0001,
        explain: String.raw`$q=(1/4)^2+(1/2)^2=\tfrac1{16}+\tfrac14=\tfrac5{16}=0.3125$.` },
      recap: "$q=c_1^p+c_2^p$" },
    { id: "C07-Q2",
      question: String.raw`פתרו: $T(n)=T(n/4)+T(3n/4)+n$.`,
      options: [
        { id: "a", value: String.raw`$\Theta(n)$` },
        { id: "b", value: String.raw`$\Theta(n\log n)$` },
        { id: "c", value: String.raw`$\Theta(n^2)$` },
        { id: "d", value: String.raw`$\Theta(n(\log n)^2)$` },
      ],
      correctId: "b",
      explanation: String.raw`$p=1$ ו-$q=\tfrac14+\tfrac34=1$: כל רמה (שלמה) מסכמת ל-$n$, ויש $\Theta(\log n)$ רמות, ולכן $\Theta(n\log n)$. $\Theta(n)$ זה מקרה $q<1$, ו-$n\log^2 n$ מניח עומק $\log n$ רמות של $\log n$ כל אחת.`,
      recap: "$q=1$: כל הרמות שוות, $\\Theta(n^p\\log n)$" },
    { id: "C07-Q3",
      question: String.raw`פתרו: $T(n)=T(n/3)+T(n/2)+n$.`,
      options: [
        { id: "a", value: String.raw`$\Theta(n\log n)$` },
        { id: "b", value: String.raw`$\Theta(n)$` },
        { id: "c", value: String.raw`$\Theta(n^2)$` },
        { id: "d", value: String.raw`$\Theta(\log n)$` },
      ],
      correctId: "b",
      explanation: String.raw`$p=1$ ו-$q=\tfrac13+\tfrac12=\tfrac56<1$. הסכומים יורדים בסדרה הנדסית ושורש העץ שולט: $\Theta(n)$. (החלק שנעלם, $\tfrac16$ מהקלט, לא נכנס לאף תת-בעיה.) $n\log n$ נכון רק כש-$q=1$.`,
      recap: "$q<1$: השורש שולט, $\\Theta(n^p)$" },
    { id: "C07-Q4",
      question: String.raw`פתרו: $T(n)=T(n/2)+T(n/3)+T(n/6)+n$.`,
      options: [
        { id: "a", value: String.raw`$\Theta(n)$` },
        { id: "b", value: String.raw`$\Theta(n\log n)$` },
        { id: "c", value: String.raw`$\Theta(n^2)$` },
        { id: "d", value: String.raw`$\Theta(\sqrt{n})$` },
      ],
      correctId: "b",
      explanation: String.raw`שלוש תת-בעיות, $p=1$: $q=\tfrac12+\tfrac13+\tfrac16=1$. כל הרמות מסכמות ל-$n$, ולכן $\Theta(n\log n)$. אם סופרים רק שתיים מהן יוצא $q=\tfrac56$ ו-$\Theta(n)$, וזו טעות.`,
      recap: "כוללים את כל התת-בעיות בחישוב $q$" },
    { id: "C07-Q5",
      question: String.raw`פתרו: $T(n)=T(n/3)+T(2n/3)+n^2$.`,
      options: [
        { id: "a", value: String.raw`$\Theta(n^2)$` },
        { id: "b", value: String.raw`$\Theta(n^2\log n)$` },
        { id: "c", value: String.raw`$\Theta(n\log n)$` },
        { id: "d", value: String.raw`$\Theta(n^3)$` },
      ],
      correctId: "a",
      explanation: String.raw`$p=2$ ו-$q=(1/3)^2+(2/3)^2=\tfrac19+\tfrac49=\tfrac59<1$. השורש שולט: $\Theta(n^2)$. אותה חלוקה עם $f=n$ הייתה נותנת $q=1$ ו-$n\log n$, אבל כאן החזקה $p=2$ מכווצת את הסכום.`,
      recap: "בודקים את $q$ עם ה-$p$ של השאלה, לא תמיד עם $p=1$" },
    { id: "C07-Q6",
      step: { type: "numeric",
        prompt: String.raw`עבור $T(n)=T(n/4)+T(n/2)+n^2$ הסכום על כל הרמות הוא $n^2\sum_{i\ge0}q^i$. לאיזה מספר מתקרב $T(n)/n^2$ עבור $n$ גדול מאוד? (תשובה עשרונית, סטייה של $0.01$)`,
        answer: 1.4545, tol: 0.01,
        explain: String.raw`$q=\tfrac5{16}$, וסכום הסדרה ההנדסית הוא $\tfrac1{1-5/16}=\tfrac{16}{11}\approx1.4545$. לכן $T(n)\approx\tfrac{16}{11}n^2=\Theta(n^2)$.` },
      recap: "$\\sum q^i=\\tfrac1{1-q}$, כאן $\\tfrac{16}{11}$" },
  ],
});
