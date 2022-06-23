import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Shell from "../Shell";
import TeamSearchResult from "./TeamSearchResult";

export default function PublicTeamList() {
  const {user} = useAuth();
  const [response, setResponse] = useState([]);
  const [view, setView] = useState(null);
  const teamUrl = `http://localhost:5000/teams`;
  useEffect(() => {
    fetch(teamUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setResponse(result);
        setView("loaded");
        console.log("From Server: ", result);
      })
      .catch((error) => {
        setView("error");
        console.log(error);
      });
  }, []);
  let navs = [
    { item: `${user ? "Dashboard" : "Sign In"}` },
    { item: `${user ? "Profile" : "Sign Up"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user ? "Log out" : ""}` },
  ];
  return (
    <Shell navs={navs}>
      <h1 className="text-3xl p-5 text-slate-900 font-semibold text-center">
        Join any teams!
      </h1>
      <div className="text-center">
        <Link to="/createateam" className="btn btn-primary text-lg font-bold">
          CREATE YOUR OWN TEAM OR FIND ONE
        </Link>
      </div>

      <div className="hero">
        <div className="hero-content">
        <TeamSearchResult team={response}/>
        </div>
      </div>
    </Shell>
  );
}
