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
    text: "We ensure that your dress seamlessly fits you, making the necessary adjustments to suit your individual needs. ",
  },
  {
    image: consultant,
    title: "consulting",
    text: "We’re here to assist you with any special requests or concerns, from fabric choices to dress style inspirations. ",
  },
];
