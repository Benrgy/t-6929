
import { AlgarveLocation } from '../types/algarve';

export const algarveLocations: AlgarveLocation[] = [
  {
    id: "1",
    name: "Tavira",
    category: "hidden-villages",
    region: "east-algarve",
    description: {
      en: "Authentic town with traditional architecture and peaceful atmosphere",
      nl: "Authentiek stadje met traditionele architectuur en rustige sfeer"
    },
    imageUrl: "/lovable-uploads/07820408-8592-401d-91e6-a1c25deb1cef.png",
    highlights: [
      "Roman bridge",
      "Traditional markets",
      "Ilha de Tavira beach",
      "Camera Obscura"
    ],
    budgetTips: [
      "Visit local markets for fresh produce",
      "Take the ferry to Ilha de Tavira (€2)",
      "Free walking tours available"
    ],
    affiliateLinks: {
      accommodation: "https://booking.com/tavira",
      transport: "https://rentalcars.com/algarve",
      activities: "https://getyourguide.com/tavira"
    },
    localTips: [
      "Best visited early morning or late afternoon",
      "Try the local seafood restaurants near the market",
      "Climb the church tower for panoramic views"
    ],
    accessInfo: {
      transportOptions: ["Bus from Faro", "Train", "Car rental"],
      cost: "€3-15 depending on transport",
      duration: "30-45 minutes from Faro"
    }
  },
  {
    id: "2",
    name: "Benagil Cave",
    category: "beaches-nature",
    region: "central-algarve",
    description: {
      en: "Famous sea cave with natural skylight, accessible by kayak or boat",
      nl: "Beroemde zeegrot met natuurlijk dakraam, bereikbaar per kajak of boot"
    },
    imageUrl: "/lovable-uploads/11f6c604-dd7e-4971-8d55-a247159bc234.png",
    highlights: [
      "Natural cathedral ceiling",
      "Crystal clear waters",
      "Perfect for photography",
      "Snorkeling opportunities"
    ],
    budgetTips: [
      "Book kayak tours in advance for better prices",
      "Visit during shoulder season",
      "Combine with other cave visits"
    ],
    affiliateLinks: {
      activities: "https://getyourguide.com/benagil-cave",
      transport: "https://rentalcars.com/algarve"
    },
    localTips: [
      "Morning tours have better lighting",
      "Bring waterproof camera",
      "Wear comfortable swimwear"
    ],
    accessInfo: {
      transportOptions: ["Kayak tour", "Boat trip", "SUP tour"],
      cost: "€25-45 per person",
      duration: "2-4 hours including transport"
    }
  },
  {
    id: "3",
    name: "Monchique",
    category: "hidden-villages",
    region: "interior",
    description: {
      en: "Mountain village with thermal springs and panoramic views",
      nl: "Bergdorpje met thermale bronnen en panoramische uitzichten"
    },
    imageUrl: "/lovable-uploads/1f6daf6e-7023-4399-9b7b-85dee316066e.png",
    highlights: [
      "Caldas de Monchique spa",
      "Fóia peak viewpoint",
      "Traditional crafts",
      "Local liqueur tasting"
    ],
    budgetTips: [
      "Free hiking trails to Fóia peak",
      "Local restaurants offer great value",
      "Visit the free Saturday market"
    ],
    localTips: [
      "Try the local medronho liqueur",
      "Best views at sunset from Fóia",
      "Explore the eucalyptus forests"
    ],
    accessInfo: {
      transportOptions: ["Car rental", "Bus from Portimão"],
      cost: "€5-20 depending on transport",
      duration: "45 minutes from coast"
    }
  }
];
