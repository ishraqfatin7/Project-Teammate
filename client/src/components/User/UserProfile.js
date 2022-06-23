import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Shell from "../Shell";

export default function UserProfile() {
  const { user } = useAuth();
  const { id } = useParams();
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
  return (
    <Shell navs={navs}>
      <div className="hero">
        <div className="hero-content flex-col">
          <h1 className="text-3xl p-5 text-slate-900 font-semibold">Profile</h1>
        </div>
      </div>
    </Shell>
  );
}
