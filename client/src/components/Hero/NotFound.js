import React from "react";
import { useAuth } from "../../context/authContext";
import Shell from "../Shell";

export default function NotFound() {
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
      <h1 className="text-5xl font-bold text-orange-500 text-center mt-48">404! you are lost</h1>
    </Shell>
  );
}
