/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";
import { Building2, MessageCircle, Mail, MapPin } from "lucide-react";
import Loader from "./Loader";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Card from "./ui/Card";
import SectionHeader from "./ui/SectionHeader";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactUs = ({ embedded = false }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    if (!formData.phone.trim()) tempErrors.phone = "Phone is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const contactresponse = await axios.post(
        `${BASE_URL}/order/getmail`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      if (contactresponse) {
        console.log(contactresponse);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  const contactInfo = [
    { icon: Building2, label: "Office", value: "604-518-0623" },
    { icon: MessageCircle, label: "Estimates", value: "778-239-1390" },
    { icon: Mail, label: "Email", value: "canexcleaning@gmail.com" },
    {
      icon: MapPin,
      label: "Address",
      value: "6736 13b street, V3W 7M5, Surrey, B.C",
    },
  ];

  const content = (
    <motion.div
      className="section-container section-padding"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeInUp}
    >
      <SectionHeader
        badge="Get in Touch"
        title="Contact Us"
        subtitle="Have questions or need a custom cleaning solution? Reach out to CaneX Cleaning — we are here to help with reliable, tailored services for every space."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <Card hover={false} padding="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
            Send a Message
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
            <Input
              name="message"
              type="textarea"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
            />
            <Button type="submit" className="w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </Card>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <Card hover={false} padding="p-6 md:p-8" className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
              Contact Information
            </h2>
            <p className="text-slate-600 mb-8 text-sm md:text-base leading-relaxed">
              It is our job to save you time so you can tend to your most
              important commitments. Reach out anytime — we&apos;re happy to
              help.
            </p>

            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      {label}
                    </p>
                    <p className="text-sm md:text-base font-medium text-slate-800 mt-0.5">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );

  if (embedded) {
    return <section className="bg-slate-50/50">{content}</section>;
  }

  return (
    <div className="min-h-screen flex flex-col page-gradient">
      <Navbar />
      <main className="flex-1">{content}</main>
      <Footer />
    </div>
  );
};

export default ContactUs;
