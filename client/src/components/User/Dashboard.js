import React, { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import Sidebar from "../Navbar/Sidebar";
import SidebarMobile from "../Navbar/SidebarMobile";
import Shell from "../Shell";
import EditProfile from "./EditProfile";
import MyTeams from "./MyTeams";

export default function Dashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  const [teams, setTeams] = useState([]);
  let navs = [
    { item: `${user ? "All Teams" : "Sign In"}` },
    { item: `${user ? "Profile" : "Sign Up"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user ? "Log out" : ""}` },
  ];

  useEffect(() => {
    const url = `http://localhost:5000/teams/myTeams`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        setTeams(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.email]);

  const SideNavContents = [
    {
      id: 0,
      name: "My teams",
      component: <MyTeams team={teams} />,
    },
    {
      id: 1,
      name: "Edit Profile",
      component: <EditProfile />,
    },
  ];
  const handleClick = (e) => {
    setActiveTab(e.target.id);
    // console.log(e.target.className)
  };

  return (
    <Shell navs={navs}>
      <div className="">
        <h1 className="text-3xl p-5 text-slate-900 font-semibold text-center">
          Dashboard
        </h1>
        <div className="flex">
          <Sidebar
            SideNavContents={SideNavContents}
            handleClick={handleClick}
            activeTab={activeTab}
          />
          <div className="flex flex-col ">
            <div className="flex p-5">
              <img
                className="mask mask-squircle h-20 w-20"
                src={user.photoURL}
                alt="user"
              />
              <h1 className="text-2xl p-5 text-slate-900">
                Welcome,{" "}
                <span className="font-semibold">{user.displayName}</span>
              </h1>
            </div>
            <SidebarMobile
              SideNavContents={SideNavContents}
              handleClick={handleClick}
              activeTab={activeTab}
            />
            <div className="hero">
              {SideNavContents.map((link, index) => (
                <div key={index}>
                  {`${activeTab}` === `${link.id}` && link.component}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
