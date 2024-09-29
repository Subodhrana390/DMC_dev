
import React from 'react';
import { FaStar } from "react-icons/fa";

const LatestUpdates = () => {

    const updates = [
        {
            title: "GNE'S APEX 2024 coming soon!",
            isNew: true,
        },
        {
            title: "Causmic Club organized a one day trip to Kasuali.",
            link: "https://causmic.gndec.ac.in/node/22",
        },
        {
            title: "Causmic Club organized a workshop on Git and Linux.",
        },
        {
            title: "Genconian Grand Prix organized by Causmic Club.",
            link: "https://www.linkedin.com/posts/causmic-club_gndec-ludhiana-genconian-activity-7183447647494586370-oUh4?utm_source=share&utm_medium=member_desktop",
        },
        {
            title: "Poetry Writing and Card Making Competition on Mother's Day.",
            link: "https://www.linkedin.com/posts/causmic-club_happymothersday-causmicclub-poetrycompetition-activity-7063386186035138560-qrFn?utm_source=share&utm_medium=member_android",
        },
        {
            title: "Anandpur Sahib and Virasat-E-Khalsa excursion by Causmic Club.",
        },
    ];

    return (
        <div id="block-latestnews" className="block">
            <div className="block-content">
                <div className="mainHeading block-content" id="latestNews">
                    <h1>Notice Board</h1>
                    <div className="News">
                        <div id="allLatestNews">
                            <ul className="news-list">
                                {updates.map((update, index) => (
                                    <li key={index} >
                                        {update.isNew && (
                                            <span className="new-badge">
                                                <FaStar color="#FFD700" size={20} />
                                            </span>
                                        )}
                                        {update.title}
                                        {update.link && (
                                            <a href={update.link} target="_blank" rel="noopener noreferrer">
                                                Learn more
                        </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestUpdates;
