import React from "react";
import { TEAMINFO, TeamDetails } from "./TeamInfo";
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <div id="team" className="items-center justify-center sm:p-0 p-5 w-full sm:py-14 xl:py-20 flex gap-4 flex-col">
      <div className="flex flex-col gap-1 sm:p-10 items-center justify-center">
        <h1 className="bg-[#512B81] text-white rounded-full p-1 px-4 mb-2 ring-1">
          TEAM
        </h1>
      </div>
      <div className="flex gap-4 pb-10">
        {TeamDetails.map((team: TEAMINFO, index) => (
          <TeamCard
            key={index}
            githubUrl={team.GithubUrl}
            cardTitleSvg={team.GithubProfileUrl}
            CardTitleText={team.username}
          />
        ))}
      </div>
    </div>
  );
}
