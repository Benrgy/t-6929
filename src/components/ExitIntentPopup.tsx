
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { X, Gift } from 'lucide-react';

interface ExitIntentPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isVisible, onClose }) => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    // Track conversion
    console.log('Exit popup email signup:', email);
    setIsSubmitted(true);
    
    // Close popup after 2 seconds
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="p-6">
          <button 
            onClick={onClose}
            className="float-right text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
          
          {isSubmitted ? (
            <div className="text-center">
              <Gift className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-green-600">
                {language === 'nl' ? 'Bedankt!' : 'Thank you!'}
              </h3>
              <p className="text-gray-600">
                {language === 'nl' ? 'Je ontvangt de gratis tips binnen 5 minuten!' : 'You\'ll receive the free tips within 5 minutes!'}
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-4">
                <Gift className="w-12 h-12 text-orange-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold mb-2">
                  {language === 'nl' ? 'Gratis Algarve Tips PDF 🌞' : 'Free Algarve Tips PDF 🌞'}
                </h3>
              </div>
              
              <p className="mb-4">
                {language === 'nl' ? 'Ontvang onze verzameling praktische tips:' : 'Receive our collection of practical tips:'}
              </p>
              
              <ul className="text-sm space-y-1 mb-4">
                <li>✓ {language === 'nl' ? 'Wanneer vluchten echt het goedkoopst zijn' : 'When flights are really cheapest'}</li>
                <li>✓ {language === 'nl' ? 'Welke stranden gratis parkeren hebben' : 'Which beaches have free parking'}</li>
                <li>✓ {language === 'nl' ? 'Waar locals eten (menu del dia €8-12)' : 'Where locals eat (menu del dia €8-12)'}</li>
                <li>✓ {language === 'nl' ? 'Autoverhuur tips (let op de verzekering!)' : 'Car rental tips (watch the insurance!)'}</li>
                <li>✓ {language === 'nl' ? 'Nederlandse Facebook groepen in Algarve' : 'Dutch Facebook groups in Algarve'}</li>
              </ul>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder={language === 'nl' ? 'Je e-mailadres' : 'Your email'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  {language === 'nl' ? 'Stuur mij de gratis tips' : 'Send me the free tips'}
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  {language === 'nl' ? 'We sturen max. 1 email per maand met updates' : 'We send max. 1 email per month with updates'}
                </p>
              </form>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ExitIntentPopup;
