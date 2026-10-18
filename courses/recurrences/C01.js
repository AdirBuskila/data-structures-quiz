/* Recurrences course, level 1: from code to a recurrence */
COURSE_LEVEL("recurrences", {
  id: "C01", order: 1, icon: "🧩", title: "מקוד לנוסחת נסיגה",
  goal: "לקרוא פונקציה רקורסיבית ולכתוב את נוסחת הנסיגה של זמן הריצה שלה: כמה קריאות, באיזה גודל, וכמה עבודה בכל קריאה.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>זמן הריצה של פונקציה רקורסיבית מתואר בנוסחת נסיגה: $T(n)$ הוא הזמן על קלט בגודל $n$, והנוסחה אומרת אותו דרך הזמן על קלטים קטנים יותר.</p>
<h3>המתכון</h3>
<ul>
<li><b>כמה קריאות רקורסיביות</b> יש בגוף הפונקציה? זה המקדם $a$ שלפני $T$. קריאה בתוך לולאה נספרת פעם אחת לכל סיבוב.</li>
<li><b>מה גודל הקלט בכל קריאה?</b> זה מה שבתוך הסוגריים: $T(n/2)$, $T(n-1)$, $T(3n/4)$...</li>
<li><b>כמה עבודה לא רקורסיבית</b> נעשית בכל קריאה (השוואות, לולאה, העתקה)? זה $f(n)$, והוא נכתב בסוף: $+f(n)$.</li>
<li><b>בסיס:</b> כשהקלט קטן מספיק, $T(1)=O(1)$.</li>
</ul>
<div class="lesson-ex"><b>דוגמה פתורה.</b> מיון מיזוג מחלק את המערך לשני חצאים, קורא לעצמו על כל חצי, ואז ממזג בזמן שמתכווץ לינארי ב-$n$. שתי קריאות, כל אחת על $n/2$, ועוד $n$ עבודה:
$$T(n)=2T(n/2)+n,\qquad T(1)=O(1).$$</div>
<div class="lesson-rule">🔑 הנוסחה מתארת את <b>העבודה בקריאה אחת</b> ואת <b>הקריאות שהיא פותחת</b>. לא סוכמים בה את כל העץ, זה התפקיד של הפתרון.</div>
<div class="lesson-trap">⚠️ שתי קריאות רקורסיביות הן לא $T(2n)$ ולא $T(n)^2$. הן $2T(\cdot)$, כי הזמנים מתחברים.</div>
<p>כדי לחשב ערך מסוים מציבים שוב ושוב עד הבסיס. למשל אם $T(n)=2T(n/2)+n$ ו-$T(1)=1$, אז $T(2)=2T(1)+2=4$.</p>
` },
  questions: [
    { id: "C01-Q1",
      question: "מהי נוסחת הנסיגה של זמן הריצה של הפונקציה?\n```\ndef f(n):\n    if n <= 1:\n        return 1\n    return f(n // 2) + 1\n```",
      options: [
        { id: "a", value: String.raw`$T(n)=2T(n/2)+O(1)$` },
        { id: "b", value: String.raw`$T(n)=T(n/2)+O(1)$` },
        { id: "c", value: String.raw`$T(n)=T(n-1)+O(1)$` },
        { id: "d", value: String.raw`$T(n)=T(n/2)+O(n)$` },
      ],
      correctId: "b",
      explanation: String.raw`קריאה רקורסיבית **אחת**, על $n/2$, ועבודה קבועה (בדיקה, חילוק, חיבור). לכן $T(n)=T(n/2)+O(1)$. $2T(n/2)$ סופר שתי קריאות. $T(n-1)$ הוא גודל אחר. $O(n)$ מניח לולאה שאין בקוד.`,
      recap: "קריאה אחת על חצי עם עבודה קבועה: $T(n/2)+O(1)$" },
    { id: "C01-Q2",
      question: "הפונקציה מקבלת מערך $a$ ומחזירה את המקסימום בטווח $[lo,hi)$, כשגודל הקלט הוא $n=hi-lo$. מהי נוסחת הנסיגה?\n```\ndef g(a, lo, hi):\n    if hi - lo <= 1:\n        return a[lo]\n    mid = (lo + hi) // 2\n    x = g(a, lo, mid)\n    y = g(a, mid, hi)\n    return max(x, y)\n```",
      options: [
        { id: "a", value: String.raw`$T(n)=T(n/2)+O(1)$` },
        { id: "b", value: String.raw`$T(n)=2T(n/2)+O(n)$` },
        { id: "c", value: String.raw`$T(n)=2T(n/2)+O(1)$` },
        { id: "d", value: String.raw`$T(n)=T(n-1)+O(1)$` },
      ],
      correctId: "c",
      explanation: String.raw`שתי קריאות, כל אחת על חצי מהטווח ($n/2$), ובין הקריאות רק חישוב $mid$ והשוואת $\max$, כלומר $O(1)$. לכן $T(n)=2T(n/2)+O(1)$. $T(n/2)$ סופר קריאה אחת בלבד. $O(n)$ היה נכון אילו היה כאן מיזוג או העתקה, ואין. $T(n-1)$ לא מתאים לחלוקה באמצע.`,
      recap: "שתי קריאות על חצאים ובלי לולאה: $2T(n/2)+O(1)$" },
    { id: "C01-Q3",
      question: "מהי נוסחת הנסיגה של זמן הריצה של הפונקציה?\n```\ndef h(n):\n    if n <= 1:\n        return 0\n    s = 0\n    for i in range(n):\n        s += i\n    return s + h(n - 1)\n```",
      options: [
        { id: "a", value: String.raw`$T(n)=T(n-1)+O(n)$` },
        { id: "b", value: String.raw`$T(n)=T(n-1)+O(1)$` },
        { id: "c", value: String.raw`$T(n)=nT(n-1)+O(1)$` },
        { id: "d", value: String.raw`$T(n)=T(n/2)+O(n)$` },
      ],
      correctId: "a",
      explanation: String.raw`קריאה אחת, על $n-1$ (לא על חצי), ובכל קריאה לולאה של $n$ סיבובים, כלומר $O(n)$. לכן $T(n)=T(n-1)+O(n)$. בלי הלולאה היה $O(1)$. המקדם $n$ לפני $T$ היה אומר $n$ קריאות. $n/2$ לא קורה בקוד.`,
      recap: "לולאה לפני הקריאה היא $f(n)$; הארגומנט הוא גודל הקלט החדש" },
    { id: "C01-Q4",
      question: "מהי נוסחת הנסיגה של זמן הריצה של הפונקציה (בגודל $n$)?\n```\ndef p(n):\n    if n <= 1:\n        return\n    p(n // 4)\n    p(3 * n // 4)\n    for i in range(n):\n        pass\n```",
      options: [
        { id: "a", value: String.raw`$T(n)=2T(n/2)+O(n)$` },
        { id: "b", value: String.raw`$T(n)=T(n/4)+T(3n/4)+O(1)$` },
        { id: "c", value: String.raw`$T(n)=T(n/4)+T(3n/4)+O(n)$` },
        { id: "d", value: String.raw`$T(n)=T(n/4)+O(n)$` },
      ],
      correctId: "c",
      explanation: String.raw`שתי קריאות **בגדלים שונים**: $n/4$ ו-$3n/4$, ולכן שני איברי $T$ נפרדים. הלולאה היא $O(n)$. $2T(n/2)$ מניח שני חצאים שווים. בלי הלולאה היה $O(1)$. $T(n/4)$ לבד שוכח את הקריאה השנייה.`,
      recap: "גדלים שונים נכתבים כאיברי $T$ נפרדים, ולא כ-$aT$" },
    { id: "C01-Q5",
      question: "פונקציה מחלקת את הקלט לשלושה חלקים שווים וקוראת לעצמה על כל חלק, ואז עוברת פעם אחת על כל $n$ האיברים. מהי נוסחת הנסיגה?",
      options: [
        { id: "a", value: String.raw`$T(n)=T(n/3)+O(n)$` },
        { id: "b", value: String.raw`$T(n)=3T(n/3)+O(1)$` },
        { id: "c", value: String.raw`$T(n)=3T(n)+O(n)$` },
        { id: "d", value: String.raw`$T(n)=3T(n/3)+O(n)$` },
      ],
      correctId: "d",
      explanation: String.raw`שלוש קריאות ($a=3$), כל אחת על שליש ($n/3$), ועוד מעבר אחד על $n$ איברים. $T(n/3)$ סופר קריאה אחת. בלי המעבר היה $O(1)$. $3T(n)$ היה קורא על קלט שלא התקצר, וזה אינסופי.`,
      recap: "$a$ = מספר הקריאות, $b$ = יחס ההקטנה, $f(n)$ = העבודה בקריאה אחת" },
    { id: "C01-Q6",
      step: { type: "numeric",
        prompt: String.raw`נוסחת הנסיגה היא $T(n)=2T(n/2)+n$ עם $T(1)=1$. מהו $T(8)$?`,
        answer: 32, tol: 0,
        explain: String.raw`מהבסיס כלפי מעלה: $T(2)=2\cdot1+2=4$, $T(4)=2\cdot4+4=12$, $T(8)=2\cdot12+8=32$.` },
      recap: "מציבים כלפי מעלה מהבסיס: $T(1)\to T(2)\to T(4)\to T(8)$" },
  ],
});
