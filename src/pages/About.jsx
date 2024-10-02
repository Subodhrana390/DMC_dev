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
            The Digital Marketing Club at Guru Nanak Dev Engineering College
            (GNDEC) is a vibrant platform for students interested in the rapidly
            evolving field of digital marketing. This club offers a unique
            opportunity for members to engage in interactive learning
            experiences and stay abreast of the latest trends in the digital
            marketing space, including SEO, social media strategies, content
            marketing, and data analytics. <br />
            <br />
            The Digital Marketing Club at GNDEC emphasizes the importance of
            collaboration, enabling students to work together on innovative
            projects while also networking with professionals and alumni in the
            industry. This active participation not only improves students'
            technical marketing skills but also creates meaningful connections,
            offering avenues for internships and career opportunities in the
            digital marketing industry. The club serves as a resourceful
            environment that nurtures creativity, professional growth, and
            learning, ensuring that students are well-prepared to thrive in the
            fast-paced digital marketing landscape. For more details, visit the
            GNDEC official website.
          </p>
          <a href="https://www.gndec.ac.in" className="text_button">
            Learn More
          </a>
        </div>
        <div className="right" data-aos="fade-left">
          <img src={Logo} alt="DMC Logo" loading="lazy" />
        </div>
      </div>

      <div className="row our_features">
        <div className="col-sm-12 col-md-6">
          <div className="feature_card" data-aos="fade-left">
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
          <div className="feature_card" data-aos="fade-right">
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
      <div className="row g-0" data-aos="fade-left">
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
