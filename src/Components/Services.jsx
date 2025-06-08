import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Cleaning",
    description:
      "Comprehensive home cleaning services including dusting, vacuuming, mopping, kitchen & bathroom sanitation, and more.",
    icon: "🏠",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Professional cleaning for offices, shops, and commercial spaces to ensure a spotless and hygienic environment.",
    icon: "🏢",
  },
  {
    title: "Carpet & Upholstery Cleaning",
    description:
      "Deep cleaning and stain removal for carpets, rugs, sofas, and upholstery using eco-friendly products.",
    icon: "🧼",
  },
  {
    title: "Window Cleaning",
    description:
      "Crystal clear window cleaning services for residential and commercial buildings, inside and outside.",
    icon: "🪟",
  },
  {
    title: "Post-Construction Cleaning",
    description:
      "Thorough cleanup after renovation or construction work to remove dust, debris, and residue.",
    icon: "🚧",
  },
  {
    title: "Green Cleaning",
    description:
      "Environmentally friendly cleaning using non-toxic, biodegradable products to keep your space safe and healthy.",
    icon: "🌿",
  },
];

const highlights = [
  {
    icon: "🧽",
    title: "Experienced Staff",
    desc: "Trained professionals who know the science of cleaning.",
  },
  {
    icon: "🛡️",
    title: "Safe Products",
    desc: "We use certified eco-friendly and non-toxic solutions.",
  },
  {
    icon: "⏱️",
    title: "Timely Service",
    desc: "We value your time and guarantee punctual service.",
  },
  {
    icon: "💬",
    title: "24/7 Support",
    desc: "Got questions or feedback? We’re here anytime.",
  },
];

const process = [
  {
    step: "1",
    title: "Book Online",
    desc: "Select your service and schedule via our booking system.",
  },
  {
    step: "2",
    title: "We Clean",
    desc: "Our team arrives on time and does the magic.",
  },
  {
    step: "3",
    title: "Enjoy",
    desc: "Sit back and enjoy your spotless space!",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const handlebooking = () => {
    navigate("/clientform");
  };
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-8 min-h-screen">
        {/* Hero Section */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-800 text-center mb-4"
        >
          Our Cleaning Services
        </motion.h1>
        <p className="text-center text-blue-700 max-w-2xl mx-auto mb-12">
          Canex Cleaning provides reliable, eco-conscious, and quality-driven
          cleaning solutions tailored for both homes and businesses.
        </p>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border-l-4 border-blue-500 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                {service.title}
              </h2>
              <p className="text-blue-700 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
            Why Canex Cleaning?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-6 text-center"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-blue-700 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-blue-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cleaning Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {process.map((step, index) => (
              <div key={index} className="bg-white shadow rounded-xl p-6">
                <div className="text-blue-600 text-4xl font-bold mb-2">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-blue-800">
                  {step.title}
                </h4>
                <p className="text-sm text-blue-700 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Ready for a cleaner space?
          </h3>
          <button
            type="button"
            onClick={() => handlebooking()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
          >
            Book Your Cleaning Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
