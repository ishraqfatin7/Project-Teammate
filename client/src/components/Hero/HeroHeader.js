import React from "react";

const HeroHeader = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-5 bg-white">
        <p className=" font-semibold text-3xl text-black p-5">
          Choose The Right Member <br /> For Your{" "}
          <span className="text-orange-500">Team</span>
        </p>
        <br />
      </div>
      <div className="flex justify-center items-center mt-5 bg-white text-lg text-amber-500 font-semibold underline">
        <a href="">Learn How</a>
      </div>
    </div>
  );
};

export default HeroHeader;
