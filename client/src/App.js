import React from "react";


import Home from "./Home";
import Signin from "./components/User/Signin";
import Signup from "./components/User/Signup";

import {
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
