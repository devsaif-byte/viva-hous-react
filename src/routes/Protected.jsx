import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../ui/Loader';

// const PrivateRoute = ({ component: Component, ...rest }) => {
const PrivateRoute = ({ children }) => {
  const { currUser, isLoading } = useContext(AuthContext);
  const location = useLocation();
  // return currUser ? children : <Navigate to="/login" state={{ from: location }} replace />;
  if (!currUser && !isLoading) return <Navigate to="/login" state={{ from: location }} replace />;

  if (currUser) return children;
  return <Loader />;
};

export default PrivateRoute;
