import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BreadcrumbNavigation: React.FC = () => {
  const location = useLocation();
  const { language } = useLanguage();
  
  const getPageName = (path: string) => {
    const routes: Record<string, Record<string, string>> = {
      '/': { nl: 'Home', en: 'Home' },
      '/experiences': { nl: 'Ervaringen', en: 'Experiences' },
      '/flights': { nl: 'Vluchten', en: 'Flights' },
      '/over-ons': { nl: 'Over Ons', en: 'About Us' },
      '/contact': { nl: 'Contact', en: 'Contact' },
    };
    
    return routes[path]?.[language] || path.replace('/', '').replace('-', ' ');
  };

  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  if (location.pathname === '/') return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          
          {pathSegments.map((segment, index) => {
            const path = '/' + pathSegments.slice(0, index + 1).join('/');
            const isLast = index === pathSegments.length - 1;
            
            return (
              <li key={path} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {getPageName(path)}
                  </span>
                ) : (
                  <Link 
                    to={path} 
                    className="text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    {getPageName(path)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbNavigation;