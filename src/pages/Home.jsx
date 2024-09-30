import React, { lazy, Suspense } from "react";
import Loader from '../components/Loader'


const About = lazy(() => import("../components/About"));
const Slider = lazy(() => import("../components/Slider"));
const LatestUpdates = lazy(() => import("../components/LatestUpdates"));
const Highlights = lazy(() => import("../components/Highlights"));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Slider />
      <LatestUpdates />
      <About />
      <Highlights />
    </Suspense>
  );
};

export default Home;
