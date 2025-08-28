import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBIUNE0ySkJIN27c_HS9_y5AOqvnTV9CQQ",
    authDomain: "firabase-education.firebaseapp.com",
    projectId: "firabase-education",
    storageBucket: "firabase-education.firebasestorage.app",
    messagingSenderId: "162119662402",
    appId: "1:162119662402:web:dbe17937b45c8a57ce26db"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);