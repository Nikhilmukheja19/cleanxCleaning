import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();

  const handlebooking = () => navigate("/clientform");
  const handleLearnMore = () => navigate("/learnmore");

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-blue-200 to-white text-gray-800 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Sparkle Your Space with <span className="text-blue-600">CaneX</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-700">
          Your trusted partner for premium cleaning services. Residential or
          commercial – we bring hygiene and brilliance with eco-friendly care.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleLearnMore}
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Learn More
          </button>
          <button
            onClick={handlebooking}
            className="bg-transparent border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Book Now
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
