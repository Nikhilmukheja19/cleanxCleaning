// Footer.jsx
// Optional: Uncomment icons if you plan to use them
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Centered container */}
      <div className="max-w-7xl mx-auto p-4 flex flex-col items-center justify-center text-center">
        {/* Brand Name */}
        <h1 className="text-xl font-bold text-blue-500">Canex Cleaning</h1>

        {/* Tagline or Rights */}
        <p className="text-sm mt-1 text-gray-400 leading-snug">
          © 2025 Canex Cleaning Building Maintenance Ltd.
        </p>

        {/* Optional: Social media icons (centered) */}
        {/*
        <div className="flex justify-center space-x-4 mt-3 text-gray-400">
          <a href="#" aria-label="Facebook">
            <Facebook className="hover:text-blue-500 w-5 h-5" />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter className="hover:text-blue-400 w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="hover:text-pink-400 w-5 h-5" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin className="hover:text-blue-600 w-5 h-5" />
          </a>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;
