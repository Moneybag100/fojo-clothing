import { motion } from "framer-motion";
import logo from "./../assets/logo/fojoCircleWhite.png";

const imageVariant = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: {
      duration: 1.5,
      ease: "linear",
      type: "tween",
    },
  },
};

const textVariant = {
  hidden: { x: "-100%", opacity: 0 },
  display: {
    opacity: 1,
    x: "0%",
    transition: {
      delay: 1,
      duration: 0.9,
      ease: "linear",
      type: "tween",
    },
  },
};

const HeaderContent = () => {
  return (
    <div className="absolute left-0 top-0 z-[998] flex h-full w-full flex-col items-center justify-center text-lightOffWhite">
      <div className="mx-auto  overflow-hidden text-center font-medium">
        <motion.div
          className=" mx-auto w-36 text-center font-medium md:w-40 lg:w-48"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          // animate="visible"
          viewport={{ once: true }}
        >
          <img src={logo} alt="logo image" className="h-auto w-full" />
        </motion.div>
      </div>
      <div className="mx-auto mt-4 h-9 overflow-hidden px-[2px]">
        <motion.div
          variants={textVariant}
          initial="hidden"
          // animate="display"
          whileInView="display"
          viewport={{ once: true }}
        >
          <h1 className="mx-auto text-2xl font-medium italic m:text-4xl md:text-3xl">
            Luxury in Comfort
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default HeaderContent;
