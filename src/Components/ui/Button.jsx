/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-soft hover:shadow-card",
  secondary:
    "bg-white text-brand-700 border border-brand-200 hover:bg-brand-50 hover:border-brand-300",
  ghost: "bg-transparent text-brand-700 hover:bg-brand-50",
  outline:
    "bg-transparent border-2 border-brand-600 text-brand-700 hover:bg-brand-600 hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  asMotion = true,
  ...props
}) => {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-smooth focus-ring ${variants[variant]} ${sizes[size]} ${className}`;

  if (asMotion) {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
