import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WebLayout from './ui/WebLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './routes/Protected';
import Error from './components/Error';
import Properties from './pages/Properties';
import Checkout from './pages/Checkout';
import BookingSuccess from './pages/BookingSuccess';
import DashboardLayout from './ui/DashboardLayout';
import MakeAdmin from './dashboard/components/MakeAdmin';
import UserBookings from './dashboard/components/UserBookings';
import AdminRoute from './routes/AdminRoute';

const router = createBrowserRouter([
  {
    element: <WebLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/properties',
        element: (
          <PrivateRoute>
            <Properties />
          </PrivateRoute>
        ),
      },
      {
        path: 'properties/:id',
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
        errorElement: <Error />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/checkout',
        element: (
          <PrivateRoute>
            <Checkout />,
          </PrivateRoute>
        ),
      },
      {
        path: '/bookingSuccess',
        element: <BookingSuccess />,
        errorElement: <Error />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },

  {
    element: <DashboardLayout />,
    path: '/dashboard',
    errorElement: <Error />,

    children: [
      {
        index: true,
        path: 'myBookings',
        element: <UserBookings />,
        errorElement: <Error />,
      },
      {
        path: 'makeAdmin',
        element: (
          <AdminRoute>
            <MakeAdmin />
          </AdminRoute>
        ),
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
