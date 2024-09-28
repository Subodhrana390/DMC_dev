import React, { lazy, Suspense } from "react";
import Loader from '../components/Loader'
import LatestUpdates from "../components/LatestUpdates";

const HeroSection = lazy(() => import("../components/HeroSection"));
const About = lazy(() => import("../components/About"));
const Slider = lazy(() => import("../components/Slider"));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Slider />
      <HeroSection />
      <LatestUpdates />
      <About />
    </Suspense>
  );
};

export default Home;
