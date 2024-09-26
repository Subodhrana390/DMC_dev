import React from "react";
import { facultyMembers } from "../data/Data";
import FacultyCard from "../components/FacultyCard";
const Faculty = () => {
  return (
    <div className="faculty">
      <h1>Faculty Members</h1>
      <div className="row g-4">
        {facultyMembers.map(({ name, role, image, mail, linkedIn, index }) => (
          <FacultyCard
            key={index}
            name={name}
            role={role}
            image={image}
            mail={mail}
            linkedIn={linkedIn}
          />
        ))}
      </div>
    </div>
  );
};

export default Faculty;
