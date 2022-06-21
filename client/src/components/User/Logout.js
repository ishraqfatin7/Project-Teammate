import React from "react";
import Shell from "../Shell";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

export default function Logout() {
  const user = useAuth();
  let navs = [
    { item: "All Teams" },
    { item: `${user.user ? "Dashboard" : "Sign In"}` },
    { item: `${user.user ? "Profile" : "Sign Up"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user.user ? "Log out" : ""}` },
  ];
  const { logOut } = useAuth();
  logOut()
    .then(() => {
      console.log("logged out");
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <Shell navs={navs}>
      <h1 className="text-3xl p-5 text-slate-900 font-semibold text-center">
        Logged out successfully{" "}
        <Link to="/signin" className="underline underline-offset-2 text-black">
          Log in
        </Link>{" "}
        again
      </h1>
    </Shell>
  );
}
