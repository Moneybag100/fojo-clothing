import { motion } from "framer-motion";

interface SectionHeaderProp {
  title: string;
  text?: string;
}
const SectionHeader = ({ title, text }: SectionHeaderProp) => {
  const titleVariant = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 1.2,
      },
    },
  };
  const textVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 1,
      },
    },
  };

  return (
    <div>
      <h2 className="subtitleFont text-left md:p-0 md:text-center">
        <motion.span
          className="block capitalize"
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {title}
        </motion.span>

        <motion.span
          className="block text-xl font-medium italic text-primaryColor md:text-[1.4rem]"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {text}
        </motion.span>
      </h2>
    </div>
  );
};

export default SectionHeader;
