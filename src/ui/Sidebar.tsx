import NavLinks from "./NavLinks";

interface SidebarProp {
  showSidebar: boolean;
}

const Sidebar = ({ showSidebar }: SidebarProp) => {
  return (
    <div
      className={`bg-bg ${showSidebar ? "translate-x-0" : "translate-x-[-120%]"} absolute -left-4 w-full p-4 transition-all duration-500 ease-out lg:hidden`}
      style={{ top: "calc(100% + 16px)", height: "calc(100vh - 104px)" }}
    >
      <NavLinks />
    </div>
  );
};

export default Sidebar;
