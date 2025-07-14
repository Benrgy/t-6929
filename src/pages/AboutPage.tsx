import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { useAnalytics } from '../hooks/useAnalytics';
import { Card, CardContent } from '../components/ui/card';
import { Heart, Users, Shield, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  const { updateSEO } = useSEO();
  const { trackEvent } = useAnalytics();

  React.useEffect(() => {
    updateSEO({
      title: language === 'nl' 
        ? 'Over Ons | Lokaal Genieten in de Algarve'
        : 'About Us | Enjoy Local Algarve for Less',
      description: language === 'nl'
        ? 'Leer meer over ons team en onze missie om Nederlandse reizigers te helpen de Algarve authentiek en betaalbaar te ontdekken.'
        : 'Learn more about our team and mission to help Dutch travelers discover the Algarve authentically and affordably.',
      keywords: 'algarve team, over ons, missie, nederlandse reizigers, authentiek reizen',
      canonical: window.location.href
    });
    
    trackEvent('page_view', 'about', 'load');
  }, [language, updateSEO, trackEvent]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            {language === 'nl' ? 'Over Lokaal Genieten Algarve' : 'About Enjoy Local Algarve'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {language === 'nl' 
              ? 'Van Nederlandse reizigers, voor Nederlandse reizigers'
              : 'From Dutch travelers, for Dutch travelers'
            }
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                {language === 'nl' ? 'Onze Missie' : 'Our Mission'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'nl'
                  ? 'Wij geloven dat iedereen de prachtige Algarve moet kunnen ontdekken, zonder de hoofdprijs te betalen. Als Nederlandse reizigers die verliefd zijn geworden op deze regio, delen wij onze insider tips en eerlijke adviezen.'
                  : 'We believe everyone should be able to discover the beautiful Algarve without paying premium prices. As Dutch travelers who fell in love with this region, we share our insider tips and honest advice.'
                }
              </p>
              <p className="text-gray-600">
                {language === 'nl'
                  ? 'Geen marketing praatjes, geen overdreven beloftes. Gewoon eerlijke tips van locals voor reizigers.'
                  : 'No marketing talk, no exaggerated promises. Just honest tips from locals for travelers.'
                }
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h3 className="font-bold mb-2">{language === 'nl' ? 'Passie' : 'Passion'}</h3>
                <p className="text-sm text-gray-600">
                  {language === 'nl' ? 'Voor de Algarve' : 'For the Algarve'}
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold mb-2">{language === 'nl' ? 'Community' : 'Community'}</h3>
                <p className="text-sm text-gray-600">
                  {language === 'nl' ? 'Van reizigers' : 'Of travelers'}
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Shield className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-bold mb-2">{language === 'nl' ? 'Eerlijkheid' : 'Honesty'}</h3>
                <p className="text-sm text-gray-600">
                  {language === 'nl' ? 'In alles' : 'In everything'}
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Mail className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-bold mb-2">{language === 'nl' ? 'Support' : 'Support'}</h3>
                <p className="text-sm text-gray-600">
                  {language === 'nl' ? 'Persoonlijk' : 'Personal'}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            {language === 'nl' ? 'Transparantie & Eerlijkheid' : 'Transparency & Honesty'}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">
                {language === 'nl' ? 'Hoe wij geld verdienen' : 'How we make money'}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === 'nl'
                  ? 'Deze website bevat affiliate links naar partners zoals Booking.com, Sunny Cars en GetYourGuide. Als je via onze links boekt, ontvangen wij een kleine commissie zonder extra kosten voor jou.'
                  : 'This website contains affiliate links to partners like Booking.com, Sunny Cars and GetYourGuide. If you book through our links, we receive a small commission at no extra cost to you.'
                }
              </p>
              <p className="text-gray-600 mb-4">
                {language === 'nl'
                  ? 'Wij selecteren alleen partners die wij zelf vertrouwen en gebruiken. Onze tips en adviezen zijn altijd eerlijk en gebaseerd op onze eigen ervaringen.'
                  : 'We only select partners we trust and use ourselves. Our tips and advice are always honest and based on our own experiences.'
                }
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>{language === 'nl' ? 'Belofte:' : 'Promise:'}</strong>{' '}
                  {language === 'nl'
                    ? 'We recommenderen nooit iets alleen voor commissie. Als we iets niet zelf zouden gebruiken, raden we het ook jou niet aan.'
                    : 'We never recommend something just for commission. If we wouldn\'t use it ourselves, we won\'t recommend it to you either.'
                  }
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            {language === 'nl' ? 'Vragen of Suggesties?' : 'Questions or Suggestions?'}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {language === 'nl'
              ? 'We horen graag van je! Of je nu een vraag hebt over de Algarve, een tip wilt delen, of feedback hebt over onze site.'
              : 'We\'d love to hear from you! Whether you have a question about the Algarve, want to share a tip, or have feedback about our site.'
            }
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {language === 'nl' ? 'Neem Contact Op' : 'Get in Touch'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;