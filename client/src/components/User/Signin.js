import React, { useContext } from "react";
import { UserContext } from "../../App";
//import SignInWithGoogle from "../Authentication/Login/GoogleLogin";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Navbar from "../Navbar/Navbar";
import Sidenav from "../Navbar/Sidenav";
import initializeAuthentication from "../Authentication/Firebase/firebase.initialize";
let navs = [
  {
    item: "Home",
  },
  { item: "Sign Up" },
  { item: "Create a team" },
  { item: "About Us" },
];

export default function Signin() {
  //console.log(loggedInUser);
  //firebase Google Login
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleGoogleSignIn = () => {
    initializeAuthentication();

    const provider = new GoogleAuthProvider();

    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        const token = credentials?.accessToken;
        const user = result.user;
        const { displayName, email, photoURL } = user;
        console.log(user);
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          success: true,
        };
        console.log(signedInUser);
        setUserToken();
        setLoggedInUser(signedInUser);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    const setUserToken = () => {
      auth.currentUser
        ?.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          sessionStorage.setItem("token", idToken);
          // ...
        })
        .catch(function (error) {
          // Handle error
        });
    };
  };
  return (
    <div className="drawer dark:bg-slate-900 min-w-full">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-white">
        <Navbar navs={navs} />
        <div className="hero min-h-screen bg-white">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-orange-500">Login now!</h1>
              <p className="py-6">wohooooooo</p>
              <p className="py-3 hover: text-orange-500">
                Prefer Passwordless ?
              </p>
              <button className="btn btn-info" onClick={handleGoogleSignIn}>
                Sign In With Google
              </button>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a
                      href="/#"
                      className="label-text-alt link link-hover text-black"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary bg-orange-500">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidenav navs={navs} />
    </div>
  );
}
