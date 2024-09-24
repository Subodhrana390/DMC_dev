import React from "react";

const HeroSection = () => {
  return (
    <div
      className="hero_section d-flex flex-column justify-content-center align-items-start p-18"
      style={{ height: "90vh" }}
    >
      <h1 className="Hero-title">Digital Marketing Club</h1>
      <p className="Hero-description">
        Transform your digital marketing journey by focusing on building a
        strong brand identity, leveraging data-driven insights, and creating
        meaningful connections with your audience. Start by defining your brand
        values and ensuring consistency in both your visuals and messaging
        across all platforms. Use data-driven insights to understand customer
        behavior and optimize your campaigns for better engagement and
        conversions. Elevate your content with compelling storytelling, and
        personalize your messaging to resonate with your target audience.
        Together, these strategies will help you stand out in the competitive
        digital landscape and create lasting marketing magic!
      </p>

      <a className="text_button" href="/about">
        About Us
      </a>
    </div>
  );
};

export default HeroSection;
