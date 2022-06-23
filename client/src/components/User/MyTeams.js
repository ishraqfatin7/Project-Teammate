import React from "react";
import EachTeam from "./EachTeam";

export default function MyTeams({ team }) {
  console.log(team);
  return (
    <div className="hero-content">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-orange-500 pb-5">My Teams</h1>
        {team.length ? (
          <div className="flex space-x-3">
            {team.map((components, index) => (
              <EachTeam team={components} key={index} />
            ))}
          </div>
        ) : (
          <div className="text-lg text-base-300">
            Currently you have no Team
          </div>
        )}
      </div>
    </div>
  );
}
