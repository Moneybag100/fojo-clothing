import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { TiSocialFacebookCircular } from "react-icons/ti";
import { fojoIntagram, fojoPhoneNumber, fojoX } from "../utils/contactInfo";

interface SocialLinkProp {
  rotate?: boolean;
  className?: string;
}
const SocialLink = ({ rotate, className }: SocialLinkProp) => {
  return (
    <div
      className={`flex flex-row items-center justify-between gap-4 ${className ? className : ""}`}
    >
      {/* <Link to={"#"} className={`${rotate ? "rotate-0 md:rotate-90" : ""}`}>
        <TiSocialFacebookCircular className="text-[1.7rem]" />
      </Link> */}
      <Link
        to={`${fojoIntagram}`}
        className={`${rotate ? "rotate-0 md:rotate-90" : ""}`}
      >
        <FaInstagram className="text-xl" />
      </Link>
      <Link
        to={`${fojoX}`}
        className={`${rotate ? "rotate-0 md:rotate-90" : ""}`}
      >
        <FaXTwitter className="text-xl" />
      </Link>
      <Link
        to={`https://api.whatsapp.com/send?phone=${fojoPhoneNumber}`}
        target="_blank"
        className={`${rotate ? "rotate-0 md:rotate-90" : ""}`}
      >
        <FaWhatsapp className="text-xl" />
      </Link>
    </div>
  );
};

export default SocialLink;
