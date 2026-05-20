# CLAUDE.md — Loan Officer Website + Obsidian Vault
> Full project reference for AI-assisted development. This file tells Claude (and any developer) everything needed to understand, build, and maintain this project.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Goals & Success Criteria](#2-goals--success-criteria)
3. [Tech Stack](#3-tech-stack)
4. [Git Setup & Workflow](#4-git-setup--workflow)
5. [Website — Folder & File Structure](#5-website--folder--file-structure)
6. [Website — Pages & Features](#6-website--pages--features)
7. [Website — Component Reference](#7-website--component-reference)
8. [Website — API & Data Layer](#8-website--api--data-layer)
9. [Obsidian Vault — Structure & Purpose](#9-obsidian-vault--structure--purpose)
10. [Obsidian Vault — Templates](#10-obsidian-vault--templates)
11. [Deployment](#11-deployment)
12. [Environment Variables](#12-environment-variables)
13. [Code Conventions](#13-code-conventions)
14. [Known Issues & Future Work](#14-known-issues--future-work)

---

## 1. Project Overview

**Project name:** Loan Officer Website + Obsidian Knowledge Base
**Owner:** Shion
**Purpose:** A professional website for a loan officer that generates leads, builds credibility, and guides clients through the mortgage/loan process — paired with an Obsidian vault for managing clients, pipelines, compliance notes, and knowledge.

The two parts are meant to work together:
- The **website** is the public-facing front door — it attracts clients, answers questions, and captures leads via forms.
- The **Obsidian vault** is the private back office — it tracks every client, loan, meeting, and piece of research so the loan officer stays organized and compliant.

---

## 2. Goals & Success Criteria

### Website Goals
- Present the loan officer as a trusted, professional expert
- Clearly explain loan products (purchase, refinance, FHA, VA, conventional, USDA, jumbo)
- Let visitors apply or request a consultation online
- Capture leads via contact and pre-qualification forms
- Be fast, mobile-friendly, and SEO-optimized
- Comply with NMLS disclosure and licensing requirements

### Obsidian Vault Goals
- Track every client from first contact through close
- Maintain a running loan pipeline with status updates
- Store compliance notes, checklists, and regulatory references
- Capture meeting notes and follow-up action items
- Organize marketing ideas and content drafts
- Provide reusable templates so no step is ever missed

### Success Criteria
- [ ] Website scores 90+ on Google Lighthouse (performance, SEO, accessibility)
- [ ] Contact form submissions go to email and CRM
- [ ] All loan product pages are live and accurate
- [ ] Obsidian vault has at least one complete client file from inquiry to close
- [ ] All regulatory disclosures are present and correct

---

## 3. Tech Stack

### Website

| Layer | Technology | Notes |
|---|---|---|
| Framework | Next.js 14 (App Router) | React-based, file-system routing, SSR + SSG |
| Language | TypeScript | Strict mode enabled |
| Styling | Tailwind CSS + shadcn/ui | Utility-first CSS, accessible component library |
| Forms | React Hook Form + Zod | Validation, schema-based |
| Email | Resend (or Nodemailer) | Form submission emails |
| CRM | HubSpot (optional) | Lead capture integration |
| Database | Supabase (PostgreSQL) | Stores form submissions, blog posts |
| Auth | NextAuth.js | Admin-only dashboard login |
| Hosting | Vercel | Zero-config Next.js deploy |
| Analytics | Vercel Analytics + Google Tag Manager | Traffic + conversion tracking |
| SEO | next-seo | Meta tags, Open Graph, structured data |
| Maps | Google Maps Embed API | Office location |
| Mortgage Calculator | Custom component | Amortization math, built in-house |

### Obsidian Vault

| Feature | Plugin / Tool | Notes |
|---|---|---|
| Core | Obsidian (desktop) | Free, local-first markdown notes |
| Kanban | Obsidian Kanban plugin | Visual pipeline board |
| Templates | Templater plugin | Smart templates with dynamic fields |
| Database views | Dataview plugin | Query notes like a database |
| Calendar | Calendar plugin | See notes by date |
| Tasks | Tasks plugin | Track to-dos across all notes |
| Sync | Obsidian Sync or iCloud | Keep vault backed up |
| Git backup | obsidian-git plugin | Auto-commit vault to private GitHub repo |

---

## 4. Git Setup & Workflow

### Initial Setup

```bash
# Clone the website repo
git clone https://github.com/YOUR_USERNAME/loan-officer-website.git
cd loan-officer-website/website

# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local
# Fill in your values in .env.local

# Run locally
npm run dev
# → http://localhost:3000
```

### Branch Strategy

```
main          → production (auto-deploys to Vercel)
dev           → staging branch, merge PRs here first
feature/*     → individual features (e.g. feature/contact-form)
fix/*         → bug fixes (e.g. fix/mobile-nav)
content/*     → copy/content updates (e.g. content/about-page)
```

### Commit Message Convention

```
feat: add mortgage calculator component
fix: correct phone number format on contact page
content: update bio on about page
style: adjust button padding on mobile
docs: update CLAUDE.md with new env vars
chore: upgrade Next.js to 14.2
```

### GitHub Actions (CI/CD)

Located at `.github/workflows/`:
- `ci.yml` — runs lint + type-check + tests on every PR
- `deploy.yml` — auto-deploy to Vercel on merge to `main`

---

## 5. Website — Folder & File Structure

```
loan-officer-website/
└── website/
    ├── .github/
    │   └── workflows/
    │       ├── ci.yml                  # Lint, typecheck, test on PRs
    │       └── deploy.yml              # Auto-deploy to Vercel on main
    │
    ├── public/
    │   ├── images/
    │   │   ├── headshot.jpg            # Loan officer professional photo
    │   │   ├── logo.svg                # Company/personal logo
    │   │   └── og-image.jpg            # Open Graph preview image (1200x630)
    │   ├── fonts/                      # Self-hosted fonts (if any)
    │   └── favicon.ico
    │
    ├── src/
    │   ├── app/                        # Next.js App Router pages
    │   │   ├── layout.tsx              # Root layout (header, footer, metadata)
    │   │   ├── page.tsx                # Home page
    │   │   ├── globals.css             # Global styles
    │   │   │
    │   │   ├── about/
    │   │   │   └── page.tsx            # About the loan officer
    │   │   │
    │   │   ├── loans/
    │   │   │   ├── page.tsx            # Loan products overview
    │   │   │   ├── purchase/page.tsx   # Home purchase loans
    │   │   │   ├── refinance/page.tsx  # Refinance loans
    │   │   │   ├── fha/page.tsx        # FHA loans
    │   │   │   ├── va/page.tsx         # VA loans
    │   │   │   ├── conventional/page.tsx
    │   │   │   ├── usda/page.tsx       # USDA rural loans
    │   │   │   └── jumbo/page.tsx      # Jumbo loans
    │   │   │
    │   │   ├── apply/
    │   │   │   └── page.tsx            # Pre-qualification / application form
    │   │   │
    │   │   ├── calculator/
    │   │   │   └── page.tsx            # Mortgage payment calculator
    │   │   │
    │   │   ├── blog/
    │   │   │   ├── page.tsx            # Blog index
    │   │   │   └── [slug]/page.tsx     # Individual blog post
    │   │   │
    │   │   ├── contact/
    │   │   │   └── page.tsx            # Contact form + map
    │   │   │
    │   │   ├── faq/
    │   │   │   └── page.tsx            # Frequently asked questions
    │   │   │
    │   │   ├── testimonials/
    │   │   │   └── page.tsx            # Client reviews/testimonials
    │   │   │
    │   │   ├── privacy/
    │   │   │   └── page.tsx            # Privacy policy
    │   │   │
    │   │   ├── terms/
    │   │   │   └── page.tsx            # Terms of service
    │   │   │
    │   │   └── api/
    │   │       ├── contact/route.ts    # Contact form handler
    │   │       ├── apply/route.ts      # Application form handler
    │   │       └── blog/route.ts       # Blog post API (Supabase)
    │   │
    │   ├── components/
    │   │   ├── layout/
    │   │   │   ├── Header.tsx          # Navigation bar
    │   │   │   ├── Footer.tsx          # Footer with disclosures
    │   │   │   └── MobileMenu.tsx      # Hamburger menu for mobile
    │   │   │
    │   │   ├── home/
    │   │   │   ├── HeroSection.tsx     # Big headline, CTA buttons
    │   │   │   ├── LoanTypesGrid.tsx   # Grid of loan product cards
    │   │   │   ├── HowItWorks.tsx      # 3-step process section
    │   │   │   ├── Testimonials.tsx    # Client quote carousel
    │   │   │   └── CTABanner.tsx       # "Ready to get started?" banner
    │   │   │
    │   │   ├── forms/
    │   │   │   ├── ContactForm.tsx     # Name, email, phone, message
    │   │   │   ├── ApplyForm.tsx       # Pre-qual multi-step form
    │   │   │   └── FormSuccess.tsx     # Success state after submit
    │   │   │
    │   │   ├── calculator/
    │   │   │   └── MortgageCalculator.tsx  # Interactive payment calc
    │   │   │
    │   │   ├── blog/
    │   │   │   ├── BlogCard.tsx        # Post preview card
    │   │   │   └── BlogPost.tsx        # Full post renderer
    │   │   │
    │   │   └── ui/
    │   │       ├── Button.tsx          # Reusable button variants
    │   │       ├── Badge.tsx           # Loan type badges
    │   │       ├── Card.tsx            # Generic card wrapper
    │   │       └── Disclosure.tsx      # NMLS/legal disclosure text
    │   │
    │   ├── styles/
    │   │   └── tailwind.config.ts      # Custom colors, fonts, breakpoints
    │   │
    │   ├── utils/
    │   │   ├── mortgageCalc.ts         # Amortization math functions
    │   │   ├── formatCurrency.ts       # $1,234.56 formatter
    │   │   ├── validatePhone.ts        # Phone number validation
    │   │   └── sendEmail.ts            # Email send helper (Resend)
    │   │
    │   ├── hooks/
    │   │   ├── useCalculator.ts        # Calculator state logic
    │   │   └── useFormSubmit.ts        # Form submission state
    │   │
    │   ├── api/
    │   │   └── supabase.ts             # Supabase client init
    │   │
    │   ├── data/
    │   │   ├── loanProducts.ts         # All loan type content/copy
    │   │   ├── faqItems.ts             # FAQ questions + answers
    │   │   └── testimonials.ts         # Hardcoded or fetched reviews
    │   │
    │   └── types/
    │       ├── loan.ts                 # Loan product TypeScript types
    │       ├── form.ts                 # Form field types
    │       └── blog.ts                 # Blog post types
    │
    ├── tests/
    │   ├── calculator.test.ts          # Unit tests for mortgage math
    │   ├── contact-form.test.ts        # Form validation tests
    │   └── pages.test.ts               # Basic page render tests
    │
    ├── docs/
    │   └── content-guide.md            # How to update copy/content
    │
    ├── .env.example                    # Template for environment variables
    ├── .env.local                      # Local secrets (gitignored)
    ├── .eslintrc.json                  # ESLint config
    ├── .prettierrc                     # Code formatter config
    ├── .gitignore
    ├── next.config.ts                  # Next.js configuration
    ├── tailwind.config.ts              # Tailwind configuration
    ├── tsconfig.json                   # TypeScript configuration
    ├── package.json
    └── README.md
```

---

## 6. Website — Pages & Features

### Home Page (`/`)
- **Hero section** — Headline, subheadline, two CTA buttons: "Get Pre-Qualified" → `/apply` and "Calculate Payment" → `/calculator`
- **Loan types grid** — Cards for each loan product (Purchase, Refinance, FHA, VA, Conventional, USDA, Jumbo)
- **How It Works** — 3-step visual: Apply → Get Approved → Close
- **Testimonials carousel** — Client quotes with star ratings
- **CTA banner** — "Ready to buy or refinance? Let's talk." with phone number and form link

### About Page (`/about`)
- Professional headshot and bio
- NMLS license number (required by law)
- Years of experience, specialties
- Personal story / why they became a loan officer
- Contact info and availability

### Loan Products (`/loans/*`)
Each loan type page includes:
- What it is and who it's for
- Eligibility requirements
- Loan limits (updated annually)
- Pros and cons
- Minimum credit score, down payment
- CTA: "Apply for this loan"

### Apply / Pre-Qualification Form (`/apply`)
Multi-step form:
1. Loan purpose (Purchase, Refinance, Cash-Out)
2. Property type and estimated value
3. Down payment amount
4. Credit score range (self-reported)
5. Income and employment type
6. Contact info (name, email, phone)
7. Confirmation + next steps

### Mortgage Calculator (`/calculator`)
- Loan amount input
- Interest rate input
- Loan term (15 or 30 years)
- Down payment input
- Outputs: Monthly payment, total interest, total cost
- Optional: Property tax + insurance fields
- Amortization schedule table (expandable)

### Blog (`/blog`)
- Index page with search and category filter
- Individual posts with rich text
- Posts stored in Supabase or as MDX files
- Categories: First-Time Buyers, Refinancing, Market Updates, Tips & Advice

### Contact Page (`/contact`)
- Contact form: Name, email, phone, best time to call, message
- Embedded Google Map showing office location
- Direct phone number, email address
- Office hours
- Links to social media / Zillow / Google reviews

### FAQ Page (`/faq`)
- Accordion-style Q&A
- Topics: credit scores, down payments, closing costs, rates, timelines

### Testimonials (`/testimonials`)
- Grid of client reviews
- Star ratings, names, loan types
- Integration with Google Reviews or Zillow (optional)

### Legal Pages
- `/privacy` — Privacy policy (required for forms + analytics)
- `/terms` — Terms of service

### Footer (on every page)
- NMLS disclosure: "NMLS #XXXXXX. Licensed in [States]. Equal Housing Lender."
- Links: Privacy, Terms, Apply, Contact
- Social links

---

## 7. Website — Component Reference

### `MortgageCalculator.tsx`
```
Props: none (fully self-contained)
State: loanAmount, interestRate, loanTerm, downPayment, propertyTax, insurance
Output: monthlyPayment, totalInterest, amortizationSchedule[]
Util: uses src/utils/mortgageCalc.ts
```

### `ApplyForm.tsx`
```
Props: none
Validation: Zod schema per step
On submit: POST to /api/apply
Success: shows FormSuccess.tsx, sends email via Resend
```

### `ContactForm.tsx`
```
Props: none
Fields: name, email, phone, bestTime, message
On submit: POST to /api/contact
Success: shows FormSuccess.tsx
```

### `Disclosure.tsx`
```
Props: nmls: string, states: string[], type: "footer" | "page"
Renders: Required NMLS legal disclaimer text
```

---

## 8. Website — API & Data Layer

### `/api/contact` (POST)
- Validates request body with Zod
- Sends email to loan officer via Resend
- Optionally creates contact in HubSpot CRM
- Returns 200 on success, 400/500 on error

### `/api/apply` (POST)
- Validates multi-step form data
- Sends full application summary to loan officer email
- Stores submission in Supabase `applications` table
- Returns 200 with confirmation number

### Supabase Tables

```sql
-- Blog posts
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT,
  published_at TIMESTAMPTZ DEFAULT NOW(),
  published BOOLEAN DEFAULT FALSE
);

-- Application submissions
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  loan_purpose TEXT,
  property_type TEXT,
  estimated_value NUMERIC,
  down_payment NUMERIC,
  credit_score_range TEXT,
  income_type TEXT,
  name TEXT,
  email TEXT,
  phone TEXT,
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 9. Obsidian Vault — Structure & Purpose

```
loan-officer-website/
└── obsidian/
    ├── .obsidian/                      # Obsidian config (plugins, themes, hotkeys)
    │
    ├── 00-Dashboard/
    │   ├── Home.md                     # Main dashboard — Dataview queries, links
    │   ├── Pipeline-Overview.md        # Kanban embed or Dataview pipeline table
    │   └── Weekly-Review.md            # Template for weekly check-in
    │
    ├── 01-Clients/
    │   ├── _Template-Client.md         # Client note template (see §10)
    │   ├── Active/                     # Current clients in process
    │   └── Closed/                     # Completed loans, archived
    │
    ├── 02-Loans/
    │   ├── _Template-Loan.md           # Loan file template
    │   ├── Purchase/                   # Purchase loan files
    │   ├── Refinance/                  # Refi loan files
    │   └── Other/                      # HELOC, construction, etc.
    │
    ├── 03-Pipeline/
    │   ├── Pipeline-Board.md           # Kanban board (plugin)
    │   └── Status-Definitions.md       # What each stage means
    │
    ├── 04-Resources/
    │   ├── Loan-Limits-2026.md         # FHA, conforming, jumbo limits
    │   ├── Rate-Sheets/                # Saved rate sheets by date
    │   ├── Underwriting-Guidelines.md  # Fannie/Freddie reference notes
    │   └── Lender-Contacts.md          # Wholesale lender contacts
    │
    ├── 05-Templates/
    │   ├── Client-Template.md
    │   ├── Loan-Template.md
    │   ├── Meeting-Notes-Template.md
    │   ├── Follow-Up-Email-Template.md
    │   └── Pre-Approval-Letter-Template.md
    │
    ├── 06-Meetings/
    │   ├── _Template-Meeting.md
    │   └── (meeting notes by date, e.g. 2026-05-20-Smith-Consult.md)
    │
    ├── 07-Compliance/
    │   ├── RESPA-Notes.md              # RESPA rules and reminders
    │   ├── TRID-Checklist.md           # TRID disclosure checklist
    │   ├── HMDA-Reference.md           # HMDA reporting notes
    │   ├── License-Renewal.md          # NMLS renewal dates, CE requirements
    │   └── State-Regulations/          # State-specific notes
    │
    └── 08-Marketing/
        ├── Content-Ideas.md            # Blog post and social media ideas
        ├── Social-Calendar.md          # Posting schedule
        ├── Email-Campaigns/            # Draft email sequences
        └── Analytics-Log.md            # Website traffic notes
```

### Recommended Obsidian Plugins to Install
1. **Dataview** — query clients by status, filter loans by type
2. **Templater** — insert today's date, client name into templates automatically
3. **Kanban** — drag-and-drop pipeline board in `03-Pipeline/`
4. **Tasks** — `- [ ]` style tasks across all notes, queryable
5. **Calendar** — see meeting notes and tasks on a calendar
6. **obsidian-git** — auto-backup to a private GitHub repo every 30 min

---

## 10. Obsidian Vault — Templates

### Client Template (`05-Templates/Client-Template.md`)
```markdown
---
name: {{client_name}}
status: Inquiry | Processing | Approved | Closed | On Hold
loan_type: Purchase | Refinance | FHA | VA | Conventional | USDA | Jumbo
date_created: {{date}}
email: 
phone: 
referral_source: 
---

# {{client_name}}

## Contact Info
- **Email:** 
- **Phone:** 
- **Best time to reach:** 
- **Referral:** 

## Loan Details
- **Loan Type:** 
- **Purpose:** Purchase / Refinance
- **Property Address:** 
- **Loan Amount:** $
- **Purchase Price:** $
- **Down Payment:** $  (  %)
- **Interest Rate:** %
- **Loan Term:** 15 / 30 years

## Status & Timeline
- [ ] Initial consultation complete
- [ ] Documents requested
- [ ] Documents received
- [ ] Pre-approval issued
- [ ] Purchase agreement received
- [ ] Appraisal ordered
- [ ] Underwriting submitted
- [ ] Conditional approval received
- [ ] Conditions cleared
- [ ] Clear to close issued
- [ ] Closing scheduled
- [ ] Closed!

## Notes & Updates
> Add dated notes here

## Documents Checklist
- [ ] Photo ID
- [ ] Last 2 pay stubs
- [ ] Last 2 W-2s / tax returns
- [ ] Last 2 months bank statements
- [ ] Employment verification letter (if needed)
- [ ] Gift letter (if applicable)

## Follow-Up Actions
- [ ] 
```

### Meeting Notes Template (`05-Templates/Meeting-Notes-Template.md`)
```markdown
---
date: {{date}}
client: 
meeting_type: Phone | Video | In-Person
duration: 
---

# Meeting — {{client}} — {{date}}

## Attendees
- 

## Topics Discussed
- 

## Key Decisions
- 

## Action Items
- [ ] (Me) 
- [ ] (Client) 

## Next Meeting
- **Date:** 
- **Agenda:** 
```

---

## 11. Deployment

### Website (Vercel)
1. Push to GitHub
2. Connect repo to Vercel at vercel.com/new
3. Set environment variables in Vercel project settings (see §12)
4. Every push to `main` auto-deploys
5. Every PR gets a preview URL

### Custom Domain
1. Buy domain (e.g. `johnsmithmortgage.com`) at Namecheap or Google Domains
2. In Vercel: Settings → Domains → Add domain
3. Update DNS records at registrar as instructed by Vercel
4. SSL is automatic via Vercel

### Obsidian Vault Backup
- Install `obsidian-git` plugin
- Create private GitHub repo: `loan-officer-vault`
- Configure plugin to auto-commit every 30 minutes
- Commit message: `vault backup: {{date}}`

---

## 12. Environment Variables

Create a `.env.local` file (never commit this). Copy from `.env.example`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Email (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_TO=your@email.com
EMAIL_FROM=noreply@yourdomain.com

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-maps-key

# HubSpot (optional)
HUBSPOT_API_KEY=your-hubspot-key

# Site URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# NMLS
NEXT_PUBLIC_NMLS_NUMBER=123456
NEXT_PUBLIC_LICENSED_STATES=VA,MD,DC
```

---

## 13. Code Conventions

- **TypeScript strict mode** — no `any`, all props typed
- **Component naming** — PascalCase (e.g. `HeroSection.tsx`)
- **File naming** — kebab-case for pages in App Router
- **Imports** — use `@/` alias for `src/` (configured in tsconfig)
- **Styling** — Tailwind utility classes only; no inline styles; no CSS modules
- **Forms** — always use React Hook Form + Zod schema validation
- **API routes** — validate input, handle errors gracefully, return typed responses
- **Accessibility** — all images need `alt` text; all forms need labels; use semantic HTML
- **SEO** — every page needs unique `<title>` and `<meta description>` via next-seo
- **Disclosures** — NMLS number and Equal Housing Lender logo must appear in footer on every page

### Prettier Config (`.prettierrc`)
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

---

## 14. Known Issues & Future Work

### Future Features
- [ ] Live mortgage rate feed (Mortgage News Daily API or similar)
- [ ] Online document upload portal for clients
- [ ] Automated pre-approval letter generator
- [ ] Client portal with login (track loan status)
- [ ] Automated text/email follow-up sequences (via Twilio / Resend)
- [ ] Video testimonials section
- [ ] Spanish language version (i18n)
- [ ] Integration with Encompass or Byte loan origination software
- [ ] Google Reviews and Zillow review widget

### Compliance Reminders
- Loan limits update every January — update `data/loanProducts.ts` and Obsidian `04-Resources/Loan-Limits-YYYY.md`
- NMLS license renewal is annual — see `07-Compliance/License-Renewal.md`
- Privacy policy must be updated if you add new data collection
- RESPA and TRID disclosures must be reviewed if fee structures change

---

*Last updated: 2026-05-20 | Maintained by Shion*
