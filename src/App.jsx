import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import FeatureProperty from './pages/FeatureProperty';
import PropertyDetails from './pages/PropertyDetails';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/property',
        element: <FeatureProperty />,
      },
      {
        path: '/property/id',
        element: <PropertyDetails />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
