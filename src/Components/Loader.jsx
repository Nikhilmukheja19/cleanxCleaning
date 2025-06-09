import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <motion.div
        animate={{
          rotate: 360,
          transition: { repeat: Infinity, ease: "linear", duration: 1 },
        }}
        className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full"
      />
    </div>
  );
};

export default Loader;
