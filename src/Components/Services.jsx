import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "./ui/PageLayout";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import Button from "./ui/Button";

const services = [
  {
    title: "Residential Cleaning",
    description:
      "Comprehensive home cleaning services including dusting, vacuuming, mopping, kitchen & bathroom sanitation, and more.",
    icon: "🏠",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Professional cleaning for offices, shops, and commercial spaces to ensure a spotless and hygienic environment.",
    icon: "🏢",
  },
  {
    title: "Carpet & Upholstery Cleaning",
    description:
      "Deep cleaning and stain removal for carpets, rugs, sofas, and upholstery using eco-friendly products.",
    icon: "🧼",
  },
  {
    title: "Window Cleaning",
    description:
      "Crystal clear window cleaning services for residential and commercial buildings, inside and outside.",
    icon: "🪟",
  },
  {
    title: "Post-Construction Cleaning",
    description:
      "Thorough cleanup after renovation or construction work to remove dust, debris, and residue.",
    icon: "🚧",
  },
  {
    title: "Green Cleaning",
    description:
      "Environmentally friendly cleaning using non-toxic, biodegradable products to keep your space safe and healthy.",
    icon: "🌿",
  },
];

const highlights = [
  {
    icon: "🧽",
    title: "Experienced Staff",
    desc: "Trained professionals who know the science of cleaning.",
  },
  {
    icon: "🛡️",
    title: "Safe Products",
    desc: "We use certified eco-friendly and non-toxic solutions.",
  },
  {
    icon: "⏱️",
    title: "Timely Service",
    desc: "We value your time and guarantee punctual service.",
  },
  {
    icon: "💬",
    title: "24/7 Support",
    desc: "Got questions or feedback? We're here anytime.",
  },
];

const process = [
  {
    step: "1",
    title: "Book Online",
    desc: "Select your service and schedule via our booking system.",
  },
  {
    step: "2",
    title: "We Clean",
    desc: "Our team arrives on time and does the magic.",
  },
  {
    step: "3",
    title: "Enjoy",
    desc: "Sit back and enjoy your spotless space!",
  },
];

const Services = () => {
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
            badge="Our Services"
            title="Our Cleaning Services"
            subtitle="Canex Cleaning provides reliable, eco-conscious, and quality-driven cleaning solutions tailored for both homes and businesses."
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center border-l-4 border-l-brand-500">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <SectionHeader title="Why Canex Cleaning?" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-base font-semibold text-slate-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Cleaning Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <SectionHeader title="How It Works" />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center relative">
                <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-base font-semibold text-slate-900">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-600 mt-2">{step.desc}</p>
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
              Ready for a cleaner space?
            </h3>
            <Button size="lg" onClick={() => handlebooking()}>
              Book Your Cleaning Now
            </Button>
          </Card>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Services;
