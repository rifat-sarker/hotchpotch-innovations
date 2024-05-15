import Image from "next/image";
import image318 from "@/assets/image 318.png";
import image319 from "@/assets/image 319.png";
import image320 from "@/assets/image 320.png";
import image321 from "@/assets/image 321.png";

const BlogTools = () => {
  return (
    <div>
      <div className="mt-16 p-4">
        <h3 className="font-semibold text-4xl text-center text-[#FFFFFF] ">
          54 exciting writing tools
        </h3>
        <p className="text-[#FAFAFA] text-center opacity-70">
          AI engines take information from various sources and read <br /> them
          like a human would do.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 mt-12 max-w-7xl mx-auto">
          <div className="flex gap-4 p-6 w-[290px] h-[140px] bg-[#282A37] rounded-lg">
            <Image className="size-8" src={image318} alt="writing" />
            <div>
              <h4 className="font-semibold">Blog Headlines</h4>
              <p className="py-3 text-[12px] opacity-70">
                Write a better blog title with our A.I tool.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-6 w-[290px] h-[140px] bg-[#282A37] rounded-lg">
            <Image className="size-8" src={image319} alt="writing" />
            <div>
              <h4 className="font-semibold">Blog Intros</h4>
              <p className="py-3 text-[12px] opacity-70">
                Generate a paragraph of blog content using Blog Intros tool
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-6 w-[290px] h-[140px] bg-[#282A37] rounded-lg">
            <Image className="size-8" src={image320} alt="writing" />
            <div>
              <h4 className="font-semibold">Blog Outline</h4>
              <p className="py-3 text-[12px] opacity-70">
                Need an attention-grabbing headline for your article?
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-6 w-[290px] h-[140px] bg-[#282A37] rounded-lg">
            <Image className="size-8" src={image318} alt="writing" />
            <div>
              <h4 className="font-semibold">Blog Conclusions</h4>
              <p className="py-3 text-[12px] opacity-70">
                Write a better conclusions with AI writing tool.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-6 w-[290px] h-[140px] bg-[#282A37] rounded-lg">
            <Image className="size-8" src={image321} alt="writing" />
            <div>
              <h4 className="font-semibold">Content Rewriter</h4>
              <p className="py-3 text-[12px] opacity-70">
                Get AI writer to rewrite your sentence in a different way.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-6 w-[290px] h-[140px] bg-[#282A37] rounded-lg">
            <Image className="size-8" src={image319} alt="writing" />
            <div>
              <h4 className="font-semibold">Product Description</h4>
              <p className="py-3 text-[12px] opacity-70">
                Need an attention-grabbing headline for your article?
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-6 w-[290px] h-[140px] bg-[#282A37] rounded-lg">
            <Image className="size-8" src={image320} alt="writing" />
            <div>
              <h4 className="font-semibold">PAS Copywriting Formula</h4>
              <p className="py-3 text-[12px] opacity-70">
                Get AI writer to rewrite your sentence in a different way.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-6 w-[290px] h-[140px] bg-[#282A37] rounded-lg">
            <Image className="size-8" src={image318} alt="writing" />
            <div>
              <h4 className="font-semibold">Company About Us</h4>
              <p className="py-3 text-[12px] opacity-70">
                Write a better blog title with our AI tool.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="px-6 py-4 mb-8 mt-12 font-semibold hover:text-gradient   hover:border border-t-[#2B59FF] border-r-[#BB2BFF] rounded-lg">
            See all 54 available tools
          </button>
        </div>
      </div>
      <hr className="opacity-5" />
    </div>
  );
};

export default BlogTools;
