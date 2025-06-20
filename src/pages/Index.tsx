
import React from 'react';
import { trails } from '../data/trails';
import { beaches } from '../data/beaches';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import FiltersDialog from '../components/FiltersDialog';
import CategoryFilter from '../components/CategoryFilter';
import DayHikesSection from '../components/DayHikesSection';
import MultiDayHikesSection from '../components/MultiDayHikesSection';
import CategorySection from '../components/CategorySection';
import BeachesSection from '../components/BeachesSection';
import { useTrailFilters } from '../hooks/useTrailFilters';
import { useTrailLists } from '../hooks/useTrailLists';
import { Helmet } from 'react-helmet';
import { Separator } from '../components/ui/separator';

// Trails to exclude from non-walking-path category views
const excludedTrailNames = ['Playa Muñoz']; // Removed 'Cascada de los Duendes' from excluded names
// Specific IDs to exclude (more reliable than name matching)
const excludedTrailIds = ['12']; // 12=Playa Muñoz - Only exclude from non-walking-path categories

const Index = () => {
  const { t } = useLanguage();
  
  const {
    filters,
    filteredBeaches,
    allHikes,
    dayHikes,
    multiDayHikes,
  } = useTrailFilters(trails, beaches);

  const {
    directAccessHikes,
    otherDayHikes,
    pampLindaHikes,
    otherMultiDayHikes,
    categoryBarilochieHikes,
    categoryPampLindaHikes
  } = useTrailLists(allHikes, dayHikes, multiDayHikes);

  // Get Villa Tacul beach for the walking-path category
  const villaTaculBeach = beaches.find(beach => beach.name === "Villa Tacul");
  const walkingPathBeaches = villaTaculBeach ? [villaTaculBeach] : [];

  const shouldShowBeaches = filters.selectedCategory === 'all' || filters.selectedCategory === 'beaches-lakes';
  const shouldShowDayHikes = filters.selectedCategory === 'all' && (filters.selectedType === 'all' || filters.selectedType === 'day-hike');
  const shouldShowMultiDayHikes = filters.selectedCategory === 'all' && (filters.selectedType === 'all' || filters.selectedType === 'multi-day');
  const shouldShowCategorySection = filters.selectedCategory !== 'all' && filters.selectedCategory !== 'beaches-lakes';

  // Special case for walking-path category - include Cascada de los Duendes (ID 7)
  const categoryHikes = filters.selectedCategory === 'walking-path' 
    ? allHikes.filter(trail => trail.category === filters.selectedCategory) 
    : allHikes.filter(trail => 
        trail.category === filters.selectedCategory &&
        !excludedTrailIds.includes(trail.id)
      );

  // Filter category region hikes by the selected category
  const categoryRegionHikes = {
    bariloche: categoryBarilochieHikes.filter(trail => 
      trail.category === filters.selectedCategory &&
      (filters.selectedCategory === 'walking-path' || !excludedTrailIds.includes(trail.id))
    ),
    pampLinda: categoryPampLindaHikes.filter(trail => 
      trail.category === filters.selectedCategory
    )
  };

  // Debug logs to trace categorization
  console.log(`Cerro Otto in easy-mountain: ${trails.find(t => t.name === "Cerro Otto & Piedra de Habsburgo")?.category === 'easy-mountain'}`);
  console.log(`Cerro Campanario in easy-mountain: ${trails.find(t => t.name === "Cerro Campanario")?.category === 'easy-mountain'}`);
  console.log(`Mirador Lago Gutiérrez in easy-mountain: ${trails.find(t => t.name === "Mirador Lago Gutiérrez")?.category === 'easy-mountain'}`);
  console.log(`Cerro San Martin in easy-mountain: ${trails.find(t => t.name === "Cerro San Martin")?.category === 'easy-mountain'}`);
  console.log(`Cerro Llao Llao in easy-mountain: ${trails.find(t => t.name === "Cerro Llao Llao")?.category === 'easy-mountain'}`);
  console.log(`Category hikes count for ${filters.selectedCategory}: ${categoryHikes.length}`);
  
  // Add debug for walking-path specific trails
  const cascadaTrail = trails.find(t => t.name === "Cascada de los Duendes");
  const llaoLlaoTrail = trails.find(t => t.name === "Cerro Llao Llao");
  console.log(`Cascada de los Duendes in walking-path: ${cascadaTrail?.category === 'walking-path'}`);
  console.log(`Cascada ID: ${cascadaTrail?.id}`);
  console.log(`Cerro Llao Llao in walking-path: ${llaoLlaoTrail?.category === 'walking-path'}`);

  return (
    <div className="min-h-screen">
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" />
      </Helmet>
      
      {/* Mountain Backdrop Header */}
      <div className="mountain-backdrop">
        <div className="relative z-10">
          <LanguageSwitcher />
          <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12 animate-fadeIn pt-12 sm:pt-8">
              <div className="flex justify-center mb-6">
                <img 
                  src="/lovable-uploads/18170e0a-a211-46c5-97e6-3a78c27402e0.png"
                  alt="Camping Los Coihues"
                  className="h-24 w-auto"
                />
              </div>
              <h1 className="text-4xl font-bold text-forest mb-2">
                {t('title')}
              </h1>
              <p className="text-xl text-stone mb-4">
                {t('tagline')}
              </p>
            </header>
          </div>
        </div>
      </div>
      
      {/* Separator lines */}
      <div className="separator-container">
        <div className="separator-line separator-line-1"></div>
        <div className="separator-line separator-line-2"></div>
      </div>

      <div className="container mx-auto px-4">
        <CategoryFilter 
          selectedCategory={filters.selectedCategory}
          setSelectedCategory={filters.setSelectedCategory}
          setFiltersOpen={filters.setFiltersOpen}
        />

        <FiltersDialog 
          open={filters.filtersOpen}
          onOpenChange={filters.setFiltersOpen}
          selectedType={filters.selectedType}
          setSelectedType={filters.setSelectedType}
          selectedDifficulty={filters.selectedDifficulty}
          setSelectedDifficulty={filters.setSelectedDifficulty}
          selectedTravelTime={filters.selectedTravelTime}
          setSelectedTravelTime={filters.setSelectedTravelTime}
        />

        {shouldShowCategorySection && (
          <CategorySection 
            trails={categoryHikes}
            sectionTitle={t(`category${filters.selectedCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}`)}
            showSection={true}
            beaches={filters.selectedCategory === 'walking-path' ? filteredBeaches : []}
          />
        )}

        <DayHikesSection 
          directAccessHikes={directAccessHikes}
          otherDayHikes={otherDayHikes}
          showSection={shouldShowDayHikes}
        />

        <MultiDayHikesSection 
          otherMultiDayHikes={otherMultiDayHikes}
          pampLindaHikes={pampLindaHikes}
          showSection={shouldShowMultiDayHikes}
        />

        <BeachesSection 
          beaches={filteredBeaches}
          showSection={shouldShowBeaches}
        />
      </div>
    </div>
  );
};

export default Index;
