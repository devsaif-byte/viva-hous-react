// 'use client';

import { Button, Card } from 'flowbite-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function PropertyCard(item) {
  const [data] = useState(item);
  const specification = data?.item?.specification || {};
  return (
    <Card
      className="w-full rounded-none border shadow-none transition-shadow hover:shadow-md"
      imgSrc={data?.item?.image}
      horizontal
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">{data.item.location}</h5>
      <p className="border-y border-teal-500 py-2 text-justify font-normal leading-5 tracking-normal text-gray-500 dark:text-gray-400">
        Area: {specification.area}sqf, Beds: {specification.beds}, Baths: {specification.baths}
      </p>
      <Link to={`/properties/${data.item.id}`} state={{ propertyData: data.item }}>
        <Button size="sm" className="w-2/4 rounded-none">
          Read More...
        </Button>
      </Link>
    </Card>
  );
}
