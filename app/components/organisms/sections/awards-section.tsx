import { Heading } from "@/components/atoms/headings";
import { BadgeGrid } from "@/components/molecules/awards/badge-grid";
import { HighlightList } from "@/components/molecules/awards/highlight-list";
import { AWARD_BADGES, AWARD_HIGHLIGHTS } from "@/constants";

export const AwardsSection = () => {
  return (
    <section className="px-4 max-w-[95%] mx-auto">
      <Heading
        title="Our Qualifications and"
        highlight="Expertise"
        className="text-center text-3xl font-bold mb-10"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <BadgeGrid badges={AWARD_BADGES} />
        <HighlightList highlights={AWARD_HIGHLIGHTS} />
      </div>
    </section>
  );
};
