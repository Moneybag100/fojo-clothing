import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { outfitmages } from "../../utils/outfitImages";
import SectionHeader from "../SectionHeader";

const OutfitContent = () => {
  const containerVariant = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="m-auto w-full text-left md:text-center">
      <SectionHeader
        title="Amazing quality"
        text="Meticulous attention to detail"
      />
      <motion.div
        className="mt-4 grid grid-cols-1 gap-1 sm:grid-cols-2 md:mt-16 md:grid-cols-3 ml:grid-cols-4 lg:grid-cols-5"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {outfitmages.map((outfit, i) => (
          <OutfitImage key={i} src={outfit.src} alt={outfit.altText} />
        ))}
      </motion.div>
    </div>
  );
};

const OutfitImage = ({ src, alt }: { src: string; alt: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust threshold as needed
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: "easeInOut",
          },
        },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      <img src={src} alt={alt} className="h-auto w-full" />
    </motion.div>
  );
};

export default OutfitContent;
