---
name: Obsidian Violet
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f24'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303036'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#ccbeff'
  on-secondary: '#332664'
  secondary-container: '#4a3d7c'
  on-secondary-container: '#baabf3'
  tertiary: '#c6c4dd'
  on-tertiary: '#2f2f42'
  tertiary-container: '#908ea6'
  on-tertiary-container: '#28283b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#e7deff'
  secondary-fixed-dim: '#ccbeff'
  on-secondary-fixed: '#1e0e4e'
  on-secondary-fixed-variant: '#4a3d7c'
  tertiary-fixed: '#e2e0f9'
  tertiary-fixed-dim: '#c6c4dd'
  on-tertiary-fixed: '#1a1a2c'
  on-tertiary-fixed-variant: '#454559'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4rem
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.015em
  title-sm:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '500'
    lineHeight: 1.625rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Geist
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Geist
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a high-caliber, recruiter-ready developer presence for an aspiring software engineer. The visual tone is disciplined, forward-looking, and technically proficient, projecting the quiet confidence of a senior engineer through crisp execution rather than decorative clutter. 

The aesthetic synthesizes modern deep-space minimalism with controlled atmospheric glassmorphism. Interfaces rely on pitch-dark foundations, high-precision micro-borders (1px), subdued ambient glows, and intentional typography. Monospaced cues anchor technical context, while balanced sans-serif letterforms maintain polished readability. Visual clutter is systematically eliminated in favor of structured hierarchy, deliberate micro-interactions, and luminous violet accents.

## Colors

The palette leverages an ultra-deep charcoal backdrop (`#0B0B10`) paired with layered slate-violet containers (`#14141D`), creating infinite depth without harsh contrasts.

### Palette Implementation
- **Surface Roles:**
  - Base canvas: `#0B0B10`
  - Elevated cards & structural panels: `#14141D`
  - Surface borders (subtle): `#1F1F2E`
  - Interactive/Hover borders: `#2A2A3D`
- **Accents:**
  - Primary (`#8B5CF6`): Primary CTAs, active status nodes, key metrics, and focus indicators.
  - Secondary (`#C4B5FD`): Supporting badges, code keyword highlights, tags, and icon accents.
  - Ambient Glow: Radial fades using `rgba(139, 92, 246, 0.12)` to `rgba(139, 92, 246, 0.02)`.
- **Text & Contrast:**
  - High Emphasis (`#F8FAFC`): Display headings, titles, active navigation items.
  - Medium Emphasis (`#94A3B8`): Body descriptions, role summaries, primary technical copy.
  - Low Emphasis / Meta (`#64748B`): Timestamps, secondary labels, disabled states, terminal chrome.

## Typography

The type system pairs **Geist** for crisp, high-density structural readability with **JetBrains Mono** for technical tokens, badges, metrics, and terminal elements.

- Apply `display-lg` exclusively for hero introductions and high-impact identity headers.
- Use `headline-lg` and `headline-md` for distinct portfolio sections (e.g., Experience, Featured Projects, Core Competencies).
- Restrict `label-code` and `label-caps` to tech stacks, dates, category indicators, and metadata chips.
- Set headings with tight tracking (`-0.02em` to `-0.03em`) to deliver modern editorial weight against the dark backdrop.

## Layout & Spacing

The layout is built on a 12-column responsive fluid grid pinned to a maximum content container width of `1200px`. Spacing rhythm relies on multiples of 8px (0.5rem increments).

### Grid and Form Factors
- **Desktop (1024px+):** 12 columns, 1.5rem gutters, 4rem canvas margins. Content remains centered.
- **Tablet (768px – 1023px):** 8 columns, 1.25rem gutters, 2.5rem canvas margins.
- **Mobile (<768px):** 4 columns, 1rem gutters, 1.25rem canvas margins. Multi-column cards stack vertically.

