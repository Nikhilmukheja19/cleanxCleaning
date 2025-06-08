import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Leaf,
  Smile,
  BrushCleaning,
  SprayCan,
  CalendarDays,
} from "lucide-react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <Sparkles className="text-blue-500" size={30} />,
    title: "Deep Cleaning",
    desc: "We scrub every surface with precision, leaving no dust behind.",
  },
  {
    icon: <ShieldCheck className="text-blue-500" size={30} />,
    title: "Trusted Professionals",
    desc: "Background-checked and experienced staff ensure top quality.",
  },
  {
    icon: <Leaf className="text-blue-500" size={30} />,
    title: "Eco-Friendly Products",
    desc: "Non-toxic, environment-safe products for your home and health.",
  },
  {
    icon: <Smile className="text-blue-500" size={30} />,
    title: "Satisfaction Guaranteed",
    desc: "We deliver services with 100% customer satisfaction.",
  },
];

const services = [
  { icon: <BrushCleaning size={26} />, title: "Residential Cleaning" },
  { icon: <SprayCan size={26} />, title: "Commercial Cleaning" },
  { icon: <CalendarDays size={26} />, title: "Scheduled Maintenance" },
  { icon: <Sparkles size={26} />, title: "Post-Event Cleanup" },
];

const LearnMore = () => {
  const navigate = useNavigate();
  const handlebooking = () => {
    navigate("/clientform");
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-6 md:px-20">
      <Navbar />
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-900">
          Discover Canex Cleaning
        </h1>
        <p className="text-blue-700 mt-4 max-w-2xl mx-auto">
          We’re not just cleaners we are your partners in maintaining a healthy
          and spotless space.
        </p>
      </motion.div>

      {/* Why Choose Us */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex gap-4 items-start hover:scale-105 transition duration-300"
          >
            <div className="bg-blue-100 p-3 rounded-xl">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800">
                {feature.title}
              </h3>
              <p className="text-blue-700 text-sm">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Our Services */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center text-blue-600 mb-2">
                {service.icon}
              </div>
              <p className="text-blue-800 font-medium">{service.title}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* How We Work */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-10">
          Our Cleaning Process
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {["Book Service", "We Arrive", "Sparkling Clean"].map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {i + 1}
              </div>
              <h4 className="text-blue-800 font-semibold">{step}</h4>
              <p className="text-blue-600 text-sm mt-1">
                {step === "Book Service"
                  ? "Choose your service and schedule easily."
                  : step === "We Arrive"
                  ? "Our team comes fully equipped and on time."
                  : "Your space is left fresh, sanitized, and spotless!"}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-8">
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Priya Sharma",
              feedback:
                "Canex Cleaning transformed my office space! Reliable and highly professional.",
            },
            {
              name: "Rahul Verma",
              feedback:
                "I loved their service. My home felt brand new. Polite staff and excellent results!",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-400"
            >
              <p className="text-blue-700 italic">“{review.feedback}”</p>
              <p className="text-right text-blue-900 font-semibold mt-4">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl text-blue-800 font-bold">
          Ready to experience the Canex difference?
        </h2>
        <button
          type="button"
          onClick={() => handlebooking()}
          className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition duration-300"
        >
          Book a Service Now
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
