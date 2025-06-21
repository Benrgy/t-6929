
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Users, Calendar, Star } from 'lucide-react';

const StatsSection: React.FC = () => {
  const { language } = useLanguage();

  const stats = [
    {
      icon: MapPin,
      number: '50+',
      label: language === 'nl' ? 'Verborgen Plekken' : 'Hidden Places',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      number: '10K+',
      label: language === 'nl' ? 'Tevreden Reizigers' : 'Happy Travelers',
      color: 'text-green-600'
    },
    {
      icon: Calendar,
      number: '5+',
      label: language === 'nl' ? 'Jaar Ervaring' : 'Years Experience',
      color: 'text-purple-600'
    },
    {
      icon: Star,
      number: '4.9',
      label: language === 'nl' ? 'Gemiddelde Score' : 'Average Rating',
      color: 'text-yellow-600'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {language === 'nl' ? 'Waarom Ons Vertrouwen?' : 'Why Trust Us?'}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 ${stat.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
