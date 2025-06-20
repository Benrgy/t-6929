
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, MapPin, Camera } from 'lucide-react';
import { Button } from '../components/ui/button';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1566552047678-a3f65dd8b2b4?ixlib=rb-4.0.3)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative z-10 text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Lokaal Genieten in de <span className="text-orange-400">Algarve</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Ontdek de verborgen parels van Portugal buiten het massatoerisme. 
            Authentieke dorpen, geheime stranden en lokale ervaringen wachten op je.
          </p>
          <Link to="/verborgen-dorpen">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4">
              Start je Ontdekkingstocht
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Waarom Lokaal Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Waarom lokaal reizen in de Algarve?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Terwijl miljoenen toeristen zich verdringen op de bekende stranden van Lagos en Albufeira, 
              liggen de echte schatten van de Algarve verborgen in kleine dorpjes, afgelegen baaien en 
              lokale restaurants waar geen enkele gids je naartoe brengt.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <Heart className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Authentiek</h3>
                <p className="text-gray-600">Ervaar het echte Portugal zoals de locals het kennen</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Minder druk</h3>
                <p className="text-gray-600">Geniet van rust en ruimte, weg van de massa's</p>
              </div>
              <div className="text-center">
                <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Verborgen plekken</h3>
                <p className="text-gray-600">Ontdek plekken die niet in de standaard gidsen staan</p>
              </div>
              <div className="text-center">
                <Camera className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Betaalbaar</h3>
                <p className="text-gray-600">Bespaar geld door slim te reizen zoals de locals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Begin je lokale avontuur
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link to="/verborgen-dorpen" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{backgroundImage: 'url(https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3)'}}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                    Verborgen Dorpen
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Van het bergdorpje Monchique tot het authentieke Alte. Ontdek de charme van het echte Portugal.
                  </p>
                  <span className="text-orange-600 font-semibold">Ontdek meer →</span>
                </div>
              </div>
            </Link>

            <Link to="/stranden-natuur" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3)'}}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                    Geheime Stranden
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Kristalhelder water en geen crowds. Vind de mooiste plekken die alleen locals kennen.
                  </p>
                  <span className="text-orange-600 font-semibold">Verken nu →</span>
                </div>
              </div>
            </Link>

            <Link to="/eten-drinken" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{backgroundImage: 'url(https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3)'}}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                    Lokaal Eten
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Proef de echte smaken in familiebedrijfjes waar geen toerist komt. Authentiek en betaalbaar.
                  </p>
                  <span className="text-orange-600 font-semibold">Proef mee →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Klaar voor je authentieke Algarve avontuur?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Laat de massa's achter je en ontdek waarom de locals zo van hun regio houden. 
            Begin vandaag nog met het plannen van je unieke reis.
          </p>
          <div className="space-x-4">
            <Link to="/verborgen-dorpen">
              <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-gray-100">
                Verken Dorpen
              </Button>
            </Link>
            <Link to="/faq">
              <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-gray-100">
                Lees FAQ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
