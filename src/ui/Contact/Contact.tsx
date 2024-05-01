import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="purpleBg globalPadding sectionMargn w-full !pb-16 lg:mt-28">
      <div className="max-w-custom m-auto w-full text-left md:text-center">
        <h2 className="subtitleFont mt-6 text-left md:mt-8 md:text-center">
          Contact
        </h2>
        <div className="paragraphFont mt-4 md:mt-8">
          <p>
            Due to our demand we have now moved to an appointment only approach.
            This ensures that every client gets the time and effort he needs
            with his stylist to achieve the ultimate look he is going for. We
            enjoy our relationships with our clients and look forward to
            assisting you soon.
          </p>
          <div className="mt-8 flex w-full flex-col items-center justify-between gap-8 md:mt-20 md:gap-16 ml:flex-row">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
