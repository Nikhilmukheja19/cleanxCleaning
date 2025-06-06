// import Footer from "./Footer";
import Navbar from "./Navbar";

// ContactUs.jsx
const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white py-13 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Send a Message
            </h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-8">
              It is our job to save you time so you can tend to your most
              important commitments. To get started and learn more about how we
              work, get in touch with us to speak to one of our representatives
              and request a free quote.
            </p>

            <div className="space-y-4 text-sky-600 font-medium">
              <div className="flex items-center gap-3">
                <span>🏢</span>
                <span>Office: +1 (604) 377-5579</span>
              </div>
              <div className="flex items-center gap-3">
                <span>💬</span>
                <span>Estimates: +1 (778) 862-9427</span>
              </div>
              <div className="flex items-center gap-3">
                <span>✉️</span>
                <span>Email: info@lionsgatemaintenance.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📍</span>
                <span>Address: 6692 Dawson Street, Vancouver BC, V5S 2W1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ContactUs;
