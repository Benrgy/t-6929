
import { FAQ } from '../types/algarve';

export const algarveQA: FAQ[] = [
  {
    id: "1",
    question: {
      en: "How do I find cheap accommodation in the Algarve?",
      nl: "Hoe vind ik goedkope accommodatie in de Algarve?"
    },
    answer: {
      en: "Book directly with guesthouses, use Airbnb for longer stays, consider hostels in Lagos and Faro, and visit during shoulder seasons (April-May, September-October) for better rates.",
      nl: "Boek direct bij pensions, gebruik Airbnb voor langere verblijven, overweeg hostels in Lagos en Faro, en bezoek tijdens de tussenperiodes (april-mei, september-oktober) voor betere tarieven."
    },
    category: "accommodation",
    relatedQuestions: ["2", "3"],
    affiliateLinks: {
      accommodation: "https://booking.com/algarve-budget"
    }
  },
  {
    id: "2",
    question: {
      en: "What are the best hidden villages in the Algarve?",
      nl: "Wat zijn de beste verborgen dorpen in de Algarve?"
    },
    answer: {
      en: "Tavira for authentic charm, Monchique for mountain views, Alte for traditional architecture, Salir for castle ruins, and Barão de São Miguel for peaceful atmosphere.",
      nl: "Tavira voor authentieke charme, Monchique voor bergzichten, Alte voor traditionele architectuur, Salir voor kasteelruïnes, en Barão de São Miguel voor een vredige sfeer."
    },
    category: "hidden-villages",
    relatedQuestions: ["4", "5"]
  },
  {
    id: "3",
    question: {
      en: "How can I travel cheaply around the Algarve?",
      nl: "Hoe kan ik goedkoop reizen door de Algarve?"
    },
    answer: {
      en: "Use the train line along the coast (€2-5 per journey), rent a car with friends to split costs, take local buses (€1-3), or cycle between nearby towns. Book transport in advance for better prices.",
      nl: "Gebruik de treinlijn langs de kust (€2-5 per reis), huur een auto met vrienden om kosten te delen, neem lokale bussen (€1-3), of fiets tussen nabijgelegen steden. Boek vervoer vooraf voor betere prijzen."
    },
    category: "transport",
    relatedQuestions: ["1", "6"],
    affiliateLinks: {
      transport: "https://rentalcars.com/algarve-budget"
    }
  },
  {
    id: "4",
    question: {
      en: "Where can I eat authentic Portuguese food on a budget?",
      nl: "Waar kan ik authentiek Portugees eten op een budget?"
    },
    answer: {
      en: "Visit local tascas (family restaurants), try 'prato do dia' (dish of the day) for €6-8, shop at local markets, and eat where locals eat - away from tourist areas.",
      nl: "Bezoek lokale tascas (familierestaurants), probeer 'prato do dia' (gerecht van de dag) voor €6-8, shop op lokale markten, en eet waar de locals eten - weg van toeristische gebieden."
    },
    category: "food-drink",
    relatedQuestions: ["2", "7"]
  },
  {
    id: "5",
    question: {
      en: "What are the best secret beaches in the Algarve?",
      nl: "Wat zijn de beste geheime stranden in de Algarve?"
    },
    answer: {
      en: "Praia da Amoreira for surfing, Praia do Amado for dramatic cliffs, Praia da Arrifana for sunsets, Ilha Deserta for pristine nature, and Praia da Ingrina for crystal clear water.",
      nl: "Praia da Amoreira voor surfen, Praia do Amado voor dramatische kliffen, Praia da Arrifana voor zonsondergangen, Ilha Deserta voor ongerepte natuur, en Praia da Ingrina voor kristalhelder water."
    },
    category: "beaches-nature",
    relatedQuestions: ["6", "8"]
  },
  {
    id: "6",
    question: {
      en: "What free activities can I do in the Algarve?",
      nl: "Welke gratis activiteiten kan ik doen in de Algarve?"
    },
    answer: {
      en: "Hike the Seven Hanging Valleys Trail, explore Tavira's old town, visit free viewpoints like Cabo de São Vicente, swim at public beaches, and join free walking tours in major towns.",
      nl: "Wandel de Seven Hanging Valleys Trail, verken de oude stad van Tavira, bezoek gratis uitkijkpunten zoals Cabo de São Vicente, zwem op openbare stranden, en doe mee aan gratis wandeltours in grote steden."
    },
    category: "activities",
    relatedQuestions: ["5", "2"]
  }
];
