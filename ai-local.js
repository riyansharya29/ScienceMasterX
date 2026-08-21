/* ==========================================================
   SCIENCE MASTER X — OFFLINE SCIENCE TUTOR (ai-local.js)
   ----------------------------------------------------------
   This is a FALLBACK used only when the secure backend
   (POST /api/chat — see server.js) is unreachable.
   It contains a small, NCERT-aligned knowledge base and can
   generate real MCQs from the existing question bank.
   NO API KEY IS EVER USED OR STORED HERE.
   ========================================================== */

const SMX_CHAPTER_INFO = {
    "1": {
        name: "Chemical Reactions and Equations",
        points: [
            "A **chemical reaction** forms new substances with different properties.",
            "Types: **Combination**, **Decomposition** (thermal, electrolytic, photochemical), **Displacement**, **Double displacement**, **Redox**.",
            "**Oxidation** = gain of oxygen / loss of hydrogen; **Reduction** = loss of oxygen / gain of hydrogen.",
            "Exothermic reactions release heat (respiration, burning); **endothermic** reactions absorb energy (photosynthesis).",
            "**Corrosion** (rusting of iron) and **rancidity** (oxidation of fats) are everyday redox effects; prevented by galvanisation, antioxidants, nitrogen flushing.",
            "Balanced equations obey the **law of conservation of mass**."
        ]
    },
    "2": {
        name: "Acids, Bases and Salts",
        points: [
            "Acids release **H⁺ ions** in water; bases release **OH⁻ ions**.",
            "**pH scale**: <7 acidic, 7 neutral, >7 basic. Indicators: litmus, phenolphthalein, methyl orange.",
            "**Neutralisation**: Acid + Base → Salt + Water.",
            "Acid + metal carbonate → salt + **CO₂** + water (CO₂ turns lime water milky).",
            "Important salts: **washing soda** (Na₂CO₃·10H₂O), **baking soda** (NaHCO₃), **bleaching powder** (CaOCl₂), **Plaster of Paris** (CaSO₄·½H₂O).",
            "**Chlor-alkali process**: electrolysis of brine gives NaOH, Cl₂ and H₂."
        ]
    },
    "3": {
        name: "Metals and Non-metals",
        points: [
            "Metals: **lustrous, malleable, ductile**, good conductors, sonorous. Exceptions: sodium is soft, mercury is liquid.",
            "Non-metals: poor conductors (except **graphite**), brittle in solid state.",
            "**Reactivity series**: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au.",
            "Metals + oxygen → **basic oxides**; non-metals + oxygen → **acidic oxides**.",
            "**Ionic compounds** form by electron transfer (NaCl); high melting points, conduct electricity when molten/dissolved.",
            "**Thermite reaction**: Fe₂O₃ + 2Al → 2Fe + Al₂O₃ (used in welding). Roasting vs calcination in metallurgy."
        ]
    },
    "4": {
        name: "Carbon and its Compounds",
        points: [
            "Carbon shows **catenation** (self-linking) and **tetravalency** — hence millions of carbon compounds.",
            "**Saturated** (single bonds, alkanes) vs **unsaturated** (alkenes C=C, alkynes C≡C).",
            "Homologous series differ by a **–CH₂–** unit: alkane CₙH₂ₙ₊₂, alkene CₙH₂ₙ, alkyne CₙH₂ₙ₋₂.",
            "Functional groups: alcohol **–OH**, aldehyde **–CHO**, ketone **>C=O**, carboxylic acid **–COOH**, ester **–COO–**.",
            "Reactions: **combustion, oxidation, addition (hydrogenation), substitution**.",
            "**Esterification** gives sweet-smelling esters; **saponification** makes soap. Micelles and cleansing action of soaps."
        ]
    },
    "5": {
        name: "Life Processes",
        points: [
            "Four life processes: **nutrition, respiration, transport, excretion**.",
            "**Autotrophic** nutrition (photosynthesis) vs **heterotrophic** (holozoic, saprophytic, parasitic).",
            "Photosynthesis: **6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂** (chlorophyll + sunlight). Stomata control gas exchange.",
            "Human digestion: mouth → oesophagus → stomach → small intestine (villi absorb food) → large intestine.",
            "**Double circulation**: pulmonary + systemic; heart has 4 chambers. Arteries carry blood away, veins bring it back.",
            "Respiration: **aerobic** (with O₂, more ATP) vs **anaerobic** (yeast → ethanol + CO₂; muscles → lactic acid).",
            "Excretion: **nephron** is the functional unit of the kidney; urea is the main nitrogenous waste."
        ]
    },
    "6": {
        name: "Control and Coordination",
        points: [
            "**Neuron** = structural unit of the nervous system: dendrite → cell body → axon → nerve ending.",
            "**Reflex arc**: receptor → sensory neuron → spinal cord (relay) → motor neuron → effector.",
            "Brain parts: **cerebrum** (thinking), **cerebellum** (balance/posture), **medulla** (involuntary actions).",
            "**Plant hormones**: auxin (growth), gibberellins, cytokinins, **abscisic acid** (inhibits growth).",
            "Tropisms: **phototropism, geotropism, hydrotropism, thigmotropism**.",
            "Endocrine glands are **ductless**; hormones travel in blood. Insulin (pancreas), thyroxin (thyroid), adrenaline (adrenal), growth hormone (pituitary)."
        ]
    },
    "7": {
        name: "How do Organisms Reproduce?",
        points: [
            "Asexual modes: **fission** (Amoeba, Leishmania), **budding** (Hydra, yeast), **fragmentation** (Spirogyra), **regeneration** (Planaria), **vegetative propagation**, **spore formation** (Rhizopus).",
            "Flower: **stamen** (male — anther + filament) and **carpel** (female — stigma, style, ovary).",
            "**Pollination** (self/cross) → fertilisation → ovule becomes **seed**, ovary becomes **fruit**.",
            "Human male system: testes produce **sperm + testosterone**; female: ovary → oviduct (**fertilisation here**) → uterus (**implantation**).",
            "**Placenta** nourishes the embryo; gestation ≈ 9 months; parturition = birth.",
            "Reproductive health: contraception methods and prevention of STIs."
        ]
    },
    "8": {
        name: "Heredity",
        points: [
            "**Heredity** = transmission of characters from parents to offspring; **variation** = differences among individuals.",
            "Mendel's pea experiments: **dominant** (T, tall) and **recessive** (t, dwarf) factors (genes).",
            "Monohybrid cross F₂ ratio: **3:1 phenotypic**, 1:2:1 genotypic.",
            "Dihybrid cross F₂ ratio: **9:3:3:1** → independent assortment.",
            "**Sex determination**: XX = female, XY = male; the father's gamete decides the child's sex (50% probability).",
            "Acquired traits are **not inherited**; germinal variations are the raw material of evolution."
        ]
    },
    "9": {
        name: "Light – Reflection and Refraction",
        points: [
            "**Laws of reflection**: angle of incidence = angle of reflection; incident ray, normal and reflected ray are coplanar.",
            "Concave mirror: converging (real & inverted images; virtual when object is close). Convex mirror: always **virtual, erect, diminished** (used as rear-view mirror).",
            "**Mirror formula**: 1/v + 1/u = 1/f; magnification m = −v/u.",
            "Refraction: light bends toward normal entering a denser medium. **Snell's law**: sin i / sin r = constant = n.",
            "**Lens formula**: 1/v − 1/u = 1/f; Power **P = 1/f (m)**, unit **dioptre**.",
            "Applications: torches, shaving mirrors, dentist mirrors; lens in cameras, microscopes, telescopes."
        ]
    },
    "10": {
        name: "Human Eye and the Colourful World",
        points: [
            "Eye parts: **cornea, iris, pupil, crystalline lens, retina** (rods & cones), optic nerve.",
            "**Power of accommodation**: lens changes focal length to see near and far objects.",
            "**Myopia** (nearsightedness) → corrected by concave lens; **hypermetropia** → convex lens; **presbyopia** → bifocal lens.",
            "**Dispersion**: white light splits into VIBGYOR through a prism; violet bends most, red least.",
            "Sky is blue due to **scattering of shorter wavelengths**; sun appears red at sunrise/sunset; stars twinkle due to atmospheric refraction.",
            "Rainbow = refraction + dispersion + **internal reflection** in water droplets."
        ]
    },
    "11": {
        name: "Electricity",
        points: [
            "**Current** I = Q/t (ampere); measured by ammeter (in series). Potential difference V = W/Q (volt); voltmeter in parallel.",
            "**Ohm's law**: V = IR (at constant temperature). Resistance depends on length, area and material: R = ρL/A.",
            "Series: R = R₁+R₂+…, same current. Parallel: 1/R = 1/R₁+1/R₂+…, same voltage.",
            "**Power**: P = VI = I²R = V²/R; Energy E = P×t, commercial unit **kWh**.",
            "**Joule's law of heating**: H = I²Rt — used in heaters, toasters, fuses, bulbs.",
            "Fuse protects circuits by melting when current exceeds its rating."
        ]
    },
    "12": {
        name: "Magnetic Effects of Electric Current",
        points: [
            "A current-carrying conductor produces a **magnetic field** around it (Oersted's experiment).",
            "**Right-hand thumb rule**: thumb = current, curled fingers = field direction.",
            "Field of a solenoid resembles a bar magnet; **electromagnets** use soft iron cores.",
            "A current-carrying conductor in a magnetic field experiences force: **F = BIL sinθ** — **Fleming's left-hand rule** (motors).",
            "**Electromagnetic induction**: changing field induces current — **Fleming's right-hand rule** (generators).",
            "Domestic circuits: live (red/brown), neutral (black/blue), earth (green); short circuit and overloading."
        ]
    },
    "13": {
        name: "Our Environment",
        points: [
            "**Ecosystem**: biotic (producers, consumers, decomposers) + abiotic components.",
            "**Food chains** transfer energy; only about **10%** passes to the next trophic level (Lindeman's 10% law).",
            "**Biological magnification**: harmful chemicals (pesticides) concentrate more at higher levels.",
            "**Ozone (O₃)** in the stratosphere shields UV; depleted by **CFCs** → ozone hole.",
            "Waste: **biodegradable** vs **non-biodegradable**; follow the 3 R's — **Reduce, Reuse, Recycle**.",
            "Sustainable development: manage resources to meet present needs without harming future generations."
        ]
    }
};

