import Image from "next/image";

const HomeBanner: React.FC = () => {
  return (
    <div className="relative">
      <div className="relative w-full h-[450px] md:h-[750px] mt-4 lg:mt-8">
        <Image
          src="/landing.jpg"
          alt="Landing Image"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-3xl bg-orange-300 opacity-100"
          quality={100}
        />

        <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>

        {/* Text and Button on top of the image */}
        <div className="absolute top-0 left-0 p-4 px-4 pt-8 pb-40 md:px-8 md:pb-60 lg:px-16 lg:pt-16 lg:pb-80 text-white font-ortica">
          <h1 className="text-4xl lg:text-6xl font-bold">Your Clear Skin</h1>
          <h1 className="text-4xl lg:text-6xl mt-4 lg:mt-8 font-bold">
            Starts Here
          </h1>
          <p className="mt-4 lg:mt-8 sm:text-base md:text-lg">
            Start your skin care journey today.
          </p>
          <button className="mt-4 lg:mt-8 px-4 py-2 md:px-6 md:py-4 bg-white text-primary font-medium shadow-md rounded-full transition-all duration-300 hover:bg-primary hover:text-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
