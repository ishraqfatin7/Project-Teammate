import React, { useState } from "react";
import Shell from "../Shell";
import { useAuth } from "../../context/authContext";
import { useForm } from "react-hook-form";
import TeamSearchResult from "./TeamSearchResult";
import { Link } from "react-router-dom";

export default function CreateTeam() {
  const { user } = useAuth();
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [form, setForm] = useState(null);
  const [view, setView] = useState(null);
  const [response, setResponse] = useState({});
  const navs = [
    { item: "All Teams" },
    { item: `${user ? "Dashboard" : "Sign In"}` },
    { item: `${user ? "Profile" : "Sign Up"}` },
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
    setView("");
    setForm(btn);
  };

  // submission handle
  const onCreate = async (data) => {
    console.log(data);
    const teamData = {
      teamName: data.teamName,
      teamCategory: data.teamCategory,
      teamRegion: data.region,
      teamDescription: data.description,
      teamStatus: data.status,
      teamCreator: user.email,
    };
    setForm(null);
    const url = `http://localhost:5000/addTeam`;
    let payload = {
      ...data,
      
    }
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamData),
    })
      .then((res) => {
        setResponse(res);
        setView("successCreate");
        console.log("From Server: ", res);
      })
      .catch((error) => {
        setView("errorCreate");
        console.log(error);
      });
  };
  // set view to null after submission to render search result
  const onFind = (data) => {
    console.log(data);

    setForm(null);
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
        console.log(result);
        setFilteredTeams(result);
        setView("successFind");
      })
      .catch((error) => {
        setView("errorFind");
        console.log(error);
      });
    console.log(data);
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
                  <option value="Gaming">Gaming</option>
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
  // response view rendering
  if (response.status === 200 && view === "successCreate") {
    resultView = (
      <div className="mt-20">
        Team successfully created go to your{" "}
        <Link
          to="/dashboard"
          className="underline underline-offset-2 text-black"
        >
          dashboard
        </Link>
      </div>
    );
  } else if (view === "successFind")
    resultView = <TeamSearchResult team={filteredTeams} />;
  else if (view === "errorCreate")
    resultView = <div className="p-5">Team creation failed. Try again</div>;
  else if (view === "errorFind")
    resultView = (
      <div className="p-5">Sorry! Server error. Could not find teams</div>
    );

  return (
    <Shell navs={navs}>
      <h1 className="text-3xl p-5 text-slate-900 font-semibold text-center">
        Build your Team
      </h1>
      <div className="space-x-2 flex justify-center">
        <button className="btn btn-primary" onClick={() => onBtn("create")}>
          CREATE A TEAM
        </button>
        <div className="divider divider-horizontal">OR</div>
        <button className="btn btn-primary" onClick={() => onBtn("find")}>
          FIND A TEAM
        </button>
      </div>
      <div className="hero">
        {formView}
        {resultView}
      </div>
    </Shell>
  );
}
