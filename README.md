<<<<<<< HEAD
# Muhammad Mujtaba — Personal Portfolio

> **Co-Head of Engineering · AI Advocate · Builder**  
> Built with [Astro](https://astro.build) + the Case theme · Deployed on Cloudflare Pages

---

## 🚀 Quick Start

```bash
npm install
cp .env.example .env   # then edit .env with your values
npm run dev            # → http://localhost:4321
npm run build          # production build → dist/
npm run preview        # preview production build locally
```

---

## 📁 Project Structure

```
mujtaba-portfolio/
├── public/                   # Static assets (favicons, images)
├── src/
│   ├── components/           # Reusable Astro components
│   ├── content/              # All site content (MDX files)
│   │   ├── projects/         # Case study files
│   │   ├── decisions/        # Engineering decision records
│   │   ├── journey/          # Career timeline entries
│   │   ├── writing/          # Blog articles
│   │   ├── speaking/         # Talks and presentations
│   │   ├── testimonials/     # Endorsements
│   │   └── uses/             # Tools and stack page
│   ├── layouts/              # Page layout wrappers
│   ├── pages/                # Astro page routes
│   ├── styles/               # Global CSS + typography
│   ├── config.ts             # Site config (reads from .env)
│   ├── content.config.ts     # Content collection schemas
│   └── pages.config.ts       # Page titles / descriptions
├── .env                      # Your config (not committed)
└── .env.example              # Template
```

---

## ✏️ Updating Content

All content lives in `src/content/` as MDX files.

### New Project Case Study
`src/content/projects/my-project.mdx`
```yaml
---
title: "Project Title"
role: "Your Role"
year: 2024
featured: true
order: 5
outcomeSummary: "One-line impact summary"
overview: "High-level overview"
problem: "Problem being solved"
constraints:
  - "Constraint 1"
approach: "How you approached it"
keyDecisions:
  - decision: "Decision made"
    reasoning: "Why you chose this"
    alternatives: ["Option A", "Option B"]
techStack: ["Tool 1", "Tool 2"]
impact:
  - metric: "50%"
    description: "Reduction in X"
---
Your narrative content here...
```

### New Decision Record
`src/content/decisions/my-decision.mdx`
```yaml
---
title: "Decision Title"
date: 2024-01-15
context: "Why this decision mattered"
decision: "What was decided"
alternatives:
  - option: "Option A"
    pros: ["Pro 1"]
    cons: ["Con 1"]
reasoning: "Why this was chosen"
tags: ["architecture"]
---
```

### New Article
`src/content/writing/my-article.mdx`
```yaml
---
title: "Article Title"
description: "SEO description"
publishDate: 2024-06-01
tags: ["engineering"]
---
```

### New Journey Milestone
`src/content/journey/milestone.mdx`
```yaml
---
date: 2024-03-01
title: "Milestone Title"
type: "milestone"  # milestone | learning | transition
description: "Brief description for timeline"
skills: ["Skill 1"]
---
```

---

## ⚙️ Environment Variables

```bash
SITE_URL=https://mmujtabaejaz.com
SITE_AUTHOR_NAME="Muhammad Mujtaba"
SITE_AUTHOR_TITLE="Co-Head of Engineering · AI Advocate · Builder"
SITE_AUTHOR_EMAIL=mmujtabaejaz@gmail.com
SITE_AUTHOR_LOCATION="Karachi, Pakistan"
SOCIAL_LINKEDIN=https://linkedin.com/in/mmujtabaejaz
SITE_TITLE="Muhammad Mujtaba — Engineering Leader"
SITE_DESCRIPTION="Co-Head of Engineering at Bykea..."
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Display font | Instrument Serif |
| Body font | DM Sans |
| Code font | DM Mono |
| Default theme | Dark |
| Accent (dark) | `#58a6ff` |
| Accent (light) | `#0969da` |

CSS variables are in `src/styles/global.css`.

---

## 🔮 Roadmap

- [ ] Add profile photo to hero
- [ ] `/resume` printable page
- [ ] Contact form via Cloudflare Workers
- [ ] Privacy-first analytics (Plausible / Fathom)
- [ ] RSS feed for writing
- [ ] Pagefind search integration
=======
# mujtaba-ai
Mujtaba AI Website Repo
>>>>>>> 39c376f88a15da7d6e04f3e5cd2a288f2b511d45
