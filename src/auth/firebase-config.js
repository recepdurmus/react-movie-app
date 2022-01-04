import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCDTYCcFJwYQ6ulRiMK7WChGogXLyAAFt8",
  authDomain: "react-movie-app-b7244.firebaseapp.com",
  projectId: "react-movie-app-b7244",
  storageBucket: "react-movie-app-b7244.appspot.com",
  messagingSenderId: "328453758639",
  appId: "1:328453758639:web:fcbdc1141a4ad564063e5a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);