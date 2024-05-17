import { motion } from "framer-motion";
import { CeoImage } from "../../utils/ceo";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3, // Delay the animation to start after the image animation
      duration: 1.2,
      ease: "easeOut",
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

const imageVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: [0, 0.3, 0.6, 0.8, 1],
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeInOut",
    },
  },
};

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

const Ceo = () => {
  return (
    <motion.div
      className="mt-8 flex flex-col items-center justify-between gap-8 md:flex-row"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className=" relative w-full overflow-hidden md:min-w-[400px]"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src={CeoImage} alt="ceo image" className="h-auto w-full" />
        <motion.p
          className="absolute bottom-3 left-3 text-xl font-medium text-lightGrayText"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span
            className="block text-left font-semibold"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            Faith Joshua
          </motion.span>
          <motion.span
            className="block text-left"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            CEO Fojo Inc.
          </motion.span>
        </motion.p>
      </motion.div>
      <motion.p
        className="paragraphFont italic"
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        "At Fojo Clothing, we believe that clothing is more than just covering
        your body; it is a reflection of your identity. That's why we are
        committed to providing apparel that resonates with your unique
        personality and style."
      </motion.p>
    </motion.div>
  );
};

export default Ceo;
