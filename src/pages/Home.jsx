import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import JoinNow from "../components/JoinNow";
import NewsSection from "../components/NewsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <JoinNow />
      <NewsSection />
    </>
  );
};

export default Home;
