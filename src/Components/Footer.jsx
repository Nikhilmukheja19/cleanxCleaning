import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contactus" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              CaneX Cleaning
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your trusted partner for premium cleaning services. Residential or
              commercial — we bring hygiene and brilliance with eco-friendly
              care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 text-sm hover:text-brand-400 transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/clientform"
                  className="text-brand-400 text-sm font-medium hover:text-brand-300 transition-smooth"
                >
                  Book a Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Phone className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" />
                <span>604-518-0623</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" />
                <span>canexcleaning@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" />
                <span>6736 13b street, V3W 7M5, Surrey, B.C</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} CaneX Cleaning Building Maintenance Ltd.
          </p>
          <p className="text-xs text-slate-600">
            Professional cleaning you can trust
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
