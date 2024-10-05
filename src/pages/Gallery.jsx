import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Aos from "aos"; 

const Gallery = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_BASE_URL}/event/${id}`,
          {
            method: "GET",
            headers: {
              "x-authorization": import.meta.env.VITE_APP_X_AUTHORIZATION,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    Aos.init({
      duration: 1000,
      once: false,
    });
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ); // Bootstrap spinner for loading
  }

  if (!event) {
    return <div className="text-center mt-5">No event found.</div>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">{event.title}</h1>
      <p className="text-center mb-4">{event.description}</p>
      <div className="row">
        {event.photos?.map((image, index) => (
          <div
            key={index}
            className="col-sm-12 col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
          >
            <div className="card h-100">
              <img
                src={image.secure_url}
                alt={`Gallery image ${index}`}
                className="card-img-top"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
