import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Signin from "./components/User/Signin";
import Signup from "./components/User/Signup";
import About from "./components/About";
import Profile from "./components/User/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
