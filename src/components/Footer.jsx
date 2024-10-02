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
            <img src={Logo} alt="DMC_Logo" loading="lazy" />
            <img src={GNDEC_Logo} alt="GNDEC_Logo" loading="lazy" />
          </div>

          <div className="footer_title">
            <span>Digital Marketing Club</span>
            <span>Guru Nanak Dev Engineering College</span>
            <span>Ludhiana</span>
          </div>
          <div className="followUs_Section">
            <h5>Follow Us</h5>
            <div className="follows_icon">
              <a href="mailto:gndecdigitalmarketing@gmail.com">
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
          <div className="col-sm-12 col-md-6">
            <div className="Links">
              <h4>Main Links</h4>
              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/events">Events</a>
              <a href="/teams">Teams</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="Links">
              <h4>Links</h4>
              <a href="/faculty">Faculty</a>
              <a href="/members">Members</a>
              <a href="/developer">Web Developer</a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright_section">2024 © Digital Marketing Club</div>
    </div>
  );
};

export default Footer;
