import React from "react";
import Team from "../assets/hero.webp";
import Amit from "../assets/Faculty/amit kamra  sir.jpg";
import Jaswant from "../assets/Faculty/jaswant sir.png";
import Dinesh from "../assets/Faculty/dinesh sir.jpg";
import Shiva from "../assets/Faculty/shivman sir.jpg";
import Gurleen from "../assets/Team Heads/Gurleen.jpg";
import Samiya from "../assets/Team Heads/samiya.jpg";
import Harmeet from "../assets/Team Heads/Harmeet.jpg";
import Puneet from "../assets/Team Heads/puneet.png";
import Anmol from "../assets/SubCoreTeam/anmol.jpg";
import Assa from "../assets/SubCoreTeam/assa.jpg";
import Ayush from "../assets/SubCoreTeam/Ayush Patel.jpg";
import Tanisha from "../assets/SubCoreTeam/dhawan.png";
import Dilnaz from "../assets/SubCoreTeam/Dilnaz Kaur Grewal.jpg";
import Gokul from "../assets/SubCoreTeam/Gokul.jpg";
import Hargun from "../assets/SubCoreTeam/hargun.png";
import Harinder from "../assets/SubCoreTeam/harinder.jpg";
import Himanshu from "../assets/SubCoreTeam/Himanshu.jpg";
import Harjot from "../assets/SubCoreTeam/Harjot Singh.jpg";
import Kanika from "../assets/SubCoreTeam/kanika.jpg";
import Nitan from "../assets/SubCoreTeam/nitan.jpg";
import Savreet from "../assets/SubCoreTeam/Savreet Kaur.jpg";
import SukhRaj from "../assets/SubCoreTeam/sukhraj.jpg";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="container py-5">
      {/* Heading Section */}
      <div className="text-center mb-0 heading_section">
        <h1 className="display-4">About DMC</h1>
        <p className="lead">
          Fosters a learning environment that encourages creativity,
          collaboration, and career growth in the field of digital marketing.
        </p>
      </div>

      {/* Main About Section */}
      <div className="main_about my-5">
        {/* Team Image */}
        <div className="">
          <img
            src={Team}
            alt="Digital Marketing Team"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* About Content */}
        <div className="col-md-12 mt-5 about_content">
          <h1 className="mb-3">Digital Marketing Club</h1>
          <p>
            The Digital Marketing Club is a thriving community for individuals
            who share a passion for digital marketing. It offers a platform for
            like-minded individuals to come together and engage in meaningful
            learning experiences. Through workshops and interactive sessions,
            members are introduced to the latest trends, tools, and strategies
            in the rapidly changing digital marketing industry, ensuring they
            remain competitive and informed.
          </p>
          <p>
            In addition to learning opportunities, the club emphasizes
            collaboration and networking. Members can connect with peers,
            professionals, and industry experts, allowing them to build strong
            professional relationships. These connections create opportunities
            for mentorship, partnership, and knowledge-sharing, further
            enhancing their digital marketing skills and career prospects.
          </p>
          <p>
            What sets the club apart is its focus on hands-on experience.
            Members can participate in real-world projects and campaigns,
            applying what they’ve learned in practical scenarios. This
            experiential approach helps them build confidence, refine their
            strategies, and better understand how to navigate the digital
            marketing landscape, ensuring their growth as competent and
            effective marketers.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team_section">
        {/* DMC Team Heading */}
        <div className="text-center my-5">
          <h2 className="display-5">DMC Team</h2>
        </div>
        {/* Faculty Details */}
        <h3 className="mb-4 text-center Faculty_title">Faculty Details</h3>
        <div className="row g-4">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Amit} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Dr. Amit Karma</h5>
                <span className="cardpost">Faculty Coordinator</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Jaswant} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Prof. Jaswant Singh</h5>
                <span className="cardpost">Faculty Co-Cordinator</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Shiva} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Prof. Shivamanmeet Singh</h5>
                <span className="cardpost">Secretary</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Dinesh} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Prof. Dinesh Anand</h5>
                <span className="cardpost">Student Cordinator</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Heads */}
        <h3 className="my-4 text-center Faculty_title">Team Heads</h3>
        <div className="row g-4">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Gurleen} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Gurleen Kaur</h5>
                <span className="cardpost">Covenor</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Harmeet} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Harmeet Kaur</h5>
                <span className="cardpost">Co-covevnor</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Puneet} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Puneet Jain</h5>
                <span className="cardpost">Co-conevnor</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Samiya} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Samiya Seghal</h5>
                <span className="cardpost">Secretary</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sub Core Team */}
        <h3 className="my-4 text-center Faculty_title">Sub Core Team</h3>
        <div className="row g-4 my-2">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Nitan} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Nitan Singh</h5>
                <span className="cardpost">Content Coordinator</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Harmeet} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Gokul Malik</h5>
                <span className="cardpost">Content Coordinator</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={SukhRaj} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Sukhraj Singh</h5>
                <span className="cardpost">
                  Event Management and Discipline Head
                </span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Hargun} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Hargundeep Singh</h5>
                <span className="cardpost">Social Media Head</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 my-2">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Kanika} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Kanika Mittal</h5>
                <span className="cardpost">Design Head</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Ayush} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Ayush Patel</h5>
                <span className="cardpost">Design Head</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Tanisha} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Tanisha Dhawan</h5>
                <span className="cardpost">Photography Head</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Harjot} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Harjot Singh</h5>
                <span className="cardpost">Photography Head</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 my-2">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Harinder} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Harinder Singh</h5>
                <span className="cardpost">Videography Head</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Himanshu} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Himanshu Gambhir</h5>
                <span className="cardpost">Videography Head</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Savreet} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Savreet Kaur</h5>
                <span className="cardpost">Reels Head</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Anmol} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Anmol Kumar</h5>
                <span className="cardpost">Reels Head</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 my-2">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src="" className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Tarandeep Kaur</h5>
                <span className="cardpost">Techanical and Database Head</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Assa} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Assa Singh</h5>
                <span className="cardpost">Techanical and Database Head</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-img">
                <img src={Dilnaz} className="" alt="Faculty Name" />
              </div>
              <div className="text-center">
                <h5 className="card_title">Dilnaz Kaur Grewal</h5>
                <span className="cardpost">Content and Documentation Head</span>
                <div className="social-icons">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
