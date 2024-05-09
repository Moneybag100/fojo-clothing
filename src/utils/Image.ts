import { Image } from "./types";
import logo from "/src/assets/logo/logo.png";
import needleImg from "/src/assets/needleImg.png";

// services
import serviceImage from "/src/assets/services/serviceImages.jpg";
import serviceImage2 from "/src/assets/services/servicesImage.jpg";
import designIcon from "/src/assets/services/designIcon.png";
import alterationIcon from "/src/assets/services/alterationIcon.png";
import consultantIcon from "/src/assets/services/consultantIcon.png";
import style from "/src/assets/services/fabrics.png";

// logo
export const Logo: Image = {
  src: logo,
  altText: "logo",
};
export const Needle: Image = {
  src: needleImg,
  altText: "needle img",
};

// services
export const serviceGirl: Image = {
  src: serviceImage,
  altText: "girl image",
};
export const serviceGirl2: Image = {
  src: serviceImage2,
  altText: "girl image2",
};
export const design: Image = {
  src: designIcon,
  altText: "design image",
};

export const alteration: Image = {
  src: alterationIcon,
  altText: "alteraion image",
};

export const consultant: Image = {
  src: consultantIcon,
  altText: "consultant image",
};
export const styleIcon: Image = {
  src: style,
  altText: "style image",
};
