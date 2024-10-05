import React from "react";

const Teams = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Our Teams</h2>
      
      <div className="row">
        {/* Core Team Card */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <img
              src="https://blogimage.vantagecircle.com/content/images/2020/08/teamwork-and-team-building.png" 
              className="card-img-top" 
              alt="Core Team"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Core Team</h5>
              <p className="card-text">
                The Core Team is the driving force behind our organization, ensuring success through leadership and teamwork.
              </p>
              <a href="/members" className="btn btn-primary">
                Meet the Core Team
              </a>
            </div>
          </div>
        </div>

        {/* Sub Core Team Card */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <img
              src="https://blogimage.vantagecircle.com/content/images/2020/08/teamwork-and-team-building.png"
              className="card-img-top" 
              alt="Sub Core Team"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Sub Core Team</h5>
              <p className="card-text">
                The Sub Core Team supports the Core Team in executing strategies and achieving goals.
              </p>
              <a href="/members" className="btn btn-secondary">
                Meet the Sub Core Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
