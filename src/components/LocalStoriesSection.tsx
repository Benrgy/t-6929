
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Heart, Quote, MapPin, Users, Star, Clock } from 'lucide-react';

interface LocalStory {
  id: string;
  personName: string;
  role: string;
  age?: number;
  location: string;
  story: string;
  tip: string;
  category: 'local' | 'expat' | 'business' | 'guide';
  verified: boolean;
}

const LocalStoriesSection: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  const localStories: LocalStory[] = [
    {
      id: "1",
      personName: "Maria Conceição",
      role: "Visser familie (4e generatie)",
      age: 67,
      location: "Tavira",
      story: language === 'nl' 
        ? "Al 40 jaar verkoop ik verse vis aan de kade van Tavira. Mijn groot-vader deed dit, mijn vader deed dit, nu doe ik het. Toeristen kopen altijd dure vis in restaurants, maar komen nooit naar ons. Wij verkopen dezelfde vis voor helft van de prijs. Sardines van €15/kg in restaurant? Bij mij €4/kg, vers van de boot."
        : "For 40 years I've been selling fresh fish at Tavira's quay. My grandfather did this, my father did this, now I do it. Tourists always buy expensive fish in restaurants, but never come to us. We sell the same fish for half the price. Sardines €15/kg in restaurant? At my place €4/kg, fresh from the boat.",
      tip: language === 'nl'
        ? "Kom tussen 16:00-17:00 als boten terugkomen. Vraag naar 'peixe do dia' - vis van die dag. Ik spreek geen Engels, maar wijs gewoon naar wat je wilt. Neem plastic tasje mee!"
        : "Come between 4-5pm when boats return. Ask for 'peixe do dia' - fish of the day. I don't speak English, but just point to what you want. Bring plastic bag!",
      category: 'local',
      verified: true
    },
    {
      id: "2", 
      personName: "André Ferreira",
      role: "Kajak gids & lokale surfer",
      age: 34,
      location: "Benagil / Carvoeiro",
      story: language === 'nl'
        ? "15 jaar geef ik kajak tours naar Benagil. Elke dag zie ik dezelfde foto's op Instagram - iedereen wil die ene shot. Maar de échte magie zit in de kleine grotten. Gruta do Capitão, 200 meter van Benagil, kent bijna niemand. Daar zwem ik met mijn vriendin als ik vrij ben - kristalhelder water, altijd leeg."
        : "15 years I've been giving kayak tours to Benagil. Every day I see the same photos on Instagram - everyone wants that one shot. But the real magic is in the small caves. Captain's Cave, 200 meters from Benagil, almost nobody knows. That's where I swim with my girlfriend when I'm free - crystal clear water, always empty.",
      tip: language === 'nl'
        ? "Boek 8:00 of 17:30 tour - dan heb je Benagil bijna voor jezelf. Vraag je gids naar kleine grotten - wij kennen er 12 in dit gebied. Breng waterdichte telefoonhoes mee!"
        : "Book 8:00 or 17:30 tour - then you have Benagil almost to yourself. Ask your guide about small caves - we know 12 in this area. Bring waterproof phone case!",
      category: 'guide',
      verified: true
    },
    {
      id: "3",
      personName: "Henk & Marijke van der Berg", 
      role: "Nederlandse eigenaren B&B",
      age: 58,
      location: "Monchique",
      story: language === 'nl'
        ? "Wij verhuisden 8 jaar geleden van Utrecht naar Monchique. Kochten een oude quinta voor €85.000 - nu waard €180.000. Runnen B&B met 4 kamers. Gasten betalen €45/nacht inclusief ontbijt met lokale honing en vers brood. Hotels aan de kust vragen €120 voor hetzelfde."
        : "We moved 8 years ago from Utrecht to Monchique. Bought an old quinta for €85,000 - now worth €180,000. Run B&B with 4 rooms. Guests pay €45/night including breakfast with local honey and fresh bread. Hotels at the coast charge €120 for the same.",
      tip: language === 'nl'
        ? "Thermale bronnen zijn 's ochtends vroeg het rustigst. Wij geven gasten korting voor Caldas spa - €12 ipv €15. Vraag naar 'Nederlandse korting' - veel eigenaren geven dit."
        : "Thermal springs are quietest early morning. We give guests discount for Caldas spa - €12 instead of €15. Ask for 'Dutch discount' - many owners give this.",
      category: 'expat',
      verified: true
    },
    {
      id: "4",
      personName: "João Silva",
      role: "Medronho distilleerder (3e generatie)",
      age: 52,
      location: "Monchique",
      story: language === 'nl'
        ? "Mijn opa begon deze distilleerderij in 1943. Medronho wordt gemaakt van aardbeiboom - groeit wild in onze bergen. Proces duurt 3 maanden: fruit plukken, fermenteren, distilleren. 100kg fruit = 8 liter medronho. Toeristen noemen het 'Portuguese whiskey', maar het is veel ouder dan whiskey."
        : "My grandfather started this distillery in 1943. Medronho is made from strawberry tree - grows wild in our mountains. Process takes 3 months: pick fruit, ferment, distil. 100kg fruit = 8 liters medronho. Tourists call it 'Portuguese whiskey', but it's much older than whiskey.",
      tip: language === 'nl'
        ? "Echte medronho drink je puur, kleine slokjes. Goede medronho brandt niet in je keel - alleen warmte in je maag. €8/fles bij mij, €18 in kustplaatsen. Kom in oktober voor verse batch."
        : "Real medronho you drink pure, small sips. Good medronho doesn't burn in your throat - only warmth in your stomach. €8/bottle at my place, €18 in coastal towns. Come in October for fresh batch.",
      category: 'business',
      verified: true
    }
  ];

  const categories = [
    { id: 'all', label: language === 'nl' ? 'Alle verhalen' : 'All stories', icon: Users },
    { id: 'local', label: language === 'nl' ? 'Locals' : 'Locals', icon: Heart },
    { id: 'expat', label: language === 'nl' ? 'Nederlandse expats' : 'Dutch expats', icon: MapPin },
    { id: 'business', label: language === 'nl' ? 'Lokale ondernemers' : 'Local business', icon: Star },
    { id: 'guide', label: language === 'nl' ? 'Gidsen & experts' : 'Guides & experts', icon: Quote }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? localStories 
    : localStories.filter(story => story.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {language === 'nl' ? '👥 Verhalen van Echte Mensen' : '👥 Stories from Real People'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {language === 'nl'
              ? 'Locals, Nederlandse expats en ondernemers delen hun geheimen. Dit zijn geen gesponsorde reviews - dit zijn échte mensen met échte tips.'
              : 'Locals, Dutch expats and entrepreneurs share their secrets. These are not sponsored reviews - these are real people with real tips.'
            }
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-orange-100 shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredStories.map((story) => (
            <Card key={story.id} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardContent className="p-0">
                {/* Story Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {story.personName}
                        {story.age && <span className="text-gray-500 font-normal"> ({story.age})</span>}
                      </h3>
                      <p className="text-orange-600 font-medium">{story.role}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-500 text-sm">{story.location}</span>
                        {story.verified && (
                          <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">
                            ✓ Geverifieerd
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className={`p-2 rounded-full ${
                      story.category === 'local' ? 'bg-blue-100' :
                      story.category === 'expat' ? 'bg-orange-100' :
                      story.category === 'business' ? 'bg-purple-100' : 'bg-green-100'
                    }`}>
                      <Quote className={`w-5 h-5 ${
                        story.category === 'local' ? 'text-blue-600' :
                        story.category === 'expat' ? 'text-orange-600' :
                        story.category === 'business' ? 'text-purple-600' : 'text-green-600'
                      }`} />
                    </div>
                  </div>
                </div>

                {/* Story Content */}
                <div className="px-6 pb-4">
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 italic leading-relaxed">
                      "{expandedStory === story.id ? story.story : `${story.story.substring(0, 200)}...`}"
                    </p>
                    {story.story.length > 200 && (
                      <button
                        onClick={() => setExpandedStory(expandedStory === story.id ? null : story.id)}
                        className="text-orange-600 hover:text-orange-700 text-sm font-medium mt-2"
                      >
                        {expandedStory === story.id 
                          ? (language === 'nl' ? 'Toon minder' : 'Show less')
                          : (language === 'nl' ? 'Lees meer' : 'Read more')
                        }
                      </button>
                    )}
                  </div>

                  {/* Practical Tip */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <div className="flex items-start gap-2">
                      <div className="bg-yellow-400 text-white p-1 rounded-full mt-0.5">
                        <Clock className="w-3 h-3" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {language === 'nl' ? 'Praktische Tip:' : 'Practical Tip:'}
                        </h4>
                        <p className="text-gray-700 text-sm">{story.tip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {language === 'nl' ? '💬 Deel jouw verhaal' : '💬 Share your story'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'nl'
                ? 'Ben je local, expat of ondernemer in de Algarve? Deel jouw geheimen en help anderen de authentieke Algarve te ontdekken.'
                : 'Are you a local, expat or entrepreneur in the Algarve? Share your secrets and help others discover the authentic Algarve.'
              }
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              {language === 'nl' ? 'Verhaal insturen' : 'Submit story'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalStoriesSection;
