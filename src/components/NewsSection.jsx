import React from "react";

const NewsSection = () => {
  return (
    <div className="newsLetter_section">
      <h4>Join our newsLetter to keep up to date with us!</h4>
      <div className="subscribe_section">
        <div className="form-group">
          <span class="material-symbols-outlined">person</span>
          <input type="text" placeholder="Enter your email" />
        </div>
        <button className="submit_btn" type="submit">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsSection;
