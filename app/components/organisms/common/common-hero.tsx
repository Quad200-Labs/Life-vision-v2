// import { HeroBgLeft, HeroBgRight } from "@/assets";

import { CommonHeroSectionProps } from "@/app/interfaces";

const CommonHeroSection: React.FC<CommonHeroSectionProps> = ({
  title,
  description,
}) => {
  const words = title.trim().split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <div className="flex flex-col w-full min-h-[500px] max-h-[500px] justify-center text-center items-center gap-4">
      <img
        src={""}
        alt="Hero Image"
        className="sm:w-1/4 w-1/2 absolute left-0 sm:-translate-y-10 -translate-y-30"
      />
      <img
        src={""}
        alt="Hero Image"
        className="sm:w-1/4 w-1/2 absolute right-0 sm:-translate-y-10 translate-y-25"
      />
      <div className="lg:text-7xl md:text-6xl sm:text-5xl text-5xl font-bold z-40">
        {firstPart} <span className="text-[#ED3237]">{lastWord}</span>
      </div>
      <div className="font-semibold md:text-xl text-lg z-40">{description}</div>
    </div>
  );
};

export default CommonHeroSection;
