import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/Notfound";
import { NavProvider } from "../../../contexts/NavContext";

const App = () => {
  let sectionNum = 0;
  let key = true;

  function scrolling(e) {
    if (key) {
      key = false;
      if (e.deltaY < 0) {
        if (sectionNum > 0) {
          sectionNum -= 1;
          document.documentElement.style.setProperty(
            "--section",
            `0 -${sectionNum}00vh`
          );
        } else {
          key = true;
          return;
        }
      } else {
        if (sectionNum < 3) {
          sectionNum += 1;
          document.documentElement.style.setProperty(
            "--section",
            `0 -${sectionNum}00vh`
          );
        } else {
          key = true;
          return;
        }
      }
      setTimeout(() => {
        key = true;
      }, 1500);
    }
  } //end of scrolling

  useEffect(() => {
    var width = window.innerWidth;
    if (width > 640) {
      window.addEventListener("wheel", scrolling);
    }

    //reset on refresh
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    sectionNum = 0;
    document.documentElement.style.setProperty("--section", "0 0");

    //return
    return () => {
      window.removeEventListener("wheel", scrolling);
    };
  }, []);

  return (
    <div className="app">
      <NavProvider>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </Router>
      </NavProvider>
    </div>
  );
};

export default App;
