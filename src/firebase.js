import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
