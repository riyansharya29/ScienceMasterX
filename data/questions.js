const questions = [
{
    chapter: "1",
    difficulty: "Easy",
    pyq: false,
    question: "Which gas is evolved when zinc reacts with dilute hydrochloric acid?",
    options: [
        "Oxygen",
        "Hydrogen",
        "Carbon dioxide",
        "Nitrogen"
    ],
    answer: 1,
    explanation: "Zinc reacts with dilute HCl to produce hydrogen gas."
},

{
    chapter: "1",
    difficulty: "Easy",
    pyq: true,
    question: "Burning of magnesium ribbon is an example of:",
    options: [
        "Combination reaction",
        "Decomposition reaction",
        "Displacement reaction",
        "Double displacement reaction"
    ],
    answer: 0,
    explanation: "Magnesium combines with oxygen to form magnesium oxide."
},

{
    chapter: "1",
    difficulty: "Easy",
    pyq: false,
    question: "The chemical formula of magnesium oxide is:",
    options: [
        "MgO",
        "Mg2O",
        "MgO2",
        "MgOH"
    ],
    answer: 0,
    explanation: "Magnesium oxide is represented by MgO."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: true,
    question: "Rusting of iron requires:",
    options: [
        "Only oxygen",
        "Only water",
        "Air and moisture",
        "Carbon dioxide"
    ],
    answer: 2,
    explanation: "Rusting occurs in the presence of oxygen and moisture."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: false,
    question: "Which metal is used in galvanisation?",
    options: [
        "Copper",
        "Silver",
        "Zinc",
        "Gold"
    ],
    answer: 2,
    explanation: "Iron is coated with zinc during galvanisation."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: true,
    question: "AB → A + B represents:",
    options: [
        "Combination reaction",
        "Decomposition reaction",
        "Displacement reaction",
        "Neutralisation reaction"
    ],
    answer: 1,
    explanation: "One compound breaks into simpler substances."
},

{
    chapter: "1",
    difficulty: "Easy",
    pyq: false,
    question: "Which gas supports combustion?",
    options: [
        "Hydrogen",
        "Nitrogen",
        "Oxygen",
        "Carbon dioxide"
    ],
    answer: 2,
    explanation: "Oxygen supports burning."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: true,
    question: "Which reaction is exothermic?",
    options: [
        "Photosynthesis",
        "Respiration",
        "Electrolysis of water",
        "Thermal decomposition"
    ],
    answer: 1,
    explanation: "Respiration releases energy."
},

{
    chapter: "1",
    difficulty: "Easy",
    pyq: false,
    question: "What is rancidity?",
    options: [
        "Spoilage of food due to oxidation",
        "Melting of fats",
        "Boiling of oil",
        "Fermentation"
    ],
    answer: 0,
    explanation: "Oxidation of fats and oils causes rancidity."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: true,
    question: "Which reaction is a displacement reaction?",
    options: [
        "Zn + CuSO₄ → ZnSO₄ + Cu",
        "2Mg + O₂ → 2MgO",
        "CaCO₃ → CaO + CO₂",
        "NaOH + HCl → NaCl + H₂O"
    ],
    answer: 0,
    explanation: "Zinc displaces copper from copper sulphate."
},{
    chapter: "1",
    difficulty: "Medium",
    pyq: true,
    question: "Which of the following is a decomposition reaction?",
    options: [
        "CaCO₃ → CaO + CO₂",
        "2Mg + O₂ → 2MgO",
        "Zn + CuSO₄ → ZnSO₄ + Cu",
        "HCl + NaOH → NaCl + H₂O"
    ],
    answer: 0,
    explanation: "Calcium carbonate decomposes into calcium oxide and carbon dioxide."
},

{
    chapter: "1",
    difficulty: "Easy",
    pyq: false,
    question: "Which metal is more reactive?",
    options: [
        "Copper",
        "Silver",
        "Zinc",
        "Gold"
    ],
    answer: 2,
    explanation: "Zinc is more reactive than copper, silver and gold."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: true,
    question: "The green coating formed on copper is:",
    options: [
        "Copper oxide",
        "Basic copper carbonate",
        "Copper sulphate",
        "Copper chloride"
    ],
    answer: 1,
    explanation: "Copper reacts with air, water and carbon dioxide to form basic copper carbonate."
},

{
    chapter: "1",
    difficulty: "Easy",
    pyq: false,
    question: "Which process is used to protect iron from rusting?",
    options: [
        "Electroplating",
        "Galvanisation",
        "Distillation",
        "Filtration"
    ],
    answer: 1,
    explanation: "Galvanisation protects iron by coating it with zinc."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: false,
    question: "Which gas is released during respiration?",
    options: [
        "Oxygen",
        "Nitrogen",
        "Carbon dioxide",
        "Hydrogen"
    ],
    answer: 2,
    explanation: "Respiration releases carbon dioxide."
},

{
    chapter: "1",
    difficulty: "Hard",
    pyq: true,
    question: "Which of the following is an oxidation reaction?",
    options: [
        "Addition of oxygen",
        "Removal of oxygen",
        "Addition of electrons",
        "Removal of carbon dioxide"
    ],
    answer: 0,
    explanation: "Oxidation involves the addition of oxygen or removal of hydrogen."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: false,
    question: "Which compound is formed when quicklime reacts with water?",
    options: [
        "Calcium carbonate",
        "Calcium hydroxide",
        "Calcium chloride",
        "Calcium sulphate"
    ],
    answer: 1,
    explanation: "CaO + H₂O → Ca(OH)₂."
},

{
    chapter: "1",
    difficulty: "Easy",
    pyq: true,
    question: "Which reaction produces a white precipitate?",
    options: [
        "Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl",
        "Mg + O₂ → MgO",
        "Zn + HCl → ZnCl₂ + H₂",
        "CaCO₃ → CaO + CO₂"
    ],
    answer: 0,
    explanation: "Barium sulphate is a white precipitate."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: false,
    question: "The process of coating iron with zinc is called:",
    options: [
        "Rusting",
        "Galvanisation",
        "Electrolysis",
        "Corrosion"
    ],
    answer: 1,
    explanation: "Galvanisation prevents rusting."
},

{
    chapter: "1",
    difficulty: "Easy",
    pyq: true,
    question: "Which of the following is NOT a chemical reaction?",
    options: [
        "Burning of coal",
        "Rusting of iron",
        "Melting of ice",
        "Digestion of food"
    ],
    answer: 2,
    explanation: "Melting of ice is a physical change."
},
{
    chapter: "1",
    difficulty: "Easy",
    pyq: true,
    question: "Which of the following is a chemical reaction?",
    options: [
        "Dissolving sugar in water",
        "Burning of magnesium ribbon",
        "Breaking of glass",
        "Melting of wax"
    ],
    answer: 1,
    explanation: "Burning magnesium forms magnesium oxide, a new substance."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: false,
    question: "The white ash formed after burning magnesium ribbon is:",
    options: [
        "Magnesium sulphate",
        "Magnesium oxide",
        "Magnesium chloride",
        "Magnesium carbonate"
    ],
    answer: 1,
    explanation: "Magnesium burns in oxygen to form magnesium oxide."
},

{
    chapter: "1",
    difficulty: "Easy",
    pyq: true,
    question: "Which of the following is an example of oxidation?",
    options: [
        "Addition of oxygen",
        "Removal of oxygen",
        "Addition of hydrogen",
        "Removal of carbon dioxide"
    ],
    answer: 0,
    explanation: "Oxidation involves the addition of oxygen or removal of hydrogen."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: false,
    question: "The reaction between an acid and a base is called:",
    options: [
        "Combination reaction",
        "Neutralisation reaction",
        "Displacement reaction",
        "Decomposition reaction"
    ],
    answer: 1,
    explanation: "An acid reacts with a base to form salt and water."
},

{
    chapter: "1",
    difficulty: "Hard",
    pyq: true,
    question: "Which of the following reactions is an example of reduction?",
    options: [
        "CuO + H₂ → Cu + H₂O",
        "2Mg + O₂ → 2MgO",
        "Fe + CuSO₄ → FeSO₄ + Cu",
        "CaCO₃ → CaO + CO₂"
    ],
    answer: 0,
    explanation: "Copper oxide loses oxygen and is reduced to copper."
},

{
    chapter: "1",
    difficulty: "Easy",
    pyq: false,
    question: "What is the colour of copper metal?",
    options: [
        "Blue",
        "Reddish-brown",
        "Black",
        "White"
    ],
    answer: 1,
    explanation: "Copper is a reddish-brown metal."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: false,
    question: "Which process is responsible for the spoilage of oils and fats?",
    options: [
        "Evaporation",
        "Condensation",
        "Rancidity",
        "Sublimation"
    ],
    answer: 2,
    explanation: "Rancidity is caused by oxidation of fats and oils."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: true,
    question: "Which gas is evolved when dilute hydrochloric acid reacts with zinc?",
    options: [
        "Oxygen",
        "Carbon dioxide",
        "Hydrogen",
        "Chlorine"
    ],
    answer: 2,
    explanation: "Hydrogen gas is produced during the reaction."
},

{
    chapter: "1",
    difficulty: "Easy",
    pyq: false,
    question: "The process of losing electrons is called:",
    options: [
        "Reduction",
        "Oxidation",
        "Neutralisation",
        "Precipitation"
    ],
    answer: 1,
    explanation: "Loss of electrons is oxidation."
},

{
    chapter: "1",
    difficulty: "Hard",
    pyq: true,
    question: "Which of the following reactions is a redox reaction?",
    options: [
        "Zn + CuSO₄ → ZnSO₄ + Cu",
        "NaOH + HCl → NaCl + H₂O",
        "CaO + H₂O → Ca(OH)₂",
        "CaCO₃ → CaO + CO₂"
    ],
    answer: 0,
    explanation: "In this reaction, zinc is oxidised and copper ions are reduced."
},

{
    chapter: "1",
    difficulty: "Easy",
    pyq: true,
    question: "Which of the following is a chemical change?",
    options: [
        "Melting of ice",
        "Boiling of water",
        "Rusting of iron",
        "Breaking of glass"
    ],
    answer: 2,
    explanation: "Rusting forms iron oxide, which is a new substance."
},

{
    chapter: "1",
    difficulty: "Easy",
    pyq: true,
    question: "Which gas is evolved when zinc reacts with dilute hydrochloric acid?",
    options: [
        "Oxygen",
        "Hydrogen",
        "Carbon dioxide",
        "Nitrogen"
    ],
    answer: 1,
    explanation: "Zn + 2HCl → ZnCl₂ + H₂."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: true,
    question: "Which type of reaction is represented by 2Mg + O₂ → 2MgO?",
    options: [
        "Decomposition",
        "Combination",
        "Displacement",
        "Double Displacement"
    ],
    answer: 1,
    explanation: "Two reactants combine to form one product."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: true,
    question: "What is observed when silver chloride is exposed to sunlight?",
    options: [
        "It turns blue",
        "It turns grey",
        "It turns green",
        "No change"
    ],
    answer: 1,
    explanation: "AgCl decomposes into silver and chlorine in sunlight."
},

{
    chapter: "1",
    difficulty: "Easy",
    pyq: false,
    question: "Which of the following reactions is exothermic?",
    options: [
        "Photosynthesis",
        "Respiration",
        "Electrolysis of water",
        "Thermal decomposition of CaCO₃"
    ],
    answer: 1,
    explanation: "Respiration releases energy."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: true,
    question: "Which metal is more reactive than copper?",
    options: [
        "Silver",
        "Gold",
        "Iron",
        "Platinum"
    ],
    answer: 2,
    explanation: "Iron is above copper in the reactivity series."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: true,
    question: "Which reaction is used in thermite welding?",
    options: [
        "Combination",
        "Displacement",
        "Redox",
        "Neutralisation"
    ],
    answer: 2,
    explanation: "Thermite reaction is an oxidation-reduction (redox) reaction."
},

{
    chapter: "1",
    difficulty: "Easy",
    pyq: false,
    question: "The process of gaining oxygen is called:",
    options: [
        "Reduction",
        "Oxidation",
        "Neutralisation",
        "Hydrogenation"
    ],
    answer: 1,
    explanation: "Addition of oxygen is oxidation."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: true,
    question: "Which substance acts as an oxidising agent in the reaction CuO + H₂ → Cu + H₂O?",
    options: [
        "Hydrogen",
        "Copper",
        "Copper oxide",
        "Water"
    ],
    answer: 2,
    explanation: "CuO supplies oxygen to hydrogen, so it is the oxidising agent."
},

{
    chapter: "1",
    difficulty: "Hard",
    pyq: true,
    question: "Which of the following is a double displacement reaction?",
    options: [
        "Zn + CuSO₄ → ZnSO₄ + Cu",
        "CaCO₃ → CaO + CO₂",
        "Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl",
        "2Mg + O₂ → 2MgO"
    ],
    answer: 2,
    explanation: "Exchange of ions occurs between Na₂SO₄ and BaCl₂."
},
{
    chapter: "1",
    difficulty: "Easy",
    pyq: true,
    question: "Which of the following is a decomposition reaction?",
    options: [
        "2H₂ + O₂ → 2H₂O",
        "CaCO₃ → CaO + CO₂",
        "Zn + CuSO₄ → ZnSO₄ + Cu",
        "NaOH + HCl → NaCl + H₂O"
    ],
    answer: 1,
    explanation: "A single compound breaks into simpler substances."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: true,
    question: "The black coating formed on silver due to corrosion is:",
    options: [
        "Silver oxide",
        "Silver sulphide",
        "Silver nitrate",
        "Silver chloride"
    ],
    answer: 1,
    explanation: "Silver reacts with hydrogen sulphide in air to form Ag₂S."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: false,
    question: "Which gas turns lime water milky?",
    options: [
        "Hydrogen",
        "Carbon dioxide",
        "Oxygen",
        "Nitrogen"
    ],
    answer: 1,
    explanation: "CO₂ reacts with lime water to form calcium carbonate."
},

{
    chapter: "1",
    difficulty: "Hard",
    pyq: true,
    question: "Which reaction represents oxidation?",
    options: [
        "CuO + H₂ → Cu + H₂O",
        "2Cu + O₂ → 2CuO",
        "AgNO₃ + NaCl → AgCl + NaNO₃",
        "CaCO₃ → CaO + CO₂"
    ],
    answer: 1,
    explanation: "Copper gains oxygen to form copper oxide."
},

{
    chapter: "1",
    difficulty: "Easy",
    pyq: false,
    question: "What is the colour of copper sulphate solution?",
    options: [
        "Green",
        "Blue",
        "Yellow",
        "Colourless"
    ],
    answer: 1,
    explanation: "Copper sulphate solution is blue."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: true,
    question: "Which of the following is an endothermic reaction?",
    options: [
        "Respiration",
        "Burning of LPG",
        "Photosynthesis",
        "Neutralisation"
    ],
    answer: 2,
    explanation: "Photosynthesis absorbs sunlight energy."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: true,
    question: "When iron nails are placed in copper sulphate solution, the solution becomes:",
    options: [
        "Blue",
        "Green",
        "Red",
        "Colourless"
    ],
    answer: 1,
    explanation: "Iron sulphate is formed, which is green."
},

{
    chapter: "1",
    difficulty: "Hard",
    pyq: true,
    question: "Which metal can displace zinc from zinc sulphate solution?",
    options: [
        "Copper",
        "Silver",
        "Magnesium",
        "Gold"
    ],
    answer: 2,
    explanation: "Only a more reactive metal like magnesium can displace zinc."
},

{
    chapter: "1",
    difficulty: "Medium",
    pyq: false,
    question: "Which of the following is not a sign of a chemical reaction?",
    options: [
        "Evolution of gas",
        "Formation of precipitate",
        "Change in state only",
        "Change in colour"
    ],
    answer: 2,
    explanation: "A change in state alone is usually a physical change."
},

{
    chapter: "1",
    difficulty: "Hard",
    pyq: true,
    question: "The reaction Fe₂O₃ + 2Al → Al₂O₃ + 2Fe is known as:",
    options: [
        "Neutralisation reaction",
        "Thermite reaction",
        "Photochemical reaction",
        "Electrolysis"
    ],
    answer: 1,
    explanation: "This highly exothermic redox reaction is called the thermite reaction."
},
{
chapter:"1",
difficulty:"Easy",
pyq:true,
question:"Which of the following reactions produces a white precipitate?",
options:[
"Zn + HCl",
"AgNO3 + NaCl",
"CaCO3 → CaO + CO2",
"Mg + O2"
],
answer:1,
explanation:"AgCl is a white precipitate."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Which gas is evolved during the decomposition of calcium carbonate?",
options:[
"Oxygen",
"Hydrogen",
"Carbon dioxide",
"Nitrogen"
],
answer:2,
explanation:"CaCO3 decomposes into CaO and CO2."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Rancidity can be prevented by:",
options:[
"Heating food",
"Keeping food open",
"Adding antioxidants",
"Adding water"
],
answer:2,
explanation:"Antioxidants slow oxidation."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which of the following is a displacement reaction?",
options:[
"Fe + CuSO4 → FeSO4 + Cu",
"2H2 + O2 → 2H2O",
"CaCO3 → CaO + CO2",
"NaOH + HCl → NaCl + H2O"
],
answer:0,
explanation:"Iron displaces copper."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"The chemical formula of rust is:",
options:[
"FeO",
"Fe2O3·xH2O",
"Fe3O4",
"FeCO3"
],
answer:1,
explanation:"Rust is hydrated iron(III) oxide."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which reaction is used for whitewashing walls?",
options:[
"CaO + H2O → Ca(OH)2",
"CaCO3 → CaO + CO2",
"Mg + O2 → MgO",
"Zn + HCl"
],
answer:0,
explanation:"Quicklime reacts with water."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Which substance is reduced in CuO + H2 → Cu + H2O?",
options:[
"CuO",
"H2",
"H2O",
"Cu"
],
answer:0,
explanation:"CuO loses oxygen."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which reaction releases heat?",
options:[
"Photosynthesis",
"Respiration",
"Electrolysis",
"Thermal decomposition"
],
answer:1,
explanation:"Respiration is exothermic."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which process involves both oxidation and reduction?",
options:[
"Neutralisation",
"Redox reaction",
"Double displacement",
"Combination"
],
answer:1,
explanation:"Both oxidation and reduction occur simultaneously."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Copper reacts with oxygen to form:",
options:[
"Copper sulphide",
"Copper oxide",
"Copper nitrate",
"Copper chloride"
],
answer:1,
explanation:"Copper forms black CuO."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which metal is least reactive?",
options:[
"Potassium",
"Gold",
"Zinc",
"Iron"
],
answer:1,
explanation:"Gold is least reactive."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which reaction is an example of corrosion?",
options:[
"Rusting of iron",
"Burning magnesium",
"Photosynthesis",
"Respiration"
],
answer:0,
explanation:"Rusting is corrosion."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Which colour is observed when magnesium burns?",
options:[
"Yellow flame",
"Blue flame",
"Bright white flame",
"Green flame"
],
answer:2,
explanation:"Magnesium burns with dazzling white flame."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which gas supports combustion?",
options:[
"Hydrogen",
"Oxygen",
"Nitrogen",
"Carbon dioxide"
],
answer:1,
explanation:"Oxygen supports burning."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which is the reducing agent in CuO + H2 → Cu + H2O?",
options:[
"CuO",
"H2",
"Cu",
"H2O"
],
answer:1,
explanation:"Hydrogen removes oxygen from CuO."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Which of these is a physical change?",
options:[
"Rusting",
"Melting wax",
"Burning paper",
"Curd formation"
],
answer:1,
explanation:"Melting is reversible."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which reaction is represented by AB + CD → AD + CB?",
options:[
"Combination",
"Displacement",
"Double displacement",
"Decomposition"
],
answer:2,
explanation:"Exchange of ions occurs."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Which gas extinguishes fire?",
options:[
"Oxygen",
"Hydrogen",
"Carbon dioxide",
"Nitrogen"
],
answer:2,
explanation:"CO₂ does not support combustion."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which of the following is a precipitation reaction?",
options:[
"AgNO3 + NaCl",
"Mg + O2",
"CaCO3 → CaO",
"Zn + HCl"
],
answer:0,
explanation:"AgCl precipitate forms."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"The reaction 2AgCl → 2Ag + Cl2 occurs due to:",
options:[
"Heat",
"Electricity",
"Sunlight",
"Pressure"
],
answer:2,
explanation:"Silver chloride decomposes in sunlight."
},
{
chapter:"1",
difficulty:"Easy",
pyq:true,
question:"What is the colour of iron sulphate solution formed when iron reacts with copper sulphate?",
options:["Blue","Green","Brown","Colourless"],
answer:1,
explanation:"Iron sulphate solution is light green."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which reaction is represented by 2KClO₃ → 2KCl + 3O₂?",
options:["Combination","Decomposition","Displacement","Neutralisation"],
answer:1,
explanation:"A single compound breaks into simpler substances."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Which of the following is not a chemical reaction?",
options:["Rusting of iron","Burning of coal","Dissolving sugar in water","Curd formation"],
answer:2,
explanation:"No new substance is formed."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which metal is used in thermite reaction?",
options:["Copper","Iron","Aluminium","Silver"],
answer:2,
explanation:"Aluminium reduces iron oxide."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which substance is oxidised in Zn + CuSO₄ → ZnSO₄ + Cu?",
options:["Zn","CuSO₄","Cu","SO₄"],
answer:0,
explanation:"Zinc loses electrons and is oxidised."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"The gas released when dilute acid reacts with a metal is:",
options:["CO₂","H₂","O₂","N₂"],
answer:1,
explanation:"Hydrogen gas is evolved."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which reaction is used for extraction of metals?",
options:["Neutralisation","Redox","Double displacement","Combination"],
answer:1,
explanation:"Metals are extracted through reduction."
},

{
chapter:"1",
difficulty:"Medium",
pyq:false,
question:"Which oxide is reduced by hydrogen?",
options:["CuO","Na₂O","MgO","K₂O"],
answer:0,
explanation:"Hydrogen reduces copper oxide."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Which gas is produced during respiration?",
options:["Hydrogen","Carbon dioxide","Nitrogen","Chlorine"],
answer:1,
explanation:"Respiration releases CO₂."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Oxidation is the:",
options:["Addition of oxygen","Removal of oxygen","Addition of hydrogen","Removal of carbon"],
answer:0,
explanation:"Oxidation means addition of oxygen or removal of hydrogen."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which reaction is an example of photochemical decomposition?",
options:["CaCO₃ → CaO + CO₂","2AgCl → 2Ag + Cl₂","Zn + HCl","NaOH + HCl"],
answer:1,
explanation:"Sunlight causes AgCl to decompose."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Which metal is stored in kerosene?",
options:["Copper","Sodium","Iron","Silver"],
answer:1,
explanation:"Sodium reacts vigorously with air and water."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which of the following is a reducing agent?",
options:["Oxygen","Hydrogen","Chlorine","Nitric acid"],
answer:1,
explanation:"Hydrogen removes oxygen."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which reaction involves exchange of ions?",
options:["Combination","Double displacement","Displacement","Decomposition"],
answer:1,
explanation:"Double displacement reactions exchange ions."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Which compound is formed when quicklime reacts with water?",
options:["CaCO₃","Ca(OH)₂","CaCl₂","CaSO₄"],
answer:1,
explanation:"Slaked lime is formed."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Corrosion of iron is commonly known as:",
options:["Tarnishing","Rusting","Galvanisation","Calcination"],
answer:1,
explanation:"Rusting is corrosion of iron."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which of these reactions is both exothermic and combination?",
options:[
"2Mg + O₂ → 2MgO",
"CaCO₃ → CaO + CO₂",
"Zn + CuSO₄",
"AgNO₃ + NaCl"
],
answer:0,
explanation:"Magnesium combines with oxygen releasing heat."
},

{
chapter:"1",
difficulty:"Medium",
pyq:false,
question:"Which metal is deposited in Zn + CuSO₄ → ZnSO₄ + Cu?",
options:["Iron","Copper","Silver","Zinc"],
answer:1,
explanation:"Copper gets deposited."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Which gas is liberated during electrolysis of water at the cathode?",
options:["Oxygen","Hydrogen","Nitrogen","Carbon dioxide"],
answer:1,
explanation:"Hydrogen is released at the cathode."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which of the following best describes a redox reaction?",
options:[
"Only oxidation occurs",
"Only reduction occurs",
"Oxidation and reduction occur together",
"No electron transfer"
],
answer:2,
explanation:"Every redox reaction has simultaneous oxidation and reduction."
},
{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which of the following reactions is used to test the presence of carbon dioxide gas?",
options:[
"Passing gas through lime water",
"Burning gas in oxygen",
"Mixing gas with sodium chloride",
"Adding zinc granules"
],
answer:0,
explanation:"CO₂ turns lime water milky due to formation of CaCO₃."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which statement is correct about oxidation?",
options:[
"Gain of hydrogen",
"Loss of oxygen",
"Gain of oxygen",
"No chemical change"
],
answer:2,
explanation:"Oxidation is gain of oxygen or loss of hydrogen."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Which substance is commonly used as an antioxidant in food?",
options:[
"Vitamin C",
"Salt",
"Sugar",
"Water"
],
answer:0,
explanation:"Vitamin C acts as an antioxidant."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which metal is coated on iron to prevent rusting?",
options:[
"Copper",
"Silver",
"Zinc",
"Gold"
],
answer:2,
explanation:"Galvanisation uses zinc coating."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"The process of coating iron with zinc is called:",
options:[
"Electrolysis",
"Galvanisation",
"Corrosion",
"Reduction"
],
answer:1,
explanation:"Galvanisation prevents rusting."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which reaction absorbs heat from surroundings?",
options:[
"Combustion",
"Respiration",
"Photosynthesis",
"Neutralisation"
],
answer:2,
explanation:"Photosynthesis is endothermic."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"In Zn + 2HCl → ZnCl₂ + H₂, zinc acts as:",
options:[
"Reducing agent",
"Oxidising agent",
"Catalyst",
"Inhibitor"
],
answer:0,
explanation:"Zinc loses electrons and acts as reducing agent."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Which metal burns with a dazzling white flame?",
options:[
"Iron",
"Copper",
"Magnesium",
"Silver"
],
answer:2,
explanation:"Magnesium burns with a bright white flame."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which gas is released when baking soda is heated?",
options:[
"Oxygen",
"Carbon dioxide",
"Hydrogen",
"Ammonia"
],
answer:1,
explanation:"NaHCO₃ decomposes to release CO₂."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"The reaction Fe₂O₃ + 2Al → Al₂O₃ + 2Fe is an example of:",
options:[
"Thermite reaction",
"Neutralisation",
"Photochemical reaction",
"Hydrolysis"
],
answer:0,
explanation:"This is the thermite reaction."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which of the following is a sign of a chemical reaction?",
options:[
"Change in colour",
"Formation of gas",
"Formation of precipitate",
"All of these"
],
answer:3,
explanation:"All are indicators of chemical reactions."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Which compound is formed when carbon dioxide reacts with lime water?",
options:[
"Calcium chloride",
"Calcium carbonate",
"Calcium oxide",
"Calcium sulphate"
],
answer:1,
explanation:"CaCO₃ is formed."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which type of reaction is AgNO₃ + NaCl → AgCl + NaNO₃?",
options:[
"Combination",
"Double displacement",
"Displacement",
"Decomposition"
],
answer:1,
explanation:"Exchange of ions takes place."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which metal is more reactive than iron?",
options:[
"Copper",
"Silver",
"Magnesium",
"Gold"
],
answer:2,
explanation:"Magnesium is above iron in the reactivity series."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Rust is mainly composed of:",
options:[
"Iron sulphide",
"Hydrated iron oxide",
"Iron carbonate",
"Iron chloride"
],
answer:1,
explanation:"Rust is Fe₂O₃·xH₂O."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which reaction is responsible for blackening of silver ornaments?",
options:[
"Oxidation",
"Corrosion",
"Reduction",
"Neutralisation"
],
answer:1,
explanation:"Silver reacts with H₂S to form Ag₂S."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which reaction represents reduction?",
options:[
"CuO + H₂ → Cu + H₂O",
"2Mg + O₂ → 2MgO",
"Fe + CuSO₄",
"NaOH + HCl"
],
answer:0,
explanation:"Copper oxide loses oxygen."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which process increases the shelf life of food?",
options:[
"Oxidation",
"Adding antioxidants",
"Keeping food open",
"Heating continuously"
],
answer:1,
explanation:"Antioxidants prevent rancidity."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"The smell of stale chips is due to:",
options:[
"Fermentation",
"Rancidity",
"Neutralisation",
"Evaporation"
],
answer:1,
explanation:"Oxidation of fats causes rancidity."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which of the following reactions is both oxidation and reduction simultaneously?",
options:[
"Redox reaction",
"Neutralisation",
"Precipitation",
"Combination only"
],
answer:0,
explanation:"Redox reactions involve oxidation and reduction together."
},
{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Assertion (A): Rusting of iron is an oxidation reaction. Reason (R): Iron gains oxygen in the presence of moisture.",
options:[
"Both A and R are true and R is the correct explanation of A",
"Both A and R are true but R is not the correct explanation",
"A is true but R is false",
"A is false but R is true"
],
answer:0,
explanation:"Rusting occurs because iron combines with oxygen and moisture."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Assertion (A): Photosynthesis is an endothermic reaction. Reason (R): It absorbs solar energy.",
options:[
"Both A and R are true and R is the correct explanation",
"Both A and R are true but R is not the correct explanation",
"A is true but R is false",
"A is false but R is true"
],
answer:0,
explanation:"Photosynthesis absorbs sunlight."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Assertion (A): Redox reactions involve transfer of electrons. Reason (R): Oxidation and reduction occur together.",
options:[
"Both A and R are true and R is the correct explanation",
"Both A and R are true but R is not the correct explanation",
"A is true but R is false",
"A is false but R is true"
],
answer:0,
explanation:"Electron transfer is the basis of redox reactions."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Assertion (A): Rancidity spoils food. Reason (R): Fats get oxidised on exposure to air.",
options:[
"Both A and R are true and R is the correct explanation",
"Both A and R are true but R is not the correct explanation",
"A is true but R is false",
"A is false but R is true"
],
answer:0,
explanation:"Oxidation of fats causes rancidity."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Assertion (A): Aluminium is used in thermite reaction. Reason (R): Aluminium is less reactive than iron.",
options:[
"Both A and R are true",
"Both A and R are false",
"A is true but R is false",
"A is false but R is true"
],
answer:2,
explanation:"Aluminium is MORE reactive than iron."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Case Study: Iron nails are dipped in copper sulphate solution. Which observation is correct?",
options:[
"Solution becomes green",
"No change",
"Solution becomes red",
"Blue colour increases"
],
answer:0,
explanation:"FeSO₄ forms and copper deposits."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"In the above reaction, copper gets:",
options:[
"Oxidised",
"Reduced",
"Neutralised",
"Decomposed"
],
answer:1,
explanation:"Cu²⁺ gains electrons."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"The reaction is an example of:",
options:[
"Combination",
"Single displacement",
"Double displacement",
"Neutralisation"
],
answer:1,
explanation:"Iron displaces copper."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Which metal is deposited on the iron nail?",
options:[
"Iron",
"Copper",
"Silver",
"Zinc"
],
answer:1,
explanation:"Copper deposits on the nail."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Iron is _____ reactive than copper.",
options:[
"Less",
"More",
"Equally",
"Cannot say"
],
answer:1,
explanation:"Iron is above copper in the reactivity series."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which reaction is used to obtain quicklime?",
options:[
"CaCO₃ → CaO + CO₂",
"CaO + H₂O",
"Ca + O₂",
"Ca + HCl"
],
answer:0,
explanation:"Heating limestone forms quicklime."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Heating ferrous sulphate crystals produces:",
options:[
"Brown gas",
"Green gas",
"Blue gas",
"No gas"
],
answer:0,
explanation:"SO₂ and SO₃ gases are evolved."
},

{
chapter:"1",
difficulty:"Medium",
pyq:false,
question:"Which gas has a pungent smell during decomposition of FeSO₄?",
options:[
"CO₂",
"SO₂",
"H₂",
"N₂"
],
answer:1,
explanation:"Sulphur dioxide has a pungent smell."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which compound acts as an oxidising agent?",
options:[
"CuO",
"H₂",
"Zn",
"Mg"
],
answer:0,
explanation:"CuO supplies oxygen."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Rusting requires:",
options:[
"Only oxygen",
"Only water",
"Oxygen and water",
"Only sunlight"
],
answer:2,
explanation:"Both oxygen and moisture are essential."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which of the following prevents rusting?",
options:[
"Painting",
"Greasing",
"Galvanisation",
"All of these"
],
answer:3,
explanation:"All methods prevent contact with air and moisture."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which reaction releases the maximum heat?",
options:[
"Thermite reaction",
"Photosynthesis",
"Dissolving salt",
"Electrolysis"
],
answer:0,
explanation:"Thermite reaction is highly exothermic."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Silver chloride is ____ in colour.",
options:[
"White",
"Black",
"Green",
"Brown"
],
answer:0,
explanation:"Fresh AgCl is white."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Silver chloride turns grey because of:",
options:[
"Heat",
"Sunlight",
"Pressure",
"Moisture"
],
answer:1,
explanation:"AgCl decomposes in sunlight."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which one is the best example of a chemical change?",
options:[
"Melting ice",
"Breaking glass",
"Burning LPG",
"Boiling water"
],
answer:2,
explanation:"Burning LPG forms new substances."
},
{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Case Study: A silver chloride sample was kept in sunlight for a few hours. Which observation will be made?",
options:[
"It melts",
"It turns grey",
"It becomes green",
"No change"
],
answer:1,
explanation:"AgCl decomposes into silver and chlorine gas, making it appear grey."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"The decomposition of silver chloride is caused by:",
options:[
"Heat",
"Electric current",
"Sunlight",
"Pressure"
],
answer:2,
explanation:"It is a photochemical decomposition reaction."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which gas is released during decomposition of AgCl?",
options:[
"Oxygen",
"Hydrogen",
"Chlorine",
"Nitrogen"
],
answer:2,
explanation:"Silver chloride decomposes into silver and chlorine."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which reaction is represented by AB → A + B?",
options:[
"Combination",
"Displacement",
"Double displacement",
"Decomposition"
],
answer:3,
explanation:"A single compound breaks into simpler substances."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"The process of coating iron with paint prevents:",
options:[
"Combustion",
"Corrosion",
"Neutralisation",
"Reduction"
],
answer:1,
explanation:"Paint blocks air and moisture."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which metal is used to galvanise iron?",
options:[
"Copper",
"Aluminium",
"Zinc",
"Silver"
],
answer:2,
explanation:"Galvanisation is done using zinc."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which of the following is NOT a redox reaction?",
options:[
"Zn + CuSO₄ → ZnSO₄ + Cu",
"2Mg + O₂ → 2MgO",
"HCl + NaOH → NaCl + H₂O",
"CuO + H₂ → Cu + H₂O"
],
answer:2,
explanation:"Neutralisation is not a redox reaction."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which reaction is endothermic?",
options:[
"Respiration",
"Combustion",
"Photosynthesis",
"Thermite reaction"
],
answer:2,
explanation:"Photosynthesis absorbs energy."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"The black coating formed on copper is mainly:",
options:[
"CuO",
"CuCO₃",
"Basic copper carbonate",
"CuSO₄"
],
answer:2,
explanation:"Copper reacts with moist air to form basic copper carbonate."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Green coating on copper protects it from:",
options:[
"Melting",
"Further corrosion",
"Oxidation only",
"Heat"
],
answer:1,
explanation:"The coating prevents further corrosion."
},

{
chapter:"1",
difficulty:"Easy",
pyq:false,
question:"Which is an example of corrosion?",
options:[
"Burning wood",
"Rusting iron",
"Boiling water",
"Melting wax"
],
answer:1,
explanation:"Rusting is corrosion."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which is the correct equation for rusting?",
options:[
"Fe + O₂ → FeO",
"Fe + O₂ + H₂O → Rust",
"Fe + H₂ → FeH₂",
"Fe + Cl₂ → FeCl₂"
],
answer:1,
explanation:"Rust forms in presence of oxygen and moisture."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Assertion (A): Combustion is an oxidation reaction. Reason (R): Oxygen is added during burning.",
options:[
"Both A and R are true and R is the correct explanation",
"Both true but R is not explanation",
"A true, R false",
"A false, R true"
],
answer:0,
explanation:"Combustion involves addition of oxygen."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Assertion (A): Galvanisation prevents rusting. Reason (R): Zinc is more reactive than iron.",
options:[
"Both A and R are true and R correctly explains A",
"Both true but R not explanation",
"A true, R false",
"A false, R true"
],
answer:0,
explanation:"Zinc protects iron by sacrificial action."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which process is used to preserve chips and dry fruits?",
options:[
"Heating",
"Vacuum packing",
"Adding water",
"Cooling only"
],
answer:1,
explanation:"Vacuum packing prevents oxidation."
},

{
chapter:"1",
difficulty:"Medium",
pyq:false,
question:"Nitrogen gas is filled in food packets because it:",
options:[
"Increases taste",
"Prevents oxidation",
"Adds colour",
"Keeps food warm"
],
answer:1,
explanation:"Nitrogen is an inert gas."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which observation confirms a precipitation reaction?",
options:[
"Gas evolves",
"Heat evolves",
"Insoluble solid forms",
"Colour disappears"
],
answer:2,
explanation:"Formation of an insoluble solid is precipitation."
},

{
chapter:"1",
difficulty:"Medium",
pyq:true,
question:"Which reaction occurs in whitewashing after applying slaked lime?",
options:[
"Ca(OH)₂ + CO₂ → CaCO₃ + H₂O",
"CaCO₃ → CaO + CO₂",
"Ca + O₂ → CaO",
"CaO + H₂ → Ca"
],
answer:0,
explanation:"Calcium carbonate gives the shiny white finish."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which one is the BEST example of a chemical change?",
options:[
"Breaking glass",
"Freezing water",
"Cooking food",
"Tearing paper"
],
answer:2,
explanation:"Cooking produces new substances."
},

{
chapter:"1",
difficulty:"Hard",
pyq:true,
question:"Which statement is TRUE regarding chemical reactions?",
options:[
"Atoms are destroyed",
"Only physical properties change",
"New substances with different properties are formed",
"Mass is lost"
],
answer:2,
explanation:"Chemical reactions form new substances while atoms are rearranged."
},
{
chapter:"2",
difficulty:"Easy",
pyq:true,
question:"Which ion is responsible for the acidic nature of a solution?",
options:["OH⁻","H⁺","Na⁺","Cl⁻"],
answer:1,
explanation:"Acids produce H⁺ ions in aqueous solution."
},

{
chapter:"2",
difficulty:"Easy",
pyq:true,
question:"Which ion is responsible for the basic nature of a solution?",
options:["H⁺","Na⁺","OH⁻","Cl⁻"],
answer:2,
explanation:"Bases produce hydroxide (OH⁻) ions."
},

{
chapter:"2",
difficulty:"Easy",
pyq:false,
question:"Litmus solution is obtained from:",
options:["Rose","Lichen","Turmeric","China Rose"],
answer:1,
explanation:"Litmus is extracted from lichens."
},

{
chapter:"2",
difficulty:"Easy",
pyq:true,
question:"Which colour does blue litmus turn in an acidic solution?",
options:["Green","Red","Yellow","Blue"],
answer:1,
explanation:"Acids turn blue litmus red."
},

{
chapter:"2",
difficulty:"Easy",
pyq:true,
question:"Which colour does red litmus turn in a basic solution?",
options:["Blue","Green","Yellow","Red"],
answer:0,
explanation:"Bases turn red litmus blue."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"The pH value of a neutral solution is:",
options:["0","7","10","14"],
answer:1,
explanation:"Pure water has pH 7."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"A solution having pH 3 is:",
options:["Neutral","Basic","Acidic","Salt"],
answer:2,
explanation:"pH less than 7 indicates acidity."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"A solution having pH 11 is:",
options:["Acidic","Neutral","Basic","Salt"],
answer:2,
explanation:"pH greater than 7 indicates basic nature."
},

{
chapter:"2",
difficulty:"Easy",
pyq:false,
question:"Which of the following is a natural indicator?",
options:["Phenolphthalein","Methyl Orange","Turmeric","Universal Indicator"],
answer:2,
explanation:"Turmeric is a natural indicator."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"Which gas is evolved when zinc reacts with hydrochloric acid?",
options:["Oxygen","Carbon dioxide","Hydrogen","Nitrogen"],
answer:2,
explanation:"Metals react with acids to release hydrogen gas."
},

{
chapter:"2",
difficulty:"Easy",
pyq:false,
question:"Which acid is present in lemon?",
options:["Acetic acid","Citric acid","Lactic acid","Oxalic acid"],
answer:1,
explanation:"Lemon contains citric acid."
},

{
chapter:"2",
difficulty:"Easy",
pyq:false,
question:"Which acid is present in vinegar?",
options:["Hydrochloric acid","Acetic acid","Citric acid","Nitric acid"],
answer:1,
explanation:"Vinegar contains acetic acid."
},

{
chapter:"2",
difficulty:"Easy",
pyq:false,
question:"Which acid is present in curd?",
options:["Citric acid","Acetic acid","Lactic acid","Tartaric acid"],
answer:2,
explanation:"Curd contains lactic acid."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"Which acid is found in ant sting?",
options:["Citric acid","Formic acid","Acetic acid","Lactic acid"],
answer:1,
explanation:"Ant sting contains formic acid."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"Which base is commonly known as slaked lime?",
options:["CaO","Ca(OH)₂","NaOH","KOH"],
answer:1,
explanation:"Calcium hydroxide is slaked lime."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"Which base is commonly known as quick lime?",
options:["CaO","Ca(OH)₂","NaOH","MgO"],
answer:0,
explanation:"Calcium oxide is quick lime."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"Acid + Base gives:",
options:["Metal","Salt + Water","Hydrogen","Carbon dioxide"],
answer:1,
explanation:"Neutralisation produces salt and water."
},

{
chapter:"2",
difficulty:"Easy",
pyq:true,
question:"Phenolphthalein indicator is ______ in acidic solution.",
options:["Pink","Blue","Colourless","Green"],
answer:2,
explanation:"Phenolphthalein remains colourless in acids."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"Phenolphthalein becomes ____ in basic solution.",
options:["Pink","Yellow","Red","Green"],
answer:0,
explanation:"Phenolphthalein turns pink in bases."
},

{
chapter:"2",
difficulty:"Hard",
pyq:true,
question:"Which statement is correct?",
options:[
"All acids contain hydrogen.",
"All hydrogen-containing compounds are acids.",
"Only compounds producing H⁺ ions in water are acids.",
"Acids do not react with metals."
],
answer:2,
explanation:"Only substances producing H⁺ ions in aqueous solution behave as acids."
},
{
chapter:"2",
difficulty:"Easy",
pyq:true,
question:"Which gas is evolved when an acid reacts with a metal carbonate?",
options:["Hydrogen","Oxygen","Carbon dioxide","Nitrogen"],
answer:2,
explanation:"Acid + Carbonate → Salt + Water + CO₂."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"Which gas turns lime water milky?",
options:["Hydrogen","Oxygen","Carbon dioxide","Chlorine"],
answer:2,
explanation:"CO₂ forms calcium carbonate with lime water."
},

{
chapter:"2",
difficulty:"Easy",
pyq:false,
question:"Which acid is present in tamarind?",
options:["Citric acid","Tartaric acid","Acetic acid","Oxalic acid"],
answer:1,
explanation:"Tamarind contains tartaric acid."
},

{
chapter:"2",
difficulty:"Easy",
pyq:false,
question:"Which acid is present in tomato?",
options:["Oxalic acid","Citric acid","Formic acid","Lactic acid"],
answer:0,
explanation:"Tomato mainly contains oxalic acid."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"Which indicator turns pink in a basic solution?",
options:["Litmus","Phenolphthalein","Turmeric","China Rose"],
answer:1,
explanation:"Phenolphthalein becomes pink in bases."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"Turmeric indicator changes to ____ in a basic solution.",
options:["Red","Blue","Yellow","Green"],
answer:0,
explanation:"Turmeric turns reddish-brown in bases."
},

{
chapter:"2",
difficulty:"Easy",
pyq:false,
question:"Which base is used in soaps and detergents?",
options:["NaOH","CaO","NH₄OH","Mg(OH)₂"],
answer:0,
explanation:"Sodium hydroxide is widely used."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"Which acid is used in car batteries?",
options:["Hydrochloric acid","Nitric acid","Sulphuric acid","Acetic acid"],
answer:2,
explanation:"Lead-acid batteries contain sulphuric acid."
},

{
chapter:"2",
difficulty:"Easy",
pyq:false,
question:"Milk of magnesia is chemically:",
options:["MgO","Mg(OH)₂","Ca(OH)₂","NaOH"],
answer:1,
explanation:"Milk of magnesia is magnesium hydroxide."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"Which compound is used as an antacid?",
options:["NaCl","Mg(OH)₂","CaCO₃","Na₂CO₃"],
answer:1,
explanation:"Magnesium hydroxide neutralises excess stomach acid."
},

{
chapter:"2",
difficulty:"Hard",
pyq:true,
question:"The pH of stomach acid is approximately:",
options:["1-3","7","9","12"],
answer:0,
explanation:"Hydrochloric acid in the stomach has pH around 1-3."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"Which acid is present in gastric juice?",
options:["Sulphuric acid","Nitric acid","Hydrochloric acid","Acetic acid"],
answer:2,
explanation:"HCl helps digestion."
},

{
chapter:"2",
difficulty:"Easy",
pyq:false,
question:"Which salt is common table salt?",
options:["Na₂CO₃","NaCl","NaHCO₃","KCl"],
answer:1,
explanation:"Common salt is sodium chloride."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"Common salt is obtained mainly from:",
options:["Sea water","Milk","Petroleum","Coal"],
answer:0,
explanation:"Sea water is the major source."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"Which process is used to manufacture sodium hydroxide from brine?",
options:["Electrolysis","Distillation","Filtration","Crystallisation"],
answer:0,
explanation:"Electrolysis of brine produces NaOH."
},

{
chapter:"2",
difficulty:"Hard",
pyq:true,
question:"During electrolysis of brine, chlorine gas is produced at:",
options:["Cathode","Anode","Both electrodes","Nowhere"],
answer:1,
explanation:"Chlorine is liberated at the anode."
},

{
chapter:"2",
difficulty:"Hard",
pyq:true,
question:"Hydrogen gas is produced during electrolysis of brine at:",
options:["Anode","Cathode","Both","Neither"],
answer:1,
explanation:"Hydrogen is released at the cathode."
},

{
chapter:"2",
difficulty:"Medium",
pyq:true,
question:"The process of electrolysis of brine is called:",
options:["Neutralisation","Chlor-alkali process","Galvanisation","Calcination"],
answer:1,
explanation:"NaOH, Cl₂ and H₂ are produced."
},

{
chapter:"2",
difficulty:"Easy",
pyq:false,
question:"Which gas is used to disinfect drinking water?",
options:["Hydrogen","Chlorine","Nitrogen","Oxygen"],
answer:1,
explanation:"Chlorine kills harmful microorganisms."
},

{
chapter:"2",
difficulty:"Hard",
pyq:true,
question:"Which products are obtained during the chlor-alkali process?",
options:[
"NaOH, Cl₂ and H₂",
"NaCl and O₂",
"HCl and NaOH",
"Na₂CO₃ and H₂"
],
answer:0,
explanation:"Electrolysis of brine produces sodium hydroxide, chlorine and hydrogen."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is present in curd?",
options:[
"Lactic acid",
"Citric acid",
"Acetic acid",
"Formic acid"
],
answer:0,
explanation:"Curd contains lactic acid."
},

{
chapter:"Acids, Bases and Salts",
question:"Which acid is present in vinegar?",
options:[
"Hydrochloric acid",
"Acetic acid",
"Citric acid",
"Oxalic acid"
],
answer:1,
explanation:"Vinegar contains acetic acid."
},

{
chapter:"Acids, Bases and Salts",
question:"Which acid is present in tamarind?",
options:[
"Tartaric acid",
"Acetic acid",
"Nitric acid",
"Lactic acid"
],
answer:0,
explanation:"Tamarind contains tartaric acid."
},

{
chapter:"Acids, Bases and Salts",
question:"Which gas is released when zinc reacts with hydrochloric acid?",
options:[
"Oxygen",
"Hydrogen",
"Carbon dioxide",
"Chlorine"
],
answer:1,
explanation:"Hydrogen gas is evolved."
},

{
chapter:"Acids, Bases and Salts",
question:"Which indicator turns pink in a basic solution?",
options:[
"Phenolphthalein",
"Methyl orange",
"Blue litmus",
"Turmeric"
],
answer:0,
explanation:"Phenolphthalein becomes pink in bases."
},

{
chapter:"Acids, Bases and Salts",
question:"Which metal is stored in kerosene?",
options:[
"Calcium",
"Sodium",
"Magnesium",
"Zinc"
],
answer:1,
explanation:"Sodium reacts vigorously with air and water."
},

{
chapter:"Acids, Bases and Salts",
question:"The reaction between an acid and a base is called:",
options:[
"Neutralisation",
"Displacement",
"Combination",
"Oxidation"
],
answer:0,
explanation:"Acid + Base → Salt + Water."
},

{
chapter:"Acids, Bases and Salts",
question:"Which acid is present in ant sting?",
options:[
"Acetic acid",
"Formic acid",
"Citric acid",
"Lactic acid"
],
answer:1,
explanation:"Ant sting contains formic acid."
},

{
chapter:"Acids, Bases and Salts",
question:"The pH of distilled water is:",
options:[
"5",
"6",
"7",
"8"
],
answer:2,
explanation:"Pure water is neutral."
},

{
chapter:"Acids, Bases and Salts",
question:"Which of these is a weak acid?",
options:[
"Hydrochloric acid",
"Sulphuric acid",
"Acetic acid",
"Nitric acid"
],
answer:2,
explanation:"Acetic acid is a weak acid."
},

{
chapter:"Acids, Bases and Salts",
question:"Which compound is used to remove permanent hardness of water?",
options:[
"Washing soda",
"Baking soda",
"Bleaching powder",
"Plaster of Paris"
],
answer:0,
explanation:"Washing soda softens hard water."
},

{
chapter:"Acids, Bases and Salts",
question:"Which gas is released when baking soda is heated?",
options:[
"Oxygen",
"Hydrogen",
"Carbon dioxide",
"Nitrogen"
],
answer:2,
explanation:"Heating baking soda releases CO₂."
},

{
chapter:"Acids, Bases and Salts",
question:"What is the formula of sodium hydrogen carbonate?",
options:[
"NaOH",
"NaHCO₃",
"Na₂CO₃",
"NaCl"
],
answer:1,
explanation:"Baking soda is NaHCO₃."
},

{
chapter:"Acids, Bases and Salts",
question:"Which acid is used in soft drinks?",
options:[
"Carbonic acid",
"Acetic acid",
"Citric acid",
"Hydrochloric acid"
],
answer:0,
explanation:"Soft drinks contain carbonic acid."
},

{
chapter:"Acids, Bases and Salts",
question:"Which of the following is an acidic oxide?",
options:[
"CO₂",
"Na₂O",
"CaO",
"MgO"
],
answer:0,
explanation:"CO₂ is an acidic oxide."
},

{
chapter:"Acids, Bases and Salts",
question:"Which substance is used as an antacid?",
options:[
"Magnesium hydroxide",
"Hydrochloric acid",
"Sulphuric acid",
"Sodium chloride"
],
answer:0,
explanation:"Milk of Magnesia is an antacid."
},

{
chapter:"Acids, Bases and Salts",
question:"Which of these salts is neutral?",
options:[
"NaCl",
"Na₂CO₃",
"NH₄Cl",
"NaHCO₃"
],
answer:0,
explanation:"Sodium chloride is a neutral salt."
},

{
chapter:"Acids, Bases and Salts",
question:"Which acid is produced in our stomach?",
options:[
"Nitric acid",
"Hydrochloric acid",
"Acetic acid",
"Citric acid"
],
answer:1,
explanation:"The stomach secretes HCl."
},

{
chapter:"Acids, Bases and Salts",
question:"Which indicator remains colourless in acidic solution?",
options:[
"Phenolphthalein",
"Turmeric",
"Litmus",
"China rose"
],
answer:0,
explanation:"Phenolphthalein is colourless in acids."
},

{
chapter:"Acids, Bases and Salts",
question:"The pH of a strong base is generally:",
options:[
"Less than 7",
"Equal to 7",
"Greater than 7",
"Exactly 5"
],
answer:2,
explanation:"Strong bases have pH above 7."
},
{
chapter:"Acids, Bases and Salts",
question:"Which gas is released when an acid reacts with a metal carbonate?",
options:["Oxygen","Hydrogen","Carbon dioxide","Nitrogen"],
answer:2,
explanation:"Acids react with carbonates to produce carbon dioxide."
},
{
chapter:"Acids, Bases and Salts",
question:"The pH value of pure water is:",
options:["0","7","14","5"],
answer:1,
explanation:"Pure water is neutral with pH 7."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is found in tamarind?",
options:["Citric acid","Tartaric acid","Oxalic acid","Acetic acid"],
answer:1,
explanation:"Tartaric acid is present in tamarind."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is present in tomatoes?",
options:["Acetic acid","Citric acid","Oxalic acid","Hydrochloric acid"],
answer:2,
explanation:"Tomatoes contain oxalic acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which indicator turns blue litmus red?",
options:["Base","Salt","Acid","Water"],
answer:2,
explanation:"Acids turn blue litmus red."
},
{
chapter:"Acids, Bases and Salts",
question:"Which substance is used to neutralize acidic soil?",
options:["Vinegar","Lime","Lemon juice","HCl"],
answer:1,
explanation:"Lime is basic and neutralizes acidic soil."
},
{
chapter:"Acids, Bases and Salts",
question:"Which gas is evolved when zinc reacts with dilute hydrochloric acid?",
options:["Oxygen","Hydrogen","Carbon dioxide","Nitrogen"],
answer:1,
explanation:"Hydrogen gas is released."
},
{
chapter:"Acids, Bases and Salts",
question:"Which salt is used in baking powder?",
options:["Sodium chloride","Sodium bicarbonate","Calcium carbonate","Copper sulphate"],
answer:1,
explanation:"Baking powder contains sodium bicarbonate."
},
{
chapter:"Acids, Bases and Salts",
question:"What is the chemical formula of sodium bicarbonate?",
options:["NaOH","NaHCO₃","Na₂CO₃","NaCl"],
answer:1,
explanation:"The formula of baking soda is NaHCO₃."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is used in car batteries?",
options:["Hydrochloric acid","Sulphuric acid","Nitric acid","Acetic acid"],
answer:1,
explanation:"Lead-acid batteries contain sulphuric acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which salt is commonly known as washing soda?",
options:["NaCl","Na₂CO₃·10H₂O","NaHCO₃","CaCO₃"],
answer:1,
explanation:"Washing soda is sodium carbonate decahydrate."
},
{
chapter:"Acids, Bases and Salts",
question:"Which salt is used in water softening?",
options:["Baking soda","Washing soda","Bleaching powder","Gypsum"],
answer:1,
explanation:"Washing soda removes permanent hardness."
},
{
chapter:"Acids, Bases and Salts",
question:"Which base is present in milk of magnesia?",
options:["NaOH","Mg(OH)₂","Ca(OH)₂","KOH"],
answer:1,
explanation:"Milk of magnesia contains magnesium hydroxide."
},
{
chapter:"Acids, Bases and Salts",
question:"What is the pH of a strong acid?",
options:["Less than 7","Equal to 7","More than 7","Exactly 10"],
answer:0,
explanation:"Strong acids have very low pH."
},
{
chapter:"Acids, Bases and Salts",
question:"What is the pH of a strong base?",
options:["2","5","7","More than 7"],
answer:3,
explanation:"Strong bases have high pH values."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is naturally present in ant sting?",
options:["Citric acid","Formic acid","Acetic acid","Oxalic acid"],
answer:1,
explanation:"Ant sting contains formic acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which compound is formed when sodium hydroxide reacts with hydrochloric acid?",
options:["NaCl and H₂O","Na₂CO₃","NaHCO₃","Na₂SO₄"],
answer:0,
explanation:"Neutralization forms salt and water."
},
{
chapter:"Acids, Bases and Salts",
question:"Which salt is used for making plaster casts?",
options:["Gypsum","POP","Baking soda","Bleaching powder"],
answer:1,
explanation:"Plaster of Paris is used for casts."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is produced in our stomach?",
options:["Sulphuric acid","Nitric acid","Hydrochloric acid","Citric acid"],
answer:2,
explanation:"The stomach secretes hydrochloric acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which of the following is NOT a property of acids?",
options:["Sour taste","Turn blue litmus red","Release H⁺ ions","Feel soapy"],
answer:3,
explanation:"Soapy feel is a property of bases."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is present in curd?",
options:["Citric acid","Lactic acid","Acetic acid","Oxalic acid"],
answer:1,
explanation:"Curd contains lactic acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which of the following is a weak acid?",
options:["HCl","H2SO4","CH3COOH","HNO3"],
answer:2,
explanation:"Acetic acid is a weak acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which metal does NOT react with dilute hydrochloric acid?",
options:["Zinc","Magnesium","Copper","Iron"],
answer:2,
explanation:"Copper is less reactive than hydrogen."
},
{
chapter:"Acids, Bases and Salts",
question:"Which ion is responsible for acidic nature in aqueous solution?",
options:["OH⁻","H⁺","Na⁺","Cl⁻"],
answer:1,
explanation:"Acids release H⁺ ions in water."
},
{
chapter:"Acids, Bases and Salts",
question:"Which ion is responsible for basic nature?",
options:["H⁺","OH⁻","Na⁺","Cl⁻"],
answer:1,
explanation:"Bases release OH⁻ ions."
},
{
chapter:"Acids, Bases and Salts",
question:"What happens when acid reacts with a base?",
options:["Only gas forms","Salt and water form","Only water forms","Only salt forms"],
answer:1,
explanation:"Neutralization produces salt and water."
},
{
chapter:"Acids, Bases and Salts",
question:"Phenolphthalein turns pink in:",
options:["Acid","Base","Salt","Water"],
answer:1,
explanation:"Phenolphthalein is pink in basic solution."
},
{
chapter:"Acids, Bases and Salts",
question:"Methyl orange turns red in:",
options:["Base","Acid","Neutral solution","Salt"],
answer:1,
explanation:"Methyl orange becomes red in acids."
},
{
chapter:"Acids, Bases and Salts",
question:"Which compound is commonly called slaked lime?",
options:["CaO","Ca(OH)₂","CaCO₃","CaCl₂"],
answer:1,
explanation:"Slaked lime is calcium hydroxide."
},
{
chapter:"Acids, Bases and Salts",
question:"Quick lime is chemically:",
options:["CaCO₃","CaO","Ca(OH)₂","CaSO₄"],
answer:1,
explanation:"Quick lime is calcium oxide."
},
{
chapter:"Acids, Bases and Salts",
question:"Bleaching powder is prepared by passing chlorine over:",
options:["CaCO₃","CaO","Dry slaked lime","NaOH"],
answer:2,
explanation:"Bleaching powder is made using dry slaked lime."
},
{
chapter:"Acids, Bases and Salts",
question:"Which gas is produced during electrolysis of brine at the anode?",
options:["Hydrogen","Oxygen","Chlorine","Nitrogen"],
answer:2,
explanation:"Chlorine gas is released at the anode."
},
{
chapter:"Acids, Bases and Salts",
question:"Which gas is produced at the cathode during electrolysis of brine?",
options:["Hydrogen","Oxygen","Chlorine","Carbon dioxide"],
answer:0,
explanation:"Hydrogen gas is produced at the cathode."
},
{
chapter:"Acids, Bases and Salts",
question:"What is the common name of sodium hydrogen carbonate?",
options:["Washing soda","Baking soda","Bleaching powder","POP"],
answer:1,
explanation:"NaHCO₃ is baking soda."
},
{
chapter:"Acids, Bases and Salts",
question:"Which salt loses water of crystallization on heating?",
options:["NaCl","CuSO₄·5H₂O","KCl","NaOH"],
answer:1,
explanation:"Hydrated copper sulphate loses water on heating."
},
{
chapter:"Acids, Bases and Salts",
question:"The blue colour of hydrated copper sulphate is due to:",
options:["Copper ions","Water of crystallization","Sulphate ions","Heat"],
answer:1,
explanation:"Water of crystallization gives blue colour."
},
{
chapter:"Acids, Bases and Salts",
question:"Which compound is used as an antacid?",
options:["NaCl","Mg(OH)₂","HCl","H₂SO₄"],
answer:1,
explanation:"Milk of magnesia neutralizes excess stomach acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is called muriatic acid?",
options:["Nitric acid","Hydrochloric acid","Acetic acid","Citric acid"],
answer:1,
explanation:"Hydrochloric acid is also called muriatic acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which of the following has the highest pH?",
options:["Lemon juice","Vinegar","Soap solution","Tomato juice"],
answer:2,
explanation:"Soap solution is strongly basic."
},
{
chapter:"Acids, Bases and Salts",
question:"Which process is used to manufacture sodium hydroxide from brine?",
options:["Distillation","Electrolysis","Filtration","Evaporation"],
answer:1,
explanation:"NaOH is manufactured by electrolysis of brine (Chlor-alkali process)."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is present in tamarind?",
options:["Citric acid","Tartaric acid","Oxalic acid","Lactic acid"],
answer:1,
explanation:"Tamarind contains tartaric acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is present in spinach?",
options:["Oxalic acid","Citric acid","Acetic acid","Lactic acid"],
answer:0,
explanation:"Spinach contains oxalic acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is found in ant sting?",
options:["Acetic acid","Citric acid","Formic acid","Lactic acid"],
answer:2,
explanation:"Ant sting contains formic (methanoic) acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is present in tomatoes?",
options:["Citric acid","Oxalic acid","Acetic acid","Lactic acid"],
answer:1,
explanation:"Tomatoes contain oxalic acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which indicator is naturally obtained from lichens?",
options:["Litmus","Turmeric","Phenolphthalein","Methyl orange"],
answer:0,
explanation:"Litmus is a natural indicator obtained from lichens."
},
{
chapter:"Acids, Bases and Salts",
question:"Which indicator remains colourless in acidic solution?",
options:["Phenolphthalein","Litmus","Turmeric","China rose"],
answer:0,
explanation:"Phenolphthalein is colourless in acids."
},
{
chapter:"Acids, Bases and Salts",
question:"Which base is known as caustic soda?",
options:["NaOH","KOH","Ca(OH)₂","Mg(OH)₂"],
answer:0,
explanation:"Sodium hydroxide is called caustic soda."
},
{
chapter:"Acids, Bases and Salts",
question:"Which base is known as caustic potash?",
options:["NaOH","KOH","Ca(OH)₂","NH₄OH"],
answer:1,
explanation:"Potassium hydroxide is called caustic potash."
},
{
chapter:"Acids, Bases and Salts",
question:"Which substance is used for whitewashing walls?",
options:["CaO","Ca(OH)₂","CaCO₃","NaOH"],
answer:1,
explanation:"Slaked lime is used for whitewashing."
},
{
chapter:"Acids, Bases and Salts",
question:"Which gas is released when baking soda is heated?",
options:["Hydrogen","Oxygen","Carbon dioxide","Chlorine"],
answer:2,
explanation:"Heating baking soda releases carbon dioxide."
},
{
chapter:"Acids, Bases and Salts",
question:"What is the colour of dry copper sulphate?",
options:["Blue","White","Green","Yellow"],
answer:1,
explanation:"Anhydrous copper sulphate is white."
},
{
chapter:"Acids, Bases and Salts",
question:"What is the colour of hydrated copper sulphate?",
options:["Blue","White","Brown","Black"],
answer:0,
explanation:"Hydrated copper sulphate crystals are blue."
},
{
chapter:"Acids, Bases and Salts",
question:"Which salt is used in making glass, soap and paper?",
options:["Washing soda","Baking soda","Bleaching powder","POP"],
answer:0,
explanation:"Washing soda is used in glass, soap and paper industries."
},
{
chapter:"Acids, Bases and Salts",
question:"Which salt is used for softening hard water?",
options:["Common salt","Washing soda","Baking soda","Copper sulphate"],
answer:1,
explanation:"Washing soda removes permanent hardness of water."
},
{
chapter:"Acids, Bases and Salts",
question:"Plaster of Paris is obtained by heating:",
options:["Gypsum","Limestone","Quick lime","Washing soda"],
answer:0,
explanation:"POP is prepared by heating gypsum."
},
{
chapter:"Acids, Bases and Salts",
question:"Which of the following is NOT an acidic oxide?",
options:["CO₂","SO₂","Na₂O","P₂O₅"],
answer:2,
explanation:"Na₂O is a basic oxide."
},
{
chapter:"Acids, Bases and Salts",
question:"Which of the following is a basic oxide?",
options:["CO₂","SO₂","MgO","NO₂"],
answer:2,
explanation:"Magnesium oxide is a basic oxide."
},
{
chapter:"Acids, Bases and Salts",
question:"Which pH value indicates a neutral solution?",
options:["0","7","10","14"],
answer:1,
explanation:"Pure water has pH 7."
},
{
chapter:"Acids, Bases and Salts",
question:"Which substance is commonly used to neutralize acidic soil?",
options:["Lime","Vinegar","Citric acid","Hydrochloric acid"],
answer:0,
explanation:"Lime is added to acidic soil."
},
{
chapter:"Acids, Bases and Salts",
question:"Which salt is commonly known as blue vitriol?",
options:["CuSO₄·5H₂O","NaCl","Na₂CO₃","CaSO₄"],
answer:0,
explanation:"Hydrated copper sulphate is called blue vitriol."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is commonly used in car batteries?",
options:["Sulphuric acid","Hydrochloric acid","Nitric acid","Acetic acid"],
answer:0,
explanation:"Lead-acid batteries contain sulphuric acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which gas is evolved when zinc reacts with hydrochloric acid?",
options:["Oxygen","Hydrogen","Carbon dioxide","Chlorine"],
answer:1,
explanation:"Zinc reacts with HCl to produce hydrogen gas."
},
{
chapter:"Acids, Bases and Salts",
question:"What is the chemical formula of nitric acid?",
options:["HNO₂","HNO₃","H₂SO₄","HCl"],
answer:1,
explanation:"Nitric acid has the formula HNO₃."
},
{
chapter:"Acids, Bases and Salts",
question:"Which of the following is a strong acid?",
options:["Acetic acid","Citric acid","Hydrochloric acid","Carbonic acid"],
answer:2,
explanation:"Hydrochloric acid is a strong acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which of the following is a weak base?",
options:["NaOH","KOH","NH₄OH","Ca(OH)₂"],
answer:2,
explanation:"Ammonium hydroxide is a weak base."
},
{
chapter:"Acids, Bases and Salts",
question:"Which metal does NOT react with dilute hydrochloric acid?",
options:["Magnesium","Zinc","Copper","Iron"],
answer:2,
explanation:"Copper is less reactive than hydrogen."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is used in the manufacture of fertilizers?",
options:["Acetic acid","Nitric acid","Citric acid","Formic acid"],
answer:1,
explanation:"Nitric acid is widely used to make fertilizers."
},
{
chapter:"Acids, Bases and Salts",
question:"Which indicator turns pink in a basic solution?",
options:["Blue litmus","Phenolphthalein","Turmeric","China rose"],
answer:1,
explanation:"Phenolphthalein turns pink in bases."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is produced in the stomach?",
options:["Hydrochloric acid","Sulphuric acid","Nitric acid","Acetic acid"],
answer:0,
explanation:"The stomach secretes hydrochloric acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Milk of magnesia is used as:",
options:["Indicator","Antacid","Salt","Bleaching agent"],
answer:1,
explanation:"Milk of magnesia neutralizes excess stomach acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which of the following is an alkali?",
options:["Copper oxide","Sodium hydroxide","Iron oxide","Calcium carbonate"],
answer:1,
explanation:"Sodium hydroxide is a soluble base (alkali)."
},
{
chapter:"Acids, Bases and Salts",
question:"The process of adding water to quicklime is called:",
options:["Hydration","Neutralization","Electrolysis","Calcination"],
answer:0,
explanation:"Quicklime reacts with water in the hydration process."
},
{
chapter:"Acids, Bases and Salts",
question:"Which gas turns lime water milky?",
options:["Hydrogen","Carbon dioxide","Oxygen","Nitrogen"],
answer:1,
explanation:"Carbon dioxide forms calcium carbonate."
},
{
chapter:"Acids, Bases and Salts",
question:"Which salt is formed when HCl reacts with NaOH?",
options:["Na₂CO₃","NaCl","NaHCO₃","CaCl₂"],
answer:1,
explanation:"Neutralization produces sodium chloride."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is present in sour milk?",
options:["Lactic acid","Citric acid","Acetic acid","Oxalic acid"],
answer:0,
explanation:"Lactic acid gives sour milk its taste."
},
{
chapter:"Acids, Bases and Salts",
question:"Which base is sparingly soluble in water?",
options:["NaOH","KOH","Ca(OH)₂","NH₄OH"],
answer:2,
explanation:"Calcium hydroxide is only slightly soluble."
},
{
chapter:"Acids, Bases and Salts",
question:"Which chemical is commonly called quicklime?",
options:["CaCO₃","CaO","Ca(OH)₂","CaSO₄"],
answer:1,
explanation:"Calcium oxide is quicklime."
},
{
chapter:"Acids, Bases and Salts",
question:"Which of the following is NOT a property of acids?",
options:["Turn blue litmus red","Conduct electricity in solution","Taste bitter","React with metals"],
answer:2,
explanation:"Bitter taste is a property of bases."
},
{
chapter:"Acids, Bases and Salts",
question:"Which pH value represents a strongly basic solution?",
options:["2","5","7","13"],
answer:3,
explanation:"pH 13 indicates a strong base."
},
{
chapter:"Acids, Bases and Salts",
question:"Which compound is formed during the chlor-alkali process besides NaOH?",
options:["Hydrogen and chlorine","Oxygen and nitrogen","Carbon dioxide and oxygen","Sulphur dioxide and hydrogen"],
answer:0,
explanation:"Electrolysis of brine produces sodium hydroxide, hydrogen and chlorine."
},
{
chapter:"Acids, Bases and Salts",
question:"Which salt is produced when hydrochloric acid reacts with calcium hydroxide?",
options:["Calcium chloride","Calcium sulphate","Sodium chloride","Calcium carbonate"],
answer:0,
explanation:"HCl + Ca(OH)₂ → CaCl₂ + H₂O."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is called the King of Chemicals?",
options:["Hydrochloric acid","Sulphuric acid","Nitric acid","Acetic acid"],
answer:1,
explanation:"Sulphuric acid is called the King of Chemicals because of its industrial importance."
},
{
chapter:"Acids, Bases and Salts",
question:"What is the pH range of acidic solutions?",
options:["Less than 7","Equal to 7","Greater than 7","Exactly 14"],
answer:0,
explanation:"Acids have pH values below 7."
},
{
chapter:"Acids, Bases and Salts",
question:"Which gas is evolved when acids react with carbonates?",
options:["Hydrogen","Oxygen","Carbon dioxide","Chlorine"],
answer:2,
explanation:"Acids react with carbonates to release CO₂."
},
{
chapter:"Acids, Bases and Salts",
question:"Which compound is commonly used as an antacid?",
options:["NaOH","Mg(OH)₂","CaO","HCl"],
answer:1,
explanation:"Magnesium hydroxide is a common antacid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which indicator turns red in acidic solution?",
options:["Blue litmus","Phenolphthalein","Turmeric","Red litmus"],
answer:0,
explanation:"Blue litmus turns red in acids."
},
{
chapter:"Acids, Bases and Salts",
question:"Which salt is formed by the reaction of H₂SO₄ and NaOH?",
options:["NaCl","Na₂SO₄","Na₂CO₃","NaHCO₃"],
answer:1,
explanation:"Sulphuric acid reacts with sodium hydroxide to form sodium sulphate."
},
{
chapter:"Acids, Bases and Salts",
question:"Which metal is stored in kerosene because it reacts vigorously with water?",
options:["Copper","Iron","Sodium","Silver"],
answer:2,
explanation:"Sodium reacts violently with water."
},
{
chapter:"Acids, Bases and Salts",
question:"Which oxide reacts with acids as well as bases?",
options:["ZnO","CO₂","SO₂","MgO"],
answer:0,
explanation:"Zinc oxide is an amphoteric oxide."
},
{
chapter:"Acids, Bases and Salts",
question:"What is the colour of methyl orange in acidic solution?",
options:["Yellow","Red","Blue","Pink"],
answer:1,
explanation:"Methyl orange is red in acidic medium."
},
{
chapter:"Acids, Bases and Salts",
question:"Which colour does turmeric show in basic solution?",
options:["Yellow","Red","Pink","Blue"],
answer:1,
explanation:"Turmeric turns reddish-brown in bases."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is present in vinegar?",
options:["Citric acid","Acetic acid","Lactic acid","Oxalic acid"],
answer:1,
explanation:"Vinegar contains acetic acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which compound is used in soda-acid fire extinguishers?",
options:["Baking soda","Washing soda","POP","Bleaching powder"],
answer:0,
explanation:"Baking soda releases CO₂ to extinguish fire."
},
{
chapter:"Acids, Bases and Salts",
question:"Which salt is commonly called table salt?",
options:["NaCl","Na₂CO₃","NaHCO₃","CaCO₃"],
answer:0,
explanation:"Common salt is sodium chloride."
},
{
chapter:"Acids, Bases and Salts",
question:"Which gas is released when acids react with baking soda?",
options:["Hydrogen","Carbon dioxide","Oxygen","Nitrogen"],
answer:1,
explanation:"CO₂ gas is evolved."
},
{
chapter:"Acids, Bases and Salts",
question:"Which of these is a neutral oxide?",
options:["CO","SO₂","Na₂O","CaO"],
answer:0,
explanation:"Carbon monoxide is a neutral oxide."
},
{
chapter:"Acids, Bases and Salts",
question:"Which acid is used in soft drinks?",
options:["Carbonic acid","Sulphuric acid","Hydrochloric acid","Nitric acid"],
answer:0,
explanation:"Soft drinks contain dissolved carbon dioxide forming carbonic acid."
},
{
chapter:"Acids, Bases and Salts",
question:"Which gas is produced at the anode during electrolysis of brine?",
options:["Hydrogen","Oxygen","Chlorine","Nitrogen"],
answer:2,
explanation:"Chlorine gas is liberated at the anode."
},
{
chapter:"Acids, Bases and Salts",
question:"Which gas is produced at the cathode during electrolysis of brine?",
options:["Hydrogen","Chlorine","Carbon dioxide","Oxygen"],
answer:0,
explanation:"Hydrogen gas is liberated at the cathode."
},
{
chapter:"Acids, Bases and Salts",
question:"Which chemical is manufactured by the chlor-alkali process?",
options:["NaOH","H₂SO₄","CaCO₃","HNO₃"],
answer:0,
explanation:"Sodium hydroxide is the main product of the chlor-alkali process."
},
{
chapter:"3",
question:"Which of the following is a metal?",
options:["Sulphur","Copper","Phosphorus","Carbon"],
answer:1,
explanation:"Copper is a metal."
},

{
chapter:"3",
question:"Which of the following is a non-metal?",
options:["Iron","Sodium","Sulphur","Aluminium"],
answer:2,
explanation:"Sulphur is a non-metal."
},

{
chapter:"3",
question:"Metals are generally:",
options:["Brittle","Poor conductors","Good conductors of heat and electricity","Soft"],
answer:2,
explanation:"Most metals conduct heat and electricity well."
},

{
chapter:"3",
question:"Which metal is liquid at room temperature?",
options:["Sodium","Mercury","Iron","Aluminium"],
answer:1,
explanation:"Mercury is the only common metal that is liquid at room temperature."
},

{
chapter:"3",
question:"Which non-metal is liquid at room temperature?",
options:["Bromine","Iodine","Chlorine","Sulphur"],
answer:0,
explanation:"Bromine is the only non-metal that is liquid at room temperature."
},

{
chapter:"3",
question:"Which property allows metals to be drawn into wires?",
options:["Malleability","Ductility","Sonority","Conductivity"],
answer:1,
explanation:"Ductility is the property of being drawn into wires."
},

{
chapter:"3",
question:"Which property allows metals to be beaten into thin sheets?",
options:["Ductility","Malleability","Lustre","Hardness"],
answer:1,
explanation:"Metals are malleable."
},

{
chapter:"3",
question:"Which metal is used in electric wires?",
options:["Copper","Sulphur","Carbon","Phosphorus"],
answer:0,
explanation:"Copper is an excellent conductor of electricity."
},

{
chapter:"3",
question:"Which of the following is the most reactive metal?",
options:["Gold","Silver","Potassium","Copper"],
answer:2,
explanation:"Potassium is highly reactive."
},

{
chapter:"3",
question:"Which is the least reactive metal?",
options:["Sodium","Calcium","Gold","Magnesium"],
answer:2,
explanation:"Gold is one of the least reactive metals."
},

{
chapter:"3",
question:"Metals react with oxygen to form:",
options:["Acids","Bases","Metal oxides","Salts"],
answer:2,
explanation:"Metals form metal oxides on reacting with oxygen."
},

{
chapter:"3",
question:"Magnesium burns in air with a:",
options:["Yellow flame","Blue flame","Bright white flame","Red flame"],
answer:2,
explanation:"Magnesium burns with a dazzling white flame."
},

{
chapter:"3",
question:"Which metal oxide is amphoteric?",
options:["Na₂O","CaO","Al₂O₃","MgO"],
answer:2,
explanation:"Aluminium oxide is amphoteric."
},

{
chapter:"3",
question:"Which gas is evolved when metals react with dilute acids?",
options:["Oxygen","Hydrogen","Carbon dioxide","Nitrogen"],
answer:1,
explanation:"Hydrogen gas is released."
},

{
chapter:"3",
question:"Which metal does NOT react with dilute HCl?",
options:["Magnesium","Zinc","Copper","Iron"],
answer:2,
explanation:"Copper is less reactive than hydrogen."
},

{
chapter:"3",
question:"The reaction of sodium with water is:",
options:["Very slow","Moderate","Highly vigorous","No reaction"],
answer:2,
explanation:"Sodium reacts violently with water."
},

{
chapter:"3",
question:"Which gas is released when sodium reacts with water?",
options:["Hydrogen","Oxygen","Carbon dioxide","Nitrogen"],
answer:0,
explanation:"Hydrogen gas is evolved."
},

{
chapter:"3",
question:"Which metal is stored in kerosene oil?",
options:["Copper","Iron","Sodium","Silver"],
answer:2,
explanation:"Sodium reacts rapidly with air and water."
},

{
chapter:"3",
question:"Which of the following is a good conductor of electricity?",
options:["Sulphur","Phosphorus","Copper","Iodine"],
answer:2,
explanation:"Copper is a very good conductor."
},

{
chapter:"3",
question:"Which metal is extracted by electrolytic reduction?",
options:["Iron","Copper","Aluminium","Mercury"],
answer:2,
explanation:"Highly reactive metals like aluminium are extracted by electrolysis."
},
{
chapter:"3",
question:"Which metal is used for making cooking utensils due to its good conductivity?",
options:["Copper","Sulphur","Phosphorus","Carbon"],
answer:0,
explanation:"Copper is a good conductor of heat and is used in utensils."
},

{
chapter:"3",
question:"Which non-metal is a good conductor of electricity?",
options:["Sulphur","Phosphorus","Graphite","Bromine"],
answer:2,
explanation:"Graphite is a non-metal that conducts electricity."
},

{
chapter:"3",
question:"Which property of metals is responsible for the ringing sound?",
options:["Lustre","Sonority","Malleability","Ductility"],
answer:1,
explanation:"Metals are sonorous."
},

{
chapter:"3",
question:"Which of the following is NOT a metal?",
options:["Calcium","Magnesium","Silicon","Iron"],
answer:2,
explanation:"Silicon is a metalloid."
},

{
chapter:"3",
question:"Metals lose electrons to form:",
options:["Anions","Cations","Neutral atoms","Molecules"],
answer:1,
explanation:"Metals form positive ions by losing electrons."
},

{
chapter:"3",
question:"Non-metals generally gain electrons to form:",
options:["Cations","Anions","Neutrons","Protons"],
answer:1,
explanation:"Non-metals form negative ions by gaining electrons."
},

{
chapter:"3",
question:"Which metal is present in haemoglobin?",
options:["Calcium","Iron","Copper","Sodium"],
answer:1,
explanation:"Haemoglobin contains iron."
},

{
chapter:"3",
question:"Which of the following metals is the best conductor of electricity?",
options:["Copper","Silver","Aluminium","Iron"],
answer:1,
explanation:"Silver is the best conductor of electricity."
},

{
chapter:"3",
question:"Which of the following metals is used in thermometers?",
options:["Mercury","Iron","Copper","Aluminium"],
answer:0,
explanation:"Mercury is used in traditional thermometers."
},

{
chapter:"3",
question:"Which gas is produced when calcium reacts with water?",
options:["Oxygen","Hydrogen","Carbon dioxide","Nitrogen"],
answer:1,
explanation:"Calcium reacts with water to produce hydrogen gas."
},

{
chapter:"3",
question:"The reactivity series is arranged in:",
options:[
"Increasing order of density",
"Decreasing order of reactivity",
"Increasing order of reactivity",
"Alphabetical order"
],
answer:2,
explanation:"The reactivity series is arranged from most reactive to least reactive."
},

{
chapter:"3",
question:"Which metal is at the top of the reactivity series?",
options:["Copper","Gold","Potassium","Iron"],
answer:2,
explanation:"Potassium is one of the most reactive metals."
},

{
chapter:"3",
question:"Which metal is found in native state due to its very low reactivity?",
options:["Sodium","Magnesium","Gold","Calcium"],
answer:2,
explanation:"Gold occurs in the native state."
},

{
chapter:"3",
question:"Which process is used to prevent rusting of iron?",
options:["Distillation","Galvanisation","Filtration","Electrolysis"],
answer:1,
explanation:"Galvanisation coats iron with zinc."
},

{
chapter:"3",
question:"Which metal is used for galvanisation?",
options:["Copper","Silver","Zinc","Tin"],
answer:2,
explanation:"Zinc is used to protect iron from rusting."
},

{
chapter:"3",
question:"Which of the following reacts most vigorously with cold water?",
options:["Iron","Copper","Potassium","Lead"],
answer:2,
explanation:"Potassium reacts violently with cold water."
},

{
chapter:"3",
question:"Which metal can be cut easily with a knife?",
options:["Iron","Copper","Sodium","Aluminium"],
answer:2,
explanation:"Sodium is a soft metal."
},

{
chapter:"3",
question:"Which non-metal is essential for respiration?",
options:["Nitrogen","Oxygen","Sulphur","Chlorine"],
answer:1,
explanation:"Oxygen is essential for respiration."
},

{
chapter:"3",
question:"Which metal is used in making aircraft bodies due to its low density?",
options:["Iron","Aluminium","Copper","Lead"],
answer:1,
explanation:"Aluminium is lightweight and corrosion-resistant."
},

{
chapter:"3",
question:"Which of the following is an alloy?",
options:["Copper","Iron","Brass","Aluminium"],
answer:2,
explanation:"Brass is an alloy of copper and zinc."
},
{
chapter:"3",
question:"Which alloy is used for making electrical heating elements?",
options:["Brass","Bronze","Solder","Nichrome"],
answer:3,
explanation:"Nichrome has high resistance and a high melting point."
},

{
chapter:"3",
question:"Which metal is extracted from bauxite ore?",
options:["Iron","Aluminium","Copper","Zinc"],
answer:1,
explanation:"Bauxite is the chief ore of aluminium."
},

{
chapter:"3",
question:"Which metal is used in galvanised iron sheets?",
options:["Copper","Silver","Zinc","Tin"],
answer:2,
explanation:"A zinc coating protects iron from rusting."
},

{
chapter:"3",
question:"Which of the following is the chief ore of iron?",
options:["Bauxite","Haematite","Zinc blende","Galena"],
answer:1,
explanation:"Haematite (Fe₂O₃) is the chief ore of iron."
},

{
chapter:"3",
question:"Which metal is used to make electric cables due to its high conductivity?",
options:["Iron","Copper","Lead","Mercury"],
answer:1,
explanation:"Copper is widely used in electrical wiring."
},

{
chapter:"3",
question:"Which of the following metals reacts with steam but not with cold water?",
options:["Sodium","Potassium","Iron","Calcium"],
answer:2,
explanation:"Iron reacts with steam to form iron oxide and hydrogen."
},

{
chapter:"3",
question:"Which gas is evolved when iron reacts with steam?",
options:["Oxygen","Hydrogen","Carbon dioxide","Nitrogen"],
answer:1,
explanation:"Iron reacts with steam to release hydrogen gas."
},

{
chapter:"3",
question:"Which metal is used in making jewellery because of its lustre and low reactivity?",
options:["Iron","Gold","Zinc","Sodium"],
answer:1,
explanation:"Gold is highly lustrous and does not corrode easily."
},

{
chapter:"3",
question:"Which of the following is a non-metal that exists as a gas?",
options:["Bromine","Sulphur","Chlorine","Iodine"],
answer:2,
explanation:"Chlorine is a gaseous non-metal."
},

{
chapter:"3",
question:"Which metal is used in food wrapping foil?",
options:["Copper","Iron","Aluminium","Lead"],
answer:2,
explanation:"Aluminium foil is commonly used for food packaging."
},

{
chapter:"3",
question:"The process of coating iron with zinc is called:",
options:["Electroplating","Galvanisation","Alloying","Roasting"],
answer:1,
explanation:"Galvanisation prevents corrosion of iron."
},

{
chapter:"3",
question:"Which alloy is made of copper and tin?",
options:["Brass","Bronze","Steel","Solder"],
answer:1,
explanation:"Bronze is an alloy of copper and tin."
},

{
chapter:"3",
question:"Which alloy is made of copper and zinc?",
options:["Bronze","Steel","Brass","Nichrome"],
answer:2,
explanation:"Brass is an alloy of copper and zinc."
},

{
chapter:"3",
question:"Which metal is used in the manufacture of stainless steel?",
options:["Chromium","Mercury","Lead","Silver"],
answer:0,
explanation:"Chromium improves corrosion resistance."
},

{
chapter:"3",
question:"Which of the following is NOT an alloy?",
options:["Steel","Brass","Bronze","Copper"],
answer:3,
explanation:"Copper is a pure metal."
},

{
chapter:"3",
question:"Which metal is commonly used for making water pipes?",
options:["Copper","Lead","Gold","Mercury"],
answer:0,
explanation:"Copper is durable and corrosion-resistant."
},

{
chapter:"3",
question:"Which of the following metals is the lightest?",
options:["Iron","Aluminium","Lead","Copper"],
answer:1,
explanation:"Aluminium has a low density."
},

{
chapter:"3",
question:"Which non-metal is used in water purification?",
options:["Sulphur","Chlorine","Phosphorus","Carbon"],
answer:1,
explanation:"Chlorine is used to disinfect drinking water."
},

{
chapter:"3",
question:"Which metal is used for making railway tracks?",
options:["Copper","Iron","Aluminium","Lead"],
answer:1,
explanation:"Iron (steel) is strong and durable."
},

{
chapter:"3",
question:"Which of the following is the correct reactivity order?",
options:[
"K > Na > Ca > Mg",
"Mg > Ca > Na > K",
"Cu > Fe > Zn > Al",
"Ag > Au > Cu > Fe"
],
answer:0,
explanation:"Potassium is more reactive than sodium, calcium and magnesium."
},
{
chapter:"3",
question:"Which of the following metals cannot displace zinc from zinc sulphate solution?",
options:["Magnesium","Iron","Copper","Aluminium"],
answer:2,
explanation:"Copper is less reactive than zinc, so it cannot displace zinc."
},

{
chapter:"3",
question:"Which metal is used in making overhead electric transmission wires?",
options:["Iron","Lead","Aluminium","Mercury"],
answer:2,
explanation:"Aluminium is lightweight and a good conductor."
},

{
chapter:"3",
question:"Which of the following metals reacts with oxygen to form a protective oxide layer?",
options:["Iron","Aluminium","Sodium","Calcium"],
answer:1,
explanation:"Aluminium forms a thin oxide layer that prevents further corrosion."
},

{
chapter:"3",
question:"Which metal is extracted by the reduction of its oxide with carbon?",
options:["Aluminium","Iron","Sodium","Potassium"],
answer:1,
explanation:"Iron is extracted by reducing iron oxide with carbon in a blast furnace."
},

{
chapter:"3",
question:"Which non-metal is commonly used in fertilizers?",
options:["Sulphur","Nitrogen","Chlorine","Bromine"],
answer:1,
explanation:"Nitrogen is an essential nutrient in fertilizers."
},

{
chapter:"3",
question:"Which metal is used for making food cans due to its corrosion resistance?",
options:["Tin","Iron","Sodium","Magnesium"],
answer:0,
explanation:"Tin-coated steel is commonly used for food cans."
},

{
chapter:"3",
question:"Which of the following metals is present in stainless steel?",
options:["Gold","Silver","Chromium","Mercury"],
answer:2,
explanation:"Chromium provides corrosion resistance to stainless steel."
},

{
chapter:"3",
question:"Which of the following is an example of corrosion?",
options:["Melting of wax","Rusting of iron","Boiling of water","Freezing of water"],
answer:1,
explanation:"Rusting is the corrosion of iron."
},

{
chapter:"3",
question:"Which gas is evolved when sodium reacts with water?",
options:["Carbon dioxide","Hydrogen","Nitrogen","Oxygen"],
answer:1,
explanation:"Hydrogen gas is released during the reaction."
},

{
chapter:"3",
question:"Which metal is commonly used in electrical switches due to its excellent conductivity?",
options:["Silver","Iron","Lead","Zinc"],
answer:0,
explanation:"Silver has the highest electrical conductivity."
},

{
chapter:"3",
question:"Which ore is known as zinc blende?",
options:["ZnS","Fe₂O₃","Al₂O₃","Cu₂O"],
answer:0,
explanation:"Zinc blende is zinc sulphide (ZnS)."
},

{
chapter:"3",
question:"Which process involves heating sulphide ores in excess air?",
options:["Calcination","Roasting","Electrolysis","Smelting"],
answer:1,
explanation:"Roasting converts sulphide ores into oxides."
},

{
chapter:"3",
question:"Which process is used for carbonate ores?",
options:["Roasting","Calcination","Electrolysis","Refining"],
answer:1,
explanation:"Calcination is used for carbonate ores."
},

{
chapter:"3",
question:"Which metal is obtained from cinnabar ore?",
options:["Mercury","Copper","Iron","Zinc"],
answer:0,
explanation:"Cinnabar (HgS) is the chief ore of mercury."
},

{
chapter:"3",
question:"Which metal is extracted from galena ore?",
options:["Lead","Iron","Copper","Silver"],
answer:0,
explanation:"Galena (PbS) is the chief ore of lead."
},

{
chapter:"3",
question:"Which non-metal is used in the vulcanisation of rubber?",
options:["Nitrogen","Sulphur","Phosphorus","Chlorine"],
answer:1,
explanation:"Sulphur is used to vulcanise rubber."
},

{
chapter:"3",
question:"Which metal is commonly used to make coins?",
options:["Copper","Gold","Silver","All of these"],
answer:3,
explanation:"Different coins are made using copper, silver or their alloys."
},

{
chapter:"3",
question:"Which of the following metals is soft enough to be cut with a knife?",
options:["Iron","Copper","Sodium","Zinc"],
answer:2,
explanation:"Sodium is a soft metal."
},

{
chapter:"3",
question:"Which metal is used as a reducing agent in the thermite process?",
options:["Copper","Aluminium","Iron","Lead"],
answer:1,
explanation:"Aluminium reduces iron oxide in the thermite reaction."
},

{
chapter:"3",
question:"Which of the following metals is most suitable for making cooking utensils?",
options:["Mercury","Copper","Aluminium","Both Copper and Aluminium"],
answer:3,
explanation:"Copper and aluminium are both good conductors of heat and are widely used for utensils."
},
{
chapter:"3",
question:"Which metal is extracted from bauxite by electrolysis?",
options:["Iron","Aluminium","Copper","Lead"],
answer:1,
explanation:"Aluminium is extracted from bauxite by electrolytic reduction."
},

{
chapter:"3",
question:"Which metal is commonly used for making aircraft because of its low density?",
options:["Iron","Lead","Aluminium","Copper"],
answer:2,
explanation:"Aluminium is lightweight, strong and corrosion-resistant."
},

{
chapter:"3",
question:"Which non-metal is used in matchsticks?",
options:["Sulphur","Red phosphorus","Nitrogen","Graphite"],
answer:1,
explanation:"Red phosphorus is used on the striking surface of matchboxes."
},

{
chapter:"3",
question:"Which non-metal is used in the manufacture of sulphuric acid?",
options:["Nitrogen","Sulphur","Phosphorus","Carbon"],
answer:1,
explanation:"Sulphur is the raw material for sulphuric acid."
},

{
chapter:"3",
question:"Which metal is used in sacrificial protection of iron?",
options:["Gold","Silver","Zinc","Copper"],
answer:2,
explanation:"Zinc protects iron by corroding first."
},

{
chapter:"3",
question:"Which property makes aluminium suitable for overhead power cables?",
options:["High density","Low conductivity","Low density and good conductivity","High melting point only"],
answer:2,
explanation:"Aluminium is light and conducts electricity well."
},

{
chapter:"3",
question:"Which of the following metals reacts with dilute HCl to liberate hydrogen gas?",
options:["Copper","Silver","Gold","Zinc"],
answer:3,
explanation:"Zinc is above hydrogen in the reactivity series."
},

{
chapter:"3",
question:"Which non-metal is essential for combustion?",
options:["Nitrogen","Oxygen","Hydrogen","Chlorine"],
answer:1,
explanation:"Oxygen supports combustion."
},

{
chapter:"3",
question:"The extraction of highly reactive metals is carried out by:",
options:["Heating with carbon","Electrolysis","Roasting only","Calcination only"],
answer:1,
explanation:"Highly reactive metals are extracted by electrolysis."
},

{
chapter:"3",
question:"Which metal is present in steel?",
options:["Iron","Copper","Silver","Mercury"],
answer:0,
explanation:"Steel is mainly an alloy of iron and carbon."
},

{
chapter:"3",
question:"Which alloy contains iron, chromium and nickel?",
options:["Brass","Bronze","Stainless steel","Solder"],
answer:2,
explanation:"Stainless steel contains iron, chromium and nickel."
},

{
chapter:"3",
question:"Which metal is used for making jewellery because it does not corrode easily?",
options:["Iron","Gold","Sodium","Calcium"],
answer:1,
explanation:"Gold is highly unreactive."
},

{
chapter:"3",
question:"Which non-metal is used as electrodes in dry cells?",
options:["Sulphur","Graphite","Phosphorus","Iodine"],
answer:1,
explanation:"Graphite conducts electricity and is used as an electrode."
},

{
chapter:"3",
question:"Which of the following metals is most reactive towards water?",
options:["Iron","Calcium","Copper","Silver"],
answer:1,
explanation:"Calcium reacts readily with cold water."
},

{
chapter:"3",
question:"Which of the following metals is the poorest conductor of electricity?",
options:["Silver","Copper","Lead","Aluminium"],
answer:2,
explanation:"Lead is a comparatively poor conductor."
},

{
chapter:"3",
question:"Which process removes impurities from crude metal?",
options:["Roasting","Calcination","Refining","Electrolysis"],
answer:2,
explanation:"Refining is done to obtain pure metal."
},

{
chapter:"3",
question:"Which metal is extracted from haematite?",
options:["Copper","Iron","Aluminium","Lead"],
answer:1,
explanation:"Haematite (Fe₂O₃) is the chief ore of iron."
},

{
chapter:"3",
question:"Which of the following non-metals has a shiny appearance?",
options:["Sulphur","Graphite","Phosphorus","Chlorine"],
answer:1,
explanation:"Graphite shows metallic lustre."
},

{
chapter:"3",
question:"Which metal is used in making electrical fuse wires?",
options:["Iron","Copper","Lead-Tin alloy","Aluminium"],
answer:2,
explanation:"Fuse wire is made of a lead-tin alloy because of its low melting point."
},

{
chapter:"3",
question:"According to the reactivity series, which metal is more reactive than iron?",
options:["Copper","Silver","Gold","Zinc"],
answer:3,
explanation:"Zinc is above iron in the reactivity series."
},
{
chapter:"4",
question:"Carbon has ____ valence electrons.",
options:["2","3","4","5"],
answer:2,
explanation:"Carbon has four valence electrons, so it is tetravalent."
},

{
chapter:"4",
question:"The property of carbon to form long chains is called:",
options:["Catenation","Allotropy","Polymerisation","Combustion"],
answer:0,
explanation:"Carbon forms long chains by catenation."
},

{
chapter:"4",
question:"Which type of bond is present in methane (CH₄)?",
options:["Ionic bond","Covalent bond","Metallic bond","Hydrogen bond"],
answer:1,
explanation:"Methane contains covalent bonds."
},

{
chapter:"4",
question:"The molecular formula of methane is:",
options:["CH₂","CH₄","C₂H₆","C₂H₄"],
answer:1,
explanation:"Methane is the simplest alkane with formula CH₄."
},

{
chapter:"4",
question:"Which hydrocarbon is the first member of the alkane family?",
options:["Ethane","Methane","Propane","Butane"],
answer:1,
explanation:"Methane is the first alkane."
},

{
chapter:"4",
question:"The functional group of alcohols is:",
options:["–COOH","–CHO","–OH","–CO"],
answer:2,
explanation:"Alcohols contain the hydroxyl (-OH) group."
},

{
chapter:"4",
question:"The functional group of carboxylic acids is:",
options:["–OH","–COOH","–CHO","–CO"],
answer:1,
explanation:"Carboxylic acids contain the carboxyl (-COOH) group."
},

{
chapter:"4",
question:"The functional group of aldehydes is:",
options:["–CHO","–OH","–COOH","–COO"],
answer:0,
explanation:"Aldehydes contain the -CHO functional group."
},

{
chapter:"4",
question:"Which of the following is a saturated hydrocarbon?",
options:["Ethene","Ethyne","Methane","Propene"],
answer:2,
explanation:"Methane is a saturated hydrocarbon."
},

{
chapter:"4",
question:"Which hydrocarbon contains a double bond?",
options:["Methane","Ethane","Ethene","Ethyne"],
answer:2,
explanation:"Ethene is an alkene containing a double bond."
},

{
chapter:"4",
question:"Which hydrocarbon contains a triple bond?",
options:["Methane","Ethane","Ethene","Ethyne"],
answer:3,
explanation:"Ethyne is an alkyne with a triple bond."
},

{
chapter:"4",
question:"The molecular formula of ethane is:",
options:["C₂H₂","C₂H₄","C₂H₆","CH₄"],
answer:2,
explanation:"Ethane has the molecular formula C₂H₆."
},

{
chapter:"4",
question:"The molecular formula of ethene is:",
options:["C₂H₂","C₂H₄","C₂H₆","C₃H₈"],
answer:1,
explanation:"Ethene is C₂H₄."
},

{
chapter:"4",
question:"The molecular formula of ethyne is:",
options:["C₂H₂","C₂H₄","C₂H₆","CH₄"],
answer:0,
explanation:"Ethyne has the molecular formula C₂H₂."
},

{
chapter:"4",
question:"Which of the following burns with a clean blue flame?",
options:["Saturated hydrocarbons","Unsaturated hydrocarbons","Coal","Wood"],
answer:0,
explanation:"Saturated hydrocarbons burn with a clean blue flame."
},

{
chapter:"4",
question:"Unsaturated hydrocarbons burn with:",
options:["Blue flame","Yellow sooty flame","Green flame","No flame"],
answer:1,
explanation:"Unsaturated hydrocarbons produce a yellow sooty flame."
},

{
chapter:"4",
question:"What is the chemical formula of ethanol?",
options:["CH₃OH","C₂H₅OH","C₂H₆","CH₄"],
answer:1,
explanation:"Ethanol has the formula C₂H₅OH."
},

{
chapter:"4",
question:"The common name of ethanoic acid is:",
options:["Formic acid","Acetic acid","Citric acid","Lactic acid"],
answer:1,
explanation:"Ethanoic acid is commonly called acetic acid."
},

{
chapter:"4",
question:"Vinegar contains about 5–8%:",
options:["Hydrochloric acid","Acetic acid","Sulphuric acid","Nitric acid"],
answer:1,
explanation:"Vinegar is a dilute solution of acetic acid."
},

{
chapter:"4",
question:"Ethanol reacts with sodium to produce:",
options:["Hydrogen gas","Oxygen gas","Carbon dioxide","Nitrogen"],
answer:0,
explanation:"Ethanol reacts with sodium to liberate hydrogen gas."
},
{
chapter:"4",
question:"Which gas is evolved when ethanoic acid reacts with sodium carbonate?",
options:["Hydrogen","Oxygen","Carbon dioxide","Nitrogen"],
answer:2,
explanation:"Ethanoic acid reacts with sodium carbonate to produce carbon dioxide."
},

{
chapter:"4",
question:"The reaction between an alcohol and a carboxylic acid produces:",
options:["Salt","Ester","Alkene","Ketone"],
answer:1,
explanation:"Alcohol and carboxylic acid react to form an ester and water."
},

{
chapter:"4",
question:"The reaction of ester formation is called:",
options:["Saponification","Esterification","Hydrogenation","Combustion"],
answer:1,
explanation:"Esterification forms esters from alcohols and acids."
},

{
chapter:"4",
question:"Esters generally have:",
options:["Pungent smell","Sweet smell","No smell","Rotten egg smell"],
answer:1,
explanation:"Esters have a pleasant fruity smell."
},

{
chapter:"4",
question:"Hydrogenation of vegetable oils is carried out using:",
options:["Iron catalyst","Nickel catalyst","Copper catalyst","Silver catalyst"],
answer:1,
explanation:"Nickel is used as a catalyst for hydrogenation."
},

{
chapter:"4",
question:"Hydrogenation converts:",
options:["Saturated fats into unsaturated fats","Unsaturated fats into saturated fats","Alcohols into acids","Acids into alcohols"],
answer:1,
explanation:"Hydrogenation adds hydrogen across double bonds."
},

{
chapter:"4",
question:"Which hydrocarbon decolourises bromine water?",
options:["Methane","Ethane","Ethene","Propane"],
answer:2,
explanation:"Unsaturated hydrocarbons like ethene decolourise bromine water."
},

{
chapter:"4",
question:"Soap is the sodium or potassium salt of:",
options:["Mineral acids","Long-chain fatty acids","Alcohols","Sugars"],
answer:1,
explanation:"Soap is made from long-chain fatty acids."
},

{
chapter:"4",
question:"The process of making soap from fats and oils is called:",
options:["Hydrogenation","Saponification","Esterification","Neutralisation"],
answer:1,
explanation:"Saponification produces soap and glycerol."
},

{
chapter:"4",
question:"Soap works best in:",
options:["Hard water","Soft water","Sea water","Acidic water"],
answer:1,
explanation:"Soap forms lather easily in soft water."
},

{
chapter:"4",
question:"Soap forms scum with:",
options:["Soft water","Distilled water","Hard water","Rain water"],
answer:2,
explanation:"Calcium and magnesium ions in hard water form scum."
},

{
chapter:"4",
question:"Synthetic detergents are better than soaps because they:",
options:["Are cheaper","Work in hard water","Contain acids","Are edible"],
answer:1,
explanation:"Detergents clean effectively even in hard water."
},

{
chapter:"4",
question:"Which element is common to all organic compounds?",
options:["Hydrogen","Carbon","Oxygen","Nitrogen"],
answer:1,
explanation:"All organic compounds contain carbon."
},

{
chapter:"4",
question:"Carbon forms covalent bonds because:",
options:["It loses four electrons","It gains four electrons","Sharing electrons is energetically favourable","It is a metal"],
answer:2,
explanation:"Carbon shares electrons to complete its octet."
},

{
chapter:"4",
question:"Which allotrope of carbon is the hardest natural substance?",
options:["Graphite","Diamond","Coal","Coke"],
answer:1,
explanation:"Diamond is the hardest naturally occurring substance."
},

{
chapter:"4",
question:"Which allotrope of carbon conducts electricity?",
options:["Diamond","Graphite","Charcoal","Coal"],
answer:1,
explanation:"Graphite conducts electricity due to free electrons."
},

{
chapter:"4",
question:"Diamond is hard because:",
options:["It contains ionic bonds","Each carbon atom forms four strong covalent bonds","It is a metal","It contains hydrogen"],
answer:1,
explanation:"Diamond has a rigid three-dimensional covalent network."
},

{
chapter:"4",
question:"Graphite is soft because:",
options:["It has weak forces between its layers","It contains ionic bonds","It is a liquid","It contains oxygen"],
answer:0,
explanation:"The layers in graphite slide easily over one another."
},

{
chapter:"4",
question:"Which of the following is an unsaturated hydrocarbon?",
options:["Methane","Ethane","Ethene","Propane"],
answer:2,
explanation:"Ethene contains a carbon-carbon double bond."
},

{
chapter:"4",
question:"The homologous series of alkanes has the general formula:",
options:["CnH2n","CnH2n+2","CnH2n-2","CnHn"],
answer:1,
explanation:"Alkanes have the general formula CnH₂n₊₂."
},
{
chapter:"4",
question:"The homologous series of alkenes has the general formula:",
options:["CnH₂n+2","CnH₂n","CnH₂n-2","CnHn"],
answer:1,
explanation:"Alkenes contain one double bond and have the general formula CnH₂n."
},

{
chapter:"4",
question:"The homologous series of alkynes has the general formula:",
options:["CnH₂n","CnH₂n+2","CnH₂n-2","CnHn"],
answer:2,
explanation:"Alkynes contain one triple bond and have the general formula CnH₂n-2."
},

{
chapter:"4",
question:"Successive members of a homologous series differ by:",
options:["CH₄","CH₂","C₂H₂","OH"],
answer:1,
explanation:"Each successive member differs by a -CH₂ group."
},

{
chapter:"4",
question:"Which compound belongs to the alkane family?",
options:["Ethene","Ethyne","Propane","Propene"],
answer:2,
explanation:"Propane (C₃H₈) is an alkane."
},

{
chapter:"4",
question:"Which compound belongs to the alkene family?",
options:["Methane","Ethane","Propene","Butane"],
answer:2,
explanation:"Propene contains a double bond."
},

{
chapter:"4",
question:"Which compound belongs to the alkyne family?",
options:["Ethane","Propane","Ethyne","Ethene"],
answer:2,
explanation:"Ethyne contains a triple bond."
},

{
chapter:"4",
question:"What is the molecular formula of propane?",
options:["C₃H₆","C₃H₈","C₄H₁₀","C₂H₆"],
answer:1,
explanation:"Propane has the formula C₃H₈."
},

{
chapter:"4",
question:"Which reagent is used to distinguish saturated and unsaturated hydrocarbons?",
options:["Lime water","Bromine water","Phenolphthalein","Blue litmus"],
answer:1,
explanation:"Unsaturated hydrocarbons decolourise bromine water."
},

{
chapter:"4",
question:"Which compound is commonly known as wood spirit?",
options:["Methanol","Ethanol","Ethanoic acid","Propanol"],
answer:0,
explanation:"Methanol is commonly called wood spirit."
},

{
chapter:"4",
question:"Consumption of methanol can cause:",
options:["Improved eyesight","Blindness","Common cold","Diabetes"],
answer:1,
explanation:"Methanol is poisonous and may cause blindness."
},

{
chapter:"4",
question:"Which alcohol is present in alcoholic beverages?",
options:["Methanol","Ethanol","Propanol","Butanol"],
answer:1,
explanation:"Alcoholic drinks contain ethanol."
},

{
chapter:"4",
question:"Ethanol boils at approximately:",
options:["50°C","78°C","100°C","150°C"],
answer:1,
explanation:"The boiling point of ethanol is about 78°C."
},

{
chapter:"4",
question:"Ethanoic acid turns blue litmus:",
options:["Red","Green","Yellow","No change"],
answer:0,
explanation:"Ethanoic acid is acidic and turns blue litmus red."
},

{
chapter:"4",
question:"The chemical formula of ethanoic acid is:",
options:["CH₃OH","CH₃COOH","C₂H₅OH","HCOOH"],
answer:1,
explanation:"Ethanoic acid is represented by CH₃COOH."
},

{
chapter:"4",
question:"Soap molecules have:",
options:["Only hydrophilic end","Only hydrophobic end","Hydrophilic and hydrophobic ends","No charge"],
answer:2,
explanation:"Soap molecules contain both water-attracting and oil-attracting ends."
},

{
chapter:"4",
question:"The cleaning action of soap is due to the formation of:",
options:["Foam","Micelles","Crystals","Emulsion only"],
answer:1,
explanation:"Soap forms micelles that trap grease."
},

{
chapter:"4",
question:"Which substance is produced along with soap during saponification?",
options:["Ethanol","Glycerol","Methane","Acetic acid"],
answer:1,
explanation:"Glycerol is obtained as a by-product."
},

{
chapter:"4",
question:"Detergents are generally made from:",
options:["Petrochemicals","Milk","Sugar","Proteins"],
answer:0,
explanation:"Synthetic detergents are prepared from petrochemicals."
},

{
chapter:"4",
question:"Which carbon allotrope is used as a lubricant?",
options:["Diamond","Graphite","Fullerene","Coal"],
answer:1,
explanation:"Graphite's layered structure makes it a good lubricant."
},

{
chapter:"4",
question:"Which of the following is the strongest type of bond found in carbon compounds?",
options:["Hydrogen bond","Covalent bond","Ionic bond","Metallic bond"],
answer:1,
explanation:"Carbon compounds mainly contain strong covalent bonds."
},
{
chapter:"4",
question:"Which hydrocarbon is used for artificial ripening of fruits?",
options:["Methane","Ethane","Ethene","Ethyne"],
answer:2,
explanation:"Ethene is used for artificial ripening of fruits."
},

{
chapter:"4",
question:"What is the IUPAC name of acetic acid?",
options:["Methanoic acid","Ethanoic acid","Propanoic acid","Butanoic acid"],
answer:1,
explanation:"The IUPAC name of acetic acid is ethanoic acid."
},

{
chapter:"4",
question:"Which of the following is a saturated hydrocarbon?",
options:["Ethene","Propene","Butane","Ethyne"],
answer:2,
explanation:"Butane is a saturated hydrocarbon (alkane)."
},

{
chapter:"4",
question:"Which fuel is known as LPG?",
options:["Liquefied Petroleum Gas","Liquid Petrol Gas","Low Pressure Gas","Liquid Propane Gas"],
answer:0,
explanation:"LPG stands for Liquefied Petroleum Gas."
},

{
chapter:"4",
question:"The major component of CNG is:",
options:["Ethane","Methane","Propane","Butane"],
answer:0,
explanation:"Compressed Natural Gas mainly contains methane."
},

{
chapter:"4",
question:"Which fuel is considered the cleanest among the following?",
options:["Coal","Wood","CNG","Kerosene"],
answer:2,
explanation:"CNG burns with minimum pollution."
},

{
chapter:"4",
question:"Which gas is produced during complete combustion of carbon compounds?",
options:["Carbon monoxide","Carbon dioxide","Hydrogen","Methane"],
answer:1,
explanation:"Complete combustion produces carbon dioxide and water."
},

{
chapter:"4",
question:"Incomplete combustion of carbon compounds produces:",
options:["Carbon dioxide","Carbon monoxide","Hydrogen","Oxygen"],
answer:1,
explanation:"Carbon monoxide is formed due to incomplete combustion."
},

{
chapter:"4",
question:"Carbon monoxide is dangerous because it:",
options:["Has a bad smell","Reduces oxygen carrying capacity of blood","Causes acidity","Is explosive"],
answer:1,
explanation:"It combines with haemoglobin more readily than oxygen."
},

{
chapter:"4",
question:"Which of the following is NOT an allotrope of carbon?",
options:["Diamond","Graphite","Fullerene","Quartz"],
answer:3,
explanation:"Quartz is an allotrope of silicon dioxide, not carbon."
},

{
chapter:"4",
question:"Buckminsterfullerene contains how many carbon atoms?",
options:["32","40","60","72"],
answer:2,
explanation:"Buckminsterfullerene has the formula C₆₀."
},

{
chapter:"4",
question:"Diamond is used for cutting glass because it is:",
options:["Transparent","Hard","Lightweight","Conductive"],
answer:1,
explanation:"Diamond is the hardest naturally occurring substance."
},

{
chapter:"4",
question:"Graphite is used in pencil leads because it is:",
options:["Very hard","Soft and slippery","Transparent","Colourless"],
answer:1,
explanation:"Layers of graphite slide easily over each other."
},

{
chapter:"4",
question:"Which of the following is biodegradable?",
options:["Plastic","Glass","Paper","Polythene"],
answer:2,
explanation:"Paper can be decomposed by microorganisms."
},

{
chapter:"4",
question:"The chemical formula of propene is:",
options:["C₃H₈","C₃H₆","C₃H₄","C₂H₄"],
answer:1,
explanation:"Propene is an alkene with formula C₃H₆."
},

{
chapter:"4",
question:"The first member of the alkene series is:",
options:["Methene","Ethene","Propene","Butene"],
answer:1,
explanation:"Ethene is the first stable alkene."
},

{
chapter:"4",
question:"The first member of the alkyne series is:",
options:["Methyne","Ethyne","Propyne","Butyne"],
answer:1,
explanation:"Ethyne is the first alkyne."
},

{
chapter:"4",
question:"Which compound is commonly called vinegar?",
options:["Dilute ethanol","Dilute ethanoic acid","Dilute methanol","Dilute hydrochloric acid"],
answer:1,
explanation:"Vinegar is a 5–8% solution of ethanoic acid."
},

{
chapter:"4",
question:"Soap solution in water is:",
options:["Acidic","Basic","Neutral","Highly acidic"],
answer:1,
explanation:"Soap solution is basic in nature."
},

{
chapter:"4",
question:"Which of the following is an example of an ester?",
options:["Ethyl ethanoate","Ethanol","Ethanoic acid","Methane"],
answer:0,
explanation:"Ethyl ethanoate is a commonly used ester with a fruity smell."
},
{
chapter:"4",
question:"Which fuel is known as the 'clean fuel' for vehicles?",
options:["Diesel","Petrol","CNG","Coal"],
answer:2,
explanation:"CNG burns more completely and causes less pollution."
},

{
chapter:"4",
question:"What is the molecular formula of butane?",
options:["C₄H₁₀","C₄H₈","C₄H₆","C₄H₁₂"],
answer:0,
explanation:"Butane is an alkane with molecular formula C₄H₁₀."
},

{
chapter:"4",
question:"Which compound is used as a solvent in laboratories and industries?",
options:["Ethanol","Methane","Propane","Ethene"],
answer:0,
explanation:"Ethanol is widely used as a solvent."
},

{
chapter:"4",
question:"Which of the following compounds belongs to the alcohol family?",
options:["CH₃COOH","C₂H₅OH","C₂H₄","CH₄"],
answer:1,
explanation:"C₂H₅OH (ethanol) is an alcohol."
},

{
chapter:"4",
question:"The smell of esters is generally:",
options:["Pungent","Fruity","Odourless","Rotten"],
answer:1,
explanation:"Esters have a pleasant fruity smell."
},

{
chapter:"4",
question:"What is formed when ethanoic acid reacts with ethanol in presence of concentrated H₂SO₄?",
options:["Soap","Ethyl ethanoate","Methane","Carbon dioxide"],
answer:1,
explanation:"Ethyl ethanoate is formed during esterification."
},

{
chapter:"4",
question:"Which acid acts as a catalyst during esterification?",
options:["Hydrochloric acid","Nitric acid","Concentrated sulphuric acid","Acetic acid"],
answer:2,
explanation:"Concentrated H₂SO₄ acts as a catalyst and dehydrating agent."
},

{
chapter:"4",
question:"Soap molecules contain:",
options:["Only hydrophilic end","Only hydrophobic end","Hydrophilic and hydrophobic ends","No charged end"],
answer:2,
explanation:"Soap has one water-attracting and one oil-attracting end."
},

{
chapter:"4",
question:"The hydrophobic end of soap attracts:",
options:["Water","Oil and grease","Salt","Sugar"],
answer:1,
explanation:"The hydrophobic tail dissolves in grease."
},

{
chapter:"4",
question:"The hydrophilic end of soap attracts:",
options:["Oil","Grease","Water","Dust"],
answer:2,
explanation:"The ionic end of soap is attracted towards water."
},

{
chapter:"4",
question:"Which of the following compounds decolourises alkaline KMnO₄ solution?",
options:["Methane","Ethane","Ethene","Propane"],
answer:2,
explanation:"Unsaturated hydrocarbons like ethene decolourise alkaline KMnO₄."
},

{
chapter:"4",
question:"Carbon forms a large number of compounds mainly because of:",
options:["Its colour","Catenation and tetravalency","Its density","Its melting point"],
answer:1,
explanation:"Carbon's tetravalency and catenation enable it to form millions of compounds."
},

{
chapter:"4",
question:"Which hydrocarbon contains only single covalent bonds?",
options:["Alkene","Alkyne","Alkane","Aromatic hydrocarbon"],
answer:2,
explanation:"Alkanes contain only single covalent bonds."
},

{
chapter:"4",
question:"Which hydrocarbon contains at least one carbon-carbon double bond?",
options:["Alkane","Alkene","Alkyne","Alcohol"],
answer:1,
explanation:"Alkenes contain one or more double bonds."
},

{
chapter:"4",
question:"Which hydrocarbon contains at least one carbon-carbon triple bond?",
options:["Alkane","Alkene","Alkyne","Ester"],
answer:2,
explanation:"Alkynes contain one or more triple bonds."
},

{
chapter:"4",
question:"Which of the following is NOT an organic compound?",
options:["Methane","Ethanol","Carbon dioxide","Ethanoic acid"],
answer:2,
explanation:"Carbon dioxide is considered an inorganic compound."
},

{
chapter:"4",
question:"Which gas is produced during complete combustion of ethanol?",
options:["Carbon monoxide","Carbon dioxide","Methane","Hydrogen"],
answer:1,
explanation:"Complete combustion of ethanol produces carbon dioxide and water."
},

{
chapter:"4",
question:"What is the colour of a clean flame produced by LPG?",
options:["Yellow","Blue","Green","Orange"],
answer:1,
explanation:"LPG burns with a clean blue flame."
},

{
chapter:"4",
question:"Which carbon compound is used as an antiseptic in hospitals?",
options:["Methanol","Ethanol","Ethene","Methane"],
answer:1,
explanation:"Ethanol is commonly used as an antiseptic."
},

{
chapter:"4",
question:"Which chapter mainly explains catenation, homologous series, soaps and detergents?",
options:["Metals and Non-metals","Carbon and its Compounds","Life Processes","Electricity"],
answer:1,
explanation:"These topics are covered in Chapter 4: Carbon and its Compounds."
},
{
chapter:"5",
question:"Which process is responsible for obtaining energy from food in our body?",
options:["Respiration","Digestion","Excretion","Transportation"],
answer:0,
explanation:"Respiration releases energy from the food we eat."
},

{
chapter:"5",
question:"Which life process provides energy required for all activities of the body?",
options:["Nutrition","Respiration","Excretion","Growth"],
answer:1,
explanation:"Respiration releases energy in the form of ATP."
},

{
chapter:"5",
question:"The mode of nutrition in humans is:",
options:["Autotrophic","Heterotrophic","Saprophytic","Parasitic"],
answer:1,
explanation:"Humans obtain food from other organisms."
},

{
chapter:"5",
question:"Green plants prepare their own food by:",
options:["Respiration","Photosynthesis","Transpiration","Excretion"],
answer:1,
explanation:"Photosynthesis is the process by which plants prepare food."
},

{
chapter:"5",
question:"Which gas is taken in by plants during photosynthesis?",
options:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],
answer:2,
explanation:"Plants use carbon dioxide to prepare glucose."
},

