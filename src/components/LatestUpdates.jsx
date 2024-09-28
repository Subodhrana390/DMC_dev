import React from 'react';

const updates = [
    {
        title: "New Feature Released",
        description: "We have released a new feature for better user experience. Check it out now!",
        link: "#",
    },
    {
        title: "Scheduled Maintenance",
        description: "Our website will undergo maintenance on October 5th. Please plan accordingly.",
        link: "#",
    },
    {
        title: "Community Event",
        description: "Join us for an exclusive community event this weekend!",
        link: "#",
    },
];

const LatestUpdates = () => {
    return (
        <div className="latest-updates-container">
            <h1 className="updates-title">Latest Updates</h1>
            <div className="updates-grid">
                {updates.map((update, index) => (
                    <div className="update-box" key={index}>
                        <h2>{update.title}</h2>
                        <p>{update.description}</p>
                        <a href={update.link} className="update-link">
                            Read more
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestUpdates;
