import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-[600px] w-full">
      <Image
        src="/hero.png"
        alt="Hero Background"
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white bg-black bg-opacity-50">
        <span className="bg-gray-800 text-sm px-2 py-1 rounded-full uppercase">
          Adventure
        </span>
        <h1 className="mt-4 font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-2xl">
          Richird Norton photorealistic rendering as real photos
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
          Progressively incentivize cooperative systems through technically
          sound functionalities.
        </p>
        <p className="mt-1 text-xs sm:text-sm opacity-75">08.08.2021</p>
      </div>
    </div>
  );
};

export default Hero;
