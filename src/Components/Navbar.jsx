import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/canex cleaning.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contactus" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-smooth ${
          scrolled
            ? "glass shadow-soft py-2"
            : "bg-white/80 backdrop-blur-md py-3"
        }`}
      >
        <div className="section-container flex justify-between items-center">
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-smooth"
          >
            <div className="relative">
              <img
                src={logo}
                alt="CaneX Cleaning Logo"
                className="h-10 w-10 object-cover rounded-xl ring-2 ring-brand-100 group-hover:ring-brand-300 transition-smooth"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">
                CaneX Cleaning
              </h1>
              <span className="text-xs text-slate-500 font-medium">
                Building Maintenance LTD.
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                to={item.path}
                key={item.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-smooth ${
                  location.pathname === item.path
                    ? "text-brand-700"
                    : "text-slate-600 hover:text-brand-700 hover:bg-brand-50"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-brand-600 rounded-full"
                  />
                )}
              </Link>
            ))}
            <Link
              to="/clientform"
              className="ml-3 inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-smooth focus-ring bg-brand-600 text-white hover:bg-brand-700 shadow-soft hover:shadow-card px-4 py-2 text-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-smooth focus-ring"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-slate-100"
            >
              <div className="section-container py-4 space-y-1">
                {menuItems.map((item) => (
                  <Link
                    to={item.path}
                    key={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-smooth ${
                      location.pathname === item.path
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/clientform"
                  onClick={() => setIsOpen(false)}
                  className="block pt-2 text-center font-semibold rounded-xl transition-smooth bg-brand-600 text-white hover:bg-brand-700 px-6 py-2.5 text-sm"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="h-[72px] md:h-[76px]" />
    </>
  );
};

export default Navbar;
