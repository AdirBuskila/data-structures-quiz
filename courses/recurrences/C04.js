/* Recurrences course, level 4: the master theorem, three cases */
COURSE_LEVEL("recurrences", {
  id: "C04", order: 4, icon: "🧮", title: "משפט האב: שלושת המקרים",
  goal: "לפתור נוסחה מהצורה $T(n)=aT(n/b)+f(n)$ בעזרת משפט האב: לחשב את הרף $n^{\\log_b a}$, להשוות אליו את $f$ ולבחור מקרה.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>משפט האב נותן את הפתרון של $T(n)=aT(n/b)+f(n)$ בלי לצייר עץ. הרעיון הוא בדיוק מה שראינו בעץ: להשוות את העבודה בשורש ($f(n)$) לעבודה בעלים ($n^{\log_b a}$).</p>
<h3>הרף</h3>
<p>מחשבים $a$, $b$ ואת <b>הרף</b> $n^{\log_b a}$. אחר כך משווים אליו את $f(n)$.</p>
<table>
<tr><td><b>מקרה 1</b></td><td>$f$ <b>קטנה</b> מהרף בחזקה: $f(n)=O(n^{\log_b a-\varepsilon})$</td><td>$T(n)=\Theta(n^{\log_b a})$ (העלים שולטים)</td></tr>
<tr><td><b>מקרה 2</b></td><td>$f$ <b>שווה</b> לרף: $f(n)=\Theta(n^{\log_b a})$</td><td>$T(n)=\Theta(n^{\log_b a}\log n)$ (כל הרמות שוות)</td></tr>
<tr><td><b>מקרה 3</b></td><td>$f$ <b>גדולה</b> מהרף בחזקה: $f(n)=\Omega(n^{\log_b a+\varepsilon})$, ובנוסף $a f(n/b)\le c f(n)$ עבור $c<1$</td><td>$T(n)=\Theta(f(n))$ (השורש שולט)</td></tr>
</table>
<p>כאן $\varepsilon>0$ הוא קבוע כלשהו, ו"בחזקה" אומר שההפרש הוא $n^{\varepsilon}$, ולא רק גורם לוגריתמי.</p>
<div class="lesson-ex"><b>דוגמה.</b> $T(n)=4T(n/2)+n$. כאן $a=4$, $b=2$, $\log_2 4=2$, והרף הוא $n^2$. מתקיים $f(n)=n=O(n^{2-1})$, ולכן מקרה 1 עם $\varepsilon=1$: $T(n)=\Theta(n^2)$.</div>
<div class="lesson-rule">🔑 שלושה צעדים: (1) $\log_b a$, (2) משווים את $f$ ל-$n^{\log_b a}$, (3) קוראים את הפתרון מהטבלה. בדרך כלל $f(n)=n^k$, ואז מספיק להשוות בין $k$ ל-$\log_b a$: קטן, שווה או גדול.</div>
<div class="lesson-trap">⚠️ משווים את $f$ ל-$n^{\log_b a}$ ולא ל-$n$. עבור $a=1$ הרף הוא $n^0=1$.</div>
<p>בדיקת הסדירות במקרה 3: עבור $f(n)=n^k$ היא תמיד מתקיימת כש-$k>\log_b a$, כי $a(n/b)^k=\tfrac{a}{b^k}n^k$ ו-$\tfrac a{b^k}<1$.</p>
` },
  questions: [
    { id: "C04-Q1",
      step: { type: "numeric",
        prompt: String.raw`בנוסחה $T(n)=8T(n/2)+n$: מהו $\log_b a$ (הרף הוא $n^{\log_b a}$)?`,
        answer: 3, tol: 0,
        explain: String.raw`$a=8$, $b=2$, ו-$\log_2 8=3$ כי $2^3=8$. הרף הוא $n^3$, וגם $f(n)=n=O(n^{3-2})$, ולכן מקרה 1: $\Theta(n^3)$.` },
      recap: "$\\log_b a$ = החזקה ש-$b$ צריך כדי להגיע ל-$a$" },
    { id: "C04-Q2",
      question: String.raw`פתרו בעזרת משפט האב: $T(n)=9T(n/3)+n$.`,
      options: [
        { id: "a", value: String.raw`$\Theta(n)$` },
        { id: "b", value: String.raw`$\Theta(n\log n)$` },
        { id: "c", value: String.raw`$\Theta(n^3)$` },
        { id: "d", value: String.raw`$\Theta(n^2)$` },
      ],
      correctId: "d",
      explanation: String.raw`$a=9$, $b=3$, $\log_3 9=2$, הרף הוא $n^2$. $f(n)=n=O(n^{2-1})$ קטנה מהרף בחזקה, ולכן מקרה 1: $\Theta(n^2)$. $\Theta(n)$ מתעלם מהעלים, $n\log n$ היה נכון לרף $n$, ו-$n^3$ גדול מהרף.`,
      recap: "$f$ קטנה בחזקה מהרף: מקרה 1, $\\Theta(n^{\\log_b a})$" },
    { id: "C04-Q3",
      question: String.raw`פתרו בעזרת משפט האב: $T(n)=2T(n/2)+n$.`,
      options: [
        { id: "a", value: String.raw`$\Theta(n\log n)$` },
        { id: "b", value: String.raw`$\Theta(n)$` },
        { id: "c", value: String.raw`$\Theta(n^2)$` },
        { id: "d", value: String.raw`$\Theta(\log n)$` },
      ],
      correctId: "a",
      explanation: String.raw`$a=2$, $b=2$, $\log_2 2=1$, הרף הוא $n$ ו-$f(n)=n=\Theta(n)$ שווה לו, ולכן מקרה 2: $\Theta(n\log n)$. זו הנוסחה של מיון מיזוג. $\Theta(n)$ שוכח את הגורם $\log n$ של מקרה 2.`,
      recap: "$f$ שווה לרף: מקרה 2, מוסיפים $\\log n$" },
    { id: "C04-Q4",
      question: String.raw`פתרו בעזרת משפט האב: $T(n)=T(n/2)+n$.`,
      options: [
        { id: "a", value: String.raw`$\Theta(n\log n)$` },
        { id: "b", value: String.raw`$\Theta(\log n)$` },
        { id: "c", value: String.raw`$\Theta(n)$` },
        { id: "d", value: String.raw`$\Theta(1)$` },
      ],
      correctId: "c",
      explanation: String.raw`$a=1$, $b=2$, $\log_2 1=0$, הרף הוא $n^0=1$. $f(n)=n=\Omega(n^{0+1})$ גדולה מהרף בחזקה. סדירות: $1\cdot f(n/2)=n/2\le\tfrac12 f(n)$ עם $c=\tfrac12<1$. מקרה 3: $\Theta(f(n))=\Theta(n)$. ההשוואה היא ל-$1$ ולא ל-$n$.`,
      recap: "$f$ גדולה בחזקה מהרף וסדירה: מקרה 3, $\\Theta(f(n))$" },
    { id: "C04-Q5",
      question: String.raw`פתרו בעזרת משפט האב: $T(n)=4T(n/2)+n^3$.`,
      options: [
        { id: "a", value: String.raw`$\Theta(n^2)$` },
        { id: "b", value: String.raw`$\Theta(n^3\log n)$` },
        { id: "c", value: String.raw`$\Theta(n^3)$` },
        { id: "d", value: String.raw`$\Theta(n^5)$` },
      ],
      correctId: "c",
      explanation: String.raw`$\log_2 4=2$, הרף הוא $n^2$ ו-$f(n)=n^3=\Omega(n^{2+1})$ גדולה ממנו בחזקה. סדירות: $4(n/2)^3=\tfrac12 n^3\le\tfrac12 f(n)$ עם $c=\tfrac12<1$. מקרה 3: $\Theta(n^3)$. $\Theta(n^2)$ הוא פתרון מקרה 1 שאינו חל. $n^3\log n$ שייך למקרה 2 ($f$ שווה לרף).`,
      recap: "מקרה 3 דורש גם סדירות: $a f(n/b)\\le c f(n)$" },
    { id: "C04-Q6",
      question: String.raw`פתרו בעזרת משפט האב: $T(n)=7T(n/2)+n^2$.`,
      options: [
        { id: "a", value: String.raw`$\Theta(n^2)$` },
        { id: "b", value: String.raw`$\Theta(n^2\log n)$` },
        { id: "c", value: String.raw`$\Theta(n^{\log_2 7})$` },
        { id: "d", value: String.raw`$\Theta(n^3)$` },
      ],
      correctId: "c",
      explanation: String.raw`$\log_2 7\approx2.807>2$, הרף $n^{\log_2 7}$ גדול מ-$f(n)=n^2$ בחזקה, ולכן מקרה 1: $\Theta(n^{\log_2 7})$ (זה אלגוריתם שטראסן). $n^2$ ו-$n^2\log n$ מתעלמים מהעלים. $n^3$ הוא חזקה שלמה גדולה מדי: $2.807<3$.`,
      recap: "אם $\\log_b a$ לא שלם, החזקה נשארת $n^{\\log_b a}$" },
  ],
});
