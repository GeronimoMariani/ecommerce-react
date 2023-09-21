import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3S09pqKvK6C-k_MahO6QXbODjCOsAqMQ",
  authDomain: "ecommerce-react-7ef86.firebaseapp.com",
  projectId: "ecommerce-react-7ef86",
  storageBucket: "ecommerce-react-7ef86.appspot.com",
  messagingSenderId: "682189783790",
  appId: "1:682189783790:web:9a398cee1e70bfc0eee9ff",
  measurementId: "G-YGZCHBR9KF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