const SMX_CONCEPTS = [
    {
        keys: ["ohm", "ohms", "resistance", "v = ir", "v=ir"],
        title: "Ohm's Law",
        text: "**Ohm's law** states that the potential difference across a conductor is directly proportional to the current flowing through it, provided the temperature remains constant.\n\n**V = I × R**\n\n- **V** = potential difference (volt)\n- **I** = current (ampere)\n- **R** = resistance (ohm, Ω)\n\nA V–I graph for an ohmic conductor is a **straight line through the origin**. This is a favourite CBSE exam keyword!"
    },
    {
        keys: ["photosynthesis"],
        title: "Photosynthesis",
        text: "**Photosynthesis** is the process by which green plants make food (glucose) from carbon dioxide and water using **sunlight** absorbed by **chlorophyll**.\n\n**6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂**\n\nSteps:\n1. Absorption of light by chlorophyll\n2. Conversion of light energy to chemical energy + splitting of water (**photolysis**)\n3. Reduction of CO₂ to glucose (Calvin cycle)\n\n**Stomata** allow gas exchange; guard cells control their opening. Oxygen released comes from **water**."
    },
    {
        keys: ["refraction", "snell"],
        title: "Refraction of Light",
        text: "**Refraction** is the bending of light when it passes from one transparent medium to another.\n\n- Going into a **denser** medium → bends **towards** the normal.\n- Going into a **rarer** medium → bends **away** from the normal.\n\n**Snell's law**: sin i / sin r = constant = refractive index (n).\n\nn = c / v (speed of light in vacuum ÷ speed in medium).\n\nExamples: a pencil appearing bent in water, stars twinkling, apparent shift of a coin in water."
    },
    {
        keys: ["reflection", "mirror formula"],
        title: "Reflection & Mirrors",
        text: "**Laws of reflection**:\n1. Angle of incidence = angle of reflection\n2. Incident ray, normal and reflected ray lie in the same plane\n\n**Mirror formula**: 1/v + 1/u = 1/f\n**Magnification**: m = −v/u = h′/h\n\n- **Concave mirror** → converging; real, inverted images (virtual & magnified when object is very close).\n- **Convex mirror** → always virtual, erect, diminished → used as **rear-view mirrors**."
    },
    {
        keys: ["lens", "convex lens", "concave lens"],
        title: "Lenses",
        text: "**Lens formula**: 1/v − 1/u = 1/f\n**Magnification**: m = v/u = h′/h\n**Power**: P = 1/f (f in metres), unit **dioptre (D)**.\n\n- **Convex lens** (converging): +ve power; real inverted images, or virtual magnified when object is within F.\n- **Concave lens** (diverging): −ve power; always virtual, erect, diminished.\n\nCombination: P_total = P₁ + P₂."
    },
    {
        keys: ["acid", "base", "ph", "neutralisation", "indicator"],
        title: "Acids, Bases & pH",
        text: "- **Acids** release H⁺ ions in water; sour taste; turn blue litmus **red**.\n- **Bases** release OH⁻ ions; bitter, soapy; turn red litmus **blue**.\n- **pH scale (0–14)**: <7 acid, 7 neutral, >7 base.\n- **Neutralisation**: Acid + Base → Salt + Water.\n\nExamples: HCl in stomach (pH ~1.2–4), tooth decay below pH 5.5, antacids like Mg(OH)₂ neutralise excess acid."
    },
    {
        keys: ["neuron", "nerve", "reflex", "synapse"],
        title: "Neuron & Reflex Arc",
        text: "A **neuron** has three parts: **dendrite** (receives signal), **cell body**, and **axon** (carries signal away, often myelinated).\n\nSignal flow: dendrite → cell body → axon → nerve ending.\n\nThe gap between two neurons is a **synapse** — the signal crosses it chemically.\n\n**Reflex arc**: receptor → sensory neuron → spinal cord (relay neuron) → motor neuron → effector (muscle/gland). Reflexes are fast, involuntary and protect the body."
    },
    {
        keys: ["mendel", "heredity", "dominant", "recessive", "monohybrid"],
        title: "Mendel's Experiments",
        text: "Mendel used **garden peas** and studied contrasting traits (tall vs dwarf).\n\n- **Dominant** trait appears in F₁; recessive hides.\n- F₁ self-pollination → F₂ ratio **3 tall : 1 dwarf** (phenotypic), **1:2:1** genotypic (TT:Tt:tt).\n- **Dihybrid cross** → F₂ ratio **9:3:3:1**, proving independent assortment.\n\nKey terms: gene, allele, genotype, phenotype."
    },
    {
        keys: ["electromagnet", "solenoid", "fleming", "magnetic field"],
        title: "Magnetic Effects of Current",
        text: "- A current-carrying wire creates a **magnetic field** around it.\n- **Right-hand thumb rule**: thumb points along current, curled fingers show field direction.\n- **Solenoid**: coil of many turns; field like a bar magnet; with soft iron core → **electromagnet**.\n- Force on conductor: **F = BIL sinθ**; direction by **Fleming's left-hand rule** (First finger = Field, seCond = Current, thuMb = Motion).\n- Generators use **electromagnetic induction** — Fleming's **right-hand rule**."
    },
    {
        keys: ["electric power", "joule", "heating effect", "kwh"],
        title: "Electric Power & Heating",
        text: "**Power**: P = V × I = I²R = V²/R (unit: **watt**).\n**Energy**: E = P × t; commercial unit **kWh** (1 kWh = 3.6 × 10⁶ J).\n\n**Joule's law of heating**: H = I² × R × t.\n\nApplications: electric heater (high-resistance nichrome filament), fuse (low melting point tin-lead alloy), electric bulb (tungsten filament, filled with argon/nitrogen)."
    },
    {
        keys: ["respiration", "aerobic", "anaerobic", "atp"],
        title: "Respiration",
        text: "**Respiration** breaks down glucose to release energy (ATP).\n\n- **Aerobic** (with O₂): C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy — in **mitochondria**, complete breakdown.\n- **Anaerobic** (without O₂):\n  - Yeast → **ethanol + CO₂** + energy\n  - Muscle cells → **lactic acid** + energy (causes cramps)\n\n**ATP** is the energy currency of the cell."
    },
    {
        keys: ["circulation", "heart", "double circulation", "artery", "vein"],
        title: "Human Circulatory System",
        text: "The human heart has **4 chambers**: 2 atria (receive blood) + 2 ventricles (pump blood).\n\n**Double circulation**:\n1. **Pulmonary**: heart → lungs → heart (oxygenation)\n2. **Systemic**: heart → body → heart (supply)\n\n- **Arteries** carry blood away (thick walls, no valves except at heart exit).\n- **Veins** carry blood toward the heart (have valves).\n- **Capillaries** exchange materials; haemoglobin in RBCs carries O₂."
    },
    {
        keys: ["excretion", "nephron", "kidney", "urea"],
        title: "Excretion",
        text: "**Excretion** removes nitrogenous wastes from the body.\n\n- Human excretory system: kidneys, ureters, urinary bladder, urethra.\n- **Nephron** = functional unit of the kidney (filtration + selective reabsorption).\n- Main waste: **urea** (formed in the liver from ammonia).\n- Plants excrete via transpiration, resins, gums, and falling leaves."
    },
    {
        keys: ["ozone", "ecosystem", "trophic", "food chain"],
        title: "Environment Basics",
        text: "- **Ecosystem** = biotic + abiotic components interacting.\n- **Producers → primary consumers → secondary consumers → tertiary consumers**.\n- **10% law**: only ~10% of energy transfers to the next trophic level.\n- **Biological magnification**: pesticides concentrate at higher levels (maximum in top carnivores).\n- **Ozone (O₃)** absorbs UV; CFCs deplete it."
    },
    {
        keys: ["esterification", "ester", "saponification", "soap", "micelle"],
        title: "Carbon Compounds — Key Reactions",
        text: "**Esterification**: ethanoic acid + ethanol → **ester** (sweet smell) + water, with conc. H₂SO₄.\n\n**Saponification**: ester + NaOH → alcohol + sodium salt of acid (**soap**).\n\n**Cleansing action of soap**: soap molecules form **micelles** — hydrophobic tails trap oil/dirt, hydrophilic heads face water, so grease washes away."
    },
    {
        keys: ["reactivity series", "galvanisation", "alloy", "ionic bond"],
        title: "Metals — Reactivity & Extraction",
        text: "**Reactivity series**: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au.\n\n- Metals above hydrogen displace H₂ from dilute acids.\n- **Galvanisation** = zinc coating on iron to prevent rusting.\n- **Alloys**: brass (Cu+Zn), bronze (Cu+Sn), solder (Pb+Sn), amalgams (with Hg).\n- **Ionic bond**: complete transfer of electrons (e.g., NaCl). Ionic compounds have high melting points and conduct when molten/aqueous."
    },
    {
        keys: ["reproduction", "fertilisation", "pollination", "contraception"],
        title: "Reproduction Basics",
        text: "**Asexual reproduction**: fission, budding, fragmentation, regeneration, spore formation, vegetative propagation — one parent, no gametes, clones.\n\n**Sexual reproduction**: two parents, gamete fusion, variations.\n\n- In flowers: **pollination** → double fertilisation → seed + fruit.\n- In humans: fertilisation in the **oviduct**, implantation in the **uterus**, nourishment via the **placenta**."
    },
    {
        keys: ["myopia", "hypermetropia", "presbyopia", "eye defect", "dispersion", "rainbow", "scattering"],
        title: "Eye Defects & Colourful World",
        text: "**Defects of vision**:\n- **Myopia** (far objects blurry) → concave lens\n- **Hypermetropia** (near objects blurry) → convex lens\n- **Presbyopia** (old-age) → bifocal lens\n\n**Dispersion**: prism splits white light into VIBGYOR.\n**Scattering**: blue sky (short wavelengths scatter more); red danger signals (red scatters least).\n**Rainbow**: dispersion + internal reflection in raindrops."
    }
];

