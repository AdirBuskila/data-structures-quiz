/* Recurrences course, level 2: iteration (unrolling) */
COURSE_LEVEL("recurrences", {
  id: "C02", order: 2, icon: "🔁", title: "פיתוח הנוסחה (איטרציה)",
  goal: "לפתור נוסחה פשוטה בהצבה חוזרת: לפתח כמה צעדים, לזהות את הדפוס בצעד $k$, ולעצור בבסיס.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>הדרך הבסיסית לפתור נוסחת נסיגה היא להציב אותה בעצמה שוב ושוב, עד שרואים את הדפוס.</p>
<h3>המתכון</h3>
<ul>
<li>כותבים את $T(n)$, מציבים את הנוסחה במקום $T$ שבצד ימין, ושוב.</li>
<li>אחרי $k$ צעדים כותבים תבנית כללית: מה נצבר עד כה, ועוד $T$ של הגודל שנשאר, למשל $T(n-k)$ או $T(n/2^k)$.</li>
<li>עוצרים כשהגודל מגיע לבסיס: $n-k=1$ ב"חיסור", או $n/2^k=1$, כלומר $k=\log_2 n$, ב"חילוק".</li>
<li>סוכמים את מה שנצבר.</li>
</ul>
<div class="lesson-ex"><b>דוגמה.</b> $T(n)=T(n-1)+n$.
$$T(n)=n+T(n-1)=n+(n-1)+T(n-2)=\ldots=n+(n-1)+\ldots+2+T(1).$$
זה הסכום $1+2+\ldots+n=\tfrac{n(n+1)}{2}$, ולכן $\Theta(n^2)$.</div>
<h3>ארבעה סכומים שחוזרים</h3>
<table>
<tr><td>הוספת קבוע בכל צעד, $n$ צעדים</td><td>$c\cdot n=\Theta(n)$</td></tr>
<tr><td>הוספת $n,\,n-1,\,n-2,\ldots$</td><td>$\tfrac{n(n+1)}{2}=\Theta(n^2)$</td></tr>
<tr><td>חילוק לחצי, $\log_2 n$ צעדים, קבוע בכל צעד</td><td>$c\log_2 n=\Theta(\log n)$</td></tr>
<tr><td>הוספת $n,\,\tfrac n2,\,\tfrac n4,\ldots$ (סדרה הנדסית יורדת)</td><td>פחות מ-$2n$, כלומר $\Theta(n)$</td></tr>
</table>
<div class="lesson-rule">🔑 מתחילים מלכתוב שלושה צעדים במפורש. אם הדפוס לא ברור, כותבים עוד אחד.</div>
<div class="lesson-trap">⚠️ מספר הצעדים תלוי בצורת ההקטנה: חיסור נותן $n$ צעדים, חילוק נותן $\log n$ צעדים.</div>
<p>כשהנוסחה מכפילה את עצמה, כמו $T(n)=2T(n-1)+1$, כל צעד מכפיל את מספר האיברים, ויוצא מספר שגדל כמו $2^n$.</p>
` },
  questions: [
    { id: "C02-Q1",
      question: String.raw`מהו פתרון הנוסחה $T(n)=T(n-1)+5$, עם $T(1)=O(1)$?`,
      options: [
        { id: "a", value: String.raw`$\Theta(\log n)$` },
        { id: "b", value: String.raw`$\Theta(n)$` },
        { id: "c", value: String.raw`$\Theta(n^2)$` },
        { id: "d", value: String.raw`$\Theta(1)$` },
      ],
      correctId: "b",
      explanation: String.raw`כל צעד מוסיף $5$ ויש $n-1$ צעדים עד הבסיס: $T(n)=5(n-1)+T(1)=\Theta(n)$. $\log n$ מתאים להקטנה בחילוק, לא בחיסור. $n^2$ היה נכון אילו הנוסף היה גדל עם $n$.`,
      recap: "קבוע בכל צעד, $n$ צעדים: $\\Theta(n)$" },
    { id: "C02-Q2",
      question: String.raw`מהו פתרון הנוסחה $T(n)=T(n-1)+n$, עם $T(1)=O(1)$?`,
      options: [
        { id: "a", value: String.raw`$\Theta(n)$` },
        { id: "b", value: String.raw`$\Theta(n\log n)$` },
        { id: "c", value: String.raw`$\Theta(n^2)$` },
        { id: "d", value: String.raw`$\Theta(2^n)$` },
      ],
      correctId: "c",
      explanation: String.raw`$T(n)=n+(n-1)+\ldots+2+T(1)=\tfrac{n(n+1)}{2}-1+T(1)=\Theta(n^2)$. $\Theta(n)$ שוכח שהנוסף גדל. $n\log n$ שייך לחלוקה בחצי. $2^n$ שייך להכפלה.`,
      recap: "$n+(n-1)+\\ldots+1=\\tfrac{n(n+1)}2$, כלומר $\\Theta(n^2)$" },
    { id: "C02-Q3",
      question: String.raw`מהו פתרון הנוסחה $T(n)=T(n/2)+1$, עם $T(1)=O(1)$?`,
      options: [
        { id: "a", value: String.raw`$\Theta(\log n)$` },
        { id: "b", value: String.raw`$\Theta(n)$` },
        { id: "c", value: String.raw`$\Theta(\sqrt{n})$` },
        { id: "d", value: String.raw`$\Theta(1)$` },
      ],
      correctId: "a",
      explanation: String.raw`אחרי $k$ צעדים $T(n)=k+T(n/2^k)$. עוצרים כש-$n/2^k=1$, כלומר $k=\log_2 n$, ומקבלים $\log_2 n+T(1)=\Theta(\log n)$. $\Theta(n)$ היה נכון להקטנה ב-1 בכל צעד. $\Theta(1)$ מתעלם מכך שיש $\log n$ צעדים.`,
      recap: "חילוק לחצי עם קבוע בכל צעד: $\\log n$ צעדים, $\\Theta(\\log n)$" },
    { id: "C02-Q4",
      step: { type: "numeric",
        prompt: String.raw`נתון $T(n)=T(n-1)+n$ ו-$T(1)=1$. מהו $T(100)$?`,
        answer: 5050, tol: 0,
        explain: String.raw`$T(100)=100+99+\ldots+2+T(1)=1+2+\ldots+100=\tfrac{100\cdot101}{2}=5050$.` },
      recap: "$T(n)=\\tfrac{n(n+1)}2$ כש-$T(1)=1$" },
    { id: "C02-Q5",
      step: { type: "text", normalize: "complexity", accept: ["Θ(n)", "O(n)", "Theta(n)"],
        prompt: String.raw`פתחו את $T(n)=T(n/2)+n$ ורשמו את הפתרון בצורה $\Theta(\cdot)$, באנגלית.`,
        explain: String.raw`$T(n)=n+\tfrac n2+\tfrac n4+\ldots\le n\cdot\tfrac{1}{1-1/2}=2n$, ו-$T(n)\ge n$ בגלל האיבר הראשון, ולכן $\Theta(n)$ ולא $n\log n$: הסכום הוא סדרה הנדסית יורדת ולא $\log n$ איברים שווים.` },
      recap: "$n+\\tfrac n2+\\tfrac n4+\\ldots<2n$, כלומר $\\Theta(n)$" },
    { id: "C02-Q6",
      question: String.raw`מהו הסדר הגדול של $T(n)=2T(n-1)+1$, עם $T(1)=1$? (פתחו כמה צעדים: $T(n)=1+2T(n-1)=1+2+4T(n-2)=\ldots$)`,
      options: [
        { id: "a", value: String.raw`$\Theta(n)$` },
        { id: "b", value: String.raw`$\Theta(n^2)$` },
        { id: "c", value: String.raw`$\Theta(2^n)$` },
        { id: "d", value: String.raw`$\Theta(n\log n)$` },
      ],
      correctId: "c",
      explanation: String.raw`אחרי $k$ צעדים: $T(n)=1+2+4+\ldots+2^{k-1}+2^kT(n-k)$. בבסיס $k=n-1$ ויוצא $2^{n-1}-1+2^{n-1}=2^n-1$. כל שאר האפשרויות הן פולינומיות, ולא מתאימות לשני ענפים בכל צעד שמתכווץ רק ב-1.`,
      recap: "$a>1$ עם הקטנה בחיסור נותן חזקה אקספוננציאלית" },
  ],
});
