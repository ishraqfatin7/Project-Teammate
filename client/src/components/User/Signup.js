import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Shell from "../Shell";

export default function Signup() {
  const { signUp, user } = useAuth();

  const [error, setError] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data.password === data.retypePass) {
      signUp(data.email, data.password)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user; user already defined
          //  navigate("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setError(errorCode);
        });
    } else {
      // show error div;
    }
  };
  let navs = [
    { item: `${user ? "Home" : "Sign In"}` },
    { item: `${user ? "Profile" : "Sign Up"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user ? "Log out" : ""}` },
  ];
  return user ? (
    <Shell navs={navs}>
      <h1 className="text-5xl font-bold text-orange-500 m-auto">
        You are already logged in
      </h1>
      <p>go to your <Link to="../dashboard" className="underline underline-offset-2 text-black">dashboard</Link></p>
    </Shell>
  ) : (
    <Shell navs={navs}>
      {/* background page */}
      <div className="hero min-h-screen ">
        {/* input card container for flex*/}

        <div className="hero-content flex-col ">
          <div className="text-center ">
            {/* head title */}
            <h1 className="text-5xl font-bold text-orange-500">Sign up now!</h1>
            <Link
              className="underline underline-offset-2 text-black"
              to="/signin"
            >
              Already have an account?
            </Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* input Form card */}
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200">
              <div className="card-body">
                {/* name input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Name</span>
                  </label>
                  <input
                    defaultValue="Fatin"
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>

                {/* mail input */}
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

                {/* password input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Password</span>
                  </label>
                  <input
                    defaultValue="Password"
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>

                {/* retype password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">
                      Retype Password
                    </span>
                  </label>
                  <input
                    defaultValue="Password"
                    {...register("retypePass", { required: true })}
                    type="password"
                    placeholder="Retype password"
                    className="input input-bordered"
                  />
                </div>

                {/* Sign up submit button */}
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn bg-orange-500 text-black"
                  />
                </div>

                <label className="label">
                  <p className="text-slate-400 font-semibold text-sm">
                    {" "}
                    By Signing up, you agree to TeamMates' Terms of conditions
                    and Privacy Policy
                  </p>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Shell>
  );
}
