import React from "react";
import {Navbar} from "../components/Navbar";
import {Hero} from "../components/Hero";
import {Features} from "../components/Features";
import {Footer} from "../components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;