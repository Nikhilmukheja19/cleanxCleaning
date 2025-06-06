// Footer.jsx
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto p-2 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Brand */}
        <div>
          <h1 className="text-xl font-bold text-blue-500">Canex Cleaning</h1>
          <p className="text-sm mt-1 text-gray-400 leading-snug">
            © 2025 Canex Cleaning Building Maintainance Ltd
          </p>
        </div>

        {/* Empty Column (optional for spacing or future links) */}
        <div className="hidden md:block" />

        {/* Social */}
        <div className="md:text-right">
          <h2 className="text-sm font-semibold mb-2">Follow Us</h2>
          <div className="flex md:justify-end space-x-3 text-gray-400">
            <a href="#">
              <Facebook className="hover:text-blue-500 w-5 h-5" />
            </a>
            <a href="#">
              <Twitter className="hover:text-blue-400 w-5 h-5" />
            </a>
            <a href="#">
              <Instagram className="hover:text-pink-400 w-5 h-5" />
            </a>
            <a href="#">
              <Linkedin className="hover:text-blue-600 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
