// Prints the heaps course levels (courses/heaps/C0N.js) as JSON, for check.py. ASCII output only.
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "..", "..", "..", "..", "courses", "heaps");
const out = [];
global.COURSE_LEVEL = (course, lvl) => out.push(lvl);
for (const f of fs.readdirSync(dir).filter(f => /^C\d+\.js$/.test(f)).sort()) {
  new Function(fs.readFileSync(path.join(dir, f), "utf8"))();
}
process.stdout.write(JSON.stringify(out).replace(/[\u007f-￿]/g, c => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0")));
