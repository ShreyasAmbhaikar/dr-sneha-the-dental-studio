# 06 · Website content plan

One page, one primary keyword. The home page owns "dentist / dental clinic in Wadgaon Sheri"; 25 service pages own "treatment + Wadgaon Sheri / Pune"; 4 neighbourhood pages own the areas next door.

## Implementation notes for this codebase

- Service pages are data-driven: add entries to `src/lib/treatments.ts`; the page template, metadata, JSON-LD (MedicalProcedure, FAQPage, BreadcrumbList), sitemap and llms.txt pick them up automatically.
- `braces-and-aligners` splits into `braces` and `clear-aligners` (the site is not live yet, so no redirect is needed; if it goes live first, add a 301 to `/treatments/braces`).
- Update `metaTitle`/`h1` of the 8 live entries to the local formula below.
- Neighbourhood pages need a new route (`src/app/[area]/page.tsx` or static routes) with their own data file.

## Page map

| URL | Primary keyword | Supporting keywords | Status |
| --- | --- | --- | --- |
| `/` | dentist in wadgaon sheri | dental clinic in wadgaon sheri, vadgaon sheri dentist, evening dentist pune | Live, retarget |
| `/treatments/general-dentistry` | dental check-up in wadgaon sheri | dental consultation pune, family dentist | Live, retarget |
| `/treatments/teeth-cleaning` | teeth cleaning in wadgaon sheri | scaling and polishing pune, cost | New |
| `/treatments/tooth-coloured-fillings` | tooth filling in pune | cavity treatment, composite filling, cost | New |
| `/treatments/root-canal-treatment` | root canal treatment in wadgaon sheri | cost in pune, single-sitting, microscope | Live, retarget |
| `/treatments/tooth-extraction` | tooth extraction in pune | tooth removal near wadgaon sheri, cost | New |
| `/treatments/wisdom-tooth-removal` | wisdom tooth removal in pune | impacted wisdom tooth, cost | Live, retarget |
| `/treatments/dental-implants` | dental implants in wadgaon sheri | cost in pune, single tooth implant | Live, retarget |
| `/treatments/full-mouth-implants` | full mouth dental implants pune | all-on-4, all-on-6 | New |
| `/treatments/crowns-and-bridges` | dental crown in pune | zirconia crown cost, bridge | New |
| `/treatments/dentures` | dentures in pune | partial, implant-supported, cost | New |
| `/treatments/full-mouth-rehabilitation` | full mouth rehabilitation pune | worn teeth, bite correction | New |
| `/treatments/braces` | braces in wadgaon sheri | braces cost in pune, ceramic braces | Split |
| `/treatments/clear-aligners` | clear aligners in pune | invisible braces, aligner cost | Split |
| `/treatments/teeth-whitening` | teeth whitening in wadgaon sheri | cost in pune | Live, retarget |
| `/treatments/veneers` | dental veneers in pune | laminates, cost | New |
| `/treatments/smile-makeover` | smile makeover in pune | smile designing, cosmetic dentist wadgaon sheri | Live, retarget |
| `/treatments/dental-bonding` | chipped tooth repair pune | bonding, gap closure | New |
| `/treatments/gum-treatment` | gum treatment in wadgaon sheri | bleeding gums, periodontal treatment | Live, retarget |
| `/treatments/laser-dentistry` | laser dentistry in pune | laser gum treatment | New |
| `/treatments/kids-dentistry` | kids dentist in wadgaon sheri | pediatric dentist pune | New |
| `/treatments/emergency-dental-care` | emergency dentist in pune | toothache treatment, same-day dentist | New |
| `/treatments/tooth-sensitivity` | tooth sensitivity treatment | sensitive teeth pune | New |
| `/treatments/tmj-treatment` | tmj treatment in pune | jaw pain, splint therapy | New |
| `/treatments/mouth-guards` | night guard for teeth grinding | sports mouth guard pune | New |
| `/treatments/frenectomy` | tongue tie surgery pune | frenectomy for babies | New |
| `/dentist-in-kharadi` | dentist in kharadi | dental clinic in kharadi, near EON IT Park | New |
| `/dentist-in-viman-nagar` | dentist in viman nagar | dental clinic in viman nagar | New |
| `/dentist-in-kalyani-nagar` | dentist in kalyani nagar | dental clinic kalyani nagar | New |
| `/dentist-in-chandan-nagar` | dentist in chandan nagar pune | — | New |
| `/about-dr-sneha-sardar` | dr sneha sardar | lady dentist wadgaon sheri | New |
| `/our-team` | — | visiting orthodontist / endodontist pune | New |
| `/contact` | dental clinic wadgaon sheri 411014 | dentist open on sunday pune | New |

