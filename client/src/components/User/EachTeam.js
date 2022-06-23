import React from "react";

const EachTeam = ({ team }) => {
  console.log(team);
  return (
    <div className="card w-80 sm:w-96 bg-slate-200 shadow-xl">
      <div className="card-body">
        <h1 className="card-title text-3xl text-slate-900">{team.teamName}</h1>
        <div className="flex flex-wrap space-x-3 space-y-3 sm:space-y-0 justify-start content-start">
          <h3 className="badge text-slate-100"></h3>
          <div className="badge badge-primary">
            Team Type: {team.teamCategory}
          </div>
        </div>
        <p className="text-slate-700">{team.teamDescription}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-orange-500 hover:btn-primary text-black">
            Current
          </button>
        </div>
      </div>
    </div>
  );
};

export default EachTeam;
