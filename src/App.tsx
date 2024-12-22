import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { Tour } from "./pages/Tour";
import { Music } from "./pages/Music";
import { Store } from "./pages/Store";
import { GalleryPage } from "./pages/GalleryPage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/music" element={<Music />} />
        <Route path="/store" element={<Store />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main className="pt-16">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
