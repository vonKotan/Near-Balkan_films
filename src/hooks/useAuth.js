// Firebase Config
import { app, database } from '../firebase/config';
import { setDoc, doc, getDoc, getDocFromCache } from 'firebase/firestore';

// Firebase functions
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

// React Hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  // Get auth from firebase
  const auth = getAuth(app);

  auth.languageCode = 'eng';

  // Set redirect URL to localhost
  const actionCodeSettings = {
    url: 'https://moviereviews-yago.vercel.app/',
  };

  const googleSignIn = async () => {
    await signInWithPopup(getAuth(), provider);
    await checkFirstSignIn();
  }

  const registerUser = async (user) => {
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password,
      );
      await checkFirstSignIn();
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }

  }

  const checkFirstSignIn = async () => {
    const doc = await getUser();
    if (!doc) {
      navigate("/register/info");
    } else console.log(doc);
    console.log(doc);
  }

  // Function to register and login new users
  const registerUserInfo = async (userInfo) => {
    setLoading(true);

    try {
      const userId = auth.currentUser.uid;

      //create doc in our database with the same id as the auth object
      await setDoc(doc(database, 'users', userId), userInfo)

      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  // Function to login users
  const signInUser = async (email, password) => {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      checkFirstSignIn();
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  // Function to logout users
  const signOutUser = () => {
    signOut(auth);
  };

  // Function to send reset password email for users
  const resetPassword = async (email) => {
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      setMessage(
        'E-mail de recuperação enviado com sucesso, por favor verifique sua caixa de entrada ou spam.',
      );
      setLoading(false);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      setLoading(false);
    }
  };
  //function the retrieve the current users data from our database based on the auth object
  //can be used later when we want to display things based on the users type
  const getUser = async () => {
    const uid = auth?.currentUser?.uid;
    if(!uid) return false;
    const docRef = doc(database, "users", uid);
    let document;
    //if it is cached try to get it from the cache

    try {
      document = await getDocFromCache(docRef);
      //if the doc was not cached it throws an error and we read it from the database
    } catch (err) {
      document = await getDoc(docRef)
    }
    if (document.exists()) {
      return document.data();
    } else return false;
  }

  return {
    auth,
    registerUser,
    registerUserInfo,
    googleSignIn,
    signInUser,
    signOutUser,
    resetPassword,
    message,
    error,
    loading,
    onAuthStateChanged,
    getUser
  };
};
