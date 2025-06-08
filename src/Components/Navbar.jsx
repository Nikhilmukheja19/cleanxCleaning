import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/canex cleaning.jpg"; // Use import for images

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    // { name: "Clients", path: "/clients" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Contact", path: "/contactus" },
  ];

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="CleanX Logo"
              className="h-10 w-10 object-cover rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-700">
                CleanX Cleaning
              </h1>
              <span className="text-sm text-gray-600">
                Building Maintenance LTD.
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-gray-700">
            {menuItems.map((item, idx) => (
              <Link
                to={item.path}
                key={idx}
                className={`hover:text-blue-600 ${
                  location.pathname === item.path
                    ? "text-blue-600 font-medium"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/clientform"
              className="bg-sky-500 text-white font-semibold px-5 py-2 rounded hover:bg-sky-600 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
            {menuItems.map((item, idx) => (
              <Link
                to={item.path}
                key={idx}
                onClick={() => setIsOpen(false)}
                className={`block py-1 text-gray-700 hover:text-blue-600 ${
                  location.pathname === item.path
                    ? "text-blue-600 font-medium"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/clientform"
              className="block text-center bg-sky-500 text-white font-semibold px-4 py-2 rounded hover:bg-sky-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Free Quote
            </Link>
          </div>
        )}
      </nav>

      {/* Push content below navbar */}
      <div className="h-[70px] md:h-[80px]" />
    </>
  );
};

export default Navbar;
