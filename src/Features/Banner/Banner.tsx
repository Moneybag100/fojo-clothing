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
      <div className="absolute -bottom-[24px] left-1/2  z-[998] w-max -translate-x-1/2 bg-lightOffWhite md:-bottom-[1px] md:left-[-6.5rem] md:-translate-y-[170%] md:translate-x-0 md:-rotate-90">
        <FollowUs />
      </div>
    </div>
  );
};

export default Banner;
