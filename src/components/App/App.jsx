// import { useState, useEffect } from "react";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import Home from "../mains/Home/Home";
import About from "../mains/About/About";
import Contact from "../mains/Contact/Contact";
import { NavProvider } from "../../contexts/NavContext";

const App = () => {
  return (
    <div className="app">
      <NavProvider>
        <Header />
        <Home />
        <About />
        <Contact />
      </NavProvider>

      <Footer />
    </div>
  );
};

export default App;
