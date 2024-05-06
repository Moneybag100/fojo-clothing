import { motion } from "framer-motion";
import { serviceGirl } from "../../utils/Image";
import SectionHeader from "../SectionHeader";
import ServicesType from "./ServicesType";

const Services = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
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

  return (
    <section
      id="services"
      className="globalPadding sectionMargn item-center flex w-full flex-col justify-between"
    >
      <div className="mx-auto w-full max-w-custom text-left md:text-center">
        <SectionHeader title="Bespoke Services" />
        <div className="mt-4 flex w-full flex-col items-start justify-between gap-4 md:mt-16 md:flex-row md:items-center">
          <motion.div
            className="w-full space-y-4 text-left md:w-[40%]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-xl font-medium text-primaryColor m:text-2xl md:text-3xl ml:text-3xl">
              Expertly tailored from concept to creation
            </h2>
            <p className="paragraphFont space-y-4">
              <span className="block">
                Our services provide personalized experiences that perfectly fit
                your vision for your special day.
              </span>
              <span className="block">
                From the initial consultation to the final touches, we work
                closely with you to ensure every detail is perfectly captured.
                Whether you have a specific design in mind or need guidance from
                us, we're here to bring your dream outfit to life.
              </span>
            </p>
          </motion.div>
          <motion.div
            className="relative flex w-full bg-white md:w-[55%]"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={serviceGirl.src}
              alt={serviceGirl.altText}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </div>
      <ServicesType />
    </section>
  );
};

export default Services;
