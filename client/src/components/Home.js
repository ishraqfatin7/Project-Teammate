import React from "react";
import "../App.css";
import HeroHeader from "./Hero/HeroHeader";
import HeroMain from "./Hero/HeroMain";
import MiniCard from "./Hero/MiniCard";
import mini1 from "../images/icons/1.png";
import mini2 from "../images/icons/2.png";
import mini3 from "../images/icons/3.png";
import mini4 from "../images/icons/4.png";
import { useAuth } from "../context/authContext";
import Shell from "./Shell";

export default function Home() {
  const user = useAuth();
  let navs = [
    { item: `${user.user ? "Dashboard" : "Sign In"}` },
    { item: `${user.user ? "Home" : "Sign Up"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user.user ? "Log out" : ""}` },
  ];
  let cards = [
    {
      icon: mini1,
      text: "Select Catagory",
    },
    { icon: mini2, text: "Search Teams" },
    { icon: mini3, text: "Find or Join" },
    { icon: mini4, text: "Chat with them" },
  ];
  return (
    <Shell navs={navs}>
      <HeroHeader></HeroHeader>
      <HeroMain></HeroMain>
      <div className="mt-5 mb-5" id="how">
        <h1 className="text-center text-black text-2xl">WONDERING HOW?</h1>
        <div className="flex justify-center lg:h-45 lg:max-w-2xl m-auto ">
          {cards.map((card, index) => (
            <MiniCard image={card.icon} title={card.text} key={index} />
          ))}
        </div>
      </div>
    </Shell>
  );
}
