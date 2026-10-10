import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

assert.match(html, /Mirroring the Past/i, 'paper title is present');
assert.match(html, /Ancestral Digital Self/i, 'core concept is present');
assert.match(html, /Digital Self/i, 'digital-self condition is present');
assert.match(html, /Neutral Agent/i, 'neutral condition is present');
assert.match(html, /N\s*=\s*36/i, 'participant count is present');
assert.equal((html.match(/class="scene-card"/g) || []).length, 5, 'five scene cards are rendered');
assert.match(html, /aria-label="上一个生活场景"/, 'previous scene control has an accessible name');
assert.match(html, /aria-label="下一个生活场景"/, 'next scene control has an accessible name');
assert.match(html, /prefers-reduced-motion:\s*reduce/, 'reduced motion is supported');
assert.match(html, /pointerdown/, 'pointer drag is implemented');
assert.match(html, /scrollBy/, 'button navigation is implemented');
assert.doesNotMatch(html, /<header class="site-header"/, 'top navigation header is removed');
assert.doesNotMatch(html, /<nav\b/, 'top navigation is removed');
assert.match(html, /<video[^>]+class="hero-video"[^>]*controls[^>]*>/, 'main video has native controls');
assert.match(html, /<source src="assets\/ubicomp\.mp4" type="video\/mp4">/, 'main video uses the supplied MP4');

const titlePosition = html.indexOf('id="page-title"');
const videoPosition = html.indexOf('class="hero-video"');
assert.ok(titlePosition >= 0 && videoPosition > titlePosition, 'main video follows the paper title');
assert.match(html, /UbiComp \/ ISWC 2026 · Poster/, 'opening label matches the conference poster wording');
assert.match(html, /Duo Gong\*, Fan Sun\*, Yucen Wang, Yufan Hu, Wen Zhong, Wei Zhang, Pengcheng An†/, 'complete author list is shown');
assert.match(html, /text-wrap:\s*balance/, 'desktop title uses balanced responsive wrapping');
assert.doesNotMatch(html, /\.hero h1 span\s*\{[^}]*display:\s*block/s, 'title words are not forced onto separate lines');

console.log('site structure: 20 checks passed');
