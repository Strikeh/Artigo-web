# Artigo — Landing Page / Website Plan

> **Doel**: Een conversiegerichte, visueel sterke landingspagina die de waardepropositie van Artigo helder communiceert en bezoekers omzet in kopers. Dit document bevat de volledige structuur, copy-richting, SEO-strategie, design-richtlijnen en media-placeholders zodat web developers hier direct mee aan de slag kunnen.

---

## Inhoudsopgave

1. [SEO & Meta Strategie](#1-seo--meta-strategie)
2. [Design Systeem & Visuele Taal](#2-design-systeem--visuele-taal)
3. [Paginastructuur (sectie per sectie)](#3-paginastructuur)
   - [3.1 Navigatie](#31-navigatie)
   - [3.2 Hero Sectie](#32-hero-sectie)
   - [3.3 Social Proof Bar](#33-social-proof-bar)
   - [3.4 Problem → Solution](#34-problem--solution)
   - [3.5 Hoe het werkt (3 stappen)](#35-hoe-het-werkt)
   - [3.6 Features Overzicht](#36-features-overzicht)
   - [3.7 Product Showcase (Video/Screenshots)](#37-product-showcase)
   - [3.8 Ratio Management Deep Dive](#38-ratio-management-deep-dive)
   - [3.9 Grid Composition Deep Dive](#39-grid-composition-deep-dive)
   - [3.10 Pricing](#310-pricing)
   - [3.11 Testimonials](#311-testimonials)
   - [3.12 FAQ](#312-faq)
   - [3.13 Final CTA](#313-final-cta)
   - [3.14 Footer](#314-footer)
4. [Bijkomende Pagina's](#4-bijkomende-paginas)
5. [Technische Opmerkingen](#5-technische-opmerkingen)
6. [Media Checklist](#6-media-checklist)

---

## 1. SEO & Meta Strategie

### Primaire zoekwoorden (target)

| Prioriteit | Zoekwoord / Keyphrase              | Zoekintentie |
| ---------- | ---------------------------------- | ------------ |
| 🔴 Hoog    | `etsy digital art automation`      | Commercieel  |
| 🔴 Hoog    | `batch resize images for print`    | Transactie   |
| 🔴 Hoog    | `wall art ratio resizer tool`      | Transactie   |
| 🟠 Medium  | `digital download production tool` | Navigatie    |
| 🟠 Medium  | `print on demand image resizer`    | Commercieel  |
| 🟠 Medium  | `aspect ratio batch converter`     | Transactie   |
| 🟡 Laag    | `bookmark grid generator`          | Informatie   |
| 🟡 Laag    | `contact sheet maker for print`    | Informatie   |
| 🟡 Laag    | `image dpi converter tool`         | Informatie   |

### Meta Tags (homepage)

```html
<title>
  Artigo — The Production Engine for Digital Art Sellers | Batch Resize & Grid
  Tool
</title>

<meta
  name="description"
  content="Stop resizing images manually. Artigo automates your entire print production pipeline — batch resize to multiple ratios, generate grid sheets, embed DPI metadata, and package ZIP deliverables in one click. Built for Etsy sellers."
/>

<meta
  name="keywords"
  content="batch image resizer, etsy digital art, wall art automation, aspect ratio converter, grid composition tool, print production, DPI converter, bookmark grid maker"
/>

<!-- Open Graph -->
<meta
  property="og:title"
  content="Artigo — Not a design tool. A production engine."
/>
<meta
  property="og:description"
  content="Turn 1 artwork into 20+ print-ready files in seconds. The automation tool Etsy art sellers didn't know they needed."
/>
<meta
  property="og:image"
  content="[PLACEHOLDER: og-image.jpg — 1200×630, hero screenshot met logo]"
/>
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta
  name="twitter:title"
  content="Artigo — Automate Your Art Production Pipeline"
/>
<meta
  name="twitter:description"
  content="Batch resize, grid compose, DPI embed, ZIP package. One click."
/>
<meta
  name="twitter:image"
  content="[PLACEHOLDER: twitter-card.jpg — 1200×628]"
/>
```

### Structured Data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Artigo",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Windows, macOS",
  "description": "Batch image resizing and grid composition tool for digital art sellers and print production.",
  "offers": {
    "@type": "Offer",
    "price": "29",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "[PLACEHOLDER: actual count]"
  }
}
```

### URL-structuur

| Pagina         | URL                       | Titel                                                  |
| -------------- | ------------------------- | ------------------------------------------------------ |
| Home / Landing | `/`                       | Artigo — The Production Engine for Digital Art Sellers |
| Features       | `/#features` (anchor)     | Features                                               |
| Pricing        | `/pricing` of `/#pricing` | Pricing                                                |
| FAQ            | `/#faq`                   | FAQ                                                    |
| Download       | `/download`               | Download Artigo                                        |
| Blog/SEO       | `/blog/`                  | Artigo Blog (toekomstig, sterk SEO-kanaal)             |

### SEO Content Tips voor developers

- Gebruik semantische HTML (`<main>`, `<article>`, `<section>`, `<figure>`, `<figcaption>`)
- Elke sectie-heading is een `<h2>`, subheadings `<h3>`
- Alle afbeeldingen krijgen beschrijvende `alt`-tekst met zoekwoorden
- Lazy-load afbeeldingen en video's onder de fold
- Voeg een `<link rel="canonical">` toe
- Implementeer breadcrumbs indien meerdere pagina's

---

## 2. Design Systeem & Visuele Taal

De website moet dezelfde visuele taal hanteren als de applicatie zelf. Dit creëert herkenning en vertrouwen.

### Kleurenpalet

| Naam            | Waarde                | Gebruik                                     |
| --------------- | --------------------- | ------------------------------------------- |
| Background      | `#f5f5f7`             | Pagina-achtergrond (Apple-stijl warm grijs) |
| Card White      | `#ffffff`             | Kaarten, panelen                            |
| Card Border     | `rgba(0,0,0,0.03)`    | Subtiele kaartrand                          |
| Accent Gradient | `#6366f1` → `#3b82f6` | Knoppen, highlights, CTA's                  |
| Text Primary    | `#1d1d1f`             | Koppen, body tekst                          |
| Text Secondary  | `#86868b`             | Subtitels, beschrijvingen                   |
| Text Tertiary   | `#d2d2d7`             | Hints, labels                               |
| Success         | `#10b981` (emerald)   | Succesindicatoren                           |
| Warning         | `#f59e0b` (amber)     | Waarschuwingen                              |
| Feature Orange  | `#f97316`             | Source/import gerelateerd                   |
| Feature Purple  | `#8b5cf6`             | Ratio gerelateerd                           |
| Feature Indigo  | `#6366f1`             | Grid gerelateerd                            |

### Typografie

```css
font-family:
  -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display",
  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

- **H1 (Hero)**: 56–72px, `font-weight: 800`, tracking tight
- **H2 (Secties)**: 36–48px, `font-weight: 700`
- **H3 (Subkoppen)**: 24–28px, `font-weight: 600`
- **Body**: 16–18px, `font-weight: 400`, line-height 1.6
- **Accent woorden**: Gebruik de gradient kleur + de kenmerkende SVG-underline swoosh uit de app

### Design Elementen

| Element             | Beschrijving                                                                                                                |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Glassmorphism**   | `backdrop-blur: 20px`, `background: rgba(255,255,255,0.7)`, subtiele witte rand                                             |
| **Animated Blobs**  | 3 grote kleurblobs (indigo, blauw, paars) die langzaam zweven, `mix-blend-multiply`, op achtergrond van hero en CTA secties |
| **Card Hover**      | Lift-up effect `transform: translateY(-4px)`, shadow versterking                                                            |
| **Knoppen**         | Gradient fill (indigo→blauw), `border-radius: 12px`, glow-shadow, `active:scale-95`                                         |
| **SVG Underlines**  | Gebogen lijn onder accent-woorden in headings (exact zoals in de app)                                                       |
| **Rounded Corners** | Cards: `16px`, grote panels: `32px`, knoppen: `12px`                                                                        |
| **Confetti**        | Optioneel: confetti-animatie bij CTA-hover of bij een "success" micro-interactie                                            |

### Responsive Breakpoints

| Breakpoint | Gebruik                                            |
| ---------- | -------------------------------------------------- |
| `≥1280px`  | Desktop — volledige layout, 2/3-kolom grids        |
| `≥768px`   | Tablet — 2-kolom grids, kleinere hero              |
| `<768px`   | Mobiel — 1-kolom, gestackte secties, hamburger nav |

---

## 3. Paginastructuur

### 3.1 Navigatie

**Type**: Sticky top navbar, glassmorphic (frosted glass effect), verschijnt na scroll voorbij hero.

**Elementen**:

- **Links**: `[PLACEHOLDER: Logo]` + "Artigo" tekst
- **Midden**: Navlinks — Features · How It Works · Pricing · FAQ
- **Rechts**: "Download" (primary gradient button)
- **Mobiel**: Hamburger menu met slide-in panel

**Gedrag**:

- Transparant bovenaan, krijgt `backdrop-blur` achtergrond bij scrollen
- Smooth-scroll naar anchors bij klikken op navlinks
- Download-knop altijd zichtbaar

---

### 3.2 Hero Sectie

**Layout**: Twee kolommen — tekst links, product screenshot rechts. Animated blobs op achtergrond.

**Slagzin (H1)**:

> **Stop resizing.**
> **Start producing.**

Of alternatief:

> **One artwork in.**
> **Twenty files out.**

Of:

> **Not a design tool.**
> **A production engine.**

**Subtitel (p)**:

> Turn your digital art into print-ready files for every ratio, every size, every platform — in a single click. Built for Etsy sellers who are done wasting hours on manual resizing.

**CTA Knoppen**:

- **Primair**: "Download Free" (gradient, groot, glow-shadow)
- **Secundair**: "Watch Demo" (outlined, met play-icoon) → opent video lightbox

**Visuele elementen**:

- `[PLACEHOLDER: hero-screenshot.png]` — Screenshot van de applicatie (Home Screen met beide folders geselecteerd en workflow keuze zichtbaar), licht geroteerd met perspectief-schaduw
- Floating badges rondom de screenshot:
  - "300 DPI" ✓
  - "5 Ratios × 4 Sizes = 20 Files"
  - "Auto ZIP"

**Animatie**: Screenshot fade-in-up bij laden. Badges float-in met stagger delay.

---

### 3.3 Social Proof Bar

**Layout**: Horizontale strip, licht grijze achtergrond, centered.

**Inhoud**:

> Trusted by **[PLACEHOLDER: X]** digital art sellers worldwide

- Rij van logo-achtige avatars of sterren-rating
- Kleine quotes snippets: _"Saved me 6 hours per week"_ — _"Game changer for my Etsy shop"_

---

### 3.4 Problem → Solution

**Layout**: Twee kolommen, visueel contrast.

**Linkerkolom — "The Old Way" (grijs/rood getint)**:

Titel: **The Manual Nightmare**

Bullet punten met ✗ iconen (rood):

- ✗ Open artwork in Photoshop — manually resize to 2:3
- ✗ Save — reopen — resize to 3:4
- ✗ Repeat for 4:5, 1:1, A-series...
- ✗ Calculate pixel dimensions from DPI for each size
- ✗ Manually rename every file
- ✗ Organize into folders
- ✗ Create ZIP archives
- ✗ **Repeat for every single artwork**

Ondertitel: _"20 artworks × 5 ratios × 4 sizes = **400 manual operations**"_

**Rechterkolom — "The Artigo Way" (groen/indigo getint)**:

Titel: **One Click. Done.**

Bullet punten met ✓ iconen (groen):

- ✓ Select your source folder
- ✓ Pick your ratios and sizes
- ✓ Click "Generate"
- ✓ Get perfectly organized, DPI-correct, ZIP-packaged files

Ondertitel: _"Same 400 files. Under 10 minutes. Zero errors."_

**`[PLACEHOLDER: side-by-side-comparison.mp4]`** — Korte video split-screen: links manueel Photoshop-gefriemel, rechts Artigo's één-klik flow.

---

### 3.5 Hoe het werkt

**Titel (H2)**: **Three steps. Hundreds of files.**

**Layout**: 3 kaarten naast elkaar, genummerd, met iconen en screenshots.

#### Stap 1 — Select

**Icoon**: Folder icoon (oranje)
**Beschrijving**: _"Drag and drop your source folder with artworks, and pick where you want the output. That's your setup done."_

`[PLACEHOLDER: screenshot-step1.png]` — Screenshot van Home Screen met drag & drop zones

#### Stap 2 — Configure

**Icoon**: Sliders icoon (paars)
**Beschrijving**: _"Choose your ratios and sizes — or set up a grid layout for bookmarks, cards and sticker sheets. Toggle what you need, skip what you don't."_

`[PLACEHOLDER: screenshot-step2.png]` — Screenshot van Ratio Screen met enkele ratios actief

#### Stap 3 — Generate

**Icoon**: Rocket icoon (indigo)
**Beschrijving**: _"Hit generate and watch it fly. DPI-correct files, organized in folders, optionally zipped — ready to upload to Etsy."_

`[PLACEHOLDER: screenshot-step3.png]` — Screenshot van Results Screen met confetti

**Onder de stappen**: Animated counter/typewriter effect:

> "**1** artwork → **5** ratios → **4** sizes per ratio → **20** print-ready files in **12 seconds**"

---

### 3.6 Features Overzicht

**Titel (H2)**: **Everything you need. Nothing you don't.**

**Layout**: 2×3 grid van feature-kaarten (glassmorphic cards met hover-lift).

#### Feature 1 — Multi-Ratio Batch Processing

**Icoon**: `Crop` (paars)
**Titel**: Multi-Ratio Batch Processing
**Beschrijving**: _"Select from 5 standard ratios (1:1, 2:3, 3:4, 4:5, A-series) with multiple print sizes each. One click generates every combination."_
**Badge**: "Up to 20 sizes per artwork"

#### Feature 2 — Grid Composition Engine

**Icoon**: `Grid3x3` (indigo)
**Titel**: Grid Composition Engine
**Beschrijving**: _"Arrange images into printable grid sheets — perfect for bookmarks, business cards, sticker sheets, and contact sheets. Use presets or go fully custom."_
**Badge**: "6 built-in presets"

#### Feature 3 — Print-Grade DPI

**Icoon**: `Target` (emerald)
**Titel**: Print-Grade DPI Output
**Beschrijving**: _"Every file embeds proper DPI metadata (EXIF + pHYs). Set your target DPI — 300 for print, 150 for web — and Artigo handles the math."_
**Badge**: "Industry standard"

#### Feature 4 — Smart Crop Modes

**Icoon**: `Scissors` (oranje)
**Titel**: Smart Crop Strategies
**Beschrijving**: _"Choose how images adapt: Fit (white borders), Fill (smart crop), Stretch, or Border. Pick once, apply to every file."_
**Badge**: "4 crop modes"

#### Feature 5 — Custom File Naming

**Icoon**: `FileText` (blauw)
**Titel**: Template-Based Naming
**Beschrijving**: _"Define your naming convention with placeholders — {name}, {ratio}, {size}, {dpi}, {format}. Even preview the result with your actual file names."_
**Badge**: "Live preview"

#### Feature 6 — Auto ZIP Packaging

**Icoon**: `Package` (amber)
**Titel**: Auto ZIP & Organize
**Beschrijving**: _"Output is automatically organized into folders per artwork and ratio. Optionally zipped and timestamped — ready to upload as Etsy digital deliverables."_
**Badge**: "Upload-ready"

---

### 3.7 Product Showcase (Video/Screenshots)

**Titel (H2)**: **See it in action.**

**Layout**: Grote gecentreerde video embed met glassmorphic frame eromheen (afgeronde hoeken, schaduw).

`[PLACEHOLDER: demo-video.mp4]` — Volledige walkthrough video (1–2 min):

1. Folders selecteren via drag & drop
2. Ratios aanzetten en sizes kiezen
3. Generate klikken
4. Processing scherm met terminal output
5. Results met confetti
6. Output folder openen en bestanden tonen

**Onder de video**: Scrollbare horizontale rij van screenshots in glassmorphic frames:

- `[PLACEHOLDER: gallery-1.png]` — Home Screen
- `[PLACEHOLDER: gallery-2.png]` — Ratio Screen actief
- `[PLACEHOLDER: gallery-3.png]` — Grid Screen met preview
- `[PLACEHOLDER: gallery-4.png]` — Processing Screen met terminal
- `[PLACEHOLDER: gallery-5.png]` — Results Screen met confetti
- `[PLACEHOLDER: gallery-6.png]` — Settings Screen
- `[PLACEHOLDER: gallery-7.png]` — Output folder structuur in Explorer/Finder

---

### 3.8 Ratio Management Deep Dive

**Titel (H2)**: **Every ratio. Every size. Every time.**

**Layout**: Tekst links, interactieve visual rechts.

**Tekst**:

> Your customers want options. A 2:3 for their bedroom, a 1:1 for Instagram, an A3 for the office. Manually creating every combination is soul-crushing.
>
> Artigo lets you toggle ratios and sizes like a checklist. Select what you need, hit generate, and get perfectly cropped, pixel-perfect files for every combination.

**Visual rechts**: Stylized versie van de ratio-kaarten uit de app — toon de 5 ratio's met hun visuele preview-blokjes en size-checkboxes. Eventueel geanimeerd (toggles die aan/uit gaan).

`[PLACEHOLDER: ratio-deep-dive.png]` — Close-up screenshot van Ratio Screen

**Onderliggende tabel** (subtiel gestyled):

| Ratio        | Beschikbare Afmetingen        |
| ------------ | ----------------------------- |
| 1:1 Square   | 5×5", 8×8", 10×10", 12×12"    |
| 2:3 Portrait | 4×6", 8×12", 10×15", 12×18"   |
| 3:4 Classic  | 6×8", 9×12", 12×16", 15×20"   |
| 4:5 Photo    | 8×10", 12×15", 16×20", 20×25" |
| A-Series     | A5, A4, A3, A2                |

---

### 3.9 Grid Composition Deep Dive

**Titel (H2)**: **Bookmarks. Cards. Sheets. Sorted.**

**Layout**: Tekst rechts, visual links.

**Tekst**:

> Need a page of 4 bookmarks? A contact sheet of 64 thumbnails? A 2×2 grid of square stickers?
>
> Artigo's grid engine arranges your images into printable page layouts. Choose from built-in presets or go fully custom with your own row/column and cell dimensions.

**Visual links**: Geanimeerde grid preview — vergelijkbaar met de live grid preview in de app, met cellen die invullen.

`[PLACEHOLDER: grid-deep-dive.png]` — Screenshot van Grid Screen met Bookmark preset actief en live preview

**Preset showcase** (kleine kaartjes):

- Bookmark 4×1 (US Letter)
- Portrait 2×2
- Landscape 4×4
- Portrait 8×8

---

### 3.10 Pricing

**Titel (H2)**: **Simple pricing. No subscriptions.**

**Subtitel**: _"Pay once. Use forever. Free updates included."_

**Layout**: 2 pricing cards naast elkaar, gecentreerd.

#### Free Tier

**Prijs**: Free
**Badge**: "Get Started"

- ✓ Up to 3 artworks per batch
- ✓ 2 ratios
- ✓ Basic grid presets
- ✓ JPG output
- ✗ ~~Watermark on output~~ (of beperking naar keuze)
- ✗ ~~ZIP packaging~~
- ✗ ~~Custom file naming~~

**CTA Button**: "Download Free" (outlined)

#### Pro Tier

**Prijs**: €29 (lifetime) — doorgestreepte "~~€49~~"
**Badge**: "Most Popular" (gradient, glow)

- ✓ **Unlimited** artworks per batch
- ✓ **All** ratios and sizes
- ✓ **All** grid presets + custom grids
- ✓ JPG + PNG output
- ✓ Auto ZIP packaging
- ✓ Custom file naming templates
- ✓ No watermark
- ✓ Priority support
- ✓ Free updates for life

**CTA Button**: "Get Artigo Pro" (gradient, primair, groot)

**Onder de pricing cards**:

> 💡 _"Launch pricing — this price won't last forever."_

**Garantie-badge**: 🛡️ "30-day money-back guarantee. No questions asked."

---

### 3.11 Testimonials

**Titel (H2)**: **Loved by sellers worldwide.**

**Layout**: 3-kolom grid van testimonial-kaarten, of een horizontale slider/carrousel.

**Testimonial Card Design**:

- 5-sterren rating (gouden sterren)
- Quote tekst (italic)
- Naam + rol/shop
- Kleine avatar afbeelding

#### Testimonials (placeholder content — vervang door echte reviews):

**Testimonial 1**:

> _"I used to spend my entire Sunday resizing files for my Etsy shop. Now I do it in my coffee break. Artigo is the best investment I've made for my business."_
>
> — **Sarah M.** · Etsy Wall Art Seller · ⭐⭐⭐⭐⭐

**Testimonial 2**:

> _"The grid feature alone is worth the price. I create bookmark sheets in seconds that used to take me 30 minutes each in Canva."_
>
> — **James K.** · Printable Design Shop · ⭐⭐⭐⭐⭐

**Testimonial 3**:

> _"Finally a tool that understands Etsy sellers. The auto-ZIP and folder organization feature means my digital downloads are ready to list immediately."_
>
> — **Maria L.** · Digital Art Studio · ⭐⭐⭐⭐⭐

**Testimonial 4**:

> _"I switched from manually resizing in Photoshop. 400 files used to take me a full day. Now? Under 10 minutes. Not kidding."_
>
> — **David R.** · Print on Demand Creator · ⭐⭐⭐⭐⭐

`[PLACEHOLDER: testimonial-avatars]` — Echte foto's of gestylede avatars wanneer reviews beschikbaar zijn.

> **Opmerking**: Vervang deze placeholder-testimonials zodra er echte gebruikersreviews beschikbaar zijn. Tot die tijd kan je ze weglaten of als "Early Access feedback" labelen.

---

### 3.12 FAQ

**Titel (H2)**: **Frequently Asked Questions**

**Layout**: Accordion-stijl (klik om te openen/sluiten). Glassmorphic kaarten.

#### Vragen & Antwoorden:

**Q: What image formats does Artigo support?**

> Artigo accepts JPG, JPEG, PNG, WebP, TIFF, and BMP as input. Output is available in JPG and PNG format.

**Q: Does Artigo work offline?**

> Yes! Artigo is a desktop application that runs entirely on your computer. No internet connection required, no cloud uploads, your files never leave your machine.

**Q: What operating systems are supported?**

> Artigo runs on Windows and macOS. We're exploring Linux support for a future release.

**Q: What DPI should I use for print?**

> 300 DPI is the industry standard for high-quality print. Artigo defaults to 300 DPI but lets you set any value you need.

**Q: Can I customize the output file naming?**

> Absolutely. Pro users get full template-based naming with placeholders like {name}, {ratio}, {size}, {dpi}, and {format}. You can even preview the result with your actual file names before processing.

**Q: What's the difference between Fit, Fill, and Stretch crop modes?**

> **Fit** keeps the full image visible and adds white borders where needed. **Fill** smartly crops to exactly match the target ratio (most popular for wall art). **Stretch** distorts the image to fill the target dimensions. Choose the one that suits your artwork style.

**Q: How fast is the batch processing?**

> A single high-res artwork (8000×8000) generates 25+ variants in under 30 seconds. A batch of 20 artworks with 500 total output files completes in under 10 minutes.

**Q: Is there a limit on file size or resolution?**

> No hard limits. Artigo uses streaming architecture (Sharp/libvips) so even very large files are processed efficiently without consuming excessive memory.

**Q: Do I get free updates?**

> Yes. Your Pro license includes free updates for life, including new features, presets, and improvements.

**Q: What if I'm not satisfied?**

> We offer a 30-day money-back guarantee, no questions asked.

---

### 3.13 Final CTA

**Layout**: Full-width sectie met animated blob-achtergrond (zoals hero), glassmorphic center panel.

**Titel (H2)**:

> **Ready to automate your art production?**

**Subtitel**:

> Join thousands of digital art sellers who stopped wasting time on manual resizing. Download Artigo and start producing — not resizing.

**CTA Knoppen**:

- **Primair**: "Download Artigo Free" (groot, gradient, glow)
- **Secundair**: "View Pricing" (outlined)

**Trust indicators eronder**:

- 🛡️ 30-day money-back guarantee
- 🔒 No account required
- 💻 Works offline — your files stay private
- ⚡ Free version available

---

### 3.14 Footer

**Layout**: Donkere achtergrond (`#1d1d1f`), witte tekst, 4-kolom grid.

**Kolom 1 — Brand**:

- `[PLACEHOLDER: Logo]` + "Artigo"
- _"The production engine for digital art sellers."_
- Social media iconen (Twitter/X, Instagram, YouTube, Etsy community)

**Kolom 2 — Product**:

- Features
- Pricing
- Download
- Roadmap
- Changelog

**Kolom 3 — Support**:

- FAQ
- Contact
- Documentation
- Report a Bug

**Kolom 4 — Legal**:

- Privacy Policy
- Terms of Service
- Refund Policy
- EULA

**Onderaan**: `© 2026 Artigo. All rights reserved.`

---

## 4. Bijkomende Pagina's

### 4.1 Download Pagina (`/download`)

- Detecteer OS automatisch (Windows/macOS) → toon juiste download-knop
- Alternatieve OS-link eronder
- Systeemvereisten:
  - Windows 10+ (64-bit)
  - macOS 12+ (Apple Silicon & Intel)
  - 4 GB RAM minimum, 8 GB aanbevolen
  - 200 MB schijfruimte
- Installatie-instructies (kort, met screenshots)
- Versienummer + changelog link

### 4.2 Blog (toekomstig, SEO-kanaal)

Aanbevolen artikelen voor organisch verkeer:

| Artikel                                                        | Target Keyword                 |
| -------------------------------------------------------------- | ------------------------------ |
| "How to Sell Digital Wall Art on Etsy: Complete Guide"         | etsy digital wall art          |
| "The Best Aspect Ratios for Wall Art Prints"                   | wall art aspect ratios         |
| "How to Batch Resize Images for Print on Demand"               | batch resize images print      |
| "Creating Bookmark Printables: A Step-by-Step Guide"           | bookmark printables            |
| "Understanding DPI for Print: What Every Seller Needs to Know" | dpi for print explained        |
| "5 Ways to Speed Up Your Etsy Digital Download Workflow"       | etsy digital download workflow |

---

## 5. Technische Opmerkingen

### Performance

- Target Lighthouse score: **≥ 95** voor Performance, Accessibility, Best Practices, SEO
- Alle afbeeldingen in WebP + fallback JPG, met `srcset` voor responsive
- Video's: lazy-loaded `<video>` met poster image, of YouTube embed met facade pattern
- Minimize CLS (Cumulative Layout Shift): definieer expliciete aspect-ratio's op alle media

### Animaties

- Gebruik `IntersectionObserver` voor scroll-triggered fade-in animaties
- Blob-animaties via CSS `@keyframes` (geen JS overhead)
- Prefer `transform` en `opacity` voor 60fps animaties
- `prefers-reduced-motion` media query respecteren

### Analytics

- Google Analytics 4 of Plausible/Fathom (privacy-friendly)
- Track: page views, CTA clicks, download clicks, FAQ interactions, video plays
- Conversion funnel: Landing → Features scroll → Pricing view → Download click

### Cookie/Privacy

- Minimale cookies (analytics only)
- Cookie banner conform GDPR/ePrivacy

---

## 6. Media Checklist

Overzicht van alle media die aangeleverd moeten worden:

### Screenshots (PNG, 2x retina resolutie)

| ID                     | Beschrijving                                                 | Scherm     | Sectie       |
| ---------------------- | ------------------------------------------------------------ | ---------- | ------------ |
| `hero-screenshot.png`  | App volledig zichtbaar, Home Screen met folders geselecteerd | Home       | Hero         |
| `screenshot-step1.png` | Home Screen met drag & drop zones                            | Home       | How It Works |
| `screenshot-step2.png` | Ratio Screen met 3+ ratios actief en sizes aangevinkt        | Ratio      | How It Works |
| `screenshot-step3.png` | Results Screen met confetti en "All Done"                    | Results    | How It Works |
| `ratio-deep-dive.png`  | Close-up Ratio Screen, alle kaarten zichtbaar                | Ratio      | Deep Dive    |
| `grid-deep-dive.png`   | Grid Screen met Bookmark preset en live preview              | Grid       | Deep Dive    |
| `gallery-1.png`        | Home Screen volledig                                         | Home       | Gallery      |
| `gallery-2.png`        | Ratio Screen actief                                          | Ratio      | Gallery      |
| `gallery-3.png`        | Grid Screen met preview                                      | Grid       | Gallery      |
| `gallery-4.png`        | Processing Screen met terminal                               | Processing | Gallery      |
| `gallery-5.png`        | Results Screen met confetti                                  | Results    | Gallery      |
| `gallery-6.png`        | Settings Screen                                              | Settings   | Gallery      |
| `gallery-7.png`        | Output folder structuur in Explorer                          | OS         | Gallery      |

### Video's

| ID                            | Beschrijving                                                 | Duur    | Sectie           |
| ----------------------------- | ------------------------------------------------------------ | ------- | ---------------- |
| `demo-video.mp4`              | Volledige walkthrough: folders → config → generate → results | 60–120s | Product Showcase |
| `side-by-side-comparison.mp4` | Split-screen: manueel vs Artigo                              | 30–45s  | Problem/Solution |

### Branding

| ID                            | Beschrijving                          |
| ----------------------------- | ------------------------------------- |
| `logo.svg`                    | Finaal logo (vector)                  |
| `logo-dark.svg`               | Logo variant voor donkere achtergrond |
| `favicon.ico` + `favicon.svg` | Favicon                               |
| `og-image.jpg`                | Open Graph preview (1200×630)         |
| `twitter-card.jpg`            | Twitter card image (1200×628)         |
| `apple-touch-icon.png`        | 180×180                               |

---

> **Notitie voor web developers**: Dit document bevat de volledige structuur en content-richting. De visuele stijl moet consistent zijn met de meegeleverde screenshots van de applicatie. Gebruik hetzelfde kleurenpalet, typografie, glassmorphism-effecten en animatie-patronen. Het moet aanvoelen alsof de website en de app door hetzelfde team zijn ontworpen.
