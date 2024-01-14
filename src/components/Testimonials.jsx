import { Avatar } from 'flowbite-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';

import 'swiper/css/bundle';

export default function Testimonials() {
  const slides = new Array(5).fill(null);
  return (
    <section className="overflow-hidden bg-neutral-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-start">
          <h1 className="text-5xl font-bold uppercase text-teal-400">Clients Testimonials</h1>
          <h3 className="mt-4 border-b pb-3 text-2xl uppercase ">We collect reviews from our customers.</h3>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {slides.map((_, i) => (
            <SwiperSlide key={i}>
              <div className="mt-12 flex flex-wrap justify-center gap-8 transition-transform duration-500">
                <div className="h-fit max-w-2xl p-10 transition-shadow hover:shadow-lg">
                  <blockquote className="text-xl italic text-gray-600">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna. Ut enim ad minim veniam."
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <Avatar rounded />
                    <div className="ml-4">
                      <p className="font-semibold">Lisa Smith</p>
                      <p className="text-md text-gray-600">New York</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
            <div className="mt-12 flex flex-wrap justify-center gap-8 transition-transform duration-500">
              <div className="h-fit max-w-2xl p-10 transition-shadow hover:shadow-lg">
                <blockquote className="text-xl italic text-gray-600">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna. Ut enim ad minim veniam."
                </blockquote>
                <div className="mt-4 flex items-center">
                  <Avatar rounded />
                  <div className="ml-4">
                    <p className="font-semibold">Lisa Smith</p>
                    <p className="text-md text-gray-600">New York</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
}
