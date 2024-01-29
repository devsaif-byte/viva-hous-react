import React, { useContext, useState } from 'react';
import { AuthContext, AuthProvider } from '../contexts/authContext';
import { Outlet } from 'react-router-dom';
import FooterSection from '../components/Footer';
import { Toaster } from 'react-hot-toast';
import Header from '../dashboard/components/Header';
import SidebarComponent from '../dashboard/components/Sidebar';

const DashboardLayout = () => {
  return (
    <AuthProvider>
      <div className="scroll-smooth">
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        <main className="grid grid-cols-12">
          <SidebarComponent />
          <div className="container col-span-10 mx-auto">
            <Outlet />
          </div>
        </main>
        <FooterSection />
      </div>
    </AuthProvider>
  );
};

export default DashboardLayout;
