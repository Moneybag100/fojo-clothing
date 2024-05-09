import { alteration, consultant, design, styleIcon } from "./Image";
import { services as serviceType } from "./types";

export const services: Array<serviceType> = [
  {
    image: design,
    title: "Exclusive Designs",
    text: "From conception to completion, we tailor each garment by transforming your vision into an exquisite reality, ensuring every detail reflects your personality and essence.",
  },
  {
    image: styleIcon,
    title: "Quality Fabrics",
    text: "From soft cotton to plush velvet, and sumptuous silks, we offer a range of premium fabrics meticulously sourced for their quality and elegance that exude sophistication ensuring unparalleled comfort and style with every garment.",
  },
  {
    image: alteration,
    title: "Alterations",
    text: "We ensure that your outfit seamlessly fits you, making the necessary adjustments to suit your individual needs.",
  },
  {
    image: consultant,
    title: "Style Tips",
    text: "Our team of experts is dedicated to helping you discover your signature look and confidently elevate your wardrobe. We provide tailored tips to suit your taste and inspire you to explore new styles that express your unique personality through fashion.",
  },
];
