import React, { useEffect } from "react";
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
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section id="highlights">
      <h4 className="heading">Highlights</h4>
      <div className="container my-4">
        <div className="row g-4 justify-content-md-center">
          <div className="col-sm-12 col-md-6  col-lg-4" data-aos="fade-left">
            <img src={CanvaSep} alt="" style={styles.img} />
            <h4 style={styles.text}>Canva Events (25th Sep) </h4>
          </div>
          <div className="col-sm-12 col-md-6  col-lg-4" data-aos="fade-right">
            <img src={RecuritAugust} alt="" style={styles.img} />
            <h4 style={styles.text}>New Recruitment 2024 (August)</h4>
          </div>
          <div className="col-sm-12 col-md-6  col-lg-4" data-aos="fade-right">
            <img src={RecuritApril} alt="" style={styles.img} />
            <h4 style={styles.text}>New Recruitment 2024 (April)</h4>
          </div>
        </div>
      </div>
      <button onClick={() => (window.location.href = "/events")}>
        Past Events
      </button>
    </section>
  );
};

export default Highlights;
