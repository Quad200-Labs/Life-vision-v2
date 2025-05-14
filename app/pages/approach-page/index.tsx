import { ApproachIntroImg, ApproachPageOne, ApproachPageTwo } from "@/assets";
import { AccordionCard } from "@/components/molecules/cards/accordion-card";
import CommonHeroSection from "@/components/organisms/common/common-hero";
import CommonIntroSection from "@/components/organisms/common/common-intro";
import { CUSTOMER_APPROACH_DATA, EMPLOYEE_APPROACH_DATA } from "@/constants";
import { useTranslation } from "react-i18next";

const ApproachScreen = () => {
  const { t } = useTranslation();
  const descriptionArray = t("approach.description", {
    returnObjects: true,
  }) as string[];
  return (
    <div className="space-y-12">
      <CommonHeroSection
        title={t("approach.heroTitle")}
        description={t("approach.heroDescription")}
      />
      <CommonIntroSection
        title={t("approach.introTitle")}
        highlightWord={t("approach.highlightWord")}
        description={descriptionArray}
        imageSrc={ApproachIntroImg}
        imageAlt={t("approach.imageAlt")}
        stats={[
          { value: "10+", label: t("homeDetailCards.strategy.title") },
          { value: "24/7", label: t("homeDetailCards.expertise.title") },
          { value: "500+", label: t("homeDetailCards.outreach.title") },
        ]}
      />
      <AccordionCard
        data={CUSTOMER_APPROACH_DATA}
        image={ApproachPageOne}
        title="How We Serve Our"
        highlight="Customers"
        subtitle="Life Vision Credit & Investment was founded with a vision to provide fair and transparent financial services to underserved communities in Sri Lanka."
      />
      <AccordionCard
        data={EMPLOYEE_APPROACH_DATA}
        image={ApproachPageTwo}
        title="How We Treat Our"
        highlight="Employees"
        subtitle="Life Vision Credit & Investment was founded with a vision to provide fair and transparent financial services to underserved communities in Sri Lanka."
      />
    </div>
  );
};

export default ApproachScreen;
