import Ceo from "./Ceo";
import SectionHeader from "../SectionHeader";

const AboutUs = () => {
  return (
    <section id="about-us" className="globalPadding sectionMargn flex  w-full">
      <div className="m-auto w-full max-w-custom text-left md:text-center ">
        <SectionHeader title="About The Brand" />
        <p className="paragraphFont  mt-4 md:mt-16">
          Fojo Clothing is a unisex brand designed for the bold individual who
          seeks representative outfits that make a statement. We offer a curated
          selection of fabrics, stylish ensembles, and expert tips to elevate
          your fashion game and set you apart from the crowd.
        </p>
        <Ceo />
      </div>
    </section>
  );
};

export default AboutUs;
