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
    icon: <FiCheckCircle className="text-green-500" size={28} />,
    title: "Quality",
    desc: "Delivering the highest standard in every cleaning service.",
  },
  {
    icon: <FiUsers className="text-blue-500" size={28} />,
    title: "Trust",
    desc: "Building lasting relationships with clients and employees.",
  },
  {
    icon: <FiTarget className="text-red-500" size={28} />,
    title: "Commitment",
    desc: "Dedicated to exceeding expectations every time.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 m-6">
      <Navbar />

      <main className=" max-w-6xl mx-auto px-6 pb-16 space-y-16">
        {/* Page Header */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-700 flex justify-center items-center gap-3">
            <FiInfo size={40} className="text-blue-600" />
            About Us
          </h1>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg">
            Cleanx Cleaning is dedicated to providing outstanding cleaning and
            maintenance services with professionalism and care. Our goal is to
            create healthier, cleaner spaces for our clients.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12 items-center bg-white p-10 rounded-lg shadow-lg">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              To deliver reliable, eco-friendly cleaning services that enhance
              the wellbeing of our clients’ environments, fostering a clean,
              safe, and healthy community.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted and innovative cleaning service provider,
              recognized for excellence, integrity, and sustainable practices.
            </p>
          </div>

          <img
            src="https://scrubnbubbles.com/wp-content/uploads/2021/02/professional-cleaning-companies.jpg"
            alt="cleaning team"
            className="rounded-lg shadow-md w-full object-cover max-h-96"
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
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
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
                <h3 className="text-xl font-semibold">{name}</h3>
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
            <li className="mb-10 ml-6">
              <span className="absolute -left-3 top-1 bg-blue-600 w-6 h-6 rounded-full border-4 border-white"></span>
              <h3 className="text-lg font-semibold text-gray-900">
                2015 - Founded
              </h3>
              <p className="text-gray-700">
                Cleanx Cleaning was founded with a vision to transform the
                cleaning industry.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute -left-3 top-1 bg-blue-600 w-6 h-6 rounded-full border-4 border-white"></span>
              <h3 className="text-lg font-semibold text-gray-900">
                2018 - Expansion
              </h3>
              <p className="text-gray-700">
                Expanded services to cover residential and commercial sectors.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute -left-3 top-1 bg-blue-600 w-6 h-6 rounded-full border-4 border-white"></span>
              <h3 className="text-lg font-semibold text-gray-900">
                2021 - Eco-friendly Initiatives
              </h3>
              <p className="text-gray-700">
                Started using green cleaning products and sustainable practices.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute -left-3 top-1 bg-blue-600 w-6 h-6 rounded-full border-4 border-white"></span>
              <h3 className="text-lg font-semibold text-gray-900">
                2024 - Trusted Industry Leader
              </h3>
              <p className="text-gray-700">
                Recognized as a leading cleaning service provider in the region.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default About;
