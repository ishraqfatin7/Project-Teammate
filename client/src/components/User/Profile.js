import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { Navigate, useLocation} from "react-router-dom";
import getUser from "../../lib/getUser";
import Shell from "../Shell";

export default function Profile() {
  const location = useLocation();
  const [userData, setUserData] = useState();
  const { user } = useAuth();
  const navs = [
    { item: "All Teams" },
    { item: `${user ? "Dashboard" : "Sign In"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user ? "Log out" : ""}` },
  ];
//   useEffect(()=>{
//     getUser(user.email, setUserData)
//   },[user.email])
//   console.log(userData);
// const {username} = userData;


  return (
    <Shell navs={navs}>
      <div className="hero">
        <div className="hero-content flex-col">
          <h1 className="text-3xl p-5 text-slate-900 font-semibold">Profile</h1>
        </div>
      </div>
    </Shell>
      // <Navigate to={`/profile/${username}`} state={{ from: location }} />
  );
}
