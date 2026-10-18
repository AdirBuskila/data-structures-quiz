# STATUS - data-structures

Resume here: phase 7 - ship (awaiting Adir). QA passed 2026-10-18; gate 3 and the deck redesign check are still open.
Opus sessions: not tracked in this file (solver runs for the no-key items are in git history; the orchestrator holds the count)
Engine: open   Format: mixed (open + MCQ + true/false)   Cutoff: 2019 onward (24 sittings, 19B-A to 25S-B, plus the SAMP-1 sample)

Triage material (private, names students, never copied into this repo): C:\Users\Adir\Desktop\Coding\Dev\course-factory\courses\data-structures\format_triage.md

Gates 1, 2 and 7 always stop for Adir. No approval from Adir is recorded in this repo for gates 1 and 2, so those two boxes stay open.

- [x] Phase 0 - intake
  - [x] registry entry exists (`registry.py list`: data-structures, open)
  - [x] source folder exists and is non-empty (24 transcribed sittings in tools/raw)
- [ ] Phase 1 - triage  (GATE 1: Adir approves format, cutoff, topics)
  - [x] triager run per subfolder (factory `courses/data-structures/triage/`)
  - [x] format_triage.md merged (factory `courses/data-structures/format_triage.md`; GATE1.md is marked PROPOSAL)
  - [ ] Adir approved (no recorded approval)
  - [x] config.overlay.json written, app repo scaffolded (commit c382eff)
- [ ] Phase 2 - flagship  (GATE 2: Adir tries it in the browser)
  - [x] topic taxonomy chosen (11 topics in course.config.json)
  - [x] flagship sitting transcribed + validated (25S-A: 13 items; tools/verify/25S-A)
  - [x] steps (if open questions) + refuter pass (tools/raw/_verify_25S-A.json)
  - [x] verify_dom green, running locally (the mcq smoke test does not apply to the open engine)
  - [ ] Adir tried it
- [x] Phase 3 - bank
  - [x] all in-scope sittings transcribed (24 gen_*.py and tools/raw/*.json; 372 items in the bank)
  - [x] validate.py clean (PROBLEMS (0))
  - [x] solver run for questions with no trustworthy solution (24B-A/24B-B/24S-A Q13, 25B-C, 25S-B, 22B-B, 19B-B Q1a, SAMP-1 Q3b; tools/verify/*/solve_*.py)
  - [x] refuter: non-official all; official 20% sample (24 `_verify_*.json` verdicts in tools/raw)
  - [x] arbiter / ASK_ADIR for disagreements (rulings in git history; open items in ASK_ADIR.md)
  - [x] completeness check per exam (per-sitting counts in tools/build_report.md; 1 item held: 22S-C-Q3b)
- [ ] Phase 4 - steps
  - [ ] step-author batches done for every open question (4 open items still have no guided steps: 19B-B-Q2b, 23A-A-Q5a, 23S-A-Q3c, 23S-A-Q5a)
  - [x] rubricSource / stepsSource labeled (build_report: ai-draft parts stripped: 0; every open item has a rubric)
  - [x] refuter on every steps block (verdict files + tools/verify/<CODE>/steps_verify.py)
- [x] Phase 5 - learn
  - [x] learn-writer per topic (12 chapters from docs/briefs, learn.js built)
  - [x] coverage report: no gaps (docs/learn_coverage.md, re-passed against the full 372-item bank in QA; sections added to briefs 03 and 11)
- [x] Phase 5b - need help
  - [x] 4 course areas in course.config.json `needHelp` (recurrences, avl, hashing, heaps)
  - [x] lessons + coverage table complete, step questions with bankId pulls (courses/<id>/C01..C08.js, 33 levels, 197 questions)
  - [x] course_lint.js --strict clean (0 errors), refuter clean (tools/verify/needhelp/*/refute.json and check.py), levels ai-verified
  - [x] tools/redact.txt filled (52 names), validate.py clean
- [x] Phase 6 - QA
  - [x] validate, build_questions, build_learn, build_courses, verify_dom, verify_learn, course_lint --strict, test_aiprompt, test_normalize, test_bidi green (smoke.js is mcq-engine only)
  - [x] shoot.js screenshots taken (76 shots, 390px and 1000px, both themes; overflow none, clipped math none, errors none)
  - [x] sweep done by the QA agent itself (no separate render-checker run); fixes are in the QA commit message
- [ ] Phase 7 - ship  (GATE 3: Adir OKs going public)
  - [ ] deck redesign done (else stop and tell Adir)
  - [x] .gitignore excludes raw PNGs, favicon.svg linked, GoatCounter in index.html, .nojekyll present
  - [ ] year range checked against data (no year range is advertised on the page; recheck README/OG text when shipping)
  - [ ] Adir OK to go public
  - [ ] GitHub repo + Pages live
  - [ ] deck tile added
  - [ ] registry status = live (registry still says `triaged`; the orchestrator updates it)

## Notes
- Counts (2026-10-18 QA): 372 items from 24 sittings, 1 held. Kinds: computation 57, proof 51, algorithm 87, mcq 123, truefalse 54.
- Open data questions: ASK_ADIR.md (short list at the top).