const SMX_NUMERICALS = [
    {
        keys: ["ohm", "resistor", "current", "potential", "electricity numerical", "circuit"],
        q: "A conductor has a resistance of 5 Ω and a potential difference of 10 V across it. Find the current.",
        steps: "🧮 **Numerical — Ohm's Law**\n\n**Question**: A conductor has a resistance of 5 Ω and a potential difference of 10 V across it. Find the current.\n\n**Given:**\nV = 10 V, R = 5 Ω\n\n**Formula:**\nV = I × R  →  I = V / R\n\n**Substitution:**\nI = 10 / 5\n\n**Calculation:**\nI = 2\n\n**Final Answer:**\nCurrent **I = 2 A** ✅\n\n📌 Exam keyword: always write the unit (ampere) — marks are deducted without units!"
    },
    {
        keys: ["mirror", "lens", "focal length", "magnification", "image distance"],
        q: "lens numerical",
        steps: "🧮 **Numerical — Lens Formula**\n\n**Question**: An object is placed 30 cm from a convex lens of focal length 20 cm. Find the image distance.\n\n**Given:**\nu = −30 cm (sign convention), f = +20 cm\n\n**Formula:**\n1/v − 1/u = 1/f  →  1/v = 1/f + 1/u\n\n**Substitution:**\n1/v = 1/20 + 1/(−30) = 1/20 − 1/30\n\n**Calculation:**\n1/v = (3 − 2)/60 = 1/60  →  v = +60 cm\n\n**Final Answer:**\nImage forms at **+60 cm** (real, on the other side of the lens) ✅\n\nMagnification m = v/u = 60/(−30) = **−2** → image is real, inverted and magnified 2×."
    },
    {
        keys: ["power", "energy", "kwh", "joule heating", "heat"],
        q: "power numerical",
        steps: "🧮 **Numerical — Electric Power**\n\n**Question**: An electric iron draws 5 A from a 220 V supply. Find its power and the energy consumed in 30 minutes.\n\n**Given:**\nI = 5 A, V = 220 V, t = 30 min = 1800 s\n\n**Formula:**\nP = V × I ;  E = P × t\n\n**Substitution:**\nP = 220 × 5 ;  E = 1100 × 1800\n\n**Calculation:**\nP = 1100 W ;  E = 1,980,000 J\n\n**Final Answer:**\nPower **P = 1100 W (1.1 kW)**, Energy **E = 1.98 × 10⁶ J** ✅"
    }
];

