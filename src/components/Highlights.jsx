import React, { useEffect, useState } from "react";
import CanvaSep from "../assets/Events/canva_september.jpg";
import RecuritAugust from "../assets/Events/recurit_August.jpg";
import RecuritApril from "../assets/Events/recurit_April.jpg";
import Aos from "aos";

const styles = {
  img: {
    objectFit: "contain",
    borderRadius: "15px",
    width: "100%",
    height: "300px",
    boxShadow: "0 2px 0px 10px #bfd0d400",
  },
  text: {
    fontSize: "16px",
    marginTop: "5px",
    textAlign: "center",
    userSelect: "none",
    fontWeight: "600",
    cursor: "pointer",
  },
};
const Highlights = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_BASE_URL}/event?featured=true`,
          {
            method: "GET",
            headers: {
              "x-authorization": import.meta.env.VITE_APP_X_AUTHORIZATION,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data);
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
    <section id="highlights">
      <h4 className="heading">Highlights</h4>
      <div className="container my-4">
        <div className="row g-4">
        {!loading &&
          data &&
          data.length > 0 &&
          data.map((event,index) => (
            <div key={index} className="col-sm-12 col-md-6  col-lg-4" data-aos={index%2==0?"fade-left":"fade-right"}>
              <img src={event.flyer.secure_url} alt="" style={styles.img} />
              <h4 style={styles.text}>{event.title}</h4>
            </div>
          ))}

      </div>
      </div>
      <button onClick={() => (window.location.href = "/events")}>
        Past Events
      </button>
    </section>
  );
};

export default Highlights;
