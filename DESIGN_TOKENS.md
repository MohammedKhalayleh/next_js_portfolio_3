/*
  CircuitCanvas — Design Tokens Reference

  This file documents all design tokens used throughout the portfolio.
  Update this file when modifying colors, typography, motion, or spacing.
*/

/*
  COLOR PALETTE
  
  Light Theme (default)
  - Background: #F6F8F7 (warm white)
  - Surface: #FFFFFF (pure white)
  - Text: #132033 (navy)
  - Muted: #5D6B7C (slate)

  Dark Theme
  - Background: #08111F (deep navy)
  - Surface: #0D1B2A (navy)
  - Text: #EAF1F4 (light blue)
  - Muted: #9FB0BD (slate)

  Accents
  - Primary: #0FA678 (emerald) | Dark: #32C99A
  - Secondary: #2A7F9E (cyan) | Dark: #4FD1C5
  - Warm: #F3B562 (amber) — use sparingly for milestones/highlights
*/

/*
  TYPOGRAPHY

  Display: Inter Display (geometric sans, headlines)
  Body: Inter (primary reading)
  Mono: IBM Plex Mono (technical labels, code)

  Sizes:
  - 12px: xs (labels, captions)
  - 14px: sm (secondary text)
  - 16px: base (body text)
  - 18px: lg (larger body)
  - 20px: xl
  - 24px: 2xl
  - 30px: 3xl
  - 36px: 4xl
  - 48px: 5xl

  Line Height: 1.6 (body), 1.2 (headings)
  Text Measure: 65–75 characters (optimal)
*/

/*
  MOTION TOKENS

  - Instant: 100–140 ms (button press, icon state)
  - Fast: 180–220 ms (burger morph, hover, drawer)
  - Standard: 320–420 ms (section reveal, card transition)
  - Narrative: 650–900 ms (hero boot sequence)

  Easing:
  - ease-out: user actions (enter)
  - ease-in-out: transitions
  - cubic-bezier(0.4, 0, 0.6, 1): smooth loops
*/

/*
  SPACING SCALE

  - 0px: 0
  - 4px: xs
  - 8px: sm
  - 12px: md
  - 16px: lg
  - 24px: xl
  - 32px: 2xl
  - 48px: 3xl
  - 64px: 4xl
  - 80px: 5xl
  - 96px: 6xl
*/

/*
  BREAKPOINTS

  - 320px: xs (mobile)
  - 480px: sm (mobile landscape)
  - 768px: md (tablet)
  - 1024px: lg (desktop)
  - 1440px: xl (wide desktop)
*/

/*
  FOCUS & ACCESSIBILITY

  - Focus Ring: 2px solid primary color
  - Focus Offset: 2px
  - Contrast Ratio: ≥4.5:1 (AA), ≥7:1 (AAA)
  - Touch Target: 44×44px minimum
  - Safe Areas: env(safe-area-inset-*) support
*/

/*
  COMPONENT TOKENS

  Buttons:
  - Primary: bg-primary text-white, hover: shadow-lg
  - Secondary: border + outline, hover: bg-surface
  - Ghost: text-color, hover: text-primary

  Cards:
  - bg: surface
  - border: 1px light-muted/20
  - padding: 24px
  - border-radius: 8px

  Forms:
  - input: 16px minimum font size (iOS zoom prevention)
  - field bg: surface
  - border: light-muted
  - focus ring: primary color
*/

/*
  ANIMATIONS

  - signal-pulse: 2s loop, 0.3 → 1 → 0.3 opacity
  - trace-glow: 1.5s loop, box-shadow intensity
  - fade-in: 0.3s ease-out, opacity
  - slide-up: 0.32s ease-out, translateY(-16px)
*/

export default {};
