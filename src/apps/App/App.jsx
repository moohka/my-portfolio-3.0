import Header from "../../components/utilities/Header/Header";
import Footer from "../../components/utilities/Footer/Footer";
import Home from "../../components/mains/Home/Home";
import About from "../../components/mains/About/About";
import Contact from "../../components/mains/Contact/Contact";
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
