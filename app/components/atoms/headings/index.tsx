import { FC } from "react";
import { cn } from "@/lib/utils";
import { HeadingProps } from "@/interfaces";

export const Heading: FC<HeadingProps> = ({ title, highlight, className }) => {
  return (
    <h2 className={cn("text-2xl md:text-4xl font-bold", className)}>
      {title} {highlight && <span className="text-red-500">{highlight}</span>}
    </h2>
  );
};
