/* eslint-disable react-hooks/rules-of-hooks */
import {
  Badge1,
  Badge2,
  Badge3,
  Badge4,
  Badge5,
  Badge6,
  Badge7,
  Badge8,
  Badge9,
  BlogContentOne,
  BlogContentThree,
  BlogContentTwo,
  HomeAutoLoanIcon,
  HomeAutoLoanImage,
  HomeGoldLoanIcon,
  HomeGoldLoanImage,
  HomeSavingsPlanIcon,
  HomeSavingsPlanImage,
  OurMission,
  OurMissionIcon,
  Ourteam,
  OurVission,
  OurVissionIcon,
  SolutionCardImageFive,
  SolutionCardImageFour,
  SolutionCardImageOne,
  SolutionCardImageSix,
  SolutionCardImageThree,
  SolutionCardImageTwo,
  UpdateCardImageFive,
  UpdateCardImageFour,
  UpdateCardImageOne,
  UpdateCardImageSix,
  UpdateCardImageThree,
  UpdateCardImageTwo,
} from "@/public/assets";
import { useTranslation } from "react-i18next";
import { ApproachItem, AwardHighlight, BlogPostItem, FeaturesData, InfoCardItem, SolutionCardItem, TeamMember, UpdateCardItem } from "../interfaces";

export const getRoutePaths = () => {
  const { t } = useTranslation();

  return {
    HOME: {
      path: "/home-screen",
      name: t("routes.home"),
    },
    ABOUT_US: {
      path: "/about-us",
      name: t("routes.aboutUs"),
    },
    SOLUTIONS: {
      path: "/solutions",
      name: t("routes.solutions"),
    },
    APPROACH: {
      path: "/approaches",
      name: t("routes.approach"),
    },
    BLOG: {
      path: "/blogs",
      name: t("routes.blog"),
    },
    UPDATES: {
      path: "/updates",
      name: t("routes.updates"),
    },
    CONTACT: {
      path: "/contact-us",
      name: t("routes.contact"),
    },
  };
};

export const LANGUAGES_LIST = [
  { code: "en", name: "English" },
  { code: "sa", name: "සිංහල" },
  { code: "ta", name: "தமிழ்" },
];

export const useProgramsData = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("homePrograms.savings.title"),
      description: t("homePrograms.savings.description"),
      buttonText: t("homePrograms.buttonText"),
    },
    {
      title: t("homePrograms.training.title"),
      description: t("homePrograms.training.description"),
      buttonText: t("homePrograms.buttonText"),
    },
    {
      title: t("homePrograms.community.title"),
      description: t("homePrograms.community.description"),
      buttonText: t("homePrograms.buttonText"),
    },
  ];
};

export const useHomeDetailCards = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("homeDetailCards.strategy.title"),
      description: t("homeDetailCards.strategy.description"),
    },
    {
      title: t("homeDetailCards.expertise.title"),
      description: t("homeDetailCards.expertise.description"),
    },
    {
      title: t("homeDetailCards.outreach.title"),
      description: t("homeDetailCards.outreach.description"),
    },
    {
      title: t("homeDetailCards.programs.title"),
      description: t("homeDetailCards.programs.description"),
    },
  ];
};

export const MISSION_CARD: InfoCardItem[] = [
  {
    title: "Our Mission",
    description:
      "Our mission is to foster financial inclusion and growth by offering sustainable, transparent, and accessible financial services. We believe that everyone, regardless of background, should have the opportunity to build a secure financial future",
    image: OurMission,
    alignSide: "left",
    icon: OurMissionIcon,
  },
  {
    title: "Our Vision",
    description:
      "To be the leading provider of financial empowerment in Sri Lanka, offering innovative solutions that help our clients achieve their financial goals and contribute to the economic development of their communities.",
    image: OurVission,
    alignSide: "right",
    icon: OurVissionIcon,
  },
];

