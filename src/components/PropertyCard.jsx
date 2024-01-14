// 'use client';

import { Button, Card } from 'flowbite-react';

export function PropertyCard({ props }) {
  return (
    <Card
      className="w-full rounded-none border-none shadow-none transition-shadow hover:shadow-md"
      imgSrc="../../images/item-01.webp"
      horizontal
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="text-justify font-normal leading-5 tracking-normal text-gray-500 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <Button size="sm" gradientDuoTone="greenToBlue" className="w-2/4 rounded-none">
        Read More...
      </Button>
    </Card>
  );
}
