# Mirroring the Past Prototype Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, standalone conference prototype website from the supplied paper and poster materials.

**Architecture:** A single semantic HTML document contains the content, responsive styles, and small interaction layer. Source-derived images live in `assets/`; no remote dependencies are used.

**Tech Stack:** HTML5, CSS, vanilla JavaScript, Node.js built-in assertions for structural checks.

**Spec:** `docs/superpowers/specs/2026-09-29-mirroring-the-past-site-design.md`

## Global Constraints

- Use only supplied-source factual content.
- Keep video areas as stable placeholders.
- Provide drag and non-drag navigation.
- Respect reduced motion and keyboard focus.

## Review Focus

- Narrow mobile layout must not overflow unintentionally.
- Dragging must not steal ordinary vertical scroll until horizontal intent is clear.
- Arrow buttons must update their disabled state.
- Missing videos must remain honest placeholders.
- Extracted images must include useful alt text.

### Task 1: Structural acceptance test

**Files:**
- Create: `tests/site.test.mjs`

- [ ] Write checks for title, sections, two conditions, five scene cards, accessible rail controls, and reduced-motion CSS.
- [ ] Run the test and confirm it fails because `index.html` does not exist.

### Task 2: Source assets and standalone page

**Files:**
- Create: `assets/*.jpg`
- Create: `index.html`

- [ ] Copy the selected supplied-PDF images into `assets/` with semantic filenames.
- [ ] Implement the single-page layout and all factual copy.
- [ ] Implement pointer drag, wheel, buttons, and keyboard-friendly controls for the rail.
- [ ] Run `node tests/site.test.mjs` and confirm all checks pass.

### Task 3: Browser verification

**Files:**
- Modify: `index.html` only if defects are found.

- [ ] Open the page in a real browser at desktop and narrow widths.
- [ ] Verify drag, buttons, focus visibility, layout, and reduced-motion behavior.
- [ ] Re-run the structural test after any fixes.