{
chapter:"5",
question:"Which gas is released during photosynthesis?",
options:["Carbon dioxide","Nitrogen","Hydrogen","Oxygen"],
answer:3,
explanation:"Oxygen is released as a by-product of photosynthesis."
},

{
chapter:"5",
question:"The green pigment required for photosynthesis is:",
options:["Haemoglobin","Chlorophyll","Melanin","Carotene"],
answer:1,
explanation:"Chlorophyll traps sunlight."
},

{
chapter:"5",
question:"Which part of the plant mainly carries out photosynthesis?",
options:["Root","Stem","Leaf","Flower"],
answer:2,
explanation:"Leaves contain chloroplasts rich in chlorophyll."
},

{
chapter:"5",
question:"The raw materials required for photosynthesis are:",
options:["CO₂ and Water","Oxygen and Water","Nitrogen and Water","CO₂ and Oxygen"],
answer:0,
explanation:"Plants use carbon dioxide and water in the presence of sunlight."
},

{
chapter:"5",
question:"Which cell organelle is the site of photosynthesis?",
options:["Mitochondria","Nucleus","Chloroplast","Ribosome"],
answer:2,
explanation:"Photosynthesis takes place inside chloroplasts."
},

{
chapter:"5",
question:"The end product of photosynthesis is:",
options:["Protein","Glucose","Fat","Starch only"],
answer:1,
explanation:"Glucose is formed during photosynthesis."
},

