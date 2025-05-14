import React from "react";
import { Target, Settings, Network, LayoutGrid } from "lucide-react";
import { Feature, FeaturesProps } from "@/app/interfaces";


const FeatureIcon: React.FC<{ type: Feature["icon"] }> = ({ type }) => {
  const iconClass = "w-12 h-12 text-white";

  switch (type) {
    case "strategy":
      return <Target className={iconClass} />;
    case "expertise":
      return <Settings className={iconClass} />;
    case "outreach":
      return <Network className={iconClass} />;
    case "programs":
      return <LayoutGrid className={iconClass} />;
    default:
      return null;
  }
};

const Features: React.FC<FeaturesProps> = ({ data }) => {
  const { title, highlightWord, features } = data;
  const titleParts = title.split(highlightWord);

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          {titleParts[0]}
          <span className="text-red-500">{highlightWord}</span>
          {titleParts[1]}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border-2 shadow-md border-[#F4F4F4] transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6">
                  <FeatureIcon type={feature.icon} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
