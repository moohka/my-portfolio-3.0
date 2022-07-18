import "./App.css";
import Header from "./Header";
import Navbar from "./interfaces/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="content">
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
