import React from "react";
import Slide1 from "../assets/Events/IMG_4046.jpg";
import Slide2 from "../assets/Events/Scanned_20240925-1846-26.jpg";

const Slider = () => {
  return (
    <div className="Slider">
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
  
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={Slide1}
            className="d-block w-100"
            alt="Slide 1"
            style={{ height: "auto", maxHeight: "500px", objectFit: "cover" }}
          />
          <div className="carousel-caption-overlay">
            <h1>Canva Workshop (March, 2024)</h1>
            <p></p>
          </div>
        </div>
  
        <div className="carousel-item">
          <img
            src={Slide2}
            className="d-block w-100"
            alt="Slide 2"
            style={{ height: "auto", maxHeight: "500px", objectFit: "cover" }}
          />
          <div className="carousel-caption-overlay">
            <h1>Canva Workshop (Sep, 2024)</h1>
            <p></p>
          </div>
        </div>
      </div>
  
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
  
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  
  );
};

export default Slider;
