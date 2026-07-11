import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Shield, Leaf } from "lucide-react";
import Button from "./ui/Button";

const HeroSection = () => {
  const navigate = useNavigate();

  const handlebooking = () => navigate("/clientform");
  const handleLearnMore = () => navigate("/learnmore");

  const trustBadges = [
    { icon: Sparkles, label: "Premium Quality" },
    { icon: Shield, label: "Trusted & Insured" },
    { icon: Leaf, label: "Eco-Friendly" },
  ];

  return (
    <section className="relative min-h-[calc(100vh-76px)] flex items-center mesh-bg">
      <div className="section-container section-padding w-full">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide uppercase rounded-full bg-brand-100 text-brand-700"
          >
            Professional Cleaning Services
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-slate-900">
            Sparkle Your Space with{" "}
            <span className="text-gradient">CaneX</span>
          </h1>

          <p className="text-lg sm:text-xl mb-10 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Your trusted partner for premium cleaning services. Residential or
            commercial — we bring hygiene and brilliance with eco-friendly care.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <Button size="lg" onClick={handleLearnMore}>
              Learn More
            </Button>
            <Button size="lg" variant="outline" onClick={handlebooking}>
              Book Now
            </Button>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass shadow-soft"
              >
                <Icon className="w-4 h-4 text-brand-600" />
                <span className="text-sm font-medium text-slate-700">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
