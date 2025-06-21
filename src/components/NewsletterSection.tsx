
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Mail, CheckCircle } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 mb-16">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {language === 'nl' ? 'Bedankt voor je aanmelding!' : 'Thanks for subscribing!'}
          </h3>
          <p className="text-gray-600">
            {language === 'nl' 
              ? 'Je ontvangt binnenkort onze eerste nieuwsbrief met exclusieve tips!'
              : 'You\'ll receive our first newsletter with exclusive tips soon!'
            }
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-16">
      <div className="text-center mb-8">
        <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          {language === 'nl' ? 'Blijf op de hoogte van nieuwe ontdekkingen' : 'Stay Updated with New Discoveries'}
        </h3>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {language === 'nl' ? 
            'Ontvang wekelijks de nieuwste tips over verborgen parels, lokale geheimen en seizoensdeals in de Algarve' :
            'Receive weekly tips about hidden gems, local secrets and seasonal deals in the Algarve'
          }
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-3">
          <input 
            type="email" 
            placeholder={language === 'nl' ? 'Je e-mailadres' : 'Your email'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <Button 
            type="submit" 
            size="lg" 
            disabled={isLoading || !email}
            className="px-6"
          >
            {isLoading ? '...' : (language === 'nl' ? 'Aanmelden' : 'Subscribe')}
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          {language === 'nl' 
            ? 'Geen spam, gemakkelijk uitschrijven' 
            : 'No spam, easy unsubscribe'
          }
        </p>
      </form>
    </div>
  );
};

export default NewsletterSection;
