import Navbar from "./Navbar";
import { FiInfo } from "react-icons/fi";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 w-full shadow-md bg-white z-50">
        <Navbar />
      </header>

      <main className="pt-20 max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex items-center mb-6 space-x-3">
            <FiInfo size={30} className="text-blue-600" />
            <h1 className="text-4xl font-extrabold text-gray-900">
              About Cleanx Cleaning
            </h1>
          </div>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Cleanx Cleaning is a leading building maintenance company
            specializing in professional cleaning services for commercial and
            residential properties. We are committed to delivering high-quality,
            reliable, and eco-friendly cleaning solutions that meet the unique
            needs of each client.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Founded in [Year], our team of experienced professionals uses
            state-of-the-art equipment and environmentally safe products to
            ensure your spaces are spotless, safe, and welcoming.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide exceptional service and build lasting
            relationships with our clients based on trust and satisfaction.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
