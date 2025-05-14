import { Heading } from "@/components/atoms/headings";
import { TeamCard } from "@/components/molecules/cards/team-card";
import { TEAM_MEMBERS } from "@/constants";

export const TeamSection = () => {
  return (
    <section className="px-4 max-w-[95%] mx-auto">
      <Heading
        title="Meet Our"
        highlight="Team"
        className="text-center text-3xl font-bold mb-10"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM_MEMBERS.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
};
