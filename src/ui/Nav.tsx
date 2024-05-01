import { useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import { Logo } from "../utils/Image";
import NavLinks from "./NavLinks";
import Sidebar from "./Sidebar";

const Nav = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSidebar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div className="globalPadding fixed left-0 top-0 z-[999] flex w-full ">
      <div className="bg-purple-600 relative m-auto mt-6 flex w-full max-w-[650px] items-center md:mt-20">
        <div className=" absolute left-0 top-1/2 h-16  w-16 -translate-y-1/2 transform rounded-md md:left-1/2 md:h-[7.5rem] md:w-[7.5rem] md:-translate-x-1/2">
          <img src={Logo.src} alt={Logo.altText} className="h-full w-full" />
        </div>
        <NavLinks className="hidden md:block" />
        <div className="ml-auto block rounded-md bg-primaryColor md:hidden">
          <Hamburger
            size={20}
            distance="sm"
            onToggle={toggleSidebar}
            color="#ffffff"
          />
        </div>
        <Sidebar showSidebar={showSideBar} />
      </div>
    </div>
  );
};

export default Nav;
