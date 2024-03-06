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
// With async await & try then catch callback
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
// With async await & try catch block
export const signInUser = async (email, password) => {
  if (!email || !password) return null;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error code: ${errorCode}, Error message: ${errorMessage}`);

    if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
      return 'Invalid email or password';
    } else return 'An unexpected error occurred. Please try again later.';
  }
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
const baseURL = import.meta.env.VITE_BASE_URL;

const sendUserToDb = async (email, password) => {
  try {
    const newUser = { email, password };
    const response = await fetch(`${baseURL}/newRegisteredUser`, {
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
