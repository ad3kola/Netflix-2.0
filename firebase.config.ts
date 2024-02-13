import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
  
const firebaseConfig = {
  apiKey: 'AIzaSyCWWYC4ViMsDSweZj9Bxh4Zv9OPM3EGowk',
  authDomain:
    "instagram---facebook---twitter.firebaseapp.com",
  projectId: "instagram---facebook---twitter",
  storageBucket:
    "instagram---facebook---twitter.appspot.com",
  messagingSenderId: "544640961165",
  appId: '1:544640961165:web:93ef7c0dd50d23d53af0c4',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)