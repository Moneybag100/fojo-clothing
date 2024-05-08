import { motion } from "framer-motion";
import Input from "../Input";
import TextArea from "../TextArea";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.6,
      when: "beforeChildren",
    },
  },
};

// const textVariant = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 1,
//       ease: "easeOut",
//     },
//   },
// };

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const formVariant = {
  hidden: { y: "20%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    delay: 1.2,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};
const buttonVariant = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    delay: 4,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const ContactForm = () => {
  return (
    <motion.div
      className="flex w-full flex-col items-start justify-between space-y-2 text-left md:space-y-6 ml:max-w-[500px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h3
        className="text-xl font-semibold"
        variants={textVariant}
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true }}
      >
        Contact Form
      </motion.h3>
      <motion.form
        className="w-full  space-y-2 rounded-md bg-primaryColor p-6"
        variants={formVariant}
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true, amount: 0.2 }}
      >
        <Input
          name="name"
          id="name"
          label="Name"
          className="w-full text-base"
        />
        <Input
          name="phoneNumber"
          id="phoneNumber"
          label="Phone Number"
          className="text-base"
        />
        <Input
          name="email"
          id="email"
          label="Email"
          type="email"
          className="text-base"
        />
        <TextArea
          label="Message"
          name="message"
          id="message"
          className="text-base"
        />
      </motion.form>

      <motion.button
        className="mr-auto rounded-md bg-primaryColor px-6 py-[0.35rem] text-lightOffWhite"
        variants={buttonVariant}
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true }}
      >
        Submit
      </motion.button>
    </motion.div>
  );
};

export default ContactForm;
