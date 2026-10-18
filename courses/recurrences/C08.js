/* Recurrences course, level 8: boss, real exam questions */
COURSE_LEVEL("recurrences", {
  id: "C08", order: 8, icon: "🏆", title: "מבחן מסכם: שאלות מהמבחנים", boss: true,
  goal: "לפתור שאלות אמיתיות מהמבחנים בנוסחאות נסיגה: עץ לא מאוזן, \"הערך הנמוך ביותר של $a$\", מקרי משפט האב, ונוסחה שהמשפט לא פותר.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>זה סיכום הקורס. לפני כל שאלה בוחרים שיטה לפי צורת הנוסחה:</p>
<table>
<tr><td>$aT(n/b)+f(n)$ עם $a$ קבוע ו-$b>1$</td><td>משפט האב: משווים את $f$ לרף $n^{\log_b a}$</td></tr>
<tr><td>$f$ רק בגורם לוגריתמי מעל הרף</td><td>משפט האב לא חל: עץ רקורסיה</td></tr>
<tr><td>גדלים שונים $T(c_1n)+T(c_2n)+n^p$</td><td>עץ: $q=c_1^p+c_2^p$, כש-$q<1$ השורש שולט, כש-$q=1$ יש גורם $\log n$</td></tr>
<tr><td>$T(n-1)+f(n)$</td><td>פיתוח (סכום של $f$ על $n$ ערכים)</td></tr>
<tr><td>קריאות מקוד</td><td>קריאות כמקדם, גודל הקלט בסוגריים, העבודה הנוספת $f$</td></tr>
</table>
<div class="lesson-rule">🔑 במשפט האב: (1) $\log_b a$, (2) קטן / שווה / גדול ממנו ב-$f$, (3) מקרה 1: הרף, מקרה 2: הרף כפול $\log n$, מקרה 3: $f$ (אחרי בדיקת סדירות).</div>
<div class="lesson-rule">🔑 "הערך הנמוך ביותר של $a$": הערך הקריטי הוא $b^k$, ושם מופיע גורם $\log n$. מתחתיו הפתרון הוא $n^k$ בדיוק.</div>
<div class="lesson-trap">⚠️ בדיקה אחרונה: האם אחד המסיחים הוא "שלב ביניים"? למשל $n^2$ בלי ה-$\log n$, או $n$ במקום הרף.</div>
` },
  questions: [
    { bankId: "24B-A-Q17", recap: "$q=\\tfrac14+\\tfrac34=1$ עם $p=1$: $\\Theta(n\\log n)$" },
    { bankId: "24B-A-Q20", recap: "הערך הקריטי $a=b^k$, כאן $2^2=4$" },
    { bankId: "24B-B-Q9", recap: "$\\log_2 6>2$: הרף גדול מ-$f$, מקרה 1" },
    { bankId: "24S-A-Q41", recap: "$\\log_{\\sqrt3}3=2$ ו-$f\\approx n^2$: מקרה 2" },
    { bankId: "25B-A-Q1c", recap: "עץ לא מאוזן: $q=\\tfrac5{16}<1$, השורש שולט" },
    { bankId: "25B-B-Q1c", recap: "$f$ מעל הרף רק בגורם לוגריתמי: משפט האב לא חל" },
  ],
});
