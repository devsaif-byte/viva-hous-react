import React from 'react';
import { Footer } from 'flowbite-react';

const FooterSection = () => {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 md:px-0">
        <Footer container className="px-0 shadow-none">
          <Footer.Copyright className=" text-teal-500" href="#" by="Developed by Saif" year={2024} />
        </Footer>
      </div>
    </section>
  );
};

export default FooterSection;
