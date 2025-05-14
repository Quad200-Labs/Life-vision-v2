import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UpdateCardItem } from "@/interfaces";

export const UpdateCard: FC<{ data: UpdateCardItem }> = ({ data }) => {
  return (
    <Card className="overflow-hidden rounded-xl p-0 shadow-none border-none">
      <div className="relative">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-68 object-cover"
        />

        <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">
          {data.tag}
        </div>

        {/* Title + Date (Bottom Overlay) */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white rounded-b-xl">
          <h3 className="text-base font-semibold">{data.title}</h3>
          <p className="text-xs mt-1">{data.date}</p>
        </div>
      </div>

      {/* Description + CTA */}
      <CardContent className="px-4 pt-4 pb-6">
        <p className="text-sm text-gray-700 line-clamp-4">{data.description}</p>
        <p className="mt-3 text-sm font-semibold text-red-600 cursor-pointer hover:underline">
          Read more
        </p>
      </CardContent>
    </Card>
  );
};
