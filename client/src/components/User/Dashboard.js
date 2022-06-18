import React from "react";
import { useAuth } from "../../context/authContext";
import Shell from "../Shell";

export default function Dashboard() {
    const {user} = useAuth();
    console.log(user);
  let navs = [
    { item: `${user? "Home" : "Sign In"}` },
    { item: `${user ? "Profile" : "Sign Up"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user ? "Log out" : ''}` },
  ];
  return <Shell navs={navs}>

    <h1 className="text-3xl p-5 text-slate-900 font-semibold">Dashboard</h1>
    <img className="mask mask-squircle h-20 w-20" src={user.photoURL} alt="user"/>
    <h1>welcome {user.displayName}</h1>
  </Shell>;
}