export const HOME_SERVICE_CARDS: InfoCardItem[] = [
  {
    title: "Auto Loans",
    description:
      "FLi instills saving habits, ensures transparent loan terms, offers comprehensive training and support, and cultivates community empowerment for impactful, grassroots economic growth and development.\n\nOur approach involves not just providing financial aid, but also equipping clients with the tools and knowledge necessary for long-term success.",
    image: HomeAutoLoanImage,
    icon: HomeAutoLoanIcon,
    showButton: true,
    buttonText: "Learn More",
    alignSide: "left",
    onButtonClick: () => {
      window.location.href = "/approaches"; // update route if needed
    },
  },
  {
    title: "Gold Loans",
    description:
      "FLi instills saving habits, ensures transparent loan terms, offers comprehensive training and support, and cultivates community empowerment for impactful, grassroots economic growth and development.\n\nOur approach involves not just providing financial aid, but also equipping clients with the tools and knowledge necessary for long-term success.",
    image: HomeGoldLoanImage,
    icon: HomeGoldLoanIcon,
    showButton: true,
    buttonText: "Learn More",
    alignSide: "right",
    onButtonClick: () => {
      window.location.href = "/approaches";
    },
  },
  {
    title: "Savings Plan",
    description:
      "FLi instills saving habits, ensures transparent loan terms, offers comprehensive training and support, and cultivates community empowerment for impactful, grassroots economic growth and development.\n\nOur approach involves not just providing financial aid, but also equipping clients with the tools and knowledge necessary for long-term success.",
    image: HomeSavingsPlanImage,
    icon: HomeSavingsPlanIcon,
    showButton: true,
    buttonText: "Learn More",
    alignSide: "left",
    onButtonClick: () => {
      window.location.href = "/approaches";
    },
  },
];

export const AWARD_BADGES = [
  Badge1,
  Badge2,
  Badge3,
  Badge4,
  Badge5,
  Badge6,
  Badge7,
  Badge8,
  Badge9,
];

export const AWARD_HIGHLIGHTS: AwardHighlight[] = [
  {
    year: "2000",
    title: "Founding of Life Vision Credit & Investment",
    description:
      "Life Vision Credit & Investment was founded with a vision to provide fair and transparent financial services to underserved communities in Sri Lanka.",
  },
  {
    year: "2005",
    title: "Expansion to Rural Areas",
    description:
      "We extended our services to rural Sri Lanka, enabling access to financial support in underserved regions.",
  },
  {
    year: "2010",
    title: "Reached 10,000+ Clients",
    description:
      "Achieved a major milestone with over 10,000 satisfied clients benefiting from our financial products.",
  },
  {
    year: "2010",
    title: "Reached 10,000+ Clients",
    description:
      "Achieved a major milestone with over 10,000 satisfied clients benefiting from our financial products.",
  },
];

export const TEAM_MEMBERS: TeamMember[] = Array.from({ length: 8 }).map(() => ({
  name: "John Doe",
  title: "Chief Executive Officer (CEO)",
  description:
    "John brings over 20 years of experience in the financial sector, specializing in microfinance and community empowerment. His vision for Life Vision Credit & Investment is to expand financial inclusion and create accessible opportunities for every Sri Lankan.",
  image: Ourteam,
}));