{
chapter:"5",
question:"Which tissue transports water and minerals in plants?",
options:["Phloem","Xylem","Cambium","Epidermis"],
answer:1,
explanation:"Xylem conducts water and minerals."
},

{
chapter:"5",
question:"Which tissue transports food in plants?",
options:["Xylem","Phloem","Cortex","Epidermis"],
answer:1,
explanation:"Phloem transports prepared food."
},

{
chapter:"5",
question:"The process of loss of water vapour from leaves is called:",
options:["Respiration","Photosynthesis","Transpiration","Excretion"],
answer:2,
explanation:"Transpiration occurs mainly through stomata."
},

{
chapter:"5",
question:"Tiny pores present on leaves are called:",
options:["Lenticels","Stomata","Veins","Root hairs"],
answer:1,
explanation:"Stomata help in gaseous exchange and transpiration."
},

{
chapter:"5",
question:"Which part of the alimentary canal receives food first?",
options:["Stomach","Mouth","Oesophagus","Small intestine"],
answer:1,
explanation:"Digestion begins in the mouth."
},

{
chapter:"5",
question:"Which enzyme is present in saliva?",
options:["Pepsin","Trypsin","Salivary amylase","Lipase"],
answer:2,
explanation:"Salivary amylase digests starch."
},

{
chapter:"5",
question:"Digestion of proteins begins in the:",
options:["Mouth","Stomach","Small intestine","Large intestine"],
answer:1,
explanation:"Pepsin in the stomach starts protein digestion."
},

