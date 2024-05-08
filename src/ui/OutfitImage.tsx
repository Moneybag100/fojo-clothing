import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OutfitImage = ({ src, alt }: { src: string; alt: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust threshold as needed
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
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

export default OutfitImage;
