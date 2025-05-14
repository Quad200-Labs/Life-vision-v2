import { FC, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { AccordionCardProps } from "@/interfaces";

export const AccordionCard: FC<AccordionCardProps> = ({
  data,
  image,
  title,
  subtitle,
  highlight,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 px-4 max-w-[95%] mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          {title} <span className="text-red-500">{highlight}</span>
        </h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <img src={image} alt={title} className="w-full lg:w-1/2 rounded-xl" />
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {data.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border rounded-xl py-3 bg-white shadow-none border-[#F4F4F4]"
              >
                <div
                  className={`flex items-center justify-between cursor-pointer ${
                    isOpen ? "border-b border-[#F4F4F4]" : ""
                  } px-4 pb-4`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <p className="font-semibold text-sm">{item.question}</p>
                  <hr className="bg-[F4F4F4]" />
                  {isOpen ? (
                    <Minus className="bg-[#ED3237] w-8 h-8 text-white rounded-full p-1.5" />
                  ) : (
                    <Plus className="bg-[#ED3237] w-8 h-8 text-white rounded-full p-1.5" />
                  )}
                </div>
                {isOpen && (
                  <p className="text-sm text-gray-600 mt-2 px-4">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
