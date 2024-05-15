"use client";
import frame from "@/assets/Frame 1136abcf.png";
import Image from "next/image";

const Content = () => {
  return (
    <div className="my-8 py-5">
      <div className="lg:flex items-center  justify-center gap-16 max-w-7xl mx-auto">
        <div className="rounded-lg relative  z-10">
          <div className=" bg-[#FFFFFF] rounded-lg p-6">
            <h4 className="text-[#12141D] font-semibold">Results</h4>
            <p className="text-[#818488] text-[14px]">
              Here&apos;s what our AI came up with.
            </p>
            <div className="text-[#12141D] space-y-4 p-4 text-[14px]">
              <p>
                Pain: You are an e-commerce business, and you want to sell your
                products all over the country, but you are confused about how to
                handle sales tax.{" "}
              </p>
              <p>
                Agitate: You have no idea how much sales tax to charge your
                customers in each state.{" "}
              </p>

              <p>
                {" "}
                Solution: Use TaxSol, our full stack sales tax solution, to
                manage your sales tax for you!
              </p>
              <div className="space-y-4">
                <p>
                  Pain: e-commerce business owners are struggling to keep up
                  with the ever changing sales tax laws.
                </p>
                <p>
                  Agitate: Sales tax is a complicated, confusing and expensive
                  nightmare for e-commerce business owners.
                </p>
              </div>
            </div>
          </div>

          <Image
            className="hidden  lg:block absolute lg:left-[250px]  left-[100px] top-[320px] lg:top-[100px] p-4 rounded-lg z-50"
            src={frame}
            alt="frame"
          />
        </div>
        <div className="space-y-6 p-6">
          <h2 className="text-[#FFFFFF] text-2xl lg:text-4xl font-semibold">
            Create content efficiently <br /> and quickly with great AI <br /> writing
            tools
          </h2>
          <p className="text-[#FAFAFA] opacity-70">
            150k+ users. No Credit Card Required. Pro designs and writing at no
            cost. Start for free. Ai Writer Tool | Generate text for ecom,
            social media, website, sales, blogs etc.
          </p>
          <button className="px-4 py-4  rounded-md focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
            Start 14 Days Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
