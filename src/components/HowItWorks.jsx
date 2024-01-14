import { Card } from 'flowbite-react';
import React from 'react';

const HowItWorks = () => {
  return (
    <section className=" bg-white ">
      <div className="container mx-auto flex flex-col justify-center px-4 py-20 md:justify-items-center md:px-0">
        <h1 className="mb-2 mt-10 text-5xl font-bold uppercase text-teal-400">How it works</h1>
        <h3 className="border-b pb-3 text-2xl uppercase ">
          A great plateform to buy, sell and rent your properties without any agent or commisions.
        </h3>

        <div className="grid gap-8 py-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card
            href="#"
            className="w-full rounded-none border-none text-center text-gray-500 shadow-none hover:bg-teal-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-google-home mx-auto text-teal-400"
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
              <path d="M19.072 21h-14.144a1.928 1.928 0 0 1 -1.928 -1.928v-6.857c0 -.512 .203 -1 .566 -1.365l7.07 -7.063a1.928 1.928 0 0 1 2.727 0l7.071 7.063c.363 .362 .566 .853 .566 1.365v6.857a1.928 1.928 0 0 1 -1.928 1.928z" />
              <path d="M7 13v4h10v-4l-5 -5" />
              <path d="M14.8 5.2l-11.8 11.8" />
              <path d="M7 17v4" />
              <path d="M17 17v4" />
            </svg>
            <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">Evaluate Property</h5>
            <p className="text-justify font-normal text-gray-700 dark:text-gray-400">
              If the distribution of letters and 'words' is random, the reader will not be distracted from making.
            </p>
          </Card>
          <Card
            href="#"
            className="w-full rounded-none border-none text-center text-gray-500 shadow-none hover:bg-teal-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-briefcase mx-auto text-teal-400"
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
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <path d="M12 12l0 .01" />
              <path d="M3 13a20 20 0 0 0 18 0" />
            </svg>
            <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">Meeting with Agent</h5>
            <p className="text-justify font-normal text-gray-700 dark:text-gray-400">
              If the distribution of letters and 'words' is random, the reader will not be distracted from making.
            </p>
          </Card>
          <Card
            href="#"
            className="w-full rounded-none border-none text-center text-gray-500 shadow-none hover:bg-teal-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-key mx-auto text-teal-400"
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
              <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" />
              <path d="M15 9h.01" />
            </svg>
            <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">Close the Deal</h5>
            <p className="text-justify font-normal text-gray-700 dark:text-gray-400">
              If the distribution of letters and 'words' is random, the reader will not be distracted from making.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
