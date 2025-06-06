import {
  FiBriefcase,
  FiHeart,
  FiShoppingCart,
  FiBookOpen,
  FiHome,
  FiTool,
} from "react-icons/fi";
import Navbar from "./Navbar";

const industriesList = [
  {
    icon: <FiBriefcase size={28} className="text-purple-600" />,
    title: "Corporate Offices",
  },
  {
    icon: <FiHeart size={28} className="text-red-500" />,
    title: "Healthcare Facilities",
  },
  {
    icon: <FiShoppingCart size={28} className="text-yellow-600" />,
    title: "Retail and Shopping Centers",
  },
  {
    icon: <FiBookOpen size={28} className="text-green-600" />,
    title: "Educational Institutions",
  },
  {
    icon: <FiHome size={28} className="text-blue-600" />,
    title: "Hospitality (Hotels & Restaurants)",
  },
  {
    icon: <FiTool size={28} className="text-indigo-600" />,
    title: "Industrial Plants and Warehouses",
  },

  {
    icon: <FiHome size={28} className="text-pink-600" />,
    title: "Residential Complexes",
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          Industries We Serve
        </h1>
        <p className="text-center max-w-4xl mx-auto text-gray-700 mb-12">
          Cleanx Cleaning provides tailored cleaning services across a wide
          range of industries, ensuring cleanliness, safety, and customer
          satisfaction.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {industriesList.map(({ icon, title }, idx) => (
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

export default Industries;
