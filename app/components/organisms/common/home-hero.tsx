import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroProps } from "@/interfaces";

const HomeHero: React.FC<HeroProps> = ({
  title,
  highlightWord,
  subtitle,
  imageSrc,
  imageAlt,
  trustText,
  onGetStarted,
  onLearnMore,
}) => {
  const titleParts = title.split(highlightWord);

  return (
    <div className="w-full h-screen flex items-center sm:justify-between">
      <div className="flex items-center sm:justify-center w-full lg:flex-row flex-col">
        <div className="space-y-8 lg:w-1/2 sm:px-10 px-5 py-10">
          <h1 className="sm:text-5xl text-2xl font-bold leading-tight text-center lg:text-left">
            {titleParts[0]}
            <span className="text-red-500">{highlightWord}</span>
            {titleParts[1]}
          </h1>

          <p className="text-xl text-gray-600 text-center lg:text-left">
            {subtitle}
          </p>

          <div className="flex flex-wrap sm:gap-8 gap-4 lg:justify-start justify-center">
            <Button
              onClick={onGetStarted}
              className="px-8 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors"
            >
              Get Started
            </Button>

            <Button
              onClick={onLearnMore}
              className="px-5 py-3 text-gray-700 bg-white rounded-full hover:text-red-500 font-semibold flex items-center gap-2 group"
            >
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex items-center gap-2 text-gray-700 lg:justify-start justify-center">
            <CheckCircle className="w-5 h-5 text-red-500" />
            <span>{trustText}</span>
          </div>
        </div>

        <div className="p-20">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="xl:min-w-[680px] w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
