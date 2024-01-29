import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { app } from './firebase.config';

const auth = getAuth(app);
// validation
export const createUser = async (email, password) => {
  if (!email && !password) return;
  // create new user
  const result = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      sendUserToDb(email, password);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error creating user:', errorCode, errorMessage);
      throw error;
    });
  console.log(result);
};

export const signInUser = async (email, password) => {
  if (!email || !password) return;

  const result = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.error(errorMessage);
    });

  console.log(result);
};

// sign-out user
export const signOutUser = async () =>
  await signOut(auth)
    .then(() => {})
    .catch((error) => {
      const errorMessage = error.message;
      console.error(errorMessage);
    });

// state synchronizer
export const userStateObserver = (callback) => onAuthStateChanged(auth, callback);

const sendUserToDb = async (email, password) => {
  try {
    const newUser = { email, password };
    const response = await fetch('http://localhost:3000/newRegisteredUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error sending user to the database:', error.message);
  }
};
