import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidenav from "../Navbar/Sidenav";
let navs = [
    {
      item: "Home",
    },
    { item: "Sign Up" },
    { item: "Create a team" },
    { item: "About Us" },
  ];

export default function Signin() {
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
