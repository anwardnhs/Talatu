import { writeFileSync, mkdirSync } from 'node:fs';
import { investors } from '../../data/investors.js';
import { businesses } from '../../data/businesses.js';
import { board } from '../../data/leadership.js';
import { foundation } from '../../data/foundation.js';
mkdirSync('tmp/pdfs', { recursive: true });
writeFileSync('tmp/pdfs/report-data.json', JSON.stringify({investors,businesses,board,foundation},null,2));
