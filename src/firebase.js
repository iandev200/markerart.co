// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH-zi8uwBpkdwBjXMJkmnZ6F0-_96OjeI",
  authDomain: "marker-8fe21.firebaseapp.com",
  projectId: "marker-8fe21",
  storageBucket: "marker-8fe21.appspot.com",
  messagingSenderId: "549805796477",
  appId: "1:549805796477:web:466e56bcf33e0f84051514",
  measurementId: "G-1M3JQXCB05",
};

// Initialize Firebase
const fbapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fbapp);
const db = getFirestore(fbapp);
export default db;
