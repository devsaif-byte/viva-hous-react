import { Badge, Button } from 'flowbite-react';
import React from 'react';

const BookingCard = () => {
  return (
    <div className="mx-auto p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Price:</h2>
        <Badge>For Sale</Badge>
      </div>
      <div className="mb-6">
        <p className="text-4xl font-bold text-rose-600">$45,231</p>
      </div>
      <div className="mb-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600">Days on Hously</p>
          <p className="font-semibold">124 Days</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Price per sq ft</p>
          <p className="font-semibold">$186</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-600">Monthly Payment (estimate)</p>
        <p className="font-semibold">$1497/Monthly</p>
      </div>
      <div className="flex gap-4">
        <Button className="w-full bg-green-500 text-white hover:bg-green-600">Book Now</Button>
        <Button className="w-full bg-green-500 text-white hover:bg-green-600">Offer Now</Button>
      </div>
    </div>
  );
};

export default BookingCard;