// ---------- MCQ generator (uses the real question bank) ----------

function smxGenerateMCQs(count) {
    count = count || 5;
    if (typeof questions === "undefined" || !questions.length) {
        return "I couldn't load the question bank on this page. Open the **Quiz** tab to practice MCQs! 📝";
    }
    const pool = questions.filter(q => q && q.question);
    const picks = [];
    const used = new Set();
    let guard = 0;
    while (picks.length < Math.min(count, pool.length) && guard++ < 400) {
        const i = Math.floor(Math.random() * pool.length);
        if (used.has(i)) continue;
        used.add(i);
        picks.push(pool[i]);
    }
    let out = "📝 **Here are " + picks.length + " MCQs for practice:**\n\n";
    picks.forEach((q, idx) => {
        out += "**Q" + (idx + 1) + ".** " + q.question + "\n";
        q.options.forEach((o, oi) => {
            out += "   " + String.fromCharCode(65 + oi) + ") " + o + "\n";
        });
        out += "\n**Correct Answer:** " + String.fromCharCode(65 + q.answer) + ") " + q.options[q.answer] + "\n";
        if (q.explanation) out += "**Explanation:** " + q.explanation + "\n";
        out += "\n";
    });
    out += "Want more? Just say **“Give me 5 MCQs”** again! 💪";
    return out;
}

