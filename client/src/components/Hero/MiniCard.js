import React from "react";

export default function MiniCard({image, title}) {
  return (
    <div className="p-5 w-28 shadow-2xl">
      <figure>
        <img
          className="w-24 xs:w-10"
          src={image}
          alt=""
        />
      </figure>
      <div className=" mt-2">
        <h2 className="text-black xs:text-xs sm:text-lg xs:w-12 xs:h-16">
            {title}
        </h2>
      </div>
    </div>
  );
}
