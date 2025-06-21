
import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ChevronDown, ChevronUp, ExternalLink, Search, MapPin, Car, Home, Utensils } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

interface FAQItem {
  id: string;
  category: string;
  question: { nl: string; en: string };
  answer: { nl: string; en: string };
  image?: string;
  tips: string[];
  affiliateLink?: string;
  icon: React.ReactNode;
}

const ComprehensiveFAQ: React.FC = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const faqData: FAQItem[] = [
    {
      id: 'accommodation',
      category: 'verblijf',
      question: {
        nl: 'Hoe vind ik goedkope accommodaties in de Algarve?',
        en: 'How do I find cheap accommodations in the Algarve?'
      },
      answer: {
        nl: 'Boek rechtstreeks bij lokale verhuurders of onderhandel via Airbnb voor een lager tarief, vooral buiten het hoogseizoen. Kijk ook naar guesthouses in dorpen als Alte en Monchique. Vraag altijd naar "long stay discount" bij verblijven langer dan een week.',
        en: 'Book directly with local landlords or negotiate via Airbnb for lower rates, especially outside high season. Also look at guesthouses in villages like Alte and Monchique. Always ask for "long stay discount" for stays longer than a week.'
      },
      tips: [
        'Onderhandel altijd bij Airbnb - vooral voor langere verblijven',
        'Zoek naar quinta\'s (landhuizen) voor authentieke ervaringen',
        'Vermijd de kustplaatsen voor goedkopere prijzen'
      ],
      affiliateLink: 'https://airbnb.com/algarve',
      icon: <Home className="w-5 h-5" />
    },
    {
      id: 'villages',
      category: 'dorpen',
      question: {
        nl: 'Welke dorpen zijn het minst toeristisch?',
        en: 'Which villages are the least touristy?'
      },
      answer: {
        nl: 'Onze favorieten: Alte (waterval, rust), Monchique (bergen, natuur), São Brás de Alportel (ambachtelijk), Cacela Velha (geheim strand). Hier vind je nauwelijks massatoerisme en veel lokale charme. Bezoek deze dorpen op doordeweekse dagen voor de meest authentieke ervaring.',
        en: 'Our favorites: Alte (waterfall, peace), Monchique (mountains, nature), São Brás de Alportel (crafts), Cacela Velha (secret beach). Here you\'ll find hardly any mass tourism and lots of local charm. Visit these villages on weekdays for the most authentic experience.'
      },
      tips: [
        'Bezoek op doordeweekse dagen voor echte rust',
        'Praat met locals in het café - zij kennen de beste geheimen',
        'Neem contant geld mee - niet alle plekken accepteren kaarten'
      ],
      icon: <MapPin className="w-5 h-5" />
    },
    {
      id: 'car-rental',
      category: 'vervoer',
      question: {
        nl: 'Hoe huur ik een auto zonder creditcard?',
        en: 'How do I rent a car without a credit card?'
      },
      answer: {
        nl: 'Steeds meer lokale verhuurders bieden deze optie. Vraag specifiek naar "huur zonder creditcard" bij het boeken. LocalRent Algarve en Auto Europa zijn betrouwbare opties. Let op: je betaalt vaak een hogere borg, maar krijgt deze direct terug bij inlevering.',
        en: 'More and more local rental companies offer this option. Ask specifically for "rental without credit card" when booking. LocalRent Algarve and Auto Europa are reliable options. Note: you often pay a higher deposit, but get it back immediately upon return.'
      },
      tips: [
        'Boek direct bij lokale verhuurders voor beste service',
        'Vraag naar weekkortingen - vaak €5-7 per dag goedkoper',
        'Controleer de auto grondig bij ophalen en inleveren'
      ],
      affiliateLink: 'https://rentalcars.com/algarve',
      icon: <Car className="w-5 h-5" />
    },
    {
      id: 'local-food',
      category: 'eten',
      question: {
        nl: 'Waar eet je als local?',
        en: 'Where do you eat like a local?'
      },
      answer: {
        nl: 'Zoek naar "tascas" (lokale eethuisjes) in dorpen, niet aan de kust. Vraag naar "prato do dia" (dagmenu) voor €8-12. Onze aanraders: Tasca do Zé (Alte), Taberna Real (Tavira), O Pescador (Olhão). Eet je lunch tussen 12-14u en diner na 19u zoals de locals.',
        en: 'Look for "tascas" (local eateries) in villages, not on the coast. Ask for "prato do dia" (daily menu) for €8-12. Our recommendations: Tasca do Zé (Alte), Taberna Real (Tavira), O Pescador (Olhão). Have lunch between 12-2pm and dinner after 7pm like the locals.'
      },
      tips: [
        'Vraag altijd naar "vinho da casa" - huiswijn voor €1,50/glas',
        'Eet waar de locals eten - geen Engelse menu\'s',
        'Deel tapas met je reisgezelschap voor meer variatie'
      ],
      icon: <Utensils className="w-5 h-5" />
    }
  ];

  const categories = [
    { id: 'all', name: language === 'nl' ? 'Alle vragen' : 'All questions' },
    { id: 'verblijf', name: language === 'nl' ? 'Verblijf' : 'Accommodation' },
    { id: 'dorpen', name: language === 'nl' ? 'Dorpen' : 'Villages' },
    { id: 'vervoer', name: language === 'nl' ? 'Vervoer' : 'Transport' },
    { id: 'eten', name: language === 'nl' ? 'Eten' : 'Food' }
  ];

  const filteredFAQs = useMemo(() => {
    let filtered = faqData;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question[language].toLowerCase().includes(query) ||
        faq.answer[language].toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery, language]);

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            {language === 'nl' ? '❓ Veelgestelde Vragen' : '❓ Frequently Asked Questions'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'nl' 
              ? 'Alles wat je wilt weten over lokaal reizen in de Algarve. Van budgettips tot geheime plekken.'
              : 'Everything you want to know about local travel in the Algarve. From budget tips to secret places.'
            }
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder={language === 'nl' ? 'Typ je vraag...' : 'Type your question...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-3 text-lg"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq) => {
            const isOpen = openItems.has(faq.id);
            
            return (
              <Card key={faq.id} className="shadow-md">
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <div 
                      className="w-full p-6 text-left flex items-center justify-between cursor-pointer hover:bg-gray-50"
                      onClick={() => toggleItem(faq.id)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 text-green-600">
                          {faq.icon}
                        </div>
                        <h3 className="font-semibold text-lg pr-4">{faq.question[language]}</h3>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="pt-0 pb-6 px-6">
                      <div className="ml-9">
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {faq.answer[language]}
                        </p>
                        
                        {faq.tips && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-green-700 mb-2">
                              {language === 'nl' ? '💡 Extra tips:' : '💡 Extra tips:'}
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                              {faq.tips.map((tip, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-green-500 mt-1">•</span>
                                  <span>{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {faq.affiliateLink && (
                          <Button 
                            onClick={() => window.open(faq.affiliateLink, '_blank')}
                            className="bg-orange-500 hover:bg-orange-600"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {language === 'nl' ? 'Bekijk beste deals' : 'View best deals'}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            );
          })}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {language === 'nl' 
                ? 'Geen vragen gevonden. Probeer andere zoektermen.' 
                : 'No questions found. Try different search terms.'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComprehensiveFAQ;
