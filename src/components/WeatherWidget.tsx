
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Sun, Cloud, CloudRain, Wind, Thermometer, Eye } from 'lucide-react';

interface WeatherData {
  location: string;
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'windy';
  humidity: number;
  windSpeed: number;
  visibility: number;
  recommendation: string;
}

const WeatherWidget: React.FC = () => {
  const { language } = useLanguage();
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate real-time weather data
  useEffect(() => {
    const mockWeatherData: WeatherData[] = [
      {
        location: 'Lagos',
        temperature: 18,
        condition: 'sunny',
        humidity: 65,
        windSpeed: 12,
        visibility: 10,
        recommendation: language === 'nl' ? 'Perfect voor strand wandelingen!' : 'Perfect for beach walks!'
      },
      {
        location: 'Sagres',
        temperature: 16,
        condition: 'windy',
        humidity: 70,
        windSpeed: 25,
        visibility: 8,
        recommendation: language === 'nl' ? 'Ideaal voor surfen, maar neem een windjack mee!' : 'Ideal for surfing, but bring a windbreaker!'
      },
      {
        location: 'Tavira',
        temperature: 19,
        condition: 'sunny',
        humidity: 60,
        windSpeed: 8,
        visibility: 12,
        recommendation: language === 'nl' ? 'Perfecte dag voor de thermale bronnen!' : 'Perfect day for thermal springs!'
      },
      {
        location: 'Monsaraz',
        temperature: 15,
        condition: 'cloudy',
        humidity: 75,
        windSpeed: 15,
        visibility: 6,
        recommendation: language === 'nl' ? 'Mystieke sfeer in het dorp - neem je camera mee!' : 'Mystical village atmosphere - bring your camera!'
      }
    ];

    setTimeout(() => {
      setWeatherData(mockWeatherData);
      setLoading(false);
    }, 1000);
  }, [language]);

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny': return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy': return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rainy': return <CloudRain className="w-8 h-8 text-blue-500" />;
      case 'windy': return <Wind className="w-8 h-8 text-blue-400" />;
      default: return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  const getTemperatureColor = (temp: number) => {
    if (temp >= 20) return 'text-red-500';
    if (temp >= 15) return 'text-orange-500';
    return 'text-blue-500';
  };

  if (loading) {
    return (
      <section className="py-8 bg-gradient-to-r from-blue-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-6"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="bg-white rounded-lg h-32"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-gradient-to-r from-blue-50 to-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
            🌤️ {language === 'nl' ? 'Live Weer in de Algarve' : 'Live Weather in Algarve'}
          </h2>
          <p className="text-gray-600">
            {language === 'nl' 
              ? 'Real-time weer en lokale aanbevelingen voor je bezoek'
              : 'Real-time weather and local recommendations for your visit'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {weatherData.map((weather, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-800">{weather.location}</h3>
                  {getWeatherIcon(weather.condition)}
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer className="w-4 h-4 text-gray-500" />
                  <span className={`text-2xl font-bold ${getTemperatureColor(weather.temperature)}`}>
                    {weather.temperature}°C
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Wind className="w-3 h-3" />
                    <span>{weather.windSpeed}km/h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{weather.visibility}km</span>
                  </div>
                </div>

                <Badge className="w-full text-xs bg-blue-100 text-blue-700 hover:bg-blue-200">
                  {weather.recommendation}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            {language === 'nl' 
              ? '🔄 Automatisch bijgewerkt elke 30 minuten • Volgende update om '
              : '🔄 Auto-updated every 30 minutes • Next update at '
            }
            <span className="font-mono">{new Date(Date.now() + 1800000).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeatherWidget;