// ---------- Mode helpers ----------

const SMX_FORMULAS = {
    "1": ["2Mg + O₂ → 2MgO", "CaCO₃ → CaO + CO₂", "Zn + CuSO₄ → ZnSO₄ + Cu", "Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl"],
    "2": ["Acid + Base → Salt + Water", "2NaCl + 2H₂O → 2NaOH + Cl₂ + H₂", "pH < 7 acid · = 7 neutral · > 7 base"],
    "4": ["Alkanes CₙH₂ₙ₊₂ · Alkenes CₙH₂ₙ · Alkynes CₙH₂ₙ₋₂", "CH₄ + 2O₂ → CO₂ + 2H₂O", "CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O"],
    "5": ["6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP)"],
    "9": ["1/v + 1/u = 1/f (mirror)", "1/v − 1/u = 1/f (lens)", "m = −v/u (mirror) · m = v/u (lens)", "n = sin i / sin r = c/v", "P = 1/f (f in m, unit D)"],
    "10": ["P = 1/f (correction lens)", "Near point of normal eye = 25 cm"],
    "11": ["V = IR", "R = ρL/A", "R(series) = R₁+R₂+R₃", "1/R(parallel) = 1/R₁+1/R₂+1/R₃", "P = VI = I²R = V²/R", "H = I²Rt", "1 kWh = 3.6 × 10⁶ J"],
    "12": ["F = BIL sinθ"],
    "13": ["Energy at next level ≈ 10% of previous level"]
};

const SMX_AR = [
    { ch: "1", a: "Respiration is an exothermic process.", r: "Glucose is broken down in cells with the release of energy.", ans: 0 },
    { ch: "9", a: "Convex mirrors are used as rear-view mirrors in vehicles.", r: "A convex mirror always forms a virtual, erect and diminished image, giving a wider field of view.", ans: 0 },
    { ch: "10", a: "The sky appears blue during a clear day.", r: "Air molecules scatter shorter (blue) wavelengths of light more than longer (red) wavelengths.", ans: 0 },
    { ch: "1", a: "An iron nail dipped in copper sulphate solution gets a brownish coating.", r: "Iron is more reactive than copper and displaces it from its salt solution.", ans: 0 },
    { ch: "8", a: "The sex of a child is determined by the father.", r: "The mother's egg always carries an X chromosome, while the father's sperm carries either X or Y.", ans: 0 },
    { ch: "2", a: "The pH of our stomach is less than 7.", r: "The stomach secretes hydrochloric acid which helps in digestion.", ans: 0 },
    { ch: "13", a: "Only about 10% of energy is transferred to the next trophic level.", r: "Most of the energy is lost as heat during life processes at each level.", ans: 0 },
    { ch: "12", a: "A current-carrying solenoid behaves like a bar magnet.", r: "The magnetic field lines inside a solenoid are parallel straight lines.", ans: 1 }
];
// ans: 0 = Both true & R explains A; 1 = Both true but R is NOT the correct explanation

