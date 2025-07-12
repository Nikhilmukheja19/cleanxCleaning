/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaUserAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import ShowAlert from "./ShowAlert";

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

    // Clear error on typing
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4 py-10">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-700 hover:text-blue-800 mb-4"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
          <FaCalendarAlt className="text-blue-700" />
          Booking Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InputField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            Icon={FaUserAlt}
            error={errors.fullName}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            Icon={FaEnvelope}
            error={errors.email}
          />
          <InputField
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            Icon={FaPhone}
            error={errors.phone}
          />
          <InputField
            label="Date & Time"
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            Icon={FaCalendarAlt}
            error={errors.dateTime}
          />
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Type of Service
            </label>
            <div className="relative">
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className={`w-full pl-4 pr-4 py-2 border ${
                  errors.serviceType ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm`}
              >
                <option value="" disabled></option>
                <option value="Home Cleaning">Home Cleaning</option>
                <option value="Office Cleaning">Office Cleaning</option>
                <option value="Deep Cleaning">Deep Cleaning</option>
                <option value="Carpet Cleaning">Carpet Cleaning</option>
                <option value="Sanitization">Sanitization</option>
              </select>
              {errors.serviceType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.serviceType}
                </p>
              )}
            </div>
          </div>

          <InputField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            error={errors.city}
          />
          <InputField
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            error={errors.state}
          />
          <InputField
            label="ZIP Code"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            error={errors.zip}
          />
          <InputField
            label="Street Address"
            name="street"
            value={formData.street}
            onChange={handleChange}
            Icon={FaMapMarkerAlt}
            colSpan
            error={errors.street}
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Booking
        </motion.button>
      </motion.form>
    </div>
  );
};

// InputField component
const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  Icon,
  colSpan = false,
  error,
}) => (
  <div className={`${colSpan ? "md:col-span-2" : ""}`}>
    <label className="block text-gray-700 font-medium mb-1">{label}</label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="text-gray-400" />
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full ${Icon ? "pl-10" : "pl-4"} pr-4 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm`}
      />
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default ClientForm;
