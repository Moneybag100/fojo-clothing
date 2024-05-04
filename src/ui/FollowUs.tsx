import SocialLink from "./SocialLink";

const FollowUs = () => {
  return (
    <div className=" relative mx-auto flex w-max flex-row items-center gap-2 p-3  md:flex-col-reverse">
      <p className=" text-[.9rem] uppercase text-textColor md:mt-16 md:-translate-y-[130%] md:-rotate-90 md:transform">
        Follow Us
      </p>
      <SocialLink />
    </div>
  );
};

export default FollowUs;
