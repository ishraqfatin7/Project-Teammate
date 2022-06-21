import React from "react";
import Team from "./Team";

export default function TeamSearchReasult({ team }) {
  if (!team.length) {
    return (
      <div>
        <h1>No Teams Found</h1>
      </div>
    );
  } else
    return (
      <div className="space-y-3 p-5">
        {team.map((components, index) => (
          <Team comp={components} key={index} />
        ))}
      </div>
    );
}
