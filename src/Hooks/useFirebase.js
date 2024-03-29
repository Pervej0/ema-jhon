import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getIdToken,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Components/firebase/firebase.init";

firebaseAuthentication();
const useFirebse = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth).then(() => {});
  };

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          setIsLoading(false);
          getIdToken(user).then((idToken) =>
            localStorage.setItem("idToken", idToken)
          );
        } else {
          setUser(null);
        }
      }),
    []
  );

  return { user, error, isLoading, googleSignIn, logOut };
};

export default useFirebse;
