
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useOffline } from '../hooks/useOffline';
import { Badge } from './ui/badge';
import { WifiOff, Wifi } from 'lucide-react';

const OfflineIndicator: React.FC = () => {
  const { language } = useLanguage();
  const isOffline = useOffline();

  if (!isOffline) return null;

  return (
    <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50">
      <Badge className="bg-orange-500 text-white px-4 py-2 shadow-lg animate-pulse">
        <WifiOff className="w-4 h-4 mr-2" />
        {language === 'nl' ? 'Offline modus - beperkte functionaliteit' : 'Offline mode - limited functionality'}
      </Badge>
    </div>
  );
};

export default OfflineIndicator;
