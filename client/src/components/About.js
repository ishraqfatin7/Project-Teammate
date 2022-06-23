import React from "react";
import { useAuth } from "../context/authContext";
import HeroMain from "./Hero/HeroMain";
import Shell from "./Shell";
import mate1 from "../images/mate1.jpg";
import mate2 from "../images/mate2.jpeg";


export default function About() {
  const user = useAuth();
  const navs = [
    { item: "All Teams" },
    { item: `${user.user ? "Dashboard" : "Sign In"}` },
    { item: `${user.user ? "Home" : "Sign Up"}` },
    { item: "Create a team" },
    { item: `${user.user ? "Log out" : ""}` },
  ];
  return (
    <Shell navs={navs}>
      <div className="hero">
        <div className="hero-content flex-col">
          <h1 className="text-3xl p-5 text-slate-900 font-semibold">
            About Us
          </h1>
          
          <div className="flex flex-wrap space-x-3">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Arafat</h2>
                <p>A problem solver more than a developer<br/>Writer, Programmer</p>
                <p>Currently studying at AUST EEE 2.1</p>
              </div>
              <figure>
                <img src={mate1} alt="Shoes" />
              </figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Fatin Ishraq</h2>
                <p>Web Developer(MERN),<br/>Competetive Programmer, Writer</p>
                <p>Currently studying at AUST CSE 2.2</p>
                <p>Former Intern at Pioneer Alpha</p>
                
              </div>
              <figure>
                <img src={mate2} alt="Shoes" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
