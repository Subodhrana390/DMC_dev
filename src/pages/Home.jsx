import React, { lazy, Suspense } from "react";

const HeroSection = lazy(() => import("../components/HeroSection"));
const About = lazy(() => import("../components/About"));
const JoinNow = lazy(() => import("../components/JoinNow"));
const NewsSection = lazy(() => import("../components/NewsSection"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
      <About />
      <JoinNow />
      <NewsSection />
    </Suspense>
  );
};

export default Home;
