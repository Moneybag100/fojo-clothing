import { Ceo as lead } from "../../utils/Image";

const Ceo = () => {
  return (
    <div className="mt-8 flex flex-col items-center justify-between gap-8 md:flex-row">
      <div className=" relative w-full">
        <img src={lead.src} alt={lead.altText} className="h-auto w-full" />
        <p className="text-lightGrayText absolute bottom-3 left-3 text-xl font-medium">
          <span className="block text-left font-semibold">Kojo Tega</span>
          <span className="block text-left">CEO kojo Fashion</span>
        </p>
      </div>
      <p className="paragraphFont italic">
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
        possimus reiciendis vero earum minus magnam inventore accusantium
        corporis rem libero ex, quaerat sapiente voluptatum at perferendis sit
        perspiciatis laborum expedita?"
      </p>
    </div>
  );
};

export default Ceo;
