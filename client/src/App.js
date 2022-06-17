import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/User/Signin";
import Signup from "./components/User/Signup";
import About from "./components/About";
import Profile from "./components/User/Profile";
export const UserContext = createContext({});
function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
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
