// BlogContent.jsx
import { motion } from "framer-motion";

const blogData = [
  {
    title: "CleanX - Professional Cleaning Solutions",
    content:
      "Experience the best cleaning services with CleanX. From homes to offices, we ensure spotless results with eco-friendly practices.",
    image:
      "https://goinggreencs.com/wp-content/uploads/2020/03/AdobeStock_199161361-Cleaning-services-header-image-Resize.jpg",
    imageRight: true,
  },
  {
    title: "Eco-Friendly Cleaning",
    content:
      "Our eco-friendly products keep your space clean without harming the environment. Choose green, live clean.",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.KJEz8raFeQtNtic_28yQGQHaEK&pid=Api&P=0&h=220",

    imageRight: false,
  },
  {
    title: "Advanced Equipment",
    content:
      "We use the latest cleaning equipment to ensure efficient and deep cleaning for all surfaces.",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.yRYXZEqKZUPTOP-IW-m0yAHaE7&pid=Api&P=0&h=220",
    imageRight: true,
  },
  {
    title: "Affordable Plans",
    content:
      "Flexible and affordable pricing plans to suit your cleaning needs, whether it's weekly, monthly, or one-time.",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.ngoWfsG9M7TtFu29oUV0UQHaDX&pid=Api&P=0&h=220",
    imageRight: false,
  },
];

const BlogContent = () => {
  return (
    <>
      <div className=" px-6 py-16 max-w-7xl mx-auto overflow-x-hidden">
        {blogData.map((item, index) => {
          const imageVariant = {
            hidden: {
              opacity: 0,
              x: item.imageRight ? 100 : -100,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" },
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
              transition: { duration: 0.6, ease: "easeOut" },
            },
          };

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                item.imageRight ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                variants={imageVariant}
                src={item.image}
                alt={item.title}
                className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
              />
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                variants={textVariant}
                className="md:w-1/2"
              >
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-600 text-lg">{item.content}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogContent;
