import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
