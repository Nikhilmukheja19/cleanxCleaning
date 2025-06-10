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
      "Experience the best cleaning services with CaneX. From homes to offices, we ensure spotless results with eco-friendly practices.",
    image: photo1,
    imageRight: true,
  },
  {
    title: "Eco-Friendly Cleaning",
    content:
      "Our eco-friendly products keep your space clean without harming the environment. Choose green, live clean.",
    image: photo2,
    imageRight: false,
  },
  {
    title: "Advanced Equipment",
    content:
      "We use the latest cleaning equipment to ensure efficient and deep cleaning for all surfaces.",
    image: photo3,
    imageRight: true,
  },
  {
    title: "Affordable Plans",
    content:
      "Flexible and affordable pricing plans to suit your cleaning needs, whether it's weekly, monthly, or one-time.",
    image: photo4,
    imageRight: false,
  },
];

const BlogContent = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto overflow-x-hidden">
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
            className={`flex flex-col md:flex-row items-center gap-12 mb-20 ${
              item.imageRight ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              variants={imageVariant}
              className="w-full md:w-1/2"
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#00ffea"
                glarePosition="all"
                scale={1.05}
                transitionSpeed={400}
                className="rounded-2xl shadow-xl cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover rounded-2xl"
                />
              </Tilt>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              variants={textVariant}
              className="md:w-1/2 bg-white bg-opacity-80 rounded-2xl p-8 shadow-md"
            >
              <h2 className="text-3xl font-extrabold mb-6 text-blue-800 ">
                {item.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};

export default BlogContent;
