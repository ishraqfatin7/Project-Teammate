import React from "react";

export default function HeroCard({ head, grid, text }) {
  return (
    <div className="p-5 w-full flex justify-between flex-col sm:max-w-xl m-auto">
      <div className="m-auto flex justify-between flex-col sm:flex-row ">
        <div className=" sm:basis-2/3">
          <img src={grid} alt="" className="w-full" />
        </div>
        <div className="sm:p-5 sm:basis-1/3 ">
          <div>
            {/* <h1 className="hidden sm:block text-4xl text-blue-800 font-semibold">
                {head.split(" ").map((word) => (
                <span>
                    {word} <br />
                </span>
                ))}
            </h1> */}
            <h1 className="text-3xl text-blue-800 font-semibold">{head}</h1>
          </div>
        </div>
      </div>
      <div className="text-black m-auto">
          <p>{text}</p>
        </div>
    </div>
  );
}
