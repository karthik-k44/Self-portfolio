export type ProjectType = {
  title: string;
  description: string;
  github: string;
  demo: string;
  tags: string[];
  /** Tailwind gradient stops for the hover glow */
  accent: string;
  /** false while the demo is down — the card shows an offline panel instead of a live glimpse */
  live: boolean;
  /** colour scheme the site is captured in — for sites that follow `prefers-color-scheme` */
  glimpseTheme?: GlimpseThemeType;
};

export type GlimpseThemeType = 'light' | 'dark';

export type GlimpseStatusType = 'loading' | 'ready' | 'failed';

export type TProjectsType = {
  Project: ProjectType;
  GlimpseTheme: GlimpseThemeType;
  GlimpseStatus: GlimpseStatusType;
};
