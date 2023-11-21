import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './FirebaseConfig'

const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
  prompt : "select_account "
});

//apply the default browser language preference
auth.useDeviceLanguage();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//for mobile it is better to use redirect
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
