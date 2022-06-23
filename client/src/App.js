import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/User/Signin";
import Signup from "./components/User/Signup";
import About from "./components/About";
import Profile from "./components/User/Profile";
import { AuthProvider } from "./context/authContext";
import { PrivateRoute } from "./components/Authentication/PrivateRoute/PrivateRoute";
import Logout from "./components/User/Logout";
import Dashboard from "./components/User/Dashboard";
import EditProfile from "./components/User/EditProfile";
import CreateTeam from "./components/team/CreateTeam";
import NotFound from "./components/Hero/NotFound";
import PublicTeamList from "./components/team/PublicTeamList";
import TeamRequest from "./components/team/TeamRequest";
import UserProfile from "./components/User/UserProfile";
export const UserContext = createContext({});
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/allteams" element={<PublicTeamList />} />
        <Route path="profile" element={<Profile />}>
          <Route path=":id" element={<UserProfile/>}/>
        </Route>
        <Route path="/*" element={<NotFound />} />

        <Route path="/*" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="createateam" element={<CreateTeam />} />
          
          <Route path="teams/:id" element={<TeamRequest />} />
          <Route path="editprofile" element={<EditProfile />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
