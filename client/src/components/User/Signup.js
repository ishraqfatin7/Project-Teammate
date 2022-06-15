import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidenav from "../Navbar/Sidenav";
let navs = [
    { item: "Home" },
    { item: "Sign In" },
    { item: "Create a team" },
    { item: "About Us" },
  ];

export default function Signup() {
  return (

    // for navbar i have to put it in every single page
    <div className="drawer dark:bg-slate-100 min-w-full">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-white">
        <Navbar navs={navs} />


        {/* background page */}
        <div className="hero min-h-screen ">

            {/* input card container for flex*/}
          <div className="hero-content flex-col ">
            <div className="text-center ">

                {/* head title */}
              <h1 className="text-5xl font-bold text-orange-500">Sign up now!</h1>
              <Link className="underline underline-offset-2 text-black" to="/signin">Already have an account?</Link>
            </div>

            {/* input card */}
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200">
              <div className="card-body">

                {/* name input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Name</span>
                  </label>
                  <input
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
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>

                {/* retype password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Retype Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Retype password"
                    className="input input-bordered"
                  />
                </div>


                {/* Sign up submit button */}
                <div className="form-control mt-6">
                  <button className="btn bg-orange-500 text-black">
                    Sign Up
                  </button>
                </div>
                
                <label className="label">
                   <p className="text-slate-400 font-semibold text-sm"> By Signing up, you agree to TeamMates's Terms of conditions and Privacy Policy</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidenav navs={navs} />
    </div>
  );
}