function smxARFormat(item) {
    return "📘 **Assertion (A):** " + item.a +
        "\n📘 **Reason (R):** " + item.r +
        "\n\n(a) Both A and R are true and R is the correct explanation of A\n" +
        "(b) Both A and R are true but R is NOT the correct explanation of A\n" +
        "(c) A is true but R is false\n(d) A is false but R is true\n\n" +
        "**Correct Answer:** (" + "abcd"[item.ans] + ")\n" +
        "**Explanation:** " + (item.ans === 0
            ? "Both statements are true, and the reason correctly explains the assertion."
            : "Both statements are true, but the reason does not fully explain the assertion.");
}

const SMX_CASES = [
    {
        ch: "11", title: "Electric circuit in a house",
        text: "A student connects three resistors of 2 Ω, 3 Ω and 5 Ω in **series** with a 10 V battery, and later reconnects them in **parallel**.",
        qs: [
            ["The equivalent resistance in series is:", ["6 Ω", "10 Ω", "0.98 Ω", "15 Ω"], 1],
            ["In the parallel combination, the potential difference across each resistor is:", ["Different", "Same", "Zero", "Double"], 1],
            ["The current drawn in the series combination compared to parallel will be:", ["More", "Less", "Same", "Infinite"], 1]
        ]
    },
    {
        ch: "5", title: "Kidney failure and dialysis",
        text: "A patient's kidneys are unable to remove nitrogenous wastes. The doctor recommends **dialysis** using an artificial kidney.",
        qs: [
            ["The main nitrogenous waste removed by kidneys is:", ["Glucose", "Urea", "Starch", "Oxygen"], 1],
            ["The functional (filtration) unit of the kidney is the:", ["Neuron", "Nephron", "Alveoli", "Villi"], 1],
            ["Dialysis performs the function of which organ?", ["Heart", "Lungs", "Kidney", "Liver"], 2]
        ]
    },
    {
        ch: "1", title: "Chips packets and nitrogen",
        text: "A food company fills **nitrogen gas** in chips packets instead of air so that the chips do not spoil during storage.",
        qs: [
            ["The spoilage of oils and fats in food is called:", ["Corrosion", "Rancidity", "Fermentation", "Hydrogenation"], 1],
            ["Rancidity is caused by:", ["Reduction", "Oxidation", "Neutralisation", "Distillation"], 1],
            ["Nitrogen is used because it is:", ["Highly reactive", "An unreactive gas", "A good oxidiser", "Acidic"], 1]
        ]
    },
    {
        ch: "9", title: "Dentist's mirror",
        text: "A dentist uses a small mirror to see a magnified, erect image of a tooth held very close to the mirror.",
        qs: [
            ["The mirror used by the dentist is:", ["Convex", "Plane", "Concave", "Cylindrical"], 2],
            ["To get a magnified erect image, the tooth must be placed:", ["Beyond C", "Between F and P (very close)", "At C", "At infinity"], 1],
            ["The nature of this image is:", ["Real and inverted", "Virtual and erect", "Real and diminished", "Virtual and inverted"], 1]
        ]
    }
];

function smxPracticeSet(chapter, wantTest) {
    let pool = (typeof questions !== "undefined") ? questions.filter(q => q && q.question) : [];
    if (chapter) pool = pool.filter(q => q.chapter == chapter) ;
    if (!pool.length && typeof questions !== "undefined") pool = questions.filter(q => q && q.question);

    let out = "📝 **Practice Set" + (chapter ? " — Chapter " + chapter : "") + "**\n\n";

    // 2 MCQs
    const picks = [];
    const used = new Set();
    let guard = 0;
    while (picks.length < Math.min(2, pool.length) && guard++ < 200) {
        const i = Math.floor(Math.random() * pool.length);
        if (used.has(i)) continue;
        used.add(i); picks.push(pool[i]);
    }
    picks.forEach((q, idx) => {
        out += "**Q" + (idx + 1) + ".** " + q.question + "\n";
        q.options.forEach((o, oi) => { out += "   " + String.fromCharCode(65 + oi) + ") " + o + "\n"; });
        out += "\n**Correct Answer:** " + String.fromCharCode(65 + q.answer) + ") " + q.options[q.answer] + "\n**Explanation:** " + (q.explanation || "") + "\n\n";
    });

    // 1 Assertion-Reason
    let arPool = SMX_AR;
    if (chapter) { const f = SMX_AR.filter(a => a.ch === chapter); if (f.length) arPool = f; }
    out += "**Q3. Assertion-Reason:**\n" + smxARFormat(arPool[Math.floor(Math.random() * arPool.length)]) + "\n\n";

    // 1 Case study (3 sub-questions)
    let casePool = SMX_CASES;
    if (chapter) { const f = SMX_CASES.filter(c => c.ch === chapter); if (f.length) casePool = f; }
    const cs = casePool[Math.floor(Math.random() * casePool.length)];
    out += "**Q4. Case Study — " + cs.title + "**\n" + cs.text + "\n\n";
    cs.qs.forEach((sq, i) => {
        out += "   " + (i + 1) + ". " + sq[0] + "\n      " + sq[1].map((o, oi) => String.fromCharCode(65 + oi) + ") " + o).join("   ") +
            "\n      **Ans:** " + String.fromCharCode(65 + sq[2]) + "\n";
    });
    out += "\n" + (wantTest ? "Tell me your answers before scrolling, then check! 💪" : "Want another set? Just ask! 💪");
    return out;
}

