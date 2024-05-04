import NavLinks from "./NavLinks";

interface SidebarProp {
  showSidebar: boolean;
  closeSidebar: () => void;
}

const Sidebar = ({ showSidebar, closeSidebar }: SidebarProp) => {
  return (
    <div
      className={`bg-bg ${showSidebar ? "translate-x-0" : "translate-x-[-120%]"} absolute -left-4 w-full p-4 transition-all duration-500 ease-out lg:hidden`}
      style={{ top: "calc(100% + 15px)", height: "calc(100vh - 78px)" }}
    >
      <NavLinks closeSidebar={closeSidebar} />
    </div>
  );
};

export default Sidebar;
