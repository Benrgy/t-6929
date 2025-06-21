
import React, { useState } from 'react';
import { Search, Filter, MapPin, Euro, Clock, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { ContentCategory } from '../types/algarve';

interface AdvancedSearchBarProps {
  onSearch: (query: string, filters: SearchFilters) => void;
  className?: string;
}

interface SearchFilters {
  category: ContentCategory | 'all';
  budget: 'low' | 'medium' | 'high' | 'all';
  duration: 'short' | 'half-day' | 'full-day' | 'all';
  region: 'east-algarve' | 'central-algarve' | 'west-algarve' | 'interior' | 'all';
  familyFriendly: boolean;
}

const AdvancedSearchBar: React.FC<AdvancedSearchBarProps> = ({ onSearch, className = "" }) => {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    category: 'all',
    budget: 'all',
    duration: 'all',
    region: 'all',
    familyFriendly: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, filters);
  };

  const updateFilter = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onSearch(query, newFilters);
  };

  const clearFilters = () => {
    const defaultFilters: SearchFilters = {
      category: 'all',
      budget: 'all',
      duration: 'all',
      region: 'all',
      familyFriendly: false
    };
    setFilters(defaultFilters);
    onSearch(query, defaultFilters);
  };

  const activeFiltersCount = Object.values(filters).filter(v => v !== 'all' && v !== false).length;

  const categories = [
    { id: 'all' as const, label: language === 'nl' ? 'Alles' : 'All' },
    { id: 'hidden-villages' as ContentCategory, label: t('hiddenVillages') },
    { id: 'beaches-nature' as ContentCategory, label: t('beachesNature') },
    { id: 'food-drink' as ContentCategory, label: t('foodDrink') },
    { id: 'transport' as ContentCategory, label: t('transport') },
  ];

  const budgetOptions = [
    { id: 'all', label: language === 'nl' ? 'Alle budgets' : 'All budgets' },
    { id: 'low', label: language === 'nl' ? 'Budget (€0-20)' : 'Budget (€0-20)' },
    { id: 'medium', label: language === 'nl' ? 'Middel (€20-50)' : 'Medium (€20-50)' },
    { id: 'high', label: language === 'nl' ? 'Luxe (€50+)' : 'Luxury (€50+)' },
  ];

  const durationOptions = [
    { id: 'all', label: language === 'nl' ? 'Alle tijden' : 'Any duration' },
    { id: 'short', label: language === 'nl' ? 'Kort (1-2u)' : 'Short (1-2h)' },
    { id: 'half-day', label: language === 'nl' ? 'halve dag' : 'Half day' },
    { id: 'full-day', label: language === 'nl' ? 'Hele dag' : 'Full day' },
  ];

  const regionOptions = [
    { id: 'all', label: language === 'nl' ? 'Alle regio\'s' : 'All regions' },
    { id: 'east-algarve', label: language === 'nl' ? 'Oost-Algarve' : 'East Algarve' },
    { id: 'central-algarve', label: language === 'nl' ? 'Centraal-Algarve' : 'Central Algarve' },
    { id: 'west-algarve', label: language === 'nl' ? 'West-Algarve' : 'West Algarve' },
    { id: 'interior', label: language === 'nl' ? 'Binnenland' : 'Interior' },
  ];

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder={language === 'nl' ? 'Zoek naar plekken, dorpen, activiteiten...' : 'Search for places, villages, activities...'}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
          <Button type="submit" size="lg" className="px-8">
            <Search className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                {language === 'nl' ? 'Categorie' : 'Category'}
                {filters.category !== 'all' && <Badge variant="secondary" className="ml-2">1</Badge>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56">
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => updateFilter('category', category.id)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      filters.category === category.id
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

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                <Euro className="w-4 h-4 mr-2" />
                {language === 'nl' ? 'Budget' : 'Budget'}
                {filters.budget !== 'all' && <Badge variant="secondary" className="ml-2">1</Badge>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48">
              <div className="space-y-2">
                {budgetOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => updateFilter('budget', option.id)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      filters.budget === option.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                <Clock className="w-4 h-4 mr-2" />
                {language === 'nl' ? 'Tijd' : 'Duration'}
                {filters.duration !== 'all' && <Badge variant="secondary" className="ml-2">1</Badge>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48">
              <div className="space-y-2">
                {durationOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => updateFilter('duration', option.id)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      filters.duration === option.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                <MapPin className="w-4 h-4 mr-2" />
                {language === 'nl' ? 'Regio' : 'Region'}
                {filters.region !== 'all' && <Badge variant="secondary" className="ml-2">1</Badge>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48">
              <div className="space-y-2">
                {regionOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => updateFilter('region', option.id)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      filters.region === option.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          <Button
            variant="outline"
            size="sm"
            onClick={() => updateFilter('familyFriendly', !filters.familyFriendly)}
            className={filters.familyFriendly ? 'bg-blue-100 text-blue-700' : ''}
          >
            <Users className="w-4 h-4 mr-2" />
            {language === 'nl' ? 'Gezinsvriendelijk' : 'Family friendly'}
          </Button>

          {activeFiltersCount > 0 && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              {language === 'nl' ? 'Reset filters' : 'Clear filters'} ({activeFiltersCount})
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AdvancedSearchBar;
