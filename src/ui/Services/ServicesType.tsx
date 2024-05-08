import { motion } from "framer-motion";
import { services } from "../../utils/services";

const ServicesType = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: [0, 0.3, 0.6, 0.8, 1],
      x: 0,
      transition: {
        duration: 0.9,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="md:mt-18 lg:mt-22 mx-auto mt-16 grid w-full max-w-custom grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {services.map((service, i) => (
        <motion.div
          className="item-center flex flex-col justify-start gap-y-2 rounded-md border-2 border-dotted border-primaryColor p-4"
          key={i}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mx-auto h-24" variants={imageVariants}>
            <img
              src={service.image.src}
              alt={service.image.altText}
              className="h-full"
            />
          </motion.div>
          <motion.h3
            className="mx-auto text-2xl font-semibold capitalize md:text-3xl"
            variants={itemVariants}
          >
            {service.title}
          </motion.h3>
          <motion.p
            className="paragraphFont mx-auto text-center"
            variants={itemVariants}
          >
            {service.text}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServicesType;
