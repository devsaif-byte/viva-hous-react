import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Navbar';
import FooterSection from '../components/Footer';

const AppLayout = () => {
  return (
    <div className="h-screen scroll-smooth">
      <Nav />
      <main>
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
};

export default AppLayout;
