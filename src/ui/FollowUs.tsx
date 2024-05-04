import SocialLink from "./SocialLink";

const FollowUs = () => {
  return (
    <div className="flex w-max flex-row items-center gap-4 bg-lightOffWhite p-3 ">
      <p className="text-sm uppercase text-textColor"> Follow Us</p>
      <SocialLink rotate={true} />
    </div>
  );
};

export default FollowUs;
