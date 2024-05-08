import { motion } from "framer-motion";
// import { outfitmages } from "../../utils/outfitImages";
import { outfitImages } from "../../utils/outfit";
import SectionHeader from "../SectionHeader";
import OutfitImage from "../OutfitImage";

const OutfitContent = () => {
  const containerVariant = {
    visible: {
      transition: {
        staggerChildren: 0.2,
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
    <div className="m-auto w-full text-left md:text-center">
      <div className="globalPadding">
        {" "}
        <SectionHeader
          title="Amazing quality"
          text="Meticulous attention to detail"
        />
        <motion.p
          className=" mt-4 text-lg font-semibold"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Embark on a journey of personalized elegance with our exclusive
          designs.
        </motion.p>
      </div>

      <motion.div
        className="mt-4 grid grid-cols-1 gap-1 sm:grid-cols-2  md:grid-cols-3 ml:grid-cols-4 lg:grid-cols-5"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {outfitImages.map((outfit, i) => (
          <OutfitImage key={i} src={outfit.src} alt={outfit.altText} />
        ))}
      </motion.div>
    </div>
  );
};

export default OutfitContent;
