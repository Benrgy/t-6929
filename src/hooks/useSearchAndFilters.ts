
import { useState, useMemo } from 'react';
import { ContentCategory } from '../types/algarve';
import { algarveLocations } from '../data/algarveLocations';
import { algarveQA } from '../data/algarveQA';

interface SearchFilters {
  category: ContentCategory | 'all';
  budget: 'low' | 'medium' | 'high' | 'all';
  duration: 'short' | 'half-day' | 'full-day' | 'multi-day' | 'all';
  region: 'east-algarve' | 'central-algarve' | 'west-algarve' | 'interior' | 'all';
  familyFriendly: boolean;
  groupSize: 'solo' | 'couple' | 'family' | 'group' | 'all';
}

export const useSearchAndFilters = () => {
  const [selectedCategory, setSelectedCategory] = useState<ContentCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    category: 'all',
    budget: 'all',
    duration: 'all',
    region: 'all',
    familyFriendly: false,
    groupSize: 'all'
  });

  const handleAdvancedSearch = (query: string, filters: SearchFilters) => {
    setSearchQuery(query);
    setSearchFilters(filters);
    setSelectedCategory(filters.category);
    
    // Scroll to results
    setTimeout(() => {
      const element = document.querySelector('#search-results');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSearchFilters({
      category: 'all',
      budget: 'all',
      duration: 'all',
      region: 'all',
      familyFriendly: false,
      groupSize: 'all'
    });
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (searchFilters.category !== 'all') count++;
    if (searchFilters.budget !== 'all') count++;
    if (searchFilters.duration !== 'all') count++;
    if (searchFilters.region !== 'all') count++;
    if (searchFilters.familyFriendly) count++;
    if (searchFilters.groupSize !== 'all') count++;
    return count;
  };

  const filteredLocations = useMemo(() => {
    let filtered = algarveLocations;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(location => location.category === selectedCategory);
    }
    
    if (searchFilters.region !== 'all') {
      filtered = filtered.filter(location => location.region === searchFilters.region);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(location => 
        location.name.toLowerCase().includes(query) ||
        location.description.en.toLowerCase().includes(query) ||
        location.description.nl.toLowerCase().includes(query) ||
        location.highlights.some(highlight => highlight.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery, searchFilters]);

  const filteredFAQs = useMemo(() => {
    let filtered = algarveQA;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.en.toLowerCase().includes(query) ||
        faq.question.nl.toLowerCase().includes(query) ||
        faq.answer.en.toLowerCase().includes(query) ||
        faq.answer.nl.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  return {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    searchFilters,
    handleAdvancedSearch,
    handleClearSearch,
    getActiveFiltersCount,
    filteredLocations,
    filteredFAQs
  };
};
