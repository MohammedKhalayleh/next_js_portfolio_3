# Design Tokens

## Color Palette

### Light Theme

- Background: `#F6F8F7`
- Surface: `#FFFFFF`
- Text: `#132033`
- Muted text: `#5D6B7C`

### Dark Theme

- Background: `#08111F`
- Surface: `#0D1B2A`
- Text: `#EAF1F4`
- Muted text: `#9FB0BD`

### Accent Colors

- Primary: `#0FA678` (light), `#32C99A` (dark)
- Secondary: `#2A7F9E` (light), `#4FD1C5` (dark)
- Warm accent: `#F3B562`

## Typography

- Display and body font: Inter
- Monospace font: IBM Plex Mono
- Global headings use the display font with bold or semibold weight.

## Motion

- Instant: `100ms`
- Fast: `200ms`
- Standard: `300ms` in Tailwind utilities; `320ms` in shared constants
- Narrative: `700ms`
- Reduced-motion preferences disable nonessential motion.

## Spacing and Layout

- Main container: `max-w-7xl`, centered
- Horizontal container padding: `1rem`, `1.5rem` at `sm`, `2rem` at `lg`
- Project grids use a `1.25rem` (`gap-5`) gap.

## Breakpoints

The project uses Tailwind responsive utilities. Shared constants also define reference breakpoints at 320px, 480px, 768px, 1024px, and 1440px.

## Focus and Accessibility

- Interactive controls use visible primary-color focus rings.
- A skip link is available for keyboard users.
- Dark mode is controlled with Tailwind's `dark` class.

## Component Tokens

- Primary buttons use the primary accent and rounded corners.
- Cards use light/dark surfaces, subtle borders, and rounded corners.
- Project cards use a `1.75rem` border radius.

## Animations

- `signal-pulse`: 2 seconds
- `trace-glow`: 1.5 seconds
- `fade-in`: 300ms
- `slide-up`: 320ms
