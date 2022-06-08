import React from "react";
export default function Sidenav({navs}){
    return(
        <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul className="menu menu-vartical shadow bg-base-100 opacity-95 pl-5 pt-10 pr-16 w-fit">
          {navs.map((nav, index) => (
            <a
              className=" flex items-center justify-start p-2 rounded-md text-lg font-semibold text-white mx-2 tracking-wider"
              href="/"
            >
              {nav.item}
            </a>
          ))}
        </ul>
      </div>
    );
}