import { Image } from "../../utils/types";

const BannerContent = ({ src }: Image) => {
  return (
    <div className="overflow-hidden">
      <div
        className="afterImage zoomout zoomed relative h-[80vh] w-full overflow-hidden md:h-screen"
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          // animation: " zoomOut 7500ms linear infinite",
        }}
      />
    </div>
  );
};

export default BannerContent;
