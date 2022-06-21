import React from "react";
import { Link } from "react-router-dom";

export default function Team({ comp }) {
  return (
    <div className="card w-80 sm:w-96 bg-slate-200 shadow-xl">
      <div className="card-body">
        <h1 className="card-title text-3xl text-slate-900">{comp.teamName}</h1>
        <div className="flex flex-wrap space-x-3 space-y-3 sm:space-y-0">
          <h3 className="badge text-slate-100">
            created by--
            <Link
              to="/#"
              className="underline underline-offset-2 text-orange-500 hover:text-white"
            >
              User.name
            </Link>
          </h3>
          <div className="badge badge-primary">
            Team Type: {comp.teamCategory}
          </div>
        </div>
        <p className="text-slate-700">
          Member:10
          <br />
          we need members to rescue people in sylhet
          <br />
          Our goal is to provide them shelter food and rescue them from flood
        </p>
        <div className="card-actions justify-end">
          <button className="btn bg-orange-500 hover:btn-primary text-black">
            Request
          </button>
        </div>
      </div>
    </div>
  );
}
