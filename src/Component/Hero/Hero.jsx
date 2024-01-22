const Hero = () => {
  return (
    <main className="hero container my-0 mx-auto max-w-7xl flex items-center h-[calc(100dvh-72px)]">
      <div className="hero-content w-2/4 flex flex-col gap-8">
        <h1 className=" font-extrabold leading-[105px] text-[108px]">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className=" font-medium max-w-md text-[#2e2e2e]">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn flex gap-10">
          <button className="px-4 py-1 h-8 text-white bg-[#d01c28] font-medium text-base">
            Shop Now{" "}
          </button>
          <button className="secondary-btn px-4 py-1 h-8 bg-transparent text-[#2e2e2e] border-[1px] border-solid border-black">
            Category
          </button>
        </div>

        <div className="shopping">
          <p className=" text-[14px] mb-2">Also Available On</p>

          <div className="brand-icons flex gap-4">
            <img src="/assets/amazon.png" alt="amazon-logo" />
            <img src="/assets/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image w-2/4">
        <img src="/assets/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
};
export default Hero;
