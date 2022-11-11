// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Used to create google sign in
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// used to get firestore inst and doc/data from db
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIqhfBOpMhzZd0FsD8EMBuPg3ZT45lnM8",
  authDomain: "crwn-clothing-db-v2-8f0fd.firebaseapp.com",
  projectId: "crwn-clothing-db-v2-8f0fd",
  storageBucket: "crwn-clothing-db-v2-8f0fd.appspot.com",
  messagingSenderId: "845827147020",
  appId: "1:845827147020:web:804df4a5d8e17b4f5cb529",
  measurementId: "G-J48RTWS6TJ"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// set up our google auth provider.  others are available. multiples can be registered
const provider = new GoogleAuthProvider();

// force users to select an account from the popup
provider.setCustomParameters({
  prompt: "select_account"
});

// create auth and export.  same for every app.  singleton
export const auth = getAuth();

// create sign in with googlePopUp, pass in auth  and authProvider
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// singleton instance allows us to get or set documents
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userDocRef;
}