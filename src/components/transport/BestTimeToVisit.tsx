
import React from 'react';

const BestTimeToVisit = () => {
  return (
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
  );
};

export default BestTimeToVisit;
