import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDaaSx2jBlVYBa1q73--gnXt6r0jOBdP5M',
  authDomain: 'viva-haus-573d8.firebaseapp.com',
  projectId: 'viva-haus-573d8',
  storageBucket: 'viva-haus-573d8.appspot.com',
  messagingSenderId: '760436842665',
  appId: '1:760436842665:web:3e7127119911a99a42c9b8',
  measurementId: 'G-N50TPECYQP',
};

// Initialize Firebase

if (!firebaseConfig || !firebaseConfig.apiKey) {
  throw new Error(
    'No Firebase configuration object provided.' +
      '\n' +
      "Add your web app's configuration object to firebase-config.js/.ts",
  );
}

export const app = initializeApp(firebaseConfig);
