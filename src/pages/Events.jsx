import React from "react";
import E1 from "../assets/Events/E1.jpeg";
import { FaClock } from "react-icons/fa";

const Events = () => {
  return (
    <div className="Events">
      <div className="event_List">
        <h1>Previous Happened Events</h1>
      </div>
      <div className="event_List row g-4">
        <div className="Event_Card col-sm-3">
          <div className="Event_Card_img">
            <img src={E1} alt="" />
          </div>
          <div className="Event_Card_content">
            <div className="event_title">WildLife Reserve</div>
            <div className="event_Date">
              <FaClock /> <span>25th Sep 2024</span>
            </div>
            <div className="event_description">
              A Wildlife Reserve is a protected area dedicated to the
              conservation of native ecosystems, habitats, and the diverse
              species that call them home.
            </div>
            <button onClick={() => {}}>View Images</button>
          </div>
        </div>
        <div className="Event_Card col-sm-3">
          <div className="Event_Card_img">
            <img src={E1} alt="" />
          </div>
          <div className="Event_Card_content">
            <div className="event_title">WildLife Reserve</div>
            <div className="event_Date">
              <FaClock /> <span>25th Sep 2024</span>
            </div>
            <div className="event_description">
              A Wildlife Reserve is a protected area dedicated to the
              conservation of native ecosystems, habitats, and the diverse
              species that call them home.
            </div>
            <button onClick={() => {}}>View Images</button>
          </div>
        </div>
        <div className="Event_Card col-sm-3">
          <div className="Event_Card_img">
            <img src={E1} alt="" />
          </div>
          <div className="Event_Card_content">
            <div className="event_title">WildLife Reserve</div>
            <div className="event_Date">
              <FaClock /> <span>25th Sep 2024</span>
            </div>
            <div className="event_description">
              A Wildlife Reserve is a protected area dedicated to the
              conservation of native ecosystems, habitats, and the diverse
              species that call them home.
            </div>
            <button onClick={() => {}}>View Images</button>
          </div>
        </div>
        <div className="Event_Card col-sm-3">
          <div className="Event_Card_img">
            <img src={E1} alt="" />
          </div>
          <div className="Event_Card_content">
            <div className="event_title">WildLife Reserve</div>
            <div className="event_Date">
              <FaClock /> <span>25th Sep 2024</span>
            </div>
            <div className="event_description">
              A Wildlife Reserve is a protected area dedicated to the
              conservation of native ecosystems, habitats, and the diverse
              species that call them home.
            </div>
            <button onClick={() => {}}>View Images</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
