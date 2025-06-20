
import React from 'react';
import { Wallet, Utensils, MapPin } from 'lucide-react';

const BudgetTips = () => {
  return (
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
  );
};

export default BudgetTips;