{
chapter:"5",
question:"The largest gland in the human body is:",
options:["Pancreas","Liver","Salivary gland","Thyroid"],
answer:1,
explanation:"The liver is the largest gland."
},

{
chapter:"5",
question:"Bile juice is produced by the:",
options:["Pancreas","Liver","Stomach","Small intestine"],
answer:1,
explanation:"The liver produces bile, which helps in fat digestion."
},
{
chapter:"5",
question:"Which organ stores bile juice?",
options:["Pancreas","Gall bladder","Liver","Stomach"],
answer:1,
explanation:"Bile juice produced by the liver is stored in the gall bladder."
},

{
chapter:"5",
question:"The digestion of fats mainly takes place in the:",
options:["Mouth","Stomach","Small intestine","Large intestine"],
answer:2,
explanation:"Fat digestion mainly occurs in the small intestine."
},

{
chapter:"5",
question:"The inner lining of the small intestine has finger-like projections called:",
options:["Nephrons","Alveoli","Villi","Stomata"],
answer:2,
explanation:"Villi increase the surface area for absorption."
},

{
chapter:"5",
question:"Absorption of digested food mainly takes place in the:",
options:["Stomach","Large intestine","Small intestine","Oesophagus"],
answer:2,
explanation:"Most nutrients are absorbed in the small intestine."
},

{
chapter:"5",
question:"The undigested food is stored temporarily in the:",
options:["Small intestine","Rectum","Stomach","Pancreas"],
answer:1,
explanation:"The rectum stores faeces before elimination."
},

{
chapter:"5",
question:"Which blood vessel carries oxygenated blood from lungs to the heart?",
options:["Pulmonary artery","Pulmonary vein","Aorta","Vena cava"],
answer:1,
explanation:"Pulmonary veins carry oxygen-rich blood to the left atrium."
},

{
chapter:"5",
question:"The pumping chambers of the human heart are called:",
options:["Atria","Ventricles","Valves","Capillaries"],
answer:1,
explanation:"The ventricles pump blood out of the heart."
},

{
chapter:"5",
question:"The red pigment present in blood is:",
options:["Chlorophyll","Haemoglobin","Melanin","Insulin"],
answer:1,
explanation:"Haemoglobin transports oxygen."
},

{
chapter:"5",
question:"Which blood vessels carry blood away from the heart?",
options:["Veins","Capillaries","Arteries","Venules"],
answer:2,
explanation:"Arteries carry blood away from the heart."
},

{
chapter:"5",
question:"Which blood vessels carry blood towards the heart?",
options:["Arteries","Veins","Capillaries","Aorta"],
answer:1,
explanation:"Veins return blood to the heart."
},

{
chapter:"5",
question:"The largest artery in the human body is:",
options:["Pulmonary artery","Aorta","Vena cava","Renal artery"],
answer:1,
explanation:"The aorta is the largest artery."
},

{
chapter:"5",
question:"Exchange of gases in the lungs occurs in the:",
options:["Bronchi","Alveoli","Trachea","Diaphragm"],
answer:1,
explanation:"Alveoli provide a large surface area for gas exchange."
},

{
chapter:"5",
question:"The functional unit of the kidney is:",
options:["Neuron","Nephron","Alveolus","Villus"],
answer:1,
explanation:"Nephrons filter blood and form urine."
},

{
chapter:"5",
question:"Humans have how many kidneys?",
options:["One","Two","Three","Four"],
answer:1,
explanation:"A healthy human normally has two kidneys."
},

{
chapter:"5",
question:"The waste product removed by the kidneys is mainly:",
options:["Glucose","Urea","Oxygen","Starch"],
answer:1,
explanation:"Kidneys remove urea from the blood."
},

{
chapter:"5",
question:"Urine is stored in the:",
options:["Kidney","Ureter","Urinary bladder","Urethra"],
answer:2,
explanation:"The urinary bladder stores urine."
},

{
chapter:"5",
question:"The tube that carries urine from kidney to urinary bladder is called:",
options:["Urethra","Ureter","Nephron","Vein"],
answer:1,
explanation:"The ureter connects each kidney to the urinary bladder."
},

{
chapter:"5",
question:"The tube through which urine leaves the body is:",
options:["Ureter","Urethra","Aorta","Oesophagus"],
answer:1,
explanation:"Urine is expelled through the urethra."
},

{
chapter:"5",
question:"Which process removes nitrogenous wastes from the body?",
options:["Nutrition","Respiration","Excretion","Digestion"],
answer:2,
explanation:"Excretion removes metabolic waste products."
},

{
chapter:"5",
question:"Double circulation in humans helps in:",
options:["Mixing oxygenated and deoxygenated blood","Efficient oxygen supply to the body","Reducing blood pressure","Producing hormones"],
answer:1,
explanation:"Double circulation keeps oxygenated and deoxygenated blood separate, increasing efficiency."
},
{
chapter:"5",
question:"Which blood vessel carries oxygenated blood from the heart to the body?",
options:["Pulmonary artery","Pulmonary vein","Aorta","Vena cava"],
answer:2,
explanation:"The aorta is the largest artery and carries oxygenated blood from the left ventricle."
},

{
chapter:"5",
question:"The main function of red blood cells is to:",
options:["Fight infections","Transport oxygen","Clot blood","Digest food"],
answer:1,
explanation:"RBCs contain haemoglobin which transports oxygen."
},

{
chapter:"5",
question:"Which chamber of the heart receives oxygenated blood from the lungs?",
options:["Right atrium","Right ventricle","Left atrium","Left ventricle"],
answer:2,
explanation:"The left atrium receives oxygen-rich blood through pulmonary veins."
},

{
chapter:"5",
question:"The valve between the left atrium and left ventricle is called:",
options:["Tricuspid valve","Bicuspid valve","Semilunar valve","Aortic valve"],
answer:1,
explanation:"The bicuspid (mitral) valve prevents backflow of blood."
},

{
chapter:"5",
question:"Which blood vessel carries deoxygenated blood from the body to the heart?",
options:["Aorta","Pulmonary vein","Vena cava","Pulmonary artery"],
answer:2,
explanation:"The superior and inferior vena cava return deoxygenated blood to the right atrium."
},

{
chapter:"5",
question:"Which organ removes excess water and salts from the blood?",
options:["Liver","Lungs","Kidneys","Heart"],
answer:2,
explanation:"Kidneys filter blood and remove excess water, salts and urea."
},

{
chapter:"5",
question:"Which nitrogenous waste is excreted by humans?",
options:["Ammonia","Uric acid","Urea","Glucose"],
answer:2,
explanation:"Humans mainly excrete nitrogenous waste as urea."
},

{
chapter:"5",
question:"Which structure connects the kidney to the urinary bladder?",
options:["Urethra","Ureter","Nephron","Renal artery"],
answer:1,
explanation:"Each kidney is connected to the urinary bladder by a ureter."
},

{
chapter:"5",
question:"Which process helps in cooling the plant?",
options:["Photosynthesis","Respiration","Transpiration","Excretion"],
answer:2,
explanation:"Transpiration cools the plant by evaporation of water."
},

{
chapter:"5",
question:"Opening and closing of stomata mainly depends upon:",
options:["Root pressure","Guard cells","Xylem vessels","Phloem tissue"],
answer:1,
explanation:"Guard cells regulate the opening and closing of stomata."
},

{
chapter:"5",
question:"The transport of water in plants takes place through:",
options:["Phloem","Xylem","Cambium","Cortex"],
answer:1,
explanation:"Xylem conducts water and minerals from roots to leaves."
},

{
chapter:"5",
question:"Food prepared in leaves is transported by:",
options:["Xylem","Phloem","Stomata","Root hairs"],
answer:1,
explanation:"Phloem transports food to different plant parts."
},

{
chapter:"5",
question:"Which part of the nephron is responsible for selective reabsorption?",
options:["Bowman's capsule","Glomerulus","Tubule","Ureter"],
answer:2,
explanation:"Useful substances are reabsorbed in the nephron tubule."
},

{
chapter:"5",
question:"The filtration of blood in the kidney occurs in:",
options:["Loop of Henle","Collecting duct","Glomerulus","Ureter"],
answer:2,
explanation:"Blood is filtered in the glomerulus."
},

{
chapter:"5",
question:"Which chamber of the heart pumps blood to the lungs?",
options:["Left atrium","Left ventricle","Right atrium","Right ventricle"],
answer:3,
explanation:"The right ventricle pumps deoxygenated blood to the lungs."
},

{
chapter:"5",
question:"Which chamber pumps oxygenated blood to the entire body?",
options:["Right ventricle","Left ventricle","Right atrium","Left atrium"],
answer:1,
explanation:"The left ventricle pumps oxygen-rich blood through the aorta."
},

{
chapter:"5",
question:"Which process releases energy from glucose inside cells?",
options:["Digestion","Respiration","Nutrition","Excretion"],
answer:1,
explanation:"Cellular respiration releases energy stored in glucose."
},

{
chapter:"5",
question:"The energy currency of the cell is:",
options:["DNA","ATP","RNA","ADP"],
answer:1,
explanation:"ATP stores and supplies energy for cellular activities."
},

{
chapter:"5",
question:"The exchange of oxygen and carbon dioxide in the lungs occurs by:",
options:["Active transport","Diffusion","Osmosis","Peristalsis"],
answer:1,
explanation:"Gases move across alveolar walls by diffusion."
},

{
chapter:"5",
question:"Which life process includes digestion, absorption and assimilation of food?",
options:["Respiration","Nutrition","Transportation","Excretion"],
answer:1,
explanation:"Nutrition involves obtaining and utilizing food by the body."
},
{
chapter:"5",
question:"Which process breaks down glucose to release energy in cells?",
options:["Photosynthesis","Respiration","Transpiration","Digestion"],
answer:1,
explanation:"Respiration breaks down glucose to release energy in the form of ATP."
},

{
chapter:"5",
question:"Which pigment is essential for photosynthesis?",
options:["Melanin","Chlorophyll","Haemoglobin","Carotene"],
answer:1,
explanation:"Chlorophyll absorbs sunlight for photosynthesis."
},

{
chapter:"5",
question:"The equation of photosynthesis is:",
options:[
"CO₂ + H₂O → O₂ + Energy",
"6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
"C₆H₁₂O₆ + O₂ → CO₂ + H₂O",
"H₂ + O₂ → H₂O"
],
answer:1,
explanation:"This is the balanced equation of photosynthesis."
},

{
chapter:"5",
question:"Which gas is released during aerobic respiration?",
options:["Nitrogen","Carbon dioxide","Hydrogen","Chlorine"],
answer:1,
explanation:"Carbon dioxide is released during aerobic respiration."
},

{
chapter:"5",
question:"The energy released during respiration is stored as:",
options:["DNA","ATP","RNA","ADP"],
answer:1,
explanation:"ATP is the energy currency of the cell."
},

{
chapter:"5",
question:"Which organ prevents food from entering the windpipe?",
options:["Tongue","Epiglottis","Larynx","Pharynx"],
answer:1,
explanation:"The epiglottis closes the windpipe during swallowing."
},

{
chapter:"5",
question:"Which enzyme digests proteins in the stomach?",
options:["Amylase","Lipase","Pepsin","Trypsin"],
answer:2,
explanation:"Pepsin begins protein digestion in the stomach."
},

{
chapter:"5",
question:"Which enzyme digests starch in the mouth?",
options:["Pepsin","Lipase","Salivary amylase","Trypsin"],
answer:2,
explanation:"Salivary amylase converts starch into simpler sugars."
},

{
chapter:"5",
question:"The main function of bile juice is to:",
options:[
"Digest proteins",
"Digest carbohydrates",
"Emulsify fats",
"Digest vitamins"
],
answer:2,
explanation:"Bile breaks large fat globules into smaller droplets."
},

{
chapter:"5",
question:"The heart of a healthy human has:",
options:["2 chambers","3 chambers","4 chambers","5 chambers"],
answer:2,
explanation:"The human heart consists of four chambers."
},

{
chapter:"5",
question:"Which blood group is known as the universal donor?",
options:["A","B","AB","O"],
answer:3,
explanation:"Blood group O (especially O−) is called the universal donor."
},

{
chapter:"5",
question:"Which blood group is known as the universal recipient?",
options:["A","B","AB","O"],
answer:2,
explanation:"AB (especially AB+) can receive blood from all groups."
},

{
chapter:"5",
question:"The average blood pressure of a healthy adult is:",
options:["80/40 mm Hg","120/80 mm Hg","160/100 mm Hg","100/50 mm Hg"],
answer:1,
explanation:"Normal blood pressure is approximately 120/80 mm Hg."
},

{
chapter:"5",
question:"Which vessel has the thinnest walls?",
options:["Arteries","Veins","Capillaries","Aorta"],
answer:2,
explanation:"Capillaries have very thin walls for exchange of substances."
},

{
chapter:"5",
question:"Which part of the nephron collects urine after filtration and reabsorption?",
options:["Bowman's capsule","Collecting duct","Glomerulus","Loop of Henle"],
answer:1,
explanation:"The collecting duct receives urine before it passes to the ureter."
},

{
chapter:"5",
question:"Dialysis is used when:",
options:[
"The lungs stop working",
"The liver fails",
"The kidneys fail to function properly",
"The heart stops beating"
],
answer:2,
explanation:"Dialysis removes waste products when kidneys fail."
},

{
chapter:"5",
question:"Which plant tissue provides mechanical support as well as transports water?",
options:["Phloem","Xylem","Parenchyma","Collenchyma"],
answer:1,
explanation:"Xylem conducts water and also provides strength."
},

{
chapter:"5",
question:"The transport of food from leaves to other plant parts is called:",
options:["Translocation","Transpiration","Respiration","Diffusion"],
answer:0,
explanation:"Phloem carries out translocation of food."
},

{
chapter:"5",
question:"Which process helps maintain water balance in plants?",
options:["Respiration","Photosynthesis","Transpiration","Digestion"],
answer:2,
explanation:"Transpiration regulates water movement and cooling."
},

{
chapter:"5",
question:"Which chapter explains nutrition, respiration, transportation and excretion in plants and animals?",
options:[
"Carbon and its Compounds",
"Life Processes",
"Control and Coordination",
"Heredity"
],
answer:1,
explanation:"These topics are included in Chapter 5: Life Processes."
},

{
chapter:"6",
question:"Which system controls and coordinates activities in humans?",
options:["Digestive system","Nervous system","Respiratory system","Excretory system"],
answer:1,
explanation:"The nervous system controls and coordinates body activities."
},

{
chapter:"6",
question:"The basic unit of the nervous system is:",
options:["Neuron","Nephron","Alveolus","Axon"],
answer:0,
explanation:"Neuron is the structural and functional unit of the nervous system."
},

{
chapter:"6",
question:"The largest part of the human brain is:",
options:["Cerebellum","Cerebrum","Medulla","Pons"],
answer:1,
explanation:"The cerebrum is the largest part of the brain."
},

{
chapter:"6",
question:"Which part of the brain controls balance of the body?",
options:["Cerebrum","Medulla","Cerebellum","Hypothalamus"],
answer:2,
explanation:"The cerebellum maintains posture and balance."
},

{
chapter:"6",
question:"Which part of the brain controls heartbeat and breathing?",
options:["Cerebrum","Cerebellum","Medulla","Pituitary"],
answer:2,
explanation:"The medulla controls involuntary actions."
},

{
chapter:"6",
question:"The gap between two neurons is called:",
options:["Axon","Dendrite","Synapse","Node"],
answer:2,
explanation:"Impulse passes from one neuron to another through the synapse."
},

{
chapter:"6",
question:"Which part of the neuron receives impulses?",
options:["Axon","Dendrite","Cell body","Nucleus"],
answer:1,
explanation:"Dendrites receive nerve impulses."
},

{
chapter:"6",
question:"Which part of the neuron carries impulses away from the cell body?",
options:["Dendrite","Axon","Nucleus","Synapse"],
answer:1,
explanation:"The axon carries impulses away from the cell body."
},

{
chapter:"6",
question:"The pathway followed during a reflex action is called:",
options:["Neuron","Reflex arc","Impulse","Synapse"],
answer:1,
explanation:"A reflex arc is the pathway of a reflex action."
},

{
chapter:"6",
question:"Reflex actions are mainly controlled by the:",
options:["Brain","Spinal cord","Cerebellum","Cerebrum"],
answer:1,
explanation:"Most reflex actions are coordinated by the spinal cord."
},

{
chapter:"6",
question:"Which hormone regulates blood sugar level?",
options:["Thyroxine","Insulin","Adrenaline","Estrogen"],
answer:1,
explanation:"Insulin regulates blood glucose."
},

{
chapter:"6",
question:"Which gland secretes insulin?",
options:["Pituitary","Thyroid","Pancreas","Adrenal"],
answer:2,
explanation:"The pancreas secretes insulin."
},

{
chapter:"6",
question:"Which gland is called the master gland?",
options:["Thyroid","Pituitary","Adrenal","Pancreas"],
answer:1,
explanation:"The pituitary controls other endocrine glands."
},

{
chapter:"6",
question:"Which hormone prepares the body for emergencies?",
options:["Insulin","Thyroxine","Adrenaline","Growth hormone"],
answer:2,
explanation:"Adrenaline prepares the body for fight-or-flight situations."
},

{
chapter:"6",
question:"Which gland secretes thyroxine?",
options:["Pituitary","Thyroid","Pancreas","Adrenal"],
answer:1,
explanation:"The thyroid gland secretes thyroxine."
},

{
chapter:"6",
question:"Iodine is necessary for the production of:",
options:["Insulin","Thyroxine","Adrenaline","Testosterone"],
answer:1,
explanation:"Iodine is essential for thyroxine synthesis."
},

{
chapter:"6",
question:"The growth hormone is secreted by the:",
options:["Pituitary gland","Thyroid gland","Pancreas","Adrenal gland"],
answer:0,
explanation:"Growth hormone is produced by the pituitary gland."
},

{
chapter:"6",
question:"Plants respond to light by:",
options:["Phototropism","Geotropism","Hydrotropism","Thigmotropism"],
answer:0,
explanation:"Phototropism is the growth response towards light."
},

{
chapter:"6",
question:"Growth of roots towards gravity is called:",
options:["Phototropism","Hydrotropism","Positive geotropism","Thigmotropism"],
answer:2,
explanation:"Roots show positive geotropism."
},

{
chapter:"6",
question:"Growth of shoots towards light is an example of:",
options:["Negative geotropism","Positive phototropism","Hydrotropism","Chemotropism"],
answer:1,
explanation:"Shoots bend towards light showing positive phototropism."
},

{
chapter:"6",
question:"Growth of plant roots towards water is called:",
options:["Phototropism","Hydrotropism","Geotropism","Thigmotropism"],
answer:1,
explanation:"Roots grow towards water, showing positive hydrotropism."
},

{
chapter:"6",
question:"The growth of tendrils around a support is called:",
options:["Phototropism","Hydrotropism","Thigmotropism","Geotropism"],
answer:2,
explanation:"Tendrils respond to touch and coil around supports."
},

{
chapter:"6",
question:"The hormone responsible for cell elongation in plants is:",
options:["Auxin","Gibberellin","Cytokinin","Abscisic acid"],
answer:0,
explanation:"Auxin promotes cell elongation, especially in shoots."
},

{
chapter:"6",
question:"Which plant hormone promotes stem growth?",
options:["Auxin","Gibberellin","Abscisic acid","Ethylene"],
answer:1,
explanation:"Gibberellins promote stem elongation and growth."
},

{
chapter:"6",
question:"Which plant hormone promotes cell division?",
options:["Auxin","Cytokinin","Ethylene","ABA"],
answer:1,
explanation:"Cytokinins stimulate cell division."
},

{
chapter:"6",
question:"Which plant hormone helps in ripening of fruits?",
options:["Auxin","Ethylene","Gibberellin","Cytokinin"],
answer:1,
explanation:"Ethylene promotes fruit ripening."
},

{
chapter:"6",
question:"Which plant hormone inhibits growth and causes dormancy?",
options:["Auxin","Ethylene","Abscisic acid","Gibberellin"],
answer:2,
explanation:"Abscisic acid (ABA) inhibits growth and induces dormancy."
},

{
chapter:"6",
question:"The movement of Mimosa pudica leaves on touching is:",
options:["Growth movement","Nastic movement","Phototropism","Hydrotropism"],
answer:1,
explanation:"Mimosa shows a nastic movement due to touch."
},

{
chapter:"6",
question:"The hormone insulin helps in:",
options:["Increasing blood sugar","Decreasing blood sugar","Controlling heartbeat","Increasing body temperature"],
answer:1,
explanation:"Insulin lowers blood glucose level."
},

{
chapter:"6",
question:"Deficiency of insulin causes:",
options:["Goitre","Diabetes","Anaemia","Asthma"],
answer:1,
explanation:"Lack of insulin results in diabetes mellitus."
},

{
chapter:"6",
question:"Which gland secretes adrenaline?",
options:["Pituitary","Thyroid","Adrenal","Pancreas"],
answer:2,
explanation:"The adrenal glands produce adrenaline."
},

