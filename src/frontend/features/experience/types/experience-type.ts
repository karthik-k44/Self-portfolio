export type ExperienceType = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
  stack: string[];
};

export type TExperienceType = {
  Experience: ExperienceType;
};
