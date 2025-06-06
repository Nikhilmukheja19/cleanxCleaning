import Navbar from "./Navbar";

const Services = () => {
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
        "Environmentally friendly cleaning services using non-toxic, biodegradable products to keep your space safe and healthy.",
      icon: "🌿",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          Our Cleaning Services
        </h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
