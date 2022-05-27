import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.RESCT_APP_API_KEY,
    authDomain: process.env.RESCT_APP_AUTH_DOMAIN,
    projectId: process.env.RESCT_APP_PROJECT_ID,
    storageBucket: process.env.RESCT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.RESCT_APP_MESSAGING_SENDER_ID,
    appId: process.env.RESCT_APP_APP_ID,
    measurementId: process.env.RESCT_APP_MEASUREMENT_ID,
  };

// const firebaseConfig = {
//   apiKey: "AIzaSyCqXsgJ93qCvxcy3uBDisyRRlW5l2CYGpU",
//   authDomain: "assignment-12-7020e.firebaseapp.com",
//   projectId: "assignment-12-7020e",
//   storageBucket: "assignment-12-7020e.appspot.com",
//   messagingSenderId: "521362711607",
//   appId: "1:521362711607:web:00f82ff8cdbbd5f5498bb2",
//   measurementId: "G-DS9S0BNXH9",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;




// const firebaseConfig = {
//   apiKey: process.env.RESCT_APP_API_KEY,
//   authDomain: process.env.RESCT_APP_AUTH_DOMAIN,
//   projectId: process.env.RESCT_APP_PROJECT_ID,
//   storageBucket: process.env.RESCT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.RESCT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.RESCT_APP_APP_ID,
//   measurementId: process.env.RESCT_APP_MEASUREMENT_ID,
// };

