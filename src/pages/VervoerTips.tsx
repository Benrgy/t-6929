
import React from 'react';
import { Car, Bus, Bike, Wallet, Clock, MapPin } from 'lucide-react';

const VervoerTips = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Vervoer & Praktische Tips
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reis slim en goedkoop door de Algarve. Ontdek hoe je als local reist, 
            geld bespaart en de mooiste plekken bereikt zonder toeristische valkuilen.
          </p>
        </div>

        {/* Vervoersopties */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">🚗 Vervoersopties</h2>
          
          <div className="grid gap-8">
            {/* Auto huren */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Car className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-800">Autohuur (Aanbevolen)</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">💰 Goedkope opties:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Auto Europe:</strong> Vaak 40-50% goedkoper dan lokale verhuurders</li>
                    <li><strong>Rentalcars.com:</strong> Vergelijkt alle aanbieders</li>
                    <li><strong>Lokale verhuurders:</strong> Vaak flexibeler en persoonlijker</li>
                    <li><strong>Prijs:</strong> €15-25 per dag voor kleine auto</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">✅ Voordelen:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Totale vrijheid om verborgen plekken te ontdekken</li>
                    <li>Goedkoper dan tours en taxi's</li>
                    <li>Eigen tempo en route</li>
                    <li>Boodschappen doen op lokale markten</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-semibold text-blue-800 mb-2">🔧 Insider Tips:</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Huur op Faro luchthaven - goedkoper dan in toeristische gebieden</li>
                  <li>• Tank bij Intermarché/Continente - goedkoopste brandstof</li>
                  <li>• Vermijd tolwegen (A22) - neem N125 voor lokale ervaring</li>
                  <li>• Download offline maps van Google - bespaart data</li>
                </ul>
              </div>
            </div>

            {/* Openbaar Vervoer */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Bus className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-800">Openbaar Vervoer</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">🚌 Bus netwerk:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Eva Bus:</strong> Hoofdlijn langs de kust (€2-5 per rit)</li>
                    <li><strong>Dagkaart:</strong> €10 voor onbeperkt reizen</li>
                    <li><strong>Proximo app:</strong> Real-time tijden en routes</li>
                    <li><strong>Dekking:</strong> Goed tussen hoofdsteden, beperkt naar dorpen</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">🚂 Trein:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>CP lijn:</strong> Lagos - Faro (€3-7 per rit)</li>
                    <li><strong>Frequentie:</strong> Elk uur overdag</li>
                    <li><strong>Voordeel:</strong> Ontspannen, geen verkeer</li>
                    <li><strong>Nadeel:</strong> Beperkte stops, geen bergdorpen</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fietsen */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Bike className="h-8 w-8 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-800">Fietsen</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">🚴‍♂️ Beste gebieden:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Ria Formosa:</strong> Vlak, prachtige natuur</li>
                    <li><strong>Tavira - Cacela Velha:</strong> Kustroute</li>
                    <li><strong>Lagos centrum:</strong> Compact en fietsvriendelijk</li>
                    <li><strong>Verhuur:</strong> €8-15 per dag</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">⚠️ Let op:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Heuvelachtig in berggebieden (Monchique)</li>
                    <li>Zomer: fiets vroeg of laat (hitte)</li>
                    <li>Weinig fietspadpen - let goed op verkeer</li>
                    <li>Altijd water en zonnebrandcrème mee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Budget Tips */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">💰 Budget Tips</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <Wallet className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Accommodatie</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Locals apartments:</strong> €25-40/nacht</li>
                <li>• <strong>Quinta stays:</strong> €20-35/nacht</li>
                <li>• <strong>Camping:</strong> €8-15/nacht</li>
                <li>• <strong>Hostels:</strong> €15-25/nacht</li>
                <li>• <strong>Tip:</strong> Boek direct bij eigenaar</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <Utensils className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Eten</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Menu do dia:</strong> €8-12</li>
                <li>• <strong>Lokale markten:</strong> Vers en goedkoop</li>
                <li>• <strong>Supermarkten:</strong> Pingo Doce, Continente</li>
                <li>• <strong>Tascas:</strong> €6-15 volledige maaltijd</li>
                <li>• <strong>Tip:</strong> Lunch is goedkoper dan diner</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
              <MapPin className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Activiteiten</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Stranden:</strong> Gratis!</li>
                <li>• <strong>Wandelen:</strong> Gratis!</li>
                <li>• <strong>Dorpen bezoeken:</strong> Gratis!</li>
                <li>• <strong>Musea:</strong> €2-5 (zondag gratis)</li>
                <li>• <strong>Tip:</strong> Natuur is de beste attractie</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Beste Reistijd */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">📅 Beste Reistijd</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold text-blue-800">Lente (Mrt-Mei)</h3>
                </div>
                <p className="text-sm text-gray-700 mb-2"><strong>Temp:</strong> 18-25°C</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Voordelen:</strong> Bloeiende natuur, milde temperaturen</p>
                <p className="text-sm text-gray-700"><strong>Nadelen:</strong> Soms regen</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 p-4 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold text-red-800">Zomer (Jun-Aug)</h3>
                </div>
                <p className="text-sm text-gray-700 mb-2"><strong>Temp:</strong> 25-35°C</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Voordelen:</strong> Warm zwemwater, lange dagen</p>
                <p className="text-sm text-gray-700"><strong>Nadelen:</strong> Druk, duur, heet</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold text-orange-800">Herfst (Sep-Nov)</h3>
                </div>
                <p className="text-sm text-gray-700 mb-2"><strong>Temp:</strong> 20-28°C</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Voordelen:</strong> Perfecte temperaturen, rustiger</p>
                <p className="text-sm text-gray-700"><strong>Nadelen:</strong> Enkele regendagen</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Winter (Dec-Feb)</h3>
                </div>
                <p className="text-sm text-gray-700 mb-2"><strong>Temp:</strong> 15-20°C</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Voordelen:</strong> Zeer rustig, goedkoop</p>
                <p className="text-sm text-gray-700"><strong>Nadelen:</strong> Koel zwemwater</p>
              </div>
            </div>
            
            <div className="mt-8 text-center bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">🌟 Onze Aanbeveling</h3>
              <p className="text-green-700">
                <strong>September-Oktober & April-Mei:</strong> Perfecte temperaturen, minder mensen, 
                betaalbare prijzen en ideaal weer voor wandelen en dorpen bezoeken.
              </p>
            </div>
          </div>
        </div>

        {/* Contact met Locals */}
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🤝 Contact met Locals</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🗣️ Nuttige Portugese zinnen</h3>
              <div className="space-y-3 text-gray-700">
                <div><strong>Olá!</strong> - Hallo!</div>
                <div><strong>Obrigado/a</strong> - Dankjewel</div>
                <div><strong>Onde fica...?</strong> - Waar is...?</div>
                <div><strong>Quanto custa?</strong> - Hoeveel kost het?</div>
                <div><strong>Fala inglês?</strong> - Spreek je Engels?</div>
                <div><strong>Com licença</strong> - Pardon/Excuseer me</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">💡 Tips voor contact</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Portugezen zijn zeer gastvrij en behulpzaam</li>
                <li>Probeer altijd eerst wat Portugees - wordt gewaardeerd</li>
                <li>Jongeren spreken vaak Engels, ouderen meestal niet</li>
                <li>Koffie drinken is een sociale activiteit - perfect voor gesprekjes</li>
                <li>Vraag om aanbevelingen in lokale cafés</li>
                <li>Google Translate offline downloaden helpt enorm</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-white p-6 rounded-lg inline-block shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">🔐 Veiligheid</h3>
              <p className="text-gray-600">
                Portugal is een van de veiligste landen van Europa. Normale voorzichtigheid 
                in toeristische gebieden is voldoende. Locals zijn erg behulpzaam bij problemen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VervoerTips;
