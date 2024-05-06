import { motion } from "framer-motion";
import logo from "./../assets/logo/fojoCircleWhite.png";
// import { motion } from "framer-motion";

const textVariant = {
  hidden: { x: "-120%" },
  display: {
    x: 0,
    transition: {
      delay: 1.2,
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
        <div className="slideOut mx-auto w-28 text-center font-medium md:w-32 lg:w-40">
          <img src={logo} alt="logo image" className="h-auto w-full" />
        </div>
      </div>
      <div className="mx-auto h-9 overflow-hidden px-[2px]">
        <motion.h1
          className="mx-auto text-xl font-medium italic m:text-2xl md:text-[1.7rem]"
          variants={textVariant}
          initial="hidden"
          animate="display"
        >
          Luxury in Comfort
        </motion.h1>
      </div>
    </div>
  );
};

export default HeaderContent;
