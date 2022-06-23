import { getAuth } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";

export default function RequestedTeams() {
  const [teams, setTeams] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const url = `http://localhost:5000/requests/myRequests`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        setTeams(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.email]);
  return (
    <div className="hero-content flex-col ">
      <div className="text-center ">
        <h1 className="text-5xl font-bold text-orange-500">Requested Teams</h1>

        <div className="text-lg text-base-300">Currently you have no Team</div>
      </div>
    </div>
  );
}
