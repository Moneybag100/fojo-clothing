import { motion } from "framer-motion";
import { fojoEmail, fojoPhoneNumber } from "../../utils/contactInfo";

const containerVariants = {
  hidden: { opacity: 0.5 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.3,
      when: "beforeChildren",
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

const ContactInfo = () => {
  return (
    <motion.div
      className="mb-auto flex w-full flex-col items-start justify-between gap-8 md:flex-row md:gap-16 ml:gap-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col items-start justify-between space-y-1 text-left"
        variants={itemVariants}
      >
        <h3 className="text-xl font-semibold md:mb-3">Get In Touch</h3>
        <p>{fojoEmail}</p>
        <p>{fojoPhoneNumber}</p>
        <p className="-space-y-1">
          <span className="block">No 1 delta avenue</span>
          <span className="block">Otta farm road</span>
          <span className="block">Ogun Sate</span>
        </p>
      </motion.div>
      <motion.div className="flex flex-col gap-y-4 " variants={itemVariants}>
        <div className="mr-auto flex flex-col  items-start justify-between space-y-1 text-left md:space-y-3">
          <h3 className="text-xl font-semibold">Visit us</h3>
          <p>
            We are located on the corner of Sunflower and Bristol. Second level.
          </p>
        </div>
        <motion.div
          className="md:space-y-6text-left flex flex-col items-start justify-between  space-y-1 md:space-y-2"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold">Store Hours</h3>
          <p className="flex flex-col items-start justify-between text-left">
            <span className="block">M-F: 10am – 7pm</span>
            <span className="block">Sat: 10am – 6pm</span>
            <span className="block"> Sun: closed</span>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
