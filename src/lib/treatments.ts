/**
 * Treatment content. Structured so every page section (hero, overview,
 * signs, procedure timeline, benefits, aftercare, FAQ) and every SEO surface
 * (metadata, JSON-LD, sitemap, llms.txt) reads from one place.
 *
 * Fully categorized across 5 clinical specialties, covering all 25 treatments
 * documented in docs/seo/06-content-plan.md and docs/seo/gbp-services.csv.
 */

export type ImageKey =
  | "general"
  | "implants"
  | "braces"
  | "whitening"
  | "rootcanal"
  | "gum"
  | "makeover"
  | "wisdom";

export type TreatmentCategory = {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  description: string;
};

export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  {
    id: "general-preventive",
    name: "General & Preventive Care",
    shortName: "General & Preventive",
    badge: "Routine & Emergency",
    description:
      "Routine check-ups, teeth scaling, cavity fillings, sensitivity relief, child dentistry, and same-day emergency dental relief.",
  },
  {
    id: "restorative-endodontics",
    name: "Restorative Dentistry & Root Canal",
    shortName: "Restorative & Root Canal",
    badge: "Tooth Preservation",
    description:
      "Single-sitting rotary root canals, natural zirconia crowns, long-span bridges, custom dentures, and complete mouth rehabilitation.",
  },
  {
    id: "implants-surgery",
    name: "Dental Implants & Oral Surgery",
    shortName: "Implants & Surgery",
    badge: "Permanent Replacement",
    description:
      "Lifetime titanium implants, full-mouth All-on-4/6 fixed arches, atraumatic wisdom tooth removals, extractions, and frenectomy.",
  },
  {
    id: "orthodontics",
    name: "Braces & Clear Aligners",
    shortName: "Braces & Aligners",
    badge: "Smile Alignment",
    description:
      "Invisible custom clear aligners, discreet ceramic and metal braces, TMJ jaw splint therapy, and protective night guards.",
  },
  {
    id: "cosmetic-laser",
    name: "Cosmetic & Laser Dentistry",
    shortName: "Cosmetic & Laser",
    badge: "Aesthetics & Glow",
    description:
      "In-clinic cold LED teeth whitening, porcelain veneers, composite bonding for chipped teeth, aesthetic smile makeovers, and laser gum therapy.",
  },
];

export type Treatment = {
  slug: string;
  category: "general-preventive" | "restorative-endodontics" | "implants-surgery" | "orthodontics" | "cosmetic-laser";
  imageKey: ImageKey;
  name: string;
  cardTitle: string;
  imageAlt: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  h1Lead: string;
  h1Accent: string;
  tagline: string;
  procedureType: "NoninvasiveProcedure" | "SurgicalProcedure" | "TherapeuticProcedure";
  bodyLocation: string;
  facts: { duration: string; visits: string; comfort: string; recovery: string };
  overview: string[];
  takeaways: string[];
  signsHeading: string;
  signs: { title: string; text: string }[];
  steps: { title: string; text: string; duration: string }[];
  benefits: { title: string; text: string }[];
  aftercare: { when: string; text: string }[];
  tips: string[];
  warnings: string[];
  faqs: { q: string; a: string }[];
  updated: string;
};

const UPDATED = "2026-11-09";

