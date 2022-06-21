import React from "react";
import Shell from "../Shell";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const navs = [
    { item: "All Teams" },
    { item: `${user ? "Dashboard" : "Sign In"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user ? "Log out" : ""}` },
  ];

  const handleClick = () => {
    navigate("/editprofile", { replace: true });
  };

  return (
    <Shell navs={navs}>
      <h1 className="text-3xl p-5 text-slate-900 font-semibold">Profile</h1>
      <button className="btn btn-active btn-primary" onClick={handleClick}>
        Edit
      </button>
    </Shell>
  );
}
