
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Search, Filter, X, MapPin, Euro, Users, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ContentCategory } from '../types/algarve';

interface SearchFilters {
  category: ContentCategory | 'all';
  budget: 'low' | 'medium' | 'high' | 'all';
  duration: 'short' | 'half-day' | 'full-day' | 'multi-day' | 'all';
  region: 'east-algarve' | 'central-algarve' | 'west-algarve' | 'interior' | 'all';
  familyFriendly: boolean;
  groupSize: 'solo' | 'couple' | 'family' | 'group' | 'all';
}

interface EnhancedSearchBarProps {
  onSearch: (query: string, filters: SearchFilters) => void;
  className?: string;
}

const EnhancedSearchBar: React.FC<EnhancedSearchBarProps> = ({ onSearch, className = "" }) => {
  const { language } = useLanguage();
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    category: 'all',
    budget: 'all',
    duration: 'all',
    region: 'all',
    familyFriendly: false,
    groupSize: 'all'
  });

  const popularSearches = [
    { text: language === 'nl' ? 'thermale bronnen' : 'thermal springs', emoji: '♨️' },
    { text: language === 'nl' ? 'goedkoop eten' : 'cheap food', emoji: '🍽️' },
    { text: language === 'nl' ? 'verborgen stranden' : 'hidden beaches', emoji: '🏖️' },
    { text: language === 'nl' ? 'auto huren' : 'rent car', emoji: '🚗' },
    { text: language === 'nl' ? 'authentieke dorpen' : 'authentic villages', emoji: '🏘️' },
    { text: 'Monsaraz', emoji: '🏰' },
  ];

  const handleSearch = () => {
    onSearch(query, filters);
  };

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.category !== 'all') count++;
    if (filters.budget !== 'all') count++;
    if (filters.duration !== 'all') count++;
    if (filters.region !== 'all') count++;
    if (filters.familyFriendly) count++;
    if (filters.groupSize !== 'all') count++;
    return count;
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      budget: 'all',
      duration: 'all',
      region: 'all',
      familyFriendly: false,
      groupSize: 'all'
    });
  };

  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      {/* Main Search Bar */}
      <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={language === 'nl' ? 'Waar droom je van? Zoek je vakantie-ervaring...' : 'What are you dreaming of? Search your vacation experience...'}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-0 focus:ring-2 focus:ring-orange-500 rounded-xl"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="px-6 py-4 border-gray-200 hover:bg-orange-50 rounded-xl"
            >
              <Filter className="w-5 h-5 mr-2" />
              {language === 'nl' ? 'Filters' : 'Filters'}
              {getActiveFiltersCount() > 0 && (
                <Badge variant="secondary" className="ml-2 bg-orange-500 text-white">
                  {getActiveFiltersCount()}
                </Badge>
              )}
            </Button>
            <Button
              onClick={handleSearch}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-xl"
            >
              <Search className="w-5 h-5 mr-2" />
              {language === 'nl' ? 'Zoeken' : 'Search'}
            </Button>
          </div>

          {/* Popular Searches */}
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-3">
              {language === 'nl' ? '🔥 Populaire dromen:' : '🔥 Popular dreams:'}
            </p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(search.text)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-orange-100 rounded-full text-sm transition-colors"
                >
                  <span>{search.emoji}</span>
                  <span>{search.text}</span>
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Filters */}
      {showFilters && (
        <Card className="mt-4 shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">
                {language === 'nl' ? '🎯 Verfijn je zoektocht' : '🎯 Refine your search'}
              </h3>
              <div className="flex gap-2">
                {getActiveFiltersCount() > 0 && (
                  <Button onClick={clearFilters} variant="outline" size="sm">
                    <X className="w-4 h-4 mr-1" />
                    {language === 'nl' ? 'Wissen' : 'Clear'}
                  </Button>
                )}
                <Button onClick={() => setShowFilters(false)} variant="outline" size="sm">
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Budget Filter */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Euro className="w-4 h-4 text-green-600" />
                  <label className="font-medium text-gray-700">
                    {language === 'nl' ? 'Budget per dag' : 'Budget per day'}
                  </label>
                </div>
                <div className="space-y-2">
                  {[
                    { id: 'all', label: language === 'nl' ? 'Alle budgetten' : 'All budgets' },
                    { id: 'low', label: language === 'nl' ? '€20-40 (Lokaal)' : '€20-40 (Local)' },
                    { id: 'medium', label: language === 'nl' ? '€40-80 (Comfortabel)' : '€40-80 (Comfortable)' },
                    { id: 'high', label: language === 'nl' ? '€80+ (Luxe)' : '€80+ (Luxury)' },
                  ].map((option) => (
                    <label key={option.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="budget"
                        checked={filters.budget === option.id}
                        onChange={() => handleFilterChange('budget', option.id)}
                        className="text-orange-500"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Duration Filter */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <label className="font-medium text-gray-700">
                    {language === 'nl' ? 'Tijdsduur' : 'Duration'}
                  </label>
                </div>
                <div className="space-y-2">
                  {[
                    { id: 'all', label: language === 'nl' ? 'Alle duur' : 'All durations' },
                    { id: 'short', label: language === 'nl' ? '1-2 uur' : '1-2 hours' },
                    { id: 'half-day', label: language === 'nl' ? 'Halve dag' : 'Half day' },
                    { id: 'full-day', label: language === 'nl' ? 'Hele dag' : 'Full day' },
                    { id: 'multi-day', label: language === 'nl' ? 'Meerdere dagen' : 'Multiple days' },
                  ].map((option) => (
                    <label key={option.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="duration"
                        checked={filters.duration === option.id}
                        onChange={() => handleFilterChange('duration', option.id)}
                        className="text-orange-500"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Region Filter */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-purple-600" />
                  <label className="font-medium text-gray-700">
                    {language === 'nl' ? 'Regio' : 'Region'}
                  </label>
                </div>
                <div className="space-y-2">
                  {[
                    { id: 'all', label: language === 'nl' ? 'Hele Algarve' : 'All Algarve' },
                    { id: 'east-algarve', label: language === 'nl' ? 'Oost (Tavira, Castro Marim)' : 'East (Tavira, Castro Marim)' },
                    { id: 'central-algarve', label: language === 'nl' ? 'Centrum (Faro, Loulé)' : 'Central (Faro, Loulé)' },
                    { id: 'west-algarve', label: language === 'nl' ? 'West (Lagos, Sagres)' : 'West (Lagos, Sagres)' },
                    { id: 'interior', label: language === 'nl' ? 'Binnenland (Monchique, Alte)' : 'Interior (Monchique, Alte)' },
                  ].map((option) => (
                    <label key={option.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="region"
                        checked={filters.region === option.id}
                        onChange={() => handleFilterChange('region', option.id)}
                        className="text-orange-500"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Group Size Filter */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-indigo-600" />
                  <label className="font-medium text-gray-700">
                    {language === 'nl' ? 'Reisgezelschap' : 'Travel group'}
                  </label>
                </div>
                <div className="space-y-2">
                  {[
                    { id: 'all', label: language === 'nl' ? 'Alle groepen' : 'All groups' },
                    { id: 'solo', label: language === 'nl' ? 'Solo reiziger' : 'Solo traveler' },
                    { id: 'couple', label: language === 'nl' ? 'Stel' : 'Couple' },
                    { id: 'family', label: language === 'nl' ? 'Gezin' : 'Family' },
                    { id: 'group', label: language === 'nl' ? 'Vriendengroep' : 'Friends group' },
                  ].map((option) => (
                    <label key={option.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="groupSize"
                        checked={filters.groupSize === option.id}
                        onChange={() => handleFilterChange('groupSize', option.id)}
                        className="text-orange-500"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Filters */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">👨‍👩‍👧‍👦</span>
                  <label className="font-medium text-gray-700">
                    {language === 'nl' ? 'Speciaal' : 'Special'}
                  </label>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.familyFriendly}
                      onChange={(e) => handleFilterChange('familyFriendly', e.target.checked)}
                      className="text-orange-500"
                    />
                    <span className="text-sm">
                      {language === 'nl' ? 'Gezinsvriendelijk' : 'Family friendly'}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t">
              <Button onClick={handleSearch} className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                <Search className="w-5 h-5 mr-2" />
                {language === 'nl' ? 'Zoek met filters' : 'Search with filters'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default EnhancedSearchBar;
