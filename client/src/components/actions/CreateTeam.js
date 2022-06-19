import React from 'react'
import Shell from '../Shell'
import { useAuth } from '../../context/authContext';

export default function CreateTeam() {
    const {user} = useAuth();
    const navs = [
        { item: `${user ? "Dashboard" : "Sign In"}` },
        { item: `${user ? "Profile" : "Sign Up"}` },
        { item: "Create a team" },
        { item: "About Us" },
        { item: `${user ? "Log out" : ""}` },
      ];
  return (
    <Shell navs={navs}>
        <h1 className="text-3xl p-5 text-slate-900 font-semibold">Build your Team</h1>
        <button className="btn btn-primary">CREATE A TEAM</button>
        <button className="btn btn-primary">FIND A TEAM</button>
    </Shell>
  )
}
