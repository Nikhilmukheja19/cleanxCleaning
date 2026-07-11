import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center page-gradient">
      <div className="flex flex-col items-center">
        <div className="relative">
          <motion.div
            animate={{
              rotate: 360,
              transition: { repeat: Infinity, ease: "linear", duration: 1 },
            }}
            className="w-14 h-14 border-[3px] border-brand-200 border-t-brand-600 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute inset-0 m-auto w-6 h-6 bg-brand-500/20 rounded-full"
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-5 text-sm font-medium text-slate-600"
        >
          Please wait...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
