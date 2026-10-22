import { ArrowRight } from 'lucide-react';
import { Button } from '@/frontend/components/button/Button';
import { ScrollToSection } from '@/frontend/config/navigation';
import { profile } from '@/frontend/config/profile';
import { useMagnetic } from '@/frontend/hooks/use-magnetic';
import HeroName from './components/HeroName';
import HeroPortrait from './components/HeroPortrait';
import HeroStats from './components/HeroStats';
import RotatingWords from './components/RotatingWords';
import { currentCompany, heroLead, rotatingWords } from './lib/hero-content';

export default function Hero() {
  const workRef = useMagnetic<HTMLButtonElement>();
  const cvRef = useMagnetic<HTMLAnchorElement>();

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 sm:pt-32">
      {/* aurora blobs + fading grid */}
      <div className="absolute -left-[120px] -top-[140px] h-[520px] w-[520px] animate-drift rounded-full bg-cyan-700 opacity-50 blur-[90px]" />
      <div className="absolute -right-[160px] top-[10%] h-[460px] w-[460px] animate-drift rounded-full bg-indigo-700 opacity-40 blur-[90px] [animation-delay:-6s]" />
      <div className="absolute -bottom-[180px] left-[35%] h-[380px] w-[380px] animate-drift rounded-full bg-violet-600 opacity-25 blur-[90px] [animation-delay:-12s]" />
      <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_30%,transparent_75%)]" />

      <div className="container-narrow relative z-[2] grid items-center gap-20 lg:grid-cols-[1.25fr_0.9fr] lg:gap-12">
        <div className="md:text-center lg:text-left">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/[0.08] py-2 pl-3 pr-4 text-[13px] text-ink-100">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </span>

          <p className="mt-7 whitespace-nowrap font-mono text-[12.5px] text-ink-400 sm:text-[15px]">
            <span className="text-accent-400">const</span> developer = &quot;{profile.name}&quot;
            <span className="ml-1 inline-block h-[1.1em] w-[9px] translate-y-[3px] animate-blink bg-accent-400" />
          </p>

          <HeroName first="Karthik" last="Karunakaran" />

          <p className="mt-5 flex flex-wrap items-baseline gap-x-[0.3em] font-display text-[clamp(22px,3vw,36px)] font-semibold leading-[1.2] tracking-[-0.02em] text-ink-100 md:justify-center lg:justify-start">
            I build <RotatingWords words={rotatingWords} />
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg md:mx-auto lg:mx-0">
            {heroLead} Currently at{' '}
            <strong className="font-semibold text-ink-100">{currentCompany.name}</strong>,{' '}
            {currentCompany.city}.
          </p>

          <div className="mt-9 flex gap-3 md:justify-center lg:justify-start">
            <Button ref={workRef} onClick={() => ScrollToSection('projects')} className="flex-1 sm:flex-none">
              View my work
              <ArrowRight size={16} />
            </Button>
            <Button variant="outline" asChild className="flex-1 sm:flex-none">
              <a ref={cvRef} href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </div>

          <HeroStats />
        </div>

        <HeroPortrait />
      </div>

      {/* scroll cue */}
      <button
        onClick={() => ScrollToSection('about')}
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 z-[2] hidden h-[42px] w-[26px] -translate-x-1/2 rounded-full border-[1.5px] border-ink-700 md:block"
      >
        <span className="absolute left-1/2 top-2 -ml-0.5 h-2 w-1 animate-wheel rounded bg-accent-400" />
      </button>
    </section>
  );
}
