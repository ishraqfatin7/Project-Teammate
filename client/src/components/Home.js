import React from "react";
import "../App.css";
import HeroHeader from "./Hero/HeroHeader";
import HeroMain from "./Hero/HeroMain";
import { useAuth } from "../context/authContext";
import Shell from "./Shell";

export default function Home() {
  const user = useAuth();
  let navs = [
    { item: `${user.user ? "Dashboard" : "Sign In"}` },
    { item: `${user.user ? "Profile" : "Sign Up"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user.user ? "Log out" : ""}` },
  ];
  return (
    <Shell navs={navs}>
      <HeroHeader></HeroHeader>
      <HeroMain></HeroMain>
    </Shell>
  );
}
