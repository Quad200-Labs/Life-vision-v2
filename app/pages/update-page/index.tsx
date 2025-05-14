import { UpdatesIntroImg } from "@/assets";
import CommonHeroSection from "@/components/organisms/common/common-hero";
import CommonIntroSection from "@/components/organisms/common/common-intro";
import { UpdatesSection } from "@/components/organisms/sections/updates-section";
import { useTranslation } from "react-i18next";

const UpdatesScreen = () => {
  const { t } = useTranslation();
  const descriptionArray = t("updates.description", {
    returnObjects: true,
  }) as string[];
  return (
    <div className="space-y-12">
      <CommonHeroSection
        title={t("updates.heroTitle")}
        description={t("updates.heroDescription")}
      />
      <CommonIntroSection
        title={t("updates.introTitle")}
        highlightWord={t("updates.highlightWord")}
        description={descriptionArray}
        imageSrc={UpdatesIntroImg}
        imageAlt={t("updates.imageAlt")}
      />
      <UpdatesSection />
    </div>
  );
};

export default UpdatesScreen;