{
chapter:"6",
question:"Adrenaline increases:",
options:["Heartbeat","Digestion","Urine formation","Sleep"],
answer:0,
explanation:"Adrenaline prepares the body for emergency situations."
},

{
chapter:"6",
question:"Which part of the nervous system connects the brain to the rest of the body?",
options:["Neuron","Spinal cord","Synapse","Dendrite"],
answer:1,
explanation:"The spinal cord carries impulses between the brain and body."
},

{
chapter:"6",
question:"Which neuron carries impulses from receptors to the CNS?",
options:["Motor neuron","Sensory neuron","Relay neuron","Connector neuron"],
answer:1,
explanation:"Sensory neurons carry impulses to the CNS."
},

{
chapter:"6",
question:"Motor neurons carry impulses from:",
options:["Sense organs to brain","Brain to muscles","Muscles to brain","Heart to brain"],
answer:1,
explanation:"Motor neurons transmit impulses from the CNS to effectors."
},

{
chapter:"6",
question:"The receptors for vision are present in the:",
options:["Ear","Skin","Eye","Tongue"],
answer:2,
explanation:"The eyes contain receptors for light."
},

{
chapter:"6",
question:"The receptors for hearing are located in the:",
options:["Nose","Tongue","Ear","Skin"],
answer:2,
explanation:"The ear contains receptors for sound."
},

{
chapter:"6",
question:"The brain and spinal cord together form the:",
options:["Peripheral nervous system","Central nervous system","Autonomic nervous system","Endocrine system"],
answer:1,
explanation:"The brain and spinal cord make up the CNS."
},

{
chapter:"6",
question:"Which system coordinates the body through hormones?",
options:["Digestive system","Endocrine system","Respiratory system","Excretory system"],
answer:1,
explanation:"The endocrine system coordinates body functions using hormones."
},

{
chapter:"6",
question:"Control and coordination in plants occur mainly through:",
options:["Nerves","Hormones","Blood","Muscles"],
answer:1,
explanation:"Plants coordinate activities using chemical hormones."
},

{
chapter:"6",
question:"The automatic response to a stimulus without conscious thought is called:",
options:["Voluntary action","Reflex action","Growth","Movement"],
answer:1,
explanation:"A reflex action is a quick automatic response controlled mainly by the spinal cord."
},

{
chapter:"6",
question:"Which of the following is an example of a reflex action?",
options:["Writing","Walking","Withdrawing hand from a hot object","Reading"],
answer:2,
explanation:"Withdrawing the hand from a hot object is a reflex action."
},

{
chapter:"6",
question:"The junction between two neurons is called:",
options:["Node","Axon","Synapse","Dendrite"],
answer:2,
explanation:"The synapse is the junction through which nerve impulses pass."
},

{
chapter:"6",
question:"The cell body of a neuron contains the:",
options:["Axon","Dendrites","Nucleus","Synapse"],
answer:2,
explanation:"The nucleus is present in the cell body of the neuron."
},

{
chapter:"6",
question:"The receptor for smell is present in the:",
options:["Tongue","Ear","Nose","Skin"],
answer:2,
explanation:"The nose contains olfactory receptors."
},

{
chapter:"6",
question:"Taste receptors are located on the:",
options:["Eyes","Tongue","Skin","Nose"],
answer:1,
explanation:"Taste buds on the tongue detect different tastes."
},

{
chapter:"6",
question:"The receptor for touch is present in the:",
options:["Eyes","Tongue","Skin","Ear"],
answer:2,
explanation:"The skin contains receptors for touch, pressure and temperature."
},

{
chapter:"6",
question:"The pathway of a nerve impulse in a reflex action is called:",
options:["Neuron pathway","Reflex arc","Hormonal pathway","Impulse chain"],
answer:1,
explanation:"The reflex arc is the shortest pathway for reflex actions."
},

{
chapter:"6",
question:"Which hormone regulates metabolism in the body?",
options:["Insulin","Adrenaline","Thyroxine","Growth hormone"],
answer:2,
explanation:"Thyroxine regulates the body's metabolic rate."
},

{
chapter:"6",
question:"Deficiency of iodine may lead to:",
options:["Diabetes","Goitre","Anaemia","Hypertension"],
answer:1,
explanation:"Iodine deficiency causes enlargement of the thyroid gland (goitre)."
},

{
chapter:"6",
question:"Which gland is present above each kidney?",
options:["Thyroid","Pituitary","Adrenal","Pancreas"],
answer:2,
explanation:"Each kidney has an adrenal gland located above it."
},

{
chapter:"6",
question:"Which hormone is responsible for normal body growth?",
options:["Auxin","Growth hormone","Insulin","Thyroxine"],
answer:1,
explanation:"Growth hormone is secreted by the pituitary gland."
},

{
chapter:"6",
question:"The movement of pollen tube towards the ovule is called:",
options:["Phototropism","Chemotropism","Hydrotropism","Geotropism"],
answer:1,
explanation:"The pollen tube grows towards chemicals released by the ovule."
},

{
chapter:"6",
question:"The shoot of a plant shows ______ geotropism.",
options:["Positive","Negative","Neutral","No"],
answer:1,
explanation:"Shoots grow opposite to gravity and show negative geotropism."
},

{
chapter:"6",
question:"Roots generally show ______ phototropism.",
options:["Positive","Negative","Neutral","No"],
answer:1,
explanation:"Roots usually grow away from light."
},

{
chapter:"6",
question:"The chemical messenger produced by endocrine glands is called:",
options:["Enzyme","Hormone","Vitamin","Protein"],
answer:1,
explanation:"Hormones are chemical messengers released into the blood."
},

{
chapter:"6",
question:"Which system is generally slower but longer lasting in action?",
options:["Nervous system","Endocrine system","Digestive system","Respiratory system"],
answer:1,
explanation:"Hormonal responses are slower but last longer than nerve impulses."
},

{
chapter:"6",
question:"Nerve impulses travel in the form of:",
options:["Chemical energy only","Electrical signals","Light energy","Heat energy"],
answer:1,
explanation:"Nerve impulses are electrical in nature."
},

{
chapter:"6",
question:"The endocrine glands are also called:",
options:["Duct glands","Ductless glands","Digestive glands","Exocrine glands"],
answer:1,
explanation:"Endocrine glands release hormones directly into the bloodstream."
},

{
chapter:"6",
question:"Which chapter explains the nervous system, endocrine system and plant movements?",
options:["Life Processes","Control and Coordination","Heredity","Electricity"],
answer:1,
explanation:"These topics are covered in Chapter 6: Control and Coordination."
},

{
chapter:"6",
question:"The nervous system controls the body through:",
options:["Hormones","Nerve impulses","Blood","Enzymes"],
answer:1,
explanation:"The nervous system works by transmitting electrical nerve impulses."
},

{
chapter:"6",
question:"Which part of the brain is responsible for thinking and intelligence?",
options:["Cerebellum","Medulla","Cerebrum","Spinal cord"],
answer:2,
explanation:"The cerebrum controls thinking, memory, intelligence and voluntary actions."
},

{
chapter:"6",
question:"Which part of the brain maintains posture and balance?",
options:["Cerebrum","Cerebellum","Medulla","Hypothalamus"],
answer:1,
explanation:"The cerebellum coordinates muscular activities and balance."
},

{
chapter:"6",
question:"The spinal cord is protected by the:",
options:["Rib cage","Vertebral column","Skull","Pelvis"],
answer:1,
explanation:"The vertebral column protects the spinal cord."
},

{
chapter:"6",
question:"Which of the following is a voluntary action?",
options:["Blinking","Breathing","Writing","Heartbeat"],
answer:2,
explanation:"Writing is under conscious control."
},

{
chapter:"6",
question:"Which of the following is an involuntary action?",
options:["Walking","Writing","Heartbeat","Speaking"],
answer:2,
explanation:"Heartbeat occurs automatically without conscious control."
},

{
chapter:"6",
question:"Which gland controls the activity of other endocrine glands?",
options:["Thyroid","Adrenal","Pituitary","Pancreas"],
answer:2,
explanation:"The pituitary is known as the master gland."
},

{
chapter:"6",
question:"Which hormone helps plants bend towards light?",
options:["Auxin","Ethylene","ABA","Cytokinin"],
answer:0,
explanation:"Auxin accumulates on the shaded side causing bending towards light."
},

{
chapter:"6",
question:"Auxin is mainly produced in the:",
options:["Roots","Shoot tip","Leaves","Flowers"],
answer:1,
explanation:"Auxin is synthesized mainly in the shoot apex."
},

{
chapter:"6",
question:"Which plant hormone delays ageing of leaves?",
options:["Auxin","Ethylene","Cytokinin","ABA"],
answer:2,
explanation:"Cytokinins delay senescence (ageing)."
},

{
chapter:"6",
question:"Ethylene is mainly associated with:",
options:["Fruit ripening","Root growth","Cell division","Seed germination"],
answer:0,
explanation:"Ethylene promotes ripening of fruits."
},

{
chapter:"6",
question:"Abscisic acid is also called the:",
options:["Growth hormone","Stress hormone","Ripening hormone","Flowering hormone"],
answer:1,
explanation:"ABA helps plants survive stressful conditions."
},

{
chapter:"6",
question:"Which plant movement is shown by sunflower towards sunlight?",
options:["Hydrotropism","Phototropism","Geotropism","Thigmotropism"],
answer:1,
explanation:"Sunflower bends towards light due to phototropism."
},

{
chapter:"6",
question:"Climbing plants like pea climb using:",
options:["Roots","Leaves","Tendrils","Flowers"],
answer:2,
explanation:"Tendrils coil around support due to thigmotropism."
},

{
chapter:"6",
question:"The response of plants to gravity is known as:",
options:["Phototropism","Hydrotropism","Geotropism","Chemotropism"],
answer:2,
explanation:"Growth in response to gravity is geotropism."
},

{
chapter:"6",
question:"The response of plants to chemicals is called:",
options:["Hydrotropism","Chemotropism","Phototropism","Thigmotropism"],
answer:1,
explanation:"Growth towards or away from chemicals is chemotropism."
},

{
chapter:"6",
question:"The response of plants to touch is called:",
options:["Geotropism","Hydrotropism","Thigmotropism","Phototropism"],
answer:2,
explanation:"Plants respond to touch through thigmotropism."
},

{
chapter:"6",
question:"The receptor cells convert a stimulus into:",
options:["Hormones","Blood","Nerve impulse","Energy"],
answer:2,
explanation:"Receptors convert stimuli into nerve impulses."
},

{
chapter:"6",
question:"Which system provides a rapid response in the body?",
options:["Endocrine system","Nervous system","Digestive system","Excretory system"],
answer:1,
explanation:"The nervous system responds much faster than the endocrine system."
},

{
chapter:"6",
question:"Hormones are transported to target organs through:",
options:["Nerves","Blood","Lymph only","Muscles"],
answer:1,
explanation:"Hormones travel through the bloodstream to reach target organs."
},

{
chapter:"6",
question:"Which hormone causes stomata to close during water stress?",
options:["Auxin","Cytokinin","Abscisic acid","Ethylene"],
answer:2,
explanation:"Abscisic acid (ABA) causes stomata to close during water deficiency."
},

{
chapter:"6",
question:"The receptors present in the skin detect:",
options:["Light only","Touch, pressure, pain and temperature","Sound only","Smell only"],
answer:1,
explanation:"Skin contains receptors for touch, pressure, pain and temperature."
},

{
chapter:"6",
question:"Which neuron connects sensory neurons with motor neurons?",
options:["Sensory neuron","Motor neuron","Relay neuron","Axon"],
answer:2,
explanation:"Relay neurons are present in the spinal cord and brain."
},

{
chapter:"6",
question:"Which of the following is NOT an endocrine gland?",
options:["Pituitary","Thyroid","Salivary gland","Adrenal"],
answer:2,
explanation:"Salivary glands are exocrine glands because they have ducts."
},

{
chapter:"6",
question:"Insulin helps convert excess glucose into:",
options:["Protein","Glycogen","Fatty acid","Urea"],
answer:1,
explanation:"Insulin converts excess glucose into glycogen for storage."
},

{
chapter:"6",
question:"Which hormone increases blood glucose level?",
options:["Insulin","Adrenaline","Auxin","ABA"],
answer:1,
explanation:"Adrenaline increases blood glucose during emergencies."
},

{
chapter:"6",
question:"The endocrine glands release hormones directly into the:",
options:["Digestive tract","Bloodstream","Nerve cells","Skin"],
answer:1,
explanation:"Endocrine glands are ductless and release hormones into blood."
},

{
chapter:"6",
question:"Which part of the neuron is covered by a myelin sheath?",
options:["Dendrite","Axon","Cell body","Nucleus"],
answer:1,
explanation:"The myelin sheath surrounds the axon and speeds up nerve impulse transmission."
},

{
chapter:"6",
question:"A reflex action is advantageous because it:",
options:["Is slow","Requires thinking","Provides a quick response","Needs hormones"],
answer:2,
explanation:"Reflex actions protect the body by giving immediate responses."
},

{
chapter:"6",
question:"Which of the following is a plant hormone?",
options:["Insulin","Auxin","Adrenaline","Thyroxine"],
answer:1,
explanation:"Auxin is a naturally occurring plant hormone."
},

{
chapter:"6",
question:"Growth of pollen tube towards the ovule occurs due to:",
options:["Hydrotropism","Chemotropism","Phototropism","Geotropism"],
answer:1,
explanation:"Chemical substances released by the ovule guide the pollen tube."
},

{
chapter:"6",
question:"The response of a plant to water is called:",
options:["Phototropism","Hydrotropism","Geotropism","Thigmotropism"],
answer:1,
explanation:"Growth towards water is known as hydrotropism."
},

{
chapter:"6",
question:"The nervous system coordinates the body through:",
options:["Enzymes","Electrical impulses","Blood cells","Plasma"],
answer:1,
explanation:"Electrical impulses travel rapidly through neurons."
},

{
chapter:"6",
question:"Which gland secretes growth hormone?",
options:["Thyroid","Pancreas","Pituitary","Adrenal"],
answer:2,
explanation:"Growth hormone is secreted by the pituitary gland."
},

{
chapter:"6",
question:"Which hormone deficiency causes diabetes mellitus?",
options:["Thyroxine","Insulin","Adrenaline","Auxin"],
answer:1,
explanation:"Lack of insulin causes diabetes mellitus."
},

{
chapter:"6",
question:"The quickest coordination in the human body is brought about by the:",
options:["Endocrine system","Nervous system","Circulatory system","Digestive system"],
answer:1,
explanation:"The nervous system produces rapid responses."
},

{
chapter:"6",
question:"Which hormone promotes fruit ripening?",
options:["Auxin","Ethylene","ABA","Cytokinin"],
answer:1,
explanation:"Ethylene is the ripening hormone in plants."
},

{
chapter:"6",
question:"The central nervous system consists of:",
options:["Brain and nerves","Brain and spinal cord","Spinal cord and nerves","Brain only"],
answer:1,
explanation:"The CNS includes the brain and spinal cord."
},

{
chapter:"6",
question:"Which plant hormone is known as the stress hormone?",
options:["Auxin","Ethylene","Abscisic acid","Gibberellin"],
answer:2,
explanation:"ABA helps plants survive stress conditions like drought."
},

{
chapter:"6",
question:"Which chapter of Class 10 Science deals with hormones, neurons, reflex actions and plant movements?",
options:["Life Processes","Control and Coordination","Heredity","Our Environment"],
answer:1,
explanation:"All these topics are covered in Chapter 6: Control and Coordination."
},

{
chapter:"7",
question:"Reproduction is necessary for:",
options:["Growth of an individual","Continuation of species","Nutrition","Respiration"],
answer:1,
explanation:"Reproduction ensures the continuity of a species."
},

{
chapter:"7",
question:"The two main types of reproduction are:",
options:["Internal and External","Sexual and Asexual","Binary and Multiple","Budding and Fragmentation"],
answer:1,
explanation:"Reproduction is broadly classified into sexual and asexual."
},

{
chapter:"7",
question:"Which type of reproduction involves only one parent?",
options:["Sexual reproduction","Asexual reproduction","Cross fertilisation","Internal fertilisation"],
answer:1,
explanation:"Asexual reproduction requires only one parent."
},

{
chapter:"7",
question:"Binary fission is commonly seen in:",
options:["Hydra","Amoeba","Yeast","Spirogyra"],
answer:1,
explanation:"Amoeba reproduces by binary fission."
},

{
chapter:"7",
question:"Yeast reproduces mainly by:",
options:["Binary fission","Budding","Fragmentation","Spore formation"],
answer:1,
explanation:"Yeast commonly reproduces by budding."
},

{
chapter:"7",
question:"Hydra reproduces asexually by:",
options:["Binary fission","Budding","Fragmentation","Spores"],
answer:1,
explanation:"Hydra forms a bud which grows into a new individual."
},

{
chapter:"7",
question:"Fragmentation is commonly found in:",
options:["Hydra","Spirogyra","Amoeba","Yeast"],
answer:1,
explanation:"Spirogyra reproduces by fragmentation."
},

{
chapter:"7",
question:"The reproductive parts of a flower are:",
options:["Sepals","Petals","Stamens and Carpels","Leaves"],
answer:2,
explanation:"Stamens and carpels are the reproductive organs."
},

{
chapter:"7",
question:"The male reproductive part of a flower is:",
options:["Carpel","Ovary","Stamen","Style"],
answer:2,
explanation:"The stamen is the male reproductive organ."
},

{
chapter:"7",
question:"The female reproductive part of a flower is:",
options:["Stamen","Carpel","Anther","Filament"],
answer:1,
explanation:"The carpel (pistil) is the female reproductive organ."
},

{
chapter:"7",
question:"Pollen grains are produced in the:",
options:["Ovary","Anther","Style","Stigma"],
answer:1,
explanation:"The anther produces pollen grains."
},

{
chapter:"7",
question:"Ovules are present inside the:",
options:["Anther","Ovary","Stigma","Filament"],
answer:1,
explanation:"Ovules are present inside the ovary."
},

{
chapter:"7",
question:"Transfer of pollen from anther to stigma is called:",
options:["Fertilisation","Pollination","Germination","Fragmentation"],
answer:1,
explanation:"Pollination is the transfer of pollen grains."
},

{
chapter:"7",
question:"Fusion of male and female gametes is called:",
options:["Pollination","Fertilisation","Budding","Fragmentation"],
answer:1,
explanation:"Fertilisation forms the zygote."
},

{
chapter:"7",
question:"After fertilisation, the ovary develops into:",
options:["Seed","Fruit","Root","Leaf"],
answer:1,
explanation:"The ovary develops into the fruit."
},

{
chapter:"7",
question:"After fertilisation, the ovule develops into:",
options:["Fruit","Seed","Flower","Leaf"],
answer:1,
explanation:"The ovule develops into the seed."
},

{
chapter:"7",
question:"Human reproduction is an example of:",
options:["Asexual reproduction","Sexual reproduction","Budding","Binary fission"],
answer:1,
explanation:"Humans reproduce sexually."
},

{
chapter:"7",
question:"The male reproductive organ in humans is:",
options:["Ovary","Testis","Uterus","Oviduct"],
answer:1,
explanation:"The testes produce sperm."
},

{
chapter:"7",
question:"The female reproductive organ that produces ova is:",
options:["Uterus","Ovary","Vagina","Oviduct"],
answer:1,
explanation:"The ovary produces female gametes (ova)."
},

{
chapter:"7",
question:"The male gamete in humans is called:",
options:["Ovum","Egg","Sperm","Zygote"],
answer:2,
explanation:"The sperm is the male reproductive cell."
},

{
chapter:"7",
question:"The female gamete in humans is called:",
options:["Sperm","Ovum","Zygote","Embryo"],
answer:1,
explanation:"The ovum (egg) is the female reproductive cell."
},

{
chapter:"7",
question:"Fertilisation in humans usually takes place in the:",
options:["Uterus","Ovary","Oviduct (Fallopian tube)","Vagina"],
answer:2,
explanation:"Fertilisation normally occurs in the fallopian tube."
},

{
chapter:"7",
question:"The fertilized egg is called:",
options:["Embryo","Foetus","Zygote","Gamete"],
answer:2,
explanation:"Fusion of male and female gametes forms a zygote."
},

{
chapter:"7",
question:"The developing baby inside the uterus after about eight weeks is called:",
options:["Embryo","Foetus","Zygote","Gamete"],
answer:1,
explanation:"After about eight weeks, the embryo is called a foetus."
},

{
chapter:"7",
question:"The organ where the embryo develops is:",
options:["Ovary","Uterus","Oviduct","Vagina"],
answer:1,
explanation:"The embryo develops inside the uterus."
},

{
chapter:"7",
question:"The placenta helps in:",
options:["Digestion","Exchange of nutrients and oxygen","Excretion only","Respiration only"],
answer:1,
explanation:"Placenta transfers nutrients and oxygen from mother to foetus."
},

{
chapter:"7",
question:"The embryo gets nourishment from the mother through the:",
options:["Umbilical cord and placenta","Oviduct","Ovary","Amniotic fluid only"],
answer:0,
explanation:"The placenta and umbilical cord provide nourishment."
},

{
chapter:"7",
question:"Which method is NOT a contraceptive?",
options:["Condom","Copper-T","Antibiotics","Oral pills"],
answer:2,
explanation:"Antibiotics prevent bacterial infections, not pregnancy."
},

{
chapter:"7",
question:"Which contraceptive also helps prevent sexually transmitted infections (STIs)?",
options:["Copper-T","Condom","Oral pills","Surgery"],
answer:1,
explanation:"Condoms help prevent both pregnancy and many STIs."
},

{
chapter:"7",
question:"Copper-T is placed inside the:",
options:["Ovary","Uterus","Vagina","Oviduct"],
answer:1,
explanation:"Copper-T is an intrauterine contraceptive device."
},

{
chapter:"7",
question:"Which disease is caused by HIV?",
options:["Tuberculosis","Malaria","AIDS","Typhoid"],
answer:2,
explanation:"HIV attacks the immune system and causes AIDS."
},

{
chapter:"7",
question:"Which of the following is a sexually transmitted infection (STI)?",
options:["Cholera","Gonorrhoea","Dengue","Typhoid"],
answer:1,
explanation:"Gonorrhoea is an STI."
},

{
chapter:"7",
question:"Which of the following is also an STI?",
options:["Measles","Syphilis","Polio","Chickenpox"],
answer:1,
explanation:"Syphilis spreads through sexual contact."
},

{
chapter:"7",
question:"Puberty is mainly associated with:",
options:["Old age","Childhood","Adolescence","Infancy"],
answer:2,
explanation:"Puberty occurs during adolescence."
},

{
chapter:"7",
question:"The hormone testosterone is produced in the:",
options:["Ovary","Testes","Pituitary","Thyroid"],
answer:1,
explanation:"Testes produce testosterone."
},

{
chapter:"7",
question:"The hormone oestrogen is produced in the:",
options:["Testes","Ovary","Pancreas","Thyroid"],
answer:1,
explanation:"Ovaries produce oestrogen."
},

{
chapter:"7",
question:"Menstruation generally occurs every:",
options:["7 days","14 days","28 days","60 days"],
answer:2,
explanation:"The menstrual cycle averages about 28 days."
},

{
chapter:"7",
question:"Which type of reproduction produces genetically identical offspring?",
options:["Sexual reproduction","Asexual reproduction","Cross pollination","Fertilisation"],
answer:1,
explanation:"Asexual reproduction produces genetically identical offspring."
},

{
chapter:"7",
question:"Variation is mainly produced through:",
options:["Asexual reproduction","Sexual reproduction","Binary fission","Budding"],
answer:1,
explanation:"Sexual reproduction creates genetic variation."
},

{
chapter:"7",
question:"Which chapter explains reproduction in plants and humans?",
options:["Life Processes","Control and Coordination","How do Organisms Reproduce?","Heredity"],
answer:2,
explanation:"These topics are covered in Chapter 7: How do Organisms Reproduce?"
},

{
chapter:"7",
question:"The testes are located outside the abdominal cavity because:",
options:["To reduce body weight","To maintain a lower temperature for sperm production","To store urine","To produce hormones only"],
answer:1,
explanation:"Sperm production requires a temperature about 2–3°C lower than body temperature."
},

{
chapter:"7",
question:"Sperms are produced in the:",
options:["Ovary","Testes","Prostate gland","Uterus"],
answer:1,
explanation:"The testes produce male gametes called sperms."
},

{
chapter:"7",
question:"The ovary releases one mature ovum approximately every:",
options:["7 days","14 days","28 days","60 days"],
answer:2,
explanation:"Normally one ovum is released once during each menstrual cycle."
},

{
chapter:"7",
question:"The process of release of an egg from the ovary is called:",
options:["Menstruation","Ovulation","Fertilisation","Implantation"],
answer:1,
explanation:"Ovulation is the release of a mature ovum."
},

{
chapter:"7",
question:"Implantation is the process in which:",
options:["Sperm enters ovum","Embryo attaches to the uterus","Egg is released","Baby is born"],
answer:1,
explanation:"The embryo gets implanted in the uterine wall."
},

{
chapter:"7",
question:"The average human gestation period is about:",
options:["3 months","6 months","9 months","12 months"],
answer:2,
explanation:"The gestation period in humans is approximately 9 months."
},

{
chapter:"7",
question:"Which membrane surrounds and protects the developing foetus?",
options:["Placenta","Amnion","Chorion","Pericardium"],
answer:1,
explanation:"The amnion forms the amniotic sac around the foetus."
},

{
chapter:"7",
question:"Amniotic fluid mainly helps to:",
options:["Digest food","Protect the foetus from shocks","Produce hormones","Carry oxygen"],
answer:1,
explanation:"Amniotic fluid cushions and protects the foetus."
},

{
chapter:"7",
question:"The umbilical cord connects the foetus with the:",
options:["Ovary","Placenta","Oviduct","Vagina"],
answer:1,
explanation:"The umbilical cord connects the foetus to the placenta."
},

{
chapter:"7",
question:"Which contraceptive method is considered permanent?",
options:["Condom","Copper-T","Vasectomy","Oral pills"],
answer:2,
explanation:"Vasectomy is a permanent surgical method for males."
},

{
chapter:"7",
question:"Tubectomy is performed in:",
options:["Males","Females","Both","Children"],
answer:1,
explanation:"Tubectomy is the permanent contraceptive surgery for females."
},

{
chapter:"7",
question:"Vasectomy involves cutting and tying the:",
options:["Fallopian tubes","Urethra","Vas deferens","Ureter"],
answer:2,
explanation:"The vas deferens is cut to prevent sperm transport."
},

{
chapter:"7",
question:"Which contraceptive method prevents fertilisation by blocking sperm entry?",
options:["Copper-T","Condom","Tubectomy","Hormonal injection"],
answer:1,
explanation:"Condom acts as a physical barrier."
},

{
chapter:"7",
question:"Which of the following is NOT a sexually transmitted disease?",
options:["AIDS","Syphilis","Gonorrhoea","Malaria"],
answer:3,
explanation:"Malaria is spread by mosquitoes, not through sexual contact."
},

{
chapter:"7",
question:"Which virus causes AIDS?",
options:["HBV","HIV","HPV","H1N1"],
answer:1,
explanation:"Human Immunodeficiency Virus (HIV) causes AIDS."
},

{
chapter:"7",
question:"Adolescence is the period between:",
options:["Childhood and old age","Childhood and adulthood","Birth and infancy","Adulthood and old age"],
answer:1,
explanation:"Adolescence is the transition from childhood to adulthood."
},

{
chapter:"7",
question:"Secondary sexual characters appear during:",
options:["Infancy","Childhood","Puberty","Old age"],
answer:2,
explanation:"Secondary sexual characteristics develop during puberty."
},

{
chapter:"7",
question:"The reproductive age in females begins with:",
options:["Fertilisation","Menstruation","Pregnancy","Delivery"],
answer:1,
explanation:"Menstruation marks the beginning of the reproductive phase."
},

{
chapter:"7",
question:"The main purpose of contraception is:",
options:["Increase population","Prevent unwanted pregnancy","Treat infections","Improve digestion"],
answer:1,
explanation:"Contraceptives help in family planning and population control."
},

{
chapter:"7",
question:"Which reproductive process creates greater genetic variation?",
options:["Binary fission","Budding","Sexual reproduction","Vegetative propagation"],
answer:2,
explanation:"Sexual reproduction mixes genetic material from two parents, producing variation."
},

{
chapter:"7",
question:"The first menstrual flow in females is called:",
options:["Menopause","Menarche","Ovulation","Implantation"],
answer:1,
explanation:"The first menstrual cycle is called menarche."
},

{
chapter:"7",
question:"Permanent stoppage of menstruation is called:",
options:["Menarche","Fertilisation","Menopause","Ovulation"],
answer:2,
explanation:"Menopause marks the end of the reproductive phase in females."
},

{
chapter:"7",
question:"The male hormone testosterone is responsible for:",
options:["Blood clotting","Secondary sexual characters","Digestion","Respiration"],
answer:1,
explanation:"Testosterone develops male secondary sexual characteristics."
},

{
chapter:"7",
question:"The female hormone mainly responsible for development of secondary sexual characters is:",
options:["Insulin","Oestrogen","Adrenaline","Thyroxine"],
answer:1,
explanation:"Oestrogen is responsible for female secondary sexual characteristics."
},

{
chapter:"7",
question:"Which of the following is NOT a secondary sexual character in males?",
options:["Growth of beard","Deepening of voice","Broad shoulders","Menstruation"],
answer:3,
explanation:"Menstruation occurs only in females."
},

{
chapter:"7",
question:"Which of the following is NOT a secondary sexual character in females?",
options:["Breast development","Broad hips","Growth of facial beard","Growth of pubic hair"],
answer:2,
explanation:"Facial beard is not a normal female secondary sexual character."
},

{
chapter:"7",
question:"The reproductive cells are also known as:",
options:["Spores","Gametes","Embryos","Zygotes"],
answer:1,
explanation:"Gametes are reproductive cells."
},

{
chapter:"7",
question:"The chromosome number in human gametes is:",
options:["23","46","44","22"],
answer:0,
explanation:"Human gametes contain 23 chromosomes."
},

{
chapter:"7",
question:"The chromosome number in a human zygote is:",
options:["23","46","69","92"],
answer:1,
explanation:"The zygote has 46 chromosomes after fertilisation."
},

{
chapter:"7",
question:"Which process restores the diploid chromosome number?",
options:["Pollination","Fertilisation","Ovulation","Budding"],
answer:1,
explanation:"Fusion of gametes restores the diploid number."
},

{
chapter:"7",
question:"Which of the following is an advantage of vegetative propagation?",
options:["Produces variation","Fast multiplication of plants","Needs pollination","Needs seeds"],
answer:1,
explanation:"Vegetative propagation produces plants rapidly."
},

{
chapter:"7",
question:"Which of the following is a disadvantage of asexual reproduction?",
options:["Produces variation","Slow process","No genetic variation","Requires two parents"],
answer:2,
explanation:"Asexual reproduction produces genetically identical offspring."
},

{
chapter:"7",
question:"Seeds produced by sexual reproduction help in:",
options:["Only nutrition","Dispersal and variation","Respiration","Excretion"],
answer:1,
explanation:"Seeds help in dispersal and create genetic variation."
},

{
chapter:"7",
question:"Which method is commonly used for artificial vegetative propagation?",
options:["Binary fission","Layering","Pollination","Fertilisation"],
answer:1,
explanation:"Layering is an artificial vegetative propagation technique."
},

{
chapter:"7",
question:"Grafting is commonly used in:",
options:["Mango","Amoeba","Hydra","Yeast"],
answer:0,
explanation:"Grafting is widely used in mango and citrus plants."
},

{
chapter:"7",
question:"Which plant is commonly propagated through leaf buds?",
options:["Potato","Bryophyllum","Rose","Sugarcane"],
answer:1,
explanation:"Bryophyllum produces new plants from leaf buds."
},

{
chapter:"7",
question:"Sexually transmitted infections mainly spread through:",
options:["Contaminated food","Mosquito bites","Unsafe sexual contact","Air"],
answer:2,
explanation:"STIs mainly spread through unprotected sexual contact."
},

{
chapter:"7",
question:"Responsible sexual behaviour helps in:",
options:["Increasing disease spread","Preventing STIs and unwanted pregnancy","Reducing immunity","Stopping puberty"],
answer:1,
explanation:"Safe practices help prevent STIs and unwanted pregnancies."
},

{
chapter:"7",
question:"The main purpose of reproduction is:",
options:["Increase body size","Continuation of species","Digestion","Movement"],
answer:1,
explanation:"Reproduction ensures the survival of species."
},

{
chapter:"7",
question:"Which chapter of Class 10 Science explains asexual reproduction, sexual reproduction, pollination, fertilisation and contraception?",
options:["Life Processes","Control and Coordination","How do Organisms Reproduce?","Heredity"],
answer:2,
explanation:"These topics are covered in Chapter 7: How do Organisms Reproduce?"
},

{
chapter:"8",
question:"Heredity is the transmission of:",
options:["Diseases","Traits from parents to offspring","Energy","Food"],
answer:1,
explanation:"Heredity is the passing of traits from parents to offspring."
},

{
chapter:"8",
question:"Variations are important because they:",
options:["Reduce survival","Help in evolution and adaptation","Stop reproduction","Prevent heredity"],
answer:1,
explanation:"Variations increase the chances of survival in changing environments."
},

{
chapter:"8",
question:"The father of Genetics is:",
options:["Charles Darwin","Gregor Mendel","Lamarck","Watson"],
answer:1,
explanation:"Gregor Johann Mendel is known as the Father of Genetics."
},

{
chapter:"8",
question:"Mendel conducted his experiments on:",
options:["Rose plant","Pea plant","Sunflower","Maize"],
answer:1,
explanation:"Mendel performed experiments on garden pea plants."
},

{
chapter:"8",
question:"The characteristics passed from parents to offspring are called:",
options:["Genes","Traits","Chromosomes","Alleles"],
answer:1,
explanation:"Traits are inherited characteristics."
},

{
chapter:"8",
question:"The basic unit of heredity is:",
options:["Cell","Gene","Chromosome","DNA"],
answer:1,
explanation:"Genes are the functional units of heredity."
},

{
chapter:"8",
question:"Genes are located on:",
options:["DNA","Chromosomes","Ribosomes","Mitochondria"],
answer:1,
explanation:"Genes are present on chromosomes."
},

{
chapter:"8",
question:"The thread-like structures present in the nucleus are called:",
options:["Genes","Chromosomes","Alleles","Gametes"],
answer:1,
explanation:"Chromosomes carry genetic information."
},

{
chapter:"8",
question:"The full set of genetic material in an organism is called:",
options:["Trait","Genome","Gene","Allele"],
answer:1,
explanation:"The complete genetic material is called the genome."
},

{
chapter:"8",
question:"Humans have _____ pairs of chromosomes.",
options:["22","23","44","46"],
answer:1,
explanation:"Humans have 23 pairs (46 chromosomes)."
},

{
chapter:"8",
question:"The chromosome pair responsible for determining sex is:",
options:["Autosomes","Sex chromosomes","Genes","Alleles"],
answer:1,
explanation:"Sex chromosomes determine the sex of an individual."
},

{
chapter:"8",
question:"The female chromosome combination is:",
options:["XY","XX","YY","XO"],
answer:1,
explanation:"Females have XX chromosomes."
},

{
chapter:"8",
question:"The male chromosome combination is:",
options:["XX","XY","YY","XO"],
answer:1,
explanation:"Males have XY chromosomes."
},

{
chapter:"8",
question:"Which parent determines the sex of the child?",
options:["Mother","Father","Both equally","Neither"],
answer:1,
explanation:"The father contributes either X or Y chromosome."
},

{
chapter:"8",
question:"A dominant trait is one which:",
options:["Appears only in homozygous condition","Expresses itself even in heterozygous condition","Never appears","Is weaker than recessive"],
answer:1,
explanation:"Dominant traits are expressed even when only one allele is present."
},

{
chapter:"8",
question:"A recessive trait is expressed only when:",
options:["One dominant allele is present","Both alleles are recessive","Only one allele is present","No genes are present"],
answer:1,
explanation:"Recessive traits appear only in homozygous condition."
},

