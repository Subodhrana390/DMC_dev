import React, { lazy, Suspense } from "react";
import Loader from './components/Loader'

const HeroSection = lazy(() => import("../components/HeroSection"));
const About = lazy(() => import("../components/About"));
const JoinNow = lazy(() => import("../components/JoinNow"));
const NewsSection = lazy(() => import("../components/NewsSection"));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <HeroSection />
      <About />
      <JoinNow />
      <NewsSection />
    </Suspense>
  );
};

export default Home;
