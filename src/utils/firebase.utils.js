
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1DMBT8xgskLN1dLgep2oLgJjfiAa-hkg",
  authDomain: "teste-f095d.firebaseapp.com",
  projectId: "teste-f095d",
  storageBucket: "teste-f095d.appspot.com",
  messagingSenderId: "279553131564",
  appId: "1:279553131564:web:cb0ab220159d0367613d89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
    prompt : "select_account "
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);