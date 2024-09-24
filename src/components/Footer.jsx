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
            <img src={Logo} alt="" />
            <img src={GNDEC_Logo} alt="" />
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
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaYoutube />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
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
            <a href="">Home</a>
            <a href="">Faculty</a>
            <a href="">Events</a>
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
