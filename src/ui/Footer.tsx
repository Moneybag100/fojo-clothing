import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import SocialLink from "./SocialLink";
import logo from "./../assets/logo/fojoWhiteLogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="globalPadding flex w-full flex-col bg-charcoal">
      <div className="mx-auto flex w-full  max-w-custom flex-col items-start justify-between gap-8 pt-3 text-left md:flex-row md:text-center">
        <div className="h-12 w-12">
          <img src={logo} alt={"logo"} className="h-full w-full" />
        </div>

        <div className="flex flex-col items-start justify-between gap-1 text-lightOffWhite md:ml-auto">
          <p className="text-lg font-semibold md:text-xl">Explore</p>
          <div className="flex flex-col items-start justify-between gap-3 text-sm">
            <Link
              to="outfits"
              smooth={true}
              className={"navLink"}
              spy={true}
              hashSpy={true}
              saveHashHistory={true}
              delay={200}
              offset={100}
              duration={1000}
            >
              Outfits
            </Link>
            <Link
              to="about-us"
              smooth={true}
              className={"navLink"}
              spy={true}
              hashSpy={true}
              saveHashHistory={true}
              delay={200}
              offset={100}
              duration={1000}
            >
              About Us
            </Link>
            <Link
              to="services"
              smooth={true}
              className={"navLink"}
              spy={true}
              hashSpy={true}
              saveHashHistory={true}
              delay={200}
              offset={100}
              duration={1000}
            >
              Services
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-1 text-lightOffWhite md:ml-8 lg:ml-14">
          <p className="text-lg font-semibold md:text-xl">Collections</p>
          <div className="flex flex-col items-start justify-between gap-3 text-sm">
            <Link
              to="outfits"
              smooth={true}
              className={"navLink"}
              spy={true}
              hashSpy={true}
              saveHashHistory={true}
              delay={200}
              offset={100}
              duration={1000}
            >
              Outfits
            </Link>
            <NavLink to={"#"}>Fabrics</NavLink>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-1 text-lightOffWhite md:ml-8 lg:ml-14">
          <p className="text-lg font-semibold md:text-xl">Contact Us</p>
          <div className="flex flex-col items-start justify-between gap-[2px] text-sm">
            <Link
              to="contact"
              smooth={true}
              className={"navLink"}
              spy={true}
              hashSpy={true}
              saveHashHistory={true}
              delay={200}
              offset={100}
              duration={1000}
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-1 text-lightOffWhite md:ml-8 lg:ml-14">
          <p className="text-lg font-semibold md:text-xl ">Follow Us</p>
          <div className="flex flex-col items-start justify-between gap-[2px]">
            <SocialLink className="!flex-row gap-[1.2rem] !text-lg " />
          </div>
        </div>
      </div>
      <div className="paragraphFont mx-auto mt-4  flex w-full max-w-custom flex-col text-left text-lightOffWhite md:text-center">
        <p>
          &copy; <span>{`${currentYear}`}</span>-Fojo Clothing. All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
