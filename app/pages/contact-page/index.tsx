import { ContactIntroImg } from "@/assets";
import ContactInfo from "@/components/molecules/cards/contact-info";
import GoogleMap from "@/components/molecules/cards/map-card";
import CommonHeroSection from "@/components/organisms/common/common-hero";
import CommonIntroSection from "@/components/organisms/common/common-intro";
import { COMPLAINT_CARD, CONTACT_CARDS } from "@/constants";
import { useTranslation } from "react-i18next";

const ContactUsScreen = () => {
  const { t } = useTranslation();
  const descriptionArray = t("contact.description", {
    returnObjects: true,
  }) as string[];
  return (
    <>
      <CommonHeroSection
        title={t("contact.heroTitle")}
        description={t("contact.heroDescription")}
      />
      <CommonIntroSection
        title={t("contact.introTitle")}
        highlightWord={t("contact.highlightWord")}
        description={descriptionArray}
        imageSrc={ContactIntroImg}
        imageAlt={t("contact.imageAlt")}
      />
      <ContactInfo data={CONTACT_CARDS} />
      <ContactInfo data={COMPLAINT_CARD} />
      <GoogleMap/>
    </>
  );
};

export default ContactUsScreen;
