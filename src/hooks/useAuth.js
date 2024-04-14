// Firebase Config
import { app , database} from '../firebase/config';
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
} from 'firebase/auth';

// React Hooks
import { useState } from 'react';

export const useAuth = () => {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // Get auth from firebase
  const auth = getAuth(app);
  // Change firebase messages language to brazilian portuguese
  auth.languageCode = 'pt-BR';

  // Set redirect URL to localhost
  const actionCodeSettings = {
    url: 'https://moviereviews-yago.vercel.app/',
  };

  // Function to register and login new users
  const registerUser = async (email, password, username, firstName, lastName, phoneNumber, userType, birthDate) => {
    setLoading(true);

    try {
      //create auth user object
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      
      await updateProfile(user, { displayName: firstName + lastName });
      //create doc in our database with the same id as the auth object
      await setDoc(doc(database, 'users', user.uid), {
        userName:username,
        firstName:firstName,
        lastName:lastName,
        phoneNumber:phoneNumber,
        userType:userType,
        birthDate:birthDate
      })
      
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
  const getUser= async () => {
    const uid = auth.currentUser.uid;
    const docRef = doc(database, "users", uid);
     //if it is cached try to get it from the cache
    try {
      return await getDocFromCache(docRef);
    //if the doc was not cached it throws an error and we read it from the database
    } catch (err){
      return await getDoc(docRef )
    }
  }

  return {
    auth,
    registerUser,
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
