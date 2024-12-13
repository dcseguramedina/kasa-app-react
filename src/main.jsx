// Import internal libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Import components
import Routes from "./routes/Routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Import styles
import "./main.css";

// Ensure the DOM element exists before rendering
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
