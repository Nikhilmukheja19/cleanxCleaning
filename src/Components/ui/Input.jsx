/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const inputBase =
  "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-400 transition-smooth";

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  icon: Icon,
  rows,
  className = "",
}) => {
  const isTextarea = type === "textarea";
  const inputClass = `${inputBase} ${Icon ? "pl-11" : ""} ${
    error ? "border-red-400 focus:ring-red-200 focus:border-red-400" : ""
  } ${className}`;

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Icon className="text-slate-400 w-4 h-4" />
          </div>
        )}
        {isTextarea ? (
          <motion.textarea
            id={name}
            name={name}
            rows={rows || 4}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={inputClass}
            whileFocus={{ scale: 1.005 }}
          />
        ) : (
          <motion.input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={inputClass}
            whileFocus={{ scale: 1.005 }}
          />
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1.5">{error}</p>}
    </div>
  );
};

export default Input;