## Build order (matches the roadmap)

1. Weeks of 16–23 Nov: retarget the 8 live pages + home.
2. 30 Nov – 22 Jan (≈2 a week), by demand: clear-aligners, braces, kids-dentistry, emergency-dental-care, teeth-cleaning, tooth-extraction, crowns-and-bridges, veneers, full-mouth-implants, dentures, tooth-coloured-fillings, gum/laser-dentistry, dental-bonding, tooth-sensitivity, tmj-treatment, mouth-guards, frenectomy, full-mouth-rehabilitation.
3. 25 Jan – 5 Feb: the 4 neighbourhood pages, /about-dr-sneha-sardar, /our-team, /contact.

## On-page formula (service pages)

- **Title (≤60):** `{Treatment} in Wadgaon Sheri, Pune | The Dental Studio` — shorten the treatment name if needed.
- **Meta description (≤155):** benefit + "{Treatment} by Dr. Sneha Sardar in Wadgaon Sheri. Evening appointments till 9:30 PM."
- **H1:** `{Treatment} in Wadgaon Sheri, Pune`
- **First 100 words:** primary keyword once, "Wadgaon Sheri" once, one neighbourhood.
- **H2 sequence:** What is {treatment} · Signs you need it · Procedure step by step · {Treatment} cost in Pune (factors + range) · Recovery & aftercare · Why patients from Wadgaon Sheri, Kharadi and Viman Nagar choose us · FAQs.
- **Length:** 900–1,400 words. **FAQs:** 5–7 from real patient questions (feeds FAQPage schema and Google's AI answers).
- **Links:** 2–3 contextual links to related treatments inside the text (no "related services" block, per the design), 1 to the nearest neighbourhood page, 1 to /our-team when a specialist is involved.
- **Images:** real clinic photos; alt like "dental implant consultation at our Wadgaon Sheri clinic".
- **E-E-A-T:** byline "Reviewed by Dr. Sneha Sardar, BDS" + last-reviewed date once she has reviewed the page.

## Neighbourhood page formula (≥600 unique words)

Route and drive time from 2–3 area landmarks (e.g. Kharadi: EON IT Park, World Trade Center; Viman Nagar: Phoenix Marketcity, Symbiosis; Kalyani Nagar: Hyatt, Gold Adlabs road), parking, the 4–6 treatments people from that area book most, 2–3 reviews from patients who live there (with permission), area FAQs, embedded map with directions. Never copy-paste between area pages — that is a doorway-page pattern Google ignores or penalises.

## Compliance (Dental Council of India code of ethics + Google health policies)

- No "best", "No.1", "guaranteed", or comparisons with other dentists.
- "Gentle" / "pain-managed" instead of "painless".
- Before/after images only with written patient consent; no identifying details.
- Costs as ranges and the factors behind them — not discounts or offers.
- Testimonials: real, unedited, with consent; never fabricated.

## Blog calendar — 24 posts, 2 a month

| Month | Post 1 | Post 2 |
| --- | --- | --- |
| Dec 2026 | Root canal treatment cost in Pune: a 2027 guide | Dental implant cost in Pune: what changes the price |
| Jan 2027 | Braces or clear aligners: which suits you | Toothache at night: what to do before you see a dentist |
| Feb 2027 | Teeth whitening in Pune: in-clinic or home kits | Bleeding gums: causes and when to see a dentist |
| Mar 2027 | World Oral Health Day camp in Wadgaon Sheri (20 Mar) | Your child's first dental visit: a parent's guide |
| Apr 2027 | Wisdom tooth pain: removal, cost and recovery | Dentures or implants for missing teeth |
| May 2027 | Zirconia or metal-ceramic crowns | Dental care during pregnancy |
| Jun 2027 | Back-to-school dental check-up checklist | Is a root canal painful? What to really expect |
| Jul 2027 | Monsoon and tooth sensitivity: what helps | Single-sitting root canal: who it suits |
| Aug 2027 | How long do dental implants last? | Teeth grinding at night: causes and night guards |
| Sep 2027 | Ganeshotsav sweets and your teeth | Veneers or crowns: which is right for your front teeth |
| Oct 2027 | Smile makeover before a wedding: a timeline | Tongue-tie in babies: signs and treatment |
| Nov 2027 | Dental emergencies during Diwali: what to do | Choosing a dentist in Wadgaon Sheri: 7 questions to ask |

Each post: 1,200–1,800 words, one target keyword (see `keywords.csv`, cluster "Symptoms & questions" / cost terms), a "Reviewed by Dr. Sneha Sardar" line, and a link to the matching service page. Share every post as a GBP post the same week.
