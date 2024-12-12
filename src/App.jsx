import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-gray-300 antialiased selection:bg-cyan-400 selection:text-gray-900 bg-gray-900">
      {/* Main Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        {/* Uncomment if Experience is needed */}
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
