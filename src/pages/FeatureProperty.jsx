import React from 'react';
import { PropertyCard } from '../components/PropertyCard';

const FeatureProperty = () => {
  const items = Array(6).fill(null);
  return (
    <div className="bg-neutral-50 py-20">
      <div className="container mx-auto flex flex-col justify-center px-4 md:px-0">
        <h2 className="text-2xl uppercase">Properties</h2>
        <h1 className="mb-10 mt-2 text-5xl font-bold uppercase text-teal-400">For sale</h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <PropertyCard key={index} />
          ))}
        </div>
        <p className="mt-8 text-center font-semibold hover:text-teal-500 hover:underline">
          View more properties &rarr;
        </p>
      </div>
    </div>
  );
};

export default FeatureProperty;
