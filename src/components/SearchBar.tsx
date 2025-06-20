
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface SearchBarProps {
  onSearch: (query: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className = "" }) => {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder={t('searchPlaceholder')}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <Button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        <Search className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default SearchBar;
