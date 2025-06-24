
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MessageSquare, Heart, Users, MapPin, Calendar, Send, Camera, ExternalLink } from 'lucide-react';

interface ForumPost {
  id: string;
  author: string;
  location: string;
  title: string;
  content: string;
  category: 'vraag' | 'tip' | 'review' | 'ontmoeting';
  likes: number;
  replies: number;
  timestamp: string;
  hasPhotos: boolean;
  isVerified: boolean;
}

const CommunityForum: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showNewPost, setShowNewPost] = useState(false);

  const forumPosts: ForumPost[] = [
    {
      id: "1",
      author: "Marina_Utrecht",
      location: "Tavira",
      title: "Gevonden: Perfecte plek voor remote work met WiFi",
      content: "Na 3 weken zoeken heb ik eindelijk DE plek gevonden voor digital nomads. Café Central in Tavira - supersnelle WiFi, €1,20 koffie, lokale sfeer. Eigenaar spreekt Engels en heeft zelfs stopcontacten bij elk tafeltje laten installeren toen hij merkte dat er meer remote workers kwamen.",
      category: 'tip',
      likes: 47,
      replies: 12,
      timestamp: "2 uur geleden",
      hasPhotos: true,
      isVerified: true
    },
    {
      id: "2",
      author: "PietEnAnke_Algarve",
      location: "Monchique",
      title: "Wie heeft ervaring met lange termijn visa?",
      content: "We overwegen om 6 maanden per jaar in Portugal te wonen. Heeft iemand ervaring met D7 visa? Vooral benieuwd naar praktische zaken - zorgverzekering, belastingen, etc.",
      category: 'vraag',
      likes: 23,
      replies: 8,
      timestamp: "5 uur geleden",
      hasPhotos: false,
      isVerified: false
    },
    {
      id: "3",
      author: "LocalGuide_João",
      location: "Sagres",
      title: "Surflessen voor beginners - eerlijke review",
      content: "Ik geef al 15 jaar surflessen in Sagres. Veel scholen vragen €45/les, maar voor beginners is dat te duur. Ik doe €25/les incl. wetsuit en board. Geen fancy marketing, gewoon goede lessen in kleine groepen.",
      category: 'review',
      likes: 156,
      replies: 34,
      timestamp: "1 dag geleden",
      hasPhotos: true,
      isVerified: true
    },
    {
      id: "4",
      author: "Wandelgids_Lisa",
      location: "Alte",
      title: "Wandelgroep dit weekend - wie doet mee?",
      content: "Zaterdag 14:00 wandeling naar de geheime waterval bij Alte. 2 uur lopen, gemakkelijk niveau. Meebrengen: water, goede schoenen, zwemkleding. Gratis natuurlijk! Verzamelen bij het dorpsplein.",
      category: 'ontmoeting',
      likes: 31,
      replies: 15,
      timestamp: "2 dagen geleden",
      hasPhotos: false,
      isVerified: true
    }
  ];

  const categories = [
    { id: 'all', label: 'Alle posts', icon: MessageSquare, color: 'bg-blue-100 text-blue-700' },
    { id: 'vraag', label: 'Vragen', icon: MessageSquare, color: 'bg-orange-100 text-orange-700' },
    { id: 'tip', label: 'Tips', icon: Heart, color: 'bg-green-100 text-green-700' },
    { id: 'review', label: 'Reviews', icon: Users, color: 'bg-purple-100 text-purple-700' },
    { id: 'ontmoeting', label: 'Ontmoetingen', icon: Calendar, color: 'bg-pink-100 text-pink-700' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? forumPosts 
    : forumPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {language === 'nl' ? '💬 Community Forum' : '💬 Community Forum'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {language === 'nl'
              ? 'Stel vragen, deel tips en ontmoet andere Nederlandse Algarve-liefhebbers. Échte mensen, échte ervaringen.'
              : 'Ask questions, share tips and meet other Dutch Algarve lovers. Real people, real experiences.'
            }
          </p>
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
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-100 shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* New Post Button */}
        <div className="text-center mb-8">
          <Button
            onClick={() => setShowNewPost(!showNewPost)}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full"
          >
            <Send className="w-4 h-4 mr-2" />
            {language === 'nl' ? 'Nieuwe post' : 'New post'}
          </Button>
        </div>

        {/* WhatsApp Groups */}
        <div className="bg-green-50 rounded-2xl p-6 mb-8 border-2 border-green-200">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              {language === 'nl' ? '📱 WhatsApp Groepen' : '📱 WhatsApp Groups'}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold mb-2">🏠 Wonen & Huren</h4>
                <p className="text-sm text-gray-600 mb-3">157 leden</p>
                <Button size="sm" className="bg-green-500 hover:bg-green-600">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Deelnemen
                </Button>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold mb-2">🚗 Ritten Delen</h4>
                <p className="text-sm text-gray-600 mb-3">89 leden</p>
                <Button size="sm" className="bg-green-500 hover:bg-green-600">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Deelnemen
                </Button>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold mb-2">🏃 Activiteiten</h4>
                <p className="text-sm text-gray-600 mb-3">234 leden</p>
                <Button size="sm" className="bg-green-500 hover:bg-green-600">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Deelnemen
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Forum Posts */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-800">{post.author}</h4>
                        {post.isVerified && (
                          <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                            ✓ Geverifieerd
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{post.location}</span>
                        <span>•</span>
                        <span>{post.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={`${
                    post.category === 'tip' ? 'bg-green-100 text-green-700' :
                    post.category === 'vraag' ? 'bg-orange-100 text-orange-700' :
                    post.category === 'review' ? 'bg-purple-100 text-purple-700' :
                    'bg-pink-100 text-pink-700'
                  }`}>
                    {post.category}
                  </Badge>
                </div>

                <h3 className="text-lg font-semibold mb-3 text-gray-800">{post.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>

                {post.hasPhotos && (
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <Camera className="w-4 h-4" />
                    <span>Bevat foto's</span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-sm">{post.replies} reacties</span>
                    </button>
                  </div>
                  <Button variant="outline" size="sm">
                    Reageren
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            {language === 'nl' ? '🏆 Community Stats' : '🏆 Community Stats'}
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2,847</div>
              <div className="text-gray-600">Actieve leden</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1,234</div>
              <div className="text-gray-600">Gedeelde tips</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">567</div>
              <div className="text-gray-600">Foto's gedeeld</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">89</div>
              <div className="text-gray-600">Ontmoetingen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityForum;
