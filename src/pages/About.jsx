import React, { useEffect } from "react";
import AOS from "aos";
import Logo from "../assets/Logo.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="about-container" id="about">
        <div className="left" data-aos="fade-right">
          <h1 className="about_title">About DMC</h1>
          <p className="about_description">
            A Digital Marketing Club is a dynamic community where individuals
            passionate about digital marketing come together to learn,
            collaborate, and grow. It provides members with opportunities to
            stay updated on the latest trends and strategies in areas like SEO,
            social media marketing, content creation, and more through
            expert-led workshops and webinars. The club encourages collaboration
            on real-world projects, allowing participants to gain practical
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
        <div className="right" data-aos="fade-left">
          <img src={Logo} alt="DMC Logo" loading="lazy" />
        </div>
      </div>

      <div className="row our_features">
        <div className="col-sm-12 col-md-6">
          <div className="feature_card">
            <h3>Our Vision</h3>
            <p>
              To create a thriving community of innovative digital marketers,
              where students collaborate, learn, and grow together, shaping the
              future of the digital landscape with creativity, knowledge, and
              hands-on experience.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="feature_card">
            <h3>Our Mission</h3>
            <p>
              To empower students with the latest digital marketing skills and
              practical experience through workshops, real-world projects, and
              collaborative learning, while fostering professional growth and
              valuable industry connections.
            </p>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="count_card">
            <h5>Faculty Member</h5>
            <span>4</span>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="count_card">
            <h5>Core Member</h5>
            <span>4</span>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 ">
          <div className="count_card">
            <h5>Sub Core Member</h5>
            <span>16</span>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="count_card">
            <h5>Active Member</h5>
            <span>25</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
