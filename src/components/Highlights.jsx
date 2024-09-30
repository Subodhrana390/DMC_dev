import React from "react";
import img1 from '../assets/Events/IMG_4042.jpg'
import img2 from '../assets/Events/Scanned_20240925-1846-26.jpg'
import img3 from '../assets/Events/IMG_20240812_124541.jpg'
import { useNavigate } from "react-router-dom";

const Highlights = () => {
    const navigate = useNavigate();
    return (
        <section id="highlights">
            <h4 className="heading">
                <span>Highlighted</span>Events
            </h4>
            <div className="container my-4">
                <div className="row g-4 justify-content-md-center">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <img src={img1} alt="" height={200} style={{ objectFit: "cover", borderRadius: "10px", width: "100%" }} />
                        <h4 style={{ fontSize: "20px", marginTop: "5px" }}>Canva Events 2023</h4>
                    </div>
                    <div className="col-sm-12 col-md-6  col-lg-4">
                        <img src={img2} alt="" height={200} style={{ objectFit: "cover", borderRadius: "10px", width: "100%" }} />
                        <h4 style={{ fontSize: "20px", marginTop: "5px" }}>Canva Events (25th Sep) </h4>
                    </div>
                    <div className="col-sm-12 col-md-6  col-lg-4">
                        <img src={img3} alt="" height={200} style={{ objectFit: "cover", borderRadius: "10px", width: "100%" }} />
                        <h4 style={{ fontSize: "20px", marginTop: "5px" }}>New Recruitment 2024</h4>
                    </div>
                </div>
            </div>
            <button onClick={() => navigate('/events')}>Past Events</button>
        </section>
    );
};

export default Highlights;
