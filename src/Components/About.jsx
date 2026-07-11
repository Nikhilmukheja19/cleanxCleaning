import { motion } from "framer-motion";
import { FiInfo, FiUsers, FiTarget, FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PageLayout from "./ui/PageLayout";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import Button from "./ui/Button";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "Operations Manager",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Alex Johnson",
    role: "Lead Supervisor",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const coreValues = [
  {
    icon: <FiCheckCircle className="text-brand-600" size={24} />,
    title: "Quality",
    desc: "Delivering the highest standard in every cleaning service.",
  },
  {
    icon: <FiUsers className="text-brand-600" size={24} />,
    title: "Trust",
    desc: "Building lasting relationships with clients and employees.",
  },
  {
    icon: <FiTarget className="text-brand-600" size={24} />,
    title: "Commitment",
    desc: "Dedicated to exceeding expectations every time.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contactus");
  };

  return (
    <PageLayout>
      <div className="section-container section-padding space-y-16 md:space-y-24">
        {/* Header */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            badge="About Us"
            title={
              <span className="flex items-center justify-center gap-3">
                <FiInfo size={36} className="text-brand-600" />
                About Us
              </span>
            }
            subtitle={
              <>
                At <span className="font-semibold text-brand-700">CaneX Cleaning</span>,
                we don&apos;t just clean spaces — we elevate them. With unwavering
                professionalism and care, we create healthier, brighter environments
                where families and businesses thrive.
              </>
            }
          />
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card hover={false} padding="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                    <span className="w-1 h-8 bg-brand-600 rounded-full" />
                    Our Mission
                  </h2>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed pl-4">
                    To deliver reliable, eco-friendly cleaning services that enhance
                    the wellbeing of our clients&apos; environments, fostering a clean,
                    safe, and healthy community.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                    <span className="w-1 h-8 bg-brand-600 rounded-full" />
                    Our Vision
                  </h2>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed pl-4">
                    To be the most trusted and innovative cleaning service provider,
                    recognized for excellence, integrity, and sustainable practices.
                  </p>
                </div>
              </div>

              <img
                src="https://scrubnbubbles.com/wp-content/uploads/2021/02/professional-cleaning-companies.jpg"
                alt="cleaning team"
                className="rounded-2xl shadow-card w-full object-cover max-h-80 md:max-h-96"
              />
            </div>
          </Card>
        </motion.section>

        {/* Core Values */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SectionHeader title="Our Core Values" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {coreValues.map(({ icon, title, desc }, i) => (
              <Card key={i} className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-4">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">
                  {title}
                </h3>
                <p className="text-slate-600 text-sm">{desc}</p>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Our Team */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SectionHeader title="Meet Our Team" />
          <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
            {teamMembers.map(({ name, role, img }, i) => (
              <Card key={i} className="max-w-xs w-full text-center">
                <img
                  src={img}
                  alt={name}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover mx-auto mb-4 ring-4 ring-brand-100"
                />
                <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
                <p className="text-slate-500 text-sm mt-1">{role}</p>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* History Timeline */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card hover={false} padding="p-8 md:p-10">
            <SectionHeader title="Our Journey" className="mb-10" />
            <ul className="relative border-l-2 border-brand-200 ml-4 space-y-8">
              {[
                {
                  year: "2015",
                  event: "Founded",
                  desc: "CaneX Cleaning was founded with a vision to transform the cleaning industry.",
                },
                {
                  year: "2018",
                  event: "Expansion",
                  desc: "Expanded services to cover residential and commercial sectors.",
                },
                {
                  year: "2021",
                  event: "Eco-friendly Initiatives",
                  desc: "Started using green cleaning products and sustainable practices.",
                },
                {
                  year: "2024",
                  event: "Trusted Industry Leader",
                  desc: "Recognized as a leading cleaning service provider in the region.",
                },
              ].map(({ year, event, desc }, i) => (
                <li key={i} className="ml-8 relative">
                  <span className="absolute -left-[2.65rem] top-1 w-4 h-4 bg-brand-600 rounded-full ring-4 ring-white" />
                  <h3 className="text-base font-semibold text-slate-900">
                    {year} — {event}
                  </h3>
                  <p className="text-slate-600 text-sm mt-1">{desc}</p>
                </li>
              ))}
            </ul>
          </Card>
        </motion.section>

        {/* Founder's Message */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card glass padding="p-8 md:p-12" hover={false} className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
              A Message from Our Founder
            </h2>
            <p className="text-slate-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed italic">
              &ldquo;At CaneX Cleaning, our mission goes beyond spotless spaces
              — its about building trust, ensuring safety, and delivering comfort.
              Every sweep and scrub is guided by our values and a deep commitment
              to our clients peace of mind.&rdquo;
            </p>
            <span className="block mt-6 font-semibold text-brand-700">
              — John Doe, Founder & CEO
            </span>
          </Card>
        </motion.section>

        {/* CaneX In Numbers */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SectionHeader title="CaneX In Numbers" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { number: "10+", label: "Years of Service", color: "text-brand-600" },
              { number: "150+", label: "Happy Clients", color: "text-emerald-500" },
              { number: "300+", label: "Properties Cleaned", color: "text-amber-500" },
              { number: "99%", label: "Client Satisfaction", color: "text-rose-500" },
            ].map(({ number, label, color }, i) => (
              <Card key={i} className="text-center">
                <h3 className={`text-3xl md:text-4xl font-bold ${color}`}>
                  {number}
                </h3>
                <p className="text-slate-600 mt-2 text-sm md:text-base">{label}</p>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SectionHeader title="What Our Clients Say" />
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "CaneX's team was punctual, polite, and thorough. Our clinic has never felt cleaner!",
                client: "— Dr. Ayesha Khan, Smile Care Dental",
              },
              {
                quote:
                  "We've worked with many cleaning companies, but CaneX stands out for their consistency and professionalism.",
                client: "— Raj Malhotra, Manager, SmartMart India",
              },
            ].map(({ quote, client }, i) => (
              <Card key={i} glass className="border-l-4 border-l-brand-400">
                <p className="text-slate-700 italic text-base leading-relaxed">
                  &ldquo;{quote}&rdquo;
                </p>
                <p className="mt-4 font-semibold text-right text-brand-700 text-sm">
                  {client}
                </p>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center pb-8"
        >
          <Card glass hover={false} padding="p-8 md:p-12" className="max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              Ready to Work With a Trusted Cleaning Partner?
            </h3>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Whether you are managing a corporate building, a residential
              complex, or a retail outlet — we&apos;re ready to bring sparkling
              results.
            </p>
            <Button size="lg" onClick={() => handleContact()}>
              Contact Us Today
            </Button>
          </Card>
        </motion.section>
      </div>
    </PageLayout>
  );
};

export default About;
