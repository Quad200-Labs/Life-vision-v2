import { FC } from "react";
import { TeamMember } from "@/interfaces";

export const TeamCard: FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="relative group rounded-2xl hover:rounded-t-2xl overflow-hidden bg-white">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-160 md:h-132 lg:h-120 object-cover"
      />
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-center p-4">
        <p className="text-sm">{member.description}</p>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-semibold text-base">{member.name}</h3>
        <p className="text-sm text-neutral-500">{member.title}</p>
      </div>
    </div>
  );
};
