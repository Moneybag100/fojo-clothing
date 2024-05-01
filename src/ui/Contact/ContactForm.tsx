import Input from "../Input";
import TextArea from "../TextArea";

const ContactForm = () => {
  return (
    <div className="flex w-full flex-col items-start justify-between space-y-2 text-left md:space-y-6 ml:max-w-[500px]">
      <h3 className="text-xl font-semibold">Contact Form</h3>
      <form className="w-full  space-y-2 rounded-md bg-primaryColor p-6">
        <Input
          name="name"
          id="name"
          label="Name"
          className="w-full text-base"
        />
        <Input
          name="phoneNumber"
          id="phoneNumber"
          label="Phone Number"
          className="text-base"
        />
        <Input
          name="email"
          id="email"
          label="Email"
          type="email"
          className="text-base"
        />
        <TextArea
          label="Message"
          name="message"
          id="message"
          className="text-base"
        />
      </form>

      <button className="mr-auto rounded-md bg-primaryColor px-6 py-[0.35rem] text-lightOffWhite">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
