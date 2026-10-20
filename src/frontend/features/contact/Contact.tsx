import { Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/frontend/components/button/Button';
import { profile } from '@/frontend/config/profile';
import ContactForm from './components/ContactForm';
import EmailPill from './components/EmailPill';

const links = [
  { icon: Github, label: 'GitHub', href: profile.github },
  { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
  { icon: Download, label: 'Download CV', href: profile.resumeUrl },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden text-center">
      <div className="absolute left-[10%] top-[18%] h-[460px] w-[460px] animate-drift rounded-full bg-indigo-700 opacity-30 blur-[90px]" />
      <div className="absolute right-[5%] top-[40%] h-[420px] w-[420px] animate-drift rounded-full bg-cyan-700 opacity-30 blur-[90px] [animation-delay:-8s]" />

      <div className="container-narrow relative z-[2]">
        <span className="eyebrow reveal">
          <span className="h-px w-7 bg-accent-400/60" />
          Contact
        </span>
        <h2
          className="reveal mt-6 font-display text-[clamp(48px,10vw,136px)] font-extrabold leading-[0.92] tracking-[-0.05em] text-ink-50"
          style={{ ['--reveal-delay' as string]: '80ms' }}
        >
          Let&apos;s build
          <br />
          <span className="aurora-text">something great.</span>
        </h2>

        <div className="reveal" style={{ ['--reveal-delay' as string]: '180ms' }}>
          <EmailPill />
        </div>

        <div
          className="reveal mt-7 flex flex-wrap justify-center gap-3"
          style={{ ['--reveal-delay' as string]: '240ms' }}
        >
          {links.map((link) => (
            <Button key={link.label} variant="outline" size="sm" asChild className="text-ink-300">
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon size={15} />
                {link.label}
              </a>
            </Button>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-2xl text-left">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
