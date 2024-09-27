import Aos from "aos";
import React from "react";
import { useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const TeamMemberCard = ({ key, image, name, role, social }) => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div
      className="col-sm-3 TeamMemberCard"
      key={key}
      style={{ paddingInline: window.innerWidth < 576 ? "35px" : "16px" }}
      data-aos={key % 2 === 0 ? "fade-left" : "fade-right"}
    >
      <div className="card">
        <div className="card-img">
          <img src={image} alt={name} loading="lazy" />
        </div>
        <div className="text-center">
          <h5 className="card_title">{name}</h5>
          <span className="card_post">{role}</span>
          <div className="social-icons">
            <a href={social.linkedIn} target="_blank">
              <FaLinkedin />
            </a>
            <a href={social.mail} target="_blank">
              <IoMdMail />
            </a>
            <a href={social.instagram} target="_blank">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
