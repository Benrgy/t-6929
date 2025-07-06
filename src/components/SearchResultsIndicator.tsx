
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SearchResultsIndicatorProps {
  searchQuery: string;
  activeFiltersCount: number;
  locationsCount: number;
  faqsCount: number;
  onClearSearch: () => void;
}

const SearchResultsIndicator: React.FC<SearchResultsIndicatorProps> = ({
  searchQuery,
  activeFiltersCount,
  locationsCount,
  faqsCount,
  onClearSearch
}) => {
  const { language } = useLanguage();

  if (!searchQuery && activeFiltersCount === 0) {
    return null;
  }

  return (
    <div id="search-results" className="bg-orange-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-700">
            {language === 'nl' 
              ? `Gevonden: ${locationsCount} locaties en ${faqsCount} antwoorden`
              : `Found: ${locationsCount} locations and ${faqsCount} answers`
            }
          </p>
          {(searchQuery || activeFiltersCount > 0) && (
            <button
              onClick={onClearSearch}
              className="mt-2 text-orange-600 hover:text-orange-700 underline"
            >
              {language === 'nl' ? 'Zoekfilters wissen' : 'Clear search filters'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsIndicator;
