import { HashRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Roadmap } from "./pages/Roadmap";
import { Resources } from "./pages/Resources";

// Component to scroll to top on route change
function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTopOnMount />
      <div className="min-h-screen bg-white overflow-x-hidden">
        <ScrollProgress />
        <Navigation />
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/resources" element={<Resources />} />
          {/* Catch-all route redirects to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
