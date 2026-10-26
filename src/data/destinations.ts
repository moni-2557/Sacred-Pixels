import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'shore-temple',
    name: 'Shore Temple',
    nativeName: 'கடற்கரைக் கோயில்',
    country: 'India',
    city: 'Mamallapuram (Mahabalipuram), Tamil Nadu',
    region: 'Asia',
    coordinates: {
      lat: 12.6163,
      lng: 80.1991,
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shore+Temple+Mamallapuram+Tamil+Nadu',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'An 8th-century granite structural marvel of the Pallava dynasty perched over the crashing waves of the Bay of Bengal.',
    historicalEra: 'c. 700–728 CE (Narasimhavarman II / Rajasimha)',
    architecturalStyle: 'Dravidian Structural & Cut-Granite Architecture',
    unescoStatus: 'UNESCO World Heritage Site (1984)',
    fullSignificance: 'The Shore Temple at Mamallapuram stands as one of the oldest structural stone temples of Southern India. Commissioned by the Pallava king Rajasimha (Narasimhavarman II), this complex of three shrines is dedicated to Lord Shiva and Lord Vishnu. Overlooking the Coromandel Coast, it served as a navigational beacon for sea merchants sailing between ancient India, Sri Lanka, and Southeast Asia.',
    architectureDetails: 'Unlike rock-cut monolithic caves, the Shore Temple is constructed with dressed blocks of local granite. It features a five-story pyramidal vimana (sanctuary tower) adorned with carved lions, pilasters, and a sanctum housing a somaskanda relief depicting Shiva, Parvati, and young Skanda. A boundary wall features hundreds of monolithic Nandi bulls watching outward toward the Bay.',
    travelTips: {
      bestTime: 'November to February during cooler coastal breezes and the annual Dance Festival.',
      dressCode: 'Modest attire covering shoulders and knees; slip-on footwear recommended for temple grounds.',
      etiquette: 'Do not climb on ancient Nandi sculptures or scratch granite relief panels.',
      photoTips: 'Capture early dawn as the morning sun rises over the Bay of Bengal and gilds the granite spires.',
    },
    sampleCostsINR: {
      transport: 4500, // Train/Cab from Chennai & local tuk-tuks
      lodgingPerNight: 2800, // Beachside heritage stay
      foodPerDay: 750, // Fresh South Indian thalis & filter coffee
      otherExpenses: 1200, // Monument entry tickets & local stone-sculptor guide
    },
    relatedDestinationIds: ['angkor-wat', 'taj-mahal'],
    curatedGuides: {
      en: `### Cultural & Historical Significance
Constructed under Pallava King Rajasimha around 700–728 CE, the Shore Temple represents the pinnacle of early South Indian Dravidian stone structural masonry. Dedicated to Lord Shiva (Kshatriyasimhesvara) and Lord Vishnu (reclining in eternal slumber as Anantasayana), the temple welcomed maritime traders across the Indian Ocean as a sanctified beacon of cosmic order.

### Sacred Architecture & Hidden Symbolism
Built from finely carved blocks of local granite, the main pyramidal spire rises in tiered harmonies symbolizing Mount Meru, the metaphysical axis of the universe. The sea-facing orientation allows the first rays of the dawn sun to illuminate the inner sanctum. Over 50 sculpted Nandi bulls guard the outer perimeter, acting as divine sentinels against tempest and tide.

### Living Heritage & Traditions
Though no longer under continuous formal worship, the temple pulses with living heritage. Every winter, the open-air Mamallapuram Dance Festival gathers classical Bharatanatyam, Kathakali, and Kuchipudi masters against this illuminated granite backdrop, perpetuating a thousand-year-old dialogue between stone sculpture and rhythmic movement.`,

      ta: `### கலாச்சார மற்றும் வரலாற்று முக்கியத்துவம்
பல்லவ மன்னன் நரசிம்மவர்மன் II (ராஜசிம்மன்) காலத்தில் கி.பி 700–728 வாக்கில் வடிக்கப்பட்ட கடற்கரைக் கோயில், தென்னிந்தியாவின் திராவிட கட்டடக் கலையின் மிகத் தொன்மையான கற்கோயிலாகும். சிவபெருமானுக்கும் அனந்தசயன பெருமாளுக்கும் அர்ப்பணிக்கப்பட்ட இக்கோயில், வங்காள விரிகுடா வழியே பயணித்த பழந்தமிழ் வணிகக் கப்பல்களுக்குப் புனித கலங்கரை விளக்கமாகத் திகழ்ந்தது.

### புனித கட்டடக் கலையும் தத்துவமும்
உள்ளூர் கருங்கற்களைச் செதுக்கி அடுக்கப்பட்ட இக்கோயிலின் ஐந்து அடுக்கு விமானங்கள் மேரு மலையின் தத்துவத்தைக் குறிக்கின்றன. கிழக்கு நோக்கிய சன்னதியில் உதயசூரியனின் முதல் கதிர்கள் மூலவரைத் தொழுமாறு வடிவமைக்கப்பட்டுள்ளது. கோயிலைச் சுற்றியுள்ள நூற்றுக்கணக்கான நந்தி சிலைகள் கடலின் பேரலைகளிலிருந்து இப்புனிதக் கருவூலத்தைக் காக்கும் காவலர்களாக அமர்ந்துள்ளன.

### வாழும் பாரம்பரியம்
தற்போது மாமல்லபுரம் நாட்டிய விழாவின் மூலம் பரதநாட்டியம், குச்சிப்புடி உள்ளிட்ட செவ்வியல் கலைகளின் அரங்கமாக இக்கோயில் ஒளி பெறுகிறது. கல்லில் வடிக்கப்பட்ட சிற்பங்களும் மனித அசைவுகளும் சங்கமிக்கும் உயிர்ப்புள்ள கலாச்சாரப் பெருமையாக இது திகழ்கிறது.`,

      hi: `### सांस्कृतिक और ऐतिहासिक महत्व
७००–७२८ ईस्वी में पल्लव नरेश नरसिंहवर्मन द्वितीय (राजसिंह) द्वारा निर्मित मामल्लापुरम का शोर मंदिर (तट मंदिर) दक्षिण भारतीय द्रविड़ पाषाण वास्तुकला की अमर धरोहर है। भगवान शिव और विष्णु को समर्पित यह मंदिर प्राचीन काल में बंगाल की खाड़ी के नाविकों और व्यापारियों के लिए आध्यात्मिक प्रकाशस्तंभ था।

### पवित्र वास्तुकला और स्थापत्य
स्थानीय ग्रेनाइट पत्थरों को तराश कर बनाया गया इसका पिरामिडनुमा शिखर ब्रह्मांडीय मेरु पर्वत का प्रतीक है। पूर्व दिशा की ओर उन्मुख होने से सूर्य की पहली किरणें सीधे गर्भगृह को स्पर्श करती हैं। मंदिर के चारों ओर विराजमान पाषाण नंदी मूर्तियां सदियों से समुद्री तूफानों के विरुद्ध दिव्य रक्षक बनकर खड़ी हैं।

### जीवंत धरोहर और परंपराएं
आज भी प्रतिवर्ष यहाँ आयोजित होने वाला शास्त्रीय नृत्य समारोह भरतनाट्यम और कत्थक के माध्यम से प्राचीन शिल्प और भारतीय नृत्य परंपरा का जीवंत संगम प्रस्तुत करता है।`
    }
  },
  {
    id: 'pyramids-giza',
    name: 'Pyramids of Giza',
    nativeName: 'أهرامات الجيزة',
    country: 'Egypt',
    city: 'Al Jizah, Cairo Governorate',
    region: 'Middle East & Africa',
    coordinates: {
      lat: 29.9792,
      lng: 31.1342,
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pyramids+of+Giza+Egypt',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The oldest of the Seven Wonders of the Ancient World, erected in the 26th century BCE as monumental tombs for Pharaohs Khufu, Khafre, and Menkaure.',
    historicalEra: 'c. 2580–2560 BCE (Old Kingdom Fourth Dynasty)',
    architecturalStyle: 'Ancient Egyptian Monumental Limestone & Granite Masonry',
    unescoStatus: 'UNESCO World Heritage Site (1979)',
    fullSignificance: 'Rising above the desert sands on the Giza plateau, these monumental structures embodied the ancient Egyptian belief in the afterlife and the divine kingship of pharaohs. The Great Pyramid of Khufu was the tallest man-made structure in the world for over 3,800 years.',
    architectureDetails: 'Built with an estimated 2.3 million quarried limestone and granite blocks weighing an average of 2.5 tons each. The cardinal orientation of the Great Pyramid aligns almost perfectly with true north, with an error of less than one-tenth of a degree.',
    travelTips: {
      bestTime: 'October through April, early morning around 8:00 AM before the desert heat intensifies.',
      dressCode: 'Lightweight linen or cotton covering shoulders; comfortable closed walking shoes for sandy terrain.',
      etiquette: 'Climbing on the pyramid stones is strictly illegal. Always agree on camel or horse carriage rates beforehand.',
      photoTips: 'Pan from the Panorama Point for all three pyramids in alignment, especially during late afternoon amber light.',
    },
    sampleCostsINR: {
      transport: 38000, // Flights & local Cairo Nile transport
      lodgingPerNight: 5500, // Nile view or Giza plateau guesthouse
      foodPerDay: 1400, // Egyptian koshari, falafel, and grilled mezze
      otherExpenses: 4500, // Giza complex ticket & Grand Egyptian Museum entry
    },
    relatedDestinationIds: ['petra', 'colosseum'],
    curatedGuides: {
      en: `### Cultural & Historical Significance
Erected around 2560 BCE during the Old Kingdom's Fourth Dynasty, the Pyramids of Giza were built as eternal resurrection machines for Pharaohs Khufu, Khafre, and Menkaure. To the ancient Egyptians, the pharaoh was the living embodiment of Horus in life and Osiris in death; these monumental structures ensured cosmic harmony (Ma'at) by safeguarding the royal soul into eternity.

### Sacred Architecture & Hidden Symbolism
The pyramidal geometry reflects the 'benben'—the primeval mound upon which the sun god Ra created the world. Its limestone facets, originally polished to blinding gleam, caught the sun's descent like radiant stone stairways to heaven. The complex aligns precisely to true celestial north with mathematical precision that stuns modern surveyors.

### Living Heritage & Traditions
Guarded by the enigmatic Great Sphinx, Giza remains an active pilgrimage for humanity's collective memory. Local Nubian and Bedouin camel handlers preserve oral desert knowledge passed down generations, and the evening sound-and-light narration keeps ancient Egyptian theology resonant under starry desert skies.`,

      ta: `### கலாச்சார மற்றும் வரலாற்று முக்கியத்துவம்
கி.மு. 2560 வாக்கில் பழங்கால எகிப்தின் நான்காம் வம்ச பாரோக்களான கூஃபு, காஃப்ரெ மற்றும் மென்கவுரே ஆகியோரின் நித்திய வாழ்விற்காக கிசா பிரமிடுகள் கட்டப்பட்டன. பாரோ என்பவர் பூவுலகில் ஓரஸ் கடவுளின் வடிவமாகவும், மறைவுக்குப் பின் ஒசிரிஸாகவும் கருதப்பட்டார். இவ்வுலகிற்கும் மறுமைக்கும் இடையிலான பாலமாக இப்பிரமிடுகள் போற்றப்பட்டன.

### புனித கட்டடக்கலை மற்றும் ரகசியங்கள்
சூரியக் கடவுள் ரா தோன்றிய புனித மலையான 'பென்பென்' தத்துவத்தின் அடிப்படையில் இந்நீள்சதுர வடிவ பிரமிடுகள் அமைக்கப்பட்டன. மெருகூட்டப்பட்ட வெள்ளை சுண்ணாம்புக் கற்களால் மூடப்பட்டிருந்த இதன் மேல்பகுதி, விண்ணுலகிற்கான படிக்கட்டுகள் போல வானை நோக்கி நீள்கிறது. இது விண்வெளி திசைகளுடன் துல்லியமாக ஒத்துப் போகிறது.

### வாழும் பாரம்பரியம்
மாபெரும் ஸ்பிங்க்ஸ் சிலையால் காக்கப்படும் கிசா சமவெளி, மனித நாகரிகத்தின் ஆதித் திறனை உலகுக்கு பறைசாற்றுகிறது. இரவு நேரங்களில் ஒளிரும் வண்ண விளக்கு நிகழ்ச்சிகள் எகிப்திய புராணங்களையும் வரலாற்றையும் இன்றும் உயிர்ப்புடன் விவரிக்கின்றன.`,

      hi: `### सांस्कृतिक और ऐतिहासिक महत्व
ईसा पूर्व २५६० के आसपास निर्मित गीज़ा के पिरामिड प्राचीन मिस्र के चौथे राजवंश के फराओ खुफू, खफरे और मेनकौरे के अमरत्व का प्रतीक हैं। प्राचीन मिस्रवासियों का मानना था कि पिरामिड राजा की आत्मा को सीधे स्वर्ग के देवताओं तक ले जाने वाली दिव्य सीढ़ी हैं।

### पवित्र वास्तुकला और खगोलीय संरेखण
२३ लाख से अधिक विशाल चूना पत्थर और ग्रेनाइट ब्लॉकों से निर्मित यह विशालकाय संरचना सटीक रूप से उत्तर दिशा की ओर उन्मुख है। इसका पिरामिड आकार सूर्य देव 'रा' की गिरती किरणों का मूर्तरूप माना जाता है जो ब्रह्मांडीय संतुलन (मात) को बनाए रखता है।

### जीवंत धरोहर
विशाल स्फिंक्स (नरसिंह) द्वारा संरक्षित यह पठार आज भी पर्यटकों को विस्मय में डालता है। स्थानीय रेगिस्तानी परंपराएं और ध्वनि-प्रकाश कार्यक्रम मिस्र के प्राचीन ज्ञान को आज भी जीवंत बनाए हुए हैं।`
    }
  },
  {
    id: 'colosseum',
    name: 'The Colosseum',
    nativeName: 'Il Colosseo',
    country: 'Italy',
    city: 'Rome, Lazio',
    region: 'Europe',
    coordinates: {
      lat: 41.8902,
      lng: 12.4922,
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Colosseum+Rome+Italy',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The monumental elliptical amphitheatre of Imperial Rome, completed in 80 CE under the Flavian emperors to stage gladiatorial contests and civic spectacles.',
    historicalEra: 'c. 70–80 CE (Vespasian & Titus)',
    architecturalStyle: 'Roman Concrete, Travertine & Tufa Classical Arcades',
    unescoStatus: 'UNESCO World Heritage Site (1980)',
    fullSignificance: 'Commissioned by Emperor Vespasian as a gift to the Roman citizenry on the grounds of Nero’s reviled Golden House, the Flavian Amphitheatre held between 50,000 and 80,000 spectators. It represented the apex of Roman civic organization, imperial propaganda, and engineering audacity.',
    architectureDetails: 'Built using innovative Roman pozzolanic concrete and travertine stone quarried in Tivoli. Features three tiers of superimposed classical arches—Doric on the lowest tier, Ionic on the middle, and Corinthian on the top—over a labyrinthine hypogeum (subterranean arena staging system).',
    travelTips: {
      bestTime: 'April to May or September to October; book underground hypogeum access early in the morning.',
      dressCode: 'Comfortable walking footwear for uneven cobblestones and steep ancient stairs.',
      etiquette: 'Do not carve on stones or remove ancient marble or travertine fragments.',
      photoTips: 'Photograph from the Via Nicola Salvi overlook terrace across the street for an unobstructed panoramic framing.',
    },
    sampleCostsINR: {
      transport: 54000, // Flights to Rome Fiumicino & regional rail
      lodgingPerNight: 8500, // Central Monti district boutique stay
      foodPerDay: 2800, // Traditional Roman pasta (cacio e pepe), espresso & gelato
      otherExpenses: 3600, // Colosseum, Forum & Palatine Hill combo pass
    },
    relatedDestinationIds: ['pyramids-giza', 'petra'],
    curatedGuides: {
      en: `### Cultural & Historical Significance
Inaugurated in 80 CE by Emperor Titus with 100 days of games, the Colosseum (Flavian Amphitheatre) was Imperial Rome's grand stage where politics, martial virtue, and public entertainment converged. It seated 65,000 citizens in strictly stratified social tiers, serving as both a theatre of civic order and an imperial symbol of Roman world dominance.

### Sacred Architecture & Hidden Symbolism
A masterclass in Roman structural engineering, the amphitheatre utilized radial barrel vaults and self-supporting travertine arches anchored by volcanic pozzolana concrete. Beneath the sand-covered timber arena floor lay the subterranean 'hypogeum'—a sophisticated two-level network of elevators, winches, and holding pens that hoisted beasts and gladiators seamlessly into view.

### Living Heritage & Traditions
Today, the Colosseum stands not merely as an architectural icon of classical antiquity, but as a global monument against human cruelty. Every Good Friday, the Pope leads the solemn torchlit Stations of the Cross (Via Crucis) procession around its illuminated perimeter, transforming an ancient gladiatorial arena into a modern sanctuary of peace.`,

      ta: `### கலாச்சார மற்றும் வரலாற்று முக்கியத்துவம்
கி.பி 80 இல் ரோமானிய பேரரசர் டைட்டஸால் 100 நாட்கள் கொண்டாட்டங்களுடன் திறக்கப்பட்ட கொலோசியம், பழங்கால ரோம் நகரின் அரசியல், வீரம் மற்றும் பொது பொழுதுபோக்குகளின் மையமாக விளங்கியது. 65,000-க்கும் மேற்பட்ட மக்கள் அமர்ந்து பார்க்கும் வகையில் அடுக்கடுக்காக அமைக்கப்பட்ட இந்த அரங்கம், ரோமானிய சமூக ஒழுங்கமைப்பைக் காட்டியது.

### கட்டடக்கலை மற்றும் நிலத்தடி ரகசியம்
ரோமானிய போசோலிக் சிமெண்ட் மற்றும் டிராவெர்டைன் கற்களைப் பயன்படுத்தி கட்டப்பட்ட இதன் வளைவுகள் இன்றும் உறுதியாக நிற்கின்றன. மணல் பரப்பப்பட்ட மேடைக்கு அடியில் 'ஹைபோஜியம்' என்ற சிக்கலான நிலத்தடி அறைகள், லிஃப்ட்டுகள் அமைக்கப்பட்டிருந்தன. இதன் மூலம் விலங்குகளும் மாவீரர்களும் திடீரென மேடையில் தோன்றும் விந்தை நிகழ்ந்தது.

### வாழும் பாரம்பரியம்
இன்று அமைதியின் சின்னமாக விளங்கும் கொலோசியத்தில், ஆண்டுதோறும் புனித வெள்ளி அன்று போப் ஆண்டவர் தலைமையில் மெழுகுவர்த்தி ஏந்தி அமைதி ஊர்வலம் நடைபெறுகிறது. பண்டைய போர்க்களம் இன்று உலகளாவிய நல்லிணக்கத்தின் இடமாக மாறியுள்ளது.`,

      hi: `### सांस्कृतिक और ऐतिहासिक महत्व
८० ईस्वी में सम्राट टाइटस द्वारा उद्घाटित कोलोसियम प्राचीन रोमन साम्राज्य की भव्यता और शक्ति का प्रतीक है। ६५,००० से अधिक दर्शकों की क्षमता वाला यह अखाड़ा ग्लैडीएटर युद्धों और सार्वजनिक नाटकों के माध्यम से रोमन नागरिकों के मनोरंजन का सबसे बड़ा केंद्र था।

### वास्तुकला और इंजीनियरिंग चमत्कार
रोमन कंक्रीट और तराशे गए पत्थरों से निर्मित इसके तीन स्तरों पर डोरिक, आयोनिक और कोरिंथियन स्तंभ शैली का सुंदर समन्वय है। अखाड़े के नीचे 'हाइपोजियम' नामक भूमिगत भूलभुलैया थी, जहाँ से यांत्रिक लिफ्टों के जरिए योद्धा और जंगली जानवर मंच पर लाए जाते थे।

### समकालीन विरासत
आज कोलोसियम विश्व शांति और मानवीय गरिमा का अंतरराष्ट्रीय प्रतीक बन चुका है। प्रत्येक गुड फ्राइडे को यहाँ आयोजित होने वाला मशाल जुलूस प्राचीन युद्ध-स्थल को शांति के मंदिर में परिवर्तित कर देता है।`
    }
  },
  {
    id: 'angkor-wat',
    name: 'Angkor Wat',
    nativeName: 'អង្គរវត្ត',
    country: 'Cambodia',
    city: 'Siem Reap Province',
    region: 'Asia',
    coordinates: {
      lat: 13.4125,
      lng: 103.8670,
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Angkor+Wat+Siem+Reap+Cambodia',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The largest religious monument in the world, built in the 12th century by Khmer King Suryavarman II as a Hindu temple dedicated to Vishnu before transforming into a Buddhist sanctuary.',
    historicalEra: 'c. 1113–1150 CE (Khmer Empire, King Suryavarman II)',
    architecturalStyle: 'Classic Khmer Temple-Mountain & Bas-Relief Galleries',
    unescoStatus: 'UNESCO World Heritage Site (1992)',
    fullSignificance: 'Spanning over 400 acres, Angkor Wat was the spiritual and political heart of the Khmer Empire. It represents the earthly replica of the cosmic world: its central towers mirror the peaks of Mount Meru, the concentric enclosures represent sacred mountain ranges, and its immense 190-meter wide moat symbolizes the cosmic ocean.',
    architectureDetails: 'Engineered with sandstone blocks quarried from Mount Kulen and floated down the Siem Reap River on bamboo rafts. It uniquely faces west (associated with Vishnu and the afterlife) rather than east, and contains over 1,200 square meters of stone bas-reliefs depicting the Churning of the Ocean of Milk (Samudra Manthan) and the Battle of Kurukshetra.',
    travelTips: {
      bestTime: 'November to February during the dry, mild winter months.',
      dressCode: 'Strict Buddhist heritage code: shoulders and knees must be covered; hats removed in inner sanctums.',
      etiquette: 'Do not touch delicate celestial apsara carvings; maintain quiet veneration around active Buddhist monks.',
      photoTips: 'Position yourself at the left reflection lotus pond before 5:30 AM to catch the silhouette of five towers in dawn violet and orange.',
    },
    sampleCostsINR: {
      transport: 28000, // Flights to Siem Reap & dedicated tuk-tuk hire
      lodgingPerNight: 3200, // Siem Reap boutique garden hotel
      foodPerDay: 950, // Khmer amok, fresh tropical fruit & iced coconut
      otherExpenses: 3400, // Angkor Archaeological Park pass & licensed temple historian
    },
    relatedDestinationIds: ['shore-temple', 'machu-picchu'],
    curatedGuides: {
      en: `### Cultural & Historical Significance
Commissioned by Khmer King Suryavarman II in the early 12th century, Angkor Wat was conceived as a cosmic capital dedicated to Vishnu, breaking earlier Khmer tradition of Shiva-centric royal shrines. By the late 13th century, it transitioned naturally into a Theravada Buddhist sanctuary, maintaining continuous spiritual worship across nine centuries.

### Sacred Architecture & Hidden Symbolism
Angkor Wat is a physical model of Hindu-Buddhist cosmology. Its five central lotus-bud towers represent Mount Meru's five summits, while the surrounding 200-meter-wide moat depicts the primordial Cosmic Ocean. Uniquely oriented to the west, the temple aligns with the setting sun on the spring equinox, creating an awe-inspiring celestial phenomenon where the sun rises directly over the central lotus pinnacle.

### Living Heritage & Traditions
Today, saffron-robed Theravada monks still chant in the Bakan inner sanctuary, and local villagers bring offerings of lotus blossoms and incense. The bas-reliefs of the 'Churning of the Ocean of Milk' continue to inspire classical Cambodian royal ballet and shadow puppetry, preserving Khmer identity through adversity.`,

      ta: `### கலாச்சார மற்றும் வரலாற்று முக்கியத்துவம்
12-ஆம் நூற்றாண்டின் முற்பகுதியில் கெமர் மன்னர் இரண்டாம் சூர்யவர்மனால் விஷ்ணு பகவானுக்காக அமைக்கப்பட்ட அங்கோர் வாட், உலகின் மிகப்பெரிய வழிபாட்டுத் தலமாகும். காலப்போக்கில் இது தேரவாத பௌத்த திருத்தலமாக மலர்ந்து, சுமார் 900 ஆண்டுகளாகத் தொடர்ந்து வழிபாட்டுத் தலமாக விளங்கி வருகிறது.

### புனித கட்டடக் கலையும் அண்டவியல் தத்துவமும்
இக்கோயில் இந்து-பௌத்த அண்டவியல் அமைப்பின் நேரடி உருவகமாகும். இதன் ஐந்து தாமரை மொட்டு கோபுரங்கள் மேரு மலையின் சிகரங்களையும், சுற்றியுள்ள 200 மீட்டர் அகல அகழி பாற்கடலையும் குறிக்கின்றன. மேற்கு திசை நோக்கி அமைந்துள்ள இதன் முதன்மைக் கோபுரத்தின் உச்சியில், வசந்தகால சமபகல்-இரவு நாளில் அதிகாலை சூரியன் துல்லியமாக உதிக்கும் விண்வெளி அற்புதம் காணத்தக்கது.

### வாழும் பாரம்பரியம்
இன்றும் இங்கு பௌத்த துறவிகளின் மந்திர முழக்கங்களும் நறுமணத் தூபங்களும் நிலவுகின்றன. பாற்கடல் கடைதல், இராமாயணம் மற்றும் மகாபாரதப் போர்க்களக் காட்சிகள் சுவர்களில் செதுக்கப்பட்டு, கம்போடியாவின் பாரம்பரிய நடனங்களுக்கும் கலைகளுக்கும் மூலாதாரமாக விளங்குகின்றன.`,

      hi: `### सांस्कृतिक और ऐतिहासिक महत्व
१२वीं शताब्दी में खमेर सम्राट सूर्यवर्मन द्वितीय द्वारा निर्मित अंकोरवाट विश्व का सबसे बड़ा धार्मिक स्मारक है। भगवान विष्णु को समर्पित इस हिंदू मंदिर ने बाद में बौद्ध तीर्थस्थल का रूप ले लिया, जहाँ पिछले नौ सौ वर्षों से अखंड आध्यात्मिक चेतना प्रवाहित हो रही है।

### ब्रह्मांडीय वास्तुकला और खगोलीय संरेखण
अंकोरवाट की वास्तुकला हिंदू ब्रह्मांड विज्ञान का जीता-जागता स्वरूप है। इसके पांच शिखर मेरु पर्वत की चोटियों को और विशाल खाई क्षीरसागर को दर्शाती है। वसंत विषुव (इक्विनॉक्स) के दिन सूर्य का उदय ठीक इसके केंद्रीय शिखर के ऊपर होता है, जो खमेर गणितज्ञों के बेजोड़ खगोल ज्ञान का प्रमाण है।

### जीवंत धरोहर
मंदिर की विशाल दीवारों पर तराशा गया 'समुद्र मंथन' और महाभारत के प्रसंग आज भी कंबोडियाई संस्कृति, शास्त्रीय नृत्य और लोककलाओं की आत्मा बने हुए हैं।`
    }
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    nativeName: 'Machu Pikchu',
    country: 'Peru',
    city: 'Urubamba Province, Cusco Region',
    region: 'Americas',
    coordinates: {
      lat: -13.1631,
      lng: -72.5450,
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Machu+Picchu+Peru',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The 15th-century Inca royal sanctuary and astronomical citadel set dramatically 2,430 meters above sea level amidst the cloud forest of the Peruvian Andes.',
    historicalEra: 'c. 1450 CE (Inca Emperor Pachacuti)',
    architecturalStyle: 'Inca Ashlar Polished Dry-Stone Masonry & Terraced Landscaping',
    unescoStatus: 'UNESCO World Heritage Site (1983)',
    fullSignificance: 'Built at the height of the Inca Empire under Emperor Pachacuti, Machu Picchu served as an imperial estate, religious sanctuary, and astronomical observatory. Hidden among misty peaks and surrounded by the sacred Urubamba River, it escaped the Spanish conquest and remained protected for centuries.',
    architectureDetails: 'Engineered using the extraordinary Inca dry-stone technique called ashlar, where blocks of granite were chiseled and polished to fit together without mortar so tightly that not even a knife blade can pass between them. Over 700 agricultural terraces prevent soil erosion and seismic instability.',
    travelTips: {
      bestTime: 'May to October during the dry Andean winter; book train tickets and circuit passes months in advance.',
      dressCode: 'Layered clothing for rapid mountain weather changes; sturdy hiking boots and sun protection.',
      etiquette: 'Do not touch stone carvings or feed wild Andean llamas; strictly follow designated one-way circuits.',
      photoTips: 'Wait for morning fog to drift away from the iconic Guardhouse lookout (Circuit 1 & 2) between 8:30 and 10:00 AM.',
    },
    sampleCostsINR: {
      transport: 120000, // Flights to Lima/Cusco, Inca Rail scenic train & bus
      lodgingPerNight: 6800, // Aguas Calientes / Sacred Valley eco-lodge
      foodPerDay: 1800, // Quinoa soup, Andean corn, and Peruvian cuisine
      otherExpenses: 6500, // Official Machu Picchu circuit entry & local Quechua guide
    },
    relatedDestinationIds: ['angkor-wat', 'great-wall'],
    curatedGuides: {
      en: `### Cultural & Historical Significance
Conceived around 1450 CE by the great Incan visionary Pachacuti, Machu Picchu was a royal mountain sanctuary where the Inca emperor communed with Inti (the Sun God) and the Apus (sacred mountain spirits). Never discovered by Spanish conquistadors, it preserved the sacred geography and harmonious relationship between Andean people and nature.

### Sacred Architecture & Hidden Symbolism
The citadel's hallmark is master-crafted 'ashlar' dry-stone masonry, where granite boulders were shaped with bronze and stone tools to lock together seamlessly without mortar, flexing harmlessly during Andean earthquakes. Monuments like the 'Intihuatana' (Hitching Post of the Sun) and the Temple of the Sun acted as precise solar observatories tracking solstice alignments.

### Living Heritage & Traditions
Indigenous Quechua-speaking guides continue to reverence Pachamama (Mother Earth) at the site, offering coca leaves at sacred stones before passing through. The agricultural terraces still channel Andean rainwater through functional irrigation conduits, a triumph of ancestral sustainable ecology.`,

      ta: `### கலாச்சார மற்றும் வரலாற்று முக்கியத்துவம்
கி.பி 1450 வாக்கில் இன்கா பேரரசர் பச்சாகுட்டியால் பெரு நாட்டின் ஆண்டிஸ் மலைத்தொடரில் 2,430 மீட்டர் உயரத்தில் மச்சு பிச்சு நிர்மாணிக்கப்பட்டது. சூரியக் கடவுளான 'இன்டி' மற்றும் புனித மலைக் கடவுள்களுடன் மன்னர் தொடர்பு கொள்ளும் அரச வழிபாட்டுத் தலமாக இது திகழ்ந்தது.

### வியக்கவைக்கும் உலர்-கற்கட்டுமானம்
சிமெண்ட் அல்லது எந்தவொரு பசையுமின்றி, கருங்கற்களை ஒன்றோடு ஒன்று பிசிறு இல்லாமல் கத்தி கூட நுழைய முடியாதவாறு இணைத்த 'ஆஷ்லர்' கட்டடக் கலை இதன் தனிச்சிறப்பாகும். நிலநடுக்கங்களின் போது இக்கற்கள் அதிர்வுகளைத் தாங்கும் வகையில் தன்னிச்சையாக அசைந்து மீண்டும் நிலைபெறுகின்றன. சூரியனின் இயக்கத்தைக் கணிக்க 'இன்டிஹுவாதானா' பாறை பயன்படுத்தப்பட்டது.

### வாழும் பாரம்பரியம்
இன்றும் கெச்சுவா மொழி பேசும் மக்கள் 'பச்சமாமா' (பூமித்தாய்)-வை வணங்கி கோகோ இலைகளை காணிக்கையாக செலுத்துகின்றனர். நூற்றுக்கணக்கான படிக்கட்டு விவசாய அமைப்புகளும் நீர்ப்பாசன வழிகளும் இன்கா மக்களின் வியக்கத்தக்க இயற்கை அறிவை வெளிப்படுத்துகின்றன.`,

      hi: `### सांस्कृतिक और ऐतिहासिक महत्व
लगभग १४५० ईस्वी में इंका सम्राट पचाकुटी द्वारा निर्मित माचू पिच्चू एंडीज पर्वतमाला में २४३० मीटर की ऊंचाई पर स्थित एक अद्वितीय शाही और खगोलीय अभयारण्य है। बादलों के बीच बसा यह शहर स्पेनिश आक्रमणकारियों की नजरों से छिपा रहा, जिससे इसकी प्राचीन पवित्रता अक्षुण्ण रही।

### अद्वितीय पाषाण स्थापत्य और भूकंप-रोधी तकनीक
बिना किसी गारे या चूने के, केवल ग्रेनाइट पत्थरों को तराश कर आपस में इस प्रकार जोड़ा गया है कि उनके बीच ब्लेड भी नहीं जा सकती। भूकंप आने पर ये पत्थर थोड़ा हिलकर पुनः अपने स्थान पर बैठ जाते हैं। 'इंतिहुआताना' पत्थर सूर्य की गति और अयनांत (संक्रांति) को मापने वाली प्राचीन सौर वेधशाला है।

### जीवंत परंपराएं
स्थानीय केचुआ समुदाय आज भी धरती माता (पचामामा) के प्रति अगाध श्रद्धा रखते हैं। सदियों पुरानी सीढ़ीदार खेती और जल निकासी व्यवस्था इंका सभ्यता के पर्यावरण-अनुकूल संतुलन की साक्षी हैं।`
    }
  },
  {
    id: 'great-wall',
    name: 'The Great Wall of China',
    nativeName: '万里长城',
    country: 'China',
    city: 'Huairou District, Beijing (Mutianyu)',
    region: 'Asia',
    coordinates: {
      lat: 40.4319,
      lng: 116.5704,
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Great+Wall+of+China+Mutianyu',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'An astonishing 21,196-kilometer ancient defensive rampart snaking across the jagged ridgelines of northern China, rebuilt in brick and granite during the Ming Dynasty.',
    historicalEra: 'c. 7th Century BCE to 1644 CE (Peak Ming Dynasty 1368–1644)',
    architecturalStyle: 'Ancient Chinese Rammed Earth, Kiln-Fired Brick & Stone Fortification',
    unescoStatus: 'UNESCO World Heritage Site (1987)',
    fullSignificance: 'Stretching from Shanhaiguan on the Bohai Sea to Jiayuguan on the edges of the Gobi Desert, the Great Wall symbolized both imperial military defense and the unified geographic backbone of Chinese civilization. Beyond military deterrence, it controlled Silk Road trade routes and regulated immigration.',
    architectureDetails: 'The prominent Ming sections (such as Mutianyu and Jinshanling) utilize kiln-fired grey bricks, granite slabs, and a revolutionary mortar infused with sticky rice flour (amylopectin) that gives the joints extraordinary durability against earthquakes and weathering. Beacon towers signaled troop movements with smoke by day and fire by night.',
    travelTips: {
      bestTime: 'September to November (autumn foliage) or April to May (wild peach blossoms).',
      dressCode: 'High-traction footwear for steep watchtower climbs and uneven brick ramparts.',
      etiquette: 'Do not step beyond restored safety cordons on wild sections; take all trash back with you.',
      photoTips: 'Visit Mutianyu Tower 20 at golden hour for layers of mountain ranges bathed in misty purple light.',
    },
    sampleCostsINR: {
      transport: 48000, // Flights to Beijing & express high-speed rail/private transit
      lodgingPerNight: 4600, // Beijing traditional Hutong courtyard or rural foothills inn
      foodPerDay: 1300, // Authentic dumplings, hand-pulled noodles & jasmine tea
      otherExpenses: 2800, // Wall access, cable car return & toboggan pass
    },
    relatedDestinationIds: ['colosseum', 'pyramids-giza'],
    curatedGuides: {
      en: `### Cultural & Historical Significance
Snaking across more than 21,000 kilometers of rugged northern frontier, the Great Wall (Wanli Changcheng—'The Ten-Thousand-Li Long Wall') was forged over two millennia from the Warring States period through the Ming Dynasty. It defended agrarian China from northern nomadic confederacies while regulating commerce and culture along the ancient Silk Road.

### Sacred Architecture & Hidden Symbolism
To Chinese philosophy, the Wall resembles a slumbering stone dragon undulating across the ridges, harmonizing military barrier with the landscape's natural feng shui. Ming engineers bound its kiln-fired grey bricks using an innovative sticky rice mortar that remains impervious to frost and earthquakes, supported by an optical beacon relay system of smoke and fire.

### Living Heritage & Traditions
Today, the Great Wall is the supreme national emblem of perseverance, encapsulated by Chairman Mao's famous dictum: 'He who has not climbed the Great Wall is not a true hero.' Surrounding rural villages celebrate autumn harvest festivals along its foothills, welcoming global explorers with warmth and historic storytelling.`,

      ta: `### கலாச்சார மற்றும் வரலாற்று முக்கியத்துவம்
வடக்கு சீன மலைமுகடுகளில் 21,000 கிலோமீட்டருக்கும் மேலாகப் படர்ந்துள்ள சீனப் பெருஞ்சுவர், 2,000 ஆண்டுகளுக்கும் மேலாக பல்வேறு வம்சங்களால் உருவாக்கப்பட்டு மிங் வம்ச காலத்தில் முழுமை பெற்றது. பண்டைய பட்டுப்பாதை வர்த்தகத்தைப் பாதுகாக்கவும், விவசாய நிலங்களை அந்நியப் படையெடுப்புகளிலிருந்து காக்கவும் இது எழுப்பப்பட்டது.

### கட்டடக் கலையும் டிராகன் குறியீடும்
சீன தத்துவத்தில், இச்சுவர் மலைகளின் மீது நெளிந்து செல்லும் ஒரு மாபெரும் கல் டிராகனாகக் கருதப்படுகிறது. மிங் வம்ச பொறியாளர்கள் செங்கற்களை இணைக்க பிசுபிசுப்பான அரிசிக் கஞ்சியை கலவையில் சேர்த்ததால், இது நிலநடுக்கங்களையும் கடுங்குளிரையும் தாங்கி நிற்கிறது. பகலில் புகையினாலும் இரவில் தீப்பந்தங்களாலும் செய்திகளை அனுப்பும் காவற்கோபுரங்கள் இதில் உள்ளன.

### வாழும் பாரம்பரியம்
இன்று மனித மன உறுதியின் அடையாளமாகத் திகழும் இச்சுவர், 'சீனப் பெருஞ்சுவரில் ஏறாதவன் உண்மையான வீரன் அல்ல' என்ற புகழ்பெற்ற முதுமொழியை உலகிற்கு நினைவூட்டுகிறது. இதன் அடிவாரக் கிராமங்கள் செழுமையான பாரம்பரியத்தையும் விருந்தோம்பலையும் பறைசாற்றுகின்றன.`,

      hi: `### सांस्कृतिक और ऐतिहासिक महत्व
२१,००० किलोमीटर से अधिक लंबी चीन की महान दीवार (वानली चांगचेंग) दो हजार से अधिक वर्षों में कई राजवंशों द्वारा निर्मित मानव इतिहास का सबसे बड़ा रक्षात्मक प्राचीर है। यह प्राचीन रेशम मार्ग (सिल्क रूट) के व्यापार की रक्षा करने और उत्तरी सीमाओं को सुरक्षित रखने के लिए बनाई गई थी।

### स्थापत्य और चिपचिपे चावल का लेप
चीनी दर्शन में यह दीवार पर्वतों पर तैरते हुए एक विशाल पाषाण ड्रैगन जैसी प्रतीत होती है। मिंग राजवंश के कारीगरों ने ईंटों को जोड़ने के लिए चिपचिपे चावल के आटे से बना विशेष गारा इस्तेमाल किया था, जिसने इसे सदियों के तूफानों और भूकंपों से बचाए रखा। सिग्नल टॉवर दिन में धुएँ और रात में आग से मीलों दूर संदेश पहुंचाते थे।

### जीवंत विरासत
आज यह दीवार मानव संकल्प और अटूट दृढ़ता का वैश्विक प्रतीक है। हर साल दुनिया भर के लाखों यात्री इसके ऐतिहासिक वॉचटॉवरों पर खड़े होकर प्राचीन चीनी इतिहास का साक्षात अनुभव करते हैं।`
    }
  },
  {
    id: 'petra',
    name: 'Petra – The Rose City',
    nativeName: 'البتراء',
    country: 'Jordan',
    city: 'Wadi Musa, Ma\'an Governorate',
    region: 'Middle East & Africa',
    coordinates: {
      lat: 30.3285,
      lng: 35.4444,
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Petra+Jordan',
    image: 'https://images.unsplash.com/photo-1579606032834-d368945f3408?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The legendary rock-carved capital of the Nabataean Kingdom, hidden in a dramatic sandstone canyon along ancient spice trade routes.',
    historicalEra: 'c. 1st Century BCE to 1st Century CE (Nabataean Kingdom)',
    architecturalStyle: 'Hellenistic-Nabataean Rock-Cut Monumental Architecture',
    unescoStatus: 'UNESCO World Heritage Site (1985)',
    fullSignificance: 'Carved directly into vibrant rose-hued sandstone cliffs, Petra was the flourishing metropolis of the nomadic Nabataeans who controlled the lucrative incense and spice trade between Arabia, Egypt, and the Mediterranean. Its ingenious dams, cisterns, and water conduits transformed a parched desert gorge into a vibrant oasis.',
    architectureDetails: 'The iconic Al-Khazneh (The Treasury) and Ad-Deir (The Monastery) were carved from the top down directly into vertical cliff faces. Featuring classical Corinthian capitals, pediments, and Nabataean eagle motifs, Petra seamlessly fused Hellenistic grandeur with indigenous Arabian craftsmanship.',
    travelTips: {
      bestTime: 'March to May and September to November; early mornings to walk the Siq in quiet serenity.',
      dressCode: 'Lightweight breathable attire respecting Jordanian modest customs; hat and sunglasses.',
      etiquette: 'Do not accept unofficial animal rides from unregistered hawkers; respect Bedouin camps.',
      photoTips: 'Arrive at the end of the Siq canyon just as morning sunlight catches the Treasury facade in dazzling salmon pink.',
    },
    sampleCostsINR: {
      transport: 52000, // Flights to Amman & scenic Desert Highway transport
      lodgingPerNight: 5200, // Wadi Musa boutique guesthouse
      foodPerDay: 1600, // Jordanian mansaf, fresh hummus, flatbread & mint tea
      otherExpenses: 6200, // Petra multi-day pass & Petra by Night candle experience
    },
    relatedDestinationIds: ['pyramids-giza', 'colosseum'],
    curatedGuides: {
      en: `### Cultural & Historical Significance
Carved out of rust-and-rose sandstone by the enigmatic Nabataean Arabs in the 1st century BCE, Petra flourished as the premier crossroads of frankincense, myrrh, and spice caravans connecting Arabia, India, and Rome. Known as Raqmu to its builders, it showcased how a nomadic desert society built a cosmopolitan hydraulic metropolis.

### Sacred Architecture & Hidden Symbolism
Approached through the narrow mile-long 'Siq' gorge, Petra's crowning jewel Al-Khazneh (The Treasury) was sculpted directly into living rock from top to bottom. The Nabataeans mastered flash-flood engineering, constructing ceramic pipes, terracotta channels, and underground cisterns that stored millions of liters of potable desert water.

### Living Heritage & Traditions
The Bedouin tribes of the Bdoul and Layathnah still reside in the surrounding valleys, sharing cardamom-infused Arabic coffee, sweet sage tea, and traditional rababa fiddle melodies under starlit desert skies, preserving living nomadic memory within the ancient stone metropolis.`,

      ta: `### கலாச்சார மற்றும் வரலாற்று முக்கியத்துவம்
கி.மு. முதல் நூற்றாண்டில் நபடேய அரேபியர்களால் செதுக்கப்பட்ட பெட்ரா, பண்டைய வாசனைத் திரவியங்கள், குங்கிலியம் மற்றும் நறுமணப் பொருட்கள் வர்த்தகத்தின் முக்கிய சந்திப்பாக விளங்கியது. பாலைவனத்தின் நடுவே அமைந்திருந்த இந்நகரம், இந்தியா, ரோம் மற்றும் எகிப்தை இணைக்கும் வர்த்தகப் பாதையின் இதயமாகத் திகழ்ந்தது.

### பாறைச் சிற்பமும் நீர்ப் பொறியியலும்
'சிக்' என்ற நீண்ட மலைப்பிளவு வழியே சென்றால் வெளிப்படும் 'கருவூலம்' (அல்-கஸ்னே), மலையின் மேலிருந்து கீழாக ஒரே பாறையில் செதுக்கப்பட்டதாகும். கடுமையான பாலைவன வறட்சியிலும் மில்லியன் கணக்கான லிட்டர் மழைநீரைச் சேமித்து பயன்படுத்திய நபடேயர்களின் சுடுமண் குழாய் அமைப்பும் அணைகளும் மனித அறிவின் உச்சமாகும்.

### வாழும் பாரம்பரியம்
இன்றும் பெதுவின் பழங்குடி மக்கள் இப்பகுதியில் வாழ்ந்து வருகின்றனர். இரவில் ஆயிரக்கணக்கான மெழுகுவர்த்திகளால் ஒளிரும் பெட்ராவில் அவர்களின் ரபாபா இசைக்கருவியின் மெல்லிசை, பாலைவனத்தின் தொன்மை நினைவுகளை மீட்டெடுக்கிறது.`,

      hi: `### सांस्कृतिक और ऐतिहासिक महत्व
गुलाबी बलुआ पत्थर की चट्टानों को तराश कर बनाई गई पेत्रा ईसा पूर्व पहली सदी में नबाती साम्राज्य की समृद्ध राजधानी थी। यह भारत, अरब और भूमध्यसागरीय देशों के बीच लोबान, कस्तूरी और मसालों के व्यापारिक कारवां का सबसे प्रमुख पड़ाव थी।

### पाषाण वास्तुकला और जल प्रबंधन
'अल-खज़नेह' (द ट्रेजरी) का भव्य मुखौटा चट्टान को ऊपर से नीचे की ओर तराश कर बनाया गया है। नबातियों ने रेगिस्तानी बाढ़ के पानी को रोकने के लिए टेराकोटा पाइपों, भूमिगत जलाशयों और बांधों का ऐसा चमत्कारी तंत्र बनाया था जिससे बंजर रेगिस्तान में एक नखलिस्तान खिल उठा था।

### जीवंत बद्दू संस्कृति
आज भी स्थानीय बदोइन समुदाय पर्यटकों को इलायची वाली कहवा कॉफी और लोक संगीत के माध्यम से अपनी प्राचीन रेगिस्तानी आतिथ्य सत्कार की परंपरा से जोड़ते हैं।`
    }
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    nativeName: 'ताज महल / تاج محل',
    country: 'India',
    city: 'Agra, Uttar Pradesh',
    region: 'Asia',
    coordinates: {
      lat: 27.1751,
      lng: 78.0421,
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Taj+Mahal+Agra+India',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'The pinnacle of Indo-Islamic Mughal architecture, crafted from translucent Makrana white marble as an eternal mausoleum of love along the Yamuna River.',
    historicalEra: 'c. 1632–1653 CE (Mughal Emperor Shah Jahan)',
    architecturalStyle: 'Mughal Symmetrical Architecture with Pietra Dura Marble Inlay',
    unescoStatus: 'UNESCO World Heritage Site (1983)',
    fullSignificance: 'Commissioned by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, the Taj Mahal is globally celebrated as the jewel of Muslim art in India. The complex symbolizes the earthly embodiment of paradise (Jannat) surrounded by pristine Charbagh geometric gardens.',
    architectureDetails: 'Built using pure translucent white marble from Makrana, Rajasthan, hauled by a fleet of over 1,000 elephants. It features exquisite Pietra Dura (Parchin Kari) floral inlays utilizing 28 varieties of semi-precious stones (lapis lazuli, jade, turquoise, and carnelian). The four minarets tilt slightly outward to protect the central tomb in case of an earthquake.',
    travelTips: {
      bestTime: 'October to March; Friday is closed for weekly prayers. Sunrise entry provides ethereal quietude.',
      dressCode: 'Modest attire; shoe covers are provided for the main marble plinth.',
      etiquette: 'Maintain solemn quiet inside the cenotaph chamber; no photography inside the inner tomb.',
      photoTips: 'View across the Yamuna River from Mehtab Bagh gardens at sunset for golden reflections without crowds.',
    },
    sampleCostsINR: {
      transport: 4200, // Gatimaan Express train from New Delhi & local Agra EV rickshaw
      lodgingPerNight: 3500, // Heritage hotel with Taj view terrace
      foodPerDay: 900, // Agra Mughlai delicacies, petha sweets & masala chai
      otherExpenses: 1500, // ASI monument entry & licensed cultural guide
    },
    relatedDestinationIds: ['shore-temple', 'angkor-wat'],
    curatedGuides: {
      en: `### Cultural & Historical Significance
Commissioned in 1632 by Emperor Shah Jahan as the eternal resting place for Empress Mumtaz Mahal, the Taj Mahal is the ultimate jewel of Mughal India. Grounded in Islamic theological ideals of Paradise, the entire complex represents a terrestrial mirror of the celestial Garden of Eden, crowned by luminous divine mercy.

### Sacred Architecture & Hidden Symbolism
Constructed with pure Makrana white marble that shifts its hue from soft rose at dawn to gleaming pearl under the midday sun and ethereal silver by moonlight. The central onion dome floats above a symmetrical octagonal plinth, decorated with intricate 'pietra dura' inlays of lapis lazuli, malachite, and carnelian forming sacred Quranic verses and floral arabesques.

### Living Heritage & Traditions
Centuries later, master stone artisans in Agra—direct descendants of the original imperial craftsmen—still practice the delicate art of marble inlay in their family ateliers. The reflection of the Taj in the Yamuna River continues to inspire poets, musicians, and pilgrims from every continent.`,

      ta: `### கலாச்சார மற்றும் வரலாற்று முக்கியத்துவம்
1632 ஆம் ஆண்டு முகலாயப் பேரரசர் ஷாஜகானால் தனது அன்பு மனைவி மும்தாஜ் நினைவாக எழுப்பப்பட்ட தாஜ்மஹால், இந்திய-இஸ்லாமிய கட்டடக் கலையின் சிகரமாகும். சொர்க்கத்தின் பூலோக வடிவமாக அமைக்கப்பட்ட இக்கலைப்படைப்பு, உலக அதிசயங்களில் ஒன்றாக அழியா காதலின் சின்னமாய்த் திகழ்கிறது.

### புனித கட்டடக் கலையும் பளிங்கு நுட்பமும்
ராஜஸ்தானின் மக்ரானா வெள்ளை பளிங்குக் கற்களால் கட்டப்பட்ட இக்கோபுரம், விடியலில் இளஞ்சிவப்பாகவும், நண்பகலில் தூய வெண்மையாகவும், முழுநிலவில் வெள்ளி போலவும் நிறம் மாறும் தன்மை கொண்டது. லேபிஸ் லசூலி, ஜேட் போன்ற 28 வகையான விலைமதிப்பற்ற நவரத்தினக் கற்களைக் கொண்டு பூக்கள் மற்றும் திருக்குரான் வசனங்கள் சுவர்களில் பதிக்கப்பட்டுள்ளன.

### வாழும் பாரம்பரியம்
தாஜ்மஹாலை உருவாக்கிய கைவினைஞர்களின் வாரிசுகள் இன்றும் ஆக்ராவில் அதே நுட்பமான பளிங்கு வேலைப்பாடுகளைத் தொடர்ந்து செய்கின்றனர். யமுனை நதிக்கரையில் நிற்கும் இந்நிலவொளி மாளிகை மனித நேயத்தையும் கலை நுட்பத்தையும் பறைசாற்றுகிறது.`,

      hi: `### सांस्कृतिक और ऐतिहासिक महत्व
मुगल सम्राट शाहजहाँ द्वारा अपनी प्रिय बेगम मुमताज़ महल की स्मृति में १६३२ में शुरू किया गया ताजमहल भारत की सांस्कृतिक और स्थापत्य विरासत का मुकुट-मणि है। यह स्मारक इस्लामी आध्यात्मिक दर्शन के अनुसार धरती पर बनाए गए जन्नत (स्वर्ग) का प्रतीक है।

### संगमरमर स्थापत्य और पच्चीकारी
राजस्थान के मकराना से लाए गए शुद्ध श्वेत संगमरमर से निर्मित यह स्मारक भोर में गुलाबी, दोपहर में दूधिया सफेद और पूर्णिमा की रात में रजत आभा से दमकता है। इसकी दीवारों पर लाजवर्त, फिरोजा और अकीक जैसे कीमती पत्थरों से की गई 'पिएट्रा ड्यूरा' (पच्चीकारी) कला और सुलेख (कैलीग्राफी) बेमिसाल है।

### जीवंत शिल्प विरासत
आगरा में आज भी मूल कारीगरों के वंशज उसी पुश्तैनी तकनीक से संगमरमर पर नक्काशी का काम करते हैं। यमुना के तट पर स्थित यह स्मारक अनंत प्रेम, शांति और मानवीय सौंदर्य का शाश्वत संदेश देता है।`
    }
  }
];
