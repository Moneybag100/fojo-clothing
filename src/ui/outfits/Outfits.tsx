import { Needle } from "../../utils/Image";
import OutfitContent from "./OutfitContent";

const Outfits = () => {
  return (
    <section className="sectionMargn flex w-full " id="outfits">
      <div className="m-auto flex w-full flex-col text-center">
        <div className="mx-auto flex flex-col px-4">
          <div className="mx-auto h-24">
            <img
              src={Needle.src}
              alt={Needle.altText}
              className="h-full w-auto"
            />
          </div>
          <p className="mx-auto text-lg italic lg:w-3/5">
            Our brand combines modern and classic elements to create stunningly
            breathtaking looks that stand the test of time. Explore our
            collection now and find the dream dress for your perfect day.
          </p>
        </div>
        <OutfitContent />
      </div>
    </section>
  );
};

export default Outfits;
