
import React from 'react';
import { Car, Bus, Bike } from 'lucide-react';

const TransportOptions = () => {
  return (
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
  );
};

export default TransportOptions;
