import {
  FiBriefcase,
  FiHeart,
  FiShoppingCart,
  FiBookOpen,
  FiHome,
  FiStar,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageLayout from "./ui/PageLayout";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import Button from "./ui/Button";

const industriesList = [
  {
    icon: <FiBriefcase size={24} className="text-violet-600" />,
    title: "Corporate Offices",
    desc: "Clean, sanitized, and well-maintained office environments improve productivity and employee well-being. We offer flexible schedules to match business hours.",
  },
  {
    icon: <FiHeart size={24} className="text-rose-500" />,
    title: "Healthcare Facilities",
    desc: "We ensure hygienic cleaning standards that support infection control for clinics, labs, and hospitals — using hospital-grade disinfectants.",
  },
  {
    icon: <FiShoppingCart size={24} className="text-amber-600" />,
    title: "Retail & Shopping Centers",
    desc: "We maintain sparkling, fresh-looking retail spaces that attract customers, with special attention to high-traffic areas and display cleanliness.",
  },
  {
    icon: <FiBookOpen size={24} className="text-emerald-600" />,
    title: "Educational Institutions",
    desc: "From classrooms to cafeterias, we ensure a healthy and inspiring environment for students and staff with daily and deep-clean options.",
  },
  {
    icon: <FiHome size={24} className="text-brand-600" />,
    title: "Hospitality (Hotels & Restaurants)",
    desc: "We maintain pristine rooms, kitchens, and lobbies to meet industry expectations for guest satisfaction, safety, and hygiene.",
  },
  {
    icon: <FiHome size={24} className="text-pink-600" />,
    title: "Residential Complexes",
    desc: "We offer regular cleaning for apartment buildings, common areas, and lobbies to keep homes safe, tidy, and attractive for residents.",
  },
];

const benefits = [
  "Certified, trained, and background-verified cleaners.",
  "Flexible scheduling, including off-hours and weekends.",
  "Customized plans for each industry's needs.",
  "Eco-friendly and hospital-grade supplies.",
];

const testimonials = [
  {
    quote:
      "Canex Cleaning transformed our office environment. Professional, punctual, and thorough — highly recommend!",
    author: "Priya Mehta, HR Manager, TechNova Ltd.",
  },
  {
    quote:
      "Their hospital-grade cleaning gave us peace of mind during inspections. Trustworthy and efficient service.",
    author: "Dr. Rajeev Suri, CarePlus Diagnostics",
  },
];

const Industries = () => {
  const navigate = useNavigate();
  const handlecontact = () => {
    navigate("/contactus");
  };

  return (
    <PageLayout>
      <div className="section-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            badge="Industries"
            title="Industries We Serve"
            subtitle="Trusted by businesses, institutions, and residents — Canex Cleaning is redefining cleanliness with tailored services for every environment."
          />
        </motion.div>

        {/* Industry Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {industriesList.map(({ icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mx-auto mb-4">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <SectionHeader title="Why Canex Cleaning?" />
          <Card hover={false} padding="p-6 md:p-8" className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FiStar className="text-amber-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <SectionHeader title="What Our Clients Say" />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((item, idx) => (
              <Card key={idx} glass className="border-l-4 border-l-brand-400">
                <p className="text-slate-700 italic text-sm leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="text-right font-semibold text-brand-700 mt-4 text-sm">
                  — {item.author}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card glass hover={false} padding="p-8 md:p-12" className="max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
              Ready to Experience Professional Cleaning?
            </h3>
            <Button size="lg" onClick={() => handlecontact()}>
              Contact Now
            </Button>
          </Card>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Industries;
