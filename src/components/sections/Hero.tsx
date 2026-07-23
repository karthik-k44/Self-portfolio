import { ArrowDown, Github, Linkedin, MapPin, Sparkles } from 'lucide-react';
import { profile } from '@/data/portfolio';
import profileImage from "../../assets/karthik-image.png";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* background layers */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent-700/10 blur-[120px]" />

      <div className="container-narrow relative z-10 w-full px-4 pt-20 pb-12 sm:px-6 md:px-10 md:pt-28 md:pb-16 lg:px-16">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          {/* left — copy */}
          <div className="text-center sm:text-left lg:col-span-7">
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-4 py-1.5 text-xs font-medium text-ink-200 backdrop-blur-sm animate-fade-in sm:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              Available for new opportunities
            </span>

            <h1 className="mx-auto mt-6 max-w-[14rem] font-display text-4xl font-bold leading-[0.95] tracking-tight text-ink-50 sm:mx-0 sm:max-w-none sm:text-5xl lg:text-7xl">
              <span className="block animate-fade-up opacity-0 [animation-delay:100ms]">
                Hi, I&apos;m{' '}
                <span className="text-gradient">{profile.firstName}</span>
              </span>
              <span
                className="mt-2 block animate-fade-up opacity-0 [animation-delay:240ms]"
                style={{ ['--reveal-delay' as string]: '140ms' }}
              >
                Full Stack Developer
              </span>
            </h1>

            <p
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-300 animate-fade-up opacity-0 sm:mx-0 sm:text-lg [animation-delay:380ms]"
            >
              {profile.tagline} I turn ideas into fast, reliable products from REST
              APIs to polished UI.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-up opacity-0 sm:justify-start [animation-delay:520ms]"
            >
              <button
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-400 hover:shadow-[0_0_36px_-8px_rgba(34,205,242,0.6)]"
              >
                <Sparkles size={16} />
                View my work
              </button>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-ink-700 bg-ink-900/60 px-6 py-3 text-sm font-semibold text-ink-100 backdrop-blur-sm transition-all hover:border-accent-500/50 hover:text-accent-200"
              >
                Download CV
              </a>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center justify-center gap-5 text-sm text-ink-400 animate-fade-up opacity-0 sm:justify-start [animation-delay:640ms]"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-accent-400" />
                {profile.location}
              </span>
              <span className="h-4 w-px bg-ink-700" />
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-ink-100"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-ink-100"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* right — decorative monogram card */}
          <div className="w-full lg:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-[28rem]">
              {/* rotating ring */}
              <div className="absolute inset-0 hidden animate-spin-slow rounded-full border border-dashed border-ink-700/70 sm:block" />
              <div className="absolute inset-6 hidden rounded-full border border-ink-800 sm:block" />

              {/* floating code chips */}
              <div className="absolute left-0 top-10 hidden animate-float rounded-xl border border-ink-700 bg-ink-900/80 px-4 py-2.5 text-xs font-medium text-ink-200 shadow-xl backdrop-blur-md sm:block [animation-delay:0.5s]">
                {'{ MERN }'}
              </div>
              <div className="absolute right-0 top-1/2 hidden animate-float rounded-xl border border-ink-700 bg-ink-900/80 px-4 py-2.5 text-xs font-medium text-accent-300 shadow-xl backdrop-blur-md sm:block [animation-delay:1.5s]">
                React · TS
              </div>
              <div className="absolute bottom-12 left-8 hidden animate-float rounded-xl border border-ink-700 bg-ink-900/80 px-4 py-2.5 text-xs font-medium text-ink-200 shadow-xl backdrop-blur-md sm:block [animation-delay:2.2s]">
                Node · Express
              </div>

              {/* monogram */}
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-ink-900 via-ink-900 to-ink-800 shadow-2xl ring-1 ring-ink-700/50 sm:inset-10">
                <img
                  src={profileImage}
                  alt="Karthik"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <button
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-ink-500 transition-colors hover:text-accent-400"
        aria-label="Scroll to about"
      >
        <span className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]">
          Scroll
          <ArrowDown size={16} className="animate-bounce" />
        </span>
      </button>
    </section>
  );
}
