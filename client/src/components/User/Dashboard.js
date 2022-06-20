import React from "react";
import { useAuth } from "../../context/authContext";
import Shell from "../Shell";

export default function Dashboard() {
  const { user } = useAuth();
  console.log(user);
  let navs = [
    { item: `${user ? "Home" : "Sign In"}` },
    { item: `${user ? "Profile" : "Sign Up"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user ? "Log out" : ""}` },
  ];
  return (
    <Shell navs={navs}>
      <h1 className="text-3xl p-5 text-slate-900 font-semibold">Dashboard</h1>
      <div className="flex ">
      <div className="drawer-side ">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content min-h-screen">
          <li>
            <a href="/"> Item 1</a>
          </li>
          <li>
            <a href="/"> Item 2</a>
          </li>
        </ul>
      </div>
      <img
        className="mask mask-squircle h-20 w-20"
        src={user.photoURL}
        alt="user"
      />
      <h1 className="text-2xl p-5 text-slate-900">Welcome {user.displayName}</h1>
      </div>
    </Shell>
  );
}
