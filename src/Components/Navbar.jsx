import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Clients",
    "Services",
    "Industries",
    "Contact",
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img src="/logo.png" alt="Logo" className="h-10 w-auto" />{" "} */}
          {/* Add your logo path */}
          <div className="text-xl font-bold text-blue-700">
            Canex Cleaning{" "}
            <span className="block text-sm font-normal text-gray-600">
              Building Maintenance LTD.
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700">
          {menuItems.map((item, idx) => (
            <a
              href="#"
              key={idx}
              className={`hover:text-blue-600 ${
                item === "About Us" ? "text-blue-600 font-medium" : ""
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="bg-sky-500 text-white font-semibold px-5 py-2 rounded hover:bg-sky-600 transition"
          >
            Free Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          {menuItems.map((item, idx) => (
            <a
              href="#"
              key={idx}
              className="block text-gray-700 hover:text-blue-600"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="block text-center bg-sky-500 text-white font-semibold px-4 py-2 rounded hover:bg-sky-600 transition"
          >
            Free Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
