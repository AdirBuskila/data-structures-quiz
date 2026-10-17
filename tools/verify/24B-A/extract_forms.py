# -*- coding: utf-8 -*-
"""Extract per-form MCQ stems/options and the highlighted (official key) option from the 24B-A PDF."""
import fitz, re, sys, json, collections
PDF = sys.argv[1]
d = fitz.open(PDF)
HL = (0.5607843399047852, 0.8705882430076599, 0.9764705896377563)
def near(c):
    return c and all(abs(a-b) < 0.02 for a, b in zip(c, HL))
forms = []  # list of dict qnum -> {stem, options, key, page}
cur = None
for pi, p in enumerate(d):
    blocks = [b for b in p.get_text("blocks") if b[4].strip()]
    hls = [dr["rect"] for dr in p.get_drawings() if dr["type"] == "f" and near(dr.get("fill"))]
    txt = p.get_text()
    if "מבחן מועד" in txt and "16.7.24" in txt or "מדבקת הבחינה" in txt:
        cur = {}
        forms.append(cur)
        cur["_pages"] = [pi+1]
    elif cur is not None:
        cur["_pages"].append(pi+1)
    if cur is None:
        continue
    blocks.sort(key=lambda b: (round(b[1]), -b[0]))
    q = None
    for b in blocks:
        t = re.sub(r"\s+", " ", b[4]).strip()
        m = re.match(r"^שאלה\s*(\d+)", t)
        if m:
            q = int(m.group(1))
            cur.setdefault(q, {"stem": [], "opts": [], "key": None, "page": pi+1})
            continue
        if q is None: continue
        mo = re.match(r"^([אבגד]) \. ?(.*)$", t)
        hit = any(fitz.Rect(b[:4]).intersects(h) and (min(fitz.Rect(b[:4]).y1,h.y1)-max(fitz.Rect(b[:4]).y0,h.y0))>4 for h in hls)
        if mo:
            cur[q]["opts"].append((mo.group(1), mo.group(2)))
            if hit: cur[q]["key"] = mo.group(1)
        elif "נקודות" in t and len(t) < 30:
            pass
        else:
            cur[q]["stem"].append((t, pi+1, round(b[1])))
out = []
for fi, f in enumerate(forms):
    for q in sorted(k for k in f if isinstance(k, int)):
        e = f[q]
        out.append({"form": fi+1, "q": q, "page": e["page"], "key": e["key"],
                    "stem": " | ".join(s[0] for s in e["stem"]),
                    "opts": e["opts"]})
json.dump(out, open(sys.argv[2], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(forms), "forms;", [ (f["_pages"][0], f["_pages"][-1]) for f in forms])
cnt = collections.Counter((o["form"]) for o in out)
print(cnt)
