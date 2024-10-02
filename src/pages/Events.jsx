import React from "react";
import BlogWritting from "../assets/Events/Blog_writting.jpg";
import CanvaMArch from "../assets/Events/Canva_march.jpg";
import Reel from "../assets/Events/Reel_video.jpg";
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

      <div className="subDescription" data-aos="fade-right">
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
            <img src={CanvaMArch} alt="" loading="lazy" />
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
            <img src={Reel} alt="" loading="lazy" />
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
            <img src={BlogWritting} alt="" loading="lazy" />
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
      </div>
    </div>
  );
};

export default Events;
