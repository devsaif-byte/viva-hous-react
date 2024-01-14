import React from 'react';
import bgImg from '/images/bg-2.webp';
import Testimonials from '../components/Testimonials';
const About = () => {
  return (
    <>
      <section>
        <div
          className="h-60 w-full bg-cover bg-fixed bg-center bg-no-repeat brightness-50"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        <div className="container mx-auto mb-20 mt-8">
          <h1 className="mt-2 text-5xl font-bold uppercase text-teal-400 brightness-100 ">About our company</h1>
          <h3 className="mt-2 border-b pb-3 text-2xl uppercase">Efficiency. Transparency. Control.</h3>
          <div className="text-justify font-normal leading-relaxed tracking-wider text-gray-500">
            <p className="mb-4 mt-10">
              VivaHous developed a platform for the Real Estate marketplace that allows buyers and sellers to easily
              execute a transaction on their own. The platform drives efficiency, cost transparency and control into the
              hands of the consumers. VivaHous is Real Estate Redefined.
            </p>
            <p className="mb-4">
              Embark on a transformative journey with VivaHous, a visionary force in the realm of real estate that
              stands as a beacon of efficiency, transparency, and control. Our company is driven by a mission to reshape
              the traditional dynamics of real estate transactions, placing the power directly in the hands of buyers
              and sellers. The VivaHous platform is a testament to innovation, providing a seamless, user-friendly
              experience that allows individuals to navigate the complexities of real estate transactions independently.
              We understand that the process of buying or selling a property can be daunting, and that's why we've
              developed a platform that not only streamlines the entire experience but also promotes transparency in
              costs. Our commitment to transparency means that our users have a comprehensive understanding of the
              financial aspects associated with their transactions, fostering trust and clarity in every step of the
              journey.
            </p>
            <p className="mb-4">
              Embark on a transformative journey with VivaHous, a visionary force in the realm of real estate that
              stands as a beacon of efficiency, transparency, and control. Our company is driven by a mission to reshape
              the traditional dynamics of real estate transactions, placing the power directly in the hands of buyers
              and sellers. The VivaHous platform is a testament to innovation, providing a seamless, user-friendly
              experience that allows individuals to navigate the complexities of real estate transactions independently.
              We understand that the process of buying or selling a property can be daunting, and that's why we've
              developed a platform that not only streamlines the entire experience but also promotes transparency in
              costs. Our commitment to transparency means that our users have a comprehensive understanding of the
              financial aspects associated with their transactions, fostering trust and clarity in every step of the
              journey. At VivaHous, we go beyond being just a real estate platform; we are architects of change,
              redefining the landscape of real estate with a forward-thinking approach. We believe in empowering our
              users with control, enabling them to make well-informed decisions with confidence. Our vision extends
              beyond the transactional aspect; it's about creating a community where individuals can navigate the real
              estate market with ease, armed with knowledge and the tools needed to succeed.
            </p>
            <p className="mb-4">
              Join us in the revolution that is VivaHous, where the intersection of cutting-edge technology and the real
              estate industry creates a space for innovation. As pioneers in this space, we invite you to experience a
              new era in real estate – one that is marked by efficiency, transparency, and a newfound sense of control.
              Welcome to VivaHous, where your real estate journey becomes a seamless and empowering adventure.
            </p>
          </div>
        </div>

        <Testimonials />
      </section>
    </>
  );
};

export default About;
