import SocialLink from "./SocialLink";

const FollowUs = () => {
  return (
    // <div className=" relative mx-auto flex w-max flex-row items-center gap-2 p-3 md:!mr-0  md:ml-24 md:flex-col-reverse">
    //   <p className=" text-[.9rem] uppercase text-textColor md:mt-20 md:-translate-y-[130%] md:-rotate-90 md:transform">
    //     Follow Us
    //   </p>
    //   <SocialLink />
    // </div>
    <div className="flex w-max flex-row items-center gap-4 bg-lightOffWhite p-3 ">
      <p className="text-sm uppercase text-textColor"> Follow Us</p>
      <SocialLink rotate={true} />
    </div>
  );
};

export default FollowUs;
