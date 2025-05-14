import { SolutionCard } from "@/components/molecules/cards/solution-card";
import { SOLUTION_CARDS } from "@/constants";

export const SolutionSection = () => {
  return (
    <section className="py-12 px-4 max-w-[95%] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {SOLUTION_CARDS.map((card, index) => (
          <SolutionCard key={index} data={card} />
        ))}
      </div>
    </section>
  );
};