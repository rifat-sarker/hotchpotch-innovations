const Packages = () => {
  return (
    <div className="mt-12 ">
      <h2 className="font-semibold text-3xl lg:text-4xl text-center my-4">
        Make the wise decision <br /> for your business
      </h2>
      <p className="text-[#FAFAFA] opacity-70 text-center my-4">
        Choose from our affordable 3 packages
      </p>

      <div className="flex flex-wrap justify-center gap-4 justify-items-center mt-12 max-w-6xl mx-auto">
        <div className="bg-[#282A37] flex flex-col justify-between p-6 rounded-2xl h-[540px] w-[330px]">
          <p className="">Starter Plan</p>
          <p>
            <span className="text-4xl font-semibold">$29</span> /month
          </p>
          <p className="text-[#FAFAFA] opacity-70 text-[14px] my-4">
            This package is suitable for teams 1-15 people.
          </p>
          <p className="mt-6 mb-4">What’s included:</p>
          <ul className="space-y-2 text-[#FAFAFA]">
            <li className="opacity-70"> 10 GB Dedicated Hosting Free</li>
            <li className="opacity-70">Best for Developers, Freelancers</li>
            <li className="opacity-70">1 Year Support </li>
          </ul>

          <div className="">
            <button className="px-6 py-4 border focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] hover:border-none focus:border-none border-[#12141D] rounded-xl w-full font-bold my-4">
              Get Started
            </button>
          </div>
        </div>
        <div className="bg-[#282A37] flex flex-col justify-between p-6 rounded-2xl h-[540px] w-[330px]">
          <p className="mb-4">Basic Plan</p>
          <p>
            <span className="text-4xl font-semibold">$79</span> /month
          </p>
          <p className="text-[#FAFAFA] opacity-70 text-[14px] my-4">
            This package is suitable for teams 1-50 people.
          </p>

          <p className="mt-6 mb-4">What’s included:</p>
          <ul className="space-y-2 text-[#FAFAFA]">
            <li className="opacity-70"> 15 GB Dedicated Hosting Free</li>
            <li className="opacity-70">Best for Developers, Freelancers</li>
            <li className="opacity-70">5 Year Support </li>
            <li className="opacity-70">Free Custom Domain</li>
            <li className="opacity-70">Basic Statistics</li>
          </ul>

          <div className="">
            <button className="px-6 py-4 focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] border-[#12141D] rounded-xl w-full font-bold mt-12 my-4">
              Get Started
            </button>
          </div>
        </div>
        <div className="bg-[#282A37] flex flex-col justify-between p-6 rounded-2xl h-[540px] w-[330px]">
          <p className="mb-4">Premium Plan</p>
          <p>
            <span className="text-4xl font-semibold">$129</span> /month
          </p>
          <p className="text-[#FAFAFA] opacity-70 text-[14px] my-4">
            This package is suitable for teams 1-100 people.
          </p>

          <p className="mt-6 mb-4">What’s included:</p>
          <ul className="space-y-2 text-[#FAFAFA]">
            <li className="opacity-70">20 GB Dedicated Hosting Free</li>
            <li className="opacity-70">Best for Developers, Freelancers</li>
            <li className="opacity-70">Unlimited Support</li>
            <li className="opacity-70">Free Custom Domain</li>
            <li className="opacity-70">Full Statistics</li>
          </ul>
          <div className="">
            <button className="px-6 py-4 focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] hover:border-none focus:border-none border border-[#12141D] rounded-xl w-full font-bold mt-12 my-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
