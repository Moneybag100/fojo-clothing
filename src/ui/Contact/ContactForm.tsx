import { motion } from "framer-motion";
import { animateScroll } from "react-scroll";
import emailjs from "@emailjs/browser";
import { SubmitHandler, useController, useForm } from "react-hook-form";
import { isEmailValid, isPhoneValid, toLowerCase } from "../../utils/helper";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Input from "../Input";
import TextArea from "../TextArea";
import toast from "react-hot-toast";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.6,
      when: "beforeChildren",
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const formVariant = {
  hidden: { y: "20%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    delay: 1.2,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};
const buttonVariant = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    delay: 4,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const options = {
  duration: 1500,
  smooth: true,
};

interface IFormInput {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    control,
  } = useForm<IFormInput>();

  const { field } = useController({
    name: "phoneNumber",
    control,
    rules: {
      required: {
        value: true,
        message: "This field is required",
      },
      validate: {
        isPhoneValid: (value) => isPhoneValid(value) || "Invalid phone number",
      },
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const templateParams = {
      name: data.name,
      phoneNumber: data.phoneNumber,
      email: data.email,
      message: data.message,
    };
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY },
      )
      .then(
        () => {
          reset();
          toast.success("message sent successfully");
          animateScroll.scrollToBottom(options);
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (_error) => {
          toast.error("Failed, something went wrong.");
        },
      );
  };

  return (
    <motion.div
      className="flex w-full flex-col items-start justify-between space-y-2 text-left md:space-y-6 ml:max-w-[500px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h3 className="text-xl font-semibold" variants={textVariant}>
        Contact Form
      </motion.h3>
      <motion.form
        id="contact-form"
        className="w-full space-y-2 rounded-md bg-primaryColor p-6"
        variants={formVariant}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          name="name"
          id="name"
          label="Name"
          className="w-full text-base"
          error={errors}
          disabled={isSubmitting}
          register={register}
          validationSchema={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
        />
        <div className="relative w-full text-lightOffWhite">
          <label htmlFor="phoneNumber" className="text-base">
            Phone Number
          </label>
          <PhoneInput
            defaultCountry="ng"
            value={field.value}
            onChange={field.onChange}
            className="w-full"
            inputClassName="phoneInputStyle"
          />
          {errors && errors["phoneNumber"] && (
            <span className="absolute -top-0 right-0 text-[.75rem] text-primaryRed">
              {errors["phoneNumber"].message}
            </span>
          )}
        </div>

        <Input
          name="email"
          id="email"
          label="Email"
          type="email"
          error={errors}
          register={register}
          disabled={isSubmitting}
          validationSchema={{
            required: {
              value: true,
              message: "This field is required",
            },
            validate: {
              isEmailValid: (value) => isEmailValid(value) || "Invalid email",
            },
            setValueAs: (v) => toLowerCase(v),
          }}
          className="text-base"
        />
        <TextArea
          label="Message"
          name="message"
          id="message"
          error={errors}
          disabled={isSubmitting}
          register={register}
          validationSchema={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
          className="text-base"
        />
      </motion.form>

      <motion.button
        form="contact-form"
        className="mr-auto rounded-md bg-primaryColor px-6 py-[0.35rem] text-lightOffWhite"
        variants={buttonVariant}
        disabled={isSubmitting}
      >
        Submit
      </motion.button>
    </motion.div>
  );
};

export default ContactForm;
