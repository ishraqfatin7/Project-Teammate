import React from "react";
import logo from "../../images/logo.png";

const navs = [
  {
    item: "Sign In",
  },
  { item: "Sign Up" },
  { item: "About Us" },
];

const Navbar = () => {
  return (
    <div>
      <div className="navbar  bg-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="  menu menu-compact dropdown-content mt-3 p-2  shadow bg-base-100 rounded-box w-52"
            >
              {navs.map((nav, index) => (
                <a
                  className=" flex items-center justify-center p-2 rounded-md text-md font-semibold text-white text-center mx-2"
                  href="/"
                >
                  {nav.item}
                </a>
              ))}
            </ul>
          </div>
          <img
            alt="logo"
            src={logo}
            className="btn btn-ghost normal-case text-xl"
          ></img>
        </div>
        <div className="navbar-end ">
          <a href="/#" className="btn btn-info">
            Get started
          </a>
          <div className="hidden  md:flex lg:flex ">
            {navs.map((nav, index) => (
              <a
                className=" flex items-center justify-center p-2 rounded-md text-md font-semibold text-base-300 text-center mx-2"
                href="/"
              >
                {nav.item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
