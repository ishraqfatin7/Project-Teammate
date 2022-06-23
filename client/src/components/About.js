import React from "react";
import { useAuth } from "../context/authContext";
import HeroMain from "./Hero/HeroMain";
import Shell from "./Shell";

export default function About() {
  const user = useAuth();
  const navs = [
    { item: "All Teams" },
    { item: `${user.user ? "Dashboard" : "Sign In"}` },
    { item: `${user.user ? "Home" : "Sign Up"}` },
    { item: "Create a team" },
    { item: `${user.user ? "Log out" : ""}` },
  ];
  return (
    <Shell navs={navs}>
      <h1 className="text-3xl p-5 text-slate-900 font-semibold text-center">
        About Us
      </h1>
      <HeroMain></HeroMain>
    </Shell>
  );
}
