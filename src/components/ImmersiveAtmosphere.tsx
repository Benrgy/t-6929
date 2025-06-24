
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ImmersiveAtmosphere: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="py-16 bg-gradient-to-b from-amber-50 to-orange-100 relative overflow-hidden">
      {/* Floating atmospheric elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-1/3 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/2 w-5 h-5 bg-red-400 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            {language === 'nl' 
              ? 'Sluit je ogen... Je bent er bijna' 
              : 'Close your eyes... You\'re almost there'
            }
          </h2>
          
          {/* Sensory Experience Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="text-5xl mb-4">👂</div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                {language === 'nl' ? 'Hoor je het?' : 'Can you hear it?'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {language === 'nl' 
                  ? 'Het kabbelen van de golven tegen de vissersbootjes in Tavira. Het gelach van kinderen die om 18:00 nog buiten spelen omdat het nog licht is.'
                  : 'The lapping of waves against fishing boats in Tavira. Children\'s laughter as they play outside at 6 PM because it\'s still light.'
                }
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="text-5xl mb-4">👃</div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                {language === 'nl' ? 'Ruik je het?' : 'Can you smell it?'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {language === 'nl' 
                  ? 'Geroosterde amandelen op de markt van Loulé. De geur van eucalyptus in de bergen van Monchique. Verse vis die net van de boot komt.'
                  : 'Roasted almonds at Loulé market. The scent of eucalyptus in the Monchique mountains. Fresh fish straight from the boat.'
                }
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="text-5xl mb-4">👋</div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                {language === 'nl' ? 'Voel je het?' : 'Can you feel it?'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {language === 'nl' 
                  ? 'De warmte van 32°C thermaalwater dat al duizenden jaren uit de aarde borrelt. Zand tussen je tenen op een strand waar je de enige bent.'
                  : 'The warmth of 32°C thermal water that has been bubbling from the earth for thousands of years. Sand between your toes on a beach where you\'re the only one.'
                }
              </p>
            </div>
          </div>

          {/* Temperature Comparison */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-orange-200">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🥶</div>
                <div className="text-2xl font-bold text-blue-600">3°C</div>
                <div className="text-sm text-gray-500">Amsterdam vandaag</div>
              </div>
              <div className="text-4xl">✈️</div>
              <div className="text-center">
                <div className="text-4xl mb-2">☀️</div>
                <div className="text-2xl font-bold text-orange-600">18°C</div>
                <div className="text-sm text-gray-500">Algarve nu</div>
              </div>
            </div>
            <p className="text-gray-600 text-lg">
              {language === 'nl' 
                ? 'In 2,5 uur ga je van winter naar voorjaar. Van donker naar licht. Van stress naar rust.'
                : 'In 2.5 hours you go from winter to spring. From dark to light. From stress to peace.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmersiveAtmosphere;
