import {
  FiUsers,
  FiBriefcase,
  FiHome,
  FiHeart,
  FiBookOpen,
  FiTruck,
  FiTool,
} from "react-icons/fi";
import Navbar from "./Navbar";

const clientsList = [
  {
    icon: <FiUsers size={28} className="text-blue-500" />,
    title: "Corporate Offices",
  },
  {
    icon: <FiHome size={28} className="text-green-500" />,
    title: "Residential Complexes",
  },
  {
    icon: <FiBriefcase size={28} className="text-purple-500" />,
    title: "Retail Stores",
  },
  {
    icon: <FiHeart size={28} className="text-red-500" />,
    title: "Healthcare Facilities",
  },
  {
    icon: <FiBookOpen size={28} className="text-yellow-500" />,
    title: "Educational Institutions",
  },
  {
    icon: <FiTruck size={28} className="text-pink-500" />,
    title: "Hospitality and Hotels",
  },
  {
    icon: <FiTool size={28} className="text-indigo-500" />,
    title: "Industrial and Manufacturing Units",
  },
];

const Clients = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar />

      <main className="bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          Our Clients
        </h1>
        <p className="text-center max-w-3xl mx-auto text-gray-700 mb-12">
          We proudly serve a diverse range of clients across various industries,
          delivering tailored cleaning solutions with excellence and care.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {clientsList.map(({ icon, title }, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Clients;
