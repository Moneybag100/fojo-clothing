import Ceo from "./Ceo";

const AboutUs = () => {
  return (
    <div className="globalPadding sectionMargn flex w-full ">
      <div className="m-auto w-full max-w-custom text-left md:text-center">
        <h2 className="subtitleFont text-left md:text-center">
          About Kojo Clothing
        </h2>
        <p className="paragraphFont  mt-8 md:mt-16">
          About Kojo Clothing is a tailoring and custom clothing brand in Ibadan
          Nigeria. What sets our shop apart? We&rsquo;re locally-owned and are
          committed to exceptional customer experiences. Clients are never
          numbers on an investor update; they&rsquo;re part of our community,
          and often become friends.
        </p>
        <Ceo />
      </div>
    </div>
  );
};

export default AboutUs;
