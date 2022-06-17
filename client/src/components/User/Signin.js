import React, { useContext, useState } from "react";
import { useAuth } from "../../context/authContext";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../Authentication/Firebase/firebase.initialize";
import { Link, useNavigate } from "react-router-dom";
import Shell from "../Shell";
import { async } from "@firebase/util";
import { useForm } from "react-hook-form";

let navs = [
  { item: "Home" },
  { item: "Sign Up" },
  { item: "Create a team" },
  { item: "About Us" },
];

export default function Signin() {
  const navigate = useNavigate();
  const { signIn, user } = useAuth();

  //console.log(loggedInUser);
  //firebase Google Login

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password);
  };
  const handleGoogleSignIn = async () => {
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
        //  setLoggedInUser(signedInUser);
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
    <Shell navs={navs}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-orange-500">Login now!</h1>
            <Link
              className="underline underline-offset-2 text-black"
              to="/signup"
            >
              Don't have any account?
            </Link>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input
                    defaultValue="ishraqfatin7@gmail.com"
                    {...register("email", { required: true })}
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
                    defaultValue="Password"
                    {...register("password", { required: true })}
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
                  <button className="btn bg-orange-500 text-black">
                    Login
                  </button>
                  <p className="py-3 hover: text-orange-500">
                    Prefer Passwordless ?
                  </p>
                  <button className="btn btn-info" onClick={handleGoogleSignIn}>
                    Sign In With Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Shell>
  );
}
