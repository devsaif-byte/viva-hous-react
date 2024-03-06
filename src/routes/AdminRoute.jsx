import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../ui/Loader';

const AdminRoute = ({ children }) => {
  const { currUser, isLoading, userType } = useContext(AuthContext);

  const location = useLocation();

  if (!currUser && !isLoading) return <Navigate to="/login" state={{ from: location }} replace />;

  if (!userType?.admin) return <Navigate to="/" />;
  if (currUser && userType?.admin === true) return children;
  return <Loader />;
};

export default AdminRoute;
