import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAIT1kzhBDgaU_kZ9OxGNQvY8uwi5RwBzU",
    authDomain: "sitescript1515.firebaseapp.com",
    projectId: "sitescript1515",
    storageBucket: "sitescript1515.appspot.com",
    messagingSenderId: "368060056708",
    appId: "1:368060056708:web:0a2cd358d5d72552ac2ed1",
    measurementId: "G-YM5K75YBLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export { auth, provider };
// const analytics = getAnalytics(app);