export const treatments: Treatment[] = [
  // ==========================================
  // 1. GENERAL & PREVENTIVE CARE
  // ==========================================
  {
    slug: "general-dentistry",
    category: "general-preventive",
    imageKey: "general",
    name: "Dental Check-up & Consultation",
    cardTitle: "Dental Check-up\n& Consultation",
    imageAlt: "Tooth with magnifying glass illustrating a comprehensive dental check-up",
    summary:
      "Comprehensive check-ups, digital imaging, and preventive oral health care.",
    metaTitle: "Dental Check-up & Consultation in Wadgaon Sheri, Pune",
    metaDescription:
      "Complete dental check-ups in Wadgaon Sheri with Dr. Sneha Sardar: teeth, gums and bite examination, digital X-rays, and transparent treatment plans.",
    h1Lead: "Everyday dental care for",
    h1Accent: "Healthy, Lasting Smiles",
    tagline:
      "Prevention is the kindest dentistry. From routine check-ups to early detection, we spot small issues early so they never become big ones.",
    procedureType: "NoninvasiveProcedure",
    bodyLocation: "Teeth and gums",
    facts: {
      duration: "30–45 min",
      visits: "Every 6 months",
      comfort: "Completely painless & gentle",
      recovery: "Immediate return to work",
    },
    overview: [
      "General dental consultations form the bedrock of lasting oral health. It encompasses a systematic assessment of every tooth, your gums, bite alignment, and underlying bone health using low-dose digital diagnostics.",
      "At The Dental Studio, every visit begins with genuine listening. Dr. Sneha Sardar reviews your dental history, explains intraoral visuals on screen, and presents clear, transparent care paths without pressure.",
    ],
    takeaways: [
      "Routine 6-month check-ups catch hidden cavities before they ache",
      "Low-radiation digital imaging for precise, accurate diagnosis",
      "Patient-first approach with transparent treatment recommendations",
      "Ideal for working adults, children, and seniors in Wadgaon Sheri",
    ],
    signsHeading: "When to book a routine dental consultation",
    signs: [
      { title: "It's been 6+ months", text: "Regular six-monthly examinations maintain enamel health and catch silent decay early." },
      { title: "Occasional sensitivity", text: "Discomfort with hot or cold foods can indicate early enamel wear or small cavities." },
      { title: "Gum bleeding or bad breath", text: "Plaque accumulation along the gumline needs timely professional attention." },
      { title: "New food traps", text: "Food getting wedged between teeth indicates shifting margins or opening contact points." },
    ],
    steps: [
      { title: "Clinical examination", text: "Detailed inspection of teeth surfaces, gum pockets, bite, and soft oral tissues.", duration: "10 min" },
      { title: "Digital radiography", text: "Targeted digital X-rays taken only when necessary to inspect roots and interdental bone.", duration: "5 min" },
      { title: "Case discussion", text: "Visual walkthrough of your oral condition and customized preventive advice.", duration: "15 min" },
      { title: "Care plan", text: "Transparent explanation of any recommended treatments with timelines and estimates.", duration: "10 min" },
    ],
    benefits: [
      { title: "Early cavity detection", text: "Save teeth before decay reaches the deep nerve chamber." },
      { title: "Protects overall health", text: "Oral bacterial control reduces systemic inflammation and protects overall wellness." },
      { title: "Prevents costly emergencies", text: "Addressing minor concerns early avoids extensive restorative work later." },
      { title: "Gentle pacing", text: "Calm, compassionate environment with zero judgment for dental anxiety." },
    ],
    aftercare: [
      { when: "Same day", text: "Resume normal meals and routine daily activities immediately." },
      { when: "Daily routine", text: "Maintain twice-daily brushing with fluoride toothpaste and nightly flossing." },
      { when: "Every 6 months", text: "Return for your scheduled bi-annual preventative check-up." },
    ],
    tips: [
      "Brush gently in circular motions for 2 minutes using a soft-bristled brush",
      "Rinse with plain water after having acidic or sugary beverages",
      "Use dental floss daily to protect the contact points between teeth",
    ],
    warnings: [
      "Persistent toothache that throbs at night",
      "Swelling along the gums or jawline",
      "Sudden sharp pain when biting down",
    ],
    faqs: [
      { q: "How often should I get a dental check-up?", a: "Every 6 months is the golden standard for healthy adults and children. Patients prone to gum issues may benefit from 4-month visits." },
      { q: "Is the dental examination painful?", a: "Not at all. The visual check and gentle tactile inspection are completely pain-free and comfortable." },
      { q: "Are digital dental X-rays safe?", a: "Yes. Our advanced digital X-rays emit up to 80% less radiation than traditional dental film and take just seconds." },
    ],
    updated: UPDATED,
  },

  {
    slug: "teeth-cleaning",
    category: "general-preventive",
    imageKey: "general",
    name: "Teeth Cleaning & Scaling",
    cardTitle: "Teeth Cleaning\n& Scaling",
    imageAlt: "Ultrasonic scaler gently cleaning teeth and removing tartar",
    summary:
      "Gentle ultrasonic cleaning to clear hardened tartar and refresh breath.",
    metaTitle: "Teeth Cleaning & Scaling in Wadgaon Sheri, Pune",
    metaDescription:
      "Professional ultrasonic teeth cleaning and polishing by Dr. Sneha Sardar in Wadgaon Sheri. Removes stubborn tartar, freshens breath, and stops bleeding gums.",
    h1Lead: "Fresh breath and healthy gums with",
    h1Accent: "Gentle Teeth Cleaning & Scaling",
    tagline:
      "Even the most meticulous brushing cannot remove hardened tartar. Gentle ultrasonic scaling restores gum health in a comfortable 40-minute visit.",
    procedureType: "NoninvasiveProcedure",
    bodyLocation: "Teeth surfaces and gum margins",
    facts: {
      duration: "30–45 min",
      visits: "Single visit",
      comfort: "Gentle micro-vibrations, no enamel damage",
      recovery: "Immediate",
    },
    overview: [
      "Over time, saliva minerals harden soft plaque into calcified tartar (calculus) that sticks stubbornly to tooth enamel and under the gumline. If neglected, it causes chronic gum inflammation and bone loss.",
      "Our clinic uses advanced ultrasonic scalers that use gentle high-frequency sound waves and fine water mist to dislodge deposits painlessly without scraping or thinning your natural enamel.",
    ],
    takeaways: [
      "Removes yellow tartar deposits and surface tea/coffee stains",
      "Stops bleeding gums and eliminates chronic bad breath (halitosis)",
      "Zero enamel damage — preserves natural tooth structure",
      "Concludes with prophylactic fluoride polishing for a glass-smooth feel",
    ],
    signsHeading: "Signs you need professional teeth cleaning",
    signs: [
      { title: "Bleeding when brushing", text: "Puffy, red gums that bleed during daily brushing indicate calculus irritation." },
      { title: "Rough tartar along gumline", text: "Hard yellow or brown crust visible behind the lower front teeth." },
      { title: "Persistent mouth odour", text: "Odour-producing bacteria harboured in deep tartar crevices." },
      { title: "Stained tooth surfaces", text: "Dark stains from tea, coffee, smoking, or turmeric that brushing cannot lift." },
    ],
    steps: [
      { title: "Gum assessment", text: "Evaluating gum margins and measuring pocket depths to check for gingivitis.", duration: "5 min" },
      { title: "Ultrasonic scaling", text: "Vibrating micro-tip dislodges calculus safely using soothing chilled water irrigation.", duration: "25 min" },
      { title: "Interdental flossing", text: "Cleaning tight spaces between teeth to ensure no residue remains.", duration: "5 min" },
      { title: "Paste polishing", text: "Prophylactic paste polish smoothens enamel to resist new plaque accumulation.", duration: "5 min" },
    ],
    benefits: [
      { title: "Prevents tooth loss", text: "Healthy gums provide the firm foundation that keeps teeth anchored for life." },
      { title: "Instantly brighter smile", text: "Removes stubborn extrinsic stains for a refreshed, naturally brighter look." },
      { title: "Eliminates morning bad breath", text: "Removes bacterial reservoirs responsible for persistent oral odour." },
      { title: "Pain-managed comfort", text: "Adjustable power settings tailored to sensitive teeth." },
    ],
    aftercare: [
      { when: "First 24 hours", text: "Avoid strongly coloured food (turmeric, red wine, beetroot) right after polishing." },
      { when: "Next few days", text: "Mild temperature sensitivity is normal and resolves as gums tighten up." },
      { when: "Ongoing", text: "Maintain daily flossing and return every 6 months for preventive maintenance." },
    ],
    tips: [
      "Use desensitising toothpaste for 3 days if teeth feel sensitive to cold drinks",
      "Do not skip nightly flossing; it prevents tartar buildup between cleanings",
    ],
    warnings: [
      "Gums that continue to bleed heavily after a week",
      "Loose teeth or receding gum pockets",
    ],
    faqs: [
      { q: "Does teeth cleaning make teeth loose or create gaps?", a: "No, this is a common myth. Scaling removes hardened tartar that was artificially holding inflamed teeth. Removing the tartar allows gums to heal and tighten around the teeth." },
      { q: "Will scaling damage my tooth enamel?", a: "Not at all. Ultrasonic tips vibrate against tartar deposits without cutting or abrading natural enamel." },
      { q: "How often should I get scaling done?", a: "Every 6 months for most individuals. Patients with active periodontitis or orthodontic braces may need visits every 4 months." },
    ],
    updated: UPDATED,
  },

  {
    slug: "tooth-coloured-fillings",
    category: "general-preventive",
    imageKey: "general",
    name: "Tooth-Coloured Composite Fillings",
    cardTitle: "Tooth-Coloured\nFillings",
    imageAlt: "Seamless tooth-coloured composite resin filling restoring a decayed molar",
    summary:
      "Natural tooth-coloured fillings to repair cavities invisibly and safely.",
    metaTitle: "Tooth-Coloured Fillings in Wadgaon Sheri, Pune",
    metaDescription:
      "Discreet, metal-free composite tooth fillings by Dr. Sneha Sardar in Wadgaon Sheri, Pune. Fix cavities and chipped enamel seamlessly in one comfortable visit.",
    h1Lead: "Invisible cavity repair with",
    h1Accent: "Tooth-Coloured Composite Fillings",
    tagline:
      "No dark metal amalgam. Modern nano-hybrid composites match your exact tooth shade, bonding chemically to restore full chewing strength.",
    procedureType: "TherapeuticProcedure",
    bodyLocation: "Teeth enamel and dentin",
    facts: {
      duration: "30–45 min",
      visits: "1 visit",
      comfort: "Gentle numbing, zero pain",
      recovery: "Chew normally once numbness fades",
    },
    overview: [
      "Dental decay occurs when oral bacteria produce acids that erode enamel. When caught in the early to moderate stage, removing the softened decay and placing a composite filling saves the natural tooth from requiring a root canal.",
      "At Dr. Sneha – The Dental Studio, we use high-grade nano-hybrid composite resins shade-matched precisely to your surrounding enamel. The composite is cured instantly with blue LED light, allowing you to smile and eat with complete confidence.",
    ],
    takeaways: [
      "100% metal-free, mercury-free, and biocompatible",
      "Custom shade-matching blends seamlessly into your natural smile",
      "Preserves maximum natural tooth structure compared to old silver fillings",
      "Completed comfortably in a single 30 to 45-minute appointment",
    ],
    signsHeading: "Signs you may need a tooth filling",
    signs: [
      { title: "Sweet or cold sensitivity", text: "A brief twinge when eating sweets or drinking cold liquids." },
      { title: "Dark spots or pits", text: "Visible brown, black, or grey discoloration on tooth surfaces." },
      { title: "Food trapping", text: "Food repeatedly catching in a specific tooth hollow." },
      { title: "Rough edge or chip", text: "Tongue feeling a sharp, broken, or uneven tooth corner." },
    ],
    steps: [
      { title: "Gentle preparation", text: "Targeted numbing ensures complete comfort while decay is precisely cleared.", duration: "10 min" },
      { title: "Etch & bonding agent", text: "Microscopic conditioning of enamel creates a strong adhesive chemical bond.", duration: "5 min" },
      { title: "Layered placement", text: "Shade-matched composite resin is sculpted to recreate natural tooth cusps.", duration: "15 min" },
      { title: "LED curing & polish", text: "Hardened with high-intensity LED light and polished glass-smooth.", duration: "10 min" },
    ],
    benefits: [
      { title: "Natural aesthetics", text: "Indistinguishable from your natural teeth, even under bright lights." },
      { title: "Reinforces tooth structure", text: "Bonds directly to tooth walls, preventing future fractures." },
      { title: "Thermal insulation", text: "Unlike metal fillings, composite resin does not expand or conduct extreme temperatures." },
      { title: "Immediate usability", text: "Hardens instantly so you do not have to wait 24 hours to chew." },
    ],
    aftercare: [
      { when: "Same day", text: "Wait until local anesthetic numbness wears off before chewing hot foods." },
      { when: "First 48 hours", text: "Mild sensitivity to cold drinks may occur briefly as the nerve settles." },
      { when: "Long term", text: "Brush twice daily and floss around the filling margins to prevent recurrent decay." },
    ],
    tips: [
      "Chew on the other side of your mouth while anesthesia numbness persists",
      "Inform the clinic if your bite feels slightly elevated when closing your teeth together",
    ],
    warnings: [
      "Sharp pain when tapping or chewing on the filling",
      "Continuous throbbing pain that keeps you awake",
    ],
    faqs: [
      { q: "How long do tooth-coloured composite fillings last?", a: "With good oral hygiene and regular check-ups, high-quality composite fillings typically last 7 to 10+ years." },
      { q: "Can I replace my old black silver fillings with composite?", a: "Yes. Many patients replace old amalgam fillings with aesthetic tooth-coloured composite to eliminate dark margins and strengthen the tooth." },
      { q: "Will the filling match my natural teeth?", a: "Yes. We use a precise shade guide to select composite resin that blends flawlessly with your natural enamel hue." },
    ],
    updated: UPDATED,
  },

  {
    slug: "tooth-sensitivity",
    category: "general-preventive",
    imageKey: "general",
    name: "Tooth Sensitivity Treatment",
    cardTitle: "Tooth Sensitivity\nTreatment",
    imageAlt: "Dentist applying desensitising therapy to protect exposed dentinal tubules",
    summary:
      "Fast, targeted relief for sharp pain from hot, cold, or sweet foods.",
    metaTitle: "Tooth Sensitivity Treatment in Wadgaon Sheri, Pune",
    metaDescription:
      "End sharp tooth sensitivity to hot and cold foods with Dr. Sneha Sardar in Wadgaon Sheri. Pinpoint diagnosis, enamel sealants, and lasting pain relief.",
    h1Lead: "Enjoy hot and cold foods again with",
    h1Accent: "Targeted Tooth Sensitivity Relief",
    tagline:
      "A sharp twinge with cold water or morning tea is a clear signal of exposed dentin. We identify the root cause and seal microscopic nerve pathways for lasting comfort.",
    procedureType: "TherapeuticProcedure",
    bodyLocation: "Exposed dentin and cervical enamel margins",
    facts: {
      duration: "20–30 min",
      visits: "1–2 visits",
      comfort: "Completely pain-free, no needles",
      recovery: "Immediate relief",
    },
    overview: [
      "Dentin hypersensitivity occurs when the protective outer enamel wears thin or gums recede, exposing microscopic tubules that lead straight to the tooth's inner pulp nerve. Cold, hot, sweet, or acidic stimuli rush through these tubules, triggering a sharp, painful jolt.",
      "At our Wadgaon Sheri clinic, Dr. Sneha evaluates whether your sensitivity stems from aggressive brushing, enamel erosion, teeth grinding (bruxism), or micro-cracks. We apply biocompatible desensitising varnishes, fluoride glazes, or cervical resin bonding to permanently plug the exposed channels.",
    ],
    takeaways: [
      "Rapid, long-lasting relief from hot, cold, and sweet sensitivity",
      "Seals exposed microscopic tubules and strengthens demineralised enamel",
      "Gentle, non-invasive in-clinic application without injections",
      "Customised guidance on desensitising pastes and correct brushing pressure",
    ],
    signsHeading: "Common causes of tooth sensitivity",
    signs: [
      { title: "Sharp jolt with cold liquids", text: "Sudden wincing pain when drinking cold water or eating ice cream." },
      { title: "Discomfort with hot drinks", text: "Pain triggered by morning tea, coffee, or hot soups." },
      { title: "Sweet or sour sensitivity", text: "Ache when enjoying citrus fruits, chocolates, or sodas." },
      { title: "Sensitivity when brushing", text: "Pain when the toothbrush bristles brush against the gumline." },
    ],
    steps: [
      { title: "Tubule diagnosis", text: "Air-water syringe test identifies the exact teeth and exposed cervical areas.", duration: "5 min" },
      { title: "Surface cleaning", text: "Gentle removal of bio-film from exposed root dentin.", duration: "5 min" },
      { title: "Desensitising sealant", text: "Application of medical-grade fluoride and bonding agents that seal nerve tubules.", duration: "10 min" },
      { title: "Bite & habit review", text: "Checking for nighttime teeth clenching and brushing abrasion.", duration: "5 min" },
    ],
    benefits: [
      { title: "Eat & drink comfortably", text: "Enjoy your favourite hot beverages and iced desserts without fear of pain." },
      { title: "Protects tooth roots", text: "Prevents deep wear grooves (abfraction) from deepening into the tooth nerve." },
      { title: "Quick & painless", text: "Zero drilling or anesthesia required for standard desensitisation treatments." },
      { title: "Strengthens enamel", text: "Remineralises vulnerable enamel areas against acid erosion." },
    ],
    aftercare: [
      { when: "First 2 hours", text: "Avoid very hot or freezing cold beverages to let the sealant bond mature." },
      { when: "Daily care", text: "Switch to an ultra-soft toothbrush and use a prescribed potassium nitrate paste." },
      { when: "Long term", text: "Avoid horizontal hard scrubbing; use gentle circular brushing motions." },
    ],
    tips: [
      "Never use a hard-bristled toothbrush; it wears away enamel at the gumline",
      "Wait 30 minutes after consuming acidic foods before brushing your teeth",
    ],
    warnings: [
      "Sensitivity that turns into a dull, lingering throbbing ache",
      "Pain that occurs spontaneously without any hot or cold trigger",
    ],
    faqs: [
      { q: "Why did my teeth suddenly become sensitive to cold?", a: "Common causes include aggressive tooth brushing, acidic food erosion, clenching at night, or gum recession exposing tooth roots." },
      { q: "Is sensitivity treatment permanent?", a: "In-clinic sealants provide fast, durable relief that lasts months to years. Maintaining gentle brushing habits keeps the tubules permanently sealed." },
      { q: "Could my sensitivity be a sign of a root canal?", a: "Mild, momentary sensitivity usually needs a simple sealant. However, if pain lingers for minutes after the trigger is removed, the nerve may be inflamed." },
    ],
    updated: UPDATED,
  },

  {
    slug: "emergency-dental-care",
    category: "general-preventive",
    imageKey: "general",
    name: "Emergency Dental Care",
    cardTitle: "Emergency Dental\nCare",
    imageAlt: "Dentist providing immediate relief for acute toothache and dental emergency",
    summary:
      "Same-day emergency dental relief for sudden pain, injury, or broken teeth.",
    metaTitle: "Emergency Dental Care in Wadgaon Sheri, Pune | Same-Day Relief",
    metaDescription:
      "Urgent dental relief in Wadgaon Sheri with Dr. Sneha Sardar. Same-day appointments for severe toothache, broken teeth, swelling, and lost crowns. Evening hours till 9:30 PM.",
    h1Lead: "Fast, compassionate relief for",
    h1Accent: "Urgent Dental Emergencies",
    tagline:
      "Dental emergencies are stressful and painful. Call us and we will fit you in immediately to eliminate pain, stop infection, and protect your smile.",
    procedureType: "TherapeuticProcedure",
    bodyLocation: "Affected tooth, gums, and oral structures",
    facts: {
      duration: "30–60 min",
      visits: "Immediate relief visit",
      comfort: "Prompt anesthesia to stop pain right away",
      recovery: "Depends on emergency type",
    },
    overview: [
      "A severe toothache, dental trauma, swelling, or knocked-out tooth requires prompt, skilled intervention. Delaying care can turn a treatable infection into a complex medical emergency.",
      "Dr. Sneha – The Dental Studio reserves dedicated emergency slots every day. With evening appointments open until 9:30 PM, we prioritize stopping your pain immediately, stabilizing the tooth, and charting a clear recovery path.",
    ],
    takeaways: [
      "Same-day emergency slots available for urgent pain relief",
      "Late evening clinic hours open until 9:30 PM for working families",
      "Immediate local anesthesia to stop excruciating pain fast",
      "Complete on-site digital diagnosis and compassionate, gentle care",
    ],
    signsHeading: "Common dental emergencies we treat immediately",
    signs: [
      { title: "Excruciating toothache", text: "Severe throbbing pain that keeps you awake and resists painkillers." },
      { title: "Facial or gum swelling", text: "A visible abscess or swollen cheek indicating spreading bacterial infection." },
      { title: "Knocked-out or loosened tooth", text: "A tooth displaced by sports injury, fall, or accident." },
      { title: "Broken tooth or lost crown", text: "A fractured front tooth or dislodged crown exposing raw, sensitive nerves." },
    ],
    steps: [
      { title: "Immediate triage", text: "Rapid evaluation of swelling, bleeding, and nerve involvement.", duration: "5 min" },
      { title: "Pain elimination", text: "Targeted gentle local anesthesia stops the acute pain immediately.", duration: "5 min" },
      { title: "Digital diagnosis", text: "Low-dose digital X-ray pinpoints the source: root fracture, abscess, or deep decay.", duration: "10 min" },
      { title: "Emergency stabilization", text: "Pulp extirpation, temporary crown recementation, or abscess drainage.", duration: "20–30 min" },
    ],
    benefits: [
      { title: "Stops severe pain immediately", text: "Quick relief so you can sleep, eat, and function without agony." },
      { title: "Saves your natural tooth", text: "Timely emergency care often prevents unnecessary tooth extraction." },
      { title: "Prevents infection spread", text: "Halts bacterial spread to facial spaces and jawbone." },
      { title: "Evening availability", text: "No need to take time off work; open until 9:30 PM in Wadgaon Sheri." },
    ],
    aftercare: [
      { when: "First 24 hours", text: "Take prescribed antibiotics and pain relief exactly as scheduled." },
      { when: "Next few days", text: "Eat soft, cool foods and avoid chewing directly on the treated tooth." },
      { when: "Follow-up", text: "Attend your scheduled appointment to complete permanent restoration." },
    ],
    tips: [
      "If a permanent tooth is knocked out, place it in cold milk and reach our clinic within 30–60 minutes",
      "Never place an aspirin tablet directly against the aching gum; it causes chemical burns",
    ],
    warnings: [
      "Difficulty swallowing or breathing due to jaw/neck swelling requires immediate emergency care",
      "High fever accompanied by dental swelling",
    ],
    faqs: [
      { q: "What should I do if I have severe toothache at night?", a: "Rinse gently with lukewarm salt water, keep your head elevated on pillows, take an over-the-counter pain reliever, and call our clinic for a morning priority slot." },
      { q: "Can a knocked-out tooth be put back in?", a: "Yes, if treated within an hour! Handle the tooth only by the white crown (not the root), rinse gently in milk, and bring it immediately to the clinic." },
      { q: "Are emergency dental appointments available in the evening?", a: "Yes. Our clinic is open until 9:30 PM from Monday to Saturday, specifically to cater to working professionals and urgent evening emergencies." },
    ],
    updated: UPDATED,
  },

  {
    slug: "kids-dentistry",
    category: "general-preventive",
    imageKey: "general",
    name: "Kids & Pediatric Dentistry",
    cardTitle: "Kids & Pediatric\nDentistry",
    imageAlt: "Dr. Sneha gently performing a friendly dental check-up for a smiling young child",
    summary:
      "Friendly, gentle dental check-ups and cavity protection for children.",
    metaTitle: "Kids Dentist in Wadgaon Sheri, Pune | Pediatric Dental Care",
    metaDescription:
      "Friendly, gentle pediatric dental care in Wadgaon Sheri with Dr. Sneha Sardar. Child-friendly check-ups, painless fillings, fluoride therapy, and sealants.",
    h1Lead: "Happy, fearless smiles with",
    h1Accent: "Gentle Kids & Pediatric Dentistry",
    tagline:
      "A positive childhood dental experience builds a lifetime of oral health confidence. We speak your child's language with patience, kindness, and gentle care.",
    procedureType: "NoninvasiveProcedure",
    bodyLocation: "Primary (milk) and developing permanent teeth",
    facts: {
      duration: "30–40 min",
      visits: "Every 6 months",
      comfort: "100% kid-friendly, playful, and gentle",
      recovery: "Immediate",
    },
    overview: [
      "Primary (milk) teeth play an essential role in your child's speech development, chewing nutrition, and reserving space for the permanent teeth to erupt straight. Neglecting baby tooth decay can lead to infections and crowded adult teeth.",
      "Dr. Sneha Sardar uses a Tell-Show-Do approach with young children. Every tool is explained in fun, reassuring terms, helping your child feel calm, respected, and proud of their healthy smile.",
    ],
    takeaways: [
      "Fun, positive, fear-free visits that eliminate dental anxiety early",
      "Cavity prevention with dental sealants and protective fluoride varnishes",
      "Painless treatment of childhood cavities and nursing bottle caries",
      "Guidance on thumb sucking, mouth breathing, and proper brushing technique",
    ],
    signsHeading: "When should your child visit the dentist?",
    signs: [
      { title: "First tooth erupted", text: "The ideal time for a first check-up is around your baby's first birthday." },
      { title: "Brown spots on baby teeth", text: "Early signs of childhood caries, especially on the front upper teeth." },
      { title: "Complaints during eating", text: "Child avoiding chewing on one side or refusing cold or sweet snacks." },
      { title: "Habits like thumb sucking", text: "Persistent sucking habits after age 3 can alter jaw and palate development." },
    ],
    steps: [
      { title: "Tell-Show-Do introduction", text: "Friendly conversation introducing your child to the dental chair and mirror.", duration: "10 min" },
      { title: "Gentle visual check", text: "Counting teeth together and inspecting gums and enamel growth.", duration: "10 min" },
      { title: "Preventive treatment", text: "Gentle cleaning followed by fluoride varnish or molar fissure sealants.", duration: "10 min" },
      { title: "Parent guidance", text: "Practical tips on diet, brushing technique, and fun motivational rewards.", duration: "10 min" },
    ],
    benefits: [
      { title: "Zero dental phobia", text: "Children grow up seeing dental visits as friendly, rewarding experiences." },
      { title: "Stops cavities before they start", text: "Pit sealants block 80% of molar decay by smoothing out deep grooves." },
      { title: "Protects permanent teeth", text: "Healthy milk teeth ensure straight eruption of adult teeth." },
      { title: "Supports healthy nutrition", text: "Pain-free teeth allow your child to chew wholesome fruits, vegetables, and nuts." },
    ],
    aftercare: [
      { when: "Same day", text: "Avoid sticky or crunchy snacks for 2 hours after fluoride varnish application." },
      { when: "Every morning & night", text: "Parents should supervise brushing until children reach 7–8 years of age." },
      { when: "Every 6 months", text: "Regular bi-annual check-ups to track jaw growth and erupting teeth." },
    ],
    tips: [
      "Use a pea-sized amount of child-safe fluoride toothpaste for children over 3 years",
      "Never put your child to bed with a milk bottle; it causes severe nighttime enamel decay",
    ],
    warnings: [
      "Facial swelling or a white pimple on the child's gum requires urgent attention",
      "Persistent pain that disrupts the child's sleep or school attendance",
    ],
    faqs: [
      { q: "At what age should my child have their first dental visit?", a: "Around their first birthday, or within 6 months of their first baby tooth erupting. Early visits prevent cavities and establish healthy habits." },
      { q: "Why fix cavities in baby teeth if they are going to fall out anyway?", a: "Baby teeth hold space for adult teeth. If lost too early to decay, neighbouring teeth shift, causing severe crowding that requires braces later." },
      { q: "What are pit and fissure sealants?", a: "Sealants are thin, painless protective coatings painted onto the chewing grooves of back molars to seal out food particles and bacteria." },
    ],
    updated: UPDATED,
  },

  // ==========================================
  // 2. RESTORATIVE DENTISTRY & ROOT CANAL
  // ==========================================
  {
    slug: "root-canal-treatment",
    category: "restorative-endodontics",
    imageKey: "rootcanal",
    name: "Root Canal Treatment",
    cardTitle: "Root Canal\nTreatment",
    imageAlt: "Modern rotary endodontics equipment used for painless single-sitting root canal treatment",
    summary:
      "Single-sitting, pain-managed root canal to save your natural tooth.",
    metaTitle: "Root Canal Treatment in Wadgaon Sheri, Pune | Single-Sitting RCT",
    metaDescription:
      "Painless root canal treatment in Wadgaon Sheri by Dr. Sneha Sardar. Modern rotary endodontics, single-visit options, and durable crowns. Save your natural tooth.",
    h1Lead: "Save your natural tooth with",
    h1Accent: "Painless Root Canal Treatment",
    tagline:
      "A root canal does not cause pain; it eliminates it. With modern motorized rotary files and localized anesthesia, root canals feel as comfortable as a simple filling.",
    procedureType: "TherapeuticProcedure",
    bodyLocation: "Tooth pulp chamber and root canals",
    facts: {
      duration: "45–60 min",
      visits: "Single visit in most cases",
      comfort: "Complete local anesthesia, painless",
      recovery: "Mild tenderness for 24–48 hours",
    },
    overview: [
      "When tooth decay breaches the enamel and dentin to infect the soft living pulp inside, the nerve becomes inflamed, causing severe, throbbing toothaches. In the past, such teeth were extracted. Today, root canal therapy cleans the infection and preserves your natural root.",
      "Dr. Sneha Sardar utilizes computerized rotary endodontics and apex locators that navigate root canals with sub-millimeter precision. In over 85% of cases, the entire procedure is completed smoothly in a single comfortable visit.",
    ],
    takeaways: [
      "Permanently eliminates severe, throbbing toothache and infection",
      "Single-sitting rotary endodontics saves you multiple appointments and needles",
      "Preserves your natural tooth root, maintaining natural jawbone strength and bite",
      "Protected by a custom zirconia or porcelain crown for lifetime function",
    ],
    signsHeading: "Signs you may need a root canal",
    signs: [
      { title: "Severe throbbing pain", text: "Spontaneous toothache that pulses and worsens when lying down at night." },
      { title: "Prolonged hot/cold sensitivity", text: "Sharp pain that lingers for minutes after drinking hot tea or cold water." },
      { title: "Gum pimple or swelling", text: "A small recurrent blister on the gum discharging fluid, indicating deep infection." },
      { title: "Pain on biting or chewing", text: "Tenderness when applying downward chewing pressure on the tooth." },
    ],
    steps: [
      { title: "Targeted anesthesia", text: "Gentle computerized numbing ensures you feel zero discomfort during the procedure.", duration: "5 min" },
      { title: "Access & rotary cleaning", text: "Flexible nickel-titanium rotary files clean and disinfect the micro-canals.", duration: "25 min" },
      { title: "Bio-ceramic obturation", text: "Canals are sealed hermetically with gutta-percha to prevent reinfection.", duration: "15 min" },
      { title: "Core buildup & crown prep", text: "The tooth crown is rebuilt to prepare for a protective ceramic or zirconia crown.", duration: "15 min" },
    ],
    benefits: [
      { title: "Eliminates tooth pain", text: "Removes inflamed nerve tissue, providing immediate relief from pain." },
      { title: "Natural bite preservation", text: "Retaining your natural root maintains natural chewing sensation and bone health." },
      { title: "Aesthetic restoration", text: "Topped with a lifelike crown that matches adjacent teeth seamlessly." },
      { title: "Prevents bone abscesses", text: "Clears deep bacterial infection before it dissolves jawbone tissue." },
    ],
    aftercare: [
      { when: "First 24 hours", text: "Avoid chewing hard foods on the treated side until the permanent crown is seated." },
      { when: "Day 2–3", text: "Mild tenderness when tapping is normal and managed easily with mild analgesics." },
      { when: "After 1 week", text: "Return for your custom crown trial and permanent cementation." },
    ],
    tips: [
      "Do not delay crown placement after a root canal; the crown prevents the brittle tooth from cracking",
      "Take your prescribed anti-inflammatory medication on time for the first 48 hours",
    ],
    warnings: [
      "Visible facial swelling spreading towards the eye or neck",
      "Bite feeling persistently high when closing your jaw",
    ],
    faqs: [
      { q: "Is root canal treatment painful?", a: "No. With modern local anesthesia, a root canal feels very similar to having a routine filling placed. You will feel comfortable throughout." },
      { q: "Can a root canal really be done in a single sitting?", a: "Yes. With rotary instruments and digital apex locators, most non-complicated infections can be completely treated and sealed in one 50-minute visit." },
      { q: "Why is a crown necessary after a root canal?", a: "Without a blood supply, a root-canal-treated tooth becomes brittle over time. A crown encases the tooth like a helmet, preventing fractures under heavy chewing forces." },
    ],
    updated: UPDATED,
  },

  {
    slug: "crowns-and-bridges",
    category: "restorative-endodontics",
    imageKey: "general",
    name: "Dental Crowns & Bridges",
    cardTitle: "Dental Crowns\n& Bridges",
    imageAlt: "Precision CAD/CAM zirconia dental crown and ceramic bridge restoration",
    summary:
      "Custom zirconia crowns and fixed bridges to restore chewing and aesthetics.",
    metaTitle: "Dental Crowns & Bridges in Wadgaon Sheri, Pune | Zirconia Caps",
    metaDescription:
      "Custom zirconia and ceramic dental crowns and bridges in Wadgaon Sheri with Dr. Sneha Sardar. Restore broken teeth and replace missing gaps with natural precision.",
    h1Lead: "Restore strength and beauty with",
    h1Accent: "Custom Dental Crowns & Bridges",
    tagline:
      "Protect weakened teeth and bridge gaps permanently. High-strength zirconia and ceramic restorations engineered to match your bite and natural smile seamlessly.",
    procedureType: "TherapeuticProcedure",
    bodyLocation: "Damaged or missing teeth",
    facts: {
      duration: "45 min per visit",
      visits: "2 visits",
      comfort: "Complete local anesthesia",
      recovery: "Immediate comfort",
    },
    overview: [
      "Dental crowns (commonly called caps) encase a compromised, heavily filled, or root-canal-treated tooth to restore its original shape, strength, and beauty. A dental bridge replaces one or more missing teeth by anchoring to adjacent natural teeth.",
      "At The Dental Studio, we craft our crowns using computer-aided CAD/CAM zirconia and lithium disilicate ceramics. They are completely metal-free, eliminating unsightly grey gumlines and offering unmatched durability.",
    ],
    takeaways: [
      "100% metal-free monolithic zirconia and aesthetic porcelain crowns",
      "Replaces missing teeth without removable plates or surgical downtime",
      "Precision CAD/CAM digital fit protects against marginal leakage and decay",
      "Engineered to withstand heavy chewing forces with a 10 to 15+ year lifespan",
    ],
    signsHeading: "When do you need a dental crown or bridge?",
    signs: [
      { title: "Following a root canal", text: "Root-canal-treated teeth need a full-coverage crown to prevent fracture." },
      { title: "Large fractured filling", text: "Teeth where remaining enamel is too thin to hold a new filling safely." },
      { title: "Missing tooth gap", text: "A missing tooth causing adjacent teeth to tilt and opposing teeth to over-erupt." },
      { title: "Severely worn enamel", text: "Enamel worn down by grinding or acid reflux affecting bite height." },
    ],
    steps: [
      { title: "Tooth preparation", text: "Gentle, microscopic reshaping of the tooth to create space for the crown.", duration: "25 min" },
      { title: "Digital 3D impression", text: "Precise optical scanning or elastomer impression of the prepared margins.", duration: "10 min" },
      { title: "Temporary crown", text: "A customized temporary crown protects your tooth while the lab mills your zirconia crown.", duration: "10 min" },
      { title: "Permanent cementation", text: "The permanent crown is checked for bite, shade, and bonded securely.", duration: "20 min" },
    ],
    benefits: [
      { title: "Restores 100% chewing ability", text: "Enjoy your favourite crunchy and chewy foods without hesitation." },
      { title: "Seamless natural aesthetics", text: "Translucent ceramic mimics the depth and natural sheen of adjacent enamel." },
      { title: "Long-term investment", text: "Zirconia is virtually indestructible and does not chip like old porcelain-fused-to-metal." },
      { title: "Maintains facial harmony", text: "Bridges prevent facial sagging and bite collapse caused by missing teeth." },
    ],
    aftercare: [
      { when: "First 24 hours", text: "Avoid very sticky sweets like caramel or chewing gum right after cementation." },
      { when: "Daily care", text: "Brush normally and use special floss threaders under dental bridge pontics." },
      { when: "Bi-annual review", text: "Have margins checked during your regular 6-month check-up." },
    ],
    tips: [
      "Clean beneath your dental bridge daily using an interdental brush or water flosser",
      "Do not chew on ice cubes or use teeth as tools to open plastic packaging",
    ],
    warnings: [
      "A crown that feels loose or moves when chewing",
      "Bite feeling uneven or high when swallowing",
    ],
    faqs: [
      { q: "What is the difference between a metal-ceramic crown and a zirconia crown?", a: "Old metal-ceramic crowns have a dark metal core that creates a black line at the gumline. Zirconia is 100% white, biocompatible, twice as strong, and looks completely natural." },
      { q: "How long does a dental bridge last?", a: "With good oral hygiene and cleaning underneath the pontic, dental bridges typically last 10 to 15+ years." },
      { q: "Is the crown preparation painful?", a: "No. Local anesthesia is administered, ensuring the procedure is completely comfortable from start to finish." },
    ],
    updated: UPDATED,
  },

  {
    slug: "dentures",
    category: "restorative-endodontics",
    imageKey: "general",
    name: "Custom Dentures (Complete & Partial)",
    cardTitle: "Custom\nDentures",
    imageAlt: "Precision crafted natural-looking flexible dentures for missing teeth restoration",
    summary:
      "Comfortable, custom-fit dentures for natural speech and confident eating.",
    metaTitle: "Dentures in Wadgaon Sheri, Pune | Complete & Partial Plates",
    metaDescription:
      "Comfortable, custom-fit complete and partial dentures in Wadgaon Sheri by Dr. Sneha Sardar. Lightweight, natural-looking teeth with secure fit and clear speech.",
    h1Lead: "Rediscover the joy of eating with",
    h1Accent: "Comfortable, Custom-Fit Dentures",
    tagline:
      "Missing multiple teeth should not hold you back from smiling and eating with friends. Modern lightweight dentures are tailored to your facial contours for optimal comfort.",
    procedureType: "TherapeuticProcedure",
    bodyLocation: "Upper and lower dental arches",
    facts: {
      duration: "30 min per appointment",
      visits: "3–4 visits for precise fitting",
      comfort: "Completely non-invasive",
      recovery: "7–14 days adjustment period",
    },
    overview: [
      "Losing multiple teeth affects chewing nutrition, facial muscle support, and conversational confidence. Modern dentures have evolved significantly beyond the heavy, loose plates of the past.",
      "At Dr. Sneha – The Dental Studio, we craft customized flexible partial dentures, cast-metal frameworks, and high-impact acrylic complete dentures. We take multi-stage jaw impressions to ensure a snug suction fit that prevents slippage and sore spots.",
    ],
    takeaways: [
      "Custom-crafted for stable suction, speech clarity, and comfortable chewing",
      "Flexible, lightweight partial dentures with no visible metallic clasps",
      "Restores natural lip fullness and facial height, preventing sunken cheeks",
      "Relines, adjustments, and implant-supported overdenture options available",
    ],
    signsHeading: "Who benefits from custom dentures?",
    signs: [
      { title: "Multiple missing teeth", text: "Difficulty chewing food due to several missing back or front teeth." },
      { title: "Loose, rocking old dentures", text: "Old dentures that slip during conversation or cause recurring gum sores." },
      { title: "Sunken facial appearance", text: "Loss of jawbone height causing wrinkles and premature facial aging." },
      { title: "Budget-friendly full replacement", text: "Seeking an accessible, non-surgical solution for full-arch tooth replacement." },
    ],
    steps: [
      { title: "Preliminary impressions", text: "Detailed anatomical impressions of your gum ridges and palate.", duration: "20 min" },
      { title: "Bite registration", text: "Recording your jaw relation, smile line, and selecting tooth shade and shape.", duration: "25 min" },
      { title: "Wax try-in trial", text: "Previewing teeth in wax to verify speech, aesthetics, and bite before final curing.", duration: "25 min" },
      { title: "Final delivery & adjustment", text: "Delivering the finished dentures with pressure-indicating paste for a comfortable fit.", duration: "20 min" },
    ],
    benefits: [
      { title: "Restores facial youthfulness", text: "Supports lips and cheeks, reversing the sunken appearance of missing teeth." },
      { title: "Clear speech", text: "Allows natural tongue placement against teeth for effortless pronunciation." },
      { title: "Eat wholesome meals", text: "Enjoy a nutritious, varied diet without struggling with hard-to-chew foods." },
      { title: "Non-surgical & accessible", text: "A complete restorative solution without surgery or long healing periods." },
    ],
    aftercare: [
      { when: "First 2 weeks", text: "Start with soft foods cut into small bites; practice reading aloud to adjust speech." },
      { when: "Every night", text: "Remove dentures before sleeping and store them in clean water to let gums rest." },
      { when: "Daily cleaning", text: "Brush dentures with a soft denture brush and mild non-abrasive cleanser." },
    ],
    tips: [
      "Do not use hot boiling water to clean dentures; it can warp the acrylic base",
      "Visit the clinic for a quick minor adjustment if you notice any localized sore spot",
    ],
    warnings: [
      "Attempting to bend or glue broken dentures at home using commercial superglue",
      "Persistent pain or ulcers that do not heal after a week",
    ],
    faqs: [
      { q: "How long does it take to get used to new dentures?", a: "Most patients adjust within 1 to 2 weeks. Eating soft foods and reading aloud accelerates your mouth's natural adaptation." },
      { q: "Can dentures be attached to implants so they never slip?", a: "Yes! Implant-supported overdentures snap onto 2 or 4 mini-implants, providing rock-solid stability with zero slippage." },
      { q: "Should I wear my dentures while sleeping?", a: "It is recommended to remove dentures at night. This allows your gum tissues to breathe and prevents bacterial buildup." },
    ],
    updated: UPDATED,
  },

  {
    slug: "full-mouth-rehabilitation",
    category: "restorative-endodontics",
    imageKey: "makeover",
    name: "Full Mouth Rehabilitation",
    cardTitle: "Full Mouth\nRehabilitation",
    imageAlt: "Comprehensive full mouth rehabilitation planning showing restored bite alignment and aesthetics",
    summary:
      "Comprehensive smile reconstruction for worn, damaged, or missing teeth.",
    metaTitle: "Full Mouth Rehabilitation in Wadgaon Sheri, Pune",
    metaDescription:
      "Comprehensive full mouth rehabilitation by Dr. Sneha Sardar in Wadgaon Sheri, Pune. Rebuild severely worn, broken teeth and correct collapsed bites comprehensively.",
    h1Lead: "Complete renewal with",
    h1Accent: "Full Mouth Rehabilitation",
    tagline:
      "When multiple dental problems compromise your ability to eat, speak, and smile, full mouth rehabilitation coordinates crowns, implants, and bite correction into a unified plan.",
    procedureType: "TherapeuticProcedure",
    bodyLocation: "Complete dentition and temporomandibular joint",
    facts: {
      duration: "Multi-phase treatment",
      visits: "4–6 planned visits",
      comfort: "Gentle phased sequencing, pain-managed",
      recovery: "Gradual comfortable adaptation",
    },
    overview: [
      "Severe enamel attrition from chronic grinding, multiple failing restorations, acid erosion, and long-standing missing teeth can lead to collapsed vertical facial height, TMJ pain, and impaired chewing. Full mouth rehabilitation is a master-planned sequence that restores the entire oral architecture.",
      "Led by Dr. Sneha Sardar, the process integrates diagnostic wax-ups, digital smile design, endodontics, periodontics, and precision prosthodontics to return your mouth to optimal physiological balance and radiant aesthetics.",
    ],
    takeaways: [
      "Holistic reconstruction of severely worn down, broken, or missing teeth",
      "Restores collapsed vertical bite dimension, relieving TMJ strain and facial wrinkles",
      "Combines implants, zirconia crowns, onlays, and aesthetic veneers",
      "Phased treatment with provisional restorations so you never go without teeth",
    ],
    signsHeading: "Who needs full mouth rehabilitation?",
    signs: [
      { title: "Severely worn teeth", text: "Teeth ground down to short flat stumps due to decades of clenching or bruxism." },
      { title: "Collapsed bite & facial wrinkles", text: "Chin moving closer to the nose when closing, causing premature facial aging." },
      { title: "Multiple broken or missing teeth", text: "Inability to chew properly due to widespread structural breakdown." },
      { title: "Chronic jaw & head ache", text: "Jaw joint discomfort and muscle tension resulting from an unstable, skewed bite." },
    ],
    steps: [
      { title: "Comprehensive analysis", text: "Digital scans, facebow records, TMJ joint evaluation, and photographic series.", duration: "45 min" },
      { title: "Diagnostic wax-up & trial", text: "Testing your newly designed bite with functional temporary restorations.", duration: "60 min" },
      { title: "Phased foundational therapy", text: "Root canals, periodontal stabilization, and implant placements.", duration: "Phased" },
      { title: "Final ceramic cementation", text: "Permanent bonding of precision zirconia crowns, onlays, and veneers.", duration: "2–3 visits" },
    ],
    benefits: [
      { title: "Reverses decades of dental wear", text: "Transforms aged, broken teeth into a full, youthful, and functional smile." },
      { title: "Restores effortless chewing", text: "Distributes bite pressure evenly across all teeth so you can eat anything." },
      { title: "Relieves chronic TMJ pain", text: "Aligns your jaw joints in their natural, relaxed orthopedic position." },
      { title: "Long-term dental stability", text: "Eliminates the cycle of emergency patch-up treatments with a permanent solution." },
    ],
    aftercare: [
      { when: "Initial weeks", text: "Eat semi-soft meals while your jaw muscles adapt to the restored bite height." },
      { when: "Nightly", text: "Wear a custom protective night guard to safeguard your new ceramic restorations." },
      { when: "Every 6 months", text: "Attend regular preventive maintenance visits for occlusion checks and cleaning." },
    ],
    tips: [
      "Wear your night guard diligently to protect your new restorations from nighttime grinding",
      "Practice chewing evenly on both sides of your mouth to balance muscle tone",
    ],
    warnings: [
      "Any persistent sharp muscle soreness in the temples or jaw joints",
      "A restoration that feels slightly high when closing back teeth together",
    ],
    faqs: [
      { q: "How long does a full mouth rehabilitation take?", a: "Depending on whether implants or root canals are needed, treatment is typically completed over 6 to 12 weeks in planned, comfortable phases." },
      { q: "Will I have to go without teeth during treatment?", a: "Never. We place functional, aesthetic provisional restorations at every stage, so you can eat, work, and smile normally throughout the journey." },
      { q: "Is full mouth rehabilitation suitable for senior citizens?", a: "Yes. Many patients in their 50s, 60s, and 70s undergo rehabilitation to restore chewing nutrition, facial support, and quality of life." },
    ],
    updated: UPDATED,
  },

  // ==========================================
  // 3. DENTAL IMPLANTS & ORAL SURGERY
  // ==========================================
  {
    slug: "dental-implants",
    category: "implants-surgery",
    imageKey: "implants",
    name: "Dental Implants",
    cardTitle: "Dental\nImplants",
    imageAlt: "Medical 3D illustration of a titanium dental implant replacing a missing tooth root",
    summary:
      "Permanent titanium implants that look, feel, and function like natural teeth.",
    metaTitle: "Dental Implants in Wadgaon Sheri, Pune | Lifetime Teeth Replacement",
    metaDescription:
      "Replace missing teeth with lifetime dental implants in Wadgaon Sheri by Dr. Sneha Sardar. 3D digital planning, gentle placement, and natural zirconia crowns.",
    h1Lead: "Permanent, natural tooth replacement with",
    h1Accent: "Precision Dental Implants",
    tagline:
      "Dental implants are the gold standard for replacing missing teeth. Acting as an artificial titanium root, they fuse with jawbone to preserve facial contours and chewing power.",
    procedureType: "SurgicalProcedure",
    bodyLocation: "Jawbone and missing tooth site",
    facts: {
      duration: "45–60 min placement",
      visits: "Placement + review + crown fitting",
      comfort: "Gentle local anesthesia, surprisingly mild",
      recovery: "Return to work in 24–48 hours",
    },
    overview: [
      "When a tooth is lost, the surrounding jawbone naturally begins to resorb and shrink over time, causing neighbouring teeth to drift and facial structures to collapse. Unlike traditional bridges that require grinding down healthy neighbouring teeth, dental implants replace the root itself.",
      "At Dr. Sneha – The Dental Studio, we plan every implant with 3D CBCT digital imaging. A biocompatible grade-4 titanium or zirconia post is placed gently into the bone, where it naturally integrates (osseointegration) to anchor a custom porcelain-ceramic crown.",
    ],
    takeaways: [
      "Permanent, lifetime tooth replacement with a 98%+ clinical success rate",
      "Stops jawbone shrinkage and maintains natural youthful facial contours",
      "Zero grinding or damage to healthy adjacent natural teeth",
      "Restores 100% natural bite force so you can chew apples, nuts, and meats easily",
    ],
    signsHeading: "When should you consider dental implants?",
    signs: [
      { title: "A missing single tooth", text: "An empty space between healthy teeth causing cosmetic concern and shifting." },
      { title: "Difficulty chewing food", text: "Missing back molars making it hard to chew wholesome nutritious meals." },
      { title: "Loose, uncomfortable bridges", text: "Failing bridges where anchor teeth have decayed or cracked under strain." },
      { title: "Desire for a permanent solution", text: "Wanting a fixed, non-removable tooth that will never develop a cavity." },
    ],
    steps: [
      { title: "3D CBCT assessment", text: "High-resolution 3D scan to measure bone density, nerve paths, and plan exact angulation.", duration: "20 min" },
      { title: "Gentle implant placement", text: "Titanium implant placed into the jawbone under painless local anesthesia.", duration: "45 min" },
      { title: "Osseointegration period", text: "Implant naturally fuses with bone over 8–12 weeks to form a permanent root.", duration: "Healing phase" },
      { title: "Custom crown attachment", text: "A precision-crafted zirconia crown is secured to complete your new tooth.", duration: "30 min" },
    ],
    benefits: [
      { title: "Lifetime durability", text: "Engineered to last for life with basic daily brushing and flossing." },
      { title: "Cannot get cavities", text: "Titanium and zirconia materials are completely immune to dental decay." },
      { title: "Preserves healthy adjacent teeth", text: "Unlike dental bridges, neighbouring natural teeth remain 100% untouched." },
      { title: "Feels like your own tooth", text: "No slippage, clicking, or palate coverage; feels completely natural." },
    ],
    aftercare: [
      { when: "First 48 hours", text: "Apply an ice pack to the cheek, eat cool soft foods, and avoid hot drinks or straws." },
      { when: "First week", text: "Rinse gently with warm salt water after meals; do not brush directly on surgical site." },
      { when: "Long term", text: "Brush and floss daily around the implant just like your natural teeth." },
    ],
    tips: [
      "Avoid smoking during the initial healing period; smoking reduces blood supply and slows bone fusion",
      "Keep up regular six-monthly professional cleanings to maintain healthy gums around the implant",
    ],
    warnings: [
      "Persistent bleeding that does not stop with firm gauze pressure",
      "Throbbing pain or fever developing days after the procedure",
    ],
    faqs: [
      { q: "Is dental implant surgery painful?", a: "Most patients are surprised by how comfortable it is! With local anesthesia, the placement is painless and causes less post-operative soreness than a simple tooth extraction." },
      { q: "How long does a dental implant last?", a: "With good oral hygiene and regular check-ups, dental implants are designed to last a lifetime." },
      { q: "What if I do not have enough bone for an implant?", a: "Simple, safe bone grafting or sinus lifting can easily rebuild missing bone height and width to support an implant securely." },
    ],
    updated: UPDATED,
  },

  {
    slug: "full-mouth-implants",
    category: "implants-surgery",
    imageKey: "implants",
    name: "Full Mouth Implants (All-on-4 / All-on-6)",
    cardTitle: "Full Mouth\nImplants",
    imageAlt: "All-on-4 and All-on-6 full arch dental implant bridge restoring an entire jaw",
    summary:
      "Fixed full-arch teeth on 4 to 6 implants for complete smile restoration.",
    metaTitle: "Full Mouth Dental Implants in Wadgaon Sheri, Pune | All-on-4 / All-on-6",
    metaDescription:
      "Permanent fixed full-arch teeth on 4 or 6 implants in Wadgaon Sheri by Dr. Sneha Sardar. Replace loose dentures or failing teeth with a stable, confident smile.",
    h1Lead: "Permanent full-arch restoration with",
    h1Accent: "All-on-4 & All-on-6 Full Mouth Implants",
    tagline:
      "Say goodbye to messy adhesives, loose dentures, and compromised chewing. All-on-4 and All-on-6 implants secure a complete arch of permanent teeth on just four or six implants.",
    procedureType: "SurgicalProcedure",
    bodyLocation: "Complete upper or lower jawbone",
    facts: {
      duration: "2–3 hours per arch",
      visits: "Placement + temporary arch + permanent bridge",
      comfort: "Complete local anesthesia with conscious sedation",
      recovery: "Soft diet for initial healing phase",
    },
    overview: [
      "For patients struggling with multiple missing teeth, severe periodontal bone loss, or frustrating loose dentures, full mouth dental implants represent a life-changing transformation. Instead of placing an implant for every single missing tooth, a full arch of 12 to 14 teeth is supported by 4 or 6 strategically angled implants.",
      "At our Wadgaon Sheri dental studio, we utilize computer-guided 3D implantology. Tilted posterior implants maximize contact with dense frontal jawbone, frequently eliminating the need for extensive bone grafting.",
    ],
    takeaways: [
      "Permanent, non-removable full-arch teeth that look and chew like natural teeth",
      "No palate coverage — taste food fully and speak with natural clarity",
      "Immediate temporary teeth attached so you never leave the clinic toothless",
      "Eliminates painful denture slippage, gum sores, and messy adhesives forever",
    ],
    signsHeading: "Who is an ideal candidate for full mouth implants?",
    signs: [
      { title: "Loose, frustrating dentures", text: "Dentures that slip when eating or talking and cause persistent gum sores." },
      { title: "Multiple terminal failing teeth", text: "Widespread advanced periodontitis, loose teeth, or recurrent decay." },
      { title: "Severe bone resorption", text: "Jawbone shrinkage making traditional dentures impossible to wear." },
      { title: "Desire for fixed permanent teeth", text: "Wanting fixed teeth that are brushed normally and stay in the mouth 24/7." },
    ],
    steps: [
      { title: "3D CBCT virtual surgery", text: "Virtual digital simulation of implant positions avoiding sinus and nerve canals.", duration: "45 min" },
      { title: "Guided implant placement", text: "Placement of 4 or 6 precision implants under painless local anesthesia.", duration: "2 hours" },
      { title: "Provisional fixed teeth", text: "A fixed provisional bridge is attached so you can smile and eat soft food immediately.", duration: "Same day" },
      { title: "Final zirconia bridge", text: "Permanent, ultra-strong CAD/CAM monolithic zirconia bridge attached after healing.", duration: "Final visit" },
    ],
    benefits: [
      { title: "Restores 95%+ natural bite force", text: "Bite into apples, crisp vegetables, and hearty meats with total confidence." },
      { title: "Preserves facial structure", text: "Stimulates jawbone, preventing the sunken chin and collapsed lips of tooth loss." },
      { title: "Tastes food fully", text: "Upper arch has no bulky plastic plate covering the roof of your mouth." },
      { title: "Lifelong stability", text: "Fixed rigidly into bone; will never slip, click, or fall out during conversation." },
    ],
    aftercare: [
      { when: "First 2 months", text: "Maintain a soft, nutritious diet while bone integrates firmly around implants." },
      { when: "Daily cleaning", text: "Use a water flosser and interdental proxy brushes to clean beneath the fixed bridge." },
      { when: "Every 6 months", text: "Attend regular professional implant maintenance reviews and check-ups." },
    ],
    tips: [
      "Invest in a countertop water flosser; it makes cleaning around full-mouth implants effortless",
      "Follow post-operative dietary advice strictly during the initial 8-week osseointegration window",
    ],
    warnings: [
      "Sudden mobility or looseness in the fixed temporary bridge",
      "Fever or swelling accompanied by persistent throbbing pain",
    ],
    faqs: [
      { q: "What is the difference between All-on-4 and All-on-6 implants?", a: "All-on-4 uses 4 implants per arch and is ideal when posterior bone is limited. All-on-6 uses 6 implants for increased load distribution when bone density permits." },
      { q: "Do I have to go without teeth after surgery?", a: "No! A customized fixed provisional bridge is attached on the day of surgery, ensuring you walk out with a complete, confident smile." },
      { q: "How do I clean full mouth dental implants?", a: "You clean them just like natural teeth: daily brushing, accompanied by a water flosser to easily clear food particles beneath the bridge." },
    ],
    updated: UPDATED,
  },

  {
    slug: "wisdom-tooth-removal",
    category: "implants-surgery",
    imageKey: "wisdom",
    name: "Wisdom Tooth Removal",
    cardTitle: "Wisdom Tooth\nRemoval",
    imageAlt: "Wisdom tooth extraction illustration showing impacted third molar removal",
    summary:
      "Gentle, comfortable removal of painful or impacted wisdom teeth.",
    metaTitle: "Wisdom Tooth Removal in Wadgaon Sheri, Pune | Painless Extraction",
    metaDescription:
      "Comfortable wisdom tooth removal in Wadgaon Sheri by Dr. Sneha Sardar. Safe extraction of impacted, painful wisdom teeth with rapid healing and gentle care.",
    h1Lead: "Pain-free relief with",
    h1Accent: "Gentle Wisdom Tooth Removal",
    tagline:
      "Impacted or angled wisdom teeth cause recurring infections, jaw stiffness, and damage to adjacent molars. We plan carefully with digital X-rays to remove them gently.",
    procedureType: "SurgicalProcedure",
    bodyLocation: "Back of the jaw (third molars)",
    facts: {
      duration: "30–45 min",
      visits: "1 visit + brief follow-up",
      comfort: "Complete local anesthesia, zero pain",
      recovery: "3–5 days for normal routine",
    },
    overview: [
      "Wisdom teeth (third molars) usually erupt between the ages of 17 and 25. Modern jaws often lack adequate space, causing these teeth to become stuck beneath bone or erupt sideways, trapping food and triggering painful infections (pericoronitis).",
      "At The Dental Studio in Wadgaon Sheri, Dr. Sneha evaluates your tooth angulation and root anatomy using digital panoramic imaging. We perform atraumatic, gentle extractions with advanced local anesthesia, ensuring you experience zero pain during the procedure.",
    ],
    takeaways: [
      "Relieves throbbing pain, jaw stiffness, and recurrent gum infections",
      "Protects healthy second molars from decay and root resorption",
      "Atraumatic surgical technique preserves bone and speeds healing",
      "Detailed post-operative care package and round-the-clock doctor guidance",
    ],
    signsHeading: "Signs your wisdom tooth needs attention",
    signs: [
      { title: "Pain at the back of the jaw", text: "Persistent throbbing or dull ache behind your second molars." },
      { title: "Swollen, tender gum flap", text: "Inflamed gum tissue (pericoronitis) trapping food and causing a foul taste." },
      { title: "Difficulty opening mouth", text: "Jaw stiffness and pain when chewing or opening wide." },
      { title: "Crowding pressure", text: "Pressure pushing front teeth out of alignment as wisdom teeth push forward." },
    ],
    steps: [
      { title: "Diagnostic imaging", text: "Digital X-ray evaluates root anatomy, nerve proximity, and bone density.", duration: "10 min" },
      { title: "Profound anesthesia", text: "Targeted nerve block ensures the entire quadrant is completely numb.", duration: "5 min" },
      { title: "Atraumatic removal", text: "The tooth is gently sectioned and eased out without excessive pressure.", duration: "20–30 min" },
      { title: "Hemostasis & sutures", text: "A sterile collagen plug and dissolvable sutures encourage fast healing.", duration: "5 min" },
    ],
    benefits: [
      { title: "Stops recurrent infections", text: "Permanently removes the food trap causing painful gum inflammation." },
      { title: "Prevents cyst formation", text: "Impacted teeth can develop fluid-filled cysts that damage jawbone." },
      { title: "Protects adjacent molars", text: "Prevents deep cavities on the back surface of neighbouring teeth." },
      { title: "Quick recovery", text: "Most patients return to work or college within 2 to 3 days." },
    ],
    aftercare: [
      { when: "First 24 hours", text: "Bite gently on the sterile gauze pack; do not spit, smoke, or drink with straws." },
      { when: "Days 2–3", text: "Apply an ice pack to the cheek, eat cool soft foods like yoghurt and smoothies." },
      { when: "After day 3", text: "Rinse gently with warm salt water after meals to keep the socket clean." },
    ],
    tips: [
      "Do not spit forcefully or rinse on the first day; it dislodges the protective blood clot",
      "Sleep with your head elevated on an extra pillow to minimise cheek swelling",
    ],
    warnings: [
      "Persistent heavy bleeding that does not stop with firm gauze pressure",
      "Severe throbbing pain developing on day 3 or 4 (potential dry socket)",
    ],
    faqs: [
      { q: "Is wisdom tooth removal painful?", a: "No. With modern local anesthesia, you will feel only mild pressure but no sharp pain. We ensure you are completely numb before starting." },
      { q: "Do all wisdom teeth have to be removed?", a: "No. Healthy wisdom teeth that have erupted fully in good alignment and can be cleaned effectively can remain safely." },
      { q: "What is a dry socket and how can I avoid it?", a: "A dry socket occurs if the blood clot is dislodged before healing. You can avoid it by strictly refraining from smoking, spitting, or using straws for 72 hours." },
    ],
    updated: UPDATED,
  },

  {
    slug: "tooth-extraction",
    category: "implants-surgery",
    imageKey: "wisdom",
    name: "Gentle Tooth Extraction",
    cardTitle: "Gentle Tooth\nExtraction",
    imageAlt: "Atraumatic tooth extraction preserving bone socket for future replacement",
    summary:
      "Atraumatic, gentle tooth removal with fast healing and minimal discomfort.",
    metaTitle: "Tooth Extraction in Wadgaon Sheri, Pune | Gentle Removal",
    metaDescription:
      "Painless tooth extraction in Wadgaon Sheri by Dr. Sneha Sardar. Gentle atraumatic removal of broken, decayed teeth with socket preservation and replacement guidance.",
    h1Lead: "Safe, pain-managed removal with",
    h1Accent: "Gentle Tooth Extraction",
    tagline:
      "We believe in saving natural teeth whenever possible. When extraction is unavoidable due to severe fractures or decay, we perform it gently with socket preservation.",
    procedureType: "SurgicalProcedure",
    bodyLocation: "Damaged tooth and alveolar socket",
    facts: {
      duration: "25–40 min",
      visits: "Single visit",
      comfort: "Complete local anesthesia, painless",
      recovery: "1–2 days for light activities",
    },
    overview: [
      "While preserving natural teeth is our primary clinical philosophy, there are instances where a tooth is fractured below the bone, has severe unrestorable decay, or advanced periodontal bone loss. In such cases, timely extraction eliminates pain and prevents infection from spreading.",
      "Dr. Sneha Sardar uses atraumatic periotomes and micro-elevators to gently ease the tooth out without damaging surrounding bone walls. This socket preservation technique ensures your jawbone remains healthy and ready for a future dental implant.",
    ],
    takeaways: [
      "Pain-managed, calm procedure with effective local anesthesia",
      "Atraumatic technique preserves surrounding bone and gum contours",
      "Prevents spreading dental abscesses and sinus infections",
      "Comprehensive consultation on implant or bridge replacement options upfront",
    ],
    signsHeading: "When is a tooth extraction necessary?",
    signs: [
      { title: "Severe unrestorable decay", text: "Decay that has destroyed the tooth structure deep below the gumline." },
      { title: "Vertical root fracture", text: "A cracked tooth split down the root that cannot be saved by a crown." },
      { title: "Advanced periodontal mobility", text: "Teeth that are severely loose due to chronic bone loss." },
      { title: "Severe crowding for braces", text: "Planned extraction of premolars to create space for orthodontic alignment." },
    ],
    steps: [
      { title: "Digital assessment", text: "X-ray checks root curves and bone density around the tooth.", duration: "5 min" },
      { title: "Profound anesthesia", text: "Localized numbing ensures complete comfort with zero sharp sensation.", duration: "5 min" },
      { title: "Atraumatic removal", text: "Micro-instruments gently release periodontal fibres to deliver the tooth smoothly.", duration: "15 min" },
      { title: "Socket preservation", text: "The socket is cleaned, disinfected, and packed with a sterile hemostatic dressing.", duration: "5 min" },
    ],
    benefits: [
      { title: "Immediate pain relief", text: "Removes chronically infected, cracked, or aching tooth roots." },
      { title: "Protects neighbouring bone", text: "Stops bone-dissolving infections from spreading to adjacent healthy teeth." },
      { title: "Prepares for implants", text: "Preserves bone socket volume for an effortless future dental implant." },
      { title: "Quick, simple healing", text: "Atraumatic extraction technique minimizes post-op swelling and soreness." },
    ],
    aftercare: [
      { when: "First 24 hours", text: "Bite on the cotton gauze firmly for 45 minutes; do not spit or drink hot liquids." },
      { when: "Day 2 onwards", text: "Rinse gently with warm salt water after meals to keep the socket hygienic." },
      { when: "First 3 days", text: "Stick to soft, cool foods like khichdi, curd rice, smoothies, and ice cream." },
    ],
    tips: [
      "Do not disturb the blood clot with your tongue or fingers; the clot is essential for healing",
      "Avoid smoking or using tobacco products for at least 72 hours following an extraction",
    ],
    warnings: [
      "Bleeding that continues steadily after 4 hours of gauze pressure",
      "Severe pain developing 3 to 4 days after extraction",
    ],
    faqs: [
      { q: "Will tooth extraction hurt?", a: "No. The procedure is performed under effective local anesthesia, so you will feel only light pressure, but no pain whatsoever." },
      { q: "How soon can I replace the extracted tooth?", a: "In many cases, an immediate implant can be placed the very same day. Otherwise, healing typically takes 8 to 10 weeks before implant placement." },
      { q: "When can I resume work after an extraction?", a: "Most patients return to light desk work the very next day. Avoid strenuous gym workouts for 48 hours." },
    ],
    updated: UPDATED,
  },

  {
    slug: "frenectomy",
    category: "implants-surgery",
    imageKey: "wisdom",
    name: "Frenectomy (Tongue-Tie Release)",
    cardTitle: "Frenectomy\n(Tongue-Tie)",
    imageAlt: "Gentle laser frenectomy procedure releasing restrictive lingual or labial tissue",
    summary:
      "Quick, gentle laser release for tongue-tie and lip-tie restrictions.",
    metaTitle: "Frenectomy in Wadgaon Sheri, Pune | Tongue-Tie & Lip-Tie Release",
    metaDescription:
      "Gentle tongue-tie and lip-tie surgery in Wadgaon Sheri by Dr. Sneha Sardar. Quick laser procedure for infants, children, and adults with fast healing.",
    h1Lead: "Free tongue movement with",
    h1Accent: "Gentle Laser Frenectomy",
    tagline:
      "A tight tongue or lip tie can restrict speech, feeding, and create stubborn gaps between front teeth. Modern laser release takes minutes with minimal bleeding.",
    procedureType: "SurgicalProcedure",
    bodyLocation: "Lingual or labial frenum",
    facts: {
      duration: "15–25 min",
      visits: "1 visit + brief review",
      comfort: "Gentle topical & local numbing, laser precision",
      recovery: "Fast healing within 3–5 days",
    },
    overview: [
      "A frenum is a small fold of tissue that connects the tongue to the floor of the mouth (lingual frenum) or the upper lip to the gumline (labial frenum). When overly thick or tight, it restricts tongue movement (tongue-tie) or pulls the upper front teeth apart, causing a stubborn diastema gap.",
      "At Dr. Sneha – The Dental Studio, we perform gentle frenectomies using soft-tissue laser technology. The laser seals blood vessels as it releases the restrictive band, resulting in minimal bleeding, no painful scalpels, and fast, comfortable recovery.",
    ],
    takeaways: [
      "Gentle soft-tissue laser release with minimal bleeding or swelling",
      "Improves speech pronunciation, tongue flexibility, and infant nursing",
      "Allows orthodontic closure of wide gaps between front teeth",
      "Quick 15-minute in-office procedure suitable for all ages",
    ],
    signsHeading: "Signs a frenectomy may be beneficial",
    signs: [
      { title: "Speech difficulties", text: "Struggling with 'r', 'l', 'th', 's', or 'd' sounds due to restricted tongue movement." },
      { title: "Stubborn gap between teeth", text: "A thick labial frenum pulling front teeth apart, preventing gap closure." },
      { title: "Infant feeding difficulty", text: "Babies struggling to latch during breastfeeding or clicking when nursing." },
      { title: "Gum recession", text: "A tight lip tie pulling the gumline down away from the lower front teeth." },
    ],
    steps: [
      { title: "Anatomical check", text: "Evaluating tongue mobility, speech articulation, and frenum thickness.", duration: "5 min" },
      { title: "Topical anesthesia", text: "Numbing gel applied to the area ensures complete comfort.", duration: "5 min" },
      { title: "Laser release", text: "Precise laser beam releases the restrictive tissue band in seconds.", duration: "5–10 min" },
      { title: "Post-op guidance", text: "Demonstrating simple tongue mobility exercises to prevent reattachment.", duration: "5 min" },
    ],
    benefits: [
      { title: "Instant mobility improvement", text: "Immediate improvement in tongue extension and oral flexibility." },
      { title: "Aesthetic gap closure", text: "Enables braces or aligners to permanently close gaps between front teeth." },
      { title: "Minimal bleeding & no stitches", text: "Laser technology coagulates instantly, frequently eliminating the need for sutures." },
      { title: "Rapid recovery", text: "Children and adults can eat soft meals comfortably within hours." },
    ],
    aftercare: [
      { when: "First 24 hours", text: "Eat cool, soft foods like yoghurt and ice cream; avoid spicy or citrus foods." },
      { when: "For 2 weeks", text: "Perform gentle tongue elevation exercises 3 times daily to ensure optimal mobility." },
      { when: "Ongoing", text: "Speech therapy exercises if recommended to retrain tongue posture." },
    ],
    tips: [
      "Perform the prescribed gentle tongue stretching exercises diligently to prevent scar tissue contraction",
      "Maintain good oral hygiene by gently swabbing the area after meals",
    ],
    warnings: [
      "Persistent swelling or unusual bleeding after the procedure",
      "Fever or excessive difficulty swallowing",
    ],
    faqs: [
      { q: "Is a frenectomy painful?", a: "With local numbing gel and precise laser technology, the procedure is very comfortable. Most patients describe feeling only mild warmth." },
      { q: "Can adults benefit from a tongue-tie release?", a: "Yes. Many adults report improved neck posture, easier speech, better oral hygiene, and relief from chronic jaw tension after release." },
      { q: "Will the gap between my front teeth close on its own after frenectomy?", a: "Releasing the frenum removes the physical barrier. Braces or clear aligners can then easily close the gap permanently." },
    ],
    updated: UPDATED,
  },

  // ==========================================
  // 4. ORTHODONTICS & CLEAR ALIGNERS
  // ==========================================
  {
    slug: "clear-aligners",
    category: "orthodontics",
    imageKey: "braces",
    name: "Clear Aligners (Invisible Braces)",
    cardTitle: "Clear Aligners\n(Invisible Braces)",
    imageAlt: "Patient inserting transparent custom clear aligners for discreet orthodontic smile straightening",
    summary:
      "Near-invisible, removable clear aligners to straighten teeth discreetly.",
    metaTitle: "Clear Aligners in Wadgaon Sheri, Pune | Invisible Braces Cost",
    metaDescription:
      "Straighten teeth discreetly with custom clear aligners in Wadgaon Sheri by Dr. Sneha Sardar. 3D digital smile simulation, comfortable transparent trays, and expert monitoring.",
    h1Lead: "Discreet, wire-free smile transformation with",
    h1Accent: "Custom Clear Aligners",
    tagline:
      "Straighten your teeth without uncomfortable metal wires or brackets. Custom transparent trays correct crowding and gaps predictably with 3D digital planning.",
    procedureType: "NoninvasiveProcedure",
    bodyLocation: "Upper and lower dental arches",
    facts: {
      duration: "6–18 months treatment",
      visits: "Reviews every 6–8 weeks",
      comfort: "Smooth plastic, no cheek sores",
      recovery: "Zero downtime, completely removable",
    },
    overview: [
      "Clear aligners have revolutionized modern orthodontics. Using a series of custom-molded medical-grade transparent polyurethane trays, aligners apply gentle, controlled micro-forces to guide teeth into ideal aesthetic alignment.",
      "At Dr. Sneha – The Dental Studio, we begin with a high-resolution 3D digital scan of your mouth. Advanced orthodontic software maps out your entire tooth movement timeline, allowing you to preview your final aligned smile on screen before your aligners are even fabricated.",
    ],
    takeaways: [
      "Virtually invisible transparent trays that nobody notices you are wearing",
      "100% removable for comfortable eating, brushing, and flossing",
      "No food restrictions — enjoy corn, apples, nuts, and popcorn freely",
      "Fewer emergency visits compared to traditional broken brackets and poking wires",
    ],
    signsHeading: "Orthodontic concerns treatable with clear aligners",
    signs: [
      { title: "Crowded or overlapping teeth", text: "Teeth bunched together, making it difficult to floss and clean thoroughly." },
      { title: "Gaps & spacing between teeth", text: "Uneven spaces between front teeth affecting smile confidence." },
      { title: "Overbite or deep bite", text: "Upper front teeth overlapping lower teeth excessively when closing." },
      { title: "Adult orthodontic relapse", text: "Teeth that have shifted slightly years after childhood metal braces." },
    ],
    steps: [
      { title: "3D digital intraoral scan", text: "Optical digital scanner captures a millimeter-accurate 3D model of your bite.", duration: "15 min" },
      { title: "Digital 3D treatment plan", text: "Preview your virtual before-and-after smile simulation and timeline on screen.", duration: "30 min" },
      { title: "Aligner delivery", text: "Receive your custom set of aligner trays with clear wear instructions.", duration: "30 min" },
      { title: "Progress reviews", text: "Brief check-ins every 6–8 weeks to monitor progress and issue new tray sets.", duration: "15 min" },
    ],
    benefits: [
      { title: "Nearly invisible appearance", text: "Smile, present at work, and attend social events with total self-confidence." },
      { title: "Uncompromised oral hygiene", text: "Simply remove trays to brush and floss normally without threading through wires." },
      { title: "Maximum comfort", text: "Laser-trimmed smooth plastic edges will not cut your tongue, gums, or cheeks." },
      { title: "Predictable results", text: "Digital algorithms plan tooth movements with computerized precision." },
    ],
    aftercare: [
      { when: "Daily wear", text: "Wear your aligner trays for 20 to 22 hours daily, removing them only to eat and brush." },
      { when: "Every 1–2 weeks", text: "Switch to the next numbered tray in your series as directed by Dr. Sneha." },
      { when: "Post-treatment", text: "Wear a clear night retainer to keep your beautiful new smile locked in place permanently." },
    ],
    tips: [
      "Always store your aligners in their protective case when eating to prevent accidental loss",
      "Clean your aligner trays gently with lukewarm water and a soft toothbrush daily",
    ],
    warnings: [
      "Wearing aligners for fewer than 20 hours a day causes teeth tracking lag",
      "Drinking hot tea or coffee with aligners on can warp the medical-grade plastic",
    ],
    faqs: [
      { q: "How long does clear aligner treatment take?", a: "Mild crowding or spacing takes 6 to 9 months, while comprehensive alignment takes 12 to 18 months. You will notice visible progress within the first 6 weeks!" },
      { q: "Can adults get clear aligners?", a: "Absolutely! Over 70% of our clear aligner patients are working adults and college students seeking a discreet way to straighten their teeth." },
      { q: "Are clear aligners as effective as traditional metal braces?", a: "Yes. For the vast majority of orthodontic concerns, digitally planned aligners achieve results just as effectively and much more comfortably than metal braces." },
    ],
    updated: UPDATED,
  },

  {
    slug: "braces",
    category: "orthodontics",
    imageKey: "braces",
    name: "Metal & Ceramic Braces",
    cardTitle: "Metal & Ceramic\nBraces",
    imageAlt: "Ceramic tooth-coloured aesthetic braces and low-profile modern metal brackets",
    summary:
      "Modern metal and ceramic braces to correct misalignment and bite issues.",
    metaTitle: "Braces in Wadgaon Sheri, Pune | Metal & Ceramic Braces Cost",
    metaDescription:
      "Modern metal and ceramic braces in Wadgaon Sheri by Dr. Sneha Sardar. Correct severe crowding, gaps, and complex bite misalignments with precision orthodontics.",
    h1Lead: "Predictable, proven alignment with",
    h1Accent: "Modern Metal & Ceramic Braces",
    tagline:
      "Braces remain the ultimate gold standard for complex bite corrections and severe crowding. Choose sleek mini-metal brackets or discreet tooth-coloured ceramic braces.",
    procedureType: "TherapeuticProcedure",
    bodyLocation: "Upper and lower dental arches",
    facts: {
      duration: "12–24 months",
      visits: "Adjustments every 4–6 weeks",
      comfort: "Mild pressure for 2–3 days after adjustments",
      recovery: "Immediate daily routine",
    },
    overview: [
      "Traditional orthodontics uses brackets bonded to each tooth, connected by a flexible memory archwire that gently guides teeth into their anatomically correct positions. Modern braces are much smaller, sleeker, and more comfortable than brackets used in previous decades.",
      "At our Wadgaon Sheri clinic, we offer both durable mini-metal brackets (popular with teens who love colourful bands) and translucent ceramic brackets that blend in with natural tooth enamel for working adults seeking understated treatment.",
    ],
    takeaways: [
      "Handles the most severe crowding, rotated teeth, and complex bite misalignments",
      "Choice of discreet tooth-coloured ceramic or durable mini-metal brackets",
      "Fixed permanently in place — 100% compliance without worrying about lost trays",
      "Regular adjustments ensure steady, predictable orthodontic transformation",
    ],
    signsHeading: "When are traditional braces the ideal choice?",
    signs: [
      { title: "Severe crowding & rotations", text: "Severely turned or impacted teeth requiring rotational mechanical force." },
      { title: "Complex bite discrepancies", text: "Severe overbite, underbite, crossbite, or open bite alignment needs." },
      { title: "Teens needing compliance-free care", text: "Fixed brackets ensure treatment moves forward without remembering to wear trays." },
      { title: "High-value affordability", text: "Time-tested, cost-effective orthodontic alignment for families." },
    ],
    steps: [
      { title: "Orthodontic diagnostics", text: "Cephalometric and panoramic X-rays, digital photographs, and bite modeling.", duration: "30 min" },
      { title: "Bracket bonding", text: "Ceramic or metal brackets bonded with medical adhesive and blue LED light.", duration: "45 min" },
      { title: "Archwire placement", text: "Super-elastic nickel-titanium archwire engaged with module ties.", duration: "15 min" },
      { title: "Monthly adjustments", text: "Progress check, wire progression, and elastics review every 4 to 6 weeks.", duration: "20 min" },
    ],
    benefits: [
      { title: "Maximum mechanical control", text: "Capable of correcting severe skeletal and dental discrepancies reliably." },
      { title: "No risk of losing trays", text: "Works 24 hours a day, 7 days a week without relying on patient memory." },
      { title: "Ceramic aesthetic option", text: "Tooth-coloured brackets resist staining and blend with your natural enamel." },
      { title: "Life-long dental health", text: "Straight teeth are easier to clean, drastically reducing lifetime risk of cavities." },
    ],
    aftercare: [
      { when: "First week", text: "Eat soft foods like pasta, soups, and porridge while teeth adjust to light pressure." },
      { when: "Daily care", text: "Use an orthodontic V-trim toothbrush and interdental brushes around brackets." },
      { when: "After completion", text: "Wear your custom retainers to preserve your aligned teeth for life." },
    ],
    tips: [
      "Use orthodontic relief wax over any bracket that rubs against the inside of your cheek",
      "Avoid biting into hard foods like whole apples, hard nuts, and sticky caramels",
    ],
    warnings: [
      "A loose bracket floating on the archwire",
      "A poking wire causing persistent mucosal irritation",
    ],
    faqs: [
      { q: "Do ceramic braces stain over time?", a: "Modern ceramic brackets do not stain. The clear elastic ties around them can pick up turmeric or coffee stains, but these ties are changed fresh every month!" },
      { q: "How long will I have to wear braces?", a: "Treatment time ranges from 12 to 24 months depending on complexity. Mild spacing can be completed in about a year." },
      { q: "Do braces hurt?", a: "You will feel mild pressure and tightness for 2 to 3 days after brackets are first placed or adjusted. This is easily managed and settles quickly." },
    ],
    updated: UPDATED,
  },

  {
    slug: "tmj-treatment",
    category: "orthodontics",
    imageKey: "general",
    name: "TMJ & Jaw Pain Treatment",
    cardTitle: "TMJ & Jaw\nPain Treatment",
    imageAlt: "Clinical diagnosis of temporomandibular joint (TMJ) and custom stabilization splint therapy",
    summary:
      "Targeted therapy to relieve jaw clicking, tension headaches, and facial pain.",
    metaTitle: "TMJ & Jaw Pain Treatment in Wadgaon Sheri, Pune | TMJ Specialist",
    metaDescription:
      "Relief from jaw clicking, facial pain, and TMJ headaches in Wadgaon Sheri with Dr. Sneha Sardar. Custom stabilization splints, bite balancing, and lasting jaw relief.",
    h1Lead: "Relieve jaw clicking and headaches with",
    h1Accent: "Specialized TMJ Pain Therapy",
    tagline:
      "Jaw clicking, difficulty chewing, and morning headaches are often signs of temporomandibular joint (TMJ) strain. We diagnose the root cause and restore jaw harmony.",
    procedureType: "TherapeuticProcedure",
    bodyLocation: "Temporomandibular joint and masticatory muscles",
    facts: {
      duration: "30–45 min assessment",
      visits: "Consultation + custom splint delivery + follow-up",
      comfort: "Non-invasive, therapeutic relief",
      recovery: "Gradual muscle relaxation in 1–2 weeks",
    },
    overview: [
      "The temporomandibular joint (TMJ) connects your lower jaw to your skull, allowing smooth movement for talking, chewing, and yawning. When this joint is misaligned, strained by teeth grinding, or affected by arthritis, it can cause chronic jaw clicking, locking, facial muscle pain, and debilitating tension headaches.",
      "At Dr. Sneha – The Dental Studio, we examine jaw joint range of motion, muscle trigger points, and occlusal bite contacts. Treatment focuses on non-invasive therapies, including custom-milled oral stabilization splints, bite equilibration, and muscle deprogramming.",
    ],
    takeaways: [
      "Eliminates chronic jaw clicking, popping sounds, and painful locking",
      "Relieves morning tension headaches, neck stiffness, and facial muscle fatigue",
      "Custom-molded nocturnal stabilization splints relax overactive jaw muscles",
      "Non-surgical, conservative approach focused on long-term joint protection",
    ],
    signsHeading: "Common symptoms of TMJ dysfunction",
    signs: [
      { title: "Jaw clicking or popping", text: "Clicking sound when opening wide to yawn or chew food." },
      { title: "Frequent morning headaches", text: "Dull tension headaches in the temples upon waking up." },
      { title: "Jaw locking or stiffness", text: "Jaw feeling stuck or unable to open comfortably." },
      { title: "Ear ache without infection", text: "Pain radiating near the ear canal without any ear pathology." },
    ],
    steps: [
      { title: "TMJ palpation & range check", text: "Assessing joint sounds, opening path deviation, and tender muscle sites.", duration: "15 min" },
      { title: "Bite & occlusion scan", text: "Recording how upper and lower teeth contact during dynamic jaw movements.", duration: "15 min" },
      { title: "Custom splint fabrication", text: "Molding a rigid, precision-adjusted occlusal stabilization splint.", duration: "Lab phase" },
      { title: "Splint delivery & review", text: "Fine-tuning splint contacts so your jaw rests in a zero-strain position.", duration: "20 min" },
    ],
    benefits: [
      { title: "Long-term pain relief", text: "Addresses the mechanical source of chronic facial pain and headaches." },
      { title: "Protects natural teeth", text: "Prevents severe enamel wear, micro-cracks, and broken restorations." },
      { title: "Smooth jaw mobility", text: "Chew, talk, and yawn without worrying about sudden jaw catching." },
      { title: "Non-surgical & reversible", text: "Comfortable night-time therapy without invasive joint surgery." },
    ],
    aftercare: [
      { when: "Every night", text: "Wear your custom TMJ stabilization splint while sleeping." },
      { when: "Daytime habits", text: "Keep 'lips together, teeth apart' during work to prevent unconscious clenching." },
      { when: "During flare-ups", text: "Apply moist heat packs to the jaw muscles for 10 minutes twice daily." },
    ],
    tips: [
      "Avoid chewing gum, ice cubes, or opening your mouth excessively wide when yawning",
      "Practice tongue-to-palate resting exercises to retrain relaxed jaw posture",
    ],
    warnings: [
      "Jaw suddenly locking open or shut and unable to move",
      "Sharp worsening pain accompanied by inability to chew food",
    ],
    faqs: [
      { q: "Can teeth grinding cause tension headaches?", a: "Yes! Intense nighttime clenching strains the temporalis muscle located across the sides of your head, causing persistent morning headaches." },
      { q: "How does a TMJ splint work?", a: "A custom splint provides an ideal flat surface for teeth to meet, removing joint strain and allowing overactive masticatory muscles to relax completely." },
      { q: "Is TMJ treatment painful?", a: "Not at all. Our treatments are non-invasive, gentle, and focused on physical relaxation and joint decompression." },
    ],
    updated: UPDATED,
  },

  {
    slug: "mouth-guards",
    category: "orthodontics",
    imageKey: "general",
    name: "Night Guards & Sports Mouthguards",
    cardTitle: "Night Guards\n& Mouthguards",
    imageAlt: "Custom-fitted transparent night guard protecting teeth from grinding and sports mouthguard",
    summary:
      "Custom guards to stop nighttime teeth grinding and protect during sports.",
    metaTitle: "Night Guards & Sports Mouthguards in Wadgaon Sheri, Pune",
    metaDescription:
      "Custom night guards for teeth grinding and protective sports mouthguards in Wadgaon Sheri by Dr. Sneha Sardar. Comfortable custom fit, durable protection.",
    h1Lead: "Protect your smile around the clock with",
    h1Accent: "Custom Night Guards & Sports Mouthguards",
    tagline:
      "Nighttime clenching wears down enamel, while sports impacts cause broken teeth. Custom-fitted guards offer comfortable, medical-grade protection tailored to your teeth.",
    procedureType: "NoninvasiveProcedure",
    bodyLocation: "Upper dental arch",
    facts: {
      duration: "20 min impression",
      visits: "2 quick visits",
      comfort: "Custom-molded snug fit",
      recovery: "Immediate comfort",
    },
    overview: [
      "Unconscious sleep grinding (bruxism) exerts up to 250 pounds of pressure per square inch on your teeth, leading to chipped enamel, cracked crowns, and jaw soreness. Generic store-bought guards are bulky, loose, and frequently fall out.",
      "At Dr. Sneha – The Dental Studio, we take precise 3D impressions to craft dual-laminate night guards (soft inner layer for comfort, hard outer shell for durability) and multi-layered shock-absorbing sports mouthguards for cricket, football, and martial arts.",
    ],
    takeaways: [
      "Stops enamel wear, cracked fillings, and chipped tooth edges from night grinding",
      "Dual-laminate construction: soft on teeth, tough against heavy clenching forces",
      "Custom sports mouthguards provide 10x better impact absorption than boil-and-bite kits",
      "Allows easy breathing and talking without choking sensations or loose fit",
    ],
    signsHeading: "Who needs a custom mouthguard?",
    signs: [
      { title: "Waking with jaw soreness", text: "Tight jaw muscles, temple headaches, or tooth tenderness in the morning." },
      { title: "Flattened tooth edges", text: "Incisors looking flat, chipped, or translucent at the biting margins." },
      { title: "Partner hears grinding", text: "Sleeping partner noting loud teeth grating sounds during sleep." },
      { title: "Active contact sports", text: "Playing cricket, football, basketball, skating, or martial arts." },
    ],
    steps: [
      { title: "Dental scan / impression", text: "High-accuracy digital scan of your upper and lower dental arches.", duration: "10 min" },
      { title: "Laboratory vacuum forming", text: "Medical-grade biocompatible polymer heat-molded under high pressure.", duration: "Lab phase" },
      { title: "Try-in & retention check", text: "Verifying secure retention so the guard stays firmly in place without falling out.", duration: "15 min" },
    ],
    benefits: [
      { title: "Saves expensive dental work", text: "Protects crowns, veneers, and fillings from catastrophic grinding fractures." },
      { title: "Better sleep quality", text: "Eliminates muscle tension, promoting deeper and uninterrupted sleep." },
      { title: "Superior sports safety", text: "Cushions blows to the face, preventing knocked-out teeth and lip lacerations." },
      { title: "Snug, comfortable fit", text: "Stays locked on your teeth; will not slip out during deep sleep." },
    ],
    aftercare: [
      { when: "Every morning", text: "Rinse with cool water, brush gently with liquid soap, and store in a ventilated case." },
      { when: "Weekly", text: "Disinfect with an effervescent denture/guard cleansing tablet." },
      { when: "Every check-up", text: "Bring your guard to the clinic for annual wear pattern checks." },
    ],
    tips: [
      "Never leave your mouthguard in a hot car or wash with boiling water; heat distorts the custom shape",
      "Keep the guard in its protective case away from pets, who love to chew on soft dental plastic",
    ],
    warnings: [
      "A guard that has worn through completely and developed holes",
      "Using an ill-fitting generic guard that shifts your natural bite alignment",
    ],
    faqs: [
      { q: "Why are custom night guards better than store-bought boil-and-bite guards?", a: "Store-bought guards are bulky, hard to breathe through, and loose. Because they do not balance your bite, they can actually trigger more clenching and worsen TMJ pain." },
      { q: "How long does a custom night guard last?", a: "Depending on the severity of your grinding, a high-quality dual-laminate night guard typically lasts 2 to 4+ years." },
      { q: "Can I wear a mouthguard if I have braces?", a: "Yes! We make special orthodontic sports mouthguards designed with extra space to protect both your teeth and your brackets from impact." },
    ],
    updated: UPDATED,
  },

  // ==========================================
  // 5. COSMETIC & LASER DENTISTRY
  // ==========================================
  {
    slug: "teeth-whitening",
    category: "cosmetic-laser",
    imageKey: "whitening",
    name: "In-Clinic LED Teeth Whitening",
    cardTitle: "In-Clinic LED\nTeeth Whitening",
    imageAlt: "Patient experiencing in-clinic cold-light LED teeth whitening for instant 6 to 8 shades brighter smile",
    summary:
      "In-clinic LED whitening to brighten teeth 6 to 8 shades in 45 minutes.",
    metaTitle: "Teeth Whitening in Wadgaon Sheri, Pune | 45-Min In-Clinic LED",
    metaDescription:
      "Instant 6 to 8 shades brighter smile in 45 minutes with Dr. Sneha Sardar in Wadgaon Sheri, Pune. Safe, enamel-friendly LED teeth whitening with zero sensitivity.",
    h1Lead: "Instant, radiant brightness with",
    h1Accent: "In-Clinic LED Teeth Whitening",
    tagline:
      "Remove deep stains from coffee, tea, and age safely. Professional in-clinic cold LED whitening delivers instant, luminous results in a single comfortable visit.",
    procedureType: "NoninvasiveProcedure",
    bodyLocation: "Visible smile zone teeth",
    facts: {
      duration: "45–60 min",
      visits: "Single visit",
      comfort: "Enamel-safe, gum-protected, zero pain",
      recovery: "Immediate brilliant smile",
    },
    overview: [
      "Daily consumption of tea, coffee, turmeric, and natural aging cause microscopic stain particles to seep deep into the porous enamel matrix. Over-the-counter whitening toothpastes and home strips only scratch the surface and can erode enamel.",
      "At Dr. Sneha – The Dental Studio, our in-clinic teeth whitening uses professional dental-grade hydrogen peroxide activated by cold blue LED light. We apply a protective light-cured barrier over your gums, ensuring only your teeth are treated safely without gum irritation or sensitivity.",
    ],
    takeaways: [
      "Instantly 6 to 8 shades brighter in a single 45-minute appointment",
      "Protective gingival barrier shields gums completely from sensitivity",
      "Enamel-safe formulation preserves tooth mineral density and strength",
      "Perfect aesthetic preparation for weddings, celebrations, and professional events",
    ],
    signsHeading: "Who benefits from professional teeth whitening?",
    signs: [
      { title: "Tea, coffee & food stains", text: "Yellowish or brown discolouration from daily chai, coffee, and turmeric-rich meals." },
      { title: "Upcoming special events", text: "Weddings, graduations, or interviews where you want your smile looking radiant." },
      { title: "Age-related dullness", text: "Enamel naturally yellowing and losing youthful luminosity over time." },
      { title: "Smokers' stain removal", text: "Stubborn nicotine and tobacco stains resistant to daily brushing." },
    ],
    steps: [
      { title: "Shade recording & polish", text: "Recording your starting baseline shade and polishing surface plaque away.", duration: "10 min" },
      { title: "Gingival barrier isolation", text: "Painting a light-cured protective liquid barrier over gums and lips.", duration: "10 min" },
      { title: "LED whitening cycles", text: "Applying professional whitening gel activated by cool LED light in 15-minute cycles.", duration: "30 min" },
      { title: "Remineralising finish", text: "Applying soothing fluoride glaze to hydrate enamel and prevent sensitivity.", duration: "5 min" },
    ],
    benefits: [
      { title: "Dramatic instant results", text: "Walk out with a noticeably whiter, more luminous smile in under an hour." },
      { title: "Dentist-supervised safety", text: "Safe concentrations applied with full mucosal protection by Dr. Sneha." },
      { title: "Enamel-friendly", text: "Does not etch, thin, or weaken healthy natural tooth enamel." },
      { title: "Boosts confidence", text: "A bright, clean smile transforms self-assurance in photos and conversations." },
    ],
    aftercare: [
      { when: "First 48 hours", text: "Follow the 'White Diet': avoid tea, coffee, cola, turmeric, red wine, and tobacco." },
      { when: "First 2 days", text: "Use room-temperature water if mild temporary sensitivity occurs." },
      { when: "Ongoing", text: "Maintain daily brushing and consider periodic touch-ups to prolong brightness." },
    ],
    tips: [
      "Drink coloured beverages like iced tea through a straw to minimize direct contact with front teeth",
      "Rinse your mouth with plain water after enjoying coffee, dark gravies, or wine",
    ],
    warnings: [
      "Using unverified acidic internet home whitening hacks like lemon juice or charcoal powder",
      "Whitening teeth while having active, untreated cavities or leaking fillings",
    ],
    faqs: [
      { q: "How long do professional teeth whitening results last?", a: "Results typically last 1 to 2+ years depending on dietary habits. Avoiding smoking and excessive dark beverages keeps teeth bright longer." },
      { q: "Will teeth whitening make my teeth sensitive?", a: "Our system includes built-in desensitising agents and a gum barrier. Most patients experience zero to minimal sensitivity that settles within 24 hours." },
      { q: "Does whitening work on dental crowns and fillings?", a: "Whitening gels only lighten natural tooth enamel. If you have visible front fillings or crowns, Dr. Sneha will plan to update them to match your new bright shade." },
    ],
    updated: UPDATED,
  },

  {
    slug: "veneers",
    category: "cosmetic-laser",
    imageKey: "makeover",
    name: "Dental Veneers & Laminates",
    cardTitle: "Dental Veneers\n& Laminates",
    imageAlt: "Ultra-thin porcelain dental veneers transforming smile symmetry and shade",
    summary:
      "Ultra-thin porcelain veneers to correct stains, chips, and uneven teeth.",
    metaTitle: "Dental Veneers in Wadgaon Sheri, Pune | Porcelain Laminates",
    metaDescription:
      "Handcrafted porcelain veneers and composite laminates in Wadgaon Sheri by Dr. Sneha Sardar. Fix gaps, chips, and stubborn stains with a flawless smile design.",
    h1Lead: "Flawless symmetry and radiance with",
    h1Accent: "Custom Porcelain Veneers",
    tagline:
      "Correct permanent stains, gaps, and uneven teeth with paper-thin porcelain shells handcrafted to harmonize with your unique facial features.",
    procedureType: "TherapeuticProcedure",
    bodyLocation: "Front smile-zone teeth",
    facts: {
      duration: "45–60 min per visit",
      visits: "2–3 visits",
      comfort: "Gentle minimal preparation with local anesthesia",
      recovery: "Immediate stunning smile",
    },
    overview: [
      "Dental veneers are ultra-thin, custom-fabricated facings of high-strength medical porcelain or composite resin bonded permanently to the front surfaces of your teeth. They are the secret behind iconic red-carpet celebrity smiles.",
      "At Dr. Sneha – The Dental Studio, we design veneers around your facial contours, skin tone, and lip dynamics. Requiring minimal tooth preparation (often less than 0.5 mm), veneers mask deep tetracycline stains, close gaps, and reshape crooked or short teeth permanently.",
    ],
    takeaways: [
      "Masks stubborn intrinsic stains, chips, gaps, and worn down edges",
      "Stain-resistant medical porcelain keeps its high-gloss lustre permanently",
      "Minimally invasive preparation preserves maximum natural tooth enamel",
      "Custom shade and translucency tailored to look completely natural",
    ],
    signsHeading: "Who is an ideal candidate for veneers?",
    signs: [
      { title: "Deep internal discolouration", text: "Stains from medications or fluorosis that cannot be lifted with bleaching." },
      { title: "Chipped or worn front teeth", text: "Uneven, chipped biting edges affecting youthful smile balance." },
      { title: "Persistent gaps (diastema)", text: "Spaces between front teeth where orthodontic treatment is not desired." },
      { title: "Irregular tooth shape or size", text: "Teeth that are abnormally small, peg-shaped, or slightly crooked." },
    ],
    steps: [
      { title: "Aesthetic design & mock-up", text: "Digital smile analysis and physical wax mock-up so you can test-drive your smile.", duration: "30 min" },
      { title: "Micro-preparation", text: "Microscopic 0.3–0.5 mm enamel reduction and high-precision digital scanning.", duration: "45 min" },
      { title: "Temporary veneers", text: "Natural-looking temporaries protect your teeth while the master ceramist works.", duration: "15 min" },
      { title: "Bonding & cementation", text: "Porcelain veneers are permanently resin-bonded and polished to perfection.", duration: "45 min" },
    ],
    benefits: [
      { title: "Permanent colour stability", text: "High-glazed porcelain is non-porous and will never stain from coffee, tea, or red wine." },
      { title: "Complete smile symmetry", text: "Corrects length, width, alignment, and colour in one unified cosmetic treatment." },
      { title: "Gentle on natural teeth", text: "Far more conservative than crowns; preserves 85%+ of your natural tooth structure." },
      { title: "Durable 10 to 15+ year lifespan", text: "Resin-bonded porcelain creates an exceptionally strong, resilient surface." },
    ],
    aftercare: [
      { when: "First week", text: "Brush gently and get accustomed to the refreshed length and feel of your new teeth." },
      { when: "Nightly habit", text: "Wear a protective night guard if you tend to clench or grind your teeth in sleep." },
      { when: "Long term", text: "Maintain daily flossing and bi-annual cleanings to keep surrounding gums healthy." },
    ],
    tips: [
      "Do not use your veneered front teeth to open bottle caps, tear tape, or crack nutshells",
      "Use non-abrasive fluoride toothpaste to maintain the mirror-finish glaze of porcelain",
    ],
    warnings: [
      "Severe nighttime teeth grinding without wearing a protective night guard",
      "A chipped veneer corner caused by direct trauma or biting hard bone",
    ],
    faqs: [
      { q: "How much tooth structure is removed for porcelain veneers?", a: "Very little! Modern veneers require only 0.3 to 0.5 mm of surface enamel removal—roughly the thickness of a contact lens." },
      { q: "Do veneers look artificial or too bulky?", a: "No. Because each veneer is handcrafted with layered porcelain that mimics natural enamel translucency, they look completely authentic and lifelike." },
      { q: "How long do porcelain veneers last?", a: "With good oral hygiene and regular check-ups, high-grade porcelain veneers routinely last 10 to 15+ years." },
    ],
    updated: UPDATED,
  },

  {
    slug: "smile-makeover",
    category: "cosmetic-laser",
    imageKey: "makeover",
    name: "Smile Makeover & Smile Design",
    cardTitle: "Smile Makeover\n& Smile Design",
    imageAlt: "Digital Smile Design facial analysis for comprehensive aesthetic smile transformation",
    summary:
      "Custom aesthetic smile design tailored to your unique facial features.",
    metaTitle: "Smile Makeover in Wadgaon Sheri, Pune | Digital Smile Design",
    metaDescription:
      "Comprehensive smile makeovers by Dr. Sneha Sardar in Wadgaon Sheri, Pune. Personalized digital smile designing combining whitening, veneers, and alignment for a dream smile.",
    h1Lead: "Your dream smile designed with",
    h1Accent: "Personalized Smile Makeovers",
    tagline:
      "A great smile is not one-size-fits-all. Digital Smile Design harmonizes tooth proportion, gum contours, and facial aesthetics into a bespoke, radiant smile.",
    procedureType: "TherapeuticProcedure",
    bodyLocation: "Full aesthetic smile zone",
    facts: {
      duration: "Phased treatment",
      visits: "2–4 visits",
      comfort: "Gentle, phased, pain-managed care",
      recovery: "Immediate aesthetic transformation",
    },
    overview: [
      "A smile makeover is the ultimate fusion of dental art and clinical science. Rather than looking at isolated teeth, Dr. Sneha Sardar analyzes the relationship between your eyes, lip curvature, skin tone, and facial contours to craft a personalized smile that looks effortlessly natural.",
      "By coordinating in-clinic whitening, porcelain veneers, tooth bonding, gum recontouring, and clear aligners, we create a harmonious, radiant transformation that you can preview digitally and physically before any treatment begins.",
    ],
    takeaways: [
      "Custom Digital Smile Design previews your final smile before starting",
      "Combines whitening, veneers, bonding, and alignment in one coordinated plan",
      "Corrects gummy smiles, discolouration, uneven teeth, and gaps simultaneously",
      "Boosts personal, social, and professional self-confidence dramatically",
    ],
    signsHeading: "When should you consider a smile makeover?",
    signs: [
      { title: "Self-conscious in photographs", text: "Hiding your smile with your hand or smiling without showing teeth." },
      { title: "Multiple cosmetic concerns", text: "Dealing with stains, uneven lengths, chipping, and spacing all at once." },
      { title: "Excessive gum display (gummy smile)", text: "Gums showing prominently when smiling, making teeth appear short." },
      { title: "Major life milestones", text: "Preparing for weddings, career shifts, graduations, or milestone birthdays." },
    ],
    steps: [
      { title: "Facial photo & digital scan", text: "High-resolution studio photography and 3D digital oral scanning.", duration: "30 min" },
      { title: "Digital Smile Design preview", text: "Preview your customized smile simulation and trial mock-up in your mouth.", duration: "45 min" },
      { title: "Coordinated aesthetic therapy", text: "Executing whitening, laser gum contouring, and veneer preparation.", duration: "Phased" },
      { title: "Grand reveal & finishing", text: "Final placement of custom restorations with mirror-like polish.", duration: "60 min" },
    ],
    benefits: [
      { title: "Completely bespoke design", text: "Customized to complement your facial structure, age, and personality." },
      { title: "Preview before committing", text: "See and feel the proposed shape and length in your own mouth first." },
      { title: "Comprehensive rejuvenation", text: "Addresses alignment, shade, symmetry, and gum framing in one journey." },
      { title: "Lasting emotional impact", text: "Patients report a transformative surge in self-esteem and happiness." },
    ],
    aftercare: [
      { when: "First 2 weeks", text: "Enjoy your new smile and return for a brief fine-tuning review if needed." },
      { when: "Nightly", text: "Wear a protective night guard to safeguard your investment from grinding." },
      { when: "Every 6 months", text: "Attend regular preventive polish and hygiene check-ups." },
    ],
    tips: [
      "Practice speaking and smiling naturally in front of a mirror to adapt to your new tooth proportions",
      "Maintain flawless flossing habits around your new aesthetic margins",
    ],
    warnings: [
      "Chewing on fingernails, ice, or opening stubborn packages with your teeth",
      "Neglecting regular check-ups to maintain healthy surrounding gums",
    ],
    faqs: [
      { q: "How do I know what my smile will look like before starting?", a: "With Digital Smile Design, we create a 3D digital simulation and place temporary tooth mock-ups directly in your mouth so you can test-drive your smile before committing!" },
      { q: "How long does a smile makeover take?", a: "Treatments involving whitening and veneers take 2 to 3 weeks. If clear aligners are required for alignment first, treatment progresses over several months." },
      { q: "Can a gummy smile be corrected during a smile makeover?", a: "Yes! Gentle laser gum contouring painlessly lifts excess gum tissue in minutes, revealing the natural length of your teeth." },
    ],
    updated: UPDATED,
  },

  {
    slug: "dental-bonding",
    category: "cosmetic-laser",
    imageKey: "makeover",
    name: "Dental Bonding & Chipped Tooth Repair",
    cardTitle: "Dental Bonding\n& Chipped Tooth",
    imageAlt: "Same-day cosmetic composite bonding repairing chipped front tooth and closing gap",
    summary:
      "Same-day composite repair to fix chipped edges and close minor gaps.",
    metaTitle: "Dental Bonding in Wadgaon Sheri, Pune | Chipped Tooth Repair",
    metaDescription:
      "Same-day chipped tooth repair and cosmetic bonding in Wadgaon Sheri by Dr. Sneha Sardar. Fix gaps, chips, and uneven enamel in a single comfortable visit.",
    h1Lead: "Instant, seamless repair with",
    h1Accent: "Same-Day Dental Bonding",
    tagline:
      "A chipped front tooth or annoying gap can be repaired in just 45 minutes. Cosmetic bonding sculpts natural-looking resin directly onto your enamel with zero drilling.",
    procedureType: "NoninvasiveProcedure",
    bodyLocation: "Front teeth enamel surfaces",
    facts: {
      duration: "30–45 min per tooth",
      visits: "Single visit",
      comfort: "Completely painless, rarely needs anesthesia",
      recovery: "Immediate results",
    },
    overview: [
      "Dental bonding is one of the most conservative, cost-effective cosmetic treatments available. Using dental composite resin shade-matched to your surrounding teeth, Dr. Sneha sculpts and bonds the material directly onto your tooth to restore broken edges, fill gaps, or conceal localized discolouration.",
      "Because the resin bonds directly to natural enamel, minimal or no tooth drilling is required. In a single 45-minute visit, a chipped, fractured, or gapped tooth is restored to flawless beauty.",
    ],
    takeaways: [
      "Completed in a single comfortable 45-minute appointment",
      "No drilling or anesthesia required in the vast majority of cases",
      "Budget-friendly alternative to porcelain veneers for minor aesthetic flaws",
      "Seamlessly shade-matched to your natural enamel for an invisible fix",
    ],
    signsHeading: "When is cosmetic dental bonding ideal?",
    signs: [
      { title: "Chipped or fractured tooth edge", text: "Accidental chip from biting a fork, sports collision, or hard food." },
      { title: "Small gap between front teeth", text: "Minor space (diastema) you want closed without long orthodontic treatment." },
      { title: "Uneven tooth lengths", text: "A tooth that looks shorter than its neighbouring counterpart." },
      { title: "Localized enamel defect", text: "A stubborn white spot, pitted enamel, or isolated yellow patch." },
    ],
    steps: [
      { title: "Shade selection", text: "Matching composite resin shades under natural clinical lighting.", duration: "5 min" },
      { title: "Surface micro-conditioning", text: "Gentle etching creates micro-retentive pores for strong adhesion without drilling.", duration: "5 min" },
      { title: "Artistic sculpting", text: "Layering composite resin and curing each layer with blue LED light.", duration: "25 min" },
      { title: "High-gloss polishing", text: "Smoothing and buffing the restoration to a mirror-like natural luster.", duration: "10 min" },
    ],
    benefits: [
      { title: "Immediate same-day results", text: "Walk out with your chipped tooth completely restored in one visit." },
      { title: "Preserves natural tooth", text: "Your natural healthy enamel remains 100% intact beneath the bonding." },
      { title: "Most affordable cosmetic fix", text: "Significantly more accessible than custom laboratory-made ceramic veneers." },
      { title: "Painless procedure", text: "Zero needles or drilling needed for simple chips and gap closures." },
    ],
    aftercare: [
      { when: "First 48 hours", text: "Avoid staining drinks like black coffee, tea, and red wine while the resin fully cures." },
      { when: "Daily care", text: "Brush and floss normally around the bonded edge." },
      { when: "Bi-annual review", text: "Have the bonded margin polished during regular 6-month check-ups." },
    ],
    tips: [
      "Do not chew on pen caps, ice cubes, or fingernails, as localized biting pressure can chip the composite edge",
      "Inform the dentist if you feel any rough spot with your tongue; it can be polished smooth in seconds",
    ],
    warnings: [
      "A bonded edge chipping off after direct trauma or biting hard foods",
      "Staining around the margins due to heavy smoking or unmanaged oral hygiene",
    ],
    faqs: [
      { q: "How long does dental bonding last?", a: "With good oral hygiene and avoiding hard chewing habits, composite bonding typically lasts 5 to 7+ years, after which it can easily be touched up or repolished." },
      { q: "Is dental bonding painful?", a: "No. Because bonding works on the surface enamel, it is completely painless and almost never requires local anesthesia." },
      { q: "Can dental bonding close gaps between my front teeth?", a: "Yes! Cosmetic bonding is one of the fastest and most cost-effective ways to close gaps (diastemas) between front teeth in a single visit." },
    ],
    updated: UPDATED,
  },

  {
    slug: "gum-treatment",
    category: "cosmetic-laser",
    imageKey: "gum",
    name: "Gum Disease & Periodontal Treatment",
    cardTitle: "Gum Disease\nTreatment",
    imageAlt: "Periodontal deep cleaning and laser gum therapy treating bleeding and receding gums",
    summary:
      "Advanced periodontal care to stop bleeding gums and protect bone health.",
    metaTitle: "Gum Disease Treatment in Wadgaon Sheri, Pune | Periodontal Care",
    metaDescription:
      "Stop bleeding gums and protect teeth with advanced periodontal treatment in Wadgaon Sheri by Dr. Sneha Sardar. Deep scaling, laser therapy, and lasting gum health.",
    h1Lead: "Stop bleeding and protect your teeth with",
    h1Accent: "Gentle Gum Disease Treatment",
    tagline:
      "Healthy gums are the foundation of every lasting smile. Chronic bleeding, bad breath, and loose teeth are signs of periodontal disease that require timely care.",
    procedureType: "TherapeuticProcedure",
    bodyLocation: "Gums and periodontal bone support",
    facts: {
      duration: "45–60 min per quadrant",
      visits: "1–2 visits",
      comfort: "Gentle local numbing, painless deep cleaning",
      recovery: "Mild tenderness for 24–48 hours",
    },
    overview: [
      "Gum disease (periodontitis) is the leading cause of tooth loss in adults. When plaque bacteria are left along the gumline, they infect the periodontal ligament and bone that anchor your teeth, forming deep infected pockets that cause bone loss and bad breath.",
      "At Dr. Sneha – The Dental Studio, we offer comprehensive periodontal therapy. From deep scaling and root planing (deep cleaning) to laser-assisted decontamination, we remove deep subgingival tartar and stimulate healthy reattachment of gum tissue.",
    ],
    takeaways: [
      "Stops gum bleeding, redness, swelling, and chronic bad breath permanently",
      "Deep scaling and root planing eliminates bacterial toxins below the gumline",
      "Laser periodontal therapy disinfects deep pockets with minimal bleeding",
      "Preserves the bone foundation that prevents teeth from becoming loose",
    ],
    signsHeading: "Signs you may have gum disease",
    signs: [
      { title: "Bleeding when brushing or flossing", text: "Healthy gums never bleed during routine daily brushing." },
      { title: "Receding gumline", text: "Teeth looking longer as gums pull back, exposing sensitive root surfaces." },
      { title: "Chronic bad breath or bad taste", text: "Persistent foul odour caused by anaerobic bacteria hidden in deep gum pockets." },
      { title: "Loosening or drifting teeth", text: "Teeth feeling unstable or spaces opening up between previously tight teeth." },
    ],
    steps: [
      { title: "Periodontal charting", text: "Measuring pocket depths and checking for bone loss with digital X-rays.", duration: "10 min" },
      { title: "Localized anesthesia", text: "Gentle numbing ensures deep root cleaning is completely comfortable.", duration: "5 min" },
      { title: "Deep root planing", text: "Ultrasonic scalers smooth rough root surfaces to remove bacterial biofilm.", duration: "30 min" },
      { title: "Laser decontamination", text: "Diode laser decontaminates infected pocket linings and accelerates healing.", duration: "15 min" },
    ],
    benefits: [
      { title: "Saves teeth from loosening", text: "Halts progressive bone loss, keeping your natural teeth firmly anchored." },
      { title: "Improves overall health", text: "Treating gum infections reduces systemic bacterial entry linked to heart health and diabetes." },
      { title: "Eliminates chronic halitosis", text: "Clears deep bacterial colonies responsible for stubborn mouth odour." },
      { title: "Restores pink, tight gums", text: "Allows inflamed, swollen gums to heal into firm, healthy pink contours." },
    ],
    aftercare: [
      { when: "First 48 hours", text: "Rinse gently with prescribed chlorhexidine mouthwash; avoid spicy or sharp crunchy foods." },
      { when: "First week", text: "Brush gently with an ultra-soft toothbrush along the gum margins." },
      { when: "Every 3–4 months", text: "Attend periodontal maintenance cleanings to prevent reinfection." },
    ],
    tips: [
      "Use an interdental brush or water flosser daily; toothbrushes only reach 60% of tooth surfaces",
      "Manage systemic health factors like diabetes and smoking, which accelerate gum bone loss",
    ],
    warnings: [
      "Noticeable mobility or drifting in front teeth",
      "Pus discharge from the gum pockets when pressed",
    ],
    faqs: [
      { q: "Is gum disease curable?", a: "Gingivitis (early stage) is 100% reversible with cleaning. Periodontitis (advanced stage with bone loss) can be successfully arrested and maintained to prevent tooth loss." },
      { q: "Does deep scaling hurt?", a: "We administer gentle local anesthesia to numb the gums thoroughly, so you will feel zero pain during deep scaling and root planing." },
      { q: "Why do my gums bleed when I brush?", a: "Bleeding is the body's inflammatory response to plaque and tartar bacteria along the gumline. A professional cleaning is needed to remove the irritant." },
    ],
    updated: UPDATED,
  },

  {
    slug: "laser-dentistry",
    category: "cosmetic-laser",
    imageKey: "gum",
    name: "Laser Dentistry & Soft Tissue Care",
    cardTitle: "Laser\nDentistry",
    imageAlt: "Advanced dental diode laser performing minimally invasive soft tissue sculpting and disinfection",
    summary:
      "Minimally invasive laser care for painless gum contouring and healing.",
    metaTitle: "Laser Dentistry in Wadgaon Sheri, Pune | Pain-Free Laser Dental Care",
    metaDescription:
      "Advanced laser dentistry in Wadgaon Sheri with Dr. Sneha Sardar. Painless laser gum depigmentation, gummy smile contouring, and rapid healing with zero stitches.",
    h1Lead: "Precision, bloodless dental care with",
    h1Accent: "Advanced Laser Dentistry",
    tagline:
      "Experience dentistry without scalpels or stitches. Dental lasers target soft tissue with pinpoint accuracy, minimizing bleeding and accelerating natural recovery.",
    procedureType: "TherapeuticProcedure",
    bodyLocation: "Oral soft tissues, gums, and oral mucosa",
    facts: {
      duration: "20–40 min",
      visits: "Single visit in most cases",
      comfort: "Gentle topical numbing, virtually bloodless",
      recovery: "Rapid healing within 2–4 days",
    },
    overview: [
      "Dental lasers have transformed soft tissue procedures into gentle, bloodless, and precise treatments. By concentrating light energy onto targeted tissue, dental lasers vaporize diseased cells while simultaneously cauterizing nerve endings and small blood vessels.",
      "At Dr. Sneha – The Dental Studio, we use soft-tissue diode lasers for aesthetic gum reshaping (correcting gummy smiles), cosmetic gum depigmentation (lightening dark melanin spots to pink), aphthous ulcer pain relief, and deep periodontal disinfection.",
    ],
    takeaways: [
      "Minimally invasive soft tissue procedures with virtually no bleeding or scalpels",
      "Eliminates dark melanin gum pigmentation for naturally pink gums",
      "Painless aesthetic gum contouring for gummy smiles and uneven tooth lengths",
      "Instant pain relief for painful mouth ulcers and cold sores",
    ],
    signsHeading: "What treatments utilize dental lasers?",
    signs: [
      { title: "Dark or black gums", text: "Excess melanin pigmentation making gums appear dark brown or black." },
      { title: "Excessive gum display (gummy smile)", text: "Teeth looking too short because excessive gum tissue covers the enamel." },
      { title: "Painful mouth ulcers", text: "Recurrent canker sores or aphthous ulcers causing severe pain when eating." },
      { title: "Stubborn gum infections", text: "Deep periodontal pockets requiring sterile bacterial elimination." },
    ],
    steps: [
      { title: "Topical anesthesia", text: "Gentle numbing gel or mild local anesthesia applied to the gumline.", duration: "5 min" },
      { title: "Laser calibration", text: "Calibrating laser wavelength for gentle depigmentation, sculpting, or disinfection.", duration: "5 min" },
      { title: "Laser application", text: "Precision laser optical fibre sculpts tissue and sterilizes bacteria painlessly.", duration: "15–20 min" },
      { title: "Post-op review", text: "Reviewing treated margins; no scalpels, sutures, or bulky dressings required.", duration: "5 min" },
    ],
    benefits: [
      { title: "Minimal bleeding & no stitches", text: "Lasers instantly seal blood vessels, making procedures nearly bloodless." },
      { title: "Faster natural healing", text: "Biostimulation promotes rapid cellular repair and reduces post-operative swelling." },
      { title: "Pinpoint accuracy", text: "Treats only target tissue while leaving neighbouring healthy enamel completely untouched." },
      { title: "Reduces post-op soreness", text: "Seals nerve endings, drastically reducing discomfort after the procedure." },
    ],
    aftercare: [
      { when: "First 48 hours", text: "Eat cool, soft foods and avoid hot, spicy, or crunchy foods that could irritate gums." },
      { when: "First week", text: "Maintain good oral hygiene; use a prescribed soothing antiseptic mouth gel." },
      { when: "Long term", text: "Enjoy permanently pink, balanced gums with routine brushing." },
    ],
    tips: [
      "Do not rub or scrub the laser-treated gumline with a stiff brush for the first 3 days",
      "Laser ulcer treatments eliminate pain immediately and accelerate healing to under 48 hours",
    ],
    warnings: [
      "Persistent bleeding or unusual swelling following laser therapy",
      "Severe throbbing pain that does not settle with mild analgesics",
    ],
    faqs: [
      { q: "What is laser gum depigmentation?", a: "Laser depigmentation is a cosmetic procedure that gently vaporizes the superficial melanin layer of dark gums, revealing natural, healthy pink gum tissue beneath in one visit." },
      { q: "Is laser dentistry safe?", a: "Yes, dental lasers are exceptionally safe and approved by global dental authorities. Both the patient and doctor wear special protective eyewear during use." },
      { q: "Do laser treatments require stitches?", a: "Almost never! Because the laser coagulates blood vessels as it works, sutures are virtually never required, leading to a smooth, comfortable recovery." },
    ],
    updated: UPDATED,
  },

  // ==========================================
  // BACKWARD COMPATIBILITY ALIAS
  // ==========================================
  {
    slug: "braces-and-aligners",
    category: "orthodontics",
    imageKey: "braces",
    name: "Braces & Clear Aligners",
    cardTitle: "Braces & Clear\nAligners",
    imageAlt: "Digital invisible clear aligners and modern ceramic braces",
    summary:
      "Clear aligners and aesthetic braces for predictable, straight smiles.",
    metaTitle: "Braces & Clear Aligners in Wadgaon Sheri, Pune | The Dental Studio",
    metaDescription:
      "Straighten crooked teeth, close gaps and align your bite with clear aligners or ceramic braces in Wadgaon Sheri with Dr. Sneha Sardar.",
    h1Lead: "Confidence in every smile with",
    h1Accent: "Braces & Clear Aligners",
    tagline:
      "Straight teeth are healthier, easier to clean, and more confident. Choose discreet clear aligners or modern ceramic braces.",
    procedureType: "NoninvasiveProcedure",
    bodyLocation: "Upper and lower dental arches",
    facts: {
      duration: "6–18 months",
      visits: "Every 4–8 weeks",
      comfort: "Gentle pressure, smooth appliances",
      recovery: "Immediate normal routine",
    },
    overview: [
      "Orthodontics has evolved dramatically. Today, patients can choose between nearly invisible clear aligner trays or sleek, tooth-coloured ceramic brackets that correct teeth comfortably.",
      "At Dr. Sneha – The Dental Studio, we use digital 3D scans to map out your tooth movement from start to finish. You can preview your aligned smile before starting treatment.",
    ],
    takeaways: [
      "Clear aligners and ceramic braces options available",
      "Corrects crowding, spacing, rotations, and bite discrepancies",
      "Digital 3D smile simulation before starting",
      "Supervised by visiting orthodontic specialists",
    ],
    signsHeading: "When to consider teeth alignment",
    signs: [
      { title: "Crowding or overlapping teeth", text: "Teeth that are hard to clean with regular brushing." },
      { title: "Spacing & gaps", text: "Spaces between teeth affecting confidence or trapping food." },
      { title: "Bite misalignment", text: "Upper and lower teeth not meeting comfortably." },
      { title: "Adult relapse", text: "Teeth that have shifted years after childhood braces." },
    ],
    steps: [
      { title: "Digital 3D scan", text: "Optical scanning replaces messy impressions for high precision.", duration: "15 min" },
      { title: "Simulation & plan", text: "Preview your virtual before-and-after smile simulation.", duration: "25 min" },
      { title: "Appliance delivery", text: "Fitting brackets or delivering custom clear aligner trays.", duration: "30 min" },
      { title: "Routine reviews", text: "Progress checks every 6 to 8 weeks to issue new aligners or adjust wires.", duration: "15 min" },
    ],
    benefits: [
      { title: "Discreet options", text: "Clear aligners and ceramic brackets blend in with your smile." },
      { title: "Easier oral hygiene", text: "Aligned teeth trap less food and reduce lifetime cavity risk." },
      { title: "Balanced bite", text: "Protects jaw joints and enamel from uneven wear." },
      { title: "Lasting confidence", text: "A straight, radiant smile transforms your presence." },
    ],
    aftercare: [
      { when: "Daily routine", text: "Wear aligners 20–22 hours daily or brush around brackets carefully." },
      { when: "Every review", text: "Attend appointments on schedule to keep treatment on track." },
      { when: "Post-treatment", text: "Wear retainers as prescribed to keep your aligned teeth permanent." },
    ],
    tips: [
      "Keep aligners in their case when eating so they are not misplaced",
      "Use an orthodontic toothbrush for cleaning around fixed brackets",
    ],
    warnings: [
      "Poking wire causing cheek irritation",
      "Wearing aligners for fewer hours than prescribed",
    ],
    faqs: [
      { q: "Which is better: braces or clear aligners?", a: "Clear aligners are nearly invisible and removable, making them popular for adults. Braces are fixed and ideal for complex bite movements. Dr. Sneha will help you choose the best option." },
      { q: "Can adults straighten their teeth?", a: "Yes! Teeth can be moved safely at any age with healthy gums and bone. Many of our orthodontic patients are adults." },
      { q: "Do I need retainers after treatment?", a: "Yes. Retainers hold teeth in their new positions while bone stabilizes, ensuring your straight smile lasts permanently." },
    ],
    updated: UPDATED,
  },
];

export const distinctTreatments = treatments.filter(
  (t) => t.slug !== "braces-and-aligners"
);

export const FEATURED_TREATMENT_SLUGS = [
  "general-dentistry",
  "root-canal-treatment",
  "dental-implants",
  "clear-aligners",
  "teeth-whitening",
  "smile-makeover",
  "gum-treatment",
  "wisdom-tooth-removal",
];

export const featuredTreatments = FEATURED_TREATMENT_SLUGS.map((slug) =>
  treatments.find((t) => t.slug === slug)!
).filter(Boolean);

export const getTreatment = (slug: string) =>
  treatments.find((t) => t.slug === slug);

export const treatmentPath = (slug: string) => `/treatments/${slug}`;

export const getTreatmentsByCategory = (categoryId: string) =>
  treatments.filter((t) => t.category === categoryId && t.slug !== "braces-and-aligners");

export const getCategoryById = (categoryId: string) =>
  TREATMENT_CATEGORIES.find((c) => c.id === categoryId);

