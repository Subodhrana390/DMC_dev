import React from "react";
import Logo from "../assets/Logo.png";
import GNDEC_Logo from "../assets/GNDEC_Logo.png";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMdMail, IoMdMap } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className="footer_Section">
        <div className="footer_1">
          <div className="img_footer">
            <img src={Logo} alt="DMC_Logo" />
            <img src={GNDEC_Logo} alt="GNDEC_Logo" />
          </div>

          <h1 className="footer_title">
            Digital Marketing Club
            <br /> Guru Nanak Dev Engineering College, Ludhiana
          </h1>
          <div className="followUs_Section">
            <h5>Follow Us</h5>
            <div className="follows_icon">
              <a href="">
                <IoMdMail />
              </a>
              <a href=" https://www.facebook.com/official.gndec">
                <FaFacebook />
              </a>
              <a href="http://bit.ly/4eVXRQF">
                <FaYoutube />
              </a>
              <a href="http://bit.ly/3Wg4Axx">
                <FaLinkedin />
              </a>
              <a href="http://bit.ly/3W18Gbr">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_2">
          <div className="location">
            <IoMdMap />
            <h5>DMC, GNDEC</h5>
          </div>
          <div className="Links">
            <a href="/">Home</a>
            <a href="/">Faculty</a>
            <a href="/events">Events</a>
            <a href="">Members</a>
            <a href="">Contact</a>
            <a href="">Web Developer</a>
          </div>
        </div>
      </div>

      <div className="copyright_section">Copyright 2024 @ DMC GNDEC</div>
    </div>
  );
};

export default Footer;
