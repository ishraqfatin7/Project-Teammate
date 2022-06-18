import React from "react";
import "../App.css";
import HeroHeader from "./Hero/HeroHeader";
import HeroMain from "./Hero/HeroMain";
import Navbar from "./Navbar/Navbar";
import Sidenav from "./Navbar/Sidenav";
import Footer from "./Footer";
import { useAuth } from "../context/authContext";



export default function Home() {
  const user = useAuth();
  let navs = [
    { item: `${user.user?"Dashboard":'Sign In'}`},
    { item: `${user.user?"Profile":'Sign Up'}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item : `${user.user?"Log out":''}`}
  ];
  return (
    <div className="drawer dark:bg-slate-900 min-w-full">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-white">
        <div>
          <Navbar navs={navs} />
        </div>
        <div>
          <HeroHeader></HeroHeader>
          <HeroMain></HeroMain>
          <Footer />
        </div>
      </div>
      <Sidenav navs={navs} />
    </div>
  );
}
