# Tarun Sabbineni — Personal Website

A visually striking, fast personal website uniting software engineering leadership (Developer Experience & Platform Engineering at Barclays) with travel, landscape and architectural photography.

Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

Inspired by:
- **Dennis Snellenberg** (`dennissnellenberg.com`): Large expressive typographic hero, infinite marquee ribbon, interactive project rows, live local London time, and bottom curved magnetic contact footer.
- **Aristide Benoist** (`aristidebenoist.com`): Editorial photography gallery, curated negative space, and full-screen keyboard/touch accessible lightbox.
- **Oliur** (`oliur.com`): Luxury serif + modern geometric grotesk typography, restrained color tokens, and clean high-end aesthetic.

---

## Features & Implementation

1. **Editorial Hero Section**:
   - Distinctive typographic hero with large-scale header and italic display accents
   - Live London time display with active green status indicator
   - Infinite marquee ribbon highlighting core disciplines
   - Dual identity narrative: Software Engineering Manager + Visual Storyteller

2. **Work & Architecture**:
   - Career overview as Software Engineering Manager in DevEx & Platform Engineering at Barclays
   - 4 core architectural strengths (Platform Engineering, Developer Ergonomics, Distributed Observability, Resilience & Governance)
   - Interactive project table with expandable drawers showing achievements, metrics, tech stack tags, and direct GitHub links

3. **Selected Photography & Lightbox**:
   - Curated high-resolution imagery across Landscapes, Architecture, and Travel & Urban
   - Dynamic category filters with active indicators
   - Full-screen accessible lightbox supporting keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`), image counters, camera/lens optics metadata, and location details

4. **Interactive Travel Atlas (21 Visited Destinations)**:
   - Complete dataset of **21 visited countries**: United Kingdom, France, Belgium, Netherlands, Switzerland, Germany, Spain, Portugal, Greece, Bulgaria, Croatia, Montenegro, Liechtenstein, Italy, India, Singapore, Malaysia, UAE, Maldives, Indonesia, United States.
   - Interactive Mercator-aligned SVG World Map with pulsing golden destination pins
   - Destination Inspector card featuring high-resolution photography, coordinates, year visited, and travel notes
   - Searchable and filterable accessible list fallback

5. **Beyond Work & Personality**:
   - **Playable Piano**: Built-in Web Audio API synthesiser allowing visitors to click keys or play an acoustic Chopin Nocturne melody theme
   - Dedicated vignettes for Lawn & Hardcourt Tennis, Slow Travel, and Horology & Mechanical Craft

6. **Curved Footer & Contact**:
   - Dennis Snellenberg curved transition container
   - Large magnetic call-to-action circular button
   - Direct email copy pill with instant feedback toast
   - Social links to LinkedIn, GitHub, and Photography

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

Server runs locally at `http://localhost:5173`.

---

## Deployment to Cloudflare Pages / GitHub Pages

The project produces a 100% static build in the `dist` folder:
- **Cloudflare Pages**: Connect your GitHub repository, choose Framework preset `Vite`, build command `npm run build`, and output directory `dist`.
- **Permanent Domain**: Point `tarunsabbineni.com` or `sabbineni.com` via CNAME to your Cloudflare Pages distribution.
