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
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="Events" id="events">
      <div className="event_List">
        <h1>Past Events</h1>
      </div>

      <div className="subDescription">
        <p>
          The Digital Marketing Club has hosted a range of impactful sessions
          designed to enhance members' marketing skills. Participants gained
          hands-on experience in mastering search engine optimization techniques
          and were challenged to create engaging content through a week-long
          competition that fostered creativity in content strategy. Members also
          learned essential social media marketing strategies, focusing on
          building brand awareness and platform-specific approaches.
        </p>
      </div>
      <div className="event_List row g-4">
        <div className="Event_Card col-sm-3" data-aos="fade-left">
          <div className="Event_Card_img">
            <img src={E1} alt="" loading="lazy" />
          </div>
          <div className="Event_Card_content">
            <div className="event_title">Canva Workshop</div>
            <div className="event_description">
              The Canva workshop offers hands-on training in graphic design,
              enabling participants to create visually stunning content using
              Canva's intuitive tools.
            </div>
          </div>
        </div>
        <div className="Event_Card col-sm-3" data-aos="fade-right">
          <div className="Event_Card_img">
            <img src={E2} alt="" loading="lazy" />
          </div>
          <div className="Event_Card_content">
            <div className="event_title">Reel Making Competition</div>
            <div className="event_description">
              The Reel Making Competition challenges participants to create
              engaging, creative short videos that captivate audiences.
            </div>
          </div>
        </div>
        <div className="Event_Card col-sm-3" data-aos="fade-left">
          <div className="Event_Card_img">
            <img src={E3} alt="" loading="lazy" />
          </div>
          <div className="Event_Card_content">
            <div className="event_title">blog writing competition</div>
            <div className="event_description">
              The Blog Writing Competition invites participants to showcase
              their writing skills by crafting compelling and insightful blog
              posts.
            </div>
          </div>
        </div>
        <div className="Event_Card col-sm-3" data-aos="fade-right">
          <div className="Event_Card_img">
            <img src={E4} alt="" loading="lazy" />
          </div>
          <div className="Event_Card_content">
            <div className="event_title">Reels Competition</div>
            <div className="event_description">
              The Reels Competition encourages participants to create short,
              engaging videos that highlight creativity, storytelling, and
              content creation skills.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
