import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
