# Garden Faery — Developer Brand Kit
> For web and app developers working on Garden Faery properties.
> Source of truth: BRAND-GUIDE.md · Last synced: March 22, 2026

---

## CSS Custom Properties

Drop this block into your root stylesheet. Every color, font, and spacing token for the brand lives here.

```css
:root {
  /* ─── Brand Colors ─── */
  --color-warm-dark:      #4a3520;  /* Headers, primary text */
  --color-mushroom-brown: #c4956a;  /* Warm accents, buttons, dividers */
  --color-cream:          #fffbf0;  /* Page backgrounds */
  --color-fairy-pink:     #d4a0b0;  /* Soft highlights, accents */
  --color-sparkle-gold:   #d4a843;  /* Star accents, active nav, emphasis */
  --color-lavender:       #b8a9c9;  /* Secondary accent */
  --color-fairy-glow:     #f0e6d0;  /* Behind glassmorphic cards */

  /* ─── Semantic Aliases ─── */
  --color-text-primary:   var(--color-warm-dark);
  --color-text-heading:   var(--color-warm-dark);
  --color-bg-page:        var(--color-cream);
  --color-bg-card:        var(--color-fairy-glow);
  --color-bg-section:     var(--color-fairy-glow);
  --color-accent-primary: var(--color-mushroom-brown);
  --color-accent-warm:    var(--color-mushroom-brown);
  --color-accent-soft:    var(--color-fairy-pink);
  --color-border:         var(--color-mushroom-brown);
  --color-highlight:      var(--color-sparkle-gold);

  /* ─── Fonts ─── */
  --font-heading: 'Fredoka', sans-serif;  /* Blueberry is logo-only (Canva) */
  --font-body:    'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* ─── Spacing (optional, adjust to taste) ─── */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;

  /* ─── Border Radius ─── */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;
}
```

---

## Font Setup

Three fonts, three roles:

| Font | Role | Where |
|------|------|-------|
| **Blueberry** | Logo only | Canva — do NOT use on the web |
| **Fredoka** | Web headings (H1–H4) | Google Fonts |
| **Nunito** | Body text everywhere | Google Fonts |

**Google Fonts import** — add this to every page's `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
```
```css
:root {
  --font-heading: 'Fredoka', sans-serif;
  --font-body: 'Nunito', sans-serif;
}
```

**Body text** always uses Nunito (available on Google Fonts).

---

## Color Usage Quick Reference

| Context | Variable | Hex |
|---------|----------|-----|
| Body text | `--color-text-primary` | #4a3520 |
| Headings | `--color-text-heading` | #4a3520 |
| Page background | `--color-bg-page` | #fffbf0 |
| Card backgrounds | `--color-bg-card` | #f0e6d0 |
| Section backgrounds | `--color-bg-section` | #f0e6d0 |
| Buttons / links | `--color-accent-primary` | #c4956a |
| Button hover | `--color-warm-dark` | #4a3520 |
| Active nav item | `--color-highlight` | #d4a843 |
| Borders / dividers | `--color-border` | #c4956a |
| Soft accents (bee/pet sections) | `--color-accent-soft` | #d4a0b0 |
| Secondary accents | `--color-lavender` | #b8a9c9 |

---

## Starter Styles

Baseline styles that match the brand. Copy and adapt as needed.

```css
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  color: var(--color-text-primary);
  background-color: var(--color-bg-page);
  line-height: 1.6;
  margin: 0;
}

h1, h2, h3, h4 {
  font-family: var(--font-heading);
  color: var(--color-text-heading);
  line-height: 1.2;
}

a {
  color: var(--color-accent-primary);
  text-decoration: none;
}
a:hover {
  color: var(--color-warm-dark);
  text-decoration: underline;
}

.btn-primary {
  background-color: var(--color-accent-primary);
  color: white;
  border: none;
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-pill);
  font-family: var(--font-body);
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn-primary:hover {
  background-color: var(--color-warm-dark);
}

.card {
  /* Glassmorphic style — frosted blur, not solid backgrounds */
  background: rgba(255, 251, 240, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(196, 149, 106, 0.2);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
}

.section-alt {
  background-color: var(--color-bg-section);
  padding: var(--space-2xl) var(--space-lg);
}
```

---

## Meta Tags

Copy into the `<head>` of every page:

```html
<meta name="description" content="Garden Faery — a little magic for your outside space. Custom raised beds, garden tending, beekeeping, and pet sitting in Arcata, CA.">
<meta name="theme-color" content="#4a3520">
<meta property="og:title" content="Garden Faery">
<meta property="og:description" content="Custom raised beds, garden care, beekeeping, and pet sitting in Arcata, CA.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://gardenfaery.love">
<!-- og:image — add once logo/hero image is finalized -->
```

---

## Brand Assets in This Repo

| File | What it is | Use for |
|------|-----------|---------|
| `garden-beds-qr.png` | QR code → landing page | Flyers, Craigslist posts, physical marketing |
| `app-icon.png` | App icon (raised bed + sun) | PWA manifest, browser tab |
| `landing-icon.png` | Landing page icon (flower) | Favicon, bookmark icon |
| `taya-selfie.jpg` | Taya's photo | About section, social profiles |

## Active Services (section label on site: "A Little of My Magic")
1. Custom raised beds — built, filled, and planted (cedar, hardware cloth) — custom pricing
2. Garden tending and weeding — $25/hr
3. Pollinator care and beekeeping — honey bee sitting, swarm removal, hive care
4. Out-of-town pet and plant care

**Background expertise (DO NOT list as services):**
Regenerative farming, mushroom cultivation, micro-green growing. These inform the work but are not bookable offerings yet. Frame as: "I bring experience in regenerative farming, mushroom cultivation, and micro-greens to every visit."

---

## Voice Cheat Sheet (for UI copy)

**Do:** Short, warm, casual. "Send a flutter" not "Submit form." "Your buzzy friends" not "Apiary services."

**Don't:** Corporate speak, marketing buzzwords, stiff formality.

| Instead of | Write |
|------------|-------|
| Submit | Send a Flutter |
| Newsletter signup | Get the Dirt |
| Our services | A Little of My Magic |
| Contact us | Let's Make Magic |
| View gallery | Glimpses from the Garden |

---

## Key URLs

- **Website:** https://gardenfaery.love
- **App:** https://juno-arch.github.io/garden-beds-app
- **GitHub:** https://github.com/juno-arch/garden-beds-app

---

## Known Audit Issues (for devs to fix)

These are from the brand audit (BRAND-AUDIT.md) — all are code-level fixes:

1. **App missing brand fonts** — needs Fredoka + Nunito imported and applied (see Font Setup above)
2. **Intro text references mushroom/microgreen as services** — reframe as background expertise, keep 4 service cards only (see BUSINESS-CONTEXT.md § 2)
3. **No meta descriptions** — on either page
4. **No favicon on landing page** — use `landing-icon.png`
5. **Heading hierarchy** — landing page skips H2 (goes H1 → H3 → H4)
6. ~~**Heading color mismatch**~~ ✅ Resolved — now uses Warm Dark #4a3520
7. **App body background** — should be Cream #fffbf0, currently white/transparent
8. **Card backgrounds** — consider Fairy Glow #f0e6d0 instead of plain white
9. **"More magic coming soon" placeholder** — still visible in photo gallery, needs content or removal
10. **Social feed integration** — devs are working on connecting Instagram to show recent posts on the website
