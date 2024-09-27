import React from "react";
import Logo from "../assets/Logo.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="left">
        <h1 className="about_title">About DMC</h1>
        <p className="about_description">
          A Digital Marketing Club is a dynamic community where individuals
          passionate about digital marketing come together to learn,
          collaborate, and grow. It provides members with opportunities to stay
          updated on the latest trends and strategies in areas like SEO, social
          media marketing, content creation, and more through expert-led
          workshops and webinars. The club encourages collaboration on
          real-world projects, allowing participants to gain practical
          experience while enhancing their marketing skills. Members also
          benefit from networking opportunities with like-minded peers and
          industry professionals, creating valuable connections for future
          career growth. Overall, the club fosters creativity, hands-on
          learning, and professional development in the fast-paced digital
          marketing landscape.
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
