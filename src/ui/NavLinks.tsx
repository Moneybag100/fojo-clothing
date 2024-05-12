import { Link } from "react-scroll";

interface NavLinksProp {
  className?: string;
  closeSidebar?: () => void;
}

const NavLinks = ({ className, closeSidebar }: NavLinksProp) => {
  return (
    <nav
      className={`bg-slate-500 mx-auto w-full text-lg font-medium uppercase text-textColor md:text-lightOffWhite ${className ? className : ""}`}
    >
      <ul className="md:base flex flex-col items-start md:flex-row md:items-center md:justify-between ">
        <li className="w-full cursor-pointer border-b border-primaryColor   md:w-max md:border-none">
          <Link
            to="outfits"
            smooth={"easeOutQuad"}
            className={"navLink block h-full w-full py-4  md:!p-0"}
            spy={true}
            hashSpy={true}
            saveHashHistory={true}
            delay={200}
            offset={-80}
            duration={1500}
            onClick={closeSidebar}
          >
            Outfits
          </Link>
        </li>
        <li className="w-full cursor-pointer border-b border-primaryColor   md:w-max md:border-none">
          <Link
            to="about-us"
            smooth={"easeOutQuad"}
            className={"navLink block h-full w-full py-4  md:!p-0"}
            spy={true}
            hashSpy={true}
            saveHashHistory={true}
            delay={200}
            offset={-80}
            duration={1500}
            onClick={closeSidebar}
          >
            About us
          </Link>
        </li>
        <li className="w-full cursor-pointer border-b border-primaryColor md:w-max md:border-none">
          <Link
            to="services"
            smooth={"easeOutQuad"}
            className={"navLink block h-full w-full py-4  md:!p-0"}
            spy={true}
            hashSpy={true}
            saveHashHistory={true}
            delay={200}
            offset={-80}
            duration={1500}
            onClick={closeSidebar}
          >
            Services
          </Link>
        </li>
        <li className="w-full cursor-pointer border-b border-primaryColor md:w-max md:border-none">
          <Link
            to="contact"
            smooth={"easeOutQuad"}
            className={"navLink block h-full w-full py-4  md:!p-0"}
            spy={true}
            hashSpy={true}
            saveHashHistory={true}
            delay={200}
            offset={-80}
            duration={1500}
            onClick={closeSidebar}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
