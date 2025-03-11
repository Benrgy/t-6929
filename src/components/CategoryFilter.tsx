
import React from 'react';
import { Badge } from './ui/badge';
import { Map, Mountain, FootprintsIcon, TreePine, Waves, Filter } from 'lucide-react';
import { TrailCategory } from '../types/trail';
import { useLanguage } from '../context/LanguageContext';

interface CategoryFilterProps {
  selectedCategory: TrailCategory | 'all';
  setSelectedCategory: (category: TrailCategory | 'all') => void;
  setFiltersOpen: (open: boolean) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
  setFiltersOpen
}) => {
  const { t } = useLanguage();

  const getCategoryIcon = (category: TrailCategory | 'all') => {
    switch(category) {
      case 'high-mountain':
        return <Mountain className="w-4 h-4 mr-1" />;
      case 'easy-mountain':
        return <TreePine className="w-4 h-4 mr-1" />;
      case 'walking-path':
        return <FootprintsIcon className="w-4 h-4 mr-1" />;
      case 'beaches-lakes':
        return <Waves className="w-4 h-4 mr-1" />;
      default:
        return <Map className="w-4 h-4 mr-1" />;
    }
  };

  return (
    <div className="mb-8 flex flex-col items-center gap-6">
      <div className="w-full max-w-4xl text-center">
        <p className="text-xl font-semibold text-gray-600 mb-2">{t('category')}</p>
        <div className="flex flex-wrap justify-center gap-2 items-center">
          <Badge 
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            className="cursor-pointer text-base"
            onClick={() => setSelectedCategory('all')}
          >
            <Map className="w-4 h-4 mr-1" />
            {t('filterAll')}
          </Badge>
          <Badge 
            variant={selectedCategory === 'high-mountain' ? 'default' : 'outline'}
            className="cursor-pointer text-base"
            onClick={() => setSelectedCategory('high-mountain')}
          >
            <Mountain className="w-4 h-4 mr-1" />
            {t('categoryHighMountain')}
          </Badge>
          <Badge 
            variant={selectedCategory === 'easy-mountain' ? 'default' : 'outline'}
            className="cursor-pointer text-base"
            onClick={() => setSelectedCategory('easy-mountain')}
          >
            <TreePine className="w-4 h-4 mr-1" />
            {t('categoryEasyMountain')}
          </Badge>
          <Badge 
            variant={selectedCategory === 'walking-path' ? 'default' : 'outline'}
            className="cursor-pointer text-base"
            onClick={() => setSelectedCategory('walking-path')}
          >
            <FootprintsIcon className="w-4 h-4 mr-1" />
            {t('categoryWalkingPath')}
          </Badge>
          <Badge 
            variant={selectedCategory === 'beaches-lakes' ? 'default' : 'outline'}
            className="cursor-pointer text-base"
            onClick={() => setSelectedCategory('beaches-lakes')}
          >
            <Waves className="w-4 h-4 mr-1" />
            {t('categoryBeachesLakes')}
          </Badge>
          
          <Badge 
            variant="outline" 
            className="cursor-pointer text-base border-black"
            onClick={() => setFiltersOpen(true)}
          >
            <Filter className="w-4 h-4 mr-1" />
            {t('filters')}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