function smxNumericalFor(chapter) {
    if (chapter === "9" || chapter === "10") return SMX_NUMERICALS[1].steps;
    if (chapter === "12") return SMX_NUMERICALS[2].steps;
    if (chapter === "11") return Math.random() < .5 ? SMX_NUMERICALS[0].steps : SMX_NUMERICALS[2].steps;
    return SMX_NUMERICALS[Math.floor(Math.random() * SMX_NUMERICALS.length)].steps;
}

function smxQuickRevision(chapter) {
    const info = SMX_CHAPTER_INFO[chapter];
    if (!info) return "Which chapter? Reply like **“Revise Chapter 11”** — I have all 13 chapters ready.";
    let out = "⚡ **Quick Revision — Ch " + chapter + " " + info.name + "**\n\n";
    info.points.slice(0, 4).forEach(p => { out += "• " + p + "\n"; });
    const f = SMX_FORMULAS[chapter];
    if (f) { out += "\n **Formulas:**\n"; f.forEach(x => { out += "• " + x + "\n"; }); }
    out += "\n✅ One-line key fact: " + info.points[info.points.length - 1];
    return out;
}

function smxExamAnswer(text, chapter) {
    // find concept first
    for (const c of SMX_CONCEPTS) {
        if (c.keys.some(k => text.includes(k))) {
            return "🎯 **Exam Mode — " + c.title + "**\n\n**Answer:**\n" + c.text +
                "\n\n**Important keywords:**\n• " + c.title + " • NCERT definition • correct formula with units • labelled diagram where asked\n\n" +
                "**CBSE marking points:**\n1. Write the definition in one clean sentence.\n2. State the formula and define every symbol with SI units.\n3. Draw a neat labelled diagram if the question carries 3+ marks.\n4. Underline the final answer and always add the unit.";
        }
    }
    const info = chapter ? SMX_CHAPTER_INFO[chapter] : null;
    if (info) {
        return "🎯 **Exam Mode — Ch " + chapter + " " + info.name + "**\n\n**Answer outline:**\n" +
            info.points.slice(0, 5).map(p => "• " + p).join("\n") +
            "\n\n**Important keywords:**\n• " + info.points.slice(0, 3).join(" • ").replace(/[*]/g, "") +
            "\n\n**CBSE marking points:**\n1. Use NCERT terminology exactly.\n2. Present reactions balanced with state symbols.\n3. Diagrams = free marks; label them.\n4. For 5-markers, write heading-wise points, not paragraphs.";
    }
    return "🎯 **Exam Mode ready!** Ask a specific question (e.g., “Explain Ohm's law”, “Revise Chapter 9”) and I'll answer in CBSE marking-point style.";
}

function smxShortNotes(chapter) {
    const info = SMX_CHAPTER_INFO[chapter];
    if (!info) return "🗒️ Tell me which chapter to make short notes for — e.g. **“Make short notes for Chapter 5”**.";
    let out = "🗒️ **Short Notes — Ch " + chapter + ": " + info.name + "**\n\n";
    info.points.forEach(p => { out += "• " + p + "\n"; });
    const f = SMX_FORMULAS[chapter];
    if (f) { out += "\n📐 " + f.join(" · "); }
    return out;
}

// ---------- Main offline tutor ----------

