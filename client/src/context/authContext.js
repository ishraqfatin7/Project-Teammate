import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
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
  const signUp = async (email, password) =>
    await createUserWithEmailAndPassword(auth, email, password);
  const signIn = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  };
  const logOut = () => signOut(auth);

  useEffect(() => {
    console.log("auth provider loader");
    onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <authContext.Provider value={{ signUp, signIn, user, logOut, loading }}>
      {children}
    </authContext.Provider>
  );
}
