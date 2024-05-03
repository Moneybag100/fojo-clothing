import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialFacebookCircular } from "react-icons/ti";

interface SocialLinkProp {
  className?: string;
}
const SocialLink = ({ className }: SocialLinkProp) => {
  return (
    <div
      className={`flex flex-row items-center justify-between gap-[6px]  md:flex-col ${className ? className : ""}`}
    >
      <Link to={"#"}>
        <TiSocialFacebookCircular className="text-[1.7rem]" />
      </Link>
      <Link to={"#"}>
        <FaInstagram className="text-xl" />
      </Link>
      <Link to={"#"}>
        <FaXTwitter className="text-xl" />
      </Link>
      <Link to={"#"}>
        <FaWhatsapp className="text-xl" />
      </Link>
    </div>
  );
};

export default SocialLink;
