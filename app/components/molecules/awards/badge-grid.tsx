import { BadgeGridProps } from "@/interfaces";
import { FC } from "react";



export const BadgeGrid: FC<BadgeGridProps> = ({ badges }) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-center items-center">
      {badges.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Award Badge ${index + 1}`}
          className="w-24 h-24 object-contain mx-auto"
        />
      ))}
    </div>
  );
};
