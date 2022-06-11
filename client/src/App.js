import React from "react";

import HeroHeader from "./components/Hero/HeroHeader";
import HeroMain from "./components/Hero/HeroMain";
import Navbar from "./components/Navbar/Navbar";
import Sidenav from "./components/Navbar/Sidenav";
import Footer from "./components/Footer";
import Signin from "./components/User/Signin";
import Home from "./Home";

import {
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        console.log(navs);
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
