import { serviceGirl } from "../../utils/Image";
import ServicesType from "./ServicesType";

const Services = () => {
  return (
    <section
      id="services"
      className="globalPadding sectionMargn item-center flex w-full flex-col justify-between"
    >
      <div className="mx-auto w-full max-w-custom  text-left md:text-center">
        <h2 className="subtitleFont text-left md:text-center">
          Bespoke Services
        </h2>
        <div className="mt-4 flex w-full  flex-col items-start justify-between gap-4 md:mt-16 md:flex-row md:items-center">
          <div className="w-full space-y-4 text-left md:w-[40%]">
            <h2 className="text-xl font-medium m:text-2xl md:text-3xl ml:text-3xl ">
              Expertly tailored from concept to creation
            </h2>
            <p className="paragraphFont space-y-4">
              <span className="block">
                Our services provide personalized experiences that perfectly fit
                your vision for your special day.
              </span>
              <span className="block">
                From the initial consultation to the final touches, we work
                closely with you to ensure every detail is perfectly captured.
                Whether you have a specific design in mind or need guidance from
                us, we&#8217;re here to bring your dream outfit to life.
              </span>
            </p>
          </div>
          <div className="relative flex w-full bg-white md:w-[55%]">
            <div className="my-auto ml-auto h-auto w-full">
              <img
                src={serviceGirl.src}
                alt={serviceGirl.altText}
                className="h-auto w-full"
              />
            </div>
            {/* <div className="absolute -bottom-[10vh] left-0 h-auto w-[200px] bg-textColor md:w-[300px]">
              <img
                src={serviceGirl2.src}
                alt={serviceGirl2.altText}
                className="h-auto w-full"
              />
            </div> */}
          </div>
        </div>
      </div>
      <ServicesType />
    </section>
  );
};

export default Services;
