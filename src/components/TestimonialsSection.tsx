
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: 'Emma van der Berg',
      location: 'Amsterdam',
      rating: 5,
      text: language === 'nl' 
        ? 'Dankzij deze gids hebben we de echte Algarve ontdekt! Tavira was prachtig en zo authentiek. De lokale restaurants die ze aanbevelen waren fantastisch.'
        : 'Thanks to this guide we discovered the real Algarve! Tavira was beautiful and so authentic. The local restaurants they recommend were fantastic.',
      image: '/lovable-uploads/a69a606d-fe54-4813-9b77-84e0c718c189.png'
    },
    {
      id: 2,
      name: 'Marco Silva',
      location: 'Rotterdam',
      rating: 5,
      text: language === 'nl'
        ? 'Geweldige tips voor budget reizen! We hebben een week in de Algarve doorgebracht voor minder dan €300 per persoon inclusief accommodatie.'
        : 'Great tips for budget travel! We spent a week in the Algarve for less than €300 per person including accommodation.',
      image: '/lovable-uploads/67fa31e5-4160-46c9-92fb-86aad3955a56.png'
    },
    {
      id: 3,
      name: 'Lisa Janssen',
      location: 'Utrecht',
      rating: 5,
      text: language === 'nl'
        ? 'De verborgen stranden die ze beschrijven zijn echt paradijselijk. Praia da Marinha zonder de drukte - precies wat we zochten!'
        : 'The hidden beaches they describe are truly paradisiacal. Praia da Marinha without the crowds - exactly what we were looking for!',
      image: '/lovable-uploads/5fd20688-6816-43ff-87bc-fb5b01ab43eb.png'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {language === 'nl' ? 'Wat Reizigers Zeggen' : 'What Travelers Say'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'nl' 
              ? 'Ontdek waarom duizenden reizigers ons vertrouwen voor hun authentieke Algarve ervaring'
              : 'Discover why thousands of travelers trust us for their authentic Algarve experience'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-blue-100">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span>
              {language === 'nl' ? 'gebaseerd op 500+ reviews' : 'based on 500+ reviews'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
