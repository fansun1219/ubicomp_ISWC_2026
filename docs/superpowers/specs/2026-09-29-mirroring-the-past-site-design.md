# Mirroring the Past Prototype Site — Design Specification

## Purpose

Create a single-page conference exhibit for the paper “Mirroring the Past: Exploring How Ancestral Digital Self Influences History Learning.” The page must quickly communicate the research question, expose two video positions for the Digital Self and Neutral Agent conditions, and let visitors drag through Wubeiling life-scene video placeholders.

## Content constraints

All factual claims and labels come from the supplied paper, Poster, and A2 PDFs. The page may reorganize or shorten source text, but must not invent participants, outcomes, archaeological facts, or research claims. Five life-scene cards are provided; four follow the A2 storyboard and the fifth is a neutral village-at-night placeholder derived from supplied imagery without a new factual claim.

## Technical approach

Use one dependency-free `index.html` with embedded CSS and JavaScript so it can be opened locally at the conference. Place extracted source images in `assets/`. Use responsive semantic HTML, visible focus treatment, reduced-motion support, and a keyboard-accessible drag rail with button alternatives.

## Acceptance criteria

- The page identifies the paper, authors, venue, research question, two prototype conditions, `N = 36`, and the study trade-off accurately.
- Both prototype videos and all five life-scene videos have stable 16:9 placeholders ready for later `<video>` sources.
- The scene rail can be dragged with mouse/pointer and advanced with previous/next buttons.
- The page remains readable at 390 px width and does not rely on hover.
- The page does not make network requests or require a build step.

