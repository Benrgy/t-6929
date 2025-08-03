// Search functionality for Lokaal Genieten Algarve
// Handles content search, filters and autocomplete

class AlgarveSearch {
    constructor() {
        this.searchData = [];
        this.searchIndex = {};
        this.currentResults = [];
        this.filters = {
            category: '',
            location: '',
            budget: '',
            duration: ''
        };
        
        this.init();
    }
    
    init() {
        this.buildSearchIndex();
        this.bindEvents();
        this.initializeFilters();
    }
    
    // Build searchable content index
    buildSearchIndex() {
        // Homepage content
        this.addToIndex({
            id: 'home',
            title: 'Lokaal Genieten Algarve Voor Weinig',
            content: 'goedkope vluchten transavia faro tips nederlandse expats authentiek betaalbaar budget',
            category: 'general',
            location: 'algarve',
            url: '/',
            type: 'page'
        });
        
        // Experiences content
        this.addToIndex({
            id: 'tavira',
            title: 'Tavira - Het Authentieke Hart van de Algarve',
            content: 'tavira romeinse brug zoutpannen authentiek portugese architectuur pastelaria ramos ilha ferry',
            category: 'culture',
            location: 'tavira',
            budget: 'budget',
            duration: 'day',
            url: '/experiences/#tavira',
            type: 'experience'
        });
        
        this.addToIndex({
            id: 'benagil',
            title: 'Benagil Grot - Vermijd de Drukte & Bespaar Geld',
            content: 'benagil grot zeegrot kayak zwemmen portimao boottocht grotten algar seco carvoeiro',
            category: 'nature',
            location: 'benagil',
            budget: 'budget',
            duration: 'half-day',
            url: '/experiences/#benagil',
            type: 'experience'
        });
        
        this.addToIndex({
            id: 'monchique',
            title: 'Monchique Bergen - De Groene Oase van de Algarve',
            content: 'monchique bergen foia caldas thermale bronnen wandelen natuur eucalyptus watervallen',
            category: 'nature',
            location: 'monchique',
            budget: 'mid-range',
            duration: 'day',
            url: '/experiences/#monchique',
            type: 'experience'
        });
        
        // Flight content
        this.addToIndex({
            id: 'flights',
            title: 'Goedkope Vluchten naar Algarve - Beste Deals 2025',
            content: 'transavia klm tap ryanair faro vluchten goedkoop booking tips seizoenen prijzen',
            category: 'transport',
            location: 'algarve',
            url: '/flights/',
            type: 'page'
        });
        
        // Add more searchable content...
        this.addLocationData();
        this.addSeasonalContent();
    }
    
    addToIndex(item) {
        this.searchData.push(item);
        
        // Create search terms from title and content
        const searchTerms = (item.title + ' ' + item.content).toLowerCase();
        const words = searchTerms.split(/\s+/);
        
        words.forEach(word => {
            if (word.length > 2) {
                if (!this.searchIndex[word]) {
                    this.searchIndex[word] = [];
                }
                this.searchIndex[word].push(item.id);
            }
        });
    }
    
    addLocationData() {
        const locations = [
            { name: 'Lagos', keywords: 'lagos ponta da piedade cliffs kayak boat tours beaches' },
            { name: 'Sagres', keywords: 'sagres cabo sao vicente lighthouse surfing end of world fortaleza' },
            { name: 'Vilamoura', keywords: 'vilamoura marina golf luxury resort beaches falesia' },
            { name: 'Albufeira', keywords: 'albufeira old town strip nightlife beaches tunnel beach' },
            { name: 'Portimao', keywords: 'portimao praia da rocha sardine festival beaches restaurants' }
        ];
        
        locations.forEach((location, index) => {
            this.addToIndex({
                id: `location-${index}`,
                title: `${location.name} Tips & Ervaringen`,
                content: location.keywords,
                category: 'location',
                location: location.name.toLowerCase(),
                url: `/experiences/#${location.name.toLowerCase()}`,
                type: 'location'
            });
        });
    }
    
    addSeasonalContent() {
        const seasons = [
            {
                name: 'Lente Algarve',
                keywords: 'lente maart april mei bloemen wandelen mild weer temperatuur',
                season: 'spring'
            },
            {
                name: 'Zomer Algarve',
                keywords: 'zomer juni juli augustus stranden zon warm festival drukte',
                season: 'summer'
            },
            {
                name: 'Herfst Algarve',
                keywords: 'herfst september oktober november rustig weer zwemmen goedkoop',
                season: 'autumn'
            },
            {
                name: 'Winter Algarve',
                keywords: 'winter december januari februari wandelen rust mild golfen',
                season: 'winter'
            }
        ];
        
        seasons.forEach((season, index) => {
            this.addToIndex({
                id: `season-${index}`,
                title: season.name,
                content: season.keywords,
                category: 'seasonal',
                season: season.season,
                url: `/experiences/#${season.season}`,
                type: 'seasonal'
            });
        });
    }
    
