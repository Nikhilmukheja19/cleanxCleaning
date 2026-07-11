/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Card = ({
  children,
  className = "",
  hover = true,
  glass = false,
  padding = "p-6",
  ...motionProps
}) => {
  const base = glass
    ? "glass rounded-2xl shadow-soft"
    : "bg-white rounded-2xl shadow-soft border border-slate-100/80";

  const hoverClass = hover
    ? "hover:shadow-card hover:-translate-y-0.5 transition-smooth"
    : "";

  return (
    <motion.div
      className={`${base} ${padding} ${hoverClass} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default Card;
