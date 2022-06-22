import React, { useContext, useState } from "react";
// import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../Authentication/Firebase/firebase.initialize";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Shell from "../Shell";
// import { async } from "@firebase/util";
import { useForm } from "react-hook-form";

export default function Signin() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  let location = useLocation();

  const { signIn, user, googleSignIn } = useAuth();
  const handleGoogleSignIn = async () => {
    await googleSignIn()
      .then(() => {
        navigate(-2, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //console.log(loggedInUser);
  //firebase Google Login

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(() => {
        //navigate(-1);
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setError(error.code);
        console.log(error.code);
        //  alert(error.message);
      });
  };

  let navs = [
    { item: `${user ? "All Teams" : "All Teams"}` },
    { item: `${user ? "Profile" : "Sign Up"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user ? "Log out" : ""}` },
  ];
  return user ? (
    <Shell navs={navs}>
      <div className="hero">
        <div className="hero-content flex-col">
          <h1 className="text-5xl font-bold text-orange-500 m-auto">
            You are already logged in
          </h1>
          <p>
            go to your{" "}
            <Link
              to="../dashboard"
              className="underline underline-offset-2 text-black"
            >
              dashboard
            </Link>
          </p>
        </div>
      </div>
    </Shell>
  ) : (
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
                  {/* <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label> */}
                  <label className="input-group">
                    <span className="input-group">E-mail</span>
                    <input
                      defaultValue=""
                      {...register("email", { required: true })}
                      type="text"
                      placeholder="Enter your E-mail"
                      className="input input-bordered"
                    />
                  </label>
                  <div className="text-red-500">
                    {errors.email && "Email is required"}
                  </div>
                </div>
                <div className="form-control">
                  {/* <label className="label">
                    <span className="label-text text-black">Password</span>
                  </label> */}
                  <label className="input-group">
                    <span>Password</span>
                    <input
                      defaultValue=""
                      {...register("password", { required: true })}
                      type="password"
                      placeholder="Enter your password"
                      className="input input-bordered"
                    />
                  </label>
                  <div className="text-red-500">
                    {errors.password && "Password is required"}
                  </div>
                  <label className="label">
                    <a
                      href="/#"
                      className="label-text-alt link link-hover text-black"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                {error ? (
                  <div className="alert alert-error shadow-lg">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Invalid Email Or Password</span>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                <div className="form-control mt-3">
                  <button className="btn bg-orange-500 hover:btn-primary text-black">
                    Login
                  </button>

                  <div className="divider text-black">OR</div>
                  <p className="py-3 hover: text-black m-auto">
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
