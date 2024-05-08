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
      <div className="mx-auto w-28 overflow-hidden text-center font-medium md:w-32 lg:w-40">
        <motion.div
          className=" mx-auto w-28 text-center font-medium md:w-32 lg:w-40"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          // animate="visible"
          viewport={{ once: true }}
        >
          <img src={logo} alt="logo image" className="h-auto w-full" />
        </motion.div>
      </div>
      <div className="mx-auto h-9 overflow-hidden px-[2px]">
        <motion.div
          variants={textVariant}
          initial="hidden"
          // animate="display"
          whileInView="display"
          viewport={{ once: true }}
        >
          <h1 className="mx-auto text-xl font-medium italic m:text-2xl md:text-[1.7rem]">
            Luxury in Comfort
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default HeaderContent;
