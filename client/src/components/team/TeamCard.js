import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function TeamCard({ comp }) {
  const history = useNavigate();
  const location = useLocation();
  const handleBtnClick = (id) => {
    const url = `teams/${id}`;
    history(url);
    const { from } = location.state || { from: { pathname: `/${url}` } };
    history(from, { replace: true });
  };
  return (
    <div className="card w-80 sm:w-96 bg-slate-200 shadow-xl">
      <div className="card-body">
        <h1 className="card-title text-3xl text-slate-900">{comp.teamName}</h1>
        <div className="flex flex-wrap space-x-3 space-y-3 sm:space-y-0 justify-start content-start">
          <h3 className="badge text-slate-100">
            created by--
            <Link
              to="/#"
              className="underline underline-offset-2 text-orange-500 hover:text-white"
            >
              {comp.teamCreator}
            </Link>
          </h3>
          <div className="badge badge-primary">
            Team Type: {comp.teamCategory}
          </div>
        </div>
        <p className="text-slate-700">{comp.teamDescription}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleBtnClick(comp._id)}
            className="btn bg-orange-500 hover:btn-primary text-black"
          >
            Join Team
          </button>
        </div>
      </div>
    </div>
  );
}
