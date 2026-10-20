import type { LucideIcon } from 'lucide-react';

export type SkillGroupType = {
  name: string;
  icon: LucideIcon;
  items: string[];
};

export type TSkillsType = {
  SkillGroup: SkillGroupType;
};
