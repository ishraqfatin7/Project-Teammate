import React from "react";
import Shell from "../Shell";
import { useAuth } from "../../context/authContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Profile() {
  const { id } = useParams();
  console.log(id);
  const { user } = useAuth();
  const navigate = useNavigate();
  const navs = [
    { item: "All Teams" },
    { item: `${user ? "Dashboard" : "Sign In"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user ? "Log out" : ""}` },
  ];
  useEffect(() => {
    const url = `http://localhost/5000/profile/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("From Server: ", result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
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
