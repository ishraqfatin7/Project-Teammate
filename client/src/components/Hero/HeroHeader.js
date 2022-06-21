import React from "react";
import { Link } from "react-router-dom";

const HeroHeader = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-2 bg-white">
        <p className=" font-semibold text-3xl text-black p-5">
          Choose The Right Member <br /> For Your{" "}
          <span className="text-orange-500">Team</span>
        </p>
      </div>
      <div className="flex justify-center items-center mt-2 space-x-4">
        <Link
          to="/allteams"
          className="btn btn-info text-lg font-bold"
        >
          Get started
        </Link>
        <a
          className="bg-white text-lg text-amber-500 font-semibold underline"
          href="/#how"
        >
          Learn How
        </a>
      </div>
    </div>
  );
};

export default HeroHeader;
