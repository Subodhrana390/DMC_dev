import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/header";
import Loader from './components/Loader'
import "./App.css";
import Gallery from "./pages/Gallery";

// Lazy loading the pages
const About = lazy(() => import("./pages/About"));
const Events = lazy(() => import("./pages/Events"));
const Contact = lazy(() => import("./components/Contact"));
const Home = lazy(() => import("./pages/Home"));
const Developer = lazy(() => import("./pages/Developer"));
<<<<<<< HEAD
const Members = lazy(() => import("./pages/Members"));
=======
const CoreTeam = lazy(() => import("./pages/CoreTeamPage"));
const SubCoreTeam = lazy(() => import("./pages/SubCoreTeamMembers"));
>>>>>>> 6073ac9 (feat : links updated)
const Faculty = lazy(() => import("./pages/Faculty"));
const Teams = lazy(() => import("./pages/Teams"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
          <Route path="/members" element={<Members />} />
=======
          <Route path="/sub-core-members" element={<SubCoreTeam />} />
          <Route path="/core-members" element={<CoreTeam />} />
>>>>>>> 6073ac9 (feat : links updated)
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/gallery/:id" element={<Gallery />} />
          <Route path="/developer" element={<Developer />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
