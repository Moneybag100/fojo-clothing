import NavLinks from "./NavLinks";
import SocialLink from "./SocialLink";

interface SidebarProp {
  showSidebar: boolean;
  closeSidebar: () => void;
}

const Sidebar = ({ showSidebar, closeSidebar }: SidebarProp) => {
  return (
    <div
      className={`bg-bg ${showSidebar ? "translate-x-0" : "translate-x-[-120%]"} absolute -left-4 flex w-full flex-col items-start justify-between p-4 transition-all duration-500 ease-out lg:hidden`}
      style={{ top: "calc(100% + 15px)", height: "calc(100vh - 78px)" }}
    >
      <NavLinks closeSidebar={closeSidebar} />
      <div className="mb-4 flex w-full space-x-8 text-lg uppercase">
        <p>Follow Us</p> <SocialLink />
      </div>
    </div>
  );
};

export default Sidebar;