    // Search functionality
    search(query, filters = {}) {
        if (!query || query.length < 2) {
            return this.getPopularResults();
        }
        
        const searchTerms = query.toLowerCase().split(/\s+/);
        const results = new Map();
        
        searchTerms.forEach(term => {
            // Exact matches
            if (this.searchIndex[term]) {
                this.searchIndex[term].forEach(id => {
                    const item = this.searchData.find(item => item.id === id);
                    if (item) {
                        const score = results.get(id) || 0;
                        results.set(id, score + 10);
                    }
                });
            }
            
            // Partial matches
            Object.keys(this.searchIndex).forEach(indexTerm => {
                if (indexTerm.includes(term) && indexTerm !== term) {
                    this.searchIndex[indexTerm].forEach(id => {
                        const item = this.searchData.find(item => item.id === id);
                        if (item) {
                            const score = results.get(id) || 0;
                            results.set(id, score + 5);
                        }
                    });
                }
            });
        });
        
        // Convert to array and sort by score
        let sortedResults = Array.from(results.entries())
            .sort((a, b) => b[1] - a[1])
            .map(([id, score]) => {
                const item = this.searchData.find(item => item.id === id);
                return { ...item, score };
            });
        
        // Apply filters
        sortedResults = this.applyFilters(sortedResults, filters);
        
        return sortedResults.slice(0, 10); // Return top 10 results
    }
    
    applyFilters(results, filters) {
        return results.filter(item => {
            if (filters.category && item.category !== filters.category) return false;
            if (filters.location && item.location !== filters.location) return false;
            if (filters.budget && item.budget !== filters.budget) return false;
            if (filters.duration && item.duration !== filters.duration) return false;
            return true;
        });
    }
    
    getPopularResults() {
        return [
            this.searchData.find(item => item.id === 'tavira'),
            this.searchData.find(item => item.id === 'benagil'),
            this.searchData.find(item => item.id === 'flights'),
            this.searchData.find(item => item.id === 'monchique')
        ].filter(Boolean);
    }
    
    // Autocomplete suggestions
    getSuggestions(query) {
        if (!query || query.length < 2) return [];
        
        const suggestions = new Set();
        const queryLower = query.toLowerCase();
        
        // Find matching terms
        Object.keys(this.searchIndex).forEach(term => {
            if (term.startsWith(queryLower)) {
                suggestions.add(term);
            }
        });
        
        // Add popular search terms
        const popularTerms = [
            'tavira', 'benagil', 'monchique', 'vluchten', 'goedkoop', 
            'stranden', 'restaurants', 'tips', 'budget', 'authentiek'
        ];
        
        popularTerms.forEach(term => {
            if (term.includes(queryLower)) {
                suggestions.add(term);
            }
        });
        
        return Array.from(suggestions).slice(0, 5);
    }
    
    // Event binding
    bindEvents() {
        // Search input
        const searchInputs = document.querySelectorAll('.search-input, #search-input');
        searchInputs.forEach(input => {
            input.addEventListener('input', this.handleSearchInput.bind(this));
            input.addEventListener('keydown', this.handleSearchKeydown.bind(this));
            input.addEventListener('focus', this.handleSearchFocus.bind(this));
        });
        
        // Filter changes
        const filterSelects = document.querySelectorAll('.filter-select');
        filterSelects.forEach(select => {
            select.addEventListener('change', this.handleFilterChange.bind(this));
        });
        
        // Search form submission
        const searchForms = document.querySelectorAll('.search-form');
        searchForms.forEach(form => {
            form.addEventListener('submit', this.handleSearchSubmit.bind(this));
        });
        
        // Click outside to close suggestions
        document.addEventListener('click', this.handleDocumentClick.bind(this));
    }
    
