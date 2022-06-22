import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TeamRequest = () => {
  const { id } = useParams();
  const [teamData, setTeamData] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/teams/${id}`;
    fetch(url, {
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
    <div>
      <h1>{teamData.teamName}</h1>
    </div>
  );
};

export default TeamRequest;
