// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFDNdU6IKqmzfsjh7lhz-vSv6UsSrB3wI",
  authDomain: "codermaster-79114.firebaseapp.com",
  projectId: "codermaster-79114",
  storageBucket: "codermaster-79114.appspot.com",
  messagingSenderId: "722072690750",
  appId: "1:722072690750:web:37e1760221e6a86fa1716f",
  measurementId: "G-9KYRP2WL4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;