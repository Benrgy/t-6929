
import React from 'react';

const LocalContact = () => {
  return (
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
  );
};

export default LocalContact;
