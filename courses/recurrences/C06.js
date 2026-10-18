/* Recurrences course, level 6: when the master theorem does not apply */
COURSE_LEVEL("recurrences", {
  id: "C06", order: 6, icon: "🚫", title: "מתי משפט האב לא חל",
  goal: "לזהות נוסחה שמשפט האב לא פותר (צורה לא מתאימה, או $f$ שנמצאת \"בין\" המקרים) ולפתור אותה בעץ רקורסיה.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>משפט האב הוא כלי לצורה אחת בלבד, ולכן צריך לבדוק קודם אם הצורה מתאימה, ורק אחר כך לחשב.</p>
<h3>תנאי הצורה</h3>
<ul>
<li>כל תת-בעיה מוקטנת <b>בחילוק</b> באותו קבוע $b>1$. חיסור ($n-1$) או גדלים שונים ($n/2$ ו-$n/3$) לא מתאימים.</li>
<li>מספר הקריאות $a$ הוא <b>קבוע</b> (לא $n$) ו-$a\ge1$.</li>
<li>תת-הבעיה קטנה מהבעיה: $b>1$. אם יש $T(3n/2)$ אין התכנסות.</li>
<li>$f$ חיובית, ו<b>אחד מהמקרים 1, 2, 3 מתקיים</b>.</li>
</ul>
<h3>$f$ שנופלת בין המקרים</h3>
<p>עבור $T(n)=4T(n/2)+n^2\log n$ הרף הוא $n^2$, ו-$f=n^2\log n$ גדולה ממנו, אבל רק בגורם לוגריתמי ולא בחזקה $n^{\varepsilon}$. מקרה 2 נכשל ($f\ne\Theta(n^2)$), מקרה 3 נכשל ($\log n<n^{\varepsilon}$ לכל $\varepsilon>0$), ומקרה 1 נכשל. אין פתרון במשפט האב.</p>
<div class="lesson-ex"><b>פותרים בעץ.</b> ברמה $i$ יש $4^i$ צמתים בגודל $n/2^i$, והסכום הוא $4^i\cdot(n/2^i)^2\log(n/2^i)=n^2(\log n-i)$. סוכמים על $i=0,\ldots,\log n$:
$$n^2\sum_{i=0}^{\log n}(\log n-i)=n^2\cdot\tfrac{\log n(\log n+1)}2=\Theta(n^2\log^2 n).$$</div>
<div class="lesson-rule">🔑 רשימת בדיקה לפני שמשתמשים במשפט: חילוק בקבוע, $a$ קבוע, $b>1$, ו-$f$ נמצאת בבירור מתחת, על, או מעל הרף בחזקה.</div>
<div class="lesson-trap">⚠️ "לא ניתן לפתור במשפט האב" לא אומר "אין פתרון". לנוסחה יש פתרון, והוא מתקבל בעץ הרקורסיה.</div>
` },
  questions: [
    { id: "C06-Q1",
      question: String.raw`נתונה $T(n)=4T(n/2)+n^2\log n$. איזו טענה נכונה?`,
      options: [
        { id: "a", value: "אפשר לפתור במשפט האב לפי מקרה 1" },
        { id: "b", value: "אפשר לפתור במשפט האב לפי מקרה 2" },
        { id: "c", value: "אפשר לפתור במשפט האב לפי מקרה 3" },
        { id: "d", value: "אי אפשר לפתור במשפט האב" },
      ],
      correctId: "d",
      explanation: String.raw`$\log_2 4=2$, הרף הוא $n^2$. מקרה 1: $n^2\log n$ לא קטנה מ-$n^2$. מקרה 2: היא לא $\Theta(n^2)$. מקרה 3: היא לא $\Omega(n^{2+\varepsilon})$, כי $\log n<n^{\varepsilon}$ מתישהו. אף מקרה לא מתקיים.`,
      recap: "גורם לוגריתמי בלבד מעל הרף: אף מקרה לא מתקיים" },
    { id: "C06-Q2",
      question: String.raw`מהו הפתרון של $T(n)=4T(n/2)+n^2\log n$ לפי עץ הרקורסיה?`,
      options: [
        { id: "a", value: String.raw`$\Theta(n^2\log n)$` },
        { id: "b", value: String.raw`$\Theta(n^3)$` },
        { id: "c", value: String.raw`$\Theta(n^2)$` },
        { id: "d", value: String.raw`$\Theta(n^2\log^2 n)$` },
      ],
      correctId: "d",
      explanation: String.raw`סכום רמה $i$ הוא $n^2(\log n-i)$. הסכום על כל הרמות הוא $n^2(\log n+(\log n-1)+\ldots+0)=\Theta(n^2\log^2 n)$. $n^2\log n$ הוא סכום של רמה אחת בלבד (השורש). $n^2$ מתעלם מהלוג, ו-$n^3$ גדול מדי.`,
      recap: "סכום הרמות הוא $n^2\\cdot(\\log n+\\ldots+1)$, כלומר $n^2\\log^2 n$" },
    { id: "C06-Q3",
      step: { type: "numeric",
        prompt: String.raw`בעץ של $T(n)=4T(n/2)+n^2\log_2 n$ עם $n=2^{10}$: מהו סכום העבודה ברמה 3 (השורש הוא רמה 0), מחולק ב-$n^2$?`,
        answer: 7, tol: 0,
        explain: String.raw`ברמה 3 יש $4^3$ צמתים בגודל $n/8=2^7$. כל אחד עושה $(n/8)^2\log_2(n/8)=n^2/64\cdot7$. הסכום: $64\cdot n^2/64\cdot7=7n^2$. בנוסחה: $n^2(\log n-i)=n^2(10-3)=7n^2$.` },
      recap: "ברמה $i$ הסכום הוא $n^2(\\log n-i)$" },
    { id: "C06-Q4",
      question: String.raw`איזו מהנוסחאות הבאות ניתנת לפתרון במשפט האב?`,
      options: [
        { id: "a", value: String.raw`$T(n)=T(n-1)+n$` },
        { id: "b", value: String.raw`$T(n)=T(n/2)+T(n/3)+n$` },
        { id: "c", value: String.raw`$T(n)=n\,T(n/2)+1$` },
        { id: "d", value: String.raw`$T(n)=3T(n/2)+n$` },
      ],
      correctId: "d",
      explanation: String.raw`רק $T(n)=3T(n/2)+n$ בצורה $aT(n/b)+f(n)$ עם $a=3$ קבוע ו-$b=2$ (ויוצא מקרה 1, $\Theta(n^{\log_2 3})$). $T(n-1)$ מקטינה בחיסור. $T(n/2)+T(n/3)$ מקטינה לשני גדלים. ב-$nT(n/2)$ המקדם אינו קבוע.`,
      recap: "חילוק בקבוע, אותו גודל בכל תת-בעיה, $a$ קבוע" },
    { id: "C06-Q5",
      question: String.raw`מדוע משפט האב לא חל על $T(n)=T(n-1)+n$?`,
      options: [
        { id: "a", value: "כי $f(n)=n$ גדולה מדי" },
        { id: "b", value: "כי הקלט מוקטן בחיסור ולא בחילוק בקבוע $b>1$" },
        { id: "c", value: "כי $a=1$ אסור במשפט" },
        { id: "d", value: "כי $f$ חייבת להיות קבועה" },
      ],
      correctId: "b",
      explanation: String.raw`בצורה $T(n/b)$ הגודל מתחלק, אבל כאן הוא יורד ב-1. זו לא צורה של משפט האב, ולכן פותרים בפיתוח: $\Theta(n^2)$. $a=1$ מותר (ראו $T(n/4)+1024$). $f$ לא חייבת להיות קבועה או קטנה.`,
      recap: "$T(n-1)$ נפתרת בפיתוח, לא במשפט האב" },
    { id: "C06-Q6",
      question: String.raw`נתונה $T(n)=T\left(\frac{3n}{2}\right)+n$. מה נכון?`,
      options: [
        { id: "a", value: "אפשר לפתור במשפט האב לפי מקרה 3" },
        { id: "b", value: "אפשר לפתור במשפט האב לפי מקרה 1" },
        { id: "c", value: "אי אפשר, כי תת-הבעיה ($3n/2$) גדולה מהבעיה, כלומר $b<1$" },
        { id: "d", value: "אי אפשר, כי $f(n)=n$ קטנה מדי" },
      ],
      correctId: "c",
      explanation: String.raw`כתוב כצורת המשפט, $T(n/b)$ עם $b=\tfrac23<1$. הקלט גדל בכל קריאה, ולכן הרקורסיה לא מגיעה לבסיס והמשפט דורש $b>1$. המקרים 1 ו-3 לא נבדקים כלל. $f(n)=n$ אינה הבעיה.`,
      recap: "משפט האב דורש $b>1$: תת-בעיה קטנה מהבעיה" },
  ],
});
