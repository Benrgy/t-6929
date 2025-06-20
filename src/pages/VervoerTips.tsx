
import React from 'react';
import TransportOptions from '../components/transport/TransportOptions';
import BudgetTips from '../components/transport/BudgetTips';
import BestTimeToVisit from '../components/transport/BestTimeToVisit';
import LocalContact from '../components/transport/LocalContact';

const VervoerTips = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Vervoer & Praktische Tips
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reis slim en goedkoop door de Algarve. Ontdek hoe je als local reist, 
            geld bespaart en de mooiste plekken bereikt zonder toeristische valkuilen.
          </p>
        </div>

        <TransportOptions />
        <BudgetTips />
        <BestTimeToVisit />
        <LocalContact />
      </div>
    </div>
  );
};

export default VervoerTips;
