
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ContentCategory } from '../types/algarve';
import { Card, CardContent } from './ui/card';
import { MapPin, Waves, Utensils, Bus, Bed, Camera } from 'lucide-react';

interface CategoryGridProps {
  onCategorySelect: (category: ContentCategory | 'all') => void;
  selectedCategory: ContentCategory | 'all';
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ onCategorySelect, selectedCategory }) => {
  const { t } = useLanguage();

  const categories = [
    { id: 'hidden-villages' as ContentCategory, icon: MapPin, color: 'bg-green-100 text-green-700' },
    { id: 'beaches-nature' as ContentCategory, icon: Waves, color: 'bg-blue-100 text-blue-700' },
    { id: 'food-drink' as ContentCategory, icon: Utensils, color: 'bg-orange-100 text-orange-700' },
    { id: 'transport' as ContentCategory, icon: Bus, color: 'bg-purple-100 text-purple-700' },
    { id: 'accommodation' as ContentCategory, icon: Bed, color: 'bg-pink-100 text-pink-700' },
    { id: 'activities' as ContentCategory, icon: Camera, color: 'bg-yellow-100 text-yellow-700' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {categories.map((category) => {
        const Icon = category.icon;
        const isSelected = selectedCategory === category.id;
        
        return (
          <Card 
            key={category.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              isSelected ? 'ring-2 ring-blue-500 shadow-lg' : ''
            }`}
            onClick={() => onCategorySelect(category.id)}
          >
            <CardContent className="p-4 text-center">
              <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-2`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-medium text-gray-800">
                {t(category.id.replace('-', ''))}
              </h3>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default CategoryGrid;
