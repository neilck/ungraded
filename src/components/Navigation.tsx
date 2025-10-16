import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Roadmap", path: "/roadmap" },
    { label: "Resources", path: "/resources" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Logo */}
              <Link to="/">
                <motion.div
                  className="cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  style={{ fontFamily: 'var(--font-poppins)', fontWeight: '600', fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}
                >
                  <span className="text-[#2D70C9]">Ungraded</span>
                  <span className="text-[#1A1A1A]"> AI</span>
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <Link key={link.path} to={link.path}>
                    <motion.button
                      className={`transition-colors ${
                        location.pathname === link.path
                          ? 'text-[#2D70C9]'
                          : 'text-[#1A1A1A] hover:text-[#2D70C9]'
                      }`}
                      style={{ fontFamily: 'var(--font-inter)' }}
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.label}
                    </motion.button>
                  </Link>
                ))}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Button
                    size="sm"
                    style={{
                      backgroundColor: '#2D70C9',
                      fontFamily: 'var(--font-poppins)',
                      paddingLeft: '1.5rem',
                      paddingRight: '1.5rem',
                    }}
                  >
                    Start Free Trial
                  </Button>
                </motion.div>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden text-[#1A1A1A]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
              >
                <div className="px-4 py-4 space-y-3">
                  {navLinks.map((link, index) => (
                    <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)}>
                      <motion.button
                        className={`block w-full text-left py-2 transition-colors ${
                          location.pathname === link.path
                            ? 'text-[#2D70C9]'
                            : 'text-[#1A1A1A] hover:text-[#2D70C9]'
                        }`}
                        style={{ fontFamily: 'var(--font-inter)' }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {link.label}
                      </motion.button>
                    </Link>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                  >
                    <Button
                      className="w-full"
                      style={{
                        backgroundColor: '#2D70C9',
                        fontFamily: 'var(--font-poppins)',
                      }}
                    >
                      Start Free Trial
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
