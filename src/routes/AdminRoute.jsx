import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import { Navigate, useLocation, useNavigation } from 'react-router-dom';
import Loader from '../ui/Loader';

const AdminRoute = ({ children }) => {
  const { currUser, isLoading, userType } = useContext(AuthContext);
  console.log(currUser);

  const location = useLocation();

  if (!currUser && !isLoading) return <Navigate to="/login" state={{ from: location }} replace />;

  if (!userType?.role) return <Navigate to="/" />;
  if (currUser && userType?.role === 'admin') return children;
  return <Loader />;
};

export default AdminRoute;
