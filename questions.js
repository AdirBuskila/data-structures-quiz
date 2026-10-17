window.OPEN_BANK = {
 "meta": {
  "course": {
   "slug": "data-structures",
   "title": "מבני נתונים",
   "description": "תרגול מבחנים - מבני נתונים",
   "accent": "#2dd4bf",
   "accent2": "#7c3aed",
   "storePrefix": "data-structures",
   "needHelp": [
    {
     "id": "recurrences",
     "titleHe": "נוסחאות נסיגה וסדר גודל",
     "icon": "📐",
     "topic": "recurrences",
     "entryLabelHe": "צריך עזרה בנוסחאות נסיגה?"
    },
    {
     "id": "avl",
     "titleHe": "עצי AVL: הכנסה, מחיקה וגלגולים",
     "icon": "🌳",
     "topic": "avl",
     "entryLabelHe": "צריך עזרה בעצי AVL?"
    },
    {
     "id": "hashing",
     "titleHe": "טבלאות גיבוב",
     "icon": "🗂️",
     "topic": "hashing",
     "entryLabelHe": "צריך עזרה בטבלאות גיבוב?"
    },
    {
     "id": "heaps",
     "titleHe": "ערימות ותור עדיפויות",
     "icon": "⛰️",
     "topic": "heaps",
     "entryLabelHe": "צריך עזרה בערימות?"
    }
   ]
  },
  "topics": [
   {
    "key": "complexity",
    "label": "סיבוכיות וחסמים אסימפטוטיים"
   },
   {
    "key": "recurrences",
    "label": "נוסחאות נסיגה ומשפט האב"
   },
   {
    "key": "linear_ds",
    "label": "מערך, מחסנית, תור ורשימה מקושרת"
   },
   {
    "key": "trees_induction",
    "label": "עצים בינאריים, סריקות והוכחות באינדוקציה"
   },
   {
    "key": "bst",
    "label": "עצי חיפוש בינאריים"
   },
   {
    "key": "avl",
    "label": "עצי AVL"
   },
   {
    "key": "hashing",
    "label": "טבלאות גיבוב"
   },
   {
    "key": "heaps",
    "label": "ערימות ותור עדיפויות"
   },
   {
    "key": "sorting_selection",
    "label": "מיונים, חסם תחתון ובחירה"
   },
   {
    "key": "union_find",
    "label": "קבוצות זרות"
   },
   {
    "key": "ds_design",
    "label": "תכנון אלגוריתם ומבנה נתונים"
   }
  ],
  "kinds": [
   "computation",
   "proof",
   "algorithm",
   "mcq",
   "truefalse"
  ],
  "built": "2026-10-17T16:06:16Z",
  "exams": [
   {
    "examCode": "24B-A",
    "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
    "year": 2024,
    "source": "exam",
    "examDate": "16.7.2024"
   },
   {
    "examCode": "24B-B",
    "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
    "year": 2024,
    "source": "exam",
    "examDate": "8.8.2024"
   },
   {
    "examCode": "24S-A",
    "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
    "year": 2024,
    "source": "exam",
    "examDate": "14.10.2024"
   },
   {
    "examCode": "25B-A",
    "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד א (10.7.25)",
    "year": 2025,
    "source": "exam",
    "examDate": "10.7.2025"
   },
   {
    "examCode": "25B-B",
    "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד ב (7.8.25)",
    "year": 2025,
    "source": "exam",
    "examDate": "7.8.2025"
   },
   {
    "examCode": "25B-C",
    "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד מיוחד (14.9.25)",
    "year": 2025,
    "source": "exam",
    "examDate": "14.9.2025"
   },
   {
    "examCode": "25S-A",
    "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ה, מועד א (20.10.25)",
    "year": 2025,
    "source": "exam",
    "examDate": "20.10.2025"
   },
   {
    "examCode": "25S-B",
    "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ה, מועד ב (20.11.25)",
    "year": 2025,
    "source": "exam",
    "examDate": "20.11.2025"
   }
  ],
  "counts": {
   "total": 156,
   "contexts": 15,
   "math": 462,
   "steps": 39
  }
 },
 "contexts": {
  "24S-A-c1": {
   "kind": "image",
   "title": "רשימה דו ראשית (שאלה 1)",
   "image": "images/exams/24S-A-c1.png",
   "caption": "שתי רשימות מקושרות המתחברות לרשימה אחת.",
   "id": "24S-A-c1",
   "captionHtml": "שתי רשימות מקושרות המתחברות לרשימה אחת.",
   "titleHtml": "רשימה דו ראשית (שאלה 1)"
  },
  "25B-A-c1": {
   "kind": "code",
   "title": "הפונקציה MASHU (שאלה 1)",
   "code": "MASHU(Q)\n    If not IS-EMPTY(Q)\n        x = DEQUEUE(Q)\n        MASHU(Q)\n        ENQUEUE(x, Q)",
   "id": "25B-A-c1",
   "codeHtml": "MASHU(Q)\n    If not IS-EMPTY(Q)\n        x = DEQUEUE(Q)\n        MASHU(Q)\n        ENQUEUE(x, Q)",
   "titleHtml": "הפונקציה MASHU (שאלה 1)"
  },
  "25B-A-c2": {
   "kind": "text",
   "title": "הגדרת ערימה-d (שאלה 2)",
   "text": "נגדיר ערימה-$d$ להיות עץ כמעט שלם בו לכל צומת יש $d$ ילדים וכל אב גדול מכל בניו.",
   "id": "25B-A-c2",
   "textHtml": "נגדיר ערימה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> להיות עץ כמעט שלם בו לכל צומת יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> ילדים וכל אב גדול מכל בניו.",
   "titleHtml": "הגדרת ערימה-d (שאלה 2)"
  },
  "25B-A-c3": {
   "kind": "text",
   "title": "עצי פיבונאצ'י (שאלה 3)",
   "text": "להלן תזכורת להגדרת עצי פיבונאצ'י:\n\n- $F_0$ הוא עץ בן צומת אחד.\n- $F_1$ הוא עץ בן שני צמתים (שורש וילד אחד).\n- $F_i$ הוא עץ שבשורשו שני תתי-עצים: $F_{i-2}$ ו-$F_{i-1}$.",
   "id": "25B-A-c3",
   "textHtml": "להלן תזכורת להגדרת עצי פיבונאצ'י:<br><br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>F</mi><mn>0</mn></msub></mrow><annotation encoding=\"application/x-tex\">F_0</annotation></semantics></math></span> הוא עץ בן צומת אחד.<br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>F</mi><mn>1</mn></msub></mrow><annotation encoding=\"application/x-tex\">F_1</annotation></semantics></math></span> הוא עץ בן שני צמתים (שורש וילד אחד).<br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>F</mi><mi>i</mi></msub></mrow><annotation encoding=\"application/x-tex\">F_i</annotation></semantics></math></span> הוא עץ שבשורשו שני תתי-עצים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>F</mi><mrow><mi>i</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">F_{i-2}</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>F</mi><mrow><mi>i</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">F_{i-1}</annotation></semantics></math></span>.",
   "titleHtml": "עצי פיבונאצ'י (שאלה 3)"
  },
  "25B-A-c4": {
   "kind": "text",
   "title": "טבלת הגיבוב של שאלה 4",
   "text": "נתונה טבלת גיבוב בגודל $m=10$ המשתמשת בגיבוב כפול (double hashing) עם פונקציית הגיבוב הבאה:\n\n$H(k,i) = h_1(k) + i \\cdot h_2(k)$\n\nכאשר $h_1(k) = k \\bmod 10$, $h_2(k) = 1 + k \\bmod 7$.",
   "id": "25B-A-c4",
   "textHtml": "נתונה טבלת גיבוב בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">m=10</annotation></semantics></math></span> המשתמשת בגיבוב כפול (double hashing) עם פונקציית הגיבוב הבאה:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>H</mi><mo stretchy=\"false\">(</mo><mi>k</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><msub><mi>h</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>k</mi><mo stretchy=\"false\">)</mo><mo>+</mo><mi>i</mi><mo>⋅</mo><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>k</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">H(k,i) = h_1(k) + i \\cdot h_2(k)</annotation></semantics></math></span><br><br>כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>k</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>k</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">h_1(k) = k \\bmod 10</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>k</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mi>k</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">h_2(k) = 1 + k \\bmod 7</annotation></semantics></math></span>.",
   "titleHtml": "טבלת הגיבוב של שאלה 4"
  },
  "25B-B-c1": {
   "kind": "code",
   "title": "הפונקציה MYSTERY (שאלה 1)",
   "code": "MYSTERY(S):\n    if not IS-EMPTY(S)\n        x = POP(S)\n        MYSTERY(S)\n        if IS-EMPTY(S)\n            PUSH(S, x)\n        else\n            x = TOP(S)\n            PUSH(S, x)",
   "id": "25B-B-c1",
   "codeHtml": "MYSTERY(S):\n    if not IS-EMPTY(S)\n        x = POP(S)\n        MYSTERY(S)\n        if IS-EMPTY(S)\n            PUSH(S, x)\n        else\n            x = TOP(S)\n            PUSH(S, x)",
   "titleHtml": "הפונקציה MYSTERY (שאלה 1)"
  },
  "25B-B-c2": {
   "kind": "text",
   "title": "הגדרת חסם תחתון (שאלה 2)",
   "text": "תזכורת: נאמר ש-$g$ הוא חסם תחתון של $f$ ונסמן $f(n) = \\Omega(g(n))$ אם קיימים קבועים $c, n_0 > 0$ כך ש: $f(n) \\ge c \\cdot g(n)$ מתקיים לכל $n \\ge n_0$ ($n_0 \\in \\mathbb{N}$, $c \\in \\mathbb{R}^+$).",
   "id": "25B-B-c2",
   "textHtml": "תזכורת: נאמר ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>g</mi></mrow><annotation encoding=\"application/x-tex\">g</annotation></semantics></math></span> הוא חסם תחתון של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi></mrow><annotation encoding=\"application/x-tex\">f</annotation></semantics></math></span> ונסמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(n) = \\Omega(g(n))</annotation></semantics></math></span> אם קיימים קבועים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mo separator=\"true\">,</mo><msub><mi>n</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">c, n_0 &gt; 0</annotation></semantics></math></span> כך ש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>≥</mo><mi>c</mi><mo>⋅</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(n) \\ge c \\cdot g(n)</annotation></semantics></math></span> מתקיים לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><msub><mi>n</mi><mn>0</mn></msub></mrow><annotation encoding=\"application/x-tex\">n \\ge n_0</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>n</mi><mn>0</mn></msub><mo>∈</mo><mi mathvariant=\"double-struck\">N</mi></mrow><annotation encoding=\"application/x-tex\">n_0 \\in \\mathbb{N}</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">R</mi><mo>+</mo></msup></mrow><annotation encoding=\"application/x-tex\">c \\in \\mathbb{R}^+</annotation></semantics></math></span>).",
   "titleHtml": "הגדרת חסם תחתון (שאלה 2)"
  },
  "25B-B-c3": {
   "kind": "text",
   "title": "מערכת ניהול תהליכים (שאלה 3)",
   "text": "במערכת ניהול תהליכים יש צורך לנהל מידע עבור אלפי תהליכים.\n\nלכל תהליך יש מזהה ייחודי (pid: Process ID) ונתונים מצורפים: זמן התחלה, סטטוס.\n\nנדרש מבנה נתונים שיתמוך בפעולות הבאות, בזמנים המבוקשים:\n1. `initFromDataFile(data-file)` פעולת איתחול המבנה מקובץ הנתונים. זמן ריצה $O(n^2)$ (רמז: בסיכוי גבוה זמן הריצה בפועל לינארי בגודל הקלט, ז\"א $O(n)$).\n2. `lookup(pid)` מציאת הנתונים של תהליך לפי המזהה. זמן ריצה $O(1)$.\n3. `delete(pid)` הסרת תהליך מהמערכת. זמן ריצה $O(\\log n)$.\n4. `set_status(pid, new_status)` מעדכן סטטוס התהליך (ל\"הסתיים\" או \"פעיל\"). זמן ריצה $O(\\log n)$.\n5. `get_earliest_active()` מחזיר את התהליך הפעיל שהתחיל הכי מוקדם. זמן ריצה $O(1)$.",
   "id": "25B-B-c3",
   "textHtml": "במערכת ניהול תהליכים יש צורך לנהל מידע עבור אלפי תהליכים.<br><br>לכל תהליך יש מזהה ייחודי (pid: Process ID) ונתונים מצורפים: זמן התחלה, סטטוס.<br><br>נדרש מבנה נתונים שיתמוך בפעולות הבאות, בזמנים המבוקשים:<br>1. <code class=\"tok\" dir=\"ltr\">initFromDataFile(data-file)</code> פעולת איתחול המבנה מקובץ הנתונים. זמן ריצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span> (רמז: בסיכוי גבוה זמן הריצה בפועל לינארי בגודל הקלט, ז\"א <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>).<br>2. <code class=\"tok\" dir=\"ltr\">lookup(pid)</code> מציאת הנתונים של תהליך לפי המזהה. זמן ריצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>.<br>3. <code class=\"tok\" dir=\"ltr\">delete(pid)</code> הסרת תהליך מהמערכת. זמן ריצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.<br>4. <code class=\"tok\" dir=\"ltr\">set_status(pid, new_status)</code> מעדכן סטטוס התהליך (ל\"הסתיים\" או \"פעיל\"). זמן ריצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.<br>5. <code class=\"tok\" dir=\"ltr\">get_earliest_active()</code> מחזיר את התהליך הפעיל שהתחיל הכי מוקדם. זמן ריצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>.",
   "titleHtml": "מערכת ניהול תהליכים (שאלה 3)"
  },
  "25B-B-c4": {
   "kind": "text",
   "title": "עץ החיפוש של שאלה 4",
   "text": "נתון עץ חיפוש בינארי מאוזן $T$ עם $n$ צמתים, שכל צומת בו מכיל מספר שלם שונה.\n\nכתבו אלגוריתם שמקבל: את שורש העץ ומספר שלם $a$ ומחזיר את רשימת כל הערכים בעץ שגדולים מ-$a$ בסדר עולה. זמן ריצה נדרש: $O(\\log n + k)$ כאשר $k$ כמות הצמתים שהמספר הרשום בהם גדול מ-$a$.",
   "id": "25B-B-c4",
   "textHtml": "נתון עץ חיפוש בינארי מאוזן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> צמתים, שכל צומת בו מכיל מספר שלם שונה.<br><br>כתבו אלגוריתם שמקבל: את שורש העץ ומספר שלם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> ומחזיר את רשימת כל הערכים בעץ שגדולים מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> בסדר עולה. זמן ריצה נדרש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n + k)</annotation></semantics></math></span> כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> כמות הצמתים שהמספר הרשום בהם גדול מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span>.",
   "titleHtml": "עץ החיפוש של שאלה 4"
  },
  "25B-C-c1": {
   "kind": "code",
   "title": "הפונקציה MYSTERY (שאלה 1 סעיפים א, ב)",
   "code": "MYSTERY( S ):\n    if not is-empty( S )\n        ind = t\n        x = pop( S )\n        MYSTERY( S )\n        if (ind mod 2)\n            push( S, 2*x )",
   "id": "25B-C-c1",
   "codeHtml": "MYSTERY( S ):\n    if not is-empty( S )\n        ind = t\n        x = pop( S )\n        MYSTERY( S )\n        if (ind mod 2)\n            push( S, 2*x )",
   "titleHtml": "הפונקציה MYSTERY (שאלה 1 סעיפים א, ב)"
  },
  "25B-C-c5": {
   "kind": "text",
   "title": "הוראות שאלה 5 (בונוס)",
   "text": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), ללא נימוק.",
   "id": "25B-C-c5",
   "textHtml": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), ללא נימוק.",
   "titleHtml": "הוראות שאלה 5 (בונוס)"
  },
  "25S-A-c1": {
   "kind": "image",
   "title": "עץ לדוגמה לשאלה 1",
   "image": "images/exams/25S-A-c1.png",
   "caption": "המרחק בין 4 לבין 13 הוא 3.",
   "id": "25S-A-c1",
   "captionHtml": "המרחק בין 4 לבין 13 הוא 3.",
   "titleHtml": "עץ לדוגמה לשאלה 1"
  },
  "25S-A-c3": {
   "kind": "text",
   "title": "מערכת הנתונים של שאלה 3",
   "text": "הציעו מבנה נתונים לניהול מערכת הכוללת $n$ **משתנים**, שבכל אחד מהם מספר.\nהמערכת צריכה לתמוך בפעולות הבאות:\n1. `init(n)` – אתחול המבנה עם $n$ נתונים התחלתיים.\n2. `set(i, x)` – משנה את ערך המשתנה ה-$i$ ל-$x$.\n3. `undo(i)` – מבטל את השינוי האחרון שנעשה למשתנה ה-$i$ אם קיים.\n4. `redo(i)` – מחזיר את המשתנה ה-$i$ למצבו לפני קריאת `undo` האחרונה. אם התבצעו כמה פעולות `undo` אז ניתן לבצע כמה פעולות `redo` בהתאם. אם התבצעה פעולת `set` בין פעולות ה-`undo` לבין פעולת ה-`redo` הבאה אז לא ניתן יהיה להחזיר את הערך הקודם ונתייחס לזה כאילו לא היו פעולות `undo` לפניו.\n\nאפשר להניח שפעולת `init(n)` מתבצעת פעם אחת בלבד בזמן אתחול המערכת בסיבוכיות $O(n)$. שאר הפעולות צריכות להתבצע בסיבוכיות $O(1)$ כל אחת.",
   "id": "25S-A-c3",
   "textHtml": "הציעו מבנה נתונים לניהול מערכת הכוללת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> <strong>משתנים</strong>, שבכל אחד מהם מספר.<br>המערכת צריכה לתמוך בפעולות הבאות:<br>1. <code class=\"tok\" dir=\"ltr\">init(n)</code> – אתחול המבנה עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> נתונים התחלתיים.<br>2. <code class=\"tok\" dir=\"ltr\">set(i, x)</code> – משנה את ערך המשתנה ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span>.<br>3. <code class=\"tok\" dir=\"ltr\">undo(i)</code> – מבטל את השינוי האחרון שנעשה למשתנה ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> אם קיים.<br>4. <code class=\"tok\" dir=\"ltr\">redo(i)</code> – מחזיר את המשתנה ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> למצבו לפני קריאת <code class=\"tok\" dir=\"ltr\">undo</code> האחרונה. אם התבצעו כמה פעולות <code class=\"tok\" dir=\"ltr\">undo</code> אז ניתן לבצע כמה פעולות <code class=\"tok\" dir=\"ltr\">redo</code> בהתאם. אם התבצעה פעולת <code class=\"tok\" dir=\"ltr\">set</code> בין פעולות ה-<code class=\"tok\" dir=\"ltr\">undo</code> לבין פעולת ה-<code class=\"tok\" dir=\"ltr\">redo</code> הבאה אז לא ניתן יהיה להחזיר את הערך הקודם ונתייחס לזה כאילו לא היו פעולות <code class=\"tok\" dir=\"ltr\">undo</code> לפניו.<br><br>אפשר להניח שפעולת <code class=\"tok\" dir=\"ltr\">init(n)</code> מתבצעת פעם אחת בלבד בזמן אתחול המערכת בסיבוכיות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>. שאר הפעולות צריכות להתבצע בסיבוכיות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span> כל אחת.",
   "titleHtml": "מערכת הנתונים של שאלה 3"
  },
  "25S-B-c1": {
   "kind": "image",
   "title": "עץ לדוגמה לשאלה 1",
   "image": "images/exams/25S-B-c1.png",
   "caption": "המרחק בין 1 לבין 20 הוא 3.",
   "id": "25S-B-c1",
   "captionHtml": "המרחק בין 1 לבין 20 הוא 3.",
   "titleHtml": "עץ לדוגמה לשאלה 1"
  },
  "25S-B-c5": {
   "kind": "text",
   "title": "הוראות שאלה 5 (בונוס)",
   "text": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), **ללא נימוק**.",
   "id": "25S-B-c5",
   "textHtml": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), <strong>ללא נימוק</strong>.",
   "titleHtml": "הוראות שאלה 5 (בונוס)"
  }
 },
 "questions": [
  {
   "num": 1,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "מי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לא קיים עץ AVL שגובהו $20$ שקיים בו עלה בעומק $12$",
     "html": "לא קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">20</annotation></semantics></math></span> שקיים בו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">12</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "קיים עץ AVL שגובהו $34$ שקיים לו עלה בעומק $15$",
     "html": "קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>34</mn></mrow><annotation encoding=\"application/x-tex\">34</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">15</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "לא קיים עץ AVL שגובהו $13$ שקיים לו עלה בעומק $8$",
     "html": "לא קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">13</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "קיים עץ AVL שגובהו $57$ שקיים לו עלה בעומק $29$",
     "html": "קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>57</mn></mrow><annotation encoding=\"application/x-tex\">57</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>29</mn></mrow><annotation encoding=\"application/x-tex\">29</annotation></semantics></math></span>"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q1",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 2,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "מי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "קיים עץ AVL שגובהו $32$ שקיים לו עלה בעומק $15$",
     "html": "קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>32</mn></mrow><annotation encoding=\"application/x-tex\">32</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">15</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "קיים עץ AVL שגובהו $42$ שקיים לו עלה בעומק $21$",
     "html": "קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>42</mn></mrow><annotation encoding=\"application/x-tex\">42</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">21</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "לא קיים עץ AVL שגובהו $15$ שקיים לו עלה בעומק $8$",
     "html": "לא קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">15</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא קיים עץ AVL שגובהו $76$ שקיים בו עלה בעומק $39$",
     "html": "לא קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>76</mn></mrow><annotation encoding=\"application/x-tex\">76</annotation></semantics></math></span> שקיים בו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>39</mn></mrow><annotation encoding=\"application/x-tex\">39</annotation></semantics></math></span>"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q2",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 3,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "מי מהטענות הבאות **אינה** נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "קיים עץ AVL שגובהו $33$ שקיים לו עלה בעומק $15$",
     "html": "קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>33</mn></mrow><annotation encoding=\"application/x-tex\">33</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">15</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לא קיים עץ AVL שגובהו $80$ שקיים לו עלה בעומק $39$",
     "html": "לא קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>80</mn></mrow><annotation encoding=\"application/x-tex\">80</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>39</mn></mrow><annotation encoding=\"application/x-tex\">39</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "קיים עץ AVL שגובהו $71$ שקיים לו עלה בעומק $38$",
     "html": "קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>71</mn></mrow><annotation encoding=\"application/x-tex\">71</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>38</mn></mrow><annotation encoding=\"application/x-tex\">38</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "קיים עץ AVL שגובהו $9$ שקיים בו עלה בעומק $6$",
     "html": "קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">9</annotation></semantics></math></span> שקיים בו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span>"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q3",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "מי מהטענות הבאות <strong>אינה</strong> נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 4,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "מי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "קיים עץ AVL שגובהו $34$ שקיים לו עלה בעומק $16$",
     "html": "קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>34</mn></mrow><annotation encoding=\"application/x-tex\">34</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לא קיים עץ AVL שגובהו $51$ שקיים לו עלה בעומק $25$",
     "html": "לא קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>51</mn></mrow><annotation encoding=\"application/x-tex\">51</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">25</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "קיים עץ AVL שגובהו $33$ שקיים לו עלה בעומק $15$",
     "html": "קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>33</mn></mrow><annotation encoding=\"application/x-tex\">33</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">15</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא קיים עץ AVL שגובהו $13$ שקיים בו עלה בעומק $8$",
     "html": "לא קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">13</annotation></semantics></math></span> שקיים בו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span>"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q4",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 5,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "מי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "קיים עץ AVL שגובהו $12$ שקיים לו עלה בעומק $4$",
     "html": "קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">12</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לא קיים עץ AVL שגובהו $99$ שקיים לו עלה בעומק $53$",
     "html": "לא קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>99</mn></mrow><annotation encoding=\"application/x-tex\">99</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>53</mn></mrow><annotation encoding=\"application/x-tex\">53</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "קיים עץ AVL שגובהו $79$ שקיים לו עלה בעומק $40$",
     "html": "קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>79</mn></mrow><annotation encoding=\"application/x-tex\">79</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>40</mn></mrow><annotation encoding=\"application/x-tex\">40</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא קיים עץ AVL שגובהו $21$ שקיים בו עלה בעומק $12$",
     "html": "לא קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">21</annotation></semantics></math></span> שקיים בו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">12</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q5",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 6,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "מי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לא קיים עץ AVL שגובהו $16$ שקיים לו עלה בעומק $10$",
     "html": "לא קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לא קיים עץ AVL שגובהו $103$ שקיים לו עלה בעומק $60$",
     "html": "לא קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>103</mn></mrow><annotation encoding=\"application/x-tex\">103</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>60</mn></mrow><annotation encoding=\"application/x-tex\">60</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "קיים עץ AVL שגובהו $81$ שקיים לו עלה בעומק $40$",
     "html": "קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>81</mn></mrow><annotation encoding=\"application/x-tex\">81</annotation></semantics></math></span> שקיים לו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>40</mn></mrow><annotation encoding=\"application/x-tex\">40</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "קיים עץ AVL שגובהו $82$ שקיים בו עלה בעומק $41$",
     "html": "קיים עץ AVL שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>82</mn></mrow><annotation encoding=\"application/x-tex\">82</annotation></semantics></math></span> שקיים בו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>41</mn></mrow><annotation encoding=\"application/x-tex\">41</annotation></semantics></math></span>"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q6",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 7,
   "kind": "mcq",
   "topic": "trees_induction",
   "points": 7.5,
   "question": "בהנתן עץ בינארי (לא בהכרח עץ חיפוש) ורשימות המייצגות סריקות שונות, מהו המשפט הנכון?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "בסריקת inorder הרשימה תהיה ממוינת מהקטן לגדול",
     "html": "בסריקת inorder הרשימה תהיה ממוינת מהקטן לגדול"
    },
    {
     "id": "b",
     "type": "text",
     "value": "בסריקת postorder השורש יופיע תמיד באמצע הסריקה",
     "html": "בסריקת postorder השורש יופיע תמיד באמצע הסריקה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "סריקת preorder ו-postorder שונות בהכרח",
     "html": "סריקת preorder ו-postorder שונות בהכרח"
    },
    {
     "id": "d",
     "type": "text",
     "value": "בסריקת preorder השורש יופיע ראשון",
     "html": "בסריקת preorder השורש יופיע ראשון"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q7",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצים בינאריים, סריקות והוכחות באינדוקציה",
   "questionHtml": "בהנתן עץ בינארי (לא בהכרח עץ חיפוש) ורשימות המייצגות סריקות שונות, מהו המשפט הנכון?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 8,
   "kind": "mcq",
   "topic": "trees_induction",
   "points": 7.5,
   "question": "בהנתן עץ בינארי (לא בהכרח עץ חיפוש) ורשימות המייצגות סריקות שונות, מהו המשפט הנכון?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "בסריקת postorder השורש יופיע אחרון",
     "html": "בסריקת postorder השורש יופיע אחרון"
    },
    {
     "id": "b",
     "type": "text",
     "value": "בסריקת inorder השורש יופיע תמיד באמצע הסריקה",
     "html": "בסריקת inorder השורש יופיע תמיד באמצע הסריקה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "סריקת preorder ו-postorder שונות בהכרח",
     "html": "סריקת preorder ו-postorder שונות בהכרח"
    },
    {
     "id": "d",
     "type": "text",
     "value": "בסריקת preorder הרשימה תהיה ממוינת מהגדול לקטן",
     "html": "בסריקת preorder הרשימה תהיה ממוינת מהגדול לקטן"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q8",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצים בינאריים, סריקות והוכחות באינדוקציה",
   "questionHtml": "בהנתן עץ בינארי (לא בהכרח עץ חיפוש) ורשימות המייצגות סריקות שונות, מהו המשפט הנכון?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 9,
   "kind": "mcq",
   "topic": "trees_induction",
   "points": 7.5,
   "question": "בהנתן עץ חיפוש בינארי ורשימות המייצגות סריקות שונות, מהו המשפט הנכון?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "עלות הסריקה $\\theta(n \\log n)$ כאשר $n$ מייצג את כמות הקודקודים בעץ.",
     "html": "עלות הסריקה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n \\log n)</annotation></semantics></math></span> כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מייצג את כמות הקודקודים בעץ."
    },
    {
     "id": "b",
     "type": "text",
     "value": "עלות הסריקה $\\Omega(n)$ כאשר $n$ מייצג את כמות הקודקודים בעץ.",
     "html": "עלות הסריקה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n)</annotation></semantics></math></span> כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מייצג את כמות הקודקודים בעץ."
    },
    {
     "id": "c",
     "type": "text",
     "value": "הרשימה שתתקבל אינה בהכרח ממוינת",
     "html": "הרשימה שתתקבל אינה בהכרח ממוינת"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא ניתן לשחזר את העץ בהינתן תוצאת סריקת ה-preorder בלבד",
     "html": "לא ניתן לשחזר את העץ בהינתן תוצאת סריקת ה-preorder בלבד"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q9",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצים בינאריים, סריקות והוכחות באינדוקציה",
   "questionHtml": "בהנתן עץ חיפוש בינארי ורשימות המייצגות סריקות שונות, מהו המשפט הנכון?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 10,
   "kind": "mcq",
   "topic": "trees_induction",
   "points": 7.5,
   "question": "בהנתן עץ בינארי (לא בהכרח עץ חיפוש) ורשימות המייצגות סריקות שונות, מהו המשפט הנכון?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "בסריקת preorder הרשימה תהיה ממוינת מהקטן לגדול",
     "html": "בסריקת preorder הרשימה תהיה ממוינת מהקטן לגדול"
    },
    {
     "id": "b",
     "type": "text",
     "value": "בסריקת preorder השורש יופיע תמיד באמצע הסריקה",
     "html": "בסריקת preorder השורש יופיע תמיד באמצע הסריקה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "יתכן וסריקת preorder ו-postorder יצאו זהות",
     "html": "יתכן וסריקת preorder ו-postorder יצאו זהות"
    },
    {
     "id": "d",
     "type": "text",
     "value": "בסריקת inorder השורש יסרק אחרי סריקת חצי מאברי העץ",
     "html": "בסריקת inorder השורש יסרק אחרי סריקת חצי מאברי העץ"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q10",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצים בינאריים, סריקות והוכחות באינדוקציה",
   "questionHtml": "בהנתן עץ בינארי (לא בהכרח עץ חיפוש) ורשימות המייצגות סריקות שונות, מהו המשפט הנכון?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 11,
   "kind": "mcq",
   "topic": "trees_induction",
   "points": 7.5,
   "question": "בהנתן עץ חיפוש בינארי ורשימות המייצגות סריקות שונות, מהו המשפט הנכון?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "בסריקת preorder הרשימה תהיה ממוינת מהקטן לגדול",
     "html": "בסריקת preorder הרשימה תהיה ממוינת מהקטן לגדול"
    },
    {
     "id": "b",
     "type": "text",
     "value": "בהינתן סריקת ה-inorder ניתן לשחזר את העץ",
     "html": "בהינתן סריקת ה-inorder ניתן לשחזר את העץ"
    },
    {
     "id": "c",
     "type": "text",
     "value": "בסריקת postorder הרשימה תהיה ממוינת מהגדול לקטן",
     "html": "בסריקת postorder הרשימה תהיה ממוינת מהגדול לקטן"
    },
    {
     "id": "d",
     "type": "text",
     "value": "ניתן לשחזר את העץ בהינתן תוצאת סריקת ה-preorder בלבד",
     "html": "ניתן לשחזר את העץ בהינתן תוצאת סריקת ה-preorder בלבד"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q11",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצים בינאריים, סריקות והוכחות באינדוקציה",
   "questionHtml": "בהנתן עץ חיפוש בינארי ורשימות המייצגות סריקות שונות, מהו המשפט הנכון?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 12,
   "kind": "mcq",
   "topic": "trees_induction",
   "points": 7.5,
   "question": "בהנתן עץ חיפוש בינארי ורשימות המייצגות סריקות שונות, מהו המשפט הנכון?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "עלות הסריקה $\\Omega(n \\log n)$",
     "html": "עלות הסריקה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "בהינתן סריקת ה-preorder ניתן לשחזר את העץ",
     "html": "בהינתן סריקת ה-preorder ניתן לשחזר את העץ"
    },
    {
     "id": "c",
     "type": "text",
     "value": "בסריקת postorder האיבר הגדול ביותר יופיע באמצע הסריקה",
     "html": "בסריקת postorder האיבר הגדול ביותר יופיע באמצע הסריקה"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא ניתן לשחזר את העץ בהינתן תוצאת סריקת ה-postorder בלבד",
     "html": "לא ניתן לשחזר את העץ בהינתן תוצאת סריקת ה-postorder בלבד"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q12",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצים בינאריים, סריקות והוכחות באינדוקציה",
   "questionHtml": "בהנתן עץ חיפוש בינארי ורשימות המייצגות סריקות שונות, מהו המשפט הנכון?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 13,
   "kind": "mcq",
   "topic": "sorting_selection",
   "points": 7.5,
   "question": "נתון עץ החלטות $T$, המתאר את השאלות הנשאלות באלגוריתם חיפוש המקבל מפתח $k$ (ז\"א, איבר שערכו $k$) ומערך $A$ עם $n$ איברים ומחזיר את האינדקס $i$ (אם קיים) כך ש: $A[i]=k$, אחרת מחזיר $n+1$.\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "גובה העץ הוא בהכרח $\\Omega(n \\log n)$",
     "html": "גובה העץ הוא בהכרח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "כמות העלים בעץ היא $n+1$",
     "html": "כמות העלים בעץ היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n+1</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כמות הקודקודים בעץ היא $\\theta(n!)$",
     "html": "כמות הקודקודים בעץ היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">!</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n!)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא יתכן שקיים בעץ $T$ מסלול משורש העץ לעלה באורך $1$",
     "html": "לא יתכן שקיים בעץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> מסלול משורש העץ לעלה באורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q13",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "נתון עץ החלטות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span>, המתאר את השאלות הנשאלות באלגוריתם חיפוש המקבל מפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> (ז\"א, איבר שערכו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span>) ומערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים ומחזיר את האינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> (אם קיים) כך ש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mi>i</mi><mo stretchy=\"false\">]</mo><mo>=</mo><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">A[i]=k</annotation></semantics></math></span>, אחרת מחזיר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n+1</annotation></semantics></math></span>.<br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 14,
   "kind": "mcq",
   "topic": "sorting_selection",
   "points": 7.5,
   "question": "נתון עץ החלטות $T$, המתאר את השאלות הנשאלות באלגוריתם חיפוש המקבל מפתח $k$ (ז\"א, איבר שערכו $k$) ומערך $A$ עם $n$ איברים ומחזיר את האינדקס $i$ (אם קיים) כך ש: $A[i]=k$, אחרת מחזיר $n+1$.\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "גובה העץ הוא בהכרח $\\Omega(n)$",
     "html": "גובה העץ הוא בהכרח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n)</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "כמות העלים בעץ היא $n!$",
     "html": "כמות העלים בעץ היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">n!</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כמות הקודקודים בעץ היא $O(n)$",
     "html": "כמות הקודקודים בעץ היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא יתכן שקיים בעץ $T$ מסלול משורש העץ לעלה באורך $\\frac{n}{2}$",
     "html": "לא יתכן שקיים בעץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> מסלול משורש העץ לעלה באורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mi>n</mi><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{n}{2}</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q14",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "נתון עץ החלטות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span>, המתאר את השאלות הנשאלות באלגוריתם חיפוש המקבל מפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> (ז\"א, איבר שערכו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span>) ומערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים ומחזיר את האינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> (אם קיים) כך ש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mi>i</mi><mo stretchy=\"false\">]</mo><mo>=</mo><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">A[i]=k</annotation></semantics></math></span>, אחרת מחזיר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n+1</annotation></semantics></math></span>.<br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 15,
   "kind": "mcq",
   "topic": "sorting_selection",
   "points": 7.5,
   "question": "נתון עץ החלטות $T$, המתאר את השאלות הנשאלות באלגוריתם חיפוש המקבל מפתח $k$ (ז\"א, איבר שערכו $k$) ומערך $A$ עם $n$ איברים ומחזיר את האינדקס $i$ (אם קיים) כך ש: $A[i]=k$, אחרת מחזיר $n+1$.\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "עץ ההחלטות $T$ הוא בהכרח עץ בינארי מלא",
     "html": "עץ ההחלטות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> הוא בהכרח עץ בינארי מלא"
    },
    {
     "id": "b",
     "type": "text",
     "value": "כמות העלים בעץ היא $n!$",
     "html": "כמות העלים בעץ היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">n!</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כמות הקודקודים בעץ היא $\\Omega(n^2)$",
     "html": "כמות הקודקודים בעץ היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n^2)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "עץ ההחלטות $T$ הוא עם $2n$ קודקודים",
     "html": "עץ ההחלטות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> הוא עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">2n</annotation></semantics></math></span> קודקודים"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q15",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "נתון עץ החלטות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span>, המתאר את השאלות הנשאלות באלגוריתם חיפוש המקבל מפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> (ז\"א, איבר שערכו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span>) ומערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים ומחזיר את האינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> (אם קיים) כך ש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mi>i</mi><mo stretchy=\"false\">]</mo><mo>=</mo><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">A[i]=k</annotation></semantics></math></span>, אחרת מחזיר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n+1</annotation></semantics></math></span>.<br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 16,
   "kind": "mcq",
   "topic": "sorting_selection",
   "points": 7.5,
   "question": "נתון עץ החלטות $T$, המתאר את השאלות הנשאלות באלגוריתם חיפוש המקבל מפתח $k$ (ז\"א, איבר שערכו $k$) ומערך $A$ עם $n$ איברים ומחזיר את האינדקס $i$ (אם קיים) כך ש: $A[i]=k$, אחרת מחזיר $n+1$.\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "עץ ההחלטות $T$ הוא בהכרח עץ מאוזן",
     "html": "עץ ההחלטות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> הוא בהכרח עץ מאוזן"
    },
    {
     "id": "b",
     "type": "text",
     "value": "כמות העלים בעץ היא $n! + 1$",
     "html": "כמות העלים בעץ היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo stretchy=\"false\">!</mo><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n! + 1</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כמות הקודקודים בעץ היא $\\Omega(n \\log \\sqrt{n})$",
     "html": "כמות הקודקודים בעץ היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log \\sqrt{n})</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "יתכן שהמסלול הקצר ביותר הוא באורך $1$",
     "html": "יתכן שהמסלול הקצר ביותר הוא באורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q16",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "נתון עץ החלטות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span>, המתאר את השאלות הנשאלות באלגוריתם חיפוש המקבל מפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> (ז\"א, איבר שערכו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span>) ומערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים ומחזיר את האינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> (אם קיים) כך ש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mi>i</mi><mo stretchy=\"false\">]</mo><mo>=</mo><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">A[i]=k</annotation></semantics></math></span>, אחרת מחזיר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n+1</annotation></semantics></math></span>.<br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 17,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "תנו חסם אסימפטוטי הדוק (\"תטא\") לנוסחת הנסיגה הבאה (עבור $n$ מספיק קטן מתקיים $T(n)=O(1)$):\n\n$T(n) = T(n/4) + T(3n/4) + n$",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$\\Theta(n^2)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n^2)</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$\\Theta(n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n)</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$\\Theta(n(\\log n)^2)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n(\\log n)^2)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$\\Theta(n \\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n \\log n)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q17",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "תנו חסם אסימפטוטי הדוק (\"תטא\") לנוסחת הנסיגה הבאה (עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספיק קטן מתקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n)=O(1)</annotation></semantics></math></span>):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>4</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mi>T</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>4</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">T(n) = T(n/4) + T(3n/4) + n</annotation></semantics></math></span>",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 18,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "תנו חסם אסימפטוטי הדוק (\"תטא\") לנוסחת הנסיגה הבאה (עבור $n$ מספיק קטן מתקיים $T(n)=O(1)$):\n\n$T(n) = T(n/5) + T(4n/5) + n$",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$\\Theta(n \\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n \\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$\\Theta(n (\\log \\sqrt{n})^2)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><msqrt><mi>n</mi></msqrt><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n (\\log \\sqrt{n})^2)</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$\\Theta(n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$\\Theta(n^2 \\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n^2 \\log n)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q18",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "תנו חסם אסימפטוטי הדוק (\"תטא\") לנוסחת הנסיגה הבאה (עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספיק קטן מתקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n)=O(1)</annotation></semantics></math></span>):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>5</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mi>T</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>5</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">T(n) = T(n/5) + T(4n/5) + n</annotation></semantics></math></span>",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 19,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "תנו חסם אסימפטוטי הדוק (\"תטא\") לנוסחת הנסיגה הבאה (עבור $n$ מספיק קטן מתקיים $T(n)=O(1)$):\n\n$T(n) = T(3n/5) + T(2n/5) + n$",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$\\Theta(n \\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n \\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$\\Theta(\\sqrt{n} (\\log n)^2)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(\\sqrt{n} (\\log n)^2)</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$\\Theta(n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$\\Theta(n^2 \\log \\sqrt{n})$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mi>log</mi><mo>⁡</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n^2 \\log \\sqrt{n})</annotation></semantics></math></span>"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q19",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "תנו חסם אסימפטוטי הדוק (\"תטא\") לנוסחת הנסיגה הבאה (עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספיק קטן מתקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n)=O(1)</annotation></semantics></math></span>):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>T</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>5</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mi>T</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>5</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">T(n) = T(3n/5) + T(2n/5) + n</annotation></semantics></math></span>",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 20,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "בהנתן נוסחת הנסיגה הבאה: $T(n)=aT(n/2)+n^2$.\nמהו הערך הנמוך ביותר מבין הערכים הבאים עבור המשתנה $a$ עבורו נקבל סיבוכיות גדולה מ-$n^2$?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$2$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$3$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$4$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$6.5$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6.5</mn></mrow><annotation encoding=\"application/x-tex\">6.5</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: log_2 a = 2 -> for a=4 case 2 will be correct and we'll get Theta(n^2 logn)",
   "id": "24B-A-Q20",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "בהנתן נוסחת הנסיגה הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>a</mi><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo stretchy=\"false\">)</mo><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">T(n)=aT(n/2)+n^2</annotation></semantics></math></span>.<br>מהו הערך הנמוך ביותר מבין הערכים הבאים עבור המשתנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> עבורו נקבל סיבוכיות גדולה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span>?",
   "explanationHtml": "הערת הפתרון הרשמי: log_2 a = 2 -&gt; for a=4 case 2 will be correct and we'll get Theta(n^2 logn)",
   "pointsTotal": 7.5
  },
  {
   "num": 21,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "בהנתן נוסחת הנסיגה הבאה: $T(n)=aT(n/2)+n^3$.\nמהו הערך הנמוך ביותר מבין הערכים הבאים עבור המשתנה $a$ עבורו נקבל סיבוכיות גדולה מ-$n^3$?\n\n(כלומר, מהו הערך הנמוך ביותר עבור המשתנה $a$ עבורו נקבל $T(n) > \\theta(n^2)$)",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$9$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">9</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$8$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$9.3$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9.3</mn></mrow><annotation encoding=\"application/x-tex\">9.3</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$7.5$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7.5</mn></mrow><annotation encoding=\"application/x-tex\">7.5</annotation></semantics></math></span>"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: for a=8 case 2 will be correct and we'll get Theta(n^3 logn). (בטופס זה נשארה בסוגריים הנוסחה הישנה $T(n) > \\theta(n^2)$; המפתח הרשמי מתאים לנוסח השאלה הראשי.)",
   "id": "24B-A-Q21",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "בהנתן נוסחת הנסיגה הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>a</mi><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo stretchy=\"false\">)</mo><mo>+</mo><msup><mi>n</mi><mn>3</mn></msup></mrow><annotation encoding=\"application/x-tex\">T(n)=aT(n/2)+n^3</annotation></semantics></math></span>.<br>מהו הערך הנמוך ביותר מבין הערכים הבאים עבור המשתנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> עבורו נקבל סיבוכיות גדולה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>3</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^3</annotation></semantics></math></span>?<br><br>(כלומר, מהו הערך הנמוך ביותר עבור המשתנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> עבורו נקבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>&gt;</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n) &gt; \\theta(n^2)</annotation></semantics></math></span>)",
   "explanationHtml": "הערת הפתרון הרשמי: for a=8 case 2 will be correct and we'll get Theta(n^3 logn). (בטופס זה נשארה בסוגריים הנוסחה הישנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>&gt;</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n) &gt; \\theta(n^2)</annotation></semantics></math></span>; המפתח הרשמי מתאים לנוסח השאלה הראשי.)",
   "pointsTotal": 7.5
  },
  {
   "num": 22,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "בהנתן נוסחת הנסיגה הבאה: $T(n)=aT(n/2)+n$.\nמהו הערך הנמוך ביותר מבין הערכים הבאים עבור המשתנה $a$ עבורו נקבל סיבוכיות גדולה מ-$n$?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$8$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$4$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$2$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$6.5$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6.5</mn></mrow><annotation encoding=\"application/x-tex\">6.5</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: log_2 a: for a=2 case 2 will be correct and we'll get Theta(n logn)",
   "id": "24B-A-Q22",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "בהנתן נוסחת הנסיגה הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>a</mi><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">T(n)=aT(n/2)+n</annotation></semantics></math></span>.<br>מהו הערך הנמוך ביותר מבין הערכים הבאים עבור המשתנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> עבורו נקבל סיבוכיות גדולה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>?",
   "explanationHtml": "הערת הפתרון הרשמי: log_2 a: for a=2 case 2 will be correct and we'll get Theta(n logn)",
   "pointsTotal": 7.5
  },
  {
   "num": 23,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "בהנתן נוסחת הנסיגה הבאה: $T(n)=aT(n/4)+n$.\nמהו הערך הנמוך ביותר מבין הערכים הבאים עבור המשתנה $a$ עבורו נקבל סיבוכיות גדולה מ-$n$?\n\n(כלומר, מהו הערך הנמוך ביותר עבור המשתנה $a$ עבורו נקבל $T(n) > \\theta(n^2)$)",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$2$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$3.5$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3.5</mn></mrow><annotation encoding=\"application/x-tex\">3.5</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$4$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$6$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: log_4 a: for a=4 in case 2 we'll get T(n)=Theta(nlogn). (בטופס זה נשארה בסוגריים הנוסחה הישנה $T(n) > \\theta(n^2)$; המפתח הרשמי מתאים לנוסח השאלה הראשי.)",
   "id": "24B-A-Q23",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "בהנתן נוסחת הנסיגה הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>a</mi><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>4</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">T(n)=aT(n/4)+n</annotation></semantics></math></span>.<br>מהו הערך הנמוך ביותר מבין הערכים הבאים עבור המשתנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> עבורו נקבל סיבוכיות גדולה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>?<br><br>(כלומר, מהו הערך הנמוך ביותר עבור המשתנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> עבורו נקבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>&gt;</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n) &gt; \\theta(n^2)</annotation></semantics></math></span>)",
   "explanationHtml": "הערת הפתרון הרשמי: log_4 a: for a=4 in case 2 we'll get T(n)=Theta(nlogn). (בטופס זה נשארה בסוגריים הנוסחה הישנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>&gt;</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n) &gt; \\theta(n^2)</annotation></semantics></math></span>; המפתח הרשמי מתאים לנוסח השאלה הראשי.)",
   "pointsTotal": 7.5
  },
  {
   "num": 24,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "בהנתן נוסחת הנסיגה הבאה: $T(n)=aT(n/3)+n^2$.\nמהו הערך הנמוך ביותר מבין הערכים הבאים עבור המשתנה $a$ עבורו נקבל סיבוכיות גדולה מ-$n^2$?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$1$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$2$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$4$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$9$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">9</annotation></semantics></math></span>"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: log_3 a: for a=9 and case 2 we'll get T(n)=n^2 logn",
   "id": "24B-A-Q24",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "בהנתן נוסחת הנסיגה הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>a</mi><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>3</mn><mo stretchy=\"false\">)</mo><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">T(n)=aT(n/3)+n^2</annotation></semantics></math></span>.<br>מהו הערך הנמוך ביותר מבין הערכים הבאים עבור המשתנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> עבורו נקבל סיבוכיות גדולה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span>?",
   "explanationHtml": "הערת הפתרון הרשמי: log_3 a: for a=9 and case 2 we'll get T(n)=n^2 logn",
   "pointsTotal": 7.5
  },
  {
   "num": 25,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "בהנתן נוסחת הנסיגה הבאה: $T(n)=aT(n/5)+n^2$.\nמהו הערך הנמוך ביותר מבין הערכים הבאים עבור המשתנה $a$ עבורו נקבל סיבוכיות גדולה מ-$n^2$?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$25$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">25</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$2.5$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2.5</mn></mrow><annotation encoding=\"application/x-tex\">2.5</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$50$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>50</mn></mrow><annotation encoding=\"application/x-tex\">50</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$5$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: log_5 a: for a=25 we'll get case 2 and T(n)=Theta(n^2 logn)",
   "id": "24B-A-Q25",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "בהנתן נוסחת הנסיגה הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>a</mi><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>5</mn><mo stretchy=\"false\">)</mo><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">T(n)=aT(n/5)+n^2</annotation></semantics></math></span>.<br>מהו הערך הנמוך ביותר מבין הערכים הבאים עבור המשתנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> עבורו נקבל סיבוכיות גדולה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span>?",
   "explanationHtml": "הערת הפתרון הרשמי: log_5 a: for a=25 we'll get case 2 and T(n)=Theta(n^2 logn)",
   "pointsTotal": 7.5
  },
  {
   "num": 26,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "יהי $T$ עץ ריק. מכניסים את האיברים הבאים לעץ $T$ בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):\n\n$4,7,41,3,8,6,2,5$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $41$ נמצא באחד מעלי העץ",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>41</mn></mrow><annotation encoding=\"application/x-tex\">41</annotation></semantics></math></span> נמצא באחד מעלי העץ"
    },
    {
     "id": "b",
     "type": "text",
     "value": "האיבר המינימלי אינו עלה",
     "html": "האיבר המינימלי אינו עלה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כמות הגלגולים שהתבצעו בתהליך ההכנסה היא $1$ בלבד",
     "html": "כמות הגלגולים שהתבצעו בתהליך ההכנסה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> בלבד"
    },
    {
     "id": "d",
     "type": "text",
     "value": "המפתח $6$ נמצא בשורש העץ",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span> נמצא בשורש העץ"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q26",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ ריק. מכניסים את האיברים הבאים לעץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>41</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">4,7,41,3,8,6,2,5</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 27,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "יהי $T$ עץ ריק. מכניסים את האיברים הבאים לעץ $T$ בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):\n\n$4,7,3,8,6,2,5,41$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $41$ נמצא באחד מעלי העץ",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>41</mn></mrow><annotation encoding=\"application/x-tex\">41</annotation></semantics></math></span> נמצא באחד מעלי העץ"
    },
    {
     "id": "b",
     "type": "text",
     "value": "האיבר המינימלי אינו עלה",
     "html": "האיבר המינימלי אינו עלה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כמות הגלגולים שהתבצעו בתהליך ההכנסה היא $1$ בלבד",
     "html": "כמות הגלגולים שהתבצעו בתהליך ההכנסה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> בלבד"
    },
    {
     "id": "d",
     "type": "text",
     "value": "המפתח $6$ נמצא בשורש העץ",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span> נמצא בשורש העץ"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q27",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ ריק. מכניסים את האיברים הבאים לעץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>41</mn></mrow><annotation encoding=\"application/x-tex\">4,7,3,8,6,2,5,41</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 28,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "יהי $T$ עץ ריק. מכניסים את האיברים הבאים לעץ $T$ בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):\n\n$4,7,3,8,6,2,5,41$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $41$ אינו אחד מעלי העץ",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>41</mn></mrow><annotation encoding=\"application/x-tex\">41</annotation></semantics></math></span> אינו אחד מעלי העץ"
    },
    {
     "id": "b",
     "type": "text",
     "value": "האיבר המינימלי אינו עלה",
     "html": "האיבר המינימלי אינו עלה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "המפתח $6$ נמצא בשורש העץ",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span> נמצא בשורש העץ"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא התבצעו גלגולים בתהליך ההכנסה",
     "html": "לא התבצעו גלגולים בתהליך ההכנסה"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q28",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ ריק. מכניסים את האיברים הבאים לעץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>41</mn></mrow><annotation encoding=\"application/x-tex\">4,7,3,8,6,2,5,41</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 29,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "יהי $T$ עץ ריק. מכניסים את האיברים הבאים לעץ $T$ בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):\n\n$8,4,7,3,6,2,5,41$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $41$ נמצא בעומק $2$",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>41</mn></mrow><annotation encoding=\"application/x-tex\">41</annotation></semantics></math></span> נמצא בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "האיבר המינימלי נמצא בעומק $3$",
     "html": "האיבר המינימלי נמצא בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כמות הגלגולים שהתבצעו בתהליך ההכנסה היא $2$ בלבד",
     "html": "כמות הגלגולים שהתבצעו בתהליך ההכנסה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> בלבד"
    },
    {
     "id": "d",
     "type": "text",
     "value": "המפתח $6$ נמצא בשורש העץ",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span> נמצא בשורש העץ"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q29",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ ריק. מכניסים את האיברים הבאים לעץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>41</mn></mrow><annotation encoding=\"application/x-tex\">8,4,7,3,6,2,5,41</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 30,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "יהי $T$ עץ ריק. מכניסים את האיברים הבאים לעץ $T$ בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):\n\n$7,8,4,2,5,41,3,6$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $8$ נמצא בעומק $2$",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> נמצא בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "האיבר המינימלי אינו עלה",
     "html": "האיבר המינימלי אינו עלה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כמות הגלגולים שהתבצעו בתהליך ההכנסה היא $1$ בלבד",
     "html": "כמות הגלגולים שהתבצעו בתהליך ההכנסה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> בלבד"
    },
    {
     "id": "d",
     "type": "text",
     "value": "המפתח $8$ נמצא בשורש העץ",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> נמצא בשורש העץ"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q30",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ ריק. מכניסים את האיברים הבאים לעץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>41</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">7,8,4,2,5,41,3,6</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 31,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה סדרת המספרים הבאה (משמאל לימין):\n\n$1,6,18,16,5,22$\n\nהשתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל $11$:\n\n$h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 7) + 1)\\right) \\bmod 11$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $5$ ייכנס לתא באינדקס $0$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> במערך."
    },
    {
     "id": "b",
     "type": "text",
     "value": "המפתח $22$ ייכנס לתא באינדקס $0$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">22</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> במערך."
    },
    {
     "id": "c",
     "type": "text",
     "value": "המפתח $16$ ייכנס לתא באינדקס $8$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> במערך."
    },
    {
     "id": "d",
     "type": "text",
     "value": "המפתח $18$ ייכנס לתא באינדקס $8$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>18</mn></mrow><annotation encoding=\"application/x-tex\">18</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> במערך."
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q31",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה סדרת המספרים הבאה (משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>18</mn><mo separator=\"true\">,</mo><mn>16</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">1,6,18,16,5,22</annotation></semantics></math></span><br><br>השתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>+</mo><mi>i</mi><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 7) + 1)\\right) \\bmod 11</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 32,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה סדרת המספרים הבאה (משמאל לימין):\n\n$1,6,18,16,5,22$\n\nהשתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל $11$:\n\n$h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 5) + 1)\\right) \\bmod 11$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $5$ ייכנס לתא באינדקס $0$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> במערך."
    },
    {
     "id": "b",
     "type": "text",
     "value": "המפתח $22$ ייכנס לתא באינדקס $0$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">22</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> במערך."
    },
    {
     "id": "c",
     "type": "text",
     "value": "המפתח $16$ ייכנס לתא באינדקס $8$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> במערך."
    },
    {
     "id": "d",
     "type": "text",
     "value": "המפתח $18$ ייכנס לתא באינדקס $8$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>18</mn></mrow><annotation encoding=\"application/x-tex\">18</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> במערך."
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q32",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה סדרת המספרים הבאה (משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>18</mn><mo separator=\"true\">,</mo><mn>16</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">1,6,18,16,5,22</annotation></semantics></math></span><br><br>השתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>+</mo><mi>i</mi><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>5</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 5) + 1)\\right) \\bmod 11</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 33,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה סדרת המספרים הבאה (משמאל לימין):\n\n$1,6,18,16,5,22$\n\nהשתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל $11$:\n\n$h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 9) + 1)\\right) \\bmod 11$\n\nמי מהטענות הבאות **אינה** נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $5$ ייכנס לתא באינדקס $0$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> במערך."
    },
    {
     "id": "b",
     "type": "text",
     "value": "המפתח $22$ ייכנס לתא באינדקס $10$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">22</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span> במערך."
    },
    {
     "id": "c",
     "type": "text",
     "value": "המפתח $16$ ייכנס לתא באינדקס $8$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> במערך."
    },
    {
     "id": "d",
     "type": "text",
     "value": "המפתח $18$ ייכנס לתא באינדקס $7$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>18</mn></mrow><annotation encoding=\"application/x-tex\">18</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> במערך."
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q33",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה סדרת המספרים הבאה (משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>18</mn><mo separator=\"true\">,</mo><mn>16</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">1,6,18,16,5,22</annotation></semantics></math></span><br><br>השתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>+</mo><mi>i</mi><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>9</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 9) + 1)\\right) \\bmod 11</annotation></semantics></math></span><br><br>מי מהטענות הבאות <strong>אינה</strong> נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 34,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה סדרת המספרים הבאה (משמאל לימין):\n\n$1,6,18,16,5,22$\n\nהשתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל $11$:\n\n$h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 3) + 1)\\right) \\bmod 11$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $22$ ייכנס לתא באינדקס $2$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">22</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> במערך."
    },
    {
     "id": "b",
     "type": "text",
     "value": "המפתח $16$ ייכנס לתא באינדקס $8$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> במערך."
    },
    {
     "id": "c",
     "type": "text",
     "value": "המפתח $5$ ייכנס לתא באינדקס $8$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> במערך."
    },
    {
     "id": "d",
     "type": "text",
     "value": "המפתח $18$ ייכנס לתא באינדקס $2$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>18</mn></mrow><annotation encoding=\"application/x-tex\">18</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> במערך."
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q34",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה סדרת המספרים הבאה (משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>18</mn><mo separator=\"true\">,</mo><mn>16</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">1,6,18,16,5,22</annotation></semantics></math></span><br><br>השתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>+</mo><mi>i</mi><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>3</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 3) + 1)\\right) \\bmod 11</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 35,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה סדרת המספרים הבאה (משמאל לימין):\n\n$7,1,6,16,14,8,21,12$\n\nהשתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל $11$:\n\n$h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 7) + 1)\\right) \\bmod 11$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $8$ ייכנס לתא באינדקס $2$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> במערך."
    },
    {
     "id": "b",
     "type": "text",
     "value": "המפתח $16$ ייכנס לתא באינדקס $8$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> במערך."
    },
    {
     "id": "c",
     "type": "text",
     "value": "המפתח $21$ ייכנס לתא באינדקס $1$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">21</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> במערך."
    },
    {
     "id": "d",
     "type": "text",
     "value": "המפתח $12$ ייכנס לתא באינדקס $2$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">12</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> במערך."
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q35",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה סדרת המספרים הבאה (משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>16</mn><mo separator=\"true\">,</mo><mn>14</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>21</mn><mo separator=\"true\">,</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">7,1,6,16,14,8,21,12</annotation></semantics></math></span><br><br>השתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>+</mo><mi>i</mi><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 7) + 1)\\right) \\bmod 11</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 36,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה סדרת המספרים הבאה (משמאל לימין):\n\n$7,1,6,16,14,8,21,12$\n\nהשתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל $11$:\n\n$h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 9) + 1)\\right) \\bmod 11$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $8$ ייכנס לתא באינדקס $2$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> במערך."
    },
    {
     "id": "b",
     "type": "text",
     "value": "המפתח $16$ ייכנס לתא באינדקס $8$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> במערך."
    },
    {
     "id": "c",
     "type": "text",
     "value": "המפתח $12$ ייכנס לתא באינדקס $9$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">12</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">9</annotation></semantics></math></span> במערך."
    },
    {
     "id": "d",
     "type": "text",
     "value": "המפתח $21$ ייכנס לתא באינדקס $0$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">21</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> במערך."
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q36",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה סדרת המספרים הבאה (משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>16</mn><mo separator=\"true\">,</mo><mn>14</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>21</mn><mo separator=\"true\">,</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">7,1,6,16,14,8,21,12</annotation></semantics></math></span><br><br>השתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>+</mo><mi>i</mi><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>9</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 9) + 1)\\right) \\bmod 11</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 37,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:\n\n$h_1(x) = x \\bmod 11$\n\n$h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11$\n\nלטבלה הוכנסו הערכים הבאים: משמאל לימין:\n\n$3,105,67,100,75,53$\n\nאילו מהערכים יהיו בטבלה השנייה T2?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$75,100$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>75</mn><mo separator=\"true\">,</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">75,100</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$67,100$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>67</mn><mo separator=\"true\">,</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">67,100</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$53,105,100$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>53</mn><mo separator=\"true\">,</mo><mn>105</mn><mo separator=\"true\">,</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">53,105,100</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$105,53,75$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>105</mn><mo separator=\"true\">,</mo><mn>53</mn><mo separator=\"true\">,</mo><mn>75</mn></mrow><annotation encoding=\"application/x-tex\">105,53,75</annotation></semantics></math></span>"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q37",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_1(x) = x \\bmod 11</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mi>x</mi><mn>11</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11</annotation></semantics></math></span><br><br>לטבלה הוכנסו הערכים הבאים: משמאל לימין:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>105</mn><mo separator=\"true\">,</mo><mn>67</mn><mo separator=\"true\">,</mo><mn>100</mn><mo separator=\"true\">,</mo><mn>75</mn><mo separator=\"true\">,</mo><mn>53</mn></mrow><annotation encoding=\"application/x-tex\">3,105,67,100,75,53</annotation></semantics></math></span><br><br>אילו מהערכים יהיו בטבלה השנייה T2?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 38,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:\n\n$h_1(x) = x \\bmod 11$\n\n$h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11$\n\nלטבלה הוכנסו הערכים הבאים: משמאל לימין:\n\n$3,105,67,100,75,53$\n\nאילו מהערכים יהיו בטבלה הראשונה T1?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$3,100,105,67$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>100</mn><mo separator=\"true\">,</mo><mn>105</mn><mo separator=\"true\">,</mo><mn>67</mn></mrow><annotation encoding=\"application/x-tex\">3,100,105,67</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$75,100$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>75</mn><mo separator=\"true\">,</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">75,100</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$3,53,67,105$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>53</mn><mo separator=\"true\">,</mo><mn>67</mn><mo separator=\"true\">,</mo><mn>105</mn></mrow><annotation encoding=\"application/x-tex\">3,53,67,105</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$67,53,105,100$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>67</mn><mo separator=\"true\">,</mo><mn>53</mn><mo separator=\"true\">,</mo><mn>105</mn><mo separator=\"true\">,</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">67,53,105,100</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q38",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_1(x) = x \\bmod 11</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mi>x</mi><mn>11</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11</annotation></semantics></math></span><br><br>לטבלה הוכנסו הערכים הבאים: משמאל לימין:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>105</mn><mo separator=\"true\">,</mo><mn>67</mn><mo separator=\"true\">,</mo><mn>100</mn><mo separator=\"true\">,</mo><mn>75</mn><mo separator=\"true\">,</mo><mn>53</mn></mrow><annotation encoding=\"application/x-tex\">3,105,67,100,75,53</annotation></semantics></math></span><br><br>אילו מהערכים יהיו בטבלה הראשונה T1?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 39,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:\n\n$h_1(x) = x \\bmod 11$\n\n$h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11$\n\nלטבלה הוכנסו הערכים הבאים: משמאל לימין:\n\n$3,67,75,105,53,100$\n\nאילו מהערכים יהיו בטבלה השנייה T2?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$75,100,105,3$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>75</mn><mo separator=\"true\">,</mo><mn>100</mn><mo separator=\"true\">,</mo><mn>105</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">75,100,105,3</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$53,67$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>53</mn><mo separator=\"true\">,</mo><mn>67</mn></mrow><annotation encoding=\"application/x-tex\">53,67</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$3,100,105$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>100</mn><mo separator=\"true\">,</mo><mn>105</mn></mrow><annotation encoding=\"application/x-tex\">3,100,105</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$105,100$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>105</mn><mo separator=\"true\">,</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">105,100</annotation></semantics></math></span>"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q39",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_1(x) = x \\bmod 11</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mi>x</mi><mn>11</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11</annotation></semantics></math></span><br><br>לטבלה הוכנסו הערכים הבאים: משמאל לימין:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>67</mn><mo separator=\"true\">,</mo><mn>75</mn><mo separator=\"true\">,</mo><mn>105</mn><mo separator=\"true\">,</mo><mn>53</mn><mo separator=\"true\">,</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">3,67,75,105,53,100</annotation></semantics></math></span><br><br>אילו מהערכים יהיו בטבלה השנייה T2?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 40,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:\n\n$h_1(x) = x \\bmod 11$\n\n$h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11$\n\nלטבלה הוכנסו הערכים הבאים: משמאל לימין:\n\n$3,67,75,105,53,100$\n\nאילו מהערכים יהיו בטבלה הראשונה T1?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$75,100,105,3$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>75</mn><mo separator=\"true\">,</mo><mn>100</mn><mo separator=\"true\">,</mo><mn>105</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">75,100,105,3</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$53,67$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>53</mn><mo separator=\"true\">,</mo><mn>67</mn></mrow><annotation encoding=\"application/x-tex\">53,67</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$3,100,105$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>100</mn><mo separator=\"true\">,</mo><mn>105</mn></mrow><annotation encoding=\"application/x-tex\">3,100,105</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$105,100$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>105</mn><mo separator=\"true\">,</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">105,100</annotation></semantics></math></span>"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q40",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_1(x) = x \\bmod 11</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mi>x</mi><mn>11</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11</annotation></semantics></math></span><br><br>לטבלה הוכנסו הערכים הבאים: משמאל לימין:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>67</mn><mo separator=\"true\">,</mo><mn>75</mn><mo separator=\"true\">,</mo><mn>105</mn><mo separator=\"true\">,</mo><mn>53</mn><mo separator=\"true\">,</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">3,67,75,105,53,100</annotation></semantics></math></span><br><br>אילו מהערכים יהיו בטבלה הראשונה T1?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 41,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:\n\n$h_1(x) = x \\bmod 11$\n\n$h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11$\n\nלטבלה הוכנסו הערכים הבאים: משמאל לימין:\n\n$100,75,6,53,105,67$\n\nאילו מהערכים יהיו בטבלה הראשונה T1?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$75,100,105$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>75</mn><mo separator=\"true\">,</mo><mn>100</mn><mo separator=\"true\">,</mo><mn>105</mn></mrow><annotation encoding=\"application/x-tex\">75,100,105</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$67,100,105$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>67</mn><mo separator=\"true\">,</mo><mn>100</mn><mo separator=\"true\">,</mo><mn>105</mn></mrow><annotation encoding=\"application/x-tex\">67,100,105</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$105,100$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>105</mn><mo separator=\"true\">,</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">105,100</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$67,105,53$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>67</mn><mo separator=\"true\">,</mo><mn>105</mn><mo separator=\"true\">,</mo><mn>53</mn></mrow><annotation encoding=\"application/x-tex\">67,105,53</annotation></semantics></math></span>"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q41",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_1(x) = x \\bmod 11</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mi>x</mi><mn>11</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11</annotation></semantics></math></span><br><br>לטבלה הוכנסו הערכים הבאים: משמאל לימין:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn><mo separator=\"true\">,</mo><mn>75</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>53</mn><mo separator=\"true\">,</mo><mn>105</mn><mo separator=\"true\">,</mo><mn>67</mn></mrow><annotation encoding=\"application/x-tex\">100,75,6,53,105,67</annotation></semantics></math></span><br><br>אילו מהערכים יהיו בטבלה הראשונה T1?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 42,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:\n\n$h_1(x) = x \\bmod 11$\n\n$h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11$\n\nלטבלה הוכנסו הערכים הבאים: משמאל לימין:\n\n$100,75,6,53,105,67$\n\nאילו מהערכים יהיו בטבלה השנייה T2?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$75,100,105$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>75</mn><mo separator=\"true\">,</mo><mn>100</mn><mo separator=\"true\">,</mo><mn>105</mn></mrow><annotation encoding=\"application/x-tex\">75,100,105</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$67,100,105$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>67</mn><mo separator=\"true\">,</mo><mn>100</mn><mo separator=\"true\">,</mo><mn>105</mn></mrow><annotation encoding=\"application/x-tex\">67,100,105</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$6,75,100$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo separator=\"true\">,</mo><mn>75</mn><mo separator=\"true\">,</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">6,75,100</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$67,105,53$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>67</mn><mo separator=\"true\">,</mo><mn>105</mn><mo separator=\"true\">,</mo><mn>53</mn></mrow><annotation encoding=\"application/x-tex\">67,105,53</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q42",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_1(x) = x \\bmod 11</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mi>x</mi><mn>11</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11</annotation></semantics></math></span><br><br>לטבלה הוכנסו הערכים הבאים: משמאל לימין:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn><mo separator=\"true\">,</mo><mn>75</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>53</mn><mo separator=\"true\">,</mo><mn>105</mn><mo separator=\"true\">,</mo><mn>67</mn></mrow><annotation encoding=\"application/x-tex\">100,75,6,53,105,67</annotation></semantics></math></span><br><br>אילו מהערכים יהיו בטבלה השנייה T2?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 43,
   "kind": "mcq",
   "topic": "heaps",
   "points": 7.5,
   "question": "נתונה ערימת מינימום $A$ עם $n$ מספרים שונים זה מזה.\nרוצים להוסיף לכל איבר ב-$A$ שדה נוסף, שיכיל את האינדקס של האיבר העוקב לו (האיבר המינימלי שגדול ממנו מבין אברי הערימה). באיבר המקסימלי שדה זה יכיל NULL.\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ניתן לבצע את הנ\"ל בזמן $\\theta(\\sqrt{n})$",
     "html": "ניתן לבצע את הנ\"ל בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(\\sqrt{n})</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "ניתן לבצע את הנ\"ל בזמן $\\theta(n \\log \\sqrt{n})$",
     "html": "ניתן לבצע את הנ\"ל בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n \\log \\sqrt{n})</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "ניתן לבצע את הנ\"ל בזמן $\\theta(\\sqrt{n} \\log n)$",
     "html": "ניתן לבצע את הנ\"ל בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><msqrt><mi>n</mi></msqrt><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(\\sqrt{n} \\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "ניתן לבצע את הנ\"ל בזמן $\\theta(n)$",
     "html": "ניתן לבצע את הנ\"ל בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q43",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "ערימות ותור עדיפויות",
   "questionHtml": "נתונה ערימת מינימום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים שונים זה מזה.<br>רוצים להוסיף לכל איבר ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> שדה נוסף, שיכיל את האינדקס של האיבר העוקב לו (האיבר המינימלי שגדול ממנו מבין אברי הערימה). באיבר המקסימלי שדה זה יכיל NULL.<br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 44,
   "kind": "mcq",
   "topic": "sorting_selection",
   "points": 7.5,
   "question": "תהי sortsub פונקציה המקבלת מערך לא ממוין של $n$ מספרים ממשים, ומחזירה קבוצה ממוינת של $\\sqrt{n}$ הערכים הנמוכים ביותר במערך.\n\nמי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $\\Omega(n \\log(\\log n))$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log(\\log n))</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $O(n)$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $O(\\sqrt{n})$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\sqrt{n})</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא ניתן לומר דבר על הסיבוכיות של sortsub",
     "html": "לא ניתן לומר דבר על הסיבוכיות של sortsub"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q44",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "תהי sortsub פונקציה המקבלת מערך לא ממוין של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים ממשים, ומחזירה קבוצה ממוינת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msqrt><mi>n</mi></msqrt></mrow><annotation encoding=\"application/x-tex\">\\sqrt{n}</annotation></semantics></math></span> הערכים הנמוכים ביותר במערך.<br><br>מי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 45,
   "kind": "mcq",
   "topic": "sorting_selection",
   "points": 7.5,
   "question": "תהי sortsub פונקציה המקבלת מערך לא ממוין של $n$ מספרים ממשים, ומחזירה קבוצה ממוינת של $\\sqrt{n}$ הערכים הנמוכים ביותר במערך.\n\nמי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $\\Omega(n \\log n)$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לא ניתן לומר דבר על הסיבוכיות של sortsub",
     "html": "לא ניתן לומר דבר על הסיבוכיות של sortsub"
    },
    {
     "id": "c",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $O(n \\log(\\log n))$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n \\log(\\log n))</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $O(\\sqrt{n})$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\sqrt{n})</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q45",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "תהי sortsub פונקציה המקבלת מערך לא ממוין של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים ממשים, ומחזירה קבוצה ממוינת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msqrt><mi>n</mi></msqrt></mrow><annotation encoding=\"application/x-tex\">\\sqrt{n}</annotation></semantics></math></span> הערכים הנמוכים ביותר במערך.<br><br>מי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 46,
   "kind": "mcq",
   "topic": "sorting_selection",
   "points": 7.5,
   "question": "תהי sortsub פונקציה המקבלת מערך לא ממוין של $n$ מספרים ממשים, ומחזירה קבוצה ממוינת של $\\sqrt{n}$ הערכים הנמוכים ביותר במערך.\n\nמי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לא ניתן לומר דבר על הסיבוכיות של sortsub",
     "html": "לא ניתן לומר דבר על הסיבוכיות של sortsub"
    },
    {
     "id": "b",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $\\Omega(n \\log(\\log n))$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log(\\log n))</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $\\theta(n \\sqrt{n})$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n \\sqrt{n})</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $O(n + \\log(\\sqrt{n}))$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>+</mo><mi>log</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n + \\log(\\sqrt{n}))</annotation></semantics></math></span>"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q46",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "תהי sortsub פונקציה המקבלת מערך לא ממוין של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים ממשים, ומחזירה קבוצה ממוינת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msqrt><mi>n</mi></msqrt></mrow><annotation encoding=\"application/x-tex\">\\sqrt{n}</annotation></semantics></math></span> הערכים הנמוכים ביותר במערך.<br><br>מי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 47,
   "kind": "mcq",
   "topic": "sorting_selection",
   "points": 7.5,
   "question": "תהי sortsub פונקציה המקבלת מערך לא ממוין של $n$ מספרים ממשים, ומחזירה קבוצה ממוינת של $\\sqrt{n}$ הערכים הנמוכים ביותר במערך.\n\nמי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $\\Omega(n + \\log(\\sqrt{n}))$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>+</mo><mi>log</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n + \\log(\\sqrt{n}))</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לא ניתן לומר דבר על הסיבוכיות של sortsub",
     "html": "לא ניתן לומר דבר על הסיבוכיות של sortsub"
    },
    {
     "id": "c",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $\\theta(n \\log \\log n)$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n \\log \\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $\\Omega(n \\log n)$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log n)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q47",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "תהי sortsub פונקציה המקבלת מערך לא ממוין של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים ממשים, ומחזירה קבוצה ממוינת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msqrt><mi>n</mi></msqrt></mrow><annotation encoding=\"application/x-tex\">\\sqrt{n}</annotation></semantics></math></span> הערכים הנמוכים ביותר במערך.<br><br>מי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 48,
   "kind": "mcq",
   "topic": "sorting_selection",
   "points": 7.5,
   "question": "תהי sortsub פונקציה המקבלת מערך לא ממוין של $n$ מספרים ממשים, ומחזירה קבוצה ממוינת של $\\sqrt{n}$ הערכים הנמוכים ביותר במערך.\n\nמי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $\\Omega(n + \\sqrt{n})$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>+</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n + \\sqrt{n})</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לא ניתן לומר דבר על הסיבוכיות של sortsub",
     "html": "לא ניתן לומר דבר על הסיבוכיות של sortsub"
    },
    {
     "id": "c",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $\\Omega(n \\log \\log n)$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log \\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $\\Omega(n \\log n)$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log n)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q48",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "תהי sortsub פונקציה המקבלת מערך לא ממוין של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים ממשים, ומחזירה קבוצה ממוינת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msqrt><mi>n</mi></msqrt></mrow><annotation encoding=\"application/x-tex\">\\sqrt{n}</annotation></semantics></math></span> הערכים הנמוכים ביותר במערך.<br><br>מי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 49,
   "kind": "mcq",
   "topic": "complexity",
   "points": 7.5,
   "question": "מי מהטענות הבאות נכונה?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "אם $T_1(n)=O(f(n))$ וגם $T_2(n)=O(f(n))$ אז $T_1(n)=O(T_2(n))$",
     "html": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=O(f(n))</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(f(n))</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=O(T_2(n))</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "אם $T_1(n)=\\theta(f(n))$ וגם $T_2(n)=\\theta(f(n))$ אז $T_2(n)=O(T_1(n)+f(n))$",
     "html": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=\\theta(f(n))</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=\\theta(f(n))</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(T_1(n)+f(n))</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "אם $T_1(n)=O(f(n))$ וגם $T_2(n)=O(g(f(n)))$ אז $T_2(n)=O(g(T_1(n)))$",
     "html": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=O(f(n))</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(g(f(n)))</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(g(T_1(n)))</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אם $T_1(n)=\\theta(\\sqrt{f(n)})$ וגם $T_2(n)=O(f(n))$ אז $T_2(n)=O(T_1(n))$",
     "html": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><msqrt><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow></msqrt><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=\\theta(\\sqrt{f(n)})</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(f(n))</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(T_1(n))</annotation></semantics></math></span>"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "Option A: No, for example T1=n^2, T2=n, f=n^2. Option C: No, T1=n, T2=n^2, f=n, g=n",
   "id": "24B-A-Q49",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "סיבוכיות וחסמים אסימפטוטיים",
   "questionHtml": "מי מהטענות הבאות נכונה?",
   "explanationHtml": "Option A: No, for example T1=n^2, T2=n, f=n^2. Option C: No, T1=n, T2=n^2, f=n, g=n",
   "pointsTotal": 7.5
  },
  {
   "num": 50,
   "kind": "mcq",
   "topic": "complexity",
   "points": 7.5,
   "question": "מי מהטענות הבאות נכונה?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "אם $T_1(n)=O(g(n))$ וגם $T_2(n)=O(g(n))$ אז $T_1(n)=O(T_2(n))$",
     "html": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=O(g(n))</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(g(n))</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=O(T_2(n))</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "אם $T_1(n)=\\theta(g(n))$ וגם $T_2(n)=O(g(n))$ אז $T_2(n)=O(T_1(n))$",
     "html": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=\\theta(g(n))</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(g(n))</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(T_1(n))</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "אם $T_1(n)=O(g(n))$ וגם $T_2(n)=O(g(f(n)))$ אז $T_2(n)=O(g(T_1(n)))$",
     "html": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=O(g(n))</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(g(f(n)))</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(g(T_1(n)))</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אם $T_1(n)=\\theta(g(n))$ וגם $T_2(n)=\\theta(g(n))$ אז $T_2(n)=O(T_1(g(n)))$",
     "html": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=\\theta(g(n))</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=\\theta(g(n))</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(T_1(g(n)))</annotation></semantics></math></span>"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q50",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "סיבוכיות וחסמים אסימפטוטיים",
   "questionHtml": "מי מהטענות הבאות נכונה?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 51,
   "kind": "mcq",
   "topic": "complexity",
   "points": 7.5,
   "question": "מי מהטענות הבאות נכונה?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "אם $T_1(n)=O(f(n))$ וגם $T_2(n)=O(f(n))$ אז $T_1(n)=O(T_2(n))$",
     "html": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=O(f(n))</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(f(n))</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=O(T_2(n))</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "אם $T_1(n)=O(f(n))$ וגם $T_2(n)=O(g(f(n)))$ אז $T_2(n)=O(g(T_1(n)))$",
     "html": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=O(f(n))</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(g(f(n)))</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(g(T_1(n)))</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "אם $T_1(n)=\\theta(f(n))$ וגם $T_2(n)=O(f(n))$ אז $T_2(n)=O(23 \\cdot T_1(n))$",
     "html": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=\\theta(f(n))</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(f(n))</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mn>23</mn><mo>⋅</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(23 \\cdot T_1(n))</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אם $T_1(n)=\\theta(f(n))$ וגם $T_2(n)=\\theta(f(n))$ אז $T_2(n)=O(T_1(f(n)))$",
     "html": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=\\theta(f(n))</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=\\theta(f(n))</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(T_1(f(n)))</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q51",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "סיבוכיות וחסמים אסימפטוטיים",
   "questionHtml": "מי מהטענות הבאות נכונה?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 52,
   "kind": "mcq",
   "topic": "complexity",
   "points": 7.5,
   "question": "מי מהטענות הבאות נכונה?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "אם $T_1(n)=O(g(n))$ וגם $T_2(n)=O(g(n))$ אז $T_1(n)=O(T_2(n))$",
     "html": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=O(g(n))</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(g(n))</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=O(T_2(n))</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "אם $T_1(n)=O(g(n))$ וגם $T_2(n)=O(g(f(n)))$ אז $T_2(n)=O(g(T_1(n)))$",
     "html": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=O(g(n))</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(g(f(n)))</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(g(T_1(n)))</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "אם $T_1(n)=\\theta(g(n))$ וגם $T_2(n)=O(g(n))$ אז $T_2(n)=O\\left(\\frac{T_1(n)}{2}\\right)$",
     "html": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=\\theta(g(n))</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(g(n))</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mrow><mo fence=\"true\">(</mo><mfrac><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O\\left(\\frac{T_1(n)}{2}\\right)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אם $T_1(n)=\\theta(g(n))$ וגם $T_2(n)=\\theta(g(n))$ אז $T_2(n)=O(T_1(g(n)))$",
     "html": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_1(n)=\\theta(g(n))</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=\\theta(g(n))</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T_2(n)=O(T_1(g(n)))</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q52",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "סיבוכיות וחסמים אסימפטוטיים",
   "questionHtml": "מי מהטענות הבאות נכונה?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 53,
   "kind": "mcq",
   "topic": "trees_induction",
   "points": 7.5,
   "question": "מה כמות הקודקודים המינימלית בעץ מלא בגובה $h$ ?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$2h$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">2h</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$2^h$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>h</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^h</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$2h+1$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>h</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2h+1</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$2(h+1)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo stretchy=\"false\">(</mo><mi>h</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">2(h+1)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q53",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצים בינאריים, סריקות והוכחות באינדוקציה",
   "questionHtml": "מה כמות הקודקודים המינימלית בעץ מלא בגובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">h</annotation></semantics></math></span> ?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 54,
   "kind": "mcq",
   "topic": "trees_induction",
   "points": 7.5,
   "question": "מה כמות הקודקודים המינימלית בעץ בינארי בגובה $h$ ?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$2^h$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>h</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^h</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$2+h$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">2+h</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$1+h$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">1+h</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$2h$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">2h</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q54",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצים בינאריים, סריקות והוכחות באינדוקציה",
   "questionHtml": "מה כמות הקודקודים המינימלית בעץ בינארי בגובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">h</annotation></semantics></math></span> ?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 55,
   "kind": "mcq",
   "topic": "trees_induction",
   "points": 7.5,
   "question": "מה כמות הקודקודים המינימלית בעץ שלם בגובה $h$ ?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$2^h$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>h</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^h</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$2(h+1)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo stretchy=\"false\">(</mo><mi>h</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">2(h+1)</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$2^{h+1}-1$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>h</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{h+1}-1</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$2(h-1)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo stretchy=\"false\">(</mo><mi>h</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">2(h-1)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q55",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצים בינאריים, סריקות והוכחות באינדוקציה",
   "questionHtml": "מה כמות הקודקודים המינימלית בעץ שלם בגובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">h</annotation></semantics></math></span> ?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 56,
   "kind": "mcq",
   "topic": "trees_induction",
   "points": 7.5,
   "question": "מה כמות העלים המקסימלית בעץ מלא בגובה $h$ ?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$2^h$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>h</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^h</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$2h+1$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>h</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2h+1</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$2(h+1)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo stretchy=\"false\">(</mo><mi>h</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">2(h+1)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$2h$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">2h</annotation></semantics></math></span>"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q56",
   "partKey": "",
   "examCode": "24B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד א (16.7.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצים בינאריים, סריקות והוכחות באינדוקציה",
   "questionHtml": "מה כמות העלים המקסימלית בעץ מלא בגובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">h</annotation></semantics></math></span> ?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 1,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "מי מהסדרות הבאות יכולה להיות פלט בסריקת preorder של עץ AVL",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$10,3,5,6,7,13,11,12,14$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">10,3,5,6,7,13,11,12,14</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$10,5,6,3,7,13,11,12,14$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">10,5,6,3,7,13,11,12,14</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$10,5,3,6,7,14,13,11,12$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>14</mn><mo separator=\"true\">,</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">10,5,3,6,7,14,13,11,12</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$10,5,3,6,7,12,11,13,14$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">10,5,3,6,7,12,11,13,14</annotation></semantics></math></span>"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-B-Q1",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "מי מהסדרות הבאות יכולה להיות פלט בסריקת preorder של עץ AVL",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 2,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "מי מהסדרות הבאות **אינה** יכולה להיות פלט בסריקת preorder של עץ AVL",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$10,5,3,6,7,12,11,13,14$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">10,5,3,6,7,12,11,13,14</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$10,5,3,7,6,12,11,14,13$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>14</mn><mo separator=\"true\">,</mo><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">10,5,3,7,6,12,11,14,13</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$10,5,3,6,7,14,13,11,12$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>14</mn><mo separator=\"true\">,</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">10,5,3,6,7,14,13,11,12</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$10,5,3,6,7,12,11,14,13$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>14</mn><mo separator=\"true\">,</mo><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">10,5,3,6,7,12,11,14,13</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-B-Q2",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "מי מהסדרות הבאות <strong>אינה</strong> יכולה להיות פלט בסריקת preorder של עץ AVL",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 3,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "מי מהסדרות הבאות **אינה** יכולה להיות פלט בסריקת preorder של עץ AVL",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$11,6,4,7,8,13,12,14,15$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>14</mn><mo separator=\"true\">,</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">11,6,4,7,8,13,12,14,15</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$11,6,4,8,7,13,12,15,14$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>15</mn><mo separator=\"true\">,</mo><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">11,6,4,8,7,13,12,15,14</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$11,6,4,7,8,13,12,15,14$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>15</mn><mo separator=\"true\">,</mo><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">11,6,4,7,8,13,12,15,14</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$11,6,4,7,8,15,14,12,13$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>15</mn><mo separator=\"true\">,</mo><mn>14</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">11,6,4,7,8,15,14,12,13</annotation></semantics></math></span>"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-B-Q3",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "מי מהסדרות הבאות <strong>אינה</strong> יכולה להיות פלט בסריקת preorder של עץ AVL",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 4,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "מי מהסדרות הבאות יכולה להיות פלט בסריקת preorder של עץ AVL",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$11,6,4,7,13,8,12,14,15$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>14</mn><mo separator=\"true\">,</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">11,6,4,7,13,8,12,14,15</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$11,6,4,8,7,13,12,14,15$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>14</mn><mo separator=\"true\">,</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">11,6,4,8,7,13,12,14,15</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$13,6,4,7,8,11,14,12,15$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>13</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>14</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">13,6,4,7,8,11,14,12,15</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$15,12,7,6,48,11,13,14$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>48</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">15,12,7,6,48,11,13,14</annotation></semantics></math></span>"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-B-Q4",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "מי מהסדרות הבאות יכולה להיות פלט בסריקת preorder של עץ AVL",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 5,
   "kind": "mcq",
   "topic": "sorting_selection",
   "points": 7.5,
   "question": "יהי $T$ עץ החלטה המתאר את השאילתות באלגוריתם מיון ל-$n$ מספרים שונים. מי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לא יתכן שקיים עלה שעומקו $n^2$",
     "html": "לא יתכן שקיים עלה שעומקו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "כמות הקודקודים בעץ הוא $n!$",
     "html": "כמות הקודקודים בעץ הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">n!</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "יתכן שקיים מסלול בעץ שאורכו $n-1$",
     "html": "יתכן שקיים מסלול בעץ שאורכו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "יתכן שלפחות חצי מהמסלולים בעץ אורכם $n-1$",
     "html": "יתכן שלפחות חצי מהמסלולים בעץ אורכם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-B-Q5",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ החלטה המתאר את השאילתות באלגוריתם מיון ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים שונים. מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 6,
   "kind": "mcq",
   "topic": "sorting_selection",
   "points": 7.5,
   "question": "יהי $T$ עץ החלטה המתאר את השאילתות באלגוריתם מיון ל-$n$ מספרים שונים. מי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "יתכן שקיים עלה שעומקו $n^2$",
     "html": "יתכן שקיים עלה שעומקו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "כמות הקודקודים בעץ הוא $n!-1$",
     "html": "כמות הקודקודים בעץ הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo stretchy=\"false\">!</mo><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n!-1</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "יתכן שקיים מסלול באורך $1$",
     "html": "יתכן שקיים מסלול באורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "יתכן שלפחות חצי מהמסלולים בעץ אורכם $n-1$",
     "html": "יתכן שלפחות חצי מהמסלולים בעץ אורכם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-B-Q6",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ החלטה המתאר את השאילתות באלגוריתם מיון ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים שונים. מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 7,
   "kind": "mcq",
   "topic": "sorting_selection",
   "points": 7.5,
   "question": "יהי $T$ עץ החלטה המתאר את השאילתות באלגוריתם מיון ל-$n$ מספרים שונים. מי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "יתכן שקיים מסלול שאורכו $n$",
     "html": "יתכן שקיים מסלול שאורכו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "יתכן שלפחות חצי מהמסלולים בעץ אורכם $n-1$",
     "html": "יתכן שלפחות חצי מהמסלולים בעץ אורכם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "יתכן שקיים מסלול באורך $1$",
     "html": "יתכן שקיים מסלול באורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "כמות העלים בעץ קטנה מכמות הקודקודים הפנימיים",
     "html": "כמות העלים בעץ קטנה מכמות הקודקודים הפנימיים"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-B-Q7",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ החלטה המתאר את השאילתות באלגוריתם מיון ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים שונים. מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 8,
   "kind": "mcq",
   "topic": "sorting_selection",
   "points": 7.5,
   "question": "יהי $T$ עץ החלטה המתאר את השאילתות באלגוריתם מיון ל-$n$ מספרים שונים. מי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "יתכן שלפחות חצי מהמסלולים בעץ אורכם $n-1$",
     "html": "יתכן שלפחות חצי מהמסלולים בעץ אורכם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "כמות העלים בעץ שווה לכמות הקודקודים הפנימיים",
     "html": "כמות העלים בעץ שווה לכמות הקודקודים הפנימיים"
    },
    {
     "id": "c",
     "type": "text",
     "value": "לא יתכן שקיים מסלול באורך $1$",
     "html": "לא יתכן שקיים מסלול באורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "יתכן שגובה העץ הוא $\\Omega(n^3)$",
     "html": "יתכן שגובה העץ הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>3</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n^3)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "acceptedIds": [
    "c",
    "d"
   ],
   "explanation": "בטופס זה מסומנות כנכונות שתי תשובות (ג' ו-ד'); שתיהן מתקבלות.",
   "id": "24B-B-Q8",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ החלטה המתאר את השאילתות באלגוריתם מיון ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים שונים. מי מהטענות הבאות נכונה:",
   "explanationHtml": "בטופס זה מסומנות כנכונות שתי תשובות (ג' ו-ד'); שתיהן מתקבלות.",
   "pointsTotal": 7.5
  },
  {
   "num": 9,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "נתונה הנוסחה הרקורסיבית הבאה: $T(n) = 6T\\left(\\frac{n}{2}\\right) + n^2$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ניתן לפתור בעזרת משפט האב – לפי המקרה הראשון",
     "html": "ניתן לפתור בעזרת משפט האב – לפי המקרה הראשון"
    },
    {
     "id": "b",
     "type": "text",
     "value": "ניתן לפתור בעזרת משפט האב – לפי המקרה השני",
     "html": "ניתן לפתור בעזרת משפט האב – לפי המקרה השני"
    },
    {
     "id": "c",
     "type": "text",
     "value": "ניתן לפתור בעזרת משפט האב – לפי המקרה השלישי",
     "html": "ניתן לפתור בעזרת משפט האב – לפי המקרה השלישי"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא ניתן לפתור בעזרת שיטת האב",
     "html": "לא ניתן לפתור בעזרת שיטת האב"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: a=6, b=2, log_2 6 = 2.something, case 1: n^2 = O(n^(2.x-eps))",
   "id": "24B-B-Q9",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "נתונה הנוסחה הרקורסיבית הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>6</mn><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">T(n) = 6T\\left(\\frac{n}{2}\\right) + n^2</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanationHtml": "הערת הפתרון הרשמי: a=6, b=2, log_2 6 = 2.something, case 1: n^2 = O(n^(2.x-eps))",
   "pointsTotal": 7.5
  },
  {
   "num": 10,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "נתונה הנוסחה הרקורסיבית הבאה: $T(n) = T\\left(\\frac{n}{3}\\right) + n^2$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ניתן לפתור בעזרת משפט האב – לפי המקרה הראשון",
     "html": "ניתן לפתור בעזרת משפט האב – לפי המקרה הראשון"
    },
    {
     "id": "b",
     "type": "text",
     "value": "ניתן לפתור בעזרת משפט האב – לפי המקרה השני",
     "html": "ניתן לפתור בעזרת משפט האב – לפי המקרה השני"
    },
    {
     "id": "c",
     "type": "text",
     "value": "ניתן לפתור בעזרת משפט האב – לפי המקרה השלישי",
     "html": "ניתן לפתור בעזרת משפט האב – לפי המקרה השלישי"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא ניתן לפתור בעזרת שיטת האב",
     "html": "לא ניתן לפתור בעזרת שיטת האב"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: a=1, b=3, log_3 1 = 0, case 3: n^2 = Omega(n^(0+eps)); a*f(n/b) <= c*f(n): 1*f(n/3) <= c*f(n), n^2/9 <= c*n^2, 1/9 <= c",
   "id": "24B-B-Q10",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "נתונה הנוסחה הרקורסיבית הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><mn>3</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">T(n) = T\\left(\\frac{n}{3}\\right) + n^2</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanationHtml": "הערת הפתרון הרשמי: a=1, b=3, log_3 1 = 0, case 3: n^2 = Omega(n^(0+eps)); a*f(n/b) &lt;= c*f(n): 1*f(n/3) &lt;= c*f(n), n^2/9 &lt;= c*n^2, 1/9 &lt;= c",
   "pointsTotal": 7.5
  },
  {
   "num": 11,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "נתונה הנוסחה הרקורסיבית הבאה: $T(n) = T\\left(\\frac{n}{4}\\right) + 1024$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ניתן לפתור בעזרת משפט האב – לפי המקרה הראשון",
     "html": "ניתן לפתור בעזרת משפט האב – לפי המקרה הראשון"
    },
    {
     "id": "b",
     "type": "text",
     "value": "ניתן לפתור בעזרת משפט האב – לפי המקרה השני",
     "html": "ניתן לפתור בעזרת משפט האב – לפי המקרה השני"
    },
    {
     "id": "c",
     "type": "text",
     "value": "ניתן לפתור בעזרת משפט האב – לפי המקרה השלישי",
     "html": "ניתן לפתור בעזרת משפט האב – לפי המקרה השלישי"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא ניתן לפתור בעזרת שיטת האב",
     "html": "לא ניתן לפתור בעזרת שיטת האב"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: a=1, b=4, log_4 1 = 0, case 2: f(n)=1024=Theta(1), T(n)=logn",
   "id": "24B-B-Q11",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "נתונה הנוסחה הרקורסיבית הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><mn>1024</mn></mrow><annotation encoding=\"application/x-tex\">T(n) = T\\left(\\frac{n}{4}\\right) + 1024</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanationHtml": "הערת הפתרון הרשמי: a=1, b=4, log_4 1 = 0, case 2: f(n)=1024=Theta(1), T(n)=logn",
   "pointsTotal": 7.5
  },
  {
   "num": 12,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "נתונה הנוסחה הרקורסיבית הבאה: $T(n) = 3T\\left(\\frac{3n}{2}\\right) + \\frac{3n}{2}$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ניתן לפתור בעזרת משפט האב – לפי המקרה הראשון",
     "html": "ניתן לפתור בעזרת משפט האב – לפי המקרה הראשון"
    },
    {
     "id": "b",
     "type": "text",
     "value": "ניתן לפתור בעזרת משפט האב – לפי המקרה השני",
     "html": "ניתן לפתור בעזרת משפט האב – לפי המקרה השני"
    },
    {
     "id": "c",
     "type": "text",
     "value": "ניתן לפתור בעזרת משפט האב – לפי המקרה השלישי",
     "html": "ניתן לפתור בעזרת משפט האב – לפי המקרה השלישי"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא ניתן לפתור בעזרת שיטת האב",
     "html": "לא ניתן לפתור בעזרת שיטת האב"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: a=3, b=2/3 < 1 not possible",
   "id": "24B-B-Q12",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "נתונה הנוסחה הרקורסיבית הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>3</mn><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mrow><mn>3</mn><mi>n</mi></mrow><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><mfrac><mrow><mn>3</mn><mi>n</mi></mrow><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">T(n) = 3T\\left(\\frac{3n}{2}\\right) + \\frac{3n}{2}</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanationHtml": "הערת הפתרון הרשמי: a=3, b=2/3 &lt; 1 not possible",
   "pointsTotal": 7.5
  },
  {
   "num": 13,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "בהנתן נוסחת הנסיגה הבאה: $T(n)=aT(n/2)+n^2$.\nמי מבין הערכים הבאים של המשתנה $a$ עבורו נקבל סיבוכיות גדולה מ-$n^2$ אך קטנה מ-$n^3$?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$2$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$3$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$4$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$8$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: log_2 a: a=4, log_2 4 = 2, case 2, f(n)=n^2=Theta(n^2), T(n)=n^2 logn",
   "id": "24B-B-Q13",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "בהנתן נוסחת הנסיגה הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>a</mi><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo stretchy=\"false\">)</mo><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">T(n)=aT(n/2)+n^2</annotation></semantics></math></span>.<br>מי מבין הערכים הבאים של המשתנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> עבורו נקבל סיבוכיות גדולה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span> אך קטנה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>3</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^3</annotation></semantics></math></span>?",
   "explanationHtml": "הערת הפתרון הרשמי: log_2 a: a=4, log_2 4 = 2, case 2, f(n)=n^2=Theta(n^2), T(n)=n^2 logn",
   "pointsTotal": 7.5
  },
  {
   "num": 14,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "בהנתן נוסחת הנסיגה הבאה: $T(n)=aT(n/2)+n^3$.\nמי מבין הערכים הבאים של המשתנה $a$ עבורו נקבל סיבוכיות גדולה מ-$n^3$ אך קטנה מ-$n^4$?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$29.1$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>29.1</mn></mrow><annotation encoding=\"application/x-tex\">29.1</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$6.5$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6.5</mn></mrow><annotation encoding=\"application/x-tex\">6.5</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$9.3$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9.3</mn></mrow><annotation encoding=\"application/x-tex\">9.3</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$7.5$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7.5</mn></mrow><annotation encoding=\"application/x-tex\">7.5</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: a=9.3, b=2, log_2 9.3 = 3.something, case 1: f(n)=n^3 = O(n^(3.x-eps)), T(n)=Theta(n^3.x)",
   "id": "24B-B-Q14",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "בהנתן נוסחת הנסיגה הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>a</mi><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo stretchy=\"false\">)</mo><mo>+</mo><msup><mi>n</mi><mn>3</mn></msup></mrow><annotation encoding=\"application/x-tex\">T(n)=aT(n/2)+n^3</annotation></semantics></math></span>.<br>מי מבין הערכים הבאים של המשתנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> עבורו נקבל סיבוכיות גדולה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>3</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^3</annotation></semantics></math></span> אך קטנה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>4</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^4</annotation></semantics></math></span>?",
   "explanationHtml": "הערת הפתרון הרשמי: a=9.3, b=2, log_2 9.3 = 3.something, case 1: f(n)=n^3 = O(n^(3.x-eps)), T(n)=Theta(n^3.x)",
   "pointsTotal": 7.5
  },
  {
   "num": 15,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "בהנתן נוסחת הנסיגה הבאה: $T(n)=aT(n/2)+n$.\nמי מבין הערכים הבאים של המשתנה $a$ עבורו נקבל סיבוכיות גדולה מ-$n$ אך קטנה מ-$n^2$?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$8$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$4$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$2$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$1$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: a=2, b=2, log_2 2 = 1, case 2: f(n)=n=Theta(n), T(n)=Theta(nlogn)",
   "id": "24B-B-Q15",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "בהנתן נוסחת הנסיגה הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>a</mi><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">T(n)=aT(n/2)+n</annotation></semantics></math></span>.<br>מי מבין הערכים הבאים של המשתנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> עבורו נקבל סיבוכיות גדולה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> אך קטנה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span>?",
   "explanationHtml": "הערת הפתרון הרשמי: a=2, b=2, log_2 2 = 1, case 2: f(n)=n=Theta(n), T(n)=Theta(nlogn)",
   "pointsTotal": 7.5
  },
  {
   "num": 16,
   "kind": "mcq",
   "topic": "recurrences",
   "points": 7.5,
   "question": "בהנתן נוסחת הנסיגה הבאה: $T(n)=aT(n/4)+n^2$.\nמי מבין הערכים הבאים של המשתנה $a$ עבורו נקבל סיבוכיות גדולה מ-$n^2$ אך קטנה מ-$n^3$?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$64$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>64</mn></mrow><annotation encoding=\"application/x-tex\">64</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$128$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>128</mn></mrow><annotation encoding=\"application/x-tex\">128</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$16$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$2$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: a=16, b=4, log_4 16 = 2, f(n)=n^2=Theta(n^2), case 2, T(n)=n^2 logn",
   "id": "24B-B-Q16",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "בהנתן נוסחת הנסיגה הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>a</mi><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>4</mn><mo stretchy=\"false\">)</mo><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">T(n)=aT(n/4)+n^2</annotation></semantics></math></span>.<br>מי מבין הערכים הבאים של המשתנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> עבורו נקבל סיבוכיות גדולה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span> אך קטנה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>3</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^3</annotation></semantics></math></span>?",
   "explanationHtml": "הערת הפתרון הרשמי: a=16, b=4, log_4 16 = 2, f(n)=n^2=Theta(n^2), case 2, T(n)=n^2 logn",
   "pointsTotal": 7.5
  },
  {
   "num": 17,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "יהי $T$ עץ ריק. מכניסים את האיברים הבאים לעץ $T$ בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):\n\n$5,8,42,4,9,7,3,6$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $42$ נמצא באחד מעלי העץ",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>42</mn></mrow><annotation encoding=\"application/x-tex\">42</annotation></semantics></math></span> נמצא באחד מעלי העץ"
    },
    {
     "id": "b",
     "type": "text",
     "value": "האיבר המינימלי אינו עלה",
     "html": "האיבר המינימלי אינו עלה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כמות הגלגולים שהתבצעו בתהליך ההכנסה היא $1$ בלבד",
     "html": "כמות הגלגולים שהתבצעו בתהליך ההכנסה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> בלבד"
    },
    {
     "id": "d",
     "type": "text",
     "value": "המפתח $7$ נמצא בשורש העץ",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> נמצא בשורש העץ"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-B-Q17",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ ריק. מכניסים את האיברים הבאים לעץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>42</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>9</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">5,8,42,4,9,7,3,6</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 18,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "יהי $T$ עץ ריק. מכניסים את האיברים הבאים לעץ $T$ בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):\n\n$5,8,4,9,7,3,6,42$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $42$ נמצא באחד מעלי העץ",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>42</mn></mrow><annotation encoding=\"application/x-tex\">42</annotation></semantics></math></span> נמצא באחד מעלי העץ"
    },
    {
     "id": "b",
     "type": "text",
     "value": "האיבר המינימלי אינו עלה",
     "html": "האיבר המינימלי אינו עלה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כמות הגלגולים שהתבצעו בתהליך ההכנסה היא $1$ בלבד",
     "html": "כמות הגלגולים שהתבצעו בתהליך ההכנסה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> בלבד"
    },
    {
     "id": "d",
     "type": "text",
     "value": "המפתח $7$ נמצא בשורש העץ",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> נמצא בשורש העץ"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-B-Q18",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ ריק. מכניסים את האיברים הבאים לעץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>9</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>42</mn></mrow><annotation encoding=\"application/x-tex\">5,8,4,9,7,3,6,42</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 19,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "יהי $T$ עץ ריק. מכניסים את האיברים הבאים לעץ $T$ בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):\n\n$5,8,4,9,7,3,6,42$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $42$ אינו אחד מעלי העץ",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>42</mn></mrow><annotation encoding=\"application/x-tex\">42</annotation></semantics></math></span> אינו אחד מעלי העץ"
    },
    {
     "id": "b",
     "type": "text",
     "value": "האיבר המינימלי אינו עלה",
     "html": "האיבר המינימלי אינו עלה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "המפתח $7$ נמצא בשורש העץ",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> נמצא בשורש העץ"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא התבצעו גלגולים בתהליך ההכנסה",
     "html": "לא התבצעו גלגולים בתהליך ההכנסה"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-B-Q19",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ ריק. מכניסים את האיברים הבאים לעץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>9</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>42</mn></mrow><annotation encoding=\"application/x-tex\">5,8,4,9,7,3,6,42</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 20,
   "kind": "mcq",
   "topic": "avl",
   "points": 7.5,
   "question": "יהי $T$ עץ ריק. מכניסים את האיברים הבאים לעץ $T$ בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):\n\n$9,5,8,4,7,3,6,42$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $42$ נמצא בעומק $2$",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>42</mn></mrow><annotation encoding=\"application/x-tex\">42</annotation></semantics></math></span> נמצא בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "האיבר המינימלי נמצא בעומק $3$",
     "html": "האיבר המינימלי נמצא בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כמות הגלגולים שהתבצעו בתהליך ההכנסה היא $2$ בלבד",
     "html": "כמות הגלגולים שהתבצעו בתהליך ההכנסה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> בלבד"
    },
    {
     "id": "d",
     "type": "text",
     "value": "המפתח $7$ נמצא בשורש העץ",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> נמצא בשורש העץ"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-B-Q20",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ ריק. מכניסים את האיברים הבאים לעץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> בהתאם לפעולות ההכנסה לעץ AVL (יש לקרוא את הנתונים משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>42</mn></mrow><annotation encoding=\"application/x-tex\">9,5,8,4,7,3,6,42</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 21,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה סדרת המספרים הבאה (משמאל לימין):\n\n$11,5,6,22,7,13$\n\nהשתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל $11$:\n\n$h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 7) + 1)\\right) \\bmod 11$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $13$ ייכנס לתא באינדקס $2$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">13</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> במערך."
    },
    {
     "id": "b",
     "type": "text",
     "value": "המפתח $5$ ייכנס לתא באינדקס $0$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> במערך."
    },
    {
     "id": "c",
     "type": "text",
     "value": "המפתח $7$ ייכנס לתא באינדקס $0$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> במערך."
    },
    {
     "id": "d",
     "type": "text",
     "value": "המפתח $22$ ייכנס לתא באינדקס $2$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">22</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> במערך."
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: 22 mod 11=0 occupied, 1+22mod7=1+1=2, 0+2=2 vacant; 13 mod 11=2 occupied, 1+13mod7=1+6=7, 2+7=9 vacant",
   "id": "24B-B-Q21",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה סדרת המספרים הבאה (משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>22</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">11,5,6,22,7,13</annotation></semantics></math></span><br><br>השתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>+</mo><mi>i</mi><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 7) + 1)\\right) \\bmod 11</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanationHtml": "הערת הפתרון הרשמי: 22 mod 11=0 occupied, 1+22mod7=1+1=2, 0+2=2 vacant; 13 mod 11=2 occupied, 1+13mod7=1+6=7, 2+7=9 vacant",
   "pointsTotal": 7.5
  },
  {
   "num": 22,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה סדרת המספרים הבאה (משמאל לימין):\n\n$11,5,6,22,7,13$\n\nהשתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל $11$:\n\n$h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 7) + 1)\\right) \\bmod 11$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $7$ ייכנס לתא באינדקס $9$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">9</annotation></semantics></math></span> במערך."
    },
    {
     "id": "b",
     "type": "text",
     "value": "המפתח $5$ ייכנס לתא באינדקס $0$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> במערך."
    },
    {
     "id": "c",
     "type": "text",
     "value": "המפתח $13$ ייכנס לתא באינדקס $9$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">13</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">9</annotation></semantics></math></span> במערך."
    },
    {
     "id": "d",
     "type": "text",
     "value": "המפתח $22$ ייכנס לתא באינדקס $0$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">22</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> במערך."
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: 22 mod 11=0 occupied, 1+22mod7=1+1=2, 0+2=2 vacant; 13 mod 11=2 occupied, 1+13mod7=1+6=7, 2+7=9 vacant",
   "id": "24B-B-Q22",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה סדרת המספרים הבאה (משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>22</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">11,5,6,22,7,13</annotation></semantics></math></span><br><br>השתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>+</mo><mi>i</mi><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 7) + 1)\\right) \\bmod 11</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanationHtml": "הערת הפתרון הרשמי: 22 mod 11=0 occupied, 1+22mod7=1+1=2, 0+2=2 vacant; 13 mod 11=2 occupied, 1+13mod7=1+6=7, 2+7=9 vacant",
   "pointsTotal": 7.5
  },
  {
   "num": 23,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה סדרת המספרים הבאה (משמאל לימין):\n\n$11,5,6,22,7,13$\n\nהשתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל $11$:\n\n$h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 7) + 1)\\right) \\bmod 11$\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "המפתח $7$ ייכנס לתא באינדקס $5$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> במערך."
    },
    {
     "id": "b",
     "type": "text",
     "value": "המפתח $5$ ייכנס לתא באינדקס $5$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> במערך."
    },
    {
     "id": "c",
     "type": "text",
     "value": "המפתח $13$ ייכנס לתא באינדקס $0$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">13</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> במערך."
    },
    {
     "id": "d",
     "type": "text",
     "value": "המפתח $22$ ייכנס לתא באינדקס $0$ במערך.",
     "html": "המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">22</annotation></semantics></math></span> ייכנס לתא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> במערך."
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: 22 mod 11=0 occupied, 1+22mod7=1+1=2, 0+2=2 vacant; 13 mod 11=2 occupied, 1+13mod7=1+6=7, 2+7=9 vacant",
   "id": "24B-B-Q23",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה סדרת המספרים הבאה (משמאל לימין):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>22</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">11,5,6,22,7,13</annotation></semantics></math></span><br><br>השתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>+</mo><mi>i</mi><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 11 + i((x \\bmod 7) + 1)\\right) \\bmod 11</annotation></semantics></math></span><br><br>מי מהטענות הבאות נכונה:",
   "explanationHtml": "הערת הפתרון הרשמי: 22 mod 11=0 occupied, 1+22mod7=1+1=2, 0+2=2 vacant; 13 mod 11=2 occupied, 1+13mod7=1+6=7, 2+7=9 vacant",
   "pointsTotal": 7.5
  },
  {
   "num": 24,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה טבלת גיבוב בשיטת הגיבוב הלינארי, המשתמשת בפונקציית הגיבוב הבאה: $h(x) = x \\bmod 10$\n\nהטבלה הנתונה (אינדקס: ערך): $A[1]$: $61$, $A[2]$: $52$, $A[3]$: $93$, $A[4]$: $11$, $A[5]$: $85$, $A[6]$: $44$, $A[7]$: $73$. שאר התאים ($A[0]$, $A[8]$, $A[9]$) ריקים.\n\nאילו מהסדרות הבאות **אינה** יכולה להיות סדרת הכנסה לטבלה (יש לקרוא את הסדרות משמאל לימין):",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$52,93,61,85,73,11,44$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>52</mn><mo separator=\"true\">,</mo><mn>93</mn><mo separator=\"true\">,</mo><mn>61</mn><mo separator=\"true\">,</mo><mn>85</mn><mo separator=\"true\">,</mo><mn>73</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>44</mn></mrow><annotation encoding=\"application/x-tex\">52,93,61,85,73,11,44</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$52,93,61,85,11,44,73$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>52</mn><mo separator=\"true\">,</mo><mn>93</mn><mo separator=\"true\">,</mo><mn>61</mn><mo separator=\"true\">,</mo><mn>85</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>44</mn><mo separator=\"true\">,</mo><mn>73</mn></mrow><annotation encoding=\"application/x-tex\">52,93,61,85,11,44,73</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$93,52,61,11,85,44,73$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>93</mn><mo separator=\"true\">,</mo><mn>52</mn><mo separator=\"true\">,</mo><mn>61</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>85</mn><mo separator=\"true\">,</mo><mn>44</mn><mo separator=\"true\">,</mo><mn>73</mn></mrow><annotation encoding=\"application/x-tex\">93,52,61,11,85,44,73</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$93,61,85,52,11,44,73$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>93</mn><mo separator=\"true\">,</mo><mn>61</mn><mo separator=\"true\">,</mo><mn>85</mn><mo separator=\"true\">,</mo><mn>52</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>44</mn><mo separator=\"true\">,</mo><mn>73</mn></mrow><annotation encoding=\"application/x-tex\">93,61,85,52,11,44,73</annotation></semantics></math></span>"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: 73 - index 4 was free",
   "id": "24B-B-Q24",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה טבלת גיבוב בשיטת הגיבוב הלינארי, המשתמשת בפונקציית הגיבוב הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">h(x) = x \\bmod 10</annotation></semantics></math></span><br><br>הטבלה הנתונה (אינדקס: ערך): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>1</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[1]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>61</mn></mrow><annotation encoding=\"application/x-tex\">61</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>2</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[2]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>52</mn></mrow><annotation encoding=\"application/x-tex\">52</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>3</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[3]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>93</mn></mrow><annotation encoding=\"application/x-tex\">93</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>4</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[4]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>5</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[5]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>85</mn></mrow><annotation encoding=\"application/x-tex\">85</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>6</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[6]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>44</mn></mrow><annotation encoding=\"application/x-tex\">44</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>7</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[7]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>73</mn></mrow><annotation encoding=\"application/x-tex\">73</annotation></semantics></math></span>. שאר התאים (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>0</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[0]</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>8</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[8]</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>9</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[9]</annotation></semantics></math></span>) ריקים.<br><br>אילו מהסדרות הבאות <strong>אינה</strong> יכולה להיות סדרת הכנסה לטבלה (יש לקרוא את הסדרות משמאל לימין):",
   "explanationHtml": "הערת הפתרון הרשמי: 73 - index 4 was free",
   "pointsTotal": 7.5
  },
  {
   "num": 25,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה טבלת גיבוב בשיטת הגיבוב הלינארי, המשתמשת בפונקציית הגיבוב הבאה: $h(x) = x \\bmod 10$\n\nהטבלה הנתונה (אינדקס: ערך): $A[1]$: $61$, $A[2]$: $52$, $A[3]$: $93$, $A[4]$: $11$, $A[5]$: $85$, $A[6]$: $44$, $A[7]$: $73$. שאר התאים ($A[0]$, $A[8]$, $A[9]$) ריקים.\n\nאילו מהסדרות הבאות יכולה להיות סדרת הכנסה לטבלה (יש לקרוא את הסדרות משמאל לימין):",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$52,93,11,85,65,44,73$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>52</mn><mo separator=\"true\">,</mo><mn>93</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>85</mn><mo separator=\"true\">,</mo><mn>65</mn><mo separator=\"true\">,</mo><mn>44</mn><mo separator=\"true\">,</mo><mn>73</mn></mrow><annotation encoding=\"application/x-tex\">52,93,11,85,65,44,73</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$61,93,52,85,73,44,11$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>61</mn><mo separator=\"true\">,</mo><mn>93</mn><mo separator=\"true\">,</mo><mn>52</mn><mo separator=\"true\">,</mo><mn>85</mn><mo separator=\"true\">,</mo><mn>73</mn><mo separator=\"true\">,</mo><mn>44</mn><mo separator=\"true\">,</mo><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">61,93,52,85,73,44,11</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$93,52,61,85,11,73,44$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>93</mn><mo separator=\"true\">,</mo><mn>52</mn><mo separator=\"true\">,</mo><mn>61</mn><mo separator=\"true\">,</mo><mn>85</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>73</mn><mo separator=\"true\">,</mo><mn>44</mn></mrow><annotation encoding=\"application/x-tex\">93,52,61,85,11,73,44</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$93,61,85,52,11,44,73$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>93</mn><mo separator=\"true\">,</mo><mn>61</mn><mo separator=\"true\">,</mo><mn>85</mn><mo separator=\"true\">,</mo><mn>52</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>44</mn><mo separator=\"true\">,</mo><mn>73</mn></mrow><annotation encoding=\"application/x-tex\">93,61,85,52,11,44,73</annotation></semantics></math></span>"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: Option A: index 1 was free when 11 entered. Option B: index 4 was free when 73 entered. Option C: index 6 was free when 73 entered",
   "id": "24B-B-Q25",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה טבלת גיבוב בשיטת הגיבוב הלינארי, המשתמשת בפונקציית הגיבוב הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">h(x) = x \\bmod 10</annotation></semantics></math></span><br><br>הטבלה הנתונה (אינדקס: ערך): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>1</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[1]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>61</mn></mrow><annotation encoding=\"application/x-tex\">61</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>2</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[2]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>52</mn></mrow><annotation encoding=\"application/x-tex\">52</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>3</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[3]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>93</mn></mrow><annotation encoding=\"application/x-tex\">93</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>4</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[4]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>5</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[5]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>85</mn></mrow><annotation encoding=\"application/x-tex\">85</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>6</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[6]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>44</mn></mrow><annotation encoding=\"application/x-tex\">44</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>7</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[7]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>73</mn></mrow><annotation encoding=\"application/x-tex\">73</annotation></semantics></math></span>. שאר התאים (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>0</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[0]</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>8</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[8]</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>9</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[9]</annotation></semantics></math></span>) ריקים.<br><br>אילו מהסדרות הבאות יכולה להיות סדרת הכנסה לטבלה (יש לקרוא את הסדרות משמאל לימין):",
   "explanationHtml": "הערת הפתרון הרשמי: Option A: index 1 was free when 11 entered. Option B: index 4 was free when 73 entered. Option C: index 6 was free when 73 entered",
   "pointsTotal": 7.5
  },
  {
   "num": 26,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה טבלת גיבוב בשיטת הגיבוב הלינארי, המשתמשת בפונקציית הגיבוב הבאה: $h(x) = x \\bmod 10$\n\nהטבלה הנתונה (אינדקס: ערך): $A[1]$: $61$, $A[2]$: $52$, $A[3]$: $93$, $A[4]$: $73$, $A[5]$: $85$, $A[6]$: $44$, $A[7]$: $11$. שאר התאים ($A[0]$, $A[8]$, $A[9]$) ריקים.\n\nאילו מהסדרות הבאות יכולה להיות סדרת הכנסה לטבלה (יש לקרוא את הסדרות משמאל לימין):",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$52,93,61,85,73,11,44$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>52</mn><mo separator=\"true\">,</mo><mn>93</mn><mo separator=\"true\">,</mo><mn>61</mn><mo separator=\"true\">,</mo><mn>85</mn><mo separator=\"true\">,</mo><mn>73</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>44</mn></mrow><annotation encoding=\"application/x-tex\">52,93,61,85,73,11,44</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$52,93,61,85,11,44,73$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>52</mn><mo separator=\"true\">,</mo><mn>93</mn><mo separator=\"true\">,</mo><mn>61</mn><mo separator=\"true\">,</mo><mn>85</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>44</mn><mo separator=\"true\">,</mo><mn>73</mn></mrow><annotation encoding=\"application/x-tex\">52,93,61,85,11,44,73</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$93,52,61,11,85,44,73$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>93</mn><mo separator=\"true\">,</mo><mn>52</mn><mo separator=\"true\">,</mo><mn>61</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>85</mn><mo separator=\"true\">,</mo><mn>44</mn><mo separator=\"true\">,</mo><mn>73</mn></mrow><annotation encoding=\"application/x-tex\">93,52,61,11,85,44,73</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$93,61,85,52,73,44,11$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>93</mn><mo separator=\"true\">,</mo><mn>61</mn><mo separator=\"true\">,</mo><mn>85</mn><mo separator=\"true\">,</mo><mn>52</mn><mo separator=\"true\">,</mo><mn>73</mn><mo separator=\"true\">,</mo><mn>44</mn><mo separator=\"true\">,</mo><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">93,61,85,52,73,44,11</annotation></semantics></math></span>"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: Option A: index 6 was free when 11 entered. Option B: index 4 was free when 11 entered. Option C: index 4 was free when 11 entered",
   "id": "24B-B-Q26",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה טבלת גיבוב בשיטת הגיבוב הלינארי, המשתמשת בפונקציית הגיבוב הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">h(x) = x \\bmod 10</annotation></semantics></math></span><br><br>הטבלה הנתונה (אינדקס: ערך): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>1</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[1]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>61</mn></mrow><annotation encoding=\"application/x-tex\">61</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>2</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[2]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>52</mn></mrow><annotation encoding=\"application/x-tex\">52</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>3</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[3]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>93</mn></mrow><annotation encoding=\"application/x-tex\">93</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>4</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[4]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>73</mn></mrow><annotation encoding=\"application/x-tex\">73</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>5</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[5]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>85</mn></mrow><annotation encoding=\"application/x-tex\">85</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>6</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[6]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>44</mn></mrow><annotation encoding=\"application/x-tex\">44</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>7</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[7]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>. שאר התאים (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>0</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[0]</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>8</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[8]</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>9</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[9]</annotation></semantics></math></span>) ריקים.<br><br>אילו מהסדרות הבאות יכולה להיות סדרת הכנסה לטבלה (יש לקרוא את הסדרות משמאל לימין):",
   "explanationHtml": "הערת הפתרון הרשמי: Option A: index 6 was free when 11 entered. Option B: index 4 was free when 11 entered. Option C: index 4 was free when 11 entered",
   "pointsTotal": 7.5
  },
  {
   "num": 27,
   "kind": "mcq",
   "topic": "hashing",
   "points": 7.5,
   "question": "נתונה טבלת גיבוב בשיטת הגיבוב הלינארי, המשתמשת בפונקציית הגיבוב הבאה: $h(x) = x \\bmod 10$\n\nהטבלה הנתונה (אינדקס: ערך): $A[1]$: $61$, $A[2]$: $52$, $A[3]$: $93$, $A[4]$: $73$, $A[5]$: $85$, $A[6]$: $44$, $A[7]$: $11$. שאר התאים ($A[0]$, $A[8]$, $A[9]$) ריקים.\n\nאילו מהסדרות הבאות **אינה** יכולה להיות סדרת הכנסה לטבלה (יש לקרוא את הסדרות משמאל לימין):",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$93,61,85,52,73,44,11$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>93</mn><mo separator=\"true\">,</mo><mn>61</mn><mo separator=\"true\">,</mo><mn>85</mn><mo separator=\"true\">,</mo><mn>52</mn><mo separator=\"true\">,</mo><mn>73</mn><mo separator=\"true\">,</mo><mn>44</mn><mo separator=\"true\">,</mo><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">93,61,85,52,73,44,11</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$52,93,73,85,44,61,11$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>52</mn><mo separator=\"true\">,</mo><mn>93</mn><mo separator=\"true\">,</mo><mn>73</mn><mo separator=\"true\">,</mo><mn>85</mn><mo separator=\"true\">,</mo><mn>44</mn><mo separator=\"true\">,</mo><mn>61</mn><mo separator=\"true\">,</mo><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">52,93,73,85,44,61,11</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$52,73,61,93,85,44,11$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>52</mn><mo separator=\"true\">,</mo><mn>73</mn><mo separator=\"true\">,</mo><mn>61</mn><mo separator=\"true\">,</mo><mn>93</mn><mo separator=\"true\">,</mo><mn>85</mn><mo separator=\"true\">,</mo><mn>44</mn><mo separator=\"true\">,</mo><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">52,73,61,93,85,44,11</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$93,85,61,52,73,44,11$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>93</mn><mo separator=\"true\">,</mo><mn>85</mn><mo separator=\"true\">,</mo><mn>61</mn><mo separator=\"true\">,</mo><mn>52</mn><mo separator=\"true\">,</mo><mn>73</mn><mo separator=\"true\">,</mo><mn>44</mn><mo separator=\"true\">,</mo><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">93,85,61,52,73,44,11</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: index 3 was free when 73 entered",
   "id": "24B-B-Q27",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה טבלת גיבוב בשיטת הגיבוב הלינארי, המשתמשת בפונקציית הגיבוב הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">h(x) = x \\bmod 10</annotation></semantics></math></span><br><br>הטבלה הנתונה (אינדקס: ערך): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>1</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[1]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>61</mn></mrow><annotation encoding=\"application/x-tex\">61</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>2</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[2]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>52</mn></mrow><annotation encoding=\"application/x-tex\">52</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>3</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[3]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>93</mn></mrow><annotation encoding=\"application/x-tex\">93</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>4</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[4]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>73</mn></mrow><annotation encoding=\"application/x-tex\">73</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>5</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[5]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>85</mn></mrow><annotation encoding=\"application/x-tex\">85</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>6</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[6]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>44</mn></mrow><annotation encoding=\"application/x-tex\">44</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>7</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[7]</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>. שאר התאים (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>0</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[0]</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>8</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[8]</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mn>9</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[9]</annotation></semantics></math></span>) ריקים.<br><br>אילו מהסדרות הבאות <strong>אינה</strong> יכולה להיות סדרת הכנסה לטבלה (יש לקרוא את הסדרות משמאל לימין):",
   "explanationHtml": "הערת הפתרון הרשמי: index 3 was free when 73 entered",
   "pointsTotal": 7.5
  },
  {
   "num": 28,
   "kind": "mcq",
   "topic": "linear_ds",
   "points": 7.5,
   "question": "להלן הגדרת הפעולות במבנה הנתונים \"מי בראש\" הממומש על המספרים הטבעים מ-1 עד $n$:\n\n- `Init(n)`: מאתחלת את המבנה עם כל המספרים מ-1 עד $n$. פעולת האיתחול מתבצעת פעם אחת בלבד.\n- `Delete(x)`: מוחק את הערך $x$ מהמבנה. אם $x$ כבר אינו במבנה, הפעולה לא עושה כלום.\n- `DeleteMin()`: מוחק ומחזיר את הערך המינימלי כרגע במבנה.\n\nמי מתוך המבנים הבאים יאפשר לממש את המבנה \"מי בראש\" בזמן ריצה הטוב ביותר לכל פעולה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ערימה מינימום",
     "html": "ערימה מינימום"
    },
    {
     "id": "b",
     "type": "text",
     "value": "טבלת גיבוב עם ערימת מינימום",
     "html": "טבלת גיבוב עם ערימת מינימום"
    },
    {
     "id": "c",
     "type": "text",
     "value": "עץ AVL",
     "html": "עץ AVL"
    },
    {
     "id": "d",
     "type": "text",
     "value": "רשימה מקושרת דו כיוונית ומערך",
     "html": "רשימה מקושרת דו כיוונית ומערך"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: רשימה מקושרת דו כיוונית ומערך שמצביע לצמתי הרשימה (לדוגמה n=3: המערך מצביע לצמתים 1, 2, 3 ברשימה L).",
   "id": "24B-B-Q28",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מערך, מחסנית, תור ורשימה מקושרת",
   "questionHtml": "להלן הגדרת הפעולות במבנה הנתונים \"מי בראש\" הממומש על המספרים הטבעים מ-1 עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>:<br><br>- <code class=\"tok\" dir=\"ltr\">Init(n)</code>: מאתחלת את המבנה עם כל המספרים מ-1 עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>. פעולת האיתחול מתבצעת פעם אחת בלבד.<br>- <code class=\"tok\" dir=\"ltr\">Delete(x)</code>: מוחק את הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> מהמבנה. אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> כבר אינו במבנה, הפעולה לא עושה כלום.<br>- <code class=\"tok\" dir=\"ltr\">DeleteMin()</code>: מוחק ומחזיר את הערך המינימלי כרגע במבנה.<br><br>מי מתוך המבנים הבאים יאפשר לממש את המבנה \"מי בראש\" בזמן ריצה הטוב ביותר לכל פעולה:",
   "explanationHtml": "הערת הפתרון הרשמי: רשימה מקושרת דו כיוונית ומערך שמצביע לצמתי הרשימה (לדוגמה n=3: המערך מצביע לצמתים 1, 2, 3 ברשימה L).",
   "pointsTotal": 7.5
  },
  {
   "num": 29,
   "kind": "mcq",
   "topic": "ds_design",
   "points": 7.5,
   "question": "רוצים לממש מילון התומך בפעולות הבאות: חיפוש המפתח $k$ במבנה, הכנסת מפתח $k$ למבנה, הוצאת המפתח $k$ מהמבנה, החזרת האיבר ה-$i$ בגודלו במבנה בזמן $O(\\log n)$, כאשר $n$ כמות הנתונים במבנה.\n\nלדוגמה: עבור קבוצת המפתחות הבאה: $10,2,8,3,7,5,12$ ועבור $i=3$ הפעולה של החזרת האיבר ה-$i$ בגודלו תחזיר $5$. (כלומר, האיבר השלישי בגודלו בקבוצת המפתחות הנתונה הוא $5$, כי שני המפתחות $2,3$ קטנים ממנו ושאר המפתחות $7,8,10,12$ גדולים ממנו)\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לא ניתן לממש מבנה שיעמוד בדרישות אלו",
     "html": "לא ניתן לממש מבנה שיעמוד בדרישות אלו"
    },
    {
     "id": "b",
     "type": "text",
     "value": "עץ AVL שבכל קודקוד נוסף שדה של כמות הקודקודים בתת העץ המושרש של קודקוד זה",
     "html": "עץ AVL שבכל קודקוד נוסף שדה של כמות הקודקודים בתת העץ המושרש של קודקוד זה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "עץ AVL שבכל קודקוד נוסף שדה של גובה תת העץ המושרש של קודקוד זה",
     "html": "עץ AVL שבכל קודקוד נוסף שדה של גובה תת העץ המושרש של קודקוד זה"
    },
    {
     "id": "d",
     "type": "text",
     "value": "עץ AVL שבכל קודקוד נוסף שדה של עומק הקודקוד",
     "html": "עץ AVL שבכל קודקוד נוסף שדה של עומק הקודקוד"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-B-Q29",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "תכנון אלגוריתם ומבנה נתונים",
   "questionHtml": "רוצים לממש מילון התומך בפעולות הבאות: חיפוש המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> במבנה, הכנסת מפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> למבנה, הוצאת המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> מהמבנה, החזרת האיבר ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> בגודלו במבנה בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> כמות הנתונים במבנה.<br><br>לדוגמה: עבור קבוצת המפתחות הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">10,2,8,3,7,5,12</annotation></semantics></math></span> ועבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">i=3</annotation></semantics></math></span> הפעולה של החזרת האיבר ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> בגודלו תחזיר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>. (כלומר, האיבר השלישי בגודלו בקבוצת המפתחות הנתונה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>, כי שני המפתחות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">2,3</annotation></semantics></math></span> קטנים ממנו ושאר המפתחות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>10</mn><mo separator=\"true\">,</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">7,8,10,12</annotation></semantics></math></span> גדולים ממנו)<br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 30,
   "kind": "mcq",
   "topic": "heaps",
   "points": 7.5,
   "question": "בייצוג ערימה בעזרת עץ בינארי (ולא במערך), מה כמות הקודקודים המינימלית בערימה בגובה $h$ ?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$2^h + 1$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>h</mi></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^h + 1</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$2^h$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>h</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^h</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$2^h - 1$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>h</mi></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^h - 1</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$2(2^h + 1)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo stretchy=\"false\">(</mo><msup><mn>2</mn><mi>h</mi></msup><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">2(2^h + 1)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: Total = 2^h - 1 + 1 = 2^h",
   "id": "24B-B-Q30",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "ערימות ותור עדיפויות",
   "questionHtml": "בייצוג ערימה בעזרת עץ בינארי (ולא במערך), מה כמות הקודקודים המינימלית בערימה בגובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">h</annotation></semantics></math></span> ?",
   "explanationHtml": "הערת הפתרון הרשמי: Total = 2^h - 1 + 1 = 2^h",
   "pointsTotal": 7.5
  },
  {
   "num": 31,
   "kind": "mcq",
   "topic": "complexity",
   "points": 7.5,
   "question": "נתון קטע הפסודוקוד הבא, בחר את סיבוכיות זמן הריצה שלו:\n\n```\nSTAM(A[1..n])\n    for (i = sqrt(n); i <= n/2; i++)\n        for (j = 1; j <= n/4; j = j*2)\n            A[i]++\n```",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$\\theta(n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n)</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$\\theta(\\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(\\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$\\theta(\\sqrt{n} \\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><msqrt><mi>n</mi></msqrt><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(\\sqrt{n} \\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$\\theta(n \\log \\sqrt{n})$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n \\log \\sqrt{n})</annotation></semantics></math></span>"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: n/2 - sqrt2 = Theta(n); logn; Theta(nlogn)",
   "id": "24B-B-Q31",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "סיבוכיות וחסמים אסימפטוטיים",
   "questionHtml": "נתון קטע הפסודוקוד הבא, בחר את סיבוכיות זמן הריצה שלו:<br><pre class=\"code-block\" dir=\"ltr\"><code>STAM(A[1..n])\n    for (i = sqrt(n); i &lt;= n/2; i++)\n        for (j = 1; j &lt;= n/4; j = j*2)\n            A[i]++</code></pre>",
   "explanationHtml": "הערת הפתרון הרשמי: n/2 - sqrt2 = Theta(n); logn; Theta(nlogn)",
   "pointsTotal": 7.5
  },
  {
   "num": 32,
   "kind": "mcq",
   "topic": "sorting_selection",
   "points": 7.5,
   "question": "תהי sortsub פונקציה המקבלת מערך לא ממוין של $n$ מספרים ממשים שרק $\\log n$ מספרים מהם שונים זה מזה, ומחזירה את המערך ממוין.\n\nמי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $\\theta(n \\log(\\log n))$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n \\log(\\log n))</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $\\Omega(n \\log^2 n)$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><msup><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msup><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log^2 n)</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $\\Omega(n \\log n)$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא ניתן לומר דבר על הסיבוכיות של sortsub",
     "html": "לא ניתן לומר דבר על הסיבוכיות של sortsub"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: We will use an AVL tree with a counter for each node = how many of each key are in the tree. The AVL size is logn, then h=loglogn. We'll insert all n numbers to the AVL tree O(nloglogn), we'll print all in inorder O(n)",
   "id": "24B-B-Q32",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "תהי sortsub פונקציה המקבלת מערך לא ממוין של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים ממשים שרק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log n</annotation></semantics></math></span> מספרים מהם שונים זה מזה, ומחזירה את המערך ממוין.<br><br>מי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:",
   "explanationHtml": "הערת הפתרון הרשמי: We will use an AVL tree with a counter for each node = how many of each key are in the tree. The AVL size is logn, then h=loglogn. We'll insert all n numbers to the AVL tree O(nloglogn), we'll print all in inorder O(n)",
   "pointsTotal": 7.5
  },
  {
   "num": 33,
   "kind": "mcq",
   "topic": "sorting_selection",
   "points": 7.5,
   "question": "תהי sortsub פונקציה המקבלת מערך לא ממוין של $n$ מספרים ממשים שרק $\\log n$ מספרים מהם שונים זה מזה, ומחזירה את המערך ממוין.\n\nמי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לא ניתן לומר דבר על הסיבוכיות של sortsub",
     "html": "לא ניתן לומר דבר על הסיבוכיות של sortsub"
    },
    {
     "id": "b",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $\\Omega(n\\sqrt{n})$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n\\sqrt{n})</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $\\Omega(n \\log n)$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $O(n \\log(\\log n))$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n \\log(\\log n))</annotation></semantics></math></span>"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-B-Q33",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "תהי sortsub פונקציה המקבלת מערך לא ממוין של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים ממשים שרק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log n</annotation></semantics></math></span> מספרים מהם שונים זה מזה, ומחזירה את המערך ממוין.<br><br>מי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 34,
   "kind": "mcq",
   "topic": "sorting_selection",
   "points": 7.5,
   "question": "תהי sortsub פונקציה המקבלת מערך לא ממוין של $n$ מספרים ממשים שרק $\\log n$ מספרים מהם שונים זה מזה, ומחזירה את המערך ממוין.\n\nמי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לא ניתן לומר דבר על הסיבוכיות של sortsub",
     "html": "לא ניתן לומר דבר על הסיבוכיות של sortsub"
    },
    {
     "id": "b",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $O(n)$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $O(n\\sqrt{n})$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\sqrt{n})</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "סיבוכיות זמן הריצה הוא $\\theta(n \\log n)$",
     "html": "סיבוכיות זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n \\log n)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הערת הפתרון הרשמי: possible in O(nloglogn)",
   "id": "24B-B-Q34",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "תהי sortsub פונקציה המקבלת מערך לא ממוין של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים ממשים שרק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log n</annotation></semantics></math></span> מספרים מהם שונים זה מזה, ומחזירה את המערך ממוין.<br><br>מי מהאמירות הבאות נכונה למימוש היעיל ביותר של sortsub:",
   "explanationHtml": "הערת הפתרון הרשמי: possible in O(nloglogn)",
   "pointsTotal": 7.5
  },
  {
   "num": 100,
   "kind": "algorithm",
   "topic": "ds_design",
   "points": 25,
   "question": "עליכם לממש מבנה נתונים התומך בפעולות הבאות על מספרים בסיבוכיות הזמן הנדרשת.\n\nתארו תחילה מה כולל מבנה הנתונים שלכם, ואח\"כ הסבירו כיצד תתבצע כל אחת מהפעולות (שימו לב, $n$ מציין את מספר הנתונים במבנה).\n\n- `Insert(k)` – הכנסת המפתח $k$ למבנה. סיבוכיות הזמן הנדרשת: $O(\\log n)$.\n- `ExtractMin()` – החזרת המפתח המינימלי במבנה. סיבוכיות הזמן הנדרשת: $O(1)$.\n- `DeleteMin()` – מחיקת המפתח המינימלי במבנה. סיבוכיות הזמן הנדרשת: $O(\\log n)$.\n- `Delete(x)` – מחיקת המפתח ש-$x$ מצביע עליו במבנה. סיבוכיות הזמן הנדרשת: $O(\\log n)$.",
   "solution": "**אפשרות ראשונה:** נשתמש במבנה נתונים ערימת מינימום.\n\nמימוש הפעולות:\n\n- `Insert(k)` – הכנסת המפתח $k$ לערימה – פעולה שהערימה תומכת בה ב-$O(\\log n)$.\n- `ExtractMin()` – החזרת המפתח המינימלי במבנה פעולה שהערימה תומכת בה ב-$O(1)$.\n- `DeleteMin()` – מחיקת המפתח המינימלי מהערימה – פעולה שהערימה תומכת בה ב-$O(\\log n)$.\n- `Delete(x)` – זו פעולה שלא מוגדרת בערימה ולכן נסביר איך לבצע אותה: נחליף את המפתח שנמצא בתא ש-$x$ מצביע עליו עם המפתח באיבר האחרון בערימה שמייצג את הערימה. נקטין את גודל הערימה ב-$1$, ונקרא גם ל-`heapifyup` וגם ל-`heapifydown` לביצוע תיקון הערכים, אבל לכל היותר אחד מהם באמת יתבצע. סה\"כ עלות הפעולות $O(\\log n)$.\n\n**אפשרות שנייה:** נשתמש במבנה נתונים עץ AVL עם מצביע `min_ptr` לאיבר המינימלי בעץ / משתנה MIN המשמר את ערך המינימום.\n\nמימוש הפעולות:\n\n- `Insert(k)` – הכנסת המפתח $k$ לעץ ה-AVL. זו פעולה שנתמכת ע\"י העץ ב-$O(\\log n)$. נבדוק האם $k$ קטן מהערך שעליו מצביע `min_ptr`, ואם כן אז נעדכן את מצביע `min_ptr` / משתנה MIN על ידי הצבעה על הקודקוד השמאלי ביותר בעץ. את הבדיקה והעדכון ניתן לעשות ב-$O(1)$.\n- `ExtractMin()` – החזרת המפתח עליו מצביע `min_ptr` / המשתנה MIN ב-$O(1)$.\n- `DeleteMin()` – מחיקת המפתח עליו מצביע `min_ptr` / מחיקת הקודקוד השמאלי ביותר בעץ AVL. פעולה שניתן לבצע בעץ AVL ב-$O(\\log n)$. יש לעדכן את המצביע `min_ptr` להצביע על האיבר המינימלי החדש בעץ, זאת נעשית ע\"י ירידה מהשורש עד לעלה הכי שמאלי (הוא מכיל את הערך המינימלי), ונעדכן את `min_ptr` להצביע עליו / באופן דומה נעדכן את המשתנה MIN. עדכון זה גם כן נעשה בזמן $O(\\log n)$.\n- `Delete(x)` – מחיקת המפתח עליו מצביע $x$ – פעולה שניתן לבצע בעץ AVL ב-$O(\\log n)$. אם $x$ = `min_ptr`, יש לעדכן את המצביע `min_ptr` להצביע על האיבר המינימלי החדש בעץ, זאת נעשית ע\"י ירידה מהשורש עד לעלה הכי שמאלי (הוא מכיל את הערך המינימלי), ונעדכן את `min_ptr` להצביע עליו / באופן דומה נעדכן את המשתנה MIN. עדכון זה גם כן נעשה בזמן $O(\\log n)$.\n\n**הערה:** היו שהשתמשו בעץ AVL וערימה עם פוינטרים הדדיים ביניהם. זה כמובן מיותר, אבל קיבלנו את הפתרון כל עוד היתה התייחסות נכונה לעדכון הפוינטרים ההדדיים בפעולות ההכנסה והמחיקה.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "id": "24B-B-Q100",
   "partKey": "",
   "examCode": "24B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ד, מועד ב (8.8.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "תכנון אלגוריתם ומבנה נתונים",
   "questionHtml": "עליכם לממש מבנה נתונים התומך בפעולות הבאות על מספרים בסיבוכיות הזמן הנדרשת.<br><br>תארו תחילה מה כולל מבנה הנתונים שלכם, ואח\"כ הסבירו כיצד תתבצע כל אחת מהפעולות (שימו לב, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מציין את מספר הנתונים במבנה).<br><br>- <code class=\"tok\" dir=\"ltr\">Insert(k)</code> – הכנסת המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> למבנה. סיבוכיות הזמן הנדרשת: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.<br>- <code class=\"tok\" dir=\"ltr\">ExtractMin()</code> – החזרת המפתח המינימלי במבנה. סיבוכיות הזמן הנדרשת: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>.<br>- <code class=\"tok\" dir=\"ltr\">DeleteMin()</code> – מחיקת המפתח המינימלי במבנה. סיבוכיות הזמן הנדרשת: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.<br>- <code class=\"tok\" dir=\"ltr\">Delete(x)</code> – מחיקת המפתח ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> מצביע עליו במבנה. סיבוכיות הזמן הנדרשת: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.",
   "solutionHtml": "<strong>אפשרות ראשונה:</strong> נשתמש במבנה נתונים ערימת מינימום.<br><br>מימוש הפעולות:<br><br>- <code class=\"tok\" dir=\"ltr\">Insert(k)</code> – הכנסת המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> לערימה – פעולה שהערימה תומכת בה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.<br>- <code class=\"tok\" dir=\"ltr\">ExtractMin()</code> – החזרת המפתח המינימלי במבנה פעולה שהערימה תומכת בה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>.<br>- <code class=\"tok\" dir=\"ltr\">DeleteMin()</code> – מחיקת המפתח המינימלי מהערימה – פעולה שהערימה תומכת בה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.<br>- <code class=\"tok\" dir=\"ltr\">Delete(x)</code> – זו פעולה שלא מוגדרת בערימה ולכן נסביר איך לבצע אותה: נחליף את המפתח שנמצא בתא ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> מצביע עליו עם המפתח באיבר האחרון בערימה שמייצג את הערימה. נקטין את גודל הערימה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>, ונקרא גם ל-<code class=\"tok\" dir=\"ltr\">heapifyup</code> וגם ל-<code class=\"tok\" dir=\"ltr\">heapifydown</code> לביצוע תיקון הערכים, אבל לכל היותר אחד מהם באמת יתבצע. סה\"כ עלות הפעולות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.<br><br><strong>אפשרות שנייה:</strong> נשתמש במבנה נתונים עץ AVL עם מצביע <code class=\"tok\" dir=\"ltr\">min_ptr</code> לאיבר המינימלי בעץ / משתנה MIN המשמר את ערך המינימום.<br><br>מימוש הפעולות:<br><br>- <code class=\"tok\" dir=\"ltr\">Insert(k)</code> – הכנסת המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> לעץ ה-AVL. זו פעולה שנתמכת ע\"י העץ ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>. נבדוק האם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> קטן מהערך שעליו מצביע <code class=\"tok\" dir=\"ltr\">min_ptr</code>, ואם כן אז נעדכן את מצביע <code class=\"tok\" dir=\"ltr\">min_ptr</code> / משתנה MIN על ידי הצבעה על הקודקוד השמאלי ביותר בעץ. את הבדיקה והעדכון ניתן לעשות ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>.<br>- <code class=\"tok\" dir=\"ltr\">ExtractMin()</code> – החזרת המפתח עליו מצביע <code class=\"tok\" dir=\"ltr\">min_ptr</code> / המשתנה MIN ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>.<br>- <code class=\"tok\" dir=\"ltr\">DeleteMin()</code> – מחיקת המפתח עליו מצביע <code class=\"tok\" dir=\"ltr\">min_ptr</code> / מחיקת הקודקוד השמאלי ביותר בעץ AVL. פעולה שניתן לבצע בעץ AVL ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>. יש לעדכן את המצביע <code class=\"tok\" dir=\"ltr\">min_ptr</code> להצביע על האיבר המינימלי החדש בעץ, זאת נעשית ע\"י ירידה מהשורש עד לעלה הכי שמאלי (הוא מכיל את הערך המינימלי), ונעדכן את <code class=\"tok\" dir=\"ltr\">min_ptr</code> להצביע עליו / באופן דומה נעדכן את המשתנה MIN. עדכון זה גם כן נעשה בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.<br>- <code class=\"tok\" dir=\"ltr\">Delete(x)</code> – מחיקת המפתח עליו מצביע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> – פעולה שניתן לבצע בעץ AVL ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>. אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> = <code class=\"tok\" dir=\"ltr\">min_ptr</code>, יש לעדכן את המצביע <code class=\"tok\" dir=\"ltr\">min_ptr</code> להצביע על האיבר המינימלי החדש בעץ, זאת נעשית ע\"י ירידה מהשורש עד לעלה הכי שמאלי (הוא מכיל את הערך המינימלי), ונעדכן את <code class=\"tok\" dir=\"ltr\">min_ptr</code> להצביע עליו / באופן דומה נעדכן את המשתנה MIN. עדכון זה גם כן נעשה בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.<br><br><strong>הערה:</strong> היו שהשתמשו בעץ AVL וערימה עם פוינטרים הדדיים ביניהם. זה כמובן מיותר, אבל קיבלנו את הפתרון כל עוד היתה התייחסות נכונה לעדכון הפוינטרים ההדדיים בפעולות ההכנסה והמחיקה.",
   "pointsTotal": 25
  },
  {
   "num": 1,
   "kind": "mcq",
   "topic": "linear_ds",
   "question": "נגדיר מבנה של רשימה דו ראשית כמבנה המורכב משתי רשימות המתחברות לרשימה אחת: (ראו דוגמא באיור)\n\nלהלן תאור סכמטי של אלגוריתם שמדפיס את כל האיברים ברשימה דו ראשית:\n\n- אתחל שני מצביעים לתחילת הרשימות.\n- כל עוד המצביעים לא מצביעים על אותו איבר, בצע את הפעולות הבאות:\n- ◦ הדפס את האיבר שהמצביע הראשון מצביע עליו וקדם אותו קדימה.\n- ◦ הדפס את האיבר שהמצביע השני מצביע עליו וקדם אותו קדימה.\n- עבור רק על המצביע הראשון, כל עוד הוא לא `Null` קדם אותו קדימה והדפס את האיבר המוצבע.\n\nלהלן מספר קביעות לגבי האלגוריתם, מי מהן הנכונה ביותר?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "האלגוריתם נכון ומדוייק",
     "html": "האלגוריתם נכון ומדוייק"
    },
    {
     "id": "b",
     "type": "text",
     "value": "האלגוריתם שגוי לחלוטין",
     "html": "האלגוריתם שגוי לחלוטין"
    },
    {
     "id": "c",
     "type": "text",
     "value": "ישנם מקרים ספציפיים בהם האלגוריתם יעבוד",
     "html": "ישנם מקרים ספציפיים בהם האלגוריתם יעבוד"
    },
    {
     "id": "d",
     "type": "text",
     "value": "סיבוכיות האלגוריתם תלויה ביחס בין אורכי החלקים של ראשי הרשימה",
     "html": "סיבוכיות האלגוריתם תלויה ביחס בין אורכי החלקים של ראשי הרשימה"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "contextId": "24S-A-c1",
   "id": "24S-A-Q1",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מערך, מחסנית, תור ורשימה מקושרת",
   "questionHtml": "נגדיר מבנה של רשימה דו ראשית כמבנה המורכב משתי רשימות המתחברות לרשימה אחת: (ראו דוגמא באיור)<br><br>להלן תאור סכמטי של אלגוריתם שמדפיס את כל האיברים ברשימה דו ראשית:<br><br>- אתחל שני מצביעים לתחילת הרשימות.<br>- כל עוד המצביעים לא מצביעים על אותו איבר, בצע את הפעולות הבאות:<br>- ◦ הדפס את האיבר שהמצביע הראשון מצביע עליו וקדם אותו קדימה.<br>- ◦ הדפס את האיבר שהמצביע השני מצביע עליו וקדם אותו קדימה.<br>- עבור רק על המצביע הראשון, כל עוד הוא לא <code class=\"tok\" dir=\"ltr\">Null</code> קדם אותו קדימה והדפס את האיבר המוצבע.<br><br>להלן מספר קביעות לגבי האלגוריתם, מי מהן הנכונה ביותר?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 2,
   "kind": "mcq",
   "topic": "bst",
   "question": "נתונה סריקת preorder של עץ בינארי (משמאל לימין):\n10,5,2,8,6,100,50,45,47,105\n\nמהו המשפט הנכון?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ייתכן שהעץ הוא עץ חיפוש, אך לא ייתכן שהוא עץ AVL",
     "html": "ייתכן שהעץ הוא עץ חיפוש, אך לא ייתכן שהוא עץ AVL"
    },
    {
     "id": "b",
     "type": "text",
     "value": "ייתכן שהעץ הוא עץ AVL",
     "html": "ייתכן שהעץ הוא עץ AVL"
    },
    {
     "id": "c",
     "type": "text",
     "value": "לא ייתכן שהעץ הוא עץ חיפוש",
     "html": "לא ייתכן שהעץ הוא עץ חיפוש"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא ניתן לדעת על פי סריקת preorder בלבד האם העץ הוא עץ חיפוש",
     "html": "לא ניתן לדעת על פי סריקת preorder בלבד האם העץ הוא עץ חיפוש"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q2",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי חיפוש בינאריים",
   "questionHtml": "נתונה סריקת preorder של עץ בינארי (משמאל לימין):<br>10,5,2,8,6,100,50,45,47,105<br><br>מהו המשפט הנכון?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 3,
   "kind": "mcq",
   "topic": "sorting_selection",
   "question": "משתמשים באלגוריתם select כדי למצוא האם קיימים שני איברים במערך נתון בגודל $n$, כך שהאיבר הראשון מופיע לפחות $\\frac{n}{a}$ פעמים והאיבר השני מופיע לפחות $\\frac{n}{b}$ פעמים במערך, כאשר $a < b$.\n\nלדוגמה:\nעבור $a=4$, $b=5$ אנחנו מחפשים האם קיימים 2 איברים במערך הנתון, כך שאחד מהם מופיע לפחות $\\frac{n}{4}$ פעמים, כלומר לפחות 25% מערכי המערך שווים לו. והאיבר השני מופיע לפחות $\\frac{n}{5}$ פעמים במערך, כלומר לפחות 20% מערכי המערך שווים לו.\n\nכמה פעמים נצטרך לקרוא ל-select במקרה הגרוע באלגוריתם ה**יעיל** ביותר, כך שנוכל לאתר האם קיימים שני איברים כאלה?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$a - 1$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a - 1</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$b - 1$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">b - 1</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$(a - 1)*(b - 1)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>a</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>∗</mo><mo stretchy=\"false\">(</mo><mi>b</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(a - 1)*(b - 1)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$a + b + 1$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a + b + 1</annotation></semantics></math></span>"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q3",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "משתמשים באלגוריתם select כדי למצוא האם קיימים שני איברים במערך נתון בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, כך שהאיבר הראשון מופיע לפחות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mi>n</mi><mi>a</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{n}{a}</annotation></semantics></math></span> פעמים והאיבר השני מופיע לפחות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mi>n</mi><mi>b</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{n}{b}</annotation></semantics></math></span> פעמים במערך, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>&lt;</mo><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">a &lt; b</annotation></semantics></math></span>.<br><br>לדוגמה:<br>עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">a=4</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">b=5</annotation></semantics></math></span> אנחנו מחפשים האם קיימים 2 איברים במערך הנתון, כך שאחד מהם מופיע לפחות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mi>n</mi><mn>4</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{n}{4}</annotation></semantics></math></span> פעמים, כלומר לפחות 25% מערכי המערך שווים לו. והאיבר השני מופיע לפחות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mi>n</mi><mn>5</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{n}{5}</annotation></semantics></math></span> פעמים במערך, כלומר לפחות 20% מערכי המערך שווים לו.<br><br>כמה פעמים נצטרך לקרוא ל-select במקרה הגרוע באלגוריתם ה<strong>יעיל</strong> ביותר, כך שנוכל לאתר האם קיימים שני איברים כאלה?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 4,
   "kind": "mcq",
   "topic": "avl",
   "question": "נתון עץ חיפוש בינרי שיש בו עלה בעומק $4$. מהו המספר ה**מינימלי** של **צמתים** בעץ הנתון כך שיהיה עץ AVL?\n(כלומר, שיהיה עץ בינרי מאוזן)",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "10",
     "html": "10"
    },
    {
     "id": "b",
     "type": "text",
     "value": "12",
     "html": "12"
    },
    {
     "id": "c",
     "type": "text",
     "value": "14",
     "html": "14"
    },
    {
     "id": "d",
     "type": "text",
     "value": "20",
     "html": "20"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q4",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "נתון עץ חיפוש בינרי שיש בו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>. מהו המספר ה<strong>מינימלי</strong> של <strong>צמתים</strong> בעץ הנתון כך שיהיה עץ AVL?<br>(כלומר, שיהיה עץ בינרי מאוזן)",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 5,
   "kind": "mcq",
   "topic": "sorting_selection",
   "question": "תהי `print_smaller_k` פונקציה המקבלת מערך בן $n$ איברים, ומדפיסה את $k$ האיברים הקטנים ביותר במערך הנתון לפי הסדר מקטן לגדול.\nמי מהאמירות הבאות נכונה למימוש ה**יעיל ביותר** של `print_smaller_k`:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "סיבוכיות זמן הריצה היא $\\theta(k\\log n + n)$",
     "html": "סיבוכיות זמן הריצה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>k</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(k\\log n + n)</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "סיבוכיות זמן הריצה היא $\\theta(k\\log k + n)$",
     "html": "סיבוכיות זמן הריצה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>k</mi><mi>log</mi><mo>⁡</mo><mi>k</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(k\\log k + n)</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "סיבוכיות זמן הריצה היא $\\theta(n\\log n)$",
     "html": "סיבוכיות זמן הריצה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n\\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "סיבוכיות זמן הריצה היא $\\theta(k\\log k)$",
     "html": "סיבוכיות זמן הריצה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>k</mi><mi>log</mi><mo>⁡</mo><mi>k</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(k\\log k)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q5",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "תהי <code class=\"tok\" dir=\"ltr\">print_smaller_k</code> פונקציה המקבלת מערך בן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים, ומדפיסה את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> האיברים הקטנים ביותר במערך הנתון לפי הסדר מקטן לגדול.<br>מי מהאמירות הבאות נכונה למימוש ה<strong>יעיל ביותר</strong> של <code class=\"tok\" dir=\"ltr\">print_smaller_k</code>:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 6,
   "kind": "mcq",
   "topic": "recurrences",
   "question": "תנו חסם אסימפטוטי הדוק (\"תטא\") לנוסחת הנסיגה הבאה (עבור $n$ מספיק קטן מתקיים $T(n)=O(1)$):\n\n$T(n) = T\\left(\\frac{n}{4}\\right) + T\\left(\\frac{n}{2}\\right) + n$",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$\\Theta(n^2)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n^2)</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$\\Theta(n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n)</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$\\Theta(n(\\log n)^2)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n(\\log n)^2)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$\\Theta(n\\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n\\log n)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q6",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "תנו חסם אסימפטוטי הדוק (\"תטא\") לנוסחת הנסיגה הבאה (עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספיק קטן מתקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n)=O(1)</annotation></semantics></math></span>):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">T(n) = T\\left(\\frac{n}{4}\\right) + T\\left(\\frac{n}{2}\\right) + n</annotation></semantics></math></span>",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 7,
   "kind": "mcq",
   "topic": "heaps",
   "question": "נתונה ערימת מינימום $A$ עם $n$ מספרים שונים זה מזה.\nרוצים להפוך את הערימה לעץ AVL.\n\nמי מהטענות הבאות נכונה:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ניתן לבצע את הנ\"ל בזמן $\\theta(n)$",
     "html": "ניתן לבצע את הנ\"ל בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n)</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "ניתן לבצע את הנ\"ל בזמן $\\theta(\\sqrt{n})$",
     "html": "ניתן לבצע את הנ\"ל בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(\\sqrt{n})</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "ניתן לבצע את הנ\"ל בזמן $\\theta(n\\log\\log n)$",
     "html": "ניתן לבצע את הנ\"ל בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n\\log\\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "ניתן לבצע את הנ\"ל בזמן $\\theta(n\\log n)$",
     "html": "ניתן לבצע את הנ\"ל בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n\\log n)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q7",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "ערימות ותור עדיפויות",
   "questionHtml": "נתונה ערימת מינימום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים שונים זה מזה.<br>רוצים להפוך את הערימה לעץ AVL.<br><br>מי מהטענות הבאות נכונה:",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 8,
   "kind": "mcq",
   "topic": "union_find",
   "question": "משתמשים במבנה נתונים לייצוג קבוצות זרות בייצוג ע\"י עצים הפוכים, כך שבפעולת האיחוד מחברים את הקבוצה הקטנה לגדולה.\nנתון העץ הבא:\n\nנתונות אפשרויות שונות לסדרת פעולות `Union` שיצרו את העץ הנתון.\n\n- יש לקרוא את סדרת הפעולות הבאות משמאל לימין.\n- הניחו שלפני כל סדרה התבצעו הפעולות הבאות:\n\n`Makeset(1), Makeset(2), Makeset(3), Makeset(4), Makeset(5), Makeset(6)`\n\nמי מבין הסדרות הבאות יכלה ליצור את העץ הנתון?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "`Union(1,3)`, `Union(5,3)`, `Union(4,3)`, `Union(2,1)`, `Union(6,5)`",
     "html": "<code class=\"tok\" dir=\"ltr\">Union(1,3)</code>, <code class=\"tok\" dir=\"ltr\">Union(5,3)</code>, <code class=\"tok\" dir=\"ltr\">Union(4,3)</code>, <code class=\"tok\" dir=\"ltr\">Union(2,1)</code>, <code class=\"tok\" dir=\"ltr\">Union(6,5)</code>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "`Union(1,2)`, `Union(3,4)`, `Union(5,6)`, `Union(4,2)`, `Union(6,2)`",
     "html": "<code class=\"tok\" dir=\"ltr\">Union(1,2)</code>, <code class=\"tok\" dir=\"ltr\">Union(3,4)</code>, <code class=\"tok\" dir=\"ltr\">Union(5,6)</code>, <code class=\"tok\" dir=\"ltr\">Union(4,2)</code>, <code class=\"tok\" dir=\"ltr\">Union(6,2)</code>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "`Union(1,2)`, `Union(3,4)`, `Union(5,6)`, `Union(6,2)`, `Union(4,2)`",
     "html": "<code class=\"tok\" dir=\"ltr\">Union(1,2)</code>, <code class=\"tok\" dir=\"ltr\">Union(3,4)</code>, <code class=\"tok\" dir=\"ltr\">Union(5,6)</code>, <code class=\"tok\" dir=\"ltr\">Union(6,2)</code>, <code class=\"tok\" dir=\"ltr\">Union(4,2)</code>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא קיימת סדרת פעולות Union שיכולה ליצור את העץ הנתון",
     "html": "לא קיימת סדרת פעולות Union שיכולה ליצור את העץ הנתון"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "image": "images/exams/24S-A-Q8.png",
   "id": "24S-A-Q8",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "קבוצות זרות",
   "questionHtml": "משתמשים במבנה נתונים לייצוג קבוצות זרות בייצוג ע\"י עצים הפוכים, כך שבפעולת האיחוד מחברים את הקבוצה הקטנה לגדולה.<br>נתון העץ הבא:<br><br>נתונות אפשרויות שונות לסדרת פעולות <code class=\"tok\" dir=\"ltr\">Union</code> שיצרו את העץ הנתון.<br><br>- יש לקרוא את סדרת הפעולות הבאות משמאל לימין.<br>- הניחו שלפני כל סדרה התבצעו הפעולות הבאות:<br><br><code class=\"tok\" dir=\"ltr\">Makeset(1), Makeset(2), Makeset(3), Makeset(4), Makeset(5), Makeset(6)</code><br><br>מי מבין הסדרות הבאות יכלה ליצור את העץ הנתון?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 9,
   "kind": "mcq",
   "topic": "hashing",
   "question": "עבור פונקציות הגיבוב הבאות, מי מהן יכולה לשמש פונקציית גיבוב טובה עבור גיבוב כפול?\n\n(כלומר, אנחנו מחפשים פונקציית גיבוב בשיטת הגיבוב הכפול, כך שטבלת הגיבוב תעבוד באופן שלמדנו בכיתה, ולא ייווצרו בעיות עבור מפתחות מסויימים).",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$h(x,i) = \\left(x \\bmod 14 + i\\left((x \\bmod 5)+1\\right)\\right) \\bmod 14$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>14</mn><mo>+</mo><mi>i</mi><mrow><mo fence=\"true\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>5</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo fence=\"true\">)</mo></mrow><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 14 + i\\left((x \\bmod 5)+1\\right)\\right) \\bmod 14</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$h(x,i) = \\left(x \\bmod 13 + i\\left(x \\bmod 5\\right)\\right) \\bmod 13$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>13</mn><mo>+</mo><mi>i</mi><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>5</mn><mo fence=\"true\">)</mo></mrow><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 13 + i\\left(x \\bmod 5\\right)\\right) \\bmod 13</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$h(x,i) = \\left(x \\bmod 13 + i\\left((x \\bmod 7)+1\\right)\\right) \\bmod 13$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>13</mn><mo>+</mo><mi>i</mi><mrow><mo fence=\"true\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo fence=\"true\">)</mo></mrow><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 13 + i\\left((x \\bmod 7)+1\\right)\\right) \\bmod 13</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$h(x,i) = \\left(random(x) \\bmod 13 + i\\left((x \\bmod 7)+1\\right)\\right) \\bmod 13$ כאשר $random(x)$ מקבלת את המספר $x$ ומחזירה מספר בין $0$ ל-$x$.",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>r</mi><mi>a</mi><mi>n</mi><mi>d</mi><mi>o</mi><mi>m</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>13</mn><mo>+</mo><mi>i</mi><mrow><mo fence=\"true\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo fence=\"true\">)</mo></mrow><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(random(x) \\bmod 13 + i\\left((x \\bmod 7)+1\\right)\\right) \\bmod 13</annotation></semantics></math></span> כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mi>a</mi><mi>n</mi><mi>d</mi><mi>o</mi><mi>m</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">random(x)</annotation></semantics></math></span> מקבלת את המספר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> ומחזירה מספר בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span>."
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q9",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "עבור פונקציות הגיבוב הבאות, מי מהן יכולה לשמש פונקציית גיבוב טובה עבור גיבוב כפול?<br><br>(כלומר, אנחנו מחפשים פונקציית גיבוב בשיטת הגיבוב הכפול, כך שטבלת הגיבוב תעבוד באופן שלמדנו בכיתה, ולא ייווצרו בעיות עבור מפתחות מסויימים).",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 10,
   "kind": "mcq",
   "topic": "recurrences",
   "question": "מהו הפתרון לנוסחת הנסיגה הבאה:\n\n$T(n) = 2T\\left(\\frac{n}{\\sqrt{2}}\\right) + n + \\sqrt{n}$",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$\\theta(\\sqrt{n}\\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><msqrt><mi>n</mi></msqrt><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(\\sqrt{n}\\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$\\theta(n^2)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n^2)</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$\\theta(n\\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n\\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$\\theta(n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q10",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "מהו הפתרון לנוסחת הנסיגה הבאה:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><msqrt><mn>2</mn></msqrt></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><mi>n</mi><mo>+</mo><msqrt><mi>n</mi></msqrt></mrow><annotation encoding=\"application/x-tex\">T(n) = 2T\\left(\\frac{n}{\\sqrt{2}}\\right) + n + \\sqrt{n}</annotation></semantics></math></span>",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 11,
   "kind": "mcq",
   "topic": "hashing",
   "question": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:\n\n$h_1(x) = x \\bmod 11$\n$h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11$\n\nלטבלה הוכנסו הערכים הבאים: משמאל לימין\n$\\{13,17,20,24,39,88,28\\}$\n\nאילו מהערכים יהיו בטבלה השניה $T_2$?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "13,17,24,39",
     "html": "13,17,24,39"
    },
    {
     "id": "b",
     "type": "text",
     "value": "17,24,39",
     "html": "17,24,39"
    },
    {
     "id": "c",
     "type": "text",
     "value": "13,20,28",
     "html": "13,20,28"
    },
    {
     "id": "d",
     "type": "text",
     "value": "13,17,20,28",
     "html": "13,17,20,28"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q11",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_1(x) = x \\bmod 11</annotation></semantics></math></span><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mi>x</mi><mn>11</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11</annotation></semantics></math></span><br><br>לטבלה הוכנסו הערכים הבאים: משמאל לימין<br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>17</mn><mo separator=\"true\">,</mo><mn>20</mn><mo separator=\"true\">,</mo><mn>24</mn><mo separator=\"true\">,</mo><mn>39</mn><mo separator=\"true\">,</mo><mn>88</mn><mo separator=\"true\">,</mo><mn>28</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{13,17,20,24,39,88,28\\}</annotation></semantics></math></span><br><br>אילו מהערכים יהיו בטבלה השניה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">T_2</annotation></semantics></math></span>?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 12,
   "kind": "mcq",
   "topic": "complexity",
   "question": "נתונים שני אלגוריתמים לפתרון אותה הבעיה, אחד מבצע את הפעולה בזמן $\\theta\\left(\\frac{1}{100}n^2\\right)$ והשני בזמן $\\theta(5n\\log n)$\n\nמה ניתן לומר על האלגוריתמים?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "הסיבוכיות של האלגוריתם הראשון עדיפה בכל גודל קלט",
     "html": "הסיבוכיות של האלגוריתם הראשון עדיפה בכל גודל קלט"
    },
    {
     "id": "b",
     "type": "text",
     "value": "הסיבוכיות של האלגוריתם השני עדיפה בכל גודל קלט",
     "html": "הסיבוכיות של האלגוריתם השני עדיפה בכל גודל קלט"
    },
    {
     "id": "c",
     "type": "text",
     "value": "הסיבוכיות של האלגוריתם השני עדיפה, אך בקלטים קטנים עדיף האלגוריתם הראשון",
     "html": "הסיבוכיות של האלגוריתם השני עדיפה, אך בקלטים קטנים עדיף האלגוריתם הראשון"
    },
    {
     "id": "d",
     "type": "text",
     "value": "הסיבוכיות של האלגוריתם הראשון עדיפה אך בקלטים קטנים עדיף האלגוריתם השני",
     "html": "הסיבוכיות של האלגוריתם הראשון עדיפה אך בקלטים קטנים עדיף האלגוריתם השני"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q12",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "סיבוכיות וחסמים אסימפטוטיים",
   "questionHtml": "נתונים שני אלגוריתמים לפתרון אותה הבעיה, אחד מבצע את הפעולה בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mrow><mo fence=\"true\">(</mo><mfrac><mn>1</mn><mn>100</mn></mfrac><msup><mi>n</mi><mn>2</mn></msup><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">\\theta\\left(\\frac{1}{100}n^2\\right)</annotation></semantics></math></span> והשני בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mn>5</mn><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(5n\\log n)</annotation></semantics></math></span><br><br>מה ניתן לומר על האלגוריתמים?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 21,
   "kind": "mcq",
   "topic": "avl",
   "question": "נתון עץ חיפוש בינרי שיש בו עלה בעומק $5$. מהו המספר ה**מינימלי** של **צמתים** בעץ הנתון כך שיהיה עץ AVL?\n(כלומר, שיהיה עץ בינרי מאוזן)",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "12",
     "html": "12"
    },
    {
     "id": "b",
     "type": "text",
     "value": "18",
     "html": "18"
    },
    {
     "id": "c",
     "type": "text",
     "value": "20",
     "html": "20"
    },
    {
     "id": "d",
     "type": "text",
     "value": "22",
     "html": "22"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q21",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "נתון עץ חיפוש בינרי שיש בו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>. מהו המספר ה<strong>מינימלי</strong> של <strong>צמתים</strong> בעץ הנתון כך שיהיה עץ AVL?<br>(כלומר, שיהיה עץ בינרי מאוזן)",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 23,
   "kind": "mcq",
   "topic": "recurrences",
   "question": "תנו חסם אסימפטוטי הדוק (\"תטא\") לנוסחת הנסיגה הבאה (עבור $n$ מספיק קטן מתקיים $T(n)=O(1)$):\n\n$T(n) = T\\left(\\frac{n}{6}\\right) + T\\left(\\frac{n}{3}\\right) + n$",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$\\Theta(n^2\\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n^2\\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$\\Theta(n\\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n\\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$\\Theta(n^2)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n^2)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$\\Theta(n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q23",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "תנו חסם אסימפטוטי הדוק (\"תטא\") לנוסחת הנסיגה הבאה (עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספיק קטן מתקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n)=O(1)</annotation></semantics></math></span>):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><mn>6</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><mn>3</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">T(n) = T\\left(\\frac{n}{6}\\right) + T\\left(\\frac{n}{3}\\right) + n</annotation></semantics></math></span>",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 25,
   "kind": "mcq",
   "topic": "bst",
   "question": "נתונה סריקת preorder של עץ בינארי (משמאל לימין):\n10,6,5,2,8,50,47,45,100,105\n\nמהו המשפט הנכון?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ייתכן שהעץ הוא עץ חיפוש, אך לא ייתכן שהוא עץ AVL",
     "html": "ייתכן שהעץ הוא עץ חיפוש, אך לא ייתכן שהוא עץ AVL"
    },
    {
     "id": "b",
     "type": "text",
     "value": "ייתכן שהעץ הוא עץ AVL",
     "html": "ייתכן שהעץ הוא עץ AVL"
    },
    {
     "id": "c",
     "type": "text",
     "value": "לא ייתכן שהעץ הוא עץ חיפוש",
     "html": "לא ייתכן שהעץ הוא עץ חיפוש"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא ניתן לדעת על פי סריקת preorder בלבד האם העץ הוא עץ חיפוש",
     "html": "לא ניתן לדעת על פי סריקת preorder בלבד האם העץ הוא עץ חיפוש"
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q25",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי חיפוש בינאריים",
   "questionHtml": "נתונה סריקת preorder של עץ בינארי (משמאל לימין):<br>10,6,5,2,8,50,47,45,100,105<br><br>מהו המשפט הנכון?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 28,
   "kind": "mcq",
   "topic": "recurrences",
   "question": "מהו הפתרון לנוסחת הנסיגה הבאה:\n\n$T(n) = 2T\\left(\\frac{n}{\\sqrt{2}}\\right) + \\sqrt{n}$",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$\\theta(\\sqrt{n}\\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><msqrt><mi>n</mi></msqrt><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(\\sqrt{n}\\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$\\theta(n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n)</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$\\theta(n\\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n\\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$\\theta(n^2)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n^2)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q28",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "מהו הפתרון לנוסחת הנסיגה הבאה:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><msqrt><mn>2</mn></msqrt></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><msqrt><mi>n</mi></msqrt></mrow><annotation encoding=\"application/x-tex\">T(n) = 2T\\left(\\frac{n}{\\sqrt{2}}\\right) + \\sqrt{n}</annotation></semantics></math></span>",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 29,
   "kind": "mcq",
   "topic": "union_find",
   "question": "משתמשים במבנה נתונים לייצוג קבוצות זרות בייצוג ע\"י עצים הפוכים, כך שבפעולת האיחוד מחברים את הקבוצה הקטנה לגדולה.\nנתון העץ הבא:\n\nנתונות אפשרויות שונות לסדרת פעולות `Union` שיצרו את העץ הנתון.\n\n- יש לקרוא את סדרת הפעולות הבאות משמאל לימין.\n- הניחו שלפני כל סדרה התבצעו הפעולות הבאות:\n\n`Makeset(1), Makeset(2), Makeset(3), Makeset(4), Makeset(5), Makeset(6)`\n\nמי מבין הסדרות הבאות יכלה ליצור את העץ הנתון?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "`Union(1,3)`, `Union(5,1)`, `Union(4,3)`, `Union(2,1)`, `Union(6,5)`",
     "html": "<code class=\"tok\" dir=\"ltr\">Union(1,3)</code>, <code class=\"tok\" dir=\"ltr\">Union(5,1)</code>, <code class=\"tok\" dir=\"ltr\">Union(4,3)</code>, <code class=\"tok\" dir=\"ltr\">Union(2,1)</code>, <code class=\"tok\" dir=\"ltr\">Union(6,5)</code>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "`Union(1,2)`, `Union(3,4)`, `Union(5,6)`, `Union(3,6)`, `Union(2,4)`",
     "html": "<code class=\"tok\" dir=\"ltr\">Union(1,2)</code>, <code class=\"tok\" dir=\"ltr\">Union(3,4)</code>, <code class=\"tok\" dir=\"ltr\">Union(5,6)</code>, <code class=\"tok\" dir=\"ltr\">Union(3,6)</code>, <code class=\"tok\" dir=\"ltr\">Union(2,4)</code>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "`Union(1,2)`, `Union(3,4)`, `Union(5,6)`, `Union(2,4)`, `Union(2,6)`",
     "html": "<code class=\"tok\" dir=\"ltr\">Union(1,2)</code>, <code class=\"tok\" dir=\"ltr\">Union(3,4)</code>, <code class=\"tok\" dir=\"ltr\">Union(5,6)</code>, <code class=\"tok\" dir=\"ltr\">Union(2,4)</code>, <code class=\"tok\" dir=\"ltr\">Union(2,6)</code>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא קיימת סדרת פעולות Union שיכולה ליצור את העץ הנתון",
     "html": "לא קיימת סדרת פעולות Union שיכולה ליצור את העץ הנתון"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "image": "images/exams/24S-A-Q9b.png",
   "id": "24S-A-Q29",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "קבוצות זרות",
   "questionHtml": "משתמשים במבנה נתונים לייצוג קבוצות זרות בייצוג ע\"י עצים הפוכים, כך שבפעולת האיחוד מחברים את הקבוצה הקטנה לגדולה.<br>נתון העץ הבא:<br><br>נתונות אפשרויות שונות לסדרת פעולות <code class=\"tok\" dir=\"ltr\">Union</code> שיצרו את העץ הנתון.<br><br>- יש לקרוא את סדרת הפעולות הבאות משמאל לימין.<br>- הניחו שלפני כל סדרה התבצעו הפעולות הבאות:<br><br><code class=\"tok\" dir=\"ltr\">Makeset(1), Makeset(2), Makeset(3), Makeset(4), Makeset(5), Makeset(6)</code><br><br>מי מבין הסדרות הבאות יכלה ליצור את העץ הנתון?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 30,
   "kind": "mcq",
   "topic": "hashing",
   "question": "עבור פונקציות הגיבוב הבאות, מי מהן יכולה לשמש פונקציית גיבוב טובה עבור גיבוב כפול?\n\n(כלומר, אנחנו מחפשים פונקציית גיבוב בשיטת הגיבוב הכפול, כך שטבלת הגיבוב תעבוד באופן שלמדנו בכיתה, ולא ייווצרו בעיות עבור מפתחות מסויימים).",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$h(x,i) = \\left(x \\bmod 14 + i\\left((x \\bmod 5)+1\\right)\\right) \\bmod 12$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>14</mn><mo>+</mo><mi>i</mi><mrow><mo fence=\"true\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>5</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo fence=\"true\">)</mo></mrow><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 14 + i\\left((x \\bmod 5)+1\\right)\\right) \\bmod 12</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$h(x,i) = \\left(x \\bmod 11 + i\\left((x \\bmod 5)+1\\right)\\right) \\bmod 11$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>+</mo><mi>i</mi><mrow><mo fence=\"true\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>5</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo fence=\"true\">)</mo></mrow><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 11 + i\\left((x \\bmod 5)+1\\right)\\right) \\bmod 11</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$h(x,i) = \\left(x \\bmod 11 + i\\left(x \\bmod 7\\right)\\right) \\bmod 11$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>+</mo><mi>i</mi><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo fence=\"true\">)</mo></mrow><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 11 + i\\left(x \\bmod 7\\right)\\right) \\bmod 11</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$h(x,i) = \\left(random(x) \\bmod 11 + i\\left((x \\bmod 7)+1\\right)\\right) \\bmod 11$ כאשר $random(x)$ מקבלת את המספר $x$ ומחזירה מספר בין $0$ ל-$x$.",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>r</mi><mi>a</mi><mi>n</mi><mi>d</mi><mi>o</mi><mi>m</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>+</mo><mi>i</mi><mrow><mo fence=\"true\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo fence=\"true\">)</mo></mrow><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(random(x) \\bmod 11 + i\\left((x \\bmod 7)+1\\right)\\right) \\bmod 11</annotation></semantics></math></span> כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mi>a</mi><mi>n</mi><mi>d</mi><mi>o</mi><mi>m</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">random(x)</annotation></semantics></math></span> מקבלת את המספר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> ומחזירה מספר בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span>."
    }
   ],
   "correctId": "b",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q30",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "עבור פונקציות הגיבוב הבאות, מי מהן יכולה לשמש פונקציית גיבוב טובה עבור גיבוב כפול?<br><br>(כלומר, אנחנו מחפשים פונקציית גיבוב בשיטת הגיבוב הכפול, כך שטבלת הגיבוב תעבוד באופן שלמדנו בכיתה, ולא ייווצרו בעיות עבור מפתחות מסויימים).",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 31,
   "kind": "mcq",
   "topic": "complexity",
   "question": "נתונים שני אלגוריתמים לפתרון אותה הבעיה, אחד מבצע את הפעולה בזמן $\\theta(5n\\log n)$ והשני בזמן $\\theta\\left(\\frac{1}{100}n^2\\right)$\n\nמה ניתן לומר על האלגוריתמים?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "הסיבוכיות של האלגוריתם הראשון עדיפה בכל גודל קלט",
     "html": "הסיבוכיות של האלגוריתם הראשון עדיפה בכל גודל קלט"
    },
    {
     "id": "b",
     "type": "text",
     "value": "הסיבוכיות של האלגוריתם השני עדיפה בכל גודל קלט",
     "html": "הסיבוכיות של האלגוריתם השני עדיפה בכל גודל קלט"
    },
    {
     "id": "c",
     "type": "text",
     "value": "הסיבוכיות של האלגוריתם השני עדיפה, אך בקלטים קטנים עדיף האלגוריתם הראשון",
     "html": "הסיבוכיות של האלגוריתם השני עדיפה, אך בקלטים קטנים עדיף האלגוריתם הראשון"
    },
    {
     "id": "d",
     "type": "text",
     "value": "הסיבוכיות של האלגוריתם הראשון עדיפה אך בקלטים קטנים עדיף האלגוריתם השני",
     "html": "הסיבוכיות של האלגוריתם הראשון עדיפה אך בקלטים קטנים עדיף האלגוריתם השני"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q31",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "סיבוכיות וחסמים אסימפטוטיים",
   "questionHtml": "נתונים שני אלגוריתמים לפתרון אותה הבעיה, אחד מבצע את הפעולה בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mn>5</mn><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(5n\\log n)</annotation></semantics></math></span> והשני בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mrow><mo fence=\"true\">(</mo><mfrac><mn>1</mn><mn>100</mn></mfrac><msup><mi>n</mi><mn>2</mn></msup><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">\\theta\\left(\\frac{1}{100}n^2\\right)</annotation></semantics></math></span><br><br>מה ניתן לומר על האלגוריתמים?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 32,
   "kind": "mcq",
   "topic": "hashing",
   "question": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:\n\n$h_1(x) = x \\bmod 11$\n$h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11$\n\nלטבלה הוכנסו הערכים הבאים: משמאל לימין\n$\\{24,39,88,28,13,17,20\\}$\n\nאילו מהערכים יהיו בטבלה הראשונה $T_1$?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "13,17,24,39",
     "html": "13,17,24,39"
    },
    {
     "id": "b",
     "type": "text",
     "value": "17,24,39",
     "html": "17,24,39"
    },
    {
     "id": "c",
     "type": "text",
     "value": "13,20,28",
     "html": "13,20,28"
    },
    {
     "id": "d",
     "type": "text",
     "value": "88,24,17,20",
     "html": "88,24,17,20"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q32",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_1(x) = x \\bmod 11</annotation></semantics></math></span><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mi>x</mi><mn>11</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11</annotation></semantics></math></span><br><br>לטבלה הוכנסו הערכים הבאים: משמאל לימין<br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>24</mn><mo separator=\"true\">,</mo><mn>39</mn><mo separator=\"true\">,</mo><mn>88</mn><mo separator=\"true\">,</mo><mn>28</mn><mo separator=\"true\">,</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>17</mn><mo separator=\"true\">,</mo><mn>20</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{24,39,88,28,13,17,20\\}</annotation></semantics></math></span><br><br>אילו מהערכים יהיו בטבלה הראשונה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub></mrow><annotation encoding=\"application/x-tex\">T_1</annotation></semantics></math></span>?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 41,
   "kind": "mcq",
   "topic": "recurrences",
   "question": "מהו הפתרון לנוסחת הנסיגה הבאה:\n\n$T(n) = 3T\\left(\\frac{n}{\\sqrt{3}}\\right) + n^2 + \\sqrt{n}$",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$\\theta(n^2\\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n^2\\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$\\theta(n^2)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n^2)</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$\\theta(n\\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n\\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$\\theta(n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\theta(n)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q41",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "מהו הפתרון לנוסחת הנסיגה הבאה:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>3</mn><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><msqrt><mn>3</mn></msqrt></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><msqrt><mi>n</mi></msqrt></mrow><annotation encoding=\"application/x-tex\">T(n) = 3T\\left(\\frac{n}{\\sqrt{3}}\\right) + n^2 + \\sqrt{n}</annotation></semantics></math></span>",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 42,
   "kind": "mcq",
   "topic": "hashing",
   "question": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:\n\n$h_1(x) = x \\bmod 11$\n$h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11$\n\nלטבלה הוכנסו הערכים הבאים: משמאל לימין\n$\\{13,17,20,24,39,88,28\\}$\n\nאילו מהערכים יהיו בטבלה הראשונה $T_1$?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "13,20,28,88",
     "html": "13,20,28,88"
    },
    {
     "id": "b",
     "type": "text",
     "value": "17,24,39",
     "html": "17,24,39"
    },
    {
     "id": "c",
     "type": "text",
     "value": "13,20,28",
     "html": "13,20,28"
    },
    {
     "id": "d",
     "type": "text",
     "value": "13,17,20,28",
     "html": "13,17,20,28"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q42",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "נתונה טבלת גיבוב בשיטת גיבוב קוקיה, המשתמשת בשתי הפונקציות הבאות:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_1(x) = x \\bmod 11</annotation></semantics></math></span><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mi>x</mi><mn>11</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_2(x) = \\left\\lfloor \\frac{x}{11} \\right\\rfloor \\bmod 11</annotation></semantics></math></span><br><br>לטבלה הוכנסו הערכים הבאים: משמאל לימין<br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>17</mn><mo separator=\"true\">,</mo><mn>20</mn><mo separator=\"true\">,</mo><mn>24</mn><mo separator=\"true\">,</mo><mn>39</mn><mo separator=\"true\">,</mo><mn>88</mn><mo separator=\"true\">,</mo><mn>28</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{13,17,20,24,39,88,28\\}</annotation></semantics></math></span><br><br>אילו מהערכים יהיו בטבלה הראשונה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub></mrow><annotation encoding=\"application/x-tex\">T_1</annotation></semantics></math></span>?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 45,
   "kind": "mcq",
   "topic": "bst",
   "question": "נתונה סריקת preorder של עץ בינארי (משמאל לימין):\n50,47,6,5,8,10,100,45,105\n\nמהו המשפט הנכון?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ייתכן שהעץ הוא עץ חיפוש, אך לא ייתכן שהוא עץ AVL",
     "html": "ייתכן שהעץ הוא עץ חיפוש, אך לא ייתכן שהוא עץ AVL"
    },
    {
     "id": "b",
     "type": "text",
     "value": "ייתכן שהעץ הוא עץ AVL",
     "html": "ייתכן שהעץ הוא עץ AVL"
    },
    {
     "id": "c",
     "type": "text",
     "value": "לא ייתכן שהעץ הוא עץ חיפוש",
     "html": "לא ייתכן שהעץ הוא עץ חיפוש"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא ניתן לדעת על פי סריקת preorder בלבד האם העץ הוא עץ חיפוש",
     "html": "לא ניתן לדעת על פי סריקת preorder בלבד האם העץ הוא עץ חיפוש"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q45",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי חיפוש בינאריים",
   "questionHtml": "נתונה סריקת preorder של עץ בינארי (משמאל לימין):<br>50,47,6,5,8,10,100,45,105<br><br>מהו המשפט הנכון?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 47,
   "kind": "mcq",
   "topic": "avl",
   "question": "נתון עץ חיפוש בינרי שיש בו עלה בעומק $6$. מהו המספר ה**מינימלי** של **צמתים** בעץ הנתון כך שיהיה עץ AVL?\n(כלומר, שיהיה עץ בינרי מאוזן)",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "20",
     "html": "20"
    },
    {
     "id": "b",
     "type": "text",
     "value": "28",
     "html": "28"
    },
    {
     "id": "c",
     "type": "text",
     "value": "31",
     "html": "31"
    },
    {
     "id": "d",
     "type": "text",
     "value": "33",
     "html": "33"
    }
   ],
   "correctId": "d",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q47",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "נתון עץ חיפוש בינרי שיש בו עלה בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span>. מהו המספר ה<strong>מינימלי</strong> של <strong>צמתים</strong> בעץ הנתון כך שיהיה עץ AVL?<br>(כלומר, שיהיה עץ בינרי מאוזן)",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 50,
   "kind": "mcq",
   "topic": "recurrences",
   "question": "תנו חסם אסימפטוטי הדוק (\"תטא\") לנוסחת הנסיגה הבאה (עבור $n$ מספיק קטן מתקיים $T(n)=O(1)$):\n\n$T(n) = T\\left(\\frac{n}{3}\\right) + T\\left(\\frac{n}{2}\\right) + n$",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$\\Theta(n\\log\\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n\\log\\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$\\Theta(n\\log n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n\\log n)</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$\\Theta(n)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n)</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$\\Theta(n^2)$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n^2)</annotation></semantics></math></span>"
    }
   ],
   "correctId": "c",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q50",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "תנו חסם אסימפטוטי הדוק (\"תטא\") לנוסחת הנסיגה הבאה (עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספיק קטן מתקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n)=O(1)</annotation></semantics></math></span>):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><mn>3</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">T(n) = T\\left(\\frac{n}{3}\\right) + T\\left(\\frac{n}{2}\\right) + n</annotation></semantics></math></span>",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 51,
   "kind": "mcq",
   "topic": "union_find",
   "question": "משתמשים במבנה נתונים לייצוג קבוצות זרות בייצוג ע\"י עצים הפוכים, כך שבפעולת האיחוד מחברים את הקבוצה הקטנה לגדולה.\nנתון העץ הבא:\n\nנתונות אפשרויות שונות לסדרת פעולות `Union` שיצרו את העץ הנתון.\n\n- יש לקרוא את סדרת הפעולות הבאות משמאל לימין.\n- הניחו שלפני כל סדרה התבצעו הפעולות הבאות:\n\n`Makeset(1), Makeset(2), Makeset(3), Makeset(4), Makeset(5), Makeset(6)`\n\nמי מבין הסדרות הבאות יכלה ליצור את העץ הנתון?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "`Union(1,2)`, `Union(3,4)`, `Union(5,6)`, `Union(6,4)`, `Union(4,2)`",
     "html": "<code class=\"tok\" dir=\"ltr\">Union(1,2)</code>, <code class=\"tok\" dir=\"ltr\">Union(3,4)</code>, <code class=\"tok\" dir=\"ltr\">Union(5,6)</code>, <code class=\"tok\" dir=\"ltr\">Union(6,4)</code>, <code class=\"tok\" dir=\"ltr\">Union(4,2)</code>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "`Union(1,2)`, `Union(3,4)`, `Union(5,6)`, `Union(4,2)`, `Union(6,4)`",
     "html": "<code class=\"tok\" dir=\"ltr\">Union(1,2)</code>, <code class=\"tok\" dir=\"ltr\">Union(3,4)</code>, <code class=\"tok\" dir=\"ltr\">Union(5,6)</code>, <code class=\"tok\" dir=\"ltr\">Union(4,2)</code>, <code class=\"tok\" dir=\"ltr\">Union(6,4)</code>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "`Union(5,3)`, `Union(5,6)`, `Union(3,4)`, `Union(1,2)`, `Union(5,1)`",
     "html": "<code class=\"tok\" dir=\"ltr\">Union(5,3)</code>, <code class=\"tok\" dir=\"ltr\">Union(5,6)</code>, <code class=\"tok\" dir=\"ltr\">Union(3,4)</code>, <code class=\"tok\" dir=\"ltr\">Union(1,2)</code>, <code class=\"tok\" dir=\"ltr\">Union(5,1)</code>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא קיימת סדרת פעולות Union שיכולה ליצור את העץ הנתון",
     "html": "לא קיימת סדרת פעולות Union שיכולה ליצור את העץ הנתון"
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "image": "images/exams/24S-A-Q11c.png",
   "id": "24S-A-Q51",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "קבוצות זרות",
   "questionHtml": "משתמשים במבנה נתונים לייצוג קבוצות זרות בייצוג ע\"י עצים הפוכים, כך שבפעולת האיחוד מחברים את הקבוצה הקטנה לגדולה.<br>נתון העץ הבא:<br><br>נתונות אפשרויות שונות לסדרת פעולות <code class=\"tok\" dir=\"ltr\">Union</code> שיצרו את העץ הנתון.<br><br>- יש לקרוא את סדרת הפעולות הבאות משמאל לימין.<br>- הניחו שלפני כל סדרה התבצעו הפעולות הבאות:<br><br><code class=\"tok\" dir=\"ltr\">Makeset(1), Makeset(2), Makeset(3), Makeset(4), Makeset(5), Makeset(6)</code><br><br>מי מבין הסדרות הבאות יכלה ליצור את העץ הנתון?",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 52,
   "kind": "mcq",
   "topic": "hashing",
   "question": "עבור פונקציות הגיבוב הבאות, מי מהן יכולה לשמש פונקציית גיבוב טובה עבור גיבוב כפול?\n\n(כלומר, אנחנו מחפשים פונקציית גיבוב בשיטת הגיבוב הכפול, כך שטבלת הגיבוב תעבוד באופן שלמדנו בכיתה, ולא ייווצרו בעיות עבור מפתחות מסויימים).",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "$h(x,i) = \\left(x \\bmod 13 + i\\left((x \\bmod 9)+1\\right)\\right) \\bmod 13$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>13</mn><mo>+</mo><mi>i</mi><mrow><mo fence=\"true\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>9</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo fence=\"true\">)</mo></mrow><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 13 + i\\left((x \\bmod 9)+1\\right)\\right) \\bmod 13</annotation></semantics></math></span>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$h(x,i) = \\left(x \\bmod 14 + i\\left((x \\bmod 9)+1\\right)\\right) \\bmod 14$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>14</mn><mo>+</mo><mi>i</mi><mrow><mo fence=\"true\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>9</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo fence=\"true\">)</mo></mrow><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 14 + i\\left((x \\bmod 9)+1\\right)\\right) \\bmod 14</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "$h(x,i) = \\left(x \\bmod 13 + i\\left(x \\bmod 7\\right)\\right) \\bmod 13$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>13</mn><mo>+</mo><mi>i</mi><mrow><mo fence=\"true\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo fence=\"true\">)</mo></mrow><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(x \\bmod 13 + i\\left(x \\bmod 7\\right)\\right) \\bmod 13</annotation></semantics></math></span>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "$h(x,i) = \\left(random(x) \\bmod 13 + i\\left((x \\bmod 7)+1\\right)\\right) \\bmod 13$ כאשר $random(x)$ מקבלת את המספר $x$ ומחזירה מספר בין $0$ ל-$x$.",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mi>r</mi><mi>a</mi><mi>n</mi><mi>d</mi><mi>o</mi><mi>m</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>13</mn><mo>+</mo><mi>i</mi><mrow><mo fence=\"true\">(</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo fence=\"true\">)</mo></mrow><mo fence=\"true\">)</mo></mrow><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = \\left(random(x) \\bmod 13 + i\\left((x \\bmod 7)+1\\right)\\right) \\bmod 13</annotation></semantics></math></span> כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mi>a</mi><mi>n</mi><mi>d</mi><mi>o</mi><mi>m</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">random(x)</annotation></semantics></math></span> מקבלת את המספר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> ומחזירה מספר בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span>."
    }
   ],
   "correctId": "a",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7.5,
   "id": "24S-A-Q52",
   "partKey": "",
   "examCode": "24S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ד, מועד א (14.10.24)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "עבור פונקציות הגיבוב הבאות, מי מהן יכולה לשמש פונקציית גיבוב טובה עבור גיבוב כפול?<br><br>(כלומר, אנחנו מחפשים פונקציית גיבוב בשיטת הגיבוב הכפול, כך שטבלת הגיבוב תעבוד באופן שלמדנו בכיתה, ולא ייווצרו בעיות עבור מפתחות מסויימים).",
   "explanation": "",
   "explanationHtml": "",
   "pointsTotal": 7.5
  },
  {
   "num": 1,
   "kind": "computation",
   "topic": "linear_ds",
   "question": "[10 נקודות] הכניסו את האיברים הבאים לתור ריק, הממומש על ידי מערך מעגלי בגודל 10. הכניסו את האיברים משמאל לימין:\n\n$6, 12, 4, 53, 8, 17$\n\nציירו את התור המתקבל, בתוך התבנית הבאה (מערך בתאים $1$ עד $10$), כאשר ידוע כי אינדקס ראש התור הוא $5$. ציינו מיהו אינדקס ראש התור, ומיהו אינדקס סוף התור, בסיום הכנסת האיברים הנתונים.\n\nכעת, הפעילו על התור שהתקבל לעיל, את הפונקציה MASHU. ציירו את התור המתקבל, בתוך התבנית הבאה, וציינו מיהו אינדקס ראש התור, ומיהו אינדקס סוף התור.\n\nשימו לב! נתבקשם לרשום את האינדקסים של ראש וזנב, לא את התוכן באינדקסים אלה. כמו כן, זנב התור אחרי כל הכנסה מתקדם למקום הפנוי הבא.",
   "solution": "אחרי ההכנסה: התאים $5$ עד $10$ מכילים לפי הסדר $6, 12, 4, 53, 8, 17$; התאים $1$ עד $4$ ריקים. `Head` = $5$, `Tail` = $1$ (הזנב מתקדם למקום הפנוי הבא ועוטף את סוף המערך).\n\nאחרי הפעלת `MASHU`: התאים $1$ עד $6$ מכילים לפי הסדר $17, 8, 53, 4, 12, 6$; התאים $7$ עד $10$ ריקים. `Head` = $1$, `Tail` = $7$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 10,
   "part": "א",
   "contextId": "25B-A-c1",
   "id": "25B-A-Q1a",
   "partKey": "a",
   "examCode": "25B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד א (10.7.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "מערך, מחסנית, תור ורשימה מקושרת",
   "questionHtml": "[10 נקודות] הכניסו את האיברים הבאים לתור ריק, הממומש על ידי מערך מעגלי בגודל 10. הכניסו את האיברים משמאל לימין:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>53</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>17</mn></mrow><annotation encoding=\"application/x-tex\">6, 12, 4, 53, 8, 17</annotation></semantics></math></span><br><br>ציירו את התור המתקבל, בתוך התבנית הבאה (מערך בתאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span>), כאשר ידוע כי אינדקס ראש התור הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>. ציינו מיהו אינדקס ראש התור, ומיהו אינדקס סוף התור, בסיום הכנסת האיברים הנתונים.<br><br>כעת, הפעילו על התור שהתקבל לעיל, את הפונקציה MASHU. ציירו את התור המתקבל, בתוך התבנית הבאה, וציינו מיהו אינדקס ראש התור, ומיהו אינדקס סוף התור.<br><br>שימו לב! נתבקשם לרשום את האינדקסים של ראש וזנב, לא את התוכן באינדקסים אלה. כמו כן, זנב התור אחרי כל הכנסה מתקדם למקום הפנוי הבא.",
   "solutionHtml": "אחרי ההכנסה: התאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span> מכילים לפי הסדר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>53</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>17</mn></mrow><annotation encoding=\"application/x-tex\">6, 12, 4, 53, 8, 17</annotation></semantics></math></span>; התאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> ריקים. <code class=\"tok\" dir=\"ltr\">Head</code> = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>, <code class=\"tok\" dir=\"ltr\">Tail</code> = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> (הזנב מתקדם למקום הפנוי הבא ועוטף את סוף המערך).<br><br>אחרי הפעלת <code class=\"tok\" dir=\"ltr\">MASHU</code>: התאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span> מכילים לפי הסדר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>17</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>53</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">17, 8, 53, 4, 12, 6</annotation></semantics></math></span>; התאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span> ריקים. <code class=\"tok\" dir=\"ltr\">Head</code> = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>, <code class=\"tok\" dir=\"ltr\">Tail</code> = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span>.",
   "pointsTotal": 10
  },
  {
   "num": 1,
   "kind": "computation",
   "topic": "recurrences",
   "question": "[5 נקודות] כתבו נוסחת נסיגה עבור זמן הריצה של הפונקציה MASHU.",
   "solution": "$T(n) = T(n-1) + O(1)$, $T(1) = O(1)$.\n\nהסבר: ישנה תת בעיה אחת שפותרים ברקורסיה, וגודלה $n-1$ (מספר האיברים בתור אחרי הוצאה אחת), לכן הזמן של חלק זה הוא $T(n-1)$. בנוסף, ישנה עבודה לא רקורסיבית, שכוללת בדיקת התנאי, הפעלת הוצאה אחת והפעלת הכנסה אחת. כל אלה יחד זמנם קבוע (אינם תלויים במספר האיברים בתור). לכן חלק זה תורם $O(1)$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 5,
   "part": "ב",
   "contextId": "25B-A-c1",
   "id": "25B-A-Q1b",
   "partKey": "b",
   "examCode": "25B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד א (10.7.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "[5 נקודות] כתבו נוסחת נסיגה עבור זמן הריצה של הפונקציה MASHU.",
   "solutionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n) = T(n-1) + O(1)</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(1) = O(1)</annotation></semantics></math></span>.<br><br>הסבר: ישנה תת בעיה אחת שפותרים ברקורסיה, וגודלה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> (מספר האיברים בתור אחרי הוצאה אחת), לכן הזמן של חלק זה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n-1)</annotation></semantics></math></span>. בנוסף, ישנה עבודה לא רקורסיבית, שכוללת בדיקת התנאי, הפעלת הוצאה אחת והפעלת הכנסה אחת. כל אלה יחד זמנם קבוע (אינם תלויים במספר האיברים בתור). לכן חלק זה תורם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>.",
   "pointsTotal": 5
  },
  {
   "num": 1,
   "kind": "proof",
   "topic": "recurrences",
   "question": "[10 נקודות] סעיף זה עומד בפני עצמו, ואינו קשור לפונקציה MASHU שבראש השאלה או לשני הסעיפים הקודמים.\n\nמצאו חסם הדוק לנוסחת הנסיגה הבאה (אין צורך להוכיח את נכונות החסם הדוק באינדוקציה):\n\n$T(n) = T\\left(\\frac{n}{4}\\right) + T\\left(\\frac{n}{2}\\right) + n^2$.\n\nשימו לב: פרטו את הדרך, ואת התוצאה הסופית.",
   "solution": "בשיטת עצי רקורסיה:\n\n- שלב א: פיתוח קדקודי העץ לפי הנוסחה.\n- שלב ב: סכימת הקדקודים בכל רמה: מתקבל שברמה ה-$i$ הסכום הוא $n^2 \\left(\\frac{5}{16}\\right)^i$.\n- שלב ג: סכימת כל הרמות, עד איזה עומק?\n\nנשים לב, שלא כל העלים נמצאים באותה רמה: הענף השמאלי ממשיך עד עומק $\\log_4 n$, בעוד הענף הימני ממשיך עמוק יותר, עד עומק $\\log_2 n$. אם נחשב לפי הענף הימני, הארוך יותר, נקבל חסם עליון לנוסחה שלנו:\n\n$$T(n) \\le n^2 \\sum_{i=0}^{\\log_2 n} \\left(\\frac{5}{16}\\right)^i \\le n^2 \\sum_{i=0}^{\\infty} \\left(\\frac{5}{16}\\right)^i = n^2 \\cdot \\frac{1}{1-\\frac{5}{16}} = n^2 \\cdot \\frac{16}{11} = \\Theta(n^2)$$\n\nאפשר לקבל בקלות גם חסם תחתון, כי סכום העץ כולל את השורש, שערכו $n^2$, ועוד קדקודים שרק מגדילים את הסכום. לכן הסכום הוא לפחות $n^2$, כלומר $T(n) \\ge \\Theta(n^2)$.\n\nבסה\"כ קיבלנו חסם הדוק, $T(n) = \\Theta(n^2)$.\n\n![עץ הרקורסיה בפתרון הרשמי](images/exams/25B-A-Q1c-sol.png)\n\nניתן לפתור גם בשיטת המסטר, אך בצורה עקיפה, מתוך ההבנה הבאה: $2T\\left(\\frac{n}{4}\\right) + n^2 \\le T(n) \\le 2T\\left(\\frac{n}{2}\\right) + n^2$. נפתור לפי שיטת המסטר את הנוסחה הימנית, כך נקבל חסם עליון של $n^2$ לנוסחה המקורית. נפתור לפי שיטת המסטר את הנוסחה השמאלית, כך נקבל חסם תחתון של $n^2$ לנוסחה המקורית. סה\"כ קיבלנו חסם הדוק $T(n) = \\Theta(n^2)$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 10,
   "part": "ג",
   "id": "25B-A-Q1c",
   "partKey": "c",
   "examCode": "25B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד א (10.7.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "[10 נקודות] סעיף זה עומד בפני עצמו, ואינו קשור לפונקציה MASHU שבראש השאלה או לשני הסעיפים הקודמים.<br><br>מצאו חסם הדוק לנוסחת הנסיגה הבאה (אין צורך להוכיח את נכונות החסם הדוק באינדוקציה):<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">T(n) = T\\left(\\frac{n}{4}\\right) + T\\left(\\frac{n}{2}\\right) + n^2</annotation></semantics></math></span>.<br><br>שימו לב: פרטו את הדרך, ואת התוצאה הסופית.",
   "solutionHtml": "בשיטת עצי רקורסיה:<br><br>- שלב א: פיתוח קדקודי העץ לפי הנוסחה.<br>- שלב ב: סכימת הקדקודים בכל רמה: מתקבל שברמה ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> הסכום הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mrow><mo fence=\"true\">(</mo><mfrac><mn>5</mn><mn>16</mn></mfrac><mo fence=\"true\">)</mo></mrow><mi>i</mi></msup></mrow><annotation encoding=\"application/x-tex\">n^2 \\left(\\frac{5}{16}\\right)^i</annotation></semantics></math></span>.<br>- שלב ג: סכימת כל הרמות, עד איזה עומק?<br><br>נשים לב, שלא כל העלים נמצאים באותה רמה: הענף השמאלי ממשיך עד עומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>4</mn></msub><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log_4 n</annotation></semantics></math></span>, בעוד הענף הימני ממשיך עמוק יותר, עד עומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log_2 n</annotation></semantics></math></span>. אם נחשב לפי הענף הימני, הארוך יותר, נקבל חסם עליון לנוסחה שלנו:<br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>≤</mo><msup><mi>n</mi><mn>2</mn></msup><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>0</mn></mrow><mrow><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mi>n</mi></mrow></munderover><msup><mrow><mo fence=\"true\">(</mo><mfrac><mn>5</mn><mn>16</mn></mfrac><mo fence=\"true\">)</mo></mrow><mi>i</mi></msup><mo>≤</mo><msup><mi>n</mi><mn>2</mn></msup><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>0</mn></mrow><mi mathvariant=\"normal\">∞</mi></munderover><msup><mrow><mo fence=\"true\">(</mo><mfrac><mn>5</mn><mn>16</mn></mfrac><mo fence=\"true\">)</mo></mrow><mi>i</mi></msup><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mfrac><mn>5</mn><mn>16</mn></mfrac></mrow></mfrac><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><mfrac><mn>16</mn><mn>11</mn></mfrac><mo>=</mo><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n) \\le n^2 \\sum_{i=0}^{\\log_2 n} \\left(\\frac{5}{16}\\right)^i \\le n^2 \\sum_{i=0}^{\\infty} \\left(\\frac{5}{16}\\right)^i = n^2 \\cdot \\frac{1}{1-\\frac{5}{16}} = n^2 \\cdot \\frac{16}{11} = \\Theta(n^2)</annotation></semantics></math></span><br><br>אפשר לקבל בקלות גם חסם תחתון, כי סכום העץ כולל את השורש, שערכו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span>, ועוד קדקודים שרק מגדילים את הסכום. לכן הסכום הוא לפחות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>≥</mo><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n) \\ge \\Theta(n^2)</annotation></semantics></math></span>.<br><br>בסה\"כ קיבלנו חסם הדוק, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n) = \\Theta(n^2)</annotation></semantics></math></span>.<br><figure class=\"rt-fig\"><img src=\"images/exams/25B-A-Q1c-sol.png\" alt=\"עץ הרקורסיה בפתרון הרשמי\" loading=\"lazy\"><figcaption>עץ הרקורסיה בפתרון הרשמי</figcaption></figure><br>ניתן לפתור גם בשיטת המסטר, אך בצורה עקיפה, מתוך ההבנה הבאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><mo>≤</mo><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>≤</mo><mn>2</mn><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">2T\\left(\\frac{n}{4}\\right) + n^2 \\le T(n) \\le 2T\\left(\\frac{n}{2}\\right) + n^2</annotation></semantics></math></span>. נפתור לפי שיטת המסטר את הנוסחה הימנית, כך נקבל חסם עליון של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span> לנוסחה המקורית. נפתור לפי שיטת המסטר את הנוסחה השמאלית, כך נקבל חסם תחתון של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span> לנוסחה המקורית. סה\"כ קיבלנו חסם הדוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n) = \\Theta(n^2)</annotation></semantics></math></span>.",
   "pointsTotal": 10
  },
  {
   "num": 2,
   "kind": "algorithm",
   "topic": "heaps",
   "question": "[10 נקודות] תארו כיצד ניתן לאחסן ערימה-$d$ במערך (בדומה לערימה בינארית), ותארו כיצד מחשבים את האינדקס של:\n\n- ההורה של צומת במיקום $i$\n- הילדים של צומת במיקום $i$",
   "solution": "- ההורה של צומת במיקום $i$: ערך תחתון של $\\frac{i-1}{d}$, כלומר $\\lfloor (i-1)/d \\rfloor$.\n- הילדים של צומת במיקום $i$: $d \\cdot i + 1,\\ d \\cdot i + 2,\\ d \\cdot i + 3,\\ \\dots,\\ d \\cdot i + d$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 10,
   "part": "א",
   "contextId": "25B-A-c2",
   "id": "25B-A-Q2a",
   "partKey": "a",
   "examCode": "25B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד א (10.7.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "ערימות ותור עדיפויות",
   "questionHtml": "[10 נקודות] תארו כיצד ניתן לאחסן ערימה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> במערך (בדומה לערימה בינארית), ותארו כיצד מחשבים את האינדקס של:<br><br>- ההורה של צומת במיקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span><br>- הילדים של צומת במיקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span>",
   "solutionHtml": "- ההורה של צומת במיקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span>: ערך תחתון של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><mi>i</mi><mo>−</mo><mn>1</mn></mrow><mi>d</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{i-1}{d}</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌊</mo><mo stretchy=\"false\">(</mo><mi>i</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">/</mi><mi>d</mi><mo stretchy=\"false\">⌋</mo></mrow><annotation encoding=\"application/x-tex\">\\lfloor (i-1)/d \\rfloor</annotation></semantics></math></span>.<br>- הילדים של צומת במיקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>⋅</mo><mi>i</mi><mo>+</mo><mn>1</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>d</mi><mo>⋅</mo><mi>i</mi><mo>+</mo><mn>2</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>d</mi><mo>⋅</mo><mi>i</mi><mo>+</mo><mn>3</mn><mo separator=\"true\">,</mo><mtext> </mtext><mo>…</mo><mo separator=\"true\">,</mo><mtext> </mtext><mi>d</mi><mo>⋅</mo><mi>i</mi><mo>+</mo><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d \\cdot i + 1,\\ d \\cdot i + 2,\\ d \\cdot i + 3,\\ \\dots,\\ d \\cdot i + d</annotation></semantics></math></span>.",
   "pointsTotal": 10
  },
  {
   "num": 2,
   "kind": "algorithm",
   "topic": "heaps",
   "question": "[15 נקודות] תארו בפסאודוקוד את הפעולות הבאות על ערימה-$d$:\n\n- `Insert(x)` - הכנסת המפתח $x$ לתוך הערימה\n- `Extract-Max()` - הוצאת המפתח המקסימלי מהערימה\n\nנתחו את סיבוכיות הזמן של כל פעולה כפונקציה של $d$ ו-$n$.",
   "solution": "```\ninsert(x, Q)\n    i = size(Q)          // זה האינדקס הראשון הפנוי\n    Q[i] = x\n    heapify_up(i, Q)\n\nheapify_up(i, Q)\n    while i > 0 and Q[(i-1)/d] < Q[i]\n        swap(Q[(i-1)/d], Q[i])\n        i = (i-1)/d\n\nExtract_Max(Q)\n    if size(Q) = 0\n        return EMPTY\n    max = Q[0]\n    swap(Q[0], Q[size(Q)-1])\n    size(Q) = size(Q) - 1\n    heapify_down(0, Q)\n    return max\n\nheapify_down(i, Q)\n    max = i              // מאתחלת את האינדקס של המקסימלי מבין האב והבנים להיות האב\n    for k = 1 to d       // לולאה על כל הילדים\n        if d*i+k < size(Q) and Q[d*i+k] > Q[max]\n            max = d*i+k\n    if max > i\n        swap(Q[i], Q[max])\n        heapify_down(max, Q)\n```\n\nגובה העץ: $\\log_d n$.\n\nסיבוכיות `Insert`: $O(\\log_d n)$.\n\nסיבוכיות `Extract-Max`: $O(d \\cdot \\log_d n)$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 15,
   "part": "ב",
   "contextId": "25B-A-c2",
   "id": "25B-A-Q2b",
   "partKey": "b",
   "examCode": "25B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד א (10.7.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "ערימות ותור עדיפויות",
   "questionHtml": "[15 נקודות] תארו בפסאודוקוד את הפעולות הבאות על ערימה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span>:<br><br>- <code class=\"tok\" dir=\"ltr\">Insert(x)</code> - הכנסת המפתח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> לתוך הערימה<br>- <code class=\"tok\" dir=\"ltr\">Extract-Max()</code> - הוצאת המפתח המקסימלי מהערימה<br><br>נתחו את סיבוכיות הזמן של כל פעולה כפונקציה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.",
   "solutionHtml": "<pre class=\"code-block\" dir=\"ltr\"><code>insert(x, Q)\n    i = size(Q)          // זה האינדקס הראשון הפנוי\n    Q[i] = x\n    heapify_up(i, Q)\n\nheapify_up(i, Q)\n    while i &gt; 0 and Q[(i-1)/d] &lt; Q[i]\n        swap(Q[(i-1)/d], Q[i])\n        i = (i-1)/d\n\nExtract_Max(Q)\n    if size(Q) = 0\n        return EMPTY\n    max = Q[0]\n    swap(Q[0], Q[size(Q)-1])\n    size(Q) = size(Q) - 1\n    heapify_down(0, Q)\n    return max\n\nheapify_down(i, Q)\n    max = i              // מאתחלת את האינדקס של המקסימלי מבין האב והבנים להיות האב\n    for k = 1 to d       // לולאה על כל הילדים\n        if d*i+k &lt; size(Q) and Q[d*i+k] &gt; Q[max]\n            max = d*i+k\n    if max &gt; i\n        swap(Q[i], Q[max])\n        heapify_down(max, Q)</code></pre><br>גובה העץ: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mi>d</mi></msub><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log_d n</annotation></semantics></math></span>.<br><br>סיבוכיות <code class=\"tok\" dir=\"ltr\">Insert</code>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mi>d</mi></msub><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log_d n)</annotation></semantics></math></span>.<br><br>סיבוכיות <code class=\"tok\" dir=\"ltr\">Extract-Max</code>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>d</mi><mo>⋅</mo><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mi>d</mi></msub><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(d \\cdot \\log_d n)</annotation></semantics></math></span>.",
   "pointsTotal": 15
  },
  {
   "num": 3,
   "kind": "computation",
   "topic": "trees_induction",
   "question": "[5 נקודות] צייר את העץ $F_4$.",
   "solution": "העץ $F_4$ מורכב משורש, ובשני תתי-עצים: $F_2$ משמאל (ארבעה צמתים) ו-$F_3$ מימין (שבעה צמתים), בסה\"כ $12$ צמתים.\n\n![העץ F4 בפתרון הרשמי](images/exams/25B-A-Q3a-sol.png)",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 5,
   "part": "א",
   "contextId": "25B-A-c3",
   "id": "25B-A-Q3a",
   "partKey": "a",
   "examCode": "25B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד א (10.7.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "עצים בינאריים, סריקות והוכחות באינדוקציה",
   "questionHtml": "[5 נקודות] צייר את העץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>F</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">F_4</annotation></semantics></math></span>.",
   "solutionHtml": "העץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>F</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">F_4</annotation></semantics></math></span> מורכב משורש, ובשני תתי-עצים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>F</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">F_2</annotation></semantics></math></span> משמאל (ארבעה צמתים) ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>F</mi><mn>3</mn></msub></mrow><annotation encoding=\"application/x-tex\">F_3</annotation></semantics></math></span> מימין (שבעה צמתים), בסה\"כ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">12</annotation></semantics></math></span> צמתים.<br><figure class=\"rt-fig\"><img src=\"images/exams/25B-A-Q3a-sol.png\" alt=\"העץ F4 בפתרון הרשמי\" loading=\"lazy\"><figcaption>העץ F4 בפתרון הרשמי</figcaption></figure>",
   "pointsTotal": 5
  },
  {
   "num": 3,
   "kind": "algorithm",
   "topic": "trees_induction",
   "question": "[8 נקודות] הגדירו פונקציה רקורסיבית $F$ המקבלת את $h$, גובה של עץ פיבונצ'י $T$ ומחזירה את כמות הקודקודים בעץ $T$.",
   "solution": "$F(0) = 1$\n\n$F(1) = 2$\n\n$F(n) = F(n-2) + F(n-1) + 1$",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 8,
   "part": "ב",
   "contextId": "25B-A-c3",
   "id": "25B-A-Q3b",
   "partKey": "b",
   "examCode": "25B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד א (10.7.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "עצים בינאריים, סריקות והוכחות באינדוקציה",
   "questionHtml": "[8 נקודות] הגדירו פונקציה רקורסיבית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">F</annotation></semantics></math></span> המקבלת את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">h</annotation></semantics></math></span>, גובה של עץ פיבונצ'י <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> ומחזירה את כמות הקודקודים בעץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span>.",
   "solutionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo stretchy=\"false\">(</mo><mn>0</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">F(0) = 1</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">F(1) = 2</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>F</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mi>F</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">F(n) = F(n-2) + F(n-1) + 1</annotation></semantics></math></span>",
   "pointsTotal": 8
  },
  {
   "num": 3,
   "kind": "proof",
   "topic": "trees_induction",
   "question": "[12 נקודות] עבור הפונקציה הרקורסיבית שכתבתם בסעיף הקודם (ב'), הוכיחו באינדוקציה על המבנה כי $F(h) \\ge 2^{\\frac{h}{2}}$.",
   "solution": "**בסיס:**\n\n- $h=0$: $F(0) = 1 \\ge 2^0$.\n- $h=1$: $F(1) = 2 \\ge 2^{0.5}$.\n\n**הנחת האינדוקציה:** נניח נכונות עבור עץ פיבונאצ'י בגובה קטן או שווה ל-$h$.\n\n**צעד:** נוכיח עבור עץ פיבונאצ'י בגובה $h+1$ שמתקיים $F(h+1) \\ge 2^{\\frac{h+1}{2}}$.\n\nנתבונן בעץ פיבונאצ'י בגובה $h+1$: השורש, תת-עץ $F_{h-1}$ ותת-עץ $F_h$. לפי הנחת האינדוקציה $F(h-1) \\ge 2^{\\frac{h-1}{2}}$ ו-$F(h) \\ge 2^{\\frac{h}{2}}$.\n\n$$F(h+1) = F(h-1) + F(h) + 1 \\ge 2^{\\frac{h-1}{2}} + 2^{\\frac{h}{2}} + 1 \\ge 2 \\cdot 2^{\\frac{h-1}{2}} + 1 \\ge 2^{\\frac{h-1}{2}+\\frac{2}{2}} = 2^{\\frac{h+1}{2}}$$\n\nכנדרש.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 12,
   "part": "ג",
   "contextId": "25B-A-c3",
   "id": "25B-A-Q3c",
   "partKey": "c",
   "examCode": "25B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד א (10.7.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "עצים בינאריים, סריקות והוכחות באינדוקציה",
   "questionHtml": "[12 נקודות] עבור הפונקציה הרקורסיבית שכתבתם בסעיף הקודם (ב'), הוכיחו באינדוקציה על המבנה כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo stretchy=\"false\">(</mo><mi>h</mi><mo stretchy=\"false\">)</mo><mo>≥</mo><msup><mn>2</mn><mfrac><mi>h</mi><mn>2</mn></mfrac></msup></mrow><annotation encoding=\"application/x-tex\">F(h) \\ge 2^{\\frac{h}{2}}</annotation></semantics></math></span>.",
   "solutionHtml": "<strong>בסיס:</strong><br><br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">h=0</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo stretchy=\"false\">(</mo><mn>0</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn><mo>≥</mo><msup><mn>2</mn><mn>0</mn></msup></mrow><annotation encoding=\"application/x-tex\">F(0) = 1 \\ge 2^0</annotation></semantics></math></span>.<br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">h=1</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mo>≥</mo><msup><mn>2</mn><mn>0.5</mn></msup></mrow><annotation encoding=\"application/x-tex\">F(1) = 2 \\ge 2^{0.5}</annotation></semantics></math></span>.<br><br><strong>הנחת האינדוקציה:</strong> נניח נכונות עבור עץ פיבונאצ'י בגובה קטן או שווה ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">h</annotation></semantics></math></span>.<br><br><strong>צעד:</strong> נוכיח עבור עץ פיבונאצ'י בגובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">h+1</annotation></semantics></math></span> שמתקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo stretchy=\"false\">(</mo><mi>h</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>≥</mo><msup><mn>2</mn><mfrac><mrow><mi>h</mi><mo>+</mo><mn>1</mn></mrow><mn>2</mn></mfrac></msup></mrow><annotation encoding=\"application/x-tex\">F(h+1) \\ge 2^{\\frac{h+1}{2}}</annotation></semantics></math></span>.<br><br>נתבונן בעץ פיבונאצ'י בגובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">h+1</annotation></semantics></math></span>: השורש, תת-עץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>F</mi><mrow><mi>h</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">F_{h-1}</annotation></semantics></math></span> ותת-עץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>F</mi><mi>h</mi></msub></mrow><annotation encoding=\"application/x-tex\">F_h</annotation></semantics></math></span>. לפי הנחת האינדוקציה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo stretchy=\"false\">(</mo><mi>h</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>≥</mo><msup><mn>2</mn><mfrac><mrow><mi>h</mi><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac></msup></mrow><annotation encoding=\"application/x-tex\">F(h-1) \\ge 2^{\\frac{h-1}{2}}</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo stretchy=\"false\">(</mo><mi>h</mi><mo stretchy=\"false\">)</mo><mo>≥</mo><msup><mn>2</mn><mfrac><mi>h</mi><mn>2</mn></mfrac></msup></mrow><annotation encoding=\"application/x-tex\">F(h) \\ge 2^{\\frac{h}{2}}</annotation></semantics></math></span>.<br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>F</mi><mo stretchy=\"false\">(</mo><mi>h</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mi>F</mi><mo stretchy=\"false\">(</mo><mi>h</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mi>F</mi><mo stretchy=\"false\">(</mo><mi>h</mi><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn><mo>≥</mo><msup><mn>2</mn><mfrac><mrow><mi>h</mi><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac></msup><mo>+</mo><msup><mn>2</mn><mfrac><mi>h</mi><mn>2</mn></mfrac></msup><mo>+</mo><mn>1</mn><mo>≥</mo><mn>2</mn><mo>⋅</mo><msup><mn>2</mn><mfrac><mrow><mi>h</mi><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac></msup><mo>+</mo><mn>1</mn><mo>≥</mo><msup><mn>2</mn><mrow><mfrac><mrow><mi>h</mi><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>2</mn><mn>2</mn></mfrac></mrow></msup><mo>=</mo><msup><mn>2</mn><mfrac><mrow><mi>h</mi><mo>+</mo><mn>1</mn></mrow><mn>2</mn></mfrac></msup></mrow><annotation encoding=\"application/x-tex\">F(h+1) = F(h-1) + F(h) + 1 \\ge 2^{\\frac{h-1}{2}} + 2^{\\frac{h}{2}} + 1 \\ge 2 \\cdot 2^{\\frac{h-1}{2}} + 1 \\ge 2^{\\frac{h-1}{2}+\\frac{2}{2}} = 2^{\\frac{h+1}{2}}</annotation></semantics></math></span><br><br>כנדרש.",
   "pointsTotal": 12
  },
  {
   "num": 4,
   "kind": "computation",
   "topic": "hashing",
   "question": "[5 נקודות] הדגימו את הכנסת המפתחות הבאים (יש לקרוא את רשימת המפתחות משמאל לימין): $5, 15, 25$. יש להראות רק את הטבלה הסופית.",
   "solution": "הטבלה הסופית (אינדקס: ערך): $0$: $25$, $5$: $5$, $7$: $15$. שאר התאים ריקים.\n\n- $5 \\bmod 10 = 5$.\n- $15 \\bmod 10 = 5$: תפוס. $h_2(15) = 1 + 15 \\bmod 7 = 2$. $i=1$: $5 + 2 = 7$: פנוי.\n- $25 \\bmod 10 = 5$: תפוס. $h_2(25) = 1 + 25 \\bmod 7 = 1 + 4 = 5$. $i=1$: $5 + 5 = 10 \\bmod 10 = 0$.\n\nהערה: אנחנו מניחים שיש מודולו גודל הטבלה על כל החישוב, אחרת אין טעם בפונקציית צעד. זו הבנה בסיסית של איך מיעון פתוח/גיבוב כפול עובד.\n\nלמרות זאת, סטודנטים שכתבו שאין מקום לשים את $25$ כי הוא יוצא באינדקס $10$ וזה מחוץ לתחום הטבלה - קיבלו ניקוד מלא.\n\nטבלת הגיבוב צריכה להיות מאינדקס $0$ ולא $1$, כי אחרי מראש המודולו $10$ עלול לתת אינדקס $0$ וזה ייצא מחוץ לתחום לכל מי שהתחיל את הטבלה ב-$1$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 5,
   "part": "א",
   "contextId": "25B-A-c4",
   "id": "25B-A-Q4a",
   "partKey": "a",
   "examCode": "25B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד א (10.7.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "[5 נקודות] הדגימו את הכנסת המפתחות הבאים (יש לקרוא את רשימת המפתחות משמאל לימין): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo separator=\"true\">,</mo><mn>15</mn><mo separator=\"true\">,</mo><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">5, 15, 25</annotation></semantics></math></span>. יש להראות רק את הטבלה הסופית.",
   "solutionHtml": "הטבלה הסופית (אינדקס: ערך): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">25</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">15</annotation></semantics></math></span>. שאר התאים ריקים.<br><br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>10</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5 \\bmod 10 = 5</annotation></semantics></math></span>.<br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>10</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">15 \\bmod 10 = 5</annotation></semantics></math></span>: תפוס. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mn>15</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mn>15</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">h_2(15) = 1 + 15 \\bmod 7 = 2</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">i=1</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">5 + 2 = 7</annotation></semantics></math></span>: פנוי.<br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>10</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">25 \\bmod 10 = 5</annotation></semantics></math></span>: תפוס. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mn>25</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mn>25</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo>=</mo><mn>1</mn><mo>+</mo><mn>4</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">h_2(25) = 1 + 25 \\bmod 7 = 1 + 4 = 5</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">i=1</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>10</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>10</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">5 + 5 = 10 \\bmod 10 = 0</annotation></semantics></math></span>.<br><br>הערה: אנחנו מניחים שיש מודולו גודל הטבלה על כל החישוב, אחרת אין טעם בפונקציית צעד. זו הבנה בסיסית של איך מיעון פתוח/גיבוב כפול עובד.<br><br>למרות זאת, סטודנטים שכתבו שאין מקום לשים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">25</annotation></semantics></math></span> כי הוא יוצא באינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span> וזה מחוץ לתחום הטבלה - קיבלו ניקוד מלא.<br><br>טבלת הגיבוב צריכה להיות מאינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>, כי אחרי מראש המודולו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span> עלול לתת אינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> וזה ייצא מחוץ לתחום לכל מי שהתחיל את הטבלה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>.",
   "pointsTotal": 5
  },
  {
   "num": 4,
   "kind": "proof",
   "topic": "hashing",
   "question": "[10 נקודות] בשיטת גיבוב כפול (double hashing) ייתכן שמפתח לא יוכל להיכנס לטבלת הגיבוב גם כאשר היא אינה מלאה. הראו שתופעה זו מתרחשת בטבלה הנתונה בשאלה זו.",
   "solution": "מפתח לא יוכל להיכנס אם לפונקציית הצעד שלו יש מחלק משותף עם גודל הטבלה.\n\nלדוגמה בטבלה הנוכחית $95$ לא יכול להיכנס:\n\n- $h_1(95) = 95 \\bmod 10 = 5$: תפוס.\n- $h_2(95) = 1 + 95 \\bmod 7 = 1 + 4 = 5$.\n- בקפיצות של $5$ לא נמצא מקום פנוי כי תמיד נבדוק רק את תאים $0, 5$ והם תפוסים.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 10,
   "part": "ב",
   "contextId": "25B-A-c4",
   "id": "25B-A-Q4b",
   "partKey": "b",
   "examCode": "25B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד א (10.7.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "[10 נקודות] בשיטת גיבוב כפול (double hashing) ייתכן שמפתח לא יוכל להיכנס לטבלת הגיבוב גם כאשר היא אינה מלאה. הראו שתופעה זו מתרחשת בטבלה הנתונה בשאלה זו.",
   "solutionHtml": "מפתח לא יוכל להיכנס אם לפונקציית הצעד שלו יש מחלק משותף עם גודל הטבלה.<br><br>לדוגמה בטבלה הנוכחית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>95</mn></mrow><annotation encoding=\"application/x-tex\">95</annotation></semantics></math></span> לא יכול להיכנס:<br><br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mn>95</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>95</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>10</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">h_1(95) = 95 \\bmod 10 = 5</annotation></semantics></math></span>: תפוס.<br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mn>95</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mn>95</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo>=</mo><mn>1</mn><mo>+</mo><mn>4</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">h_2(95) = 1 + 95 \\bmod 7 = 1 + 4 = 5</annotation></semantics></math></span>.<br>- בקפיצות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> לא נמצא מקום פנוי כי תמיד נבדוק רק את תאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo separator=\"true\">,</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">0, 5</annotation></semantics></math></span> והם תפוסים.",
   "pointsTotal": 10
  },
  {
   "num": 4,
   "kind": "proof",
   "topic": "hashing",
   "question": "[10 נקודות] תנו תנאי הכרחי ומספיק כי עוד קיים תא פנוי בטבלת הגיבוב, ניתן יהיה תמיד להכניס מפתח חדש בשיטת הגיבוב הכפול, נמקו תשובתכם.",
   "solution": "$\\gcd(h_2(k), m) = 1$\n\nשלא יהיה מחלק משותף בין פונקציית הצעד של כל מפתח אפשרי לבין גודל הטבלה. לכן נבחר את גודל הטבלה להיות מספר ראשוני.\n\nוגם שפונקציית הצעד לא תחזיר $0$, לכן לדוגמה אם משתמשים במודולו לפונקציית הצעד אז מוסיפים פלוס $1$, שאם ייצא אפס במודולו אז עדיין יהיה צעד של $1$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 10,
   "part": "ג",
   "contextId": "25B-A-c4",
   "id": "25B-A-Q4c",
   "partKey": "c",
   "examCode": "25B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד א (10.7.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "[10 נקודות] תנו תנאי הכרחי ומספיק כי עוד קיים תא פנוי בטבלת הגיבוב, ניתן יהיה תמיד להכניס מפתח חדש בשיטת הגיבוב הכפול, נמקו תשובתכם.",
   "solutionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>gcd</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>k</mi><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\gcd(h_2(k), m) = 1</annotation></semantics></math></span><br><br>שלא יהיה מחלק משותף בין פונקציית הצעד של כל מפתח אפשרי לבין גודל הטבלה. לכן נבחר את גודל הטבלה להיות מספר ראשוני.<br><br>וגם שפונקציית הצעד לא תחזיר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>, לכן לדוגמה אם משתמשים במודולו לפונקציית הצעד אז מוסיפים פלוס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>, שאם ייצא אפס במודולו אז עדיין יהיה צעד של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>.",
   "pointsTotal": 10
  },
  {
   "num": 5,
   "kind": "truefalse",
   "topic": "heaps",
   "question": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), ללא נימוק.\n\nיהי $T$ עץ המייצג כמעט שלם. בהינתן כמות העלים בעץ $T$, ניתן לחשב במדויק את גובה העץ $T$. נכון / לא נכון",
   "solution": "לא נכון.\n\nדוגמה נגדית: עץ כמעט שלם עם $4$ עלים יכול להיות בגובה $h=2$ ($7$ צמתים) או בגובה $h=3$ ($8$ צמתים).\n\n![דוגמאות נגדיות בפתרון הרשמי](images/exams/25B-A-Q5-sol.png)",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "part": "א",
   "verdict": false,
   "id": "25B-A-Q5a",
   "partKey": "a",
   "examCode": "25B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד א (10.7.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "ערימות ותור עדיפויות",
   "questionHtml": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), ללא נימוק.<br><br>יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ המייצג כמעט שלם. בהינתן כמות העלים בעץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span>, ניתן לחשב במדויק את גובה העץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span>. נכון / לא נכון",
   "solutionHtml": "לא נכון.<br><br>דוגמה נגדית: עץ כמעט שלם עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> עלים יכול להיות בגובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">h=2</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> צמתים) או בגובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">h=3</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> צמתים).<br><figure class=\"rt-fig\"><img src=\"images/exams/25B-A-Q5-sol.png\" alt=\"דוגמאות נגדיות בפתרון הרשמי\" loading=\"lazy\"><figcaption>דוגמאות נגדיות בפתרון הרשמי</figcaption></figure>",
   "pointsTotal": 0
  },
  {
   "num": 5,
   "kind": "truefalse",
   "topic": "trees_induction",
   "question": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), ללא נימוק.\n\nנגדיר עץ עם עלים בגובה קבוע להיות עץ שבו כל העלים נמצאים בדיוק באותו עומק.\n\nטענה: יהי $T$ עץ בינארי עם עלים בגובה קבוע עם $n$ קודקודים אזי גובה העץ $T$ הוא לכל היותר: $\\log n$. נכון / לא נכון",
   "solution": "לא נכון.\n\nדוגמה נגדית: עץ שיש לו שני עלים והם בעומק $4$, הגובה $n/2$ (שרשרת ארוכה שמסתיימת בשני עלים באותו עומק).",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "part": "ב",
   "verdict": false,
   "id": "25B-A-Q5b",
   "partKey": "b",
   "examCode": "25B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד א (10.7.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "עצים בינאריים, סריקות והוכחות באינדוקציה",
   "questionHtml": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), ללא נימוק.<br><br>נגדיר עץ עם עלים בגובה קבוע להיות עץ שבו כל העלים נמצאים בדיוק באותו עומק.<br><br>טענה: יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ בינארי עם עלים בגובה קבוע עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> קודקודים אזי גובה העץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> הוא לכל היותר: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log n</annotation></semantics></math></span>. נכון / לא נכון",
   "solutionHtml": "לא נכון.<br><br>דוגמה נגדית: עץ שיש לו שני עלים והם בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>, הגובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n/2</annotation></semantics></math></span> (שרשרת ארוכה שמסתיימת בשני עלים באותו עומק).",
   "pointsTotal": 0
  },
  {
   "num": 5,
   "kind": "truefalse",
   "topic": "avl",
   "question": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), ללא נימוק.\n\nיהי $T$ עץ מסוג AVL, אזי בפעולת מחיקת איבר מהעץ $T$ יתכן ביצוע של גלגול אחד לכל היותר. נכון / לא נכון",
   "solution": "לא נכון.\n\nדוגמה נגדית: בעץ פיבונאצ'י בגובה זוגי גדול או שווה ל-$4$, מחיקה של העלה הכי שמאלי תגרום ליותר מגלגול אחד.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "part": "ג",
   "verdict": false,
   "id": "25B-A-Q5c",
   "partKey": "c",
   "examCode": "25B-A",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד א (10.7.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), ללא נימוק.<br><br>יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ מסוג AVL, אזי בפעולת מחיקת איבר מהעץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> יתכן ביצוע של גלגול אחד לכל היותר. נכון / לא נכון",
   "solutionHtml": "לא נכון.<br><br>דוגמה נגדית: בעץ פיבונאצ'י בגובה זוגי גדול או שווה ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>, מחיקה של העלה הכי שמאלי תגרום ליותר מגלגול אחד.",
   "pointsTotal": 0
  },
  {
   "num": 1,
   "kind": "computation",
   "topic": "linear_ds",
   "question": "[10 נקודות] הכניסו את האיברים הבאים למחסנית ריקה, הממומשת על ידי מערך בגודל 10. הכניסו את האיברים משמאל לימין: $7, 10, 2, 8, 45, 13$\n\nוציינו מיהו אינדקס ה-`top` המחסנית לאחר ההכנסה.\n\nכעת, הפעילו על המחסנית שהתקבלה לעיל, את הפונקציה MYSTERY. ציירו את המחסנית המתקבלת, בתוך התבנית הבאה (מערך בתאים $1$ עד $10$), וציינו מיהו אינדקס ה-`top` של המחסנית בסוף ההפעלה.",
   "solution": "אחרי ההכנסה: התאים $1$ עד $6$ מכילים לפי הסדר $7, 10, 2, 8, 45, 13$, התאים $7$ עד $10$ ריקים, ו-`top` $= 6$.\n\nאחרי הפעלת `MYSTERY`: התאים $1$ עד $6$ מכילים כולם את הערך $7$, התאים $7$ עד $10$ ריקים, ו-`top` $= 6$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 10,
   "part": "א",
   "contextId": "25B-B-c1",
   "id": "25B-B-Q1a",
   "partKey": "a",
   "examCode": "25B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד ב (7.8.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "מערך, מחסנית, תור ורשימה מקושרת",
   "questionHtml": "[10 נקודות] הכניסו את האיברים הבאים למחסנית ריקה, הממומשת על ידי מערך בגודל 10. הכניסו את האיברים משמאל לימין: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo separator=\"true\">,</mo><mn>10</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>45</mn><mo separator=\"true\">,</mo><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">7, 10, 2, 8, 45, 13</annotation></semantics></math></span><br><br>וציינו מיהו אינדקס ה-<code class=\"tok\" dir=\"ltr\">top</code> המחסנית לאחר ההכנסה.<br><br>כעת, הפעילו על המחסנית שהתקבלה לעיל, את הפונקציה MYSTERY. ציירו את המחסנית המתקבלת, בתוך התבנית הבאה (מערך בתאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span>), וציינו מיהו אינדקס ה-<code class=\"tok\" dir=\"ltr\">top</code> של המחסנית בסוף ההפעלה.",
   "solutionHtml": "אחרי ההכנסה: התאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span> מכילים לפי הסדר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo separator=\"true\">,</mo><mn>10</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>45</mn><mo separator=\"true\">,</mo><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">7, 10, 2, 8, 45, 13</annotation></semantics></math></span>, התאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span> ריקים, ו-<code class=\"tok\" dir=\"ltr\">top</code> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">= 6</annotation></semantics></math></span>.<br><br>אחרי הפעלת <code class=\"tok\" dir=\"ltr\">MYSTERY</code>: התאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span> מכילים כולם את הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span>, התאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span> ריקים, ו-<code class=\"tok\" dir=\"ltr\">top</code> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">= 6</annotation></semantics></math></span>.",
   "pointsTotal": 10
  },
  {
   "num": 1,
   "kind": "computation",
   "topic": "recurrences",
   "question": "[5 נקודות] כתבו נוסחת נסיגה עבור זמן הריצה של הפונקציה MYSTERY.",
   "solution": "$T(n) = T(n-1) + 5$\n\n(בפתרון הרשמי מסומן ליד כל שורת פסאודו-קוד בפונקציה זמן ריצה קבוע $1$, והקריאה הרקורסיבית מסומנת $T(n-1)$.)",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 5,
   "part": "ב",
   "contextId": "25B-B-c1",
   "id": "25B-B-Q1b",
   "partKey": "b",
   "examCode": "25B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד ב (7.8.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "[5 נקודות] כתבו נוסחת נסיגה עבור זמן הריצה של הפונקציה MYSTERY.",
   "solutionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">T(n) = T(n-1) + 5</annotation></semantics></math></span><br><br>(בפתרון הרשמי מסומן ליד כל שורת פסאודו-קוד בפונקציה זמן ריצה קבוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>, והקריאה הרקורסיבית מסומנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n-1)</annotation></semantics></math></span>.)",
   "pointsTotal": 5
  },
  {
   "num": 1,
   "kind": "proof",
   "topic": "recurrences",
   "question": "[10 נקודות] סעיף זה עומד בפני עצמו, ואינו קשור לפונקציה MYSTERY שבראש השאלה או לשני הסעיפים הקודמים.\n\nלפניכם נוסחת נסיגה. האם היא ניתנת לפתרון בעזרת שיטת האב (משפט המסטר)? אם כן, פתרו אותה (הראו דרך). אם לא, הסבירו מדוע לא.\n\n$T(n) = 4T\\left(\\frac{n}{2}\\right) + n^2 \\log n$.",
   "solution": "נעבור על כל המקרים של שיטת האב ונראה שאף אחד מהם אינו מתאים, ולכן לא ניתן לפתור את הנוסחה בעזרת שיטת האב.\n\nכאן $a = 4$, $b = 2$, $f(n) = n^2 \\log n$, ו-$\\log_b a = \\log_2 4 = 2$.\n\n- מקרה 1: האם $n^2 \\log n = O(n^{2-\\epsilon})$? לא.\n- מקרה 2: האם $n^2 \\log n = \\Theta(n^2)$? לא.\n- מקרה 3: האם $n^2 \\log n = \\Omega(n^{2+\\epsilon})$? לא: $n^2 \\cdot \\log n < n^2 \\cdot n^{\\epsilon}$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 10,
   "part": "ג",
   "contextId": "25B-B-c1",
   "id": "25B-B-Q1c",
   "partKey": "c",
   "examCode": "25B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד ב (7.8.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "[10 נקודות] סעיף זה עומד בפני עצמו, ואינו קשור לפונקציה MYSTERY שבראש השאלה או לשני הסעיפים הקודמים.<br><br>לפניכם נוסחת נסיגה. האם היא ניתנת לפתרון בעזרת שיטת האב (משפט המסטר)? אם כן, פתרו אותה (הראו דרך). אם לא, הסבירו מדוע לא.<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>4</mn><mi>T</mi><mrow><mo fence=\"true\">(</mo><mfrac><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">T(n) = 4T\\left(\\frac{n}{2}\\right) + n^2 \\log n</annotation></semantics></math></span>.",
   "solutionHtml": "נעבור על כל המקרים של שיטת האב ונראה שאף אחד מהם אינו מתאים, ולכן לא ניתן לפתור את הנוסחה בעזרת שיטת האב.<br><br>כאן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">a = 4</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">b = 2</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">f(n) = n^2 \\log n</annotation></semantics></math></span>, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mi>b</mi></msub><mi>a</mi><mo>=</mo><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mn>4</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">\\log_b a = \\log_2 4 = 2</annotation></semantics></math></span>.<br><br>- מקרה 1: האם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup><mi>log</mi><mo>⁡</mo><mi>n</mi><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>−</mo><mi>ϵ</mi></mrow></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">n^2 \\log n = O(n^{2-\\epsilon})</annotation></semantics></math></span>? לא.<br>- מקרה 2: האם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup><mi>log</mi><mo>⁡</mo><mi>n</mi><mo>=</mo><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">n^2 \\log n = \\Theta(n^2)</annotation></semantics></math></span>? לא.<br>- מקרה 3: האם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup><mi>log</mi><mo>⁡</mo><mi>n</mi><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>+</mo><mi>ϵ</mi></mrow></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">n^2 \\log n = \\Omega(n^{2+\\epsilon})</annotation></semantics></math></span>? לא: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo>&lt;</mo><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><msup><mi>n</mi><mi>ϵ</mi></msup></mrow><annotation encoding=\"application/x-tex\">n^2 \\cdot \\log n &lt; n^2 \\cdot n^{\\epsilon}</annotation></semantics></math></span>.",
   "pointsTotal": 10
  },
  {
   "num": 2,
   "kind": "proof",
   "topic": "sorting_selection",
   "question": "[15 נקודות] הוכיחו:\n\nבהינתן מערך $A$ המכיל $n$ מספרים ומספר $1 \\le k \\le n$, אלגוריתם למציאת האיבר ה-$k$ בגודלו הינו בעלות זמן ריצה של $\\Omega(\\log n)$.\n\nרמז: ניתן להעזר בעץ החלטות.",
   "solution": "**פתרון ע\"י עץ החלטה של אלגוריתם למציאת האיבר ה-$k$ בגודלו:**\n\nכמות העלים $n$ כי זה מספר האפשרויות לפלט כי כל אחד מאיברי המערך עומד להיות התוצאה. עץ החלטה הוא עץ מלא ולכן מספר הצמתים הפנימיים הוא $n-1$. סה\"כ מספר הצמתים $2n-1$.\n\nהגובה של עץ ההחלטה מציין את עלות זמן הריצה עבור הקלט הגרוע ביותר של האלגוריתם. גובה עץ ההחלטה של כל אלגוריתם למציאת האיבר ה-$k$ בגודלו יכול לנוע בין $O(2n-2)$ לבין $\\Omega(\\log(2n-1))$.\n\nלכן כל אלגוריתם כזה לא ייקח פחות מ-$\\Omega(\\log n)$.\n\n**פתרון שני (מופיע בתרגול על מיונים):**\n\nנניח בשלילה שקיים אלגוריתם למציאת האיבר ה-$k$ בגודלו שעובד בזמן נמוך ממש מ-$\\log n$, כלומר זמן הריצה של האלגוריתם מקיים $T(n) = o(\\log n)$. אז נראה שניתן להשתמש בו כדי למיין בזמן קטן ממש מ-$n \\log n$ וזו תהיה סתירה לחסם תחתון על מיונים מבוססי השוואות.\n\nאלגוריתם מיון: ניקח מערך לא ממויין בגודל $n$, ניקח מערך נוסף (פלט) בגודל $n$. לכל $i$ מ-$1$ עד $n$ נקרא לאלגוריתם למציאת האיבר ה-$k$ בגודלו עבור $k=i$. הראשון בגודלו נכניס למקום $1$ במערך הפלט, השני בגודלו נכניס למקום $2$ במערך הפלט, וכן הלאה. סה\"כ זמן הריצה של אלגוריתם המיון שהצענו יהיה $o(n \\log n)$ וזו סתירה לחסם תחתון על מיונים מבוססי השוואות.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 15,
   "part": "א",
   "contextId": "25B-B-c2",
   "id": "25B-B-Q2a",
   "partKey": "a",
   "examCode": "25B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד ב (7.8.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "[15 נקודות] הוכיחו:<br><br>בהינתן מערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> המכיל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים ומספר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>≤</mo><mi>k</mi><mo>≤</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">1 \\le k \\le n</annotation></semantics></math></span>, אלגוריתם למציאת האיבר ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> בגודלו הינו בעלות זמן ריצה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(\\log n)</annotation></semantics></math></span>.<br><br>רמז: ניתן להעזר בעץ החלטות.",
   "solutionHtml": "<strong>פתרון ע\"י עץ החלטה של אלגוריתם למציאת האיבר ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> בגודלו:</strong><br><br>כמות העלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> כי זה מספר האפשרויות לפלט כי כל אחד מאיברי המערך עומד להיות התוצאה. עץ החלטה הוא עץ מלא ולכן מספר הצמתים הפנימיים הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>. סה\"כ מספר הצמתים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2n-1</annotation></semantics></math></span>.<br><br>הגובה של עץ ההחלטה מציין את עלות זמן הריצה עבור הקלט הגרוע ביותר של האלגוריתם. גובה עץ ההחלטה של כל אלגוריתם למציאת האיבר ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> בגודלו יכול לנוע בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(2n-2)</annotation></semantics></math></span> לבין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(\\log(2n-1))</annotation></semantics></math></span>.<br><br>לכן כל אלגוריתם כזה לא ייקח פחות מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(\\log n)</annotation></semantics></math></span>.<br><br><strong>פתרון שני (מופיע בתרגול על מיונים):</strong><br><br>נניח בשלילה שקיים אלגוריתם למציאת האיבר ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> בגודלו שעובד בזמן נמוך ממש מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log n</annotation></semantics></math></span>, כלומר זמן הריצה של האלגוריתם מקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>o</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n) = o(\\log n)</annotation></semantics></math></span>. אז נראה שניתן להשתמש בו כדי למיין בזמן קטן ממש מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n \\log n</annotation></semantics></math></span> וזו תהיה סתירה לחסם תחתון על מיונים מבוססי השוואות.<br><br>אלגוריתם מיון: ניקח מערך לא ממויין בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, ניקח מערך נוסף (פלט) בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>. לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> נקרא לאלגוריתם למציאת האיבר ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> בגודלו עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>=</mo><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">k=i</annotation></semantics></math></span>. הראשון בגודלו נכניס למקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> במערך הפלט, השני בגודלו נכניס למקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> במערך הפלט, וכן הלאה. סה\"כ זמן הריצה של אלגוריתם המיון שהצענו יהיה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>o</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">o(n \\log n)</annotation></semantics></math></span> וזו סתירה לחסם תחתון על מיונים מבוססי השוואות.",
   "pointsTotal": 15
  },
  {
   "num": 2,
   "kind": "proof",
   "topic": "sorting_selection",
   "question": "[10 נקודות] הפריכו את הטענה הבאה:\n\nקיים אלגוריתם, אשר בהינתן מערך המכיל $n$ מספרים לא ממויינים, מדפיס בצורה ממויינת את $5$ המספרים הקטנים ביותר במערך בסיבוכיות זמן $O(\\log n)$.",
   "solution": "המערך לא ממויין ולכן כדי למצוא את האיבר המינימלי (או ה-$5$ המינימליים) יהיה צריך לעבור על כל האיברים לפחות פעם אחת, וזה כבר $\\Omega(n)$ שזה יותר מ-$\\log n$.\n\nהערה: אין צורך למיין את כל איברי המערך כדי לקבל $5$ איברים קטנים ביותר, לכן כל וריאציה שקשורה במיון כל האיברים לא תהיה נכונה פה כטענה.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 10,
   "part": "ב",
   "id": "25B-B-Q2b",
   "partKey": "b",
   "examCode": "25B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד ב (7.8.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "[10 נקודות] הפריכו את הטענה הבאה:<br><br>קיים אלגוריתם, אשר בהינתן מערך המכיל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים לא ממויינים, מדפיס בצורה ממויינת את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> המספרים הקטנים ביותר במערך בסיבוכיות זמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.",
   "solutionHtml": "המערך לא ממויין ולכן כדי למצוא את האיבר המינימלי (או ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> המינימליים) יהיה צריך לעבור על כל האיברים לפחות פעם אחת, וזה כבר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n)</annotation></semantics></math></span> שזה יותר מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log n</annotation></semantics></math></span>.<br><br>הערה: אין צורך למיין את כל איברי המערך כדי לקבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> איברים קטנים ביותר, לכן כל וריאציה שקשורה במיון כל האיברים לא תהיה נכונה פה כטענה.",
   "pointsTotal": 10
  },
  {
   "num": 3,
   "kind": "algorithm",
   "topic": "ds_design",
   "question": "תארו מבנה נתונים למימוש מערכת ניהול התהליכים המתוארת לעיל. הסבירו מדוע כל פעולה עומדת בדרישות זמן הריצה המבוקש.",
   "solution": "**מבנה הנתונים:** ערימת מינימום + טבלת גיבוב מסוג קוקיה, וכל איבר בטבלת הגיבוב שומר את האינדקס של האיבר בערימה שמתאים לו (אין צורך במצביע חזרה כי החיפוש בגיבוב קוקיה נעשה ב-$O(1)$, אבל לשם כך כל איבר בערימה צריך לשמור את ה-`pid` המתאים שלו). המפתח בטבלת הגיבוב הוא `pid`.\n\nהמפתח בערימת מינימום הוא זמן ההתחלה של התהליך. בערימה יופיעו רק התהליכים שהסטטוס שלהם פעיל.\n\n**אתחול:** הכנסת כל הנתונים לטבלת הגיבוב ובמקביל כל תהליך פעיל ייכנס גם לערימת המינימום. כל הכנסה לערימת מינימום ב-$O(\\log n)$, כל הכנסה לטבלת הגיבוב לוקחת בממוצע $O(1)$. בכל מקרה במקרה הגרוע כולם ייכנסו ב-$O(n^2)$.\n\n**`Lookup(pid)`** – חיפוש בטבלת גיבוב קוקיה ב-$O(1)$.\n\n**`Delete(pid)`** – חיפוש ומחיקה בטבלת גיבוב קוקיה $O(1)$ + מחיקה שלו מערימת המינימום (אם הוא פעיל) $O(\\log n)$.\n\nאיך אנחנו מוחקים איבר כלשהו מערימת מינימום? קודם כל, הגענו אליו ע\"י אינדקס ב-$O(1)$, נחליף את הערך עם האיבר האחרון בערימה ונקצר את הערימה ב-$1$. ואז אולי דרוש תיקון וייתכן או כלפי מעלה או כלפי מטה, אז נקרא גם ל-`heapifyup` וגם ל-`heapifydown` ואחד מהם יעבוד.\n\n**`Set_status(pid, new_status)`** – חיפוש בטבלת גיבוב קוקיה ב-$O(1)$.\n\n- אם הסטטוס הפך מפעיל ללא פעיל נמחק את האיבר התאים מערימת המינימום (כפי שהסברנו למעלה).\n- אם הסטטוס הפך מלא פעיל לפעיל אז נוסיף אותו לערימת המינימום ונשמור בתא שלו בטבלת הגיבוב את האינדקס שלו מערימת המינימום. (הכנסת איבר חדש לערימה זו פעולה רגילה של ערימה).\n\nבכל מקרה $O(\\log n)$.\n\n**`Get_earliest_active()`** – החזרת התהליך שנמצא בראש ערימת המינימום $O(1)$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 25,
   "contextId": "25B-B-c3",
   "id": "25B-B-Q3",
   "partKey": "",
   "examCode": "25B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד ב (7.8.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "תכנון אלגוריתם ומבנה נתונים",
   "questionHtml": "תארו מבנה נתונים למימוש מערכת ניהול התהליכים המתוארת לעיל. הסבירו מדוע כל פעולה עומדת בדרישות זמן הריצה המבוקש.",
   "solutionHtml": "<strong>מבנה הנתונים:</strong> ערימת מינימום + טבלת גיבוב מסוג קוקיה, וכל איבר בטבלת הגיבוב שומר את האינדקס של האיבר בערימה שמתאים לו (אין צורך במצביע חזרה כי החיפוש בגיבוב קוקיה נעשה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>, אבל לשם כך כל איבר בערימה צריך לשמור את ה-<code class=\"tok\" dir=\"ltr\">pid</code> המתאים שלו). המפתח בטבלת הגיבוב הוא <code class=\"tok\" dir=\"ltr\">pid</code>.<br><br>המפתח בערימת מינימום הוא זמן ההתחלה של התהליך. בערימה יופיעו רק התהליכים שהסטטוס שלהם פעיל.<br><br><strong>אתחול:</strong> הכנסת כל הנתונים לטבלת הגיבוב ובמקביל כל תהליך פעיל ייכנס גם לערימת המינימום. כל הכנסה לערימת מינימום ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>, כל הכנסה לטבלת הגיבוב לוקחת בממוצע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>. בכל מקרה במקרה הגרוע כולם ייכנסו ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span>.<br><br><strong><code class=\"tok\" dir=\"ltr\">Lookup(pid)</code></strong> – חיפוש בטבלת גיבוב קוקיה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>.<br><br><strong><code class=\"tok\" dir=\"ltr\">Delete(pid)</code></strong> – חיפוש ומחיקה בטבלת גיבוב קוקיה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span> + מחיקה שלו מערימת המינימום (אם הוא פעיל) <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.<br><br>איך אנחנו מוחקים איבר כלשהו מערימת מינימום? קודם כל, הגענו אליו ע\"י אינדקס ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>, נחליף את הערך עם האיבר האחרון בערימה ונקצר את הערימה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>. ואז אולי דרוש תיקון וייתכן או כלפי מעלה או כלפי מטה, אז נקרא גם ל-<code class=\"tok\" dir=\"ltr\">heapifyup</code> וגם ל-<code class=\"tok\" dir=\"ltr\">heapifydown</code> ואחד מהם יעבוד.<br><br><strong><code class=\"tok\" dir=\"ltr\">Set_status(pid, new_status)</code></strong> – חיפוש בטבלת גיבוב קוקיה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>.<br><br>- אם הסטטוס הפך מפעיל ללא פעיל נמחק את האיבר התאים מערימת המינימום (כפי שהסברנו למעלה).<br>- אם הסטטוס הפך מלא פעיל לפעיל אז נוסיף אותו לערימת המינימום ונשמור בתא שלו בטבלת הגיבוב את האינדקס שלו מערימת המינימום. (הכנסת איבר חדש לערימה זו פעולה רגילה של ערימה).<br><br>בכל מקרה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.<br><br><strong><code class=\"tok\" dir=\"ltr\">Get_earliest_active()</code></strong> – החזרת התהליך שנמצא בראש ערימת המינימום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>.",
   "pointsTotal": 25
  },
  {
   "num": 4,
   "kind": "algorithm",
   "topic": "bst",
   "question": "[15 נקודות] כתבו פסאודו-קוד לפתרון הבעיה.",
   "solution": "```\ninOrderFromA(Node, a)\n    if Node != NULL\n        if key(Node) < a\n            return inOrderFromA(right(Node), a)\n        else\n            List1 = inOrderFromA(left(Node), a)\n            List2 = inOrderFromA(right(Node), a)\n            return List1 + [key(Node)] + List2\n    else\n        return [ ] // empty list\n```\n\n**המימוש הוא בפונקציה רקורסיבית:**\n\nאם הקדקוד הנוכחי ריק (בסיס הרקורסיה), מחזירים רשימה ריקה. אחרת,\n\n- אם ערך הקדקוד הנוכחי קטן מ-$a$, יש להמשיך ברקורסיה רק על תת עץ ימין, ולהחזיר את הרשימה שחוזרת משם.\n- אם ערך הקדקוד גדול או שווה ל-$a$, יש לבצע רקורסיה על שני תתי העץ ולצרף באופן הבא:\n  - לקבל את רשימת הגדולים או שווים ל-$a$ מתת עץ שמאל\n  - להוסיף את ערך הקדקוד הנוכחי עצמו\n  - לקבל את רשימת הגדולים או שווים ל-$a$ מתת עץ ימין, ולהוסיף לסוף הרשימה הנ\"ל, ואת זה להחזיר.\n\n**הערות:**\n1. $a$ לאו דווקא נמצא בעץ, לכן לא נכון לחפש אותו בצורה ישירה.\n2. את סריקת ה-inorder כדאי לבצע ברקורסיה (אלא אם כן רוצים לעבוד עם מחסנית, כפי שלמדנו בהרצאה). רק שלא צריך לסרוק את כל העץ: כאשר במהלך הסריקה נתקלים בקדקוד שערכו קטן מ-$a$, אפשר להתעלם מכל תת עץ שמאלי שלו (שם הערכים רק עוד יותר קטנים).\n3. בשאלה נתבקשתם להחזיר רשימה, לא להדפיס. בכל זאת, החלטנו לקבל תשובות שבהן היתה הדפסה במקום החזרת רשימה.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 15,
   "part": "א",
   "contextId": "25B-B-c4",
   "id": "25B-B-Q4a",
   "partKey": "a",
   "examCode": "25B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד ב (7.8.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "עצי חיפוש בינאריים",
   "questionHtml": "[15 נקודות] כתבו פסאודו-קוד לפתרון הבעיה.",
   "solutionHtml": "<pre class=\"code-block\" dir=\"ltr\"><code>inOrderFromA(Node, a)\n    if Node != NULL\n        if key(Node) &lt; a\n            return inOrderFromA(right(Node), a)\n        else\n            List1 = inOrderFromA(left(Node), a)\n            List2 = inOrderFromA(right(Node), a)\n            return List1 + [key(Node)] + List2\n    else\n        return [ ] // empty list</code></pre><br><strong>המימוש הוא בפונקציה רקורסיבית:</strong><br><br>אם הקדקוד הנוכחי ריק (בסיס הרקורסיה), מחזירים רשימה ריקה. אחרת,<br><br>- אם ערך הקדקוד הנוכחי קטן מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span>, יש להמשיך ברקורסיה רק על תת עץ ימין, ולהחזיר את הרשימה שחוזרת משם.<br>- אם ערך הקדקוד גדול או שווה ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span>, יש לבצע רקורסיה על שני תתי העץ ולצרף באופן הבא:<br>  - לקבל את רשימת הגדולים או שווים ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> מתת עץ שמאל<br>  - להוסיף את ערך הקדקוד הנוכחי עצמו<br>  - לקבל את רשימת הגדולים או שווים ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> מתת עץ ימין, ולהוסיף לסוף הרשימה הנ\"ל, ואת זה להחזיר.<br><br><strong>הערות:</strong><br>1. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> לאו דווקא נמצא בעץ, לכן לא נכון לחפש אותו בצורה ישירה.<br>2. את סריקת ה-inorder כדאי לבצע ברקורסיה (אלא אם כן רוצים לעבוד עם מחסנית, כפי שלמדנו בהרצאה). רק שלא צריך לסרוק את כל העץ: כאשר במהלך הסריקה נתקלים בקדקוד שערכו קטן מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span>, אפשר להתעלם מכל תת עץ שמאלי שלו (שם הערכים רק עוד יותר קטנים).<br>3. בשאלה נתבקשתם להחזיר רשימה, לא להדפיס. בכל זאת, החלטנו לקבל תשובות שבהן היתה הדפסה במקום החזרת רשימה.",
   "pointsTotal": 15
  },
  {
   "num": 4,
   "kind": "proof",
   "topic": "bst",
   "question": "[10 נקודות] הסבירו מדוע הפסאודוקוד שהצגתם עומד בדרישות הזמן של $O(\\log n + k)$.",
   "solution": "**הרעיון והסבר לזמן הריצה:**\n\nהפונקציה סורקת את העץ בסריקת inorder, אבל לכל קדקוד שערכו קטן מ-$a$, היא לא הולכת לתת עץ שמאל (כי שם הערכים רק יותר קטנים מ-$a$). כך ממשיכים ברקורסיה רק במורד הרמות בעץ (בזמן סדר גודל $\\log n$ כי העץ מאוזן, אז בהגדרה, גובהו סדר גודל $\\log n$). סריקת ה-inorder תגרום לכך שנקבל את הערכים בסדר עולה (קודם תת עץ ימין, אחר כך הקדקוד עצמו, אחר כך תת עץ שמאל), וה\"גיזום\" לפי השוואה ל-$a$ ימנע מערכים קטנים מ-$a$ להיות מוחזרים. סה\"כ יוחזרו כל $k$ הערכים הגדולים או שווים ל-$a$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 10,
   "part": "ב",
   "contextId": "25B-B-c4",
   "id": "25B-B-Q4b",
   "partKey": "b",
   "examCode": "25B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד ב (7.8.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "עצי חיפוש בינאריים",
   "questionHtml": "[10 נקודות] הסבירו מדוע הפסאודוקוד שהצגתם עומד בדרישות הזמן של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n + k)</annotation></semantics></math></span>.",
   "solutionHtml": "<strong>הרעיון והסבר לזמן הריצה:</strong><br><br>הפונקציה סורקת את העץ בסריקת inorder, אבל לכל קדקוד שערכו קטן מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span>, היא לא הולכת לתת עץ שמאל (כי שם הערכים רק יותר קטנים מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span>). כך ממשיכים ברקורסיה רק במורד הרמות בעץ (בזמן סדר גודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log n</annotation></semantics></math></span> כי העץ מאוזן, אז בהגדרה, גובהו סדר גודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log n</annotation></semantics></math></span>). סריקת ה-inorder תגרום לכך שנקבל את הערכים בסדר עולה (קודם תת עץ ימין, אחר כך הקדקוד עצמו, אחר כך תת עץ שמאל), וה\"גיזום\" לפי השוואה ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> ימנע מערכים קטנים מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> להיות מוחזרים. סה\"כ יוחזרו כל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> הערכים הגדולים או שווים ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span>.",
   "pointsTotal": 10
  },
  {
   "num": 5,
   "kind": "truefalse",
   "topic": "heaps",
   "question": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), ללא נימוק.\n\nיהיו $T_1, T_2$ עצים המייצגים ערימות (ממומשים במערך) כך שבכל אחת מהם $n = 2^k$ מספרים שלמים השונים זה מזה (שימו לב, גם אין מספר משותף בשני העצים). ניתן לאחד את $2$ הערימות בזמן $O(\\log n)$. נכון / לא נכון",
   "solution": "לא נכון.\n\nכדי לאחד $2$ ערימות שממומשות ע\"י מערך צריך יהיה להעתיק אותן למערך חדש ולבצע `buildheap` וזה ייקח $O(n)$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "part": "א",
   "verdict": false,
   "id": "25B-B-Q5a",
   "partKey": "a",
   "examCode": "25B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד ב (7.8.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "ערימות ותור עדיפויות",
   "questionHtml": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), ללא נימוק.<br><br>יהיו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>T</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>T</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">T_1, T_2</annotation></semantics></math></span> עצים המייצגים ערימות (ממומשים במערך) כך שבכל אחת מהם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><msup><mn>2</mn><mi>k</mi></msup></mrow><annotation encoding=\"application/x-tex\">n = 2^k</annotation></semantics></math></span> מספרים שלמים השונים זה מזה (שימו לב, גם אין מספר משותף בשני העצים). ניתן לאחד את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> הערימות בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>. נכון / לא נכון",
   "solutionHtml": "לא נכון.<br><br>כדי לאחד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> ערימות שממומשות ע\"י מערך צריך יהיה להעתיק אותן למערך חדש ולבצע <code class=\"tok\" dir=\"ltr\">buildheap</code> וזה ייקח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.",
   "pointsTotal": 0
  },
  {
   "num": 5,
   "kind": "truefalse",
   "topic": "trees_induction",
   "question": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), ללא נימוק.\n\nנגדיר עץ בינארי זוגי כעץ שבו מספר הצמתים בכל רמה $d \\ge 1$ הוא מספר זוגי (שימו לב, שורש העץ נמצא ברמה $0$).\n\nכל עץ בינארי זוגי הוא עץ מאוזן. נכון / לא נכון",
   "solution": "לא נכון.\n\nדוגמה נגדית:\n\n![דוגמה נגדית ספציפית בפתרון הרשמי](images/exams/25B-B-Q5b-fig1.png)\n\nבציור הראשון זו דוגמה לעץ ספציפי שאינו מאוזן, אבל אפשר גם למצוא דוגמאות לעצים כלליים בגודל $n$ שמקיימים את התנאי אבל אינם מאוזנים: שניהם עצים מוגדרים לכל $n$ ומספר זוגי של קדקודים בכל רמה שאינה אפס, והם ודאי לא מאוזנים:\n\n![שתי דוגמאות כלליות בפתרון הרשמי](images/exams/25B-B-Q5b-fig2.png)",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "part": "ב",
   "verdict": false,
   "id": "25B-B-Q5b",
   "partKey": "b",
   "examCode": "25B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד ב (7.8.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "עצים בינאריים, סריקות והוכחות באינדוקציה",
   "questionHtml": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), ללא נימוק.<br><br>נגדיר עץ בינארי זוגי כעץ שבו מספר הצמתים בכל רמה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">d \\ge 1</annotation></semantics></math></span> הוא מספר זוגי (שימו לב, שורש העץ נמצא ברמה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>).<br><br>כל עץ בינארי זוגי הוא עץ מאוזן. נכון / לא נכון",
   "solutionHtml": "לא נכון.<br><br>דוגמה נגדית:<br><figure class=\"rt-fig\"><img src=\"images/exams/25B-B-Q5b-fig1.png\" alt=\"דוגמה נגדית ספציפית בפתרון הרשמי\" loading=\"lazy\"><figcaption>דוגמה נגדית ספציפית בפתרון הרשמי</figcaption></figure><br>בציור הראשון זו דוגמה לעץ ספציפי שאינו מאוזן, אבל אפשר גם למצוא דוגמאות לעצים כלליים בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> שמקיימים את התנאי אבל אינם מאוזנים: שניהם עצים מוגדרים לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> ומספר זוגי של קדקודים בכל רמה שאינה אפס, והם ודאי לא מאוזנים:<br><figure class=\"rt-fig\"><img src=\"images/exams/25B-B-Q5b-fig2.png\" alt=\"שתי דוגמאות כלליות בפתרון הרשמי\" loading=\"lazy\"><figcaption>שתי דוגמאות כלליות בפתרון הרשמי</figcaption></figure>",
   "pointsTotal": 0
  },
  {
   "num": 5,
   "kind": "truefalse",
   "topic": "complexity",
   "question": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), ללא נימוק.\n\nזמן הריצה של אלגוריתם כלשהו נתון כך:\n\n$T(n) = n \\cdot \\log_2(n^3) + 10 n \\cdot \\log_{10}(n)$\n\nאזי: $T(n) = O(n^{1.2})$. נכון / לא נכון",
   "solution": "נכון.\n\nההשוואה היא בין $n \\log n$ לבין $n \\cdot n^{0.2}$, כי $n$ בחזקת כל מספר, אפילו קטן מאוד, יחסום את $\\log n$ כאשר $n$ שואף לאינסוף.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "part": "ג",
   "verdict": true,
   "id": "25B-B-Q5c",
   "partKey": "c",
   "examCode": "25B-B",
   "examLabel": "מבני נתונים, סמסטר ב תשפ\"ה, מועד ב (7.8.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "סיבוכיות וחסמים אסימפטוטיים",
   "questionHtml": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), ללא נימוק.<br><br>זמן הריצה של אלגוריתם כלשהו נתון כך:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>n</mi><mo>⋅</mo><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>3</mn></msup><mo stretchy=\"false\">)</mo><mo>+</mo><mn>10</mn><mi>n</mi><mo>⋅</mo><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>10</mn></msub><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n) = n \\cdot \\log_2(n^3) + 10 n \\cdot \\log_{10}(n)</annotation></semantics></math></span><br><br>אזי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>1.2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n) = O(n^{1.2})</annotation></semantics></math></span>. נכון / לא נכון",
   "solutionHtml": "נכון.<br><br>ההשוואה היא בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n \\log n</annotation></semantics></math></span> לבין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>⋅</mo><msup><mi>n</mi><mn>0.2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n \\cdot n^{0.2}</annotation></semantics></math></span>, כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> בחזקת כל מספר, אפילו קטן מאוד, יחסום את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log n</annotation></semantics></math></span> כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> שואף לאינסוף.",
   "pointsTotal": 0
  },
  {
   "num": 1,
   "kind": "algorithm",
   "topic": "bst",
   "question": "\"מרחק\" בין שני צמתים בעץ מוגדר כמספר הצלעות במסלול הקצר ביותר ביניהם בעץ. (שימו לב שההגדרה הזו רלוונטית לכל שלושת הסעיפים א, ב, ג.)\n\nציירו **עץ חיפוש בינארי** שבו המרחק בין האיבר הגדול ביותר בעץ לבין השני בגודלו **גדול ממש מ-1**.\n\nלדוגמה בעץ בציור הנתון האיבר הגדול ביותר הוא $18$, והשני בגודלו הוא $15$.",
   "solution": "בדוגמה שבפתרון הרשמי: הגדול ביותר הוא $6$, השני בגודלו הוא $5$, והצומת $4$ נמצא ביניהם בציור (הצמתים $6$, $4$, $5$ מחוברים בצלעות). המרחק ביניהם הוא $2$, שזה גדול מ-$1$, והעץ הוא עץ חיפוש בינארי.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "med",
   "points": 7,
   "part": "א",
   "contextId": "25S-A-c1",
   "rubric": [
    {
     "text": "ציור עץ שהוא עץ חיפוש בינארי תקין: כל המפתחות מסודרים לפי הכלל שמאל קטן, ימין גדול",
     "points": 4,
     "html": "ציור עץ שהוא עץ חיפוש בינארי תקין: כל המפתחות מסודרים לפי הכלל שמאל קטן, ימין גדול"
    },
    {
     "text": "הצומת הגדול ביותר והשני בגודלו אינם סמוכים: יש לפחות צומת אחד בדרך ביניהם",
     "points": 3,
     "html": "הצומת הגדול ביותר והשני בגודלו אינם סמוכים: יש לפחות צומת אחד בדרך ביניהם"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לצייר עץ שבו השני בגודלו הוא ההורה או הבן הישיר של הגדול ביותר, ואז המרחק הוא $1$ ולא גדול ממש מ-$1$.",
    "לצייר עץ שמפר את סדר החיפוש, למשל מפתח קטן בתת-העץ הימני."
   ],
   "id": "25S-A-Q1a",
   "partKey": "a",
   "examCode": "25S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ה, מועד א (20.10.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "עצי חיפוש בינאריים",
   "questionHtml": "\"מרחק\" בין שני צמתים בעץ מוגדר כמספר הצלעות במסלול הקצר ביותר ביניהם בעץ. (שימו לב שההגדרה הזו רלוונטית לכל שלושת הסעיפים א, ב, ג.)<br><br>ציירו <strong>עץ חיפוש בינארי</strong> שבו המרחק בין האיבר הגדול ביותר בעץ לבין השני בגודלו <strong>גדול ממש מ-1</strong>.<br><br>לדוגמה בעץ בציור הנתון האיבר הגדול ביותר הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>18</mn></mrow><annotation encoding=\"application/x-tex\">18</annotation></semantics></math></span>, והשני בגודלו הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">15</annotation></semantics></math></span>.",
   "solutionHtml": "בדוגמה שבפתרון הרשמי: הגדול ביותר הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span>, השני בגודלו הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>, והצומת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> נמצא ביניהם בציור (הצמתים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> מחוברים בצלעות). המרחק ביניהם הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>, שזה גדול מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>, והעץ הוא עץ חיפוש בינארי.",
   "pointsTotal": 7,
   "pitfallsHtml": [
    "לצייר עץ שבו השני בגודלו הוא ההורה או הבן הישיר של הגדול ביותר, ואז המרחק הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> ולא גדול ממש מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>.",
    "לצייר עץ שמפר את סדר החיפוש, למשל מפתח קטן בתת-העץ הימני."
   ]
  },
  {
   "num": 1,
   "kind": "proof",
   "topic": "bst",
   "question": "נתון **עץ חיפוש בינארי בעל $n$ צמתים**. מהו המרחק בעץ בין האיבר הגדול ביותר לבין האיבר השני בגודלו **במקרה הגרוע**? הסבירו את תשובתכם.\n\n(כלומר, מה יכול להיות **המרחק הגדול ביותר** בין האיבר הגדול ביותר לבין האיבר השני בגודלו בעץ חיפוש בינארי בעל $n$ צמתים).",
   "solution": "המרחק הגדול ביותר הוא $n-1$.\n\nבציור הרשמי: בראש העץ $n$, מתחתיו $1$, ומשם שרשרת $2, 3, \\dots, n-1$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 9,
   "part": "ב",
   "contextId": "25S-A-c1",
   "rubric": [
    {
     "text": "קביעה שהמרחק הגדול ביותר במקרה הגרוע הוא $n-1$",
     "points": 3,
     "html": "קביעה שהמרחק הגדול ביותר במקרה הגרוע הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>"
    },
    {
     "text": "בניית עץ: $n$ בשורש, $1$ כבן שמאלי, ומשם שרשרת ימנית $2, 3, \\dots, n-1$",
     "points": 4,
     "html": "בניית עץ: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> בשורש, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> כבן שמאלי, ומשם שרשרת ימנית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2, 3, \\dots, n-1</annotation></semantics></math></span>"
    },
    {
     "text": "ספירת הצלעות במסלול מ-$n$ אל $n-1$ שעובר דרך כל $n$ הצמתים",
     "points": 2,
     "html": "ספירת הצלעות במסלול מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> אל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> שעובר דרך כל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> הצמתים"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לענות $\\log n$ או $n-2$: לא לספור נכון את הצלעות במסלול, או להניח שהעץ מאוזן.",
    "לתת רק את התשובה ללא עץ לדוגמה שמראה שהמרחק $n-1$ אכן מושג."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "איזה מבנה של עץ חיפוש בינארי נותן את המרחק הגדול ביותר בין הגדול ביותר לשני בגודלו?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "$n$ בשורש, $1$ כבן שמאלי שלו, ומשם שרשרת ימנית $2, 3, \\dots, n-1$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> בשורש, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> כבן שמאלי שלו, ומשם שרשרת ימנית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2, 3, \\dots, n-1</annotation></semantics></math></span>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "$n$ בשורש ו-$n-1$ כבן שמאלי שלו",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> בשורש ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> כבן שמאלי שלו"
      },
      {
       "id": "c",
       "type": "text",
       "value": "עץ שלם מלא (מאוזן)",
       "html": "עץ שלם מלא (מאוזן)"
      },
      {
       "id": "d",
       "type": "text",
       "value": "$n-1$ בשורש ו-$n$ כבן ימני שלו",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> בשורש ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> כבן ימני שלו"
      }
     ],
     "correctId": "a",
     "explain": "במבנה הראשון המסלול מ-$n$ אל $n-1$ עובר דרך כל הצמתים. בשני ובאחרון המרחק הוא $1$, ובעץ מאוזן הוא לכל היותר סדר $\\log n$.",
     "promptHtml": "איזה מבנה של עץ חיפוש בינארי נותן את המרחק הגדול ביותר בין הגדול ביותר לשני בגודלו?",
     "explainHtml": "במבנה הראשון המסלול מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> אל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> עובר דרך כל הצמתים. בשני ובאחרון המרחק הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>, ובעץ מאוזן הוא לכל היותר סדר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log n</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "בעץ בעל $n=7$ צמתים שנבנה כך ($7$ בשורש, $1$ בן שמאלי, שרשרת $2, \\dots, 6$), מהו המרחק בין $7$ ל-$6$?",
     "answer": 6,
     "tol": 0,
     "explain": "המסלול $7, 1, 2, 3, 4, 5, 6$ כולל $7$ צמתים ו-$6$ צלעות, כלומר $n-1$ (נבדק בסימולציה לכל $n$ מ-$3$ עד $11$).",
     "promptHtml": "בעץ בעל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">n=7</annotation></semantics></math></span> צמתים שנבנה כך (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> בשורש, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> בן שמאלי, שרשרת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">2, \\dots, 6</annotation></semantics></math></span>), מהו המרחק בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span>?",
     "explainHtml": "המסלול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">7, 1, 2, 3, 4, 5, 6</annotation></semantics></math></span> כולל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> צמתים ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span> צלעות, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> (נבדק בסימולציה לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>)."
    },
    {
     "type": "order",
     "prompt": "סדרו את שלבי ההסבר של הפתרון הרשמי.",
     "lines": [
      "נציב את $n$ בשורש העץ.",
      "נציב את $1$ כבן שמאלי של השורש.",
      "נמשיך בשרשרת ימנית: $2$ בן ימני של $1$, $3$ בן ימני של $2$, וכן הלאה עד $n-1$.",
      "המסלול מ-$n$ אל $n-1$ עובר דרך $n$ צמתים, כלומר $n-1$ צלעות."
     ],
     "explain": "קודם בונים את העץ ורק אחר כך סופרים את הצלעות במסלול.",
     "promptHtml": "סדרו את שלבי ההסבר של הפתרון הרשמי.",
     "explainHtml": "קודם בונים את העץ ורק אחר כך סופרים את הצלעות במסלול.",
     "linesHtml": [
      "נציב את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> בשורש העץ.",
      "נציב את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> כבן שמאלי של השורש.",
      "נמשיך בשרשרת ימנית: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> בן ימני של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> בן ימני של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>, וכן הלאה עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>.",
      "המסלול מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> אל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> עובר דרך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> צמתים, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> צלעות."
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q1b",
   "partKey": "b",
   "examCode": "25S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ה, מועד א (20.10.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "עצי חיפוש בינאריים",
   "questionHtml": "נתון <strong>עץ חיפוש בינארי בעל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> צמתים<strong>. מהו המרחק בעץ בין האיבר הגדול ביותר לבין האיבר השני בגודלו </strong>במקרה הגרוע<strong>? הסבירו את תשובתכם.<br><br>(כלומר, מה יכול להיות </strong>המרחק הגדול ביותר</strong> בין האיבר הגדול ביותר לבין האיבר השני בגודלו בעץ חיפוש בינארי בעל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> צמתים).",
   "solutionHtml": "המרחק הגדול ביותר הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>.<br><br>בציור הרשמי: בראש העץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, מתחתיו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>, ומשם שרשרת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2, 3, \\dots, n-1</annotation></semantics></math></span>.",
   "pointsTotal": 9,
   "pitfallsHtml": [
    "לענות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log n</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n-2</annotation></semantics></math></span>: לא לספור נכון את הצלעות במסלול, או להניח שהעץ מאוזן.",
    "לתת רק את התשובה ללא עץ לדוגמה שמראה שהמרחק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> אכן מושג."
   ]
  },
  {
   "num": 1,
   "kind": "proof",
   "topic": "avl",
   "question": "נתון **עץ AVL בעל $n$ צמתים**. מהו המרחק בעץ בין האיבר הגדול ביותר לבין האיבר השני בגודלו **במקרה הגרוע**? הסבירו את תשובתכם.\n\n(כלומר, מה יכול להיות **המרחק הגדול ביותר** בין האיבר הגדול ביותר לבין האיבר השני בגודלו בעץ AVL בעל $n$ צמתים).",
   "solution": "כדי שהאיזון יתקיים, האיבר המקסימלי יכול להיות או עלה הכי ימני בעץ, או שיש לו רק בן שמאלי. אם יש לו בן שמאלי אז לא יכול להיות לבן הזה עוד ילד, כי אז האיזון יופר.\n\nלכן המרחק הגדול ביותר יכול להיות $1$. יכולים להיות $2$ מצבים בלבד: ($n$ ומתחתיו בן $n-1$) או ($n-1$ ומתחתיו בן $n$).",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 9,
   "part": "ג",
   "contextId": "25S-A-c1",
   "rubric": [
    {
     "text": "קביעה שהמרחק הגדול ביותר בעץ AVL הוא $1$",
     "points": 3,
     "html": "קביעה שהמרחק הגדול ביותר בעץ AVL הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>"
    },
    {
     "text": "הצומת המקסימלי הוא עלה ימני ביותר, או שיש לו רק בן שמאלי",
     "points": 3,
     "html": "הצומת המקסימלי הוא עלה ימני ביותר, או שיש לו רק בן שמאלי"
    },
    {
     "text": "הבן השמאלי של המקסימום לא יכול להיות לו ילדים כי האיזון יופר, ולכן שני מצבים בלבד",
     "points": 3,
     "html": "הבן השמאלי של המקסימום לא יכול להיות לו ילדים כי האיזון יופר, ולכן שני מצבים בלבד"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "להשתמש בתשובה של עץ חיפוש רגיל ($n-1$) ולשכוח שאיזון ה-AVL מגביל את המבנה.",
    "לשכוח את האפשרות שהמקסימום הוא ההורה של השני בגודלו (יש לו בן שמאלי)."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מהו המרחק הגדול ביותר בין הגדול ביותר לשני בגודלו, מעל כל עצי ה-AVL האפשריים בעלי $n=9$ צמתים?",
     "answer": 1,
     "tol": 0,
     "explain": "בדיקה ממצה של כל צורות העץ עבור $n$ מ-$2$ עד $11$ נותנת תמיד $1$.",
     "promptHtml": "מהו המרחק הגדול ביותר בין הגדול ביותר לשני בגודלו, מעל כל עצי ה-AVL האפשריים בעלי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">n=9</annotation></semantics></math></span> צמתים?",
     "explainHtml": "בדיקה ממצה של כל צורות העץ עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span> נותנת תמיד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>."
    },
    {
     "type": "choice",
     "prompt": "למה לצומת המקסימלי בעץ AVL לא יכולים להיות שני נכדים מתחתיו בצד שמאל?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "אם לבן השמאלי שלו יש ילד, הפרש הגבהים בצומת המקסימלי הופך ל-$2$ ואיזון ה-AVL מופר",
       "html": "אם לבן השמאלי שלו יש ילד, הפרש הגבהים בצומת המקסימלי הופך ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> ואיזון ה-AVL מופר"
      },
      {
       "id": "b",
       "type": "text",
       "value": "כי המקסימום חייב להיות עלה",
       "html": "כי המקסימום חייב להיות עלה"
      },
      {
       "id": "c",
       "type": "text",
       "value": "כי עץ AVL הוא תמיד שלם",
       "html": "כי עץ AVL הוא תמיד שלם"
      },
      {
       "id": "d",
       "type": "text",
       "value": "כי לא יכולים להיות בעץ AVL מפתחות כפולים",
       "html": "כי לא יכולים להיות בעץ AVL מפתחות כפולים"
      }
     ],
     "correctId": "a",
     "explain": "למקסימום אין בן ימני, ולכן בן שמאלי בעל ילדים נותן הפרש גבהים $2$. המקסימום עצמו יכול להיות עלה או הורה לבן שמאלי אחד.",
     "promptHtml": "למה לצומת המקסימלי בעץ AVL לא יכולים להיות שני נכדים מתחתיו בצד שמאל?",
     "explainHtml": "למקסימום אין בן ימני, ולכן בן שמאלי בעל ילדים נותן הפרש גבהים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>. המקסימום עצמו יכול להיות עלה או הורה לבן שמאלי אחד."
    },
    {
     "type": "choice",
     "prompt": "כמה מצבים אפשריים יש ליחס בין $n$ ל-$n-1$ בעץ AVL?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "$2$: $n-1$ הוא הבן השמאלי של $n$, או $n$ הוא הבן של $n-1$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> הוא הבן השמאלי של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> הוא הבן של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "$1$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "$3$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "תלוי ב-$n$",
       "html": "תלוי ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>"
      }
     ],
     "correctId": "a",
     "explain": "שני המצבים מופיעים בעצי AVL אמיתיים (נבדק בסימולציה), ובשניהם המרחק הוא $1$.",
     "promptHtml": "כמה מצבים אפשריים יש ליחס בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> בעץ AVL?",
     "explainHtml": "שני המצבים מופיעים בעצי AVL אמיתיים (נבדק בסימולציה), ובשניהם המרחק הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q1c",
   "partKey": "c",
   "examCode": "25S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ה, מועד א (20.10.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "עצי AVL",
   "questionHtml": "נתון <strong>עץ AVL בעל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> צמתים<strong>. מהו המרחק בעץ בין האיבר הגדול ביותר לבין האיבר השני בגודלו </strong>במקרה הגרוע<strong>? הסבירו את תשובתכם.<br><br>(כלומר, מה יכול להיות </strong>המרחק הגדול ביותר</strong> בין האיבר הגדול ביותר לבין האיבר השני בגודלו בעץ AVL בעל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> צמתים).",
   "solutionHtml": "כדי שהאיזון יתקיים, האיבר המקסימלי יכול להיות או עלה הכי ימני בעץ, או שיש לו רק בן שמאלי. אם יש לו בן שמאלי אז לא יכול להיות לבן הזה עוד ילד, כי אז האיזון יופר.<br><br>לכן המרחק הגדול ביותר יכול להיות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>. יכולים להיות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> מצבים בלבד: (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> ומתחתיו בן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>) או (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> ומתחתיו בן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>).",
   "pointsTotal": 9,
   "pitfallsHtml": [
    "להשתמש בתשובה של עץ חיפוש רגיל (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>) ולשכוח שאיזון ה-AVL מגביל את המבנה.",
    "לשכוח את האפשרות שהמקסימום הוא ההורה של השני בגודלו (יש לו בן שמאלי)."
   ]
  },
  {
   "num": 2,
   "kind": "algorithm",
   "topic": "heaps",
   "question": "נגדיר: ערימה \"שומרת סדר\" היא ערימת מינימום בה לכל קודקוד יש שני בנים, והערך של הבן השמאלי קטן מהערך של הבן הימני. לדוגמה:\n\nדנה הציעה אלגוריתם לפתרון הבעיה הבאה:\n**קלט:** מערך לא ממוין של $n$ מספרים ממשיים.\n**פלט:** ערימה שומרת סדר (במימוש ע\"י **עץ כמעט שלם** בייצוג מערך כפי שלמדנו).\n\nהאלגוריתם של דנה:\n- הפוך את המערך לערימת מינימום בעזרת `buildheap()`\n- סרוק את הערימה בסריקת רוחב, ולכל צומת, אם יש לו 2 בנים, השווה בין ערכי הבנים שלו - אם הערך הבן השמאלי גדול מהערך בבן הימני הפוך בין הערכים.\n\nהאם האלגוריתם של דנה יחזיר ערימה \"שומרת סדר\"?\nאם כן, הסבירו את נכונות האלגוריתם ונתחו את סיבוכיותו, אחרת תנו דוגמא עבורה האלגוריתם לא יחזיר תשובה נכונה והסבירו את הדוגמא.",
   "solution": "ניתן למצוא דוגמה נגדית. בשלב הראשון, אחרי `buildheap` נקבל ערימת מינימום חוקית, אבל אחרי הפיכת הערכים בבנים הערימה כבר לא תהיה חוקית.\n\nלדוגמה: אחרי `buildheap` מתקבלת ערימה שבה השורש $3$, ילדיו $21$ (משמאל) ו-$7$ (מימין), ילדיו של $21$ הם $22$ ו-$25$, וילדיו של $7$ הם $15$ ו-$10$.\n\nאחרי ההחלפה בין $21$ ל-$7$ הערימה לא חוקית, כי $21$ לא יהיה קטן מהבנים החדשים שלו $15, 10$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 12,
   "part": "א",
   "image": "images/exams/25S-A-Q2a.png",
   "rubric": [
    {
     "text": "קביעה שהאלגוריתם אינו נכון",
     "points": 3,
     "html": "קביעה שהאלגוריתם אינו נכון"
    },
    {
     "text": "דוגמה לערימת מינימום חוקית שמתקבלת מ-`buildheap`",
     "points": 3,
     "html": "דוגמה לערימת מינימום חוקית שמתקבלת מ-<code class=\"tok\" dir=\"ltr\">buildheap</code>"
    },
    {
     "text": "ביצוע ההחלפה בין הבנים (שמאלי גדול מהימני)",
     "points": 3,
     "html": "ביצוע ההחלפה בין הבנים (שמאלי גדול מהימני)"
    },
    {
     "text": "הצגת ההפרה: הערך שעבר לימין גדול מהבנים החדשים שלו",
     "points": 3,
     "html": "הצגת ההפרה: הערך שעבר לימין גדול מהבנים החדשים שלו"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לטעון שהאלגוריתם נכון כי כל בן שמאלי הפך לקטן מהימני, ולשכוח שההחלפה לא נעשית מעל תת-העצים של הילדים.",
    "לתת דוגמה שאינה ערימת מינימום חוקית עוד לפני ההחלפה."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "האם האלגוריתם של דנה תמיד מחזיר ערימה שומרת סדר?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "לא, יש דוגמה נגדית",
       "html": "לא, יש דוגמה נגדית"
      },
      {
       "id": "b",
       "type": "text",
       "value": "כן, והסיבוכיות $O(n)$",
       "html": "כן, והסיבוכיות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "כן, והסיבוכיות $O(n \\log n)$",
       "html": "כן, והסיבוכיות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n \\log n)</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "תלוי בגודל המערך בלבד",
       "html": "תלוי בגודל המערך בלבד"
      }
     ],
     "correctId": "a",
     "explain": "אחרי ההחלפה בין הבנים תכונת ערימת המינימום יכולה להיפגע.",
     "promptHtml": "האם האלגוריתם של דנה תמיד מחזיר ערימה שומרת סדר?",
     "explainHtml": "אחרי ההחלפה בין הבנים תכונת ערימת המינימום יכולה להיפגע."
    },
    {
     "type": "numeric",
     "prompt": "אחרי `buildheap` מתקבלת הערימה $[3, 21, 7, 22, 25, 15, 10]$. מחליפים את שני בני השורש ($21$ ו-$7$). כמה זוגות הורה-בן מפרים עכשיו את תכונת ערימת המינימום?",
     "answer": 2,
     "tol": 0,
     "explain": "הערימה החדשה היא $[3, 7, 21, 22, 25, 15, 10]$. הערך $21$ גדול משני ילדיו $15$ ו-$10$ (הרצת `buildheap` על הדוגמה משאירה אותה ללא שינוי, והספירה נבדקה בקוד).",
     "promptHtml": "אחרי <code class=\"tok\" dir=\"ltr\">buildheap</code> מתקבלת הערימה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">[</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>21</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>22</mn><mo separator=\"true\">,</mo><mn>25</mn><mo separator=\"true\">,</mo><mn>15</mn><mo separator=\"true\">,</mo><mn>10</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">[3, 21, 7, 22, 25, 15, 10]</annotation></semantics></math></span>. מחליפים את שני בני השורש (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">21</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span>). כמה זוגות הורה-בן מפרים עכשיו את תכונת ערימת המינימום?",
     "explainHtml": "הערימה החדשה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">[</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>21</mn><mo separator=\"true\">,</mo><mn>22</mn><mo separator=\"true\">,</mo><mn>25</mn><mo separator=\"true\">,</mo><mn>15</mn><mo separator=\"true\">,</mo><mn>10</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">[3, 7, 21, 22, 25, 15, 10]</annotation></semantics></math></span>. הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">21</annotation></semantics></math></span> גדול משני ילדיו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">15</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span> (הרצת <code class=\"tok\" dir=\"ltr\">buildheap</code> על הדוגמה משאירה אותה ללא שינוי, והספירה נבדקה בקוד)."
    },
    {
     "type": "order",
     "prompt": "סדרו את הטיעון של הדוגמה הנגדית.",
     "lines": [
      "אחרי `buildheap` מתקבלת ערימת מינימום חוקית: $[3, 21, 7, 22, 25, 15, 10]$.",
      "הבן השמאלי $21$ גדול מהבן הימני $7$, ולכן האלגוריתם מחליף ביניהם.",
      "עכשיו $21$ הוא הבן הימני של השורש, וילדיו הם $15$ ו-$10$.",
      "$21$ אינו קטן מהבנים החדשים שלו, ולכן הערימה אינה חוקית."
     ],
     "explain": "מהדוגמה החוקית מגיעים להפרה אחרי ההחלפה.",
     "promptHtml": "סדרו את הטיעון של הדוגמה הנגדית.",
     "explainHtml": "מהדוגמה החוקית מגיעים להפרה אחרי ההחלפה.",
     "linesHtml": [
      "אחרי <code class=\"tok\" dir=\"ltr\">buildheap</code> מתקבלת ערימת מינימום חוקית: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">[</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>21</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>22</mn><mo separator=\"true\">,</mo><mn>25</mn><mo separator=\"true\">,</mo><mn>15</mn><mo separator=\"true\">,</mo><mn>10</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">[3, 21, 7, 22, 25, 15, 10]</annotation></semantics></math></span>.",
      "הבן השמאלי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">21</annotation></semantics></math></span> גדול מהבן הימני <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span>, ולכן האלגוריתם מחליף ביניהם.",
      "עכשיו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">21</annotation></semantics></math></span> הוא הבן הימני של השורש, וילדיו הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">15</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span>.",
      "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">21</annotation></semantics></math></span> אינו קטן מהבנים החדשים שלו, ולכן הערימה אינה חוקית."
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q2a",
   "partKey": "a",
   "examCode": "25S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ה, מועד א (20.10.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "ערימות ותור עדיפויות",
   "questionHtml": "נגדיר: ערימה \"שומרת סדר\" היא ערימת מינימום בה לכל קודקוד יש שני בנים, והערך של הבן השמאלי קטן מהערך של הבן הימני. לדוגמה:<br><br>דנה הציעה אלגוריתם לפתרון הבעיה הבאה:<br><strong>קלט:</strong> מערך לא ממוין של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מספרים ממשיים.<br><strong>פלט:</strong> ערימה שומרת סדר (במימוש ע\"י <strong>עץ כמעט שלם</strong> בייצוג מערך כפי שלמדנו).<br><br>האלגוריתם של דנה:<br>- הפוך את המערך לערימת מינימום בעזרת <code class=\"tok\" dir=\"ltr\">buildheap()</code><br>- סרוק את הערימה בסריקת רוחב, ולכל צומת, אם יש לו 2 בנים, השווה בין ערכי הבנים שלו - אם הערך הבן השמאלי גדול מהערך בבן הימני הפוך בין הערכים.<br><br>האם האלגוריתם של דנה יחזיר ערימה \"שומרת סדר\"?<br>אם כן, הסבירו את נכונות האלגוריתם ונתחו את סיבוכיותו, אחרת תנו דוגמא עבורה האלגוריתם לא יחזיר תשובה נכונה והסבירו את הדוגמא.",
   "solutionHtml": "ניתן למצוא דוגמה נגדית. בשלב הראשון, אחרי <code class=\"tok\" dir=\"ltr\">buildheap</code> נקבל ערימת מינימום חוקית, אבל אחרי הפיכת הערכים בבנים הערימה כבר לא תהיה חוקית.<br><br>לדוגמה: אחרי <code class=\"tok\" dir=\"ltr\">buildheap</code> מתקבלת ערימה שבה השורש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>, ילדיו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">21</annotation></semantics></math></span> (משמאל) ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> (מימין), ילדיו של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">21</annotation></semantics></math></span> הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">22</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">25</annotation></semantics></math></span>, וילדיו של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">15</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span>.<br><br>אחרי ההחלפה בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">21</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> הערימה לא חוקית, כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">21</annotation></semantics></math></span> לא יהיה קטן מהבנים החדשים שלו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn><mo separator=\"true\">,</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">15, 10</annotation></semantics></math></span>.",
   "pointsTotal": 12,
   "pitfallsHtml": [
    "לטעון שהאלגוריתם נכון כי כל בן שמאלי הפך לקטן מהימני, ולשכוח שההחלפה לא נעשית מעל תת-העצים של הילדים.",
    "לתת דוגמה שאינה ערימת מינימום חוקית עוד לפני ההחלפה."
   ]
  },
  {
   "num": 2,
   "kind": "computation",
   "topic": "hashing",
   "question": "(שימו לב שיש לסעיף ב' שני תתי סעיפים)\n\nנתונה סדרת המספרים הבאה (משמאל לימין): $11, 5, 6, 22, 7, 13$\n\nהשתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל $11$:\n$h(x,i) = (h_1(x) + i \\cdot h_2(x)) \\bmod 11$\n\nכאשר:\n$h_1(x) = x \\bmod 11$\n$h_2(x) = 1 + (x \\bmod 7)$\n\nהציגו את **כל** שלבי ההכנסה של המספרים לטבלת הגיבוב.",
   "solution": "הטבלה הסופית (אינדקס: ערך): $0$: $11$, $2$: $22$, $5$: $5$, $6$: $6$, $7$: $7$, $9$: $13$. שאר התאים ($1, 3, 4, 8, 10$) ריקים.\n\n- $11 \\bmod 11 = 0$ (פנוי).\n- $5 \\bmod 11 = 5$ (פנוי).\n- $6 \\bmod 11 = 6$ (פנוי).\n- $22 \\bmod 11 = 0$: תפוס. צעד: $1 + 22 \\bmod 7 = 1 + 1 = 2$. פנוי: $0 + 1 \\cdot 2 = 2$.\n- $7 \\bmod 11 = 7$ (פנוי).\n- $13 \\bmod 11 = 2$: תפוס. צעד: $1 + 13 \\bmod 7 = 1 + 6 = 7$. $2 + 1 \\cdot 7 = 2 + 7 = 9$ (פנוי).",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 7,
   "part": "ב",
   "rubric": [
    {
     "text": "הכנסת $11$, $5$, $6$, $7$ לתאים $0, 5, 6, 7$ לפי $h_1$",
     "points": 2,
     "html": "הכנסת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> לתאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">0, 5, 6, 7</annotation></semantics></math></span> לפי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>1</mn></msub></mrow><annotation encoding=\"application/x-tex\">h_1</annotation></semantics></math></span>"
    },
    {
     "text": "עבור $22$: התנגשות בתא $0$, צעד $h_2=2$, נוחת בתא $2$",
     "points": 2,
     "html": "עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">22</annotation></semantics></math></span>: התנגשות בתא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>, צעד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">h_2=2</annotation></semantics></math></span>, נוחת בתא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>"
    },
    {
     "text": "עבור $13$: התנגשות בתא $2$, צעד $h_2=7$, נוחת בתא $9$",
     "points": 2,
     "html": "עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">13</annotation></semantics></math></span>: התנגשות בתא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>, צעד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">h_2=7</annotation></semantics></math></span>, נוחת בתא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">9</annotation></semantics></math></span>"
    },
    {
     "text": "הצגת הטבלה הסופית",
     "points": 1,
     "html": "הצגת הטבלה הסופית"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לחשב $h_2(x) = x \\bmod 7$ בלי להוסיף $1$.",
    "לשכוח להוריד מודולו $11$ אחרי חיבור $i \\cdot h_2(x)$.",
    "להמשיך את הצעד מהמקום האחרון שנבדק במקום לחשב מחדש $h(x,i)$ מ-$h_1(x)$."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מהו $h_2(22)$?",
     "answer": 2,
     "tol": 0,
     "explain": "$22 \\bmod 7 = 1$, לכן $h_2 = 1 + 1 = 2$ (נבדק בקוד).",
     "promptHtml": "מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mn>22</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">h_2(22)</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>22</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">22 \\bmod 7 = 1</annotation></semantics></math></span>, לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">h_2 = 1 + 1 = 2</annotation></semantics></math></span> (נבדק בקוד)."
    },
    {
     "type": "numeric",
     "prompt": "באיזה תא (אינדקס) נכנס $22$? (התא $0$ תפוס על ידי $11$)",
     "answer": 2,
     "tol": 0,
     "explain": "$h(22,1) = (0 + 1 \\cdot 2) \\bmod 11 = 2$, תא פנוי.",
     "promptHtml": "באיזה תא (אינדקס) נכנס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">22</annotation></semantics></math></span>? (התא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> תפוס על ידי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>)",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mn>22</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">(</mo><mn>0</mn><mo>+</mo><mn>1</mn><mo>⋅</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">h(22,1) = (0 + 1 \\cdot 2) \\bmod 11 = 2</annotation></semantics></math></span>, תא פנוי."
    },
    {
     "type": "numeric",
     "prompt": "באיזה תא נכנס $13$? (התא $2$ כבר תפוס על ידי $22$)",
     "answer": 9,
     "tol": 0,
     "explain": "$h_2(13) = 1 + 6 = 7$, ולכן $h(13,1) = (2 + 7) \\bmod 11 = 9$.",
     "promptHtml": "באיזה תא נכנס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">13</annotation></semantics></math></span>? (התא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> כבר תפוס על ידי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">22</annotation></semantics></math></span>)",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mn>13</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mn>6</mn><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">h_2(13) = 1 + 6 = 7</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">(</mo><mn>2</mn><mo>+</mo><mn>7</mn><mo stretchy=\"false\">)</mo><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">h(13,1) = (2 + 7) \\bmod 11 = 9</annotation></semantics></math></span>."
    },
    {
     "type": "choice",
     "prompt": "אילו תאים נשארים ריקים בטבלה הסופית?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "$1, 3, 4, 8, 10$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">1, 3, 4, 8, 10</annotation></semantics></math></span>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "$1, 2, 3, 4, 8$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">1, 2, 3, 4, 8</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "$3, 4, 8, 9, 10$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>9</mn><mo separator=\"true\">,</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">3, 4, 8, 9, 10</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "$0, 1, 3, 4, 8$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">0, 1, 3, 4, 8</annotation></semantics></math></span>"
      }
     ],
     "correctId": "a",
     "explain": "התפוסים הם $0, 2, 5, 6, 7, 9$, ולכן הריקים הם $1, 3, 4, 8, 10$ (הטבלה נבנתה בסימולציה).",
     "promptHtml": "אילו תאים נשארים ריקים בטבלה הסופית?",
     "explainHtml": "התפוסים הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">0, 2, 5, 6, 7, 9</annotation></semantics></math></span>, ולכן הריקים הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">1, 3, 4, 8, 10</annotation></semantics></math></span> (הטבלה נבנתה בסימולציה)."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q2b",
   "partKey": "b",
   "examCode": "25S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ה, מועד א (20.10.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "(שימו לב שיש לסעיף ב' שני תתי סעיפים)<br><br>נתונה סדרת המספרים הבאה (משמאל לימין): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>22</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">11, 5, 6, 22, 7, 13</annotation></semantics></math></span><br><br>השתמשו בפונקציית הגיבוב הבאה כדי להכניס אותה למערך ריק בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>:<br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">(</mo><msub><mi>h</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>+</mo><mi>i</mi><mo>⋅</mo><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h(x,i) = (h_1(x) + i \\cdot h_2(x)) \\bmod 11</annotation></semantics></math></span><br><br>כאשר:<br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">h_1(x) = x \\bmod 11</annotation></semantics></math></span><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">h_2(x) = 1 + (x \\bmod 7)</annotation></semantics></math></span><br><br>הציגו את <strong>כל</strong> שלבי ההכנסה של המספרים לטבלת הגיבוב.",
   "solutionHtml": "הטבלה הסופית (אינדקס: ערך): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">22</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">9</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">13</annotation></semantics></math></span>. שאר התאים (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">1, 3, 4, 8, 10</annotation></semantics></math></span>) ריקים.<br><br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">11 \\bmod 11 = 0</annotation></semantics></math></span> (פנוי).<br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5 \\bmod 11 = 5</annotation></semantics></math></span> (פנוי).<br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6 \\bmod 11 = 6</annotation></semantics></math></span> (פנוי).<br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>22</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">22 \\bmod 11 = 0</annotation></semantics></math></span>: תפוס. צעד: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>22</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo>=</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1 + 22 \\bmod 7 = 1 + 1 = 2</annotation></semantics></math></span>. פנוי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>+</mo><mn>1</mn><mo>⋅</mo><mn>2</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">0 + 1 \\cdot 2 = 2</annotation></semantics></math></span>.<br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7 \\bmod 11 = 7</annotation></semantics></math></span> (פנוי).<br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>13</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">13 \\bmod 11 = 2</annotation></semantics></math></span>: תפוס. צעד: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>13</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo>=</mo><mn>1</mn><mo>+</mo><mn>6</mn><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">1 + 13 \\bmod 7 = 1 + 6 = 7</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mn>1</mn><mo>⋅</mo><mn>7</mn><mo>=</mo><mn>2</mn><mo>+</mo><mn>7</mn><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">2 + 1 \\cdot 7 = 2 + 7 = 9</annotation></semantics></math></span> (פנוי).",
   "pointsTotal": 7,
   "pitfallsHtml": [
    "לחשב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>x</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">h_2(x) = x \\bmod 7</annotation></semantics></math></span> בלי להוסיף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>.",
    "לשכוח להוריד מודולו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span> אחרי חיבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mo>⋅</mo><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">i \\cdot h_2(x)</annotation></semantics></math></span>.",
    "להמשיך את הצעד מהמקום האחרון שנבדק במקום לחשב מחדש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>i</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">h(x,i)</annotation></semantics></math></span> מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>1</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">h_1(x)</annotation></semantics></math></span>."
   ]
  },
  {
   "num": 2,
   "kind": "computation",
   "topic": "hashing",
   "question": "בהנתן טבלת הגיבוב שקיבלתם בסעיף ב1, הראו דוגמה להכנסת מספר חדש לטבלה שהכנסתו תגרום ל-$3$ התנגשויות **בדיוק**. (פרטו את **כל** שלבי הכנסת המספר החדש).",
   "solution": "דוגמה: `insert(31)`.\n\n- $31 \\bmod 11 = 9$: תפוס. צעד: $1 + 31 \\bmod 7 = 1 + 3 = 4$.\n- $i=1$: $9 + 1 \\cdot 4 = 13$, $13 \\bmod 11 = 2$: תפוס.\n- $i=2$: $9 + 2 \\cdot 4 = 9 + 8 = 17$, $17 \\bmod 11 = 6$: תפוס.\n- $i=3$: $9 + 3 \\cdot 4 = 9 + 12 = 21$, $21 \\bmod 11 = 10$: פנוי.\n\nהמספר $31$ נכנס לתא $10$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 6,
   "part": "ג",
   "rubric": [
    {
     "text": "בחירת מספר שהתא הראשון שלו תפוס, וחישוב הצעד $h_2$",
     "points": 1,
     "html": "בחירת מספר שהתא הראשון שלו תפוס, וחישוב הצעד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">h_2</annotation></semantics></math></span>"
    },
    {
     "text": "חישוב כל בדיקה: $i=1$ (תא $2$), $i=2$ (תא $6$), $i=3$ (תא $10$)",
     "points": 3,
     "html": "חישוב כל בדיקה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">i=1</annotation></semantics></math></span> (תא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>), <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">i=2</annotation></semantics></math></span> (תא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span>), <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">i=3</annotation></semantics></math></span> (תא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span>)"
    },
    {
     "text": "זיהוי שהתאים $9, 2, 6$ תפוסים, כלומר שלוש התנגשויות בדיוק",
     "points": 1,
     "html": "זיהוי שהתאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">9, 2, 6</annotation></semantics></math></span> תפוסים, כלומר שלוש התנגשויות בדיוק"
    },
    {
     "text": "הכנסת המספר לתא הפנוי $10$",
     "points": 1,
     "html": "הכנסת המספר לתא הפנוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לבחור מספר שמתנגש פחות או יותר מ-$3$ פעמים, בלי לבדוק את כל הבדיקות עד התא הפנוי.",
    "לספור את ההכנסה לתא הפנוי כהתנגשות."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מהו $h_2(31)$?",
     "answer": 4,
     "tol": 0,
     "explain": "$31 \\bmod 7 = 3$, לכן $h_2 = 4$.",
     "promptHtml": "מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo stretchy=\"false\">(</mo><mn>31</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">h_2(31)</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>31</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">31 \\bmod 7 = 3</annotation></semantics></math></span>, לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">h_2 = 4</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "לאיזה תא מובילה הבדיקה $i=2$ עבור $31$?",
     "answer": 6,
     "tol": 0,
     "explain": "$h(31,2) = (9 + 2 \\cdot 4) \\bmod 11 = 17 \\bmod 11 = 6$, והתא תפוס (הבדיקות הן $9, 2, 6, 10$).",
     "promptHtml": "לאיזה תא מובילה הבדיקה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">i=2</annotation></semantics></math></span> עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>31</mn></mrow><annotation encoding=\"application/x-tex\">31</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mn>31</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">(</mo><mn>9</mn><mo>+</mo><mn>2</mn><mo>⋅</mo><mn>4</mn><mo stretchy=\"false\">)</mo><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>17</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">h(31,2) = (9 + 2 \\cdot 4) \\bmod 11 = 17 \\bmod 11 = 6</annotation></semantics></math></span>, והתא תפוס (הבדיקות הן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">9, 2, 6, 10</annotation></semantics></math></span>)."
    },
    {
     "type": "numeric",
     "prompt": "באיזה תא נכנס $31$ בסוף, אחרי שלוש התנגשויות?",
     "answer": 10,
     "tol": 0,
     "explain": "$h(31,3) = (9 + 12) \\bmod 11 = 10$, תא פנוי.",
     "promptHtml": "באיזה תא נכנס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>31</mn></mrow><annotation encoding=\"application/x-tex\">31</annotation></semantics></math></span> בסוף, אחרי שלוש התנגשויות?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo stretchy=\"false\">(</mo><mn>31</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">(</mo><mn>9</mn><mo>+</mo><mn>12</mn><mo stretchy=\"false\">)</mo><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">h(31,3) = (9 + 12) \\bmod 11 = 10</annotation></semantics></math></span>, תא פנוי."
    },
    {
     "type": "order",
     "prompt": "סדרו את שלבי הכנסת $31$.",
     "lines": [
      "$31 \\bmod 11 = 9$: תפוס. צעד: $1 + 31 \\bmod 7 = 4$.",
      "$i=1$: $(9 + 4) \\bmod 11 = 2$: תפוס.",
      "$i=2$: $(9 + 8) \\bmod 11 = 6$: תפוס.",
      "$i=3$: $(9 + 12) \\bmod 11 = 10$: פנוי, ו-$31$ נכנס לתא $10$."
     ],
     "explain": "שלוש ההתנגשויות הן בתאים $9, 2, 6$.",
     "promptHtml": "סדרו את שלבי הכנסת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>31</mn></mrow><annotation encoding=\"application/x-tex\">31</annotation></semantics></math></span>.",
     "explainHtml": "שלוש ההתנגשויות הן בתאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">9, 2, 6</annotation></semantics></math></span>.",
     "linesHtml": [
      "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>31</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">31 \\bmod 11 = 9</annotation></semantics></math></span>: תפוס. צעד: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>31</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">1 + 31 \\bmod 7 = 4</annotation></semantics></math></span>.",
      "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">i=1</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>9</mn><mo>+</mo><mn>4</mn><mo stretchy=\"false\">)</mo><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">(9 + 4) \\bmod 11 = 2</annotation></semantics></math></span>: תפוס.",
      "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">i=2</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>9</mn><mo>+</mo><mn>8</mn><mo stretchy=\"false\">)</mo><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">(9 + 8) \\bmod 11 = 6</annotation></semantics></math></span>: תפוס.",
      "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">i=3</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>9</mn><mo>+</mo><mn>12</mn><mo stretchy=\"false\">)</mo><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">(9 + 12) \\bmod 11 = 10</annotation></semantics></math></span>: פנוי, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>31</mn></mrow><annotation encoding=\"application/x-tex\">31</annotation></semantics></math></span> נכנס לתא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span>."
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q2c",
   "partKey": "c",
   "examCode": "25S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ה, מועד א (20.10.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "בהנתן טבלת הגיבוב שקיבלתם בסעיף ב1, הראו דוגמה להכנסת מספר חדש לטבלה שהכנסתו תגרום ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> התנגשויות <strong>בדיוק</strong>. (פרטו את <strong>כל</strong> שלבי הכנסת המספר החדש).",
   "solutionHtml": "דוגמה: <code class=\"tok\" dir=\"ltr\">insert(31)</code>.<br><br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>31</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">31 \\bmod 11 = 9</annotation></semantics></math></span>: תפוס. צעד: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>31</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>7</mn><mo>=</mo><mn>1</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">1 + 31 \\bmod 7 = 1 + 3 = 4</annotation></semantics></math></span>.<br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">i=1</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn><mo>+</mo><mn>1</mn><mo>⋅</mo><mn>4</mn><mo>=</mo><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">9 + 1 \\cdot 4 = 13</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>13</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">13 \\bmod 11 = 2</annotation></semantics></math></span>: תפוס.<br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">i=2</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn><mo>+</mo><mn>2</mn><mo>⋅</mo><mn>4</mn><mo>=</mo><mn>9</mn><mo>+</mo><mn>8</mn><mo>=</mo><mn>17</mn></mrow><annotation encoding=\"application/x-tex\">9 + 2 \\cdot 4 = 9 + 8 = 17</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>17</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">17 \\bmod 11 = 6</annotation></semantics></math></span>: תפוס.<br>- <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">i=3</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn><mo>+</mo><mn>3</mn><mo>⋅</mo><mn>4</mn><mo>=</mo><mn>9</mn><mo>+</mo><mn>12</mn><mo>=</mo><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">9 + 3 \\cdot 4 = 9 + 12 = 21</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>11</mn><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">21 \\bmod 11 = 10</annotation></semantics></math></span>: פנוי.<br><br>המספר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>31</mn></mrow><annotation encoding=\"application/x-tex\">31</annotation></semantics></math></span> נכנס לתא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span>.",
   "pointsTotal": 6,
   "pitfallsHtml": [
    "לבחור מספר שמתנגש פחות או יותר מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> פעמים, בלי לבדוק את כל הבדיקות עד התא הפנוי.",
    "לספור את ההכנסה לתא הפנוי כהתנגשות."
   ]
  },
  {
   "num": 3,
   "kind": "algorithm",
   "topic": "ds_design",
   "question": "הציעו מבנה נתונים לניהול המערכת שבהקשר. יש להסביר את מבנה הנתונים ואיך נממש כל אחת מהפעולות.",
   "solution": "**מבנה הנתונים:** מערך $A$ בגודל $n$, ובכל תא: ערך, מחסנית `undo`, מחסנית `redo`.\n\n**תיאור הפעולות:**\n1. **אתחול** – מעבר על $n$ הנתונים והכנסה לפי הסדר למערך לשדה \"ערך\"; המחסניות מאותחלות כריקות. סה\"כ $O(n)$.\n2. **`Set(i,x)`** – הכנסת הערך בתא $A[i]$ למחסנית ה-`undo` (פעולת `push`), ועדכון $A[i]=x$.\n3. (המשך `Set`) אפס את מחסנית ה-`redo`. שימו לב שאם ממשמשים מחסנית ע\"י מערך ניתן לאפס את כל המחסנית בפעולה אחת רק ע\"י איפוס אינדקס ראש המחסנית; במימוש ע\"י רשימה מקושרת צריך למחוק אחד אחד וזה לא יהיה בזמן קבוע. סה\"כ $O(1)$.\n4. **`Undo(i)`** – הכנסת הערך בתא $A[i]$ למחסנית ה-`redo` (פעולת `push`); הוצאת ערך מראש מחסנית ה-`undo` (פעולת `pop`): `y=pop(undoStack)`; עדכון $A[i]=y$. סה\"כ $O(1)$.\n5. **`Redo(i)`** – הכנסת הערך בתא $A[i]$ למחסנית ה-`undo` (פעולת `push`); הוצאת ערך מראש מחסנית ה-`redo` (פעולת `pop`): `y=pop(redoStack)`; עדכון $A[i]=y$. סה\"כ $O(1)$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 12,
   "part": "א",
   "contextId": "25S-A-c3",
   "rubric": [
    {
     "text": "מערך בגודל $n$, ובכל תא ערך, מחסנית `undo` ומחסנית `redo`",
     "points": 3,
     "html": "מערך בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, ובכל תא ערך, מחסנית <code class=\"tok\" dir=\"ltr\">undo</code> ומחסנית <code class=\"tok\" dir=\"ltr\">redo</code>"
    },
    {
     "text": "אתחול ב-$O(n)$: הכנסת הערכים ומחסניות ריקות",
     "points": 2,
     "html": "אתחול ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>: הכנסת הערכים ומחסניות ריקות"
    },
    {
     "text": "`Set`: דחיפת הערך הישן ל-`undo`, עדכון הערך ואיפוס מחסנית `redo` ב-$O(1)$",
     "points": 3,
     "html": "<code class=\"tok\" dir=\"ltr\">Set</code>: דחיפת הערך הישן ל-<code class=\"tok\" dir=\"ltr\">undo</code>, עדכון הערך ואיפוס מחסנית <code class=\"tok\" dir=\"ltr\">redo</code> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>"
    },
    {
     "text": "`Undo`: דחיפת הערך הנוכחי ל-`redo`, הוצאה מ-`undo` ועדכון הערך ב-$O(1)$",
     "points": 2,
     "html": "<code class=\"tok\" dir=\"ltr\">Undo</code>: דחיפת הערך הנוכחי ל-<code class=\"tok\" dir=\"ltr\">redo</code>, הוצאה מ-<code class=\"tok\" dir=\"ltr\">undo</code> ועדכון הערך ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>"
    },
    {
     "text": "`Redo`: דחיפת הערך הנוכחי ל-`undo`, הוצאה מ-`redo` ועדכון הערך ב-$O(1)$",
     "points": 2,
     "html": "<code class=\"tok\" dir=\"ltr\">Redo</code>: דחיפת הערך הנוכחי ל-<code class=\"tok\" dir=\"ltr\">undo</code>, הוצאה מ-<code class=\"tok\" dir=\"ltr\">redo</code> ועדכון הערך ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לשמור מחסנית אחת משותפת לכל המשתנים במקום מחסניות לכל משתנה.",
    "לאפס את מחסנית `redo` בעזרת מחיקה איבר-איבר ברשימה מקושרת (בשפה ללא איסוף זבל, כמו C), שאינה בזמן קבוע; במערך מספיק לאפס את מצביע הראש.",
    "לא לאפס את `redo` בפעולת `Set`, כך ש-`redo` מחזיר ערך ישן אחרי שינוי חדש."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מה שומרים בכל תא $A[i]$ במבנה הנתונים?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "הערך הנוכחי, מחסנית `undo` ומחסנית `redo`",
       "html": "הערך הנוכחי, מחסנית <code class=\"tok\" dir=\"ltr\">undo</code> ומחסנית <code class=\"tok\" dir=\"ltr\">redo</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "רק הערך הנוכחי",
       "html": "רק הערך הנוכחי"
      },
      {
       "id": "c",
       "type": "text",
       "value": "ערימת מקסימום של כל ההיסטוריה",
       "html": "ערימת מקסימום של כל ההיסטוריה"
      },
      {
       "id": "d",
       "type": "text",
       "value": "תור של כל השינויים",
       "html": "תור של כל השינויים"
      }
     ],
     "correctId": "a",
     "explain": "כך כל פעולה נעשית ב-$O(1)$: דחיפה והוצאה ממחסנית.",
     "promptHtml": "מה שומרים בכל תא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mi>i</mi><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[i]</annotation></semantics></math></span> במבנה הנתונים?",
     "explainHtml": "כך כל פעולה נעשית ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>: דחיפה והוצאה ממחסנית."
    },
    {
     "type": "numeric",
     "prompt": "ערך התחלתי $5$. מבצעים: `Set(0,7)`, `Set(0,9)`, `Undo(0)`, `Undo(0)`, `Redo(0)`. מה הערך של המשתנה בסוף?",
     "answer": 7,
     "tol": 0,
     "explain": "הערכים: $5 \\to 7 \\to 9 \\to 7 \\to 5 \\to 7$. המימוש נבדק מול מודל היסטוריה על מקרים אקראיים.",
     "promptHtml": "ערך התחלתי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>. מבצעים: <code class=\"tok\" dir=\"ltr\">Set(0,7)</code>, <code class=\"tok\" dir=\"ltr\">Set(0,9)</code>, <code class=\"tok\" dir=\"ltr\">Undo(0)</code>, <code class=\"tok\" dir=\"ltr\">Undo(0)</code>, <code class=\"tok\" dir=\"ltr\">Redo(0)</code>. מה הערך של המשתנה בסוף?",
     "explainHtml": "הערכים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>→</mo><mn>7</mn><mo>→</mo><mn>9</mn><mo>→</mo><mn>7</mn><mo>→</mo><mn>5</mn><mo>→</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">5 \\to 7 \\to 9 \\to 7 \\to 5 \\to 7</annotation></semantics></math></span>. המימוש נבדק מול מודל היסטוריה על מקרים אקראיים."
    },
    {
     "type": "numeric",
     "prompt": "ערך התחלתי $5$. מבצעים: `Set(0,7)`, `Undo(0)`, `Set(0,8)`, `Redo(0)`. מה הערך בסוף?",
     "answer": 8,
     "tol": 0,
     "explain": "ה-`Set` איפס את מחסנית `redo`, ולכן `Redo` כבר אינו מחזיר את $7$ והערך נשאר $8$.",
     "promptHtml": "ערך התחלתי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>. מבצעים: <code class=\"tok\" dir=\"ltr\">Set(0,7)</code>, <code class=\"tok\" dir=\"ltr\">Undo(0)</code>, <code class=\"tok\" dir=\"ltr\">Set(0,8)</code>, <code class=\"tok\" dir=\"ltr\">Redo(0)</code>. מה הערך בסוף?",
     "explainHtml": "ה-<code class=\"tok\" dir=\"ltr\">Set</code> איפס את מחסנית <code class=\"tok\" dir=\"ltr\">redo</code>, ולכן <code class=\"tok\" dir=\"ltr\">Redo</code> כבר אינו מחזיר את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> והערך נשאר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q3a",
   "partKey": "a",
   "examCode": "25S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ה, מועד א (20.10.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "תכנון אלגוריתם ומבנה נתונים",
   "questionHtml": "הציעו מבנה נתונים לניהול המערכת שבהקשר. יש להסביר את מבנה הנתונים ואיך נממש כל אחת מהפעולות.",
   "solutionHtml": "<strong>מבנה הנתונים:</strong> מערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, ובכל תא: ערך, מחסנית <code class=\"tok\" dir=\"ltr\">undo</code>, מחסנית <code class=\"tok\" dir=\"ltr\">redo</code>.<br><br><strong>תיאור הפעולות:</strong><br>1. <strong>אתחול</strong> – מעבר על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> הנתונים והכנסה לפי הסדר למערך לשדה \"ערך\"; המחסניות מאותחלות כריקות. סה\"כ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.<br>2. <strong><code class=\"tok\" dir=\"ltr\">Set(i,x)</code></strong> – הכנסת הערך בתא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mi>i</mi><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[i]</annotation></semantics></math></span> למחסנית ה-<code class=\"tok\" dir=\"ltr\">undo</code> (פעולת <code class=\"tok\" dir=\"ltr\">push</code>), ועדכון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mi>i</mi><mo stretchy=\"false\">]</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">A[i]=x</annotation></semantics></math></span>.<br>3. (המשך <code class=\"tok\" dir=\"ltr\">Set</code>) אפס את מחסנית ה-<code class=\"tok\" dir=\"ltr\">redo</code>. שימו לב שאם ממשמשים מחסנית ע\"י מערך ניתן לאפס את כל המחסנית בפעולה אחת רק ע\"י איפוס אינדקס ראש המחסנית; במימוש ע\"י רשימה מקושרת צריך למחוק אחד אחד וזה לא יהיה בזמן קבוע. סה\"כ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>.<br>4. <strong><code class=\"tok\" dir=\"ltr\">Undo(i)</code></strong> – הכנסת הערך בתא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mi>i</mi><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[i]</annotation></semantics></math></span> למחסנית ה-<code class=\"tok\" dir=\"ltr\">redo</code> (פעולת <code class=\"tok\" dir=\"ltr\">push</code>); הוצאת ערך מראש מחסנית ה-<code class=\"tok\" dir=\"ltr\">undo</code> (פעולת <code class=\"tok\" dir=\"ltr\">pop</code>): <code class=\"tok\" dir=\"ltr\">y=pop(undoStack)</code>; עדכון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mi>i</mi><mo stretchy=\"false\">]</mo><mo>=</mo><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">A[i]=y</annotation></semantics></math></span>. סה\"כ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>.<br>5. <strong><code class=\"tok\" dir=\"ltr\">Redo(i)</code></strong> – הכנסת הערך בתא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mi>i</mi><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[i]</annotation></semantics></math></span> למחסנית ה-<code class=\"tok\" dir=\"ltr\">undo</code> (פעולת <code class=\"tok\" dir=\"ltr\">push</code>); הוצאת ערך מראש מחסנית ה-<code class=\"tok\" dir=\"ltr\">redo</code> (פעולת <code class=\"tok\" dir=\"ltr\">pop</code>): <code class=\"tok\" dir=\"ltr\">y=pop(redoStack)</code>; עדכון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mi>i</mi><mo stretchy=\"false\">]</mo><mo>=</mo><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">A[i]=y</annotation></semantics></math></span>. סה\"כ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>.",
   "pointsTotal": 12,
   "pitfallsHtml": [
    "לשמור מחסנית אחת משותפת לכל המשתנים במקום מחסניות לכל משתנה.",
    "לאפס את מחסנית <code class=\"tok\" dir=\"ltr\">redo</code> בעזרת מחיקה איבר-איבר ברשימה מקושרת (בשפה ללא איסוף זבל, כמו C), שאינה בזמן קבוע; במערך מספיק לאפס את מצביע הראש.",
    "לא לאפס את <code class=\"tok\" dir=\"ltr\">redo</code> בפעולת <code class=\"tok\" dir=\"ltr\">Set</code>, כך ש-<code class=\"tok\" dir=\"ltr\">redo</code> מחזיר ערך ישן אחרי שינוי חדש."
   ]
  },
  {
   "num": 3,
   "kind": "algorithm",
   "topic": "ds_design",
   "question": "למערכת שהצעתם בסעיף א' הוחלט להוסיף פעולה נוספת:\n\n`max()` – מחזיר את **הערך הגדול ביותר** מבין כל המשתנים שנמצאים במערכת ברגע זה.\n\nהסבירו מה צריך להוסיף למבני הנתונים שלכם כדי לתמוך בפעולה החדשה, ואיך לממש את כל אחת מהפעולות לאחר שינוי מבנה הנתונים (פעולות 1-4 מהסעיף הקודם + הפעולה הנוספת `max`).\n\nיש להציע מבנה שיתמוך בכל הפעולות **בסיבוכיות הטובה ביותר**, ולהסביר מה תהיה סיבוכיות כל פעולה לאחר השינוי.",
   "solution": "**מבנה הנתונים – נוסף למבנה:** ערימת מקסימום שמסודרת לפי הערכים, ופוינטרים הדדיים בין כל איבר בערימה לכל איבר במערך.\n\n**תיאור הפעולות:**\n1. **אתחול** – בנוסף לאתחול הקודם, יצירת ערימה מכל הערכים ההתחלתיים בעזרת `buildheap()` ועדכון המצביעים ההדדיים. סה\"כ $O(n)$.\n2. **`Set(i,x)`** – עדכון הערך בערימה עליו מצביע $A[i]$ לערך החדש וביצוע `heapifyup()`, `heapifydown()` כי אחד מהם יכול להיות נחוץ. (או מחיקת הערך הישן מהערימה והוספת החדש). סה\"כ $O(\\log n)$.\n3. **`Undo(i)`** – עדכון הערך בערימה עליו מצביע $A[i]$ לערך החדש וביצוע `heapifyup()`, `heapifydown()` כי אחד מהם יכול להיות נחוץ. (או מחיקת הערך הישן מהערימה והוספת החדש). סה\"כ $O(\\log n)$.\n4. **`Redo(i)`** – עדכון הערך בערימה עליו מצביע $A[i]$ לערך החדש וביצוע `heapifyup()`, `heapifydown()` כי אחד מהם יכול להיות נחוץ. (או מחיקת הערך הישן מהערימה והוספת החדש). סה\"כ $O(\\log n)$.\n5. **`Max()`** – נחזיר את הערך בראש ערימת המקסימום – $O(1)$.\n\n**הערה:** ניתן גם לפתור ע\"י הוספת עץ AVL עם מצביע לאיבר המקסימלי, מצביעים הדדיים לכל תא במערך לאיבר המתאים בעץ, ועדכונים בהתאם בכל אחת מהפעולות.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 13,
   "part": "ב",
   "contextId": "25S-A-c3",
   "rubric": [
    {
     "text": "הוספת ערימת מקסימום ומצביעים הדדיים בין איבר בערימה לתא במערך",
     "points": 3,
     "html": "הוספת ערימת מקסימום ומצביעים הדדיים בין איבר בערימה לתא במערך"
    },
    {
     "text": "אתחול: `buildheap` על הערכים ההתחלתיים ב-$O(n)$",
     "points": 2,
     "html": "אתחול: <code class=\"tok\" dir=\"ltr\">buildheap</code> על הערכים ההתחלתיים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    },
    {
     "text": "`Set`: עדכון הערך בערימה דרך המצביע ו-`heapifyup` או `heapifydown` ב-$O(\\log n)$",
     "points": 3,
     "html": "<code class=\"tok\" dir=\"ltr\">Set</code>: עדכון הערך בערימה דרך המצביע ו-<code class=\"tok\" dir=\"ltr\">heapifyup</code> או <code class=\"tok\" dir=\"ltr\">heapifydown</code> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>"
    },
    {
     "text": "`Undo` ו-`Redo`: אותו עדכון בערימה ב-$O(\\log n)$",
     "points": 3,
     "html": "<code class=\"tok\" dir=\"ltr\">Undo</code> ו-<code class=\"tok\" dir=\"ltr\">Redo</code>: אותו עדכון בערימה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>"
    },
    {
     "text": "`Max`: החזרת השורש ב-$O(1)$",
     "points": 2,
     "html": "<code class=\"tok\" dir=\"ltr\">Max</code>: החזרת השורש ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לחפש את הערך הישן בערימה לינארית, בלי מצביעים הדדיים, ואז העדכון עולה $O(n)$.",
    "לעדכן רק `heapifyup` או רק `heapifydown`, אבל הערך החדש יכול להיות גדול או קטן מהישן.",
    "להשתמש בערימת מינימום, שאינה מחזירה מקסימום ב-$O(1)$."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מה מוסיפים למבנה כדי לתמוך ב-`max()`?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "ערימת מקסימום, עם מצביעים הדדיים בין איבר בערימה לתא במערך",
       "html": "ערימת מקסימום, עם מצביעים הדדיים בין איבר בערימה לתא במערך"
      },
      {
       "id": "b",
       "type": "text",
       "value": "ערימת מינימום בלבד",
       "html": "ערימת מינימום בלבד"
      },
      {
       "id": "c",
       "type": "text",
       "value": "מערך ממוין של כל הערכים",
       "html": "מערך ממוין של כל הערכים"
      },
      {
       "id": "d",
       "type": "text",
       "value": "מחסנית נוספת",
       "html": "מחסנית נוספת"
      }
     ],
     "correctId": "a",
     "explain": "המצביעים מאפשרים לאתר את הערך בערימה ב-$O(1)$ ולעדכן אותו.",
     "promptHtml": "מה מוסיפים למבנה כדי לתמוך ב-<code class=\"tok\" dir=\"ltr\">max()</code>?",
     "explainHtml": "המצביעים מאפשרים לאתר את הערך בערימה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span> ולעדכן אותו."
    },
    {
     "type": "text",
     "prompt": "מהי סיבוכיות `Set(i,x)` אחרי השינוי?",
     "accept": [
      "O(log n)"
     ],
     "normalize": "complexity",
     "explain": "מוצאים את האיבר דרך המצביע ומבצעים `heapifyup` או `heapifydown`, לכל היותר $\\log n$ החלפות (נבדק בסימולציה).",
     "promptHtml": "מהי סיבוכיות <code class=\"tok\" dir=\"ltr\">Set(i,x)</code> אחרי השינוי?",
     "explainHtml": "מוצאים את האיבר דרך המצביע ומבצעים <code class=\"tok\" dir=\"ltr\">heapifyup</code> או <code class=\"tok\" dir=\"ltr\">heapifydown</code>, לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log n</annotation></semantics></math></span> החלפות (נבדק בסימולציה)."
    },
    {
     "type": "text",
     "prompt": "מהי סיבוכיות `max()`?",
     "accept": [
      "O(1)"
     ],
     "normalize": "complexity",
     "explain": "השורש של ערימת המקסימום (נבדק מול המקסימום האמיתי בסימולציה).",
     "promptHtml": "מהי סיבוכיות <code class=\"tok\" dir=\"ltr\">max()</code>?",
     "explainHtml": "השורש של ערימת המקסימום (נבדק מול המקסימום האמיתי בסימולציה)."
    },
    {
     "type": "text",
     "prompt": "מהי סיבוכיות האתחול `init(n)` אחרי השינוי?",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "`buildheap` על $n$ הערכים לוקח $O(n)$, כמו האתחול המקורי.",
     "promptHtml": "מהי סיבוכיות האתחול <code class=\"tok\" dir=\"ltr\">init(n)</code> אחרי השינוי?",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">buildheap</code> על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> הערכים לוקח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>, כמו האתחול המקורי."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q3b",
   "partKey": "b",
   "examCode": "25S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ה, מועד א (20.10.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "תכנון אלגוריתם ומבנה נתונים",
   "questionHtml": "למערכת שהצעתם בסעיף א' הוחלט להוסיף פעולה נוספת:<br><br><code class=\"tok\" dir=\"ltr\">max()</code> – מחזיר את <strong>הערך הגדול ביותר</strong> מבין כל המשתנים שנמצאים במערכת ברגע זה.<br><br>הסבירו מה צריך להוסיף למבני הנתונים שלכם כדי לתמוך בפעולה החדשה, ואיך לממש את כל אחת מהפעולות לאחר שינוי מבנה הנתונים (פעולות 1-4 מהסעיף הקודם + הפעולה הנוספת <code class=\"tok\" dir=\"ltr\">max</code>).<br><br>יש להציע מבנה שיתמוך בכל הפעולות <strong>בסיבוכיות הטובה ביותר</strong>, ולהסביר מה תהיה סיבוכיות כל פעולה לאחר השינוי.",
   "solutionHtml": "<strong>מבנה הנתונים – נוסף למבנה:</strong> ערימת מקסימום שמסודרת לפי הערכים, ופוינטרים הדדיים בין כל איבר בערימה לכל איבר במערך.<br><br><strong>תיאור הפעולות:</strong><br>1. <strong>אתחול</strong> – בנוסף לאתחול הקודם, יצירת ערימה מכל הערכים ההתחלתיים בעזרת <code class=\"tok\" dir=\"ltr\">buildheap()</code> ועדכון המצביעים ההדדיים. סה\"כ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.<br>2. <strong><code class=\"tok\" dir=\"ltr\">Set(i,x)</code></strong> – עדכון הערך בערימה עליו מצביע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mi>i</mi><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[i]</annotation></semantics></math></span> לערך החדש וביצוע <code class=\"tok\" dir=\"ltr\">heapifyup()</code>, <code class=\"tok\" dir=\"ltr\">heapifydown()</code> כי אחד מהם יכול להיות נחוץ. (או מחיקת הערך הישן מהערימה והוספת החדש). סה\"כ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.<br>3. <strong><code class=\"tok\" dir=\"ltr\">Undo(i)</code></strong> – עדכון הערך בערימה עליו מצביע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mi>i</mi><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[i]</annotation></semantics></math></span> לערך החדש וביצוע <code class=\"tok\" dir=\"ltr\">heapifyup()</code>, <code class=\"tok\" dir=\"ltr\">heapifydown()</code> כי אחד מהם יכול להיות נחוץ. (או מחיקת הערך הישן מהערימה והוספת החדש). סה\"כ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.<br>4. <strong><code class=\"tok\" dir=\"ltr\">Redo(i)</code></strong> – עדכון הערך בערימה עליו מצביע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">[</mo><mi>i</mi><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">A[i]</annotation></semantics></math></span> לערך החדש וביצוע <code class=\"tok\" dir=\"ltr\">heapifyup()</code>, <code class=\"tok\" dir=\"ltr\">heapifydown()</code> כי אחד מהם יכול להיות נחוץ. (או מחיקת הערך הישן מהערימה והוספת החדש). סה\"כ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.<br>5. <strong><code class=\"tok\" dir=\"ltr\">Max()</code></strong> – נחזיר את הערך בראש ערימת המקסימום – <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>.<br><br><strong>הערה:</strong> ניתן גם לפתור ע\"י הוספת עץ AVL עם מצביע לאיבר המקסימלי, מצביעים הדדיים לכל תא במערך לאיבר המתאים בעץ, ועדכונים בהתאם בכל אחת מהפעולות.",
   "pointsTotal": 13,
   "pitfallsHtml": [
    "לחפש את הערך הישן בערימה לינארית, בלי מצביעים הדדיים, ואז העדכון עולה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.",
    "לעדכן רק <code class=\"tok\" dir=\"ltr\">heapifyup</code> או רק <code class=\"tok\" dir=\"ltr\">heapifydown</code>, אבל הערך החדש יכול להיות גדול או קטן מהישן.",
    "להשתמש בערימת מינימום, שאינה מחזירה מקסימום ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>."
   ]
  },
  {
   "num": 4,
   "kind": "proof",
   "topic": "sorting_selection",
   "question": "נתון מערך $A$ בגודל $n$ של מספרים טבעיים עם התכונה הבאה:\n\nכל אחד מהמפתחות במערך, מופיע בו שלוש פעמים לכל היותר.\n\nשלומית טוענת כי ישנו חסם תחתון $\\Omega(n \\log n)$ לבעיית המיון של מערך כזה.\n\nהאם שלומית צודקת בטענתה? אם כן הוכיחו את הטענה, אחרת הראו אלגוריתם יעיל יותר למיון המערך, הסבירו אותו ונתחו את סיבוכיותו.",
   "solution": "**הסבר למה צריך להוכיח בסעיף הזה:**\nלא ניתן להסיק מהנתונים לגבי טווח של המספרים, לכן זה בעצם כמו מיון רגיל מבוסס השוואות שלוקח לפי המשפט שלמדנו לפחות $n \\log n$ ולכן זו הוכחה.\nניתן כמובן למצוא מה הטווח ע\"י מעבר על המספרים ומציאת המינימלי והמקסימלי, אבל אם הטווח לא קטן ממש מסדר גודל של $n \\log n$ אז מיון מניה לא יהיה יעיל יותר ממיון מבוסס השוואות.\nמיון מניה יוצא יעיל רק כאשר טווח המספרים הוא בסדר גודל של כמות האיברים למיון למשל, ובכל מקרה לכל היותר סדר גודל שעדיין קטן ממש מ-$n \\log n$.\n\n**הוכחה:**\nנניח בשלילה שניתן למיין מערך בן $n$ איברים שמקיים את התנאי הנתון בסדר גודל **קטן ממש** מ-$n \\log n$ (כלומר בזמן $o(n \\log n)$), ונראה שניתן למיין כל מערך כלשהו בן $n$ איברים בסיבוכיות הזו וזו סתירה לחסם תחתון שלמדנו.\n\n**איך נמיין מערך כלשהו בן $n$ איברים?**\nאפשרות אחת – ניקח מערך בן $n$ איברים שכל ערך מופיע פעם אחת בלבד. מערך זה מקיים את התנאי כי מופיע אחד קטן מ-$3$ מופעים לכל ערך. אז אם נמיין אותו בזמן קטן ממש מ-$n \\log n$ אז זו סתירה לחסם תחתון.\n\nאפשרות שניה – ניקח מערך בן $n$ איברים שבו כל ערך מופיע פעם אחת בלבד, נעבור עליו ונכפיל כל ערך כך שיופיע $3$ פעמים, ואז נמיין את המערך בזמן קטן ממש מ-$n \\log n$ ואז נמחק את כל המופעים המיותרים, ונקבל מיון של המערך המקורי בזמן קטן מ-$n \\log n$ שזו סתירה לחסם התחתון שלמדנו בכיתה.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 12.5,
   "part": "א",
   "rubric": [
    {
     "text": "קביעה ששלומית צודקת: חסם תחתון $\\Omega(n \\log n)$",
     "points": 2.5,
     "html": "קביעה ששלומית צודקת: חסם תחתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log n)</annotation></semantics></math></span>"
    },
    {
     "text": "הוכחה בשלילה: מיון בזמן $o(n \\log n)$ של מערכים בעלי התכונה הנתונה",
     "points": 3,
     "html": "הוכחה בשלילה: מיון בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>o</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">o(n \\log n)</annotation></semantics></math></span> של מערכים בעלי התכונה הנתונה"
    },
    {
     "text": "רדוקציה: מערך של מפתחות שונים (כל ערך פעם אחת) מקיים את התנאי, או מכפילים כל ערך ל-$3$ מופעים",
     "points": 4,
     "html": "רדוקציה: מערך של מפתחות שונים (כל ערך פעם אחת) מקיים את התנאי, או מכפילים כל ערך ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> מופעים"
    },
    {
     "text": "סתירה לחסם התחתון של מיון מבוסס השוואות",
     "points": 3,
     "html": "סתירה לחסם התחתון של מיון מבוסס השוואות"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לטעות ולהשתמש במיון מניה: טווח המפתחות אינו חסום, ולכן אין הצדקה לזמן לינארי.",
    "להוכיח רק למערכים עם מפתחות שונים בלי לציין שהם מקיימים את התנאי, או להכפיל ל-$4$ מופעים ולהפר את התנאי."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "האם שלומית צודקת בטענה לחסם תחתון $\\Omega(n \\log n)$?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "כן, צודקת",
       "html": "כן, צודקת"
      },
      {
       "id": "b",
       "type": "text",
       "value": "לא, אפשר למיין בזמן לינארי",
       "html": "לא, אפשר למיין בזמן לינארי"
      },
      {
       "id": "c",
       "type": "text",
       "value": "לא, אפשר $O(\\log n)$",
       "html": "לא, אפשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "תלוי בערכי המערך",
       "html": "תלוי בערכי המערך"
      }
     ],
     "correctId": "a",
     "explain": "טווח המספרים אינו נתון, ולכן זה כמו מיון מבוסס השוואות רגיל.",
     "promptHtml": "האם שלומית צודקת בטענה לחסם תחתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log n)</annotation></semantics></math></span>?",
     "explainHtml": "טווח המספרים אינו נתון, ולכן זה כמו מיון מבוסס השוואות רגיל."
    },
    {
     "type": "choice",
     "prompt": "באיזו שיטת הוכחה משתמשים?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "בשלילה, דרך רדוקציה מבעיית המיון הכללית",
       "html": "בשלילה, דרך רדוקציה מבעיית המיון הכללית"
      },
      {
       "id": "b",
       "type": "text",
       "value": "אינדוקציה על $n$",
       "html": "אינדוקציה על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "מיון מניה",
       "html": "מיון מניה"
      },
      {
       "id": "d",
       "type": "text",
       "value": "משפט האב",
       "html": "משפט האב"
      }
     ],
     "correctId": "a",
     "explain": "מניחים מיון מהיר ל-$o(n \\log n)$ ומסיקים מיון מהיר מדי לבעיה הכללית.",
     "promptHtml": "באיזו שיטת הוכחה משתמשים?",
     "explainHtml": "מניחים מיון מהיר ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>o</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">o(n \\log n)</annotation></semantics></math></span> ומסיקים מיון מהיר מדי לבעיה הכללית."
    },
    {
     "type": "numeric",
     "prompt": "מכפילים כל ערך של מערך בן $7$ מפתחות שונים כך שיופיע $3$ פעמים. מהו גודל המערך החדש?",
     "answer": 21,
     "tol": 0,
     "explain": "$3 \\cdot 7 = 21$; כל ערך מופיע $3$ פעמים בדיוק, ולכן התנאי מתקיים (נבדק בקוד).",
     "promptHtml": "מכפילים כל ערך של מערך בן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> מפתחות שונים כך שיופיע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> פעמים. מהו גודל המערך החדש?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mn>7</mn><mo>=</mo><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">3 \\cdot 7 = 21</annotation></semantics></math></span>; כל ערך מופיע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> פעמים בדיוק, ולכן התנאי מתקיים (נבדק בקוד)."
    },
    {
     "type": "order",
     "prompt": "סדרו את ההוכחה.",
     "lines": [
      "נניח בשלילה שאפשר למיין מערך שמקיים את התנאי בזמן $o(n \\log n)$.",
      "ניקח מערך כלשהו בן $n$ איברים שבו כל ערך מופיע פעם אחת בלבד.",
      "נכפיל כל ערך כך שיופיע $3$ פעמים; המערך החדש מקיים את התנאי.",
      "נמיין אותו בזמן $o(n \\log n)$ ונמחק את המופעים המיותרים.",
      "קיבלנו מיון של המערך המקורי בזמן $o(n \\log n)$, סתירה לחסם התחתון."
     ],
     "explain": "הרדוקציה הופכת מיון מהיר של מערכים כאלה למיון כללי מהיר.",
     "promptHtml": "סדרו את ההוכחה.",
     "explainHtml": "הרדוקציה הופכת מיון מהיר של מערכים כאלה למיון כללי מהיר.",
     "linesHtml": [
      "נניח בשלילה שאפשר למיין מערך שמקיים את התנאי בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>o</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">o(n \\log n)</annotation></semantics></math></span>.",
      "ניקח מערך כלשהו בן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים שבו כל ערך מופיע פעם אחת בלבד.",
      "נכפיל כל ערך כך שיופיע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> פעמים; המערך החדש מקיים את התנאי.",
      "נמיין אותו בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>o</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">o(n \\log n)</annotation></semantics></math></span> ונמחק את המופעים המיותרים.",
      "קיבלנו מיון של המערך המקורי בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>o</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">o(n \\log n)</annotation></semantics></math></span>, סתירה לחסם התחתון."
     ]
    },
    {
     "type": "findbug",
     "prompt": "בגרסה הבאה של ההוכחה שורה אחת שונתה והיא שגויה. מצאו אותה.",
     "lines": [
      "נניח בשלילה שאפשר למיין מערך שמקיים את התנאי בזמן $o(n \\log n)$.",
      "ניקח מערך כלשהו בן $n$ איברים שבו כל ערך מופיע פעם אחת בלבד.",
      "נכפיל כל ערך כך שיופיע $4$ פעמים; המערך החדש מקיים את התנאי.",
      "נמיין אותו בזמן $o(n \\log n)$ ונמחק את המופעים המיותרים.",
      "קיבלנו מיון של המערך המקורי בזמן $o(n \\log n)$, סתירה לחסם התחתון."
     ],
     "bugIndex": 2,
     "explain": "ארבעה מופעים מפרים את התנאי (לכל היותר שלושה), ולכן המערך אינו מהסוג שהנחנו עליו מיון מהיר.",
     "promptHtml": "בגרסה הבאה של ההוכחה שורה אחת שונתה והיא שגויה. מצאו אותה.",
     "explainHtml": "ארבעה מופעים מפרים את התנאי (לכל היותר שלושה), ולכן המערך אינו מהסוג שהנחנו עליו מיון מהיר.",
     "linesHtml": [
      "נניח בשלילה שאפשר למיין מערך שמקיים את התנאי בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>o</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">o(n \\log n)</annotation></semantics></math></span>.",
      "ניקח מערך כלשהו בן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים שבו כל ערך מופיע פעם אחת בלבד.",
      "נכפיל כל ערך כך שיופיע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> פעמים; המערך החדש מקיים את התנאי.",
      "נמיין אותו בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>o</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">o(n \\log n)</annotation></semantics></math></span> ונמחק את המופעים המיותרים.",
      "קיבלנו מיון של המערך המקורי בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>o</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">o(n \\log n)</annotation></semantics></math></span>, סתירה לחסם התחתון."
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q4a",
   "partKey": "a",
   "examCode": "25S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ה, מועד א (20.10.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "נתון מערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> של מספרים טבעיים עם התכונה הבאה:<br><br>כל אחד מהמפתחות במערך, מופיע בו שלוש פעמים לכל היותר.<br><br>שלומית טוענת כי ישנו חסם תחתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log n)</annotation></semantics></math></span> לבעיית המיון של מערך כזה.<br><br>האם שלומית צודקת בטענתה? אם כן הוכיחו את הטענה, אחרת הראו אלגוריתם יעיל יותר למיון המערך, הסבירו אותו ונתחו את סיבוכיותו.",
   "solutionHtml": "<strong>הסבר למה צריך להוכיח בסעיף הזה:</strong><br>לא ניתן להסיק מהנתונים לגבי טווח של המספרים, לכן זה בעצם כמו מיון רגיל מבוסס השוואות שלוקח לפי המשפט שלמדנו לפחות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n \\log n</annotation></semantics></math></span> ולכן זו הוכחה.<br>ניתן כמובן למצוא מה הטווח ע\"י מעבר על המספרים ומציאת המינימלי והמקסימלי, אבל אם הטווח לא קטן ממש מסדר גודל של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n \\log n</annotation></semantics></math></span> אז מיון מניה לא יהיה יעיל יותר ממיון מבוסס השוואות.<br>מיון מניה יוצא יעיל רק כאשר טווח המספרים הוא בסדר גודל של כמות האיברים למיון למשל, ובכל מקרה לכל היותר סדר גודל שעדיין קטן ממש מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n \\log n</annotation></semantics></math></span>.<br><br><strong>הוכחה:</strong><br>נניח בשלילה שניתן למיין מערך בן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים שמקיים את התנאי הנתון בסדר גודל <strong>קטן ממש</strong> מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n \\log n</annotation></semantics></math></span> (כלומר בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>o</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">o(n \\log n)</annotation></semantics></math></span>), ונראה שניתן למיין כל מערך כלשהו בן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים בסיבוכיות הזו וזו סתירה לחסם תחתון שלמדנו.<br><br><strong>איך נמיין מערך כלשהו בן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים?</strong><br>אפשרות אחת – ניקח מערך בן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים שכל ערך מופיע פעם אחת בלבד. מערך זה מקיים את התנאי כי מופיע אחד קטן מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> מופעים לכל ערך. אז אם נמיין אותו בזמן קטן ממש מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n \\log n</annotation></semantics></math></span> אז זו סתירה לחסם תחתון.<br><br>אפשרות שניה – ניקח מערך בן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים שבו כל ערך מופיע פעם אחת בלבד, נעבור עליו ונכפיל כל ערך כך שיופיע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> פעמים, ואז נמיין את המערך בזמן קטן ממש מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n \\log n</annotation></semantics></math></span> ואז נמחק את כל המופעים המיותרים, ונקבל מיון של המערך המקורי בזמן קטן מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n \\log n</annotation></semantics></math></span> שזו סתירה לחסם התחתון שלמדנו בכיתה.",
   "pointsTotal": 12.5,
   "pitfallsHtml": [
    "לטעות ולהשתמש במיון מניה: טווח המפתחות אינו חסום, ולכן אין הצדקה לזמן לינארי.",
    "להוכיח רק למערכים עם מפתחות שונים בלי לציין שהם מקיימים את התנאי, או להכפיל ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> מופעים ולהפר את התנאי."
   ]
  },
  {
   "num": 4,
   "kind": "algorithm",
   "topic": "sorting_selection",
   "question": "נתון מערך $A$ בגודל $n$ של מספרים טבעיים עם התכונה הבאה:\n\nהערך המוחלט של ההפרש בין כל שני איברים סמוכים במערך הוא שלוש לכל היותר.\n\nבני טוען כי ישנו חסם תחתון $\\Omega(n \\log n)$ לבעיית המיון של מערך כזה.\n\nהאם בני צודק בטענתו? אם כן הוכיחו את הטענה, אחרת הראו אלגוריתם יעיל יותר למיון המערך, הסבירו אותו ונתחו את סיבוכיותו.",
   "solution": "הסעיף הזה שונה כי אם הערכים של המערך מקיימים את התנאי אז ההפרש בין הערך המקסימלי במערך למינימלי במערך הוא לכל היותר $3n$.\nאז הטווח שלנו הוא $3n$ ולכן ניתן להשתמש במיון מניה כך שזמן המיון יהיה לינארי, ולא יהיה צורך במיון מבוסס השוואות.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 12.5,
   "part": "ב",
   "rubric": [
    {
     "text": "קביעה שבני אינו צודק: אפשר למיין ביעילות רבה יותר",
     "points": 2.5,
     "html": "קביעה שבני אינו צודק: אפשר למיין ביעילות רבה יותר"
    },
    {
     "text": "הפרש כל זוג סמוכים לכל היותר $3$, ולכן ההפרש בין המקסימום למינימום לכל היותר $3n$",
     "points": 4,
     "html": "הפרש כל זוג סמוכים לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>, ולכן ההפרש בין המקסימום למינימום לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">3n</annotation></semantics></math></span>"
    },
    {
     "text": "שימוש במיון מניה על טווח בגודל $O(n)$",
     "points": 3,
     "html": "שימוש במיון מניה על טווח בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    },
    {
     "text": "סיבוכיות לינארית $O(n)$",
     "points": 3,
     "html": "סיבוכיות לינארית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לטעון שחסם $\\Omega(n \\log n)$ חל כאן: החסם מניח השוואות בלבד, ופה הטווח קטן.",
    "להשתמש במיון מניה בלי להסביר שהטווח הוא $O(n)$."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "האם בני צודק בטענה לחסם תחתון $\\Omega(n \\log n)$?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "לא, אפשר למיין בזמן לינארי",
       "html": "לא, אפשר למיין בזמן לינארי"
      },
      {
       "id": "b",
       "type": "text",
       "value": "כן, צודק",
       "html": "כן, צודק"
      },
      {
       "id": "c",
       "type": "text",
       "value": "לא, אפשר $O(\\log n)$",
       "html": "לא, אפשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "תלוי בגודל המערך",
       "html": "תלוי בגודל המערך"
      }
     ],
     "correctId": "a",
     "explain": "התכונה חוסמת את הטווח, ולכן מיון מניה מתאים.",
     "promptHtml": "האם בני צודק בטענה לחסם תחתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log n)</annotation></semantics></math></span>?",
     "explainHtml": "התכונה חוסמת את הטווח, ולכן מיון מניה מתאים."
    },
    {
     "type": "numeric",
     "prompt": "במערך בן $6$ איברים שבו ההפרש בין שכנים הוא לכל היותר $3$, מהו ההפרש הגדול ביותר האפשרי בין המקסימום למינימום?",
     "answer": 15,
     "tol": 0,
     "explain": "יש $5$ זוגות סמוכים, כל אחד תורם עד $3$: $15$, שהוא קטן מ-$3n=18$ (נבדק בבדיקה ממצה).",
     "promptHtml": "במערך בן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span> איברים שבו ההפרש בין שכנים הוא לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>, מהו ההפרש הגדול ביותר האפשרי בין המקסימום למינימום?",
     "explainHtml": "יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> זוגות סמוכים, כל אחד תורם עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">15</annotation></semantics></math></span>, שהוא קטן מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mi>n</mi><mo>=</mo><mn>18</mn></mrow><annotation encoding=\"application/x-tex\">3n=18</annotation></semantics></math></span> (נבדק בבדיקה ממצה)."
    },
    {
     "type": "choice",
     "prompt": "איזה אלגוריתם מיון מתאים?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "מיון מניה",
       "html": "מיון מניה"
      },
      {
       "id": "b",
       "type": "text",
       "value": "מיון מיזוג",
       "html": "מיון מיזוג"
      },
      {
       "id": "c",
       "type": "text",
       "value": "מיון ערימה",
       "html": "מיון ערימה"
      },
      {
       "id": "d",
       "type": "text",
       "value": "מיון מהיר",
       "html": "מיון מהיר"
      }
     ],
     "correctId": "a",
     "explain": "טווח הערכים הוא $O(n)$, ולכן מיון מניה רץ בזמן לינארי.",
     "promptHtml": "איזה אלגוריתם מיון מתאים?",
     "explainHtml": "טווח הערכים הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>, ולכן מיון מניה רץ בזמן לינארי."
    },
    {
     "type": "text",
     "prompt": "מהי סיבוכיות המיון?",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "מיון מניה על טווח בגודל $O(n)$ לוקח $O(n)$ (נבדק: המיון נכון והטווח קטן מ-$3n$).",
     "promptHtml": "מהי סיבוכיות המיון?",
     "explainHtml": "מיון מניה על טווח בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> לוקח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> (נבדק: המיון נכון והטווח קטן מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">3n</annotation></semantics></math></span>)."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q4b",
   "partKey": "b",
   "examCode": "25S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ה, מועד א (20.10.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "מיונים, חסם תחתון ובחירה",
   "questionHtml": "נתון מערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> של מספרים טבעיים עם התכונה הבאה:<br><br>הערך המוחלט של ההפרש בין כל שני איברים סמוכים במערך הוא שלוש לכל היותר.<br><br>בני טוען כי ישנו חסם תחתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log n)</annotation></semantics></math></span> לבעיית המיון של מערך כזה.<br><br>האם בני צודק בטענתו? אם כן הוכיחו את הטענה, אחרת הראו אלגוריתם יעיל יותר למיון המערך, הסבירו אותו ונתחו את סיבוכיותו.",
   "solutionHtml": "הסעיף הזה שונה כי אם הערכים של המערך מקיימים את התנאי אז ההפרש בין הערך המקסימלי במערך למינימלי במערך הוא לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">3n</annotation></semantics></math></span>.<br>אז הטווח שלנו הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">3n</annotation></semantics></math></span> ולכן ניתן להשתמש במיון מניה כך שזמן המיון יהיה לינארי, ולא יהיה צורך במיון מבוסס השוואות.",
   "pointsTotal": 12.5,
   "pitfallsHtml": [
    "לטעון שחסם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega(n \\log n)</annotation></semantics></math></span> חל כאן: החסם מניח השוואות בלבד, ופה הטווח קטן.",
    "להשתמש במיון מניה בלי להסביר שהטווח הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
   ]
  },
  {
   "num": 5,
   "kind": "truefalse",
   "topic": "union_find",
   "question": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), **ללא נימוק**.\n\nמשתמשים במבנה נתונים לייצוג קבוצות זרות בייצוג ע\"י עצים הפוכים עם קיצור מסלולים. האם ייתכן שסדרה של פעולות `makeset`, `union`, `find` יכולה לייצור קבוצה בה 16 איברים וגובה העץ המייצג את הקבוצה הוא $3$.",
   "solution": "נכון.\n\nבפתרון הרשמי מצויר עץ הפוך עם $10$ איברים (השורש $1$; מצביעים אליו $10, 9, 2, 3, 5$; $4$ מצביע ל-$3$; $6$ ו-$7$ מצביעים ל-$5$; $8$ מצביע ל-$7$), שגובהו $3$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "part": "א",
   "verdict": true,
   "pitfalls": [
    "לחשוב שקיצור מסלולים מונע לחלוטין עץ גבוה: הגובה מתקצר רק במסלולים שהופעלו בהם `find`."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "בעץ ההפוך שבפתרון הרשמי: השורש $1$; $10, 9, 2, 3, 5$ מצביעים אליו; $4$ מצביע ל-$3$; $6$ ו-$7$ מצביעים ל-$5$; $8$ מצביע ל-$7$. מה גובה העץ?",
     "answer": 3,
     "tol": 0,
     "explain": "המסלול הארוך ביותר: $8 \\to 7 \\to 5 \\to 1$, שלוש צלעות.",
     "promptHtml": "בעץ ההפוך שבפתרון הרשמי: השורש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>; <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo separator=\"true\">,</mo><mn>9</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">10, 9, 2, 3, 5</annotation></semantics></math></span> מצביעים אליו; <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> מצביע ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>; <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> מצביעים ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>; <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> מצביע ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span>. מה גובה העץ?",
     "explainHtml": "המסלול הארוך ביותר: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn><mo>→</mo><mn>7</mn><mo>→</mo><mn>5</mn><mo>→</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">8 \\to 7 \\to 5 \\to 1</annotation></semantics></math></span>, שלוש צלעות."
    },
    {
     "type": "numeric",
     "prompt": "כמה איברים יש בעץ הזה?",
     "answer": 10,
     "tol": 0,
     "explain": "האיברים: $1, 2, 3, 4, 5, 6, 7, 8, 9, 10$.",
     "promptHtml": "כמה איברים יש בעץ הזה?",
     "explainHtml": "האיברים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>9</mn><mo separator=\"true\">,</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">1, 2, 3, 4, 5, 6, 7, 8, 9, 10</annotation></semantics></math></span>."
    },
    {
     "type": "choice",
     "prompt": "איך מגיעים ל-$16$ איברים בלי להגדיל את גובה העץ?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "מאחדים לשורש עוד $6$ איברים בודדים, וכל אחד נתלה ישירות מתחת לשורש",
       "html": "מאחדים לשורש עוד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span> איברים בודדים, וכל אחד נתלה ישירות מתחת לשורש"
      },
      {
       "id": "b",
       "type": "text",
       "value": "מוסיפים שרשרת באורך $6$ מתחת ל-$8$",
       "html": "מוסיפים שרשרת באורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span> מתחת ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "מחברים את השורש לאיבר נוסף מעליו",
       "html": "מחברים את השורש לאיבר נוסף מעליו"
      },
      {
       "id": "d",
       "type": "text",
       "value": "אי אפשר",
       "html": "אי אפשר"
      }
     ],
     "correctId": "a",
     "explain": "עלים שנתלים מתחת לשורש הם בעומק $1$, ולכן הגובה נשאר $3$ ויש $16$ איברים (נבדק בקוד).",
     "promptHtml": "איך מגיעים ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16</annotation></semantics></math></span> איברים בלי להגדיל את גובה העץ?",
     "explainHtml": "עלים שנתלים מתחת לשורש הם בעומק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>, ולכן הגובה נשאר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> ויש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16</annotation></semantics></math></span> איברים (נבדק בקוד)."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q5a",
   "partKey": "a",
   "examCode": "25S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ה, מועד א (20.10.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "קבוצות זרות",
   "questionHtml": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), <strong>ללא נימוק</strong>.<br><br>משתמשים במבנה נתונים לייצוג קבוצות זרות בייצוג ע\"י עצים הפוכים עם קיצור מסלולים. האם ייתכן שסדרה של פעולות <code class=\"tok\" dir=\"ltr\">makeset</code>, <code class=\"tok\" dir=\"ltr\">union</code>, <code class=\"tok\" dir=\"ltr\">find</code> יכולה לייצור קבוצה בה 16 איברים וגובה העץ המייצג את הקבוצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>.",
   "solutionHtml": "נכון.<br><br>בפתרון הרשמי מצויר עץ הפוך עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span> איברים (השורש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>; מצביעים אליו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo separator=\"true\">,</mo><mn>9</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">10, 9, 2, 3, 5</annotation></semantics></math></span>; <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> מצביע ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>; <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span> מצביעים ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>; <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> מצביע ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span>), שגובהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>.",
   "pointsTotal": 0,
   "pitfallsHtml": [
    "לחשוב שקיצור מסלולים מונע לחלוטין עץ גבוה: הגובה מתקצר רק במסלולים שהופעלו בהם <code class=\"tok\" dir=\"ltr\">find</code>."
   ]
  },
  {
   "num": 5,
   "kind": "truefalse",
   "topic": "hashing",
   "question": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), **ללא נימוק**.\n\nעבור גיבוב בשיטת הקוקייה, הוצאת אלמנט והכנסתו מחדש מייד אחרי הוצאתו תמיד תביא את מבנה הנתונים בדיוק למצב שהיה בו לפני שתי פעולות אלה.",
   "solution": "לא נכון.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "part": "ב",
   "verdict": false,
   "id": "25S-A-Q5b",
   "partKey": "b",
   "examCode": "25S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ה, מועד א (20.10.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "טבלאות גיבוב",
   "questionHtml": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), <strong>ללא נימוק</strong>.<br><br>עבור גיבוב בשיטת הקוקייה, הוצאת אלמנט והכנסתו מחדש מייד אחרי הוצאתו תמיד תביא את מבנה הנתונים בדיוק למצב שהיה בו לפני שתי פעולות אלה.",
   "solutionHtml": "לא נכון.",
   "pointsTotal": 0
  },
  {
   "num": 5,
   "kind": "truefalse",
   "topic": "recurrences",
   "question": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), **ללא נימוק**.\n\nזמן הריצה של אלגוריתם כלשהו נתון כך: $T(n) = T(\\frac{n}{3}) + T(\\frac{n}{2}) + n$\n\nאזי: $T(n) = \\Theta(n)$",
   "solution": "נכון.\n\nבפתרון הרשמי מצויר תחילת עץ הרקורסיה: השורש $n$, ובניו $n/3$ ו-$n/2$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "part": "ג",
   "verdict": true,
   "pitfalls": [
    "להחיל את משפט האב על נוסחה עם שני גדלי תת-בעיות שונים ($n/3$ ו-$n/2$).",
    "לחשוב שבגלל שני האיברים הרקורסיביים התוצאה היא $n \\log n$."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "בעץ הרקורסיה של $T(n) = T(n/3) + T(n/2) + n$, השורש הוא $n$ ובניו $n/3$ ו-$n/2$. כמה הוא סכום ערכי הבנים כחלק מ-$n$? (ענו כמספר עשרוני)",
     "answer": 0.8333,
     "tol": 0.001,
     "explain": "$1/3 + 1/2 = 5/6$.",
     "promptHtml": "בעץ הרקורסיה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>3</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">T(n) = T(n/3) + T(n/2) + n</annotation></semantics></math></span>, השורש הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> ובניו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n/3</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n/2</annotation></semantics></math></span>. כמה הוא סכום ערכי הבנים כחלק מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>? (ענו כמספר עשרוני)",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mi mathvariant=\"normal\">/</mi><mn>3</mn><mo>+</mo><mn>1</mn><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo>=</mo><mn>5</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">1/3 + 1/2 = 5/6</annotation></semantics></math></span>."
    },
    {
     "type": "choice",
     "prompt": "מה משמעות הסכום $5/6 < 1$?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "סכום כל רמה קטן ב-$5/6$ מקודמתה, ולכן הסכום הכולל סדרה הנדסית מתכנסת בסדר $n$",
       "html": "סכום כל רמה קטן ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">5/6</annotation></semantics></math></span> מקודמתה, ולכן הסכום הכולל סדרה הנדסית מתכנסת בסדר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "כל רמה גדולה מקודמתה, ולכן $n \\log n$",
       "html": "כל רמה גדולה מקודמתה, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n \\log n</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "כל הרמות שוות, ולכן $n \\log n$",
       "html": "כל הרמות שוות, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n \\log n</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "אי אפשר לדעת",
       "html": "אי אפשר לדעת"
      }
     ],
     "correctId": "a",
     "explain": "הסכום הוא $n \\cdot (1 + 5/6 + (5/6)^2 + \\dots) = 6n$, כלומר $\\Theta(n)$ (גם נבדק מספרית).",
     "promptHtml": "מה משמעות הסכום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo>&lt;</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">5/6 &lt; 1</annotation></semantics></math></span>?",
     "explainHtml": "הסכום הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>⋅</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>+</mo><mn>5</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo>+</mo><mo stretchy=\"false\">(</mo><mn>5</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup><mo>+</mo><mo>…</mo><mtext> </mtext><mo stretchy=\"false\">)</mo><mo>=</mo><mn>6</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n \\cdot (1 + 5/6 + (5/6)^2 + \\dots) = 6n</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n)</annotation></semantics></math></span> (גם נבדק מספרית)."
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגדילה של $T(n)$?",
     "accept": [
      "O(n)",
      "Θ(n)"
     ],
     "normalize": "complexity",
     "explain": "סדרה הנדסית עם מנה $5/6$ נותנת $\\Theta(n)$.",
     "promptHtml": "מהו סדר הגדילה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n)</annotation></semantics></math></span>?",
     "explainHtml": "סדרה הנדסית עם מנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">5/6</annotation></semantics></math></span> נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Theta(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q5c",
   "partKey": "c",
   "examCode": "25S-A",
   "examLabel": "מבני נתונים, סמסטר קיץ תשפ\"ה, מועד א (20.10.25)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה ומשפט האב",
   "questionHtml": "בשאלה זאת 3 סעיפים, יש לסמן נכון או לא נכון בכל סעיף (על ידי הקפת התשובה), <strong>ללא נימוק</strong>.<br><br>זמן הריצה של אלגוריתם כלשהו נתון כך: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>T</mi><mo stretchy=\"false\">(</mo><mfrac><mi>n</mi><mn>3</mn></mfrac><mo stretchy=\"false\">)</mo><mo>+</mo><mi>T</mi><mo stretchy=\"false\">(</mo><mfrac><mi>n</mi><mn>2</mn></mfrac><mo stretchy=\"false\">)</mo><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">T(n) = T(\\frac{n}{3}) + T(\\frac{n}{2}) + n</annotation></semantics></math></span><br><br>אזי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T(n) = \\Theta(n)</annotation></semantics></math></span>",
   "solutionHtml": "נכון.<br><br>בפתרון הרשמי מצויר תחילת עץ הרקורסיה: השורש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, ובניו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n/3</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n/2</annotation></semantics></math></span>.",
   "pointsTotal": 0,
   "pitfallsHtml": [
    "להחיל את משפט האב על נוסחה עם שני גדלי תת-בעיות שונים (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n/3</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n/2</annotation></semantics></math></span>).",
    "לחשוב שבגלל שני האיברים הרקורסיביים התוצאה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n \\log n</annotation></semantics></math></span>."
   ]
  }
 ]
};
