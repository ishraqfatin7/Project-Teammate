import React, { createContext, useState } from "react";

import HeroHeader from "./components/Hero/HeroHeader";
import HeroMain from "./components/Hero/HeroMain";
import Navbar from "./components/Navbar/Navbar";
import Sidenav from "./components/Navbar/Sidenav";
import Footer from "./components/Footer";
import Signin from "./components/User/Signin";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
export const UserContext = createContext({});

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="signin" element={<Signin />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
