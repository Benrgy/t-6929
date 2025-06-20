
import React, { useState } from 'react';
import { FAQ } from '../types/algarve';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs, title }) => {
  const { language, t } = useLanguage();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  if (!faqs.length) return null;

  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      )}
      
      {faqs.map((faq) => {
        const isOpen = openItems.has(faq.id);
        
        return (
          <Card key={faq.id}>
            <Collapsible>
              <CollapsibleTrigger asChild>
                <div 
                  className="w-full p-4 text-left flex items-center justify-between cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleItem(faq.id)}
                >
                  <h3 className="font-medium pr-4">{faq.question[language]}</h3>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <CardContent className="pt-0 pb-4">
                  <div className="text-gray-600 mb-4">
                    {faq.answer[language]}
                  </div>
                  
                  {faq.affiliateLinks && (
                    <div className="flex gap-2 flex-wrap">
                      {faq.affiliateLinks.accommodation && (
                        <Button 
                          size="sm"
                          onClick={() => window.open(faq.affiliateLinks!.accommodation, '_blank')}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          {t('findDeals')}
                        </Button>
                      )}
                      {faq.affiliateLinks.transport && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.open(faq.affiliateLinks!.transport, '_blank')}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          {t('transport')}
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        );
      })}
    </div>
  );
};

export default FAQSection;
