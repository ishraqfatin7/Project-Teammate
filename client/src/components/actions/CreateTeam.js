import React, { useState } from "react";
import Shell from "../Shell";
import { useAuth } from "../../context/authContext";
import Team from "./Team";
import { useForm } from "react-hook-form";
import TeamSearchReasult from "./TeamSearchReasult";
import { Link } from "react-router-dom";

export default function CreateTeam() {
  const { user } = useAuth();
  const [action, setAction] = useState(null);
  const [result, setResult] = useState(null);

  const navs = [
    { item: `${user ? "Dashboard" : "Sign In"}` },
    { item: `${user ? "Profile" : "Sign Up"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user ? "Log out" : ""}` },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onBtn = (btn)=>{
    setAction(btn);
    setResult(null);
  }
  // set view to null after submission to render search result
  const onCreate = (data) => {
    console.log(data);
    setAction(null);
    setResult('create');
  };
  const onFind = (data) => {
    console.log(data);
    setAction(null);
    setResult('find');
  };
  // console.log(errors);

  // logical rendering view based on create or find button clicked
  let view = null, resultView=null;
  if (action === "create") {
    view = (
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold text-orange-500">Create Team</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200">
          <form onSubmit={handleSubmit(onCreate)}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Team Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Team name"
                  {...register("teamName", {
                    required: true,
                    min: 3,
                    maxLength: 20,
                  })}
                  className="input input-bordered"
                />
                <div className="text-red-500">
                  {errors.teamName && "Team Name is required"}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Team Category</span>
                </label>
                <select
                  {...register("teamCategory")}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option value="Gaming">Gaming</option>
                  <option value="Rescue">Rescue</option>
                  <option value="Traveler">Traveler</option>
                </select>
                {/* <div className="text-red-500">
              {errors.password && "Password is required"}
            </div> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Region</span>
                </label>
                <select
                  {...register("Region")}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Global">Global</option>
                </select>
                {/* <div className="text-red-500">
              {errors.password && "Password is required"}
            </div> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">
                    Team Description
                  </span>
                </label>
                <textarea
                  placeholder="i.e team members, team requirements, team goals"
                 
                  {...register("description", {
                    required: true,
                    maxLength: 100,
                  })}
                  className="textarea w-full max-w-xs"
                />

                <div className="text-red-500">
                  {errors.description && "Description is required"}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Team Status</span>
                </label>
                <select
                  {...register("Team Status")}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                {/* <div className="text-red-500">
              {errors.password && "Password is required"}
            </div> */}
              </div>
              <div className="form-control mt-3">
                <input
                  type="submit"
                  value="Create"
                  className="btn bg-orange-500 hover:btn-primary text-black"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  } else if (action === "find") {
    view = (
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold text-orange-500">Find a Team</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200">
          <form onSubmit={handleSubmit(onFind)}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Team Category</span>
                </label>
                <select
                  {...register("teamCategory")}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option value="Gamer">Gamer</option>
                  <option value="Traveler">Traveler</option>
                  <option value="Rescue">Rescue</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Region</span>
                </label>
                <select
                  {...register("Region")}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Global">Global</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Team Status</span>
                </label>
                <select
                  {...register("Team Status")}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="form-control mt-3">
                <input
                  type="submit"
                  value="Find"
                  className="btn bg-orange-500 hover:btn-primary text-black"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  if(result === "create") resultView = <div className="-mt-96">Team successfully created go to your <Link to="/dashboard"className="underline underline-offset-2 text-black">dashboard</Link></div>
  else if(result === "find") resultView = <TeamSearchReasult/>

  return (
    <Shell navs={navs}>
      <h1 className="text-3xl p-5 text-slate-900 font-semibold">
        Build your Team
      </h1>
      <div className="space-x-2 flex justify-center">
        <button className="btn btn-primary" onClick={() => onBtn("create")}>
          CREATE A TEAM
        </button>
        <button className="btn btn-primary" onClick={() => onBtn("find")}>
          FIND A TEAM
        </button>
      </div>
      <div className="hero min-h-screen ">
        {view}
        {resultView}
      </div>
    </Shell>
  );
}
