# Mirroring the Past — Design Direction

## North Star

Build a QR-first material viewer for conference conversations: visitors should understand the project through its overview film, then browse the Wubeiling scene materials without reading a condensed version of the paper.

## Visual register

- **Obsidian** `#071019`: the dark display field drawn from the A2 presentation board.
- **Night blue** `#0A2742`: depth and section transitions.
- **Time blue** `#168BFF`: the electric accent shared with the research poster.
- **Mist** `#EAF3F7`: primary text and pale atmospheric planes.
- **River cyan** `#7AE0E7`: secondary signal and focus ring.
- **Clay** `#D69758`: a restrained archaeological counter-accent.

Typography uses a sharp condensed display stack for English titles, a highly legible Chinese system stack for body copy, and a compact monospaced utility stack for labels and measurements. The page is dark, cinematic, and precise—never faux-ancient, ornamental, or mystical at the expense of research clarity.

Scene-card English titles use Arial with a natural-proportion, slightly wide and bold display treatment, and remain on one line at every supported width; their responsive size contracts before the text can wrap.

Long English headings stay intact on wide screens and use controlled phrase-level wrapping on narrow screens, avoiding isolated words and three-line title stacks.

## Layout signature

The opening is a direct research-film title sequence: the paper title and metadata lead immediately into the full-width overview film, without global navigation, a photographic hero, or decorative progress indicators. The material path is deliberately short: overview film followed directly by a horizontal strip of Wubeiling life-scene fragments.

## Interaction contract

- All primary interactions use native buttons or links with hover, active, and visible focus states.
- The main film uses Bilibili's embedded player, preserves keyboard-accessible controls, starts with danmaku disabled, does not autoplay, and prevents the player from opening external pages.
- The scene rail supports pointer drag, touch swipe, trackpad scroll, and keyboard navigation without adding visible instructional controls.
- The five Wubeiling scene videos preserve 16:9 geometry and autoplay silently in a continuous inline loop.
- Reduced-motion users receive an immediate, static presentation with scene autoplay paused.
- Copy is sourced only from the supplied paper, Poster, and A2 materials.

## Content hierarchy

1. Research title, authors, venue, and overview film.
2. Wubeiling daily-life scene rail.
3. Compact paper metadata, authors, venue, and DOI footer.
