
import React, { useState } from 'react';
import { Mail, MapPin, Send, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Contact & Verhalen Delen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Heb je vragen over lokaal reizen in de Algarve? Of heb je zelf een geweldige verborgen plek ontdekt? 
            We horen graag van je! Samen maken we deze gids nog beter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              📬 Stuur ons een bericht
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Jouw naam
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="Hoe kunnen we je noemen?"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email adres
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="jouw@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Onderwerp
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                >
                  <option value="">Kies een onderwerp</option>
                  <option value="vraag">Vraag over lokaal reizen</option>
                  <option value="tip">Ik heb een lokale tip te delen</option>
                  <option value="restaurant">Restaurant aanbeveling</option>
                  <option value="accommodatie">Vraag over accommodatie</option>
                  <option value="vervoer">Vervoer en routes</option>
                  <option value="ervaring">Mijn reiservaringen delen</option>
                  <option value="anders">Iets anders</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Jouw bericht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Vertel ons over je vraag, tip of ervaring..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Verstuur bericht
              </Button>
            </form>
          </div>

          {/* Info & Tips */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-orange-50 rounded-lg p-8 border-l-4 border-orange-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                💌 We horen graag van je!
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Deze website groeit dankzij de verhalen en tips van reizigers zoals jij. 
                Heb je een geweldige lokale plek ontdekt? Een authentiek restaurant gevonden? 
                Of gewoon een vraag over je reis? Laat het ons weten!
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-600" />
                  <span className="text-gray-700">info@lokaalgarve.nl</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-orange-600" />
                  <span className="text-gray-700">Algarve, Portugal</span>
                </div>
              </div>
            </div>

            {/* Delen Tips */}
            <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🌟 Deel je lokale ontdekkingen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vertel ons over:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Verborgen restaurants waar locals eten</li>
                <li>Geheime stranden of natuurplekken</li>
                <li>Authentieke accommodaties</li>
                <li>Lokale festivals en evenementen</li>
                <li>Bijzondere ontmoetingen met locals</li>
                <li>Budget tips en bespaartrucs</li>
              </ul>
            </div>

            {/* FAQ Verwijzing */}
            <div className="bg-green-50 rounded-lg p-8 border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                ❓ Veel voorkomende vragen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Check eerst onze uitgebreide FAQ - misschien staat je antwoord er al bij!
              </p>
              <a 
                href="/faq" 
                className="inline-flex items-center text-green-700 hover:text-green-800 font-semibold"
              >
                Bekijk FAQ →
              </a>
            </div>

            {/* Response Time */}
            <div className="bg-purple-50 rounded-lg p-8 border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                ⏰ Reactietijd
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We proberen binnen 24-48 uur te reageren op alle berichten. 
                Voor urgente vragen over accommodaties of vervoer, vermeld dit 
                in je bericht zodat we prioriteit kunnen geven.
              </p>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg p-12">
          <Heart className="h-12 w-12 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Samen ontdekken we de echte Algarve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Deze website is meer dan een reisgids - het is een community van reizigers 
            die de Algarve lokaal willen beleven. Jouw verhalen en tips helpen andere 
            reizigers om authentieke ervaringen te vinden.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🗺️ Ontdek</h3>
              <p className="text-gray-600">
                Gebruik onze tips om verborgen parels te vinden
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">📸 Ervaar</h3>
              <p className="text-gray-600">
                Leef zoals locals en creëer unieke herinneringen
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🤝 Deel</h3>
              <p className="text-gray-600">
                Help andere reizigers met jouw ontdekkingen
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
