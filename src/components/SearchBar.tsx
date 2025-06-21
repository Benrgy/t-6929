
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Input } from './ui/input';
import { Button } from './ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Badge } from './ui/badge';
import { ContentCategory } from '../types/algarve';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (category: ContentCategory | 'all') => void;
  selectedCategory: ContentCategory | 'all';
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  onFilterChange, 
  selectedCategory, 
  className = "" 
}) => {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const categories = [
    { id: 'all' as const, label: language === 'nl' ? 'Alles' : 'All' },
    { id: 'hidden-villages' as ContentCategory, label: t('hiddenVillages') },
    { id: 'beaches-nature' as ContentCategory, label: t('beachesNature') },
    { id: 'food-drink' as ContentCategory, label: t('foodDrink') },
    { id: 'transport' as ContentCategory, label: t('transport') },
  ];

  return (
    <div className={`flex gap-2 ${className}`}>
      <form onSubmit={handleSubmit} className="flex-1 flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <Button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Search className="w-4 h-4" />
        </Button>
      </form>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="px-4 py-3 border-gray-300 hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            {language === 'nl' ? 'Filter' : 'Filter'}
            {selectedCategory !== 'all' && (
              <Badge variant="secondary" className="ml-2">1</Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-3" align="end">
          <div className="space-y-2">
            <h4 className="font-medium text-sm text-gray-700 mb-3">
              {language === 'nl' ? 'Categorieën' : 'Categories'}
            </h4>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onFilterChange(category.id)}
                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchBar;
