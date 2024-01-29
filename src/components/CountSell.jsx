import { Card } from 'flowbite-react';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const CountSell = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
      <section className="bg-neutral-50">
        <div className="container mx-auto px-4 py-20 text-gray-500 md:px-0">
          <h1 className="mb-2 mt-10 text-5xl font-bold uppercase text-teal-400">Trusted by more than 10k customers</h1>
          <h3 className="border-b pb-3 text-2xl uppercase ">
            A great plateform to buy, sell and rent your properties without any agent or commisions.
          </h3>
          <div className="grid gap-8 py-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card className="w-full rounded-none bg-inherit text-center shadow-none">
              <h5 className="text-5xl font-bold tracking-tight text-teal-400 dark:text-white">
                {countOn && <CountUp start={0.0} end={10527} duration={3} />}+
              </h5>
              <p className="text-xl font-bold text-gray-600 dark:text-gray-400">Properties Sell</p>
            </Card>
            <Card className="w-full rounded-none bg-inherit text-center shadow-none">
              <h5 className="text-5xl font-bold tracking-tight text-teal-400 dark:text-white">
                {countOn && <CountUp start={0} end={62} duration={3} />}
              </h5>
              <p className="text-xl font-bold text-gray-600 dark:text-gray-400">Award Gained</p>
            </Card>
            <Card className="w-full rounded-none bg-inherit text-center shadow-none">
              <h5 className="text-5xl font-bold tracking-tight text-teal-400 dark:text-white">
                {countOn && <CountUp start={0} end={27} duration={3} />}+
              </h5>
              <p className="text-xl font-bold text-gray-600 dark:text-gray-400">Years Experience</p>
            </Card>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default CountSell;
