
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import EnhancedSearchBar from './EnhancedSearchBar';

interface SearchSectionProps {
  onSearch: (query: string, filters: any) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch }) => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {language === 'nl' ? '🔍 Vind jouw perfecte Algarve-ervaring' : '🔍 Find your perfect Algarve experience'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'nl' 
              ? 'Gebruik onze slimme zoekfunctie om precies te vinden wat bij jouw droomvakantie past. Van budget tot regio, wij helpen je zoeken.'
              : 'Use our smart search to find exactly what fits your dream vacation. From budget to region, we help you search.'
            }
          </p>
        </div>
        <EnhancedSearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default SearchSection;