    handleSearchInput(e) {
        const query = e.target.value;
        const suggestions = this.getSuggestions(query);
        this.showSuggestions(e.target, suggestions);
        
        // Debounced search
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            this.performSearch(query);
        }, 300);
    }
    
    handleSearchKeydown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.performSearch(e.target.value);
            this.hideSuggestions();
        }
        
        if (e.key === 'Escape') {
            this.hideSuggestions();
        }
    }
    
    handleSearchFocus(e) {
        if (e.target.value) {
            const suggestions = this.getSuggestions(e.target.value);
            this.showSuggestions(e.target, suggestions);
        }
    }
    
    handleFilterChange(e) {
        const filterType = e.target.dataset.filter;
        const value = e.target.value;
        
        this.filters[filterType] = value;
        
        // Re-run current search with new filters
        const searchInput = document.querySelector('.search-input, #search-input');
        if (searchInput && searchInput.value) {
            this.performSearch(searchInput.value);
        }
    }
    
    handleSearchSubmit(e) {
        e.preventDefault();
        const input = e.target.querySelector('.search-input, #search-input');
        if (input) {
            this.performSearch(input.value);
            this.hideSuggestions();
        }
    }
    
    handleDocumentClick(e) {
        if (!e.target.closest('.search-container')) {
            this.hideSuggestions();
        }
    }
    
    performSearch(query) {
        const results = this.search(query, this.filters);
        this.displayResults(results, query);
        
        // Track search
        if (typeof gtag !== 'undefined') {
            gtag('event', 'search', {
                search_term: query,
                results_count: results.length
            });
        }
    }
    
    showSuggestions(input, suggestions) {
        let suggestionsContainer = input.parentNode.querySelector('.search-suggestions');
        
        if (!suggestionsContainer) {
            suggestionsContainer = document.createElement('div');
            suggestionsContainer.className = 'search-suggestions';
            input.parentNode.appendChild(suggestionsContainer);
        }
        
        if (suggestions.length === 0) {
            suggestionsContainer.style.display = 'none';
            return;
        }
        
        suggestionsContainer.innerHTML = suggestions.map(suggestion => 
            `<div class="suggestion-item" data-suggestion="${suggestion}">
                <span class="suggestion-text">${suggestion}</span>
                <span class="suggestion-action">↗</span>
            </div>`
        ).join('');
        
        suggestionsContainer.style.display = 'block';
        
        // Bind suggestion clicks
        suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                input.value = item.dataset.suggestion;
                this.performSearch(item.dataset.suggestion);
                this.hideSuggestions();
            });
        });
    }
    
    hideSuggestions() {
        const suggestions = document.querySelectorAll('.search-suggestions');
        suggestions.forEach(container => {
            container.style.display = 'none';
        });
    }
    
    displayResults(results, query) {
        let resultsContainer = document.querySelector('.search-results');
        
        if (!resultsContainer) {
            resultsContainer = this.createResultsContainer();
        }
        
        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <h3>Geen resultaten gevonden voor "${query}"</h3>
                    <p>Probeer een andere zoekterm of bekijk onze populaire content:</p>
                    <div class="popular-links">
                        <a href="/experiences/#tavira">Tavira Tips</a>
                        <a href="/experiences/#benagil">Benagil Grot</a>
                        <a href="/flights/">Goedkope Vluchten</a>
                    </div>
                </div>
            `;
        } else {
            resultsContainer.innerHTML = `
                <div class="results-header">
                    <h3>${results.length} resultaten voor "${query}"</h3>
                </div>
                <div class="results-list">
                    ${results.map(result => this.createResultItem(result)).join('')}
                </div>
            `;
        }
        
        resultsContainer.style.display = 'block';
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }
    
    createResultsContainer() {
        const container = document.createElement('div');
        container.className = 'search-results';
        
        // Insert after main content or at end of page
        const main = document.querySelector('main, .main-content');
        if (main) {
            main.appendChild(container);
        } else {
            document.body.appendChild(container);
        }
        
        return container;
    }
    
    createResultItem(result) {
        const typeIcon = this.getTypeIcon(result.type);
        const categoryLabel = this.getCategoryLabel(result.category);
        
        return `
            <div class="result-item" data-type="${result.type}">
                <div class="result-icon">${typeIcon}</div>
                <div class="result-content">
                    <h4><a href="${result.url}">${result.title}</a></h4>
                    <p class="result-category">${categoryLabel}</p>
                    <p class="result-snippet">${this.createSnippet(result)}</p>
                </div>
                <div class="result-action">
                    <a href="${result.url}" class="btn btn-sm btn-outline">Bekijken</a>
                </div>
            </div>
        `;
    }
    
    getTypeIcon(type) {
        const icons = {
            'experience': '🏖️',
            'location': '📍',
            'page': '📄',
            'seasonal': '🌅',
            'transport': '✈️'
        };
        return icons[type] || '📄';
    }
    
    getCategoryLabel(category) {
        const labels = {
            'culture': 'Cultuur & Geschiedenis',
            'nature': 'Natuur & Wandelen',
            'transport': 'Transport & Reizen',
            'location': 'Locatie',
            'seasonal': 'Seizoensgebonden',
            'general': 'Algemeen'
        };
        return labels[category] || 'Overig';
    }
    
    createSnippet(result) {
        const maxLength = 120;
        let snippet = result.content || '';
        
        if (snippet.length > maxLength) {
            snippet = snippet.substring(0, maxLength) + '...';
        }
        
        return snippet;
    }
    
    initializeFilters() {
        // Add filter UI if it doesn't exist
        const searchContainer = document.querySelector('.search-container');
        if (searchContainer && !searchContainer.querySelector('.search-filters')) {
            const filtersHTML = `
                <div class="search-filters">
                    <select class="filter-select" data-filter="category">
                        <option value="">Alle categorieën</option>
                        <option value="culture">Cultuur</option>
                        <option value="nature">Natuur</option>
                        <option value="transport">Transport</option>
                        <option value="location">Locaties</option>
                    </select>
                    
                    <select class="filter-select" data-filter="budget">
                        <option value="">Alle budgetten</option>
                        <option value="budget">Budget (€30-50)</option>
                        <option value="mid-range">Midden (€50-80)</option>
                        <option value="luxury">Luxe (€80+)</option>
                    </select>
                </div>
            `;
            searchContainer.insertAdjacentHTML('beforeend', filtersHTML);
        }
    }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.algarveSearch = new AlgarveSearch();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AlgarveSearch;
}