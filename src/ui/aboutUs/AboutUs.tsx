import Ceo from "./Ceo";
import SectionHeader from "../SectionHeader";
import { motion } from "framer-motion";

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

const AboutUs = () => {
  return (
    <section id="about-us" className="globalPadding sectionMargn flex  w-full">
      <motion.div
        className="m-auto w-full max-w-custom text-left md:text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader title="About The Brand" />
        <motion.p
          className="paragraphFont  mt-4 md:mt-16"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          Fojo Clothing is a unisex brand designed for the bold individual who
          seeks representative outfits that make a statement. We offer a curated
          selection of fabrics, stylish ensembles, and expert tips to elevate
          your fashion game and set you apart from the crowd.
        </motion.p>
        <Ceo />
      </motion.div>
    </section>
  );
};

export default AboutUs;
