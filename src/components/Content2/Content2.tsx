"use client";
import dark from "@/assets/1.png";
import light from "@/assets/2.png";
import light2 from "@/assets/3.png";
import bg from "@/assets/BG.png";
import Image from "next/image";

const Content2 = () => {
  return (
    <div className="">
      <div className="lg:flex justify-between items-center mx-auto gap-6 max-w-7xl">
        <div className="space-y-6 p-6">
          <h2 className="text-[#FFFFFF]  text-2xl lg:text-4xl font-semibold">
            Write what you want to <br /> convey through clear, & <br />{" "}
            authentic writing
          </h2>
          <p className="text-[#FAFAFA] opacity-70">
            AI-Writer is the most accurate content generation <br /> platform
            and writing tool that helps you transform <br />
            your text into a completely personalized.
          </p>
          <button className="px-4 py-4  rounded-md focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
            Start 14 Days Free Trial
          </button>
        </div>

        <div className="bg-[#FFFFFF] rounded-lg">
          <div className="flex">
            <div className="text-[#12141D] text-[14px] p-4 opacity-40">
              <ul className="space-y-2">
                <li>Blog Outline</li>
                <li>Blog Intro</li>
                <li>Blog Conclusion</li>
                <li>AIDA</li>
                <li>PAS</li>
                <li>Content Rewriter</li>
              </ul>
              <p className="border-b-4 h-[6px] bg-[#E4E8EF] rounded-lg my-3 "></p>
              <p className="border-b-4 h-[6px] bg-[#E4E8EF] rounded-lg my-3 "></p>
              <p className="border-b-4 h-[6px] bg-[#E4E8EF] rounded-lg my-3 "></p>
              <p className="border-b-4 h-[6px] bg-[#E4E8EF] rounded-lg my-3 "></p>
              <p className="border-b-4 h-[6px] bg-[#E4E8EF] rounded-lg my-3 "></p>
              <p className="border-b-4 h-[6px] bg-[#E4E8EF] rounded-lg my-3 "></p>
              <p className="border-b-4 h-[6px] bg-[#E4E8EF] rounded-lg my-3 "></p>
              <p className="border-b-4 h-[6px] bg-[#E4E8EF] rounded-lg my-3 "></p>
              <p className="border-b-4 h-[6px] bg-[#E4E8EF] rounded-lg my-3 "></p>
            </div>
            <div className="p-4">
              <h5 className="text-[#12141D] font-semibold ">Results</h5>
              <p className="text-[#818488] text-[14px] ">
                Here&apos;s what our AI came up with.
              </p>
              <Image className="my-4" src={dark} alt="dark data" />
              <Image className="my-4" src={light} alt="light data" />
              <Image className="my-4" src={light2} alt="light2 data" />
              <Image className="my-4" src={bg} alt="light2 data" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
