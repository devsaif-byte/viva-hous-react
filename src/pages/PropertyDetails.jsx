import React from 'react';
import BookingCard from '../components/BookingCard';

const PropertyDetails = () => {
  // const { address, specifications, description } = item;
  return (
    <section className="bg-neutral-50">
      <div className="container mx-auto px-4 py-20 md:px-0">
        <img src="" alt="" />
        <div className="box-border grid gap-10 bg-white p-6 md:grid-cols-[2fr_1fr]">
          <div className="">
            <img
              className="bg-cover md:h-96"
              src="https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg"
              alt=""
            />
            <h1 className="my-6 text-3xl font-bold text-teal-400">10765 Hillshire Ave, Baton Rouge, LA 70810, USA</h1>
            <span className="mr-10 text-2xl font-bold tracking-wide text-rose-500 ">8000sqf</span>
            <span className="mr-10 text-2xl font-bold tracking-wide text-rose-500 ">4 Beds</span>
            <span className="mr-10 text-2xl font-bold tracking-wide text-rose-500 ">2 Baths</span>
            <p className="mt-10 text-justify font-normal leading-relaxed tracking-wider text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ullam perspiciatis odio quos reprehenderit
              laudantium quasi sit ratione, laboriosam expedita architecto necessitatibus possimus assumenda quod eaque
              consequatur adipisci. Ad quis vel aliquam magni libero? Rem aperiam impedit eius eum exercitationem
              corrupti optio minus, qui placeat fuga labore. Laborum aspernatur facere deleniti nobis similique neque
              explicabo dicta nesciunt tempora, corrupti iste sequi quasi eos, cum rerum voluptas commodi ad praesentium
              dolorum, deserunt molestiae. Doloremque nostrum eius illo soluta laudantium. Possimus ducimus dignissimos
              delectus at iusto iste, blanditiis voluptatum voluptatibus earum sapiente nesciunt porro, suscipit nemo.
              Dolore assumenda at ut voluptas eum!
            </p>
          </div>
          <div className="sticky">
            <BookingCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
