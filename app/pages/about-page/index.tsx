import { AboutIntroImg } from "@/assets";
import { InfoCard } from "@/components/molecules/cards/info-card";
import CommonHeroSection from "@/components/organisms/common/common-hero";
import CommonIntroSection from "@/components/organisms/common/common-intro";
import { AwardsSection } from "@/components/organisms/sections/awards-section";
import { TeamSection } from "@/components/organisms/sections/team-section";
import { MISSION_CARD } from "@/constants";
import { useTranslation } from "react-i18next";

const AboutUsScreen = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-12 mb-20">
      <CommonHeroSection
        title={t("routes.aboutUs")}
        description={t("homeHero.description")}
      />
      <CommonIntroSection
        title={t("aboutUs.introTitle", "Who We Are")}
        highlightWord={t("aboutUs.highlightWord", "Are")}
        description={t(
          "aboutUs.description",
          "At Life Vision Credit & Investment, we are driven by a single vision..."
        )}
        imageSrc={AboutIntroImg}
        imageAlt={t("aboutUs.imageAlt", "Professional team members")}
        stats={[
          {
            value: "2+",
            label: t("aboutUs.stats.experience", "Years Of Experience"),
          },
          {
            value: "4.5/5",
            label: t("aboutUs.stats.rating", "Customer Rating"),
          },
          {
            value: "1000+",
            label: t("aboutUs.stats.clients", "Trusted Clients"),
          },
        ]}
      />
      <InfoCard data={MISSION_CARD} />
      <AwardsSection />
      <TeamSection />
    </div>
  );
};

export default AboutUsScreen;
