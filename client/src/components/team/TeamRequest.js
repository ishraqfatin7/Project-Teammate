import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Shell from "../Shell";

const TeamRequest = () => {
  const { user } = useAuth();
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
  console.log(user.email);
  useEffect(() => {
    const teamUrl = `http://localhost:5000/teams/${id}`;
    fetch(teamUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        loadUser();
        setTeamData(result);
        console.log("From Server: ", result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const loadUser = () => {
    const userUrl = `http://localhost:5000/users/user/${user.email}`;
    fetch(userUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setUserData(result);
        console.log("From Server: ", result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
