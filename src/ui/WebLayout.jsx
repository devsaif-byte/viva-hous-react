import { Outlet } from 'react-router-dom';
import Nav from '../components/Navbar';
import FooterSection from '../components/Footer';
import { AuthProvider } from '../contexts/authContext';
import { Toaster } from 'react-hot-toast';

const WebLayout = () => {
  return (
    <AuthProvider>
      <div className="h-screen scroll-smooth">
        <Toaster position="top-center" reverseOrder={false} />
        <Nav />
        <main>
          <Outlet />
        </main>
        <FooterSection />
      </div>
    </AuthProvider>
  );
};

export default WebLayout;
