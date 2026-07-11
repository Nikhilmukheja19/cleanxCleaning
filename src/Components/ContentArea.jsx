import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Calendar, Mail, Smile, Send } from "lucide-react";
import photo1 from "../assets/canex4.jpg";
import photo2 from "../assets/canex2.jpg";
import photo3 from "../assets/canex6.jpg";
import photo4 from "../assets/image.png";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";

const blogData = [
  {
    title: "CaneX - Professional Cleaning Solutions",
    content:
      "At CaneX, we redefine cleanliness with precision and professionalism. Our expert team ensures spotless, sanitized spaces — whether it's your home, office, or commercial unit. Experience the joy of a refreshed environment every single time.",
    image: photo1,
    imageRight: true,
  },
  {
    title: "Eco-Friendly Cleaning That Cares",
    content:
      "We don't just clean — we care. Our eco-conscious approach uses biodegradable, non-toxic products that are safe for your family, pets, and the planet. Sustainable cleaning is no longer a luxury — it's a responsibility.",
    image: photo2,
    imageRight: false,
  },
  {
    title: "Powered by Technology, Driven by Quality",
    content:
      "From high-suction vacuums to deep steam sanitizers, CaneX brings industry-leading tools to your doorstep. Our tech-powered workflow ensures that not a speck of dust remains behind — even in the trickiest corners.",
    image: photo3,
    imageRight: true,
  },
  {
    title: "Transparent & Affordable Plans",
    content:
      "No hidden fees. No confusing clauses. Choose from weekly, bi-weekly, monthly, or one-time plans that match your schedule and budget. Reliable service, honest pricing — that's the CaneX promise.",
    image: photo4,
    imageRight: false,
  },
];

const processSteps = [
  { icon: Calendar, label: "Book Form" },
  { icon: Mail, label: "Get Confirmation" },
  { icon: Smile, label: "Work Done" },
  { icon: Send, label: "Complete" },
];

const ContentArea = () => {
  return (
    <>
      <section className="section-container section-padding">
        <SectionHeader
          badge="Why Choose Us"
          title="The CaneX Difference"
          subtitle="Discover what makes us the preferred cleaning partner for homes and businesses across the region."
        />

        <div className="space-y-16 md:space-y-24">
          {blogData.map((item, index) => {
            const imageVariant = {
              hidden: {
                opacity: 0,
                x: item.imageRight ? 60 : -60,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            };

            const textVariant = {
              hidden: {
                opacity: 0,
                x: item.imageRight ? -60 : 60,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            };

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                  item.imageRight ? "md:flex-row-reverse" : ""
                }`}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  variants={imageVariant}
                  className="w-full md:w-1/2"
                >
                  <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.15}
                    glareColor="#0ea5e9"
                    glarePosition="all"
                    scale={1.02}
                    transitionSpeed={400}
                    className="rounded-2xl overflow-hidden shadow-card cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </Tilt>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  variants={textVariant}
                  className="md:w-1/2"
                >
                  <Card hover={false} padding="p-8 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                      {item.content}
                    </p>
                  </Card>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Working Process */}
      <section className="section-padding bg-white/60">
        <div className="section-container">
          <SectionHeader
            badge="How It Works"
            title="Our Working Process"
            subtitle="Our Service Booking is very simple. Just fill out the service query box and submit the form. After submission, we will contact you for verification."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {processSteps.map(({ icon: Icon, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-brand-300 to-transparent" />
                )}
                <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-4 shadow-soft">
                  <Icon className="w-7 h-7 text-brand-600" />
                </div>
                <p className="text-sm md:text-base font-semibold text-slate-800">
                  {label}
                </p>
                <span className="mt-1 text-xs text-brand-600 font-medium">
                  Step {index + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentArea;
