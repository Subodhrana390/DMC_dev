import Aos from "aos";
import React, { useEffect, useState } from "react";
import { MdFiberNew } from "react-icons/md";

const LatestUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_BASE_URL}/updates/public`,
          {
            method: "GET",
            headers: {
              "x-authorization": import.meta.env.VITE_APP_X_AUTHORIZATION,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setUpdates(data.updates);
        setLoading(false);
      } catch (error) { }
    }
<<<<<<< HEAD
    Aos.init({
      duration: 1000,
      once: false,
    });
=======
>>>>>>> 6073ac9 (feat : links updated)
    fetchData();
  }, []);
  // const updates = [
  //   {
  //     title: "GNE'S APEX 2024 coming soon!",
  //     isNew: true,
  //   },
  //   {
  //     title: "Causmic Club organized a one day trip to Kasuali.",
  //     isNew: true,
  //     link: "https://causmic.gndec.ac.in/node/22",
  //   },
  //   {
  //     title: "Causmic Club organized a workshop on Git and Linux.",
  //     isNew: true,
  //   },
  //   {
  //     title: "Genconian Grand Prix organized by Causmic Club.",
  //     link: "https://www.linkedin.com/posts/causmic-club_gndec-ludhiana-genconian-activity-7183447647494586370-oUh4?utm_source=share&utm_medium=member_desktop",
  //   },
  //   {
  //     title: "Poetry Writing and Card Making Competition on Mother's Day.",
  //     link: "https://www.linkedin.com/posts/causmic-club_happymothersday-causmicclub-poetrycompetition-activity-7063386186035138560-qrFn?utm_source=share&utm_medium=member_android",
  //   },
  //   {
  //     title: "Anandpur Sahib and Virasat-E-Khalsa excursion by Causmic Club.",
  //   },
  // ];

  return (
<<<<<<< HEAD
    <div id="block-latestnews" className="block" data-aos="fade-left">
=======
    <div id="block-latestnews" className="block">
>>>>>>> 6073ac9 (feat : links updated)
      <div className="block-content">
        <div id="latestNews">
          <div className="News">
            <h1>Notice Board</h1>
            <ul className="news-list">
              {!loading && (
                updates &&
                updates.length > 0 &&
                updates.map((update, index) => (
                  <li key={index}>
                    {update.isNew && (
                      <span>
                        <MdFiberNew color="#FFD700" size={30} />
                      </span>
                    )}
                    {update.title}
                    {update.link && (
                      <a
                        href={update.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more
                      </a>
                    )}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
