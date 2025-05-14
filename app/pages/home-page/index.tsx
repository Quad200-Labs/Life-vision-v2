import { HomeHeroImg } from "@/assets";
import { InfoCard } from "@/components/molecules/cards/info-card";
import Features from "@/components/molecules/cards/strat-card";
import Testimonials from "@/components/molecules/cards/testimonial-card";
import { HomeHero } from "@/components/organisms";
import {
  FEATURES_DATA,
  HOME_SERVICE_CARDS,
  TESTIMONIAL_CARDS,
} from "@/constants";

const HomeScreen = () => {
  return (
    <div className=" w-full h-full">
      <HomeHero
        title="Empowering Communities Through Ethical Finance"
        highlightWord="Finance"
        subtitle="Flexible loans, smart savings, and financial education for all."
        imageSrc={HomeHeroImg}
        imageAlt="Happy couple reviewing financial documents"
        trustText="Trusted by 10,000+ Clients"
        onGetStarted={() => console.log("Get Started clicked")}
        onLearnMore={() => console.log("Learn More clicked")}
      />
      <Features data={FEATURES_DATA} />
      <InfoCard data={HOME_SERVICE_CARDS} />
      <Testimonials data={TESTIMONIAL_CARDS} />
    </div>
  );
};

export default HomeScreen;
