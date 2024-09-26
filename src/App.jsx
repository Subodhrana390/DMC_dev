import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./components/Contact";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Developer from "./pages/Developer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
