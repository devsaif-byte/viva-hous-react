import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { signOutUser, userStateObserver } from '../authentication/firebase';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [userType, setUserType] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/newRegisteredUser/${currUser?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserType(data.data);
      });
  }, [currUser]);

  useEffect(() => {
    const unsubscribe = userStateObserver((user) => {
      console.log('Observing the user:', user);
      setCurrUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, [setCurrUser]);

  const signOut = () => {
    signOutUser();
    navigate('/');
    setCurrUser(null);
    setIsLoading(false);
  };

  const value = {
    currUser,
    setCurrUser,
    userType,
    signOut,
    isLoading,
    setIsLoading,
    error,
    setError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
