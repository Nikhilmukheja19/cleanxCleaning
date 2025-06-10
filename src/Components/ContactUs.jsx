import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactUs = () => {
  // const BASE_URL = "http://localhost:5000";
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const contactresponse = await axios.post(
        `${BASE_URL}/order/getmail`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (contactresponse) {
        console.log(contactresponse);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    console.log(formData);
  };

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <motion.div
        className="bg-white py-8 px-6 md:px-12 lg:px-24 "
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 text-center"
          variants={fadeInUp}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-center max-w-3xl mx-auto text-gray-700 mb-12 text-base md:text-lg"
          variants={fadeInUp}
        >
          Have questions or need a custom cleaning solution? Reach out to
          Cleaning — we are here to help with reliable, tailored services for
          every space.
        </motion.p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
              Send a Message
            </h2>
            <form className="space-y-5" onSubmit={(e) => handleSubmit(e)}>
              <motion.input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="text"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.textarea
                rows="4"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                type="submit"
                className="bg-blue-700 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md"
                whileHover={{ scale: 1.05 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Contact Information */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-8 text-sm md:text-base">
              It is our job to save you time so you can tend to your most
              important commitments. To get started and learn more about how we
              work, get in touch with us to speak to one of our representatives
              and request a free quote.
            </p>

            <div className="space-y-4 text-blue-600 font-medium text-sm md:text-base">
              <div className="flex items-center gap-3">
                <span>🏢</span>
                <span>Office: 604-518-0623</span>
              </div>
              <div className="flex items-center gap-3">
                <span>💬</span>
                <span>Estimates: 778-239-1390</span>
              </div>
              <div className="flex items-center gap-3">
                <span>✉️</span>
                <span>Email: Canexcleaning@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📍</span>
                <span>Address: 6736 13b street, V3W 7M5, Surrey, B.C</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactUs;
