import { CeoImage } from "../../utils/ceo";

const Ceo = () => {
  return (
    <div className="mt-8 flex flex-col items-center justify-between gap-8 md:flex-row">
      <div className=" relative w-full md:min-w-[400px]">
        <img src={CeoImage} alt="ceo image" className="h-auto w-full" />
        <p className="absolute bottom-3 left-3 text-xl font-medium text-lightGrayText">
          <span className="block text-left font-semibold">Kojo Tega</span>
          <span className="block text-left">CEO kojo Fashion</span>
        </p>
      </div>
      <p className="paragraphFont italic">
        "At Fojo Clothing, we believe that clothing is more than just covering
        your body; it is a reflection of your identity. That's why we are
        committed to providing apparel that resonates with your unique
        personality and style."
      </p>
    </div>
  );
};

export default Ceo;
