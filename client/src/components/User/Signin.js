import React from "react";
import { Link } from "react-router-dom";
import Shell from "../Shell";

let navs = [
  { item: "Home" },
  { item: "Sign Up" },
  { item: "Create a team" },
  { item: "About Us" },
];

export default function Signin() {
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
                <button className="btn bg-orange-500 text-black">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
