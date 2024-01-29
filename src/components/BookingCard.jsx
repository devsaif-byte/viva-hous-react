import { Badge, Button } from 'flowbite-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingCard = ({ type, status, price, area, description }) => {
  const navigate = useNavigate();
  return (
    <div className=" relative mx-auto min-w-80 border bg-white p-6 md:fixed">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Price:</h2>
        {status === 'For Sale' ? (
          <Badge className="inline-block" color="success">
            {status}
          </Badge>
        ) : status === 'For Rent' ? (
          <Badge className="inline-block" color="warning">
            {status}
          </Badge>
        ) : null}
      </div>
      <div className="mb-6">
        <p className="text-4xl font-bold text-rose-600">${price}</p>
      </div>
      <div className="mb-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600">Area</p>
          <p className="font-semibold">{area} SQF</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Type</p>
          <p className="font-semibold">{type}</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-600">Description</p>
        <p className="font-semibold">{description}</p>
      </div>
      <div className="flex gap-4">
        <Button
          onClick={() => navigate('/checkout')}
          className="w-full rounded-none bg-teal-500 text-white hover:bg-teal-600"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default BookingCard;
