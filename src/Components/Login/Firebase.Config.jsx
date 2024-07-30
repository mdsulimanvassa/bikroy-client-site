import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQDdabnCRzIpEkSVab_RbCFdp19O3Yrq8",
  authDomain: "bikroy-5ed98.firebaseapp.com",
  projectId: "bikroy-5ed98",
  storageBucket: "bikroy-5ed98.appspot.com",
  messagingSenderId: "149599886624",
  appId: "1:149599886624:web:74dfa0f33d1e3eb3894b45"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;