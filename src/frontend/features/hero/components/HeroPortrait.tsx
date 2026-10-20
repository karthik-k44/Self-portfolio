import profileImage from '@/frontend/assets/karthik-image.png';
import { cn } from '@/frontend/lib/utils';
import { portraitChips } from '../lib/hero-content';

/** Round photo in an aurora ring, a dashed orbit with a glowing satellite, and floating tech chips. */
export default function HeroPortrait() {
  return (
    <div
      className="reveal relative mx-auto aspect-square w-[min(400px,74%)] lg:w-full lg:max-w-[420px]"
      style={{ ['--reveal-delay' as string]: '200ms' }}
    >
      {/* orbit */}
      <div className="absolute -inset-[9%] animate-spin-slow rounded-full border border-dashed border-ink-500/30 [animation-duration:40s]">
        <span className="absolute left-[14%] top-[10%] h-2.5 w-2.5 rounded-full bg-accent-400 shadow-[0_0_18px_4px_rgba(34,205,242,0.7)]" />
      </div>

      {/* photo */}
      <div className="absolute inset-0 animate-float rounded-full bg-aurora p-[3px] shadow-[0_40px_100px_-30px_rgba(99,102,241,0.55)] [animation-duration:7s]">
        <img
          src={profileImage}
          alt="Karthik Karunakaran"
          className="h-full w-full rounded-full bg-ink-900 object-cover object-[center_20%]"
        />
      </div>

      {/* chips */}
      {portraitChips.map((chip) => (
        <div
          key={chip.title}
          className={cn(
            'absolute z-[3] flex animate-float items-center gap-2.5 whitespace-nowrap rounded-2xl border border-ink-500/20 bg-ink-900/80 px-3 py-2 text-xs shadow-[0_20px_40px_-18px_rgba(0,0,0,0.9)] backdrop-blur-md sm:px-3.5 sm:py-2.5 sm:text-[13px]',
            chip.position
          )}
          style={{ animationDelay: chip.delay }}
        >
          <span
            className={cn(
              'grid h-7 w-7 place-items-center rounded-[9px] font-mono text-xs sm:h-[30px] sm:w-[30px]',
              chip.tone
            )}
          >
            {chip.glyph}
          </span>
          <span>
            <span className="block text-ink-100">{chip.title}</span>
            <span className="block text-[11px] leading-tight text-ink-400">{chip.note}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
