import Navbar from "./Navbar";
import { FiInfo, FiUsers, FiTarget, FiCheckCircle } from "react-icons/fi";

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
    icon: <FiCheckCircle className="text-blue-600" size={28} />,
    title: "Quality",
    desc: "Delivering the highest standard in every cleaning service.",
  },
  {
    icon: <FiUsers className="text-blue-600" size={28} />,
    title: "Trust",
    desc: "Building lasting relationships with clients and employees.",
  },
  {
    icon: <FiTarget className="text-blue-600" size={28} />,
    title: "Commitment",
    desc: "Dedicated to exceeding expectations every time.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pb-16 space-y-20">
        {/* Header */}
        <section className="text-center mt-12">
          <h1 className="text-5xl font-extrabold mb-6 text-blue-700 flex justify-center items-center gap-4">
            <FiInfo size={48} className="text-blue-600 animate-pulse" />
            About Us
          </h1>
          <p className="max-w-3xl mx-auto text-blue-900 text-xl font-medium leading-relaxed tracking-wide">
            At <span className="font-bold text-blue-800">CaneX Cleaning</span>,
            we don’t just clean spaces — we elevate them. With unwavering
            professionalism and care, we create healthier, brighter environments
            where families and businesses thrive.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-14 items-center bg-white p-12 rounded-xl shadow-lg border border-blue-100">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-blue-700 border-l-4 border-blue-600 pl-4">
              Our Mission
            </h2>
            <p className="text-blue-900 text-lg mb-8 leading-relaxed">
              To deliver reliable, eco-friendly cleaning services that enhance
              the wellbeing of our clients’ environments, fostering a clean,
              safe, and healthy community.
            </p>
            <h2 className="text-4xl font-bold mb-6 text-blue-700 border-l-4 border-blue-600 pl-4">
              Our Vision
            </h2>
            <p className="text-blue-900 text-lg leading-relaxed">
              To be the most trusted and innovative cleaning service provider,
              recognized for excellence, integrity, and sustainable practices.
            </p>
          </div>

          <img
            src="https://scrubnbubbles.com/wp-content/uploads/2021/02/professional-cleaning-companies.jpg"
            alt="cleaning team"
            className="rounded-xl shadow-xl w-full object-cover max-h-96 border-4 border-blue-200"
          />
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {coreValues.map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  {title}
                </h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section>
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
            Meet Our Team
          </h2>
          <div className="flex justify-center gap-10 flex-wrap">
            {teamMembers.map(({ name, role, img }, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full flex flex-col items-center"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500"
                />
                <h3 className="text-xl font-semibold text-blue-700">{name}</h3>
                <p className="text-gray-600">{role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* History Timeline */}
        <section className="bg-white p-10 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
            Our Journey
          </h2>
          <ul className="relative border-l border-gray-300 ml-6 space-y-8">
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
              <li key={i} className="mb-10 ml-6">
                <span className="absolute -left-3 top-1 bg-blue-600 w-6 h-6 rounded-full border-4 border-white"></span>
                <h3 className="text-lg font-semibold text-gray-900">
                  {year} - {event}
                </h3>
                <p className="text-gray-700">{desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Founder's Message */}
        <section className="bg-blue-50 p-10 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-900">
            A Message from Our Founder
          </h2>
          <p className="text-gray-800 max-w-4xl mx-auto text-lg leading-relaxed text-center">
            At CaneX Cleaning, our mission goes beyond spotless spaces — its
            about building trust, ensuring safety, and delivering comfort. Every
            sweep and scrub is guided by our values and a deep commitment to our
            clients peace of mind.
            <br />
            <span className="block mt-4 font-semibold text-blue-700">
              — John Doe, Founder & CEO
            </span>
          </p>
        </section>

        {/* CaneX In Numbers */}
        <section className="py-16">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
            CaneX In Numbers 🚀
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
            {[
              {
                number: "10+",
                label: "Years of Service",
                color: "text-blue-600",
              },
              {
                number: "150+",
                label: "Happy Clients",
                color: "text-green-500",
              },
              {
                number: "300+",
                label: "Properties Cleaned",
                color: "text-yellow-500",
              },
              {
                number: "99%",
                label: "Client Satisfaction",
                color: "text-red-500",
              },
            ].map(({ number, label, color }, i) => (
              <div key={i}>
                <h3 className={`text-5xl font-bold ${color}`}>{number}</h3>
                <p className="text-gray-700 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white p-10 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
            What Our Clients Say 🧼
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "CaneX’s team was punctual, polite, and thorough. Our clinic has never felt cleaner!",
                client: "— Dr. Ayesha Khan, Smile Care Dental",
              },
              {
                quote:
                  "We’ve worked with many cleaning companies, but CaneX stands out for their consistency and professionalism.",
                client: "— Raj Malhotra, Manager, SmartMart India",
              },
            ].map(({ quote, client }, i) => (
              <div
                key={i}
                className="bg-blue-50 p-6 rounded-lg border border-blue-200"
              >
                <p className="text-gray-800 italic">“{quote}”</p>
                <p className="mt-4 font-semibold text-right text-blue-700">
                  {client}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">
            Ready to Work With a Trusted Cleaning Partner?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Whether you are managing a corporate building, a residential
            complex, or a retail outlet — we’re ready to bring sparkling
            results.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-md transition">
            Contact Us Today
          </button>
        </section>
      </main>
    </div>
  );
};

export default About;
