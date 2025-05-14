"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { MultiCardProps } from "../../../interfaces";
import { MoveRight } from "lucide-react";

export const InfoCard: FC<MultiCardProps> = ({ data }) => {
  return (
    <section className="flex flex-col gap-10 px-4">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            item.alignSide === "right" ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-10 p-6 bg-white rounded-2xl max-w-[95%] mx-auto`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full md:w-1/2 h-80 object-cover rounded-xl"
          />
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex flex-col items-start gap-3">
              {item.icon && (
                <img
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  className="w-[40px] h-[40px]"
                />
              )}
              <h2 className="text-4xl font-bold text-neutral-900">
                {item.title}
              </h2>
            </div>
            <p className="text-neutral-600 whitespace-pre-line text-base">
              {item.description}
            </p>
            {item.showButton && (
              <Button
                onClick={item.onButtonClick}
                className="w-fit mt-2 text-[#ED3237] bg-white border-0 shadow-none hover:bg-white !p-0 font-semibold text-lg hover:cursor-pointer"
              >
                {item.buttonText}
                <MoveRight className="m-auto w-fit h-full" />
              </Button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
