"use client";

import ContactInfo from "@/app/components/molecules/cards/contact-info";
import GoogleMap from "@/app/components/molecules/cards/map-card";
import CommonHeroSection from "@/app/components/organisms/common/common-hero";
import CommonIntroSection from "@/app/components/organisms/common/common-intro";
import { COMPLAINT_CARD, CONTACT_CARDS } from "@/app/constants";
// import { ContactIntroImg } from "";
// @/components/molecules/cards/contact-info

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
        imageSrc={""}
        imageAlt={t("contact.imageAlt")}
      />
      <ContactInfo data={CONTACT_CARDS} />
      <ContactInfo data={COMPLAINT_CARD} />
      <GoogleMap/>
    </>
  );
};

export default ContactUsScreen;
