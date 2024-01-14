import { Card } from 'flowbite-react';
import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section className=" bg-neutral-50">
      <div className="container mx-auto flex flex-col justify-center px-4 py-20 md:justify-items-center md:px-0">
        <h1 className="mb-2 mt-10 text-5xl font-bold uppercase text-teal-400">Get in touch</h1>
        <h3 className="border-b pb-3 text-2xl uppercase ">
          A great plateform to buy, sell and rent your properties without any agent or commisions.
        </h3>
        {/*  */}
        <div className="container mx-auto border-b py-20">
          <ContactForm />
        </div>
        {/*  */}
        <div className=" grid gap-8 py-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card
            href="#"
            className="w-full rounded-none border-none text-center text-gray-500 shadow-none hover:bg-teal-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-phone mx-auto text-teal-400"
              width={60}
              height={60}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">Phone</h5>
            <p className="text-xl font-bold text-teal-400 dark:text-gray-400">555-LOL-1234</p>
          </Card>
          <Card
            href="#"
            className="w-full rounded-none border-none text-center text-gray-500 shadow-none hover:bg-teal-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail mx-auto text-teal-400"
              width={60}
              height={60}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">Email</h5>
            <p className="text-xl font-bold text-teal-400 dark:text-gray-400">chuckles@laughtermail.com</p>
          </Card>
          <Card
            href="#"
            className="w-full rounded-none border-none text-center text-gray-500 shadow-none hover:bg-teal-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-location mx-auto text-teal-400"
              width={60}
              height={60}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
            <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">Location</h5>
            <p className="text-xl font-bold text-teal-400 dark:text-gray-400">
              Galactic Quadrant ZR-9, Celestial Nexus 7B, Exoplanet Zephyrion Prime
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
