# 01 · Keyword research

Full sheet: `keywords.csv` (130 keywords). Columns: keyword, cluster, intent, region, est. monthly searches, difficulty (L/M/H), priority (P1–P3 / Protect), target page, GBP use, notes.

## How the volumes were produced (read before using them)

No paid keyword tool was available, so every volume is a **modelled band**, built the same way Keyword Planner reports ranges:

- **Hyperlocal and neighbourhood terms** — scaled from each area's size and commercial profile (Kharadi and Viman Nagar are dense IT/residential hubs; Wadgaon Sheri is residential; Mundhwa, Ramwadi smaller) and typical Indian locality-search ratios.
- **"Treatment + Pune"** — scaled from Pune metro's share of national dental demand.
- **Near-me** — Pune metro share only; Maps serves these by proximity, so only a fraction reaches a clinic 2–3 km away.
- **Informational** — India-wide (location does not matter for these).

Treat bands as **relative priorities**, not forecasts.

### Validate in 20 minutes (free)

1. Google Ads → Tools → **Keyword Planner** → *Get search volume and forecasts* → paste column A of `keywords.csv`.
2. Location: **Pune, Maharashtra** (add a second run for **411014** radius if offered). Languages: English + Marathi.
3. Download → replace the `est_monthly_searches` column. Keep the band if Planner shows "–".
4. 6 weeks after launch: Search Console → Performance → Queries, regex `wadgaon|vadgaon|kharadi|viman|kalyani|chandan` → these are your real local queries; add any missing ones to the sheet.

## What the research says

1. **Maps "near me" demand dwarfs everything else** (est. 8,000–18,000/month for "dentist near me" in Pune). It is won by GBP relevance (categories, services), prominence (reviews, citations, links) and proximity — not by page copy. → GBP work is priority #1.
2. **The scan keyword is real but small**: "dental clinic in wadgaon sheri" ≈ 90–210/month, "dentist in wadgaon sheri" ≈ 140–320. High intent, decent conversion.
3. **Neighbours out-search Wadgaon Sheri**: Kharadi (320–720) and Viman Nagar (260–590) ≈ 2× Wadgaon Sheri; Kalyani Nagar (170–390) also larger. → 4 genuine neighbourhood pages + area mentions in GBP description, posts and review replies.
4. **Treatment + Wadgaon Sheri terms are tiny (10–40 each) but nearly uncontested** — 17 of them, each a service-page H1. Cheap wins that also strengthen GBP relevance.
5. **Cost terms are the biggest city-level opportunity**: dental implant cost in Pune (590–1,300), braces cost (390–880), root canal cost (320–720), whitening cost (140–320), wisdom tooth removal cost (140–320). → A "Cost in Pune" H2 on each service page + cost-guide blog posts. Give ranges and factors, not offers (DCI ethics).
6. **Kids and emergency** have healthy demand (pediatric dentist in Pune 390–880; emergency dentist Pune 140–320) and few local competitors use those categories (5/20 and 4/20).
7. **Spelling variants matter**: "Vadgaon Sheri" is common on maps and forms. Use it once on the home page and in the citation descriptions.
8. **Marathi** searches are small (10–30) but competitor Dantveda uses a Marathi name; one Marathi line on the home page and in occasional posts covers it.

## Priority keyword → page map (P1 only)

| Keyword | Page |
| --- | --- |
| dentist in wadgaon sheri; dental clinic in wadgaon sheri; vadgaon sheri dentist | `/` (home) |
| root canal treatment in wadgaon sheri; root canal treatment cost in pune; root canal near me | `/treatments/root-canal-treatment` |
| dental implants in wadgaon sheri; dental implant cost in pune; dental implants near me | `/treatments/dental-implants` |
| braces in wadgaon sheri; braces cost in pune; braces near me; orthodontist near me | `/treatments/braces` |
| clear aligners in pune; clear aligners wadgaon sheri | `/treatments/clear-aligners` |
| teeth whitening wadgaon sheri; teeth whitening in pune / cost | `/treatments/teeth-whitening` |
| kids dentist wadgaon sheri; pediatric dentist in pune / near me | `/treatments/kids-dentistry` |
| emergency dentist wadgaon sheri / pune / near me | `/treatments/emergency-dental-care` |
| wisdom tooth removal cost in pune; near me | `/treatments/wisdom-tooth-removal` |
| cosmetic dentist wadgaon sheri / near me | `/treatments/smile-makeover` |
| dentist in kharadi; dental clinic in kharadi | `/dentist-in-kharadi` |
| dentist in viman nagar; dental clinic in viman nagar | `/dentist-in-viman-nagar` |
| dentist in kalyani nagar | `/dentist-in-kalyani-nagar` |
| dentist in chandan nagar pune | `/dentist-in-chandan-nagar` |

## Keywords deliberately not targeted

- **"24 hour dentist pune"** — the clinic is not open 24 h; targeting it would mislead patients.
- **"Invisalign …"** — use the brand only if the clinic is a certified Invisalign provider.
- **"best dentist …" as a claim** — target it only through reviews and an FAQ ("How do I choose a dentist in Wadgaon Sheri?"); self-praise breaches the Dental Council of India code of ethics.
