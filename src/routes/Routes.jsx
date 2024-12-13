// Import internal libraries
import { Routes, Route } from "react-router-dom";

// Import App pages
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Accommodation from "../pages/accommodation/Accommodation";
import NotFound from "../pages/notFound/NotFound";

// Define routing logic
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/accommodation/:id" element={<Accommodation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
