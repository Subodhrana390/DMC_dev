<<<<<<< HEAD
import React, { useEffect } from "react";
import Logo from "../assets/Logo.png";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="about-container">
      <div className="left" data-aos="fade-left">
=======
import React from "react";
import Logo from "../assets/Logo.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="left">
>>>>>>> 6073ac9 (feat : links updated)
        <h1 className="about_title">About DMC</h1>
        <p className="about_description">
          The Digital Marketing Club empowers members with hands-on experience
          through real-world projects, enhancing their skills in SEO, social
          media, and content creation.
          <br />
          <br />
          It offers valuable networking opportunities with peers and industry
          professionals, fostering connections for future career growth.
        </p>
        <a href="/about" className="text_button">
          Learn More
        </a>
      </div>
      <div className="right" data-aos="right">
        <img src={Logo} alt="DMC Logo" loading="lazy" />
      </div>
    </div>
  );
};

export default About;
