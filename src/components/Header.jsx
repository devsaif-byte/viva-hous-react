import React from 'react';
import bgImage from '../../public/images/bg-main.webp';

const Header = () => {
  return (
    <>
      <div
        className="absolute -z-10 h-svh w-full bg-cover bg-fixed bg-center brightness-50"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <section className="container relative mx-auto flex h-96 flex-col items-center justify-center py-40 text-center text-white">
        <h1 className="my-8 text-4xl font-bold md:text-8xl">Find Your Dream House</h1>
        <h3 className="text-md font-semibold md:text-4xl">We Have Over Million Properties For You.</h3>
      </section>
    </>
  );
};

export default Header;
