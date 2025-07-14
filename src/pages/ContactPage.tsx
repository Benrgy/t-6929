import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { useAnalytics } from '../hooks/useAnalytics';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  const { updateSEO } = useSEO();
  const { trackEvent } = useAnalytics();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  React.useEffect(() => {
    updateSEO({
      title: language === 'nl' 
        ? 'Contact | Lokaal Genieten in de Algarve'
        : 'Contact | Enjoy Local Algarve for Less',
      description: language === 'nl'
        ? 'Neem contact met ons op voor vragen over de Algarve, feedback of tips. We helpen Nederlandse reizigers graag verder.'
        : 'Contact us for questions about the Algarve, feedback or tips. We\'re happy to help Dutch travelers.',
      keywords: 'algarve contact, vragen algarve, contact nederlandse reisgids, algarve hulp',
      canonical: window.location.href
    });
    
    trackEvent('page_view', 'contact', 'load');
  }, [language, updateSEO, trackEvent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission
    trackEvent('form_submit', 'contact', 'contact_form');
    
    // Mock form submission
    toast.success(
      language === 'nl' 
        ? 'Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.'
        : 'Thank you for your message! We\'ll get back to you as soon as possible.'
    );
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            {language === 'nl' ? 'Contact' : 'Contact'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {language === 'nl' 
              ? 'We helpen graag met je vragen over de Algarve'
              : 'We\'re happy to help with your questions about the Algarve'
            }
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                {language === 'nl' ? 'Laten we praten!' : 'Let\'s talk!'}
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-gray-600">info@lokaalgenieten-algarve.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <MessageSquare className="w-8 h-8 text-green-600" />
                    <div>
                      <h3 className="font-bold mb-1">
                        {language === 'nl' ? 'Sociale Media' : 'Social Media'}
                      </h3>
                      <p className="text-gray-600">
                        Instagram: @lokaalalgarve<br />
                        Facebook: Lokaal Genieten Algarve
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-bold mb-3">
                  {language === 'nl' ? 'Veel gestelde vragen' : 'Frequently asked questions'}
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• {language === 'nl' ? 'Beste reistijd voor de Algarve' : 'Best time to visit the Algarve'}</li>
                  <li>• {language === 'nl' ? 'Goedkoopste vluchten zoeken' : 'Finding cheapest flights'}</li>
                  <li>• {language === 'nl' ? 'Autohuur tips en trucs' : 'Car rental tips and tricks'}</li>
                  <li>• {language === 'nl' ? 'Lokale geheime plekjes' : 'Local secret spots'}</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  {language === 'nl' ? 'Stuur ons een bericht' : 'Send us a message'}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'nl' ? 'Naam' : 'Name'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={language === 'nl' ? 'Je naam' : 'Your name'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={language === 'nl' ? 'je@email.com' : 'your@email.com'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'nl' ? 'Onderwerp' : 'Subject'}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">
                        {language === 'nl' ? 'Kies een onderwerp' : 'Choose a subject'}
                      </option>
                      <option value="question">
                        {language === 'nl' ? 'Vraag over de Algarve' : 'Question about the Algarve'}
                      </option>
                      <option value="tip">
                        {language === 'nl' ? 'Tip delen' : 'Share a tip'}
                      </option>
                      <option value="feedback">
                        {language === 'nl' ? 'Feedback over de website' : 'Website feedback'}
                      </option>
                      <option value="collaboration">
                        {language === 'nl' ? 'Samenwerking' : 'Collaboration'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'nl' ? 'Bericht' : 'Message'}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={language === 'nl' ? 'Vertel ons je vraag of opmerking...' : 'Tell us your question or comment...'}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    {language === 'nl' ? 'Verzenden' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;