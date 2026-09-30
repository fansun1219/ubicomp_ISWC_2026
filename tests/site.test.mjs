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

console.log('site structure: 11 checks passed');
