import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Leaf,
  Smile,
  BrushCleaning,
  SprayCan,
  CalendarDays,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "./ui/PageLayout";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import Button from "./ui/Button";

const features = [
  {
    icon: <Sparkles className="text-brand-600" size={22} />,
    title: "Deep Cleaning",
    desc: "We scrub every surface with precision, leaving no dust behind.",
  },
  {
    icon: <ShieldCheck className="text-brand-600" size={22} />,
    title: "Trusted Professionals",
    desc: "Background-checked and experienced staff ensure top quality.",
  },
  {
    icon: <Leaf className="text-brand-600" size={22} />,
    title: "Eco-Friendly Products",
    desc: "Non-toxic, environment-safe products for your home and health.",
  },
  {
    icon: <Smile className="text-brand-600" size={22} />,
    title: "Satisfaction Guaranteed",
    desc: "We deliver services with 100% customer satisfaction.",
  },
];

const services = [
  { icon: <BrushCleaning size={22} />, title: "Residential Cleaning" },
  { icon: <SprayCan size={22} />, title: "Commercial Cleaning" },
  { icon: <CalendarDays size={22} />, title: "Scheduled Maintenance" },
  { icon: <Sparkles size={22} />, title: "Post-Event Cleanup" },
];

const LearnMore = () => {
  const navigate = useNavigate();
  const handlebooking = () => {
    navigate("/clientform");
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
            badge="Learn More"
            title="Discover Canex Cleaning"
            subtitle="We're not just cleaners — we are your partners in maintaining a healthy and spotless space."
          />
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 md:mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="flex gap-4 items-start h-full">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <SectionHeader title="Our Services" />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="text-center">
                <div className="flex justify-center text-brand-600 mb-3">
                  {service.icon}
                </div>
                <p className="text-slate-800 font-medium text-sm">
                  {service.title}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <SectionHeader title="Our Cleaning Process" />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {["Book Service", "We Arrive", "Sparkling Clean"].map((step, i) => (
              <Card key={i} className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <h4 className="text-slate-900 font-semibold">{step}</h4>
                <p className="text-slate-600 text-sm mt-2">
                  {step === "Book Service"
                    ? "Choose your service and schedule easily."
                    : step === "We Arrive"
                    ? "Our team comes fully equipped and on time."
                    : "Your space is left fresh, sanitized, and spotless!"}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <SectionHeader title="What Clients Say" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Priya Sharma",
                feedback:
                  "Canex Cleaning transformed my office space! Reliable and highly professional.",
              },
              {
                name: "Rahul Verma",
                feedback:
                  "I loved their service. My home felt brand new. Polite staff and excellent results!",
              },
            ].map((review, i) => (
              <Card key={i} className="border-l-4 border-l-brand-400">
                <p className="text-slate-700 italic text-sm leading-relaxed">
                  &ldquo;{review.feedback}&rdquo;
                </p>
                <p className="text-right text-slate-900 font-semibold mt-4 text-sm">
                  — {review.name}
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
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              Ready to experience the Canex difference?
            </h2>
            <Button size="lg" onClick={() => handlebooking()}>
              Book a Service Now
            </Button>
          </Card>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default LearnMore;
