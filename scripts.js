const questions = [
  // Add your questions here
  {
    question: "How many roots does a typical maxillary first molar have?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "3",
    explanation: "The maxillary first molar typically has three roots: two buccal and one palatal."
  },
  {
    question: "Which muscle is primarily responsible for closing the mouth?",
    choices: ["Masseter", "Buccinator", "Temporalis", "Lateral pterygoid"],
    correctAnswer: "Masseter",
    explanation: "The masseter is a powerful muscle that elevates the mandible to close the mouth."
  },
  {
    question: "How many roots does a typical maxillary first molar have?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "3",
    explanation: "The maxillary first molar typically has three roots: two buccal and one palatal."
  },
  {
    question: "Which muscle is primarily responsible for closing the mouth?",
    choices: ["Masseter", "Buccinator", "Temporalis", "Lateral pterygoid"],
    correctAnswer: "Masseter",
    explanation: "The masseter is a powerful muscle that elevates the mandible to close the mouth."
  },
  {
    question: "Which tooth is most commonly congenitally missing?",
    choices: ["Maxillary lateral incisor", "Mandibular canine", "Maxillary first premolar", "Mandibular second molar"],
    correctAnswer: "Maxillary lateral incisor",
    explanation: "The maxillary lateral incisor is one of the most commonly congenitally missing teeth."
  },
  {
    question: "Which part of the tooth contains the blood vessels and nerves?",
    choices: ["Enamel", "Dentin", "Pulp", "Cementum"],
    correctAnswer: "Pulp",
    explanation: "The pulp chamber contains the tooth's blood vessels, nerves, and connective tissue."
  },
  {
    question: "What is the most common cause of dry socket after a tooth extraction?",
    choices: ["Poor blood clot formation", "Excessive rinsing", "Infection", "Tobacco use"],
    correctAnswer: "Poor blood clot formation",
    explanation: "Dry socket occurs when the blood clot at the extraction site dislodges or doesn't form properly."
  },
  {
    question: "Which nerve innervates the muscles of mastication?",
    choices: ["Facial nerve", "Mandibular nerve", "Hypoglossal nerve", "Trigeminal nerve"],
    correctAnswer: "Mandibular nerve",
    explanation: "The mandibular nerve, a branch of the trigeminal nerve, is responsible for innervating the muscles of mastication."
  },
  {
    question: "Which dental instrument is used to measure pocket depth around a tooth?",
    choices: ["Scaler", "Curette", "Periodontal probe", "Explorer"],
    correctAnswer: "Periodontal probe",
    explanation: "A periodontal probe is used to measure the depth of periodontal pockets around teeth."
  },
  {
    question: "How many roots does a mandibular second molar typically have?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "2",
    explanation: "Mandibular molars typically have two roots: a mesial root and a distal root."
  },
  {
    question: "Which muscle helps elevate the mandible during chewing?",
    choices: ["Masseter", "Lateral pterygoid", "Mylohyoid", "Orbicularis oris"],
    correctAnswer: "Masseter",
    explanation: "The masseter is a key muscle involved in elevating the mandible during chewing."
  },

  // Oral Pathology
  {
    question: "Which condition is commonly associated with Candida albicans in the oral cavity?",
    choices: ["Oral leukoplakia", "Oral thrush", "Herpes labialis", "Geographic tongue"],
    correctAnswer: "Oral thrush",
    explanation: "Oral thrush is a fungal infection in the mouth caused by Candida albicans."
  },
  {
    question: "Which virus is most commonly associated with oral cold sores?",
    choices: ["Herpes simplex virus", "Epstein-Barr virus", "Human papillomavirus", "Coxsackievirus"],
    correctAnswer: "Herpes simplex virus",
    explanation: "Herpes simplex virus (HSV-1) is the virus responsible for causing cold sores around the mouth."
  },
  {
    question: "What is the primary risk factor for developing oral cancer?",
    choices: ["Smoking", "Vitamin D deficiency", "Dry mouth", "Poor oral hygiene"],
    correctAnswer: "Smoking",
    explanation: "Tobacco smoking is the most significant risk factor for developing oral cancer."
  },
  {
    question: "Which premalignant oral lesion is characterized by white patches that cannot be rubbed off?",
    choices: ["Leukoplakia", "Oral lichen planus", "Candidiasis", "Aphthous ulcers"],
    correctAnswer: "Leukoplakia",
    explanation: "Leukoplakia is a premalignant lesion that presents as white patches on the oral mucosa that cannot be rubbed off."
  },
  {
    question: "What is the primary cause of gingivitis?",
    choices: ["Plaque buildup", "Tobacco use", "Trauma", "Dry mouth"],
    correctAnswer: "Plaque buildup",
    explanation: "Gingivitis is most commonly caused by the accumulation of dental plaque on the teeth and gums."
  },
  {
    question: "Which oral condition is characterized by burning sensations on the tongue and altered taste?",
    choices: ["Burning mouth syndrome", "Geographic tongue", "Leukoplakia", "Herpes labialis"],
    correctAnswer: "Burning mouth syndrome",
    explanation: "Burning mouth syndrome is characterized by a burning sensation in the mouth, often accompanied by altered taste."
  },
  {
    question: "Which of the following is a common symptom of temporomandibular joint dysfunction (TMD)?",
    choices: ["Jaw pain", "Toothache", "Gum swelling", "Bleeding gums"],
    correctAnswer: "Jaw pain",
    explanation: "TMD often presents as jaw pain, clicking, and restricted movement of the jaw."
  },
  {
    question: "Which virus is associated with hand, foot, and mouth disease?",
    choices: ["Herpes simplex virus", "Coxsackievirus", "Epstein-Barr virus", "Human papillomavirus"],
    correctAnswer: "Coxsackievirus",
    explanation: "Hand, foot, and mouth disease is caused by the coxsackievirus, presenting with oral ulcers and rash on hands and feet."
  },
  {
    question: "What is the recommended treatment for pericoronitis?",
    choices: ["Irrigation and antibiotics", "Extraction", "Filling", "Root canal"],
    correctAnswer: "Irrigation and antibiotics",
    explanation: "Pericoronitis is often treated with irrigation of the infected area and antibiotics to clear the infection."
  },
  {
    question: "What is the purpose of acid etching in the placement of composite restorations?",
    choices: ["To bond the restoration", "To clean the tooth surface", "To increase adhesion", "To whiten the tooth"],
    correctAnswer: "To increase adhesion",
    explanation: "Acid etching is used to increase the surface roughness of enamel, enhancing the adhesion of composite restorations."
  },
  {
    question: "Which tooth has the longest root in the human dentition?",
    choices: ["Maxillary canine", "Mandibular first molar", "Maxillary central incisor", "Maxillary second premolar"],
    correctAnswer: "Maxillary canine",
    explanation: "The maxillary canine has the longest root of all teeth in the human dentition."
  },
  {
    question: "Which nerve supplies sensation to the mandibular teeth?",
    choices: ["Inferior alveolar nerve", "Facial nerve", "Maxillary nerve", "Lingual nerve"],
    correctAnswer: "Inferior alveolar nerve",
    explanation: "The inferior alveolar nerve supplies sensation to all mandibular teeth."
  },
  {
    question: "How many cusps does a typical mandibular second molar have?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "4",
    explanation: "The mandibular second molar typically has four cusps."
  },
  {
    question: "Which nerve provides sensory innervation to the anterior two-thirds of the tongue?",
    choices: ["Glossopharyngeal nerve", "Lingual nerve", "Facial nerve", "Hypoglossal nerve"],
    correctAnswer: "Lingual nerve",
    explanation: "The lingual nerve, a branch of the mandibular nerve, supplies sensation to the anterior two-thirds of the tongue."
  },
  {
    question: "Which muscle is responsible for retracting the tongue?",
    choices: ["Styloglossus", "Hyoglossus", "Genioglossus", "Palatoglossus"],
    correctAnswer: "Styloglossus",
    explanation: "The styloglossus muscle retracts the tongue back into the oral cavity."
  },
  {
    question: "How many roots does a maxillary first premolar usually have?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "2",
    explanation: "A maxillary first premolar typically has two roots."
  },
  {
    question: "Which part of the tooth contains living cells?",
    choices: ["Enamel", "Dentin", "Pulp", "Cementum"],
    correctAnswer: "Pulp",
    explanation: "The pulp contains the blood vessels, nerves, and living cells that nourish the tooth."
  },
  {
    question: "Which tooth typically erupts first in primary dentition?",
    choices: ["Maxillary central incisor", "Mandibular central incisor", "Maxillary lateral incisor", "Mandibular first molar"],
    correctAnswer: "Mandibular central incisor",
    explanation: "The mandibular central incisor is usually the first tooth to erupt in primary dentition."
  },
  {
    question: "Which salivary gland produces the most saliva during meals?",
    choices: ["Parotid gland", "Submandibular gland", "Sublingual gland", "Minor salivary glands"],
    correctAnswer: "Parotid gland",
    explanation: "The parotid gland produces the most saliva during meals, secreting a serous (watery) fluid."
  },
  {
    question: "Which teeth are referred to as the '6-year molars'?",
    choices: ["First molars", "Second molars", "Third molars", "Premolars"],
    correctAnswer: "First molars",
    explanation: "The first molars, which erupt around the age of 6, are referred to as '6-year molars'."
  },
  
  // Oral Pathology
  {
    question: "What is the primary cause of oral leukoplakia?",
    choices: ["Tobacco use", "Alcohol consumption", "Viral infection", "Poor oral hygiene"],
    correctAnswer: "Tobacco use",
    explanation: "Oral leukoplakia is often associated with tobacco use, both smoking and smokeless tobacco."
  },
  {
    question: "Which condition is characterized by desquamation and redness of the gingiva?",
    choices: ["Pemphigus vulgaris", "Erythema multiforme", "Lichen planus", "Desquamative gingivitis"],
    correctAnswer: "Desquamative gingivitis",
    explanation: "Desquamative gingivitis presents with sloughing of the gingival epithelium and redness, often associated with immune-mediated conditions."
  },
  {
    question: "Which bacterial species is primarily responsible for causing dental caries?",
    choices: ["Streptococcus mutans", "Porphyromonas gingivalis", "Fusobacterium nucleatum", "Prevotella intermedia"],
    correctAnswer: "Streptococcus mutans",
    explanation: "Streptococcus mutans is the primary bacteria involved in the initiation of dental caries."
  },
  {
    question: "What is the most common oral lesion associated with HIV?",
    choices: ["Oral hairy leukoplakia", "Candidiasis", "Kaposi's sarcoma", "Herpes labialis"],
    correctAnswer: "Candidiasis",
    explanation: "Oral candidiasis is the most common oral lesion associated with HIV, often occurring due to immune suppression."
  },
  {
    question: "Which of the following is the most common cause of angular cheilitis?",
    choices: ["Candida infection", "Herpes simplex virus", "Bacterial infection", "Vitamin B12 deficiency"],
    correctAnswer: "Candida infection",
    explanation: "Angular cheilitis is most commonly caused by a fungal infection with Candida species, often in conjunction with Staphylococcus aureus."
  },
  {
    question: "Which oral condition presents as a 'geographic' map-like appearance on the tongue?",
    choices: ["Geographic tongue", "Lichen planus", "Oral candidiasis", "Leukoplakia"],
    correctAnswer: "Geographic tongue",
    explanation: "Geographic tongue appears as areas of erythema on the tongue, bordered by white margins, and changes in shape over time."
  },
  {
    question: "Which virus is primarily responsible for causing oral cold sores?",
    choices: ["Herpes simplex virus type 1", "Epstein-Barr virus", "Cytomegalovirus", "Varicella-zoster virus"],
    correctAnswer: "Herpes simplex virus type 1",
    explanation: "Herpes simplex virus type 1 (HSV-1) causes oral cold sores, commonly known as herpes labialis."
  },
  {
    question: "Which condition is characterized by a white lesion on the lateral border of the tongue in immunocompromised patients?",
    choices: ["Oral hairy leukoplakia", "Oral lichen planus", "Geographic tongue", "Oral candidiasis"],
    correctAnswer: "Oral hairy leukoplakia",
    explanation: "Oral hairy leukoplakia is caused by Epstein-Barr virus and is typically seen in immunocompromised patients, particularly those with HIV."
  },
  {
    question: "What is the most common benign tumor of the salivary glands?",
    choices: ["Pleomorphic adenoma", "Warthin's tumor", "Mucoepidermoid carcinoma", "Adenoid cystic carcinoma"],
    correctAnswer: "Pleomorphic adenoma",
    explanation: "Pleomorphic adenoma is the most common benign tumor of the salivary glands."
  },
  {
    question: "Which condition is associated with painful ulcers in the oral mucosa that recur periodically?",
    choices: ["Aphthous stomatitis", "Leukoplakia", "Candidiasis", "Oral lichen planus"],
    correctAnswer: "Aphthous stomatitis",
    explanation: "Aphthous stomatitis presents as recurrent, painful ulcers in the oral mucosa, commonly known as canker sores."
  },

  // Preventive Dentistry
  {
    question: "What is the primary role of fluoride in preventing dental caries?",
    choices: ["Remineralization", "Tooth whitening", "Desensitization", "Plaque reduction"],
    correctAnswer: "Remineralization",
    explanation: "Fluoride helps prevent dental caries by promoting remineralization of tooth enamel."
  },
  {
    question: "Which habit is most likely to lead to tooth erosion?",
    choices: ["Frequent consumption of acidic beverages", "Brushing too often", "Eating sugary foods", "Using mouthwash"],
    correctAnswer: "Frequent consumption of acidic beverages",
    explanation: "Frequent consumption of acidic beverages, such as soda and citrus drinks, can erode tooth enamel over time."
  },
  {
    question: "Which oral hygiene practice is most effective in preventing interproximal caries?",
    choices: ["Flossing", "Brushing twice a day", "Using mouthwash", "Chewing sugar-free gum"],
    correctAnswer: "Flossing",
    explanation: "Flossing is the most effective method for cleaning interproximal spaces between teeth and preventing interproximal caries."
  },
  {
    question: "What is the recommended concentration of fluoride in toothpaste for adults at high risk for dental caries?",
    choices: ["500 ppm", "1000 ppm", "1500 ppm", "5000 ppm"],
    correctAnswer: "5000 ppm",
    explanation: "For adults at high risk for dental caries, fluoride toothpaste with a concentration of 5000 ppm is recommended."
  },
  {
    question: "Which food is most likely to contribute to dental caries?",
    choices: ["Sticky, sugary foods", "Leafy green vegetables", "Nuts", "Cheese"],
    correctAnswer: "Sticky, sugary foods",
    explanation: "Sticky, sugary foods adhere to the teeth and provide a substrate for bacteria, leading to the development of dental caries."
  },
  {
    question: "Which vitamin is essential for maintaining healthy gingiva and preventing scurvy?",
    choices: ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin E"],
    correctAnswer: "Vitamin C",
    explanation: "Vitamin C is essential for the formation of collagen and the maintenance of healthy gingiva, preventing conditions like scurvy."
  },
  {
    question: "What is the optimal frequency for routine dental check-ups for patients with good oral health?",
    choices: ["Every 3 months", "Every 6 months", "Annually", "Every 2 years"],
    correctAnswer: "Every 6 months",
    explanation: "Patients with good oral health are typically recommended to have routine dental check-ups every 6 months."
  },
  {
    question: "Which food helps neutralize acid in the mouth and is considered protective against dental caries?",
    choices: ["Cheese", "Citrus fruits", "Candies", "Crackers"],
    correctAnswer: "Cheese",
    explanation: "Cheese helps neutralize acid in the mouth and increases saliva production, offering protection against dental caries."
  },
  {
    question: "What is the purpose of pit and fissure sealants?",
    choices: ["Prevent dental caries", "Strengthen enamel", "Reduce tooth sensitivity", "Whiten teeth"],
    correctAnswer: "Prevent dental caries",
    explanation: "Pit and fissure sealants are applied to the chewing surfaces of molars to seal off deep grooves and prevent dental caries."
  },
  {
    question: "What is the main dietary recommendation for reducing the risk of dental caries?",
    choices: ["Reduce sugar intake", "Increase protein intake", "Increase fiber intake", "Avoid acidic foods"],
    correctAnswer: "Reduce sugar intake",
    explanation: "Reducing sugar intake is the most important dietary recommendation for lowering the risk of developing dental caries."
  },

  // Restorative Dentistry
  {
    question: "Which restorative material releases fluoride over time?",
    choices: ["Glass ionomer", "Composite resin", "Amalgam", "Gold"],
    correctAnswer: "Glass ionomer",
    explanation: "Glass ionomer releases fluoride over time, which helps prevent secondary caries."
  },
  {
    question: "Which restorative material is commonly used for esthetic anterior restorations?",
    choices: ["Composite resin", "Amalgam", "Gold", "Glass ionomer"],
    correctAnswer: "Composite resin",
    explanation: "Composite resin is commonly used for anterior restorations because of its tooth-colored appearance and esthetics."
  },
  {
    question: "Which component is used in composite restorations to increase adhesion to enamel?",
    choices: ["Etchant", "Sealant", "Fluoride", "Calcium hydroxide"],
    correctAnswer: "Etchant",
    explanation: "An etchant, typically phosphoric acid, is used to roughen the enamel surface, improving adhesion of composite restorations."
  },
  {
    question: "Which dental material is commonly used for temporary fillings?",
    choices: ["Zinc oxide eugenol", "Composite resin", "Amalgam", "Glass ionomer"],
    correctAnswer: "Zinc oxide eugenol",
    explanation: "Zinc oxide eugenol is commonly used for temporary fillings because of its soothing properties on the pulp."
  },
  {
    question: "Which restorative material is best suited for posterior restorations due to its strength and durability?",
    choices: ["Amalgam", "Composite resin", "Gold", "Porcelain"],
    correctAnswer: "Amalgam",
    explanation: "Amalgam is commonly used for posterior restorations because of its strength, durability, and ability to withstand chewing forces."
  },
  {
    question: "What is the primary purpose of using a dental liner in deep cavity preparations?",
    choices: ["To protect the pulp", "To increase adhesion", "To reduce sensitivity", "To enhance esthetics"],
    correctAnswer: "To protect the pulp",
    explanation: "A dental liner is used to protect the pulp from thermal and chemical irritation in deep cavity preparations."
  },
  {
    question: "Which instrument is used to smooth and shape amalgam restorations?",
    choices: ["Burnisher", "Explorer", "Scaler", "Curette"],
    correctAnswer: "Burnisher",
    explanation: "A burnisher is used to smooth and shape amalgam restorations after placement."
  },
  {
    question: "Which restorative material is most suitable for inlays and onlays?",
    choices: ["Gold", "Composite resin", "Amalgam", "Acrylic resin"],
    correctAnswer: "Gold",
    explanation: "Gold is a highly durable material commonly used for inlays and onlays due to its longevity and fit."
  },
  {
    question: "Which procedure is recommended for restoring a tooth with extensive decay and structural damage?",
    choices: ["Crown", "Filling", "Sealant", "Veneer"],
    correctAnswer: "Crown",
    explanation: "A crown is recommended for restoring a tooth with extensive decay or damage that cannot be adequately restored with a filling."
  },
  {
    question: "Which material is commonly used to bond indirect restorations, such as crowns, to teeth?",
    choices: ["Dental cement", "Composite resin", "Glass ionomer", "Zinc oxide eugenol"],
    correctAnswer: "Dental cement",
    explanation: "Dental cement is used to bond indirect restorations like crowns, bridges, and inlays to the tooth structure."
  },
  {
    question: "Which cranial nerve provides parasympathetic innervation to the parotid gland?",
    choices: ["Facial nerve", "Glossopharyngeal nerve", "Trigeminal nerve", "Vagus nerve"],
    correctAnswer: "Glossopharyngeal nerve",
    explanation: "The glossopharyngeal nerve (CN IX) provides parasympathetic fibers to the parotid gland via the otic ganglion."
  },
  {
    question: "What is the shape of the mandibular first molar's occlusal surface?",
    choices: ["Triangular", "Trapezoidal", "Pentagonal", "Rhomboidal"],
    correctAnswer: "Pentagonal",
    explanation: "The occlusal surface of the mandibular first molar typically has a pentagonal shape."
  },
  {
    question: "Which nerve is at risk of injury during the extraction of an impacted mandibular third molar?",
    choices: ["Lingual nerve", "Inferior alveolar nerve", "Facial nerve", "Glossopharyngeal nerve"],
    correctAnswer: "Inferior alveolar nerve",
    explanation: "The inferior alveolar nerve is closely associated with the roots of the mandibular third molar and is at risk of injury during extraction."
  },
  {
    question: "Which mandibular movement is primarily controlled by the lateral pterygoid muscle?",
    choices: ["Elevation", "Retraction", "Protrusion", "Lateral deviation"],
    correctAnswer: "Protrusion",
    explanation: "The lateral pterygoid muscle is responsible for the protrusion of the mandible during mastication."
  },
  {
    question: "Which tooth has the most complex root canal system?",
    choices: ["Maxillary first molar", "Mandibular lateral incisor", "Maxillary canine", "Mandibular second premolar"],
    correctAnswer: "Maxillary first molar",
    explanation: "The maxillary first molar often has a complex root canal system, with the mesiobuccal root typically containing two canals."
  },
  
  // Oral Pathology
  {
    question: "Which malignant neoplasm is most commonly associated with the salivary glands?",
    choices: ["Mucoepidermoid carcinoma", "Adenoid cystic carcinoma", "Pleomorphic adenoma", "Warthin's tumor"],
    correctAnswer: "Mucoepidermoid carcinoma",
    explanation: "Mucoepidermoid carcinoma is the most common malignant tumor of the salivary glands, particularly the parotid gland."
  },
  {
    question: "Which systemic disease is associated with pyogenic granulomas in the oral cavity?",
    choices: ["Pregnancy", "Diabetes mellitus", "Hypertension", "Crohn's disease"],
    correctAnswer: "Pregnancy",
    explanation: "Pyogenic granulomas, also called 'pregnancy tumors', are common in pregnant women due to hormonal changes."
  },
  {
    question: "Which oral lesion is most commonly associated with Epstein-Barr virus in HIV-positive patients?",
    choices: ["Oral hairy leukoplakia", "Kaposi's sarcoma", "Oral candidiasis", "Primary herpetic gingivostomatitis"],
    correctAnswer: "Oral hairy leukoplakia",
    explanation: "Oral hairy leukoplakia, a white patch on the lateral borders of the tongue, is commonly associated with Epstein-Barr virus in immunocompromised patients."
  },
  {
    question: "Which genetic disorder is associated with supernumerary teeth and multiple odontomas?",
    choices: ["Gardner's syndrome", "Osteogenesis imperfecta", "Amelogenesis imperfecta", "Cherubism"],
    correctAnswer: "Gardner's syndrome",
    explanation: "Gardner's syndrome is a genetic disorder characterized by multiple colorectal polyps, osteomas, and supernumerary teeth."
  },
  {
    question: "Which oral lesion presents as a radiolucent area in the mandible with a 'honeycomb' or 'soap-bubble' appearance?",
    choices: ["Ameloblastoma", "Odontogenic keratocyst", "Cemento-osseous dysplasia", "Fibrous dysplasia"],
    correctAnswer: "Ameloblastoma",
    explanation: "Ameloblastoma often appears as a multilocular radiolucency with a 'honeycomb' or 'soap-bubble' appearance on radiographs."
  },
  
  // Preventive Dentistry
  {
    question: "Which fluoride treatment has the longest-lasting effect on enamel remineralization?",
    choices: ["Fluoride varnish", "Fluoride rinse", "Fluoride gel", "Fluoride toothpaste"],
    correctAnswer: "Fluoride varnish",
    explanation: "Fluoride varnish provides the longest-lasting fluoride exposure to enamel, aiding in prolonged remineralization."
  },
  {
    question: "What is the maximum recommended fluoride concentration in public water systems in temperate climates?",
    choices: ["0.7 ppm", "1.0 ppm", "1.5 ppm", "2.0 ppm"],
    correctAnswer: "0.7 ppm",
    explanation: "In temperate climates, the optimal fluoride concentration in drinking water to prevent caries is 0.7 parts per million (ppm)."
  },
  {
    question: "Which dietary recommendation is most effective in reducing caries risk in high-risk patients?",
    choices: ["Reduce frequency of sugar intake", "Increase protein intake", "Increase water consumption", "Increase calcium intake"],
    correctAnswer: "Reduce frequency of sugar intake",
    explanation: "Reducing the frequency of sugar intake is the most effective dietary modification to lower caries risk."
  },
  {
    question: "What is the recommended interval for fluoride varnish application in children at high risk of dental caries?",
    choices: ["Every 3 months", "Every 6 months", "Annually", "Every 2 years"],
    correctAnswer: "Every 3 months",
    explanation: "For children at high risk of dental caries, fluoride varnish should be applied every 3 months to maximize its protective effect."
  },
  {
    question: "Which sealant material is considered most durable for long-term protection of occlusal surfaces?",
    choices: ["Resin-based sealants", "Glass ionomer sealants", "Polymer-based sealants", "Amalgam sealants"],
    correctAnswer: "Resin-based sealants",
    explanation: "Resin-based sealants provide long-term protection of occlusal surfaces due to their superior bonding and durability."
  },
  
  // Restorative Dentistry
  {
    question: "What is the preferred restorative material for a deep Class II cavity preparation in a high-stress posterior tooth?",
    choices: ["Amalgam", "Composite resin", "Glass ionomer", "Gold inlay"],
    correctAnswer: "Amalgam",
    explanation: "Amalgam is preferred for restoring deep Class II cavities in high-stress posterior teeth due to its strength and durability."
  },
  {
    question: "Which bonding agent provides the highest bond strength for composite restorations?",
    choices: ["Total-etch", "Self-etch", "Glass ionomer", "Zinc oxide eugenol"],
    correctAnswer: "Total-etch",
    explanation: "Total-etch bonding agents, which use phosphoric acid to etch both enamel and dentin, provide the highest bond strength for composite restorations."
  },
  {
    question: "Which restorative material is contraindicated in patients with a known allergy to nickel?",
    choices: ["Amalgam", "Gold alloy", "Nickel-chromium alloy", "Ceramic"],
    correctAnswer: "Nickel-chromium alloy",
    explanation: "Nickel-chromium alloys are contraindicated in patients with a known nickel allergy, as nickel is a common allergen in dental materials."
  },
  {
    question: "What is the ideal curing light wavelength for polymerizing light-cured composite resins?",
    choices: ["320-400 nm", "400-500 nm", "450-600 nm", "600-700 nm"],
    correctAnswer: "400-500 nm",
    explanation: "The ideal wavelength for curing light-cured composite resins is 400-500 nm, typically provided by blue light."
  },
  {
    question: "Which material is preferred for indirect restorations such as inlays and onlays in esthetic zones?",
    choices: ["Lithium disilicate", "Amalgam", "Glass ionomer", "Nickel-chromium alloy"],
    correctAnswer: "Lithium disilicate",
    explanation: "Lithium disilicate is preferred for indirect restorations in esthetic zones due to its excellent esthetic properties and strength."
  },
  
  // Pharmacology
  {
    question: "Which local anesthetic agent is associated with the lowest risk of systemic toxicity?",
    choices: ["Lidocaine", "Bupivacaine", "Mepivacaine", "Articaine"],
    correctAnswer: "Mepivacaine",
    explanation: "Mepivacaine is associated with a lower risk of systemic toxicity compared to other local anesthetics such as bupivacaine."
  },
  {
    question: "What is the maximum recommended dose of epinephrine for a cardiac patient receiving local anesthesia?",
    choices: ["0.04 mg", "0.1 mg", "0.2 mg", "0.3 mg"],
    correctAnswer: "0.04 mg",
    explanation: "The maximum recommended dose of epinephrine for cardiac patients is 0.04 mg to avoid cardiovascular complications."
  },
  {
    question: "Which antibiotic is considered first-line treatment for dental abscesses in patients allergic to penicillin?",
    choices: ["Clindamycin", "Erythromycin", "Metronidazole", "Tetracycline"],
    correctAnswer: "Clindamycin",
    explanation: "Clindamycin is the antibiotic of choice for treating dental abscesses in patients with a penicillin allergy."
  },
  {
    question: "Which drug is contraindicated in a patient taking a monoamine oxidase inhibitor (MAOI)?",
    choices: ["Lidocaine with epinephrine", "Mepivacaine", "Acetaminophen", "Ibuprofen"],
    correctAnswer: "Lidocaine with epinephrine",
    explanation: "Epinephrine-containing local anesthetics are contraindicated in patients taking MAOIs due to the risk of hypertensive crisis."
  },
  {
    question: "Which analgesic is preferred for managing dental pain in patients with a history of gastric ulcers?",
    choices: ["Acetaminophen", "Ibuprofen", "Aspirin", "Ketorolac"],
    correctAnswer: "Acetaminophen",
    explanation: "Acetaminophen is preferred over NSAIDs for managing dental pain in patients with a history of gastric ulcers, as NSAIDs can exacerbate ulcer symptoms."
  },
  
  // Radiology
  {
    question: "Which radiographic technique is most appropriate for visualizing the entire dentition in one film?",
    choices: ["Panoramic radiography", "Periapical radiography", "Bitewing radiography", "Occlusal radiography"],
    correctAnswer: "Panoramic radiography",
    explanation: "Panoramic radiography provides a comprehensive view of the entire dentition, maxilla, and mandible in one image."
  },
  {
    question: "Which radiographic feature is characteristic of a dentigerous cyst?",
    choices: ["Radiolucency surrounding the crown of an unerupted tooth", "Radiopaque lesion with irregular borders", "Multilocular radiolucency", "Ground-glass appearance"],
    correctAnswer: "Radiolucency surrounding the crown of an unerupted tooth",
    explanation: "A dentigerous cyst appears as a radiolucency surrounding the crown of an unerupted tooth, most commonly a third molar."
  },
  {
    question: "Which imaging modality is most appropriate for evaluating the extent of a mandibular fracture?",
    choices: ["Cone-beam computed tomography (CBCT)", "Periapical radiography", "Bitewing radiography", "Occlusal radiography"],
    correctAnswer: "Cone-beam computed tomography (CBCT)",
    explanation: "CBCT is the imaging modality of choice for evaluating mandibular fractures, as it provides detailed three-dimensional images of the bone."
  },
  {
    question: "Which radiographic technique is most effective for diagnosing interproximal caries?",
    choices: ["Bitewing radiography", "Panoramic radiography", "Occlusal radiography", "Cephalometric radiography"],
    correctAnswer: "Bitewing radiography",
    explanation: "Bitewing radiography is the gold standard for diagnosing interproximal caries, providing clear images of the contact areas between teeth."
  },
  {
    question: "Which radiographic sign is most suggestive of osteosarcoma in the jaw?",
    choices: ["Sunburst appearance", "Ground-glass opacity", "Honeycomb appearance", "Cotton-wool appearance"],
    correctAnswer: "Sunburst appearance",
    explanation: "Osteosarcoma often presents with a 'sunburst' appearance on radiographs due to the spiculated pattern of bone growth."
  },
  
  // Oral Surgery
  {
    question: "Which surgical instrument is commonly used for elevating mucoperiosteal flaps during oral surgery?",
    choices: ["Molt elevator", "Periosteal elevator", "Root tip pick", "Curette"],
    correctAnswer: "Periosteal elevator",
    explanation: "A periosteal elevator is used to elevate mucoperiosteal flaps during oral surgery procedures."
  },
  {
    question: "Which type of bone graft material is obtained from the patient's own body?",
    choices: ["Autograft", "Allograft", "Xenograft", "Alloplast"],
    correctAnswer: "Autograft",
    explanation: "Autografts are bone grafts harvested from the patient's own body, usually from the iliac crest or the mandible."
  },
  {
    question: "Which nerve is most commonly injured during a surgical procedure to remove an impacted mandibular third molar?",
    choices: ["Inferior alveolar nerve", "Lingual nerve", "Facial nerve", "Mental nerve"],
    correctAnswer: "Inferior alveolar nerve",
    explanation: "The inferior alveolar nerve is the nerve most at risk during mandibular third molar extractions due to its proximity to the tooth roots."
  },
  {
    question: "Which complication is most likely to occur following the removal of an impacted maxillary third molar?",
    choices: ["Oroantral communication", "Trismus", "Alveolar osteitis", "Inferior alveolar nerve injury"],
    correctAnswer: "Oroantral communication",
    explanation: "Oroantral communication is a potential complication following the removal of an impacted maxillary third molar due to the proximity of the sinus."
  },
  {
    question: "Which post-operative instruction is most effective in preventing dry socket after a tooth extraction?",
    choices: ["Avoid smoking for at least 48 hours", "Eat solid food immediately", "Rinse with mouthwash frequently", "Apply ice directly to the extraction site"],
    correctAnswer: "Avoid smoking for at least 48 hours",
    explanation: "Smoking increases the risk of dry socket by dislodging the blood clot; patients are advised to avoid smoking for at least 48 hours post-extraction."
  },
  {
    question: "Which branch of the trigeminal nerve provides motor innervation to the muscles of mastication?",
    choices: ["Ophthalmic nerve", "Maxillary nerve", "Mandibular nerve", "Facial nerve"],
    correctAnswer: "Mandibular nerve",
    explanation: "The mandibular branch of the trigeminal nerve (V3) provides motor innervation to the muscles of mastication."
  },
  {
    question: "Which tooth is most commonly associated with dens invaginatus?",
    choices: ["Maxillary lateral incisor", "Mandibular central incisor", "Maxillary first premolar", "Mandibular first molar"],
    correctAnswer: "Maxillary lateral incisor",
    explanation: "Dens invaginatus, also known as dens in dente, is most commonly found in the maxillary lateral incisors."
  },
  {
    question: "Which structure is located between the anterior and posterior bellies of the digastric muscle?",
    choices: ["Submandibular gland", "Parotid gland", "Submental lymph nodes", "Hyoid bone"],
    correctAnswer: "Hyoid bone",
    explanation: "The hyoid bone is situated between the anterior and posterior bellies of the digastric muscle."
  },
  {
    question: "What is the typical age of eruption for the maxillary first molar in permanent dentition?",
    choices: ["6-7 years", "8-9 years", "9-10 years", "10-11 years"],
    correctAnswer: "6-7 years",
    explanation: "The maxillary first molar typically erupts between 6-7 years of age in permanent dentition."
  },
  {
    question: "Which branch of the external carotid artery supplies blood to the maxillary teeth?",
    choices: ["Facial artery", "Lingual artery", "Maxillary artery", "Superficial temporal artery"],
    correctAnswer: "Maxillary artery",
    explanation: "The maxillary artery, a branch of the external carotid artery, supplies blood to the maxillary teeth and associated structures."
  },
  
  // Oral Pathology
  {
    question: "Which salivary gland tumor has the highest potential for malignant transformation?",
    choices: ["Pleomorphic adenoma", "Warthin's tumor", "Mucoepidermoid carcinoma", "Adenoid cystic carcinoma"],
    correctAnswer: "Pleomorphic adenoma",
    explanation: "Pleomorphic adenoma is the most common benign salivary gland tumor and has the highest potential for malignant transformation."
  },
  {
    question: "Which cyst is commonly associated with the crown of an unerupted tooth?",
    choices: ["Dentigerous cyst", "Periapical cyst", "Residual cyst", "Nasopalatine duct cyst"],
    correctAnswer: "Dentigerous cyst",
    explanation: "A dentigerous cyst is a radiolucent lesion that forms around the crown of an unerupted tooth."
  },
  {
    question: "Which of the following oral lesions is most commonly associated with human papillomavirus (HPV)?",
    choices: ["Oral verruca vulgaris", "Oral lichen planus", "Aphthous ulcers", "Oral hairy leukoplakia"],
    correctAnswer: "Oral verruca vulgaris",
    explanation: "Oral verruca vulgaris is caused by human papillomavirus (HPV) and appears as a wart-like growth in the oral cavity."
  },
  {
    question: "Which genetic condition is characterized by abnormal tooth shape, enamel hypoplasia, and supernumerary teeth?",
    choices: ["Cleidocranial dysplasia", "Gardner's syndrome", "Amelogenesis imperfecta", "Cherubism"],
    correctAnswer: "Cleidocranial dysplasia",
    explanation: "Cleidocranial dysplasia is a genetic condition characterized by delayed tooth eruption, enamel hypoplasia, and the presence of supernumerary teeth."
  },
  {
    question: "Which radiographic feature is characteristic of fibrous dysplasia of the jaw?",
    choices: ["Ground-glass appearance", "Soap-bubble appearance", "Sunburst appearance", "Cotton-wool appearance"],
    correctAnswer: "Ground-glass appearance",
    explanation: "Fibrous dysplasia presents as a 'ground-glass' appearance on radiographs due to the abnormal bone formation."
  },
  
  // Restorative Dentistry
  {
    question: "Which restorative material is contraindicated in patients with a history of bisphenol A (BPA) sensitivity?",
    choices: ["Composite resin", "Amalgam", "Glass ionomer", "Ceramic"],
    correctAnswer: "Composite resin",
    explanation: "Composite resin materials may contain bisphenol A (BPA), making them unsuitable for patients with BPA sensitivity."
  },
  {
    question: "Which type of indirect restoration is recommended for a patient with heavy occlusal forces in the posterior region?",
    choices: ["Gold onlay", "Ceramic inlay", "Resin-based composite", "Zinc phosphate crown"],
    correctAnswer: "Gold onlay",
    explanation: "Gold onlays are highly durable and ideal for patients with heavy occlusal forces in posterior regions."
  },
  {
    question: "Which type of dental cement is typically used for bonding porcelain veneers?",
    choices: ["Resin cement", "Glass ionomer", "Zinc oxide eugenol", "Polycarboxylate cement"],
    correctAnswer: "Resin cement",
    explanation: "Resin cement is used for bonding porcelain veneers due to its superior adhesive properties and esthetic outcomes."
  },
  {
    question: "Which type of liner is most commonly used for deep cavity preparations close to the pulp?",
    choices: ["Calcium hydroxide", "Zinc oxide eugenol", "Glass ionomer", "Resin-modified glass ionomer"],
    correctAnswer: "Calcium hydroxide",
    explanation: "Calcium hydroxide is commonly used as a liner for deep cavity preparations because of its ability to stimulate dentin formation."
  },
  {
    question: "Which component of composite resin is responsible for polymerization?",
    choices: ["Initiator", "Filler particles", "Coupling agent", "Matrix"],
    correctAnswer: "Initiator",
    explanation: "The initiator in composite resin, typically camphorquinone, triggers polymerization when activated by light."
  },
  
  // Pharmacology
  {
    question: "Which class of drug is most commonly used to treat neuropathic pain in dentistry?",
    choices: ["Anticonvulsants", "Nonsteroidal anti-inflammatory drugs", "Opioids", "Antidepressants"],
    correctAnswer: "Anticonvulsants",
    explanation: "Anticonvulsants such as gabapentin are commonly used to manage neuropathic pain in dentistry."
  },
  {
    question: "Which drug is contraindicated in a patient with a history of malignant hyperthermia?",
    choices: ["Bupivacaine", "Lidocaine", "Nitrous oxide", "Sevoflurane"],
    correctAnswer: "Sevoflurane",
    explanation: "Inhalation anesthetics like sevoflurane are contraindicated in patients with a history of malignant hyperthermia due to the risk of triggering an episode."
  },
  {
    question: "Which antibiotic is commonly prescribed for dental infections in pregnant women?",
    choices: ["Amoxicillin", "Tetracycline", "Metronidazole", "Doxycycline"],
    correctAnswer: "Amoxicillin",
    explanation: "Amoxicillin is considered safe for use during pregnancy and is commonly prescribed for dental infections in pregnant women."
  },
  {
    question: "Which antihypertensive medication may cause gingival hyperplasia?",
    choices: ["Nifedipine", "Atenolol", "Hydrochlorothiazide", "Losartan"],
    correctAnswer: "Nifedipine",
    explanation: "Calcium channel blockers such as nifedipine are known to cause gingival hyperplasia as a side effect."
  },
  {
    question: "What is the recommended antibiotic regimen for the prevention of infective endocarditis in a patient allergic to penicillin?",
    choices: ["Clindamycin 600 mg", "Amoxicillin 2g", "Metronidazole 500 mg", "Doxycycline 100 mg"],
    correctAnswer: "Clindamycin 600 mg",
    explanation: "Clindamycin 600 mg is recommended as prophylaxis for infective endocarditis in penicillin-allergic patients before dental procedures."
  },
  
  // Radiology
  {
    question: "Which radiographic technique is best for detecting subgingival calculus?",
    choices: ["Bitewing radiography", "Periapical radiography", "Panoramic radiography", "Cone-beam computed tomography (CBCT)"],
    correctAnswer: "Periapical radiography",
    explanation: "Periapical radiography is best suited for detecting subgingival calculus due to its ability to capture the root surface and surrounding structures."
  },
  {
    question: "Which radiographic finding is characteristic of Paget's disease of bone?",
    choices: ["Cotton-wool appearance", "Ground-glass opacity", "Honeycomb appearance", "Sunburst pattern"],
    correctAnswer: "Cotton-wool appearance",
    explanation: "Paget's disease of bone presents with a 'cotton-wool' appearance on radiographs due to the abnormal bone remodeling."
  },
  {
    question: "Which radiographic technique is preferred for visualizing the entire temporomandibular joint (TMJ)?",
    choices: ["Panoramic radiography", "Bitewing radiography", "Cephalometric radiography", "Cone-beam computed tomography (CBCT)"],
    correctAnswer: "Cone-beam computed tomography (CBCT)",
    explanation: "CBCT is preferred for visualizing the TMJ due to its ability to capture three-dimensional images of the joint."
  },
  {
    question: "Which condition is characterized by a 'sunburst' appearance on radiographs?",
    choices: ["Osteosarcoma", "Fibrous dysplasia", "Ameloblastoma", "Ossifying fibroma"],
    correctAnswer: "Osteosarcoma",
    explanation: "Osteosarcoma often presents with a 'sunburst' pattern on radiographs due to the spiculated pattern of new bone formation."
  },
  {
    question: "Which radiographic finding is most commonly associated with a radicular cyst?",
    choices: ["Radiolucency at the apex of a non-vital tooth", "Radiopacity surrounding the crown of an impacted tooth", "Radiopaque lesion with a ground-glass appearance", "Multilocular radiolucency with soap-bubble appearance"],
    correctAnswer: "Radiolucency at the apex of a non-vital tooth",
    explanation: "A radicular cyst appears as a radiolucency at the apex of a non-vital tooth and is often associated with chronic periapical inflammation."
  },
  
  // Oral Surgery
  {
    question: "Which condition is the most common cause of delayed healing after dental extractions?",
    choices: ["Alveolar osteitis", "Infection", "Scleroderma", "Osteomyelitis"],
    correctAnswer: "Alveolar osteitis",
    explanation: "Alveolar osteitis, or dry socket, is the most common cause of delayed healing following dental extractions."
  },
  {
    question: "Which nerve is most likely to be damaged during mandibular sagittal split osteotomy surgery?",
    choices: ["Inferior alveolar nerve", "Lingual nerve", "Mental nerve", "Facial nerve"],
    correctAnswer: "Inferior alveolar nerve",
    explanation: "The inferior alveolar nerve is at risk during mandibular sagittal split osteotomy surgery due to its proximity to the surgical site."
  },
  {
    question: "Which oral surgery procedure is indicated for correcting severe skeletal malocclusions?",
    choices: ["Orthognathic surgery", "Apicoectomy", "Frenectomy", "Vestibuloplasty"],
    correctAnswer: "Orthognathic surgery",
    explanation: "Orthognathic surgery is performed to correct severe skeletal malocclusions by repositioning the maxilla or mandible."
  },
  {
    question: "Which type of bone graft is harvested from another species, such as bovine bone?",
    choices: ["Xenograft", "Autograft", "Allograft", "Alloplast"],
    correctAnswer: "Xenograft",
    explanation: "Xenografts are bone grafts harvested from another species, such as bovine bone, and are commonly used in oral surgery."
  },
  {
    question: "Which post-operative complication is most commonly associated with mandibular third molar extractions?",
    choices: ["Alveolar osteitis", "Maxillary sinus perforation", "Facial nerve injury", "Osteonecrosis"],
    correctAnswer: "Alveolar osteitis",
    explanation: "Alveolar osteitis, also known as dry socket, is the most common post-operative complication following mandibular third molar extractions."
  },
  
  // Endodontics
  {
    question: "Which diagnostic test is most reliable for determining pulp vitality?",
    choices: ["Electric pulp test", "Percussion test", "Thermal test", "Bite test"],
    correctAnswer: "Thermal test",
    explanation: "Thermal testing is the most reliable method for determining pulp vitality, especially when assessing the response to hot or cold stimuli."
  },
  {
    question: "Which endodontic file system is most effective for cleaning and shaping curved root canals?",
    choices: ["Nickel-titanium rotary files", "Stainless steel files", "Hand files", "Barbed broaches"],
    correctAnswer: "Nickel-titanium rotary files",
    explanation: "Nickel-titanium rotary files are flexible and effective at cleaning and shaping curved root canals, reducing the risk of canal transportation."
  },
  {
    question: "Which material is most commonly used for obturation during root canal therapy?",
    choices: ["Gutta-percha", "MTA", "Zinc oxide eugenol", "Calcium hydroxide"],
    correctAnswer: "Gutta-percha",
    explanation: "Gutta-percha is the most commonly used material for obturating the root canal system during endodontic therapy."
  },
  {
    question: "Which type of resorption is most commonly associated with trauma to a tooth?",
    choices: ["External root resorption", "Internal root resorption", "Replacement resorption", "Surface resorption"],
    correctAnswer: "External root resorption",
    explanation: "External root resorption is commonly associated with trauma, resulting in the loss of external root structure."
  },
  {
    question: "Which condition is most likely to cause apical radiolucency in a previously treated tooth?",
    choices: ["Chronic apical periodontitis", "Acute apical abscess", "Pulp necrosis", "Reversible pulpitis"],
    correctAnswer: "Chronic apical periodontitis",
    explanation: "Chronic apical periodontitis is the most likely cause of apical radiolucency in a previously treated tooth, indicating ongoing periapical inflammation."
  },
  {
    question: "Which nerve is most commonly injured during the extraction of a mandibular third molar?",
    choices: ["Inferior alveolar nerve", "Lingual nerve", "Mental nerve", "Buccal nerve"],
    correctAnswer: "Inferior alveolar nerve",
    explanation: "The inferior alveolar nerve is at risk of injury during the extraction of mandibular third molars due to its proximity to the roots."
  },
  {
    question: "Which condition is characterized by a severe infection of the floor of the mouth and is a dental emergency?",
    choices: ["Ludwig's angina", "Periapical abscess", "Cavernous sinus thrombosis", "Submandibular cellulitis"],
    correctAnswer: "Ludwig's angina",
    explanation: "Ludwig's angina is a severe cellulitis involving the submandibular, submental, and sublingual spaces, leading to airway obstruction."
  },
  {
    question: "Which surgical procedure involves repositioning the mandibular or maxillary bone to correct skeletal malocclusion?",
    choices: ["Orthognathic surgery", "Apicoectomy", "Frenectomy", "Vestibuloplasty"],
    correctAnswer: "Orthognathic surgery",
    explanation: "Orthognathic surgery is used to reposition the maxilla or mandible to correct skeletal malocclusions."
  },
  {
    question: "Which type of sutures is most commonly used for oral surgery due to its ability to dissolve over time?",
    choices: ["Vicryl sutures", "Silk sutures", "Prolene sutures", "Nylon sutures"],
    correctAnswer: "Vicryl sutures",
    explanation: "Vicryl sutures are absorbable and commonly used in oral surgery because they dissolve over time and do not require removal."
  },
  {
    question: "Which condition is associated with a 'floating tooth' appearance on radiographs and results from aggressive periodontitis?",
    choices: ["Langerhans cell histiocytosis", "Ameloblastoma", "Cherubism", "Fibrous dysplasia"],
    correctAnswer: "Langerhans cell histiocytosis",
    explanation: "Langerhans cell histiocytosis presents with bone destruction that causes teeth to appear 'floating' on radiographs."
  },
  
  // Prosthodontics
  {
    question: "Which is the most common cause of a fractured porcelain crown?",
    choices: ["Occlusal overload", "Inadequate tooth preparation", "Insufficient cement", "Faulty impression technique"],
    correctAnswer: "Occlusal overload",
    explanation: "Occlusal overload is the most common cause of fractured porcelain crowns, as excessive forces on the crown can lead to failure."
  },
  {
    question: "Which occlusal scheme is preferred for complete dentures?",
    choices: ["Balanced occlusion", "Group function", "Canine guidance", "Mutually protected occlusion"],
    correctAnswer: "Balanced occlusion",
    explanation: "Balanced occlusion is preferred in complete dentures to ensure even contact between the upper and lower teeth in all excursions."
  },
  {
    question: "Which type of impression material is commonly used for final impressions in crown and bridge work?",
    choices: ["Polyvinyl siloxane", "Alginate", "Zinc oxide eugenol", "Polyether"],
    correctAnswer: "Polyvinyl siloxane",
    explanation: "Polyvinyl siloxane is widely used for final impressions in crown and bridge work due to its high accuracy and dimensional stability."
  },
  {
    question: "What is the main disadvantage of using zirconia for fixed dental prostheses?",
    choices: ["Brittleness", "Lack of esthetics", "High cost", "Incompatibility with cement"],
    correctAnswer: "High cost",
    explanation: "The main disadvantage of zirconia is its high cost, although it offers excellent strength and esthetics for fixed dental prostheses."
  },
  {
    question: "Which type of pontic design is recommended for areas with high esthetic demands in fixed partial dentures?",
    choices: ["Modified ridge lap", "Ovate pontic", "Sanitary pontic", "Conical pontic"],
    correctAnswer: "Ovate pontic",
    explanation: "Ovate pontics are recommended in areas with high esthetic demands because they create the appearance of a tooth emerging from the gingiva."
  },
  
  // Periodontics
  {
    question: "Which condition is characterized by the destruction of alveolar bone, deep periodontal pockets, and tooth mobility in young patients?",
    choices: ["Aggressive periodontitis", "Chronic periodontitis", "Gingivitis", "Peri-implantitis"],
    correctAnswer: "Aggressive periodontitis",
    explanation: "Aggressive periodontitis involves rapid destruction of the periodontal attachment and alveolar bone in otherwise healthy young patients."
  },
  {
    question: "Which grafting procedure is most commonly used for treating gingival recession?",
    choices: ["Connective tissue graft", "Free gingival graft", "Alloderm graft", "Pedicle graft"],
    correctAnswer: "Connective tissue graft",
    explanation: "Connective tissue grafting is commonly used for root coverage procedures to treat gingival recession and restore the gingival contour."
  },
  {
    question: "Which periodontal condition is associated with necrosis of gingival tissues, pain, and a 'punched-out' appearance of interdental papillae?",
    choices: ["Necrotizing ulcerative gingivitis", "Aggressive periodontitis", "Chronic gingivitis", "Peri-implant mucositis"],
    correctAnswer: "Necrotizing ulcerative gingivitis",
    explanation: "Necrotizing ulcerative gingivitis (NUG) presents with necrosis of gingival tissues, pain, and a 'punched-out' appearance of the papillae."
  },
  {
    question: "Which bacterium is primarily associated with aggressive periodontitis?",
    choices: ["Aggregatibacter actinomycetemcomitans", "Porphyromonas gingivalis", "Fusobacterium nucleatum", "Treponema denticola"],
    correctAnswer: "Aggregatibacter actinomycetemcomitans",
    explanation: "Aggregatibacter actinomycetemcomitans is primarily associated with aggressive periodontitis, particularly in younger patients."
  },
  {
    question: "Which type of periodontal surgery involves reshaping the bone to eliminate osseous defects?",
    choices: ["Osseous recontouring", "Flap surgery", "Gingivectomy", "Guided tissue regeneration"],
    correctAnswer: "Osseous recontouring",
    explanation: "Osseous recontouring is a periodontal surgical procedure used to reshape the alveolar bone to eliminate osseous defects and achieve a more favorable contour."
  },
  
  // Pathology
  {
    question: "Which condition is characterized by numerous small abscesses within the soft tissues and sinus tracts that drain pus?",
    choices: ["Actinomycosis", "Periapical abscess", "Osteomyelitis", "Chronic apical periodontitis"],
    correctAnswer: "Actinomycosis",
    explanation: "Actinomycosis is a chronic bacterial infection characterized by abscesses and draining sinus tracts that discharge pus."
  },
  {
    question: "Which malignant tumor of the jaw is associated with a 'sunburst' radiographic appearance?",
    choices: ["Osteosarcoma", "Ameloblastoma", "Langerhans cell histiocytosis", "Chondrosarcoma"],
    correctAnswer: "Osteosarcoma",
    explanation: "Osteosarcoma often presents with a 'sunburst' radiographic appearance due to aggressive bone formation."
  },
  {
    question: "Which salivary gland tumor is known for its slow growth but a high tendency for perineural invasion?",
    choices: ["Adenoid cystic carcinoma", "Mucoepidermoid carcinoma", "Pleomorphic adenoma", "Warthin's tumor"],
    correctAnswer: "Adenoid cystic carcinoma",
    explanation: "Adenoid cystic carcinoma is a slow-growing but aggressive salivary gland tumor with a high tendency for perineural invasion."
  },
  {
    question: "Which oral lesion presents as white patches that cannot be rubbed off and is considered premalignant?",
    choices: ["Leukoplakia", "Oral lichen planus", "Candidiasis", "Geographic tongue"],
    correctAnswer: "Leukoplakia",
    explanation: "Leukoplakia presents as white patches that cannot be rubbed off and is considered a premalignant lesion."
  },
  {
    question: "Which cyst is most likely to develop from the remnants of the dental lamina and is often associated with impacted teeth?",
    choices: ["Odontogenic keratocyst", "Dentigerous cyst", "Residual cyst", "Nasopalatine duct cyst"],
    correctAnswer: "Odontogenic keratocyst",
    explanation: "Odontogenic keratocysts develop from the remnants of the dental lamina and often occur in association with impacted teeth."
  },
  
  // Radiology
  {
    question: "Which radiographic technique is most appropriate for evaluating interproximal caries in posterior teeth?",
    choices: ["Bitewing radiography", "Periapical radiography", "Panoramic radiography", "Occlusal radiography"],
    correctAnswer: "Bitewing radiography",
    explanation: "Bitewing radiographs are the most appropriate technique for evaluating interproximal caries in posterior teeth."
  },
  {
    question: "Which radiographic technique is used to visualize sialoliths within the major salivary glands?",
    choices: ["Sialography", "Periapical radiography", "Bitewing radiography", "Panoramic radiography"],
    correctAnswer: "Sialography",
    explanation: "Sialography is a radiographic technique used to visualize the major salivary glands and detect sialoliths (salivary stones)."
  },
  {
    question: "Which condition is associated with a 'ground-glass' appearance on radiographs?",
    choices: ["Fibrous dysplasia", "Ameloblastoma", "Paget's disease", "Osteosarcoma"],
    correctAnswer: "Fibrous dysplasia",
    explanation: "Fibrous dysplasia presents with a 'ground-glass' appearance on radiographs due to abnormal bone development."
  },
  {
    question: "Which radiographic technique provides a three-dimensional view of the maxillofacial skeleton and is useful for implant planning?",
    choices: ["Cone-beam computed tomography (CBCT)", "Panoramic radiography", "Bitewing radiography", "Cephalometric radiography"],
    correctAnswer: "Cone-beam computed tomography (CBCT)",
    explanation: "CBCT provides three-dimensional images of the maxillofacial skeleton and is particularly useful for implant planning and evaluation of complex anatomy."
  },
  {
    question: "Which type of radiolucent lesion presents with a 'honeycomb' or 'soap-bubble' appearance on radiographs?",
    choices: ["Ameloblastoma", "Odontogenic keratocyst", "Central giant cell granuloma", "Fibrous dysplasia"],
    correctAnswer: "Ameloblastoma",
    explanation: "Ameloblastoma often presents as a multilocular radiolucency with a 'honeycomb' or 'soap-bubble' appearance on radiographs."
  },
  
  // Orthodontics
  {
    question: "Which class of malocclusion is characterized by a mesial relationship of the mandibular first molar relative to the maxillary first molar?",
    choices: ["Class III malocclusion", "Class I malocclusion", "Class II malocclusion", "Class IV malocclusion"],
    correctAnswer: "Class III malocclusion",
    explanation: "Class III malocclusion is characterized by a mesial relationship of the mandibular first molar relative to the maxillary first molar, often associated with mandibular prognathism."
  },
  {
    question: "Which orthodontic appliance is used to expand the maxillary arch?",
    choices: ["Palatal expander", "Headgear", "Hawley retainer", "Functional appliance"],
    correctAnswer: "Palatal expander",
    explanation: "A palatal expander is used to widen the maxillary arch by applying lateral forces to the palate."
  },
  {
    question: "Which orthodontic movement is most difficult to achieve with clear aligners?",
    choices: ["Root torque", "Extrusion", "Rotation", "Intrusion"],
    correctAnswer: "Root torque",
    explanation: "Root torque, which involves tipping the root of the tooth, is more difficult to achieve with clear aligners compared to traditional braces."
  },
  {
    question: "Which type of orthodontic retainer is fixed to the lingual surfaces of the anterior teeth?",
    choices: ["Bonded retainer", "Hawley retainer", "Essix retainer", "Functional appliance"],
    correctAnswer: "Bonded retainer",
    explanation: "A bonded retainer is fixed to the lingual surfaces of the anterior teeth to maintain alignment after orthodontic treatment."
  },
  {
    question: "Which skeletal pattern is associated with a long lower facial height and an increased mandibular plane angle?",
    choices: ["Dolichofacial pattern", "Brachyfacial pattern", "Mesofacial pattern", "Prognathic pattern"],
    correctAnswer: "Dolichofacial pattern",
    explanation: "Dolichofacial individuals have a long lower facial height and an increased mandibular plane angle, often associated with vertical growth patterns."
  }
];