### Rhythmic Rules
- Section-to-section vertical separation must maintain `5rem` to `7rem` on desktop and `3.5rem` on mobile to cultivate an open, unhurried atmosphere.
- Internal card padding defaults to `space-lg` (1.5rem). Dense controls and chip arrays use `space-sm` (0.5rem) and `space-xs` (0.25rem) gaps.

## Elevation & Depth

Visual hierarchy does not use high-drop physical drop-shadows. Depth is generated through layered tonal darkness, glassmorphic surface blur, and luminous atmospheric flares.

### Elevation Levels
- **Canvas (Level 0):** Pure `#0B0B10` canvas.
- **Base Surface (Level 1):** Solid `#14141D` with a crisp 1px perimeter border of `#1F1F2E`. Used for default card components and timeline blocks.
- **Glass / Floating Overlay (Level 2):** Background `rgba(20, 20, 29, 0.75)` with `backdrop-filter: blur(12px)` and a top-edge linear highlight (`rgba(196, 181, 253, 0.15)` fading to `rgba(31, 31, 46, 0.4)`). Used for sticky navigation and modal previews.
- **Active Focus Glow:** Interactive cards elevate on hover with a 1px border transition to `#2A2A3D` or `rgba(139, 92, 246, 0.4)` combined with an ambient box-shadow: `0 0 24px -4px rgba(139, 92, 246, 0.15)`.

## Shapes

The design system adopts a balanced roundedness (`roundedness: 2`). Base interactive elements and standard cards feature an 8px (`0.5rem`) corner radius. Larger parent containers, code playground frames, and project preview modals scale to 16px (`1rem`). 

Badges, status indicators, and pill buttons diverge purposefully to fully rounded (`9999px`) geometries to stand distinct from angular grid architecture.

## Components

### Buttons
- **Primary:** Background `#8B5CF6`, text `#F8FAFC`, font weight `500`. Hover state transitions to `#7C3AED` with an ambient glow (`box-shadow: 0 0 16px rgba(139, 92, 246, 0.35)`). 8px radius.
- **Secondary (Ghost Outline):** Transparent background, 1px border `#2A2A3D`, text `#F8FAFC`. On hover, background shifts to `rgba(139, 92, 246, 0.08)` and border brightens to `#8B5CF6`.
- **Text / Inline Link:** `#C4B5FD` with an animated underline starting at 0% width, expanding to 100% on hover.

### Chips & Badges
- **Tech Stack Badge:** Background `rgba(31, 31, 46, 0.5)`, border 1px `rgba(42, 42, 61, 0.8)`, text `#94A3B8`, font `label-code` (0.8125rem). Hover state shifts border to `#8B5CF6` and text to `#F8FAFC`.
- **Live Status Chip:** Pill shape (`9999px`), background `rgba(139, 92, 246, 0.1)`, 1px border `rgba(139, 92, 246, 0.3)`, text `#C4B5FD`. Includes a leading 6px pulsing emerald or lavender dot.

### Project & Experience Cards
- Encased in `#14141D` with a subtle 1px `#1F1F2E` perimeter.
- Header holds project title, year in `label-code`, and external source/demo iconography.
- Card footer cleanly delineates associated technologies using horizontal wrapping badge rows.
- Transition rule: `300ms cubic-bezier(0.16, 1, 0.3, 1)` on border color and translateY (-2px).

### Input Fields & Contact Elements
- Background `#0E0E15`, border 1px `#1F1F2E`, placeholder `#64748B`, text `#F8FAFC`.
- Focus state: Border shifts to `#8B5CF6`, paired with an outer box-shadow halo (`0 0 0 1px #8B5CF6, 0 0 12px rgba(139, 92, 246, 0.2)`).

### Timeline (Experience / Education)
- Vertical guide rail styled in 1px `#1F1F2E`.
- Milestone nodes: 10px circular markers with a 2px `#8B5CF6` ring and `#0B0B10` core, pulsing on current/active roles.
- Meta dates styled with `label-caps` in `#64748B`.