{
chapter:"8",
question:"Mendel's law of segregation states that:",
options:["Genes mix together","Alleles separate during gamete formation","Traits disappear","Genes are destroyed"],
answer:1,
explanation:"Alleles separate during the formation of gametes."
},

{
chapter:"8",
question:"The offspring produced from crossing two pure tall pea plants are:",
options:["All dwarf","All tall","Half tall","Half dwarf"],
answer:1,
explanation:"TT × TT produces all tall offspring."
},

{
chapter:"8",
question:"In Mendel's experiment, tallness in pea plants is:",
options:["Recessive","Dominant","Neither","Incomplete"],
answer:1,
explanation:"Tallness is dominant over dwarfness."
},

{
chapter:"8",
question:"Dwarfness in pea plants is a:",
options:["Dominant trait","Recessive trait","Sex-linked trait","Mutation"],
answer:1,
explanation:"Dwarfness is recessive to tallness."
},

{
chapter:"8",
question:"The physical appearance of an organism is called:",
options:["Genotype","Phenotype","Allele","Genome"],
answer:1,
explanation:"Phenotype refers to the observable characteristics of an organism."
},

{
chapter:"8",
question:"The genetic makeup of an organism is called:",
options:["Phenotype","Genotype","Trait","Chromosome"],
answer:1,
explanation:"Genotype is the genetic constitution of an organism."
},

{
chapter:"8",
question:"An alternative form of a gene is called:",
options:["Chromosome","Allele","Trait","Genome"],
answer:1,
explanation:"Different forms of the same gene are called alleles."
},

{
chapter:"8",
question:"A plant with genotype 'TT' is:",
options:["Pure tall","Hybrid tall","Pure dwarf","Hybrid dwarf"],
answer:0,
explanation:"TT represents a pure (homozygous) tall plant."
},

{
chapter:"8",
question:"A plant with genotype 'Tt' is:",
options:["Pure tall","Hybrid tall","Pure dwarf","Hybrid dwarf"],
answer:1,
explanation:"Tt is a heterozygous (hybrid) tall plant."
},

{
chapter:"8",
question:"A plant with genotype 'tt' is:",
options:["Pure tall","Hybrid tall","Pure dwarf","Hybrid dwarf"],
answer:2,
explanation:"tt is a homozygous recessive (pure dwarf) plant."
},

{
chapter:"8",
question:"Crossing two heterozygous tall plants (Tt × Tt) gives a phenotypic ratio of:",
options:["1:1","3:1","1:2:1","2:1"],
answer:1,
explanation:"The phenotypic ratio in a monohybrid cross is 3 tall : 1 dwarf."
},

{
chapter:"8",
question:"The genotypic ratio in a monohybrid cross (Tt × Tt) is:",
options:["3:1","1:2:1","1:1","2:1"],
answer:1,
explanation:"The genotypic ratio is TT : Tt : tt = 1 : 2 : 1."
},

{
chapter:"8",
question:"Which law explains that one trait does not influence the inheritance of another trait?",
options:["Law of Dominance","Law of Segregation","Law of Independent Assortment","Law of Variation"],
answer:2,
explanation:"Mendel's Law of Independent Assortment states that different traits assort independently."
},

{
chapter:"8",
question:"A cross involving two pairs of contrasting characters is called:",
options:["Monohybrid cross","Dihybrid cross","Test cross","Back cross"],
answer:1,
explanation:"A dihybrid cross involves two traits."
},

{
chapter:"8",
question:"The phenotypic ratio of a dihybrid cross is:",
options:["3:1","1:2:1","9:3:3:1","1:1"],
answer:2,
explanation:"The classic Mendelian dihybrid ratio is 9:3:3:1."
},

{
chapter:"8",
question:"The sex chromosomes in females are:",
options:["XY","XX","YY","XO"],
answer:1,
explanation:"Females possess two X chromosomes."
},

{
chapter:"8",
question:"The sex chromosomes in males are:",
options:["XX","XY","YY","XO"],
answer:1,
explanation:"Males possess one X and one Y chromosome."
},

{
chapter:"8",
question:"The chromosome contributed by the mother is always:",
options:["X","Y","Either X or Y","None"],
answer:0,
explanation:"Every ovum carries only an X chromosome."
},

{
chapter:"8",
question:"A male child is born when the sperm carries:",
options:["Only X chromosome","Y chromosome","Both X and Y","No chromosome"],
answer:1,
explanation:"An X egg fertilized by a Y sperm produces an XY (male) child."
},

{
chapter:"8",
question:"A female child is born when the sperm carries:",
options:["Y chromosome","X chromosome","No chromosome","Both X and Y"],
answer:1,
explanation:"An X egg fertilized by an X sperm produces an XX (female) child."
},

{
chapter:"8",
question:"The chance of having a male child is:",
options:["25%","50%","75%","100%"],
answer:1,
explanation:"The probability of a male or female child is approximately 50%."
},

{
chapter:"8",
question:"Which of the following is NOT inherited?",
options:["Eye colour","Blood group","Fingerprints","Pierced ears"],
answer:3,
explanation:"Pierced ears are an acquired characteristic, not an inherited one."
},

{
chapter:"8",
question:"Which scientist explained evolution by natural selection?",
options:["Gregor Mendel","Charles Darwin","Lamarck","Watson"],
answer:1,
explanation:"Charles Darwin proposed the theory of natural selection."
},

{
chapter:"8",
question:"The accumulation of useful variations over generations leads to:",
options:["Respiration","Evolution","Digestion","Fertilisation"],
answer:1,
explanation:"Evolution occurs through the accumulation of inherited variations."
},

{
chapter:"8",
question:"Variations arise mainly due to:",
options:["Digestion","Errors during DNA copying","Respiration","Excretion"],
answer:1,
explanation:"Small errors during DNA copying produce variations."
},

{
chapter:"8",
question:"Which of the following is an inherited trait?",
options:["Scars","Eye colour","Pierced ears","Muscle size from exercise"],
answer:1,
explanation:"Eye colour is inherited genetically."
},

{
chapter:"8",
question:"Which of the following is an acquired trait?",
options:["Blood group","Hair colour","Pierced ears","Tongue rolling"],
answer:2,
explanation:"Pierced ears are acquired during life and are not inherited."
},

{
chapter:"8",
question:"The process by which new species arise is called:",
options:["Digestion","Speciation","Respiration","Fertilisation"],
answer:1,
explanation:"Speciation is the formation of new species."
},

{
chapter:"8",
question:"Evolution is mainly driven by:",
options:["Natural selection","Photosynthesis","Respiration","Transpiration"],
answer:0,
explanation:"Natural selection is the major driving force of evolution."
},

{
chapter:"8",
question:"According to Darwin, organisms with favourable variations are more likely to:",
options:["Become extinct","Survive and reproduce","Stop reproducing","Lose all traits"],
answer:1,
explanation:"Favourable variations improve survival and reproduction."
},

{
chapter:"8",
question:"Which scientist proposed the theory of inheritance of acquired characters?",
options:["Darwin","Mendel","Lamarck","Morgan"],
answer:2,
explanation:"Jean-Baptiste Lamarck proposed inheritance of acquired characters."
},

{
chapter:"8",
question:"According to modern genetics, acquired traits are:",
options:["Inherited","Not inherited","Always dominant","Always recessive"],
answer:1,
explanation:"Acquired traits do not affect DNA and are not inherited."
},

{
chapter:"8",
question:"The information for making proteins is present in:",
options:["Blood","DNA","RNA only","Cell membrane"],
answer:1,
explanation:"DNA contains the genetic instructions for protein synthesis."
},

{
chapter:"8",
question:"Genes are made up of:",
options:["Proteins","DNA","Lipids","Carbohydrates"],
answer:1,
explanation:"Genes are segments of DNA."
},

{
chapter:"8",
question:"Which molecule carries hereditary information?",
options:["Protein","DNA","Starch","Glucose"],
answer:1,
explanation:"DNA is the hereditary material."
},

{
chapter:"8",
question:"The process of copying DNA before cell division is called:",
options:["DNA replication","Transpiration","Fertilisation","Pollination"],
answer:0,
explanation:"DNA replication ensures each daughter cell receives genetic material."
},

{
chapter:"8",
question:"Variation produced during sexual reproduction is due to:",
options:["Only mutation","Mixing of parental genes","Only nutrition","Respiration"],
answer:1,
explanation:"Sexual reproduction combines genes from both parents."
},

{
chapter:"8",
question:"Which pair represents homologous chromosomes?",
options:["One from mother and one from father","Two X chromosomes only","Two Y chromosomes only","Random chromosomes"],
answer:0,
explanation:"Homologous chromosomes are inherited from each parent."
},

{
chapter:"8",
question:"The chromosome number in human body cells is:",
options:["23","46","44","92"],
answer:1,
explanation:"Human body cells contain 46 chromosomes."
},

{
chapter:"8",
question:"The chromosome number in human gametes is:",
options:["46","23","22","44"],
answer:1,
explanation:"Gametes contain half the chromosome number."
},

{
chapter:"8",
question:"Which type of reproduction produces maximum variation?",
options:["Binary fission","Budding","Sexual reproduction","Vegetative propagation"],
answer:2,
explanation:"Sexual reproduction produces greater genetic variation."
},

{
chapter:"8",
question:"The survival of the fittest is associated with:",
options:["Lamarck","Darwin","Mendel","Pasteur"],
answer:1,
explanation:"Darwin explained natural selection as survival of the fittest."
},

{
chapter:"8",
question:"Evolution does NOT occur because of:",
options:["Genetic variation","Natural selection","Acquired characters","Mutation"],
answer:2,
explanation:"Acquired characters are not inherited."
},

{
chapter:"8",
question:"The chapter 'Heredity' mainly explains:",
options:["Electricity","Inheritance, variation and evolution","Life processes","Carbon compounds"],
answer:1,
explanation:"Chapter 8 deals with heredity, variation and evolution."
},

{
chapter:"8",
question:"Which of the following provides evidence for evolution?",
options:["Fossils","Electric current","Photosynthesis","Digestion"],
answer:0,
explanation:"Fossils provide important evidence about the evolution of organisms."
},

{
chapter:"8",
question:"Fossils are:",
options:["Living organisms","Preserved remains or impressions of ancient organisms","Seeds","Minerals only"],
answer:1,
explanation:"Fossils are the preserved remains or traces of organisms from the past."
},

{
chapter:"8",
question:"Older fossils are generally found in:",
options:["Upper rock layers","Lower rock layers","Trees","Water bodies"],
answer:1,
explanation:"Older rock layers contain older fossils."
},

{
chapter:"8",
question:"Which organs have the same basic structure but perform different functions?",
options:["Analogous organs","Homologous organs","Vestigial organs","Sense organs"],
answer:1,
explanation:"Homologous organs indicate common ancestry."
},

{
chapter:"8",
question:"The forelimbs of humans and whales are examples of:",
options:["Analogous organs","Homologous organs","Vestigial organs","Artificial organs"],
answer:1,
explanation:"They have the same basic structure but different functions."
},

{
chapter:"8",
question:"Which organs perform the same function but have different origins?",
options:["Homologous organs","Analogous organs","Vestigial organs","Reproductive organs"],
answer:1,
explanation:"Analogous organs have similar functions but different evolutionary origins."
},

{
chapter:"8",
question:"The wings of birds and insects are examples of:",
options:["Homologous organs","Analogous organs","Vestigial organs","Sense organs"],
answer:1,
explanation:"Both are used for flying but have different structures and origins."
},

{
chapter:"8",
question:"The appendix in humans is considered a:",
options:["Homologous organ","Vestigial organ","Analogous organ","Sense organ"],
answer:1,
explanation:"The appendix is a vestigial organ with little or no function."
},

{
chapter:"8",
question:"The coccyx (tail bone) in humans is an example of:",
options:["Analogous organ","Vestigial organ","Homologous organ","Digestive organ"],
answer:1,
explanation:"The coccyx is a vestigial structure inherited from ancestors."
},

{
chapter:"8",
question:"Which process leads to the formation of new species?",
options:["Speciation","Photosynthesis","Respiration","Digestion"],
answer:0,
explanation:"Speciation is the process through which new species arise."
},

{
chapter:"8",
question:"Isolation of populations over long periods may result in:",
options:["Digestion","Speciation","Respiration","Pollination"],
answer:1,
explanation:"Geographical isolation can lead to the formation of new species."
},

{
chapter:"8",
question:"Natural selection acts on:",
options:["Inherited variations","Acquired traits","Food habits","Exercise"],
answer:0,
explanation:"Natural selection favors inherited variations that improve survival."
},

{
chapter:"8",
question:"Which scientist proposed the theory of natural selection?",
options:["Gregor Mendel","Charles Darwin","Lamarck","Newton"],
answer:1,
explanation:"Charles Darwin proposed the theory of natural selection."
},

{
chapter:"8",
question:"Evolution means:",
options:["Sudden creation of species","Gradual change in living organisms over generations","Cell division","Only mutation"],
answer:1,
explanation:"Evolution is the gradual change in populations over time."
},

{
chapter:"8",
question:"The strongest evidence for common ancestry comes from:",
options:["Homologous organs","Analogous organs","Nutrition","Respiration"],
answer:0,
explanation:"Homologous organs indicate descent from a common ancestor."
},

{
chapter:"8",
question:"Which of the following is NOT evidence of evolution?",
options:["Fossils","DNA similarities","Homologous organs","Blood circulation"],
answer:3,
explanation:"Blood circulation is a life process, not evidence of evolution."
},

{
chapter:"8",
question:"Human evolution has occurred over:",
options:["A few years","Millions of years","Hundreds of years","One generation"],
answer:1,
explanation:"Human evolution took place over millions of years."
},

{
chapter:"8",
question:"Which factor increases the chances of survival in changing environments?",
options:["No variation","Genetic variation","No reproduction","No mutation"],
answer:1,
explanation:"Variation helps organisms adapt to changing conditions."
},

{
chapter:"8",
question:"The study of fossils is called:",
options:["Ecology","Palaeontology","Genetics","Taxonomy"],
answer:1,
explanation:"Palaeontology is the scientific study of fossils."
},

{
chapter:"8",
question:"The chapter 'Heredity' includes:",
options:["Genetics, evolution and inheritance","Electricity and magnetism","Acids and bases","Carbon compounds"],
answer:0,
explanation:"Chapter 8 covers heredity, inheritance, variation and evolution."
},

{
chapter:"8",
question:"Evolution is best described as:",
options:["Change in a single organism","Gradual change in populations over generations","Sudden appearance of new species","Growth of an organism"],
answer:1,
explanation:"Evolution is the gradual change in populations over many generations."
},

{
chapter:"8",
question:"Which of the following is inherited?",
options:["Eye colour","Burn marks","Pierced ears","Muscles developed by exercise"],
answer:0,
explanation:"Eye colour is controlled by genes and is inherited."
},

{
chapter:"8",
question:"The human appendix is considered vestigial because it:",
options:["Has become enlarged","Has lost most of its original function","Produces hormones","Determines sex"],
answer:1,
explanation:"The appendix has little or no important function in humans."
},

{
chapter:"8",
question:"The study of inheritance is known as:",
options:["Ecology","Genetics","Taxonomy","Anatomy"],
answer:1,
explanation:"Genetics is the branch of biology dealing with heredity."
},

{
chapter:"8",
question:"The branch of biology that studies evolution is:",
options:["Physiology","Evolutionary biology","Cytology","Embryology"],
answer:1,
explanation:"Evolutionary biology studies the origin and change of species."
},

{
chapter:"8",
question:"Which of the following is NOT a source of variation?",
options:["DNA copying errors","Sexual reproduction","Mutation","Photosynthesis"],
answer:3,
explanation:"Photosynthesis does not create genetic variation."
},

{
chapter:"8",
question:"Which scientist gave the theory of use and disuse?",
options:["Darwin","Mendel","Lamarck","Watson"],
answer:2,
explanation:"Lamarck proposed the theory of use and disuse."
},

{
chapter:"8",
question:"According to Darwin, organisms survive because of:",
options:["Inheritance of acquired traits","Natural selection","Artificial selection","Mutation only"],
answer:1,
explanation:"Natural selection favours organisms with useful inherited variations."
},

{
chapter:"8",
question:"The gradual accumulation of variations over generations results in:",
options:["Respiration","Evolution","Nutrition","Excretion"],
answer:1,
explanation:"Evolution occurs due to the accumulation of inherited variations."
},

{
chapter:"8",
question:"Which chromosome is present only in males?",
options:["X chromosome","Y chromosome","Autosome","Chromatid"],
answer:1,
explanation:"Only males possess the Y chromosome."
},

{
chapter:"8",
question:"A female produces gametes containing:",
options:["Only X chromosome","Only Y chromosome","Both X and Y chromosomes","No chromosomes"],
answer:0,
explanation:"All human ova carry only the X chromosome."
},

{
chapter:"8",
question:"A male produces sperms containing:",
options:["Only X chromosome","Only Y chromosome","Either X or Y chromosome","No chromosomes"],
answer:2,
explanation:"Half the sperms carry X and half carry Y chromosomes."
},

{
chapter:"8",
question:"The probability of a female child is:",
options:["25%","50%","75%","100%"],
answer:1,
explanation:"The probability of having a girl is approximately 50%."
},

{
chapter:"8",
question:"Which parent contributes the Y chromosome to a son?",
options:["Mother","Father","Both","Neither"],
answer:1,
explanation:"Only the father can contribute the Y chromosome."
},

{
chapter:"8",
question:"Homologous organs are evidence of:",
options:["Common ancestry","Different ancestry","Artificial selection","Mutation only"],
answer:0,
explanation:"Homologous organs indicate evolution from a common ancestor."
},

{
chapter:"8",
question:"Analogous organs are evidence of:",
options:["Divergent evolution","Convergent evolution","No evolution","Inheritance only"],
answer:1,
explanation:"Analogous organs arise due to convergent evolution."
},

{
chapter:"8",
question:"Which of the following is an example of homologous organs?",
options:["Wings of bird and insect","Human arm and whale flipper","Bird wing and butterfly wing","Fish fin and insect wing"],
answer:1,
explanation:"Human arm and whale flipper have the same basic structure but different functions."
},

{
chapter:"8",
question:"Which of the following is an example of analogous organs?",
options:["Human arm and bat wing","Bird wing and butterfly wing","Whale flipper and human arm","Forelimbs of horse and human"],
answer:1,
explanation:"Bird and butterfly wings perform the same function but have different origins."
},

{
chapter:"8",
question:"The ultimate source of all inherited variations is:",
options:["Food","DNA","Water","Sunlight"],
answer:1,
explanation:"DNA carries hereditary information, and changes in DNA produce inherited variations."
},

{
chapter:"8",
question:"Chapter 8 'Heredity' mainly focuses on:",
options:["Inheritance, variation and evolution","Electricity and Magnetism","Chemical reactions","Life processes"],
answer:0,
explanation:"The chapter explains heredity, genetics, variation and evolution."
},

{
chapter:"9",
question:"Light is a form of:",
options:["Matter","Energy","Force","Mass"],
answer:1,
explanation:"Light is a form of energy."
},

{
chapter:"9",
question:"The SI unit of focal length is:",
options:["Centimetre","Metre","Millimetre","Inch"],
answer:1,
explanation:"The SI unit of focal length is metre."
},

{
chapter:"9",
question:"The point where parallel rays meet after reflection is called:",
options:["Pole","Focus","Centre of curvature","Principal axis"],
answer:1,
explanation:"Parallel rays converge at the principal focus."
},

{
chapter:"9",
question:"The centre of the reflecting surface of a spherical mirror is called:",
options:["Focus","Pole","Radius","Vertex"],
answer:1,
explanation:"The midpoint of the mirror is called the pole."
},

{
chapter:"9",
question:"The line joining the pole and centre of curvature is called:",
options:["Radius","Principal axis","Focal length","Normal"],
answer:1,
explanation:"It is called the principal axis."
},

{
chapter:"9",
question:"Which mirror always forms a virtual and erect image?",
options:["Concave mirror","Convex mirror","Plane mirror","Both B and C"],
answer:3,
explanation:"Both plane and convex mirrors always form virtual, erect images."
},

{
chapter:"9",
question:"Which mirror is used as a rear-view mirror in vehicles?",
options:["Plane mirror","Concave mirror","Convex mirror","Parabolic mirror"],
answer:2,
explanation:"Convex mirrors provide a wider field of view."
},

{
chapter:"9",
question:"The focal length of a plane mirror is:",
options:["Zero","Infinite","Equal to radius","1 m"],
answer:1,
explanation:"A plane mirror has an infinite radius of curvature and focal length."
},

{
chapter:"9",
question:"The relationship between radius of curvature (R) and focal length (f) is:",
options:["R=f","R=2f","R=f/2","R=4f"],
answer:1,
explanation:"Radius of curvature is twice the focal length."
},

{
chapter:"9",
question:"Which mirror can produce a real image?",
options:["Plane mirror","Convex mirror","Concave mirror","None"],
answer:2,
explanation:"Only a concave mirror can produce a real image."
},

{
chapter:"9",
question:"The image formed by a convex mirror is always:",
options:["Real and inverted","Virtual, erect and diminished","Virtual and magnified","Real and erect"],
answer:1,
explanation:"Convex mirrors always form virtual, erect and diminished images."
},

{
chapter:"9",
question:"The image formed by a plane mirror is:",
options:["Virtual and erect","Real and inverted","Real and erect","Virtual and inverted"],
answer:0,
explanation:"Plane mirrors always form virtual and erect images."
},

{
chapter:"9",
question:"The angle of incidence is equal to:",
options:["Angle of deviation","Angle of reflection","Angle of refraction","90°"],
answer:1,
explanation:"According to the law of reflection, angle of incidence equals angle of reflection."
},

{
chapter:"9",
question:"The laws of reflection apply to:",
options:["Plane mirrors only","Concave mirrors only","Convex mirrors only","All reflecting surfaces"],
answer:3,
explanation:"The laws of reflection are valid for all reflecting surfaces."
},

{
chapter:"9",
question:"The image formed by a concave mirror when the object is beyond C is:",
options:["Virtual and erect","Real, inverted and diminished","Real and magnified","Virtual and magnified"],
answer:1,
explanation:"Beyond C, the image forms between F and C."
},

{
chapter:"9",
question:"The image formed by a concave mirror when the object is at C is:",
options:["Virtual","Real, inverted and same size","Magnified","Highly diminished"],
answer:1,
explanation:"At C, the image is formed at C, same size."
},

{
chapter:"9",
question:"The image formed by a concave mirror when the object is between C and F is:",
options:["Real, inverted and magnified","Virtual and erect","Same size","Diminished"],
answer:0,
explanation:"The image forms beyond C and is magnified."
},

{
chapter:"9",
question:"When an object is placed at the focus of a concave mirror, the reflected rays become:",
options:["Meet at C","Parallel","Meet at F","Divergent"],
answer:1,
explanation:"Image is formed at infinity."
},

{
chapter:"9",
question:"A dentist uses a:",
options:["Convex mirror","Concave mirror","Plane mirror","None"],
answer:1,
explanation:"Concave mirrors provide enlarged images."
},

{
chapter:"9",
question:"Shaving mirrors are generally:",
options:["Plane","Convex","Concave","Parabolic"],
answer:2,
explanation:"Concave mirrors produce magnified upright images when the object is within the focal length."
},

{
chapter:"9",
question:"When an object is placed between the focus and pole of a concave mirror, the image formed is:",
options:["Real and inverted","Virtual, erect and magnified","Real and diminished","Virtual and diminished"],
answer:1,
explanation:"A concave mirror forms a virtual, erect and magnified image when the object is between F and P."
},

{
chapter:"9",
question:"The mirror formula is:",
options:["1/f = 1/v + 1/u","1/f = 1/u - 1/v","f = u + v","uv = f"],
answer:0,
explanation:"The mirror formula is 1/f = 1/v + 1/u."
},

{
chapter:"9",
question:"Magnification produced by a mirror is given by:",
options:["m = u/v","m = -v/u","m = f/u","m = v/f"],
answer:1,
explanation:"Magnification for mirrors is m = -v/u."
},

{
chapter:"9",
question:"If magnification is positive, the image is:",
options:["Real","Inverted","Virtual and erect","At infinity"],
answer:2,
explanation:"Positive magnification indicates a virtual and erect image."
},

{
chapter:"9",
question:"If magnification is negative, the image is:",
options:["Virtual","Erect","Real and inverted","Magnified only"],
answer:2,
explanation:"Negative magnification indicates a real and inverted image."
},

{
chapter:"9",
question:"The unit of power of a lens is:",
options:["Dioptre","Metre","Joule","Watt"],
answer:0,
explanation:"The SI unit of power is dioptre (D)."
},

{
chapter:"9",
question:"Power of a lens is equal to:",
options:["1/f (in metre)","f × 100","f²","100/f"],
answer:0,
explanation:"Power P = 1/f, where f is in metres."
},

{
chapter:"9",
question:"The SI unit of power is:",
options:["Watt","Dioptre","Newton","Pascal"],
answer:1,
explanation:"Lens power is measured in dioptres."
},

{
chapter:"9",
question:"Which lens is thicker at the centre?",
options:["Concave lens","Convex lens","Plane lens","Cylindrical lens"],
answer:1,
explanation:"A convex lens is thicker at the centre."
},

{
chapter:"9",
question:"Which lens is thinner at the centre?",
options:["Convex lens","Concave lens","Plane lens","Bifocal lens"],
answer:1,
explanation:"A concave lens is thinner at the centre."
},

{
chapter:"9",
question:"A convex lens is also known as:",
options:["Diverging lens","Converging lens","Plane lens","Reflecting lens"],
answer:1,
explanation:"A convex lens converges parallel rays."
},

{
chapter:"9",
question:"A concave lens is also known as:",
options:["Converging lens","Diverging lens","Magnifying lens","Reflecting lens"],
answer:1,
explanation:"A concave lens diverges parallel rays."
},

{
chapter:"9",
question:"The principal focus of a convex lens is:",
options:["Virtual","Real","Imaginary","At the pole"],
answer:1,
explanation:"Parallel rays converge at a real focus."
},

{
chapter:"9",
question:"The principal focus of a concave lens is:",
options:["Real","Virtual","Both","None"],
answer:1,
explanation:"Parallel rays appear to diverge from a virtual focus."
},

{
chapter:"9",
question:"The lens formula is:",
options:["1/f = 1/v - 1/u","1/f = 1/v + 1/u","1/f = u+v","1/f = uv"],
answer:0,
explanation:"The lens formula is 1/f = 1/v - 1/u."
},

{
chapter:"9",
question:"Magnification produced by a lens is:",
options:["m = -v/u","m = v/u","m = u/v","m = f/u"],
answer:1,
explanation:"For lenses, magnification m = v/u."
},

{
chapter:"9",
question:"A convex lens can produce:",
options:["Only virtual images","Only real images","Both real and virtual images","No image"],
answer:2,
explanation:"Depending on object position, it can produce both."
},

{
chapter:"9",
question:"A concave lens always produces:",
options:["Real image","Virtual, erect and diminished image","Real and magnified image","Virtual and magnified image"],
answer:1,
explanation:"A concave lens always forms a virtual, erect and diminished image."
},

{
chapter:"9",
question:"Which lens is used to correct hypermetropia?",
options:["Concave lens","Convex lens","Plane glass","Mirror"],
answer:1,
explanation:"Hypermetropia is corrected using a convex lens."
},

{
chapter:"9",
question:"Which lens is used to correct myopia?",
options:["Convex lens","Concave lens","Plane lens","Cylindrical mirror"],
answer:1,
explanation:"Myopia is corrected using a concave lens."
},

{
chapter:"9",
question:"Myopia is also known as:",
options:["Long-sightedness","Short-sightedness","Colour blindness","Astigmatism"],
answer:1,
explanation:"Myopia is the defect in which nearby objects are seen clearly but distant objects appear blurred."
},

{
chapter:"9",
question:"A person suffering from myopia cannot see:",
options:["Nearby objects","Distant objects","Bright objects","Coloured objects"],
answer:1,
explanation:"In myopia, distant objects appear blurred."
},

{
chapter:"9",
question:"Hypermetropia is also known as:",
options:["Short-sightedness","Long-sightedness","Night blindness","Colour blindness"],
answer:1,
explanation:"Hypermetropia is the inability to see nearby objects clearly."
},

{
chapter:"9",
question:"A hypermetropic person cannot see:",
options:["Nearby objects clearly","Distant objects clearly","Bright objects","Moving objects"],
answer:0,
explanation:"Hypermetropic people have difficulty seeing nearby objects."
},

{
chapter:"9",
question:"The least distance of distinct vision for a normal eye is:",
options:["10 cm","15 cm","25 cm","50 cm"],
answer:2,
explanation:"For a normal eye, the near point is 25 cm."
},

{
chapter:"9",
question:"The far point of a normal human eye is:",
options:["25 cm","50 cm","1 m","Infinity"],
answer:3,
explanation:"The far point of a normal eye is at infinity."
},

{
chapter:"9",
question:"The ability of the eye lens to change its focal length is called:",
options:["Persistence of vision","Accommodation","Refraction","Dispersion"],
answer:1,
explanation:"Accommodation allows the eye to focus on objects at different distances."
},

{
chapter:"9",
question:"The transparent front portion of the eye is called:",
options:["Retina","Cornea","Pupil","Iris"],
answer:1,
explanation:"The cornea is the transparent outer covering of the eye."
},

{
chapter:"9",
question:"The coloured part of the human eye is:",
options:["Cornea","Retina","Iris","Lens"],
answer:2,
explanation:"The iris controls the amount of light entering the eye."
},

{
chapter:"9",
question:"The opening at the centre of the iris is called:",
options:["Retina","Pupil","Cornea","Optic nerve"],
answer:1,
explanation:"Light enters the eye through the pupil."
},

{
chapter:"9",
question:"The image in the human eye is formed on the:",
options:["Cornea","Retina","Iris","Pupil"],
answer:1,
explanation:"The retina acts as the screen of the eye."
},

{
chapter:"9",
question:"The eye lens is:",
options:["Concave","Convex","Plane","Cylindrical"],
answer:1,
explanation:"The human eye has a convex lens."
},

{
chapter:"9",
question:"The retina contains:",
options:["Bones","Muscles","Light-sensitive cells","Blood vessels only"],
answer:2,
explanation:"The retina contains rod and cone cells."
},

{
chapter:"9",
question:"The optic nerve carries impulses from the retina to the:",
options:["Heart","Brain","Lungs","Ear"],
answer:1,
explanation:"The optic nerve transmits visual information to the brain."
},

{
chapter:"9",
question:"The ciliary muscles help in:",
options:["Changing the size of the retina","Changing the focal length of the eye lens","Changing the iris colour","Producing tears"],
answer:1,
explanation:"Ciliary muscles adjust the curvature of the eye lens."
},

{
chapter:"9",
question:"Which defect of vision is corrected using a concave lens?",
options:["Hypermetropia","Myopia","Presbyopia","Cataract"],
answer:1,
explanation:"Concave lenses diverge light rays and correct myopia."
},

{
chapter:"9",
question:"Which defect of vision is corrected using a convex lens?",
options:["Myopia","Hypermetropia","Astigmatism","Colour blindness"],
answer:1,
explanation:"Convex lenses converge light rays and correct hypermetropia."
},

{
chapter:"9",
question:"The image formed on the retina is:",
options:["Virtual and erect","Real and inverted","Virtual and inverted","Real and erect"],
answer:1,
explanation:"The eye forms a real, inverted image on the retina."
},

{
chapter:"9",
question:"The brain interprets the retinal image as:",
options:["Inverted","Erect","Virtual","Magnified"],
answer:1,
explanation:"Although the retinal image is inverted, the brain perceives it as erect."
},

{
chapter:"9",
question:"Which chapter includes mirrors, lenses, mirror formula and defects of vision?",
options:["Human Eye and Colourful World","Light – Reflection and Refraction","Electricity","Life Processes"],
answer:1,
explanation:"These topics are covered in Chapter 9: Light – Reflection and Refraction."
},

{
chapter:"9",
question:"The sign convention used for mirrors and lenses is based on:",
options:["Newton's convention","Cartesian sign convention","MKS system","CGS system"],
answer:1,
explanation:"CBSE follows the Cartesian sign convention."
},

{
chapter:"9",
question:"According to the Cartesian sign convention, distances are measured from the:",
options:["Focus","Pole (mirror) or Optical Centre (lens)","Centre of curvature","Object"],
answer:1,
explanation:"All distances are measured from the pole or optical centre."
},

{
chapter:"9",
question:"For a concave mirror, the focal length is:",
options:["Positive","Negative","Zero","Infinite"],
answer:1,
explanation:"According to the sign convention, focal length of a concave mirror is negative."
},

{
chapter:"9",
question:"For a convex mirror, the focal length is:",
options:["Negative","Positive","Zero","Infinite"],
answer:1,
explanation:"The focus lies behind the mirror, so focal length is positive."
},

{
chapter:"9",
question:"The focal length of a convex lens is:",
options:["Positive","Negative","Zero","Infinite"],
answer:0,
explanation:"A convex lens has a positive focal length."
},

{
chapter:"9",
question:"The focal length of a concave lens is:",
options:["Positive","Negative","Zero","Infinite"],
answer:1,
explanation:"A concave lens has a negative focal length."
},

{
chapter:"9",
question:"The object distance (u) for a real object is generally:",
options:["Positive","Negative","Zero","Infinite"],
answer:1,
explanation:"Object distance is negative because it is measured opposite to the direction of incident light."
},

{
chapter:"9",
question:"The image distance for a real image formed by a mirror is:",
options:["Positive","Negative","Zero","Infinite"],
answer:1,
explanation:"A real image formed by a mirror lies in front of the mirror, so v is negative."
},

{
chapter:"9",
question:"The image distance for a virtual image formed by a mirror is:",
options:["Positive","Negative","Zero","Infinite"],
answer:0,
explanation:"Virtual images are formed behind the mirror, so image distance is positive."
},

{
chapter:"9",
question:"The image formed by a convex lens when the object is beyond 2F is:",
options:["Virtual and erect","Real, inverted and diminished","Virtual and magnified","Real and magnified"],
answer:1,
explanation:"The image forms between F and 2F and is diminished."
},

{
chapter:"9",
question:"When the object is at 2F of a convex lens, the image is:",
options:["At F","At 2F, same size","Virtual","Highly magnified"],
answer:1,
explanation:"Image forms at 2F with the same size."
},

{
chapter:"9",
question:"When the object lies between F and 2F of a convex lens, the image is:",
options:["Real, inverted and magnified","Virtual and erect","Diminished","No image"],
answer:0,
explanation:"Image forms beyond 2F and is magnified."
},

{
chapter:"9",
question:"When an object is placed at the focus of a convex lens, the image is formed:",
options:["At F","At 2F","At infinity","Behind the object"],
answer:2,
explanation:"The refracted rays become parallel."
},

{
chapter:"9",
question:"When an object is placed between the optical centre and focus of a convex lens, the image is:",
options:["Real and inverted","Virtual, erect and magnified","Real and diminished","No image"],
answer:1,
explanation:"A convex lens acts as a magnifying glass in this position."
},

{
chapter:"9",
question:"A magnifying glass is actually a:",
options:["Concave mirror","Convex mirror","Convex lens","Concave lens"],
answer:2,
explanation:"A convex lens is used as a simple magnifier."
},

{
chapter:"9",
question:"Which lens is commonly used in simple microscopes?",
options:["Concave lens","Convex lens","Plane glass","Convex mirror"],
answer:1,
explanation:"Simple microscopes use convex lenses."
},

{
chapter:"9",
question:"The optical centre of a thin lens is the point through which a ray passes:",
options:["After bending","Without deviation","After reflection","At 90°"],
answer:1,
explanation:"A ray passing through the optical centre emerges undeviated."
},

{
chapter:"9",
question:"A ray passing parallel to the principal axis through a convex lens passes through:",
options:["Optical centre","Principal focus","Centre of curvature","Pole"],
answer:1,
explanation:"It passes through the principal focus after refraction."
},

