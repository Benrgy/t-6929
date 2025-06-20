
import React from 'react';
import { Waves, TreePine, Camera, Clock } from 'lucide-react';

const StrandenNatuur = () => {
  const stranden = [
    {
      naam: "Praia da Arrifana",
      type: "strand",
      beschrijving: "Een spectaculair strand omringd door hoge kliffen, populair bij surfers maar nog niet overrompeld door massa's. Het perfecte alternatief voor Sagres.",
      locatie: "Bij Aljezur, Westkust",
      parkeren: "Gratis parkeerplaats bovenop de klif",
      drukte: "Matig tot rustig",
      bijzonderheden: "Uitstekend voor surfen, prachtige zonsondergangen",
      tip: "Ga in de late middag voor de mooiste kleuren tijdens zonsondergang",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3"
    },
    {
      naam: "Praia do Amado",
      type: "strand",
      beschrijving: "Een lange, brede zandstrand aan de wilde westkust. Hier voel je de ruige kracht van de Atlantische Oceaan en geniet je van eindeloze ruimte.",
      locatie: "Bij Carrapateira",
      parkeren: "Gratis parkeren bij het strand",
      drukte: "Rustig, vooral doordeweeks",
      bijzonderheden: "Ideaal voor lange strandwandelingen en natuurfotografie",
      tip: "Neem een windjack mee - de westkust kan flink waaien!",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3"
    },
    {
      naam: "Ria Formosa Natuurpark",
      type: "natuur",
      beschrijving: "Een uitgestrekt lagunelandschap met eilandjes, flamingo's en traditionele vissersboten. Een van Europa's belangrijkste wetlands.",
      locatie: "Van Tavira tot Quinta do Lago",
      parkeren: "Verschillende toegangspunten met parkeerplaatsen",
      drukte: "Rustig, behalve populaire toegangspunten",
      bijzonderheden: "Vogelspotten, eilandhoppen, oesterkwekerijen",
      tip: "Huur een kajak in Tavira voor de beste ervaring van het park",
      image: "https://images.unsplash.com/photo-1544550581-5b8be3d6e9b4?ixlib=rb-4.0.3"
    },
    {
      naam: "Percurso dos Sete Vales Suspensos",
      type: "wandeling",
      beschrijving: "Een adembenemende kliftop wandeling langs de gouden kliffen tussen Carvoeiro en Benagil. Spectaculaire uitzichten gegarandeerd.",
      locatie: "Tussen Carvoeiro en Praia da Marinha",
      parkeren: "Betaald parkeren in Carvoeiro of bij Praia da Marinha",
      drukte: "Populair maar vroeg in de ochtend rustiger",
      bijzonderheden: "6 km wandeling, meerdere uitkijkpunten, grotten",
      tip: "Start vroeg in de ochtend voor het beste licht en minder drukte",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3"
    },
    {
      naam: "Serra de Monchique",
      type: "natuur",
      beschrijving: "Het groene hart van de Algarve met eucalyptusbossen, bergdorpjes en natuurlijke bronnen. Een verfrissend alternatief voor de kust.",
      locatie: "Berggebied ten noorden van Portimão",
      parkeren: "Gratis parkeren bij wandelpaden en uitkijkpunten",
      drukte: "Rustig, vooral buiten het seizoen",
      bijzonderheden: "Wandelpaden, Fóia uitkijkpunt (902m), thermale bronnen",
      tip: "Bezoek Caldas de Monchique voor een ontspannende thermale ervaring",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'strand': return <Waves className="h-6 w-6 text-blue-600" />;
      case 'natuur': return <TreePine className="h-6 w-6 text-green-600" />;
      case 'wandeling': return <Camera className="h-6 w-6 text-orange-600" />;
      default: return <Waves className="h-6 w-6 text-blue-600" />;
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Lokale Stranden & Natuurgebieden
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ontdek de wilde schoonheid van de Algarve weg van de toeristische hotspots. 
            Van ruige westkuststranden tot serene natuurparken - hier vind je de plekken 
            waar je nog écht kunt genieten van de natuur.
          </p>
        </div>

        {/* Introductie */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🌊 Waarom lokale stranden?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Terwijl de bekende stranden zoals Praia da Rocha en Meia Praia vol liggen met parasols en loungebars, 
            bieden deze verborgen parels je de kans om de Algarve te ervaren zoals deze bedoeld is: 
            ruig, authentiek en overweldigend mooi.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800">💰 Gratis parkeren</h3>
              <p className="text-sm text-gray-600">Geen dure parkeerkosten zoals op populaire stranden</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800">🏖️ Meer ruimte</h3>
              <p className="text-sm text-gray-600">Geen rijen parasols, gewoon jij en de natuur</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800">📸 Unieke foto's</h3>
              <p className="text-sm text-gray-600">Plekken die je vrienden nog nooit hebben gezien</p>
            </div>
          </div>
        </div>

        {/* Stranden en Natuurgebieden */}
        <div className="grid gap-12">
          {stranden.map((plek, index) => (
            <div key={plek.naam} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={plek.image} 
                    alt={plek.naam}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    {getIcon(plek.type)}
                    <h2 className="text-3xl font-bold text-gray-800">{plek.naam}</h2>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {plek.beschrijving}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <span className="font-semibold text-gray-600 min-w-[100px]">📍 Locatie:</span>
                      <span className="text-gray-700">{plek.locatie}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-semibold text-gray-600 min-w-[100px]">🚗 Parkeren:</span>
                      <span className="text-gray-700">{plek.parkeren}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-semibold text-gray-600 min-w-[100px]">👥 Drukte:</span>
                      <span className="text-gray-700">{plek.drukte}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-semibold text-gray-600 min-w-[100px]">⭐ Speciaal:</span>
                      <span className="text-gray-700">{plek.bijzonderheden}</span>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <h4 className="font-semibold text-orange-800 mb-1">💡 Insider Tip:</h4>
                    <p className="text-orange-700">{plek.tip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Praktische Tips */}
        <div className="mt-20 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Praktische Tips voor Natuurliefhebbers
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🎒 Wat mee te nemen</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Veel water en snacks (weinig faciliteiten)</li>
                <li>Zonnebrandcrème en hoed</li>
                <li>Stevige wandelschoenen</li>
                <li>Camera voor de prachtige uitzichten</li>
                <li>Windjack (westkust kan winderig zijn)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">⏰ Beste tijden</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Vroeg in de ochtend (7-10u) voor rust en mooi licht</li>
                <li>Late middag (17-19u) voor zonsondergangen</li>
                <li>Doordeweeks altijd rustiger dan weekenden</li>
                <li>Herfst en winter: mooie temperaturen, minder mensen</li>
                <li>Vermijd juli-augustus voor maximale rust</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrandenNatuur;
