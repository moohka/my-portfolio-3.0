import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/Notfound";
import { NavProvider } from "../../../contexts/NavContext";

const App = () => {
  return (
    <div className="app">
      <NavProvider>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </NavProvider>
    </div>
  );
};

export default App;
