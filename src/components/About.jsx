import React from "react";
import Logo from "../assets/Logo.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="left">
        <h1 className="about_title">About DMC</h1>
        <p className="about_description">
          The Digital Marketing Club empowers members with hands-on experience
          through real-world projects, enhancing their skills in SEO, social
          media, and content creation.
          <br />
          It offers valuable networking opportunities with peers and industry
          professionals, fostering connections for future career growth.
        </p>
        <a href="#" className="text_button">
          Learn More
        </a>
      </div>
      <div className="right">
        <img src={Logo} alt="DMC Logo" loading="lazy" />
      </div>
    </div>
  );
};

export default About;
