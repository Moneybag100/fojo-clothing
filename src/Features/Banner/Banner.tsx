import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { images } from "../../utils/bannerImages";
import BannerContent from "./BannerContent";
import HeaderContent from "../../ui/HeaderContent";
import FollowUs from "../../ui/FollowUs";

const Banner = () => {
  return (
    <div className="afterImage relative w-full">
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
      <div className="absolute -bottom-[24px] left-1/2 z-[999] w-[80%] -translate-x-1/2 transform bg-lightOffWhite md:bottom-0 md:left-0 md:w-max">
        <FollowUs />
      </div>
    </div>
  );
};

export default Banner;
