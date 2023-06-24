import React from "react";
import OurTeamCard from "./OurTeamCard";

function OurTeam() {
  return (
    <div className="p-5 lg:px-36">
      <h3 className="mb-6 text-[28px] xl:bottom-[30%] xl:text-[48px]">
        Our Team
      </h3>
      <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {Array(4)
          .fill(0)
          .map((e, i) => (
            <OurTeamCard key={`our-team-card-${i}`} />
          ))}
      </div>
    </div>
  );
}

export default OurTeam;
