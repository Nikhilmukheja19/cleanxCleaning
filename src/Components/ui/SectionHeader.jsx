/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SectionHeader = ({
  title,
  subtitle,
  badge,
  align = "center",
  className = "",
}) => {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      className={`max-w-3xl mb-12 md:mb-16 ${alignClass} ${className}`}
    >
      {badge && (
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wide uppercase rounded-full bg-brand-100 text-brand-700">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