export const UPDATE_CARDS: UpdateCardItem[] = [
  {
    id: 1,
    image: UpdateCardImageOne,
    tag: "LEADER PROGRAMME",
    date: "APRIL 10, 2024",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    id: 2,
    image: UpdateCardImageTwo,
    tag: "LEADER PROGRAMME",
    date: "APRIL 10, 2024",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    id: 3,
    image: UpdateCardImageThree,
    tag: "EVENTS",
    date: "APRIL 10, 2024",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    id: 4,
    image: UpdateCardImageFour,
    tag: "NEWS",
    date: "APRIL 10, 2024",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    id: 5,
    image: UpdateCardImageFive,
    tag: "EVENTS",
    date: "APRIL 10, 2024",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    id: 6,
    image: UpdateCardImageSix,
    tag: "LEADER PROGRAMME",
    date: "APRIL 10, 2024",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
];

export const SOLUTION_CARDS: SolutionCardItem[] = [
  {
    id: "womens-empowerment-micro-loan",
    title: "Women‘s Empowerment Micro Loan",
    date: "APRIL 10, 2024",
    description:
      "Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.",
    image: SolutionCardImageOne,
  },
  {
    id: "personal-entrepreneurial-loan",
    title: "Personal Entrepreneurial Loan",
    date: "APRIL 10, 2024",
    description:
      "Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.",
    image: SolutionCardImageTwo,
  },
  {
    id: "business-progression-capital-loan",
    title: "Business Progression Capital Loan",
    date: "APRIL 10, 2024",
    description:
      "Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.",
    image: SolutionCardImageThree,
  },
  {
    id: "vehicle-backed-micro-lease",
    title: "Vehicle-Backed Micro Lease",
    date: "APRIL 10, 2024",
    description:
      "Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.",
    image: SolutionCardImageFour,
  },
  {
    id: "registered-vehicle-loans",
    title: "Registered Vehicle Loans",
    date: "APRIL 10, 2024",
    description:
      "Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.",
    image: SolutionCardImageFive,
  },
  {
    id: "home-appliances-loan",
    title: "Home Appliances Loan",
    date: "APRIL 10, 2024",
    description:
      "Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.Empowering Sri Lankan women entrepreneurs with accessible micro loans for business initiation and expansion, fostering financial inclusion and community upliftment.",
    image: SolutionCardImageSix,
  },
];

export const TESTIMONIAL_CARDS = {
  title: "What Our Customer Say",
  highlightWord: "Say",
  testimonials: [
    {
      name: "Jenny Wilson",
      role: "Marketing Coordinator",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali",
    },
    {
      name: "Darrell Steward",
      role: "Software Developer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali",
    },
    {
      name: "Annette Black",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali",
    },
  ],
};

export const FEATURES_DATA: FeaturesData = {
  title: "Why Choose Us?",
  highlightWord: "Us",
  features: [
    {
      icon: "strategy",
      title: "Strategy",
      description:
        "Guiding you through every financial decision with a clear, comprehensive approach.",
    },
    {
      icon: "expertise",
      title: "Expertise",
      description:
        "Years of experience and financial knowledge at your service, offering tailored solutions for all your needs",
    },
    {
      icon: "outreach",
      title: "Outreach",
      description:
        "Reaching communities across the nation to create opportunities for growth and financial success",
    },
    {
      icon: "programs",
      title: "Programs",
      description:
        "Offering impactful programs designed to help individuals and businesses thrive",
    },
  ],
};
export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: "blog-1",
    image: BlogContentOne,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
    author: "Life Vision Blog Team",
    date: "Apr 09, 2025",
    readTime: "5min read",
  },
  {
    id: "blog-2",
    image: BlogContentTwo,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
    author: "Life Vision Blog Team",
    date: "Apr 09, 2025",
    readTime: "5min read",
  },
  {
    id: "blog-3",
    image: BlogContentThree,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
    author: "Life Vision Blog Team",
    date: "Apr 09, 2025",
    readTime: "5min read",
  },
];

export const CUSTOMER_APPROACH_DATA: ApproachItem[] = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
];

export const EMPLOYEE_APPROACH_DATA: ApproachItem[] = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
];

export const CONTACT_CARDS = {
  type: "reach-out",
  title: "Reach Out To Us",
  highlightWord: "Us",
  description:
    "Life Vision Credit & Investment was founded with a vision to provide fair and transparent financial services to underserved communities in Sri Lanka.",
  imageSrc:
    "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  imageAlt: "Customer service representative",
  contactInfo: {
    address: "677 Timpany Blvd, Gardner MA 1440",
    phone: "+16446314502659",
    email: "lucia_buchanan@yahoo.com",
    hours: "Mon - Fri: 8:30AM - 6:00 PM",
  },
} as const;

export const COMPLAINT_CARD = {
  type: "complaint",
  title: "Customer Complaint",
  highlightWord: "Complaint",
  description:
    "We value your feedback as a crucial aspect of our continuous learning and improvement journey. If, at any point, our services fall short of your expectations, please share your concerns with us.",
  imageSrc:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  imageAlt: "Customer service team member",
  contactInfo: {
    complaintNo: "+16446314502659",
    ombudsman: "No.165, Kynsey Rd, Borella, Colombo 08, Sri Lanka.",
  },
} as const;
