
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection: React.FC = () => {
  const { language } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: language === 'nl' 
        ? 'De 5 Beste Verborgen Stranden van de Algarve in 2024'
        : 'The 5 Best Hidden Beaches of Algarve in 2024',
      excerpt: language === 'nl'
        ? 'Ontdek pristine stranden waar locals zwemmen, ver van de drukte van toeristen...'
        : 'Discover pristine beaches where locals swim, far from tourist crowds...',
      date: '15 Dec 2024',
      image: '/lovable-uploads/11f6c604-dd7e-4971-8d55-a247159bc234.png',
      category: language === 'nl' ? 'Stranden' : 'Beaches'
    },
    {
      id: 2,
      title: language === 'nl'
        ? 'Budget Eten in de Algarve: Waar Locals Daadwerkelijk Eten'
        : 'Budget Eating in Algarve: Where Locals Actually Eat',
      excerpt: language === 'nl'
        ? 'De beste tascas en lokale restaurants voor authentieke Portugese maaltijden onder €10...'
        : 'The best tascas and local restaurants for authentic Portuguese meals under €10...',
      date: '12 Dec 2024',
      image: '/lovable-uploads/07820408-8592-401d-91e6-a1c25deb1cef.png',
      category: language === 'nl' ? 'Eten & Drinken' : 'Food & Drink'
    },
    {
      id: 3,
      title: language === 'nl'
        ? 'Algarve in het Laagseizoen: Waarom Maart de Perfecte Maand Is'
        : 'Algarve in Low Season: Why March is the Perfect Month',
      excerpt: language === 'nl'
        ? 'Minder drukte, betere prijzen, en perfect weer voor wandelen en verkennen...'
        : 'Less crowds, better prices, and perfect weather for hiking and exploring...',
      date: '10 Dec 2024',
      image: '/lovable-uploads/1f6daf6e-7023-4399-9b7b-85dee316066e.png',
      category: language === 'nl' ? 'Tips' : 'Tips'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {language === 'nl' ? 'Laatste Tips & Verhalen' : 'Latest Tips & Stories'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'nl' 
              ? 'Blijf op de hoogte van de nieuwste ontdekkingen, seizoenstips en lokale geheimen'
              : 'Stay updated with the latest discoveries, seasonal tips and local secrets'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button variant="ghost" className="p-0 h-auto font-medium text-blue-600 hover:text-blue-700">
                  {language === 'nl' ? 'Lees meer' : 'Read more'}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            {language === 'nl' ? 'Bekijk alle artikelen' : 'View all articles'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
