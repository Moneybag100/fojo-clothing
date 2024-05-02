import { services } from "../../utils/services";

const ServicesType = () => {
  return (
    <div className="mx-auto mt-28 grid w-full max-w-custom grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <div
          className="item-center flex flex-col justify-start gap-y-2"
          key={i}
        >
          <div className="mx-auto">
            <img src={service.image.src} alt={service.image.altText} />
          </div>
          <h3 className="mx-auto text-2xl font-semibold capitalize md:text-3xl">
            {service.title}
          </h3>
          <p className="paragraphFont mx-auto text-center">{service.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesType;
