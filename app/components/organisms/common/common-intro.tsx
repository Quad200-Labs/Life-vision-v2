import { Button } from "@/components/ui/button";
import { SectionProps } from "@/interfaces";
import React from "react";

const CommonIntroSection: React.FC<SectionProps> = ({
  title,
  highlightWord,
  description,
  imageSrc,
  imageAlt,
  stats,
  actionButton,
  className = "",
  subTitle,
}) => {
  const titleParts = highlightWord ? title.split(highlightWord) : [title];
  const descriptionArray = Array.isArray(description)
    ? description
    : [description];

  return (
    <div
      className={`w-full flex items-center bg-[#8B0000] text-white   ${className}`}
    >
      <div className="w-full h-full justify-center flex flex-col lg:flex-row items-center gap-12 sm:px-16 p-5">
        <div className="flex-1 space-y-4 ">
          <h2 className="text-4xl font-bold">
            {titleParts[0]}
            {highlightWord && (
              <span className="text-[#ED3237]">{highlightWord}</span>
            )}
            {titleParts[1]}
          </h2>

          {subTitle && <h3 className="text-xl font-semibold">{subTitle}</h3>}

          <div className="space-y-4">
            {descriptionArray.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed font-light">
                {paragraph}
              </p>
            ))}
          </div>

          {stats && (
            <div className="flex flex-wrap sm:gap-11 gap-5 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-[#A00509] py-1 px-4 rounded-lg"
                >
                  <div className=" text-left text-3xl font-bold text-[#ED3237]">
                    {stat.value}
                  </div>
                  <div className="text-sm mt-1 text-left">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {actionButton && (
            <Button
              onClick={actionButton.onClick}
              className="mt-6 px-6 py-3 bg-red-500 rounded-full text-white  hover:bg-red-600 transition-colors"
            >
              {actionButton.text}
            </Button>
          )}
        </div>

        <div className="flex-1">
          <div className="rounded-2xl overflow-hidden lg:py-16 pb-5">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full  object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonIntroSection;
