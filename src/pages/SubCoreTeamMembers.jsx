import React from "react";
import { SubCoreTeam } from "../data/Data";
import TeamMemberCard from "../components/TeamMemberCard";
const SubCoreTeamMembers = () => {
  return (
    <div className="members">
      {/* Sub Core Team */}
      <h3 className="my-4 text-center Faculty_title">Sub-Core Members</h3>
      <div className="row g-4">
        {SubCoreTeam.map(({ index, name, role, image, social }) => (
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

export default SubCoreTeamMembers;
