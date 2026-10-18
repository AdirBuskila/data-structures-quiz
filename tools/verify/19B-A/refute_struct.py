import json, sys
sys.stdout.reconfigure(encoding='utf8')
for c in ['19B-A','19B-B','SAMP-1']:
    d = json.load(open(r'C:\Users\Adir\Desktop\Coding\Dev\data-structures-quiz\tools\raw\%s.json' % c, encoding='utf8'))
    for q in d['questions']:
        tag = '%s %s%s' % (c, q['num'], q.get('part'))
        r = q.get('rubric')
        if r:
            s = sum(x['points'] for x in r)
            if q.get('points') is not None and s != q['points']:
                print(tag, 'RUBRIC SUM', s, 'vs points', q['points'])
            elif q.get('points') is None:
                print(tag, 'no points; rubric sum', s)
        for k, st in enumerate(q.get('steps', [])):
            t = st['type']
            if t == 'choice' or t == 'fillblank':
                ids = [o['id'] for o in st['options']]
                if st['correctId'] not in ids: print(tag, 'step', k, 'bad correctId')
            if t == 'findbug':
                print(tag, 'findbug idx', st['bugIndex'], 'of', len(st['lines']))
# min nodes per height under union by size
reach = {(1, 0)}
ch = True
while ch:
    ch = False
    for (s1, h1) in list(reach):
        for (s2, h2) in list(reach):
            if s1 + s2 > 40: continue
            if s1 >= s2:
                o = (s1 + s2, max(h1, h2 + 1))
                if o not in reach: reach.add(o); ch = True
            if s2 >= s1:
                o = (s1 + s2, max(h2, h1 + 1))
                if o not in reach: reach.add(o); ch = True
for h in range(0, 6):
    print('height', h, 'min size', min(s for s, hh in reach if hh == h))
