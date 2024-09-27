import React from "react";
import E1 from "../assets/Events/E1.jpg";
import E2 from "../assets/Events/E2.jpg";
import E3 from "../assets/Events/E3.jpg";
import E4 from "../assets/Events/E4.jpg";
import { FaClock } from "react-icons/fa";
import { useEffect } from "react";
import Aos from "aos";

const Events = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,  // Animation duration
      once: false,     // Animations will trigger multiple times
    });
  }, []);
  return (
    <div className="Events">
      <div className="event_List">
        <h1>Events</h1>
      </div>
      <div className="event_List row g-4">
        <div className="Event_Card col-sm-3" data-aos="fade-left">
          <div className="Event_Card_img">
            <img src={E1} alt="" loading="lazy" />
          </div>
          <div className="Event_Card_content">
            <div className="event_title">Canva Workshop</div>
            <div className="event_Date">
              <FaClock /> <span>25th Sep 2024</span>
            </div>
            <div className="event_description">
              The Canva workshop offers hands-on training in graphic design, enabling participants to create visually stunning content using Canva's intuitive tools.
            </div>
            <button onClick={() => { }}>View Images</button>
          </div>
        </div>
        <div className="Event_Card col-sm-3" data-aos="fade-right">
          <div className="Event_Card_img">
            <img src={E2} alt="" loading="lazy" />
          </div>
          <div className="Event_Card_content">
            <div className="event_title">Reel Making Competition</div>
            <div className="event_Date">
              <FaClock /> <span>25th Sep 2024</span>
            </div>
            <div className="event_description">
              The Reel Making Competition challenges participants to create engaging, creative short videos that captivate audiences.
            </div>
            <button onClick={() => { }}>View Images</button>
          </div>
        </div>
        <div className="Event_Card col-sm-3" data-aos="fade-left">
          <div className="Event_Card_img">
            <img src={E3} alt="" loading="lazy" />
          </div>
          <div className="Event_Card_content">
            <div className="event_title">blog writing competition</div>
            <div className="event_Date">
              <FaClock /> <span>25th Sep 2024</span>
            </div>
            <div className="event_description">
              The Blog Writing Competition invites participants to showcase their writing skills by crafting compelling and insightful blog posts.
            </div>
            <button onClick={() => { }}>View Images</button>
          </div>
        </div>
        <div className="Event_Card col-sm-3" data-aos="fade-right">
          <div className="Event_Card_img">
            <img src={E4} alt="" loading="lazy" />
          </div>
          <div className="Event_Card_content">
            <div className="event_title">Reels Competition</div>
            <div className="event_Date">
              <FaClock /> <span>25th Sep 2024</span>
            </div>
            <div className="event_description">
              The Reels Competition encourages participants to create short, engaging videos that highlight creativity, storytelling, and content creation skills.
            </div>
            <button onClick={() => { }}>View Images</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
