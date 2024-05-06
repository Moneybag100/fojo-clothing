import { motion } from "framer-motion";
import { Needle } from "../utils/Image";

const OurBrand = () => {
  const needleVariant = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "linear",
        type: "tween",
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

  return (
    <div className="sectionMargn globalPadding flex w-full">
      <div className="m-auto flex flex-col">
        <motion.div
          className="mx-auto h-24"
          variants={needleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px -30px 0px 100px", amount: 0.4 }}
        >
          <img
            src={Needle.src}
            alt={Needle.altText}
            className="h-full w-auto"
          />
        </motion.div>
        <motion.p
          className="paragraphFont mx-auto mt-4 text-center lg:w-3/5"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px -30px 0px 100px", amount: 0.2 }}
        >
          Experience timeless elegance and comfort with our exquisite
          collection. Our brand seamlessly blends contemporary and traditional
          styles to craft impeccably stunning ensembles. Discover the epitome of
          luxury in comfort as you explore our collections. We create the
          perfect dress for every occasion and embrace effortless sophistication
          with every wear.
        </motion.p>
      </div>
    </div>
  );
};

export default OurBrand;
