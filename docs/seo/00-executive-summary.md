# Local SEO strategy — Dr. Sneha-The Dental Studio, Wadgaon Sheri, Pune

_Prepared 7 Nov 2026. Client-facing version: https://claude.ai/artifact/6QyHDCtPva9geEnN3eoGVg_

## Files in this folder

| File | What it holds |
| --- | --- |
| `00-executive-summary.md` | This page: diagnosis, top actions, targets |
| `01-keyword-research.md` + `keywords.csv` | 130 keywords with modelled volume bands, intent, difficulty, target page |
| `02-gbp-gap-analysis.md` | Clinic vs the 20 scanned competitors, signal by signal |
| `03-gbp-optimization-playbook.md` + `gbp-services.csv` | Categories, 25 services with descriptions, description, posts, photos, reviews |
| `04-citations-plan.md` + `citations-calendar.csv` | Canonical NAP, fixes, 35 dated citations |
| `05-backlinks-plan.md` | Local link tactics, outreach templates, monthly targets |
| `06-content-plan.md` | Page map, on-page formulas, compliance, 24-topic blog calendar |
| `07-90-day-roadmap.md` | Week-by-week checklist and tracking |

## Diagnosis

The clinic ranks **#11** for "dental clinic in Wadgaon Sheri" (GMB Everywhere local scan, 20 businesses) although its **284 reviews at 4.9★** beat 8 of the top 10. Reviews are not the bottleneck; **relevance and trust signals are**:

| Signal | Clinic | Leaders | Severity |
| --- | --- | --- | --- |
| GBP categories | 1 | #1: 8, #9: 10; top-10 avg 4.1 | Critical |
| GBP services | ~18, no descriptions | #1 ~22, #6 ~30, #9 231 | High |
| Website on GBP | none found | — | High |
| Citations | 2, inconsistent (experience 10/12/13/16 yrs; wrong state on DocIndia) | — | High |
| Description | generic, "Wadgaonsheri", no treatments/areas | — | Medium |
| Name relevance | no "dental clinic" term | top 5 all have "Dental Clinic"/"Implant"; #2 keyword-stuffed | Structural (do not stuff; report spam) |
| Hours | closed 14:30–17:30 | — | Medium (lost "open now" visibility) |
| Proximity | near the Wadgaon Sheri centroid (Shiv Shakti Chowk) | clustered at Ganesh Nagar / Old Mundhwa Rd | Not a blocker |
| GBP Q&A | turned off in India (Sep 2024) | same for all | n/a — invest in reviews/services/description instead |

## The 10 highest-impact actions

1. Website live with the GBP's exact NAP + hours; link it on the GBP with UTM (week of 9 Nov 2026). **The website code is already synced** (`src/lib/site.ts`).
2. Categories: 5 secondary now, 4 more in the week of 23 Nov (9 secondary = maximum).
3. New 709-character description; 25 services with 300-character descriptions.
4. Fix DocIndia and Bajaj Finserv Health; drip 35 citations, three a week, 16 Nov 2026 – 5 Feb 2027.
5. 25 service pages + 4 neighbourhood pages, one keyword each.
6. Review engine: 10–15 new reviews a month via same-day WhatsApp link + QR cards.
7. Reply to every review within 48 h (treatment named only if the patient named it).
8. One GBP post a week; 10–15 real photos a month.
9. 4–6 local links a month (camps, societies, press, partners).
10. Report the keyword-stuffed rank-2 name via Google's Business Redressal form.

## 90-day targets (from 16 Nov 2026)

| Metric | Now | Day 30 | Day 90 |
| --- | --- | --- | --- |
| Rank, "dental clinic in Wadgaon Sheri" | 11 | top 7 | top 3 |
| GBP categories | 1 | 6 | 10 |
| GBP services with descriptions | ~18 | 25 | 25 |
| Google reviews | 284 | 295+ | 320+ |
| Consistent citations | 2 | 15 | 40 |
| Website pages indexed | 0 | 12 | 35+ |

## Open items from the clinic

- A real clinic email address (the site still shows a placeholder).
- Dr. Sneha Sardar's State Dental Council registration number and confirmed years of practice (directories disagree: 10, 12, 13, 16).
- Names, qualifications and visit days of the visiting specialists (ortho, endo, implant, oral surgery) — needed for /our-team and as proof for specialist GBP categories.
- Whether Dr. Palak Jain (listed on Bajaj Finserv Health at the same address) still practises at the clinic.
- The live domain (set `NEXT_PUBLIC_SITE_URL`).

**Caveat:** all search volumes are modelled estimates, not Keyword Planner / Semrush / Ahrefs data. See `01-keyword-research.md` for the validation procedure.
