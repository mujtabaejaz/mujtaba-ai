# Deployment Guide — Cloudflare Pages

Step-by-step instructions to get this portfolio live on Cloudflare Pages with a custom domain.

---

## Step 1 — Push to GitHub

```bash
# Initialize a git repo (if not done already)
cd mujtaba-portfolio
git init
git add .
git commit -m "feat: Muhammad Mujtaba portfolio — initial release"

# Create a repo on GitHub (github.com/new), then:
git remote add origin https://github.com/YOUR_USERNAME/mujtaba-portfolio.git
git branch -M main
git push -u origin main
```

---

## Step 2 — Deploy on Cloudflare Pages

1. Go to **[dash.cloudflare.com](https://dash.cloudflare.com)**
2. Click **Workers & Pages** → **Create application** → **Pages** tab
3. Click **Connect to Git** → authorize GitHub → select your repo
4. Configure build settings:

| Setting | Value |
|---|---|
| Production branch | `main` |
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | *(leave blank)* |
| Node.js version | `18` |

5. Click **Save and Deploy**

---

## Step 3 — Add Environment Variables

After the first deploy (it will likely fail without env vars), go to:

**Pages project → Settings → Environment variables → Production**

Add each of these:

| Variable | Value |
|---|---|
| `SITE_URL` | `https://mmujtabaejaz.com` |
| `SITE_AUTHOR_NAME` | `Muhammad Mujtaba` |
| `SITE_AUTHOR_TITLE` | `Co-Head of Engineering · AI Advocate · Builder` |
| `SITE_AUTHOR_BIO` | *(your bio)* |
| `SITE_AUTHOR_EMAIL` | `mmujtabaejaz@gmail.com` |
| `SITE_AUTHOR_LOCATION` | `Karachi, Pakistan` |
| `SOCIAL_LINKEDIN` | `https://linkedin.com/in/mmujtabaejaz` |
| `SITE_TITLE` | `Muhammad Mujtaba — Engineering Leader` |
| `SITE_DESCRIPTION` | *(your description)* |
| `SITE_LANGUAGE` | `en` |

Then trigger a new deploy: **Deployments → Retry deployment**.

---

## Step 4 — Connect Custom Domain

1. In your Pages project → **Custom domains** → **Set up a custom domain**
2. Enter your domain (e.g. `mmujtabaejaz.com`)
3. Cloudflare will auto-configure DNS if your domain is managed by Cloudflare
4. If using an external registrar, add the CNAME record they show you

**Full domain propagation:** 5–30 minutes.

---

## Step 5 — Verify Deployment

After the domain is live:

```bash
# Check sitemap generated
curl https://mmujtabaejaz.com/sitemap-index.xml

# Check robots.txt
curl https://mmujtabaejaz.com/robots.txt

# Run Lighthouse audit
npx lighthouse https://mmujtabaejaz.com --view
```

---

## Continuous Deployment

Every push to `main` triggers an automatic redeploy on Cloudflare Pages. Your workflow:

```bash
# Update content
vim src/content/projects/new-project.mdx

# Commit and push — Cloudflare auto-deploys
git add .
git commit -m "content: add new project case study"
git push
```

Cloudflare typically builds and deploys in under 60 seconds.

---

## Preview Deployments

Every PR or non-main branch gets a unique preview URL automatically:
```
https://abc123.mujtaba-portfolio.pages.dev
```

Use these to review content changes before merging to main.

---

## Troubleshooting

**Build fails with "environment variable not found"**  
→ Add missing vars in Cloudflare dashboard under Environment Variables, then redeploy.

**Pages shows old content after pushing**  
→ Hard refresh (Ctrl+Shift+R). Cloudflare CDN caches aggressively — purge via dashboard if needed.

**Custom domain not resolving**  
→ Check DNS propagation at [dnschecker.org](https://dnschecker.org). CNAME records can take up to 24h with some registrars.

**Build succeeds but styles are broken**  
→ Make sure `SITE_URL` doesn't have a trailing slash (`https://example.com` not `https://example.com/`).
