import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import NotFound from "../NotFound/Notfound";
import { NavProvider } from "../../contexts/NavContext";

const App = () => {
  return (
    <div className="app">
      <NavProvider>
        <Header />

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </NavProvider>

      <Footer />
    </div>
  );
};

export default App;
