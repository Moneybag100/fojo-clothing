import { alteration, consultant, design } from "./Image";
import { services as serviceType } from "./types";

export const services: Array<serviceType> = [
  {
    image: design,
    title: "design",
    text: "From sketch to final product, we guide you through the process of crafting the perfect outfit that reflects your personality. ",
  },
  {
    image: alteration,
    title: "alterations",
    text: "We ensure that your outfit seamlessly fits you, making the necessary adjustments to suit your individual needs. ",
  },
  {
    image: consultant,
    title: "consulting",
    text: "We’re here to assist you with any special requests or concerns, from fabric choices to outifit style inspirations. ",
  },
  // {
  //   image: style,
  //   title: "Style Tips",
  //   text: "Our team of experts is dedicated to helping you discover your signature look and confidently elevate your wardrobe. We provide tailored tips to suit your taste and inspire you to explore new styles that express your unique personality through fashion",
  // },
];
