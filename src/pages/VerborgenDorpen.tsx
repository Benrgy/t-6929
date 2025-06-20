
import React from 'react';
import { MapPin, Clock, Car } from 'lucide-react';

const VerborgenDorpen = () => {
  const dorpen = [
    {
      naam: "Loulé",
      beschrijving: "Een authentiek marktstadje in het hart van de Algarve, waar traditie en moderniteit samenkomen. Bekend om zijn prachtige markthal en levendige sfeer.",
      highlights: ["Traditionele markt op zaterdag", "Prachtige Moorse architectuur", "Lokale keramiekwerkplaatsen"],
      bereikbaarheid: "25 min rijden vanuit Faro",
      tip: "Bezoek op zaterdag voor de beroemde markt, maar kom vroeg voor de beste producten!",
      image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-4.0.3"
    },
    {
      naam: "Alte",
      beschrijving: "Een sprookjesachtig bergdorpje met witgekalkte huisjes en blauwe randen. Dit pittoreske dorp ademt rust en authenticiteit.",
      highlights: ["Kristalhelder bergwater", "Traditionele Algarve architectuur", "Prachtige wandelroutes"],
      bereikbaarheid: "45 min rijden vanuit Faro",
      tip: "Neem zwemkleding mee - het bergwater is verfrissend koud maar heerlijk helder!",
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3"
    },
    {
      naam: "Monchique",
      beschrijving: "Het hoogste punt van de Algarve biedt adembenemende uitzichten en een aangenaam bergklimaat. Perfect voor wie even wil ontsnappen aan de kustdrukte.",
      highlights: ["Panoramische uitzichten", "Natuurlijke warmwaterbronnen", "Lokale medronho (brandewijn)"],
      bereikbaarheid: "1 uur rijden vanuit Lagos",
      tip: "Probeer de lokale medronho, maar pas op - het is sterker dan je denkt!",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3"
    },
    {
      naam: "Estoi",
      beschrijving: "Een klein dorp met een verrassend luxueus paleis en Romeinse ruïnes. Een historische parel die de meeste toeristen over het hoofd zien.",
      highlights: ["Palácio de Estoi (roze paleis)", "Romeinse ruïnes van Milreu", "Authentieke dorpssfeer"],
      bereikbaarheid: "20 min rijden vanuit Faro",
      tip: "Combineer je bezoek met de Romeinse ruïnes - één ticket geldt voor beide attracties.",
      image: "https://images.unsplash.com/photo-1571104508999-893933ded431?ixlib=rb-4.0.3"
    },
    {
      naam: "Cacela Velha",
      beschrijving: "Een klein vissersdorpje op een klif met uitzicht over de Ria Formosa. Tijd lijkt hier stil te staan in dit authentieke stukje Portugal.",
      highlights: ["Spectaculair uitzicht over lagune", "Authentieke visserstraditie", "Rust en stilte"],
      bereikbaarheid: "45 min rijden vanuit Faro",
      tip: "Ga bij zonsondergang voor de mooiste foto's en een magische sfeer.",
      image: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Verborgen Dorpen van de Algarve
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ontdek de authentieke charme van Portugal in deze vijf prachtige dorpen. 
            Elk met zijn eigen karakter, verhaal en lokale tradities. Ver weg van de toeristische drukte, 
            maar vol van echte Portugese warmte.
          </p>
        </div>

        {/* Dorpen Grid */}
        <div className="space-y-16">
          {dorpen.map((dorp, index) => (
            <div key={dorp.naam} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
              <div className="lg:w-1/2">
                <img 
                  src={dorp.image} 
                  alt={dorp.naam}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-orange-600">{dorp.naam}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {dorp.beschrijving}
                </p>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Hoogtepunten:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {dorp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-orange-600" />
                    <span>{dorp.bereikbaarheid}</span>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-semibold text-orange-800 mb-1">💡 Lokale Tip:</h4>
                  <p className="text-orange-700">{dorp.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-orange-100 to-blue-100 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Klaar om deze verborgen parels te ontdekken?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Huur een auto en maak je eigen route langs deze authentieke dorpen. 
            Elk dorp verdient minstens een halve dag om echt te ervaren.
          </p>
          <div className="bg-white p-6 rounded-lg inline-block shadow-md">
            <h3 className="font-semibold text-gray-800 mb-2">📍 Routetip:</h3>
            <p className="text-gray-600">
              Start in Faro → Estoi (20 min) → Loulé (15 min) → Alte (30 min) → Monchique (45 min) → Cacela Velha (1,5 uur)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerborgenDorpen;
