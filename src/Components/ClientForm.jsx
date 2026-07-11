import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaUserAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import ShowAlert from "./ShowAlert";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Card from "./ui/Card";

const ClientForm = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateTime: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    serviceType: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] =
          key === "dateTime"
            ? "Date & Time is required"
            : key === "serviceType"
            ? "Please select a service type"
            : `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const orderresponse = await axios.post(
        `${BASE_URL}/order/orderSaved`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (orderresponse) {
        setLoading(false);
        await ShowAlert();
        navigate("/");

        await axios.post(`${BASE_URL}/order/sendmail`, formData, {
          headers: { "Content-Type": "application/json" },
        });

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          dateTime: "",
          street: "",
          city: "",
          state: "",
          zip: "",
          serviceType: "",
        });
        setErrors({});
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  const selectClass = `w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-400 transition-smooth ${
    errors.serviceType
      ? "border-red-400 focus:ring-red-200"
      : "border-slate-200"
  }`;

  return (
    <div className="min-h-screen page-gradient flex items-center justify-center px-4 py-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-2xl"
      >
        <Card hover={false} padding="p-6 md:p-10" className="shadow-elevated">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-brand-700 hover:text-brand-800 mb-6 text-sm font-medium transition-smooth focus-ring rounded-lg"
            type="button"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-50 mb-4">
              <FaCalendarAlt className="text-brand-600 text-xl" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Booking Form
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Fill in your details and we&apos;ll take care of the rest
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                icon={FaUserAlt}
                error={errors.fullName}
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                icon={FaEnvelope}
                error={errors.email}
              />
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                icon={FaPhone}
                error={errors.phone}
              />
              <Input
                label="Date & Time"
                type="datetime-local"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                icon={FaCalendarAlt}
                error={errors.dateTime}
              />

              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Type of Service
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="" disabled></option>
                  <option value="Home Cleaning">Home Cleaning</option>
                  <option value="Office Cleaning">Office Cleaning</option>
                  <option value="Deep Cleaning">Deep Cleaning</option>
                  <option value="Carpet Cleaning">Carpet Cleaning</option>
                  <option value="Sanitization">Sanitization</option>
                </select>
                {errors.serviceType && (
                  <p className="text-red-500 text-sm mt-1.5">
                    {errors.serviceType}
                  </p>
                )}
              </div>

              <Input
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                error={errors.city}
              />
              <Input
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                error={errors.state}
              />
              <Input
                label="ZIP Code"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                error={errors.zip}
              />
              <div className="md:col-span-2">
                <Input
                  label="Street Address"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  icon={FaMapMarkerAlt}
                  error={errors.street}
                />
              </div>
            </div>

            <Button type="submit" className="mt-8 w-full" size="lg">
              Submit Booking
            </Button>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default ClientForm;
