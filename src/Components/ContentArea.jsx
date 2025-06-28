import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import photo1 from "../assets/canex4.jpg";
import photo2 from "../assets/canex2.jpg";
import photo3 from "../assets/canex6.jpg";
import photo4 from "../assets/image.png";

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
      "We don’t just clean — we care. Our eco-conscious approach uses biodegradable, non-toxic products that are safe for your family, pets, and the planet. Sustainable cleaning is no longer a luxury — it's a responsibility.",
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

const ContentArea = () => {
  return (
    <>
      <section className="py-20 px-6 max-w-7xl mx-auto overflow-x-hidden">
        {blogData.map((item, index) => {
          const imageVariant = {
            hidden: {
              opacity: 0,
              x: item.imageRight ? 100 : -100,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          };

          const textVariant = {
            hidden: {
              opacity: 0,
              x: item.imageRight ? -100 : 100,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          };

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 mb-5 ${
                item.imageRight ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3, once: true }}
                variants={imageVariant}
                className="w-full md:w-1/2"
              >
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.25}
                  glareColor="#00ffea"
                  glarePosition="all"
                  scale={1.04}
                  transitionSpeed={450}
                  className="rounded-2xl shadow-2xl cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover rounded-2xl"
                  />
                </Tilt>
              </motion.div>

              {/* Text Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3, once: true }}
                variants={textVariant}
                className="md:w-1/2 bg-white bg-opacity-90 rounded-2xl p-10 shadow-lg"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-blue-800">
                  {item.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
                  {item.content}
                </p>
              </motion.div>
            </div>
          );
        })}
      </section>
      <section className="py-20 bg-gray-50">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Our Working Process
          </h2>
          <p className="text-gray-600 text-lg">
            Our Service Booking is very simple. Just fill out the service query
            box and submit the form. After submission, we will contact you for
            verification.
          </p>
        </div>

        <div className="flex flex-col items-center mt-16 px-6 md:flex-row md:justify-around relative">
          {/* Dotted Curve Line */}
          <div className="absolute top-16 left-0 right-0 mx-auto h-32 w-full pointer-events-none overflow-hidden">
            <svg
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,50 Q250,0 500,50 T1000,50"
                fill="none"
                stroke="#ccc"
                strokeWidth="3"
                strokeDasharray="8,8"
              />
            </svg>
          </div>

          {/* Step 1 */}
          <div className="flex flex-col items-center z-10">
            <div className="text-4xl mb-2">📅</div>
            <p className="text-lg font-semibold text-gray-800">Book Form</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center z-10 mt-12 md:mt-0">
            <div className="text-4xl mb-2">📩</div>
            <p className="text-lg font-semibold text-gray-800">
              Get Confirmation
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center z-10 mt-12 md:mt-0">
            <div className="text-4xl mb-2">😊</div>
            <p className="text-lg font-semibold text-gray-800">Work Done</p>
          </div>

          {/* End Arrow */}
          <div className="flex flex-col items-center z-10 mt-12 md:mt-0">
            <div className="text-4xl mb-2 text-blue-700">📤</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentArea;
