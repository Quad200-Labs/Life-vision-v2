import { UpdateCard } from "@/components/molecules/cards/update-card";
import { UPDATE_CARDS } from "@/constants";

export const UpdatesSection = () => {
  return (
    <section className="py-12 px-4 max-w-[95%] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {UPDATE_CARDS.map((card) => (
          <UpdateCard key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
};
