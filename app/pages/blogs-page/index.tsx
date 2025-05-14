import { BlogIntroImg } from "@/assets";
import CommonHeroSection from "@/components/organisms/common/common-hero";
import CommonIntroSection from "@/components/organisms/common/common-intro";
import { BlogSection } from "@/components/organisms/sections/blog-section";
import { useTranslation } from "react-i18next";

const BlogsScreen = () => {
   const { t } = useTranslation();
   const descriptionArray = t("blogs.description", {
     returnObjects: true,
   }) as string[];
  return (
    <div className="space-y-12">
      <CommonHeroSection
        title={t("blogs.heroTitle")}
        description={t("blogs.heroDescription")}
      />
      <CommonIntroSection
        title={t("blogs.introTitle")}
        highlightWord={t("blogs.highlightWord")}
        description={descriptionArray}
        subTitle={t("blogs.subTitle")}
        imageSrc={BlogIntroImg}
        imageAlt={t("blogs.imageAlt")}
        actionButton={{
          text: t("blogs.buttonText") || "",
          onClick: () => {},
        }}
      />
      <BlogSection />
    </div>
  );
};

export default BlogsScreen;
