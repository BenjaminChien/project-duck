// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYjcRRKzfverE8E3FKDZ6ZvgbtE_S579Y",
  authDomain: "project-duck-b5f0e.firebaseapp.com",
  projectId: "project-duck-b5f0e",
  storageBucket: "project-duck-b5f0e.appspot.com",
  messagingSenderId: "606237553571",
  appId: "1:606237553571:web:0fd5fe7079641e3c266016",
  measurementId: "G-CB94Q0GZHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);