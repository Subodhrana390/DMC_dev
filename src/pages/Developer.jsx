import React, { useEffect } from "react";
import Subodh from "../assets/Developer/Subodh.jpg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Aos from "aos";

const Developer = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false
    })
  }, [])
  return (
    <div className="developer">
      <h1>Contributors</h1>
      <div className="contributor row g-4">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 developer_card">
          <div className="developer_card_img">
            <img src={Subodh} alt="Subodh Rana" loading="lazy" />
          </div>
          <div className="developer_card_body">
            <div className="developer_card_title">SUBODH RANA</div>
            <div className="developer_card_desc">Full Stack Developer</div>
          </div>
          <div className="developer_card_content">
            <div className="developer_card_content_img">
              <img src={Subodh} alt="Subodh Rana" loading="lazy" />
            </div>
            <div className="developer_card_content_body">
              <div className="developer_card_content_desc">
                I am a B.Tech student in Computer Science and Engineering
                [2023-27]
              </div>
              <div className="developer_card_content_social_icons">
                <a href="#" target="_blank">
                  <FaLinkedin />
                </a>
                <a href="#" target="_blank">
                  <IoMdMail />
                </a>
                <a href="#" target="_blank">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
