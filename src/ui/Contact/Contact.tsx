import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

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

const Contact = () => {
  return (
    <section
      className=" globalPadding sectionMargn lg:mt-26 w-full !pb-16"
      id="contact"
    >
      <div className="m-auto w-full max-w-custom text-left md:text-center">
        {/* <h2 className="subtitleFont mt-4 text-left md:mt-8 md:text-center">
          Contact
        </h2> */}
        <SectionHeader title=" Contact" />
        <div className="paragraphFont mt-4 md:mt-8">
          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            Due to our demand we have now moved to an appointment only approach.
            This ensures that every client gets the time and effort he needs
            with his stylist to achieve the ultimate look he is going for. We
            enjoy our relationships with our clients and look forward to
            assisting you soon.
          </motion.p>
          <motion.div
            className="mt-6 flex w-full flex-col items-center justify-between gap-8 md:mt-10 md:gap-16 ml:flex-row"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ContactForm />
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
