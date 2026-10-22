export type ProjectType = {
  title: string;
  /** short category line under the title, e.g. "Health · Firebase" */
  kind: string;
  description: string;
  github: string;
  demo: string;
  tags: string[];
  /** Tailwind gradient stops for the glow behind the preview */
  glow: string;
  /** featured projects get the large alternating showcase rows; the rest are compact cards */
  featured: boolean;
  /** false while the demo is down — the preview shows an offline panel instead of a live glimpse */
  live: boolean;
  /** still under active development — marked with a "Currently building" badge */
  inProgress?: boolean;
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
