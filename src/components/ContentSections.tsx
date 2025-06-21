
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import CategoryGrid from './CategoryGrid';
import LocationCard from './LocationCard';
import FAQSection from './FAQSection';
import { Button } from './ui/button';
import { ContentCategory, AlgarveLocation } from '../types/algarve';
import { FAQ } from '../types/algarve';

interface ContentSectionsProps {
  selectedCategory: ContentCategory | 'all';
  onCategorySelect: (category: ContentCategory | 'all') => void;
  searchQuery: string;
  filteredLocations: AlgarveLocation[];
  filteredFAQs: FAQ[];
  searchFilters: any;
  onClearSearch: () => void;
}

const ContentSections: React.FC<ContentSectionsProps> = ({
  selectedCategory,
  onCategorySelect,
  searchQuery,
  filteredLocations,
  filteredFAQs,
  searchFilters,
  onClearSearch
}) => {
  const { t, language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Category Filter */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {language === 'nl' ? 'Ontdek de Authentieke Algarve' : 'Discover Authentic Algarve'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'nl' ? 
              'Van verborgen dorpen tot geheime stranden - vind jouw perfecte lokale ervaring' :
              'From hidden villages to secret beaches - find your perfect local experience'
            }
          </p>
        </div>
        <CategoryGrid 
          selectedCategory={selectedCategory}
          onCategorySelect={onCategorySelect}
        />
      </div>

      {/* Search Results */}
      {searchQuery && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {t('searchResults')}: "{searchQuery}"
          </h2>
        </div>
      )}

      {/* Locations Grid */}
      {filteredLocations.length > 0 && (
        <div className="mb-20" id="destinations">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {selectedCategory === 'all' ? 
              (language === 'nl' ? 'Alle Bestemmingen' : 'All Destinations') : 
              t(selectedCategory.replace('-', ''))
            }
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLocations.map((location) => (
              <LocationCard 
                key={location.id} 
                location={location}
              />
            ))}
          </div>
        </div>
      )}

      {/* FAQ Section */}
      {filteredFAQs.length > 0 && (
        <div className="mb-20" id="faq">
          <FAQSection 
            faqs={filteredFAQs}
            title={t('faq')}
          />
        </div>
      )}

      {/* No Results */}
      {filteredLocations.length === 0 && filteredFAQs.length === 0 && searchQuery && (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {language === 'nl' ? 'Geen resultaten gevonden' : 'No results found'}
            </h3>
            <p className="text-gray-600 text-lg mb-6">{t('noResults')}</p>
            <Button onClick={onClearSearch}>
              {t('exploreMore')}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentSections;
