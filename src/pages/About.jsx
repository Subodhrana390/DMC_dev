import React from "react";
import Team from "../assets/hero.webp";
import { facultyMembers, CoreTeam, SubCoreTeam } from "../data/Data";
import FacultyCard from "../components/FacultyCard";
import TeamMemberCard from "../components/TeamMemberCard";

const About = () => {
  return (
    <div className="container py-5">
      {/* Heading Section */}
      <div className="text-center mb-0 heading_section">
        <h1 className="display-4 ">About DMC</h1>
        <p className="lead">
          Fosters a learning environment that encourages creativity,
          collaboration, and career growth in the field of digital marketing.
        </p>
      </div>

      {/* Main About Section */}
      <div className="main_about my-5">
        {/* Team Image */}
        <div className="">
          <img
            src={Team}
            alt="Digital Marketing Team"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* About Content */}
        <div className="col-md-12 mt-5 about_content">
          <h1 className="mb-3">Digital Marketing Club</h1>
          <p>
            The Digital Marketing Club is a thriving community for individuals
            who share a passion for digital marketing. It offers a platform for
            like-minded individuals to come together and engage in meaningful
            learning experiences. Through workshops and interactive sessions,
            members are introduced to the latest trends, tools, and strategies
            in the rapidly changing digital marketing industry, ensuring they
            remain competitive and informed.
          </p>
          <p>
            In addition to learning opportunities, the club emphasizes
            collaboration and networking. Members can connect with peers,
            professionals, and industry experts, allowing them to build strong
            professional relationships. These connections create opportunities
            for mentorship, partnership, and knowledge-sharing, further
            enhancing their digital marketing skills and career prospects.
          </p>
          <p>
            What sets the club apart is its focus on hands-on experience.
            Members can participate in real-world projects and campaigns,
            applying what they’ve learned in practical scenarios. This
            experiential approach helps them build confidence, refine their
            strategies, and better understand how to navigate the digital
            marketing landscape, ensuring their growth as competent and
            effective marketers.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team_section" id="members">
        {/* DMC Team Heading */}
        <div className="text-center my-5">
          <h2 className="display-5">DMC Team</h2>
        </div>
        {/* Faculty Details */}
        <h3 className="mb-4 text-center Faculty_title">Faculty Details</h3>
        <div className="row g-4">
          {facultyMembers.map(
            ({ name, role, image, mail, linkedIn, index }) => (
              <FacultyCard
                key={index}
                name={name}
                role={role}
                image={image}
                mail={mail}
                linkedIn={linkedIn}
              />
            )
          )}
        </div>
      </div>
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
      {/* Sub Core Team */}
      <h3 className="my-4 text-center Faculty_title">Sub Core Team</h3>
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

export default About;
