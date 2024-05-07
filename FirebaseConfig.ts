// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkURp11LJ1keb2QItm6RY_v4l8lQvafUk",
  authDomain: "authreact-d1b4a.firebaseapp.com",
  projectId: "authreact-d1b4a",
  storageBucket: "authreact-d1b4a.appspot.com",
  messagingSenderId: "4833965017",
  appId: "1:4833965017:web:628d5bc2d158c63d9e1fc8"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    });;
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);