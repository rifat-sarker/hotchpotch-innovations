"use client";
import { FaRegCirclePlay } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="">
      <div className="py-12">
        <div className="flex flex-col justify-center items-center  mx-auto text-center space-y-6">
          <h2 className="text-3xl lg:text-6xl text-[#FAFAFA] text-center font-semibold">
            Write better <br /> content for your <br />{" "}
            <span className="text-gradient2">Facebook Ads</span>
            <div className="relative mt-3">
              <div
                className="border-b-2 border-transparent absolute bottom-0 left-0 right-0"
                style={{ height: "2px" }}
              ></div>
              <div
                className="border-b-2 border-transparent absolute bottom-0 left-0 right-0"
                style={{ height: "4px" }}
              ></div>
              <div
                className="absolute bottom-0 left-0 right-0 h-2"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FFC947, #FC6739)",
                }}
              ></div>
            </div>
          </h2>

          <p className="text-[#FAFAFA] opacity-70 text-center my-4">
            Artificial intelligence writting tool helps you create blogs, <br />{" "}
            social media websites and much more.
          </p>
          <div className="space-y-4 font-semibold mx-auto text-[#FFFFFF]">
            <button className="px-4 py-4 mx-auto  rounded-md focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] w-56  ">
              Start 14 Days Free Trial
            </button>
            <button className="px-6 py-3 flex hover:border border-t-[#2B59FF] border-r-[#BB2BFF]   gap-4 mx-auto items-center  rounded-md w-56">
              <FaRegCirclePlay />
              <span className="hover:text-gradient "> Watch A Demo</span>
            </button>
          </div>
        </div>
      </div>
      <hr className="opacity-5" />
    </div>
  );
};

export default Header;
