import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { images } from "../../utils/bannerImages";
import BannerContent from "./BannerContent";
import HeaderContent from "../../ui/HeaderContent";

const Banner = () => {
  return (
    <div className="afterImage w-full">
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
    </div>
  );
};

export default Banner;
