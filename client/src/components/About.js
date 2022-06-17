import React from "react";
import Shell from "./Shell";

export default function About(){
    return(
        <Shell navs={[
            {
              item: "Sign In",
            },
            { item: "Sign Up" },
            { item: "Create a team" },
            { item: "About Us" },
          ]}>
            <div>About page</div>
        </Shell>
        
    );
}