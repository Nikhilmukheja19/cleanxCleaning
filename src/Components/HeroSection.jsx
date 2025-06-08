import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const handlebooking = () => {
    console.log("clicked");
    navigate("/clientform");
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-blue-100 to-white py-24 px-6 md:px-20">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 opacity-20 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 opacity-20 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left max-w-xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6 drop-shadow-sm">
            Sparkle Your Space with <span className="text-red-700">CaneX</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Your trusted partner for premium cleaning services. Residential or
            commercial – we bring hygiene and brilliance with eco-friendly care.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out">
              Learn More
            </button>
            <button
              type="button"
              onClick={() => handlebooking()}
              className="bg-white text-red-700 border border-red-700 hover:bg-red-700 hover:text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out"
            >
              Book Now
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-lg"
        >
          <div className="relative group transition-transform duration-300 hover:scale-105">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.36ZS7JGOele6BqBDeZjyfwHaD3&pid=Api&P=0&h=220"
              alt="Cleaning Staff"
              className="w-full rounded-xl shadow-2xl animate-float effect-glow"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .effect-glow {
          box-shadow: 0 0 25px rgba(255, 0, 102, 0.2), 0 0 35px rgba(66, 153, 225, 0.2);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
