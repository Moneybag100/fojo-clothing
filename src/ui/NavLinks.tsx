import { NavLink } from "react-router-dom";

interface NavLinksProp {
  className?: string;
}

const NavLinks = ({ className }: NavLinksProp) => {
  return (
    <nav
      className={`bg-slate-500 mx-auto w-full font-medium uppercase ${className ? className : ""}`}
    >
      <ul className="md:base flex flex-col items-start text-lg text-textColor md:flex-row md:items-center md:text-lightOffWhite">
        <li className="w-full border-b border-primaryColor py-4 md:mr-12 md:w-max md:border-none md:!p-0">
          <NavLink to={"#"} className={"navLink"}>
            Outfits
          </NavLink>
        </li>
        <li className="w-full border-b border-primaryColor py-4 md:mr-auto md:w-max md:border-none md:!p-0">
          <NavLink to={"#"} className={"navLink"}>
            About us
          </NavLink>
        </li>
        <li className="w-full border-b border-primaryColor py-4 md:w-max md:border-none md:!p-0">
          <NavLink to={"#"} className={"navLink"}>
            Services
          </NavLink>
        </li>
        <li className="w-full border-b border-primaryColor py-4 md:ml-12 md:w-max md:border-none md:!p-0">
          <NavLink to={"#"} className={"navLink"}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
