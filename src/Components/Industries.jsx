import {
  FiBriefcase,
  FiHeart,
  FiShoppingCart,
  FiBookOpen,
  FiHome,
  // FiTool,
  FiStar,
} from "react-icons/fi";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const industriesList = [
  {
    icon: <FiBriefcase size={28} className="text-purple-600" />,
    title: "Corporate Offices",
    desc: "Clean, sanitized, and well-maintained office environments improve productivity and employee well-being. We offer flexible schedules to match business hours.",
  },
  {
    icon: <FiHeart size={28} className="text-red-500" />,
    title: "Healthcare Facilities",
    desc: "We ensure hygienic cleaning standards that support infection control for clinics, labs, and hospitals — using hospital-grade disinfectants.",
  },
  {
    icon: <FiShoppingCart size={28} className="text-yellow-600" />,
    title: "Retail & Shopping Centers",
    desc: "We maintain sparkling, fresh-looking retail spaces that attract customers, with special attention to high-traffic areas and display cleanliness.",
  },
  {
    icon: <FiBookOpen size={28} className="text-green-600" />,
    title: "Educational Institutions",
    desc: "From classrooms to cafeterias, we ensure a healthy and inspiring environment for students and staff with daily and deep-clean options.",
  },
  {
    icon: <FiHome size={28} className="text-blue-600" />,
    title: "Hospitality (Hotels & Restaurants)",
    desc: "We maintain pristine rooms, kitchens, and lobbies to meet industry expectations for guest satisfaction, safety, and hygiene.",
  },
  // {
  //   icon: <FiTool size={28} className="text-indigo-600" />,
  //   title: "Industrial Plants & Warehouses",
  //   desc: "Tackling grease, dust, and heavy-duty waste while adhering to safety standards across industrial floors, storage areas, and machines.",
  // },
  {
    icon: <FiHome size={28} className="text-pink-600" />,
    title: "Residential Complexes",
    desc: "We offer regular cleaning for apartment buildings, common areas, and lobbies to keep homes safe, tidy, and attractive for residents.",
  },
];

const benefits = [
  "Certified, trained, and background-verified cleaners.",
  "Flexible scheduling, including off-hours and weekends.",
  "Customized plans for each industry's needs.",
  "Eco-friendly and hospital-grade supplies.",
];

const testimonials = [
  {
    quote:
      "Canex Cleaning transformed our office environment. Professional, punctual, and thorough — highly recommend!",
    author: "Priya Mehta, HR Manager, TechNova Ltd.",
  },
  {
    quote:
      "Their hospital-grade cleaning gave us peace of mind during inspections. Trustworthy and efficient service.",
    author: "Dr. Rajeev Suri, CarePlus Diagnostics",
  },
];

const Industries = () => {
  const navigate = useNavigate();
  const handlecontact = () => {
    navigate("/contactus");
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <Navbar />

      <main className="p-8">
        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-800 text-center mb-4"
        >
          Industries We Serve
        </motion.h1>
        <p className="text-center max-w-3xl mx-auto text-blue-700 mb-10">
          Trusted by businesses, institutions, and residents — Canex Cleaning is
          redefining cleanliness with tailored services for every environment.
        </p>

        {/* Industry Grid with Descriptions */}
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industriesList.map(({ icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow hover:shadow-lg rounded-xl p-6 text-center transition"
            >
              <div className="mb-3">{icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {title}
              </h3>
              <p className="text-sm text-blue-700">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Why Canex Cleaning?
          </h2>
          <ul className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {benefits.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FiStar className="text-yellow-500 mt-1" />
                <span className="text-blue-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-blue-50 p-4 rounded-md border border-blue-200"
              >
                <p className="text-blue-700 italic">{item.quote}</p>
                <p className="text-right font-semibold text-blue-800 mt-3">
                  — {item.author}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-10">
          <h3 className="text-2xl font-semibold text-blue-800 mb-3">
            Ready to Experience Professional Cleaning?
          </h3>
          <button
            type="button"
            onClick={() => handlecontact()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-md transition"
          >
            Contact Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default Industries;
