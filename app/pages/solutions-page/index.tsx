import { SolutionsIntroImg } from "@/assets";
import CommonHeroSection from "@/components/organisms/common/common-hero";
import CommonIntroSection from "@/components/organisms/common/common-intro";
import { SolutionSection } from "@/components/organisms/sections/solution-section";
import { useTranslation } from "react-i18next";

const SolutionsScreen = () => {
  const { t } = useTranslation();
  const descriptionArray = t("solutions.description", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="space-y-12">
      <CommonHeroSection
        title={t("solutions.heroTitle")}
        description={t("solutions.heroDescription")}
      />
      <CommonIntroSection
        title={t("solutions.introTitle")}
        highlightWord={t("solutions.highlightWord")}
        description={descriptionArray}
        imageSrc={SolutionsIntroImg}
        imageAlt={t("solutions.imageAlt")}
      />
      <SolutionSection />
    </div>
  );
};

export default SolutionsScreen;
