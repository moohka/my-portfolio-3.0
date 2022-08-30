import { useRef, createContext } from "react";
import Header from "./Header";
import Home from "./mains/Home";
import About from "./mains/About";
import Contact from "./mains/Contact";
import Footer from "./Footer";

//Context for navbar
export const NavContext = createContext();

const App = () => {
  //variables for navbar
  const headerRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const navRefs = [headerRef, aboutRef, contactRef];

  return (
    <div className="app">
      <NavContext.Provider value={navRefs}>
        <Header />
        <Home />
        <About />
        <Contact />
      </NavContext.Provider>

      <Footer />
    </div>
  );
};

export default App;
