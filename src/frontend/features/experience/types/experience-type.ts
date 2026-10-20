export type ExperienceType = {
  role: string;
  company: string;
  period: string;
  location?: string;
  /** shows the "Current role" tag */
  current?: boolean;
  description: string;
  achievements: string[];
  stack: string[];
};

export type TExperienceType = {
  Experience: ExperienceType;
};
