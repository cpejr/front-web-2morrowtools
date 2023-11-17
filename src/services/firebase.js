import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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
//     .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//       //const credential = GoogleAuthProvider.credentialFromResult(result);
//       //const token = credential.accessToken;
//     // The signed-in user info.
//       //const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//       //const errorCode = error.code;
//       //const errorMessage = error.message;
//     // The email of the user's account used.
//       //const email = error.customData.email;
//     // The AuthCredential type that was used.
//       //const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });