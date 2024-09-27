import React, { lazy, Suspense } from "react";
import Loader from '../components/Loader'

const HeroSection = lazy(() => import("../components/HeroSection"));
const About = lazy(() => import("../components/About"));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <HeroSection />
      <About />
    </Suspense>
  );
};

export default Home;
