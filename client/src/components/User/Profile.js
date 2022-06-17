import React from "react";
import Shell from "../Shell";

export default function Profile(){
    return(
        <Shell navs={[
            {item: "Home" },
            {item: "Dashboard" },
            { item: "Create a team" },
            { item: "About Us" },
            { item: "Log out" },
          ]}>
            <h1 className="text-3xl p-5 text-slate-900 font-semibold">
                Profile
            </h1>
        </Shell>
    );
}