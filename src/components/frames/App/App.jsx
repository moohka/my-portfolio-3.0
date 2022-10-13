import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../mains/Home/Home";
import About from "../../mains/About/About";
import Contact from "../../mains/Contact/Contact";
import { NavProvider } from "../../../contexts/NavContext";

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
