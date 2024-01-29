import React from 'react';
import BookingCard from '../components/BookingCard';
import { useLocation } from 'react-router-dom';
import Error from '../components/Error';

const PropertyDetails = () => {
  const location = useLocation();
  const data = location?.state?.propertyData;
  const { id, image, type, status, price, location: propertyLocation, specification, description } = data;

  if (!data) return <Error />;

  return (
    <section className="bg-neutral-50">
      <div className="container mx-auto px-4 py-10 md:px-0">
        <img src="" alt="" />
        <div className="box-border grid gap-10 p-6 md:grid-cols-[2fr_1fr] md:p-0">
          <div className="">
            <img className="bg-cover md:h-96" src={image} alt="" />
            <h1 className="my-6 text-3xl font-bold text-teal-400">{propertyLocation}</h1>
            <span className="mr-10 text-2xl font-bold tracking-wide text-rose-500 ">{specification.area}sqf</span>
            <span className="mr-10 text-2xl font-bold tracking-wide text-rose-500 ">{specification.beds} Beds</span>
            <span className="mr-10 text-2xl font-bold tracking-wide text-rose-500 ">{specification.baths} Baths</span>
            <p className="mt-10 text-justify font-normal leading-relaxed tracking-wider text-gray-500">
              <h2>What Are Types of Real Estate?</h2>
              <p>
                <strong>Residential real estate:</strong> Any property used for residential purposes. Examples include
                single-family homes, condos, cooperatives, duplexes, townhouses, and multifamily residences.
              </p>
              <p>
                <strong>Commercial real estate:</strong> Any property used exclusively for business purposes, such as
                apartment complexes, gas stations, grocery stores, hospitals, hotels, offices, parking facilities,
                restaurants, shopping centers, stores, and theaters.
              </p>
              <p>
                <strong>Industrial real estate:</strong> Any property used for manufacturing, production, distribution,
                storage, and research and development.
              </p>
              <p>
                <strong>Land:</strong> Includes undeveloped property, vacant land, and agricultural lands such as farms,
                orchards, ranches, and timberland.
              </p>
              <p>
                <strong>Special purpose:</strong> Property used by the public, such as cemeteries, government buildings,
                libraries, parks, places of worship, and schools.
              </p>

              <h2>The Economics of Real Estate</h2>
              <p>
                Real estate is a critical driver of economic growth in the U.S., and housing starts, the number of new
                residential construction projects in any given month, released by the U.S. Census Bureau, is a key
                economic indicator. The report includes building permits, housing starts, and housing completions data,
                for single-family homes, homes with 2-4 units, and multifamily buildings with five or more units, such
                as apartment complexes.
              </p>
              {/* Add more content as needed */}

              <h2>How to Invest in Real Estate</h2>
              <p>
                Some of the most common ways to invest in real estate include homeownership, investment or rental
                properties, and house flipping.
              </p>
              {/* Add more content as needed */}

              <h2>What We Like</h2>
              <p>Liquidity, Diversification, Steady dividends, Risk-adjusted returns</p>

              <h2>What We Don't Like</h2>
              <p>Low growth/low capital appreciation, Not tax-advantaged, Subject to market risk, High fees</p>
            </p>
          </div>
          <div className="relative">
            <BookingCard
              type={type}
              status={status}
              price={price}
              area={specification.area}
              description={description}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
