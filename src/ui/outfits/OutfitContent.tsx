import { outfitmages } from "../../utils/outfitImages";

const OutfitContent = () => {
  return (
    <div className="m-auto mt-12 w-full text-left md:text-center">
      <h2 className="subtitleFont p-4 text-left md:p-0 md:text-center">
        <span className="block">Amazing quality</span>
        <span className="block text-lg font-medium italic">
          Meticulous attention to detail
        </span>
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-1 sm:grid-cols-2 md:mt-16 md:grid-cols-3 ml:grid-cols-4 lg:grid-cols-5">
        {outfitmages.map((outfit, i) => (
          <div key={i} className="">
            <img
              src={outfit.src}
              alt={outfit.altText}
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutfitContent;
