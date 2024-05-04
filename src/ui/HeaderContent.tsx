import logo from "./../assets/logo/fojoCircleWhite.png";

const HeaderContent = () => {
  return (
    <div className="absolute left-0 top-0 z-[998] flex h-full w-full text-lightOffWhite">
      <div className="m-auto w-28 text-center font-medium md:w-32 lg:w-40">
        {/* <div>
          <p className="md:2xl text-xl">Look your best.</p>
        </div>
        <h1>
          <span className="block text-5xl font-bold m:text-6xl md:text-7xl">
            Fojo Clothing
          </span>
          <span className="block italic text-lightGrayText m:text-lg">
            we give you the confidence you deserve.
          </span>
        </h1> */}
        <img src={logo} alt="logo image" className="h-auto w-full" />
      </div>
    </div>
  );
};

export default HeaderContent;
