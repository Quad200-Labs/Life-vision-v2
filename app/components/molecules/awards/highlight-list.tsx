import { FC } from "react";
import { Check } from "lucide-react";
import { HighlightListProps } from "@/interfaces";

export const HighlightList: FC<HighlightListProps> = ({ highlights }) => {
  return (
    <ul className="flex flex-col gap-6">
      {highlights.map((item, index) => (
        <li key={index} className="flex items-start gap-4">
          <div className="p-1.5 rounded-full bg-[#ED3237]/10 flex items-center justify-center w-8 h-8 ">
            <Check className="text-red-500 mt-1" size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-lg md:text-2xl">
              {item.year} <span className="font-bold">({item.title})</span>
            </h4>
            <p className="text-base md:text-lg text-[#596374]">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
