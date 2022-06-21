import React, { useState } from "react";
import Shell from "../Shell";
import { useAuth } from "../../context/authContext";
import { useForm } from "react-hook-form";
import TeamSearchReasult from "./TeamSearchReasult";
import { Link } from "react-router-dom";

export default function CreateTeam() {
  const { user } = useAuth();
  const [action, setAction] = useState(null);
  const [result, setResult] = useState(null);
  const [filteredTeams, setFilteredTeams] = useState(null);
  const [form, setForm] = useState(null);
  const [view, setView] = useState('');
  const [response, setResponse] = useState({});
  const navs = [
    { item: `${user ? "Dashboard" : "Sign In"}` },
    { item: `${user ? "Profile" : "Sign Up"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user ? "Log out" : ""}` },
  ];

  // view rendering
  let formView = null,
    resultView = null;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // create or find button traking to render form view
  const onBtn = (btn) => {
    setView(null)
    setForm(btn);
  };

  // submission handle
  const onCreate = async (data) => {
    setForm(null);
    const url = `http://localhost:5000/addTeam`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        setResponse(res);
        setView('success');
        console.log("From Server: ", res);
      })
      .catch((error) => {
        setView('error');
        console.log(error);
      });
  };
  // set view to null after submission to render search result
  const onFind = (data) => {
    const url = `http://localhost:5000/filteredTeams`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        setFilteredTeams(result);
      });
    setAction(null);
    setResult("find");
    console.log(data);
    setForm(null);
  };
  // console.log(errors);

  // logical rendering view based on create or find button clicked
  if (form === "create") {
    formView = (
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
                  {...register("region")}
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
                  {...register("status")}
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
  } else if (form === "find") {
    formView = (
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
                  {...register("region")}
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
                  {...register("status")}
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

  if (response.status === 200 && view === "success") {
    resultView = (
      <div className="-mt-96">
        Team successfully created go to your{" "}
        <Link
          to="/dashboard"
          className="underline underline-offset-2 text-black"
        >
          dashboard
        </Link>
      </div>
    );
  else if (result === "find")
    resultView = <TeamSearchReasult team={filteredTeams} />;
  }
  else if(view === "error") resultView = <div className="-mt-96">Team creation failed. Try again</div>;

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
      <div className="hero min-h-screen">
        {formView}
        {resultView}
      </div>
    </Shell>
  );
}
