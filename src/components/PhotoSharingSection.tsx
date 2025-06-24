
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Heart, MessageSquare, MapPin, Camera, Upload, Eye, Users } from 'lucide-react';

interface Photo {
  id: string;
  author: string;
  location: string;
  caption: string;
  imageUrl: string;
  likes: number;
  comments: number;
  category: 'strand' | 'dorp' | 'natuur' | 'eten' | 'mensen';
  timestamp: string;
  isVerified: boolean;
}

const PhotoSharingSection: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const photos: Photo[] = [
    {
      id: "1",
      author: "Emma_Fotografie",
      location: "Cacela Velha",
      caption: "6:30 AM - Wij waren de enigen op dit strand. Geen toeristen, alleen deze vissersboot en de zon die opkwam. Portugal zoals het bedoeld is.",
      imageUrl: "/lovable-uploads/ca8e90bd-76e4-4ea6-afba-820b7b457d1e.png",
      likes: 127,
      comments: 23,
      category: 'strand',
      timestamp: "3 uur geleden",
      isVerified: true
    },
    {
      id: "2", 
      author: "LocalFoodie_Mark",
      location: "Tavira",
      caption: "€12 voor deze verse vis, salade en wijn. Zelfde vis kost €35 in toeristische restaurants. Deze locals-only plek vonden we dankzij José van de vismarkt.",
      imageUrl: "/lovable-uploads/2669c291-db3b-4115-a8d9-0003a827de60.png",
      likes: 89,
      comments: 15,
      category: 'eten',
      timestamp: "1 dag geleden",
      isVerified: true
    },
    {
      id: "3",
      author: "Wandelaar_Piet",
      location: "Alte",
      caption: "De geheime waterval! 20 minuten lopen vanaf het dorp door dit pad. María gaf ons de route - spreekt geen Engels maar tekende een kaartje ❤️",
      imageUrl: "/lovable-uploads/5fd20688-6816-43ff-87bc-fb5b01ab43eb.png",
      likes: 156,
      comments: 34,
      category: 'natuur',
      timestamp: "2 dagen geleden",
      isVerified: true
    },
    {
      id: "4",
      author: "Dorpen_Liefhebber",
      location: "Monsaraz",
      caption: "Dit 800-jaar oude dorp heeft 150 inwoners en geen toeristen. Hier voel je de échte Alentejo. Thermal springs op 15 min rijden.",
      imageUrl: "/lovable-uploads/97d3a735-4ca9-469c-ae6e-f35916080c6c.png",
      likes: 203,
      comments: 41,
      category: 'dorp',
      timestamp: "3 dagen geleden",
      isVerified: true
    },
    {
      id: "5",
      author: "Thermaal_Genot",
      location: "Monchique",
      caption: "32°C natuurlijk warm water, €8 toegang. Beter dan dure spa's! Dit water borrelt al 2000 jaar uit de aarde. Romeinen kwamen hier al.",
      imageUrl: "/lovable-uploads/dbccf672-671f-4a74-866b-6bacf864626e.png",
      likes: 178,
      comments: 28,
      category: 'natuur',
      timestamp: "4 dagen geleden",
      isVerified: true
    },
    {
      id: "6",
      author: "Mensen_Ontmoeten",
      location: "Olhão",
      caption: "João (73) verkoopt al 40 jaar vis op deze markt. Leerde ons verse vis herkennen en gaf een recept voor cataplana. Zulke momenten maak je trip!",
      imageUrl: "/lovable-uploads/af70a74d-bb6d-488b-990d-9526e92d4eae.png",
      likes: 245,
      comments: 67,
      category: 'mensen',
      timestamp: "5 dagen geleden",
      isVerified: true
    }
  ];

  const categories = [
    { id: 'all', label: 'Alle foto\'s', icon: Camera },
    { id: 'strand', label: 'Stranden', icon: Eye },
    { id: 'dorp', label: 'Dorpen', icon: MapPin },
    { id: 'natuur', label: 'Natuur', icon: Heart },
    { id: 'eten', label: 'Eten & Drinken', icon: Users },
    { id: 'mensen', label: 'Mensen', icon: Users }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {language === 'nl' ? '📸 Foto\'s van de Community' : '📸 Community Photos'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {language === 'nl'
              ? 'Echte foto\'s van echte mensen. Zie de Algarve door de ogen van Nederlandse reizigers en locals. Geen Instagram filters, gewoon authentiek.'
              : 'Real photos from real people. See the Algarve through the eyes of Dutch travelers and locals. No Instagram filters, just authentic.'
            }
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            {language === 'nl' ? '📤 Deel jouw Algarve moment' : '📤 Share your Algarve moment'}
          </h3>
          <p className="text-gray-600 mb-6">
            {language === 'nl'
              ? 'Inspireer anderen met jouw ontdekkingen. Elke foto vertelt een verhaal.'
              : 'Inspire others with your discoveries. Every photo tells a story.'
            }
          </p>
          <Button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full">
            <Upload className="w-5 h-5 mr-2" />
            {language === 'nl' ? 'Foto uploaden' : 'Upload photo'}
          </Button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-purple-100 shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src={photo.imageUrl} 
                  alt={photo.caption}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${
                    photo.category === 'strand' ? 'bg-blue-100 text-blue-700' :
                    photo.category === 'dorp' ? 'bg-orange-100 text-orange-700' :
                    photo.category === 'natuur' ? 'bg-green-100 text-green-700' :
                    photo.category === 'eten' ? 'bg-red-100 text-red-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {photo.category}
                  </Badge>
                </div>
                {photo.isVerified && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-100 text-green-700">
                      ✓ Geverifieerd
                    </Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {photo.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-800">{photo.author}</div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{photo.location}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{photo.timestamp}</span>
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{photo.caption}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{photo.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-sm">{photo.comments}</span>
                    </button>
                  </div>
                  <Button variant="outline" size="sm">
                    Bekijken
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Photo Contest */}
        <div className="mt-16 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            🏆 {language === 'nl' ? 'Foto van de Maand' : 'Photo of the Month'}
          </h3>
          <p className="text-gray-600 mb-6">
            {language === 'nl'
              ? 'Deel je beste Algarve foto en win een weekend in een lokale quinta. Maandelijks kiezen we de mooiste authentieke foto.'
              : 'Share your best Algarve photo and win a weekend in a local quinta. Monthly we choose the most beautiful authentic photo.'
            }
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
              {language === 'nl' ? 'Deelnemen' : 'Participate'}
            </Button>
            <Button variant="outline">
              {language === 'nl' ? 'Winnaars bekijken' : 'View winners'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoSharingSection;