function smxLocalTutor(userText, mode, chapter) {

    const text = (userText || "").toLowerCase();
    chapter = chapter || "";

    // detect chapter mentioned in the message (used when no context set)
    function detectChapter() {
        const chNum = text.match(/chapter\s*(?:no\.?|#)?\s*(\d{1,2})/);
        if (chNum && SMX_CHAPTER_INFO[chNum[1]]) return chNum[1];
        if (text.includes("life process")) return "5";
        if (text.includes("control and coordination")) return "6";
        if (text.includes("reproduce") || text.includes("reproduction")) return "7";
        if (text.includes("heredity") || text.includes("mendel")) return "8";
        if (text.includes("light")) return "9";
        if (text.includes("human eye") || text.includes("colourful world")) return "10";
        if (text.includes("electricity") || text.includes("ohm")) return "11";
        if (text.includes("magnetic")) return "12";
        if (text.includes("environment") || text.includes("ecosystem") || text.includes("ozone")) return "13";
        if (text.includes("chemical reaction")) return "1";
        if (text.includes("acid") && text.includes("base")) return "2";
        if (text.includes("metal")) return "3";
        if (text.includes("carbon")) return "4";
        for (const key of Object.keys(SMX_CHAPTER_INFO)) {
            if (text.includes(SMX_CHAPTER_INFO[key].name.toLowerCase())) return key;
        }
        return chapter || "";
    }

    // ---- MODE OVERRIDES ----
    if (mode === "numerical" || /(numerical|solve|calculate|find the|compute)/.test(text)) {
        return smxNumericalFor(detectChapter() || chapter);
    }
    if (mode === "practice" || /(test me|assertion|case study|practice set)/.test(text)) {
        return smxPracticeSet(detectChapter() || chapter, /test me/.test(text));
    }
    if (mode === "exam") return smxExamAnswer(text, detectChapter() || chapter);
    if (mode === "quick") return smxQuickRevision(detectChapter() || chapter);
    if (mode === "chapter") {
        const ch = detectChapter() || chapter;
        if (ch && SMX_CHAPTER_INFO[ch]) {
            const info = SMX_CHAPTER_INFO[ch];
            let out = "📖 **Chapter " + ch + " — " + info.name + "**\n\n**Key revision points:**\n";
            info.points.forEach(p => { out += "• " + p + "\n"; });
            const f = SMX_FORMULAS[ch];
            if (f) { out += "\n📐 **Formulas:**\n"; f.forEach(x => { out += "• " + x + "\n"; }); }
            out += "\n✅ Next: try the chapter quiz or ask **“Test me”**!";
            return out;
        }
    }
    if (/(short notes|make notes)/.test(text)) return smxShortNotes(detectChapter() || chapter);

    // 1) MCQ / quiz requests
    if (/(mcq|quiz|multiple choice|question bank|practice question)/.test(text)) {
        const m = text.match(/(\d+)\s*(mcq|question)/);
        return smxGenerateMCQs(m ? parseInt(m[1], 10) : 5);
    }

    // 2) Numericals
    if (/(numerical|solve|calculate|problem|find the|compute)/.test(text)) {
        for (const n of SMX_NUMERICALS) {
            if (n.keys.some(k => text.includes(k))) return n.steps;
        }
        return SMX_NUMERICALS[0].steps + "\n\n💡 Tip: mention the topic (e.g., “solve a lens numerical”) for a specific question.";
    }

    // 3) Concept lookup first (most specific)
    for (const c of SMX_CONCEPTS) {
        if (c.keys.some(k => text.includes(k))) {
            return "💡 **" + c.title + "**\n\n" + c.text;
        }
    }

    // 4) Chapter detection → revision / explanation (context-aware)
    const ch = detectChapter();

    if (ch && SMX_CHAPTER_INFO[ch] && /(revise|revision|summary|explain|notes|about|chapter)/.test(text)) {
        const info = SMX_CHAPTER_INFO[ch];
        let out = "📖 **Chapter " + ch + " — " + info.name + "**\n\n**Key revision points:**\n";
        info.points.forEach(p => { out += "• " + p + "\n"; });
        const f = SMX_FORMULAS[ch];
        if (f) { out += "\n📐 **Formulas:**\n"; f.forEach(x => { out += "• " + x + "\n"; }); }
        out += "\n✅ Next: try the **chapter quiz** for Chapter " + ch + " on the Home tab, or ask me for **5 MCQs**!";
        return out;
    }
    if (ch && SMX_CHAPTER_INFO[ch]) {
        const info = SMX_CHAPTER_INFO[ch];
        let out = "📖 **Chapter " + ch + " — " + info.name + "**\n\n";
        info.points.slice(0, 4).forEach(p => { out += "• " + p + "\n"; });
        out += "\nSay **“revise chapter " + ch + "**” for the full revision list.";
        return out;
    }

    // 5) Generic revision request without a chapter
    if (/(revise|revision)/.test(text)) {
        let out = "Which chapter would you like to revise? Here's the full list:\n\n";
        for (const key of Object.keys(SMX_CHAPTER_INFO)) {
            out += "• **" + key + ".** " + SMX_CHAPTER_INFO[key].name + "\n";
        }
        out += "\nReply with a chapter name or number, e.g. **“Revise Chapter 11”**.";
        return out;
    }

    // 6) Greetings / thanks
    if (/^(hi|hello|hey|namaste)/.test(text.trim())) {
        return "Hello! 👋 I'm **Science AI**, your Class 10 Science tutor.\n\nYou can ask me to:\n• **Explain a concept** — “Explain Ohm's law”\n• **Revise a chapter** — “Revise Chapter 5”\n• **Give MCQs** — “Give me 5 MCQs”\n• **Solve a numerical** — “Solve a numerical”";
    }
    if (/(thank|thanks|shukriya)/.test(text)) {
        return "You're welcome! 🌟 Keep practicing — consistency beats talent. Ask me anything else about Class 10 Science!";
    }

    // 7) Fallback menu
    return "I'm the **offline Science tutor** 🧪 — here's what I can do right now:\n\n• 💡 **Explain concepts** — try “Explain photosynthesis” or “Explain Ohm's law”\n• 📖 **Revise chapters** — try “Revise Chapter 5” (all 13 chapters)\n• 📝 **Generate MCQs** — try “Give me 5 MCQs”\n• 🧮 **Numericals** — try “Solve a numerical”\n\n🔌 For the full AI experience, connect the secure backend (see **server.js** — `POST /api/chat`).";
}

window.smxLocalTutor = smxLocalTutor;
