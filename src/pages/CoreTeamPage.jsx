import React from "react";
import { CoreTeam } from "../data/Data";
import TeamMemberCard from "../components/TeamMemberCard";
const CoreTeamPage = () => {
  return (
    <div className="members">
      <h1>Core Members</h1>
      {/* Team Heads */}
      <h3 className="my-4 text-center Faculty_title">Core Team</h3>
      <div className="row g-4">
        {CoreTeam.map(({ index, name, role, image, social }) => (
          <TeamMemberCard
            key={index}
            name={name}
            role={role}
            image={image}
            social={social}
          />
        ))}
      </div>
    </div>
  );
};

export default CoreTeamPage;
