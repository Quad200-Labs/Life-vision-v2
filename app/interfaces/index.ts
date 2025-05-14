import { LucideIcon } from "lucide-react";

export interface Stat {
  value: string;
  label: string;
}

export interface SectionProps {
  title: string;
  highlightWord?: string;
  description: string[] | string;
  imageSrc?: string;
  imageAlt: string;
  subTitle?: string;
  stats?: Stat[];
  actionButton?: {
    text: string;
    onClick: () => void;
  };
  className?: string;
}

export interface CommonHeroSectionProps {
  title: string;
  description: string;
}

export interface InfoCardItem {
  title: string;
  description: string;
  image: string;
  icon?: string;
  showButton?: boolean;
  buttonText?: string;
  alignSide?: "left" | "right";
  onButtonClick?: () => void;
}

export interface MultiCardProps {
  data: InfoCardItem[];
}

export interface HeroProps {
  title: string;
  highlightWord: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  trustText: string;
  onGetStarted: () => void;
  onLearnMore: () => void;
}
export interface AwardHighlight {
  year: string;
  title: string;
  description: string;
}

export interface BadgeGridProps {
  badges: string[];
}

export interface HighlightListProps {
  highlights: AwardHighlight[];
}

export interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

export interface HeadingProps {
  title: string;
  highlight?: string;
  className?: string;
}

export interface UpdateCardItem {
  id: number;
  image: string;
  tag: string;
  date: string;
  title: string;
  description: string;
}

export interface SolutionCardItem {
  id: string;
  title: string;
  date?: string;
  description: string;
  image: string;
}

export interface BlogPostItem {
  id: number | string;
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
}

export interface ApproachItem {
  question: string;
  answer: string;
}

export interface AccordionCardProps {
  data: ApproachItem[];
  image: string;
  title: string;
  subtitle: string;
  highlight: string;
}

export interface FeaturesData {
  title: string;
  highlightWord: string;
  features: Feature[];
}

export interface Feature {
  icon: "strategy" | "expertise" | "outreach" | "programs";
  title: string;
  description: string;
}

export interface FeaturesProps {
  data: FeaturesData;
}

export interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface ContactData {
  type: "reach-out" | "complaint";
  title: string;
  highlightWord: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  contactInfo: {
    address?: string;
    phone?: string;
    email?: string;
    hours?: string;
    complaintNo?: string;
    ombudsman?: string;
  };
}

export interface ContactProps {
  data: ContactData;
}
