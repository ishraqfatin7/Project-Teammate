import React from "react";

export default function MiniCard({ image, title }) {
  return (
    <div className="md:p-11 lg:10 p-5 lg:mx-5 w-100 py-4 shadow-2xl">
      <figure>
        <img className="w-25 xs:w-10" src={image} alt="" />
      </figure>
      <div className=" mt-2 -mx-2">
        <h2 className="text-black xs:text-xs sm:text-lg xs:w-12 xs:h-16">
          {title}
        </h2>
      </div>
    </div>
  );
}
