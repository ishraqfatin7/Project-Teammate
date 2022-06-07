import React from "react";
import grid1 from "../../images/grid-1.png";
import grid2 from "../../images/grid2.png";
import grid3 from "../../images/grid3.png";
import grid4 from "../../images/grid-4.png";

const HeroMain = () => {
  return (
    <div>
      <div className="flex flex-wrap  overflow-hidden sm:-mx-2 md:-mx-5 lg:-mx-5 xl:-mx-3">
        <div className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 md:my-5 md:px-5 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2">
          <div className="lg:flex flex flex-wrap  justify-center items center">
            <img src={grid1} alt="" className="mx-5" />
            <p>
              <span className="text-blue-700 font-semibold text-2xl">
                Find
                <br />
                skilled
                <br />
                members
                <br />
                or join
                <br />a team
              </span>
              <br />
              <span className="text-base-300 font-medium">
                Find members for your team <br></br> or join an existing one
              </span>
            </p>
          </div>
        </div>

        <div className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 md:my-5 md:px-5 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2">
          <div className="lg:flex flex flex-wrap  justify-center items center">
            <img src={grid2} alt="" className="mx-5" />
            <p>
              <span className="text-blue-700 font-semibold text-2xl">
                Build
                <br />
                Your
                <br />
                Team
                <br />
                Based On
                <br />
                Your Choice
              </span>
              <br />
              <span className="text-base-300 font-medium">
                Building a team on different skills is <br /> now easier than
                you think
              </span>
            </p>
          </div>
        </div>

        <div className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 md:my-5 md:px-5 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2">
          <div className="lg:flex flex flex-wrap justify-center items center lg:mx-5">
            <img src={grid3} alt="" className="" />
            <p>
              <span className="text-blue-700 font-semibold text-2xl">
                Meet
                <br />
                Super Skilled
                <br />
                People
                <br />
                Around The
                <br />
                World
              </span>
              <br />
              <span className="text-base-300 font-medium">
                Explore skilled persons on different fields <br></br> around you
                or around the world
              </span>
            </p>
          </div>
        </div>

        <div className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 md:my-5 md:px-5 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2">
          <div className="lg:flex flex flex-wrap  justify-center items center">
            <img src={grid4} alt="" className="mx-4" />
            <p>
              <span className="text-blue-700 font-semibold text-2xl">
                Work
                <br />
                Remotely
                <br />
                With Your Team
                <br />
                From Any Corner
                <br />
                of The World
              </span>
              <br />
              <span className="text-base-300 font-medium">
                Build your team and work from home or wherever <br /> you want
                and stay up-to-date
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
