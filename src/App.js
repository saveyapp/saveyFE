import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "./pages/About";
import Home from "./pages/Home";
import Budget from "./pages/Budget";
import Faq from "./pages/Faq";
import Save from "./pages/Save";
import Spend from "./pages/Spend";
import Coming from "./pages/Coming";
import preloader from "./assets/desktopPreloader.gif";
import NotFound from "./pages/NotFound";
import Waitlist from "./pages/Waitlist";
import LegalDocuments from "./pages/Legal";
function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <img
            src={preloader}
            alt="loading..."
            className="w-full h-screen object-cover"
          />
        </div>
      ) : (
        <div>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/save" element={<Save />} />
              <Route path="/spend" element={<Spend />} />
              <Route path="/legal" element={<LegalDocuments />} />
              <Route path="/coming" element={<Coming />} />
              <Route path="/waitlist" element={<Waitlist />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

export default App;
