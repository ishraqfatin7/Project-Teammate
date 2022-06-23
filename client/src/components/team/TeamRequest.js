import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Shell from "../Shell";
import getUser from "../../lib/getUser";

const TeamRequest = () => {
  const {user} = useAuth();
  let navs = [
    { item: `${user ? "Dashboard" : "Sign In"}` },
    { item: `${user ? "Profile" : "Sign Up"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user ? "Log out" : ""}` },
  ];
  const { id } = useParams();
  const [teamData, setTeamData] = useState({});
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getUser(user.email, setUserData);
    console.log(userData);
    const teamUrl = `http://localhost:5000/teams/${id}`;
    fetch(teamUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setTeamData(result);
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
          <h1 className="text-3xl text-slate-900 font-semibold">
            {teamData.teamName}
          </h1>
          <p>{teamData.teamDescription}</p>
          <button className="btn btn-primary">Request</button>
        </div>
      </div>
    </Shell>
  );
};

export default TeamRequest;
