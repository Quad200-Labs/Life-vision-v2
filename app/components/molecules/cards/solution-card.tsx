import { Card, CardContent } from "@/components/ui/card";
import { SolutionCardItem } from "@/interfaces";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const SolutionCard: FC<{ data: SolutionCardItem }> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Card className="overflow-hidden rounded-xl p-0 shadow-none border-none">
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-80 object-cover rounded-xl"
      />
      <CardContent className="p-0 pb-2">
        <h3 className="text-base font-semibold mb-2">{data.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{data.description}</p>
        <p
          className="mt-3 text-sm font-semibold text-red-600 cursor-pointer hover:underline"
          onClick={() => navigate(`/solutions/${data.id}`)}
        >
          Read more
        </p>
      </CardContent>
    </Card>
  );
};
