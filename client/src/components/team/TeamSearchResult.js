import React from "react";
import TeamCard from "./TeamCard";

export default function TeamSearchResult({ team }) {
  if (!team.length) {
    return (
      <div>
        <h1>No Teams Found</h1>
      </div>
    );
  } else
    return (
      <div className="space-y-3 p-5 flex md:space-x-3 flex-wrap justify-center content-start">
        {team.map((components, index) => (
          <TeamCard comp={components} key={index} />
        ))}
      </div>
    );
}
