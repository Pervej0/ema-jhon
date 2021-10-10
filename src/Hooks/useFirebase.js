import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Components/firebase/firebase.init";

firebaseAuthentication();
const useFirebse = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState();

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth).then(() => {});
  };

  useEffect(() => onAuthStateChanged(auth, (user) => setUser(user)), []);

  return { user, error, googleSignIn, logOut };
};

export default useFirebse;
