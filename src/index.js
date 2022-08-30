import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/style.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ once: true });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
