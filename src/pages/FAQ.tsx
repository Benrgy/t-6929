
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const FAQ = () => {
  const faqItems = [
    {
      question: "Wat zijn de mooiste niet-toeristische dorpen in de Algarve?",
      answer: "Onze top 5: Alte (sprookjesachtig bergdorp), Loulé (authentiek marktstadje), Monchique (bergdorp met panoramische uitzichten), Estoi (historisch dorp met Romeinse ruïnes) en Cacela Velha (pittoresk vissersdorp). Elk dorp heeft zijn eigen unieke charme en is perfect bereikbaar met de auto."
    },
    {
      question: "Hoe vind ik goedkope accommodaties weg van toeristische gebieden?",
      answer: "Zoek naar 'quintas' (landhuizen), lokale apartments via Airbnb, of kleine pensions in dorpen. Prijzen variëren van €20-40 per nacht. Boek direct bij eigenaren voor de beste deals. Vermijd kustplaatsen in juli/augustus - ga naar het binnenland voor rust en betaalbare prijzen."
    },
    {
      question: "Waar eet je als local in de Algarve?",
      answer: "Zoek naar 'tascas' - kleine familiebedrijfjes waar locals eten. Herkenbaar aan: geen fancy menu's, lokale klanten, menu do dia voor €8-12. Onze favorieten: Tasca do Rui (Loulé), O Manel (Alte), Casa da Bifana (Tavira). Eet tussen 12-14u voor de beste prijzen."
    },
    {
      question: "Hoe reis je goedkoop door de Algarve?",
      answer: "Autohuur is vaak goedkoper dan je denkt (€15-25/dag). Voor openbaar vervoer: Eva Bus dagkaart €10, trein Lagos-Faro €3-7. Fiets huren kost €8-15/dag. Tank bij supermarkten (Intermarché, Continente) voor goedkoopste brandstof. Vermijd tolwegen - neem N125."
    },
    {
      question: "Welke activiteiten zijn gratis of goedkoop?",
      answer: "Gratis: alle stranden, wandelen, dorpen bezoeken, markten bekijken. Goedkoop: musea €2-5 (zondag vaak gratis), lokale festivals, natuurparken. Duurste activiteiten zijn toeristische boottochten en themaparken - deze kun je gemakkelijk overslaan."
    },
    {
      question: "Wat is de beste reistijd voor de Algarve?",
      answer: "Voor lokale ervaringen: april-mei en september-oktober. Perfecte temperaturen (20-25°C), minder mensen, betaalbare prijzen. Vermijd juli-augustus (te druk, duur, heet). Winter (dec-feb) is rustig en goedkoop maar koel voor strand."
    },
    {
      question: "Welke geheime stranden moet je bezoeken?",
      answer: "Praia da Arrifana (surfers paradijs), Praia do Amado (wilde westkust), Praia da Bordeira (eindeloos zand), Praia de Monte Clérigo (rustige baai). Deze stranden hebben gratis parkeren en veel minder mensen dan bekende stranden zoals Benagil."
    },
    {
      question: "Hoe kom je in contact met locals?",
      answer: "Ga naar lokale cafés voor je koffie, bezoek markten vroeg in de ochtend, eet in tascas waar locals komen. Leer basis Portugees: 'Olá' (hallo), 'Obrigado/a' (dankje), 'Onde fica...?' (waar is?). Portugezen zijn erg gastvrij en helpen graag."
    },
    {
      question: "Welke traditionele gerechten moet je proberen?",
      answer: "Cataplana de mariscos (zeevruchten stoofpot), caldeirada (visstoof), francesinha algarvia (lokale sandwich), bifana (varkensvlees broodje). Drank: vinho verde, bica (Portugese espresso), medronho (lokale brandewijn in Monchique)."
    },
    {
      question: "Is de Algarve veilig voor backpackers?",
      answer: "Zeer veilig! Portugal is een van Europa's veiligste landen. Normale voorzichtigheid is voldoende. Locals zijn behulpzaam bij problemen. Grootste risico's: zonnebrand en te veel medronho drinken 😉"
    },
    {
      question: "Wat kost een week lokaal leven in de Algarve?",
      answer: "Budget breakdown: accommodatie €140-280, eten €70-140 (menu do dia, markten), vervoer €100-150 (autohuur), activiteiten €50 (vrijwel alles gratis). Totaal: €360-570 voor een week, afhankelijk van comfort level."
    },
    {
      question: "Welke lokale markten moet je bezoeken?",
      answer: "Mercado de Loulé (zaterdag - grote traditionele markt), Mercado da Ribeira Tavira (dagelijks - verse producten), Mercado Municipal Olhão (ma-za - beste vis). Kom vroeg voor beste keuze en probeer lokale honingen, kazen en olijven."
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Veelgestelde Vragen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Alle antwoorden die je nodig hebt voor je lokale Algarve avontuur. 
            Van praktische tips tot insider secrets - hier vind je alles wat je moet weten.
          </p>
        </div>

        {/* Introductie */}
        <div className="bg-orange-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💡 Hoe gebruik je deze FAQ?</h2>
          <p className="text-gray-700 leading-relaxed">
            Deze FAQ is gebaseerd op echte vragen van reizigers die de Algarve lokaal wilden ontdekken. 
            Klik op elke vraag om het volledige antwoord te lezen. Mis je een vraag? 
            <a href="/contact" className="text-orange-600 hover:text-orange-700 font-semibold"> Stuur ons een bericht!</a>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-md border-0"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-lg">
                  <span className="text-lg font-semibold text-gray-800 pr-4">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Extra Help Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Nog meer vragen?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Onze FAQ groeit mee met de vragen van reizigers. Heb je een vraag die hier niet staat? 
            We helpen je graag verder en voegen je vraag toe aan onze lijst.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">📧 Email ons</h3>
              <p className="text-gray-600">
                Gedetailleerde vragen over routes, accommodaties of lokale tips
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">💬 Deel je ervaring</h3>
              <p className="text-gray-600">
                Heb je een geweldige lokale plek ontdekt? Deel het met andere reizigers!
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🗺️ Route advies</h3>
              <p className="text-gray-600">
                Persoonlijke route-aanbevelingen gebaseerd op jouw interesses en budget
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="/contact" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Stel je vraag
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            🚀 Start je planning
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a href="/verborgen-dorpen" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <h3 className="text-lg font-semibold text-orange-600 mb-2">Verborgen Dorpen</h3>
              <p className="text-gray-600 text-sm">Ontdek 5 authentieke dorpen</p>
            </a>
            
            <a href="/stranden-natuur" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Geheime Stranden</h3>
              <p className="text-gray-600 text-sm">Vind rustige natuurparels</p>
            </a>
            
            <a href="/eten-drinken" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Lokaal Eten</h3>
              <p className="text-gray-600 text-sm">Eet waar locals komen</p>
            </a>
            
            <a href="/vervoer-tips" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Vervoer & Tips</h3>
              <p className="text-gray-600 text-sm">Reis slim en goedkoop</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
