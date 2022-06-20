import React from "react";

export default function Sidebar({SideNavContents , handleClick, activeTab}) {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-80 bg-slate-100 text-white min-h-screen space-y-3">
        {SideNavContents.map((link) => (
          <li key={link.name}>
            <button className="btn btn-primary {{ activeTab ? 'bg-orange-500' : '' }}" onClick={handleClick} id={link.id}>{link.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
