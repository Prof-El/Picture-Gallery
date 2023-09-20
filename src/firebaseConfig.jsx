// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCaTkDQQII0OBcl4rNjPuGn-EqPe-4zTc",
  authDomain: "movie-app-f3317.firebaseapp.com",
  projectId: "movie-app-f3317",
  storageBucket: "movie-app-f3317.appspot.com",
  messagingSenderId: "473389987584",
  appId: "1:473389987584:web:326ee83f8129aaf54d65e5",
  measurementId: "G-KHGCVKQ42K"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);