import React, { useEffect, useState } from 'react';
import { PropertyCard } from '../components/PropertyCard';
import db from '../details.json';
import { Pagination } from 'flowbite-react';
import axios from 'axios';

const Properties = ({ maxItems }) => {
  const [details, setDetails] = useState(db);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    async function sendData() {
      try {
        await axios.post('http://localhost:3000/properties', { data: details });
      } catch (error) {
        console.error('Error fetching properties:', error.message);
      }
    }
    sendData();
  }, [details]);

  return (
    <div className="bg-neutral-50 py-20">
      <div className="container mx-auto flex flex-col justify-center px-4 md:px-0">
        <h2 className="text-2xl uppercase">Properties</h2>
        <h1 className="mb-10 mt-2 text-5xl font-bold uppercase text-teal-400">For sale</h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {details && details.slice(0, maxItems).map((item, index) => <PropertyCard key={index} item={item} />)}
        </div>

        <div className="mt-10 flex overflow-x-auto sm:justify-center">
          <Pagination
            layout="pagination"
            currentPage={currentPage}
            totalPages={15}
            onPageChange={onPageChange}
            previousLabel="Previous"
            nextLabel="Next"
            showIcons
          />
        </div>
      </div>
    </div>
  );
};

export default Properties;
