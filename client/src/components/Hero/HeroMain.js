import React from "react";
import HeroCard from "./HeroCard";
import grid1 from "../../images/grid-1.png";
import grid2 from "../../images/grid2.png";
import grid3 from "../../images/grid3.png";
import grid4 from "../../images/grid-4.png";


let head1 = "Find skilled members or join a team";
let head2 = "Build Your Team Based on Your choice";
let head3 = "meet super skilled people around the world";
let head4 = "work remotely with your team from any corner of the world";

let text1 = "Find members for your team or join an existing one";
let text2 = "Building a team on different skills is now easier than you think";
let text3 =
  "Explore skilled persons on different fields around you or around the world";
let text4 =
  "Build your team and work from home or wherever you want and stay up-to-date";


const HeroMain = () => {
  return (
    <div>
      <div className="m-auto h-fit lg:flex lg:max-w-7xl lg:items-start">
        <HeroCard grid={grid1} head={head1} text={text1} />
        <HeroCard grid={grid2} head={head2} text={text2} />
      </div>
      <div className="m-auto h-fit lg:flex lg:max-w-7xl lg:items-start">
        <HeroCard grid={grid3} head={head3} text={text3} />
        <HeroCard grid={grid4} head={head4} text={text4} />
      </div>
    </div>
  );
};

export default HeroMain;
