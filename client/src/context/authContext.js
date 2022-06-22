import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  updateEmail,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import initializeAuthentication from "../components/Authentication/Firebase/firebase.initialize";

export const authContext = createContext({});

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No Auth Provider");
  return context;
};
export function AuthProvider({ children }) {
  initializeAuthentication();
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(auth.currentUser, {
      photoURL:
        "https://i.ibb.co/GJZYgBD/user-icon-human-person-sign-vector-10206693.png",
    });
  };

  const signIn = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  };
  const logOut = () => signOut(auth);
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();

    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (name, imageUrl, email, callback, errcallback) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageUrl,
    })
      .then(() => callback())
      .catch((error) => errcallback());
    // console.log(imageUrl);
    // updateEmail(auth.currentUser, email);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signUp,
        signIn,
        user,
        logOut,
        loading,
        googleSignIn,
        updateUserProfile,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
