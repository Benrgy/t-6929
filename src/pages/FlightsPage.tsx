
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Plane, ExternalLink, Calendar, Euro, AlertTriangle } from 'lucide-react';

const FlightsPage: React.FC = () => {
  const { language } = useLanguage();
  const [currentDate] = useState(new Date().toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-GB'));

  const priceData = [
    { month: language === 'nl' ? 'Januari-Maart' : 'January-March', transavia: '€80-150', tap: '€120-200', ryanair: '€60-120' },
    { month: language === 'nl' ? 'April-Juni' : 'April-June', transavia: '€120-250', tap: '€150-300', ryanair: '€100-200' },
    { month: language === 'nl' ? 'Juli-Augustus' : 'July-August', transavia: '€200-400', tap: '€250-450', ryanair: '€150-350' },
    { month: language === 'nl' ? 'September-December' : 'September-December', transavia: '€100-200', tap: '€130-250', ryanair: '€80-180' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-sky-500 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            {language === 'nl' ? 'Goedkope Transavia Vluchten naar Algarve' : 'Cheap Transavia Flights to Algarve'}
          </h1>
          <p className="text-xl mb-8">
            {language === 'nl' ? 'Vanaf €79 rechtstreeks vanuit Nederland' : 'From €79 direct from the Netherlands'}
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-sm">
              {language === 'nl' ? 'Laatste update:' : 'Last update:'} {currentDate}
            </p>
          </div>
        </div>
      </section>

      {/* Price Warning */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
            <p className="text-yellow-800">
              <strong>{language === 'nl' ? 'Let op:' : 'Note:'}</strong> {' '}
              {language === 'nl' 
                ? 'Vliegprijzen veranderen dagelijks. Onderstaande prijzen zijn indicatief.'
                : 'Flight prices change daily. The prices below are indicative.'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Price Table */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            {language === 'nl' ? 'Gemiddelde Prijzen per Seizoen (retour)' : 'Average Prices per Season (return)'}
          </h2>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">{language === 'nl' ? 'Maand' : 'Month'}</th>
                      <th className="text-left py-3">Transavia</th>
                      <th className="text-left py-3">TAP</th>
                      <th className="text-left py-3">Ryanair</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceData.map((row, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 font-medium">{row.month}</td>
                        <td className="py-3">{row.transavia}</td>
                        <td className="py-3">{row.tap}</td>
                        <td className="py-3">{row.ryanair}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-lg">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">
                💡 {language === 'nl' ? 'Tip: Boek 6-8 weken van tevoren voor beste prijzen' : 'Tip: Book 6-8 weeks in advance for best prices'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Airlines Comparison */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            {language === 'nl' ? 'Vergelijk Luchtvaartmaatschappijen' : 'Compare Airlines'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Plane className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-xl">Transavia</h3>
                </div>
                <ul className="space-y-2 text-sm mb-6">
                  <li>✓ {language === 'nl' ? 'Nederlandse maatschappij' : 'Dutch airline'}</li>
                  <li>✓ {language === 'nl' ? 'Directe vluchten' : 'Direct flights'}</li>
                  <li>✓ {language === 'nl' ? 'Goede service' : 'Good service'}</li>
                  <li>✗ {language === 'nl' ? 'Beperkte bestemmingen' : 'Limited destinations'}</li>
                </ul>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://www.transavia.com/nl-NL/boek-een-vlucht/vluchten/zoeken/?utm_source=lokaalgenieten', '_blank')}
                >
                  {language === 'nl' ? 'Boek Transavia' : 'Book Transavia'}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Plane className="w-12 h-12 text-red-600 mx-auto mb-2" />
                  <h3 className="font-bold text-xl">TAP Air Portugal</h3>
                </div>
                <ul className="space-y-2 text-sm mb-6">
                  <li>✓ {language === 'nl' ? 'Nationale maatschappij' : 'National airline'}</li>
                  <li>✓ {language === 'nl' ? 'Meer bestemmingen' : 'More destinations'}</li>
                  <li>✓ {language === 'nl' ? 'Goede bagageregels' : 'Good baggage rules'}</li>
                  <li>✗ {language === 'nl' ? 'Duurder' : 'More expensive'}</li>
                </ul>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => window.open('https://www.flytap.com/?utm_source=lokaalgenieten', '_blank')}
                >
                  {language === 'nl' ? 'Boek TAP' : 'Book TAP'}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Plane className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
                  <h3 className="font-bold text-xl">Ryanair</h3>
                </div>
                <ul className="space-y-2 text-sm mb-6">
                  <li>✓ {language === 'nl' ? 'Goedkoopste optie' : 'Cheapest option'}</li>
                  <li>✓ {language === 'nl' ? 'Veel vluchten' : 'Many flights'}</li>
                  <li>✗ {language === 'nl' ? 'Extra kosten' : 'Extra costs'}</li>
                  <li>✗ {language === 'nl' ? 'Beperkte service' : 'Limited service'}</li>
                </ul>
                <Button 
                  className="w-full bg-yellow-600 hover:bg-yellow-700"
                  onClick={() => window.open('https://www.ryanair.com/?utm_source=lokaalgenieten', '_blank')}
                >
                  {language === 'nl' ? 'Boek Ryanair' : 'Book Ryanair'}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlightsPage;
