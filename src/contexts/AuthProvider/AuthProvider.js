import React, { createContext, useEffect, useState } from 'react';
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
     setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password);
  };
  
    const providerLogin = (provider) => {
      setLoading(true);
      return signInWithPopup(auth, provider);
    };

  const login = (email, password) => {
     setLoading(true);
     return signInWithEmailAndPassword(auth, email, password);
   };

  const logOut = () => {
     return signOut(auth);
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (
        currentUser === null ||
        currentUser.email ||
        currentUser.uid
      ) {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setLoading,
    loading,
    createUser,
    login,
    logOut,
    providerLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;