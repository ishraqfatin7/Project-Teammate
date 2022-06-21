import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import Sidebar from "../Navbar/Sidebar";
import Shell from "../Shell";
import EditProfile from "./EditProfile";
import MyTeams from "./MyTeams";

export default function Dashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  let navs = [
    { item: `${user ? "Home" : "Sign In"}` },
    { item: `${user ? "Profile" : "Sign Up"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user ? "Log out" : ""}` },
  ];
  const SideNavContents = [
    {
      id: 0,
      name: "My teams",
      component: <MyTeams />,
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
      <div className="container">
        <h1 className="text-3xl p-5 text-slate-900 font-semibold">Dashboard</h1>
        <div className="flex ">
          <Sidebar
            SideNavContents={SideNavContents}
            handleClick={handleClick}
            activeTab={activeTab}
          />
          <div className="flex flex-col">
            <div className="flex">
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
            {SideNavContents.map((link, index) => (
              <div key={index}>
                {activeTab === `${link.id}` && link.component}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
