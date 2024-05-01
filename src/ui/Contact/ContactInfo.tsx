const ContactInfo = () => {
  return (
    <div className="mb-auto flex w-full flex-col items-start justify-between gap-8 md:flex-row md:gap-16 ml:gap-10">
      <div className="flex flex-col items-start justify-between space-y-1 text-left">
        <h3 className="text-xl font-semibold md:mb-3">Get In Touch</h3>
        <p>kojofashion@kojofashion.com</p>
        <p>+23490556666643</p>
        <p className="-space-y-1">
          <span className="block">No 1 delta avenue</span>
          <span className="block">Otta farm road</span>
          <span className="block">Ogun Sate</span>
        </p>
      </div>
      <div className="flex flex-col gap-y-4 ">
        <div className="mr-auto flex flex-col  items-start justify-between space-y-1 text-left md:space-y-3">
          <h3 className="text-xl font-semibold">Visit us</h3>
          <p>
            We are located on the corner of Sunflower and Bristol. Second level.
          </p>
        </div>
        <div className="md:space-y-6text-left flex flex-col items-start justify-between  space-y-1 md:space-y-2">
          <h3 className="text-xl font-semibold">Store Hours</h3>
          <p>
            <span className="block">M-F: 10am – 7pm</span>
            <span className="block">Sat: 10am – 6pm</span>
            <span className="block"> Sun: closed</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
