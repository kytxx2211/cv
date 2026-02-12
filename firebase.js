// firebase.js
import { initializeApp } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

import { getStorage }
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

const firebaseConfig = {
  // // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP5VcUyWDnSqvcgMKJuIsolIJDVX32JqE",
  authDomain: "catnapstudio-b3052.firebaseapp.com",
  projectId: "catnapstudio-b3052",
  storageBucket: "catnapstudio-b3052.firebasestorage.app",
  messagingSenderId: "957397782595",
  appId: "1:957397782595:web:9a3744fc5a3955e62704f6",
  measurementId: "G-K4Y5QRBFWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
