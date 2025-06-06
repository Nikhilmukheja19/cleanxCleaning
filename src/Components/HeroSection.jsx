// HeroSection.jsx
// import heroImg from "../assets/cleaning-staff.png"; // update path as needed

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-purple-200 py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Your Hygiene, Our Mission
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            CleanX offers top-class residential and commercial cleaning services
            with professional staff and eco-friendly solutions.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-red-700 hover:bg-red-800 text-white font-medium px-6 py-3 rounded-md">
              Learn More
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-red-700 font-medium px-6 py-3 rounded-md">
              Book Now
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full max-w-md">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.36ZS7JGOele6BqBDeZjyfwHaD3&pid=Api&P=0&h=220"
            alt="Cleaning Staff"
            className="w-full drop-shadow-xl"
          />
        </div>
      </div>

      {/* Optional: SVG / Decorative Lines */}
      <div className="absolute inset-0 z-0">
        {/* You can add SVG lines or background particles here */}
      </div>
    </section>
  );
};

export default HeroSection;
