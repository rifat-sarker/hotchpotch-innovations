import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import avatar from "@/assets/Ellipse 14.png";
import avatar2 from "@/assets/Ellipse 14 (1).png";
import avatar3 from "@/assets/Ellipse 14 (2).png";
import avatar4 from "@/assets/Ellipse 14 (3).png";
import avatar5 from "@/assets/Ellipse 14 (4).png";
import avatar6 from "@/assets/Ellipse 14 (5).png";
import avatar7 from "@/assets/Ellipse 14 (6).png";
import avatar8 from "@/assets/Ellipse 14 (7).png";
const Feedback = () => {
  return (
    <div>
      <div className="mt-12 my-14 p-4">
        <h3 className="text-3xl lg:text-4xl text-center font-semibold my-4">
          What our customers say
        </h3>
        <p className="text-[#FAFAFA] opacity-70 my-4 text-center">
          Read why thousands of marketers, writers, and <br /> entrepreneurs
          love us so much.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center  mt-14 max-w-7xl mx-auto">
          <div className="bg-[#FFFFFF] text-[#12141D] rounded p-4 w-[290px] h-[260px] ">
            <div className="flex justify-between gap-4">
              <div className="flex gap-2 ">
                <Image src={avatar} alt="man_photo" />
                <div>
                  <h4 className="font-semibold">Darrell Steward</h4>
                  <p className="opacity-70">@darrels</p>
                </div>
              </div>
              <FaTwitter className="text-[#0EA5E9]" />
            </div>
            <p className="my-4">
              {" "}
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save. <br />{" "}
              <span className="text-[#0EA5E9]">#another</span>
            </p>
          </div>
          <div className="bg-[#FFFFFF] text-[#12141D] rounded p-4 w-[290px] h-[230px]">
            <div className="flex justify-between gap-4">
              <div className="flex gap-2 ">
                <Image src={avatar2} alt="man_photo" />
                <div>
                  <h4 className="font-semibold">Leslie Alexander</h4>
                  <p className="opacity-70">@lesslie</p>
                </div>
              </div>
              <FaTwitter className="text-[#0EA5E9]" />
            </div>
            <p className="my-4">
              {" "}
              Simply the best. Better than all the rest. I’d recommend this
              product to beginners and advanced users. #postcrafts <br />{" "}
              <span className="text-[#0EA5E9]">#postcrafts</span>
            </p>
          </div>
          <div className="bg-[#FFFFFF] text-[#12141D] rounded p-4 w-[290px] h-[190px]">
            <div className="flex justify-between gap-4">
              <div className="flex gap-2 ">
                <Image src={avatar3} alt="man_photo" />
                <div>
                  <h4 className="font-semibold">Jenny Wilson</h4>
                  <p className="opacity-70">@jennywilson</p>
                </div>
              </div>
              <FaTwitter className="text-[#0EA5E9]" />
            </div>
            <p className="my-4">
              {" "}
              This is a top quality product. No need to think twice before
              making it live on web.
              <br /> <span className="text-[#0EA5E9]">#make_it_fast</span>
            </p>
          </div>
          <div className="bg-[#FFFFFF] text-[#12141D] rounded p-4 w-[290px] h-[230px]">
            <div className="flex justify-between gap-4">
              <div className="flex gap-2 ">
                <Image src={avatar4} alt="man_photo" />
                <div>
                  <h4 className="font-semibold">Kristin Watson</h4>
                  <p className="opacity-70">@kristinwatson2</p>
                </div>
              </div>
              <FaTwitter className="text-[#0EA5E9]" />
            </div>
            <p className="my-4">
              {" "}
              Finally, I’ve found a template that covers all bases for a
              bootstrapped startup. We were able to launch in days, not months.{" "}
              <br /> <span className="text-[#0EA5E9]">#postcrafts</span>
            </p>
          </div>
          <div className="bg-[#FFFFFF] text-[#12141D] rounded p-4 w-[290px] h-[200px]">
            <div className="flex justify-between gap-4">
              <div className="flex gap-2 ">
                <Image src={avatar5} alt="man_photo" />
                <div>
                  <h4 className="font-semibold">Guy Hawkins</h4>
                  <p className="opacity-70">@jennywilson</p>
                </div>
              </div>
              <FaTwitter className="text-[#0EA5E9]" />
            </div>
            <p className="my-4">
              {" "}
              This is a top quality product. No need to think twice before
              making it live on web.
              <br /> <span className="text-[#0EA5E9]">#make_it_fast</span>
            </p>
          </div>
          <div className="bg-[#FFFFFF] text-[#12141D] rounded p-4 w-[290px] h-[260px]">
            <div className="flex justify-between gap-4">
              <div className="flex gap-2 ">
                <Image src={avatar6} alt="man_photo" />
                <div>
                  <h4 className="font-semibold">Marvin McKinney</h4>
                  <p className="opacity-70">@jennywilson</p>
                </div>
              </div>
              <FaTwitter className="text-[#0EA5E9]" />
            </div>
            <p className="my-4">
              {" "}
              With Postcrafts, it’s quicker with the customer, the customer is
              more ensured of getting exactly what they ordered, and I’m all for
              the efficiency.
              <br /> <span className="text-[#0EA5E9]">#dev #tools</span>
            </p>
          </div>
          <div className="bg-[#FFFFFF] text-[#12141D]  rounded p-4 w-[290px] h-[260px]">
            <div className="flex justify-between gap-4">
              <div className="flex gap-2 ">
                <Image src={avatar7} alt="man_photo" />
                <div>
                  <h4 className="font-semibold">Annette Black</h4>
                  <p className="opacity-70">@jennywilson</p>
                </div>
              </div>
              <FaTwitter className="text-[#0EA5E9]" />
            </div>
            <p className="my-4">
              {" "}
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.
              <br /> <span className="text-[#0EA5E9]">#another</span>
            </p>
          </div>
          <div className="bg-[#FFFFFF] text-[#12141D] rounded p-4 w-[290px] h-[230px]">
            <div className="flex justify-between gap-4">
              <div className="flex gap-2 ">
                <Image src={avatar8} alt="man_photo" />
                <div>
                  <h4 className="font-semibold">Floyd Miles</h4>
                  <p className="opacity-70">@jennywilson</p>
                </div>
              </div>
              <FaTwitter className="text-[#0EA5E9]" />
            </div>
            <p className="my-4">
              {" "}
              My new site is so much faster and easier to work with than my old
              site. I just choose the page, make the change and click save.
              <br /> <span className="text-[#0EA5E9]">#postcrafts</span>
            </p>
          </div>
        </div>
      </div>
      <hr className="opacity-5" />
    </div>
  );
};

export default Feedback;
