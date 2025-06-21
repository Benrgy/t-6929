
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Calculator, Plane, Car, Home, MapPin } from 'lucide-react';

const BudgetCalculator: React.FC = () => {
  const { language } = useLanguage();
  const [departure, setDeparture] = useState('');
  const [duration, setDuration] = useState('');
  const [travelers, setTravelers] = useState('');
  const [totalCost, setTotalCost] = useState<number | null>(null);

  const calculateBudget = () => {
    const days = parseInt(duration) || 7;
    const people = parseInt(travelers) || 2;
    
    // Budget berekening (realistisch voor Algarve)
    const flight = people * 120; // €120 per persoon retour vanaf Nederland
    const carRental = days * 25; // €25 per dag autohuur
    const accommodation = days * 45; // €45 per nacht Airbnb/hotel
    const food = days * people * 25; // €25 per persoon per dag eten
    const activities = days * 15; // €15 per dag activiteiten
    
    const total = flight + carRental + accommodation + food + activities;
    setTotalCost(total);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-green-50 to-orange-50 border-2 border-orange-200">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl text-green-700">
          <Calculator className="w-6 h-6" />
          {language === 'nl' ? 'Budgetcalculator' : 'Budget Calculator'}
        </CardTitle>
        <p className="text-gray-600">
          {language === 'nl' 
            ? 'Bereken de kosten voor jouw authentieke Algarve-reis'
            : 'Calculate costs for your authentic Algarve trip'
          }
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              <MapPin className="w-4 h-4 inline mr-1" />
              {language === 'nl' ? 'Vertrek' : 'Departure'}
            </label>
            <Select value={departure} onValueChange={setDeparture}>
              <SelectTrigger>
                <SelectValue placeholder={language === 'nl' ? 'Kies stad' : 'Choose city'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="amsterdam">Amsterdam</SelectItem>
                <SelectItem value="rotterdam">Rotterdam</SelectItem>
                <SelectItem value="utrecht">Utrecht</SelectItem>
                <SelectItem value="den-haag">Den Haag</SelectItem>
                <SelectItem value="eindhoven">Eindhoven</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              <Plane className="w-4 h-4 inline mr-1" />
              {language === 'nl' ? 'Reisduur' : 'Duration'}
            </label>
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger>
                <SelectValue placeholder={language === 'nl' ? 'Dagen' : 'Days'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3 dagen</SelectItem>
                <SelectItem value="7">7 dagen</SelectItem>
                <SelectItem value="10">10 dagen</SelectItem>
                <SelectItem value="14">14 dagen</SelectItem>
                <SelectItem value="21">21 dagen</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              <Home className="w-4 h-4 inline mr-1" />
              {language === 'nl' ? 'Reizigers' : 'Travelers'}
            </label>
            <Select value={travelers} onValueChange={setTravelers}>
              <SelectTrigger>
                <SelectValue placeholder={language === 'nl' ? 'Aantal' : 'Number'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 persoon</SelectItem>
                <SelectItem value="2">2 personen</SelectItem>
                <SelectItem value="4">4 personen</SelectItem>
                <SelectItem value="6">6 personen</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Button 
          onClick={calculateBudget}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
          disabled={!departure || !duration || !travelers}
        >
          {language === 'nl' ? 'Bereken Budget' : 'Calculate Budget'}
        </Button>
        
        {totalCost && (
          <div className="mt-6 p-4 bg-white rounded-lg border-2 border-green-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                €{totalCost}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === 'nl' 
                  ? `Totale kosten voor ${travelers} ${parseInt(travelers) === 1 ? 'persoon' : 'personen'}, ${duration} dagen`
                  : `Total costs for ${travelers} ${parseInt(travelers) === 1 ? 'person' : 'people'}, ${duration} days`
                }
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
                <Badge variant="secondary" className="flex flex-col p-2">
                  <Car className="w-4 h-4 mb-1" />
                  <span>Vlucht</span>
                  <span className="font-bold">€{parseInt(travelers) * 120}</span>
                </Badge>
                <Badge variant="secondary" className="flex flex-col p-2">
                  <Car className="w-4 h-4 mb-1" />
                  <span>Auto</span>
                  <span className="font-bold">€{parseInt(duration) * 25}</span>
                </Badge>
                <Badge variant="secondary" className="flex flex-col p-2">
                  <Home className="w-4 h-4 mb-1" />
                  <span>Logies</span>
                  <span className="font-bold">€{parseInt(duration) * 45}</span>
                </Badge>
                <Badge variant="secondary" className="flex flex-col p-2">
                  <span>🍽️</span>
                  <span>Eten</span>
                  <span className="font-bold">€{parseInt(duration) * parseInt(travelers) * 25}</span>
                </Badge>
                <Badge variant="secondary" className="flex flex-col p-2">
                  <span>🎯</span>
                  <span>Extra</span>
                  <span className="font-bold">€{parseInt(duration) * 15}</span>
                </Badge>
              </div>
            </div>
          </div>
        )}
        
        <p className="text-xs text-gray-500 text-center">
          {language === 'nl' 
            ? 'Prijzen zijn schattingen gebaseerd op budgetvriendelijke opties en lokale tips'
            : 'Prices are estimates based on budget-friendly options and local tips'
          }
        </p>
      </CardContent>
    </Card>
  );
};

export default BudgetCalculator;
