import React from "react";
import cardImg from "../assets/core.png";
const Teams = () => {
  return (
    <div className="container text-center">
      <h4>Teams</h4>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <a href="/members">Core Team</a>
          </div>
          <div className="col-sm-12 col-md-6">
            {" "}
            <a href="/members">Sub Core Team</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
