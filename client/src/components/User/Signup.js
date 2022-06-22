import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Shell from "../Shell";

export default function Signup() {
  const { signUp, user } = useAuth();
  const [response, setResponse] = useState({});
  const [available, setAvailable] = useState(null);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const isUserNameAvailable = (data) => {
    console.log(data);
    const url = `http://localhost:5000/users`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        setAvailable(result);
        //setView("successFind");
      })
      .catch((error) => {
        // setView("errorFind");
        console.log(error);
      });
    console.log(data);
  };

  const onSubmit = (data) => {
    isUserNameAvailable(data);
    console.log(available);
    if (!available) {
      console.log(data);
      const userData = {
        userName: data.username,
        email: data.email,
        password: data.password,
        isProfileEdited: false,
      };
      if (data.password === data.retypePass) {
        signUp(data.email, data.password)
          .then((userCredential) => {
            sendUserData(data);
            // Signed in
            // const user = userCredential.user; user already defined
            navigate(-2, { replace: true });
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            setError(errorCode);
          });
      } else {
        // show err div
        console.log("password dont match");
      }
    } else console.log("Username not available\n Try another one");
  };
  const sendUserData = (userData) => {
    const url = `http://localhost:5000/addUser`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        setResponse(response);
        console.log("From Server: ", response);
      })
      .catch((error) => console.log(error));
  };
  let navs = [
    { item: `${user ? "All Teams" : "All Teams"}` },
    { item: `${user ? "Profile" : "Sign In"}` },
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
                    defaultValue=""
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                  <div className="text-red-500">
                    {errors.name && "Name is required"}
                  </div>
                </div>
                {/* User name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">User name</span>
                  </label>
                  <input
                    defaultValue=""
                    {...register("username", { required: true })}
                    type="text"
                    placeholder="username"
                    className="input input-bordered"
                  />
                  <div className="text-red-500">
                    {errors.name && "User name is required"}
                  </div>
                </div>

                {/* mail input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input
                    defaultValue=""
                    {...register("email", { required: true })}
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  <div className="text-red-500">
                    {errors.email && "Email is required"}
                  </div>
                </div>

                {/* password input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Password</span>
                  </label>
                  <input
                    defaultValue=""
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <div className="text-red-500">
                    {errors.password && "Password is required"}
                  </div>
                </div>

                {/* retype password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">
                      Retype Password
                    </span>
                  </label>
                  <input
                    defaultValue=""
                    {...register("retypePass", { required: true })}
                    type="password"
                    placeholder="retype password"
                    className="input input-bordered"
                  />
                  <div className="text-red-500">
                    {errors.retypePass && "Enter password again"}
                  </div>
                </div>

                {/* Sign up submit button */}
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn bg-orange-500 hover:btn-primary text-black"
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