{
chapter:"9",
question:"A ray passing through the principal focus before reaching a convex lens emerges:",
options:["Parallel to the principal axis","Towards the optical centre","Backward","Randomly"],
answer:0,
explanation:"A ray through the focus emerges parallel to the principal axis."
},

{
chapter:"9",
question:"A ray passing through the optical centre of a convex lens:",
options:["Bends towards focus","Bends away from focus","Passes undeviated","Gets reflected"],
answer:2,
explanation:"The ray passes straight through the optical centre without deviation."
},

{
chapter:"9",
question:"The refractive index of a medium is the ratio of:",
options:["Speed of light in medium to vacuum","Speed of light in vacuum to medium","Angle of incidence to angle of refraction","Focal length to radius"],
answer:1,
explanation:"Refractive index n = Speed of light in vacuum / Speed of light in the medium."
},

{
chapter:"9",
question:"The SI unit of refractive index is:",
options:["Metre","Dioptre","No unit","Second"],
answer:2,
explanation:"Refractive index is a ratio and has no unit."
},

{
chapter:"9",
question:"When light enters a denser medium from a rarer medium, it bends:",
options:["Away from the normal","Towards the normal","Parallel to the surface","Backward"],
answer:1,
explanation:"Light bends towards the normal on entering a denser medium."
},

{
chapter:"9",
question:"When light passes from a denser medium to a rarer medium, it bends:",
options:["Towards the normal","Away from the normal","Stops completely","Does not bend"],
answer:1,
explanation:"Light bends away from the normal on entering a rarer medium."
},

{
chapter:"9",
question:"The phenomenon responsible for bending of light is:",
options:["Reflection","Dispersion","Refraction","Diffraction"],
answer:2,
explanation:"Refraction is the bending of light due to change in speed."
},

{
chapter:"9",
question:"Which of the following is NOT a law of refraction?",
options:["Incident ray, refracted ray and normal lie in one plane","sin i / sin r = constant","Angle of incidence equals angle of reflection","Snell's law"],
answer:2,
explanation:"Angle of incidence equals angle of reflection is a law of reflection."
},

{
chapter:"9",
question:"The ratio sin i / sin r is called:",
options:["Magnification","Refractive index","Power","Focal length"],
answer:1,
explanation:"According to Snell's law, sin i / sin r = refractive index."
},

{
chapter:"9",
question:"Which mirror is used in solar furnaces?",
options:["Plane mirror","Convex mirror","Concave mirror","Cylindrical mirror"],
answer:2,
explanation:"Concave mirrors concentrate sunlight at the focus."
},

{
chapter:"9",
question:"Which device commonly uses a concave mirror?",
options:["Rear-view mirror","Torch","Side mirror","Window glass"],
answer:1,
explanation:"Torch reflectors use concave mirrors to produce a parallel beam."
},

{
chapter:"9",
question:"Which mirror gives the widest field of view?",
options:["Plane mirror","Concave mirror","Convex mirror","None"],
answer:2,
explanation:"Convex mirrors provide the widest field of view."
},

{
chapter:"9",
question:"The image formed by a concave lens is always:",
options:["Real and inverted","Virtual, erect and diminished","Real and magnified","Virtual and magnified"],
answer:1,
explanation:"A concave lens always forms a virtual, erect and diminished image."
},

{
chapter:"9",
question:"The image formed by a convex mirror is always:",
options:["Real","Virtual, erect and diminished","Virtual and magnified","Real and inverted"],
answer:1,
explanation:"A convex mirror always forms a virtual, erect and diminished image."
},

{
chapter:"9",
question:"The image formed by a plane mirror is always:",
options:["Real and inverted","Virtual and erect","Real and erect","Magnified"],
answer:1,
explanation:"A plane mirror always forms a virtual and erect image."
},

{
chapter:"9",
question:"The power of a convex lens is:",
options:["Negative","Positive","Zero","Infinite"],
answer:1,
explanation:"A convex lens has positive power."
},

{
chapter:"9",
question:"The power of a concave lens is:",
options:["Positive","Negative","Zero","Infinite"],
answer:1,
explanation:"A concave lens has negative power."
},

{
chapter:"9",
question:"One dioptre is equal to:",
options:["Lens of focal length 1 cm","Lens of focal length 1 m","Lens of focal length 10 cm","Lens of focal length 100 cm"],
answer:1,
explanation:"A lens with focal length 1 metre has power +1 D."
},

{
chapter:"9",
question:"The image formed by a convex lens on the retina is:",
options:["Virtual and erect","Real and inverted","Virtual and inverted","Real and erect"],
answer:1,
explanation:"The eye lens forms a real, inverted image on the retina."
},

{
chapter:"9",
question:"The defect caused due to ageing in which the eye loses its power of accommodation is:",
options:["Myopia","Hypermetropia","Presbyopia","Cataract"],
answer:2,
explanation:"Presbyopia occurs due to weakening of ciliary muscles with age."
},

{
chapter:"9",
question:"A person suffering from presbyopia may use:",
options:["Only concave lens","Only convex lens","Bifocal lens","Plane glass"],
answer:2,
explanation:"Bifocal lenses help correct presbyopia."
},

{
chapter:"9",
question:"Which chapter of CBSE Class 10 Science contains mirror formula, lens formula, magnification, sign convention and defects of vision?",
options:["Human Eye and Colourful World","Light - Reflection and Refraction","Electricity","Magnetic Effects of Electric Current"],
answer:1,
explanation:"All these topics are covered in Chapter 9: Light - Reflection and Refraction."
},

{
chapter:"10",
question:"The transparent front part of the human eye is called:",
options:["Retina","Cornea","Iris","Lens"],
answer:1,
explanation:"The cornea is the transparent front layer through which light enters the eye."
},

{
chapter:"10",
question:"The coloured part of the eye is:",
options:["Retina","Iris","Cornea","Pupil"],
answer:1,
explanation:"The iris controls the amount of light entering the eye."
},

{
chapter:"10",
question:"The opening in the centre of the iris is called:",
options:["Retina","Lens","Pupil","Cornea"],
answer:2,
explanation:"The pupil regulates the amount of light entering the eye."
},

{
chapter:"10",
question:"The image in the human eye is formed on the:",
options:["Cornea","Retina","Iris","Pupil"],
answer:1,
explanation:"The retina is the light-sensitive screen of the eye."
},

{
chapter:"10",
question:"The human eye contains a:",
options:["Concave lens","Convex lens","Plane lens","Cylindrical lens"],
answer:1,
explanation:"The eye has a flexible convex lens."
},

{
chapter:"10",
question:"The ability of the eye lens to adjust its focal length is called:",
options:["Refraction","Accommodation","Dispersion","Persistence"],
answer:1,
explanation:"Accommodation helps focus objects at different distances."
},

{
chapter:"10",
question:"The normal near point of the human eye is:",
options:["10 cm","15 cm","25 cm","50 cm"],
answer:2,
explanation:"The least distance of distinct vision is 25 cm."
},

{
chapter:"10",
question:"The far point of a normal human eye is:",
options:["25 cm","1 m","Infinity","100 m"],
answer:2,
explanation:"A normal eye can clearly see distant objects at infinity."
},

{
chapter:"10",
question:"The ciliary muscles help in:",
options:["Changing the pupil size","Changing the focal length of the eye lens","Producing tears","Protecting the retina"],
answer:1,
explanation:"Ciliary muscles change the curvature of the lens."
},

{
chapter:"10",
question:"The optic nerve carries impulses from the:",
options:["Brain to eye","Retina to brain","Cornea to lens","Lens to retina"],
answer:1,
explanation:"The optic nerve sends visual signals to the brain."
},

{
chapter:"10",
question:"The image formed on the retina is:",
options:["Virtual and erect","Real and inverted","Virtual and inverted","Real and erect"],
answer:1,
explanation:"The eye forms a real, inverted image on the retina."
},

{
chapter:"10",
question:"The brain interprets the retinal image as:",
options:["Inverted","Erect","Magnified","Virtual"],
answer:1,
explanation:"The brain processes the inverted image and perceives it as erect."
},

{
chapter:"10",
question:"Which defect of vision causes difficulty in seeing distant objects?",
options:["Hypermetropia","Myopia","Presbyopia","Cataract"],
answer:1,
explanation:"Myopia is short-sightedness."
},

{
chapter:"10",
question:"Myopia is corrected using:",
options:["Convex lens","Concave lens","Plane mirror","Convex mirror"],
answer:1,
explanation:"Concave lenses diverge light rays before they enter the eye."
},

{
chapter:"10",
question:"Hypermetropia is corrected using:",
options:["Concave lens","Convex lens","Plane lens","Mirror"],
answer:1,
explanation:"Convex lenses converge light rays."
},

{
chapter:"10",
question:"Hypermetropia is also called:",
options:["Short-sightedness","Long-sightedness","Night blindness","Colour blindness"],
answer:1,
explanation:"Hypermetropia means difficulty seeing nearby objects."
},

{
chapter:"10",
question:"The defect caused due to ageing in which accommodation decreases is:",
options:["Myopia","Hypermetropia","Presbyopia","Astigmatism"],
answer:2,
explanation:"Presbyopia occurs because ciliary muscles weaken with age."
},

{
chapter:"10",
question:"Presbyopia is commonly corrected using:",
options:["Concave lens","Convex lens","Bifocal lens","Plane glass"],
answer:2,
explanation:"Bifocal lenses help correct both near and distant vision."
},

{
chapter:"10",
question:"The light-sensitive cells present in the retina are:",
options:["Rods and cones","Neurons only","Muscles","Capillaries"],
answer:0,
explanation:"The retina contains rod and cone cells."
},

{
chapter:"10",
question:"Which part of the eye controls the size of the pupil?",
options:["Retina","Cornea","Iris","Lens"],
answer:2,
explanation:"The iris expands or contracts to control the amount of light entering the eye."
},

{
chapter:"10",
question:"The rod cells of the retina help in:",
options:["Colour vision","Vision in dim light","Focusing","Accommodation"],
answer:1,
explanation:"Rod cells are sensitive to dim light and help in night vision."
},

{
chapter:"10",
question:"Cone cells are responsible for:",
options:["Night vision","Colour vision","Hearing","Accommodation"],
answer:1,
explanation:"Cone cells enable colour vision in bright light."
},

{
chapter:"10",
question:"The inability to distinguish certain colours is called:",
options:["Myopia","Hypermetropia","Colour blindness","Presbyopia"],
answer:2,
explanation:"Colour blindness occurs due to defective cone cells."
},

{
chapter:"10",
question:"The persistence of vision of the human eye is about:",
options:["1/5 second","1/10 second","1/16 second","1 second"],
answer:2,
explanation:"The image remains on the retina for about 1/16 second."
},

{
chapter:"10",
question:"Persistence of vision is the principle behind:",
options:["Microscope","Motion pictures","Periscope","Magnifying glass"],
answer:1,
explanation:"Movies appear continuous because of persistence of vision."
},

{
chapter:"10",
question:"Twinkling of stars is caused due to:",
options:["Reflection","Atmospheric refraction","Dispersion","Scattering"],
answer:1,
explanation:"The atmosphere continuously refracts starlight."
},

{
chapter:"10",
question:"Stars appear to twinkle because they are:",
options:["Very close","Point sources of light","Large objects","Moving rapidly"],
answer:1,
explanation:"Stars act as point sources, making atmospheric refraction noticeable."
},

{
chapter:"10",
question:"Planets generally do not twinkle because:",
options:["They produce their own light","They are closer and appear as extended sources","They rotate slowly","They have no atmosphere"],
answer:1,
explanation:"Planets appear as extended sources, reducing the twinkling effect."
},

{
chapter:"10",
question:"The apparent position of a star is due to:",
options:["Reflection","Atmospheric refraction","Dispersion","Scattering"],
answer:1,
explanation:"Atmospheric refraction makes stars appear higher than their actual position."
},

{
chapter:"10",
question:"The Sun is visible about 2 minutes before sunrise because of:",
options:["Reflection","Atmospheric refraction","Scattering","Dispersion"],
answer:1,
explanation:"Atmospheric refraction causes advanced sunrise."
},

{
chapter:"10",
question:"The Sun remains visible for about 2 minutes after sunset due to:",
options:["Reflection","Atmospheric refraction","Dispersion","Total internal reflection"],
answer:1,
explanation:"Atmospheric refraction causes delayed sunset."
},

{
chapter:"10",
question:"The blue colour of the sky is due to:",
options:["Reflection","Scattering of light","Refraction","Dispersion"],
answer:1,
explanation:"Air molecules scatter shorter wavelengths (blue) more strongly."
},

{
chapter:"10",
question:"Which colour is scattered the most by the atmosphere?",
options:["Red","Blue","Yellow","Green"],
answer:1,
explanation:"Blue light has the shortest wavelength among visible colours."
},

{
chapter:"10",
question:"The colour of the sky appears black to astronauts because:",
options:["The Sun is absent","There is no atmosphere to scatter light","Clouds block sunlight","The Earth is dark"],
answer:1,
explanation:"Without an atmosphere, there is no scattering of sunlight."
},

{
chapter:"10",
question:"The reddish appearance of the Sun at sunrise and sunset is due to:",
options:["Reflection","Dispersion","Scattering","Refraction"],
answer:2,
explanation:"Blue light is scattered away, leaving mainly red light."
},

{
chapter:"10",
question:"Which colour has the longest wavelength in visible light?",
options:["Blue","Green","Yellow","Red"],
answer:3,
explanation:"Red light has the longest wavelength."
},

{
chapter:"10",
question:"Which colour has the shortest wavelength in visible light?",
options:["Red","Yellow","Blue","Violet"],
answer:3,
explanation:"Violet light has the shortest wavelength."
},

{
chapter:"10",
question:"Red light is least scattered because it has:",
options:["Shortest wavelength","Longest wavelength","Highest frequency","Lowest speed"],
answer:1,
explanation:"Longer wavelengths undergo less scattering."
},

{
chapter:"10",
question:"Danger signals are usually red because:",
options:["Red is brightest","Red is least scattered","Red travels fastest","Red reflects more"],
answer:1,
explanation:"Red light is visible from greater distances due to less scattering."
},

{
chapter:"10",
question:"Scattering of light by tiny particles in the atmosphere is known as:",
options:["Reflection","Tyndall effect","Refraction","Dispersion"],
answer:1,
explanation:"The Tyndall effect explains the scattering of light by fine particles."
},

{
chapter:"10",
question:"The phenomenon of splitting of white light into its constituent colours is called:",
options:["Scattering","Reflection","Dispersion","Refraction"],
answer:2,
explanation:"Dispersion is the splitting of white light into seven colours."
},

{
chapter:"10",
question:"A rainbow is formed due to:",
options:["Reflection only","Refraction only","Dispersion, refraction and internal reflection","Scattering only"],
answer:2,
explanation:"A rainbow is formed by refraction, dispersion and internal reflection inside raindrops."
},

{
chapter:"10",
question:"Which colour deviates the most during dispersion?",
options:["Red","Yellow","Blue","Violet"],
answer:3,
explanation:"Violet light deviates the most because it has the shortest wavelength."
},

{
chapter:"10",
question:"Which colour deviates the least during dispersion?",
options:["Violet","Blue","Green","Red"],
answer:3,
explanation:"Red light has the longest wavelength and deviates the least."
},

{
chapter:"10",
question:"The band of seven colours obtained after dispersion is called:",
options:["Spectrum","Image","Shadow","Reflection"],
answer:0,
explanation:"The band of seven colours is called the spectrum."
},

{
chapter:"10",
question:"VIBGYOR stands for:",
options:["Seven colours of visible light","Seven planets","Seven stars","Types of lenses"],
answer:0,
explanation:"VIBGYOR represents Violet, Indigo, Blue, Green, Yellow, Orange and Red."
},

{
chapter:"10",
question:"The colour at the top of a rainbow is:",
options:["Violet","Blue","Green","Red"],
answer:3,
explanation:"Red appears at the outer (top) side of a primary rainbow."
},

{
chapter:"10",
question:"The colour at the bottom of a rainbow is:",
options:["Red","Yellow","Green","Violet"],
answer:3,
explanation:"Violet appears at the inner (bottom) side of a primary rainbow."
},

{
chapter:"10",
question:"The atmosphere acts like a:",
options:["Mirror","Prism","Lens","Magnet"],
answer:2,
explanation:"The Earth's atmosphere bends light like a giant lens."
},

{
chapter:"10",
question:"Why does the Sun appear flattened during sunrise and sunset?",
options:["Reflection","Atmospheric refraction","Scattering","Dispersion"],
answer:1,
explanation:"Different parts of the Sun are refracted differently by the atmosphere."
},

{
chapter:"10",
question:"The colour of the clear sky is:",
options:["Red","Blue","Green","Yellow"],
answer:1,
explanation:"Blue light is scattered more than other colours."
},

{
chapter:"10",
question:"The colour of clouds is generally white because:",
options:["No scattering occurs","All colours are scattered almost equally","Only red light is reflected","Only blue light is scattered"],
answer:1,
explanation:"Large water droplets scatter all colours nearly equally."
},

{
chapter:"10",
question:"The main cause of atmospheric refraction is:",
options:["Variation in air density","Earth's gravity","Magnetic field","Humidity only"],
answer:0,
explanation:"Air density changes continuously with altitude."
},

{
chapter:"10",
question:"Which light is used in fog lamps?",
options:["Blue","Green","Red","Yellow"],
answer:3,
explanation:"Yellow light is scattered less than blue light, making it suitable for fog."
},

{
chapter:"10",
question:"Which colour has the highest frequency?",
options:["Red","Green","Blue","Violet"],
answer:3,
explanation:"Violet light has the highest frequency."
},

{
chapter:"10",
question:"Which colour has the lowest frequency?",
options:["Red","Yellow","Blue","Violet"],
answer:0,
explanation:"Red light has the lowest frequency."
},

{
chapter:"10",
question:"The scattering of light depends mainly on:",
options:["Colour (wavelength)","Mass of the object","Temperature only","Shape only"],
answer:0,
explanation:"Shorter wavelengths are scattered more strongly."
},

{
chapter:"10",
question:"The blue colour of deep sea water is mainly due to:",
options:["Reflection of sky","Scattering of light","Refraction","Dispersion"],
answer:1,
explanation:"Water molecules scatter blue light more effectively."
},

{
chapter:"10",
question:"The image of the Sun appears slightly higher than its actual position because of:",
options:["Reflection","Atmospheric refraction","Dispersion","Scattering"],
answer:1,
explanation:"Atmospheric refraction shifts the apparent position upward."
},

{
chapter:"10",
question:"Which topic is NOT included in Chapter 10?",
options:["Scattering of light","Atmospheric refraction","Rainbow formation","Mirror formula"],
answer:3,
explanation:"Mirror formula belongs to Chapter 9: Light – Reflection and Refraction."
},

{
chapter:"10",
question:"The colour of the sky during sunset appears reddish because:",
options:["Blue light is reflected","Red light is scattered the most","Blue light is scattered away","Red light travels faster"],
answer:2,
explanation:"During sunset, blue light is scattered away and red light reaches our eyes."
},

{
chapter:"10",
question:"The Tyndall effect is shown by:",
options:["True solutions only","Colloidal solutions","Pure water","Salt solution"],
answer:1,
explanation:"Colloidal particles scatter light, producing the Tyndall effect."
},

{
chapter:"10",
question:"The Tyndall effect proves that light:",
options:["Can be absorbed","Can be scattered","Can be reflected only","Cannot travel through air"],
answer:1,
explanation:"The Tyndall effect demonstrates scattering of light."
},

{
chapter:"10",
question:"The colour of smoke appears bluish because of:",
options:["Reflection","Scattering of shorter wavelengths","Dispersion","Refraction"],
answer:1,
explanation:"Fine smoke particles scatter blue light more effectively."
},

{
chapter:"10",
question:"The red colour used in traffic signals is due to:",
options:["Highest energy","Least scattering","Highest scattering","Lowest speed"],
answer:1,
explanation:"Red light has the longest wavelength and is scattered the least."
},

{
chapter:"10",
question:"Which colour is scattered the least by dust particles?",
options:["Blue","Green","Yellow","Red"],
answer:3,
explanation:"Red light has the longest wavelength and undergoes the least scattering."
},

{
chapter:"10",
question:"The colour of the Sun appears white when it is:",
options:["At sunrise","At sunset","Overhead at noon","Behind clouds"],
answer:2,
explanation:"At noon sunlight travels the shortest distance through the atmosphere."
},

{
chapter:"10",
question:"The Earth's atmosphere consists of layers having:",
options:["Same density","Different densities","Only oxygen","Only nitrogen"],
answer:1,
explanation:"Atmospheric density decreases with height, causing atmospheric refraction."
},

{
chapter:"10",
question:"The twinkling of stars occurs because of:",
options:["Scattering","Continuous atmospheric refraction","Reflection","Dispersion"],
answer:1,
explanation:"Changing atmospheric density causes continuous refraction of starlight."
},

{
chapter:"10",
question:"Which of the following does NOT twinkle?",
options:["Stars","Planets","Distant stars","Binary stars"],
answer:1,
explanation:"Planets appear as extended sources, so they usually do not twinkle."
},

{
chapter:"10",
question:"Which colour of light has the maximum wavelength?",
options:["Violet","Blue","Green","Red"],
answer:3,
explanation:"Red light has the maximum wavelength in the visible spectrum."
},

{
chapter:"10",
question:"Which colour has the minimum wavelength?",
options:["Red","Yellow","Blue","Violet"],
answer:3,
explanation:"Violet light has the shortest wavelength."
},

{
chapter:"10",
question:"The rainbow is usually seen when:",
options:["Sun is overhead","Sun is behind the observer","Sun is in front of the observer","At midnight"],
answer:1,
explanation:"The Sun must be behind the observer for a rainbow to be visible."
},

{
chapter:"10",
question:"A rainbow is formed by water droplets acting like:",
options:["Mirrors","Prisms","Magnets","Lenses only"],
answer:1,
explanation:"Each raindrop acts like a tiny prism."
},

{
chapter:"10",
question:"The sequence of colours in a rainbow from outer to inner side is:",
options:["VIBGYOR","ROYGBIV","RGBYIVO","YORBGIV"],
answer:1,
explanation:"The outermost colour is Red and the innermost is Violet."
},

{
chapter:"10",
question:"Which atmospheric phenomenon explains advanced sunrise?",
options:["Reflection","Atmospheric refraction","Scattering","Dispersion"],
answer:1,
explanation:"Atmospheric refraction makes the Sun visible before its actual sunrise."
},

{
chapter:"10",
question:"Which atmospheric phenomenon explains delayed sunset?",
options:["Reflection","Atmospheric refraction","Scattering","Dispersion"],
answer:1,
explanation:"Atmospheric refraction keeps the Sun visible after it has actually set."
},

{
chapter:"10",
question:"The human eye is most sensitive to which colour?",
options:["Blue","Green","Yellow-Green","Red"],
answer:2,
explanation:"The human eye is most sensitive to yellow-green light (~555 nm)."
},

{
chapter:"10",
question:"Which colour of light is used in danger signals because it is visible from the greatest distance?",
options:["Blue","Green","Yellow","Red"],
answer:3,
explanation:"Red light undergoes the least scattering and is visible from long distances."
},

{
chapter:"10",
question:"Chapter 10 mainly deals with:",
options:["Human eye, atmospheric refraction and scattering of light","Electricity and circuits","Chemical reactions","Carbon compounds"],
answer:0,
explanation:"Chapter 10 covers the human eye, atmospheric refraction, scattering of light and related phenomena."
},

{
chapter:"10",
question:"The normal human eye can distinguish about:",
options:["1 million colours","5 million colours","10 million colours","20 million colours"],
answer:2,
explanation:"A healthy human eye can distinguish nearly 10 million colours."
},

{
chapter:"10",
question:"The refractive index of air decreases with:",
options:["Decrease in altitude","Increase in altitude","Increase in humidity only","Time of day"],
answer:1,
explanation:"Air density decreases with height, reducing refractive index."
},

{
chapter:"10",
question:"Atmospheric refraction is caused by:",
options:["Reflection from clouds","Different optical densities of air layers","Earth's magnetic field","Earth's rotation"],
answer:1,
explanation:"Air layers of varying density bend light continuously."
},

{
chapter:"10",
question:"Which of the following is NOT a defect of vision?",
options:["Myopia","Hypermetropia","Presbyopia","Scattering"],
answer:3,
explanation:"Scattering is an optical phenomenon, not a vision defect."
},

{
chapter:"10",
question:"The colour of the clear sky is due to:",
options:["Reflection by clouds","Scattering of blue light","Refraction","Dispersion"],
answer:1,
explanation:"Blue light is scattered more because of its shorter wavelength."
},

{
chapter:"10",
question:"The Sun appears red at sunrise because:",
options:["Red light is scattered most","Blue light is scattered away","Red light bends more","The Sun becomes cooler"],
answer:1,
explanation:"Most of the blue light is scattered before reaching our eyes."
},

{
chapter:"10",
question:"Which colour has the lowest wavelength?",
options:["Red","Orange","Blue","Violet"],
answer:3,
explanation:"Violet has the shortest wavelength in visible light."
},

{
chapter:"10",
question:"Which colour has the highest wavelength?",
options:["Violet","Blue","Green","Red"],
answer:3,
explanation:"Red has the longest wavelength."
},

{
chapter:"10",
question:"The phenomenon responsible for the blue appearance of smoke is:",
options:["Reflection","Scattering","Refraction","Dispersion"],
answer:1,
explanation:"Fine particles scatter shorter wavelengths more strongly."
},

{
chapter:"10",
question:"Fog lamps are generally:",
options:["Blue","Red","Yellow","Green"],
answer:2,
explanation:"Yellow light undergoes less scattering in fog."
},

{
chapter:"10",
question:"Which colour is scattered the least in the atmosphere?",
options:["Blue","Green","Yellow","Red"],
answer:3,
explanation:"Red light has the longest wavelength, so it is scattered the least."
},

{
chapter:"10",
question:"The sky appears dark to astronauts because:",
options:["The Sun is absent","There is no atmosphere","Clouds cover the sky","The Moon blocks sunlight"],
answer:1,
explanation:"Without an atmosphere, scattering does not occur."
},

{
chapter:"10",
question:"Which phenomenon makes stars appear higher than their actual position?",
options:["Reflection","Atmospheric refraction","Scattering","Dispersion"],
answer:1,
explanation:"Atmospheric refraction shifts the apparent position upward."
},

{
chapter:"10",
question:"The duration of advanced sunrise is approximately:",
options:["30 seconds","1 minute","2 minutes","5 minutes"],
answer:2,
explanation:"The Sun appears about 2 minutes earlier due to atmospheric refraction."
},

{
chapter:"10",
question:"Delayed sunset occurs for about:",
options:["30 seconds","1 minute","2 minutes","10 minutes"],
answer:2,
explanation:"The Sun remains visible for about 2 minutes after actual sunset."
},

{
chapter:"10",
question:"The Tyndall effect can be observed in:",
options:["True solutions","Colloidal solutions","Pure alcohol","Distilled water"],
answer:1,
explanation:"Colloidal particles scatter light and produce the Tyndall effect."
},

{
chapter:"10",
question:"The atmosphere scatters sunlight because of:",
options:["Dust and air molecules","Gravity","Earth's rotation","Magnetic field"],
answer:0,
explanation:"Tiny particles and gas molecules scatter sunlight."
},

{
chapter:"10",
question:"Which of the following is NOT a cause of scattering?",
options:["Dust particles","Air molecules","Water droplets","Mirror surface"],
answer:3,
explanation:"Mirrors reflect light; they do not cause atmospheric scattering."
},

{
chapter:"10",
question:"Which colour is at the innermost side of a primary rainbow?",
options:["Red","Orange","Blue","Violet"],
answer:3,
explanation:"Violet forms the innermost band of a primary rainbow."
},

{
chapter:"10",
question:"Chapter 10 'The Human Eye and the Colourful World' mainly deals with:",
options:["Human eye, defects of vision, atmospheric refraction and scattering","Reflection from mirrors only","Chemical reactions","Electric circuits"],
answer:0,
explanation:"This chapter covers the human eye, vision defects, atmospheric refraction, scattering, rainbow and related optical phenomena."
},

{
chapter:"11",
question:"The SI unit of electric current is:",
options:["Volt","Ampere","Ohm","Watt"],
answer:1,
explanation:"Electric current is measured in ampere (A)."
},

{
chapter:"11",
question:"Electric current is the rate of flow of:",
options:["Protons","Neutrons","Electric charge","Atoms"],
answer:2,
explanation:"Current is the flow of electric charge through a conductor."
},

{
chapter:"11",
question:"The SI unit of electric charge is:",
options:["Ampere","Volt","Coulomb","Ohm"],
answer:2,
explanation:"Electric charge is measured in coulombs (C)."
},

{
chapter:"11",
question:"One ampere current means the flow of:",
options:["1 coulomb per second","1 volt per second","1 ohm per second","1 watt per second"],
answer:0,
explanation:"1 A = 1 C/s."
},

{
chapter:"11",
question:"The instrument used to measure electric current is:",
options:["Voltmeter","Ammeter","Galvanometer","Ohmmeter"],
answer:1,
explanation:"An ammeter measures electric current."
},

{
chapter:"11",
question:"An ammeter is connected in:",
options:["Parallel","Series","Either way","Across the battery"],
answer:1,
explanation:"An ammeter is always connected in series."
},

{
chapter:"11",
question:"The instrument used to measure potential difference is:",
options:["Voltmeter","Ammeter","Ohmmeter","Galvanometer"],
answer:0,
explanation:"A voltmeter measures potential difference."
},

{
chapter:"11",
question:"A voltmeter is connected in:",
options:["Series","Parallel","Both","None"],
answer:1,
explanation:"A voltmeter is connected parallel to the component."
},

{
chapter:"11",
question:"The SI unit of potential difference is:",
options:["Ampere","Volt","Ohm","Watt"],
answer:1,
explanation:"Potential difference is measured in volts (V)."
},

{
chapter:"11",
question:"Potential difference is measured using:",
options:["Ammeter","Voltmeter","Ohmmeter","Cell"],
answer:1,
explanation:"A voltmeter measures voltage."
},

{
chapter:"11",
question:"The SI unit of resistance is:",
options:["Volt","Ampere","Ohm","Joule"],
answer:2,
explanation:"Resistance is measured in ohms (Ω)."
},

{
chapter:"11",
question:"Resistance is represented by the symbol:",
options:["V","R","I","P"],
answer:1,
explanation:"Resistance is denoted by R."
},

{
chapter:"11",
question:"Ohm's law states that:",
options:["V = IR","P = VI","W = Pt","I = V²/R"],
answer:0,
explanation:"Ohm's law is V = IR."
},

{
chapter:"11",
question:"Who proposed Ohm's law?",
options:["Newton","Georg Simon Ohm","Faraday","Ampere"],
answer:1,
explanation:"Ohm's law was proposed by Georg Simon Ohm."
},

{
chapter:"11",
question:"If the voltage is doubled and resistance remains constant, current becomes:",
options:["Half","Double","One-fourth","Unchanged"],
answer:1,
explanation:"According to Ohm's law, I = V/R."
},

{
chapter:"11",
question:"The graph between V and I for an ohmic conductor is:",
options:["Circle","Straight line","Curve","Parabola"],
answer:1,
explanation:"The V-I graph is a straight line passing through the origin."
},

{
chapter:"11",
question:"A resistor opposes the flow of:",
options:["Voltage","Current","Power","Energy"],
answer:1,
explanation:"Resistance opposes the flow of electric current."
},

{
chapter:"11",
question:"The resistance of a conductor depends on:",
options:["Length","Area of cross-section","Material","All of these"],
answer:3,
explanation:"Resistance depends on length, area and material."
},

{
chapter:"11",
question:"Resistance is directly proportional to:",
options:["Area","Length","Current","Voltage"],
answer:1,
explanation:"R ∝ l."
},

{
chapter:"11",
question:"Resistance is inversely proportional to:",
options:["Length","Area of cross-section","Voltage","Current"],
answer:1,
explanation:"R ∝ 1/A."
},

{
chapter:"11",
question:"The resistivity of a material depends on:",
options:["Length","Area","Nature of the material","Shape"],
answer:2,
explanation:"Resistivity is a characteristic property of the material."
},

{
chapter:"11",
question:"The SI unit of resistivity is:",
options:["Ω","Ω m","V","A"],
answer:1,
explanation:"The SI unit of resistivity is ohm metre (Ω m)."
},

{
chapter:"11",
question:"The formula for resistance is:",
options:["R = ρA/l","R = ρl/A","R = l/ρA","R = A/ρl"],
answer:1,
explanation:"Resistance is given by R = ρl/A."
},

{
chapter:"11",
question:"A good conductor has:",
options:["High resistivity","Low resistivity","Infinite resistance","Zero voltage"],
answer:1,
explanation:"Good conductors have low resistivity."
},

{
chapter:"11",
question:"Which material is commonly used for heating elements?",
options:["Copper","Silver","Nichrome","Aluminium"],
answer:2,
explanation:"Nichrome has high resistivity and a high melting point."
},

{
chapter:"11",
question:"When resistors are connected in series, the current through each resistor is:",
options:["Different","Same","Zero","Infinite"],
answer:1,
explanation:"The same current flows through all resistors in series."
},

{
chapter:"11",
question:"The equivalent resistance in series is:",
options:["R₁+R₂+R₃","1/R₁+1/R₂","R₁×R₂","R₁−R₂"],
answer:0,
explanation:"Series resistances add directly."
},

{
chapter:"11",
question:"When resistors are connected in parallel, the potential difference across each resistor is:",
options:["Different","Zero","Same","Infinite"],
answer:2,
explanation:"Each resistor gets the same voltage in parallel."
},

{
chapter:"11",
question:"The equivalent resistance in parallel is:",
options:["R₁+R₂","1/R = 1/R₁ + 1/R₂","R₁×R₂","R₁−R₂"],
answer:1,
explanation:"Parallel resistances follow the reciprocal formula."
},

{
chapter:"11",
question:"The equivalent resistance of resistors connected in series is always:",
options:["Less than the smallest resistance","Greater than any individual resistance","Equal to the smallest resistance","Zero"],
answer:1,
explanation:"Series combination increases total resistance."
},

{
chapter:"11",
question:"The equivalent resistance of resistors connected in parallel is always:",
options:["Greater than the largest resistance","Less than the smallest resistance","Equal to the largest resistance","Infinite"],
answer:1,
explanation:"Parallel combination decreases total resistance."
},

{
chapter:"11",
question:"Which combination is used in household wiring?",
options:["Series","Parallel","Mixed only","None"],
answer:1,
explanation:"Household appliances are connected in parallel."
},

{
chapter:"11",
question:"The commercial unit of electrical energy is:",
options:["Joule","Kilowatt-hour","Watt","Volt"],
answer:1,
explanation:"Electrical energy is billed in kilowatt-hours (kWh)."
},

{
chapter:"11",
question:"1 kilowatt-hour is equal to:",
options:["3.6 × 10⁶ J","3600 J","1000 J","36 J"],
answer:0,
explanation:"1 kWh = 3.6 × 10⁶ joules."
},

{
chapter:"11",
question:"Electric power is the rate of consumption of:",
options:["Charge","Current","Electrical energy","Resistance"],
answer:2,
explanation:"Power is the rate at which electrical energy is used."
},

{
chapter:"11",
question:"The SI unit of electric power is:",
options:["Volt","Ampere","Watt","Joule"],
answer:2,
explanation:"Power is measured in watts (W)."
},

{
chapter:"11",
question:"The formula for electric power is:",
options:["P = VI","P = IR","P = V/R","P = I/R"],
answer:0,
explanation:"Power equals voltage multiplied by current."
},

{
chapter:"11",
question:"Another formula for electric power is:",
options:["P = I²R","P = IR","P = V/I","P = R/I"],
answer:0,
explanation:"Using Ohm's law, P = I²R."
},

{
chapter:"11",
question:"Another expression for electric power is:",
options:["P = V²/R","P = VR","P = R²/V","P = V/R²"],
answer:0,
explanation:"Power can also be written as P = V²/R."
},

{
chapter:"11",
question:"One watt is equal to:",
options:["1 J/s","1 C/s","1 V/A","1 Ω"],
answer:0,
explanation:"1 watt means one joule of energy consumed per second."
},

