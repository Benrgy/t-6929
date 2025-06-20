
import React from 'react';
import { Utensils, Wine, Coffee, DollarSign } from 'lucide-react';

const EtenDrinken = () => {
  const restaurants = [
    {
      naam: "Tasca do Rui (Loulé)",
      type: "tasca",
      specialiteit: "Grilled fish and traditional stews",
      prijs: "€8-15 per persoon",
      tip: "Vraag naar de vis van de dag - altijd vers van de lokale markt",
      adres: "Rua da Republica 45, Loulé"
    },
    {
      naam: "O Manel (Alte)",
      type: "family-restaurant",
      specialiteit: "Cataplana and regional wines",
      prijs: "€12-20 per persoon",
      tip: "Hun cataplana de mariscos is legendary onder locals",
      adres: "Centro do Alte"
    },
    {
      naam: "Casa da Bifana (Tavira)",
      type: "snack-bar",
      specialiteit: "Best bifana in the Algarve",
      prijs: "€2-5 per persoon",
      tip: "Perfect voor een quick, authentic lunch",
      adres: "Rua José Pires Padinha 134, Tavira"
    }
  ];

  const gerechten = [
    {
      naam: "Cataplana de Mariscos",
      beschrijving: "Traditionele zeevruchten stoofpot bereid in koperen cataplana pan",
      waar: "Elke goede tasca langs de kust",
      prijs: "€15-25",
      tip: "Deel met 2 personen - de porties zijn groot!"
    },
    {
      naam: "Francesinha Algarvia",
      beschrijving: "Lokale versie van de beroemde Porto sandwich, met verse vis",
      waar: "Lokale cafés en tascas",
      prijs: "€6-8",
      tip: "Vraag om extra molho (saus) - dat maakt hem compleet"
    },
    {
      naam: "Caldeirada",
      beschrijving: "Hearty fish stew met aardappelen en verse kruiden",
      waar: "Vissersrestaurants in Olhão en Tavira",
      prijs: "€8-12",
      tip: "Best in restaurants dicht bij de haven - verser krijg je het niet"
    },
    {
      naam: "Bifana",
      beschrijving: "Eenvoudig maar heerlijk broodje met gekruid varkensvlees",
      waar: "Elke snackbar en café",
      prijs: "€1.50-3",
      tip: "De perfecte tussendoortje tijdens het rondreizen"
    }
  ];

  const markten = [
    {
      naam: "Mercado de Loulé",
      dagen: "Zaterdag (grote markt)",
      specialiteiten: "Lokale producten, verse vis, traditionele snoepjes",
      tip: "Kom vroeg voor de beste keuze en probeer de lokale honingen"
    },
    {
      naam: "Mercado da Ribeira (Tavira)",
      dagen: "Dagelijks open",
      specialiteiten: "Verse groenten, lokale kazen, traditioneel brood",
      tip: "Koop ingrediënten voor een perfecte picknick"
    },
    {
      naam: "Mercado Municipal (Olhão)",
      dagen: "Maandag tot zaterdag",
      specialiteiten: "Verse vis, lokale olijven, traditionele worst",
      tip: "De beste plek voor verse vis - kijk hoe de locals kiezen"
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Eten & Drinken als een Local
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vergeet de toeristische restaurants met hun hoge prijzen en saaie menu's. 
            Ontdek waar de Portugezen zelf eten: authentieke tascas, lokale markten 
            en familiebedrijfjes waar de traditie nog springlevend is.
          </p>
        </div>

        {/* Waarom Lokaal Eten Section */}
        <div className="bg-orange-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">🍽️ Waarom lokaal eten?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <DollarSign className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Veel goedkoper</h3>
              <p className="text-gray-700">Een volledige maaltijd voor €8-15 in plaats van €25-40</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Utensils className="h-8 w-8 text-orange-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Authentieke smaken</h3>
              <p className="text-gray-700">Recepten die al generaties lang in families worden doorgegeven</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Coffee className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Echte ervaring</h3>
              <p className="text-gray-700">Praten met locals en ontdekken hoe Portugezen echt leven</p>
            </div>
          </div>
        </div>

        {/* Aanbevolen Restaurants */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">🏠 Onze Favoriete Tascas</h2>
          <p className="text-lg text-gray-600 mb-8">
            Deze familierestaurants zijn waar locals naartoe gaan. Geen fancy decoratie, 
            maar wel de lekkerste en goedkoopste maaltijden van de Algarve.
          </p>
          
          <div className="grid gap-6">
            {restaurants.map((restaurant, index) => (
              <div key={restaurant.naam} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-orange-600">{restaurant.naam}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {restaurant.prijs}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="font-semibold text-gray-700">Specialiteit: </span>
                    <span className="text-gray-600">{restaurant.specialiteit}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Adres: </span>
                    <span className="text-gray-600">{restaurant.adres}</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-semibold text-blue-800 mb-1">💡 Local Tip:</h4>
                  <p className="text-blue-700">{restaurant.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traditionele Gerechten */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">🍲 Must-Try Gerechten</h2>
          <p className="text-lg text-gray-600 mb-8">
            Deze traditionele gerechten vind je niet in de toeristische restaurants. 
            Vraag ernaar in lokale tascas en ervaar de echte smaken van de Algarve.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {gerechten.map((gerecht, index) => (
              <div key={gerecht.naam} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{gerecht.naam}</h3>
                <p className="text-gray-700 mb-4">{gerecht.beschrijving}</p>
                
                <div className="space-y-2 mb-4">
                  <div>
                    <span className="font-semibold text-gray-600">Waar te vinden: </span>
                    <span className="text-gray-700">{gerecht.waar}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Prijs: </span>
                    <span className="text-green-600 font-semibold">{gerecht.prijs}</span>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800 text-sm"><strong>Tip:</strong> {gerecht.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lokale Markten */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">🛒 Lokale Markten</h2>
          <p className="text-lg text-gray-600 mb-8">
            Op de lokale markten vind je de verse ingrediënten en traditionele producten 
            die de basis vormen van de Algarve keuken. Perfect voor een picknick of om thuis te koken.
          </p>
          
          <div className="grid gap-6">
            {markten.map((markt, index) => (
              <div key={markt.naam} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-orange-600">{markt.naam}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {markt.dagen}
                  </span>
                </div>
                
                <div className="mb-4">
                  <span className="font-semibold text-gray-700">Specialiteiten: </span>
                  <span className="text-gray-600">{markt.specialiteiten}</span>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-semibold text-green-800 mb-1">🛍️ Markt Tip:</h4>
                  <p className="text-green-700">{markt.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drink Tips */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🍷 Lokale Dranken</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <Wine className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Vinho Verde</h3>
              <p className="text-gray-700 mb-3">Lichte, frisse wijn perfect bij zeevruchten</p>
              <p className="text-sm text-purple-600 font-semibold">€3-5 per glas in lokale bars</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <Coffee className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Bica</h3>
              <p className="text-gray-700 mb-3">Portugese espresso - klein maar krachtig</p>
              <p className="text-sm text-orange-600 font-semibold">€0.60-0.80 in elk café</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <Utensils className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Medronho</h3>
              <p className="text-gray-700 mb-3">Lokale brandewijn van aardbeiboom</p>
              <p className="text-sm text-green-600 font-semibold">Probeer in Monchique</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">💰 Geld besparen tip</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Eet je hoofdmaaltijd tussen 12:00-14:00 wanneer veel restaurants "menu do dia" 
              aanbieden: 3 gangen + drank voor €8-12. Avonds is hetzelfde eten vaak €20+.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtenDrinken;
