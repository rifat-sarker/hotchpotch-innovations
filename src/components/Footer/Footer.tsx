const Footer = () => {
  return (
    <div className="pt-12">
      <div className="max-w-7xl mx-auto py-6 px-8 my-12 rounded-xl gap-6  lg:flex items-center justify-between  bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">
        <p className="text-xl lg:text-3xl font-semibold">
          It will help you improve your writing <br /> & bring ideas more c
          learly.
        </p>
        <button className="px-5 py-4 text-[#12141D] focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] hover:text-white focus:text-white bg-white rounded">
          Start 14 Days Free Trial
        </button>
      </div>
      <div className="py-8 grid grid-cols-1  justify-items-center md:grid-cols-2 lg:grid-cols-4 mx-auto gap-4  ">
        <div className="w-[125px] p-2">
          <ul className="space-y-5">
            <li className="font-semibold">Company</li>
            <div className="space-y-2 text-sm">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career </li>
            </div>
          </ul>
        </div>
        <div className="w-[125px] p-2">
          <ul className="space-y-5">
            <li className="font-semibold">Help</li>
            <div className="space-y-2 text-sm">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy </li>
            </div>
          </ul>
        </div>
        <div className="w-[125px] p-2">
          <ul className="space-y-5">
            <li className="font-semibold">Resources</li>
            <div className="space-y-2 text-sm">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist </li>
            </div>
          </ul>
        </div>
        <div className="w-[125px] p-2">
          <ul className="space-y-5">
            <li className="font-semibold">Links</li>
            <div className="space-y-2 text-sm">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
