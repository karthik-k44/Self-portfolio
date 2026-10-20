import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/frontend/components/button/Button';
import { Card } from '@/frontend/components/card/Card';
import { profile } from '@/frontend/config/profile';

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
];

const socials = [
  { icon: Github, label: 'GitHub', href: profile.github },
  { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
];

export default function ContactDetails() {
  return (
    <div className="lg:col-span-2">
      <div className="space-y-4">
        {contactItems.map((item, i) => {
          const body = (
            <>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 bg-ink-900 text-accent-400 transition-colors group-hover:border-accent-500/50 group-hover:text-accent-300">
                <item.icon size={18} />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-ink-500">{item.label}</div>
                <div className="mt-0.5 text-sm font-medium text-ink-100">{item.value}</div>
              </div>
            </>
          );
          return (
            <Card
              key={item.label}
              className="reveal card-hover group"
              style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5"
                >
                  {body}
                </a>
              ) : (
                <div className="flex items-center gap-4 p-5">{body}</div>
              )}
            </Card>
          );
        })}
      </div>

      <div className="reveal mt-4 flex gap-3" style={{ ['--reveal-delay' as string]: '240ms' }}>
        {socials.map((s) => (
          <Button
            key={s.label}
            variant="outline"
            size="icon"
            asChild
            className="h-11 w-11 rounded-xl text-ink-300 hover:-translate-y-0.5 hover:text-accent-300"
          >
            <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <s.icon size={18} />
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
