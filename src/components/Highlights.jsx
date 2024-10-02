import React from "react";
import CanvaSep from "../assets/Events/canva_september.jpg";
import RecuritAugust from "../assets/Events/recurit_august.jpg";
const Highlights = () => {
  return (
    <section id="highlights">
      <h4 className="heading">Highlights</h4>
      <div className="container my-4">
        <div className="row g-4 justify-content-md-center">
          <div className="col-sm-12 col-md-6  col-lg-4">
            <img
              src={CanvaSep}
              alt=""
              height={200}
              style={{
                objectFit: "cover",
                borderRadius: "10px",
                width: "100%",
                boxShadow: "0 2px 0px 2px #bfd0d400",
              }}
            />
            <h4
              style={{
                fontSize: "20px",
                marginTop: "5px",
                textAlign: "center",
                userSelect: "none",
                fontWeight: "900",
                cursor: "pointer",
              }}
            >
              Canva Events (25th Sep){" "}
            </h4>
          </div>
          <div className="col-sm-12 col-md-6  col-lg-4">
            <img
              src={RecuritAugust}
              alt=""
              height={200}
              style={{
                objectFit: "cover",
                borderRadius: "10px",
                width: "100%",
                boxShadow: "0 2px 0px 10px #bfd0d400",
              }}
            />
            <h4
              style={{
                fontSize: "20px",
                marginTop: "5px",
                textAlign: "center",
                userSelect: "none",
                fontWeight: "900",
                cursor: "pointer",
              }}
            >
              New Recruitment 2024
            </h4>
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
