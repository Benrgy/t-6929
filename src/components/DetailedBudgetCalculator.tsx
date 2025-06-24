
import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Slider } from './ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Euro, 
  Calculator, 
  Plane, 
  Home, 
  UtensilsCrossed, 
  Car, 
  MapPin,
  TrendingDown,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

interface BudgetBreakdown {
  category: string;
  budget: number;
  smart: number;
  luxury: number;
  tips: string[];
}

const DetailedBudgetCalculator: React.FC = () => {
  const { language } = useLanguage();
  const [days, setDays] = useState([7]);
  const [people, setPeople] = useState([2]);
  const [style, setStyle] = useState<'budget' | 'smart' | 'luxury'>('smart');

  // Nederlandse context prijzen
  const costs: Record<string, BudgetBreakdown> = {
    flights: {
      category: language === 'nl' ? 'Vliegtickets (retour)' : 'Flights (return)',
      budget: 89,  // Ryanair/Wizz Air promo
      smart: 145,  // KLM/TAP normale prijs  
      luxury: 220, // Business class upgrade
      tips: language === 'nl' ? [
        "Boek dinsdag/woensdag vluchten - €30 goedkoper",
        "Gebruik VPN voor andere landen - soms €20 verschil", 
        "Faro is goedkoper dan Lissabon + auto huren",
        "September/oktober: €60 goedkoper dan zomer"
      ] : [
        "Book Tuesday/Wednesday flights - €30 cheaper",
        "Use VPN for other countries - sometimes €20 difference",
        "Faro is cheaper than Lisbon + car rental",
        "September/October: €60 cheaper than summer"
      ]
    },
    accommodation: {
      category: language === 'nl' ? 'Overnachting (per nacht)' : 'Accommodation (per night)',
      budget: 28,  // Local guesthouse/hostel
      smart: 55,   // Airbnb/B&B
      luxury: 120, // 4* hotel
      tips: language === 'nl' ? [
        "Nederlandse B&B eigenaren geven vaak 'landgenoten korting'",
        "Boek direct - bespaar 15% booking fees",
        "Vraag naar week-korting vanaf 7 nachten",
        "Quinta's (boerderijen) zijn authentiek en goedkoop"
      ] : [
        "Dutch B&B owners often give 'compatriot discounts'",
        "Book direct - save 15% booking fees", 
        "Ask for week discount from 7+ nights",
        "Quintas (farms) are authentic and cheap"
      ]
    },
    food: {
      category: language === 'nl' ? 'Eten & drinken (per dag)' : 'Food & drinks (per day)',
      budget: 18,  // Local tasca's + supermarket
      smart: 32,   // Mix restaurant + local
      luxury: 65,  // Tourist restaurants
      tips: language === 'nl' ? [
        "Lunch bij locals: €8 vs €18 toeristische restaurants",
        "Koop vis direct bij vissers - 50% korting",
        "Pingo Doce supermarkt goedkoper dan Continente",
        "Vraag naar 'prato do dia' (dagschotel) - altijd goed deal"
      ] : [
        "Lunch at locals: €8 vs €18 tourist restaurants",
        "Buy fish directly from fishermen - 50% discount",
        "Pingo Doce supermarket cheaper than Continente", 
        "Ask for 'prato do dia' (daily dish) - always good deal"
      ]
    },
    transport: {
      category: language === 'nl' ? 'Vervoer (per dag)' : 'Transport (per day)',
      budget: 12,  // Bus + walking
      smart: 28,   // Car rental
      luxury: 45,  // Taxi/private transfer
      tips: language === 'nl' ? [
        "Auto delen met anderen - €15/dag pp ipv €35",
        "Eva Bus dagkaart €8 - onbeperkt reizen",
        "Fiets huren €8/dag - perfect voor korte afstanden",
        "Benzine €1,50/L - reken op €25/dag voor auto"
      ] : [
        "Share car with others - €15/day pp instead of €35",
        "Eva Bus day pass €8 - unlimited travel",
        "Bike rental €8/day - perfect for short distances",
        "Petrol €1.50/L - count on €25/day for car"
      ]
    },
    activities: {
      category: language === 'nl' ? 'Activiteiten (per dag)' : 'Activities (per day)',
      budget: 8,   // Free hiking + beaches
      smart: 22,   // Mix paid/free activities
      luxury: 45,  // All paid tours
      tips: language === 'nl' ? [
        "Wandelen en stranden zijn gratis - 50% van plezier kost niks",
        "Boek tours direct bij locals - 30% goedkoper",
        "Groep tours - €25 pp vs €45 private",
        "Thermale bronnen €15 - hele dag ontspanning"
      ] : [
        "Hiking and beaches are free - 50% of fun costs nothing",
        "Book tours directly with locals - 30% cheaper",
        "Group tours - €25 pp vs €45 private",
        "Thermal springs €15 - full day relaxation"
      ]
    }
  };

  const totalPerPerson = useMemo(() => {
    const flightCost = costs.flights[style];
    const dailyCosts = (costs.accommodation[style] / 2) + // Assuming 2 people sharing
                      costs.food[style] + 
                      costs.transport[style] + 
                      costs.activities[style];
    
    return flightCost + (dailyCosts * days[0]);
  }, [days, style]);

  const totalTrip = totalPerPerson * people[0];

  // Nederlandse vergelijking
  const nederlandsComparison = useMemo(() => {
    const weekendAmsterdam = 450; // Weekend Amsterdam per persoon
    const skiweekOostenrijk = 890; // Ski week Oostenrijk
    const centerParcs = 320; // 3 dagen Center Parcs
    
    if (totalPerPerson < weekendAmsterdam) {
      return {
        comparison: language === 'nl' ? 'weekend in Amsterdam' : 'weekend in Amsterdam',
        savings: weekendAmsterdam - totalPerPerson,
        emoji: '🏛️'
      };
    } else if (totalPerPerson < skiweekOostenrijk) {
      return {
        comparison: language === 'nl' ? 'ski week in Oostenrijk' : 'ski week Austria',
        savings: skiweekOostenrijk - totalPerPerson,
        emoji: '🎿'
      };
    } else {
      return {
        comparison: language === 'nl' ? 'luxe vakantie' : 'luxury vacation',
        savings: 0,
        emoji: '💎'
      };
    }
  }, [totalPerPerson, language]);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {language === 'nl' ? '💰 Slimme Budget Calculator' : '💰 Smart Budget Calculator'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {language === 'nl'
              ? 'Bereken je Algarve budget met echte prijzen. Gebaseerd op ervaringen van 500+ Nederlandse reizigers.'
              : 'Calculate your Algarve budget with real prices. Based on experiences from 500+ Dutch travelers.'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Controls */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  {language === 'nl' ? 'Jouw Reis' : 'Your Trip'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Days Slider */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'nl' ? `Aantal dagen: ${days[0]}` : `Number of days: ${days[0]}`}
                  </label>
                  <Slider
                    value={days}
                    onValueChange={setDays}
                    max={21}
                    min={3}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>3 dagen</span>
                    <span>21 dagen</span>
                  </div>
                </div>

                {/* People Slider */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'nl' ? `Aantal personen: ${people[0]}` : `Number of people: ${people[0]}`}
                  </label>
                  <Slider
                    value={people}
                    onValueChange={setPeople}
                    max={6}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 persoon</span>
                    <span>6 personen</span>
                  </div>
                </div>

                {/* Style Selection */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    {language === 'nl' ? 'Reistijl:' : 'Travel style:'}
                  </label>
                  <div className="space-y-2">
                    {(['budget', 'smart', 'luxury'] as const).map((styleOption) => (
                      <button
                        key={styleOption}
                        onClick={() => setStyle(styleOption)}
                        className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                          style === styleOption
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium">
                          {styleOption === 'budget' && (language === 'nl' ? '🎒 Budget Explorer' : '🎒 Budget Explorer')}
                          {styleOption === 'smart' && (language === 'nl' ? '🌟 Slimme Reiziger' : '🌟 Smart Traveler')}
                          {styleOption === 'luxury' && (language === 'nl' ? '💎 Luxe Genieter' : '💎 Luxury Enjoyer')}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {styleOption === 'budget' && (language === 'nl' ? 'Lokaal leven, authentiek' : 'Local living, authentic')}
                          {styleOption === 'smart' && (language === 'nl' ? 'Beste prijs-kwaliteit' : 'Best value for money')}
                          {styleOption === 'luxury' && (language === 'nl' ? 'Comfort & gemak' : 'Comfort & convenience')}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Euro className="w-5 h-5 text-green-600" />
                    {language === 'nl' ? 'Jouw Budget' : 'Your Budget'}
                  </span>
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    €{totalTrip.toLocaleString()}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Summary Cards */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      €{totalPerPerson}
                    </div>
                    <div className="text-sm text-gray-600">
                      {language === 'nl' ? 'Per persoon' : 'Per person'}
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">
                      €{Math.round(totalPerPerson / days[0])}
                    </div>
                    <div className="text-sm text-gray-600">
                      {language === 'nl' ? 'Per dag' : 'Per day'}
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      {nederlandsComparison.emoji}
                    </div>
                    <div className="text-sm text-gray-600">
                      {nederlandsComparison.savings > 0 
                        ? `€${nederlandsComparison.savings} ${language === 'nl' ? 'minder dan' : 'less than'} ${nederlandsComparison.comparison}`
                        : language === 'nl' ? 'Luxe niveau' : 'Luxury level'
                      }
                    </div>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <Tabs defaultValue="breakdown" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="breakdown">
                      {language === 'nl' ? 'Kostenopbouw' : 'Cost Breakdown'}
                    </TabsTrigger>
                    <TabsTrigger value="tips">
                      {language === 'nl' ? 'Bespaartips' : 'Money Saving Tips'}
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="breakdown" className="space-y-4">
                    {Object.entries(costs).map(([key, cost]) => {
                      const dailyCost = ['accommodation', 'food', 'transport', 'activities'].includes(key);
                      const totalCost = dailyCost ? cost[style] * days[0] : cost[style];
                      
                      return (
                        <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            {key === 'flights' && <Plane className="w-5 h-5 text-blue-500" />}
                            {key === 'accommodation' && <Home className="w-5 h-5 text-green-500" />}
                            {key === 'food' && <UtensilsCrossed className="w-5 h-5 text-orange-500" />}
                            {key === 'transport' && <Car className="w-5 h-5 text-purple-500" />}
                            {key === 'activities' && <MapPin className="w-5 h-5 text-red-500" />}
                            <div>
                              <div className="font-medium">{cost.category}</div>
                              <div className="text-sm text-gray-600">
                                €{cost[style]}{dailyCost && `/${language === 'nl' ? 'dag' : 'day'}`}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">€{totalCost}</div>
                            <div className="text-sm text-gray-500">
                              {Math.round((totalCost / totalPerPerson) * 100)}%
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </TabsContent>
                  
                  <TabsContent value="tips" className="space-y-4">
                    {Object.entries(costs).map(([key, cost]) => (
                      <div key={key} className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-yellow-500" />
                          {cost.category}
                        </h4>
                        <ul className="space-y-2">
                          {cost.tips.map((tip, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <TrendingDown className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>

                {/* Call to Action */}
                <div className="mt-8 p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white text-center">
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'nl' ? '🎯 Klaar om te boeken?' : '🎯 Ready to book?'}
                  </h3>
                  <p className="mb-4 opacity-90">
                    {language === 'nl'
                      ? 'Gebruik onze affiliate links om te boeken - jij betaalt niet meer, wij krijgen kleine commissie om deze site te blijven runnen.'
                      : 'Use our affiliate links to book - you pay no more, we get small commission to keep running this site.'
                    }
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                      {language === 'nl' ? 'Vluchten zoeken' : 'Search flights'}
                    </Button>
                    <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                      {language === 'nl' ? 'Accommodatie vinden' : 'Find accommodation'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedBudgetCalculator;
