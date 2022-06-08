import React from "react";

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
        <a
          href="/#"
          className="btn btn-info text-lg font-bold"
        >
          Get started
        </a>
        <a
          className="bg-white text-lg text-amber-500 font-semibold underline"
          href="/#"
        >
          Learn How
        </a>
      </div>
    </div>
  );
};

export default HeroHeader;
