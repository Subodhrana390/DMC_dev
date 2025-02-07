import React, { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";

const Events = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_BASE_URL}/event?featured=false`,
          {
            method: "GET",
            headers: {
              "x-authorization": import.meta.env.VITE_APP_X_AUTHORIZATION,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
<<<<<<< HEAD
        console.log(data);
=======
>>>>>>> 6073ac9 (feat : links updated)
        setData(data);
        setLoading(false);
      } catch (error) {}
    }
    fetchData();
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
        {loading ? (
          <div className="d-inline-flex justify-content-center">
            <div className="loader"></div>
          </div>
        ) : (
          data &&
          data.length > 0 &&
          data.map((event) => (
            <div className="Event_Card col-sm-3" data-aos="fade-left">
              <div className="Event_Card_img">
                <img
                  src={event.flyer.secure_url}
                  alt={event.flyer.original_filename}
                  loading="lazy"
                />
              </div>
              <div className="Event_Card_content">
                <div
                  className="event_title"
                  onClick={() =>
                    (window.location.href = `/gallery/${event._id}`)
                  }
                >
                  {event.title}
                </div>
                <div className="event_description">{event.description}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Events;