// Function to shuffle questions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to display the quiz
function displayQuiz() {
  shuffleArray(questions); // Shuffle questions
  const quizForm = document.getElementById('quizForm');
  quizForm.innerHTML = ''; // Clear previous content

  questions.slice(0, 50).forEach((question, index) => {  // Change to 50
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    
    const questionTitle = document.createElement('h2');
    questionTitle.textContent = `${index + 1}. ${question.question}`;
    questionDiv.appendChild(questionTitle);
    
    question.choices.forEach(choice => {
      const label = document.createElement('label');
      label.innerHTML = `<input type="radio" name="q${index}" value="${choice}"> ${choice}`;
      questionDiv.appendChild(label);
      questionDiv.appendChild(document.createElement('br'));
    });
    
    quizForm.appendChild(questionDiv);
  });

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  quizForm.appendChild(submitButton);

  document.getElementById('result').textContent = ''; // Clear result
  document.getElementById('retakeButton').style.display = 'none'; // Hide retake button
}

// Function to grade the quiz
function gradeQuiz(event) {
  event.preventDefault(); // Prevent form submission

  let score = 0;
  let explanations = "";
  const formData = new FormData(document.getElementById('quizForm'));
  
  questions.slice(0, 50).forEach((question, index) => {  // Change to 50
    const userAnswer = formData.get(`q${index}`);
    if (userAnswer === question.correctAnswer) {
      score++;
    } else {
      explanations += `<p>Question ${index + 1}: The correct answer is <strong>${question.correctAnswer}</strong>. ${question.explanation}</p>`;
    }
  });

  const totalQuestions = 50;  // Change total questions to 50
  const result = document.getElementById('result');
  result.innerHTML = `You scored ${score} out of ${totalQuestions}.<br>${explanations}`;
  result.style.display = 'block'; // Ensure the result is visible
  
  // Show retake button
  document.getElementById('retakeButton').style.display = 'block';
}

// Function to retake the quiz
function retakeQuiz() {
  displayQuiz(); // Re-randomize and redisplay questions
}

// Initialize the quiz
document.getElementById('quizForm').addEventListener('submit', gradeQuiz);
document.getElementById('retakeButton').addEventListener('click', retakeQuiz);

// Load the quiz initially
displayQuiz();
