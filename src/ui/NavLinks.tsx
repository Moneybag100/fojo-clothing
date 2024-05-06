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
        <li className="w-full cursor-pointer border-b border-primaryColor  py-4 md:w-max md:border-none md:!p-0">
          <Link
            to="outfits"
            smooth={true}
            className={"navLink"}
            spy={true}
            hashSpy={true}
            saveHashHistory={true}
            delay={200}
            offset={-80}
            duration={1000}
            onClick={closeSidebar}
          >
            Outfits
          </Link>
        </li>
        <li className="w-full cursor-pointer border-b border-primaryColor  py-4 md:w-max md:border-none md:!p-0">
          <Link
            to="about-us"
            smooth={true}
            className={"navLink"}
            spy={true}
            hashSpy={true}
            saveHashHistory={true}
            delay={200}
            offset={-80}
            duration={1000}
            onClick={closeSidebar}
          >
            About us
          </Link>
        </li>
        <li className="w-full cursor-pointer border-b border-primaryColor py-4 md:w-max md:border-none md:!p-0">
          <Link
            to="services"
            smooth={true}
            className={"navLink"}
            spy={true}
            hashSpy={true}
            saveHashHistory={true}
            delay={200}
            offset={-80}
            duration={1000}
            onClick={closeSidebar}
          >
            Services
          </Link>
        </li>
        <li className="w-full cursor-pointer border-b border-primaryColor  py-4 md:w-max md:border-none md:!p-0">
          <Link
            to="contact"
            smooth={"easeOutQuad"}
            className={"navLink"}
            spy={true}
            hashSpy={true}
            saveHashHistory={true}
            delay={200}
            offset={-80}
            duration={1000}
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
