/* Heaps course - level 9: boss, real exam questions */
COURSE_LEVEL("heaps", {
  id: "C09", order: 9, icon: "🏆", title: "מבחן גמר: שאלות אמיתיות על ערימות",
  goal: "לפתור שאלות ערימה אמיתיות מהמבחנים: מבנה, זמני ריצה, הפחתה למיון ותכנון מבנה.",
  boss: true,
  source: "ai-verified",
  lesson: { html: String.raw`
<p>זה מבחן הגמר של הקורס: שש שאלות מהמבחנים. לפני שמתחילים, חמש שורות:</p>
<div class="lesson-rule">🔑
<ul>
<li>מוסכמה: מערך מאינדקס 0, בנים $2i+1,2i+2$, אב $\lfloor(i-1)/2\rfloor$ (ובדקו את המוסכמה בשאלה).</li>
<li>גובה ערימה $\lfloor\log_2 n\rfloor$, ולכן מינימום צמתים בגובה $h$ הוא $2^h$.</li>
<li>build-heap הוא $O(n)$. איחוד ערימות במערך ובדיקת ערימה: $\Theta(n)$.</li>
<li>חסם תחתון על פעולה: הפחתה למיון בהשוואות ($\Omega(n\log n)$) דרך build-heap, הפעולה, וקריאה ממוינת.</li>
<li>תכנון: ערימה + שדה אינדקס בכל רשומה נותנת Delete(x) ב-$O(\log n)$.</li>
</ul></div>
<p>בשאלת התכנון (האחרונה) אין תשובה לסמן: כותבים את הפתרון בעצמכם, פותחים את הפתרון הרשמי ומסמנים לעצמכם אם הצלחתם.</p>
` },
  questions: [
    { bankId: "24B-B-Q30", recap: "מינימום צמתים בערימה בגובה h הוא 2^h" },
    { bankId: "22S-A-Q1d", recap: "בדיקה אם מערך הוא ערימה: Θ(n), עוברים על החצי הראשון" },
    { bankId: "25B-B-Q5a", recap: "איחוד ערימות במערך: copy + build-heap, O(n) ולא O(log n)" },
    { bankId: "24B-A-Q43", recap: "שדה עוקב: קריאה ממוינת ⇒ Ω(n log n), ויש O(n log n)" },
    { bankId: "24S-A-Q7", recap: "ערימה ל-AVL: inorder ממוין ⇒ Θ(n log n)" },
    { bankId: "24B-B-Q100", recap: "ערימת מינימום + אינדקס בכל רשומה: Delete(x) ב-O(log n)" },
  ],
});
