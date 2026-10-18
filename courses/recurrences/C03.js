/* Recurrences course, level 3: the recursion tree */
COURSE_LEVEL("recurrences", {
  id: "C03", order: 3, icon: "🌲", title: "עץ הרקורסיה",
  goal: "לצייר את עץ הרקורסיה של $T(n)=aT(n/b)+f(n)$, לסכום כל רמה, ולהחליט איזו רמה שולטת בסכום.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>עץ רקורסיה מציג את כל העבודה: כל צומת הוא קריאה, וכתוב בו כמה עבודה לא רקורסיבית היא עושה.</p>
<h3>מבנה העץ של $T(n)=aT(n/b)+f(n)$</h3>
<table>
<tr><td>רמה $i$ (השורש הוא רמה 0)</td><td>$a^i$ צמתים, כל אחד על קלט בגודל $n/b^i$</td></tr>
<tr><td>עבודה ברמה $i$</td><td>$a^i\cdot f(n/b^i)$</td></tr>
<tr><td>עומק</td><td>$\log_b n$, כי $n/b^i=1$ כש-$i=\log_b n$</td></tr>
<tr><td>עלים</td><td>$a^{\log_b n}=n^{\log_b a}$</td></tr>
</table>
<p>את $T(n)$ מקבלים בסכימת העבודה של כל הרמות.</p>
<div class="lesson-ex"><b>דוגמה.</b> $T(n)=2T(n/2)+n$. ברמה $i$ יש $2^i$ צמתים, כל אחד $n/2^i$, ולכן הסכום ברמה הוא $n$. יש $\log_2 n$ רמות, ולכן $T(n)=\Theta(n\log n)$.</div>
<h3>מי שולט?</h3>
<ul>
<li>הסכום ברמה <b>קבוע</b> (אותו $n$ בכל רמה): מכפילים בעומק, ויוצא $f\cdot\log n$.</li>
<li>הסכום ברמה <b>גדל</b> מהשורש לעלים (סדרה הנדסית עולה): העלים שולטים, והפתרון הוא $\Theta$ של מספר העלים.</li>
<li>הסכום ברמה <b>קטן</b> (סדרה הנדסית יורדת): השורש שולט, $\Theta(f(n))$.</li>
</ul>
<div class="lesson-rule">🔑 בסדרה הנדסית עולה או יורדת הסכום הכולל הוא פעמים קבוע מהאיבר הגדול ביותר, ולכן אין גורם $\log n$. הגורם $\log n$ מופיע רק כשכל הרמות שוות.</div>
<div class="lesson-trap">⚠️ מספר הרמות הוא $\log_b n$ ולא $n$. מספר העלים הוא $n^{\log_b a}$ ולא $n$ (אלא אם $a=b$).</div>
` },
  questions: [
    { id: "C03-Q1",
      step: { type: "numeric",
        prompt: String.raw`בעץ הרקורסיה של $T(n)=3T(n/2)+n$ עם $n=16$: מהו סכום העבודה ברמה 2 (השורש הוא רמה 0)?`,
        answer: 36, tol: 0,
        explain: String.raw`ברמה 2 יש $3^2=9$ צמתים, כל אחד על קלט בגודל $16/4=4$ ועושה $4$ עבודה: $9\cdot4=36$. (ברמה 0 הסכום $16$, ברמה 1 הסכום $3\cdot8=24$.)` },
      recap: "רמה $i$: $a^i$ צמתים, כל אחד $f(n/b^i)$" },
    { id: "C03-Q2",
      question: String.raw`מהו פתרון הנוסחה $T(n)=2T(n/2)+n$ לפי עץ הרקורסיה?`,
      options: [
        { id: "a", value: String.raw`$\Theta(n)$` },
        { id: "b", value: String.raw`$\Theta(n^2)$` },
        { id: "c", value: String.raw`$\Theta(n\log n)$` },
        { id: "d", value: String.raw`$\Theta(\log n)$` },
      ],
      correctId: "c",
      explanation: String.raw`בכל רמה הסכום הוא בדיוק $n$ ($2^i\cdot n/2^i$), ויש $\log_2 n$ רמות: $\Theta(n\log n)$. $\Theta(n)$ סופר רמה אחת בלבד. $n^2$ ו-$\log n$ לא מתאימים לשום סכום.`,
      recap: "כל הרמות שוות: עומק כפול הסכום ברמה" },
    { id: "C03-Q3",
      question: String.raw`מהו פתרון הנוסחה $T(n)=4T(n/2)+n$ לפי עץ הרקורסיה?`,
      options: [
        { id: "a", value: String.raw`$\Theta(n\log n)$` },
        { id: "b", value: String.raw`$\Theta(n^2)$` },
        { id: "c", value: String.raw`$\Theta(n)$` },
        { id: "d", value: String.raw`$\Theta(n^2\log n)$` },
      ],
      correctId: "b",
      explanation: String.raw`הסכום ברמה $i$ הוא $4^i\cdot n/2^i=n\cdot2^i$: סדרה הנדסית עולה, והאיבר האחרון ($i=\log_2 n$) הוא $n\cdot n=n^2$. הסכום הכולל הוא פעמים קבוע ממנו: $\Theta(n^2)$, והם העלים ($4^{\log_2 n}=n^2$). אין גורם $\log n$ כי הרמות לא שוות.`,
      recap: "סכום עולה בין רמות: העלים שולטים, $\\Theta(n^{\\log_b a})$" },
    { id: "C03-Q4",
      question: String.raw`מהו פתרון הנוסחה $T(n)=2T(n/2)+n^2$ לפי עץ הרקורסיה?`,
      options: [
        { id: "a", value: String.raw`$\Theta(n^2\log n)$` },
        { id: "b", value: String.raw`$\Theta(n\log n)$` },
        { id: "c", value: String.raw`$\Theta(n^3)$` },
        { id: "d", value: String.raw`$\Theta(n^2)$` },
      ],
      correctId: "d",
      explanation: String.raw`הסכום ברמה $i$ הוא $2^i\cdot(n/2^i)^2=n^2/2^i$: סדרה הנדסית יורדת, שסכומה פחות מ-$2n^2$, והשורש לבדו נותן $n^2$. לכן $\Theta(n^2)$. $n^2\log n$ מניח רמות שוות, ו-$n^3$ גדול מכל חסם אפשרי.`,
      recap: "סכום יורד בין רמות: השורש שולט, $\\Theta(f(n))$" },
    { id: "C03-Q5",
      step: { type: "numeric",
        prompt: String.raw`בעץ של $T(n)=4T(n/2)+n$ עם $n=64$ הקלט מגיע לגודל 1 בעומק $\log_2 64=6$. כמה עלים יש בעץ?`,
        answer: 4096, tol: 0,
        explain: String.raw`בכל רמה מספר הצמתים מוכפל ב-4, ולכן בעומק 6 יש $4^6=4096$ צמתים. זה גם $n^{\log_2 4}=64^2=4096$.` },
      recap: "עלים: $a^{\\log_b n}=n^{\\log_b a}$" },
    { id: "C03-Q6",
      question: String.raw`מהו פתרון הנוסחה $T(n)=2T(n/2)+1$ לפי עץ הרקורסיה?`,
      options: [
        { id: "a", value: String.raw`$\Theta(\log n)$` },
        { id: "b", value: String.raw`$\Theta(n\log n)$` },
        { id: "c", value: String.raw`$\Theta(n)$` },
        { id: "d", value: String.raw`$\Theta(1)$` },
      ],
      correctId: "c",
      explanation: String.raw`הסכום ברמה $i$ הוא $2^i\cdot1=2^i$, סדרה הנדסית עולה עם סכום $1+2+\ldots+n=2n-1$ (העלים הם $n$). לכן $\Theta(n)$. $\log n$ הוא מספר הרמות ולא הסכום שלהן, ו-$n\log n$ מניח $n$ בכל רמה.`,
      recap: "סכום עולה: העלים שולטים, $\\Theta(n)$ עבור $2T(n/2)+1$" },
  ],
});
