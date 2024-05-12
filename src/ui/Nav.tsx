import { useEffect, useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";
import logo from "./../assets/logo/fojoWhiteLogo.png";
import logo2 from "./../assets/logo/fojoPlainPurpleLogo.png";
// import logoSvg3 from "./../assets/logo/fojoPlainPurpleLogo.svg";
import Sidebar from "./Sidebar";

const Nav = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 120;
      setIsScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const toggleSidebar = () => {
  //   setShowSideBar(!showSideBar);
  // };

  const closeSidebar = () => {
    setShowSideBar(false);
  };
  return (
    <div
      className={`globalPadding fixed left-0 top-0 z-[999] flex w-full transition-all duration-300 ease-linear  md:!py-3 ${isScrolled ? "bg-bg shadow-xl" : "bg-none"}`}
    >
      <div className="bg-purple-600 relative m-auto flex  w-full max-w-custom items-center">
        <div className="mr-auto h-14  w-14  rounded-md md:h-16 md:w-16">
          <img
            src={isScrolled ? logo2 : logo}
            alt={"logo"}
            className="h-full w-full"
          />
        </div>
        <div className="flex w-full max-w-[500px]">
          <NavLinks
            className={`my-auto ml-auto hidden !text-sm md:block md:!text-lg ${isScrolled ? "md:!text-textColor" : ""}`}
          />
        </div>

        <div
          className={`ml-auto block rounded-md md:hidden ${isScrolled ? "text-textColor" : "text-lightOffWhite"}`}
        >
          <Hamburger
            size={20}
            distance="sm"
            toggle={setShowSideBar}
            toggled={showSideBar}
          />
        </div>
        <Sidebar showSidebar={showSideBar} closeSidebar={closeSidebar} />
      </div>
    </div>
  );
};

export default Nav;
