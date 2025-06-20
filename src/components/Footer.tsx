
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Mission */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-orange-400 mb-4">
              <MapPin className="h-8 w-8" />
              <span>Lokaal Algarve</span>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ontdek de echte Algarve weg van de massa's. Authentieke dorpen, 
              geheime stranden en lokale ervaringen wachten op je.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Heart className="h-4 w-4 text-red-500" />
              <span>Gemaakt met liefde voor Portugal</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Ontdekken</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/verborgen-dorpen" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Verborgen Dorpen
                </Link>
              </li>
              <li>
                <Link to="/stranden-natuur" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Stranden & Natuur
                </Link>
              </li>
              <li>
                <Link to="/eten-drinken" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Eten & Drinken
                </Link>
              </li>
              <li>
                <Link to="/vervoer-tips" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Vervoer & Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Hulp & Info</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Veelgestelde Vragen
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:info@lokaalgarve.nl" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-1">
                  <Mail className="h-4 w-4" />
                  <span>info@lokaalgarve.nl</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Lokaal Algarve. Ontdek Portugal authentiek.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Voor reizigers die meer willen dan toerisme.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
