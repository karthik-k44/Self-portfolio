import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/portfolio';

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
];

const socials = [
  { icon: Github, label: 'GitHub', href: profile.github },
  { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
];

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          title: formData.get('title') as string,
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          message: formData.get('message') as string,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-700/10 blur-[150px]" />
      <div className="container-narrow relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Have a role, a project, or just want to say hi? My inbox is always open."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-5">
          {/* info column */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {contactItems.map((item, i) => {
                const Wrapper = item.href ? 'a' : 'div';
                return (
                  <Wrapper
                    key={item.label}
                    {...(item.href
                      ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="reveal card card-hover group flex items-center gap-4 p-5"
                    style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 bg-ink-900 text-accent-400 transition-colors group-hover:border-accent-500/50 group-hover:text-accent-300">
                      <item.icon size={18} />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-ink-500">
                        {item.label}
                      </div>
                      <div className="mt-0.5 text-sm font-medium text-ink-100">
                        {item.value}
                      </div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            <div className="reveal mt-4 flex gap-3" style={{ ['--reveal-delay' as string]: '240ms' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 bg-ink-900 text-ink-300 transition-all hover:-translate-y-0.5 hover:border-accent-500/50 hover:text-accent-300"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* form */}
          <form
            onSubmit={handleSubmit}
            className="reveal card lg:col-span-3 p-6 sm:p-7"
            style={{ ['--reveal-delay' as string]: '120ms' }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" type="text" />
              <Field label="Email" name="email" placeholder="you@email.com" type="email" />
            </div>
            <div className="mt-5">
              <Field label="Title" name="title" placeholder="What's this about?" type="text" />
            </div>
            <div className="mt-5">
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-400">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about it..."
                className="w-full resize-none rounded-xl border border-ink-700 bg-ink-950/60 px-4 py-3 text-sm text-ink-100 placeholder-ink-500 outline-none transition-colors focus:border-accent-500/60 focus:ring-2 focus:ring-accent-500/20"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-400 hover:shadow-[0_0_36px_-8px_rgba(34,205,242,0.6)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 size={16} />
                  Message sent successfully!
                </>
              ) : status === 'error' ? (
                <>
                  <AlertCircle size={16} />
                  Failed to send — try again
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type,
}: {
  label: string;
  name: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-400">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-700 bg-ink-950/60 px-4 py-3 text-sm text-ink-100 placeholder-ink-500 outline-none transition-colors focus:border-accent-500/60 focus:ring-2 focus:ring-accent-500/20"
      />
    </div>
  );
}
