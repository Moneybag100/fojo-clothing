import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { images } from "../../utils/bannerImages";
import BannerContent from "./BannerContent";
import HeaderContent from "../../ui/HeaderContent";
import FollowUs from "../../ui/FollowUs";
import { motion } from "framer-motion";

const Banner = () => {
  const linksVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 3,
      },
    },
  };

  return (
    <div className="afterImage overflow relative w-full">
      <AliceCarousel
        animationType="fadeout"
        animationDuration={1000}
        disableButtonsControls
        infinite
        mouseTracking
        autoPlay={true}
        autoPlayInterval={6000}
        autoPlayStrategy={"none"}
        disableDotsControls={true}
      >
        {images.map((image, i) => (
          <BannerContent {...image} key={i} />
        ))}
      </AliceCarousel>
      <HeaderContent />
      <motion.div
        className="absolute -bottom-[24px] left-1/2  z-[998] w-max -translate-x-1/2 bg-lightOffWhite md:-bottom-[1px] md:left-[-6.5rem] md:-translate-y-[200%] md:translate-x-0 md:-rotate-90"
        variants={linksVariant}
        initial="hidden"
        animate="visible"
      >
        <FollowUs />
      </motion.div>
    </div>
  );
};

export default Banner;
