# 02 · GBP gap analysis

Source: GMB Everywhere local scan, 20 businesses, search "dental clinic in Wadgaon Sheri", supplied 7 Nov 2026. Competitor review and service counts are read off the scan's charts (±10); the clinic's figures are from its GBP.

## Scan at a glance

| Rank | Business (short) | Reviews (≈) | Categories | Services (≈) | Name contains keyword? |
| --- | --- | --- | --- | --- | --- |
| 1 | Saraswati Dental Care And Implant Center | 365 | 8 | 22 | Yes ("Dental Care", "Implant") |
| 2 | Varad Dental clinic / Best root canal… / Best tooth Implant in Wadgaon Sheri, Kharadi, Chandan Nagar | 110 | 1 | 19 | **Stuffed** |
| 3 | Kendre Dental Clinic and Implant Centre | 100 | 1 | 19 | Yes |
| 4 | Dantveda Dental Clinic & Implant Center | 50 | 7 | 20 | Yes |
| 5 | Morya Dental Clinic and Implant Centre | 30 | 1 | 15 | Yes |
| 6 | Shri Vyankatesh Dental Clinic and Implant Centre | 20 | 5 | 30 | Yes |
| 7 | PRECISION Dental Clinic | 95 | 1 | 12 | Yes |
| 8 | Dr. Raut's Dental Clinic | 15 | 1 | 0 | Yes |
| 9 | EKNATH DENTAL CARE | 390 | 10 | 231 | Partly |
| 10 | FAMILY DENTAL CLINIC \| Dr. Shailesh Dhaigude | 145 | 6 | 18 | Yes |
| **11** | **Dr. Sneha-The Dental Studio** | **284** | **1** | **~18** | No |
| 12–20 | (others) | 0–310 | 1–10 | 0–56 | mixed |

Averages over the top 10: **≈132 reviews, 4.1 categories (3.1 secondary)**. 16 of 20 use "Dental clinic" as the primary category.

## Signal-by-signal

### 1. Categories — critical gap
- Clinic: 1 (Dental clinic). Ranks 1, 4, 6, 9, 10 use 5–10.
- Most used secondaries across the 20: Dentist (9), Endodontist (8), Cosmetic dentist (7), Orthodontist (6), Dental implants periodontist (5), Pediatric dentist (5), Dental implants provider (4), Emergency dental service (4), Oral surgeon (3), Prosthodontist (3), Periodontist (3), Teeth whitening service (2).
- The clinic genuinely offers all of these (visiting specialists confirmed), so the categories are legitimate. → Playbook §1.

### 2. Services — high gap
- Clinic: ~18 standard services without descriptions. Competitors' most common: Dental implants, Extractions, Teeth cleaning, Veneers & crowns (9 each); Teeth whitening, Cosmetic procedures, Dentures & bridges, Fillings & sealants, Oral surgery, Paediatrics, X-ray (8 each).
- 328 unique services exist across the 20; #9 lists 231 (a sign that volume alone does not win — #9 still ranks below #1–#8).
- → 25 custom services, each with a 300-character keyword description (`gbp-services.csv`).

### 3. Reviews — strength
- 284 at 4.9; only #1 (≈365) and #9 (≈390) have more in the top 10.
- Gaps inside reviews: velocity (unknown — check the last 90 days), keywords inside reviews (treatments + areas), owner replies. → Playbook §6.

### 4. Business name — structural
- Top 5 all contain "Dental Clinic"/"Implant Centre". Exact-match names are a strong relevance signal Google still rewards.
- Do **not** add keywords to the GBP name unless the clinic's real signboard and documents change. Instead: report #2's stuffed name (Business Redressal Complaint Form) and any top-10 name that does not match its signboard.

### 5. Description — medium gap
- Current text is generic, writes "Wadgaonsheri" as one word, uses "Dr. Sneha Sardar's dental studio" (not the GBP name), and names no treatment or neighbourhood. → New 709-character description (Playbook §3).

### 6. Website — high gap
- No clinic website surfaced in search. The new Next.js site is built; link it on the GBP (with UTM) and make the site's NAP identical to the GBP (done in code).

### 7. Hours — medium
- 10:30–14:30 and 17:30–21:30 (Sun 10:30–13:30). The clinic is hidden from "open now" results 14:30–17:30 daily. Evening hours until 21:30 are a differentiator — say so in the description, posts and site.
- Do not list hours the clinic does not keep.

### 8. Citations — high gap
- Found: Bajaj Finserv Health (12 yrs, ₹350; lists a second dentist, Dr. Palak Jain, at the address), DocIndia (16 yrs in header vs 10 in About; no street address; work location "Thanesar, Haryana"). Practo and Justdial not found.
- → Fix both, then 35 new citations (`citations-calendar.csv`).

### 9. Q&A — not available
- Google turned off GBP Q&A in India in Sep 2024 (policy abuse); globally Q&A is being replaced by the AI "Ask" feature, which answers from reviews, services, the description and photos. → Those four inputs matter more than ever.

### 10. Not in the scan data (needs GBP manager access)
- Photo count and recency, post frequency, products, attributes, booking link, review reply rate. Audit these in the GBP dashboard in the week of 9 Nov.

## Proximity check

The clinic (Swaraj Complex, opp. Datta Mandir, near Shiv Shakti Chowk / Bramha Suncity; 18.5456539, 73.921896) sits close to the Wadgaon Sheri label on Maps. Ranks 1–6 cluster around Ganesh Nagar / Old Mundhwa Road, slightly east. Proximity therefore does not explain #11 — relevance and prominence do.