{
chapter:"11",
question:"The heating effect of electric current was first explained by:",
options:["Faraday","Joule","Ohm","Ampere"],
answer:1,
explanation:"James Prescott Joule explained the heating effect of electric current."
},

{
chapter:"11",
question:"According to Joule's law of heating, heat produced is proportional to:",
options:["Current only","Resistance only","Time only","I²Rt"],
answer:3,
explanation:"Joule's law states H = I²Rt."
},

{
chapter:"11",
question:"The formula for electrical energy consumed is:",
options:["E = Pt","E = VI","E = IR","E = V/R"],
answer:0,
explanation:"Electrical energy = Power × Time."
},

{
chapter:"11",
question:"The heating element of an electric iron is made of:",
options:["Copper","Aluminium","Nichrome","Silver"],
answer:2,
explanation:"Nichrome has high resistivity and high melting point."
},

{
chapter:"11",
question:"Which appliance mainly works on the heating effect of electric current?",
options:["Electric iron","Electric fan","Generator","Transformer"],
answer:0,
explanation:"An electric iron converts electrical energy into heat."
},

{
chapter:"11",
question:"The filament of an electric bulb is made of:",
options:["Copper","Nichrome","Tungsten","Aluminium"],
answer:2,
explanation:"Tungsten has a very high melting point."
},

{
chapter:"11",
question:"The fuse wire should have:",
options:["Low melting point","High melting point","Zero resistance","Low resistivity"],
answer:0,
explanation:"A fuse melts quickly when excess current flows."
},

{
chapter:"11",
question:"An electric fuse protects against:",
options:["Low voltage","Overloading and short circuit","High resistance","Low current"],
answer:1,
explanation:"A fuse breaks the circuit during excessive current."
},

{
chapter:"11",
question:"The colour code of the live wire in household wiring is usually:",
options:["Green","Black","Brown","Blue"],
answer:2,
explanation:"According to modern standards, the live wire is brown."
},

{
chapter:"11",
question:"The neutral wire is generally:",
options:["Brown","Blue","Green","Red"],
answer:1,
explanation:"Blue is the standard colour for the neutral wire."
},

{
chapter:"11",
question:"The earth wire is generally:",
options:["Brown","Blue","Green","Red"],
answer:2,
explanation:"Green or green-yellow is used for the earth wire."
},

{
chapter:"11",
question:"The purpose of earthing is to:",
options:["Increase voltage","Prevent electric shock","Reduce resistance","Increase current"],
answer:1,
explanation:"Earthing provides a safe path for leakage current."
},

{
chapter:"11",
question:"The fuse is always connected in the:",
options:["Neutral wire","Earth wire","Live wire","Any wire"],
answer:2,
explanation:"The fuse must disconnect the live wire during a fault."
},

{
chapter:"11",
question:"The device that automatically breaks the circuit during overload is:",
options:["Fuse","MCB","Resistor","Cell"],
answer:1,
explanation:"An MCB (Miniature Circuit Breaker) trips automatically."
},

{
chapter:"11",
question:"Short circuit occurs when:",
options:["Resistance becomes very high","Live and neutral wires come in direct contact","Voltage decreases","Current stops"],
answer:1,
explanation:"Direct contact between live and neutral causes a large current."
},

{
chapter:"11",
question:"Overloading in a circuit causes:",
options:["Decrease in current","Increase in current","No change","Decrease in voltage only"],
answer:1,
explanation:"Too many appliances draw excessive current."
},

{
chapter:"11",
question:"The commercial unit of electrical energy is measured by:",
options:["Ammeter","Voltmeter","Energy meter","Galvanometer"],
answer:2,
explanation:"An energy meter records electrical energy in kWh."
},

{
chapter:"11",
question:"1000 watts is equal to:",
options:["10 kW","100 kW","1 kW","0.1 kW"],
answer:2,
explanation:"1000 W = 1 kilowatt."
},

{
chapter:"11",
question:"Electrical energy consumed is directly proportional to:",
options:["Power and time","Current only","Voltage only","Resistance only"],
answer:0,
explanation:"E = P × t."
},

{
chapter:"11",
question:"Which chapter includes Ohm's law, resistors, electric power and household circuits?",
options:["Magnetic Effects of Electric Current","Electricity","Sources of Energy","Light"],
answer:1,
explanation:"These topics are covered in Chapter 11: Electricity."
}, 

{
chapter:"11",
question:"If two resistors of 2 Ω and 3 Ω are connected in series, the equivalent resistance is:",
options:["1 Ω","5 Ω","6 Ω","2.5 Ω"],
answer:1,
explanation:"Series resistance = 2 + 3 = 5 Ω."
},

{
chapter:"11",
question:"If two resistors of 6 Ω each are connected in parallel, the equivalent resistance is:",
options:["12 Ω","6 Ω","3 Ω","1 Ω"],
answer:2,
explanation:"1/R = 1/6 + 1/6 = 2/6, so R = 3 Ω."
},

{
chapter:"11",
question:"Current is represented by the symbol:",
options:["V","R","I","P"],
answer:2,
explanation:"Electric current is denoted by I."
},

{
chapter:"11",
question:"Potential difference is represented by:",
options:["I","V","R","P"],
answer:1,
explanation:"Voltage or potential difference is represented by V."
},

{
chapter:"11",
question:"Electric power is represented by:",
options:["E","P","R","Q"],
answer:1,
explanation:"Power is denoted by P."
},

{
chapter:"11",
question:"Which law explains the relationship between voltage, current and resistance?",
options:["Faraday's Law","Ohm's Law","Newton's Law","Coulomb's Law"],
answer:1,
explanation:"Ohm's Law states V = IR."
},

{
chapter:"11",
question:"The resistance of a wire increases if its length:",
options:["Decreases","Remains same","Increases","Becomes zero"],
answer:2,
explanation:"Resistance is directly proportional to length."
},

{
chapter:"11",
question:"The resistance of a wire decreases if its cross-sectional area:",
options:["Decreases","Increases","Becomes zero","Remains constant"],
answer:1,
explanation:"Resistance is inversely proportional to area."
},

{
chapter:"11",
question:"Which of the following has the lowest resistivity?",
options:["Nichrome","Copper","Glass","Rubber"],
answer:1,
explanation:"Copper is an excellent conductor with very low resistivity."
},

{
chapter:"11",
question:"Which material is an insulator?",
options:["Copper","Aluminium","Rubber","Silver"],
answer:2,
explanation:"Rubber has very high resistance and is an insulator."
},

{
chapter:"11",
question:"A conductor offers:",
options:["High resistance","Low resistance","Infinite resistance","No current"],
answer:1,
explanation:"Conductors allow current to pass easily."
},

{
chapter:"11",
question:"The heating effect produced in a conductor depends on:",
options:["Current","Resistance","Time","All of these"],
answer:3,
explanation:"According to Joule's law, H = I²Rt."
},

{
chapter:"11",
question:"The SI unit of electrical energy is:",
options:["Joule","Kilowatt-hour","Watt","Volt"],
answer:0,
explanation:"The SI unit of energy is joule."
},

{
chapter:"11",
question:"Which formula gives electrical energy?",
options:["E = Pt","E = IR","E = V/R","E = I/R"],
answer:0,
explanation:"Electrical energy = Power × Time."
},

{
chapter:"11",
question:"A 100 W bulb used for 10 hours consumes:",
options:["100 Wh","500 Wh","1000 Wh","10 Wh"],
answer:2,
explanation:"Energy = 100 × 10 = 1000 Wh = 1 kWh."
},

{
chapter:"11",
question:"A 1 kW heater used for 2 hours consumes:",
options:["1 kWh","2 kWh","3 kWh","0.5 kWh"],
answer:1,
explanation:"Energy = 1 × 2 = 2 kWh."
},

{
chapter:"11",
question:"The current drawn by a 100 W bulb connected to 200 V supply is:",
options:["0.5 A","2 A","5 A","20 A"],
answer:0,
explanation:"I = P/V = 100/200 = 0.5 A."
},

{
chapter:"11",
question:"The resistance of a 220 V, 1100 W heater is:",
options:["22 Ω","44 Ω","55 Ω","66 Ω"],
answer:1,
explanation:"R = V²/P = 220²/1100 = 44 Ω."
},

{
chapter:"11",
question:"Which connection is preferred in domestic electric circuits?",
options:["Series","Parallel","Mixed","None"],
answer:1,
explanation:"Parallel connection ensures each appliance gets the full supply voltage."
},

{
chapter:"11",
question:"The main purpose of an MCB is to:",
options:["Increase voltage","Measure current","Protect the circuit from overload and short circuit","Store electrical energy"],
answer:2,
explanation:"An MCB automatically disconnects the circuit when excessive current flows."
},

{
chapter:"11",
question:"One kilowatt is equal to:",
options:["100 W","500 W","1000 W","2000 W"],
answer:2,
explanation:"1 kilowatt (kW) = 1000 watts."
},

{
chapter:"11",
question:"One unit of electrical energy is equal to:",
options:["1000 J","3600 J","3.6 × 10⁶ J","36 × 10⁶ J"],
answer:2,
explanation:"1 unit = 1 kWh = 3.6 × 10⁶ joules."
},

{
chapter:"11",
question:"The SI unit of power is:",
options:["Joule","Watt","Volt","Ampere"],
answer:1,
explanation:"Power is measured in watts (W)."
},

{
chapter:"11",
question:"Electric power is defined as:",
options:["Rate of flow of charge","Rate of doing electrical work","Current × Resistance","Voltage × Resistance"],
answer:1,
explanation:"Power is the rate at which electrical energy is consumed."
},

{
chapter:"11",
question:"The formula P = VI is valid for:",
options:["Only AC circuits","Only DC circuits","Both AC and DC (basic level)","None"],
answer:2,
explanation:"For Class 10 level, P = VI is used for electrical power."
},

{
chapter:"11",
question:"Which wire carries current from the source to the appliance?",
options:["Neutral wire","Earth wire","Live wire","Fuse wire"],
answer:2,
explanation:"The live wire carries current from the supply."
},

{
chapter:"11",
question:"The earth wire is mainly connected to:",
options:["Plastic body","Metal body of appliance","Battery","Switch"],
answer:1,
explanation:"Earthing protects users from electric shock."
},

{
chapter:"11",
question:"A fuse works on the principle of:",
options:["Magnetic effect","Heating effect of current","Chemical effect","Cooling effect"],
answer:1,
explanation:"Excess current produces heat that melts the fuse."
},

{
chapter:"11",
question:"MCB stands for:",
options:["Main Circuit Board","Miniature Circuit Breaker","Maximum Current Box","Main Control Battery"],
answer:1,
explanation:"MCB means Miniature Circuit Breaker."
},

{
chapter:"11",
question:"The resistance of an ideal conductor is:",
options:["Very high","Very low","Infinite","Zero"],
answer:3,
explanation:"An ideal conductor has zero resistance."
},

{
chapter:"11",
question:"The resistance of an ideal insulator is:",
options:["Zero","Very low","Infinite","1 Ω"],
answer:2,
explanation:"An ideal insulator offers infinite resistance."
},

{
chapter:"11",
question:"The current in a circuit decreases when resistance:",
options:["Decreases","Increases","Becomes zero","Remains constant"],
answer:1,
explanation:"According to Ohm's law, I = V/R."
},

{
chapter:"11",
question:"If voltage remains constant and resistance doubles, current becomes:",
options:["Double","Half","Four times","Unchanged"],
answer:1,
explanation:"Current is inversely proportional to resistance."
},

{
chapter:"11",
question:"The filament of an electric bulb glows because of:",
options:["Chemical effect","Heating effect","Magnetic effect","Cooling effect"],
answer:1,
explanation:"Current heats the tungsten filament until it glows."
},

{
chapter:"11",
question:"Which of the following has the highest resistivity?",
options:["Copper","Silver","Nichrome","Aluminium"],
answer:2,
explanation:"Nichrome has a much higher resistivity than common metals."
},

{
chapter:"11",
question:"The commercial unit used in electricity bills is:",
options:["Joule","Watt","Kilowatt-hour","Volt"],
answer:2,
explanation:"Electricity consumption is measured in kWh."
},

{
chapter:"11",
question:"The electricity meter installed in houses measures:",
options:["Current","Voltage","Electrical energy consumed","Resistance"],
answer:2,
explanation:"It records energy consumption in kilowatt-hours."
},

{
chapter:"11",
question:"Household appliances are connected in parallel so that:",
options:["Current is the same","Voltage is the same across each appliance","Resistance increases","Power decreases"],
answer:1,
explanation:"Parallel connection provides the same supply voltage to every appliance."
},

{
chapter:"11",
question:"The heating effect of electric current is directly proportional to:",
options:["Current","Current²","Voltage","Resistance only"],
answer:1,
explanation:"According to Joule's law, heat ∝ I²."
},

{
chapter:"11",
question:"Chapter 11 'Electricity' mainly covers:",
options:["Current, resistance, Ohm's law, electric power and household circuits","Reflection of light","Carbon compounds","Magnetic field of Earth"],
answer:0,
explanation:"These are the main topics included in Chapter 11: Electricity."
},

{
chapter:"12",
question:"Who discovered the magnetic effect of electric current?",
options:["Michael Faraday","Hans Christian Oersted","James Watt","Georg Ohm"],
answer:1,
explanation:"Oersted discovered that electric current produces a magnetic field."
},

{
chapter:"12",
question:"A current-carrying conductor produces:",
options:["Heat only","Light only","Magnetic field","Sound only"],
answer:2,
explanation:"Electric current produces a magnetic field around the conductor."
},

{
chapter:"12",
question:"The magnetic field around a straight current-carrying conductor consists of:",
options:["Straight lines","Circular concentric lines","Zig-zag lines","Random lines"],
answer:1,
explanation:"The field lines are concentric circles around the conductor."
},

{
chapter:"12",
question:"The direction of magnetic field around a straight conductor is determined by:",
options:["Fleming's Left-Hand Rule","Right-Hand Thumb Rule","Lenz's Law","Ohm's Law"],
answer:1,
explanation:"The Right-Hand Thumb Rule gives the direction of the magnetic field."
},

{
chapter:"12",
question:"The thumb in the Right-Hand Thumb Rule points in the direction of:",
options:["Magnetic field","Current","Force","Motion"],
answer:1,
explanation:"The thumb represents the direction of current."
},

{
chapter:"12",
question:"The curled fingers in the Right-Hand Thumb Rule indicate:",
options:["Voltage","Current","Magnetic field","Resistance"],
answer:2,
explanation:"The curled fingers show the direction of magnetic field lines."
},

{
chapter:"12",
question:"The magnetic field is strongest:",
options:["Far from the conductor","Near the conductor","At infinity","Everywhere equally"],
answer:1,
explanation:"Magnetic field strength decreases with distance."
},

{
chapter:"12",
question:"The SI unit of magnetic field is:",
options:["Tesla","Weber","Henry","Gauss"],
answer:0,
explanation:"Magnetic field strength is measured in tesla (T)."
},

{
chapter:"12",
question:"The magnetic field lines around a bar magnet emerge from:",
options:["South pole","North pole","Centre","Both poles"],
answer:1,
explanation:"Outside the magnet, field lines emerge from the north pole."
},

{
chapter:"12",
question:"Magnetic field lines enter the magnet through the:",
options:["North pole","South pole","Centre","Any point"],
answer:1,
explanation:"Outside the magnet they enter through the south pole."
},

{
chapter:"12",
question:"Magnetic field lines never:",
options:["Are circular","Intersect each other","Form closed curves","Show direction"],
answer:1,
explanation:"Two field lines cannot intersect."
},

{
chapter:"12",
question:"The closer the magnetic field lines are, the magnetic field is:",
options:["Weaker","Stronger","Zero","Constant"],
answer:1,
explanation:"Closer field lines indicate a stronger magnetic field."
},

{
chapter:"12",
question:"A compass needle is used to:",
options:["Measure current","Detect magnetic field","Measure voltage","Measure resistance"],
answer:1,
explanation:"A compass aligns itself along magnetic field lines."
},

{
chapter:"12",
question:"The direction of current in a circuit is taken as:",
options:["Negative to positive","Positive to negative","Positive terminal to negative terminal","Earth to battery"],
answer:2,
explanation:"Conventional current flows from positive to negative outside the cell."
},

{
chapter:"12",
question:"The magnetic field around a current-carrying conductor can be observed using:",
options:["Iron filings","Thermometer","Ammeter","Voltmeter"],
answer:0,
explanation:"Iron filings align along magnetic field lines."
},

{
chapter:"12",
question:"A solenoid is:",
options:["A straight wire","A circular coil with many turns","A battery","A resistor"],
answer:1,
explanation:"A solenoid is a long cylindrical coil of insulated wire."
},

{
chapter:"12",
question:"The magnetic field inside a solenoid is:",
options:["Zero","Uniform","Random","Very weak"],
answer:1,
explanation:"Inside a solenoid the magnetic field is nearly uniform."
},

{
chapter:"12",
question:"A current-carrying solenoid behaves like:",
options:["A resistor","A permanent magnet","A bar magnet","A capacitor"],
answer:2,
explanation:"A solenoid produces a magnetic field similar to a bar magnet."
},

{
chapter:"12",
question:"The end of a solenoid acting as North pole depends upon:",
options:["Its colour","Direction of current","Length only","Diameter only"],
answer:1,
explanation:"Changing the current direction changes the poles."
},

{
chapter:"12",
question:"Chapter 12 mainly deals with:",
options:["Electricity","Magnetic Effects of Electric Current","Carbon Compounds","Light"],
answer:1,
explanation:"Chapter 12 focuses on magnetic fields, electromagnets, motors and generators."
},

{
chapter:"12",
question:"An electromagnet is usually made by winding insulated copper wire around a:",
options:["Wooden rod","Plastic rod","Soft iron core","Glass rod"],
answer:2,
explanation:"Soft iron becomes strongly magnetized when current flows."
},

{
chapter:"12",
question:"The core of an electromagnet is generally made of:",
options:["Steel","Soft iron","Copper","Aluminium"],
answer:1,
explanation:"Soft iron is easily magnetized and demagnetized."
},

{
chapter:"12",
question:"The strength of an electromagnet increases with:",
options:["Decrease in current","Increase in current","Decrease in turns","Increase in resistance"],
answer:1,
explanation:"A larger current produces a stronger magnetic field."
},

{
chapter:"12",
question:"The magnetic field of a solenoid can be increased by:",
options:["Reducing turns","Increasing current","Removing the core","Using thinner wire only"],
answer:1,
explanation:"Increasing current increases magnetic field strength."
},

{
chapter:"12",
question:"Which material is best for making a permanent magnet?",
options:["Soft iron","Steel","Copper","Aluminium"],
answer:1,
explanation:"Steel retains magnetism for a long time."
},

{
chapter:"12",
question:"The force on a current-carrying conductor placed in a magnetic field is maximum when the conductor is:",
options:["Parallel to the field","Perpendicular to the field","At 45°","Stationary"],
answer:1,
explanation:"Maximum force acts when the conductor is perpendicular to the magnetic field."
},

{
chapter:"12",
question:"The direction of force on a current-carrying conductor is given by:",
options:["Right-Hand Thumb Rule","Fleming's Left-Hand Rule","Fleming's Right-Hand Rule","Ohm's Law"],
answer:1,
explanation:"Fleming's Left-Hand Rule is used for electric motors."
},

{
chapter:"12",
question:"In Fleming's Left-Hand Rule, the forefinger represents:",
options:["Current","Force","Magnetic field","Voltage"],
answer:2,
explanation:"Forefinger indicates the magnetic field."
},

{
chapter:"12",
question:"In Fleming's Left-Hand Rule, the middle finger represents:",
options:["Current","Force","Magnetic field","Resistance"],
answer:0,
explanation:"Middle finger represents the direction of current."
},

{
chapter:"12",
question:"In Fleming's Left-Hand Rule, the thumb represents:",
options:["Current","Magnetic field","Force/Motion","Voltage"],
answer:2,
explanation:"Thumb indicates the direction of force or motion."
},

{
chapter:"12",
question:"An electric motor converts:",
options:["Mechanical energy into electrical energy","Electrical energy into mechanical energy","Heat into electrical energy","Light into electrical energy"],
answer:1,
explanation:"Electric motors convert electrical energy into mechanical energy."
},

{
chapter:"12",
question:"Which device works on the principle of an electric motor?",
options:["Electric fan","Torch","Electric bell battery","Solar cell"],
answer:0,
explanation:"An electric fan uses an electric motor."
},

{
chapter:"12",
question:"The split ring in an electric motor is also called:",
options:["Slip ring","Commutator","Armature","Brush"],
answer:1,
explanation:"The split ring acts as a commutator."
},

{
chapter:"12",
question:"The function of a split ring is to:",
options:["Increase voltage","Reverse the direction of current","Increase resistance","Store charge"],
answer:1,
explanation:"It reverses current every half rotation."
},

{
chapter:"12",
question:"The brushes in an electric motor are generally made of:",
options:["Copper","Iron","Carbon","Steel"],
answer:2,
explanation:"Carbon brushes provide smooth electrical contact."
},

{
chapter:"12",
question:"The rotating coil of an electric motor is called:",
options:["Core","Armature","Solenoid","Rotor only"],
answer:1,
explanation:"The rotating part is called the armature."
},

{
chapter:"12",
question:"The magnetic field in a motor is usually produced by:",
options:["A resistor","Permanent magnet or electromagnet","Battery only","Switch"],
answer:1,
explanation:"Magnets provide the required magnetic field."
},

{
chapter:"12",
question:"If the direction of current is reversed, the direction of force will:",
options:["Remain same","Reverse","Become zero","Double"],
answer:1,
explanation:"Reversing current reverses the force."
},

{
chapter:"12",
question:"The principle of an electric motor is based on:",
options:["Heating effect of current","Chemical effect of current","Force on a current-carrying conductor in a magnetic field","Ohm's Law"],
answer:2,
explanation:"A current-carrying conductor experiences force in a magnetic field."
},

{
chapter:"12",
question:"Electric motors are commonly used in:",
options:["Ceiling fans","Mixers","Water pumps","All of these"],
answer:3,
explanation:"Electric motors are used in many household appliances."
},

{
chapter:"12",
question:"An electric generator converts:",
options:["Electrical energy into mechanical energy","Mechanical energy into electrical energy","Heat into electrical energy","Chemical energy into electrical energy"],
answer:1,
explanation:"A generator converts mechanical energy into electrical energy."
},

{
chapter:"12",
question:"The principle of an electric generator is based on:",
options:["Heating effect of current","Electromagnetic induction","Chemical effect","Ohm's law"],
answer:1,
explanation:"Generators work on the principle of electromagnetic induction."
},

{
chapter:"12",
question:"Who discovered electromagnetic induction?",
options:["Oersted","Michael Faraday","James Watt","Ampere"],
answer:1,
explanation:"Michael Faraday discovered electromagnetic induction."
},

{
chapter:"12",
question:"The direction of induced current is determined by:",
options:["Fleming's Left-Hand Rule","Fleming's Right-Hand Rule","Right-Hand Thumb Rule","Ohm's Law"],
answer:1,
explanation:"Fleming's Right-Hand Rule is used for generators."
},

{
chapter:"12",
question:"In Fleming's Right-Hand Rule, the thumb represents:",
options:["Current","Magnetic field","Motion of conductor","Voltage"],
answer:2,
explanation:"The thumb indicates the direction of motion."
},

{
chapter:"12",
question:"In Fleming's Right-Hand Rule, the forefinger represents:",
options:["Current","Magnetic field","Force","Resistance"],
answer:1,
explanation:"The forefinger shows the magnetic field direction."
},

{
chapter:"12",
question:"In Fleming's Right-Hand Rule, the middle finger represents:",
options:["Current","Force","Magnetic field","Motion"],
answer:0,
explanation:"The middle finger indicates induced current."
},

{
chapter:"12",
question:"An AC generator uses:",
options:["Split rings","Slip rings","Carbon rods","Electromagnets only"],
answer:1,
explanation:"AC generators use slip rings."
},

{
chapter:"12",
question:"A DC generator uses:",
options:["Slip rings","Split ring commutator","Transformer","Fuse"],
answer:1,
explanation:"DC generators use split-ring commutators."
},

{
chapter:"12",
question:"The device that increases or decreases AC voltage is called:",
options:["Motor","Transformer","Generator","Resistor"],
answer:1,
explanation:"A transformer changes AC voltage levels."
},

{
chapter:"12",
question:"A transformer works on:",
options:["Heating effect","Electromagnetic induction","Chemical effect","Magnetic attraction"],
answer:1,
explanation:"Transformers operate using electromagnetic induction."
},

{
chapter:"12",
question:"A step-up transformer:",
options:["Increases voltage","Decreases voltage","Increases current only","Produces DC"],
answer:0,
explanation:"A step-up transformer raises AC voltage."
},

{
chapter:"12",
question:"A step-down transformer:",
options:["Increases voltage","Decreases voltage","Produces AC","Stores electricity"],
answer:1,
explanation:"A step-down transformer lowers AC voltage."
},

{
chapter:"12",
question:"Transformers work only with:",
options:["DC","AC","Battery current","Static electricity"],
answer:1,
explanation:"Transformers require alternating current."
},

{
chapter:"12",
question:"The unit of magnetic field strength is:",
options:["Tesla","Volt","Ampere","Ohm"],
answer:0,
explanation:"Magnetic field strength is measured in tesla (T)."
},

{
chapter:"12",
question:"Which of the following is NOT a magnetic material?",
options:["Iron","Nickel","Cobalt","Plastic"],
answer:3,
explanation:"Plastic is a non-magnetic material."
},

{
chapter:"12",
question:"The magnetic field inside a current-carrying solenoid is:",
options:["Uniform","Random","Zero","Weak"],
answer:0,
explanation:"The magnetic field inside a solenoid is nearly uniform."
},

{
chapter:"12",
question:"The force on a conductor in a magnetic field becomes zero when the conductor is:",
options:["Perpendicular to the field","Parallel to the field","At 45°","Moving rapidly"],
answer:1,
explanation:"Force is zero when the conductor is parallel to the magnetic field."
},

{
chapter:"12",
question:"Which appliance works on the principle of an electric motor?",
options:["Electric mixer","Electric fan","Washing machine","All of these"],
answer:3,
explanation:"All these appliances use electric motors."
},

{
chapter:"12",
question:"Chapter 12 includes:",
options:["Electric motors, generators, transformers and magnetic effects of current","Human eye","Chemical reactions","Carbon compounds"],
answer:0,
explanation:"These are the major topics of Chapter 12."
},

{
chapter:"12",
question:"A current-carrying conductor placed in a magnetic field experiences:",
options:["Heat","Force","Light","Sound"],
answer:1,
explanation:"A magnetic force acts on a current-carrying conductor in a magnetic field."
},

{
chapter:"12",
question:"The force on a current-carrying conductor depends on:",
options:["Current","Magnetic field strength","Angle between current and field","All of these"],
answer:3,
explanation:"The force depends on current, magnetic field strength and the angle between them."
},

{
chapter:"12",
question:"The magnetic field around a straight conductor becomes stronger when:",
options:["Current decreases","Current increases","Wire length decreases","Voltage becomes zero"],
answer:1,
explanation:"Increasing the current increases the magnetic field strength."
},

{
chapter:"12",
question:"The magnetic field lines around a straight conductor are:",
options:["Parallel straight lines","Concentric circles","Elliptical","Random"],
answer:1,
explanation:"The magnetic field forms concentric circles around the conductor."
},

{
chapter:"12",
question:"The magnetic field inside a long solenoid is:",
options:["Non-uniform","Uniform","Circular","Zero"],
answer:1,
explanation:"Inside a long solenoid, the magnetic field is nearly uniform."
},

{
chapter:"12",
question:"Soft iron is preferred for making electromagnets because it:",
options:["Retains magnetism permanently","Is easily magnetized and demagnetized","Has very high resistance","Is non-magnetic"],
answer:1,
explanation:"Soft iron loses magnetism quickly when current is switched off."
},

{
chapter:"12",
question:"Which material is preferred for making permanent magnets?",
options:["Soft iron","Steel","Copper","Aluminium"],
answer:1,
explanation:"Steel retains its magnetism for a long time."
},

{
chapter:"12",
question:"The armature of an electric motor is:",
options:["The rotating coil","The battery","The switch","The magnet only"],
answer:0,
explanation:"The armature is the rotating coil inside the motor."
},

{
chapter:"12",
question:"The function of carbon brushes in a motor is to:",
options:["Increase speed","Supply current to the rotating coil","Reduce voltage","Produce magnetic field"],
answer:1,
explanation:"Carbon brushes maintain electrical contact with the rotating coil."
},

{
chapter:"12",
question:"The split-ring commutator in a DC motor:",
options:["Stores electricity","Reverses current every half rotation","Increases voltage","Acts as a fuse"],
answer:1,
explanation:"It reverses the current to keep the motor rotating in one direction."
},

{
chapter:"12",
question:"The magnetic field of an electromagnet disappears when:",
options:["Current is switched off","The core is heated","The wire is cooled","Voltage is increased"],
answer:0,
explanation:"Without current, the electromagnet loses its magnetism."
},

{
chapter:"12",
question:"A generator produces electricity by:",
options:["Using a battery","Rotating a coil in a magnetic field","Heating a wire","Using a resistor"],
answer:1,
explanation:"Mechanical rotation in a magnetic field induces current."
},

{
chapter:"12",
question:"The electricity supplied to homes in India is:",
options:["Direct Current (DC)","Alternating Current (AC)","Static electricity","Pulsating DC"],
answer:1,
explanation:"Household supply is alternating current (AC)."
},

{
chapter:"12",
question:"The frequency of AC supplied in India is:",
options:["25 Hz","50 Hz","60 Hz","100 Hz"],
answer:1,
explanation:"The standard AC frequency in India is 50 Hz."
},

{
chapter:"12",
question:"The domestic supply voltage in India is approximately:",
options:["110 V","120 V","220 V","440 V"],
answer:2,
explanation:"The standard domestic supply is about 220 V (commonly 220–240 V)."
},

{
chapter:"12",
question:"The purpose of the earth wire is to:",
options:["Increase current","Protect users from electric shock","Reduce voltage","Increase resistance"],
answer:1,
explanation:"The earth wire provides a safe path for leakage current."
},

{
chapter:"12",
question:"The fuse in a household circuit is connected in the:",
options:["Neutral wire","Earth wire","Live wire","Any wire"],
answer:2,
explanation:"The fuse is connected in the live wire to disconnect the supply during faults."
},

{
chapter:"12",
question:"An MCB protects a circuit from:",
options:["Low voltage","Overloading and short circuit","Low current","High resistance"],
answer:1,
explanation:"An MCB automatically trips when excessive current flows."
},

{
chapter:"12",
question:"Which of the following works on electromagnetic induction?",
options:["Electric generator","Transformer","Both generator and transformer","Electric heater"],
answer:2,
explanation:"Both generators and transformers operate on electromagnetic induction."
},

{
chapter:"12",
question:"Which chapter covers motors, generators, transformers and domestic electric circuits?",
options:["Electricity","Magnetic Effects of Electric Current","Our Environment","Light – Reflection and Refraction"],
answer:1,
explanation:"These topics are included in Chapter 12: Magnetic Effects of Electric Current."
},

{
chapter:"12",
question:"An electromagnet loses its magnetism when:",
options:["The current is switched off","The current is increased","The core is heated","The wire is lengthened"],
answer:0,
explanation:"An electromagnet works only while electric current flows."
},

{
chapter:"12",
question:"The core of a transformer is made of:",
options:["Copper","Soft iron","Steel","Aluminium"],
answer:1,
explanation:"Soft iron provides an efficient magnetic path with minimum energy loss."
},

{
chapter:"12",
question:"A transformer changes:",
options:["Current only","Voltage of AC","Resistance","Frequency"],
answer:1,
explanation:"A transformer is used to step up or step down AC voltage."
},

{
chapter:"12",
question:"Which device is used to generate electricity in power stations?",
options:["Electric motor","Electric generator","Transformer","Battery"],
answer:1,
explanation:"Generators convert mechanical energy into electrical energy."
},

{
chapter:"12",
question:"Which rule is used to find the direction of induced current?",
options:["Fleming's Left-Hand Rule","Right-Hand Thumb Rule","Fleming's Right-Hand Rule","Lenz's Law"],
answer:2,
explanation:"Fleming's Right-Hand Rule gives the direction of induced current."
},

{
chapter:"12",
question:"The magnetic field around a current-carrying conductor becomes weaker when:",
options:["Current increases","Distance from the conductor increases","More turns are added","Soft iron is used"],
answer:1,
explanation:"Magnetic field strength decreases with increasing distance."
},

{
chapter:"12",
question:"The direction of magnetic field around a straight conductor depends on:",
options:["Colour of wire","Direction of current","Length of wire","Thickness of wire"],
answer:1,
explanation:"Changing the current direction changes the magnetic field direction."
},

{
chapter:"12",
question:"Which of the following is an application of an electromagnet?",
options:["Electric bell","Scrap lifting crane","Relay","All of these"],
answer:3,
explanation:"Electromagnets are widely used in bells, cranes and relays."
},

{
chapter:"12",
question:"Which of the following uses a DC motor?",
options:["Battery-operated toy car","Electric fan","AC ceiling fan","Transformer"],
answer:0,
explanation:"Battery-operated devices commonly use DC motors."
},

{
chapter:"12",
question:"The split-ring commutator is found in:",
options:["AC generator","DC motor","Transformer","Voltmeter"],
answer:1,
explanation:"A split-ring commutator is used in DC motors."
},

{
chapter:"12",
question:"Slip rings are used in:",
options:["DC motor","AC generator","Electric bell","Fuse"],
answer:1,
explanation:"Slip rings allow continuous generation of alternating current."
},

{
chapter:"12",
question:"Magnetic field lines are closest together near:",
options:["The poles of a magnet","The centre of the magnet","Far away from the magnet","Everywhere equally"],
answer:0,
explanation:"The magnetic field is strongest near the poles."
},

{
chapter:"12",
question:"The SI unit of magnetic flux density is:",
options:["Weber","Tesla","Henry","Ampere"],
answer:1,
explanation:"Magnetic flux density is measured in tesla (T)."
},

{
chapter:"12",
question:"The direction of force on a conductor can be reversed by:",
options:["Reversing current","Reversing magnetic field","Both A and B","Neither A nor B"],
answer:2,
explanation:"Reversing either current or magnetic field reverses the force."
},

{
chapter:"12",
question:"An electric motor works because:",
options:["Current heats the wire","Magnetic force acts on a current-carrying conductor","Chemical reaction occurs","Voltage increases continuously"],
answer:1,
explanation:"The motor rotates due to magnetic force on the conductor."
},

{
chapter:"12",
question:"A generator produces electricity using:",
options:["Chemical energy","Mechanical energy","Heat energy","Solar energy"],
answer:1,
explanation:"Mechanical energy is converted into electrical energy."
},

{
chapter:"12",
question:"The main advantage of an electromagnet over a permanent magnet is:",
options:["It is always stronger","Its magnetism can be switched ON and OFF","It never heats up","It needs no current"],
answer:1,
explanation:"An electromagnet works only when current flows, so it can be controlled."
},

{
chapter:"12",
question:"Which safety device automatically switches OFF the circuit during overload?",
options:["Fuse","MCB","Resistor","Capacitor"],
answer:1,
explanation:"MCB trips automatically during overload or short circuit."
},

{
chapter:"12",
question:"Which rule is used to determine the direction of magnetic field around a straight conductor?",
options:["Fleming's Left-Hand Rule","Fleming's Right-Hand Rule","Right-Hand Thumb Rule","Lenz's Law"],
answer:2,
explanation:"The Right-Hand Thumb Rule gives the direction of the magnetic field."
},

{
chapter:"12",
question:"Chapter 12 'Magnetic Effects of Electric Current' mainly includes:",
options:["Magnetic fields, electromagnets, electric motors, generators, transformers and domestic electric safety","Carbon compounds","Life processes","Our Environment"],
answer:0,
explanation:"These are the major concepts covered in Chapter 12."
},


]